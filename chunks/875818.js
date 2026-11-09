n.d(t, { A: () => f8 });
var l,
    r,
    i = n(477900),
    a = n(582128),
    s = n.t(a, 2),
    u = n(503698),
    o = n.n(u),
    c = n(855986),
    d = n(821609),
    m = n(478016),
    f = n(22231),
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
function em(e) {
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
var ef = n(939398),
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
    let m = P.intl.string(T.default.I2ucou);
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
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, i.jsx)(eA.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = ed(e);
                        return (0, i.jsx)(
                            eA.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: em(e),
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
                            children: em(n),
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
    eO = n(753329),
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
        m = [o, l?.guild_id, t].map((e) => u.find((t) => t.id === e)).find((e) => null != e) ?? u[0] ?? null,
        f =
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
            if (null == m) return { shared: !1, error: t };
            (g(!0), x(null));
            let n = (0, eQ.v)(e, 3e4);
            try {
                await (0, eR.fh)(e, m.id);
            } catch (r) {
                n.cancel();
                let e = r?.body?.message,
                    l = "string" == typeof e ? e : t;
                return (x(l), g(!1), { shared: !1, error: l });
            }
            let l =
                (await n.published) &&
                (await (async function (e) {
                    let t = Date.now() + 5e3;
                    for (; !e1(e) && Date.now() < t;) await new Promise((e) => setTimeout(e, 250));
                    return e1(e);
                })(e));
            return (g(!1), { shared: !0, testAppReady: l });
        }, [m, e]),
        b = a.useCallback(async () => {
            if (null != n && null != m)
                try {
                    await (0, eK.FZ)(e, "share", { platform: n.platform, guildId: m.id });
                } catch {}
        }, [m, e, n]);
    return {
        available: s && r && u.length > 0,
        guilds: u,
        guild: m,
        pickGuild: v,
        blockedReason: f,
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
    e4 = n(430392),
    e5 = n(127062),
    e7 = n(177953),
    e8 = n(886282);
function e9(e) {
    let { projectId: t, guildId: n, publishOptions: l, transitionState: r, onClose: s } = e,
        u = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(t)?.name ?? "", [t]),
        o = e0(t, n, l),
        { guilds: d, guild: m, blockedReason: f, sharing: h, error: g } = o,
        p = a.useMemo(() => d.map((e) => ({ id: e.id, value: e.id, label: e.name })), [d]),
        x = a.useRef(!1);
    return (
        a.useEffect(
            () => (
                (x.current = !1),
                () => {
                    x.current = !0;
                }
            ),
            [],
        ),
        (0, i.jsx)(e2.a, {
            transitionState: r,
            onClose: s,
            title: P.intl.formatToPlainString(T.default.N3Ryqz, { app: u }),
            size: "sm",
            notice:
                null != g
                    ? { type: "critical", message: g, role: "alert" }
                    : null != f
                      ? { type: "warning", message: f, role: "status" }
                      : void 0,
            actions: [
                { text: P.intl.string(P.t["ETE/oC"]), variant: "secondary", onClick: s, disabled: h },
                {
                    text: P.intl.string(T.default["+ysSG7"]),
                    variant: "primary",
                    onClick: async function () {
                        let e = await o.share();
                        e.shared &&
                            !x.current &&
                            (s(),
                            e.testAppReady
                                ? await o.publish()
                                : (0, _.P0)({
                                      text: P.intl.formatToPlainString(T.default.o2xHEb, { server: m?.name ?? "" }),
                                      variant: "success",
                                  }));
                    },
                    loading: h,
                    disabled: null == m || h || null != f,
                },
            ],
            children: (0, i.jsxs)(j.B, {
                gap: 16,
                children: [
                    null != m && p.length > 1
                        ? (0, i.jsx)(e3.l, {
                              label: P.intl.string(T.default.Uq5hU9),
                              options: p,
                              value: m.id,
                              onSelectionChange: o.pickGuild,
                              selectionMode: "single",
                              disabled: h,
                              fullWidth: !0,
                          })
                        : null,
                    (0, i.jsxs)(j.B, {
                        gap: 8,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                children: P.intl.string(T.default["kG/2e8"]),
                            }),
                            (0, i.jsxs)("div", {
                                className: e8.a,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: e8.n,
                                        children: [
                                            (0, i.jsx)(e4.RobotIcon, {
                                                size: "sm",
                                                color: "currentColor",
                                                "aria-hidden": !0,
                                            }),
                                            (0, i.jsx)(v.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                children: P.intl.string(T.default.eSpjGV),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: e8.n,
                                        children: [
                                            (0, i.jsx)(e5.BeakerIcon, {
                                                size: "sm",
                                                color: "currentColor",
                                                "aria-hidden": !0,
                                            }),
                                            (0, i.jsx)(v.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                children: P.intl.string(T.default["+5f47F"]),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: e8.n,
                                        children: [
                                            (0, i.jsx)(e7.GroupIcon, {
                                                size: "sm",
                                                color: "currentColor",
                                                "aria-hidden": !0,
                                            }),
                                            (0, i.jsx)(v.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                children: P.intl.string(T.default["s3/5nF"]),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(T.default["6y2j3H"]),
                    }),
                ],
            }),
        })
    );
}
function e6(e) {
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
                      void (0, H.qf)((t) => (0, i.jsx)(e9, { ...t, ...e }))
                  );
              },
          })
        : null;
}
var te = n(616334),
    tt = n(405433),
    tn = n(58736);
function tl(e) {
    let { projectId: t } = e;
    return (0, c.bG)(
        [eU.A],
        () => {
            let e = eU.A.getPublishStatus(t)?.publishState;
            return null != e && (0, eY.lE)(e);
        },
        [t],
    )
        ? (0, i.jsx)(tn.Ay.Icon, {
              icon: tt.ShareIcon,
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
var tr = n(789645),
    ti = n(812771);
(n(743898), n(134528), n(947204));
var ta = n(333007),
    ts = n(621466),
    tu = n(775121),
    to = n(989145),
    tc = n(866665),
    td = n(81369),
    tm = n(826745),
    tf = n(34595),
    th = n(470779);
function tg(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: u,
            onSubmit: c,
            onDismiss: d,
            canSubmit: m,
            closing: f,
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
        } = (0, tf.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        A = a.useRef(null),
        C = (m || j.length > 0) && w && !f,
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
        className: o()(th.M0, { [th.ho]: I && !f, [th.ET]: f }),
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
                              className: th.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, i.jsx)(tc.m, {
                              position: "bottom",
                              text: P.intl.string(T.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, i.jsx)("button", {
                                  type: "button",
                                  className: th.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": P.intl.string(T.default.lgvqSB),
                                  children: (0, i.jsx)(td.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: th.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, i.jsx)(tm.y, {
                autoFocus: !0,
                rows: 1,
                className: th.hF,
                value: s,
                placeholder: x ?? ("" === r ? P.intl.string(T.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? P.intl.string(T.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: f || !p ? void 0 : y,
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
                      className: th.ZO,
                      children: j.map((e) => (0, i.jsx)(tf.Nl, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function tp(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function tx(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function tv(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = a.useState(() => (t ? tp(e()) : null));
    return (
        a.useEffect(() => {
            if (!t) return;
            function n() {
                let t = tp(e());
                l((e) => (tx(e, t) ? e : t));
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
var tj = n(46676),
    tb = n(876798),
    ty = n(408278),
    tk = n(48507),
    tw = n(193885),
    tS = n(744898),
    tA = n(803656),
    tC = n(241326),
    tN = n(972213),
    tI = n(646514);
function tE(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function t_(e, t, n) {
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
let tM = t_("red", tE(tI.A.unsafe_rawColors.RED_400), () => P.intl.string(T.default.tvXfjt)),
    tR = [
        tM,
        t_("yellow", tE(tI.A.unsafe_rawColors.YELLOW_300), () => P.intl.string(T.default.FYuaJ1)),
        t_("green", tE(tI.A.unsafe_rawColors.GREEN_360), () => P.intl.string(T.default["Vv+paS"])),
        t_("blue", tE(tI.A.unsafe_rawColors.BLUE_345), () => P.intl.string(T.default.k9b1QJ)),
        t_("white", tE(tI.A.unsafe_rawColors.WHITE), () => P.intl.string(T.default["1sOXwH"])),
    ];
function tT(e) {
    return tR.find((t) => t.id === e) ?? tM;
}
var tP = n(39416);
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
            d: "M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinecap: "round",
            strokeLinejoin: "round",
        }),
    });
}
function t$(e) {
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
function tq(e) {
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
function tD(e) {
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
let tF = I.ck.map((e) => tD(Math.min(16, e + 3))),
    tO = I.Cw.map((e) => tD(Math.min(16, e / 2.5))),
    tG = [T.default.jZtZUr, T.default.cTQdD0, T.default.J3ucEg],
    tz = {
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
function tU(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, i.jsx)(tc.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)("span", {
            className: tP.z6,
            "data-active": l ? "" : void 0,
            children: (0, i.jsx)(tb.k, {
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
function tB(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, i.jsx)(tc.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)(ty.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function tK(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, u] = a.useState(!1),
        o = a.useCallback(() => u(!1), []),
        c = a.useCallback(() => u((e) => !e), []);
    return (0, i.jsxs)("div", {
        className: tP.pr,
        onMouseEnter: () => u(!0),
        onMouseLeave: o,
        children: [
            n(c),
            s
                ? (0, i.jsx)("div", {
                      className: tP.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(o),
                  })
                : null,
        ],
    });
}
function tH(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: a, onClear: s } = e,
        { tool: u, lastShape: o, markerSize: c, eraserSize: d, history: m } = n,
        f = tT(n.colorId);
    function h(e) {
        return (0, I.rC)(t, e);
    }
    let g = tz[o],
        p = P.intl.string(T.default.hUm825),
        x = P.intl.string(T.default.n5IA3a),
        v = P.intl.string(T.default.r5dX6t),
        j = P.intl.string(T.default.VfYqDq);
    return (0, i.jsxs)("div", {
        className: tP.t$,
        children: [
            (0, i.jsx)("div", {
                className: tP.NT,
                children: (0, i.jsx)(tU, {
                    icon: t$,
                    label: P.intl.string(T.default.YtyKcM),
                    pressed: "pick" === u,
                    onClick: () => h("pick"),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tP.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": P.intl.string(T.default["0IAEFf"]),
                children: [
                    (0, i.jsx)(tU, {
                        icon: tL,
                        label: P.intl.string(T.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => h("move"),
                    }),
                    (0, i.jsx)(tU, {
                        icon: tk.LettersIcon,
                        label: P.intl.string(T.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => h("text"),
                    }),
                    (0, i.jsx)(tK, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(tU, {
                                icon: tw.PaintbrushThinIcon,
                                label: p,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (h("marker"), e());
                                },
                            }),
                        children: (e) =>
                            tF.map((n, l) =>
                                (0, i.jsx)(
                                    tU,
                                    {
                                        icon: n,
                                        label: P.intl.string(tG[l]),
                                        pressed: "marker" === u && c === l,
                                        onClick: () => {
                                            ((0, I.KZ)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(tK, {
                        label: v,
                        direction: "row",
                        trigger: (e) =>
                            (0, i.jsx)(tU, {
                                icon: g.icon,
                                label: v,
                                pressed: "circle" === u || "square" === u,
                                onClick: () => {
                                    (h(o), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(tz).map((t) =>
                                (0, i.jsx)(
                                    tU,
                                    {
                                        icon: tz[t].icon,
                                        label: tz[t].label(),
                                        pressed: u === t,
                                        onClick: () => {
                                            (h(t), e());
                                        },
                                    },
                                    t,
                                ),
                            ),
                    }),
                    (0, i.jsx)(tK, {
                        label: x,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(tU, {
                                icon: tq,
                                label: x,
                                pressed: "eraser" === u,
                                onClick: () => {
                                    (h("eraser"), e());
                                },
                            }),
                        children: (e) =>
                            tO.map((n, l) =>
                                (0, i.jsx)(
                                    tU,
                                    {
                                        icon: n,
                                        label: P.intl.string(tG[l]),
                                        pressed: "eraser" === u && d === l,
                                        onClick: () => {
                                            ((0, I._A)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(tK, {
                        label: j,
                        direction: "row",
                        trigger: (e) => (0, i.jsx)(tB, { icon: f.icon, label: j, onClick: e }),
                        children: (e) =>
                            tR.map((n) =>
                                (0, i.jsx)(
                                    tU,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            ((0, I.Yx)(t, n.id), e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, i.jsx)("div", { className: tP.Gz, role: "separator" }),
                    (0, i.jsx)(tB, {
                        icon: tS.UndoIcon,
                        label: P.intl.string((0, N.cX)() ? T.default["j/XmBQ"] : T.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, i.jsx)(tB, {
                        icon: tA.RedoIcon,
                        label: P.intl.string((0, N.cX)() ? T.default.C7jhpn : T.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: a,
                    }),
                    (0, i.jsx)(tB, {
                        icon: tC.TrashIcon,
                        label: P.intl.string(T.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, i.jsx)("div", { className: tP.Gz, role: "separator" }),
                    (0, i.jsx)(tB, { icon: tN.XLargeIcon, label: P.intl.string(T.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let tV = tI.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    tW = tI.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    tX = tI.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function tQ(e, t, n) {
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
                    (e.strokeStyle = tX),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function tZ(e) {
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
let tY = { dx: 0, dy: 0 },
    tJ = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    t0 = 1;
function t1(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        u = (0, I.d5)(s),
        { active: o } = (0, z.rt)(s),
        c = (0, H.Rv)(),
        [d, m] = a.useState(!1);
    a.useEffect(() => {
        if (null != s)
            return () => {
                (0, I.K7)(s)?.active === !0 && (0, I.It)(s);
            };
    }, [s]);
    let f = u?.active === !0 && "pick" === u.tool;
    a.useEffect(() => {
        null != s && f && !o && (0, z.w4)(s);
    }, [s, f, o]);
    let h = a.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, e_.wn)(e);
        if (null != t) return t;
        function n() {
            m(!1);
        }
        (0, ta.flushSync)(() => m(!0));
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
        : (0, i.jsx)(t2, { projectId: s, state: u, capturing: d, resolveIframe: r });
}
function t2(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = tv(r),
        [u, o] = a.useState(null),
        [c, d] = a.useState(0),
        [m, f] = a.useState(null),
        [h, g] = a.useState(tY),
        p = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        j = a.useRef(null),
        b = a.useRef(null),
        { tool: y, history: k } = n,
        w = tT(n.colorId),
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
                                  i(n, `fill="none" stroke="${tW}" stroke-width="4"`),
                                  i(n, `fill="none" stroke="${tV}" stroke-width="2"`),
                                  i(3, `fill="${t ?? tV}" stroke="${tW}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(a)}") ${r} ${r}, crosshair`;
                      })(A, C),
            [A, C],
        ),
        E = "move" === y ? (k.present.find((e) => e.id === m) ?? null) : null,
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
            a = null == i ? k.present : k.present.map((e) => (e.id === i.id ? (0, tj.y)(e, h.dx, h.dy) : e)),
            u = v.current;
        tQ(r, null == u ? a : [...a, u], { width: s.width, height: s.height });
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
                id: `mark-${t0++}`,
                kind: "text",
                color: w.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            ((0, tj.oy)(n, s) && (0, I.tD)(t, { type: "commit", shape: n }), o(null), (0, I.QP)(t));
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
                            l = null == E ? null : (0, tj.k_)(E, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? E
                                    : (0, tj.WF)(k.present, t, s, 6);
                        if ((f(r?.id ?? null), null == r)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (j.current = { id: r.id, origin: t }));
                        return;
                    }
                    case "text":
                        o({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!(0, tj.jG)(k.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${t0++}`,
                                kind: "erase",
                                width: I.Cw[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${t0++}`,
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
                                id: `mark-${t0++}`,
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
                ((j.current = null), g(tY), (0, I.tD)(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && (0, tj.oy)(n, s)
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
                    (0, ts.Cw)((0, ts.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), null != l ? f(null) : r());
                    return;
                }
                if (("Delete" === e.key || "Backspace" === e.key) && null != l) {
                    (e.preventDefault(), (0, I.tD)(t, { type: "remove", id: l.id }), f(null));
                    return;
                }
                if (e.shiftKey) return;
                let u = tJ[s];
                null != u && (e.preventDefault(), (0, I.rC)(t, u));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        a.useEffect(() => {
            if (S) return (tu.A.disable(), () => tu.A.enable());
        }, [S]),
        null == s)
    )
        return null;
    let K = Math.max(8, s.left - c - 8),
        H = null == E ? null : (0, tj.k_)(null == j.current ? E : (0, tj.y)(E, h.dx, h.dy), s);
    return (0, ta.createPortal)(
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", {
                    className: tP.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: tP.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, i.jsx)("canvas", {
                            ref: p,
                            className: tP.Ji,
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
                                  className: tP.r1,
                                  style: { left: H.x, top: H.y, width: H.width, height: H.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, i.jsx)("span", { className: tP.p$, "data-corner": "nw" }),
                                      (0, i.jsx)("span", { className: tP.p$, "data-corner": "ne" }),
                                      (0, i.jsx)("span", { className: tP.p$, "data-corner": "sw" }),
                                      (0, i.jsx)("span", { className: tP.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == u
                    ? null
                    : (0, i.jsx)(tg, {
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
                          onUploadFile: (e) => (0, to.vX)(t, e),
                          onDismiss: $,
                          canSubmit: "" !== u.value.trim(),
                          closing: !1,
                      }),
                (0, i.jsx)("div", {
                    ref: x,
                    className: tP.ej,
                    style: { left: K, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, i.jsx)(tH, { projectId: t, state: n, onExit: O, onUndo: G, onRedo: z, onClear: U }),
                }),
            ],
        }),
        document.body,
    );
}
var t3 = n(308081),
    t4 = n(516521),
    t5 = n(683071),
    t7 = n(65593),
    t8 = n(218394),
    t9 = n(115982),
    t6 = n(886540);
function ne(e) {
    return !(0, t6.BL)(e) && !0 !== e.stopRequested;
}
var nt = n(104317),
    nn = n(939249),
    nl = n(643278),
    nr = n(566424),
    ni = n(683063),
    na = n(140735),
    ns = n(320448),
    nu = n(138212);
function no(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: a, ...s } = e;
    return (0, i.jsxs)("section", {
        className: o()(nu.Nr, r),
        ...s,
        children: [
            (0, i.jsxs)("header", {
                className: o()(nu.wx, null != n && nu.o5, a),
                children: [
                    (0, i.jsx)(v.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var nc = n(148590);
function nd(e) {
    let { children: t } = e;
    return (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nm(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: u,
            beforeBody: c,
            children: d,
            ...m
        } = e,
        f = a.useId(),
        [h, g] = a.useState(!l),
        [p, x] = a.useState(l);
    p !== l && (x(l), g(!l));
    let v = a.useCallback(() => g((e) => !e), []),
        j = h ? eN.ChevronSmallDownIcon : ns.ChevronSmallRightIcon,
        b = null != n || l;
    return (0, i.jsxs)(no, {
        ...m,
        title: t,
        trailing: b
            ? (0, i.jsxs)("span", {
                  className: nc.ZY,
                  children: [
                      n,
                      l
                          ? (0, i.jsx)(nn.D, {
                                className: nc.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": f,
                                "aria-label": h ? s : r,
                                children: (0, i.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : nc.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, i.jsx)("div", { id: f, className: o()(nc.rf, u), hidden: !h, children: d })],
    });
}
n(321073);
var nf = n(883646);
let nh = [];
function ng(e) {
    let { status: t } = e;
    return (0, i.jsxs)("span", {
        className: o()(nf.xL, {
            [nf.Vb]: "in_progress" === t,
            [nf.cT]: "completed" === t,
            [nf.GZ]: "unfinished" === t,
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
                className: nf.Qd,
                itemClassName: nf.xB,
                "aria-hidden": !0,
            }),
            (0, i.jsx)("svg", {
                className: nf.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, i.jsx)("path", { className: nf.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function np(e) {
    let { agents: t, active: n } = e,
        l = a.useMemo(() => (n ? t : nh), [n, t]),
        r = a.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [u, o] = a.useState(l),
        [c, d] = a.useState(s),
        [m, f] = a.useState(!1);
    c !== s && (d(s), o([...l, ...u.filter((e) => !r.has(e.key))]), 0 === l.length && f(!1));
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
                    e = requestAnimationFrame(() => f(!0));
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
        className: nf.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: a } = e,
                    { Illocon: s } = n;
                return (0, i.jsx)(
                    ni.u,
                    {
                        asset: (0, i.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: a,
                        position: "top",
                        children: (0, i.jsx)("span", {
                            className: nf.MA,
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
                      className: nf.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function nx(e) {
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
            ((t = (r ?? nh).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? nh),
                [t],
            ));
    return (0, i.jsxs)("ul", {
        className: nf.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, i.jsxs)(
                    "li",
                    {
                        className: o()(nf.AS, { [nf.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, i.jsx)(ng, { status: n }),
                            (0, i.jsx)(v.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: nf.iV,
                                selectable: !0,
                                children: (0, i.jsx)("span", {
                                    className: nf.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, i.jsx)(np, { agents: c.get(e.id) ?? nh, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, i.jsxs)("li", {
                      className: nf.AS,
                      "data-provisional": !0,
                      children: [
                          (0, i.jsx)(ng, { status: "pending" }),
                          (0, i.jsx)(v.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: nf.iV,
                              selectable: !0,
                              children: (0, i.jsx)("span", { className: nf.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nv(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: a = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = P.intl.formatToPlainString(T.default["P/I+JW"], { completed: u, total: o }),
        d = P.intl.formatToPlainString(T.default["7tzwKB"], { completed: u, total: o });
    return (0, i.jsx)(nm, {
        title: P.intl.string(T.default.RtzECX),
        meta: (0, i.jsx)(nd, { children: c }),
        superseded: s,
        showLabel: P.intl.string(T.default.RKyN9q),
        hideLabel: P.intl.string(T.default.xydHoj),
        className: nf.Nr,
        bodyClassName: nf.rf,
        beforeBody: r && !s ? (0, i.jsx)(na.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, i.jsx)(nx, { todos: t, provisional: n, agents: l, live: a }),
    });
}
var nj = n(308665),
    nb = n(59678),
    ny = n(903847);
function nk(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        d = null != n,
        [m, f] = a.useState(n ?? "top"),
        [h, g] = a.useState(d),
        [p, x] = a.useState(!1),
        [v, j] = a.useState(!1),
        [b, y] = a.useState(d);
    (b !== d && (y(d), null != n ? (f(n), g(!0)) : (x(!1), j(!1))),
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
              className: ny.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, i.jsxs)("div", {
                      className: o()(ny.vK, { [ny.ho]: p && d, [ny.ET]: !d }),
                      children: [
                          null == c
                              ? (0, i.jsx)("ol", {
                                    className: o()(ny.Rk, nb.pj),
                                    "data-live": "true",
                                    children: (0, i.jsx)(nr.A, {
                                        glyph: (0, i.jsx)(nj.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, i.jsx)(nn.D, {
                                    className: ny.pZ,
                                    onClick: c,
                                    "aria-label": P.intl.string(T.default.hEK6qu),
                                    children: (0, i.jsx)("ol", {
                                        className: o()(ny.Rk, nb.pj),
                                        "data-live": "true",
                                        children: (0, i.jsx)(nr.A, {
                                            glyph: (0, i.jsx)(nj.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, i.jsx)(tc.m, {
                                    text: P.intl.string(T.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, i.jsx)(nn.D, {
                                        className: ny.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": P.intl.string(T.default.RtzECX),
                                        children: (0, i.jsx)(nl.ClipboardListIcon, {
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
                            className: o()(ny.vB, { [ny.pg]: v && S, [ny.ui]: !v }),
                            children: (0, i.jsx)(nv, {
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
var nw = n(839214),
    nS = n(78564);
let nA = new Map(),
    nC = (0, nw.D)(() => ({ byMessageKey: {} }));
function nN(e, t) {
    let { [e]: n, ...l } = nC.getState().byMessageKey;
    nC.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var nI = n(195880),
    nE = n(287111);
function n_(e) {
    let t = (0, eZ.qh)("ConjureClarificationProjectPicker");
    return a.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var nM = n(736553),
    nR = n(382541),
    nT = n(890497),
    nP = n(103557),
    nL = n(29073),
    n$ = n(590077);
function nq(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        u = (function (e, t, n, l, r) {
            let i = n_(e),
                [s, u] = a.useState(null),
                [o, c] = a.useState([]),
                [d, m] = a.useState(t.prompt),
                [f, h] = a.useState(!1),
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
                C = n && !f && (w.length > 0 ? "" !== A : o.length > 0),
                N = a.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, nE.RQ)(
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
                                    ((t = { content: l, nonce: (0, nI.m)() }), x.current.set(e.projectId, t)),
                                (async function (e, t, n) {
                                    let l,
                                        { ticket: r, baseUrl: i } = await (0, nR.dv)(e),
                                        a = new nM.u();
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
                    ((v.current = !0), o.length > 0 && !f && N(o), l());
                }, [N, o, l, f]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: S,
                prompt: d,
                setPrompt: m,
                sending: f,
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
        m = `${n.id}-heading`;
    return (0, i.jsxs)("section", {
        className: o()(nL.nd, nL.jx),
        "aria-labelledby": m,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, i.jsxs)("div", {
                className: nL.wx,
                children: [
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        id: m,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: nL.TK,
                        children: n.summary,
                    }),
                    (0, i.jsx)(ty.K, {
                        icon: tr.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: u.dismiss,
                        "aria-label": P.intl.string(T.default.KQUuAZ),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: n$.r,
                children: [
                    0 === c.length
                        ? (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: P.intl.string(T.default.TbbzW5),
                          })
                        : (0, i.jsx)(nT.Z, {
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
                    (0, i.jsx)(nP.f, {
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
                className: nL.qr,
                children: (0, i.jsx)("div", {
                    className: nL.zt,
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
var nD = n(47167),
    nF = n(734057),
    nO = n(994500),
    nG = n(287809),
    nz = n(360047);
function nU(e) {
    return 0 === e.options.length && null == e.input;
}
function nB(e, t, n) {
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
function nK(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function nH(e, t, n, l) {
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
let nV = {
    [eb.rbe.GUILD_TEXT]: "text",
    [eb.rbe.GUILD_VOICE]: "voice",
    [eb.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [eb.rbe.GUILD_STAGE_VOICE]: "stage",
    [eb.rbe.GUILD_FORUM]: "forum",
    [eb.rbe.GUILD_MEDIA]: "media",
};
function nW(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = nF.A.getChannel(t)?.type) ? void 0 : nV[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = nG.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let nX = { channel: "#", role: "@", user: "@", project: "", server: "" },
    nQ = {
        channel: [T.default["9+dfPT"], T.default.pGSJqE],
        role: [T.default["2VkCoD"], T.default.c8YlX8],
        user: [T.default.GZIAxl, T.default["4bptbQ"]],
        project: [T.default.twlOb6, T.default.twlOb6],
        server: [T.default.ZWXDeI, T.default.ZWXDeI],
    };
function nZ(e, t) {
    return P.intl.string(nQ[e][+!!t]);
}
var nY = n(658675),
    nJ = n(123292),
    n0 = n(900797);
function n1(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: u } = e,
        o = a.useMemo(() => nz.Hi.map((e) => ({ id: e, value: e, label: (0, nz.hU)(e) })), []);
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
var n2 = n(344587),
    n3 = n(155078);
function n4(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let n5 = [];
function n7(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? P.intl.string(T.default.ZZ641e)
          : P.intl.string(1 === e.options.length ? T.default["2g3gk9"] : T.default.dkzChE);
}
function n8(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function n9(e, t) {
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
var n6 = n(682163),
    le = n(300344),
    lt = n(614733),
    ln = n(904363),
    ll = n(950902),
    lr = n(136722),
    li = n(778858),
    la = n(808728),
    ls = n(696451),
    lu = n(71393),
    lo = n(488926),
    lc = n(426035),
    ld = n(246338);
let lm = lr.kg(eb.xBc.VIEW_CHANNEL, eb.xBc.SEND_MESSAGES);
var lf = n(384017);
function lh(e) {
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
            matchSorterOptions: m,
        } = e,
        f = !0 === n.multi_select,
        h = l.map((e) => e.id);
    function g(e) {
        return nW(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
    }
    let p = {
        options: o,
        placeholder: c,
        disabled: r,
        onQueryChange: d,
        matchSorterOptions: m,
        onFocus: s,
        onBlur: u,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, i.jsx)("div", {
        className: lf.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, i.jsx)(nT.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => a(g(e), t),
              })
            : (0, i.jsx)(nT.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => a(null == e ? [] : g([e]), t),
              }),
    });
}
function lg(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, le.A)(n, r.question.channel_filter);
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
                        return null == e ? null : (0, lc.ug)(e);
                    },
                    [l, t],
                )),
                a.useEffect(() => {
                    null == r || null == n || ls.Ay.isMember(r, n) || li.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [la.A, ls.Ay, lu.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = lu.A.getGuild(r)?.safetyAlertsChannelId,
                            l = la.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let a = (0, ld.Lp)(l, i.channel_filter).find((t) => t.id === e);
                        if (null == a) return null;
                        if (null != n && ls.Ay.isMember(r, n))
                            return lo.$3({ permission: lm, user: n, context: a }) ? a : null;
                        let s = a.permissionOverwrites[r]?.deny ?? lr.BY;
                        return lr.X8(s, lm) ? null : a;
                    },
                    [r, n, t, i.channel_filter],
                )),
            m = a.useRef(null),
            f = a.useRef(!1);
        a.useEffect(() => {
            if (!f.current && !u && null != r) {
                if (null == m.current) {
                    if (s.length > 0) f.current = !0;
                    else if (null != d) {
                        var e;
                        ((m.current = d.id),
                            o(((e = []), nW("channel", [d.id], () => (0, nD.m1)(d, nG.default, nO.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== m.current ? (f.current = !0) : null == d && ((f.current = !0), o([], r));
            }
        }, [d, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, i.jsx)(lh, { ...r, guildId: n, options: s, placeholder: nZ("channel", !0 === r.question.multi_select) });
}
function lp(e) {
    let { guildId: t, ...n } = e,
        l = (0, ln.A)(t);
    return (0, i.jsx)(lh, { ...n, guildId: t, options: l, placeholder: nZ("role", !0 === n.question.multi_select) });
}
function lx(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: a } = (0, lt.A)(t);
    return (0, i.jsx)(lh, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: a,
        placeholder: nZ("user", !0 === n.question.multi_select),
    });
}
function lv(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = n_(t),
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
    return 0 === s.length ? n : (0, i.jsx)(lh, { ...l, options: s, placeholder: nZ("project", !1) });
}
function lj(e) {
    let t = e.target;
    (0, ts.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lb(e) {
    let { fallback: t, ...n } = e,
        l = (0, eZ.z9)("ConjureClarificationEntityPicker"),
        r = a.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, i.jsx)(n6.Ay, { guild: e, size: n6.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, i.jsx)("div", {
              onFocus: lj,
              onMouseUp: lj,
              children: (0, i.jsx)(lh, { ...n, options: r, placeholder: nZ("server", !1) }),
          });
}
function ly(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, ll.Tj)(t, !0);
    if ("project" === l.question.input) return (0, i.jsx)(lv, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, i.jsx)(lb, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, i.jsx)(lg, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, i.jsx)(lp, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, i.jsx)(lx, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lk = n(87221),
    lw = n(771871),
    lS = n(26430),
    lA = n(750943),
    lC = n(173936),
    lN = n(95477),
    lI = n(256905),
    lE = n(490707),
    l_ = n(907702);
function lM(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: u, handleError: c } = (0, lE._)(t, n),
        [d, m] = a.useState(null),
        f = null != s && d === s;
    return u
        ? (0, i.jsxs)("span", {
              className: o()(l_.Gt, l_.b6),
              children: [
                  (0, i.jsx)(lk.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, i.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: P.intl.string(T.default.lhgD88),
                  }),
              ],
          })
        : (0, i.jsx)("span", {
              className: o()(l_.Gt, { [l_.iP]: !f }),
              children:
                  null != s
                      ? (0, i.jsx)("img", {
                            src: s,
                            alt: l,
                            className: l_.Sl,
                            onLoad: (e) => {
                                m(s);
                                let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
                                t > 0 && n > 0 && r({ width: t, height: n });
                            },
                            onError: c,
                            draggable: !1,
                        })
                      : null,
          });
}
function lR(e) {
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
            onPick: m,
            onView: f,
            onArrow: h,
            onMeasured: g,
            onRemove: p,
        } = e,
        x = P.intl.formatToPlainString(T.default.JGjZMs, { answer: r.label });
    return (0, i.jsxs)("div", {
        className: o()(l_.Vs, { [l_.Q9]: s, [l_.RX]: u }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, i.jsxs)(nn.D, {
                className: o()(l_.Up, { [l_.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: u ? (null != r.image ? () => f(r) : void 0) : () => m(r),
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
                        className: l_.$_,
                        children: [
                            null != r.image
                                ? (0, i.jsx)(lM, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, i.jsx)("span", { className: l_.Gt }),
                            (0, i.jsx)("span", {
                                className: l_.q3,
                                "aria-hidden": !0,
                                children: a
                                    ? (0, i.jsx)(nY.P, { checked: s, disabled: u })
                                    : (0, i.jsx)(lw.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: l_.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, n3.E)(t) : "")
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
                      className: l_.B4,
                      children: (0, i.jsx)(tc.m, {
                          text: P.intl.string(T.default.HQEXJM),
                          children: (0, i.jsx)(ty.K, {
                              icon: tC.TrashIcon,
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
                        className: l_.B4,
                        children: (0, i.jsx)(tc.m, {
                            text: P.intl.string(T.default["4/eeDD"]),
                            children: (0, i.jsx)(ty.K, {
                                icon: lS.MaximizeIcon,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => f(r),
                                "aria-label": x,
                                tabIndex: c && d ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function lT(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: u, own: c } = e,
        d = !0 === n.multi_select,
        { options: m } = n,
        f = m.length > 4 ? "gallery" : "row",
        h = a.useRef(null),
        g = a.useRef(new Map()),
        [p, x] = a.useState(null),
        v = null != p && m.some((e) => e.id === p) ? p : (m.find((e) => l.includes(e.id)) ?? m[0])?.id,
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
                let n = (null == j ? m : [...m, j]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, to.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, lI.R)({
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
            [m, j, t],
        ),
        y = a.useCallback(
            (e, t) => {
                let n = (m.findIndex((t) => t.id === e.id) + t + m.length) % m.length,
                    l = m[n];
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || r || u(l));
            },
            [r, d, u, m],
        );
    return (0, i.jsxs)("div", {
        className: l_.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === m.length && null == j
                ? null
                : (0, i.jsxs)("div", {
                      ref: h,
                      className: o()(l_.fF, "gallery" === f ? l_.nV : l_.nM, { [l_.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": f,
                      "data-count": m.length,
                      children: [
                          m.map((e) =>
                              (0, i.jsx)(
                                  lR,
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
                                    lR,
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
            (0, i.jsx)(lP, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: P.intl.string(/\bicons?\b/i.test(n.question) ? T.default.qU4WN6 : T.default.cbMDDB),
            }),
        ],
    });
}
function lP(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        u = a.useRef(null),
        [o, c] = a.useState(!1),
        [m, f] = a.useState(""),
        h = r ? 0 : -1,
        g = n.busy;
    function p() {
        "" !== m.trim() &&
            null == g &&
            n.onLink(m.trim()).then(
                (e) => {
                    e && (c(!1), f(""));
                },
                () => void 0,
            );
    }
    return (0, i.jsxs)("div", {
        className: l_.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, i.jsxs)("div", {
                className: l_.QJ,
                children: [
                    (0, i.jsx)(d.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lA.ImagePlusIcon,
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
                              icon: lC.LinkIcon,
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
                        className: l_.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, nE.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            o
                ? (0, i.jsxs)("div", {
                      className: l_.vG,
                      children: [
                          (0, i.jsx)("div", {
                              className: l_.Hs,
                              children: (0, i.jsx)(lN.k, {
                                  label: P.intl.string(T.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: P.intl.string(T.default.AVhvn8),
                                  value: m,
                                  onChange: (e) => f(e),
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
                              className: l_.gd,
                              children: [
                                  (0, i.jsx)(d.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: P.intl.string(T.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === m.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, i.jsx)(nJ.Q, {
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
function lL(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: u } = e,
        c = a.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, i.jsxs)(nn.D, {
        className: o()(lf.uK, { [lf.ue]: l, [lf.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": P.intl.formatToPlainString(d ? T.default["2p6UFz"] : T.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? c : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, i.jsx)("span", { className: lf.dy, children: (0, i.jsx)(nY.P, { checked: u, disabled: l }) })
                : (0, i.jsx)("span", { className: lf.Gy, "aria-hidden": !0, children: n }),
            (0, i.jsxs)("span", {
                className: lf.qO,
                children: [
                    (0, i.jsx)("span", {
                        className: lf.l8,
                        children: (0, i.jsx)(v.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: lf.ed,
                            children: t.label,
                        }),
                    }),
                    m
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
                      className: lf.rM,
                      children: P.intl.string(T.default.zku6r1),
                  })
                : null,
        ],
    });
}
function l$(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: a = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return n4(n)
        ? (0, i.jsx)(lT, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: a, onPick: s, own: u })
        : (0, i.jsx)(i.Fragment, {
              children: n.options.map((e, t) =>
                  (0, i.jsx)(
                      lL,
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
let lq = [],
    lD = [];
function lF(e) {
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
        m = !0 === n.multi_select ? P.intl.string(T.default.tE8qbz) : n7(n);
    return (0, i.jsxs)("div", {
        className: o()(lf.Ge, lf.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            null == m
                ? null
                : (0, i.jsx)(v.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: lf.aK,
                      children: m,
                  }),
            (0, i.jsx)(l$, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: n9(u, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && n4(n))
                ? null
                : (0, i.jsxs)("div", {
                      className: lf.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: lf.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(f.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, i.jsx)("span", { className: o()(lf.Pu, lf.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, i.jsx)("div", {
                      className: lf.$0,
                      children: (0, i.jsx)(nJ.Q, {
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
function lO(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: u,
            onBack: c,
            backText: m,
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
        ei = n4(Z),
        ea = er ? P.intl.string(T.default.tE8qbz) : n7(Z),
        es = er
            ? (y[Z.id] ?? lq)
            : ((t = p[Z.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : n5),
        eu = (function (e, t, n) {
            let [l, r] = a.useState({}),
                [i, s] = a.useState({}),
                [u, o] = a.useState({}),
                c = P.intl.string(T.default.wTsP5l),
                d = a.useCallback((e) => l[e] ?? null, [l]),
                m = a.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : n8(t[e.id])),
                    [t, l, u],
                ),
                f = a.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === u[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, u],
                ),
                h = a.useCallback(
                    (a, u) => {
                        let d = a.id,
                            f = !0 === a.multi_select,
                            h = l[d] ?? null;
                        if (u) return n9(h, m(a));
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
                                    null != l && (0, to.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                f ? o((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(a),
                            busy: i[d]?.busy ?? null,
                            error: i[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? o((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, to.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    o((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (f || !n8(e[d])) return e;
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
                                (0, to.gm)(e, t).then(
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
                    [c, t, l, e, m, n, i],
                );
            return { imageFor: d, selectedFor: m, multiPartFor: f, controlsFor: h };
        })(n, p, x),
        eo = eu.imageFor(Z.id),
        ec = eu.selectedFor(Z),
        { text: ed, phase: em } = (0, n2.Q)(Z.question),
        ef = ed === Z.question,
        eh = ef && et?.id === Z.id && et.truncated;
    a.useLayoutEffect(() => {
        if (null == B || ee || !ef) return;
        function e() {
            if (null == B) return;
            let e = B.scrollHeight > B.clientHeight + 1;
            en((t) => (t?.id === Z.id && t.truncated === e ? t : { id: Z.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(B), () => t.disconnect());
    }, [ef, B, Z.id, ee]);
    let eg = P.intl.string(ee ? P.t.iTcuma : P.t.dcl9MQ),
        ep = a.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        let i = nK(t, n);
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
                                              return (0, nz.Ol)(n, e, l);
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
                let t = nB(l, e, Q);
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
        eE = a.useMemo(() => (er ? nH(Z, es, el, eI(Z)) : null), [el, er, eI, Z, es]),
        e_ = w[Z.id] ?? lD,
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
                          ...e_.map((t) => (t.name.startsWith(nX[e]) ? t.name : `${nX[e]}${t.name}`)),
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
                        ? nH(Z, [t.optionId], el)
                        : nH(Z, [], el, t)
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
                          return null == nB(e, r, n) && "" === nK(e, r) ? null : r;
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
                    (0, ts.vq)(e.target, HTMLTextAreaElement) ||
                    (0, ts.vq)(e.target, HTMLInputElement) ||
                    ((!(0, ts.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
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
                      className: lf.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: lf.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(f.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, i.jsx)(tm.y, {
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
                              placeholder: P.intl.string(nU(Z) ? T.default.yLN1x6 : T.default["tOC+tn"]),
                              "aria-label": P.intl.formatToPlainString(T.default["4JeYPB"], { question: Z.question }),
                              disabled: W,
                              rows: 1,
                              className: lf.Pu,
                              "data-conjure-clarification-other": Z.id,
                          }),
                      ],
                  });
    return (0, i.jsxs)("section", {
        className: o()(lf.$O, { [lf.fI]: eF && !eG, [lf.Oh]: eG }),
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
                className: lf.rf,
                style: null == F ? void 0 : { height: F.heading + F.rows },
                "data-moving": G ? "" : void 0,
                children: [
                    (0, i.jsxs)("div", {
                        ref: U,
                        className: lf.wx,
                        children: [
                            (0, i.jsx)(v.E, {
                                ref: K,
                                tag: "span",
                                id: `${Z.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: ee ? void 0 : g,
                                className: o()(nL.TK, lf.R_, { [lf.TB]: "exit" === em, [lf.JU]: "enter" === em }),
                                children: ed,
                            }),
                            eh || ee
                                ? (0, i.jsx)("div", {
                                      className: nL.Q7,
                                      children: (0, i.jsx)(tc.m, {
                                          text: eg,
                                          children: (0, i.jsx)(ty.K, {
                                              icon: ee ? n0.ChevronSmallUpIcon : eN.ChevronSmallDownIcon,
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
                                : (0, i.jsx)(nn.D, {
                                      className: o()(nL.gb, nL.Q7),
                                      onClick: eU,
                                      "aria-label": P.intl.string(T.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, i.jsx)(tr.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: lf.Cg,
                        style: null == F ? void 0 : { insetBlockStart: F.heading },
                        children: (0, i.jsxs)("div", {
                            className: lf.I,
                            children: [
                                (0, i.jsxs)("div", {
                                    ref: H,
                                    className: lf.Ge,
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
                                                  className: lf.aK,
                                                  children: ea,
                                              }),
                                        (0, i.jsx)(l$, {
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
                                                                  ((n = t[Z.id] ?? lq),
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
                                            ? (0, i.jsx)(ly, {
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
                                                  className: lf.X_,
                                                  children: (0, i.jsx)(nJ.Q, {
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
                                                  className: lf.$y,
                                                  onFocus: eT,
                                                  onBlur: eP,
                                                  children: [
                                                      (0, i.jsx)(v.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: P.intl.string(T.default.Odrcmq),
                                                      }),
                                                      (0, i.jsx)(n1, {
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
                                                  className: lf.aK,
                                                  children: Z.note,
                                              })
                                            : null,
                                        !1 === Z.allow_custom ? null : eZ,
                                        !0 === Z.upload
                                            ? (0, i.jsx)("div", {
                                                  className: lf.$0,
                                                  children: (0, i.jsx)(nJ.Q, {
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
                                          lF,
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
            X > 1 || er || ei || null != Z.input || null != c || !0 === Z.optional || nU(Z)
                ? (0, i.jsxs)("div", {
                      className: nL.qr,
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
                              className: nL.zt,
                              children: [
                                  eS
                                      ? (0, i.jsx)(nJ.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: m ?? P.intl.string(T.default.Pk5lfA),
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
var lG = n(71637),
    lz = n(77135);
let lU = { guildId: null, channelId: null };
function lB(e) {
    let { projectId: t } = e,
        n = (0, Q.Ay)(t),
        l = n?.sourceApplicationId ?? null,
        r = a.useMemo(
            () =>
                null == l ? void 0 : { text: P.intl.string(T.default.Zlbwxc), onClick: () => (0, lz.default)(l, lU) },
            [l],
        );
    return null == n
        ? null
        : (0, i.jsx)(t5.w, { type: "info", role: "none", message: P.intl.format(T.default.PTo2Qf, {}), action: r });
}
var lK = n(557744),
    lH = n(223347),
    lV = n(894443),
    lW = n(525530),
    lX = n(513425),
    lQ = n(708679);
function lZ(e) {
    return (0, c.bG)([eP.Ay], () => eP.Ay.getProject(e)?.install_scope_setup != null, [e]);
}
let lY = "scope-setup:q0",
    lJ = `${lY}:0`,
    l0 = `${lY}:1`;
var l1 = n(715924);
let l2 = [];
function l3() {}
function l4(e) {
    let { projectId: t, card: n } = e,
        l = a.useId(),
        [r] = n.clarification.questions,
        [s, u] = a.useState(r.default_entities ?? l2),
        { onPickServer: c, onBack: m } = n,
        f = s[0]?.id;
    return (0, i.jsxs)("section", {
        className: o()(nL.nd, nL.jx),
        "aria-labelledby": l,
        "data-conjure-scope-server-card": !0,
        children: [
            (0, i.jsxs)("div", {
                className: l1.wx,
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
                className: l1.Qs,
                children: [
                    (0, i.jsx)(ly, {
                        projectId: t,
                        question: r,
                        value: s,
                        disabled: null == c,
                        onChange: u,
                        onFocus: l3,
                        onBlur: l3,
                    }),
                    null != r.note
                        ? (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: l1.qr,
                children: [
                    (0, i.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: P.intl.string(T.default.PTIP7V),
                        disabled: null == f || null == c,
                        onClick: () => {
                            null != f && c?.(f);
                        },
                    }),
                    null != m
                        ? (0, i.jsx)(nJ.Q, {
                              variant: "secondary",
                              textVariant: "body-sm/medium",
                              text: P.intl.string(P.t["ETE/oC"]),
                              onClick: m,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function l5(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let t = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(e), [e]),
                n = (0, eZ.z9)("ConjureScopeSetupCard"),
                [l, r] = a.useState(null),
                [i, s] = a.useState(!1),
                [u, o] = a.useState(null),
                d = t?.install_scope_setup,
                m = "server" === l || (null == l && "choose_server" === d),
                f = t?.guild_id,
                h = a.useMemo(() => {
                    var t;
                    return m
                        ? ((t = f ?? (0, lQ.EP)(e)),
                          {
                              id: n.length > 0 ? "server-setup" : "server-setup-empty",
                              questions: [
                                  {
                                      id: "server-setup:q0",
                                      question: P.intl.string(n.length > 0 ? T.default.ZWXDeI : T.default["u5+Qhu"]),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: n.length > 0 ? [] : [{ id: lJ, label: P.intl.string(T.default.qLYOpH) }],
                                      ...(0, lQ.XU)(n, t),
                                  },
                              ],
                          })
                        : {
                              id: "scope-setup",
                              questions: [
                                  {
                                      id: lY,
                                      question: P.intl.string(T.default.ickKBI),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: [
                                          {
                                              id: lJ,
                                              label: P.intl.string(T.default.qLYOpH),
                                              detail: P.intl.string(T.default.QSKvUE),
                                          },
                                          {
                                              id: l0,
                                              label: P.intl.string(T.default.QV5C7b),
                                              detail: P.intl.string(T.default["ZzHR4/"]),
                                          },
                                      ],
                                  },
                              ],
                          };
                }, [m, n, f, e]);
            if (null == d) return null;
            if (null == t || !(0, eP.PV)(t))
                return { clarification: (0, lQ.YI)(h), readOnly: !0, hideSubmit: !0, failure: null };
            async function g(t, n) {
                (s(!0), o(null));
                try {
                    await (0, lQ.JN)(e, t, n);
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
                          null != n && (n.option_ids.includes(l0) ? r("server") : g("user", null));
                      },
                submitText: P.intl.string(P.t["cY+Oob"]),
                onBack: m && !i ? () => r("scope") : void 0,
                hideSubmit: !1,
                serverStep: m && n.length > 0,
                onPickServer: i ? void 0 : (e) => g("guild", e),
                failure: null == u ? null : P.intl.string("server" === u ? T.default["XXKd+7"] : T.default.jNVZ3e),
            };
        })(t);
    return null == n
        ? null
        : n.readOnly
          ? (0, i.jsx)(lO, { projectId: t, clarification: n.clarification, hideSubmit: !0 })
          : (0, i.jsxs)("div", {
                children: [
                    !0 === n.serverStep
                        ? (0, i.jsx)(l4, { projectId: t, card: n }, n.clarification.id)
                        : (0, i.jsx)(
                              lO,
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
function l7(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let { projectId: t, clarification: n, offer: l, onKept: r } = e,
                { scope: i, feature: s } = l,
                u = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(t), [t]),
                o = (0, eZ.z9)("ConjureScopeSwitchCard"),
                [d, m] = a.useState(!1),
                [f, h] = a.useState(null),
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
                                ? { ...e, question: t, allow_custom: !1, ...(0, lQ.XU)(o, g) }
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
                return { clarification: (0, lQ.YI)(p), readOnly: !0, hideSubmit: !0, failure: null };
            async function x(e) {
                (m(!0), h(null));
                try {
                    await (0, lQ.yN)(t, n.id, i, e);
                } catch (e) {
                    (m(!1), h(409 === e.status ? "locked" : "failed"));
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
                          (h(null), (0, lQ.RW)(t) ? r() : h("failed"));
                      },
                backText: P.intl.string("guild" === i ? T.default["4WnIqd"] : T.default["am+p7p"]),
                hideSubmit: "user" === i,
                failure: null == f ? null : P.intl.string("locked" === f ? T.default.irUT0N : T.default.jNVZ3e),
            };
        })(e);
    return n.readOnly
        ? (0, i.jsx)(
              lO,
              { projectId: t, clarification: n.clarification, headingLines: 1, hideSubmit: !0 },
              n.clarification.id,
          )
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(
                      lO,
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
var l8 = n(564963),
    l9 = n(530557),
    l6 = n(431527),
    re = n(628284);
let rt = new Set(["select", "channel", "role", "user"]);
function rn(e, t) {
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
function rl(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
var rr = n(914250),
    ri = n(202723);
function ra(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: u, onDismiss: c } = e,
        m = a.useCallback(() => {
            (0, H.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, i.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        f = a.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: l9.KeyIcon })), [r.fields]),
        h = (0, l8.bB)(l, s),
        g = o()(ri.Lo, { [ri.jY]: h });
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
                    (0, i.jsx)(l6.C, { label: P.intl.string(T.default.HCQvpO), size: "xs", items: f }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, i.jsx)(
            "article",
            {
                className: ri.Lo,
                children: (0, i.jsx)(l6.C, { label: P.intl.string(T.default.HCQvpO), size: "xs", items: f }),
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
                        className: ri.$h,
                        children: [
                            (0, i.jsx)("span", {
                                className: ri.c9,
                                "aria-hidden": !0,
                                children: (0, i.jsx)(re.CircleCheckIcon, {
                                    size: "xs",
                                    color: tI.A.colors.ICON_FEEDBACK_POSITIVE,
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
        x = (0, i.jsx)(d.$, { variant: "primary", size: "sm", onClick: m, text: P.intl.string(T.default.EK8tKY) });
    return null != c
        ? (0, i.jsxs)("section", {
              className: o()(nL.nd, ri.fw),
              "aria-label": P.intl.string(T.default.O0QIqj),
              children: [
                  (0, i.jsxs)("div", {
                      className: nL.wx,
                      children: [
                          (0, i.jsx)(l9.KeyIcon, { size: "xs", color: tI.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: nL.TK,
                              children: P.intl.string(T.default.O0QIqj),
                          }),
                          (0, i.jsx)(nn.D, {
                              className: o()(nL.gb, nL.Q7),
                              onClick: c,
                              "aria-label": P.intl.string(T.default.Hl7rif),
                              children: (0, i.jsx)(tr.XSmallIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: ri.DQ,
                      children: [
                          (0, i.jsx)(rr.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                          (0, i.jsx)(l6.C, { label: P.intl.string(T.default.HCQvpO), size: "xs", items: f }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: nL.qr,
                      children: [
                          (0, i.jsx)(v.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: ri.xE,
                              children: P.intl.string(T.default["2OdXdn"]),
                          }),
                          (0, i.jsx)("div", { className: nL.zt, children: x }),
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)("article", {
              className: ri.Lo,
              children: [
                  (0, i.jsx)(v.E, {
                      variant: "body-xs/semibold",
                      color: null != u ? "text-brand" : "text-muted",
                      tag: "span",
                      children: P.intl.string(null != u ? T.default.O0QIqj : T.default.HCQvpO),
                  }),
                  (0, i.jsx)(rr.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                  (0, i.jsx)(l6.C, { label: P.intl.string(T.default.HCQvpO), size: "xs", items: f }),
                  (0, i.jsx)("div", { className: ri.sq, children: x }),
              ],
          });
}
var rs = n(442331);
let ru = new Set(),
    ro = new Set();
function rc(e) {
    return (
        ro.add(e),
        () => {
            ro.delete(e);
        }
    );
}
function rd() {
    return a.useSyncExternalStore(rc, () => ru);
}
function rm(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let i = e.length - 1; i >= 0; i--) {
        let a = e[i];
        if (null == a || "assistant" !== a.role || null == a.settingsRequest || !(0, t6.BL)(a)) continue;
        let s = a.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(a.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function rf(e, t, n) {
    if (!n || null == t) return !1;
    let l = rl(e, t);
    return l.length > 0 && !rn({ keys: l }, t);
}
var rh = n(782973),
    rg = n(290713),
    rp = n(411236);
function rx(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: m,
            summary: f,
            markSaved: h,
        } = (function (e, t, n) {
            let l = rd(),
                [r, i] = a.useState(!1),
                s = null != n ? l.has(n) : r,
                u = a.useCallback(() => {
                    if (null != n) {
                        if (!ru.has(n)) for (let e of ((ru = new Set([...ru, n])), ro)) e();
                    } else i(!0);
                }, [n]),
                o = (0, c.bG)([rs.A], () => rf(t, rs.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, c.bG)([lX.A], () => null != n && rm(lX.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [rs.A, nF.A],
                    () => {
                        var n;
                        let l = rs.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => nF.A.getChannel(e)?.name ?? null),
                              rl(t, l).flatMap((e) => {
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
    if (m && !g)
        return (0, i.jsx)("article", {
            className: rp.Mk,
            children: (0, i.jsx)(v.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(T.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, i.jsxs)("article", {
            className: rp.Mk,
            children: [
                (0, i.jsxs)("div", {
                    className: rp.Ol,
                    children: [
                        (0, i.jsx)(re.CircleCheckIcon, {
                            size: "xs",
                            color: tI.A.colors.ICON_FEEDBACK_POSITIVE,
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
                f.length > 0
                    ? (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: f.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let p = n.keys?.length === 1 && n.keys[0] === rh.B,
        x = null != n.note && "" !== n.note ? n.note : p ? null : P.intl.string(T.default.XuOf5s);
    return (0, i.jsx)(rg.A, {
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
                      className: rp.Mk,
                      onSubmit: s,
                      children: [
                          (0, i.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(T.default["jZjP+I"]),
                          }),
                          null != x
                              ? (0, i.jsx)(rr.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, i.jsx)("div", { className: rp.p0, children: u }),
                      ],
                  })
                : (0, i.jsxs)("form", {
                      className: o()(nL.nd, nL.jx),
                      "aria-label": P.intl.string(T.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, i.jsxs)("div", {
                              className: nL.wx,
                              children: [
                                  (0, i.jsx)(v.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: nL.TK,
                                      children: P.intl.string(T.default["jZjP+I"]),
                                  }),
                                  (0, i.jsx)(nn.D, {
                                      className: o()(nL.gb, nL.Q7),
                                      onClick: r,
                                      "aria-label": P.intl.string(T.default["iq+Pte"]),
                                      children: (0, i.jsx)(tr.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: rp.DQ,
                              children: [
                                  null != x
                                      ? (0, i.jsx)(rr.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: nL.qr,
                              children: [
                                  (0, i.jsx)(v.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: rp.xE,
                                      children: P.intl.string(T.default["1w0jMk"]),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: nL.zt,
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
var rv = n(975571),
    rj = n(427123);
let rb = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var ry = n(874421),
    rk = n(932111),
    rw = n(940874),
    rS = n(404373),
    rA = n(89222);
function rC(e) {
    return "" !== rA.A.getDraft(e).trim();
}
var rN = n(29080);
function rI(e) {
    var t;
    let n,
        l,
        { steps: r, content: i, hasProposal: a, hasLiveClarification: s = !1, hasAttachments: u } = e,
        o = (0, t9.B4)(r),
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
        m = o.filter((e) => e !== d),
        f = m.filter((e) => "message" === e.type).at(-1),
        h = !a && !s && "" !== i.trim();
    return {
        streamed: m,
        lastStreamedMessage: f,
        replyKey: d?.key,
        showsClosingMessage: h,
        closingContent: h ? i.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: u, showsClosingMessage: h, endsOnStreamedMessage: (0, t9.Lf)(r) }),
    };
}
var rE = n(62617),
    r_ = n(182368);
let rM = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rR = {
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
    rT = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = a.useMemo(
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rE.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: r_.u, tint: "var(--illo-purple-40)" },
    };
function rP(e) {
    return { ...rT[e], name: P.intl.string(rR[e]()) };
}
function rL(e) {
    return rM.includes(e) ? rP(e) : void 0;
}
function r$(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rM.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rM[(t + n) % rM.length]);
            }),
            l
        );
    })(e))
        t.set(n, rP(l));
    return t;
}
var rq = n(615839);
function rD(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : P.intl.string(T.default.KcFvbo);
}
var rF = n(60160),
    rO = n(101147);
function rG(e) {
    let t = (0, t9.SY)(e.steps);
    return null != t ? (0, t9.WQ)(t) : rD(e.task);
}
function rz(e) {
    let t = r$(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rL(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: rD(e.task),
                      todoId: e.task.todoId,
                      line: rG(e),
                  },
              ];
    });
}
function rU(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: a, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, t9.SY)(n.steps),
        d = o
            ? rG(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rD(e));
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
                                  duration: (0, rq.MB)(e.durationMs),
                              });
                          return P.intl.formatToPlainString(T.default.nmI9Uh, { task: t });
                      default:
                          return P.intl.formatToPlainString(T.default.nmI9Uh, { task: t });
                  }
              })(u),
        m = o ? c : void 0,
        f =
            u.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, i.jsx)("ol", {
                                    className: nb.dO,
                                    children: n.steps.map((e) =>
                                        (0, i.jsx)(
                                            rO.A,
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
                                      className: nb.iq,
                                      children: (0, i.jsx)(rF.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, i.jsx)(nr.A, {
        glyph: (0, i.jsx)(ni.u, {
            asset: (0, i.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: a,
            body: rD(u),
            position: "left",
            children: (0, i.jsx)("span", {
                className: nb.nC,
                children: (0, i.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: o,
        settled: !o,
        tint: r,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
var rB = n(998445),
    rK = n(643210),
    rH = n(648127),
    rV = n(372795),
    rW = n(163897);
let rX = "conjure-browser-viewer";
function rQ(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [rK.A],
            () =>
                n.flatMap((e) => {
                    let n = rK.A.getTab(t, e);
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
        className: rW.kR,
        "aria-label": P.intl.string(T.default.Uvkr1G),
        children: l.map((e) =>
            (0, i.jsx)("li", { children: (0, i.jsx)(rZ, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function rZ(e) {
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
        c = (0, H.Ry)(rX),
        [d, m] = a.useState(!1),
        f = a.useCallback((e, t) => m(t), []),
        { ended: h } = l,
        g = (0, rH.i)(l.session);
    return (0, i.jsxs)(nn.D, {
        innerRef: s,
        className: o()(rW.Nr, h && rW.Xj),
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
                    { modalKey: rX },
                )
            );
        },
        "aria-label": P.intl.formatToPlainString(T.default.G3a822, { title: g }),
        children: [
            (0, i.jsxs)("div", {
                className: rW.Gt,
                children: [
                    (0, i.jsx)(rV.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: rW.Ji,
                        "aria-label": P.intl.formatToPlainString(T.default.rnwqXb, { name: g }),
                        onStateChange: f,
                    }),
                    d
                        ? null
                        : (0, i.jsx)("div", {
                              className: rW.qf,
                              children: (0, i.jsx)(rB.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, i.jsx)("div", {
                              className: rW.HS,
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
                className: rW.pG,
                children: [
                    (0, i.jsx)("span", { className: o()(rW.W9, h && rW.oM) }),
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
var rY = n(268409);
let rJ = new WeakMap(),
    r0 = new WeakMap();
function r1(e) {
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
            [lX.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = rJ.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = r0.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), r0.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (rJ.set(e, n), n);
                })(lX.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, i.jsx)("li", { className: rY.h, children: (0, i.jsx)(rQ, { projectId: t, sessionIds: u }) });
}
var r2 = n(469393);
function r3(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, V.lG)(t.authored_at);
    return (0, i.jsx)(no, {
        title: P.intl.string(T.default["t+b0rz"]),
        children: (0, i.jsxs)("div", {
            className: r2.r,
            children: [
                (0, i.jsxs)("div", {
                    className: r2.z,
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
var r4 = n(493490),
    r5 = n(17742);
let r7 = [];
function r8(e) {
    let t = (0, c.bG)([r4.A], () => (null != e ? r4.A.getCaptures(e) : r7)),
        n = (0, c.bG)([r4.A], () => (null != e ? r4.A.getSelectedCapture(e) : null)),
        [l, r] = a.useState(null),
        i = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        a.useEffect(() => {
            if (null == e || null == n || null == i) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, r5._F)(e, n);
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
var r9 = n(714917),
    r6 = n(463660),
    ie = n(970211);
function it(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([r9.A], () => (null != e ? r9.A.getBackground(e) : null)),
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
                                r = await (0, r6.Mg)(e, l);
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
            let m = null != l ? r : null,
                f = null == l || (null != m && m === s) ? t : m,
                h = a.useCallback(() => {
                    f === m && u(m);
                }, [f, m]);
            return { src: null == e || null != n || o ? f : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp"),
        u = r8(n ? t : null);
    return null != u.selected
        ? null != u.src
            ? (0, i.jsx)("img", { className: ie.F1, src: u.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, i.jsx)("img", {
                className: o()(ie.LO, { [ie.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var il = n(155718);
function ir(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let ii = ["command", "user_command", "message_command", "message"],
    ia = new Set([il.kc.CHAT, il.kc.USER, il.kc.MESSAGE]);
function is(e) {
    return e.type ?? il.kc.CHAT;
}
function iu(e) {
    return ia.has(is(e));
}
function io(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function ic(e, t) {
    let n = ii.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !io(e)), ...n.filter(io)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || io(r) || l.push(r);
    }
    return ii.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function id(e, t, n) {
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
    let s = e.commands.filter(iu).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (is(e)) {
                    case il.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case il.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        u = "messages" === t ? [] : s.filter(io),
        o = i.length > 0 ? ic([...i, ...u], !0) : ic("both" === t ? [...s, a] : s, !1);
    return o.length > 0 ? o : [r];
}
var im = n(377941),
    ih = n.n(im);
function ig(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function ip(e) {
    return e.type === il.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === il.kc.USER || e.type === il.kc.MESSAGE
          ? ""
          : "/";
}
let ix = {
        [en.q7.APP_CHANNEL]: T.default["3/aHX6"],
        [en.q7.VOICE_CHANNEL]: T.default["3/aHX6"],
        [en.q7.ACTIVITY]: T.default["3/aHX6"],
        [en.q7.OVERLAY]: T.default["rPpf5/"],
        [en.q7.PROFILE_WIDGET]: null,
        [en.q7.AUTOMOD]: null,
        [en.q7.BOT]: null,
        [en.q7.APPLICATION_COMMANDS]: null,
    },
    iv = [en.q7.ACTIVITY, en.q7.APP_CHANNEL, en.q7.VOICE_CHANNEL, en.q7.OVERLAY];
function ij(e) {
    return iv.find((t) => ir(e, t)) ?? null;
}
let ib = 1920 / 1018;
function iy(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let ik = iy(24, 1018),
    iw = iy(24, 1920);
function iS(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var iA = n(90947),
    iC = (((l = {}).IMAGE = "image"), l),
    iN = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    iI = n(598748),
    iE = n(773669);
let i_ = [],
    iM = {},
    iR = {};
function iT(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function iP(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: iC.IMAGE,
        visibility: iN.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var iL = n(127258),
    i$ = n(803306),
    iq = n(587895),
    iD = n(432005),
    iF = n(963852),
    iO = n(95701),
    iG = n(619019),
    iz = n(427262);
let iU = new iO.nA({ id: "1337", guild_id: "1337", type: eb.rbe.GUILD_TEXT, name: "preview" });
function iB(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = (0, c.bG)([nG.default], () => nG.default.getUser(e), [e]);
    return (
        a.useEffect(() => {
            r && i?.username !== t && (0, i$.nj)(new iG.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, i, e, t, l, n]),
        i
    );
}
let iK = /^@\S+/;
var iH = n(775602);
let iV = [T.default["3eTjcV"], T.default.l3j5nS];
var iW = n(97808),
    iX = n(778712),
    iQ = n(486020),
    iZ = n(46054),
    iY = n(200700);
let iJ = {
        alert: { label: () => P.intl.string(T.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => P.intl.string(T.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => P.intl.string(T.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => P.intl.string(T.default.RGzFNK), blockedStyle: !1 },
    },
    i0 = {
        blocked: { label: () => P.intl.string(T.default.YdnZ8q), tone: "red" },
        alert: { label: () => P.intl.string(T.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => P.intl.string(T.default.RGzFNK), tone: "green" },
    },
    i1 = ["blocked", "alert", "allowed"],
    i2 = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function i3(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : P.intl.formatToPlainString(P.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, iY.getFriendlyDurationString)(n))
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
var i4 = n(984097),
    i5 = n(13673);
let i7 = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function i8(e) {
    let { example: t } = e,
        n = i3(t);
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
let i9 = ["glazedgamer", "sprinkles", "donutking"];
function i6(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: a, blockedStyle: s } = iJ[n.outcome];
    return (0, i.jsxs)("li", {
        className: o()(i4.nM, { [o()(i4.HV, i5.DX)]: s }),
        children: [
            (0, i.jsx)(na.A, { children: `${a()}: ` }),
            (0, i.jsx)("span", {
                className: i4.my,
                children: (0, i.jsx)(iW.eu, {
                    src: (0, iQ.AE)(void 0, void 0),
                    size: iX._3.SIZE_24,
                    "aria-label": P.intl.string(T.default["1yI0xV"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: i4.fw,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), iZ.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, i.jsx)(i8, { example: n }) : null,
                ],
            }),
        ],
    });
}
function ae(e) {
    let { group: t, firstIndex: n } = e,
        l = a.useId(),
        r = i0[t.section],
        s = new Set(t.examples.map(i3)),
        u = 1 === s.size ? t.examples.map(i3)[0] : null;
    return (0, i.jsxs)("div", {
        className: i4.UO,
        children: [
            (0, i.jsxs)("div", {
                className: i4.RZ,
                children: [
                    (0, i.jsx)(v.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: i7[r.tone],
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
                                      className: i4.IQ,
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
                className: i4.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, i.jsx)(i6, { example: e, username: i9[(n + t) % i9.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function at(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            i1
                .map((e) => ({ section: e, examples: t.filter((t) => i2[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, i.jsxs)("div", {
        className: i4.Nr,
        children: [
            "" !== r
                ? (0, i.jsx)("div", {
                      className: i4.hk,
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
                    ae,
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
var an = n(276293),
    al = n(460905),
    ar = n(110384),
    ai = n(365199),
    aa = n(633018),
    as = n(763754),
    au = n(267508),
    ao = n(194085),
    ac = n(20851),
    ad = n(692508),
    am = n(798819);
function af(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, i.jsxs)("div", {
        className: o()(am.item, am.labelContainer, am.colorDefault, {
            [am.focused]: !0 === t.highlighted,
            [am.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, i.jsx)("div", {
                      className: am.iconContainerLeft,
                      children: (0, i.jsx)(n, { color: "currentColor", className: am.icon }),
                  })
                : null,
            (0, i.jsx)("div", { className: o()(am.label, ad.Gy), children: t.label }),
            null != l
                ? (0, i.jsx)("div", {
                      className: am.iconContainer,
                      children: (0, i.jsx)(l, { color: "currentColor", className: am.icon }),
                  })
                : null,
        ],
    });
}
function ah(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = a.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, i.jsx)("img", { src: l, alt: "", className: o()(t, ad.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: P.intl.string(P.t["5IEsGx"]), icon: ar.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: P.intl.string(P.t.LYju5J), muted: !0 };
    return (0, i.jsx)("div", {
        className: o()(am.menu, ad.MK),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: am.scroller,
            children: [
                (0, i.jsx)(af, { item: s }),
                (0, i.jsx)("div", { className: am.separator }),
                (0, i.jsx)(af, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function ag() {}
function ap(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        d,
        m,
        f,
        h,
        g,
        { projectId: p, exchanges: x } = e,
        {
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, c.bG)([nG.default], () => nG.default.getCurrentUser())),
        (n = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(p))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([iq.A], () => iq.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? P.intl.string(T.default.JEYq8M)),
        (u = (0, c.bG)([nG.default], () => (null != l ? nG.default.getUser(l) : void 0), [l])),
        (m = iB("31337", s, { bot: !0, enabled: !(d = u?.bot === !0) })),
        (f = d ? u : m),
        (h = iB("31338", P.intl.string(T.default["9iAOsw"]), { discriminator: "0003" })),
        (g = iB("31339", (0, iz.mG)(t) ?? "", { enabled: null != t })),
        {
            items: a.useMemo(
                () =>
                    null == t || null == g || null == f || null == h
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
                                      a = (0, iD.rh)({
                                          ...(0, iF.Ay)({
                                              channelId: iU.id,
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
                                                        type: iL.G.APPLICATION_COMMAND,
                                                        user: (0, iF.Vi)(s),
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
                                          (d(((l = t.user), l.trim().replace(iK, `<@${a.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${u.id}> ${r}`), a));
                                          break;
                                      case "event":
                                          d(((i = t.bot), i.split(`@${o.username}`).join(`<@${o.id}>`)), a);
                                  }
                              return c;
                          })(
                              x,
                              { bot: f, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: P.intl.string(T.default["y+QYes"]),
                                  memberMessage: P.intl.string(T.default.BUTRDc),
                              },
                          ),
                [x, f, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? f?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = iU.name;
    return (0, i.jsxs)("div", {
        className: ad.Ix,
        children: [
            (0, i.jsxs)("div", {
                className: ad.ZO,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(an.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: o()(ad.TE, "group-spacing-16"),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, i.jsxs)(
                        "li",
                        {
                            className: null != r ? ad.Rz : void 0,
                            children: [
                                (0, i.jsx)(ac.A, {
                                    message: n,
                                    channel: iU,
                                    author: (0, as.FT)(n.author, iU),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, i.jsx)(au.A, { message: n, channel: iU }) : void 0,
                                    usernameClassName: r?.target === "user" ? ad.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, i.jsx)("div", {
                                          className: ad.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, i.jsxs)(ao.Ay, {
                                              children: [
                                                  (0, i.jsx)(ao.qv, {
                                                      label: P.intl.string(P.t.lfIHs4),
                                                      icon: al.ReactionIcon,
                                                      onClick: ag,
                                                  }),
                                                  (0, i.jsx)(ao.qv, {
                                                      label: P.intl.string(P.t["5IEsGx"]),
                                                      icon: ar.ArrowAngleLeftUpIcon,
                                                      onClick: ag,
                                                  }),
                                                  (0, i.jsx)(ao.qv, {
                                                      label: P.intl.string(P.t["UKOtz+"]),
                                                      icon: ai.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: ag,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, i.jsx)("div", {
                                          className: "user" === r.target ? ad.ET : ad.je,
                                          inert: !0,
                                          children: (0, i.jsx)(ah, {
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
                className: ad.DA,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aa.SlashBoxIcon, { size: "sm", color: "currentColor" }),
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
var ax = n(332173);
function av(e) {
    let { name: t } = e;
    return (0, i.jsxs)(ax.A, { children: ["/", t] });
}
function aj(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(ih());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, i.jsx)(av, { name: e.name }, e.start) : e.text));
}
n(827669);
var ab = n(687966),
    ay = n(757789),
    ak = n(26137),
    aw = n(231483),
    aS = n(323384);
let aA = {
    frame: T.default.Z2bt4u,
    overlay_widget: T.default["0mGHfU"],
    user_widget: T.default.Jipr29,
    bot: T.default.EbvC13,
    commands: T.default.EbvC13,
    automod: T.default.tiMvei,
};
var aC = n(573634);
let aN = {
    frame: ab.GameControllerIcon,
    overlay_widget: ay.WindowTopIcon,
    user_widget: ak.UserCircleIcon,
    bot: e4.RobotIcon,
    commands: e4.RobotIcon,
    automod: aw.ShieldIcon,
};
function aI(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, i.jsxs)("div", {
        className: o()(aC.e7, l),
        children: [(0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function aE(e) {
    let { labels: t } = e;
    return (0, i.jsx)("ul", {
        className: aC.Ip,
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    className: aC.jw,
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
function a_(e) {
    let { name: t, description: n } = e;
    return (0, i.jsxs)("li", {
        className: aC.lj,
        children: [
            (0, i.jsx)("span", {
                className: o()(aC.Vo, aC.G),
                children: (0, i.jsx)(aS.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, i.jsxs)("div", {
                className: aC.aV,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function aM(e) {
    let { commands: t } = e;
    return (0, i.jsx)("ul", {
        className: aC.wZ,
        children: t.map((e, t) => {
            let n = ip(e),
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
                                ? (0, i.jsx)(av, { name: e.name })
                                : (0, i.jsx)(ax.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function aR(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, i.jsx)("ul", {
        className: aC.p_,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    className: aC.Aw,
                    children: (0, i.jsx)(v.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, i.jsx)(aj, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function aT(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: a } = e,
        s = "frame" === t.kind && !0 !== t.game,
        u = s ? aS.AppsIcon : aN[t.kind],
        o = P.intl.string(s ? T.default.BM4Ymz : aA[t.kind]);
    return (0, i.jsxs)("section", {
        className: aC.s9,
        "aria-label": o,
        children: [
            (0, i.jsxs)("div", {
                className: aC.JQ,
                children: [
                    (0, i.jsx)("span", {
                        className: aC.Vo,
                        children: (0, i.jsx)(u, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, i.jsx)(v.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: o }),
                ],
            }),
            null != l ? (0, i.jsx)("div", { className: aC.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, i.jsx)(v.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, i.jsx)(aj, { text: n[0], commandNames: a }),
                  })
                : n.length > 0
                  ? (0, i.jsx)(aR, { bullets: n, commandNames: a })
                  : null,
            r.length > 0 ? (0, i.jsx)("div", { className: aC.PG, children: r }) : null,
        ],
    });
}
function aP(e) {
    var t;
    let n,
        l,
        r,
        { appName: s, intro: u, proposal: o, renderPreview: c, commandNames: d } = e,
        m =
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
                                let n = t.map(ih()).join("|");
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
        f =
            ((r =
                m.find((e) => {
                    let { experience: t } = e;
                    return "bot" === t.kind || "commands" === t.kind;
                }) ?? m[0]),
            r?.experience.id);
    return (0, i.jsxs)("div", {
        className: aC.aN,
        children: [
            (0, i.jsxs)("div", {
                className: aC.Lv,
                children: [(0, i.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            m.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, i.jsxs)(
                    a.Fragment,
                    {
                        children: [
                            (0, i.jsx)("div", { className: aC.yF, role: "separator" }),
                            (0, i.jsx)(aT, {
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
                                                      ? [{ key: t, caption: P.intl.string(n), labels: l.map(ig) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, i.jsx)(
                                                      aI,
                                                      { caption: n, children: (0, i.jsx)(aE, { labels: l }) },
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
                                                                aI,
                                                                {
                                                                    className: aC.Iw,
                                                                    caption: P.intl.formatToPlainString(
                                                                        T.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, i.jsx)("ul", {
                                                                        className: aC.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, i.jsx)(
                                                                                a_,
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
                                                                    aI,
                                                                    {
                                                                        caption: P.intl.string(T.default.MY6UGJ),
                                                                        children: (0, i.jsx)(aE, { labels: r }),
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
                                                              aI,
                                                              {
                                                                  caption: P.intl.string(P.t["0hKkS+"]),
                                                                  children: (0, i.jsx)(aM, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...l,
                                            ];
                                        default:
                                            return l;
                                    }
                                })(o, t, t.id === f),
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
var aL = n(633075),
    a$ = n(591410),
    aq = n(27399);
function aD(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([nG.default], () => nG.default.getCurrentUser()),
        r = a.useMemo(() => new aL.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, i.jsx)("div", {
              className: aq.H,
              children: (0, i.jsx)(a$.A, {
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
var aF = n(443863);
function aO(e) {
    let t,
        { projectId: n, src: l, alt: r, size: a, onError: s } = e,
        u =
            ((t = Math.min(1, 1872 / a.width, 970 / a.height)),
            { width: iy(a.width * t, 1920), height: iy(a.height * t, 1018) });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(it, { projectId: n }),
            (0, i.jsx)("div", {
                className: aF.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": ik,
                    "--custom-conjure-plan-overlay-widget-end": iw,
                    "--custom-conjure-plan-overlay-widget-width": u.width,
                    "--custom-conjure-plan-overlay-widget-height": u.height,
                },
                children: (0, i.jsx)("img", { src: l, alt: r, className: aF.M7, onError: s }),
            }),
        ],
    });
}
function aG(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, to.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, lI.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function az(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: a, gone: s, handleError: u } = (0, lE._)(t, r);
    return s
        ? null
        : (0, i.jsx)(nn.D, {
              className: aF.xX,
              onClick: () => aG(t, [{ id: r, alt: l }], 0),
              "aria-label": P.intl.string(T.default.TvAPIm),
              children: null == a ? null : (0, i.jsx)("img", { src: a, alt: l, className: aF.sN, onError: u }),
          });
}
function aU(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: u, handleError: d } = (0, lE._)(t, r),
        [m, f] = a.useState(!1),
        [h, g] = a.useState(!1),
        {
            slide: p,
            labels: x,
            pick: j,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([iH.Ay], () => iH.Ay.useReducedMotion),
                [r, i] = a.useState(0),
                [s, u] = a.useState(!1),
                o = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            a.useEffect(() => {
                if (!o) return;
                let e = setInterval(() => i((e) => (e + 1) % iV.length), 4e3);
                return () => clearInterval(e);
            }, [o]);
            let m = a.useCallback((e) => {
                    (u(!0), i(e));
                }, []),
                f = a.useCallback(() => m(d), [m, d]);
            return { slide: d, labels: iV.map((e) => P.intl.string(e)), pick: m, hold: f };
        })({ ready: null != s, paused: m || h });
    if (u) return null;
    let b = P.intl.string(T.default.mjryK4),
        y = P.intl.string(T.default["rPpf5/"]);
    return (0, i.jsxs)("div", {
        className: aF.RM,
        onMouseEnter: () => f(!0),
        onMouseLeave: () => f(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, i.jsx)(nn.D, {
                className: o()(aF.xX, aF.nj, { [aF.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(ib) },
                onClick: () => aG(t, [{ id: r, alt: b }], 0),
                "aria-label": P.intl.string(T.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, i.jsx)("img", { src: s, alt: b, className: aF.Ac, onError: d })
                          : (0, i.jsx)(aO, { projectId: t, src: s, alt: y, size: l, onError: d }),
            }),
            (0, i.jsx)("div", {
                className: aF._4,
                role: "group",
                "aria-label": P.intl.string(T.default.EH36X6),
                children: x.map((e, t) =>
                    (0, i.jsx)(
                        nn.D,
                        {
                            className: o()(aF.c, { [aF.Cw]: p === t }),
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
function aB(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: a, gone: s, handleError: u } = (0, lE._)(t, n);
    return s
        ? null
        : (0, i.jsx)("li", {
              children: (0, i.jsx)(nn.D, {
                  className: aF.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == a ? null : (0, i.jsx)("img", { src: a, alt: "", className: aF.rA, onError: u }),
              }),
          });
}
function aK(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: P.intl.formatToPlainString(T.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("section", {
              className: aF.Op,
              children: (0, i.jsxs)("div", {
                  className: aF.uW,
                  children: [
                      (0, i.jsx)(v.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: P.intl.string(T.default.ubBJcy),
                      }),
                      (0, i.jsx)("ul", {
                          className: aF.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: a } = e;
                              return (0, i.jsx)(aB, { projectId: t, id: r, alt: a, onOpen: () => aG(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function aH(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        o,
        m,
        f,
        h,
        g,
        { projectId: p, proposal: x, version: j, onApprove: b } = e,
        { botExchanges: y } =
            ((n = ir(x, en.q7.APPLICATION_COMMANDS)),
            (l =
                ir(x, en.q7.BOT) || n
                    ? null != x.bot
                        ? x.bot.interaction
                        : n && x.commands.some(iu)
                          ? "commands"
                          : null
                    : null),
            (r = a.useMemo(
                () =>
                    null == l
                        ? []
                        : id(x, l, {
                              message: P.intl.string(T.default.J7qggf),
                              reply: P.intl.string(T.default.nqYtiy),
                              event: P.intl.string(T.default["05lU9W"]),
                          }),
                [x, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = iR } = t,
                r = (0, c.bG)([iE.default], () => iE.default.locale),
                i = (0, c.bG)([eP.Ay], () => {
                    let t = eP.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = a.useState(iM);
                    return (
                        a.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, to.PK)(e, l.id).then(
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
                                                          ...iT(n),
                                                          ...(null != n.fallback ? { fallback: iT(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let i = iA.uW.safeParse(r);
                                  if (!i.success) return null;
                                  let a = i.data;
                                  return null == a[iI.m.WIDGET_TOP] || null == a[iI.m.WIDGET_BOTTOM]
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
                                                                    type: iA.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof i
                                                                ? (r[e] = { type: iA.oG.NUMBER, value: i })
                                                                : (r[e] = { type: iA.oG.STRING, value: i });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(iP),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: i_,
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
                        .filter((e) => "/" === ip(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        C =
            ((u =
                null == (s = ij(x))
                    ? null
                    : (x.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (m = null != (o = x.design_image) && o.id !== iS(x)?.id ? o : null),
            (f = iS(x)),
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
                ui: null != m && null != h ? { experienceId: h, design: m } : null,
                overlay:
                    null != f && null != g ? { experienceId: g, design: f, size: er(x.overlay_widget ?? null) } : null,
            }),
        N = a.useMemo(
            () =>
                x.commands.some(iu)
                    ? id({ ...x, bot: void 0 }, "commands", {
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
        _ = w ? (0, i.jsx)(nd, { children: P.intl.string(T.default.hF2c41) }) : null;
    return (0, i.jsxs)(nm, {
        title: E,
        meta: _,
        superseded: w,
        showLabel: P.intl.string(T.default.yD8EJS),
        hideLabel: P.intl.string(T.default.nSPGNb),
        bodyClassName: aF.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, i.jsx)("div", {
                className: aF.Qs,
                children: (0, i.jsx)(aP, {
                    appName: I ?? x.experiences?.[0]?.name ?? "",
                    intro: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, i.jsx)(aj, { text: x.summary, commandNames: A }),
                            }),
                            (0, i.jsx)(aK, { projectId: p, proposal: x }),
                            "" !== S
                                ? (0, i.jsxs)("section", {
                                      className: aF.uW,
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
                                              children: (0, i.jsx)(aj, { text: S, commandNames: A }),
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
                                            ? (0, i.jsx)(az, {
                                                  projectId: p,
                                                  design: C.ui.design,
                                                  alt: P.intl.string(null == (t = ij(x)) ? T.default["3/aHX6"] : ix[t]),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, i.jsx)(aU, {
                                                  projectId: p,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, i.jsxs)(i.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, i.jsx)(aD, { ...k }) : null;
                            case "automod":
                                return null != x.automod && x.automod.examples.length > 0
                                    ? (0, i.jsx)(at, { automod: x.automod })
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
                                        (r = l.some((e) => "command" === e.kind || io(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, N);
                                return t.length > 0 ? (0, i.jsx)(ap, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: A,
                }),
            }),
            null == b || w
                ? null
                : (0, i.jsxs)("div", {
                      className: aF.qr,
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
var aV = n(289565);
function aW(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, i.jsx)("div", { className: aV.m, children: n })
        : (0, i.jsxs)("div", {
              className: aV.Z,
              children: [
                  n,
                  (0, i.jsx)(tc.m, {
                      text: P.intl.string(P.t.WAI6xu),
                      asContainer: !0,
                      children: (0, i.jsx)(ty.K, {
                          "aria-label": P.intl.string(P.t.WAI6xu),
                          icon: tr.XSmallIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function aX(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function aQ(e, t) {
    return null != e && aX(t, e.status);
}
let aZ = new WeakMap();
var aY = n(175841),
    aJ = n(27232),
    a0 = n(505930),
    a1 = n(506774),
    a2 = n(385081);
let a3 = "conjurePublishRatings",
    a4 = "conjurePublishRatingViews",
    a5 = [1, 2, 3, 4, 5],
    a7 = { 1: T.default.GhbsGA, 2: T.default.cm0nwU, 3: T.default.kGvlh2, 4: T.default.dVBSUg, 5: T.default.DKlgF7 };
function a8(e) {
    return P.intl.string(a7[e]);
}
let a9 = new Set(),
    a6 = 0;
function se() {
    return a1.w.get(a3) ?? {};
}
function st(e, t) {
    return se()[e]?.[t] ?? null;
}
function sn(e) {
    return (a9.add(e), () => a9.delete(e));
}
function sl(e) {
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
function sr(e) {
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, a2.Fz)(e, n);
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
        children: (0, i.jsx)(nP.f, {
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
var si = n(54100);
function sa(e) {
    let { rating: t } = e;
    return (0, i.jsxs)("div", {
        className: si.mo,
        role: "status",
        children: [
            (0, i.jsx)(aY.SparklesIcon, { size: "xs", color: "currentColor", className: si.dQ, "aria-hidden": !0 }),
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
function ss(e) {
    let { projectId: t, turnId: n, cta: l, status: r, placement: s } = e,
        { rating: u, rate: c } = (function (e) {
            let { projectId: t, turnId: n } = e;
            a.useSyncExternalStore(sn, () => a6);
            let { publishReason: l, surface: r, placement: i, publishState: s } = sl(e);
            return (
                a.useEffect(() => {
                    !(function (e) {
                        if (null != st(e.projectId, e.turnId)) return;
                        let t = a1.w.get(a4) ?? {};
                        t[e.projectId]?.[e.turnId] !== !0 &&
                            ((0, a2.rv)(e),
                            a1.w.set(a4, { ...t, [e.projectId]: { ...t[e.projectId], [e.turnId]: !0 } }));
                    })({ projectId: t, turnId: n, publishReason: l, surface: r, placement: i, publishState: s });
                }, [t, n, l, r, i, s]),
                {
                    rating: st(t, n),
                    rate(t) {
                        let n = (function (e) {
                            let { rating: t, ...n } = e,
                                { projectId: l, turnId: r } = n;
                            if (null != st(l, r)) return null;
                            let i = { ...sl(n), rating: t };
                            (0, a2.gw)(i);
                            let a = se();
                            return (a1.w.set(a3, { ...a, [l]: { ...a[l], [r]: t } }), a6++, a9.forEach((e) => e()), i);
                        })({ ...e, rating: t });
                        return null != n && t <= 2 ? n : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r, placement: s }),
        [d, m] = a.useState(null),
        [f, h] = a.useState(null),
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
        return (0, i.jsx)(sa, { rating: u });
    let y = null != u,
        k = y ? u : (f ?? d),
        w = y || (null == f && null != d);
    function S(e) {
        if (y) return;
        (m(e), h(null), p(!0));
        let t = c(e);
        null != t && (0, H.qf)((e) => (0, i.jsx)(sr, { ...e, rating: t }));
    }
    return (0, i.jsxs)("div", {
        className: si.nM,
        onMouseLeave: () => h(null),
        children: [
            (0, i.jsxs)("span", {
                className: si.WD,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(v.E, {
                        id: j,
                        variant: "body-xs/medium",
                        color: "text-muted",
                        className: o()(si.Pf, { [si.KH]: null == k }),
                        children: P.intl.string(T.default.mTV326),
                    }),
                    a5.map((e) =>
                        (0, i.jsx)(
                            v.E,
                            {
                                variant: "body-xs/medium",
                                color: "text-default",
                                className: o()(si.Pf, { [si.KH]: k === e }),
                                children: a8(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, i.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": j,
                className: si.uf,
                children: a5.map((e) => {
                    let t = null != k && e <= k,
                        n = t ? aJ.StarIcon : a0.StarOutlineIcon;
                    return (0, i.jsxs)(
                        "label",
                        {
                            className: si.uK,
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
                                        b.current ? m(e) : S(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((b.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), S(e)));
                                    },
                                    onKeyUp: () => {
                                        b.current = !1;
                                    },
                                    className: si.hF,
                                    "aria-label": P.intl.formatToPlainString(T.default.NU7Dex, {
                                        rating: e,
                                        label: a8(e),
                                    }),
                                }),
                                (0, i.jsx)(
                                    "span",
                                    {
                                        className: o()(si.d4, { [si.cO]: t, [si.Ng]: t && w }),
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
function su(e) {
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
function so(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, eK.Ay)(t);
    return null != r && aQ(r, l)
        ? (0, i.jsx)(aW, {
              children: (0, i.jsxs)(j.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, i.jsx)(su, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, i.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null != n
                          ? (0, i.jsx)(ss, {
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
var sc = n(303345),
    sd = n(44255),
    sm = n(416473),
    sf = n(289830);
function sh(e) {
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
                        (await (0, sm.Du)(e, t.trigger), i("on"));
                    } catch (e) {
                        (u(e instanceof sc.A ? e.message : P.intl.string(T.default.EXceox)), i("error"));
                    }
                }, [e, t.trigger]),
                [d] = a.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? P.intl.formatToPlainString(T.default.orZDqY, { time: (0, sd.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, sd.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? o : void 0,
            };
        })(t, n, l);
    return (0, i.jsx)(no, {
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
var sg = n(989271);
function sp(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = a.useId(),
        s = null == l;
    return (0, i.jsxs)(nn.D, {
        className: o()(sg.nM, { [sg.f1]: s, [sg.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(T.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, i.jsxs)("div", {
                className: sg.jo,
                children: [
                    n
                        ? (0, i.jsx)(m.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sg.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, i.jsx)(v.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: sg.G9,
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
function sx(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = a.useState(() => new Set()),
        u = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, i.jsx)(no, {
        title: P.intl.string(T.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, i.jsx)(
                sp,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : u },
                e.id,
            ),
        ),
    });
}
var sv = n(919790),
    sj = n(908492),
    sb = n(971824),
    sy = n(162052),
    sk = n(165648);
function sw(e) {
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
            segment: m,
            hostsChecklist: f = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: p,
        } = e,
        x = a.useMemo(() => (0, t9.Jf)(n, l), [n, l]),
        v = a.useMemo(
            () =>
                null == m
                    ? x
                    : {
                          ...x,
                          steps: x.steps.filter((e) => e.segment === m),
                          tasks: x.tasks.filter((e) => e.task.segment === m),
                      },
            [x, m],
        );
    if (o)
        return (0, i.jsx)("ol", {
            className: nb.pj,
            "data-live": !1,
            children: (0, i.jsx)(nr.A, {
                glyph: (0, i.jsx)(rN.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: P.intl.string(T.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = f ? ((0, t9.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = r$(k.map((e) => e.taskId)),
        S = !g && (l || k.some((e) => "running" === e.task.status)),
        A = rz(k);
    return (0, i.jsxs)("ol", {
        className: nb.pj,
        "data-live": S,
        children: [
            (0, i.jsx)(nt.Ay, {
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
                let l = null != e.task.helperMark ? rL(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          rU,
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
            (0, i.jsx)(r1, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, i.jsx)("li", {
                      className: nb.YO,
                      children: (0, i.jsx)(nv, { todos: b, provisional: d, agents: A, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function sS(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: s,
            ideas: u,
            attachments: c,
            secretRequest: d,
            secretRequestId: m,
            secretRequestAwaiting: f,
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
            () => rI({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: R, lastStreamedMessage: L, showsClosingMessage: $, closingContent: q } = M,
        D = (A ? C : void 0) ?? M.attachmentsHost,
        F = $ && !A,
        O = null == c ? null : (0, i.jsx)(sv.A, { projectId: t, attachments: c }),
        G = null == O ? null : (0, i.jsx)("div", { className: nb.MT, children: O }),
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
        className: nb.ue,
        children: [
            R.length > 0 && !A
                ? (0, i.jsx)("ol", {
                      className: nb.dO,
                      children: R.filter((e) => "todos" !== e.type).map((e) =>
                          (0, i.jsxs)(
                              "li",
                              {
                                  className: nb.DV,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: sk.PT,
                                          children: (0, sj.U)(e.content, !0, {
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
                ? (0, i.jsx)(aH, { projectId: t, proposal: r, version: s, onApprove: k })
                : F
                  ? (0, i.jsxs)("div", {
                        className: o()(nb.ky, sy.XR),
                        children: [
                            (0, i.jsx)("div", {
                                className: o()(sk.PT, nb.cW),
                                children: (0, sj.U)(q, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === D ? G : null,
                            z,
                        ],
                    })
                  : null,
            null != d
                ? (0, i.jsx)("div", {
                      className: o()(nb.ky, nb.k1, sy.XR, { [sb.O]: null != f && "open" === h }),
                      children: (0, i.jsx)(ra, {
                          projectId: t,
                          cardId: m ?? "",
                          request: d,
                          status: h,
                          awaiting: "open" === h ? f : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, i.jsx)("div", {
                      className: o()(nb.ky, nb.k1, sy.XR),
                      children: (0, i.jsx)(rx, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== D && ("closing" !== D || F) ? null : O,
            null != x ? (0, i.jsx)(so, { projectId: t, turnId: j ?? null, cta: x }) : null,
            null != u && u.length > 0 ? (0, i.jsx)(sx, { ideas: u, pickedIdeaIds: y, onPick: b }) : null,
            null != N ? (0, i.jsx)(r3, { proposal: N, onRestore: I }) : null,
            null != E ? (0, i.jsx)(sh, { projectId: t, proposal: E, current: _ }) : null,
            F ? null : z,
        ],
    });
}
var sA = n(286251),
    sC = n(146806),
    sN = n(475358),
    sI = n(783977),
    sE = n(559647),
    s_ = n(787564),
    sM = n(339200),
    sR = n(234320),
    sT = n(191023),
    sP = n(285796),
    sL = n(922329),
    s$ = n(153171);
function sq(e) {
    let { projectId: t } = e;
    return (0, i.jsx)(sL.p, {
        name: P.intl.string(T.default.xhFsEP),
        thumb: (0, i.jsxs)("span", {
            className: tP.PA,
            "aria-hidden": !0,
            children: [
                (0, i.jsx)(sT.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, i.jsx)("span", {
                    className: tP.OY,
                    children: (0, i.jsx)(f.PencilIcon, {
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
            className: s$.o1,
            onClick: () => (0, I.xU)(t),
            "aria-label": P.intl.string(T.default.N852dj),
            children: (0, i.jsx)(sP.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function sD(e) {
    let { send: t } = e;
    return (0, i.jsxs)(sL.p, {
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
            "uploading" === t.status ? (0, i.jsx)(b.y, { type: b.t.SPINNING_CIRCLE_SIMPLE, className: s$.Rk }) : null,
            "failed" === t.status
                ? (0, i.jsx)(nJ.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: P.intl.string(T.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var sF = n(587157),
    sO = n(347111),
    sG = n(120234),
    sz = n(901173),
    sU = n(161431),
    sB = n(46653),
    sK = n(695184),
    sH = n(811091),
    sV = n(475458),
    sW = n(957071),
    sX = n(927659),
    sQ = n(351906),
    sZ = n(407653),
    sY = n(322915);
function sJ(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: a, onSelect: s } = e,
        u = (0, c.bG)([sQ.A], () => sQ.A.hidePersonalInformation ?? !1),
        o = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, i.jsx)(
                      sX.Ay.User,
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
                      sX.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, i.jsx)(sZ.A, { projectId: n, file: e.file, className: sY.Vk }),
                          selected: t === r,
                          onHover: a,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        f = l.findIndex((e) => "file" === e.kind),
        h = -1 === f ? m : m.slice(0, f),
        g = -1 === f ? [] : m.slice(f);
    return (0, i.jsx)(sX.Ay, {
        id: t,
        className: sY.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, i.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": P.intl.string(T.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, i.jsx)(s0, { titleId: o, title: P.intl.string(T.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, i.jsx)(s0, { titleId: d, title: P.intl.string(T.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function s0(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, i.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, i.jsx)(v.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: sY.Gf, children: n }),
            l,
        ],
    });
}
var s1 = n(719442),
    s2 = n(355622),
    s3 = n(408018),
    s4 = n(186306),
    s5 = n(323350),
    s7 = n(35277),
    s8 = n(68059),
    s9 = n(267102),
    s6 = n(259691);
let ue = (0, iO.createChannelRecord)({ id: "1", type: eb.rbe.DM });
function ut(e) {
    let t = sM.VW.end(e, []);
    return { anchor: t, focus: t };
}
function un(e) {
    return (0, s5.WO)(sM.VW.richValue(e), { mode: "raw" });
}
function ul(e, t) {
    ((e.children = (0, s3.x7)(t)), (e.selection = ut(e)), e.onChange());
}
function ur(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rk.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, i.jsxs)("span", { ...t, contentEditable: !1, children: [(0, i.jsx)(s6.A, { attachmentId: r }), n] });
}
var ui = n(497437),
    ua = n(465410);
let us = "body-md/normal",
    uu = null;
function uo(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = a.useState(t),
        u = a.useRef(null),
        d = a.useRef(null),
        m = a.useRef(0),
        [f, h] = a.useState(0),
        [g, p] = a.useState(0),
        [x, j] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (a.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = m.current;
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
                m = 0 === c ? 1 : s / c,
                f = 0 === c ? 1 : o / c;
            j({
                frontFrom: 1e3 * (0, sC._R)(m),
                frontTo: 1e3 * (0, sC._R)(f),
                backFrom: 1e3 * (0, sC.T)(m),
                backTo: 1e3 * (0, sC.T)(f),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != d.current && r.observe(d.current), () => r.disconnect());
    }, [t]),
        a.useEffect(() => {
            m.current = d.current?.offsetWidth ?? 0;
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
        I = (0, c.bG)([iH.Ay], () => iH.Ay.useReducedMotion),
        E = t === P.intl.string(T.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, i.jsx)("span", {
            ref: n,
            className: o()(ui.VT, { [ui.qk]: l }),
            style: l
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, N - C)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, i.jsx)(sN.e, { shortcut: "tab", className: ui.xT, keyClassName: e }),
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(sA.o, {
                text: t,
                variant: us,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(ui.xM, { [ui.s2]: l }),
                onStart: A,
                onComplete: () => s(t),
            }),
            M(ui.IS, n || (!I && "out" === k), u),
            (0, i.jsx)("span", {
                ref: d,
                className: ui.QI,
                "aria-hidden": !0,
                children: (0, i.jsx)(v.E, { variant: us, tag: "span", children: t }),
            }),
            _
                ? (0, i.jsxs)("span", {
                      className: ui.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, i.jsx)(v.E, { variant: us, tag: "span", className: ui.xM, children: t }),
                          M(ui.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let uc = a.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                inputLocked: l = !1,
                aiPaused: r = !1,
                managedCopy: s = !1,
                running: u,
                restoring: d = !1,
                onSend: m,
                onInterrupt: f,
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
                let t = a.useContext(s9.Ay),
                    [n] = a.useState(() => {
                        let n = (0, s1.ie)();
                        return (
                            (n.children = (0, s3.x7)(e)),
                            (n.selection = ut(n)),
                            (0, s8.a)({
                                editor: n,
                                chatInputType: s2.oU.GENERIC_RICH_TEXTAREA,
                                channel: ue,
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
                                    for (let [t, l] of sM.VW.nodes(e, { at: [], match: sM.l5.isText }))
                                        for (let e of t.text.matchAll(rk.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        s4.o.withMergedEntry(e, () =>
                                            sM.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: i } of n.reverse())
                                                    s7.b.textToVoid(
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
            })(rA.A.getDraft(t)),
            [_, M] = a.useState(() => un(E));
        (0, sG.N$)(_);
        let R = a.useRef(_),
            [L, $] = a.useState(null),
            q = a.useCallback(() => {
                let e = un(E);
                (e !== R.current && ((R.current = e), (0, sO.I)(t, e), M(e)),
                    $(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sM.ZF.isCollapsed(t)) return null;
                            let [n] = sM.VW.node(e, t.anchor.path);
                            return sM.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(E),
                    ));
            }, [E, t]),
            D = a.useCallback((e) => ul(E, e), [E]),
            F = "" !== _.trim();
        a.useEffect(() => w?.(F), [F, w]);
        let O = a.useRef(t);
        a.useLayoutEffect(() => {
            O.current !== t && ((O.current = t), ul(E, rA.A.getDraft(t)));
        }, [E, t]);
        let G = (0, c.bG)([iH.Ay], () => iH.Ay.isSubmitButtonEnabled),
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
            } = (0, tf.FM)({ projectId: t, surface: "chat", onUploadFile: g }),
            Z = (0, I.fc)(t),
            Y = (0, I.bE)(t),
            J = a.useRef(Y);
        a.useEffect(() => {
            let e = J.current;
            ((J.current = Y), N && null != e && null != Y && Y !== e && sM.VW.focus(E));
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
        let ei = (0, sU.rU)(t),
            [ea, es] = a.useState(null),
            [eu, eo] = a.useState(0),
            ec = a.useMemo(() => (null != L && N ? (0, sz.OG)(L, L.length) : null), [L, N]),
            ed = ec?.start ?? null;
        a.useEffect(() => {
            null == ed ? es(null) : (0, sU.IP)(t);
        }, [ed, t]);
        let em = ed === ea ? null : ec,
            ef = (function (e, t) {
                let n = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(e), [e]),
                    { creator: l, collaborators: r } = (0, sV.yv)(n),
                    i = (0, c.bG)([sB.default], () => sB.default.getId()),
                    s = null != n && (0, en.pL)(n) ? n.guild_id : void 0,
                    u = t?.toLowerCase() ?? null;
                return (
                    a.useEffect(() => {
                        null != s && null != u && sK.A.requestMembers(s, u, 100);
                    }, [s, u]),
                    (0, c.yK)(
                        [ls.Ay, lu.A, nG.default],
                        () => {
                            if (null == u) return [];
                            let e = null != s ? lu.A.getGuild(s) : null,
                                t = (t) => (0, sz.mO)(t, u, null != e ? ls.Ay.getNick(e.id, t.id) : null),
                                a = new Set(n?.collaborator_role_ids ?? []),
                                o = null != e && a.has(sH.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                c =
                                    null == e
                                        ? []
                                        : ls.Ay.getMemberIds(e.id)
                                              .map((e) => nG.default.getUser(e))
                                              .filter(
                                                  (n) =>
                                                      null != n &&
                                                      t(n) &&
                                                      (o ||
                                                          (ls.Ay.getMember(e.id, n.id)?.roles ?? []).some((e) =>
                                                              a.has(e),
                                                          ) ||
                                                          lo.$3({
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
            })(t, em?.text ?? null),
            eh = a.useMemo(() => (null == em ? [] : (0, sz.l$)(ef, ei, em.text)), [em, ef, ei]),
            eg = em?.text;
        a.useEffect(() => eo(0), [eg]);
        let ep = eh.length > 0,
            ex = Math.min(eu, Math.max(0, eh.length - 1)),
            ev = a.useId(),
            ej = a.useCallback(
                (e) => {
                    let t = eh[e];
                    null != em &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: i } = l.anchor;
                            (s7.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: i } }),
                                s7.b.insertText(e, `${n} `));
                        })(E, em.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [eh, em, E],
            ),
            ey = a.useCallback(() => {
                if (!et) return;
                let e = Q(),
                    n = Z
                        ? (function (e) {
                              let t = (0, I.K7)(e);
                              if (null == t || !(0, nS.C)(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? (0, I.C)(e);
                              return (
                                  (0, I.My)(e),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: i, messageKey: a } = (0, ez.Wx)(e, t, r),
                                          s = { projectId: e, nonce: i, job: null, thumbUrl: null };
                                      (nA.set(a, s),
                                          (s.job = (0, nS.B)({
                                              capture: (t) => (0 === t ? l : (0, I.C)(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = tZ(e),
                                                              r = tZ(e);
                                                          if (null == l || null == r) return null;
                                                          return (
                                                              tQ(r.ctx, t, e),
                                                              l.ctx.drawImage(n, 0, 0),
                                                              l.ctx.drawImage(r.canvas, 0, 0),
                                                              await l.toBlob()
                                                          );
                                                      } finally {
                                                          n.close();
                                                      }
                                                  })(e, n),
                                              upload: (t) =>
                                                  (0, to.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, to.n6)(e, t.id),
                                              send: (n) => (0, ez.dv)(e, t, [...r, n], { nonce: i }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nN(a, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (nA.delete(a),
                                                          window.setTimeout(() => {
                                                              (nN(a, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                m(_, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        i = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === i) return i;
                    null == uu && (uu = document.createElement("canvas").getContext("2d"));
                    let a = uu;
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
                        m = d.lastIndexOf(" ");
                    return (m > 0 ? d.slice(0, m) : d).trimEnd();
                })(um(eN.current), eq.current, (0, sz.Lj)(_));
                ("" !== l && er(l), D(""), es(null));
            }, [et, Z, t, _, m, Q, D]),
            ek = a.useCallback(
                (e) => {
                    (e.preventDefault(), ey());
                },
                [ey],
            ),
            ew = a.useCallback(() => {
                null == f || U || (B(!0), f());
            }, [f, U]);
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
                            (!(0, ts.vq)(t) ||
                                t === document.body ||
                                t === document.documentElement ||
                                (null != r &&
                                    r.contains(t) &&
                                    null == t.closest('input, textarea, [contenteditable="true"]'))) &&
                                (e.preventDefault(), e.stopPropagation(), i.current()));
                    }
                }, [t, n, l]));
        })({ active: u && null != f, projectId: t, scopeRef: h, onEscape: ew });
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
                            (e.preventDefault(), e.stopPropagation(), es(em?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && (0, I.K7)(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), (0, I.V9)(t));
                        return;
                    }
                    if ("Escape" === e.key && u && null != f) {
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
                [ey, p, u, f, ew, eS, D, ep, eh.length, ex, ej, em, t],
            ),
            eC = a.useCallback(
                (e) => {
                    N && V(e);
                },
                [N, V],
            );
        (0, sR.Vo)({
            event: eb.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eC(t);
            },
        });
        let eN = a.useRef(null),
            eI = a.useCallback(() => {
                let e = R.current;
                v?.((0, sz.Lj)(e), () => {
                    R.current === e && D("");
                });
            }, [v, D]),
            [eE, e_] = a.useState(0),
            [eM, eR] = a.useState(!1);
        a.useEffect(() => {
            if (0 === _.length) return void eR(!1);
            let e = um(eN.current);
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
            let t = setTimeout(() => eR(!1), ud);
            return () => clearTimeout(t);
        }, [_]);
        let eT = a.useMemo(() => ({ "--custom-glow-x": `${eE}px` }), [eE]),
            eL = eM ? ` ${ui.EB}` : "",
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
            className: ui.DA,
            children: [
                ep
                    ? (0, i.jsx)(sJ, {
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
                          className: ui.lN,
                          children: [
                              K.map((e) => (0, i.jsx)(tf.Nl, { draft: e, onRemove: W }, e.localId)),
                              Z ? (0, i.jsx)(sq, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, i.jsx)("span", { className: `${ui.wg} ${ui.LP}${eL}`, style: eT, "aria-hidden": !0 }),
                (0, i.jsx)("span", { className: `${ui.wg} ${ui.L3}${eL}`, style: eT, "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: ui.VA,
                    ref: eN,
                    children: [
                        (0, i.jsx)(sW.A, {
                            navId: "conjure-composer-attach",
                            disabled: !N,
                            buttonClassName: `${ui.Y0} ${ui.nu}`,
                            iconClassName: ui.Qu,
                            onAddFiles: H,
                            onImport: x,
                            onSendToOtherProjects: null != v ? eI : void 0,
                        }),
                        eK
                            ? (0, i.jsx)("div", {
                                  ref: eF,
                                  className: ui.ar,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(
                                      uo,
                                      { text: eB, offering: eU && null == el, typed: null != el },
                                      C ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, i.jsx)(na.A, { id: eG, children: P.intl.string(T.default.ldNl9x) }),
                        (0, i.jsx)(rk.Fu.Provider, {
                            value: t,
                            children: (0, i.jsx)(s_.A, {
                                editor: E,
                                containerClassName: o()(ui.sq, ua.dv),
                                className: ui.jp,
                                readOnly: !N,
                                canFocus: N,
                                onChange: q,
                                onBlur: () => $(null),
                                onKeyDown: eA,
                                onPaste: eC,
                                renderExtraElement: ur,
                                "aria-labelledby": eG,
                                "aria-describedby": eK ? eO : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ep,
                                "aria-controls": ep ? ev : void 0,
                                "aria-activedescendant": ep ? ((0, sX.aI)(ex) ?? void 0) : void 0,
                            }),
                        }),
                        eK ? (0, i.jsx)(na.A, { id: eO, children: e$ }) : null,
                        (0, i.jsx)("div", {
                            className: ui.Sz,
                            children:
                                u && null != f
                                    ? (0, i.jsx)(tc.m, {
                                          text: P.intl.string(T.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, i.jsx)("button", {
                                              type: "button",
                                              className: `${ui.Y0} ${ui.$E}`,
                                              disabled: U,
                                              onClick: ew,
                                              "aria-label": P.intl.string(T.default.wiguT0),
                                              children: (0, i.jsx)(rN.StopIcon, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : S?.tierSettings != null && null != A
                                      ? (0, i.jsx)(sF.A, {
                                            settings: S.tierSettings,
                                            tiers: S.tiers,
                                            choices: S.choices,
                                            disabled: !N,
                                            onChange: A,
                                            className: `${ui.Y0} ${ui.$E}`,
                                            icon: (0, i.jsx)(sI.FiltersHorizontalIcon, {
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
                                  className: ui.fF,
                                  children: [
                                      (0, i.jsx)("div", { className: ui.MT }),
                                      (0, i.jsx)("button", {
                                          type: "submit",
                                          className: ui.rt,
                                          disabled: !et,
                                          "aria-label": P.intl.string(T.default.rxW2cl),
                                          children: (0, i.jsx)(sE.SendMessageIcon, {
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
    ud = 1500;
function um(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var uf = n(709753),
    uh = n(540338);
function ug(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, t6.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var up = n(986109);
let ux = a.createContext(null);
function uv(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = a.useContext(ux),
        [m, f] = a.useState(() => iH.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
        h = a.useCallback((e) => {
            e.target === e.currentTarget && f(!0);
        }, []);
    return (0, i.jsx)("li", {
        onContextMenu: c,
        onAnimationEnd: m ? void 0 : h,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: o()(up.xk, { [up.g5]: m, [up.Qo]: s, [up.q3]: u }),
        children: n,
    });
}
let uj = new Map();
function ub(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let uy = "live_behind",
    uk = "conjureTipDismissals",
    uw = new Set(),
    uS = new Set(),
    uA = 0;
function uC() {
    let e = a1.w.get(uk);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function uN(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return uw.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && uC().anchor[t]?.[e.id] === n;
        case "app":
            return uC().app[t]?.includes(e.id) === !0;
        case "forever":
            return uC().forever.includes(e.id);
    }
}
function uI(e) {
    return (uS.add(e), () => uS.delete(e));
}
function uE(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([rs.A], () => null != n && n.length > 0 && rn({ keys: n }, rs.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: P.intl.string(T.default.F2yVHg) }
        : null;
}
function u_(e) {
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
let uM = [12e4];
var uR = n(292771);
function uT(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([iH.Ay], () => iH.Ay.useReducedMotion),
        [r, s] = a.useState([{ presentation: t, leaving: !1 }]),
        u = r.find((e) => !e.leaving)?.presentation;
    u !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let d = a.useRef(null),
        m = a.useRef(null),
        f = a.useRef(null),
        h = a.useRef(u);
    a.useLayoutEffect(() => {
        let e,
            t,
            n = d.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            i = r?.querySelector("[data-conjure-tip-icon]"),
            a = m.current,
            s = f.current,
            o = r?.offsetHeight ?? 0,
            c =
                null != i
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = i.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((m.current = c), (f.current = o));
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
            className: uR.wg,
            children: r.map((e) =>
                (0, i.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: o()(uR.qd, e.leaving ? uR.dv : uR.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function uP(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var uL = n(247171);
function u$(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: a } = e;
    return (0, i.jsxs)("div", {
        className: o()(uL.row, r),
        children: [
            (0, i.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: o()(uL.gutter, uL[n]),
                "aria-hidden": !0,
                children: (0, i.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, i.jsx)("div", { className: uL.content, children: a }),
        ],
    });
}
var uq = n(830205);
function uD(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(u$, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: uq.aK,
        children: (0, i.jsxs)("div", {
            className: uq.n8,
            children: [
                (0, i.jsx)(v.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: uq.Qq,
                    children: l,
                }),
                null != n
                    ? (0, i.jsx)("div", {
                          className: uq.X8,
                          children: (0, i.jsx)(tc.m, {
                              text: P.intl.string(P.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(ty.K, {
                                  "aria-label": P.intl.string(P.t.WAI6xu),
                                  icon: tr.XSmallIcon,
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
function uF(e) {
    let { projectId: t } = e,
        n = a.useContext(eK.bI);
    return (0, i.jsx)(uD, {
        icon: aw.ShieldIcon,
        children: P.intl.format(T.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, eK.vL)(t, n.guildId));
            },
        }),
    });
}
var uO = n(443865),
    uG = n(716502);
function uz(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(u$, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: uG.Nr,
        children: (0, i.jsxs)("section", {
            className: uG.Qs,
            children: [
                l,
                null != n
                    ? (0, i.jsx)("div", {
                          className: uG.X8,
                          children: (0, i.jsx)(tc.m, {
                              text: P.intl.string(P.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(ty.K, {
                                  "aria-label": P.intl.string(P.t.WAI6xu),
                                  icon: tr.XSmallIcon,
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
function uU(e) {
    let { children: t } = e;
    return (0, i.jsx)(v.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: uG.DD,
        children: t,
    });
}
function uB(e) {
    let { children: t } = e;
    return (0, i.jsx)(v.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: uG.rf,
        children: t,
    });
}
function uK(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: uG.o1, children: t });
}
var uH = n(95635);
function uV(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, eV.A)(t, n);
    return (0, i.jsx)(uD, {
        icon: uH.UploadIcon,
        onDismiss: l,
        children: P.intl.format(T.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let uW = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && uP(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, i.jsx)(uF, { projectId: n });
        },
    },
    {
        id: uy,
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
                (null != n.publishCta && aQ(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(uy)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, i.jsx)(uV, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: i, ideasIntroAnchorId: a } = e;
            return !n || null == a || uP(l) ? null : null != t || r || i ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, i.jsxs)(uz, {
                icon: uO.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, i.jsx)(uU, { children: P.intl.string(T.default.OJlbhX) }),
                    (0, i.jsx)(uB, { children: P.intl.string(T.default["3vJBni"]) }),
                    (0, i.jsx)(uK, {
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
var uX = n(817921);
function uQ(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let i = (function (e, t, n, l, r) {
                let i,
                    s = (0, eK.Ay)(e),
                    u = (0, c.bG)([nG.default], () => nG.default.getCurrentUser()?.id),
                    o = t.at(-1),
                    d = null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                    m = (function (e, t) {
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
                    f = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if (
                                "publish_notice" !== n.kind &&
                                "project_event" !== n.kind &&
                                "context_boundary" !== n.kind
                            ) {
                                if ("user" === n.role) return null;
                                if ((0, t6.BL)(n)) return n;
                                if (!(0, t6.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == f || u_(f) ? null : f,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === ub(t, g.created_at, u) ? g.id : null,
                    x = o?.projectEvent?.type === "remixed" ? o.projectEvent : null,
                    v = x?.id ?? p,
                    j = uE(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([rs.A], () => b > 0 && null == rs.A.getSettings(e), [b, e]),
                    k = (0, uf.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (i = (0, t6.Ji)(t)) || !!(0, t6.B0)(t, t.lastIndexOf(i))) &&
                        (null == f || !u_(f)) &&
                        null == ug(t) &&
                        null == j &&
                        !y &&
                        0 === k.length,
                    idleMs: null != d ? Math.max(0, m - d) : 0,
                    justRemixed: null != x,
                    noTurnsYet: t.every(
                        (e) =>
                            "publish_notice" === e.kind || "project_event" === e.kind || "context_boundary" === e.kind,
                    ),
                    ideasIntroAnchorId: v,
                    messagesSinceShown: (n) => {
                        let l = uj.get(`${e}:${n}`);
                        return null != l ? ub(t, l, u) : null;
                    },
                    isDismissed: (t) => uN(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, uM);
            a.useSyncExternalStore(uI, () => uA);
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
                                uj.set(`${e}:${t}`, n);
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
                                          if (null == e.dismissal || uN(e, t, n)) return;
                                          let l = uC();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  uw.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  a1.w.set(uk, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  a1.w.set(uk, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  a1.w.set(uk, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (uA++, uS.forEach((e) => e()));
                                      })(e.tip, t, i.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(uW, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, i.jsx)(uv, {
              role: "assistant",
              continuation: !0,
              children: (0, i.jsx)("div", {
                  className: uX.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, i.jsx)(uT, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var uZ = n(52133),
    uY = n(732159),
    uJ = n(888366),
    u0 = n(862026),
    u1 = n(291192);
function u2(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = a.useId(),
        r = (0, u0.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, i.jsxs)("div", {
        className: u1.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, i.jsxs)("div", {
                className: u1.Sp,
                children: [
                    (0, i.jsx)("span", { className: u1.q3 }),
                    (0, i.jsxs)("span", {
                        className: u1.g8,
                        children: [
                            (0, i.jsx)(uJ.ChatPlusIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, i.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, i.jsx)("span", { className: u1.q3 }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: u1.nM,
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
                                          (0, i.jsx)(nJ.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, H.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, i.jsx)(uY.u, {
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
var u3 = n(345942),
    u4 = n(727419);
function u5(e) {
    let { guildId: t, update: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            " ",
            P.intl.format(n ? T.default.esEGL5 : T.default["XrN+Bg"], {
                onOpen: () => u4.A.open(t, eb.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var u7 = n(976860);
function u8(e) {
    return (0, c.bG)([eP.Ay, iq.A], () => {
        let t = eP.Ay.getProject(e);
        return null == t ? "" : (iq.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var u9 = n(951465),
    u6 = n(369455);
function oe(e) {
    var t, n, l;
    let r,
        a,
        { projectId: s, notice: u } = e,
        o = u8(s),
        d =
            null ==
            (a = (0, c.bG)([eP.Ay, lu.A], () => {
                let e = eP.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (lu.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: a.id, name: a.name },
        m = (0, c.cf)([eP.Ay, eU.A, lu.A, eX.A], () => {
            let e = eP.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(en.q7.AUTOMOD) === !0 ||
                    eU.A.getPublishStatus(s)?.surface === "automod",
                n = lu.A.getGuild(e.guild_id),
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
                (l = m.automod),
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
                        null != d && (0, u3.u)(d.guildId);
                    },
                },
            ),
            null != m.guildId
                ? (0, i.jsx)(u5, { guildId: m.guildId, update: u.update })
                : !m.automod && u.update && null != u.published_revision
                  ? (0, i.jsx)(ot, { projectId: s, notice: u })
                  : null,
        ],
    });
}
function ot(e) {
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
                                    nn.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: u6.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, u7.pX)(eb.BVt.CHANNEL(t, n, l));
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
                                null != e && (0, u9.A)(e);
                            },
                        }),
              ],
          });
}
var on = n(73153),
    ol = n(505527),
    or = n(367790),
    oi = n(354777),
    oa = n(491182),
    os = n(74096),
    ou = n(549587),
    oo = n(448368),
    oc = n(21299),
    od = n(538355),
    om = n(715628),
    of = n(752636),
    oh = n(9842),
    og = n(589022),
    op = n(967198),
    ox = n(531685),
    ov = n(503275);
let oj = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function ob(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function oy(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function ok(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = oy(e, t),
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
    if (ob(r) && ob(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && ob(oy(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function ow(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([iH.Ay], () => iH.Ay.useReducedMotion),
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
                      for (; i > 0 && ok(t, i);) i--;
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
    let m = a.useRef(0),
        f = a.useRef(0);
    (a.useEffect(() => {
        if (o)
            return (
                (f.current = 0),
                (m.current = requestAnimationFrame(function e(t) {
                    let n = 0 === f.current ? 32 : t - f.current;
                    if (n >= 32) {
                        f.current = t;
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
                                    for (; l > t + 1 && n - l < 12 && oj.has(e.charAt(l - 1));) l--;
                                    return oj.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + a));
                                let u = s;
                                for (; u < t.length && u - s < 32 && ok(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    m.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(m.current)
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
var oS = n(624479),
    oA = n(890377),
    oC = n(92446),
    oN = n(957565),
    oI = n(180227);
function oE(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: o()(oI.QE, { [oI.Rn]: t }),
              children: (0, i.jsx)(ao.Ay, {
                  children: n.map((e) =>
                      (0, i.jsx)(
                          ao.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function o_(e) {
    return oN.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: P.intl.string(P.t.JrGD7E), icon: oS.CopyIcon, onClick: () => (0, oN.C)(e) }]
        : [];
}
function oM(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: P.intl.string(T.default.CXtLD2),
                          tooltip: P.intl.string(T.default.DOb1HM),
                          icon: oA.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: P.intl.string(T.default.urZwpN),
                          icon: tr.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, i.jsx)(oE, { groupStart: n, actions: [...r, ...o_(t)] });
}
function oR(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        a =
            null == l
                ? []
                : [{ id: "restore-version", label: P.intl.string(T.default.H8Jfhu), icon: tS.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: oC.BugIcon, onClick: r }];
    return (0, i.jsx)(oE, { groupStart: n, actions: [...a, ...o_(t), ...s] });
}
let oT = (0, iO.createChannelRecord)({ id: "conjure-builder", type: eb.rbe.DM }),
    oP = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function oL(e, t) {
    return null == e ? e : (0, i.jsx)("div", { className: o()(oI.Yq, { [oI.x1]: t }), children: e });
}
function o$(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let oq = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function oD(e, t, n) {
    let { content: l } = (0, od.A)(e, oq),
        r = a.useMemo(() => ((0, rk.aW)(e.content) ? (0, oi.z2)(sj.U, e, oq).content : null), [e]) ?? l,
        s = a.useMemo(() => ({ message: e, channel: oT, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, i.jsx)(os.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, om.A)(s, r);
}
function oF(e) {
    let [t, n] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = a.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = a.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, oc.m)(e, oT, t.usernameProfile, l),
        u = (0, oc.Jo)(t.avatarProfile, l),
        o = (0, c.bG)([op.A], () => op.A.getGuildId()),
        d = (0, c.bG)([nG.default], () => nG.default.getCurrentUser()),
        m = a.useCallback(
            (t) => {
                let n = nG.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, i.jsx)(og.A, { ...t, user: n, currentUser: d, guildId: o ?? void 0 });
            },
            [d, o, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: m,
        guildId: o ?? void 0,
    };
}
let oO = { formatInline: !0, allowGameMentions: !0 };
function oG(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, od.A)(n, oO),
        u = a.useMemo(() => {
            let e = "" === n.content ? null : (0, rk.aW)(n.content) ? (0, oi.z2)(sj.U, n, oO).content : s;
            return null == l
                ? e
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("span", {
                              className: oI.GV,
                              children: [
                                  (0, i.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: oI.Rj,
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
            [nO.A],
            () => ({
                isReplyAuthorBlocked: nO.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nO.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        m = (0, as.X4)(n),
        f = (0, as.X4)(t),
        g = oF(n);
    return (0, i.jsx)(oo.A, {
        repliedAuthor: m,
        baseAuthor: f,
        baseMessage: t,
        channel: oT,
        referencedMessage: { state: oh.a.LOADED, message: n },
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
function oz(e) {
    let { message: t, author: n } = e,
        l = oF(t);
    return (0, i.jsx)(ou.Ay, {
        message: t,
        channel: oT,
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
function oU(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e,
        o = (0, ov.vm)(l),
        c = a.useMemo(() => (0, as.FT)(o, null), [o]),
        d = a.useMemo(() => (0, lG.W1)(t), [t]),
        m = d?.body ?? t,
        f = (0, sz.Qu)(m),
        h = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, iF.Ay)({ channelId: oT.id, content: m, author: o });
            return (0, iD.rh)({ ...e, timestamp: o$(n, e.timestamp), state: eb.cmJ.SENT });
        }, [m, o, n]);
    return null == h
        ? null
        : (0, i.jsx)(
              oB,
              {
                  message: h,
                  author: c,
                  content: m,
                  selected: d?.label,
                  accessories: r,
                  groupStart: s,
                  onQueuedAction: u,
              },
              f,
          );
}
function oB(e) {
    let { message: t, author: n, content: l, selected: r, accessories: a, groupStart: s = !0, onQueuedAction: u } = e,
        o = oD(t, l);
    return (0, i.jsx)(oa.A, {
        className: oI.yE,
        author: n,
        childrenHeader: s ? (0, i.jsx)(oz, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, i.jsxs)("div", {
                      className: oI.zq,
                      children: [
                          (0, i.jsxs)("span", {
                              className: oI.GV,
                              children: [
                                  (0, i.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: oI.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, i.jsx)("span", { className: oI.WO, children: o }),
                      ],
                  }),
        childrenAccessories: oL(a, "" !== l),
        childrenButtons: (0, i.jsx)(oM, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function oK(e) {
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
        { text: m, revealing: f } = ow(t, { streaming: (0, c.bG)([ox.A], () => o && ox.A.isFocused(), [o]) }),
        h = a.useMemo(() => (0, as.FT)(null, null), []),
        g = a.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, ov.vm)(p),
        v = a.useMemo(() => (null == r ? null : (0, lG.W1)(r.content)), [r]),
        j = a.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, iF.Ay)({ channelId: oT.id, content: v?.body ?? r.content, author: x });
            return (0, iD.rh)({ ...e, id: r.id, timestamp: o$(r.createdAt, e.timestamp), state: eb.cmJ.SENT });
        }, [r, v, x]),
        b = a.useMemo(() => (null == r ? void 0 : { channel_id: oT.id, message_id: r.id }), [r]),
        [y] = a.useState(() => (0, iF.Ay)({ channelId: oT.id, content: "", author: oP })),
        k = a.useMemo(
            () =>
                (0, iD.rh)({
                    ...y,
                    timestamp: o$(n, y.timestamp),
                    state: eb.cmJ.SENT,
                    ...(null != b ? { type: eb.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = a.useMemo(() => k.set("content", m), [k, m]),
        S = a.useMemo(
            () => (0, of.A)({ message: k, channel: oT, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        A = oD(w, m, oI.OS);
    return (0, i.jsxs)("div", {
        className: oI.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, i.jsx)(oa.A, {
                className: oI.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, i.jsx)(oG, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: S,
                childrenMessageContent: A,
                childrenAccessories: oL(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u ? (0, i.jsx)("img", { className: oI.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var oH = n(981879);
function oV(e) {
    let { messageId: t, reaction: n } = e,
        l = a.useMemo(
            () =>
                (0, iD.rh)(
                    { ...(0, iF.Ay)({ channelId: oT.id, content: "" }), id: `conjure:${t}`, state: eb.cmJ.SENT },
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
                (on.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: oT.id,
                    messageId: l.id,
                    users: [oP],
                    emoji: e,
                    reactionType: ol.v.NORMAL,
                }),
                    on.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: oT.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: ol.v.NORMAL,
                    }));
            }
            return (
                t(),
                on.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    on.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, i.jsx)("div", {
            className: oH.H,
            children: (0, i.jsx)(or.A, {
                message: l,
                channel: oT,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var oW = n(442433);
n(775443);
var oX = n(990779),
    oQ = n(155899);
function oZ(e) {
    let { onSelect: t, onClose: n = oW.Z_, onRestoreVersion: l, onViewTrace: r } = e;
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
                          icon: tS.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, i.jsx)(eA.Dr, { id: "view-trace", label: "View Trace", icon: oC.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function oY(e) {
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
            settingsFloating: m = !1,
            secretFloating: f = !1,
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
        b = null != j && null != x ? () => oJ(j, x) : void 0,
        y =
            ((t =
                O() && "assistant" === v.role && (0, t6.BL)(v)
                    ? (v.turn_id ?? v.steps.find((e) => null != e.turn_id)?.turn_id ?? v.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [oX.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : oX.A.getTimingTraces(l).findLast((e) => {
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
    return (0, i.jsx)(uv, {
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
                          void (0, oW.jA)(t, (e) => (0, i.jsx)(oZ, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, i.jsx)(oK, {
            groupStart: n.groupStart,
            buttons: (0, i.jsx)(oR, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: b,
                onViewTrace: k,
            }),
            content: n.content,
            createdAt: v.created_at,
            replyTo: r,
            onJumpToReplied: null != w && null != a ? () => a(w) : void 0,
            accessories: (0, i.jsx)(sS, {
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
                secretRequest: n.active || f ? void 0 : v.secretRequest,
                secretRequestId: v.render_id,
                secretRequestAwaiting: o,
                secretRequestStatus: d,
                settingsRequest: n.active || m ? void 0 : v.settingsRequest,
                settingsAskId: v.id,
                publishCta: n.active ? null : v.publishCta,
                turnId: (0, t6.lb)(v) ?? void 0,
                onPickIdea: g,
                onApprovePlan: p,
                restoreProposal: S,
                publishScheduleProposal: v.publishScheduleProposal,
                publishScheduleProposalCurrent: h,
                onRestoreProposal:
                    null != S && null != x && h
                        ? () =>
                              oJ(
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
function oJ(e, t) {
    (0, oQ.F)({ onConfirm: () => t(e) });
}
var o0 = n(288539),
    o1 = n(677683),
    o2 = n(677690),
    o3 = n(159711);
function o4(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: a } =
            ((t = (0, c.bG)([o1.A], () => o1.A.getOutcome(l))),
            (n = (0, c.bG)(
                [nF.A, nG.default, nO.A],
                () => {
                    let e = t?.status === "pinned" ? nF.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, nD.m1)(e, nG.default, nO.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = P.intl.string(T.default.UGAfl9);
    return null != r
        ? (0, i.jsx)(no, {
              title: s,
              children: (0, i.jsx)(v.E, {
                  className: o3.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? P.intl.formatToPlainString(T.default.gKe6Lw, { channelName: a ?? "" })
                          : P.intl.string(T.default["+kpQ3v"]),
              }),
          })
        : (0, i.jsx)(no, { title: s, children: (0, i.jsx)(o5, { projectId: l }) });
}
function o5(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: u,
            failed: o,
            pin: m,
            skip: f,
        } = (function (e) {
            var t;
            let n = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [la.A, eX.A],
                        () =>
                            null == t
                                ? []
                                : la.A.getChannels(t)
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
                m = l.find((e) => e.id === r) ?? null,
                f = n?.application_id,
                h = a.useCallback(async () => {
                    if (null == m || null == f) return;
                    (u(!0), d(!1));
                    let t = await (0, o2.pk)(m.id, f);
                    (u(!1), t ? (0, o2.tg)(e, { status: "pinned", channelId: m.id }) : d(!0));
                }, [f, e, m]),
                g = a.useCallback(() => (0, o2.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: m,
                setPicked: i,
                pinning: s,
                failed: o,
                pin: h,
                skip: g,
            };
        })(t),
        h = (0, le.A)(n, "voice"),
        g = a.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, i.jsx)("div", {
        className: o3.r,
        children: (0, i.jsxs)(j.B, {
            gap: 12,
            children: [
                (0, i.jsx)(v.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: P.intl.string(T.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, i.jsx)(nT.Z, {
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
                    className: o3.o,
                    children: [
                        (0, i.jsx)(d.$, {
                            variant: "secondary",
                            size: "sm",
                            text: P.intl.string(T.default.Iw0l8o),
                            disabled: u,
                            onClick: f,
                        }),
                        g.length > 0
                            ? (0, i.jsx)(d.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: P.intl.string(T.default.FYI3qr),
                                  disabled: null == r,
                                  loading: u,
                                  onClick: m,
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function o7(e, t, n) {
    return (0, i.jsx)(o0.A, { userId: e, content: `@${t}` }, n);
}
function o8(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            a.useEffect(() => {
                (0, ov.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([nG.default], () => (null == l ? null : nG.default.getUser(l)), [l]),
                i = (0, iz.tx)(r),
                s = u8(e),
                u =
                    (0, c.bG)([lu.A], () => (null == t.guild_id ? null : lu.A.getGuild(t.guild_id)?.name), [
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
        })(t, n, o7),
        r = uE(t, n);
    return "voice_channel_pin" === n.type
        ? (0, i.jsx)(o4, { projectId: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(v.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, i.jsx)(rx, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let o9 = a.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: a, ...s } = e,
                u = n.message,
                o =
                    ((t = "user" === n.kind ? u.id : null),
                    nC.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rk.DW)(u.attachments, u.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, i.jsx)(uv, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: u.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oU, {
                            groupStart: n.groupStart,
                            content: u.content,
                            createdAt: u.created_at,
                            userId: u.user_id,
                            accessories:
                                null != t || null != o || null != u.agentReaction
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              null != t ? (0, i.jsx)(sv.A, { projectId: l, attachments: t }) : null,
                                              null != o ? (0, i.jsx)(sD, { send: o }) : null,
                                              null != u.agentReaction
                                                  ? (0, i.jsx)(oV, { messageId: u.id, reaction: u.agentReaction })
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
                                    return (n) => (0, rw.tp)(e, t.id, n);
                            })(l, u, a),
                        }),
                    });
                }
                case "prose":
                    return (0, i.jsx)(uv, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oK, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: u.created_at,
                            accessories:
                                n.hostsAttachments && null != u.attachments
                                    ? (0, i.jsx)(sv.A, { projectId: l, attachments: u.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, i.jsx)(uv, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sw, {
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
                    return (0, i.jsx)(uv, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oK, {
                            groupStart: n.groupStart,
                            content: null == u.publishNotice ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.publishNotice
                                    ? void 0
                                    : (0, i.jsx)(oe, { projectId: l, notice: u.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, i.jsx)(uv, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oK, {
                            groupStart: n.groupStart,
                            content: null == u.projectEvent ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.projectEvent
                                    ? void 0
                                    : (0, i.jsx)(o8, { projectId: l, event: u.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, i.jsx)(uv, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == u.contextSwitch
                                ? null
                                : (0, i.jsx)(u2, { projectId: l, contextSwitch: u.contextSwitch }),
                    });
                case "interrupted":
                    return (0, i.jsx)(uv, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sw, { projectId: l, interrupted: !0, steps: u.steps }),
                    });
                case "legacyTodos":
                    return (0, i.jsx)(uv, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sw, {
                            projectId: l,
                            steps: o6,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, i.jsx)(oY, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, uZ.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, uZ.A)(e.row, t.row, ["message"]) &&
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
                (0, uZ.A)(e.replyTo, t.replyTo) &&
                (0, uZ.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    o6 = [],
    ce = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    ct = new WeakMap();
function cn(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function cl(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cr = ["wheel", "touchstart", "pointerdown", "keydown"];
function ci(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let ca = a.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: u,
            onApprovePlan: d,
            floatingSettingsMessageId: m,
            floatingSecretRenderId: f,
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
        L = (0, c.bG)([nG.default], () => nG.default.getCurrentUser()?.id),
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
                                        let t = (0, t9.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        i = null != r.clarification && r.clarification.id === t,
                        a = ct.get(r);
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
                                (0, t6.ST)(e) ||
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
                        let i = !(0, t6.BL)(e),
                            a = rI({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = a.lastStreamedMessage?.key,
                            u = (0, t9.C6)(e.steps, { turnActive: i }),
                            { lastWork: o, open: c } = (0, t9.CT)(u, { turnActive: i }),
                            d = u.at(-1)?.index,
                            m = !1;
                        for (let n of u) {
                            if (null != n.prose && ce.test(n.prose.content)) m = !0;
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
                                        turnActive: ne(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = ce.test(e.content ?? "");
                        if (
                            (!0 === e.interrupted || m || f
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
                            (a.showsClosingMessage && !f) ||
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
                    (ct.set(r, { superseded: e, liveCard: i, planned: s }), n.push(...s));
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
                        if (null != l) return aX(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, R)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = aZ.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), aZ.set(t, n)), n);
                      })),
                h,
            );
        }, [n, R, h]),
        q = a.useMemo(() => $.map((e) => e.key), [$]),
        [D, F] = a.useState(null),
        O = (function (e, t, n) {
            if (null == t) return cn(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cl(e, t.endKey, t.end - 1) + 1,
                i = cl(e, t.startKey, t.start);
            return (l && n && r - i > 120 && (i = r - 60), cn(e, i, r));
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
                t = W.current ? ci(S.current) : null;
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
        for (let n of cr) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of cr) e.removeEventListener(n, t);
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
                    return ((n = Math.min(e.length, t.end + 30)), cn(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!i && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cn(e, n, l));
                }
                let a = Math.max(t.start - 30, t.end - 120);
                return a < t.start ? cn(e, a, t.end) : null;
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
                    F(((n = z.current), cn(n, (l = Math.max(0, i - 30)), l + 60))));
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
                if (r && x.current && null != ci(l)) (y(), F(G.current), (W.current = !0), X());
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
    let et = a.useMemo(() => ug(n), [n]),
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
                : (0, t6.BL)(ei)
                  ? ei.awaitingUser
                  : null) ?? void 0,
        es = (0, c.bG)([rs.A], () => rs.A.getSettings(t)?.secrets, [t]),
        eu = (0, uf.WT)(t),
        eo = a.useMemo(() => (0, l8.Mv)(n, es), [n, es]);
    if (!(0, t6.i_)(n)) {
        if ("loading" === l)
            return (0, i.jsx)("ol", {
                className: o()(up.x7, up.jH),
                "aria-busy": !0,
                children: (0, i.jsx)("li", { className: up.Ub, children: (0, i.jsx)(b.y, {}) }),
            });
        let e = "unavailable" === l ? T.default.Td4Sf4 : T.default.V1QiNz;
        return (0, i.jsx)("ol", {
            className: up.x7,
            children: (0, i.jsx)(uv, { role: "assistant", children: (0, i.jsx)(oK, { content: P.intl.string(e) }) }),
        });
    }
    return (0, i.jsx)(ux.Provider, {
        value: H,
        children: (0, i.jsxs)("ol", {
            ref: N,
            className: up.x7,
            children: [
                $.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, i.jsx)(
                            o9,
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
                        o9,
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
                            settingsFloating: n.id === m,
                            secretFloating: n.render_id === f,
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
                              uv,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, i.jsx)(oK, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, i.jsx)(uh.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != ea && ee
                    ? (0, i.jsx)(uv, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, i.jsx)(oK, {
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
                ee ? (0, i.jsx)(uQ, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var cs = n(731084),
    cu = n(336288),
    co = n(187447);
function cc(e) {
    let { activity: t, id: n } = e,
        l = (0, t8.j)(),
        { text: r, revealing: s } = ow(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = a.useRef(null),
        c = a.useRef(!0),
        d = a.useRef(0),
        m = a.useCallback(() => {
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
            className: co.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, i.jsx)(t4.Ch, {
                ref: u,
                onScroll: m,
                className: co.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, i.jsx)("div", {
                    className: o()(sk.PT, co.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: iZ.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cd = n(53659);
function cm(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: s = !1,
            recalling: u = !1,
            controlling: c = !1,
            publishPending: d = !1,
            publishing: m = !1,
            spoken: f,
            onSpokenChange: h,
        } = e,
        g = a.useRef(null),
        p = a.useId(),
        [x, j] = a.useState(null),
        b = (0, cs.xu)({
            activity: t,
            compacting: n,
            saving: l,
            restoring: r,
            remixing: s,
            recalling: u,
            controlling: c,
            publishPending: d,
            publishing: m,
        }),
        y = P.intl.string(b),
        k = b === cs.kx["0"],
        [w, S] = a.useState(f ?? y),
        A = (0, t8.j)();
    (l || (0, cs.E4)(y, w) || (!A && !k)) && w !== y && S(y);
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
        ((E.current = k), !k && (0, cs.E8)(I.current) && S(C.current));
    }, [k]),
        a.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, cs.E8)(I.current) ? _.current + 1 : 0), S((0, cs.Ov)(_.current)))
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
        renderPopout: () => (0, i.jsx)(cc, { id: p, activity: t }),
        children: () =>
            (0, i.jsxs)(nn.D, {
                innerRef: g,
                className: o()(cd.hF, M && cd.Xd),
                "aria-label": P.intl.string(
                    r
                        ? T.default.qqlUiW
                        : b === T.default.j8tmjK
                          ? T.default.j8tmjK
                          : k
                            ? cs.kx["0"]
                            : T.default["Uuj/gh"],
                ),
                "aria-expanded": L,
                "aria-describedby": L ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": P.intl.string(b),
                onClick: $,
                children: [
                    (0, i.jsx)("span", {
                        className: cd.bl,
                        children: (0, i.jsx)(cu.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, i.jsx)("span", {
                        className: cd.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: A
                            ? (0, i.jsx)(sA.o, {
                                  ref: N,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: cd.yE,
                              })
                            : (0, i.jsx)(v.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: cd.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let cf = { second: 1e3, minute: 6e4 };
function ch(e) {
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
var cg = n(719374);
function cp(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = ch(t);
    return (0, i.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: cg.$,
        "data-conjure-turn-timer": !0,
        children: (0, rq.C7)(l),
    });
}
function cx(e) {
    let { startedAt: t } = e,
        n = ch(t, "minute");
    return (0, i.jsx)(na.A, { role: "timer", children: (0, rq.Us)(n) });
}
var cv = n(885574),
    cj = n(242779),
    cb = n(436804);
function cy(e) {
    return e.toLocaleString();
}
function ck(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, i.jsxs)("div", {
        className: cb.Q$,
        children: [
            (0, i.jsxs)("div", {
                className: cb.mf,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, i.jsxs)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [cy((0, cj.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, i.jsxs)(v.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    cy(n.input_tokens),
                    " in \xb7 ",
                    cy(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cy(n.cache_creation_input_tokens)} cache write \xb7 ${cy(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cw(e) {
    let { project: t } = e,
        n = (0, cj.wU)(t.compaction),
        l = (0, cj.wU)(t.classifier),
        r = (0, cj.wU)(t.image),
        a = (0, cj.wV)(t.orchestrator, t.codegen),
        s = (0, cj.wV)(a, n);
    return (0, i.jsxs)("div", {
        className: cb.si,
        role: "dialog",
        "aria-label": P.intl.string(T.default.p5EGzq),
        children: [
            (0, i.jsx)("div", {
                className: cb.Q$,
                children: (0, i.jsxs)("div", {
                    className: cb.mf,
                    children: [
                        (0, i.jsxs)(v.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [cy((0, cj.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, i.jsxs)(v.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(ck, { label: P.intl.string(T.default["9Sj3SX"]), usage: a }),
            (0, i.jsx)(ck, { label: P.intl.string(T.default.ANCEo3), usage: n }),
            (0, i.jsx)(ck, { label: P.intl.string(T.default.ugL6D4), usage: l, cached: !1 }),
            (0, i.jsx)(ck, { label: P.intl.string(T.default.DHr5On), usage: r, cached: !1 }),
            (0, i.jsxs)("div", {
                className: cb.mf,
                children: [
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(T.default["8OUg09"]),
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cj.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cj.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cS(e) {
    let { project: t } = e,
        n = a.useRef(null);
    return (0, i.jsx)(ew.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(cw, { project: t }),
        children: (e) =>
            (0, i.jsx)(nn.D, {
                innerRef: n,
                className: cb.Y$,
                "aria-label": P.intl.string(T.default.Z96gxQ),
                ...e,
                children: (0, i.jsx)(cv.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cA = n(990250);
function cC(e) {
    let { queued: t } = e,
        n = P.intl.string(T.default.hzgPbZ);
    return (0, i.jsxs)("div", {
        className: cA.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, i.jsxs)("div", {
                className: cA.wx,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, i.jsx)(t4.Ch, {
                className: cA.XG,
                children: (0, i.jsx)("ul", {
                    className: cA.p_,
                    children: t.map((e) => (0, i.jsx)(cN, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cN(e) {
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
              className: cA.AS,
              children: (0, i.jsx)(v.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: P.intl.string(T.default["07XimM"]),
              }),
          })
        : (0, i.jsxs)("li", {
              className: cA.AS,
              children: [
                  (0, i.jsx)(v.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cA.Qs,
                      children: t,
                  }),
                  s
                      ? (0, i.jsx)(nJ.Q, {
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
function cI(e) {
    let { queued: t, className: n } = e,
        l = a.useRef(null);
    return (0, i.jsx)(ew.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(cC, { queued: t }),
        children: (e) =>
            (0, i.jsx)(nn.D, {
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
var cE = n(997421);
function c_(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: s,
            recalling: u = !1,
            thinkingActivity: d,
            compacting: m,
            saving: f,
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
                    (0, cs.E8)(e) || e === P.intl.string(T.default.mKK6wB) || e === P.intl.string(T.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, cs.uc)(h),
        S = null != s,
        A = s ?? (n ? l : void 0),
        C = n || r || S || !0 === f;
    return (0, i.jsxs)("div", {
        className: cE.jf,
        children: [
            (0, i.jsxs)("div", {
                className: cE.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    C || u || x || j
                        ? (0, i.jsx)(cm, {
                              activity: d,
                              compacting: m,
                              saving: f,
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
                    null != A ? (0, i.jsx)(cp, { startedAt: A }) : null,
                ],
            }),
            null != A ? (0, i.jsx)(cx, { startedAt: A }) : null,
            0 === p.length ? null : (0, i.jsx)(cI, { queued: p, className: o()(cE.BP, cE.A1) }),
            null == h || null == w
                ? null
                : (0, i.jsxs)("span", {
                      className: cE.BP,
                      children: [
                          (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, i.jsx)(cS, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, i.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(T.default["tCo+ZM"], { status: (0, cs.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cE.XF,
                      children: (0, cs.Db)(g),
                  }),
        ],
    });
}
var cM = n(698638),
    cR = n(608711);
let cT = [P.intl.string(T.default["9w+Chc"]), P.intl.string(T.default.WAvmdq), P.intl.string(T.default.SKsrzl)];
function cP(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        o,
        {
            projectId: m,
            restoreState: f,
            onRestoreVersion: h,
            onImportProject: g,
            escapeScopeRef: p,
            visible: x = !0,
        } = e,
        j = (0, c.bG)([lX.A], () => lX.A.getMessages(m), [m]),
        b = (0, c.bG)([ez.Ay], () => ez.Ay.getConnState(m), [m]),
        y = (0, c.bG)([lX.A], () => lX.A.getProjectUsage(m), [m]),
        k = (0, c.bG)([lX.A], () => lX.A.getThinkingActivity(m), [m]),
        w = (0, c.bG)([lX.A], () => lX.A.isCompacting(m), [m]),
        S = (0, c.bG)([lX.A], () => lX.A.isSaving(m), [m]),
        A = lZ(m),
        C = (0, c.bG)([lK.A], () => lK.A.getModelSettings(m), [m]),
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
                m = a.useRef(!0),
                f = a.useCallback((e) => {
                    ((m.current = e), d(e));
                }, []);
            a.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of cr) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of cr) t.removeEventListener(e, o);
                    };
                }
            }, [e, o]);
            let h = a.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    a = !s.current && r < 32 && m.current;
                t.current = a;
                let u = r > 1 || !m.current;
                (i((e) => (!u === e ? e : !u)), l((e) => (e === a ? e : a)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: n,
                atBottom: r,
                unpin: u,
                releasePinHold: o,
                showsLatest: c,
                showsLatestRef: m,
                handleShowsLatestChange: f,
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
        H = a.useContext(Z.A) === m;
    a.useLayoutEffect(() => {
        if (!H) return;
        let e = { position: J.A.getProjectView(m).chatScroll };
        return ((M.current = e), () => (0, Y.g7)(m, { chatScroll: e.position }));
    }, [H, m]);
    let V = a.useRef(!H);
    (a.useLayoutEffect(() => {
        if (V.current || !(0, t6.i_)(j)) return;
        V.current = !0;
        let e = J.A.getProjectView(m).chatScroll;
        null != e && E.current?.restore(e) !== !0 && null != M.current && (M.current.position = null);
    }, [j, m]),
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
            (0, ez.ensureConnection)(m);
        }, [m]),
        (0, rS.E1)(m, (0, t8.j)()));
    let W = (0, z.rt)(m),
        X = (function (e) {
            let t = (0, eK.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([lu.A], () => (null == n ? null : (lu.A.getGuild(n)?.name ?? null))),
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
        })(m),
        ee = (function (e) {
            let t = (0, c.bG)([rj.A], () => rj.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rb.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rv.A.getSubmitRequestURL();
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
        })(m),
        et =
            ((l = (0, c.bG)([lV.A], () => lV.A.getFailure(m))),
            (r = a.useCallback(() => (0, lW.CM)(m), [m])),
            null == l
                ? null
                : {
                      message: P.intl.format(T.default.Up6Ssw, { reason: l }),
                      retry: { text: P.intl.string(T.default["ywA+ET"]), onClick: r },
                  }),
        en = (0, Q.AJ)(m),
        el = (0, c.bG)([lV.A], () => lV.A.getSetupStartedAt(m), [m]),
        er = a.useCallback(
            (e, t) => {
                (0, ez.dv)(m, e, t);
            },
            [m],
        ),
        ei = a.useCallback(
            (e, t, n) => {
                let l = n ?? er;
                0 === W.annotations.length
                    ? l(e, t)
                    : (l((0, lG.BL)({ annotations: W.annotations, metaComment: e, context: W.context }), t),
                      (0, z.mB)(m));
            },
            [W, er, m],
        ),
        ea = a.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of nA)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, ez.re)(e, l.nonce),
                        (function (e) {
                            let t = nA.get(e);
                            (nA.delete(e), nN(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(m) ||
                lX.A.isThinking(m)) &&
                (0, ez.fu)(m);
        }, [m]),
        es = a.useCallback((e) => (0, nE.RQ)(m, e.implementation_prompt), [m]),
        [eu, eo] = (function (e) {
            let [t, n] = a.useState(() => rC(e)),
                [l, r] = a.useState(e),
                i = l !== e,
                s = i ? rC(e) : t;
            return (i && (r(e), n(s)), [s, n]);
        })(m),
        ec = a.useCallback(() => er(P.intl.string(T.default["t5CN3+"])), [er]),
        ed = a.useCallback((e, t, n) => (0, nE.RQ)(m, e, { clarificationAnswers: t, attachments: n }), [m]),
        em = a.useCallback((e) => (0, lH.X)(m, e), [m]),
        ef = a.useCallback((e) => (0, to.vX)(m, e), [m]),
        eh = a.useCallback((e) => (0, tf.gn)(m, "chat", Array.from(e), ef), [m, ef]),
        eg = a.useCallback(() => (0, nE.RQ)(m, P.intl.string(T.default.Zc7gML)), [m]),
        ep = f?.status === "restoring",
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
        })(m),
        eI = ev?.appBuildRequest != null && (0, t6.BL)(ev) && ev.appBuildRequest.id !== eA ? ev.appBuildRequest : null,
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
        eD = (0, c.bG)([rs.A], () => rs.A.getSettings(m), [m]),
        [eF, eO] = a.useState(null),
        eG = rd(),
        eU =
            null != ev &&
            ((t = ev.id),
            (s = (0, l8.Mv)(j, eD?.secrets)),
            (u = rm(j)),
            j.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, t6.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !rf(e.settingsRequest, eD, eG.has(e.id)))),
            )),
        eB =
            null != ev &&
            "assistant" === ev.role &&
            null != ev.settingsRequest &&
            null == ev.secretRequest &&
            (0, t6.BL)(ev) &&
            ev.id !== eF &&
            ((n = ev.settingsRequest),
            (o = n.keys ?? []),
            null != eD &&
                0 !== o.length &&
                o.every((e) => {
                    let t = eD.schema.find((t) => t.key === e);
                    return null != t && rt.has(t.type);
                })) &&
            rn(ev.settingsRequest, eD) &&
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
        eJ = a.useMemo(() => (0, l8.Qr)(j, (0, l8.Mv)(j, eY)), [j, eY]),
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
        if (null == e3 || null == e || !(0, ts.vq)(t, HTMLElement) || null == e5) return;
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
    let e8 = (0, c.bG)([lX.A], () => lX.A.hasLoadedHistory(m), [m]),
        e9 = (function (e) {
            let t = lZ(e),
                n = (0, c.bG)([eP.Ay], () => null != eP.Ay.getProject(e), [e]),
                l = (0, c.bG)([lX.A], () => lX.A.hasLoadedHistory(e), [e]),
                r = (0, c.bG)([lX.A], () => lX.A.getMessages(e), [e]),
                i = (0, c.bG)([ez.Ay], () => ez.Ay.getConnState(e), [e]),
                [s, u] = a.useState(0);
            return (
                a.useLayoutEffect(() => {
                    (0, lQ.Iy)(e, () => u((e) => e + 1));
                }, [e, n, l, r, t, i]),
                s
            );
        })(m),
        e6 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: e8,
            historyUnavailable: (0, c.bG)([lX.A], () => lX.A.isHistoryUnavailable(m), [m]),
            connState: b,
        }),
        te = !(0, t6.i_)(j),
        tt = "loading" === e6 && te,
        tn = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < m.length; t++) e = (31 * e + m.charCodeAt(t)) % 0x7fffffff;
            return cT[e % cT.length];
        }, [m]),
        tl = ej ? P.intl.string(T.default.Zc7gML) : "greeting" === e6 && te ? tn : null,
        ti = a.useMemo(() => {
            for (let e = j.length - 1; e >= 0; e--) {
                let t = j[e];
                if ("assistant" === t.role && !(0, t6.BL)(t)) return t;
            }
        }, [j]),
        ta = null != ti,
        tu = a.useMemo(() => j.filter((e) => "user" === e.role && "queued" === e.disposition), [j]),
        td = null != ti ? (0, ry.S)(ti) : void 0,
        tm = ej && ex ? eg : void 0,
        th = a.useCallback(() => (0, nE.RQ)(m, P.intl.string(T.default.EMgIuY)), [m]),
        [tg, tp] = a.useState(null),
        [tx, tv] = a.useState(ta);
    (tx !== ta && (tv(ta), ta || tp(null)),
        a.useEffect(() => {
            if (!ta) return;
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
        }, [ta, ti?.steps, F]));
    let tj = F ? tg : "bottom",
        tb = a.useMemo(() => (null != ti ? (0, nt.b9)(ti.steps) : ""), [ti]),
        tk = a.useMemo(() => (null != ti ? ((0, t9.lt)(ti.steps) ?? ti.todos) : void 0), [ti]),
        tw = ti?.provisionalTodo,
        tS = null != ti && ne(ti),
        tA = a.useMemo(() => {
            var e;
            return null != ti ? ((e = ti.steps), rz((0, t9.Jf)(e, !0).tasks)) : void 0;
        }, [ti]);
    return (0, i.jsxs)("section", {
        ref: N,
        "data-conjure-chat": !0,
        className: cR.TE,
        children: [
            ex
                ? (0, i.jsx)(t7.A, {
                      title: P.intl.string(T.default.gy7byi),
                      description: P.intl.string(T.default["dkv/WO"]),
                      icons: cM.ir,
                      onDrop: eh,
                  })
                : null,
            (0, i.jsx)(nk, {
                onJumpToActivity: B,
                line: tb,
                placement: ta && "top" === tj ? "top" : null,
                todos: tk,
                todosLive: tS,
                provisionalTodo: tw,
                agents: tA,
            }),
            (0, i.jsxs)("div", {
                className: cR.JX,
                children: [
                    (0, i.jsx)(t4.Ch, {
                        ref: I,
                        onScroll: K,
                        scrollbarGutter: tt ? "both-edges" : "stable",
                        className: [cR.N$, $ ? null : cR.hB, eX ? cR.J9 : null].filter(Boolean).join(" "),
                        children: (0, i.jsx)(rk.Fu.Provider, {
                            value: m,
                            children: (0, i.jsx)(ca, {
                                projectId: m,
                                messages: j,
                                emptyState: e6,
                                floatingSettingsMessageId: eB?.id,
                                floatingSecretRenderId: e1?.render_id,
                                liveClarificationId: e_?.id,
                                onPickIdea: ex ? es : void 0,
                                onAskForIdeas: ex ? ec : void 0,
                                draftHasText: eu,
                                onApprovePlan: ex ? th : void 0,
                                onRestoreVersion: ep || ta ? void 0 : h,
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
                        className: cR.NJ,
                        children: (0, i.jsx)(c_, {
                            projectId: m,
                            thinking: ta,
                            turnStartedAt: td,
                            restoring: ep,
                            remixStartedAt: el,
                            recalling: tt,
                            thinkingActivity: k,
                            compacting: w,
                            saving: S,
                            projectUsage: y,
                            connState: b,
                            queued: tu,
                        }),
                    }),
                    A
                        ? (0, i.jsx)("div", { ref: e4, className: cR.B5, children: (0, i.jsx)(l5, { projectId: m }) })
                        : null,
                    null == e_
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e4,
                              className: eX ? `${cR.B5} ${cR.J9}` : cR.B5,
                              children:
                                  null != e_.install_scope_switch
                                      ? (0, i.jsx)(
                                            l7,
                                            {
                                                projectId: m,
                                                clarification: e_,
                                                offer: e_.install_scope_switch,
                                                onKept: eS,
                                            },
                                            e_.id,
                                        )
                                      : (0, i.jsx)(
                                            lO,
                                            {
                                                projectId: m,
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
                              className: cR.B5,
                              children: (0, i.jsx)(
                                  nq,
                                  { projectId: m, request: eE, canSend: ex, onDismiss: e$, onSent: eM ? eq : void 0 },
                                  eE.id,
                              ),
                          }),
                    e1?.secretRequest == null
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e4,
                              className: cR.B5,
                              children: (0, i.jsx)(
                                  ra,
                                  {
                                      projectId: m,
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
                              className: cR.B5,
                              children: (0, i.jsx)(
                                  rx,
                                  { askId: eH?.id, projectId: m, request: eV, onDismiss: eW },
                                  eH?.id,
                              ),
                          }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: cR.Jx,
                children: [
                    (0, i.jsx)(nk, {
                        onJumpToActivity: B,
                        line: tb,
                        placement: ta && "bottom" === tj ? "bottom" : null,
                        todos: tk,
                        todosLive: tS,
                        provisionalTodo: tw,
                        agents: tA,
                    }),
                    0 === W.annotations.length
                        ? null
                        : (0, i.jsxs)("div", {
                              className: cR.g0,
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
                                      onClick: () => (0, z.mB)(m),
                                  }),
                              ],
                          }),
                    en ? (0, i.jsx)("div", { className: cR.qB, children: (0, i.jsx)(lB, { projectId: m }) }) : null,
                    null == et
                        ? null
                        : (0, i.jsx)("div", {
                              className: cR.qB,
                              children: (0, i.jsx)(t5.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: et.message,
                                  action: et.retry,
                              }),
                          }),
                    null == X
                        ? null
                        : (0, i.jsxs)("div", {
                              className: cR.Db,
                              children: [
                                  (0, i.jsx)(t5.w, { type: "warning", role: "status", message: X.message }),
                                  (0, i.jsx)("div", {
                                      className: cR.jU,
                                      children: (0, i.jsx)(tc.m, {
                                          text: P.intl.string(P.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, i.jsx)(ty.K, {
                                              "aria-label": P.intl.string(P.t.WAI6xu),
                                              icon: tr.XSmallIcon,
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
                              className: cR.qB,
                              children: (0, i.jsx)(t5.w, {
                                  type: ee.blocked ? "critical" : "warning",
                                  role: ee.blocked ? "alert" : "status",
                                  message: ee.message,
                              }),
                          }),
                    (0, i.jsx)(
                        uc,
                        {
                            projectId: m,
                            escapeScopeRef: p,
                            canSend: ex,
                            running: ta,
                            restoring: ep,
                            onSend: ei,
                            hasPendingContext: W.annotations.length > 0,
                            onInterrupt: ex ? ea : void 0,
                            onUploadFile: ef,
                            onImport: g,
                            onSendToOtherProjects: e7 ? void 0 : eN.open,
                            onApprove: tm,
                            suggestion: tl,
                            questionOpen: e7,
                            secretPending: null != e1,
                            modelSettings: C,
                            onModelSettingsChange: em,
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
var cL = n(761508),
    c$ = n(209695),
    cq = n(207438),
    cD = n(683438),
    cF = n(721507);
function cO(e, t) {
    return String(e).padStart(t, "0");
}
function cG(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cO(l.getHours(), 2)}:${cO(l.getMinutes(), 2)}:${cO(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cO(l.getMilliseconds(), 3)}` : r;
}
var cz = n(667931);
let cU = {
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
    cB = { running: "Running", ok: "Done", error: "Failed" };
function cK(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cH(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function cV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function cW(e) {
    return cH(e.count > 1 ? e.totalMs : e.end - e.start);
}
let cX = ["Arguments", "Result", "Usage", "Details"];
function cQ(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function cZ(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function cY(e) {
    let t = (0, cz.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, cz.lp)(e) ? "interrupted" : "still running";
}
function cJ(e) {
    return [cG(new Date(e.started_at).toISOString()) ?? "", cV(e.spans.length), (0, cz.Sj)((0, cz.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function c0(e) {
    let t = (0, cz.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: i } = (0, cz.N5)(r);
        (n.set(i, (n.get(i) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += c1(r, "in")),
                (l.output += c1(r, "out")),
                (l.cacheRead += c1(r, "cache_read")),
                (l.cacheWrite += c1(r, "cache_write")),
                (l.costUsd += c1(r, "cost_usd"))));
    }
    let r = cz.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function c1(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var c2 = n(738188),
    c3 = n(430993),
    c4 = n(364840),
    c5 = n(224640),
    c7 = n(20742);
let c8 = { collapsed: new Set(), revealed: new Set() };
var c9 = n(872892);
let c6 = {
    op: c9.Q,
    model: c9.i3,
    tool: c9.dH,
    setup: c9.kc,
    worktree: c9.Qx,
    sandbox: c9.QH,
    build: c9.F1,
    platform: c9.Op,
    other: c9.fv,
};
function de(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      cV(t.calls, "model call"),
                      `${cK(t.input)} in`,
                      `${cK(t.output)} out`,
                      `${cK(t.cacheRead)} cache read`,
                      `${cK(t.cacheWrite)} cache write`,
                      cZ(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, i.jsxs)("div", {
        className: c9.M1,
        children: [
            (0, i.jsx)("div", {
                className: c9.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, i.jsx)(
                              "div",
                              {
                                  className: `${c9.DJ} ${c6[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, i.jsx)("div", {
                className: c9.o1,
                children: cz.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cH(n)}`;
                    return (0, i.jsxs)(
                        "span",
                        {
                            className: c9.fI,
                            children: [
                                (0, i.jsx)("span", { className: `${c9.nf} ${c6[e]}` }),
                                (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: cU[e] }),
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
function dt(e) {
    return `conjure-perf-trace-${e}`;
}
function dn(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: a } = e,
        s = (t / l) * 100,
        u = ((n - t) / l) * 100;
    return (0, i.jsxs)("div", {
        className: c9.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(u) },
        children: [
            (0, i.jsx)("div", { className: r }),
            (0, i.jsx)(v.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${c9.p0} ${s + u > 85 ? c9.EU : c9.jh}`,
                children: a,
            }),
        ],
    });
}
function dl(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: u, onExpandSubtree: o } = e,
        c = t.children.length > 0,
        d = l ? ns.ChevronSmallRightIcon : eN.ChevronSmallDownIcon,
        m = a.useCallback(
            (e) => {
                (e.shiftKey && o(t.key), s(t.key));
            },
            [t.key, o, s],
        ),
        f = a.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? o(t.key) : u(t.key));
            },
            [t.key, o, u],
        );
    return (0, i.jsxs)(nn.D, {
        tag: "div",
        role: "treeitem",
        id: dt(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${c9.$y} ${r ? c9.wQ : ""}`,
        onClick: m,
        children: [
            (0, i.jsxs)("div", {
                className: c9.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, i.jsx)(nn.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: c9.ai,
                              onClick: f,
                              children: (0, i.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, i.jsx)("span", { className: c9.YJ }),
                    (0, i.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: c9.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, i.jsx)("span", { className: `${c9.nf} ${c6[t.category]}` }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: c9.eu,
                        children: t.service,
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: c9.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, i.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: c9.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, i.jsx)(c2.WarningIcon, { size: "xs", color: "currentColor", className: c9.ik })
                        : null,
                ],
            }),
            (0, i.jsx)(dn, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${c9.M0} ${c9.Nh}`
                    : t.running
                      ? `${c9.M0} ${c9.rF}`
                      : `${c9.M0} ${c6[t.category]}`,
                duration: cW(t),
            }),
        ],
    });
}
function dr(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, i.jsxs)(nn.D, {
        tag: "div",
        role: "treeitem",
        id: dt(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${c9.$y} ${l ? c9.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, i.jsxs)("div", {
                className: c9.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, i.jsx)("span", {
                        className: c9.ai,
                        children: (0, i.jsx)(ns.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsx)("span", { className: c9.U9 }),
                    (0, i.jsx)("span", { className: `${c9.nf} ${c9.dL}` }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: c9.MQ,
                        children: cV(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, i.jsx)(dn, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${c9.M0} ${c9.ab} ${c9.dL}`,
                duration: cH(t.totalMs),
            }),
        ],
    });
}
function di(e) {
    let { node: t } = e;
    return null == t
        ? (0, i.jsx)(v.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, i.jsxs)("div", {
              className: c9._0,
              children: [
                  (0, i.jsxs)("div", {
                      className: c9.TQ,
                      children: [
                          (0, i.jsx)("span", { className: `${c9.nf} ${c6[t.category]}` }),
                          (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [cQ("Start", `+${cH(e.start)}`), cQ("Duration", cW(e))];
                      e.count > 1
                          ? t.push(
                                cQ("Calls", String(e.count)),
                                cQ("Longest call", cH(e.maxMs)),
                                cQ("Spread over", cH(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(cQ("Self time", cH(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(cQ("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(cQ("Notes", l.join(", "))),
                          null != e.span.error && t.push(cQ("Error", e.span.error)));
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
                              s = "cost_usd" === t ? cZ(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), cQ(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...cX.flatMap((e) => {
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
                                            className: c9.xd,
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
                                                            className: c9.vl,
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
function da(e) {
    let { trace: t } = e,
        n = a.useMemo(() => c0(t), [t]);
    return (0, i.jsx)(de, { stats: n });
}
function ds(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = a.useMemo(() => (null == e ? null : (0, cz.TK)(e)), [e]),
                [n, l] = a.useState(() => (null == t ? c8 : (0, cz.hB)(t))),
                [r, i] = a.useState(null),
                s = a.useRef(null == t ? new Set() : (0, cz.x7)(t));
            a.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cz.x7)(t)), l((n) => (0, cz._0)(n, t, e)));
            }, [t]);
            let u = a.useMemo(() => (null == t ? [] : (0, cz.wu)(t, n)), [t, n]),
                o = a.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cz.IE)(t, e);
                        null != n && l((e) => (0, cz.TN)(e, n));
                    },
                    [t],
                ),
                c = a.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = a.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cz.IE)(t, e);
                        null != n && l((e) => (0, cz.H$)(e, n));
                    },
                    [t],
                ),
                m = a.useCallback(() => {
                    null != t && l((0, cz.vH)(t));
                }, [t]),
                f = a.useCallback(() => {
                    null != t && l((0, cz.rQ)(t));
                }, [t]),
                h = a.useCallback(() => {
                    null != t && l((0, cz.hB)(t));
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
                expandAll: m,
                collapseAll: f,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: u, select: o, toggle: c, reveal: m, expandSubtree: f } = n,
        h = (0, cz.dj)(t),
        g = a.useMemo(() => (0, cz.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        x = a.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === u),
                    i = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == i) return;
                else if ("smaller" === i.kind && ("ArrowRight" === e.key || "Enter" === e.key)) m(i.parentKey);
                else if ("node" === i.kind && "ArrowRight" === e.key && e.shiftKey) f(i.key);
                else if ("node" === i.kind && "ArrowRight" === e.key && r.has(i.key)) c(i.key);
                else {
                    if ("node" !== i.kind || "ArrowLeft" !== e.key || !(i.node.children.length > 0) || r.has(i.key))
                        return;
                    c(i.key);
                }
                (e.preventDefault(),
                    null != t && (o(t.key), document.getElementById(dt(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, f, m, l, o, u, c],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c3.c, {
                children: [
                    (0, i.jsxs)("div", {
                        className: c9.z,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: cY(t),
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: cJ(t),
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
                                      children: `${cV(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, i.jsx)(da, { trace: t }),
                    (0, i.jsxs)("div", {
                        className: c9.KE,
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
                        "aria-activedescendant": null == u ? void 0 : dt(u),
                        className: c9.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: x,
                        children: [
                            (0, i.jsxs)("div", {
                                className: c9.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: c9.So,
                                        children: (0, i.jsx)(v.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: c9.c1,
                                        children: g.map((e) =>
                                            (0, i.jsx)(
                                                v.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${c9.io} ${(e / h) * 100 > 85 ? c9.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cH(e),
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
                                          dl,
                                          {
                                              node: e.node,
                                              extent: h,
                                              collapsed: r.has(e.key),
                                              selected: e.key === u,
                                              onSelect: o,
                                              onToggle: c,
                                              onExpandSubtree: f,
                                          },
                                          e.key,
                                      )
                                    : (0, i.jsx)(dr, { row: e, extent: h, selected: e.key === u, onReveal: m }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(c4.j, { children: (0, i.jsx)(di, { node: s }) }),
        ],
    });
}
function du(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        a = (0, c.bG)([oX.A], () => oX.A.getTimingTrace(l, r), [l, r]),
        s = a?.name ?? "Perf Trace";
    return (0, i.jsxs)(c5.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, i.jsx)(c7.rQ, { title: s }),
            null == a
                ? (0, i.jsx)(c3.c, {
                      children: (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, i.jsx)(ds, { trace: a }),
        ],
    });
}
let dc = { running: c9.Vf, ok: c9.mo, error: c9.Sr };
function dd(e) {
    let { status: t } = e;
    return (0, i.jsx)("span", { className: `${c9.Om} ${dc[t]}`, role: "img", "aria-label": cB[t] });
}
function dm(e, t) {
    (0, H.qf)((n) => (0, i.jsx)(du, { ...n, projectId: e, traceId: t }));
}
function df(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = a.useCallback(() => dm(t, n.id), [t, n.id]);
    return (0, i.jsxs)(nn.D, {
        className: c9.nM,
        onClick: r,
        children: [
            (0, i.jsxs)("div", {
                className: c9.sU,
                children: [
                    (0, i.jsx)(dd, { status: (0, cz.lQ)(n) }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: c9._k,
                        children: n.name,
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: cY(n),
                    }),
                ],
            }),
            (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: cJ(n) }),
            null == l
                ? null
                : (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dh(e) {
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
            (0, cF.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
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
            return (0, i.jsx)(ty.K, {
                ...e,
                buttonRef: l,
                icon: ai.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dg(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([oX.A], () => oX.A.getTimingTraces(t), [t]),
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
                    let t = e.map(c0);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cz.BF.map((e) => ({
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
              className: c9.Ie,
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
              className: c9.nd,
              children: [
                  (0, i.jsxs)("div", {
                      className: c9.Ko,
                      children: [
                          (0, i.jsx)("div", {
                              className: c9.fH,
                              children: (0, i.jsx)(cD.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, i.jsx)(dh, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, i.jsxs)(t4.Ch, {
                      className: c9.XG,
                      children: [
                          (0, i.jsx)(de, { stats: o }),
                          0 === u.length
                              ? (0, i.jsx)(v.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, i.jsx)("ul", {
                                    className: c9.p_,
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
function dp(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dx(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dv(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dj(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function db(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dy(e) {
    return P.intl.string("preview" === e ? T.default["2yLYlG"] : T.default.eiAi57);
}
let dk = ["all", "preview", "stable", "web"];
function dw(e) {
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
function dS(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : P.intl.formatToPlainString(T.default["XO/bN4"], {
              p50: dp(e.memory_p50_bytes ?? 0),
              p999: dp(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dA = {
    db: () => T.default["7l+DFG"],
    db_preview: () => T.default.FAuffi,
    runtime: () => T.default["Gkl+ab"],
    runtime_preview: () => T.default.ynpJzv,
    bot: () => T.default["5/i0cj"],
    bot_preview: () => T.default.m2jsnw,
};
var dC = n(911608),
    dN = n(177427);
function dI(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: dN.KE,
        children: [
            (0, i.jsx)("div", {
                className: dN.IQ,
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
                                  children: P.intl.formatToPlainString(T.default.INVO50, { time: dj(t) }),
                              })
                            : null,
            }),
            (0, i.jsx)(d.$, { variant: "secondary", size: "sm", text: P.intl.string(T.default.oKEgiu), onClick: l }),
        ],
    });
}
function dE(e) {
    let { title: t, children: n } = e;
    return (0, i.jsxs)("section", {
        className: dN.uW,
        "aria-label": t,
        children: [
            (0, i.jsx)(v.E, { variant: "body-xs/semibold", color: "text-muted", className: dN.Gf, children: t }),
            n,
        ],
    });
}
function d_(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: a, state: s } = e;
    return (0, i.jsxs)("div", {
        className: dN.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dN.x7,
                children: [
                    (0, i.jsxs)("span", {
                        className: dN.kS,
                        children: [a, (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, i.jsxs)("span", {
                        className: dN.kS,
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
function dM(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        a = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = a >= 0.9;
    return (0, i.jsxs)("div", {
        className: dN.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dN.x7,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, i.jsx)(dC.z, {
                value: 100 * a,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dN.dh : void 0,
            }),
        ],
    });
}
function dR(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, i.jsx)(d_, {
            label: P.intl.string(T.default.SXP7pD),
            value: P.intl.string(T.default.E5hKVi),
            hint: dw(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, i.jsx)(d_, {
            label: P.intl.string(T.default.SXP7pD),
            value: "\u2014",
            hint: P.intl.string(T.default.AGvoMJ),
        });
    let l = dS(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d_, { label: P.intl.string(T.default["H/X+FI"]), value: dx(n.cpu_ms) }),
            null != l && (0, i.jsx)(d_, { label: P.intl.string(T.default.lmFmMO), value: l }),
        ],
    });
}
function dT(e) {
    let { analytics: t } = e,
        n = P.intl.string(T.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, i.jsx)(dE, {
            title: n,
            children: (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: dw(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dA[t] : null) ? P.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, i.jsx)(dE, {
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
                          d_,
                          {
                              label: n,
                              value: P.intl.formatToPlainString(T.default["w/2voO"], { cpu: dx(t.cpu_ms) }),
                              hint: dS(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dP = n(678708),
    dL = n(414499),
    d$ = n(714800),
    dq = n(81466),
    dD = n(424383),
    dF = n(664121),
    dO = n(816943),
    dG = n(268791),
    dz = n(514042),
    dU = n(872351),
    dB = n(708988),
    dK = n(150934),
    dH = n(417270);
let dV = "Restart Agent",
    dW = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function dX(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function dQ(e, t) {
    return { label: e, value: null != t && "" !== t ? dj(t) : "Unknown", icon: "calendar" };
}
function dZ(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function dY(e, t, n, l) {
    let [r, i] = dW[n.status];
    return { label: e, value: `${dZ(n.bytes)} of ${dZ(n.max)} \xb7 ${r}`, hint: l, icon: t, state: i };
}
function dJ(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dj(e.at);
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
let d0 = { main: "Main vs Remote", wip: "WIP vs Remote" };
function d1(e) {
    let t = `container ${dX(e.local)} \xb7 remote ${dX(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: d0[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dv(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dv(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dv(n)} Ahead, ${dv(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let d2 = ["main", "wip"];
var d3 = n(400154);
let d4 = {
        checkout: dP.FolderIcon,
        edit: f.PencilIcon,
        remote: dL.CloudIcon,
        commits: d$.ListNumberedIcon,
        calendar: dq.CalendarIcon,
        save: dD.SaveIcon,
        objects: dF.ServerIcon,
        download: dO.CloudDownloadIcon,
        size: dG.SpeedometerIcon,
        file: dz.FileIcon,
    },
    d5 = {
        ok: [re.CircleCheckIcon, tI.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [c2.WarningIcon, tI.A.colors.ICON_FEEDBACK_WARNING],
        error: [sP.CircleXIcon, tI.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dU.ArrowSmallUpIcon, tI.A.colors.ICON_MUTED],
        behind: [dB.ArrowSmallDownIcon, tI.A.colors.ICON_MUTED],
    };
function d7(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([oX.A], () => oX.A.getGitInfoState(t), [t]),
            load: a.useCallback(() => (0, cq.DK)(t), [t]),
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
                    `Updated ${dj(r)}`,
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
    return (0, i.jsxs)(dE, {
        title: "Git",
        children: [
            (0, i.jsx)("div", {
                className: d3.Lj,
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
                    if (!e.running || null != e.localError) return [dJ(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            dJ(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dv(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = d2.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(d1))
                        : l.push(
                              { label: "Main", value: dX(e.heads.main), icon: "remote" },
                              { label: "WIP", value: dX(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dv(e.commits) : "Unknown", icon: "commits" },
                            dQ("Oldest Commit", e.oldest),
                            dQ("Newest Commit", e.newest),
                            dJ(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dv(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dv(t.loose)} loose (${dp(t.looseBytes)}) \xb7 ${dv(t.packed)} packed in ${n} (${dp(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dv(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dv(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != i && l.push(i),
                        null != e.localBytes &&
                            l.push(
                                dY(
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
                                  dY("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: a } = e,
                        s = d4[r],
                        [u, o] = null != a ? d5[a] : [null, void 0];
                    return (0, i.jsx)(
                        d_,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === a,
                            icon: (0, i.jsx)(s, { size: "xs", color: tI.A.colors.ICON_MUTED }),
                            state: null != u ? (0, i.jsx)(u, { size: "xs", color: o }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function d8(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: o,
        } = (function (e) {
            let t = (0, c.bG)([oX.A], () => oX.A.getRestartAgentState(e), [e]),
                [n, l] = a.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                i = "restarted" === t.phase ? t.instanceSince : null,
                s = a.useRef(i);
            (a.useEffect(() => {
                null != i && i !== s.current && ((s.current = i), (0, cq.DK)(e));
            }, [e, i]),
                a.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = oX.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cq.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                on.h.dispatch({
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
            let u = a.useCallback(() => (0, cq.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dV,
                },
                restart: u,
            };
        })(t),
        m = a.useCallback(() => {
            (0, E.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: o });
        }, [u, o]);
    return (0, i.jsxs)("div", {
        className: d3.Lj,
        children: [
            (0, i.jsxs)("div", {
                className: d3.nM,
                children: [
                    (0, i.jsx)(dK.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, i.jsx)(d.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dH.RetryIcon,
                        text: dV,
                        loading: l,
                        disabled: l,
                        onClick: m,
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
                            return `Restarted \xb7 new instance since ${dj(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dj(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function d9(e, t) {
    return (0, i.jsx)(d_, {
        label: e,
        value: P.intl.formatToPlainString(T.default.yHJxuP, { count: dv((0, cj.aM)(t)) }),
        hint: `${dv(t.input_tokens)} in \xb7 ${dv(t.output_tokens)} out \xb7 ${dv(t.cache_read_input_tokens)} cache read`,
    });
}
function d6(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        o,
        m,
        f,
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
        } = ((t = (0, c.bG)([oX.A], () => oX.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([oX.A], () => oX.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([oX.A], () => oX.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([oX.A], () => oX.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([oX.A], () => oX.A.getSandboxRestartState(g), [g])),
        (u = (0, c.bG)([lX.A], () => lX.A.isThinking(g), [g])),
        (o = a.useCallback(() => (0, cq.Lj)(g), [g])),
        (m = a.useCallback(() => (0, cq.Lj)(g, !0), [g])),
        (f = a.useCallback(() => (0, cq.bq)(g), [g])),
        (h = p?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: u,
            handleForceCompaction: o,
            handleForceCompactionOverride: m,
            handleRestartWorkspace: f,
            lifetime: p?.agent?.lifetime ?? null,
            limits: h,
            session: p?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, i.jsxs)("div", {
        className: d3.Mf,
        children: [
            (0, i.jsx)(dI, { generatedAt: p?.generated_at ?? null, fetchState: x, onRefresh: j }),
            (0, i.jsx)(dE, {
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
                                  (0, i.jsx)(d_, {
                                      label: P.intl.string(T.default["9nqym2"]),
                                      value: dv((0, cj.a7)(E.cost_usd)),
                                      hint: P.intl.formatToPlainString(T.default.NCdUIh, { count: dv(E.turns) }),
                                  }),
                                  d9(P.intl.string(T.default.xtxP0e), E.orchestrator),
                                  d9(P.intl.string(T.default["9Sj3SX"]), E.codegen),
                                  d9(P.intl.string(T.default.ANCEo3), (0, cj.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, i.jsx)(d_, {
                                          label: P.intl.string(T.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dv(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, i.jsx)(dE, {
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
                                  d9(P.intl.string(T.default["7X3i9d"]), b.total),
                                  (0, i.jsx)(d_, {
                                      label: P.intl.string(T.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, cj.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, i.jsxs)(dE, {
                title: P.intl.string(T.default.NbRk9a),
                children: [
                    null != y && null != R
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(dM, {
                                      label: P.intl.string(T.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: R,
                                      formatValue: dv,
                                  }),
                                  (0, i.jsx)(d_, {
                                      label: P.intl.string(T.default.mRbSns),
                                      value: `${dv(y.tokensBefore)} \u{2192} ${dv(y.tokensAfter)}`,
                                      hint: P.intl.formatToPlainString(T.default.Vq3skS, {
                                          count: dv(y.retainedMessages),
                                          time: dj(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != R
                                      ? P.intl.formatToPlainString(T.default.GMLCNv, { ceiling: dv(R) })
                                      : P.intl.string(T.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, i.jsx)(d_, {
                            label: P.intl.string(T.default["4BX5KK"]),
                            value: `${dv(k.projected)} / ${dv(k.threshold)}`,
                            critical: !0,
                            hint: P.intl.formatToPlainString(T.default["6ngCax"], { time: dj(k.observedAt) }),
                        }),
                    (0, i.jsxs)("div", {
                        className: d3.Lj,
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
                                    let t = dj(e.observedAt);
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
                        className: d3.Lj,
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
                                    let t = dj(e.observedAt);
                                    return P.intl.formatToPlainString(
                                        "restarted" === e.outcome ? T.default["76mfqO"] : T.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(S),
                            }),
                        ],
                    }),
                    (0, i.jsx)(d8, { projectId: g }),
                ],
            }),
            (0, i.jsx)(d7, { projectId: g }),
            (null != M || p?.analytics != null) &&
                (0, i.jsxs)(dE, {
                    title: P.intl.string(T.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(d_, {
                                        label: P.intl.string(T.default.CLXHAs),
                                        value: dj(M.instance_since),
                                        hint: P.intl.string(T.default.UCwUEX),
                                    }),
                                    (0, i.jsx)(d_, { label: P.intl.string(T.default["8V8e1Z"]), value: dv(M.sockets) }),
                                    (0, i.jsx)(d_, {
                                        label: P.intl.string(T.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? P.intl.string(T.default.Wv025I)
                                            : P.intl.string(T.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, i.jsx)(d_, {
                                            label: P.intl.string(T.default["3oUYnv"]),
                                            value: dv(M.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, i.jsx)(dR, { analytics: p.analytics }),
                    ],
                }),
            null != _ &&
                (0, i.jsxs)(dE, {
                    title: P.intl.string(T.default["LEIhp/"]),
                    children: [
                        (0, i.jsx)(d_, {
                            label: P.intl.string(T.default.IlDBN3),
                            value: dv(_.max_subagent_iterations),
                        }),
                        (0, i.jsx)(d_, {
                            label: P.intl.string(T.default["ZdzKR+"]),
                            value: P.intl.formatToPlainString(T.default.yHJxuP, { count: dv(_.context_window_tokens) }),
                        }),
                        (0, i.jsx)(d_, {
                            label: P.intl.string(T.default.cIhN2W),
                            value: P.intl.formatToPlainString(T.default.yHJxuP, {
                                count: dv(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, i.jsx)(d_, {
                            label: P.intl.string(T.default["+fOn/q"]),
                            value: dv(_.max_user_message_chars),
                        }),
                        (0, i.jsx)(d_, { label: P.intl.string(T.default.kIHga0), value: dv(_.max_build_attempts) }),
                        (0, i.jsx)(d_, { label: P.intl.string(T.default.Iw03yW), value: dv(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var me = n(237528),
    mt = n(629584),
    mn = n(531893);
function ml(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, i.jsx)("div", {
              className: mn.ut,
              children: (0, i.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: P.intl.string(T.default.h1SE6R),
              }),
          });
}
function mr(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, i.jsxs)("div", {
              className: mn.qf,
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
              className: mn.qf,
              children: [
                  (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function mi(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, i.jsx)("div", {
              className: mn.ps,
              children: (0, i.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(T.default.V7Ri8H),
              }),
          })
        : null;
}
var ma = n(109079);
let ms = a.memo(function (e) {
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
        className: ma.vK,
        children: [
            (0, i.jsx)(v.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: ma.Mt,
                selectable: !0,
                children: cG(n.ts) ?? n.ts,
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
                className: ma.dm,
                children: n.level,
            }),
            (0, i.jsxs)("div", {
                className: ma.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, i.jsx)("span", { className: ma.Cq, children: (0, i.jsx)(me.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, i.jsx)("span", {
                            className: ma.Cq,
                            title: n.build ?? void 0,
                            children: (0, i.jsx)(me.v, { text: P.intl.string(T.default.TrC9c8), variant: "redLight" }),
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
                                  (0, i.jsxs)(nn.D, {
                                      className: ma.Pq,
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
                                              : (0, i.jsx)(ns.ChevronSmallRightIcon, {
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
                                          className: ma.dF,
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
function mu(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([c$.A], () => c$.A.getLogs(t), [t]),
        l = (0, c.bG)([c$.A], () => c$.A.getHistoryState(t, "logs")),
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
        m = a.useRef(null),
        f = a.useRef(!0);
    a.useEffect(() => {
        f.current && m.current?.scrollToBottom();
    }, [d]);
    let h = a.useCallback(() => {
            let e = m.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = a.useMemo(
            () =>
                dk.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dy(e);
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
        className: ma.$F,
        children: [
            (0, i.jsxs)("div", {
                className: ma.y4,
                children: [
                    (0, i.jsx)(mt.I, {
                        look: "pill",
                        "aria-label": P.intl.string(T.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, i.jsx)("div", {
                        className: ma.KT,
                        children: (0, i.jsx)(cD.I, {
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
            n.length > 0 && (0, i.jsx)(ml, { state: l }),
            (0, i.jsxs)(t4.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: ma.sx,
                children: [
                    (0, i.jsx)(mi, { state: l }),
                    0 === n.length
                        ? (0, i.jsx)(mr, {
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
                          : d.map((e) => (0, i.jsx)(ms, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function mo(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, i.jsx)(a.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, i.jsx)(a.Fragment, { children: r("stable", l) }, "stable")),
        (0, i.jsx)(dE, {
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
function mc(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d_, {
                      label: P.intl.formatToPlainString(T.default["01ZMS4"], { env: dy(n) }),
                      value: ((t = l.connected), P.intl.string(t ? T.default.Wv025I : T.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, i.jsx)(d_, {
                      label: P.intl.string(T.default["z1dh+F"]),
                      value: dv(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dj(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, i.jsx)(d_, { label: P.intl.string(T.default.Iz5GnJ), value: dv(l.guild_count) }),
                  (0, i.jsx)(d_, {
                      label: P.intl.string(T.default["7UqtNv"]),
                      value: dv(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? P.intl.formatToPlainString(T.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dj(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, i.jsx)(d_, {
                          label: P.intl.string(T.default["x3+JXJ"]),
                          value: dv(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, i.jsx)(d_, { label: dy(n), value: P.intl.string(T.default.lTHQss) });
}
function md(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, i.jsx)(d_, {
        label: dy(t),
        value: P.intl.formatToPlainString(T.default["Xq+wHT"], {
            requests: dv(n.requests),
            failures: dv(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? P.intl.formatToPlainString(T.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dj(n.last_failure.at),
                  })
                : P.intl.formatToPlainString(T.default["7KlGT6"], { time: dj(n.since) }),
    });
}
function mm(e) {
    let { env: t, runtime: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d_, {
                label: P.intl.formatToPlainString(T.default["92gVTm"], { env: dy(t) }),
                value: dv(n.connections),
            }),
            n.schedules.map((e) =>
                (0, i.jsx)(
                    d_,
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
                                  ? P.intl.formatToPlainString(T.default.wxAWNv, { time: dj(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function mf(e) {
    let { env: t, metrics: n } = e;
    return (0, i.jsx)(d_, {
        label: dy(t),
        value: P.intl.formatToPlainString(T.default.suAOj9, { calls: dv(n.calls), errors: dv(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function mh(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, i.jsx)(dE, {
            title: t,
            children: (0, i.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: P.intl.string(T.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        a = n.cpu_ms_total > 0;
    return (0, i.jsxs)(dE, {
        title: t,
        children: [
            (0, i.jsx)(d_, {
                label: P.intl.string(T.default.xtD4Zp),
                value: dv(n.requests),
                hint: P.intl.formatToPlainString(T.default["7KlGT6"], { time: dj(n.since) }),
            }),
            (0, i.jsx)(d_, { label: P.intl.string(T.default.gfRhR3), value: dv(n.errors), critical: n.errors > 0 }),
            a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(dM, {
                              label: P.intl.string(T.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dx,
                          }),
                          (0, i.jsx)(d_, {
                              label: P.intl.string(T.default.mSKImM),
                              value: dx(r),
                              hint: P.intl.formatToPlainString(T.default.JqMU05, {
                                  total: dx(n.cpu_ms_total),
                                  wall: dx(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, i.jsx)(d_, {
                      label: P.intl.string(T.default.LEJ5r3),
                      value: P.intl.string(T.default["2Ekb2b"]),
                      hint: P.intl.string(T.default.G0aq7i),
                  }),
            !a &&
                n.wall_ms_total > 0 &&
                (0, i.jsx)(d_, { label: P.intl.string(T.default.xvmL1D), value: dx(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, i.jsx)(d_, { label: P.intl.string(T.default["4sQYwH"]), value: dv(n.exceeded_cpu), critical: !0 }),
            (0, i.jsx)(d_, {
                label: P.intl.string(T.default.bQenOy),
                value: dv(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: P.intl.formatToPlainString(T.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, i.jsx)(d_, { label: P.intl.string(T.default.xgpn4Y), value: db(n.build) }),
        ],
    });
}
function mg(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: P.intl.string(T.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: P.intl.string(T.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: P.intl.string(T.default.eiAi57), metrics: n },
              ];
    return (0, i.jsx)(dE, {
        title: P.intl.string(T.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, i.jsx)(d_, { label: n, value: "\u2014" }, t)
                : (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)(d_, {
                                  label: P.intl.formatToPlainString(T.default.u7kJJ4, { env: n }),
                                  value: dp(l.r2_bytes),
                                  hint: P.intl.formatToPlainString(
                                      l.r2_truncated ? T.default.lH0oQw : T.default.m9h02S,
                                      { count: dv(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, i.jsx)(dM, {
                                      label: P.intl.formatToPlainString(T.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dp,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function mp(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: d3.Mf,
        children: [
            (0, i.jsx)(dI, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(mh, {
                            title: P.intl.string(T.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(mh, {
                            title: P.intl.string(T.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(mg, { status: t }),
                        null != t.bot &&
                            (0, i.jsx)(mo, {
                                title: P.intl.string(T.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, i.jsx)(mc, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, i.jsx)(mo, {
                                title: P.intl.string(T.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, i.jsx)(md, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, i.jsx)(mo, {
                                title: P.intl.string(T.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, i.jsx)(mm, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, i.jsx)(mo, {
                                title: P.intl.string(T.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, i.jsx)(mf, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, i.jsx)(dT, { analytics: t.analytics }),
                        (0, i.jsxs)(dE, {
                            title: P.intl.string(T.default.fQMpFp),
                            children: [
                                (0, i.jsx)(d_, {
                                    label: P.intl.string(T.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? db(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, i.jsx)(d_, {
                                    label: P.intl.string(T.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? db(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var mx = n(592465);
function mv(e) {
    let { projectId: t, onClose: n } = e,
        l = O(),
        [r, s] = a.useState(() => (l && q?.projectId === t ? "trace" : "logs")),
        u = (0, c.bG)([oX.A], () => oX.A.getStatus(t), [t]),
        o = (0, c.bG)([oX.A], () => oX.A.getFetchState(t), [t]),
        d = a.useCallback(() => {
            ((0, cq.R7)(t), (0, cq.DK)(t));
        }, [t]);
    (a.useEffect(() => d(), [d]), a.useEffect(() => (0, ez.Rw)(t), [t]));
    let m = a.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == q || q.projectId !== e) return null;
            let { traceId: t } = q;
            return ((q = null), t);
        })(t);
        return null != e && (dm(t, e), !0);
    }, [t, l]);
    (a.useEffect(() => {
        m();
    }, [m]),
        D(t, () => {
            m() && s("trace");
        }));
    let f = a.useCallback(() => {
            (0, oN.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: oX.A.getStatus(t),
                        last_turn_usage: oX.A.getLastTurnUsage(t),
                        last_compaction: oX.A.getLastCompaction(t),
                        last_compaction_decline: oX.A.getLastCompactionDecline(t),
                        timing_traces: oX.A.getTimingTraces(t),
                        logs: c$.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, _.P0)({ text: P.intl.string(T.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = P.intl.string(T.default["Q4FN+H"]);
    return (0, i.jsxs)("section", {
        className: mx.nd,
        "aria-label": h,
        children: [
            (0, i.jsxs)(tn.Ay, {
                "aria-label": h,
                toolbar: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tn.Ay.Icon, {
                            icon: oS.CopyIcon,
                            tooltip: P.intl.string(T.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, i.jsx)(tn.Ay.Icon, { icon: tr.XSmallIcon, tooltip: P.intl.string(P.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, i.jsx)(tn.Ay.ChannelIcon, { icon: oC.BugIcon, "aria-hidden": !0 }),
                    (0, i.jsx)(tn.Ay.Title, { children: h }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: mx.rf,
                children: [
                    (0, i.jsxs)(cL.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": P.intl.string(T.default.RvvWIh),
                        className: mx.vR,
                        children: [
                            (0, i.jsx)(cL.V.Item, { id: "logs", children: P.intl.string(T.default["+VRYCm"]) }),
                            (0, i.jsx)(cL.V.Item, { id: "worker", children: P.intl.string(T.default["50D0FZ"]) }),
                            (0, i.jsx)(cL.V.Item, { id: "agent", children: P.intl.string(T.default.UkbTK1) }),
                            l ? (0, i.jsx)(cL.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, i.jsx)(mu, { projectId: t })
                        : "worker" === r
                          ? (0, i.jsx)(mp, { status: u, fetchState: o, onRefresh: d })
                          : "trace" === r && l
                            ? (0, i.jsx)(dg, { projectId: t })
                            : (0, i.jsx)(d6, { projectId: t, status: u, fetchState: o, onRefresh: d }),
                ],
            }),
        ],
    });
}
var mj = n(365912),
    mb = n(873715);
function my(e) {
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
let mk = Object.freeze({ x: -1, y: -1 });
function mw(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = my(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var mS = n(192888);
function mA(e, t) {
    return (0, mS.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(mw, () => ({ status: "failed" }));
}
var mC = n(108308);
let mN = { x: 25, y: 21 };
function mI(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function mE(e, t, n, l) {
    let r = mI(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function m_(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function mM(e) {
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
function mR(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: o, annotations: m } = (0, z.rt)(u),
        f = (0, G.Zv)(u),
        h = (0, H.Rv)(),
        g = (0, c.bG)([nG.default], () => nG.default.getCurrentUser()),
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
        Q = o && !f && !h;
    null == D || (Q && D.projectId === u) || F(null);
    let Z = D?.projectId ?? null;
    a.useEffect(() => {
        if (null != Z) return () => (0, nE.xJ)(Z, "design");
    }, [Z]);
    let Y = tv(r, Q);
    a.useEffect(() => {
        if (!Q || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, mb.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? mM(t.response) : null;
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
        if (tx(J.current, Y)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            J.current = Y;
            let t = [];
            for (let e = 0; e < m.length; e += 24) t.push(m.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, mb.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !el.current) return;
                        let n = mM(e.response);
                        null != n && (j(n), (0, z.F5)(u, { url: n.url, title: n.title, viewport: n.viewport }));
                        let l = new Map();
                        (e.response.results.forEach((e, n) => {
                            let r = t[n];
                            if (null == r || "locate" !== e.action || !e.ok) return;
                            let i = my(e.element);
                            null != i && l.set(r.id, i);
                        }),
                            (0, z.AW)(u, l));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Q, Y, x, m, u, r]),
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
                    mA(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || mD(t.target, eo.current.rect, eo.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? A(null)
                                    : "unsupported" === t.status && q(!0);
                            else {
                                let e = (0, lG.Sk)(t.target);
                                (L((t) => (mq(t, e) ? t : e)),
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
            let e = setTimeout(() => U(null), mL);
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
                    ((0, nE.xJ)(u, "design"),
                    X(null),
                    (B.current = !1),
                    F({ projectId: u, target: e, anchor: t, draft: "", at: n, label: (0, lG.Sk)(e) }));
            },
            [u],
        ),
        ed = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / ea, y: (e.clientY - t.top) / ea }), [ea]),
        em = a.useCallback(() => {
            let e = M.current;
            if (null == e) return;
            let t = E.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = _.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(em);
    let ef = a.useCallback(
            (e) => {
                if (null == Y || null != W) return;
                if (((M.current = { x: e.clientX, y: e.clientY }), em(), N(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > m$ || Math.abs(e.clientY - D.at.y) > m$) && (B.current = !0);
                    return;
                }
                if (!es) return void A(null);
                let t = ed(e, Y);
                if ($) {
                    let e = (0, lG.CZ)(eu, t.x, t.y),
                        n = null != e && mD(e, Y, ea) ? null : e;
                    if (null != n) {
                        let e = (0, lG.Sk)(n);
                        L((t) => (mq(t, e) ? t : e));
                    }
                    A((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = et.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((et.current = n), (ee.current = n), er());
            },
            [Y, ea, es, ed, $, eu, D, W, em, er],
        ),
        eh = null == W ? null : m.find((e) => e.id === W.id),
        eg = Q && (C || D?.target.marker != null || eh?.target.marker != null);
    a.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && mA(e, mk);
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
                ec(S, (0, lG.Hm)(S, t.x, t.y), { x: e.clientX, y: e.clientY });
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
                tu.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        tu.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            !(0, ts.vq)(t) ||
                ew.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, mj.J$)(e), !0);
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
                    ec(S, lG.QU, { x: (Y?.left ?? 0) + S.rect.x * ea, y: (Y?.top ?? 0) + S.rect.y * ea }));
            },
            [u, D, W, eu, S, ec, ej, Y, ea],
        ),
        eA = a.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    (((0, lG.Ch)(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, ez.dv)(u, (0, lG.Q9)(D.target, D.draft), e), ei(), A(null)));
            },
            [u, D, ei],
        ),
        eC = a.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, to.vX)(u, e)), [u]),
        eN = a.useCallback(() => {
            null == u ||
                null == W ||
                null == p ||
                ((0, lG.Ch)(W.draft) && ((0, z.pV)(u, p, W.id, W.draft.trim()), X({ ...W, editing: !1 })));
        }, [u, W, p]),
        eI = a.useCallback(() => {
            null != u && null != W && null != p && ((0, z.aC)(u, p, W.id), X(null));
        }, [u, W, p]),
        eE = o
            ? b
                ? P.intl.string(T.default["Eb/YV9"])
                : k
                  ? P.intl.string(T.default.FD30bh)
                  : P.intl.formatToPlainString(T.default.dTSqLF, { count: m.length })
            : "",
        e_ = Q && null != Y,
        eM = C && null == W,
        eR = D?.target ?? eh?.target ?? null,
        eT = D ?? O,
        eP = D ?? (O?.instant === !0 ? null : O),
        eL =
            null != eh && null != Y
                ? (function (e, t) {
                      let { left: n, top: l } = m_(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(mE(eh.target, eh.anchor, Y, ea), Y)
                : null;
    return (
        a.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            mA(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, ta.createPortal)(
            (0, i.jsxs)("div", {
                ref: ew,
                className: mC.Li,
                children: [
                    (0, i.jsx)(na.A, {
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
                                      className: mC.MT,
                                      style: { left: Y.left, top: Y.top, width: Y.width, height: Y.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": P.intl.string(T.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: eS,
                                  }),
                                  null != S && null == S.marker && null == D && null == W
                                      ? (0, i.jsx)(mF, { box: mI(S, Y, ea) })
                                      : null,
                                  (0, i.jsx)("div", {
                                      ref: E,
                                      className: mC.aZ,
                                      children: (0, i.jsx)("div", {
                                          className: mC.xz,
                                          "data-shown": null != S && null == W && null == D ? "" : void 0,
                                          "data-instant": K ? "" : void 0,
                                          children: (0, i.jsxs)(v.E, {
                                              variant: "body-xs/medium",
                                              className: mC.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, i.jsx)("span", { className: mC.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, i.jsxs)("span", {
                                                            className: mC.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      ref: _,
                                      className: mC.Y,
                                      children: eM ? (0, i.jsx)("div", { className: mC.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, i.jsx)("div", {
                                            className: mC.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, i.jsx)("div", {
                                                className: mC.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, i.jsxs)(v.E, {
                                                    variant: "body-xs/medium",
                                                    className: mC.Ux,
                                                    children: [
                                                        (0, i.jsx)("span", {
                                                            className: mC.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, i.jsxs)("span", {
                                                                  className: mC.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eR && null == eR.marker
                                      ? (0, i.jsx)("div", { className: mC.D0, style: mI(eR, Y, ea), "aria-hidden": !0 })
                                      : null,
                                  m.map((e, t) => {
                                      let n = mE(e.target, e.anchor, Y, ea),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, i.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: mC.xL,
                                              style: { ...m_(n, Y), width: 24, height: 24 },
                                              "aria-label": P.intl.formatToPlainString(T.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: (0, lG.Bx)(e.target),
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
                                              children: (0, i.jsx)(mT, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == u
                                      ? null
                                      : (0, i.jsx)(tg, {
                                            projectId: u,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: Y,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != D && (0, lG.Ch)(eT.draft),
                                            onChange: (e) => {
                                                null != D && F({ ...D, draft: e });
                                            },
                                            onSubmit: eA,
                                            onDismiss: ei,
                                            onUploadFile: eC,
                                            closing: null == D,
                                        }),
                                  null != eh && null != W && null != eL
                                      ? (0, i.jsxs)(mP, {
                                            point: eL,
                                            frame: Y,
                                            authorId: eh.authorId,
                                            title: (0, lG.Bx)(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                W.confirmingRemove ? X({ ...W, confirmingRemove: !1 }) : X(null);
                                            },
                                            onMouseLeave: () => {
                                                W.editing || W.confirmingRemove || X(null);
                                            },
                                            children: [
                                                W.editing
                                                    ? (0, i.jsx)(nP.f, {
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
                                                          className: mC.aC,
                                                          children: eh.comment,
                                                      }),
                                                (0, z.It)(eh, p)
                                                    ? (0, i.jsx)("div", {
                                                          className: mC.eB,
                                                          children: W.confirmingRemove
                                                              ? (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(v.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: mC.nv,
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
                                                                                  disabled: !(0, lG.Ch)(W.draft),
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
function mT(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([nG.default], () => nG.default.getUser(t), [t]);
    return (0, i.jsx)(iW.eu, {
        src: null == n ? null : iQ.Ay.getUserAvatarURL(n),
        size: iX._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function mP(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        { point: o, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = a.useRef(null),
        j = a.useRef(null),
        [b, y] = a.useState(mN);
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
        className: mC.Nr,
        style: C,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, i.jsxs)("div", {
                className: mC.MY,
                children: [
                    (0, i.jsx)("span", { ref: j, className: mC.ip, children: (0, i.jsx)(mT, { authorId: d }) }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: mC.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: mC.zI, children: p }),
        ],
    });
}
let mL = 300,
    m$ = 2;
function mq(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function mD(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function mF(e) {
    let { box: t } = e;
    return (0, i.jsx)("div", { className: mC.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var mO = n(318774),
    mG = n(697744),
    mz = n(130324);
function mU(e) {
    let t = (0, mG.c)(),
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
    let r = (0, t8.j)();
    return (
        a.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mB(e) {
    let { className: t } = e,
        { Component: n, events: l } = mU(3e4);
    return (0, i.jsxs)("div", {
        className: o()(t, mz.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, i.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: mz.ol,
                children: P.intl.string(T.default.AyiQEp),
            }),
        ],
    });
}
var mK = n(251363),
    mH = n(944142),
    mV = n(532247),
    mW = n(501628);
function mX(e) {
    let { progress: t } = e,
        { Component: n } = mU(1500),
        l = F.Q_.useSetting();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, i.jsx)("div", {
                className: mW.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, i.jsx)(
                        "span",
                        {
                            className: mW.PM,
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
function mQ(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, c.bG)([mH.A], () => (s ? mH.A.getLiveReload(t) : null), [s, t]),
        o = (0, e$.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, mV.dv)(e),
                [r, i] = a.useState(null),
                [s, u] = a.useState(l),
                [o, d] = a.useState(t);
            s !== l && (u(l), d(t), i(null != l || o ? null : (0, mV.QP)(e, s)));
            let m = (0, c.bG)(
                    [ep.A],
                    () => {
                        let e = ep.A.getFrame(n);
                        return (0, ey.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [n],
                ),
                f = a.useRef(m),
                h = a.useRef(!1);
            return (
                a.useEffect(() => {
                    ((f.current = m), m && (h.current = !0));
                }, [m]),
                a.useEffect(() => {
                    if (null == r) return;
                    function e() {
                        return i(null);
                    }
                    function t(t) {
                        null != t.target && t.target === (0, mK.ow)(null, n) && e();
                    }
                    ((h.current = f.current), document.addEventListener("load", t, !0));
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
        })(d, m, o),
        h = m ? null : (0, mV.h_)(d, u?.step ?? null, f);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(na.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, i.jsx)("div", {
                      className: mW.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, i.jsx)(mX, { progress: h }),
                  })
                : null,
        ],
    });
}
let mZ = 0;
var mY = n(782134),
    mJ = n(357858),
    m0 = n(343030),
    m1 = n(11411),
    m2 = n(111518),
    m3 = n(240666);
let m4 = { width: 1 / 0, height: 1 / 0 };
function m5(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m4;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var m7 = n(702083);
function m8(e) {
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
        m = n ? m5(l, d ?? void 0) : null;
    return (0, i.jsx)("div", {
        ref: r,
        className: o()(m7.dw, { [m7.PQ]: null != m }),
        children: (0, i.jsx)("div", { className: o()(m7.R9, { [m7.Vg]: null != m }), style: m ?? void 0, children: t }),
    });
}
var m9 = n(347927);
function m6(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, i.jsxs)("div", {
        className: o()(m9.Bf, l && m9.Qx),
        children: [
            (0, i.jsxs)("div", {
                className: m9.Ux,
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
var fe = n(957272);
function ft(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: a, state: s } = (0, m2.A)({ applicationId: t, surface: n, launch: l });
    if (((0, m3.A)(t, n), s === m2.n.Launched)) {
        let e = (0, i.jsx)(m1.A, { frameId: a.id, level: m0.A.WithinAppContent, className: fe.Z7, overlay: r });
        return (0, eD.Q5)(n) ? (0, i.jsx)(m8, { children: e }) : e;
    }
    return (0, i.jsx)(fn, { state: s });
}
function fn(e) {
    let { state: t } = e;
    switch (t) {
        case m2.n.RenderingElsewhere:
            return (0, i.jsx)("div", {
                className: fe.qs,
                children: (0, i.jsx)(m6, {
                    title: P.intl.string(T.default["9kpdo7"]),
                    body: P.intl.string(T.default.iIA8Nj),
                }),
            });
        case m2.n.NoApplication:
            return (0, i.jsx)(mB, { className: fe.qs });
        case m2.n.DoesNotSupportSurface:
            return (0, i.jsx)("div", {
                className: fe.qs,
                children: (0, i.jsx)(m6, {
                    title: P.intl.string(T.default["7k4GyN"]),
                    body: P.intl.string(T.default.zdIy3R),
                }),
            });
        case m2.n.Error:
            return (0, i.jsxs)("div", {
                className: fe.qs,
                children: [
                    (0, i.jsx)(x.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: P.intl.string(T.default.lTPbnG),
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: fe.tj,
                        children: P.intl.string(T.default.e6GiAZ),
                    }),
                ],
            });
        case m2.n.AwaitingLaunch:
        case m2.n.Loading:
            return (0, i.jsx)("div", { className: fe.qs, children: (0, i.jsx)(b.y, {}) });
    }
}
var fl = n(308528),
    fr = n(334738),
    fi = n(699344),
    fa = n(365971),
    fs = n(703462);
function fu(e) {
    let { message: t } = e;
    return (0, i.jsxs)("div", {
        className: fs.f,
        children: [
            (0, i.jsx)(aS.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function fo() {
    return (0, i.jsx)("div", { className: fs.f, children: (0, i.jsx)(b.y, {}) });
}
function fc(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = a.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([nF.A], () => (null != o ? nF.A.getChannel(o) : null), [o]);
    ((t = d?.id ?? null),
        a.useEffect(() => {
            null != t && fl.A.preload(eb.ME, t);
        }, [t]),
        (n = (0, c.bG)([ox.A], () => ox.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, fa.Xg)();
            return (
                (0, fr.yl)(t, e),
                () => {
                    (0, fr.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = a.useState(null),
        h = m === r;
    return (a.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, ee.CN)(l).then(
                (t) => {
                    e || u({ previewApplicationId: r, channelId: t });
                },
                () => {
                    e || f(r);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [l, r, d, h]),
    h)
        ? (0, i.jsx)(fu, { message: P.intl.string(T.default["VP/O8s"]) })
        : null == d
          ? (0, i.jsx)(fo, {})
          : (0, i.jsx)("div", {
                className: fs.g,
                children: (0, i.jsx)(fi.A, { channel: d, guild: null, chatInputType: s2.oU.SIDEBAR }, d.id),
            });
}
var fd = n(765671),
    fm = n(596977),
    ff = n(921853),
    fh = n(582063);
function fg(e) {
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
        className: fh.aF,
        children: [
            (0, i.jsx)(tc.m, {
                text: u,
                position: "top",
                children: (0, i.jsx)(ty.K, {
                    icon: ff.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(-1),
                }),
            }),
            (0, i.jsx)("div", {
                className: fh.Dn,
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
            (0, i.jsx)(tc.m, {
                text: o,
                position: "top",
                children: (0, i.jsx)(ty.K, {
                    icon: ns.ChevronSmallRightIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var fp = n(625903),
    fx = n(666476);
let fv = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function fj() {
    (0, _.P0)({ text: P.intl.string(T.default.jj3abP), variant: "critical" });
}
function fb(e) {
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
                    return (0, i.jsx)(fy, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, i.jsx)("div", {
                        ref: n,
                        className: fh.m2,
                        children: (0, i.jsx)(tc.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, i.jsx)(ty.K, {
                                "aria-label": r,
                                icon: fp.SettingsIcon,
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
                accept: fv.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (fv.includes(n.type)
                                ? n.size > fx.aI
                                    ? (0, _.P0)({ text: P.intl.string(T.default.T8Spiu), variant: "critical" })
                                    : (0, r6.M$)(t, n).catch(fj)
                                : (0, _.P0)({ text: P.intl.string(T.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function fy(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([r9.A], () => r9.A.getBackground(t)),
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
                        icon: lA.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, i.jsx)(eA.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: P.intl.string(T.default.AiAz8J),
                        icon: dH.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, r6.Og)(t).catch(fj));
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
                        (0, r6.Y1)(t, !a) || fj();
                    },
                }),
            }),
        ],
    });
}
function fk(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: u, height: o } = (0, fd.Ay)(),
        { captures: c, selected: d } = r8(n),
        m = (function (e, t, n) {
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
        a.useEffect(() => (0, fm.L0)(), []),
        (0, i.jsxs)("div", {
            className: fh.JH,
            children: [
                (0, i.jsx)(it, { projectId: n, gameCaptures: !0 }),
                (0, i.jsx)("div", {
                    ref: s,
                    className: fh.dw,
                    children: (0, i.jsx)("div", {
                        className: fh.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${m.top}px`,
                            "--custom-conjure-overlay-widget-end": `${m.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(m.scale),
                        },
                        children: (0, i.jsx)(ft, { applicationId: t, surface: ey.ZN, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, i.jsx)(fb, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, i.jsx)(fg, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function fw(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, i.jsx)(m6, {
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
var fS = n(409478),
    fA = n(652227);
function fC(e) {
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
            overlayWidgetSize: m = el,
            projectId: f,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([lV.A], () => null != f && null != lV.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, i.jsx)("div", { className: fA.qs, children: (0, i.jsx)(b.y, {}) })
        : s?.type === "bot_install"
          ? (0, i.jsx)("div", {
                className: fA.qs,
                children: (0, i.jsx)(fw, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : a
            ? null == t
                ? null
                : (0, i.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: fA.RG,
                      children: [
                          (0, eu.yf)(u, o)
                              ? g
                                  ? (0, i.jsx)(fN, { projectId: f, onResume: p })
                                  : (0, i.jsx)(ft, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === o && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, i.jsx)("div", {
                                        className: fA.qs,
                                        children: (0, i.jsx)(m6, {
                                            wide: !0,
                                            title: P.intl.string(T.default["08U+YO"]),
                                            body: P.intl.string(T.default.pKBfrc),
                                        }),
                                    })
                                  : (0, i.jsx)(fS.A, { applicationId: d })
                              : null,
                          "overlay" === o && u.modes.includes("overlay")
                              ? (0, i.jsx)(fk, { applicationId: t, projectId: f, size: m, frameOverlay: h?.(ey.ZN) })
                              : null,
                          "bot" === o && null != n && null != f
                              ? (0, i.jsx)(fc, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, i.jsx)("div", { className: fA.qs, children: (0, i.jsx)(b.y, {}) })
              : (0, i.jsx)(mB, { className: fA.qs });
}
function fN(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mJ.Pu)(t),
        (0, i.jsx)("div", {
            className: fA.qs,
            children: (0, i.jsx)(m6, {
                wide: !0,
                title: P.intl.string(T.default.MMWEH2),
                body: P.intl.string(T.default.iKSu55),
                children:
                    null != n
                        ? (0, i.jsx)(d.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mY.PlayIcon,
                              text: P.intl.string(T.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var fI = n(750506),
    fE = n(867193),
    f_ = n(539197),
    fM = n(977020);
function fR(e) {
    let { projectId: t } = e,
        n = (0, f_.X2)(t),
        l = (function (e) {
            let [t, n] = a.useState(null);
            return (
                a.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, f_.Ie)(e);
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
    function m(e, t) {
        return { "--custom-conjure-cursor-x": `${e * d}px`, "--custom-conjure-cursor-y": `${t * d}px` };
    }
    return (0, i.jsxs)("div", {
        className: fM.$Q,
        style: { left: r, top: s, width: u, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [f_.t$]: "",
        children: [
            n.presses > 0
                ? (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)("div", { className: o()(fM.hN, fM.vW), style: m(n.pressX, n.pressY) }),
                              (0, i.jsx)("div", { className: o()(fM.hN, fM.A7), style: m(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, i.jsx)("svg", {
                className: o()(fM.UE, { [fM.SP]: n.shown, [fM.Vq]: n.pressed, [fM.GP]: n.dipping }),
                style: m(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, i.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var fT = n(417760);
function fP(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([lX.A], () => null != e && lX.A.isThinking(e)),
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
        m = "controlling" === t,
        f = P.intl.string(m ? (u ? T.default["VJW/5P"] : T.default["+hD2Iz"]) : T.default["h+i1r9"]),
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
              className: o()(fT.M0, fT.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  m
                      ? (0, i.jsx)(cu.i, { size: 12, color: "currentColor" })
                      : (0, i.jsx)(aY.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "none", className: fT.ID, children: f }),
                  m ? (0, i.jsx)(na.A, { children: P.intl.string(T.default.fg1sor) }) : null,
                  m ? (0, i.jsx)("div", { className: fT.lC, children: h }) : null,
              ],
          })
        : (0, i.jsxs)("div", {
              className: fT.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, i.jsxs)("div", {
                      className: fT.sp,
                      children: [
                          (0, i.jsx)(aY.SparklesIcon, { size: "sm", color: "currentColor" }),
                          m ? (0, i.jsx)(cu.i, { size: 12, color: "currentColor" }) : null,
                          (0, i.jsxs)("div", {
                              className: fT.f4,
                              children: [
                                  (0, i.jsx)(v.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: fT.w9,
                                      children: f,
                                  }),
                                  m
                                      ? (0, i.jsx)(v.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: fT.Rb,
                                            children: P.intl.string(T.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  m ? (0, i.jsx)("div", { className: fT.lC, children: h }) : null,
              ],
          });
}
function fL(e) {
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
    let [m, f] = a.useState(null),
        [h, g] = a.useState(null),
        [p, x] = a.useState(null),
        v = "idle" !== o;
    a.useEffect(() => {
        if (!v) return;
        function e() {
            let e = tp(r());
            f((t) => (tx(t, e) ? t : e));
            let t = null == h ? null : tp(h);
            (x((e) => (tx(e, t) ? e : t)), null != h && (0, fE.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, fE.C)(0));
            }
        );
    }, [v, r, h]);
    let j = "idle" !== o && null != m,
        b = j && "controlling" === o && !c,
        y = null != m && m.width < 420,
        k = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height },
        w =
            null == m
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
                  })(m, p),
        S = (function () {
            let [e] = a.useContext(fI.uY),
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
                      className: fT.D,
                      "data-phase": o,
                      children: (0, i.jsx)("div", {
                          className: fT.QF,
                          children: (0, i.jsx)(fP, { phase: o, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, ta.createPortal)(
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(na.A, {
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
                ? (0, ta.createPortal)(
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: fT.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", {
                                  className: fT.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)(fR, { projectId: t }),
                          ],
                      }),
                      S,
                  )
                : null,
        ],
    });
}
var f$ = n(399503),
    fq = n(853555),
    fD = n(944100),
    fF = n(327152),
    fO = n(187645);
let fG = { width: 1280, height: 720 },
    fz = new Map(),
    fU = !1;
function fB() {
    let e = new Map();
    for (let t of new Set([...lX.A.getActivityOrderedProjectIds(), ...(0, G.T7)()])) {
        if (!(lX.A.isThinking(t) || (0, G.wK)(t)) || et.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eP.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, eD.Rc)(t), (0, eD.Th)(t)].find(ey.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...fz]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            fz.delete(t),
            n.unregisterLookup(),
            fD.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, fF.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        fz.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = fO.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    fK(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (fz.set(e, l),
                    (l.unregisterLookup = (0, fq.Ng)(e, () => (0, mK.n5)(n, t))),
                    fD.A.registerFrameTarget(t, n, m0.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of fz) fK(t.element, e, t.frameId);
}
function fK(e, t, n) {
    if (ep.A.getFrame(n)?.surface.type === eo.U.OVERLAY) {
        let l = ea(eP.Ay.getProject(t));
        (e.classList.remove(fO.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, fF.Pn)(n, l));
        return;
    }
    let l = eq.A.isBuilderPreviewMobile();
    e.classList.toggle(fO.L, !l);
    let r = l ? m5(eq.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, fF.Pn)(n, r ?? fG));
}
var fH = n(873727),
    fV = n(850333),
    fW = n(418842),
    fX = n(413599);
let fQ = 0;
var fZ = n(487887);
let fY = null;
var fJ = n(949621);
function f0(e) {
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
    return (0, i.jsx)(ni.u, {
        title: r,
        body: P.intl.string(l ? T.default.r8rVq1 : T.default.IZMyda),
        position: "bottom",
        children: (0, i.jsx)("span", { className: fJ.I, tabIndex: 0, children: (0, i.jsx)(me.v, { text: r }) }),
    });
}
var f1 = n(541940);
function f2(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: d,
            content: m,
            sidebar: f,
            showsFrame: h,
            paused: g,
        } = e,
        [p, x] = a.useState(null),
        v = (0, e$.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([fX.A], () => (0, fH.x4)(fX.A.theme)),
            l = (0, c.bG)([fV.A], () => fV.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, c.cf)([iH.Ay], () => ({
                reducedMotion: iH.Ay.useReducedMotion,
                fontScale: (0, fH.U0)(),
                highContrast: iH.Ay.isHighContrastModeEnabled,
                forcedColors: iH.Ay.useForcedColors,
                underlineLinks: iH.Ay.alwaysShowLinkDecorations,
            })),
            d = F.hH.useSetting(),
            m = (0, fW.C)(),
            f = (0, c.bG)(
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
                let l = (0, mK.n5)(e, t);
                if (null == l) return;
                p.current = l;
                let a = {
                    revision: ++fQ,
                    baseTheme: n,
                    customTheme: (0, fH.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                    formFactor: f,
                };
                (0, mS.W)(l, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, i, f, t, s, d, e, r, m, o]),
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
                let n = (0, mK.n5)(e, t);
                null != n && n !== p.current && j();
            }),
            a.useEffect(() => {
                function n(n) {
                    n.target === (0, mK.n5)(e, t) && ((p.current = null), j());
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
            if (null != t) return (0, fq.Ng)(t, () => (0, mK.n5)(p, j));
        }, [t, p, j]));
    let b = a.useCallback(() => (0, mK.ow)(p, j), [p, j]),
        y = a.useCallback(() => (h ? (0, mK.ow)(p, j) : p), [h, p, j]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: o()(f1.Mh, d),
                children: [
                    u,
                    g
                        ? null
                        : (0, i.jsx)(fL, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, i.jsx)("div", { ref: x, className: f1.fm, children: m }),
                ],
            }),
            f,
            g
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(mR, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, i.jsx)(t1, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function f3(e) {
    let t,
        {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            frameLaunchParams: d,
            header: m,
            chatOpen: f,
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
    (0, f$.k)(n, A);
    let E = u.type === eo.U.MAIN || (0, eD.Q5)(u);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([eq.A], () => ({
            mobile: eq.A.isBuilderPreviewMobile(),
            landscape: eq.A.isBuilderPreviewLandscape(),
        }));
        a.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? fZ.aX.LANDSCAPE : fZ.aX.PORTRAIT), (fY = e));
                else {
                    if (fY !== e) return;
                    ((l = fZ.aX.UNHANDLED), (fY = null));
                }
                on.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(E ? r : null);
    let _ = a.useRef(null),
        [M, R] = a.useState(0);
    (a.useEffect(() => {
        if (null == n) return;
        (0, t3.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, t3.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = a.useRef(0)),
        a.useLayoutEffect(() => {
            E && ((t.current = ++mZ), (0, ee.HV)(r));
        }, [r, E]),
        a.useEffect(() => {
            if (!E) return;
            let e = t.current;
            return () => {
                e === mZ && (0, ee.HV)(null);
            };
        }, [r, E]),
        a.useEffect(() => {
            null != n &&
                ((0, ez.ensureConnection)(n),
                fU ||
                    ((fU = !0),
                    lX.A.addChangeListener(fB),
                    eP.Ay.addChangeListener(fB),
                    ep.A.addChangeListener(fB),
                    eq.A.addChangeListener(fB),
                    et.A.addChangeListener(fB),
                    (0, G.W3)(fB),
                    fB()));
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
        $ = f || E;
    return (0, i.jsx)("div", {
        ref: _,
        className: f1.LB,
        children: (0, i.jsx)(f2, {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            header: m,
            showsFrame: (0, eu.yf)(w, S),
            paused: N,
            mainClassName: null == m ? void 0 : o()(f1.ez, { [f1.zt]: f }),
            content: (0, i.jsx)(fC, {
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
                    (0, i.jsx)(mQ, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
            }),
            sidebar:
                null != n && $
                    ? (0, i.jsx)("div", {
                          className: f ? f1.v7 : f1.LL,
                          children: (0, i.jsx)(ti.A, {
                              sidebarType: ti.X.CallChatSidebar,
                              maxWidth: L,
                              capturePointer: !0,
                              children: (0, i.jsx)("div", {
                                  className: f1.cO,
                                  children: v
                                      ? (0, i.jsx)(mv, { projectId: n, onClose: j ?? (() => {}) }, n)
                                      : (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(mO.Ay, { projectId: n }),
                                                (0, i.jsxs)(tn.Ay, {
                                                    "aria-label": P.intl.string(P.t["/VQax8"]),
                                                    toolbar: (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            g,
                                                            null == h
                                                                ? null
                                                                : (0, i.jsx)(tn.Ay.Icon, {
                                                                      icon: tr.XSmallIcon,
                                                                      tooltip: P.intl.string(T.default.JD6Oit),
                                                                      onClick: h,
                                                                  }),
                                                        ],
                                                    }),
                                                    children: [
                                                        (0, i.jsx)(tn.Ay.Title, {
                                                            children: P.intl.string(P.t["/VQax8"]),
                                                        }),
                                                        (0, i.jsx)(f0, { projectId: n }),
                                                    ],
                                                }),
                                                (0, i.jsx)("div", {
                                                    className: f1.cb,
                                                    children: (0, i.jsx)(
                                                        cP,
                                                        {
                                                            projectId: n,
                                                            restoreState: b,
                                                            onRestoreVersion: p,
                                                            onImportProject: x,
                                                            escapeScopeRef: _,
                                                            visible: f,
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
var f4 = n(705427),
    f5 = n(606128),
    f7 = n(323140);
function f8(e) {
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
        em = a.useCallback(() => {
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
        })(s, em),
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
                m = s?.preview_ready === !0,
                f = s?.has_activity === !0,
                h = s?.bot_permissions_changed === !0,
                g = (0, eu.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: m,
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
                    previewReady: m,
                    hasFrame: f,
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
        } = (0, ef.p)({
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
            mobilePreviewLabel: e8,
            handleToggleMobilePreview: e9,
            landscapePreview: tt,
            rotatePreviewLabel: tn,
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
                m = a.useMemo(
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
                f = a.useCallback(
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
                previewTargetOptions: m,
                handleSelectPreviewTarget: f,
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
        tm = (0, I.lQ)(ep),
        tf = tc.isPoppedOut ? T.default.pmkK8i : e3 ? T.default.Yet11p : null,
        th = null != tf;
    function tg(e) {
        return null == tf ? e : P.intl.formatToPlainString(tf, { label: e });
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
        })(ep, td && (!tc.isPoppedOut || tm), em),
        [tA] = a.useState(() => N.isPlatformEmbedded && (0, e_.qM)());
    a.useEffect(() => {
        null != ep && tm && !td && (0, I.It)(ep);
    }, [ep, tm, td]);
    let tC = a.useCallback(() => {
            null != ep && (em(), (0, I.c$)(ep), (0, I.rC)(ep, "marker"));
        }, [ep, em]),
        tN = a.useCallback(() => {
            null != ep && (0, I.V9)(ep);
        }, [ep]),
        tI =
            th && !tm
                ? tg(P.intl.string(T.default["XWU+XF"]))
                : P.intl.string(tm ? T.default.tuQ5f3 : tk ? T.default.agwlrD : T.default["XWU+XF"]),
        tE = th ? tg(P.intl.string(T.default["cl/Jyl"])) : tw,
        t_ = tg(e8),
        tM = tg(tn),
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
    let tY = null == s ? void 0 : () => (0, te.A)(s.id, { guildId: y, isPreview: !0, publishOptions: tU }),
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
                      className: f7.As,
                      onMouseDown:
                          null == ep || tB.disabled || tK
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, eB.dx)(ep);
                                },
                      children: (0, i.jsx)(d.$, {
                          size: "sm",
                          variant: tV,
                          icon: tK ? f9 : null != tH ? m.CheckmarkSmallIcon : void 0,
                          text: tW,
                          onClick: () => tX("header"),
                      }),
                  }),
        t1 = (0, i.jsx)(f4.A, {
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
                          className: f7.FO,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: f7.QQ,
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
                                                              icon: e7 ? ht : he,
                                                              tooltip: t_,
                                                              "aria-label": t_,
                                                              selected: e7,
                                                              disabled: th,
                                                              onClick: e9,
                                                          })
                                                        : null,
                                                    e7 && "frame" === eC
                                                        ? (0, i.jsx)(C.A.Icon, {
                                                              icon: hn,
                                                              tooltip: tM,
                                                              "aria-label": tM,
                                                              selected: tt,
                                                              disabled: th,
                                                              onClick: tr,
                                                          })
                                                        : null,
                                                    tF
                                                        ? null
                                                        : tA
                                                          ? (0, i.jsx)(C.A.Icon, {
                                                                icon: f.PencilIcon,
                                                                tooltip: tI,
                                                                "aria-label": tI,
                                                                selected: tm,
                                                                disabled: (th || tk) && !tm,
                                                                onClick: tm ? tN : tC,
                                                            })
                                                          : (0, i.jsx)(C.A.Icon, {
                                                                ref: ty,
                                                                icon: h.ExperimentalDirectSelectIcon,
                                                                iconClassName: f7.D8,
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
                              (0, i.jsx)("div", { className: f7.YJ }),
                              (0, i.jsx)(L.A, { frame: ta }),
                              (0, i.jsx)(C.A.Icon, {
                                  icon: p.DoorExitIcon,
                                  tooltip: P.intl.string(T.default["/TlGcK"]),
                                  "aria-label": P.intl.string(T.default["/TlGcK"]),
                                  onClick: t$,
                              }),
                              (0, i.jsx)(C.A.Icon, {
                                  icon: f6,
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
        className: o()(f7.nj, f5.T),
        children: [
            tq.importInput,
            (0, i.jsx)("main", {
                className: f7.JX,
                children:
                    null == s
                        ? (0, i.jsxs)("div", {
                              className: f7.j5,
                              children: [
                                  t1,
                                  (0, i.jsxs)("div", {
                                      className: f7.sD,
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
                                  f3,
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
                                              tF ? null : (0, i.jsx)(tl, { projectId: s.id }),
                                              (0, i.jsx)(e6, { projectId: s.id, guildId: y, publishOptions: tU }),
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
function f9() {
    return (0, i.jsx)(b.y, { type: b.t.SPINNING_CIRCLE_SIMPLE, className: f7.Hv, itemClassName: f7.C5 });
}
function f6(e) {
    return (0, i.jsx)(y.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function he(e) {
    return (0, i.jsx)(k.MobilePhoneIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function ht(e) {
    return (0, i.jsx)(w.ScreenIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function hn(e) {
    return (0, i.jsx)(S.RotateIcon, { ...e, size: "custom", width: 20, height: 20 });
}
