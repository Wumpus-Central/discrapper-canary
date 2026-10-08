(l.r(t), l.d(t, { default: () => dw }), l(321073));
var n,
    a,
    r = l(477900),
    i = l(582128),
    s = l(503698),
    o = l.n(s),
    u = l(536637),
    c = l.n(u),
    d = l(478104),
    f = l(17928),
    m = l(314116),
    h = l(534890),
    g = l(646270),
    x = l(31300),
    p = l(831453),
    v = l(739187),
    j = l(857250),
    b = l(97483),
    y = l(834730),
    k = l(939249),
    w = l(866665),
    N = l(140735),
    A = l(289873),
    S = l(821609),
    C = l(604525),
    E = l(92446),
    I = l(625903),
    M = l(297264),
    T = l(97893),
    _ = l(364522),
    P = l(103557),
    R = l(691885),
    L = l(789645),
    D = l(152367),
    $ = l(661531),
    z = l(442433),
    F = l(458518),
    O = l(627363),
    U = l(47167),
    G = l(713654),
    q = l(625180),
    B = l(672929),
    H = l(775946),
    K = l(742589),
    V = l(976860),
    W = l(402860),
    J = l(885386),
    X = l(734057),
    Q = l(696451),
    Y = l(71393),
    Z = l(576705),
    ee = l(164892),
    et = l(922016),
    el = l(980707),
    en = l(477782),
    ea = l(81369),
    er = l(712808);
(l(323874), l(14289), l(35956));
var ei = l(77729),
    es = l(723702),
    eo = l(264572).Buffer;
async function eu(e, t) {
    if (es.isPlatformEmbedded) {
        let l = eo.from(await e.arrayBuffer());
        if ("function" == typeof ei.A.fileManager.saveWithDialog2) await ei.A.fileManager.saveWithDialog2(l, t);
        else
            try {
                await ei.A.fileManager.saveWithDialog(l, t);
            } catch {}
        return;
    }
    let l = URL.createObjectURL(e);
    try {
        let e = document.createElement("a");
        ((e.href = l), (e.download = t), (e.rel = "noopener"), e.click());
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(l), 0);
    }
}
var ec = l(261425),
    ed = l(660183);
async function ef(e, t, l) {
    (0, er.Hc)(e);
    let n = await (0, er.vX)(e, t);
    (0, er.dv)(e, l, [n]);
}
function em(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, ee.Oq)(e.size, t)
        ? null
        : ed.intl.formatToPlainString(ec.default.ThxcOX, { size: (0, ee.sM)((0, ee.Ju)(t)) });
}
async function eh(e, t) {
    let l,
        n =
            ((l = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === l ? "vibegration" : l}.zip`),
        a = await (0, er.cS)(e, n);
    await eu(a, n);
}
function eg(e) {
    let t = i.useRef(null),
        l = i.useCallback(
            (t) => {
                let l = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != l && e(l));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, r.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.tar.bz2,.tar.xz,application/zip,application/gzip,application/x-tar,application/x-bzip2,application/x-xz",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: l,
        }),
    };
}
var ex = l(950305),
    ep = l(664121);
let ev = [
    { value: "user", icon: ex.UserIcon, nameMessage: ec.default.s1TsXl },
    { value: "guild", icon: ep.R, nameMessage: ec.default.LlLIJw },
];
function ej(e) {
    let { importing: t, onImport: l } = e,
        n = i.useRef(null),
        a = eg(i.useCallback((e) => l(e, "user"), [l])),
        s = eg(i.useCallback((e) => l(e, "guild"), [l])),
        o = { user: a.open, guild: s.open };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(et.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: et.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(el.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": ed.intl.string(ec.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, r.jsx)(en.rX, {
                            label: ed.intl.string(ec.default.NyVn6T),
                            children: ev
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: ed.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, r.jsx)(
                                        en.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, l) => {
                    let { isShown: a } = l;
                    return (0, r.jsx)(S.$, {
                        ...e,
                        buttonRef: n,
                        variant: "secondary",
                        size: "sm",
                        icon: ea.H,
                        text: ed.intl.string(ec.default.NJGZA3),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": a,
                    });
                },
            }),
            a.input,
            s.input,
        ],
    });
}
var eb = l(652215),
    ey = l(746080),
    ek = l(404373),
    ew = l(639519),
    eN = l(361504);
function eA(e) {
    let { idea: t, installScope: l, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var eS = l(371169),
    eC = l(260498);
function eE(e) {
    let { className: t, ariaLabel: l, disabled: n, onClick: a, children: i } = e;
    return (0, r.jsx)(k.D, { "aria-disabled": n, "aria-label": l, className: t, onClick: n ? void 0 : a, children: i });
}
var eI = l(865665),
    eM = l(373913);
let eT = { x: 5, y: 7 },
    e_ = { x: 5, y: 4 };
function eP(e) {
    let { listClassName: t, radius: l, children: n } = e,
        [a, s] = i.useState(!1);
    return (0, r.jsxs)("div", {
        className: eM.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, r.jsx)("ol", { className: t, children: n }),
            a ? (0, r.jsx)(eI.C, { area: 64, radius: l, color: $.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eR = l(864970),
    eL = l(707554),
    eD = l(770178),
    e$ = l(765548),
    ez = l(595528),
    eF = l(885576),
    eO = l(662429);
let eU = "heading-xxl/semibold",
    eG = !1;
function eq() {
    let e = i.useRef(null),
        [t, l] = i.useState(!0),
        n = (0, e$.A)((e) => {
            l(e.target.clientWidth >= 500);
        }),
        a = (0, eD.w)(n, [], { fireOnMount: !0 }),
        s = (0, f.bG)([ez.A], () => ez.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || eG) return;
        let l = !1,
            n = 0;
        function a() {
            l ||
                (n = window.setTimeout(() => {
                    ((eG = !0), e.current?.play());
                }, 400));
        }
        let r = document.fonts;
        return (
            null == r ? a() : r.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(a, a),
            () => {
                ((l = !0), window.clearTimeout(n));
            }
        );
    }, [s, t]);
    let o = (0, f.bG)([eF.A], () => eF.A.isIdle()),
        u = i.useRef(o);
    i.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && eG && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let c = ed.intl.string(ec.default["+5XyCR"]);
    return (0, r.jsx)("div", {
        ref: a,
        className: eO.x,
        children: t
            ? (0, r.jsx)(eL.H, { children: (0, r.jsx)(eR.o, { ref: e, text: c, variant: eU, delay: null }) })
            : (0, r.jsx)(M.D, { variant: eU, children: c }),
    });
}
var eB = l(548118);
let eH = "user",
    eK = Object.freeze({ x: 0.5, y: 0.5 });
function eV(e) {
    return "" !== e.trim();
}
function eW(e) {
    let t = e.name.trim(),
        l = (function (e) {
            switch (e.role) {
                case "button":
                    return "Button";
                case "link":
                    return "Link";
                case "heading":
                    return "Heading";
                case "textbox":
                    return "Input";
                case "checkbox":
                    return "Checkbox";
                case "radio":
                    return "Radio";
                case "combobox":
                    return "Dropdown";
                case "slider":
                    return "Slider";
                case "switch":
                    return "Toggle";
                case "img":
                    return "Image";
                case "list":
                    return "List";
                case "listitem":
                    return "List item";
                case "tab":
                    return "Tab";
                case "menuitem":
                    return "Menu item";
                case "dialog":
                    return "Dialog";
                case "progressbar":
                    return "Progress bar";
                case "separator":
                    return "Divider";
                case "label":
                    return "Label";
            }
            switch (e.tag) {
                case "img":
                case "picture":
                    return "Image";
                case "svg":
                    return "Icon";
                case "video":
                    return "Video";
                case "canvas":
                    return "Canvas";
                case "p":
                case "span":
                case "strong":
                case "em":
                case "small":
                case "blockquote":
                case "code":
                case "li":
                    return "Text";
                case "form":
                    return "Form";
                case "ul":
                case "ol":
                    return "List";
                case "table":
                    return "Table";
                case "header":
                    return "Header";
                case "footer":
                    return "Footer";
                case "nav":
                    return "Navigation";
                case "section":
                case "article":
                case "main":
                case "aside":
                case "figure":
                    return "Section";
                case "div":
                    return "Container";
            }
            return null;
        })(e);
    return null == l
        ? "" === t
            ? { kind: "" !== e.role ? e.role : e.tag, name: "" }
            : { kind: "", name: t }
        : { kind: l, name: t };
}
function eJ(e) {
    let { kind: t, name: l } = eW(e);
    return [t, l].filter((e) => "" !== e).join(" ");
}
function eX(e) {
    let t = [`<${e.tag}>`];
    "" !== e.role && t.push(`role=${e.role}`);
    let l = e.name.trim();
    return (
        "" !== l && t.push(`name="${l}"`),
        null != e.value && "" !== e.value && t.push(`value="${e.value}"`),
        null != e.path && "" !== e.path && t.push(`path="${e.path}"`),
        null != e.marker && t.push(`marker="${e.marker}"`),
        t.push(`at x=${e.rect.x} y=${e.rect.y}`),
        t.push(`size ${e.rect.width}x${e.rect.height}`),
        t.push(`ref=${e.ref}`),
        t.join(" ")
    );
}
let eQ = "[vibegrations:selected] ",
    eY = " \u2014 ";
function eZ(e) {
    if (!e.startsWith(eQ)) return null;
    let t = e.indexOf("\n"),
        l = -1 === t ? e : e.slice(0, t),
        n = -1 === t ? "" : e.slice(t + 1),
        a = l.slice(eQ.length),
        r = a.indexOf(eY),
        i = (-1 === r ? a : a.slice(0, r)).trim();
    return "" === i ? null : { label: i, body: n };
}
let e0 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    e1 = new Map(),
    e2 = new Set();
function e3(e) {
    return e1.get(e) ?? e0;
}
function e4(e, t) {
    for (let l of (t.active || 0 !== t.annotations.length ? e1.set(e, t) : e1.delete(e), [...e2]))
        try {
            l();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function e5(e) {
    e1.has(e) && e4(e, e0);
}
function e6(e, t) {
    let l = e3(e);
    l.active && e4(e, { ...l, context: t });
}
function e7(e, t) {
    return null != t && e.authorId === t;
}
function e8(e) {
    return (
        e2.add(e),
        () => {
            e2.delete(e);
        }
    );
}
function e9(e) {
    let t = i.useCallback(() => (null == e ? e0 : e3(e)), [e]);
    return i.useSyncExternalStore(e8, t, t);
}
var te = l(192308),
    tt = l(855793),
    tl = l(128761),
    tn = l(744627),
    ta = l(900797),
    tr = l(320448),
    ti = l(783977),
    ts = l(344587),
    to = l(534554),
    tu = l(837984),
    tc = l(359589),
    td = l(254575);
function tf(e) {
    let [t, l] = i.useState(e),
        [n, a] = i.useState(!1),
        [r, s] = i.useState(e);
    return (
        r !== e && (s(e), e ? l(!0) : a(!1)),
        i.useEffect(() => {
            if (e || !t) return;
            let n = setTimeout(() => l(!1), 150);
            return () => clearTimeout(n);
        }, [e, t]),
        i.useEffect(() => {
            if (!t || !e) return;
            let l = 0,
                n = requestAnimationFrame(() => {
                    l = requestAnimationFrame(() => a(!0));
                });
            return () => {
                (cancelAnimationFrame(n), cancelAnimationFrame(l));
            };
        }, [t, e]),
        { mounted: t, entered: n }
    );
}
function tm(e) {
    let { settings: t, tiers: l, choices: n, disabled: a, onChange: s, placement: u, open: c, entered: d } = e,
        [f, m] = i.useState(!1),
        h = tf(f),
        g = ee.PY.indexOf(t.tier),
        x = f ? ta.t : tr._,
        p = ee.PY.map(to.D0),
        v = (0, to.Tc)(t.tier),
        { text: j, phase: b } = (0, ts.Q)(v);
    return (0, r.jsx)("div", {
        className: td.qd,
        "data-placement": u ?? void 0,
        children: (0, r.jsxs)("div", {
            className: o()(td.t$, { [td.Zr]: c && d, [td.GF]: !c }),
            role: "dialog",
            "aria-label": ed.intl.string(ec.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, r.jsx)("div", {
                          className: o()(td.Nr, td.uO, { [td.Zr]: f && h.entered, [td.GF]: !f }),
                          children: (0, r.jsx)(tc.bR, { settings: t, tiers: l, choices: n, disabled: a, onChange: s }),
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: `${td.Nr} ${td.rF}`,
                    children: [
                        (0, r.jsxs)("div", {
                            className: td.wx,
                            children: [
                                (0, r.jsxs)("button", {
                                    type: "button",
                                    className: td.y6,
                                    "aria-expanded": f,
                                    "aria-label": ed.intl.string(ec.default.eGqPbV),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, r.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: ed.intl.string(ec.default.aBPQxX),
                                        }),
                                        (0, r.jsx)(x, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: td.vg,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(y.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: o()(td.Z, { [td.xQ]: "exit" === b, [td.lm]: "enter" === b }),
                                    children: j,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: td.hs,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: td.Nb,
                                    children: [
                                        (0, r.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ed.intl.string(ec.default["/tlOR5"]),
                                        }),
                                        (0, r.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ed.intl.string(ec.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(tu.A, {
                                    activeIndex: g,
                                    stops: p,
                                    ariaLabel: ed.intl.string(ec.default.aBPQxX),
                                    disabled: a,
                                    onSelect: function (e) {
                                        let l = ee.PY[e];
                                        null != l && l !== t.tier && s((0, to.CM)((0, to.j6)(t, l)));
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function th(e) {
    let { settings: t, tiers: l, choices: n, disabled: a, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, f] = (0, tc.FT)(t, s),
        [m, h] = i.useState(!1),
        { mounted: g, entered: x } = tf(m);
    return (0, r.jsx)(et.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: et.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, r.jsx)(tm, {
                settings: d,
                tiers: l ?? null,
                choices: n,
                disabled: a,
                onChange: f,
                placement: t,
                open: m,
                entered: x,
            });
        },
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, r.jsx)(w.m, {
                text: ed.intl.string(ec.default["k2JN/p"]),
                shouldShow: !l,
                ariaHidden: !0,
                children: (0, r.jsx)(k.D, {
                    innerRef: c,
                    className: o ?? td.hZ,
                    "aria-label": ed.intl.string(ec.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": m,
                    children: u ?? (0, r.jsx)(ti.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tg = l(111534),
    tx = l(573083),
    tp = l(855859),
    tv = l(238490),
    tj = l(754027),
    tb = l(598748),
    ty = l(294323),
    tk = l(25451),
    tw = l(280450),
    tN = l(86147),
    tA = l(729475),
    tS = l(91242),
    tC = l(869146),
    tE = l(475815),
    tI = l(621466);
function tM(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function tT(e) {
    let t, l;
    return (
        null != e &&
        ((l =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, tI.vq)(l, Element) ? l.getAttribute("data-frame-id") : null) === e)
    );
}
function t_(e) {
    return (0, tE.a3)(document, e);
}
function tP(e) {
    return i.useSyncExternalStore(t_, () => tT(e));
}
var tR = l(165610);
function tL(e) {
    let { frame: t, controlProjectId: l } = e,
        n = tP(t?.id ?? null),
        a = (0, tx.Zv)(l),
        i = (0, f.bG)(
            [tC.A, tS.A],
            () => null != t && tC.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT) && tS.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tR.x1)(t) || i || a) return null;
    let s = tM(t.id);
    if (null == s || !(0, tE.Ub)(s)) return null;
    let o = ed.intl.string(n ? ed.t.Z7MyNB : ed.t.OIDkcp);
    return (0, r.jsx)(K.A.Icon, {
        tooltip: o,
        icon: n ? tN.z : tA.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": n,
        selected: n,
        onClick: () => {
            var e;
            let l;
            null != (l = tM((e = t.id))) && (0, tE.Ub)(l) && (tT(e) ? (0, tE.sP)(l) : (0, tE.tl)(l));
        },
    });
}
var tD = l(629584),
    t$ = l(696645),
    tz = l(861899);
function tF(e) {
    let { modes: t, mode: l, onChange: n, className: a } = e,
        s = i.useMemo(() => t.map((e) => ({ value: e, name: (0, t$.kZ)(e), "aria-controls": (0, t$.z3)(e) })), [t]),
        u = i.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == l
        ? null
        : (0, r.jsx)(tD.I, {
              role: "tablist",
              look: "pill",
              className: o()(tz.b, a),
              optionClassName: tz.u,
              options: s,
              value: l,
              onChange: u,
          });
}
var tO = l(226178),
    tU = l(434279),
    tG = l(941985),
    tq = l(287809),
    tB = l(427262),
    tH = l(245179),
    tK = l(803306);
let tV = new Set(),
    tW = new Map();
function tJ(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
function tX(e) {
    if (null == e || tV.has(e) || null != tq.default.getUser(e)) return;
    let t = tW.get(e) ?? 0;
    t >= 3 ||
        (tW.set(e, t + 1),
        tV.add(e),
        tK
            .wz(e)
            .finally(() => tV.delete(e))
            .catch(() => {}));
}
var tQ = l(16619),
    tY = l(782603),
    tZ = l(780338),
    t0 = l(663417),
    t1 = l(70688),
    t2 = l(173936),
    t3 = l(473935),
    t4 = l(408278),
    t5 = l(365199),
    t6 = l(7437),
    t7 = l(147036),
    t8 = l(957565),
    t9 = l(785389),
    le = l(123917);
let lt = new Set();
var ll = l(289106),
    ln = l(616334),
    la = l(189714),
    lr = l(552821);
let li = [];
function ls(e) {
    (0, v.P)((0, j.o)(e, b.Ck.FAILURE));
}
function lo(e) {
    let {
            projectId: t,
            projectName: l,
            guildId: n,
            projectGuildId: a,
            isOwner: s,
            canRemix: o,
            onExport: u,
            onImport: c,
            onRemix: d,
            onConnectTool: h,
            onHistory: g,
            onRefresh: x,
            isRefreshing: p = !1,
            onClose: y,
            refreshApplicationId: k,
            previewProjectId: w,
            onCloseMenu: N,
        } = e,
        A = (0, la.iI)(t),
        S = i.useContext(ll.bI),
        { pending: C, refresh: E } = (0, t6.A)(k ?? null),
        { pending: M, connect: T } = (function (e, t) {
            let [l, n] = i.useState(lt),
                a = i.useRef(lt),
                r = i.useCallback((e) => {
                    ((a.current = (0, t9.Q6)(a.current, e)), n(a.current));
                }, []);
            return {
                pending: l,
                connect: i.useCallback(
                    (l) => {
                        if (null == e) return;
                        let i = (0, t9.K9)(a.current, l.type);
                        async function s() {
                            let n = await (0, er.JI)(e, l.type);
                            (r(l.type), "url" === n.type)
                                ? (0, le.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, t9.rq)(n.error)
                                          ? ed.intl.string(ec.default["jCQ/1B"])
                                          : ed.intl.string(ec.default.POxkSh),
                                  );
                        }
                        null != i && ((a.current = i), n(i), s().catch(() => r(l.type)));
                    },
                    [t, e, r],
                ),
            };
        })(w ?? null, ls),
        _ = (0, f.bG)([er.Ay], () => (null == w ? li : er.Ay.getDeclaredConnections(w))),
        P = (function (e) {
            let { canRefresh: t, refreshPending: l, offers: n, connectPending: a } = e,
                r = [];
            for (let { connection: e, offer: i } of (t &&
                r.push({
                    id: "preview-refresh",
                    label: ed.intl.string(ec.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: l,
                }),
            n))
                r.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: ed.intl.formatToPlainString(ec.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: ed.intl.formatToPlainString(ec.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return r;
        })({
            canRefresh: null != k,
            refreshPending: C,
            offers: i.useMemo(() => (0, t9.Xl)(_), [_]),
            connectPending: M,
        }),
        R = i.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        L = null != d && o,
        D = s && null != c,
        $ = L || null != u || D || null != h || null != g,
        z = t8.p5 && null != n,
        F = t8.p5,
        O = A ? tY.BellIcon : tZ.BellSlashIcon;
    return (0, r.jsxs)(el.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": ed.intl.string(ed.t.ogxXGq),
        onClose: N,
        onSelect: N,
        children: [
            null != x || null != y
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          null != x
                              ? (0, r.jsx)(en.Dr, {
                                    id: "refresh",
                                    icon: t0.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t0.RefreshIcon },
                                    label: ed.intl.string(ec.default["p4B/7M"]),
                                    disabled: p,
                                    action: x,
                                })
                              : null,
                          null != y
                              ? (0, r.jsx)(en.Dr, {
                                    id: "close",
                                    icon: t1.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t1.DoorExitIcon },
                                    label: ed.intl.string(ec.default["/TlGcK"]),
                                    action: y,
                                })
                              : null,
                      ],
                  })
                : null,
            P.length > 0
                ? (0, r.jsx)(en.rX, {
                      children: P.map((e) =>
                          (0, r.jsx)(
                              en.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void E();
                                      let t = null == e.connectionType ? null : R.get(e.connectionType);
                                      null != t && T(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, r.jsx)(en.rX, {
                children: (0, r.jsx)(en.Dr, {
                    id: "mute",
                    label: ed.intl.string(A ? ec.default.s9rCuH : ec.default["a+i/As"]),
                    icon: O,
                    leadingAccessory: { type: "icon", icon: O },
                    action: () => (0, la.$L)(t, !A),
                }),
            }),
            $
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          L
                              ? (0, r.jsx)(en.Dr, { id: "remix", label: ed.intl.string(ec.default.XWgAfc), action: d })
                              : null,
                          null != u
                              ? (0, r.jsx)(en.Dr, { id: "export", label: ed.intl.string(ec.default.WsEEP7), action: u })
                              : null,
                          D
                              ? (0, r.jsx)(en.Dr, { id: "import", label: ed.intl.string(ec.default.rWGY3e), action: c })
                              : null,
                          null != h
                              ? (0, r.jsx)(en.Dr, {
                                    id: "connect-tool",
                                    label: ed.intl.string(ec.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != g
                              ? (0, r.jsx)(en.Dr, {
                                    id: "history",
                                    label: ed.intl.string(ec.default["3hIVou"]),
                                    action: g,
                                })
                              : null,
                      ],
                  })
                : null,
            F
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          z
                              ? (0, r.jsx)(en.Dr, {
                                    id: "copy-link",
                                    label: ed.intl.string(ed.t.WqhZss),
                                    icon: t2.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t2.LinkIcon },
                                    action: () =>
                                        (0, t8.C)((0, t7.n)(n, ey.VV.CONJURE, t), () =>
                                            (0, v.P)((0, j.o)(ed.intl.string(ed.t["L/PwZf"]), b.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(en.Dr, {
                              id: "copy-project-id",
                              label: ed.intl.string(ec.default["nm/zuU"]),
                              icon: t3.L,
                              leadingAccessory: { type: "icon", icon: t3.L },
                              action: () =>
                                  (0, t8.C)(t, () =>
                                      (0, v.P)((0, j.o)(ed.intl.string(ec.default.CmfaZG), b.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            s
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          (0, r.jsx)(en.Dr, {
                              id: "settings",
                              label: ed.intl.string(ec.default.FzfmQ8),
                              icon: I.SettingsIcon,
                              leadingAccessory: { type: "icon", icon: I.SettingsIcon },
                              action: () =>
                                  (0, ln.A)(t, {
                                      guildId: a ?? n,
                                      initialTab: "project",
                                      isPreview: !0,
                                      publishOptions: S,
                                  }),
                          }),
                          (0, r.jsx)(en.Dr, {
                              id: "delete",
                              label: ed.intl.string(ed.t.oyYWHE),
                              color: "danger",
                              action: () => {
                                  (0, m.A)({
                                      title: ed.intl.formatToPlainString(ec.default.CJBhb2, { name: l }),
                                      subtitle: ed.intl.string(ec.default["0OmrVn"]),
                                      confirmText: ed.intl.string(ed.t.oyYWHE),
                                      variant: "critical",
                                      onConfirm: () => {
                                          (0, eS.K)(t, () =>
                                              (0, v.P)((0, j.o)(ed.intl.string(ec.default["0XDHob"]), b.Ck.FAILURE)),
                                          );
                                      },
                                  });
                              },
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function lu(e) {
    let { trigger: t = "header", ...l } = e,
        n = i.useRef(null);
    return (0, r.jsx)(et.Y, {
        targetElementRef: n,
        position: "bottom",
        align: "right",
        animation: et.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(lo, { ...l, onCloseMenu: t });
        },
        children: (e, l) => {
            let { onClick: a } = e,
                { isShown: i } = l;
            return (0, r.jsx)("div", {
                ref: n,
                className: lr.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(w.m, {
                              text: ed.intl.string(ed.t["UKOtz+"]),
                              children: (0, r.jsx)(t4.K, {
                                  icon: t5.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: a,
                              }),
                          })
                        : (0, r.jsx)(K.A.Icon, {
                              icon: t5.MoreHorizontalIcon,
                              tooltip: ed.intl.string(ed.t["UKOtz+"]),
                              "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: a,
                          }),
            });
        },
    });
}
var lc = l(845079),
    ld = l(104171),
    lf = l(286739);
function lm(e) {
    let { creator: t, className: l } = e;
    return (0, r.jsx)("div", {
        className: o()(lf.c, l),
        "aria-hidden": !0,
        children: (0, r.jsx)(ld.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: ld.DN.SIZE_16 }),
    });
}
var lh = l(580954),
    lg = l(246338);
let lx = "user",
    lp = "no-server",
    lv = new Map();
function lj(e) {
    return lv.get(e) ?? null;
}
function lb(e) {
    switch (e) {
        case "all":
        case lx:
        case lp:
            return null;
        default:
            return e;
    }
}
function ly(e, t) {
    switch (t) {
        case "all":
            return !0;
        case lx:
            return "user" === e.install_scope;
        case lp:
            return null == (0, tU.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var lk = l(506774);
let lw = "VibegrationsProjectsPanelOpen";
function lN() {
    return lk.w.get(lw) ?? null;
}
function lA(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var lS = l(803101),
    lC = l(808728),
    lE = l(189213),
    lI = l(516288);
function lM(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = t === lI.k.PERMISSIONS;
    return (0, r.jsx)(lE.a, {
        transitionState: l,
        onClose: n,
        title: ed.intl.string(a ? ec.default.wQ4UyJ : ec.default.ZNGLFE),
        subtitle: ed.intl.string(a ? ec.default.Agqmbt : ec.default.ffxKGK),
        size: "sm",
        actions: [{ text: ed.intl.string(a ? ed.t.BddRzS : ec.default["/omTNx"]), variant: "primary", onClick: n }],
    });
}
var lT = l(951465),
    l_ = l(95264),
    lP = l(952644),
    lR = l(991690),
    lL = l(58736),
    lD = l(689175),
    l$ = l(65593),
    lz = l(115982);
function lF(e) {
    return !(0, tH.BL)(e) && !0 !== e.stopRequested;
}
var lO = l(104317),
    lU = l(643278),
    lG = l(566424),
    lq = l(683063),
    lB = l(847374),
    lH = l(138212);
function lK(e) {
    let { title: t, trailing: l, children: n, className: a, headerClassName: i, ...s } = e;
    return (0, r.jsxs)("section", {
        className: o()(lH.Nr, a),
        ...s,
        children: [
            (0, r.jsxs)("header", {
                className: o()(lH.wx, null != l && lH.o5, i),
                children: [
                    (0, r.jsx)(y.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            n,
        ],
    });
}
var lV = l(148590);
function lW(e) {
    let { children: t } = e;
    return (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function lJ(e) {
    let {
            title: t,
            meta: l,
            superseded: n = !1,
            showLabel: a,
            hideLabel: s,
            bodyClassName: u,
            beforeBody: c,
            children: d,
            ...f
        } = e,
        m = i.useId(),
        [h, g] = i.useState(!n),
        [x, p] = i.useState(n);
    x !== n && (p(n), g(!n));
    let v = i.useCallback(() => g((e) => !e), []),
        j = h ? lB.a : tr._,
        b = null != l || n;
    return (0, r.jsxs)(lK, {
        ...f,
        title: t,
        trailing: b
            ? (0, r.jsxs)("span", {
                  className: lV.ZY,
                  children: [
                      l,
                      n
                          ? (0, r.jsx)(k.D, {
                                className: lV.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": m,
                                "aria-label": h ? s : a,
                                children: (0, r.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : lV.RG,
        "data-superseded": n ? "true" : void 0,
        children: [c, (0, r.jsx)("div", { id: m, className: o()(lV.rf, u), hidden: !h, children: d })],
    });
}
var lX = l(883646);
let lQ = [];
function lY(e) {
    let { status: t } = e;
    return (0, r.jsxs)("span", {
        className: o()(lX.xL, {
            [lX.Vb]: "in_progress" === t,
            [lX.cT]: "completed" === t,
            [lX.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return ed.intl.string(ec.default.KvBdun);
                case "in_progress":
                    return ed.intl.string(ec.default["m5G9+S"]);
                case "unfinished":
                    return ed.intl.string(ec.default.lRpwhD);
                default:
                    return ed.intl.string(ec.default.sPGeWi);
            }
        })(t),
        children: [
            (0, r.jsx)(A.y, {
                type: A.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: lX.Qd,
                itemClassName: lX.xB,
                "aria-hidden": !0,
            }),
            (0, r.jsx)("svg", {
                className: lX.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, r.jsx)("path", { className: lX.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function lZ(e) {
    let { agents: t, active: l } = e,
        n = i.useMemo(() => (l ? t : lQ), [l, t]),
        a = i.useMemo(() => new Set(n.map((e) => e.key)), [n]),
        s = n.map((e) => e.key).join("\0"),
        [o, u] = i.useState(n),
        [c, d] = i.useState(s),
        [f, m] = i.useState(!1);
    c !== s && (d(s), u([...n, ...o.filter((e) => !a.has(e.key))]), 0 === n.length && m(!1));
    let h = o.some((e) => !a.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(n), l ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, n, l]),
        i.useEffect(() => {
            if (!l || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => m(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [l, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, r.jsxs)("span", {
        className: lX.X6,
        "data-shown": l && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: n, task: i } = e,
                    { Illocon: s } = l;
                return (0, r.jsx)(
                    lq.u,
                    {
                        asset: (0, r.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: n,
                        body: i,
                        position: "top",
                        children: (0, r.jsx)("span", {
                            className: lX.MA,
                            "data-leaving": a.has(t) ? void 0 : "true",
                            children: (0, r.jsx)(s, { size: 16, alt: n, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: lX.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function l0(e) {
    let t,
        { todos: l, provisional: n, agents: a, live: s = !0 } = e,
        u = (function (e) {
            let t = e.join("\0"),
                [l, n] = i.useState(() => new Set(e)),
                [a, r] = i.useState(t),
                [s, o] = i.useState(() => new Set());
            return (
                a !== t && (r(t), n(new Set(e)), o(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
                i.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(i.useMemo(() => l.map((e) => e.id), [l])),
        c =
            ((t = (a ?? lQ).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of a ?? lQ) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, r.jsxs)("ul", {
        className: lX.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, r.jsxs)(
                    "li",
                    {
                        className: o()(lX.AS, { [lX.J1]: "completed" === l }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, r.jsx)(lY, { status: l }),
                            (0, r.jsx)(y.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: lX.iV,
                                selectable: !0,
                                children: (0, r.jsx)("span", {
                                    className: lX.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, r.jsx)(lZ, { agents: c.get(e.id) ?? lQ, active: "completed" !== l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != n
                ? (0, r.jsxs)("li", {
                      className: lX.AS,
                      "data-provisional": !0,
                      children: [
                          (0, r.jsx)(lY, { status: "pending" }),
                          (0, r.jsx)(y.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: lX.iV,
                              selectable: !0,
                              children: (0, r.jsx)("span", { className: lX.Qq, children: n }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function l1(e) {
    let { todos: t, provisional: l, agents: n, announceProgress: a = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = ed.intl.formatToPlainString(ec.default["P/I+JW"], { completed: o, total: u }),
        d = ed.intl.formatToPlainString(ec.default["7tzwKB"], { completed: o, total: u });
    return (0, r.jsx)(lJ, {
        title: ed.intl.string(ec.default.RtzECX),
        meta: (0, r.jsx)(lW, { children: c }),
        superseded: s,
        showLabel: ed.intl.string(ec.default.RKyN9q),
        hideLabel: ed.intl.string(ec.default.xydHoj),
        className: lX.Nr,
        bodyClassName: lX.rf,
        beforeBody: a && !s ? (0, r.jsx)(N.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, r.jsx)(l0, { todos: t, provisional: l, agents: n, live: i }),
    });
}
var l2 = l(308665),
    l3 = l(59678),
    l4 = l(903847);
function l5(e) {
    let { line: t, placement: l, todos: n, todosLive: a = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        d = null != l,
        [f, m] = i.useState(l ?? "top"),
        [h, g] = i.useState(d),
        [x, p] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(d);
    (b !== d && (y(d), null != l ? (m(l), g(!0)) : (p(!1), j(!1))),
        i.useEffect(() => {
            if (d || !h) return;
            let e = setTimeout(() => g(!1), 150);
            return () => clearTimeout(e);
        }, [d, h]),
        i.useEffect(() => {
            if (!h || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => p(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, d]));
    let [N, A] = i.useState(!1),
        [S, C] = i.useState(!1),
        [E, I] = i.useState(v);
    (E !== v && (I(v), v ? A(!0) : C(!1)),
        i.useEffect(() => {
            if (v || !N) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [v, N]),
        i.useEffect(() => {
            if (!N || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => C(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [N, v]));
    let M = null != n && n.length > 0,
        T = i.useCallback(() => j((e) => !e), []);
    return h
        ? (0, r.jsxs)("div", {
              className: l4.qd,
              "data-placement": f,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, r.jsxs)("div", {
                      className: o()(l4.vK, { [l4.ho]: x && d, [l4.ET]: !d }),
                      children: [
                          null == c
                              ? (0, r.jsx)("ol", {
                                    className: o()(l4.Rk, l3.pj),
                                    "data-live": "true",
                                    children: (0, r.jsx)(lG.A, {
                                        glyph: (0, r.jsx)(l2.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, r.jsx)(k.D, {
                                    className: l4.pZ,
                                    onClick: c,
                                    "aria-label": ed.intl.string(ec.default.hEK6qu),
                                    children: (0, r.jsx)("ol", {
                                        className: o()(l4.Rk, l3.pj),
                                        "data-live": "true",
                                        children: (0, r.jsx)(lG.A, {
                                            glyph: (0, r.jsx)(l2.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          M
                              ? (0, r.jsx)(w.m, {
                                    text: ed.intl.string(ec.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, r.jsx)(k.D, {
                                        className: l4.BO,
                                        onClick: T,
                                        "aria-expanded": v,
                                        "aria-label": ed.intl.string(ec.default.RtzECX),
                                        children: (0, r.jsx)(lU.ClipboardListIcon, {
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
                  N && M
                      ? (0, r.jsx)("div", {
                            className: o()(l4.vB, { [l4.pg]: v && S, [l4.ui]: !v }),
                            children: (0, r.jsx)(l1, {
                                todos: n,
                                provisional: s,
                                agents: u,
                                live: a,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
var l6 = l(658675),
    l7 = l(22231),
    l8 = l(826745),
    l9 = l(123292),
    ne = l(155078);
function nt(e) {
    return e.options.some((e) => null != e.image);
}
let nl = [];
function nn(e, t) {
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
var na = l(87221),
    nr = l(144228),
    ni = l(241326),
    ns = l(26430),
    no = l(750943),
    nu = l(95477),
    nc = l(256905),
    nd = l(73153),
    nf = l(839214);
let nm = [],
    nh = 1,
    ng = (0, nf.D)(() => ({ draftsByProject: {} }));
function nx(e, t, l) {
    return e.draftsByProject[t]?.[l] ?? nm;
}
function np(e, t) {
    return nx(ng.getState(), e, t);
}
function nv(e, t, l) {
    let { draftsByProject: n } = ng.getState();
    ng.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: l } } });
}
function nj(e, t, l, n) {
    let a = np(e, t);
    return (
        !!a.some((e) => e.localId === l) &&
        (nv(
            e,
            t,
            a.map((e) => (e.localId === l ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function nb(e, t) {
    (0, er.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function ny(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && nb(e, t.ref.id));
}
function nk(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = ng.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? nm) l ? ny(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: r, ...i } = n;
    ng.setState({ draftsByProject: i });
}
function nw(e) {
    return ed.intl.formatToPlainString(ec.default.JZ59Bo, { size: (0, ee.sM)((0, ee.Ju)(e)) });
}
function nN(e, t) {
    let l = np(e, t);
    if (0 !== l.length) {
        for (let t of l) ny(e, t);
        nv(e, t, nm);
    }
}
function nA(e, t) {
    let l = np(e, t);
    if (0 === l.length) return [];
    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (nv(e, t, nm), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function nS(e, t) {
    let { clarificationAnswers: l, attachments: n = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = np(e, "chat"),
        r = a.length > 0 && a.every((e) => "ready" === e.status) ? nA(e, "chat") : [];
    (0, er.dv)(e, t, [...n, ...r], { clarificationAnswers: l });
}
function nC(e, t) {
    let [l, n] = i.useState(null),
        [a, r] = i.useState(!1),
        [s, o] = i.useState(0);
    return (
        i.useEffect(() => {
            let l = !1;
            return (
                (0, er.PK)(e, t).then(
                    (e) => {
                        l || n(e);
                    },
                    () => {
                        l || (0 === s ? o(1) : r(!0));
                    },
                ),
                () => {
                    l = !0;
                }
            );
        }, [e, t, s]),
        {
            src: l,
            gone: a,
            handleError: i.useCallback(() => {
                (n(null),
                    (0, er.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : r(!0);
                        },
                        () => r(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
(nd.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(ng.getState().draftsByProject)) nk(e, { deleteFromWorker: !0 });
}),
    nd.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        nk(t, { deleteFromWorker: !1 });
    }));
var nE = l(907702);
function nI(e) {
    let { projectId: t, attachmentId: l, alt: n, onMeasured: a } = e,
        { src: s, gone: u, handleError: c } = nC(t, l),
        [d, f] = i.useState(null),
        m = null != s && d === s;
    return u
        ? (0, r.jsxs)("span", {
              className: o()(nE.Gt, nE.b6),
              children: [
                  (0, r.jsx)(na.D, { size: "md", color: "currentColor" }),
                  (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: ed.intl.string(ec.default.lhgD88),
                  }),
              ],
          })
        : (0, r.jsx)("span", {
              className: o()(nE.Gt, { [nE.iP]: !m }),
              children:
                  null != s
                      ? (0, r.jsx)("img", {
                            src: s,
                            alt: n,
                            className: nE.Sl,
                            onLoad: (e) => {
                                f(s);
                                let { naturalWidth: t, naturalHeight: l } = e.currentTarget;
                                t > 0 && l > 0 && a({ width: t, height: l });
                            },
                            onError: c,
                            draggable: !1,
                        })
                      : null,
          });
}
function nM(e) {
    let t,
        l,
        {
            projectId: n,
            option: a,
            multi: i,
            selected: s,
            disabled: u,
            reachable: c,
            tabbable: d,
            onPick: f,
            onView: m,
            onArrow: h,
            onMeasured: g,
            onRemove: x,
        } = e,
        p = ed.intl.formatToPlainString(ec.default.JGjZMs, { answer: a.label });
    return (0, r.jsxs)("div", {
        className: o()(nE.Vs, { [nE.Q9]: s, [nE.RX]: u }),
        "data-conjure-clarification-option": a.id,
        children: [
            (0, r.jsxs)(k.D, {
                className: nE.Up,
                "data-conjure-image-option-pick": !0,
                onClick: u ? void 0 : () => f(a),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(a, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": ed.intl.formatToPlainString(ec.default.AQbxhf, { answer: a.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, r.jsxs)("span", {
                        className: nE.$_,
                        children: [
                            null != a.image
                                ? (0, r.jsx)(nI, {
                                      projectId: n,
                                      attachmentId: a.image.attachment_id,
                                      alt: a.label,
                                      onMeasured: g,
                                  })
                                : (0, r.jsx)("span", { className: nE.Gt }),
                            (0, r.jsx)("span", {
                                className: nE.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, r.jsx)(l6.P, { checked: s, disabled: u })
                                    : (0, r.jsx)(nr.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(y.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: nE.pG,
                        children:
                            "" !== (l = null != (t = a.image?.page_url ?? a.image?.url) ? (0, ne.E)(t) : "")
                                ? (function (e) {
                                      let t = e.toLowerCase().split(".");
                                      if (t.length < 2 || /^\d+$/.test(t[t.length - 1]) || e.includes(":")) return e;
                                      let [l, n] = t.slice(-2),
                                          a = t.length > 2 && 2 === n.length && l.length <= 3;
                                      return t.slice(a ? -3 : -2).join(".");
                                  })(l)
                                : a.label,
                    }),
                ],
            }),
            null != x
                ? (0, r.jsx)("span", {
                      className: nE.B4,
                      children: (0, r.jsx)(w.m, {
                          text: ed.intl.string(ec.default.HQEXJM),
                          children: (0, r.jsx)(t4.K, {
                              icon: ni.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: x,
                              disabled: u,
                              "aria-label": ed.intl.string(ec.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != a.image
                  ? (0, r.jsx)("span", {
                        className: nE.B4,
                        children: (0, r.jsx)(w.m, {
                            text: ed.intl.string(ec.default["4/eeDD"]),
                            children: (0, r.jsx)(t4.K, {
                                icon: ns._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(a),
                                "aria-label": p,
                                tabIndex: c && d ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function nT(e) {
    var t;
    let { projectId: l, question: n, selectedIds: a, disabled: s, reachable: u = !0, onPick: c, own: d } = e,
        f = !0 === n.multi_select,
        { options: m } = n,
        h = m.length > 4 ? "gallery" : "row",
        g = i.useRef(null),
        x = i.useRef(new Map()),
        [p, v] = i.useState(null),
        j = null != p && m.some((e) => e.id === p) ? p : (m.find((e) => a.includes(e.id)) ?? m[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    n = t.findIndex((t) => t.id === e.id);
                n < 0 ||
                    Promise.all(t.map((e) => (0, er.PK)(l, e.image.attachment_id))).then(
                        (e) => {
                            (0, nc.R)({
                                items: e.map((e, l) => {
                                    let n,
                                        a = x.current.get(t[l].id);
                                    return {
                                        type: "IMAGE",
                                        url: e,
                                        original: e,
                                        alt: t[l].label,
                                        ...(null != a
                                            ? ((n = Math.max(1, 480 / Math.max(a.width, a.height))),
                                              { width: Math.round(a.width * n), height: Math.round(a.height * n) })
                                            : {}),
                                    };
                                }),
                                startingIndex: n,
                                shouldHideMediaOptions: !0,
                                location: "VibegrationsClarificationImageOptions",
                            });
                        },
                        () => {},
                    );
            },
            [m, l],
        ),
        y = i.useCallback(
            (e, t) => {
                let l = (m.findIndex((t) => t.id === e.id) + t + m.length) % m.length,
                    n = m[l];
                (v(n.id), g.current?.querySelectorAll("[data-conjure-image-option-pick]")[l]?.focus(), f || s || c(n));
            },
            [s, f, c, m],
        ),
        k =
            null == d.image
                ? null
                : ((t = d.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: ed.intl.string(ec.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, r.jsxs)("div", {
        className: nE.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, r.jsxs)("div", {
                ref: g,
                className: o()(nE.fF, "gallery" === h ? nE.nV : nE.nM, { [nE.m3]: f }),
                role: f ? "group" : "radiogroup",
                "aria-labelledby": `${n.id}-label`,
                "data-layout": h,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, r.jsx)(
                            nM,
                            {
                                projectId: l,
                                option: e,
                                multi: f,
                                selected: a.includes(e.id),
                                disabled: s,
                                reachable: u,
                                tabbable: f || e.id === j,
                                onPick: (e) => {
                                    (v(e.id), c(e));
                                },
                                onView: b,
                                onArrow: y,
                                onMeasured: (t) => x.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != k
                        ? (0, r.jsx)(
                              nM,
                              {
                                  projectId: l,
                                  option: k,
                                  multi: f,
                                  selected: d.selected,
                                  disabled: s,
                                  reachable: u,
                                  tabbable: !0,
                                  onPick: d.onPick,
                                  onView: () => void 0,
                                  onArrow: () => void 0,
                                  onMeasured: () => void 0,
                                  onRemove: d.onRemove,
                              },
                              k.id,
                          )
                        : null,
                ],
            }),
            (0, r.jsx)(n_, {
                projectId: l,
                own: d,
                disabled: s,
                reachable: u,
                uploadText: ed.intl.string(/\bicons?\b/i.test(n.question) ? ec.default.qU4WN6 : ec.default.cbMDDB),
            }),
        ],
    });
}
function n_(e) {
    let { projectId: t, own: l, disabled: n, reachable: a, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, f] = i.useState(""),
        m = a ? 0 : -1,
        h = l.busy;
    function g() {
        "" !== d.trim() &&
            null == h &&
            l.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), f(""));
                },
                () => void 0,
            );
    }
    return (0, r.jsxs)("div", {
        className: nE.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, r.jsxs)("div", {
                className: nE.QJ,
                children: [
                    (0, r.jsx)(S.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: no.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: n || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: m,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, r.jsx)(S.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t2.LinkIcon,
                              text: ed.intl.string(ec.default["1TgOO+"]),
                              disabled: n || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: m,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, r.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: nE.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            var n, a;
                            let r = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""),
                                null != r &&
                                    l.onUpload(
                                        ((n = r.name),
                                        (a = r.type),
                                        (0, ee.Oq)(r.size, a)
                                            ? (0, er.c9)(t, r, n, a)
                                            : Promise.resolve({ errorText: nw(a) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, r.jsxs)("div", {
                      className: nE.vG,
                      children: [
                          (0, r.jsx)("div", {
                              className: nE.Hs,
                              children: (0, r.jsx)(nu.k, {
                                  label: ed.intl.string(ec.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: ed.intl.string(ec.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => f(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), g())
                                          : "Escape" === e.key && (e.stopPropagation(), c(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == h && l.error?.source === "link" ? l.error.text : null,
                                  disabled: n,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: nE.gd,
                              children: [
                                  (0, r.jsx)(S.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ed.intl.string(ec.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: n || "" === d.trim(),
                                      onClick: g,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, r.jsx)(l9.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: ed.intl.string(ec.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            l.error?.source === "upload"
                ? (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      "data-conjure-own-image-error": !0,
                      children: l.error.text,
                  })
                : null,
        ],
    });
}
var nP = l(29073),
    nR = l(384017);
function nL(e) {
    let { option: t, position: l, disabled: n, onPick: a, reachable: s = !0, selected: u } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, r.jsxs)(k.D, {
        className: o()(nR.uK, { [nR.ue]: n, [nR.h4]: !0 === u }),
        onClick: n ? void 0 : () => a(t),
        "aria-label": ed.intl.formatToPlainString(d ? ec.default["2p6UFz"] : ec.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": n,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, r.jsx)("span", { className: nR.dy, children: (0, r.jsx)(l6.P, { checked: u, disabled: n }) })
                : (0, r.jsx)("span", { className: nR.Gy, "aria-hidden": !0, children: l }),
            (0, r.jsxs)("span", {
                className: nR.qO,
                children: [
                    (0, r.jsx)("span", {
                        className: nR.l8,
                        children: (0, r.jsx)(y.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nR.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, r.jsx)(y.E, {
                              tag: "span",
                              id: c,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            d
                ? (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: nR.rM,
                      children: ed.intl.string(ec.default.zku6r1),
                  })
                : null,
        ],
    });
}
function nD(e) {
    let { projectId: t, question: l, selected: n, disabled: a, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === l.multi_select;
    return nt(l)
        ? (0, r.jsx)(nT, { projectId: t, question: l, selectedIds: n, disabled: a, reachable: i, onPick: s, own: o })
        : (0, r.jsx)(r.Fragment, {
              children: l.options.map((e, t) =>
                  (0, r.jsx)(
                      nL,
                      {
                          option: e,
                          position: t + 1,
                          disabled: a,
                          selected: u ? n.includes(e.id) : void 0,
                          onPick: s,
                          reachable: i,
                      },
                      e.id,
                  ),
              ),
          });
}
let n$ = [];
function nz(e) {
    let {
            projectId: t,
            question: l,
            draft: n,
            selected: a,
            direction: i,
            disabled: s,
            ownImage: u,
            ownSelected: c,
        } = e,
        d = "" === n.trim() ? null : n,
        f = !0 === l.multi_select;
    return (0, r.jsxs)("div", {
        className: o()(nR.Ge, nR.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            f
                ? (0, r.jsx)(y.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: nR.aK,
                      children: ed.intl.string(ec.default.tE8qbz),
                  })
                : null,
            (0, r.jsx)(nD, {
                projectId: t,
                question: l,
                selected: a,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: nn(u, c),
            }),
            nt(l)
                ? null
                : (0, r.jsxs)("div", {
                      className: nR.Xy,
                      children: [
                          (0, r.jsx)("span", {
                              className: nR.Gy,
                              "aria-hidden": !0,
                              children: (0, r.jsx)(l7.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, r.jsx)("span", { className: o()(nR.Pu, nR.es), children: d }),
                      ],
                  }),
        ],
    });
}
function nF(e) {
    var t;
    let { projectId: l, clarification: n, onSubmit: a, onDismiss: s } = e,
        [u, c] = i.useState({}),
        [d, f] = i.useState({}),
        [m, h] = i.useState({}),
        [g, x] = i.useState(0),
        [p, v] = i.useState(null),
        [j, b] = i.useState(null),
        [N, A] = i.useState(null),
        [C, E] = i.useState(!1),
        I = i.useRef(null),
        [M, T] = i.useState(null),
        _ = i.useRef(null),
        P = i.useRef(0),
        R = null == a,
        D = n.questions.length,
        $ = Math.min(g, D - 1),
        z = n.questions[$],
        [F, O] = i.useState({ id: z.id, expanded: !1 }),
        U = F.id === z.id && F.expanded,
        [G, q] = i.useState(null),
        B = d[z.id] ?? "",
        H = !0 === z.multi_select,
        K = nt(z),
        V = H ? (m[z.id] ?? n$) : ((t = u[z.id]), t?.kind === "option" ? [t.optionId] : nl),
        W = (function (e, t, l) {
            let [n, a] = i.useState({}),
                [r, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = ed.intl.string(ec.default.wTsP5l),
                d = i.useCallback((e) => n[e] ?? null, [n]),
                f = i.useCallback(
                    (e) => null != n[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : t[e.id]?.kind === "image"),
                    [t, n, o],
                ),
                m = i.useCallback(
                    (e) => {
                        let t = n[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, n, o],
                ),
                h = i.useCallback(
                    (i, o) => {
                        let d = i.id,
                            m = !0 === i.multi_select,
                            h = n[d] ?? null;
                        if (o) return nn(h, f(i));
                        function g(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function x(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let p = t[d];
                        function v(t) {
                            (a((l) => {
                                let n = l[d];
                                return (
                                    null != n && (0, er.Vm)(e, n.attachment.id).catch(() => void 0), { ...l, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                m ? u((e) => ({ ...e, [d]: !0 })) : l((e) => (e[d] === p ? { ...e, [d]: x(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: f(i),
                            busy: r[d]?.busy ?? null,
                            error: r[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (m ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : l((e) => ({ ...e, [d]: x(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, er.Vm)(e, h.attachment.id).catch(() => void 0),
                                    a((e) => {
                                        let { [d]: t, ...l } = e;
                                        return l;
                                    }),
                                    u((e) => ({ ...e, [d]: !1 })),
                                    l((e) => {
                                        if (e[d]?.kind !== "image") return e;
                                        let { [d]: t, ...l } = e;
                                        return l;
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
                                                error: { source: "upload", text: ed.intl.string(ec.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, er.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : ed.intl.string(ec.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [c, t, n, e, f, l, r],
                );
            return { imageFor: d, selectedFor: f, multiPartFor: m, controlsFor: h };
        })(l, u, c),
        J = W.imageFor(z.id),
        X = W.selectedFor(z),
        { text: Q, phase: Y } = (0, ts.Q)(z.question),
        Z = Q === z.question,
        ee = Z && G?.id === z.id && G.truncated;
    i.useLayoutEffect(() => {
        if (null == M || U || !Z) return;
        function e() {
            if (null == M) return;
            let e = M.scrollHeight > M.clientHeight + 1;
            q((t) => (t?.id === z.id && t.truncated === e ? t : { id: z.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(M), () => t.disconnect());
    }, [Z, M, z.id, U]);
    let et = ed.intl.string(U ? ed.t.iTcuma : ed.t.dcl9MQ),
        el = i.useCallback(
            (e) => {
                if (null == a) return;
                let t = n.questions
                    .map((t, l) => ({ question: t, index: l, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: l, answer: n } = e;
                        return `${l + 1}. ${t.question} \u{2192} ${n.text.trim()}`;
                    })
                    .join("\n");
                if ("" !== t) {
                    let l;
                    a(
                        t,
                        (l = n.questions.flatMap((t) => {
                            let l = e[t.id];
                            if (null == l || "" === l.text.trim()) return [];
                            let n = "option" === l.kind ? [l.optionId] : "multi" === l.kind ? l.optionIds : [],
                                a = "custom" === l.kind ? l.text.trim() : "multi" === l.kind ? l.custom : void 0,
                                r = "image" === l.kind || "multi" === l.kind ? l.attachment : void 0;
                            return [
                                {
                                    question_id: t.id,
                                    option_ids: n,
                                    ...(null != a && "" !== a ? { custom: a } : {}),
                                    ...(null != r ? { attachment_id: r.id } : {}),
                                },
                            ];
                        })).length > 0
                            ? { clarification_id: n.id, answers: l }
                            : null,
                        n.questions.flatMap((t) => {
                            let l = e[t.id];
                            return null == l || "" === l.text.trim()
                                ? []
                                : "image" === l.kind || ("multi" === l.kind && null != l.attachment)
                                  ? [l.attachment]
                                  : [];
                        }),
                    );
                }
            },
            [n, a],
        ),
        en = i.useCallback(
            (e, t) => {
                P.current += 1;
                let l = P.current;
                (v({ direction: t, moves: l }),
                    b({ question: z, draft: B, selected: V, ownImage: J, ownSelected: X, direction: t, moves: l }),
                    E(!0),
                    x(e));
            },
            [B, J, X, z, V],
        ),
        ea = i.useCallback(() => {
            let e = I.current,
                t = _.current;
            null != e && null != t && A({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = I.current,
            t = _.current;
        if (null == e || null == t) return;
        ea();
        let l = new ResizeObserver(ea);
        return (l.observe(e), l.observe(t), () => l.disconnect());
    }, [ea]);
    let ei = p?.moves;
    i.useEffect(() => {
        if (null == ei) return;
        let e = setTimeout(() => b(null), 400),
            t = setTimeout(() => E(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ei]);
    let es = i.useCallback(
            (e) => {
                if (R) return;
                let t = { ...u, [z.id]: e };
                c(t);
                let l =
                    $ < n.questions.length - 1
                        ? $ + 1
                        : (function (e, t, l) {
                              let { questions: n } = e;
                              for (let e = 1; e <= n.length; e++) {
                                  let a = (l + e) % n.length,
                                      r = t[n[a].id];
                                  if (null == r || "" === r.text.trim()) return a;
                              }
                              return null;
                          })(n, t, $);
                null == l ? el(t) : en(l, l < $ ? "back" : "forward");
            },
            [u, n, R, $, z.id, el, en],
        ),
        eo = i.useCallback(() => {
            R || 0 === $ || en($ - 1, "back");
        }, [R, $, en]),
        eu = $ > 0 && !R,
        ef = i.useCallback(
            (e) => {
                f((e) => ({ ...e, [z.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                K ? R || c((e) => ({ ...e, [z.id]: t })) : es(t);
            },
            [R, K, z.id, es],
        ),
        { multiPartFor: em } = W,
        eh = i.useMemo(() => {
            var e;
            let t, l;
            return H
                ? ((e = em(z)),
                  (t = B.trim()),
                  (l = z.options.filter((e) => V.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: V,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...l, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [B, H, em, z, V]),
        eg = W.controlsFor(z, R),
        ex = i.useCallback(() => {
            if (null != eh) {
                "" !== eh.text && es(eh);
                return;
            }
            let e = B.trim();
            "" !== e && es({ kind: "custom", text: e });
        }, [B, eh, es]),
        [ep, ev] = i.useState(!1),
        [ej, eb] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ev(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let ey = i.useCallback(() => {
            null != s && (eb(!0), setTimeout(s, 150));
        }, [s]),
        ek = i.useMemo(
            () =>
                null != eh
                    ? "" !== eh.text
                        ? eh
                        : null
                    : "" !== B.trim()
                      ? { kind: "custom", text: B.trim() }
                      : (u[z.id] ?? null),
            [u, B, eh, z.id],
        ),
        ew = null != ek && !R,
        eN = $ === D - 1,
        eA = i.useCallback(() => {
            null == ek || R || es(ek);
        }, [R, ek, es]),
        eS = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tI.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tI.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tI.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eu
                            ? (e.preventDefault(), eo())
                            : "ArrowRight" === e.key && ew && (e.preventDefault(), eA())));
            },
            [eu, ew, eo, eA],
        );
    return (0, r.jsxs)("section", {
        className: o()(nR.$O, { [nR.fI]: ep && !ej, [nR.Oh]: ej }),
        role: "dialog",
        "aria-label": z.question,
        "data-conjure-clarification": n.id,
        "data-state": R ? "inert" : "open",
        "data-question-expanded": U ? "true" : void 0,
        "data-step": $,
        tabIndex: -1,
        onKeyDown: eS,
        children: [
            (0, r.jsxs)("div", {
                className: nR.rf,
                style: null == N ? void 0 : { height: N.heading + N.rows },
                "data-moving": C ? "" : void 0,
                children: [
                    (0, r.jsxs)("div", {
                        ref: I,
                        className: nR.wx,
                        children: [
                            (0, r.jsx)(y.E, {
                                ref: T,
                                tag: "span",
                                id: `${z.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: U ? void 0 : 5,
                                className: o()(nP.TK, nR.R_, { [nR.TB]: "exit" === Y, [nR.JU]: "enter" === Y }),
                                children: Q,
                            }),
                            ee || U
                                ? (0, r.jsx)("div", {
                                      className: nP.Q7,
                                      children: (0, r.jsx)(w.m, {
                                          text: et,
                                          children: (0, r.jsx)(t4.K, {
                                              icon: U ? ta.t : lB.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => O({ id: z.id, expanded: !U }),
                                              "aria-label": et,
                                              "aria-controls": `${z.id}-label`,
                                              "aria-expanded": U,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, r.jsx)(k.D, {
                                      className: o()(nP.gb, nP.Q7),
                                      onClick: ey,
                                      "aria-label": ed.intl.string(ec.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, r.jsx)(L.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: nR.Cg,
                        style: null == N ? void 0 : { insetBlockStart: N.heading },
                        children: (0, r.jsxs)("div", {
                            className: nR.I,
                            children: [
                                (0, r.jsxs)("div", {
                                    ref: _,
                                    className: nR.Ge,
                                    role: "group",
                                    "aria-labelledby": `${z.id}-label`,
                                    "data-direction": p?.direction,
                                    "data-parity": null == p ? void 0 : p.moves % 2,
                                    children: [
                                        H
                                            ? (0, r.jsx)(y.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: nR.aK,
                                                  children: ed.intl.string(ec.default.tE8qbz),
                                              })
                                            : null,
                                        (0, r.jsx)(nD, {
                                            projectId: l,
                                            question: z,
                                            selected: V,
                                            disabled: R,
                                            onPick: (e) =>
                                                H
                                                    ? h((t) => {
                                                          var l, n;
                                                          let a;
                                                          return {
                                                              ...t,
                                                              [z.id]:
                                                                  ((l = t[z.id] ?? n$),
                                                                  (n = e.id),
                                                                  (a = l.includes(n)
                                                                      ? l.filter((e) => e !== n)
                                                                      : [...l, n]),
                                                                  z.options
                                                                      .filter((e) => a.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ef(e),
                                            own: eg,
                                        }),
                                        K
                                            ? null
                                            : (0, r.jsxs)("div", {
                                                  className: nR.Xy,
                                                  children: [
                                                      (0, r.jsx)("span", {
                                                          className: nR.Gy,
                                                          "aria-hidden": !0,
                                                          children: (0, r.jsx)(l7.PencilIcon, {
                                                              size: "custom",
                                                              width: 20,
                                                              height: 20,
                                                              color: "currentColor",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(l8.y, {
                                                          value: B,
                                                          onChange: (e) => {
                                                              let { value: t } = e.currentTarget;
                                                              f((e) => ({ ...e, [z.id]: t }));
                                                          },
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  e.nativeEvent.isComposing ||
                                                                  (e.preventDefault(), ex());
                                                          },
                                                          placeholder: ed.intl.string(ec.default["tOC+tn"]),
                                                          "aria-label": ed.intl.formatToPlainString(
                                                              ec.default["4JeYPB"],
                                                              { question: z.question },
                                                          ),
                                                          disabled: R,
                                                          rows: 1,
                                                          className: nR.Pu,
                                                          "data-conjure-clarification-other": z.id,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                null == j
                                    ? null
                                    : (0, r.jsx)(
                                          nz,
                                          {
                                              projectId: l,
                                              question: j.question,
                                              draft: j.draft,
                                              selected: j.selected,
                                              ownImage: j.ownImage,
                                              ownSelected: j.ownSelected,
                                              direction: j.direction,
                                              disabled: R,
                                          },
                                          j.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            D > 1 || H || K
                ? (0, r.jsxs)("div", {
                      className: nP.qr,
                      children: [
                          (0, r.jsx)(y.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  D > 1
                                      ? ed.intl.formatToPlainString(ec.default.yzYUjq, { index: $ + 1, total: D })
                                      : null,
                          }),
                          (0, r.jsxs)("div", {
                              className: nP.zt,
                              children: [
                                  eu
                                      ? (0, r.jsx)(l9.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: ed.intl.string(ec.default.Pk5lfA),
                                            onClick: eo,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, r.jsx)(S.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ed.intl.string(eN ? ed.t.geKm7t : ec.default.w1nRmT),
                                      disabled: !ew,
                                      onClick: eA,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": eN ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var nO = l(856059),
    nU = l(411236);
function nG(e) {
    let { projectId: t, request: l, onDismiss: n } = e,
        a = null != l.note && "" !== l.note ? l.note : ed.intl.string(ec.default.XuOf5s);
    return (0, r.jsx)(nO.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: l, saving: i, submit: s } = e;
            function u(e) {
                (e.preventDefault(), s());
            }
            let c = (0, r.jsx)(S.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !l,
                text: ed.intl.string(ec.default.A7dQd9),
            });
            return null == n
                ? (0, r.jsxs)("form", {
                      className: nU.Mk,
                      onSubmit: u,
                      children: [
                          (0, r.jsx)(y.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: ed.intl.string(ec.default["jZjP+I"]),
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: a,
                          }),
                          t,
                          (0, r.jsx)("div", { className: nU.p0, children: c }),
                      ],
                  })
                : (0, r.jsxs)("form", {
                      className: o()(nP.nd, nP.jx),
                      "aria-label": ed.intl.string(ec.default["jZjP+I"]),
                      onSubmit: u,
                      children: [
                          (0, r.jsxs)("div", {
                              className: nP.wx,
                              children: [
                                  (0, r.jsx)(y.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: nP.TK,
                                      children: ed.intl.string(ec.default["jZjP+I"]),
                                  }),
                                  (0, r.jsx)(k.D, {
                                      className: o()(nP.gb, nP.Q7),
                                      onClick: n,
                                      "aria-label": ed.intl.string(ec.default["iq+Pte"]),
                                      children: (0, r.jsx)(L.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: nU.DQ,
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: a,
                                  }),
                                  t,
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: nP.qr,
                              children: (0, r.jsx)("div", { className: nP.zt, children: c }),
                          }),
                      ],
                  });
        },
    });
}
var nq = l(935208),
    nB = l(435558),
    nH = l.n(nB);
let nK = "VibegrationsComposerDrafts";
function nV() {
    return lk.w.get(nK) ?? {};
}
let nW = new Map(),
    nJ = nH().throttle(() => {
        if (0 === nW.size) return;
        let e = nV();
        for (let [t, l] of nW) "" === l ? delete e[t] : (e[t] = l);
        (nW.clear(), lk.w.set(nK, e));
    }, 1e3);
class nX extends f.Ay.Store {
    getDraft(e) {
        let t = nW.get(e);
        return null != t ? t : (nV()[e] ?? "");
    }
}
let nQ = new nX(nd.h, {
    LOGOUT: function () {
        return (nW.clear(), nJ.cancel(), lk.w.remove(nK), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (nW.set(t, l), nJ(), "" === l && nJ.flush(), !1);
    },
});
function nY(e) {
    return "" !== nQ.getDraft(e).trim();
}
var nZ = l(29080),
    n0 = l(46054),
    n1 = l(615839);
function n2(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : ed.intl.string(ec.default.KcFvbo);
}
function n3(e) {
    var t;
    let l,
        n,
        { steps: a, content: r, hasProposal: i, hasAttachments: s } = e,
        o = (0, lz.B4)(a),
        u = o.filter((e) => "message" === e.type).at(-1),
        c =
            !i &&
            null != u &&
            ((t = u.content),
            (l = t.trim()),
            (n = r.trim()),
            "" !== l && "" !== n && (l === n || (t.length >= 16e3 && n.startsWith(l))))
                ? u
                : null,
        d = o.filter((e) => e !== c),
        f = d.filter((e) => "message" === e.type).at(-1),
        m = !i && "" !== r.trim();
    return {
        streamed: d,
        lastStreamedMessage: f,
        replyKey: c?.key,
        showsClosingMessage: m,
        closingContent: m ? r.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: s, showsClosingMessage: m, endsOnStreamedMessage: (0, lz.Lf)(a) }),
    };
}
(l(134528), l(947204));
let n4 = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    n5 = {
        snail: () => ec.default.ABeVsS,
        goat: () => ec.default.dhXay8,
        frog: () => ec.default.SHeweG,
        bunny: () => ec.default.FytFE1,
        cat: () => ec.default["5c+sHs"],
        caterpillar: () => ec.default["/FYcne"],
        butterfly: () => ec.default["Ib/AxK"],
        dog: () => ec.default.zDjBR1,
        spider: () => ec.default["6sxyrN"],
        bee: () => ec.default.cVtefg,
        bot: () => ec.default.MjCw0v,
    },
    n6 = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function n7(e) {
    return { ...n6[e], name: ed.intl.string(n5[e]()) };
}
function n8(e) {
    return n4.includes(e) ? n7(e) : void 0;
}
function n9(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % n4.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, n4[(t + l) % n4.length]);
            }),
            n
        );
    })(e))
        t.set(l, n7(n));
    return t;
}
var ae = l(60160),
    at = l(16634);
function al(e) {
    let { projectId: t, lane: l, Illocon: n, tint: a, name: i, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        c = (0, lz.SY)(l.steps),
        d = u
            ? null != c
                ? (0, lz.WQ)(c)
                : n2(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(n2(e));
                  switch (e.status) {
                      case "failed":
                          return ed.intl.formatToPlainString(ec.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ed.intl.formatToPlainString(ec.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return ed.intl.formatToPlainString(ec.default["++9woZ"], {
                                  task: t,
                                  duration: (0, n1.MB)(e.durationMs),
                              });
                          return ed.intl.formatToPlainString(ec.default.nmI9Uh, { task: t });
                      default:
                          return ed.intl.formatToPlainString(ec.default.nmI9Uh, { task: t });
                  }
              })(o),
        f = u ? c : void 0,
        m =
            o.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, r.jsx)("ol", {
                                    className: l3.dO,
                                    children: l.steps.map((e) =>
                                        (0, r.jsx)(
                                            at.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: l3.iq,
                                      children: (0, r.jsx)(ae.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, r.jsx)(lG.A, {
        glyph: (0, r.jsx)(lq.u, {
            asset: (0, r.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: n2(o),
            position: "left",
            children: (0, r.jsx)("span", {
                className: l3.nC,
                children: (0, r.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: u,
        settled: !u,
        tint: a,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
var an = l(998445),
    aa = l(643210),
    ar = l(648127),
    ai = l(372795),
    as = l(163897);
let ao = "conjure-browser-viewer";
function au(e) {
    let { projectId: t, sessionIds: l } = e,
        n = (0, f.yK)(
            [aa.A],
            () =>
                l.flatMap((e) => {
                    let l = aa.A.getTab(t, e);
                    return null == l ? [] : [l];
                }),
            [t, l],
        );
    if (0 === n.length) return null;
    let a = n.map((e) => {
        let { session: t } = e;
        return t.id;
    });
    return (0, r.jsx)("ul", {
        className: as.kR,
        "aria-label": ed.intl.string(ec.default.Uvkr1G),
        children: n.map((e) =>
            (0, r.jsx)("li", { children: (0, r.jsx)(ac, { projectId: t, tab: e, sessionIds: a }) }, e.session.id),
        ),
    });
}
function ac(e) {
    let { projectId: t, tab: n, sessionIds: a } = e,
        [s, u] = (function () {
            let [e, t] = i.useState(null),
                [l, n] = i.useState(!1);
            return (
                i.useEffect(() => {
                    if (null == e) return;
                    let t = new IntersectionObserver(
                        (e) => {
                            let [t] = e;
                            return n(t?.isIntersecting ?? !1);
                        },
                        { rootMargin: "200px" },
                    );
                    return (t.observe(e), () => t.disconnect());
                }, [e]),
                [t, l]
            );
        })(),
        c = (0, te.useHasModalOpen)(ao),
        [d, f] = i.useState(!1),
        m = i.useCallback((e, t) => f(t), []),
        { ended: h } = n,
        g = (0, ar.i)(n.session);
    return (0, r.jsxs)(k.D, {
        innerRef: s,
        className: o()(as.Nr, h && as.Xj),
        onClick: () => {
            var e;
            return (
                (e = n.session.id),
                void (0, te.openModalLazy)(
                    async () => {
                        let { default: n } = await Promise.all([
                            l.e("459368"),
                            l.e("513843"),
                            l.e("501962"),
                            l.e("531527"),
                        ]).then(l.bind(l, 273594));
                        return (l) => (0, r.jsx)(n, { ...l, projectId: t, sessionId: e, sessionIds: a });
                    },
                    { modalKey: ao },
                )
            );
        },
        "aria-label": ed.intl.formatToPlainString(ec.default.G3a822, { title: g }),
        children: [
            (0, r.jsxs)("div", {
                className: as.Gt,
                children: [
                    (0, r.jsx)(ai.A, {
                        projectId: t,
                        sessionId: n.session.id,
                        fps: 1,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: as.Ji,
                        "aria-label": ed.intl.formatToPlainString(ec.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, r.jsx)("div", {
                              className: as.qf,
                              children: (0, r.jsx)(an.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, r.jsx)("div", {
                              className: as.HS,
                              children: (0, r.jsx)(y.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: ed.intl.string(ec.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("span", {
                className: as.pG,
                children: [
                    (0, r.jsx)("span", { className: o()(as.W9, h && as.oM) }),
                    (0, r.jsx)(y.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: g,
                    }),
                ],
            }),
        ],
    });
}
var ad = l(268409);
let af = new WeakMap();
function am(e) {
    let { projectId: t, steps: l, tree: n, segment: a } = e,
        s = (0, f.bG)([tH.Ay], () =>
            (function (e) {
                let t = af.get(e);
                if (null != t) return t;
                let l = new Map();
                for (let t of e)
                    for (let e of t.steps)
                        if ("node" === e.kind) for (let n of e.node?.browser_sessions ?? []) l.set(n, t.steps);
                return (af.set(e, l), l);
            })(tH.Ay.getMessages(t)),
        ),
        o = i.useMemo(
            () =>
                (function (e) {
                    let { latest: t, steps: l, tree: n, segment: a } = e,
                        r = new Map();
                    for (let e of [...n.steps, ...n.tasks.flatMap((e) => e.steps)])
                        for (let t of e.browserSessions) r.has(t) || r.set(t, e.segment);
                    return [...r]
                        .filter((e) => {
                            let [n, r] = e;
                            return t.get(n) === l && (null == a || r === a);
                        })
                        .map((e) => {
                            let [t] = e;
                            return t;
                        });
                })({ latest: s, steps: l, tree: n, segment: a }),
            [s, l, n, a],
        );
    return 0 === o.length
        ? null
        : (0, r.jsx)("li", { className: ad.h, children: (0, r.jsx)(au, { projectId: t, sessionIds: o }) });
}
var ah = l(469393);
function ag(e) {
    let { proposal: t, onRestore: l } = e,
        n = (0, tl.lG)(t.authored_at);
    return (0, r.jsx)(lK, {
        title: ed.intl.string(ec.default["t+b0rz"]),
        children: (0, r.jsxs)("div", {
            className: ah.r,
            children: [
                (0, r.jsxs)("div", {
                    className: ah.z,
                    children: [
                        (0, r.jsx)(y.E, { variant: "text-md/medium", children: t.subject }),
                        null != n.relative
                            ? (0, r.jsx)(y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: n.absolute ?? void 0,
                                  children: n.relative,
                              })
                            : null,
                    ],
                }),
                null != l
                    ? (0, r.jsx)(S.$, {
                          variant: "secondary",
                          size: "sm",
                          text: ed.intl.string(ec.default.H8Jfhu),
                          onClick: l,
                      })
                    : null,
            ],
        }),
    });
}
var ax = l(231483),
    ap = l(632015),
    av = l(323384),
    aj = l(633018),
    ab = l(430392),
    ay = l(885574);
let ak = {
    automod: ec.default.DnWMLj,
    widget: ec.default["EswAi+"],
    activity: ed.t.IC5Ann,
    commands: ec.default.w7JaEP,
    chat_bot: ec.default["5QSvrP"],
    bot: ec.default.VFWfz1,
};
var aw = l(176999),
    aN = (((n = {}).IMAGE = "image"), n),
    aA = (((a = {}).PRIVATE = "private"), (a.PUBLIC = "public"), a),
    aS = l(773669);
let aC = [],
    aE = {};
function aI(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aM(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aN.IMAGE,
        visibility: aA.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aT = l(127258),
    a_ = l(587895),
    aP = l(320095),
    aR = l(963852),
    aL = l(95701),
    aD = l(889227),
    a$ = l(155718);
let az = ["command", "user_command", "message_command", "message"],
    aF = new Set([a$.kc.CHAT, a$.kc.USER, a$.kc.MESSAGE]);
function aO(e) {
    return e.type ?? a$.kc.CHAT;
}
function aU(e) {
    return "launch" !== e.kind && aF.has(aO(e));
}
function aG(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function aq(e, t) {
    let l = az.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        n = [...l.filter((e) => !aG(e)), ...l.filter(aG)].slice(0, 3);
    for (let a of t || 1 === l.length ? e : []) {
        if (n.length >= 3) break;
        n.includes(a) || aG(a) || n.push(a);
    }
    return az.flatMap((t) => e.filter((e) => e.kind === t && n.includes(e)));
}
let aB = new aL.nA({ id: "1337", guild_id: "1337", type: eb.rbe.GUILD_TEXT, name: "preview" });
function aH(e, t) {
    let {
            bot: l = !1,
            discriminator: n = "0000",
            enabled: a = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = (0, f.bG)([tq.default], () => tq.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            a && r?.username !== t && (0, tK.nj)(new aD.A({ id: e, username: t, discriminator: n, bot: l }));
        }, [a, r, e, t, n, l]),
        r
    );
}
let aK = /^@\S+/;
var aV = l(628284),
    aW = l(97808),
    aJ = l(778712),
    aX = l(809115),
    aQ = l(486020),
    aY = l(200700);
let aZ = {
        alert: { label: () => ed.intl.string(ec.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ed.intl.string(ec.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ed.intl.string(ec.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ed.intl.string(ec.default.RGzFNK), blockedStyle: !1 },
    },
    a0 = {
        blocked: { label: () => ed.intl.string(ec.default.YdnZ8q), tone: "red" },
        alert: { label: () => ed.intl.string(ec.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ed.intl.string(ec.default.RGzFNK), tone: "green" },
    },
    a1 = ["blocked", "alert", "allowed"],
    a2 = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var a3 = l(984097),
    a4 = l(13673);
let a5 = { blocked: ax.ShieldIcon, alert: tY.BellIcon, allowed: aV.y },
    a6 = {
        blurple: { text: "text-brand", icon: $.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: $.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: $.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function a7(e) {
    var t, l;
    let n,
        a,
        { example: i } = e,
        s =
            "" ===
            (a = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : ed.intl.formatToPlainString(ed.t["3LYql6"], {
                          duration:
                              ((l = t.timeout_seconds),
                              null != (n = (0, aY.getFriendlyDurationString)(l))
                                  ? n
                                  : l % 604800 == 0
                                    ? ed.intl.formatToPlainString(ed.t.EmoBD2, { weeks: l / 604800 })
                                    : l % 86400 == 0
                                      ? ed.intl.formatToPlainString(ed.t["k2UNz+"], { days: l / 86400 })
                                      : l % 3600 == 0
                                        ? ed.intl.formatToPlainString(ed.t.xCjYxK, { hours: l / 3600 })
                                        : l % 60 == 0
                                          ? ed.intl.formatToPlainString(ed.t.opVZ9q, { mins: l / 60 })
                                          : ed.intl.formatToPlainString(ed.t["4zv/jq"], { secs: l })),
                      }),
                i.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : a;
    return null == s
        ? null
        : (0, r.jsx)(y.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: s,
          });
}
function a8(e) {
    var t;
    let { example: l } = e,
        { label: n, blockedStyle: a } = aZ[l.outcome];
    return (0, r.jsxs)("li", {
        className: o()(a3.nM, { [o()(a3.HV, a4.DX)]: a }),
        children: [
            (0, r.jsx)(N.A, { children: `${n()}: ` }),
            (0, r.jsx)("span", {
                className: a3.my,
                children: (0, r.jsx)(aW.eu, {
                    src: (0, aQ.AE)(void 0, void 0),
                    size: aJ._3.SIZE_24,
                    "aria-label": ed.intl.string(ec.default["1yI0xV"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: a3.fw,
                children: [
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = l.content), n0.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, r.jsx)(a7, { example: l }),
                ],
            }),
        ],
    });
}
function a9(e) {
    let { group: t } = e,
        l = i.useId(),
        n = a0[t.section],
        a = a5[t.section],
        s = a6[n.tone];
    return (0, r.jsxs)("div", {
        className: a3.uW,
        children: [
            (0, r.jsxs)("div", {
                className: a3.bV,
                children: [
                    (0, r.jsx)(a, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, r.jsx)(y.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: a3.a9,
                        children: n.label(),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: a3.Ge,
                "aria-labelledby": l,
                children: t.examples.map((e, t) => (0, r.jsx)(a8, { example: e }, t)),
            }),
        ],
    });
}
function re() {
    let { avatarSrc: e, eventHandlers: t } = (0, aX.a)(!0);
    return (0, r.jsx)("span", {
        className: a3.Gy,
        ...t,
        children: (0, r.jsx)(aW.eu, { src: e, size: aJ._3.SIZE_16, "aria-label": ed.intl.string(ed.t.hG1StD) }),
    });
}
function rt(e) {
    var t;
    let { automod: l } = e;
    return (0, r.jsx)("div", {
        className: a3.K1,
        children: ((t = l.examples),
        a1
            .map((e) => ({ section: e, examples: t.filter((t) => a2[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, r.jsx)(a9, { group: e }, e.section)),
    });
}
var rl = l(460905),
    rn = l(110384),
    ra = l(763754),
    rr = l(217424),
    ri = l(194085),
    rs = l(20851),
    ro = l(692508),
    ru = l(798819);
function rc(e) {
    let { item: t } = e,
        { iconLeft: l, icon: n } = t;
    return (0, r.jsxs)("div", {
        className: o()(ru.item, ru.labelContainer, ru.colorDefault, {
            [ru.focused]: !0 === t.highlighted,
            [ru.disabled]: !0 === t.muted,
        }),
        children: [
            null != l
                ? (0, r.jsx)("div", {
                      className: ru.iconContainerLeft,
                      children: (0, r.jsx)(l, { color: "currentColor", className: ru.icon }),
                  })
                : null,
            (0, r.jsx)("div", { className: o()(ru.label, ro.Gy), children: t.label }),
            null != n
                ? (0, r.jsx)("div", {
                      className: ru.iconContainer,
                      children: (0, r.jsx)(n, { color: "currentColor", className: ru.icon }),
                  })
                : null,
        ],
    });
}
function rd(e) {
    let { target: t, commandName: l, appIconSrc: n } = e,
        a = i.useMemo(
            () =>
                null != n
                    ? (e) => {
                          let { className: t } = e;
                          return (0, r.jsx)("img", { src: n, alt: "", className: o()(t, ro.ak) });
                      }
                    : void 0,
            [n],
        ),
        s =
            "message" === t
                ? { label: ed.intl.string(ed.t["5IEsGx"]), icon: rn.W, muted: !0 }
                : { label: ed.intl.string(ed.t.LYju5J), muted: !0 };
    return (0, r.jsx)("div", {
        className: o()(ru.menu, ro.MK),
        "aria-hidden": !0,
        children: (0, r.jsxs)("div", {
            className: ru.scroller,
            children: [
                (0, r.jsx)(rc, { item: s }),
                (0, r.jsx)("div", { className: ru.separator }),
                (0, r.jsx)(rc, { item: { label: l, iconLeft: a, highlighted: !0 } }),
            ],
        }),
    });
}
var rf = l(381941);
function rm() {}
function rh(e) {
    let t,
        l,
        n,
        a,
        s,
        u,
        c,
        d,
        m,
        h,
        g,
        { projectId: x, exchanges: p } = e,
        {
            items: v,
            botIcon: j,
            appIconSrc: b,
        } = ((t = (0, f.bG)([tq.default], () => tq.default.getCurrentUser())),
        (l = (0, f.bG)([eC.Ay], () => eC.Ay.getProject(x))),
        (n = l?.application_id),
        (a = (0, f.bG)([a_.A], () => a_.A.getApplication(n)?.getIconURL(80) ?? null, [n])),
        (s = l?.name ?? ed.intl.string(ec.default.JEYq8M)),
        (u = (0, f.bG)([tq.default], () => (null != n ? tq.default.getUser(n) : void 0), [n])),
        (d = aH("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (h = aH("31338", ed.intl.string(ec.default["9iAOsw"]), { discriminator: "0003" })),
        (g = aH("31339", (0, tB.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == m || null == h
                        ? []
                        : (function (e, t, l) {
                              var n, a, r;
                              let { bot: i, currentUser: s, viewer: o, member: u } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: l,
                                          messageType: n,
                                          menu: a,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      r = String(c.length + 1),
                                      i = (0, aP.rh)({
                                          ...(0, aR.Ay)({
                                              channelId: aB.id,
                                              content: e,
                                              author: t,
                                              type: n ?? eb.lAJ.DEFAULT,
                                          }),
                                          id: r,
                                          state: eb.cmJ.SENT,
                                          ...(null != l
                                              ? {
                                                    interaction: {
                                                        id: r,
                                                        name: l,
                                                        type: aT.G.APPLICATION_COMMAND,
                                                        user: (0, aR.Vi)(s),
                                                    },
                                                }
                                              : {}),
                                      });
                                  c.push({ key: r, record: i, isCommandReply: null != l, menu: a });
                              }
                              for (let t of e)
                                  switch (t.kind) {
                                      case "command":
                                          d(t.bot, i, {
                                              interactionName: t.user.trim().replace(/^\//, "").split(/\s+/)[0] ?? "",
                                              messageType: eb.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (d(e ? l.memberMessage : l.targetMessage, e ? u : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, i, {
                                                  interactionName: t.user,
                                                  messageType: eb.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((n = t.user), n.trim().replace(aK, `<@${i.id}>`)), s),
                                              d(((a = t.bot), a.includes("<@") ? a : `<@${o.id}> ${a}`), i));
                                          break;
                                      case "event":
                                          d(((r = t.bot), r.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              p,
                              { bot: m, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: ed.intl.string(ec.default["y+QYes"]),
                                  memberMessage: ed.intl.string(ec.default.BUTRDc),
                              },
                          ),
                [p, m, t, g, h],
            ),
            botIcon: a,
            appIconSrc: a ?? m?.getAvatarURL(void 0, 80),
        });
    return 0 === v.length
        ? null
        : (0, r.jsx)("ol", {
              className: o()(ro.TE, `group-spacing-${rf.ES}`),
              children: v.map((e) => {
                  let { key: t, record: l, isCommandReply: n, menu: a } = e;
                  return (0, r.jsxs)(
                      "li",
                      {
                          className: null != a ? ro.Rz : void 0,
                          children: [
                              (0, r.jsx)(rs.A, {
                                  message: l,
                                  channel: aB,
                                  author: (0, ra.FT)(l.author, aB),
                                  isGroupStart: !0,
                                  avatarOverride: l.author.bot ? (j ?? void 0) : void 0,
                                  childrenExecutedCommand: n ? (0, r.jsx)(rr.A, { message: l, channel: aB }) : void 0,
                                  usernameClassName: a?.target === "user" ? ro.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              a?.target === "message"
                                  ? (0, r.jsx)("div", {
                                        className: ro.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, r.jsxs)(ri.Ay, {
                                            children: [
                                                (0, r.jsx)(ri.qv, {
                                                    label: ed.intl.string(ed.t.lfIHs4),
                                                    icon: rl.n,
                                                    onClick: rm,
                                                }),
                                                (0, r.jsx)(ri.qv, {
                                                    label: ed.intl.string(ed.t["5IEsGx"]),
                                                    icon: rn.W,
                                                    onClick: rm,
                                                }),
                                                (0, r.jsx)(ri.qv, {
                                                    label: ed.intl.string(ed.t["UKOtz+"]),
                                                    icon: t5.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: rm,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != a
                                  ? (0, r.jsx)("div", {
                                        className: "user" === a.target ? ro.ET : ro.je,
                                        inert: !0,
                                        children: (0, r.jsx)(rd, {
                                            target: a.target,
                                            commandName: a.commandName,
                                            appIconSrc: b,
                                        }),
                                    })
                                  : null,
                          ],
                      },
                      t,
                  );
              }),
          });
}
var rg = l(633075),
    rx = l(946356),
    rp = l(58216),
    rv = l(27399);
function rj(e) {
    let { applicationId: t, rendererProps: l } = e,
        n = (0, f.bG)([tq.default], () => tq.default.getCurrentUser()),
        a = i.useMemo(() => new rg.R({ applicationId: t }), [t]);
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: rv.H,
              children: (0, r.jsx)(rx.A.Overlay, {
                  className: rv.w,
                  children: (0, r.jsx)(rp.A, {
                      user: n,
                      widget: a,
                      allowEditing: !1,
                      disableInteraction: !0,
                      interactiveLinks: !0,
                      disableCTA: !0,
                      rendererProps: l,
                  }),
              }),
          });
}
var rb = l(443863);
let ry = {
    automod: ax.ShieldIcon,
    widget: ap.f,
    activity: av.k,
    commands: aj.k,
    chat_bot: h.ChatIcon,
    bot: ab.RobotIcon,
};
function rk(e) {
    let { label: t, icon: l, info: n, children: a } = e;
    return (0, r.jsxs)("section", {
        className: rb.uW,
        children: [
            (0, r.jsxs)("span", {
                className: rb.a9,
                children: [
                    l,
                    (0, r.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    n,
                ],
            }),
            a,
        ],
    });
}
function rw(e) {
    let { text: t, label: l } = e;
    return (0, r.jsx)(w.m, {
        text: t,
        children: (0, r.jsx)(k.D, {
            className: rb.bk,
            "aria-label": l,
            children: (0, r.jsx)(ay.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function rN(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, r.jsx)(rk, {
              label: t,
              children: (0, r.jsx)("div", {
                  className: rb.Ip,
                  children: l.map((e) =>
                      (0, r.jsx)(
                          "span",
                          {
                              className: rb.jw,
                              children: (0, r.jsx)(y.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  tag: "span",
                                  children: e
                                      .split("_")
                                      .map((e) => (0 === e.length ? e : e[0] + e.slice(1).toLowerCase()))
                                      .join(" "),
                              }),
                          },
                          e,
                      ),
                  ),
              }),
          });
}
function rA(e) {
    let { tags: t } = e;
    return (0, r.jsx)("span", {
        className: rb.K2,
        children: t.map((e) => {
            let t = ry[e];
            return (0, r.jsxs)(
                "span",
                {
                    className: rb.L6,
                    children: [
                        (0, r.jsx)(t, {
                            size: "custom",
                            width: 16,
                            height: 16,
                            color: "currentColor",
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(y.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            tag: "span",
                            children: ed.intl.string(ak[e]),
                        }),
                    ],
                },
                e,
            );
        }),
    });
}
function rS(e) {
    let { projectId: t, design: l } = e,
        { id: n } = l,
        { src: a, gone: s, handleError: o } = nC(t, n),
        u = ed.intl.string(ec.default["3/aHX6"]),
        c = i.useCallback(() => {
            (0, er.PK)(t, n).then(
                (e) => {
                    (0, nc.R)({
                        items: [{ type: "IMAGE", url: e, alt: u }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, n, u]);
    return s
        ? null
        : (0, r.jsx)(rk, {
              label: ed.intl.string(ec.default.X15LLY),
              info: (0, r.jsx)(rw, {
                  text: ed.intl.string(ec.default.nR4B8P),
                  label: ed.intl.string(ec.default.nc0SNY),
              }),
              children: (0, r.jsx)(k.D, {
                  className: rb.xX,
                  onClick: c,
                  "aria-label": ed.intl.string(ec.default.TvAPIm),
                  children: null != a ? (0, r.jsx)("img", { src: a, alt: u, className: rb.sN, onError: o }) : null,
              }),
          });
}
function rC(e) {
    let t,
        l,
        { projectId: n, proposal: a, version: s, onApprove: o } = e,
        { automod: u } = a,
        { botInteraction: c, botExchanges: d } =
            ((t = (function (e) {
                if (null != e.bot) return e.bot.interaction;
                let t = e.commands.some(aU),
                    l = e.privileged_intents?.includes("MESSAGE_CONTENT") === !0;
                return t && l
                    ? "both"
                    : t
                      ? "commands"
                      : l
                        ? "messages"
                        : !0 === e.is_activity || null != e.automod || null != e.widget_config
                          ? null
                          : "events";
            })(a)),
            (l = i.useMemo(
                () =>
                    null == t
                        ? []
                        : (function (e, t, l) {
                              let n = e.bot?.example_exchanges ?? [],
                                  a = { kind: "event", user: "", bot: l.event };
                              if ("events" === t) {
                                  let e = n.slice(0, 3).map((e) => {
                                      let { bot: t } = e;
                                      return "" !== t.trim() ? { ...a, bot: t } : a;
                                  });
                                  return e.length > 0 ? e : [a];
                              }
                              let r = n.flatMap((e) => {
                                      let { user: l, bot: n } = e;
                                      return "" === l.trim()
                                          ? []
                                          : [
                                                {
                                                    kind:
                                                        "messages" !== t && l.trimStart().startsWith("/")
                                                            ? "command"
                                                            : "message",
                                                    user: l,
                                                    bot: n,
                                                },
                                            ];
                                  }),
                                  i = { kind: "message", user: l.message, bot: l.reply };
                              if ("messages" === t && 0 === r.length) return [i];
                              let s = e.commands.filter(aU).map((e) =>
                                      (function (e, t) {
                                          let l = e.description?.trim() ?? "",
                                              n = "" !== l ? l : t.reply;
                                          switch (aO(e)) {
                                              case a$.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: n };
                                              case a$.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: n };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: n };
                                          }
                                      })(e, l),
                                  ),
                                  o = "messages" === t ? [] : s.filter(aG),
                                  u = r.length > 0 ? aq([...r, ...o], !0) : aq("both" === t ? [...s, i] : s, !1);
                              return u.length > 0 ? u : [a];
                          })(a, t, {
                              message: ed.intl.string(ec.default.J7qggf),
                              reply: ed.intl.string(ec.default.nqYtiy),
                              event: ed.intl.string(ec.default["05lU9W"]),
                          }),
                [a, t],
            )),
            { botInteraction: t, botExchanges: l }),
        m = (function (e, t) {
            let { widget_config: l, widget_preview: n } = t,
                a = (0, f.bG)([aS.default], () => aS.default.locale),
                r = (0, f.bG)([eC.Ay], () => {
                    let t = eC.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [l, n] = i.useState(aE);
                    return (
                        i.useEffect(() => {
                            let l = Object.entries(t ?? {});
                            if (0 === l.length) return;
                            let a = !1;
                            return (
                                Promise.all(
                                    l.map((t) => {
                                        let [l, n] = t;
                                        return (0, er.PK)(e, n.id).then(
                                            (e) => [l, e],
                                            () => null,
                                        );
                                    }),
                                ).then(
                                    (e) => {
                                        a || n(Object.fromEntries(e.filter((e) => null != e)));
                                    },
                                    () => {},
                                ),
                                () => {
                                    a = !0;
                                }
                            );
                        }, [e, t]),
                        l
                    );
                })(e, n?.images),
                o = i.useMemo(
                    () =>
                        null == l || null == n
                            ? null
                            : (function (e, t, l, n) {
                                  let a = {};
                                  for (let [t, l] of Object.entries(e.surfaces))
                                      null != l &&
                                          (a[t] = (function (e) {
                                              let t = {};
                                              for (let [l, n] of Object.entries(e.components)) {
                                                  let e = {};
                                                  for (let [t, l] of Object.entries(n.fields))
                                                      e[t] = {
                                                          ...aI(l),
                                                          ...(null != l.fallback ? { fallback: aI(l.fallback) } : {}),
                                                      };
                                                  t[l] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(l));
                                  let r = aw.uW.safeParse(a);
                                  if (!r.success) return null;
                                  let i = r.data;
                                  return null == i[tb.m.WIDGET_TOP] || null == i[tb.m.WIDGET_BOTTOM]
                                      ? null
                                      : {
                                            locale: n,
                                            surfaceConfigs: i,
                                            isLoading: !1,
                                            hasIdentity: !0,
                                            resolutionContext: {
                                                data: (function (e, t, l) {
                                                    let n = (function (e) {
                                                            let t = new Map();
                                                            for (let l of Object.values(e.surfaces))
                                                                for (let e of Object.values(l?.components ?? {}))
                                                                    for (let l of Object.values(e.fields))
                                                                        "data" !== l.value_type ||
                                                                            t.has(l.value) ||
                                                                            t.set(l.value, l.presentation_type);
                                                            return t;
                                                        })(e),
                                                        a = {};
                                                    for (let [e, r] of Object.entries(t.sample_data ?? {}))
                                                        if ("image" === n.get(e)) {
                                                            let t = l[String(r)];
                                                            null != t &&
                                                                (a[e] = {
                                                                    type: aw.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof r
                                                                ? (a[e] = { type: aw.oG.NUMBER, value: r })
                                                                : (a[e] = { type: aw.oG.STRING, value: r });
                                                    return a;
                                                })(e, t, l),
                                                applicationAssets: Object.keys(l).map(aM),
                                                getApplicationAssetUrl: (e) => l[e.key] ?? "",
                                                localizedStrings: aC,
                                            },
                                        };
                              })(l, n, s, a),
                    [l, n, s, a],
                );
            return i.useMemo(() => (null == r || null == o ? null : { applicationId: r, rendererProps: o }), [r, o]);
        })(n, a),
        h = s?.superseded === !0,
        g = a.what_changed?.trim() ?? "";
    return (0, r.jsxs)(lJ, {
        title:
            h && null != s
                ? ed.intl.formatToPlainString(ec.default.YZ3qJs, { version: s.version })
                : ed.intl.string(ec.default["3b6e7o"]),
        meta: h
            ? (0, r.jsx)(lW, { children: ed.intl.string(ec.default.hF2c41) })
            : (0, r.jsx)(rA, {
                  tags: (function (e, t) {
                      if (null != e.automod) return ["automod"];
                      let l = null != e.widget_config ? ["widget"] : [];
                      return !0 === e.is_activity
                          ? [...l, "activity"]
                          : null == t
                            ? [...l, "bot"]
                            : (("commands" === t || "both" === t) && l.push("commands"),
                              "commands" !== t && l.push("chat_bot"),
                              l);
                  })(a, c),
              }),
        superseded: h,
        showLabel: ed.intl.string(ec.default.yD8EJS),
        hideLabel: ed.intl.string(ec.default.nSPGNb),
        bodyClassName: rb.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== g
                ? (0, r.jsx)(rk, {
                      label: ed.intl.string(ec.default.iNS4dl),
                      children: (0, r.jsx)(y.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: g,
                      }),
                  })
                : null,
            (0, r.jsx)(y.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: a.summary,
            }),
            null != u && u.examples.length > 0
                ? (0, r.jsx)(rk, {
                      label: ed.intl.string(ec.default.z4ZKYG),
                      icon: (0, r.jsx)(re, {}),
                      info: (0, r.jsx)(rw, {
                          text: ed.intl.string(ec.default.bo4MOx),
                          label: ed.intl.string(ec.default.VPLNot),
                      }),
                      children: (0, r.jsx)(rt, { automod: u }),
                  })
                : null,
            null == u && null != a.design_image ? (0, r.jsx)(rS, { projectId: n, design: a.design_image }) : null,
            d.length > 0
                ? (0, r.jsx)(rk, {
                      label: ed.intl.string(ec.default.sA1lTv),
                      info: (0, r.jsx)(rw, {
                          text: ed.intl.string(ec.default.NnmbJu),
                          label: ed.intl.string(ec.default.KsqQJX),
                      }),
                      children: (0, r.jsx)(rh, { projectId: n, exchanges: d }),
                  })
                : null,
            null == u && null != m
                ? (0, r.jsx)(rk, {
                      label: ed.intl.string(ec.default.ove4zH),
                      info: (0, r.jsx)(rw, {
                          text: ed.intl.string(ec.default.XcIrHx),
                          label: ed.intl.string(ec.default["TwT+ht"]),
                      }),
                      children: (0, r.jsx)(rj, { ...m }),
                  })
                : null,
            a.changes.length > 0
                ? (0, r.jsx)(rk, {
                      label: ed.intl.string(ec.default["5+mG1z"]),
                      children: (0, r.jsx)("ul", {
                          className: rb.p_,
                          children: a.changes.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: rb.Aw,
                                      children: (0, r.jsx)(y.E, {
                                          variant: "experimental/body-md/normal",
                                          color: "text-default",
                                          tag: "span",
                                          selectable: !0,
                                          children: e,
                                      }),
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            a.commands.length > 0
                ? (0, r.jsx)(rk, {
                      label: ed.intl.string(ed.t["0hKkS+"]),
                      children: (0, r.jsx)("ul", {
                          className: rb.p_,
                          children: a.commands.map((e, t) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: rb.uX,
                                      children: [
                                          (0, r.jsxs)(y.E, {
                                              variant: "experimental/body-md/medium",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children: [
                                                  "launch" === e.kind || 4 === e.type
                                                      ? "\u21EA /"
                                                      : 2 === e.type || 3 === e.type
                                                        ? ""
                                                        : "/",
                                                  e.name,
                                              ],
                                          }),
                                          (0, r.jsx)(y.E, {
                                              variant: "experimental/body-md/normal",
                                              color: "text-muted",
                                              tag: "span",
                                              selectable: !0,
                                              children: e.description,
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            (0, r.jsx)(rN, { label: ed.intl.string(ec.default["2UbW6r"]), names: a.bot_permissions ?? [] }),
            (0, r.jsx)(rN, { label: ed.intl.string(ec.default["7TKfpj"]), names: a.privileged_intents ?? [] }),
            null == o || h
                ? null
                : (0, r.jsxs)("div", {
                      className: rb.o1,
                      children: [
                          (0, r.jsx)(S.$, {
                              variant: "primary",
                              size: "sm",
                              text: ed.intl.string(ec.default["6S+wRM"]),
                              onClick: o,
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: ed.intl.string(ec.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var rE = l(331322);
function rI(e) {
    return null != e && e.status?.state === "unpublished";
}
function rM(e) {
    let { publish: t } = e,
        l = t.guildId,
        n = (0, f.bG)([Y.A], () => (null == l ? null : Y.A.getGuild(l)));
    return (0, r.jsx)(rE.B, {
        gap: 8,
        align: "start",
        children: (0, r.jsxs)(rE.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, r.jsx)(w.m, {
                    text: t.disabledReason,
                    asContainer: !0,
                    children: (0, r.jsx)(S.$, {
                        variant: "primary",
                        size: "sm",
                        loading: t.publishing,
                        disabled: t.disabled,
                        onClick: () => t.run("card"),
                        text: t.label,
                    }),
                }),
                null != n
                    ? (0, r.jsxs)(rE.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, r.jsx)(y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ed.intl.string(ec.default["+HGTlC"]),
                              }),
                              (0, r.jsx)(eB.Ay, { guild: n, size: eB.Ay.Sizes.SMOL }),
                              (0, r.jsx)(y.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  lineClamp: 1,
                                  children: (function (e) {
                                      let t = Array.from(e);
                                      if (t.length <= 24) return e;
                                      let l = t.slice(0, 23).join("");
                                      return `${l.trimEnd()}\u{2026}`;
                                  })(n.name),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
function rT(e) {
    let { projectId: t } = e,
        l = (0, ll.Ay)(t);
    return null != l && rI(l) ? (0, r.jsx)(rM, { publish: l }) : null;
}
var r_ = l(478016),
    rP = l(989271);
function rR(e) {
    let { idea: t, selected: l, onPick: n } = e,
        a = i.useId(),
        s = null == n;
    return (0, r.jsxs)(k.D, {
        className: o()(rP.nM, { [rP.f1]: s, [rP.CZ]: l }),
        onClick: s ? void 0 : () => n(t),
        "aria-label": ed.intl.formatToPlainString(ec.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : a,
        "aria-disabled": s,
        "aria-pressed": l,
        children: [
            (0, r.jsxs)("div", {
                className: rP.jo,
                children: [
                    l
                        ? (0, r.jsx)(r_.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: rP.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, r.jsx)(y.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: rP.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, r.jsx)(y.E, {
                      tag: "div",
                      id: a,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function rL(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: n } = e,
        [a, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), n?.(e));
            },
            [n],
        );
    return (0, r.jsx)(lK, {
        title: ed.intl.string(ec.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, r.jsx)(
                rR,
                { idea: e, selected: a.has(e.id) || l?.has(e.id) === !0, onPick: null == n ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function rD(e) {
    let { onAsk: t } = e;
    return (0, r.jsx)(rE.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, r.jsx)(S.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: ed.intl.string(ec.default["U/bLzU"]),
        }),
    });
}
var r$ = l(530557),
    rz = l(872162);
function rF(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var rO = l(202723);
function rU(e) {
    let { projectId: t, cardId: n, request: a, status: s, awaiting: u } = e,
        c = i.useCallback(() => {
            (0, te.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("291953"), l.e("408337")]).then(l.bind(l, 789864));
                return (l) => (0, r.jsx)(e, { ...l, projectId: t, request: a });
            });
        }, [t, a]),
        d = i.useMemo(() => a.fields.map((e) => ({ id: e.name, label: e.label, icon: r$.R })), [a.fields]),
        f = (function (e, t) {
            let [l, n] = i.useState(() => rF(e, t));
            return l.cardId !== e || (null == l.status && "pending" !== t)
                ? (n(rF(e, t)), !1)
                : null != l.status && t !== l.status;
        })(n, s),
        m = o()(rO.Lo, { [rO.jY]: f });
    return "superseded" === s
        ? (0, r.jsx)(
              "article",
              {
                  className: m,
                  children: (0, r.jsx)(y.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: ed.intl.string(ec.default.CTxtdV),
                  }),
              },
              s,
          )
        : "inactive" === s
          ? (0, r.jsxs)(
                "article",
                {
                    className: m,
                    children: [
                        (0, r.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: ed.intl.string(ec.default.HCQvpO),
                        }),
                        (0, r.jsx)(rz.C, { label: ed.intl.string(ec.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, r.jsx)(
                  "article",
                  {
                      className: rO.Lo,
                      children: (0, r.jsx)(rz.C, { label: ed.intl.string(ec.default.HCQvpO), size: "xs", items: d }),
                  },
                  s,
              )
            : "received" === s
              ? (0, r.jsxs)(
                    "article",
                    {
                        className: m,
                        children: [
                            (0, r.jsxs)("div", {
                                className: rO.$h,
                                children: [
                                    (0, r.jsx)("span", {
                                        className: rO.c9,
                                        "aria-hidden": !0,
                                        children: (0, r.jsx)(aV.y, {
                                            size: "xs",
                                            color: $.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, r.jsx)(y.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: ed.intl.string(ec.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(rz.C, { label: ed.intl.string(ec.default.sfp7Up), size: "xs", items: d }),
                        ],
                    },
                    s,
                )
              : (0, r.jsxs)("article", {
                    className: rO.Lo,
                    children: [
                        (0, r.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: ed.intl.string(null != u ? ec.default.O0QIqj : ec.default.HCQvpO),
                        }),
                        (0, r.jsx)(y.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != a.note && "" !== a.note ? a.note : ed.intl.string(ec.default.MPGSHL),
                        }),
                        (0, r.jsx)(rz.C, { label: ed.intl.string(ec.default.HCQvpO), size: "xs", items: d }),
                        (0, r.jsx)("div", {
                            className: rO.sq,
                            children: (0, r.jsx)(S.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: ed.intl.string(ec.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var rG = l(919790),
    rq = l(971824),
    rB = l(162052),
    rH = l(165648);
function rK(e) {
    let t = n9(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? n8(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: n2(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function rV(e) {
    let {
            projectId: t,
            steps: l,
            active: n = !1,
            turnActive: a = n,
            checklistSuperseded: s = !1,
            durationMs: o,
            interrupted: u = !1,
            todos: c,
            provisionalTodo: d,
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: x,
        } = e,
        p = i.useMemo(() => (0, lz.GO)(l, { turnActive: n }), [l, n]),
        v = i.useMemo(
            () =>
                null == f
                    ? p
                    : {
                          ...p,
                          steps: p.steps.filter((e) => e.segment === f),
                          tasks: p.tasks.filter((e) => e.task.segment === f),
                      },
            [p, f],
        );
    if (u)
        return (0, r.jsx)("ol", {
            className: l3.pj,
            "data-live": !1,
            children: (0, r.jsx)(lG.A, {
                glyph: (0, r.jsx)(nZ.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ed.intl.string(ec.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = n ? void 0 : (x ?? (h ? (p.turn?.durationMs ?? o) : void 0)),
        b = m ? ((0, lz.lt)(l) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = n9(k.map((e) => e.taskId)),
        N = !g && (n || k.some((e) => "running" === e.task.status)),
        A = rK(k);
    return (0, r.jsx)(lG.E.Provider, {
        value: k.length,
        children: (0, r.jsxs)("ol", {
            className: l3.pj,
            "data-live": N,
            children: [
                (0, r.jsx)(lO.A, {
                    projectId: t,
                    steps: v.steps,
                    fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: n,
                    closed: g,
                    durationMs: j,
                    connectsDown: k.length > 0,
                    tier: p.turn?.tier,
                }),
                k.map((e, l) => {
                    let n = null != e.task.helperMark ? n8(e.task.helperMark) : void 0,
                        a = n ?? w.get(e.taskId);
                    return null == a
                        ? null
                        : (0, r.jsx)(
                              al,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: a.Illocon,
                                  tint: a.tint,
                                  name: null != n && null != e.task.helperName ? e.task.helperName : a.name,
                                  connectsDown: l < k.length - 1,
                              },
                              e.taskId,
                          );
                }),
                (0, r.jsx)(am, { projectId: t, steps: l, tree: p, segment: f }),
                y
                    ? (0, r.jsx)("li", {
                          className: l3.YO,
                          children: (0, r.jsx)(l1, { todos: b, provisional: d, agents: A, live: a, superseded: s }),
                      })
                    : null,
            ],
        }),
    });
}
function rW(e) {
    let {
            projectId: t,
            steps: l,
            content: n,
            proposal: a,
            planVersion: s,
            ideas: u,
            attachments: c,
            secretRequest: d,
            secretRequestId: f,
            secretRequestAwaiting: m,
            secretRequestStatus: h = "open",
            settingsRequest: g,
            publishCta: x,
            onPickIdea: p,
            pickedIdeaIds: v,
            onApprovePlan: j,
            sideReply: b = !1,
            sideReplyAcknowledges: k,
            hoistedProse: w = !1,
            hoistedAttachmentsHost: N,
            restoreProposal: A,
            onRestoreProposal: S,
        } = e,
        C = i.useMemo(
            () => n3({ steps: l, content: n, hasProposal: null != a, hasAttachments: null != c && c.length > 0 }),
            [l, n, a, c],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: M, closingContent: T } = C,
        _ = (w ? N : void 0) ?? C.attachmentsHost,
        P = M && !w,
        R = null == c ? null : (0, r.jsx)(rG.A, { projectId: t, attachments: c }),
        L = null == R ? null : (0, r.jsx)("div", { className: l3.MT, children: R }),
        D = b
            ? (0, r.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return ed.intl.string(ec.default.Mv5OmK);
                          case "queued":
                              return ed.intl.string(ec.default["Po/2mi"]);
                          case "restarting":
                              return ed.intl.string(ec.default.Vj0woh);
                          default:
                              return ed.intl.string(ec.default.gY3L8p);
                      }
                  })(k),
              })
            : null;
    return (0, r.jsxs)("div", {
        className: l3.ue,
        children: [
            E.length > 0 && !w
                ? (0, r.jsx)("ol", {
                      className: l3.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: l3.DV,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: rH.PT,
                                          children: n0.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === _ && e === I ? L : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != a
                ? (0, r.jsx)(rC, { projectId: t, proposal: a, version: s, onApprove: j })
                : P
                  ? (0, r.jsxs)("div", {
                        className: o()(l3.ky, rB.XR),
                        children: [
                            (0, r.jsx)("div", {
                                className: o()(rH.PT, l3.cW),
                                children: n0.A.parse(T, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === _ ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != d
                ? (0, r.jsx)("div", {
                      className: o()(l3.ky, rB.XR, { [rq.O]: null != m && "open" === h }),
                      children: (0, r.jsx)(rU, {
                          projectId: t,
                          cardId: f ?? "",
                          request: d,
                          status: h,
                          awaiting: "open" === h ? m : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, r.jsx)("div", {
                      className: o()(l3.ky, rB.XR),
                      children: (0, r.jsx)(nG, { projectId: t, request: g }),
                  })
                : null,
            "standalone" !== _ && ("closing" !== _ || P) ? null : R,
            null != x ? (0, r.jsx)(rT, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, r.jsx)(rL, { ideas: u, pickedIdeaIds: v, onPick: p }) : null,
            null != A ? (0, r.jsx)(ag, { proposal: A, onRestore: S }) : null,
            P ? null : D,
        ],
    });
}
var rJ = l(146806),
    rX = l(477262),
    rQ = l(432017),
    rY = l(475358),
    rZ = l(717400),
    r0 = l(663341),
    r1 = l(559647),
    r2 = l(775602),
    r3 = l(234320),
    r4 = l(285796),
    r5 = l(922329);
async function r6(e) {
    let t = new Worker(new URL("/assets/" + l.u("638664"), l.b));
    try {
        let l = await new Promise((l) => {
            (t.addEventListener("message", (e) => {
                let { data: t } = e;
                return l(t);
            }),
                t.addEventListener("error", () => l(null)),
                t.addEventListener("messageerror", () => l(null)),
                t.postMessage(e));
        });
        if (null == l) return null;
        return new File([l], `${e.name.replace(/\.png$/i, "")}.webp`, {
            type: "image/webp",
            lastModified: e.lastModified,
        });
    } finally {
        t.terminate();
    }
}
var r7 = l(153171);
let r8 = ee.lN;
function r9(e, t, l, n) {
    let a = np(e, t).length;
    !(function (e, t, l) {
        if (0 === l.length) return;
        let n = l.map((e) => {
            let { draft: t, upload: l } = e;
            return { draft: { ...t, localId: nh++ }, upload: l };
        });
        for (let { draft: l, upload: a } of (nv(e, t, [
            ...np(e, t),
            ...n.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        n))
            a?.().then(
                (n) => {
                    if ("errorText" in n) return void nj(e, t, l.localId, { status: "error", errorText: n.errorText });
                    let { converted: a, ...r } = n;
                    nj(e, t, l.localId, { ...a, status: "ready", ref: r })
                        ? setTimeout(
                              () =>
                                  nj(e, t, l.localId, {
                                      status: "error",
                                      errorText: ed.intl.string(ec.default.E7dS5n),
                                  }),
                              ee.o2 - 3e5,
                          )
                        : nb(e, r.id);
                },
                (n) => {
                    (console.error("[vibegrations] attachment upload failed", n),
                        nj(e, t, l.localId, { status: "error", errorText: ed.intl.string(ec.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        l.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                l = { name: e.name, contentType: t };
            if (a++ >= r8)
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: ed.intl.formatToPlainString(ec.default.Q0aCVZ, { count: r8 }),
                    },
                };
            if (!(0, ee.Oq)(e.size, t))
                return "image/png" === t && e.size <= ee.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...l, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let l = await r6(e).catch(() => null);
                              return null != l && (0, ee.Oq)(l.size, l.type)
                                  ? { ...(await n(l)), converted: { name: l.name, contentType: l.type } }
                                  : { errorText: nw(t) };
                          },
                      }
                    : { draft: { ...l, status: "error", errorText: nw(t) } };
            let r = ee.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...l, status: "uploading", previewUrl: r }, upload: () => n(e) };
        }),
    );
}
function ie(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        a = ng.useState((e) => nx(e, t, l)),
        r = i.useCallback((e) => r9(t, l, e, n), [t, l, n]),
        s = i.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), r(t));
            },
            [r],
        ),
        o = i.useCallback(
            (e) => {
                let n, a;
                null != (a = (n = np(t, l)).find((t) => t.localId === e)) &&
                    (ny(t, a),
                    nv(
                        t,
                        l,
                        n.filter((t) => t.localId !== e),
                    ));
            },
            [t, l],
        ),
        u = i.useCallback(() => nA(t, l), [t, l]);
    return {
        drafts: a,
        addFiles: r,
        pasteFiles: s,
        removeDraft: o,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function it(e) {
    let { draft: t, onRemove: l } = e;
    return (0, r.jsxs)(r5.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, r.jsx)(A.y, { type: A.t.SPINNING_CIRCLE_SIMPLE, className: r7.Rk }) : null,
            (0, r.jsx)("button", {
                type: "button",
                className: r7.o1,
                onClick: () => l(t.localId),
                "aria-label": ed.intl.string(ec.default.Slam9g),
                children: (0, r.jsx)(r4.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var il = l(497437);
let ia = [
        {
            id: "add-images-videos",
            label: ec.default["51+9lc"],
            icon: rX.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: ec.default["10ljr2"],
            icon: rQ.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: ec.default.aotDee, icon: ea.H, accept: "" },
    ],
    ir = "text-md/normal",
    ii = null;
function is(e) {
    let { text: t, offering: l, typed: n } = e,
        [a, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, h] = i.useState(0),
        [g, x] = i.useState(0),
        [p, v] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let l = d.current;
        function n() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let n = c.current;
            if (null == n) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                r = Number.isNaN(a) ? 0 : a,
                i = e.offsetWidth,
                s = n.offsetWidth + r;
            (x(i + r), h(s));
            let o = s + i,
                d = Math.max(l, n.offsetWidth) + r + i,
                f = 0 === d ? 1 : s / d,
                m = 0 === d ? 1 : o / d;
            v({
                frontFrom: 1e3 * (0, rJ._R)(f),
                frontTo: 1e3 * (0, rJ._R)(m),
                backFrom: 1e3 * (0, rJ.T)(f),
                backTo: 1e3 * (0, rJ.T)(m),
            });
        }
        let a = new ResizeObserver(n);
        return (n(), a.observe(e), a.observe(t), null != c.current && a.observe(c.current), () => a.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [j, b] = i.useState(0),
        [k, w] = i.useState(null),
        N = i.useRef(!1),
        A = i.useCallback(() => {
            (w(N.current ? (l ? "through" : "out") : l ? "in" : null), b((e) => e + 1));
        }, [l]);
    i.useEffect(() => {
        N.current = l;
    }, [l, t]);
    let S = "in" === k ? p.backFrom : p.frontFrom,
        C = "out" === k ? p.frontTo : p.backTo,
        E = (0, f.bG)([r2.Ay], () => r2.Ay.useReducedMotion),
        I = t === ed.intl.string(ec.default.Zc7gML),
        M = a === t && I;
    function T(e, t, l) {
        let n = null != l;
        return (0, r.jsx)("span", {
            ref: l,
            className: o()(il.VT, { [il.qk]: n }),
            style: n
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${S}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - S)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": n && j > 0 && null != k ? j % 2 : void 0,
            "data-wipe-kind": n ? (k ?? void 0) : void 0,
            children: (0, r.jsx)(rY.e, { shortcut: "tab", className: il.xT, keyClassName: e }),
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eR.o, {
                text: t,
                variant: ir,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(il.xM, { [il.s2]: n }),
                onStart: A,
                onComplete: () => s(t),
            }),
            T(il.IS, l || (!E && "out" === k), u),
            (0, r.jsx)("span", {
                ref: c,
                className: il.QI,
                "aria-hidden": !0,
                children: (0, r.jsx)(y.E, { variant: ir, tag: "span", children: t }),
            }),
            M
                ? (0, r.jsxs)("span", {
                      className: il.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, r.jsx)(y.E, { variant: ir, tag: "span", className: il.xM, children: t }),
                          T(il.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function io(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: n,
            running: a,
            restoring: s = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: c,
            onApprove: d,
            onImport: m,
            suggestion: h,
            questionOpen: g = !1,
            hasPendingContext: x = !1,
            onDraftHasTextChange: p,
            modelSettings: v,
            onModelSettingsChange: j,
        } = e,
        [b, y] = i.useState(() => nQ.getDraft(t)),
        k = i.useCallback(
            (e) => {
                ((0, eS.I$)(t, e), y(e));
            },
            [t],
        ),
        A = "" !== b.trim();
    i.useEffect(() => p?.(A), [A, p]);
    let [S, C] = i.useState(t);
    S !== t && (C(t), y(nQ.getDraft(t)));
    let E = (0, f.bG)([r2.Ay], () => r2.Ay.isSubmitButtonEnabled),
        [I, M] = i.useState(!1);
    i.useEffect(() => {
        a || M(!1);
    }, [a]);
    let T = i.useRef(null),
        {
            drafts: _,
            addFiles: P,
            pasteFiles: R,
            removeDraft: L,
            settled: D,
            takeRefs: $,
        } = ie({ projectId: t, surface: "chat", onUploadFile: c }),
        z = "" !== b.trim() || _.length > 0 || x,
        F = l && z && D,
        [O, U] = i.useState(null);
    i.useEffect(() => {
        if (null == O) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => U(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [O]);
    let G = i.useCallback(() => {
            if (!F) return;
            let e = $();
            o(b, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    r = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === r) return r;
                null == ii && (ii = document.createElement("canvas").getContext("2d"));
                let i = ii;
                if (null == i) return r;
                let s = getComputedStyle(e);
                i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                let o =
                    t > 0
                        ? t
                        : ((n = parseFloat(s.paddingInlineStart)),
                          (a = parseFloat(s.paddingInlineEnd)),
                          e.clientWidth - (Number.isNaN(n) ? 0 : n) - (Number.isNaN(a) ? 0 : a));
                if (o <= 0 || i.measureText(r).width <= o) return r;
                let u = 0,
                    c = r.length;
                for (; u < c;) {
                    let e = Math.ceil((u + c) / 2);
                    i.measureText(r.slice(0, e)).width <= o ? (u = e) : (c = e - 1);
                }
                let d = r.slice(0, u),
                    f = d.lastIndexOf(" ");
                return (f > 0 ? d.slice(0, f) : d).trimEnd();
            })(J.current?.querySelector("textarea") ?? null, eo.current, b);
            ("" !== t && U(t), k(""));
        }, [F, b, o, $, k]),
        q = i.useCallback(
            (e) => {
                (e.preventDefault(), G());
            },
            [G],
        ),
        B = i.useCallback(() => {
            null == u || I || (M(!0), u());
        }, [u, I]),
        H = null == h || "" !== b || !l || n || s || x ? null : h,
        K = i.useCallback(
            (e) => {
                if ("Escape" === e.key && a && null != u && !I) {
                    (e.preventDefault(), e.stopPropagation(), B());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != H) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), k(H));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != d && (e.preventDefault(), d());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), G());
            },
            [G, d, a, u, I, B, H, k],
        ),
        V = i.useCallback(
            (e) => {
                l && R(e);
            },
            [l, R],
        );
    (0, r3.Vo)({
        event: eb.jej.GLOBAL_CLIPBOARD_PASTE,
        handler: (e) => {
            let { event: t } = e;
            return V(t);
        },
    });
    let W = i.useCallback(
            (e) => {
                (P(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [P],
        ),
        J = i.useRef(null),
        X = i.useRef(null),
        Q = i.useCallback((e) => {
            let t = T.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        [Y, Z] = i.useState(0),
        [ee, ea] = i.useState(!1);
    i.useEffect(() => {
        if (0 === b.length) return void ea(!1);
        let e = J.current?.querySelector("textarea");
        if (null != e) {
            let t = id(e);
            null != t && Z(t);
        }
        ea(!0);
        let t = setTimeout(() => ea(!1), iu);
        return () => clearTimeout(t);
    }, [b]);
    let er = i.useMemo(() => ({ "--custom-glow-x": `${Y}px` }), [Y]),
        ei = ee ? ` ${il.EB}` : "",
        es = s
            ? ed.intl.string(ec.default.qqlUiW)
            : n
              ? ed.intl.string(ec.default.mPB3eo)
              : l
                ? x
                    ? ed.intl.string(ec.default.knUjL3)
                    : g
                      ? ed.intl.string(ec.default.IevBEw)
                      : ed.intl.string(a ? ec.default["0BJa/0"] : ec.default.TEeU7z)
                : ed.intl.string(ec.default.zZ9NgM),
        eo = i.useRef(0),
        eu = i.useRef(null),
        ef = i.useCallback((e) => {
            if ((eu.current?.disconnect(), null == e)) return;
            eo.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                eo.current = e.clientWidth;
            });
            (t.observe(e), (eu.current = t));
        }, []),
        em = i.useId(),
        eh = null != H,
        eg = O ?? H ?? es,
        ex = "" === b && "" !== eg;
    return (0, r.jsxs)("form", {
        onSubmit: q,
        className: il.DA,
        children: [
            _.length > 0
                ? (0, r.jsx)("div", {
                      className: il.lN,
                      children: _.map((e) => (0, r.jsx)(it, { draft: e, onRemove: L }, e.localId)),
                  })
                : null,
            (0, r.jsx)("span", { className: `${il.wg} ${il.LP}${ei}`, style: er, "aria-hidden": !0 }),
            (0, r.jsx)("span", { className: `${il.wg} ${il.L3}${ei}`, style: er, "aria-hidden": !0 }),
            (0, r.jsxs)("div", {
                className: il.VA,
                ref: J,
                children: [
                    (0, r.jsx)("input", {
                        ref: T,
                        type: "file",
                        multiple: !0,
                        onChange: W,
                        className: il.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(et.Y, {
                        targetElementRef: X,
                        position: "top",
                        align: "left",
                        animation: et.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(el.W, {
                                "data-menu-migrated": !0,
                                navId: "conjure-composer-attach",
                                "aria-label": ed.intl.string(ed.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, r.jsxs)(en.rX, {
                                    children: [
                                        ia.map((e) =>
                                            (0, r.jsx)(
                                                en.Dr,
                                                {
                                                    id: e.id,
                                                    label: ed.intl.string(e.label),
                                                    iconLeft: e.icon,
                                                    leadingAccessory: { type: "icon", icon: e.icon },
                                                    action: () => Q(e.accept),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        null != m
                                            ? (0, r.jsx)(en.Dr, {
                                                  id: "import-project",
                                                  label: ed.intl.string(ec.default["p/k5i7"]),
                                                  iconLeft: rZ.q,
                                                  leadingAccessory: { type: "icon", icon: rZ.q },
                                                  action: m,
                                              })
                                            : null,
                                    ],
                                }),
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, r.jsx)("button", {
                                ...e,
                                ref: X,
                                type: "button",
                                className: `${il.Y0} ${il.nu}`,
                                disabled: !l,
                                "aria-label": ed.intl.string(ed.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": n,
                                children: (0, r.jsx)(r0.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: il.Qu,
                                }),
                            });
                        },
                    }),
                    ex
                        ? (0, r.jsx)("div", {
                              ref: ef,
                              className: il.ar,
                              "aria-hidden": "true",
                              children: (0, r.jsx)(is, { text: eg, offering: eh && null == O, typed: null != O }),
                          })
                        : null,
                    (0, r.jsx)(l8.y, {
                        value: b,
                        onChange: (e) => k(e.currentTarget.value),
                        onKeyDown: K,
                        onPaste: V,
                        placeholder: ex ? "" : es,
                        disabled: !l,
                        "aria-label": ed.intl.string(ec.default.ldNl9x),
                        "aria-describedby": ex ? em : void 0,
                        rows: 1,
                        className: il.jp,
                    }),
                    ex ? (0, r.jsx)(N.A, { id: em, children: es }) : null,
                    (0, r.jsx)("div", {
                        className: il.Sz,
                        children:
                            a && null != u
                                ? (0, r.jsx)(w.m, {
                                      text: ed.intl.string(ec.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, r.jsx)("button", {
                                          type: "button",
                                          className: `${il.Y0} ${il.$E}`,
                                          disabled: I,
                                          onClick: B,
                                          "aria-label": ed.intl.string(ec.default.wiguT0),
                                          children: (0, r.jsx)(nZ.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : v?.tierSettings != null && null != j
                                  ? (0, r.jsx)(th, {
                                        settings: v.tierSettings,
                                        tiers: v.tiers,
                                        choices: v.choices,
                                        disabled: !l,
                                        onChange: j,
                                        className: `${il.Y0} ${il.$E}`,
                                        icon: (0, r.jsx)(ti.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    E
                        ? (0, r.jsxs)("div", {
                              className: il.fF,
                              children: [
                                  (0, r.jsx)("div", { className: il.MT }),
                                  (0, r.jsx)("button", {
                                      type: "submit",
                                      className: il.rt,
                                      disabled: !F,
                                      "aria-label": ed.intl.string(ec.default.rxW2cl),
                                      children: (0, r.jsx)(r1.SendMessageIcon, {
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
}
let iu = 1500,
    ic = [
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-indent",
        "text-transform",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width",
    ];
function id(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = id.mirror;
            if (null != e) return e;
            let t = document.createElement("div");
            return (
                t.setAttribute("aria-hidden", "true"),
                (t.style.position = "absolute"),
                (t.style.top = "0"),
                (t.style.left = "-9999px"),
                (t.style.visibility = "hidden"),
                (t.style.boxSizing = "border-box"),
                (t.style.whiteSpace = "pre-wrap"),
                (t.style.overflowWrap = "break-word"),
                document.body.appendChild(t),
                (id.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of ic) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
id.mirror = null;
var im = l(155899),
    ih = l(148087);
let ig = [6e4, 18e4, 6e5],
    ix = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: ig,
            clock: "persistent",
            eligible: (e) => {
                var t;
                let { publish: l, draftTyped: n, outdatedUpdating: a } = e;
                return a
                    ? l?.isUpdate === !0
                    : !n && null != (t = l) && t.isUpdate && null == t.disabledReason && !0 !== t.publishing;
            },
        },
        {
            key: "ideas",
            priority: 1,
            idleDelayMs: 6e4,
            clock: "visit",
            eligible: (e) => {
                var t;
                let { turn: l, publish: n, draftHasText: a } = e;
                return (
                    !a &&
                    n?.publishing !== !0 &&
                    "plan_implemented" === (t = l).kind &&
                    (0, tH.BL)(t) &&
                    !(null != l.publishCta && rI(n))
                );
            },
        },
    ];
function ip(e, t) {
    return {
        ...e,
        now: t,
        visitStartedAt: t,
        draftTyped: !1,
        lastActivityAt: null,
        lastMessageAt: null == e.messageAt ? null : Math.min(e.messageAt, t),
        seenAt: null,
        unseen: !1,
        hiddenAt: e.visible ? null : t,
        outdatedShown: !1,
        outdatedBackoff: 0,
        outdatedUpdating: !1,
    };
}
let iv = new Map();
function ij(e) {
    return (0, f.bG)([eC.Ay, a_.A], () => {
        let t = eC.Ay.getProject(e);
        return null == t ? "" : (a_.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
function ib(e) {
    let { projectId: t, notice: l } = e;
    return "outdated" === l ? (0, r.jsx)(ik, { projectId: t }) : (0, r.jsx)(iy, { projectId: t, notice: l });
}
function iy(e) {
    let { projectId: t, notice: l } = e,
        n = i.useContext(ll.bI),
        a = ij(t),
        s = i.useCallback(() => {
            null != n && (0, ll.ub)(t, n);
        }, [n, t]);
    return (0, r.jsx)(y.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: ed.intl.format(
            (function (e) {
                if (!e.update) return ec.default.MOrR29;
                switch (e.surface) {
                    case "bot":
                        return ec.default.zfpeIL;
                    case "widget":
                        return ec.default.DxCfTh;
                    case "automod":
                        return ec.default["8ytGC3"];
                    case "activity":
                    case null:
                        return ec.default.WSmpBT;
                }
            })(l),
            { name: a, onOpen: s },
        ),
    });
}
function ik(e) {
    let { projectId: t } = e,
        l = (0, ll.Ay)(t),
        [n, a] = i.useState(!1);
    return null == l
        ? null
        : n && (l.publishing || !l.isUpdate)
          ? (0, r.jsx)(iw, {})
          : (0, r.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ed.intl.format(ec.default.X8tdbS, {
                    action: l.label,
                    onUpdate: () => {
                        (a(!0), iv.get(t)?.forEach((e) => e()), l.run("outdated_notice"));
                    },
                }),
            });
}
function iw() {
    let e = ed.intl.string(ec.default.lexcBN),
        t = (function () {
            let e = (0, f.bG)([r2.Ay], () => r2.Ay.useReducedMotion),
                [t, l] = i.useState(1);
            return (
                i.useEffect(() => {
                    if (e) return;
                    let t = setInterval(() => l((e) => (e % 3) + 1), 400);
                    return () => clearInterval(t);
                }, [e]),
                ".".repeat(e ? 3 : t)
            );
        })();
    return (0, r.jsxs)(y.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, r.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var iN = l(248798);
function iA(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function iS(e) {
    let { reminder: t, renderReminder: l } = e,
        n = (function (e) {
            let t,
                [l, n] = i.useState([]);
            (l.find((e) => !e.leaving)?.key ?? null) !== e &&
                n(
                    ((t = l.filter((t) => t.key !== e).map((e) => ({ ...e, leaving: !0 }))),
                    null != e ? [...t, { key: e, leaving: !1 }] : t),
                );
            let a = l.some((e) => e.leaving);
            return (
                i.useEffect(() => {
                    if (!a) return;
                    let e = setTimeout(() => n((e) => e.filter((e) => !e.leaving)), 180);
                    return () => clearTimeout(e);
                }, [a, l]),
                l
            );
        })(t),
        a = n.find((e) => !e.leaving)?.key ?? null,
        s = null == a && n.length > 0,
        u = i.useRef(null),
        c = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = u.current;
            if (null == e || s) return;
            e.getBoundingClientRect();
            let t = c.current;
            if (null == t) {
                e.style.height = "0px";
                return;
            }
            iA(e, t);
            let l = new ResizeObserver(() => iA(e, t));
            return (l.observe(t), () => l.disconnect());
        }, [a, s]),
        (0, r.jsx)("div", {
            ref: u,
            className: o()(iN.NI, { [iN.Jg]: null == a }),
            "aria-live": "polite",
            children: (0, r.jsx)("div", {
                className: iN.t$,
                children: n.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : c,
                            "aria-hidden": e.leaving || void 0,
                            className: o()(iN.qd, e.leaving ? iN.cu : iN.We),
                            children: l(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var iC = l(521981),
    iE = l(491182),
    iI = l(438729),
    iM = l(622868),
    iT = l(448368),
    i_ = l(837528),
    iP = l(439762),
    iR = l(715628),
    iL = l(752636),
    iD = l(9842),
    i$ = l(589022),
    iz = l(994500),
    iF = l(967198),
    iO = l(7584);
let iU = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function iG(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function iq(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function iB(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = iq(e, t),
        r = e.codePointAt(t);
    if (
        (null != r &&
            (8205 === r ||
                (r >= 65024 && r <= 65039) ||
                (r >= 127995 && r <= 127999) ||
                (r >= 768 && r <= 879) ||
                (r >= 8400 && r <= 8447) ||
                (r >= 65056 && r <= 65071) ||
                (r >= 917536 && r <= 917631))) ||
        8205 === a
    )
        return !0;
    if (iG(a) && iG(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && iG(iq(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function iH(e, t) {
    let { streaming: l } = t,
        n = (0, f.bG)([r2.Ay], () => r2.Ay.useReducedMotion),
        a = l && !n,
        [r, s] = i.useState(() => ({ target: e, length: e.length })),
        o = r;
    (o.target !== e &&
        (o = {
            target: e,
            length: a
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          r = 0;
                      for (; r < a && e.charCodeAt(r) === t.charCodeAt(r);) r++;
                      for (; r > 0 && iB(t, r);) r--;
                      return r;
                  })(o.target, e, o.length)
                : e.length,
        }),
        a || o.length === e.length || (o = { target: e, length: e.length }),
        o !== r && s(o));
    let u = a && o.length < e.length,
        c = i.useRef(o);
    i.useLayoutEffect(() => {
        c.current = o;
    });
    let d = i.useRef(0),
        m = i.useRef(0);
    (i.useEffect(() => {
        if (u)
            return (
                (m.current = 0),
                (d.current = requestAnimationFrame(function e(t) {
                    let l = 0 === m.current ? 32 : t - m.current;
                    if (l >= 32) {
                        m.current = t;
                        let e = c.current,
                            n = (function (e) {
                                let { target: t, revealed: l, elapsedMs: n } = e,
                                    a = Math.min(Math.max(l, 0), t.length),
                                    r = t.length - a;
                                if (r <= 0) return a;
                                if (r > 900) return t.length;
                                let i = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, r / 280) * Math.max(n, 0))),
                                );
                                var s = (function (e, t, l) {
                                    if (l >= e.length) return l;
                                    let n = l;
                                    for (; n > t + 1 && l - n < 12 && iU.has(e.charAt(n - 1));) n--;
                                    return iU.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && iB(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && s({ target: e.target, length: n });
                    }
                    d.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(d.current)
            );
    }, [u]),
        i.useEffect(() => {
            if (u)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = c.current;
                s({ target: e, length: e.length });
            }
        }, [u]));
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: a && h < e.length };
}
var iK = l(565645),
    iV = l(981879);
function iW(e) {
    let { emoji: t, label: l } = e;
    return (0, r.jsx)("div", {
        className: iV.H,
        children: (0, r.jsx)(iK.A, { emojiName: t, alt: l, size: "reaction" }),
    });
}
var iJ = l(734495),
    iX = l(180227);
function iQ(e) {
    let { message: t, onClose: l } = e,
        n = (0, iJ.A)(t);
    return (0, r.jsx)(el.W, {
        navId: "conjure-message-actions",
        "aria-label": ed.intl.string(ed.t.Lv7LxN),
        onClose: l,
        onSelect: l,
        children: (0, r.jsx)(en.rX, { children: n }),
    });
}
function iY(e) {
    let { groupStart: t, renderMenu: l } = e,
        [n, a] = i.useState(!1),
        s = i.useRef(null),
        u = i.useCallback(() => a((e) => !e), []),
        c = i.useCallback(() => a(!1), []);
    return (0, r.jsx)("div", {
        className: o()(iX.QE, { [iX.Rn]: t, [iX.vg]: n }),
        children: (0, r.jsx)(ri.Ay, {
            children: (0, r.jsx)(et.Y, {
                targetElementRef: s,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return l(t);
                },
                shouldShow: n,
                onRequestClose: c,
                position: "left",
                align: "top",
                animation: et.Y.Animation.NONE,
                children: (e, t) => {
                    let { onClick: l, ...n } = e,
                        { isShown: a } = t;
                    return (0, r.jsx)(ri.qv, {
                        ref: s,
                        label: ed.intl.string(ed.t["UKOtz+"]),
                        icon: t5.MoreHorizontalIcon,
                        selected: a,
                        onClick: u,
                        ...n,
                    });
                },
            }),
        }),
    });
}
function iZ(e) {
    let { message: t, groupStart: l } = e,
        n = i.useCallback((e) => (0, r.jsx)(iQ, { message: t, onClose: e }), [t]);
    return null == (0, iJ.A)(t) ? null : (0, r.jsx)(iY, { groupStart: l, renderMenu: n });
}
let i0 = (0, aL.createChannelRecord)({ id: "conjure-builder", type: eb.rbe.DM }),
    i1 = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function i2(e, t) {
    return null == e ? e : (0, r.jsx)("div", { className: o()(iX.Yq, { [iX.x1]: t }), children: e });
}
function i3(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function i4(e, t, l) {
    let { content: n } = (0, iP.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        a = i.useMemo(() => ({ message: e, channel: i0, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, r.jsx)(iI.Ay, { className: l, message: e, content: n, compact: !1 })
          : (0, iR.A)(a, n);
}
function i5(e) {
    let [t, l] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        n = i.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        a = i.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, i_.m)(e, i0, t.usernameProfile, n),
        o = (0, i_.Jo)(t.avatarProfile, n),
        u = (0, f.bG)([iF.A], () => iF.A.getGuildId()),
        c = (0, f.bG)([tq.default], () => tq.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let l = tq.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, r.jsx)(i$.A, { ...t, user: l, currentUser: c, guildId: u ?? void 0 });
            },
            [c, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: a,
        renderPopout: d,
        guildId: u ?? void 0,
    };
}
function i6(e) {
    let { baseMessage: t, referenced: l, selected: n, onJumpToReplied: a } = e,
        s = i.useMemo(() => {
            let e = "" !== l.content ? (0, iC.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == n
                ? e
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("span", {
                              className: iX.GV,
                              children: [
                                  (0, r.jsx)(C.x, {
                                      className: iX.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                  }),
                                  n,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, n]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, f.cf)(
            [iz.A],
            () => ({
                isReplyAuthorBlocked: iz.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: iz.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        c = (0, ra.X4)(l),
        d = (0, ra.X4)(t),
        m = i5(l);
    return (0, r.jsx)(iT.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: i0,
        referencedMessage: { state: iD.a.LOADED, message: l },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: u,
        isReplySpineClickable: null != a,
        showReplySpine: !0,
        renderPopout: m.renderPopout,
        showAvatarPopout: m.showAvatarPopout,
        showUsernamePopout: m.showUsernamePopout,
        onClickAvatar: m.onClickAvatar,
        onClickUsername: m.onClickUsername,
        onClickReply: a,
        onPopoutRequestClose: m.onPopoutRequestClose,
    });
}
function i7(e) {
    let { message: t, author: l } = e,
        n = i5(t);
    return (0, r.jsx)(iM.Ay, {
        message: t,
        channel: i0,
        author: l,
        guildId: n.guildId,
        subscribeToGroupId: t.id,
        renderPopout: n.renderPopout,
        showAvatarPopout: n.showAvatarPopout,
        showUsernamePopout: n.showUsernamePopout,
        onClickAvatar: n.onClickAvatar,
        onClickUsername: n.onClickUsername,
        onPopoutRequestClose: n.onPopoutRequestClose,
    });
}
function i8(e) {
    let { content: t, createdAt: l, userId: n, accessories: a, agentReaction: s, groupStart: o } = e;
    i.useEffect(() => tX(n), [n]);
    let u = (0, f.bG)(
            [tq.default],
            () => tJ(n, null != n ? tq.default.getUser(n) : null, tq.default.getCurrentUser()),
            [n],
        ),
        c = i.useMemo(() => (0, ra.FT)(u, null), [u]),
        d = i.useMemo(() => eZ(t), [t]),
        m = d?.body ?? t,
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, aR.Ay)({ channelId: i0.id, content: m, author: u });
            return (0, aP.rh)({ ...e, timestamp: i3(l, e.timestamp), state: eb.cmJ.SENT });
        }, [m, u, l]),
        g = (function (e) {
            if (null == e || "" === e) return null;
            let t = iO.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : ed.intl.formatToPlainString(ec.default.lxXLho, { emojiName: t });
        })(s);
    return null == h
        ? null
        : (0, r.jsx)(i9, {
              message: h,
              author: c,
              content: m,
              selected: d?.label,
              accessories:
                  null != s && null != g
                      ? (0, r.jsxs)(r.Fragment, { children: [a, (0, r.jsx)(iW, { emoji: s, label: g })] })
                      : a,
              groupStart: o,
          });
}
function i9(e) {
    let { message: t, author: l, content: n, selected: a, accessories: i, groupStart: s = !0 } = e,
        o = i4(t, n);
    return (0, r.jsx)(iE.A, {
        className: iX.yE,
        author: l,
        childrenHeader: s ? (0, r.jsx)(i7, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == a
                ? o
                : (0, r.jsxs)("div", {
                      className: iX.zq,
                      children: [
                          (0, r.jsxs)("span", {
                              className: iX.GV,
                              children: [
                                  (0, r.jsx)(C.x, {
                                      className: iX.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  a,
                              ],
                          }),
                          (0, r.jsx)("span", { className: iX.WO, children: o }),
                      ],
                  }),
        childrenAccessories: i2(i, "" !== n),
        childrenButtons: (0, r.jsx)(iZ, { message: t, groupStart: s }),
    });
}
function se(e) {
    let {
            content: t,
            createdAt: l,
            accessories: n,
            replyTo: a,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
            buttons: c,
        } = e,
        { text: d, revealing: m } = iH(t, { streaming: u }),
        h = i.useMemo(() => (0, ra.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        x = a?.userId,
        p = (0, f.bG)(
            [tq.default],
            () => tJ(x, null != x ? tq.default.getUser(x) : null, tq.default.getCurrentUser()),
            [x],
        ),
        v = i.useMemo(() => (null == a ? null : eZ(a.content)), [a]),
        j = i.useMemo(() => {
            if (null == a || null == p) return null;
            let e = (0, aR.Ay)({ channelId: i0.id, content: v?.body ?? a.content, author: p });
            return (0, aP.rh)({ ...e, id: a.id, timestamp: i3(a.createdAt, e.timestamp), state: eb.cmJ.SENT });
        }, [a, v, p]),
        b = i.useMemo(() => (null == a ? void 0 : { channel_id: i0.id, message_id: a.id }), [a]),
        y = i.useMemo(() => {
            let e = (0, aR.Ay)({ channelId: i0.id, content: d, author: i1 });
            return (0, aP.rh)({
                ...e,
                timestamp: i3(l, e.timestamp),
                state: eb.cmJ.SENT,
                ...(null != b ? { type: eb.lAJ.REPLY, message_reference: b } : {}),
            });
        }, [d, l, b]),
        k = i4(y, d, iX.OS);
    return (0, r.jsxs)("div", {
        className: iX.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, r.jsx)(iE.A, {
                className: iX.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, r.jsx)(i6, { baseMessage: y, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: (0, iL.A)({ message: y, channel: i0, author: g, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: k,
                childrenAccessories: i2(n, "" !== d),
                disableInteraction: !0,
            }),
            c,
            o
                ? (0, r.jsx)("span", {
                      className: iX.st,
                      "aria-hidden": "true",
                      children: (0, r.jsx)(av.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let st = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var sl = l(288539);
function sn(e, t, l) {
    return (0, r.jsx)(sl.A, { userId: e, content: `@${t}` }, l);
}
function sa(e) {
    let { projectId: t, event: l } = e,
        n = (function (e, t, l) {
            let n = t.actor_user_id;
            i.useEffect(() => tX(n), [n]);
            let a = (0, f.bG)([tq.default], () => (null == n ? null : tq.default.getUser(n)), [n]),
                r = (0, tB.tx)(a),
                s = ij(e),
                o =
                    (0, f.bG)([Y.A], () => (null == t.guild_id ? null : Y.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? ed.intl.string(ec.default.R1tPlP),
                u = null == a || null == r ? null : { user: r, userHook: (e, t) => l(a.id, r, t) };
            switch (t.type) {
                case "app_removed":
                    return null == u
                        ? ed.intl.format(ec.default.Lwsrhg, { app: s, server: o })
                        : ed.intl.format(ec.default.qqePfT, { app: s, server: o, ...u });
                case "bot_removed":
                    return null == u
                        ? ed.intl.format(ec.default.mT7EQG, { app: s, server: o })
                        : ed.intl.format(ec.default["lA/crI"], { app: s, server: o, ...u });
                case "preview_bot_removed":
                    return null == u
                        ? ed.intl.format(ec.default["4LVIeo"], { app: s, server: o })
                        : ed.intl.format(ec.default.YJOV6D, { app: s, server: o, ...u });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == u
                        ? ed.intl.format(ec.default["4VQfid"], { channel: e, server: o })
                        : ed.intl.format(ec.default.RlMIJN, { channel: e, server: o, ...u });
                }
            }
        })(t, l, sn);
    return (0, r.jsx)(y.E, { variant: "text-md/normal", color: "text-default", children: n });
}
var sr = l(744898);
function si(e) {
    let { onSelect: t, onClose: l = z.Z_, onRestoreVersion: n } = e;
    return (0, r.jsx)(el.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: l,
        "aria-label": ed.intl.string(ed.t.ogxXGq),
        onSelect: t,
        children: (0, r.jsx)(en.rX, {
            children: (0, r.jsx)(en.Dr, {
                id: "restore-version",
                label: ed.intl.string(ec.default.H8Jfhu),
                icon: sr.e,
                action: n,
            }),
        }),
    });
}
var ss = l(986109);
function so(e, t) {
    (0, im.F)({ onConfirm: () => t(e) });
}
function su(e) {
    let {
            projectId: t,
            messages: l,
            emptyState: n,
            ref: a,
            onPickIdea: s,
            onAskForIdeas: u,
            draftHasText: c,
            onApprovePlan: d,
            floatingSettingsMessageId: m,
            onRestoreVersion: h,
        } = e,
        g = i.useRef(null),
        x = i.useCallback(
            (e) => {
                ((g.current = e), "function" == typeof a ? a(e) : null != a && (a.current = e));
            },
            [a],
        ),
        [p, v] = i.useState(null),
        j = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(j.current), []);
    let b = i.useCallback((e) => {
            let t = g.current?.querySelector(`[data-conjure-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                v(e),
                window.clearTimeout(j.current),
                (j.current = window.setTimeout(() => v(null), 1600)));
        }, []),
        k = (0, f.bG)([eC.Ay], () => eC.Ay.getPublishStatus(t)?.state ?? null),
        w = i.useMemo(() => {
            let e;
            return (function (e) {
                let t = [],
                    l = (function (e) {
                        let t = new Set(),
                            l = !1;
                        for (let n = e.length - 1; n >= 0; n--) {
                            let a = e[n];
                            null != a &&
                                null !=
                                    (function (e) {
                                        if ("assistant" !== e.role) return null;
                                        let t = (0, lz.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(a) &&
                                (l && t.add(a.render_id), (l = !0));
                        }
                        return t;
                    })(e);
                function n(e, l) {
                    t.push({ row: e, groupable: { key: e.key, ...l } });
                }
                for (let t of e) {
                    if ("user" === t.role) {
                        n(
                            { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                            { actor: "user", authorId: t.user_id, boundary: void 0 },
                        );
                        continue;
                    }
                    if ("publish_notice" === t.kind) {
                        let e = `${t.render_id}:publish`;
                        n(
                            { kind: "publishNotice", key: e, message: t, groupStart: !1 },
                            { actor: "assistant", boundary: e },
                        );
                        continue;
                    }
                    if ("project_event" === t.kind) {
                        let e = `${t.render_id}:projectEvent`;
                        n(
                            { kind: "projectEvent", key: e, message: t, groupStart: !1 },
                            { actor: "assistant", boundary: e },
                        );
                        continue;
                    }
                    let e = !(0, tH.BL)(t),
                        a = n3({
                            steps: t.steps,
                            content: t.content,
                            hasProposal: null != t.proposal,
                            hasAttachments: (t.attachments?.length ?? 0) > 0,
                        }),
                        r = a.lastStreamedMessage?.key,
                        i = (0, lz.C6)(t.steps, { turnActive: e }),
                        { lastWork: s, open: o } = (0, lz.CT)(i, { turnActive: e }),
                        u = i.at(-1)?.index,
                        c = !1;
                    for (let d of i) {
                        if (null != d.prose && st.test(d.prose.content)) c = !0;
                        else if (null != d.prose && d.prose.key !== a.replyKey) {
                            let l = `${t.render_id}:${d.key}`;
                            n(
                                {
                                    kind: "prose",
                                    key: l,
                                    message: t,
                                    groupStart: !1,
                                    content: d.prose.content,
                                    hostsAttachments:
                                        "streamed" === a.attachmentsHost && d.prose.key === r && null != t.attachments,
                                    streaming: e && d.index === u && !d.hasWork,
                                },
                                { actor: "assistant", boundary: l },
                            );
                        }
                        (d.hasWork || d.hasTodos) &&
                            n(
                                {
                                    kind: "activity",
                                    key: `${t.render_id}:work-${d.index}`,
                                    message: t,
                                    groupStart: !1,
                                    segment: d.index,
                                    active: d.index === o,
                                    closed: d.index !== o,
                                    ...(null != d.durationMs ? { segmentDurationMs: d.durationMs } : {}),
                                    reportsDuration: d.index === s,
                                    hostsChecklist: d.hasTodos,
                                    turnActive: lF(t),
                                    checklistSuperseded: d.hasTodos && l.has(t.render_id),
                                },
                                { actor: null, boundary: void 0 },
                            );
                    }
                    let d = st.test(t.content ?? "");
                    if (
                        (!0 === t.interrupted || c || d
                            ? n(
                                  {
                                      kind: "interrupted",
                                      key: `${t.render_id}:interrupted`,
                                      message: t,
                                      groupStart: !1,
                                  },
                                  { actor: null, boundary: void 0 },
                              )
                            : i.every((e) => !e.hasTodos) &&
                              (t.todos?.length ?? 0) > 0 &&
                              n(
                                  {
                                      kind: "legacyTodos",
                                      key: `${t.render_id}:todos`,
                                      message: t,
                                      groupStart: !1,
                                      checklistSuperseded: l.has(t.render_id),
                                  },
                                  { actor: null, boundary: void 0 },
                              ),
                        (a.showsClosingMessage && !d) ||
                            null != t.proposal ||
                            null != t.clarification ||
                            null != t.restoreProposal ||
                            (!e &&
                                (null != t.ideas ||
                                    null != t.publishCta ||
                                    null != t.secretRequest ||
                                    null != t.settingsRequest)) ||
                            "standalone" === a.attachmentsHost)
                    ) {
                        let l = `${t.render_id}:closing`;
                        n(
                            {
                                kind: "closing",
                                key: l,
                                message: t,
                                groupStart: !1,
                                active: e,
                                attachmentsHost: a.attachmentsHost,
                                content: a.closingContent,
                                sideReply: "side_reply" === t.kind,
                            },
                            {
                                actor: "assistant",
                                boundary: l,
                                separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                            },
                        );
                    }
                }
                let a = (function (e) {
                    let t,
                        l,
                        n = [],
                        a = null,
                        r = !1,
                        i = !1;
                    for (let s of e) {
                        if (null == s.actor) {
                            (n.push(!1), (a = null), (t = void 0), (r = !1), (i = !1), (l = void 0));
                            continue;
                        }
                        let e = !r || a !== s.actor || t !== s.authorId || s.boundary !== l || !0 === s.separate || i;
                        (e && ((a = s.actor), (t = s.authorId), (r = !0), (i = !0 === s.separate), (l = s.boundary)),
                            n.push(e));
                    }
                    return n;
                })(t.map((e) => e.groupable));
                return t.map((e, t) => ({ ...e.row, groupStart: a[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    if ("unpublished" !== t) return null;
                    for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                    return null;
                })(l, k)),
                l.every((t) => null == t.publishCta || t.id === e)
                    ? l
                    : l.map((t) => (null == t.publishCta || t.id === e ? t : { ...t, publishCta: null }))),
            );
        }, [l, k]),
        N = l.at(-1),
        S = (function (e, t, l) {
            var n;
            let a = (0, ll.Ay)(e),
                r = (0, ih.A)(),
                s = (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let l = e[t];
                        if ("publish_notice" !== l.kind && "project_event" !== l.kind) {
                            if ("user" === l.role) return null;
                            if ((0, tH.BL)(l)) return l;
                            if (!(0, tH.B0)(e, t)) break;
                        }
                    }
                    return null;
                })(t),
                o = t.at(-1),
                u = {
                    projectId: e,
                    draftHasText: l,
                    publishing: a?.publishing === !0,
                    drift: a?.isUpdate === !0,
                    messageAt: null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                    visible: r,
                },
                [c, d] = i.useState(() => ip(u, Date.now())),
                f = (function (e, t, l) {
                    if (e.projectId !== t.projectId) return ip(t, l());
                    if (
                        e.draftHasText === t.draftHasText &&
                        e.publishing === t.publishing &&
                        e.drift === t.drift &&
                        e.messageAt === t.messageAt &&
                        e.visible === t.visible
                    )
                        return e;
                    let n = l(),
                        a = { ...e, now: n };
                    if (
                        (e.draftHasText !== t.draftHasText &&
                            (a = {
                                ...a,
                                draftHasText: t.draftHasText,
                                draftTyped: t.draftHasText,
                                lastActivityAt: n,
                                outdatedUpdating: t.publishing && a.outdatedUpdating,
                            }),
                        e.publishing !== t.publishing)
                    ) {
                        let e = a.outdatedUpdating && (t.publishing || t.drift);
                        a = {
                            ...a,
                            publishing: t.publishing,
                            lastActivityAt: e ? a.lastActivityAt : n,
                            outdatedShown: !1,
                            outdatedBackoff: 0,
                            outdatedUpdating: t.publishing && a.outdatedUpdating,
                        };
                    }
                    if (
                        (e.drift !== t.drift &&
                            ((a = { ...a, drift: t.drift }),
                            t.drift || (a = { ...a, outdatedShown: !1, outdatedBackoff: 0 })),
                        e.messageAt !== t.messageAt)
                    ) {
                        let l = null == t.messageAt ? null : Math.min(t.messageAt, n);
                        ((a = (function (e) {
                            if (!e.outdatedShown || e.publishing) return e;
                            let t = Math.min(e.outdatedBackoff + 1, ig.length - 1);
                            return { ...e, outdatedShown: !1, outdatedBackoff: t };
                        })({ ...a, messageAt: t.messageAt, lastMessageAt: l })).publishing ||
                            (a = { ...a, outdatedUpdating: !1 }),
                            t.visible || null == e.messageAt || (a = { ...a, unseen: !0 }));
                    }
                    return (
                        e.visible !== t.visible &&
                            ((a = { ...a, visible: t.visible }),
                            t.visible
                                ? (n - (e.hiddenAt ?? n) >= 6e5
                                      ? (a = { ...a, visitStartedAt: n })
                                      : a.unseen && (a = { ...a, seenAt: n }),
                                  (a = { ...a, hiddenAt: null, unseen: !1 }))
                                : (a = { ...a, hiddenAt: n, unseen: !1 })),
                        a
                    );
                })(c, u, Date.now),
                m =
                    null == s ||
                    null != (n = s).awaitingUser ||
                    null != n.secretRequest ||
                    null != n.settingsRequest ||
                    (n.intake?.questions.length ?? 0) > 0
                        ? null
                        : {
                              turn: s,
                              publish: a,
                              draftHasText: l,
                              draftTyped: f.draftTyped && l,
                              outdatedUpdating: f.outdatedUpdating,
                          },
                { shown: h, nextDueAt: g } = (function (e, t) {
                    var l;
                    let n;
                    if (t.unseen) return { shown: null, nextDueAt: null };
                    let a = e.filter((e) => e.eligible).sort((e, t) => t.priority - e.priority)[0];
                    if (null == a) return { shown: null, nextDueAt: null };
                    let r =
                        ((n = Math.max(
                            0,
                            t.now -
                                ((l = a.clock),
                                Math.max(
                                    t.lastMessageAt ?? -1 / 0,
                                    t.lastActivityAt ?? -1 / 0,
                                    t.seenAt ?? -1 / 0,
                                    "visit" === l ? t.visitStartedAt : -1 / 0,
                                )),
                        )),
                        t.now + Math.max(0, a.idleDelayMs - n));
                    return r <= t.now ? { shown: a.key, nextDueAt: null } : { shown: null, nextDueAt: r };
                })(
                    ix.map((e) => ({
                        ...e,
                        idleDelayMs:
                            "outdated" === e.key && f.outdatedUpdating
                                ? 0
                                : (e.backoffDelaysMs?.[f.outdatedBackoff] ?? e.idleDelayMs),
                        eligible: null != m && e.eligible(m),
                    })),
                    f,
                );
            return (
                "outdated" !== h || f.outdatedShown ? f !== c && d(f) : d({ ...f, outdatedShown: !0 }),
                i.useEffect(() => {
                    function t() {
                        d((e) => ({ ...e, outdatedUpdating: !0 }));
                    }
                    let l = iv.get(e) ?? new Set();
                    return (
                        iv.set(e, l),
                        l.add(t),
                        () => {
                            (l.delete(t), 0 === l.size && iv.delete(e));
                        }
                    );
                }, [e]),
                i.useEffect(() => {
                    if (null == g) return;
                    let e = setTimeout(() => d((e) => ({ ...e, now: Date.now() })), Math.max(0, g - Date.now()));
                    return () => clearTimeout(e);
                }, [g, f.now]),
                h
            );
        })(t, l, !0 === c),
        C = i.useCallback(
            (e) => {
                switch (e) {
                    case "outdated":
                        return (0, r.jsx)(se, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, r.jsx)(ib, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, r.jsx)("div", {
                            className: ss.u$,
                            children: (0, r.jsx)(se, {
                                content: ed.intl.string(ec.default.s96AWB),
                                accessories: (0, r.jsx)(rD, { onAsk: u }),
                            }),
                        });
                }
            },
            [t, u],
        ),
        E = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let l = e[t];
                        if ("assistant" === l.role) {
                            if (!(0, tH.BL)(l) || "plan_implemented" === l.kind) return null;
                            if (null != l.proposal) return l.render_id;
                        }
                    }
                    return null;
                })(l),
            [l],
        ),
        I = i.useMemo(
            () =>
                (function (e) {
                    let t = new Map(),
                        l = null,
                        n = 0;
                    for (let a of e)
                        if ("assistant" === a.role) {
                            if ("plan_implemented" === a.kind) {
                                ((l = null), (n = 0));
                                continue;
                            }
                            null != a.proposal &&
                                (null != l && t.set(l, { version: n, superseded: !0 }),
                                (n += 1),
                                t.set(a.render_id, { version: n, superseded: !1 }),
                                (l = a.render_id));
                        }
                    return t;
                })(l),
            [l],
        ),
        M =
            (N?.role !== "assistant" || null == N.awaitingUser || null == N.secretRequest
                ? null
                : (0, tH.BL)(N)
                  ? N.awaitingUser
                  : null) ?? void 0,
        T = (0, f.bG)([er.Ay], () => er.Ay.getSettings(t)?.secrets, [t]),
        _ = i.useMemo(
            () =>
                (function (e, t) {
                    let l = null != t ? new Set(t.filter((e) => e.set).map((e) => e.name)) : null,
                        n = new Map(),
                        a = new Set(),
                        r = !1,
                        i = !1;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let s = e[t];
                        if (null == s) continue;
                        if ("user" === s.role) {
                            i =
                                i ||
                                (function (e) {
                                    let t = e.content.trim();
                                    return (
                                        t === ed.intl.string(ec.default.UGqnoV) ||
                                        t === ed.intl.string(ec.default.sMQt5O)
                                    );
                                })(s);
                            continue;
                        }
                        let o = s.secretRequest?.fields ?? [];
                        if (0 === o.length || !(0, tH.BL)(s)) continue;
                        let u = i;
                        for (let e of (u && null == l
                            ? n.set(s.render_id, "pending")
                            : u && null != l && o.every((e) => l.has(e.name))
                              ? n.set(s.render_id, "received")
                              : r
                                ? n.set(s.render_id, o.some((e) => a.has(e.name)) ? "superseded" : "inactive")
                                : n.set(s.render_id, "open"),
                        o))
                            a.add(e.name);
                        ((r = !0), (i = !1));
                    }
                    return n;
                })(l, T),
            [l, T],
        );
    if (0 === l.length) {
        if ("loading" === n)
            return (0, r.jsx)("ol", {
                ref: a,
                className: o()(ss.x7, ss.jH),
                "aria-busy": !0,
                children: (0, r.jsx)("li", { className: ss.Ub, children: (0, r.jsx)(A.y, {}) }),
            });
        let e = "unavailable" === n ? ec.default.Td4Sf4 : ec.default.V1QiNz;
        return (0, r.jsx)("ol", {
            ref: a,
            className: ss.x7,
            children: (0, r.jsx)(sc, { role: "assistant", children: (0, r.jsx)(se, { content: ed.intl.string(e) }) }),
        });
    }
    return (0, r.jsxs)("ol", {
        ref: x,
        className: ss.x7,
        children: [
            w.map((e) => {
                let n = e.message;
                switch (e.kind) {
                    case "user": {
                        let l = null != n.attachments && n.attachments.length > 0 ? n.attachments : null;
                        return (0, r.jsx)(
                            sc,
                            {
                                role: "user",
                                anchorId: n.id,
                                highlighted: p === n.id,
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(i8, {
                                    groupStart: e.groupStart,
                                    content: n.content,
                                    createdAt: n.created_at,
                                    userId: n.user_id,
                                    agentReaction: n.agentReaction,
                                    accessories:
                                        null != l ? (0, r.jsx)(rG.A, { projectId: t, attachments: l }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, r.jsx)(
                            sc,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(se, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: n.created_at,
                                    accessories:
                                        e.hostsAttachments && null != n.attachments
                                            ? (0, r.jsx)(rG.A, { projectId: t, attachments: n.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, r.jsx)(
                            sc,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(rV, {
                                    projectId: t,
                                    steps: n.steps,
                                    segment: e.segment,
                                    active: e.active,
                                    closed: e.closed,
                                    segmentDurationMs: e.segmentDurationMs,
                                    reportsDuration: e.reportsDuration,
                                    hostsChecklist: e.hostsChecklist,
                                    turnActive: e.turnActive,
                                    checklistSuperseded: e.checklistSuperseded,
                                    durationMs: null != n.finished_at ? n.finished_at - n.created_at : void 0,
                                    todos: n.todos,
                                    provisionalTodo: n.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "publishNotice":
                        return (0, r.jsx)(
                            sc,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(se, {
                                    groupStart: e.groupStart,
                                    content: null == n.publishNotice ? n.content : "",
                                    createdAt: n.created_at,
                                    accessories:
                                        null == n.publishNotice
                                            ? void 0
                                            : (0, r.jsx)(ib, { projectId: t, notice: n.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "projectEvent":
                        return (0, r.jsx)(
                            sc,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(se, {
                                    groupStart: e.groupStart,
                                    content: null == n.projectEvent ? n.content : "",
                                    createdAt: n.created_at,
                                    accessories:
                                        null == n.projectEvent
                                            ? void 0
                                            : (0, r.jsx)(sa, { projectId: t, event: n.projectEvent }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, r.jsx)(
                            sc,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(rV, { projectId: t, interrupted: !0, steps: n.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, r.jsx)(
                            sc,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(rV, {
                                    projectId: t,
                                    steps: [],
                                    active: !1,
                                    checklistSuperseded: e.checklistSuperseded,
                                    todos: n.todos,
                                    provisionalTodo: n.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "closing": {
                        let a =
                                null != h
                                    ? "assistant" !== n.role || null == n.sourceSha
                                        ? null
                                        : {
                                              sha: n.sourceSha,
                                              authorName: "",
                                              authorEmail: "",
                                              authoredAt: new Date(n.created_at).toISOString(),
                                              subject: n.content,
                                          }
                                    : null,
                            i = null != a && null != h ? () => so(a, h) : void 0,
                            o = n.restoreProposal;
                        return (0, r.jsx)(
                            sc,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != i
                                        ? (e) => {
                                              (0, z.jA)(e, (e) => (0, r.jsx)(si, { ...e, onRestoreVersion: i }));
                                          }
                                        : void 0,
                                children: (0, r.jsx)(se, {
                                    groupStart: e.groupStart,
                                    buttons:
                                        null != i
                                            ? (0, r.jsx)(iY, {
                                                  groupStart: e.groupStart,
                                                  renderMenu: (e) =>
                                                      (0, r.jsx)(si, { onClose: e, onSelect: e, onRestoreVersion: i }),
                                              })
                                            : void 0,
                                    content: e.content,
                                    createdAt: n.created_at,
                                    replyTo: (function (e, t) {
                                        if (null == t) return;
                                        let l = e.find((e) => e.id === t && "user" === e.role);
                                        if (null != l)
                                            return {
                                                id: l.id,
                                                content: l.content,
                                                ...(null != l.user_id ? { userId: l.user_id } : {}),
                                                createdAt: l.created_at,
                                            };
                                    })(l, n.in_reply_to),
                                    onJumpToReplied: null != n.in_reply_to ? () => b(n.in_reply_to) : void 0,
                                    accessories: (0, r.jsx)(rW, {
                                        projectId: t,
                                        steps: n.steps,
                                        content: "",
                                        proposal: n.proposal,
                                        planVersion: I.get(n.render_id),
                                        interrupted: !0 === n.interrupted,
                                        hoistedProse: !0,
                                        hoistedAttachmentsHost: e.attachmentsHost,
                                        sideReply: e.sideReply,
                                        sideReplyAcknowledges: n.acknowledges,
                                        active: e.active,
                                        ideas: e.active ? void 0 : n.ideas,
                                        pickedIdeaIds:
                                            null == n.ideas
                                                ? void 0
                                                : (function (e, t, l) {
                                                      let n = new Set();
                                                      for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                          let t = e[a];
                                                          if ("user" === t.role)
                                                              for (let e of l)
                                                                  e.implementation_prompt.trim() === t.content.trim() &&
                                                                      n.add(e.id);
                                                      }
                                                      return n;
                                                  })(l, n, n.ideas),
                                        attachments: n.attachments,
                                        secretRequest: e.active ? void 0 : n.secretRequest,
                                        secretRequestId: n.render_id,
                                        secretRequestAwaiting: n === N ? M : void 0,
                                        secretRequestStatus: _.get(n.render_id),
                                        settingsRequest: e.active || n.id === m ? void 0 : n.settingsRequest,
                                        publishCta: e.active ? null : n.publishCta,
                                        onPickIdea: s,
                                        onApprovePlan: n.render_id === E ? d : void 0,
                                        restoreProposal: o,
                                        onRestoreProposal:
                                            null != o && null != h && n === N
                                                ? () =>
                                                      so(
                                                          {
                                                              sha: o.sha,
                                                              authorName: "",
                                                              authorEmail: "",
                                                              authoredAt: o.authored_at,
                                                              subject: o.subject,
                                                          },
                                                          h,
                                                      )
                                                : void 0,
                                    }),
                                }),
                            },
                            e.key,
                        );
                    }
                }
            }),
            null != M
                ? (0, r.jsx)(sc, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, r.jsx)(se, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, r.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: ed.intl.string(ec.default.YR8A2v),
                          }),
                      }),
                  })
                : null,
            (0, r.jsx)("li", {
                role: "none",
                className: ss.q3,
                children: (0, r.jsx)(iS, { reminder: S, renderReminder: C }),
            }),
        ],
    });
}
function sc(e) {
    let { role: t, children: l, anchorId: n, highlighted: a = !1, continuation: i = !1, onContextMenu: s } = e;
    return (0, r.jsx)("li", {
        onContextMenu: s,
        "data-role": t,
        "data-conjure-message": n,
        className: o()(ss.xk, { [ss.Qo]: a, [ss.q3]: i }),
        children: l,
    });
}
let sd = [ec.default["AX+5lk"], ec.default.VAU6A7, ec.default["1emysd"], ec.default.EXHX3L, ec.default.ChslmX];
function sf(e) {
    return sd.some((t) => ed.intl.string(t) === e);
}
function sm(e) {
    switch (e) {
        case "connecting":
            return ed.intl.string(ec.default["ECl+Dx"]);
        case "closed":
            return ed.intl.string(ec.default.mQZSp1);
        case "failed":
            return ed.intl.string(ec.default.xzJSZ6);
    }
}
var sh = l(823376),
    sg = l(187447);
function sx(e) {
    let { activity: t, id: l } = e,
        { text: n, revealing: a } = iH(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        s = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            s.current?.scrollToBottom();
        }, [n]),
        (0, r.jsx)("div", {
            id: l,
            role: "tooltip",
            className: sg.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, r.jsx)(lD.Ch, {
                ref: s,
                className: sg.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, r.jsx)("div", {
                    className: o()(rH.PT, sg.bb),
                    "data-conjure-revealing": a ? "true" : void 0,
                    children: n0.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var sp = l(53659);
function sv(e) {
    let {
            activity: t,
            compacting: l = !1,
            saving: n = !1,
            restoring: a = !1,
            recalling: s = !1,
            controlling: u = !1,
            spoken: c,
            onSpokenChange: d,
        } = e,
        f = i.useRef(null),
        m = i.useId(),
        [h, g] = i.useState(null),
        x = (function (e) {
            let {
                    activity: t,
                    compacting: l = !1,
                    saving: n = !1,
                    restoring: a = !1,
                    recalling: r = !1,
                    controlling: i = !1,
                } = e,
                s = null != t && "end" !== t.phase;
            return i
                ? ec.default["1jqaAc"]
                : a
                  ? ec.default.M4KI5F
                  : r
                    ? sd[0]
                    : n
                      ? ec.default.mKK6wB
                      : l
                        ? ec.default.xnCAaP
                        : s
                          ? ec.default.izrt52
                          : ec.default.L9EDub;
        })({ activity: t, compacting: l, saving: n, restoring: a, recalling: s, controlling: u }),
        p = ed.intl.string(x),
        v = x === sd["0"],
        [j, b] = i.useState(c ?? p);
    n && j !== p && b(p);
    let y = i.useRef(p);
    (i.useEffect(() => {
        y.current = p;
    }, [p]),
        i.useEffect(() => {
            d?.(j);
        }, [j, d]));
    let w = i.useRef(null),
        N = i.useRef(j);
    i.useEffect(() => {
        N.current = j;
    }, [j]);
    let A = i.useRef(v),
        S = i.useRef(0);
    (i.useEffect(() => {
        ((A.current = v), !v && sf(N.current) && b(y.current));
    }, [v]),
        i.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                if (A.current) {
                    var e;
                    ((S.current = sf(N.current) ? S.current + 1 : 0),
                        b(((e = S.current), ed.intl.string(sd[e % sd.length]))));
                } else y.current !== N.current ? b(y.current) : w.current?.play();
            }
            function n() {
                (window.clearTimeout(e), window.clearInterval(t), (e = 0), (t = 0));
            }
            function a() {
                (n(),
                    (e = window.setTimeout(() => {
                        (l(), (t = window.setInterval(l, 2400)));
                    }, 1800)));
            }
            function r() {
                (w.current?.stop(), a());
            }
            return (
                ("u" < typeof document || document.hasFocus()) && a(),
                window.addEventListener("focus", r),
                window.addEventListener("blur", n),
                () => {
                    (n(), window.removeEventListener("focus", r), window.removeEventListener("blur", n));
                }
            );
        }, []));
    let C = null != t && "" !== t.text,
        E = t?.session ?? null,
        I = C && null != E && h === E,
        M = i.useCallback(() => {
            C && null != E && g((e) => (e === E ? null : E));
        }, [C, E]),
        T = i.useCallback(() => g(null), []);
    return (0, r.jsx)(et.Y, {
        targetElementRef: f,
        position: "top",
        align: "left",
        shouldShow: I,
        onRequestClose: T,
        renderPopout: () => (0, r.jsx)(sx, { id: m, activity: t }),
        children: () =>
            (0, r.jsxs)(k.D, {
                innerRef: f,
                className: o()(sp.hF, C && sp.Xd),
                "aria-label": ed.intl.string(a ? ec.default.qqlUiW : v ? sd["0"] : ec.default["Uuj/gh"]),
                "aria-expanded": I,
                "aria-describedby": I ? m : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ed.intl.string(x),
                onClick: M,
                children: [
                    (0, r.jsx)("span", {
                        className: sp.bl,
                        children: (0, r.jsx)(sh.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", {
                        className: sp.xu,
                        "aria-hidden": !!u || !!v || void 0,
                        children: (0, r.jsx)(eR.o, {
                            ref: w,
                            text: j,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: sp.yE,
                        }),
                    }),
                ],
            }),
    });
}
let sj = { second: 1e3, minute: 6e4 };
function sb(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let l;
            if (null == e) return;
            let a = sj[t];
            return (
                !(function t() {
                    let r = Date.now();
                    (n(r), (l = setTimeout(t, a - ((((r - e) % a) + a) % a))));
                })(),
                () => clearTimeout(l)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, l - e)
    );
}
var sy = l(719374);
function sk(e) {
    let { startedAt: t } = e,
        l = sb(t);
    return (0, r.jsx)(y.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: sy.$,
        "data-conjure-turn-timer": !0,
        children: (0, n1.C7)(l),
    });
}
function sw(e) {
    let { startedAt: t } = e,
        l = sb(t, "minute");
    return (0, r.jsx)(N.A, { role: "timer", children: (0, n1.Us)(l) });
}
var sN = l(436804);
function sA(e) {
    return e.toLocaleString();
}
function sS(e) {
    let { label: t, usage: l, cached: n = !0 } = e;
    return (0, r.jsxs)("div", {
        className: sN.Q$,
        children: [
            (0, r.jsxs)("div", {
                className: sN.mf,
                children: [
                    (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, r.jsxs)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [sA((0, ee.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, r.jsxs)(y.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    sA(l.input_tokens),
                    " in \xb7 ",
                    sA(l.output_tokens),
                    " out",
                    n
                        ? ` \xb7 ${sA(l.cache_creation_input_tokens)} cache write \xb7 ${sA(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function sC(e) {
    let { project: t } = e,
        l = (0, ee.wU)(t.compaction),
        n = (0, ee.wU)(t.classifier),
        a = (0, ee.wV)(t.orchestrator, t.codegen),
        i = (0, ee.wV)(a, l);
    return (0, r.jsxs)("div", {
        className: sN.si,
        role: "dialog",
        "aria-label": ed.intl.string(ec.default.p5EGzq),
        children: [
            (0, r.jsx)("div", {
                className: sN.Q$,
                children: (0, r.jsxs)("div", {
                    className: sN.mf,
                    children: [
                        (0, r.jsxs)(y.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [sA((0, ee.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, r.jsxs)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(sS, { label: ed.intl.string(ec.default["9Sj3SX"]), usage: a }),
            (0, r.jsx)(sS, { label: ed.intl.string(ec.default.ANCEo3), usage: l }),
            (0, r.jsx)(sS, { label: ed.intl.string(ec.default.ugL6D4), usage: n, cached: !1 }),
            (0, r.jsxs)("div", {
                className: sN.mf,
                children: [
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: ed.intl.string(ec.default["8OUg09"]),
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ee.sj)(i) ? "\u2014" : `${Math.round(100 * (0, ee.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function sE(e) {
    let { project: t } = e,
        l = i.useRef(null);
    return (0, r.jsx)(et.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, r.jsx)(sC, { project: t }),
        children: (e) =>
            (0, r.jsx)(k.D, {
                innerRef: l,
                className: sN.Y$,
                "aria-label": ed.intl.string(ec.default.Z96gxQ),
                ...e,
                children: (0, r.jsx)(ay.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var sI = l(997421);
function sM(e) {
    let t,
        {
            projectId: l,
            thinking: n,
            turnStartedAt: a,
            restoring: s = !1,
            recalling: o = !1,
            thinkingActivity: u,
            compacting: c,
            saving: d,
            projectUsage: f,
            connState: m,
        } = e,
        h = (0, tx.Zv)(l),
        [g, x] = i.useState(null),
        p = i.useCallback((e) => x(sf(e) || e === ed.intl.string(ec.default.mKK6wB) ? null : e), []),
        v =
            null == f
                ? null
                : ((t = (0, ee.a7)(f.cost_usd)),
                  {
                      text: ed.intl.formatToPlainString(ec.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: ed.intl.formatToPlainString(ec.default.Z4LvGa, { runes: t, turns: f.turns }),
                  }),
        j = n && null != a;
    return (0, r.jsxs)("div", {
        className: sI.jf,
        children: [
            (0, r.jsxs)("div", {
                className: sI.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    n || s || o || h || !0 === d
                        ? (0, r.jsx)(sv, {
                              activity: u,
                              compacting: c,
                              saving: d,
                              restoring: s,
                              recalling: o,
                              controlling: h,
                              spoken: g,
                              onSpokenChange: p,
                          })
                        : null,
                    j ? (0, r.jsx)(sk, { startedAt: a }) : null,
                ],
            }),
            j ? (0, r.jsx)(sw, { startedAt: a }) : null,
            null == f || null == v
                ? null
                : (0, r.jsxs)("span", {
                      className: sI.BP,
                      children: [
                          (0, r.jsx)(y.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": v.aria,
                              children: v.text,
                          }),
                          (0, r.jsx)(sE, { project: f }),
                      ],
                  }),
            "open" === m
                ? null
                : (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === m ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ed.intl.formatToPlainString(ec.default["tCo+ZM"], { status: sm(m) }),
                      "data-conjure-conn": !0,
                      "data-state": m,
                      className: sI.XF,
                      children: sm(m),
                  }),
        ],
    });
}
var sT = l(698638),
    s_ = l(608711);
let sP = [ed.intl.string(ec.default["9w+Chc"]), ed.intl.string(ec.default.WAvmdq), ed.intl.string(ec.default.SKsrzl)];
function sR(e) {
    var t;
    let { projectId: l, restoreState: n, onRestoreVersion: a, onImportProject: s } = e,
        o = (0, f.bG)([tH.Ay], () => tH.Ay.getMessages(l), [l]),
        u = (0, f.bG)([er.Ay], () => er.Ay.getConnState(l), [l]),
        c = (0, f.bG)([er.Ay], () => er.Ay.isChatStopped(l), [l]),
        d = (0, f.bG)([tH.Ay], () => tH.Ay.getProjectUsage(l), [l]),
        m = (0, f.bG)([tH.Ay], () => tH.Ay.getThinkingActivity(l), [l]),
        h = (0, f.bG)([tH.Ay], () => tH.Ay.isCompacting(l), [l]),
        g = (0, f.bG)([tH.Ay], () => tH.Ay.isSaving(l), [l]),
        x = (0, f.bG)([er.Ay], () => er.Ay.getModelSettings(l), [l]),
        p = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(!0),
        [k, w] = i.useState(!0),
        N = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = v.current?.getScrollerNode();
        if (null == e) return;
        let t = N.current;
        b.current
            ? v.current?.scrollToBottom()
            : t?.row.isConnected === !0 && (e.scrollTop += t.row.getBoundingClientRect().top + e.scrollTop - t.top);
        let n = j.current?.firstElementChild;
        ((N.current = null != n ? { row: n, top: n.getBoundingClientRect().top + e.scrollTop } : null),
            e.scrollTop < 600 && (0, er.P6)(l));
    }, [o, l]);
    let A = i.useCallback(() => {
            let e = p.current;
            if (null == e) return;
            let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        C = i.useCallback(() => {
            let e = v.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            b.current = t < 32;
            let n = t > 1;
            w((e) => (!n === e ? e : !n));
            let a = e.getScrollerNode();
            null != a && a.scrollTop < 600 && (0, er.P6)(l);
        }, [l]);
    (i.useLayoutEffect(() => {
        let e = p.current,
            t = j.current;
        if (null == e) return;
        let l = v.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            r = l?.getBoundingClientRect().height,
            i = null;
        function s() {
            b.current &&
                (null != i && cancelAnimationFrame(i), (i = requestAnimationFrame(() => v.current?.scrollToBottom())));
        }
        let o = new ResizeObserver((t) => {
            for (let i of t)
                if (i.target === e) {
                    let e = i.contentRect.width;
                    if (e === n) continue;
                    ((n = e), s());
                } else if (i.target === l) {
                    let e = i.contentRect.height;
                    if (e === r) continue;
                    ((r = e), s());
                } else {
                    let e = i.contentRect.height;
                    if (e === a) continue;
                    ((a = e), s());
                }
        });
        return (
            o.observe(e),
            null != l && o.observe(l),
            null != t && o.observe(t),
            () => {
                (o.disconnect(), null != i && cancelAnimationFrame(i));
            }
        );
    }, []),
        i.useEffect(() => {
            (0, er.Hc)(l);
        }, [l]),
        (0, ek.E1)(l));
    let E = e9(l),
        I = i.useCallback(
            (e, t) => {
                (0, er.dv)(l, e, t);
            },
            [l],
        ),
        M = i.useCallback(
            (e, t) => {
                0 === E.annotations.length
                    ? I(e, t)
                    : (I(
                          (function (e) {
                              let { annotations: t, metaComment: l, context: n } = e,
                                  a = t.filter((e) => eV(e.comment)),
                                  r = [];
                              if (
                                  (r.push(
                                      `My design feedback: ${1 === a.length ? "1 comment" : `${a.length} comments`} on the app.`,
                                  ),
                                  null != n)
                              ) {
                                  let e = n.title.trim(),
                                      t = "" !== e ? `${e} (${n.url})` : n.url;
                                  (r.push(`Page: ${t}, viewport ${n.viewport.width}x${n.viewport.height}.`),
                                      r.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              a.forEach((e, t) => {
                                  let l;
                                  (r.push(""),
                                      r.push(`${t + 1}. ${eX(e.target)}`),
                                      r.push(
                                          `   Feedback: ${(l = e.comment.trim()).length <= 1e3 ? l : `${l.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = l.trim();
                              return ("" !== i && (r.push(""), r.push(`Note for the whole batch: ${i}`)), r.join("\n"));
                          })({ annotations: E.annotations, metaComment: e, context: E.context }),
                          t,
                      ),
                      e5(l));
            },
            [E, I, l],
        ),
        T = i.useCallback(() => (0, er.fu)(l), [l]),
        _ = i.useCallback((e) => nS(l, e.implementation_prompt), [l]),
        [P, R] = (function (e) {
            let [t, l] = i.useState(() => nY(e)),
                [n, a] = i.useState(e),
                r = n !== e,
                s = r ? nY(e) : t;
            return (r && (a(e), l(s)), [s, l]);
        })(l),
        L = i.useCallback(() => I(ed.intl.string(ec.default["t5CN3+"])), [I]),
        D = i.useCallback((e, t, n) => nS(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        $ = i.useCallback((e) => (0, er.XZ)(l, e), [l]),
        z = i.useCallback((e) => (0, er.vX)(l, e), [l]),
        F = i.useCallback((e) => r9(l, "chat", Array.from(e), z), [l, z]),
        O = i.useCallback(() => nS(l, ed.intl.string(ec.default.Zc7gML)), [l]),
        U = n?.status === "restoring",
        G = "open" === u && !c && !U,
        q = o[o.length - 1],
        B = null != q && "assistant" === q.role && null != q.proposal,
        [H, K] = i.useState(null),
        V = q?.clarification != null && q.clarification.id !== H ? q.clarification : null,
        W = i.useCallback(() => {
            null != V && K(V.id);
        }, [V]),
        J = (0, f.bG)([er.Ay], () => er.Ay.getSettings(l), [l]),
        [X, Q] = i.useState(null),
        Y =
            null != q &&
            "assistant" === q.role &&
            null != q.settingsRequest &&
            (0, tH.BL)(q) &&
            q.id !== X &&
            ((t = q.settingsRequest),
            null != J &&
                (t.keys ?? []).some((e) => {
                    let t = J.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return J.secrets.find((t) => t.name === e)?.set !== !0;
                    let l = J.values[e];
                    return null == l || "" === l;
                }))
                ? q
                : null,
        Z = Y?.settingsRequest ?? null,
        ee = i.useCallback(() => {
            null != Y && Q(Y.id);
        }, [Y]),
        et = null != Z,
        el = (function (e) {
            let { historyLoaded: t, historyUnavailable: l, connState: n } = e;
            return l ? "unavailable" : t ? "greeting" : "failed" === n || "closed" === n ? "unavailable" : "loading";
        })({
            historyLoaded: (0, f.bG)([tH.Ay], () => tH.Ay.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, f.bG)([tH.Ay], () => tH.Ay.isHistoryUnavailable(l), [l]),
            connState: u,
        }),
        en = "loading" === el && 0 === o.length,
        ea = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return sP[e % sP.length];
        }, [l]),
        ei = B ? ed.intl.string(ec.default.Zc7gML) : "greeting" === el && 0 === o.length ? ea : null,
        es = i.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, tH.BL)(t)) return t;
            }
        }, [o]),
        eo = null != es,
        eu =
            null != es
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = nq.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(es)
                : void 0,
        ef = B && G ? O : void 0,
        em = i.useCallback(() => nS(l, ed.intl.string(ec.default.EMgIuY)), [l]),
        [eh, eg] = i.useState(null),
        [ex, ep] = i.useState(eo);
    (ex !== eo && (ep(eo), eo || eg(null)),
        i.useEffect(() => {
            if (!eo) return;
            let e = v.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eg(null)
                        : eg(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [eo, es?.steps]));
    let ev = i.useMemo(() => (null != es ? (0, lO.b)(es.steps) : ""), [es]),
        ej = i.useMemo(() => (null != es ? ((0, lz.lt)(es.steps) ?? es.todos) : void 0), [es]),
        eb = es?.provisionalTodo,
        ey = null != es && lF(es),
        ew = i.useMemo(() => {
            var e;
            return null != es ? ((e = es.steps), rK((0, lz.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [es]);
    return (0, r.jsxs)("section", {
        ref: p,
        "data-conjure-chat": !0,
        className: s_.TE,
        children: [
            G
                ? (0, r.jsx)(l$.A, {
                      title: ed.intl.string(ec.default.gy7byi),
                      description: ed.intl.string(ec.default["dkv/WO"]),
                      icons: sT.ir,
                      onDrop: F,
                  })
                : null,
            (0, r.jsx)(l5, {
                onJumpToActivity: A,
                line: ev,
                placement: eo && "top" === eh ? "top" : null,
                todos: ej,
                todosLive: ey,
                provisionalTodo: eb,
                agents: ew,
            }),
            (0, r.jsxs)("div", {
                className: s_.JX,
                children: [
                    (0, r.jsx)(lD.Ch, {
                        ref: v,
                        onScroll: C,
                        scrollbarGutter: en ? "both-edges" : "stable",
                        className: [s_.N$, k ? null : s_.hB, et ? s_.J9 : null].filter(Boolean).join(" "),
                        children: (0, r.jsx)(su, {
                            ref: j,
                            projectId: l,
                            messages: o,
                            emptyState: el,
                            floatingSettingsMessageId: Y?.id,
                            onPickIdea: G ? _ : void 0,
                            onAskForIdeas: G ? L : void 0,
                            draftHasText: P,
                            onApprovePlan: G ? em : void 0,
                            onRestoreVersion: U || eo ? void 0 : a,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: s_.NJ,
                        children: (0, r.jsx)(sM, {
                            projectId: l,
                            thinking: eo,
                            turnStartedAt: eu,
                            restoring: U,
                            recalling: en,
                            thinkingActivity: m,
                            compacting: h,
                            saving: g,
                            projectUsage: d,
                            connState: u,
                        }),
                    }),
                    null == V
                        ? null
                        : (0, r.jsx)("div", {
                              className: et ? `${s_.B5} ${s_.J9}` : s_.B5,
                              children: (0, r.jsx)(
                                  nF,
                                  { projectId: l, clarification: V, onSubmit: G ? D : void 0, onDismiss: W },
                                  V.id,
                              ),
                          }),
                    null == Z
                        ? null
                        : (0, r.jsx)("div", {
                              className: s_.B5,
                              children: (0, r.jsx)(nG, { projectId: l, request: Z, onDismiss: ee }, Y?.id),
                          }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: s_.Jx,
                children: [
                    (0, r.jsx)(l5, {
                        onJumpToActivity: A,
                        line: ev,
                        placement: eo && "bottom" === eh ? "bottom" : null,
                        todos: ej,
                        todosLive: ey,
                        provisionalTodo: eb,
                        agents: ew,
                    }),
                    0 === E.annotations.length
                        ? null
                        : (0, r.jsxs)("div", {
                              className: s_.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: ed.intl.formatToPlainString(ec.default["7b49dS"], {
                                          count: E.annotations.length,
                                      }),
                                  }),
                                  (0, r.jsx)(y.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ed.intl.string(ec.default["5zG+CR"]),
                                  }),
                                  (0, r.jsx)(S.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ed.intl.string(ec.default["/zOv9+"]),
                                      onClick: () => e5(l),
                                  }),
                              ],
                          }),
                    (0, r.jsx)(io, {
                        projectId: l,
                        canSend: G,
                        stopped: c,
                        running: eo,
                        restoring: U,
                        onSend: M,
                        hasPendingContext: E.annotations.length > 0,
                        onInterrupt: G ? T : void 0,
                        onUploadFile: z,
                        onImport: s,
                        onApprove: ef,
                        suggestion: ei,
                        questionOpen: null != V || null != Z,
                        modelSettings: x,
                        onModelSettingsChange: $,
                        onDraftHasTextChange: R,
                    }),
                ],
            }),
        ],
    });
}
var sL = l(624479),
    sD = l(761508),
    s$ = l(540999);
let sz = [],
    sF = [],
    sO = new Map(),
    sU = new Map(),
    sG = new Map(),
    sq = new Map(),
    sB = new Map(),
    sH = new Map(),
    sK = new Map(),
    sV = new Map();
class sW extends f.Ay.Store {
    getStatus(e) {
        return sO.get(e) ?? null;
    }
    getFetchState(e) {
        return sU.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return sq.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return sH.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return sB.get(e) ?? null;
    }
    getModelCalls(e) {
        return sK.get(e) ?? sz;
    }
    getForceCompactionState(e) {
        return sG.get(e) ?? "idle";
    }
    getTimingTraces(e) {
        return sV.get(e) ?? sF;
    }
    getTimingTrace(e, t) {
        return sV.get(e)?.find((e) => e.id === t) ?? null;
    }
}
let sJ = new sW(nd.h, {
    LOGOUT: function () {
        if (
            0 === sO.size &&
            0 === sU.size &&
            0 === sG.size &&
            0 === sq.size &&
            0 === sB.size &&
            0 === sH.size &&
            0 === sK.size &&
            0 === sV.size
        )
            return !1;
        (sO.clear(), sU.clear(), sG.clear(), sq.clear(), sB.clear(), sH.clear(), sK.clear(), sV.clear());
    },
    CONJURE_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        sU.set(t, "loading");
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === sG.get(t);
        n &&
            sG.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === sU.get(t);
        if ((a && sU.set(t, "failed"), !n && !a)) return !1;
    },
    CONJURE_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? sU.set(t, "failed") : (sO.set(t, l), sU.set(t, "loaded"));
    },
    CONJURE_DEBUG_COMPACTION_REPORT: function (e) {
        sq.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_COMPACTION_DECLINED: function (e) {
        sB.set(e.projectId, {
            promptCeiling: e.promptCeiling,
            threshold: e.threshold,
            projected: e.projected,
            headroom: e.headroom,
            retainedMessages: e.retainedMessages,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED: function (e) {
        let { projectId: t } = e;
        sG.set(t, "pending");
    },
    CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        sG.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_MODEL_CALL: function (e) {
        let t = sK.get(e.projectId);
        if (null != t && t.some((t) => t.id === e.id)) return !1;
        let l = {
                id: e.id,
                role: e.role,
                model: e.model,
                stopReason: e.stopReason,
                durationMs: e.durationMs,
                inputTokens: e.inputTokens,
                outputTokens: e.outputTokens,
                cacheReadTokens: e.cacheReadTokens,
                cacheWriteTokens: e.cacheWriteTokens,
                taskId: e.taskId,
                observedAt: e.observedAt,
            },
            n = null == t ? [l] : t.concat(l);
        sK.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    CONJURE_DEBUG_TIMING_TRACE: function (e) {
        let { projectId: t, trace: l } = e,
            n = (sV.get(t) ?? [])
                .filter((e) => e.id !== l.id)
                .concat(l)
                .sort((e, t) => e.started_at - t.started_at);
        sV.set(t, n.slice(-100));
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, ee.aM)(l.total)) return !1;
        sH.set(t, l);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (sO.delete(t),
            sU.delete(t),
            sG.delete(t),
            sq.delete(t),
            sB.delete(t),
            sH.delete(t),
            sK.delete(t),
            sV.delete(t));
    },
});
function sX(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function sQ(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function sY(e) {
    switch (e) {
        case "subagent":
            return ed.intl.string(ec.default.PbKt9r);
        case "context":
            return ed.intl.string(ec.default["tNk/P2"]);
        case "tool":
            return ed.intl.string(ec.default.NBOJcw);
        case "delegated":
            return ed.intl.string(ec.default.QgrFdt);
        default:
            return ed.intl.string(ec.default.LsLVUy);
    }
}
var sZ = l(536113);
let s0 = { started: sZ.Vf, ok: sZ.mo, error: sZ.Sr };
function s1(e) {
    let { status: t } = e;
    return (0, r.jsx)("span", {
        className: `${sZ.Om} ${s0[t] ?? sZ.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return ed.intl.string(ec.default["2wyRDK"]);
                case "error":
                    return ed.intl.string(ec.default["2Cu8n+"]);
                default:
                    return ed.intl.string(ec.default["6kgw6D"]);
            }
        })(t),
    });
}
function s2(e, t) {
    return String(e).padStart(t, "0");
}
function s3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${s2(n.getHours(), 2)}:${s2(n.getMinutes(), 2)}:${s2(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${s2(n.getMilliseconds(), 3)}` : a;
}
let s4 = ["op", "setup", "worktree", "sandbox", "build", "platform", "other"],
    s5 = {
        op: "op",
        sandbox: "sandbox",
        worktree: "worktree",
        build: "build",
        deps: "build",
        api: "platform",
        state: "platform",
        publish: "platform",
        preview: "platform",
        healthcheck: "platform",
        template: "setup",
        workspace: "setup",
        declarations: "setup",
        manifest: "setup",
        storage: "setup",
    };
function s6(e) {
    return e.spans.find((e) => null == e.parent) ?? null;
}
function s7(e) {
    return { collapsed: ol(e, (e) => e.depth > 0 && !e.children.some((e) => e.significant)), revealed: new Set() };
}
function s8(e) {
    return null == e
        ? ""
        : Object.entries(e)
              .map((e) => {
                  let [t, l] = e;
                  return !0 === l ? t : `${t}=${String(l)}`;
              })
              .join(" ");
}
function s9(e) {
    return e.count > 1 ? e.totalMs : e.end - e.start;
}
function oe(e, t) {
    for (let l of (t(e), e.children)) oe(l, t);
}
function ot(e) {
    let t = e.name.search(/[.:]/),
        l = -1 === t ? e.name : e.name.slice(0, t),
        n = (-1 === t ? "" : e.name.slice(t + 1))
            .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
            .replace(/_/g, " ")
            .toLowerCase(),
        a = e.attrs?.cmd;
    return {
        service: l,
        operation: "string" == typeof a && "" !== a ? `${n} \xb7 ${a}` : n,
        category: s5[l] ?? "other",
    };
}
function ol(e, t) {
    let l = new Set();
    return (
        !(function e(n) {
            for (let a of (n.children.length > 0 && t(n) && l.add(n.key), n.children)) e(a);
        })(e),
        l
    );
}
function on(e) {
    return `${e.name} ${s8(e.attrs)}`;
}
function oa(e) {
    let t = new Map();
    for (let l of e.spans) {
        let e = t.get(l.parent) ?? [];
        (e.push(l), t.set(l.parent, e));
    }
    for (let e of t.values()) e.sort((e, t) => e.start - t.start);
    return t;
}
function or(e, t) {
    return t.end ?? e.reported_at;
}
function oi(e, t, l, n) {
    let a = t
            .map((t) => [Math.max(t.start, l), Math.min(or(e, t), n)])
            .filter((e) => {
                let [t, l] = e;
                return l > t;
            })
            .sort((e, t) => e[0] - t[0]),
        r = 0,
        i = -1 / 0;
    for (let [e, t] of a) t <= i || ((r += t - Math.max(e, i)), (i = t));
    return r;
}
let os = {
    op: "Operation",
    setup: "Setup",
    worktree: "Git worktree",
    sandbox: "Sandbox",
    build: "Build",
    platform: "Platform",
    other: "Other",
};
function oo(e) {
    return sX(Math.round(e));
}
function ou(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function oc(e) {
    return oo(e.count > 1 ? e.totalMs : e.end - e.start);
}
function od(e) {
    let t = s6(e)?.end;
    return null == t ? null : sX(t);
}
function of(e) {
    return [s3(new Date(e.started_at).toISOString()) ?? "", ou(e.spans.length), s8(s6(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
var om = l(738188),
    oh = l(430993),
    og = l(364840),
    ox = l(224640),
    op = l(20742);
let ov = { collapsed: new Set(), revealed: new Set() };
var oj = l(872892);
let ob = { op: oj.Q, setup: oj.kc, worktree: oj.Qx, sandbox: oj.QH, build: oj.F1, platform: oj.Op, other: oj.fv };
function oy(e) {
    return `conjure-perf-trace-${e}`;
}
function ok(e) {
    let { start: t, end: l, extent: n, barClass: a, duration: i } = e,
        s = (t / n) * 100,
        o = ((l - t) / n) * 100;
    return (0, r.jsxs)("div", {
        className: oj.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, r.jsx)("div", { className: a }),
            (0, r.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${oj.p0} ${s + o > 85 ? oj.EU : oj.jh}`,
                children: i,
            }),
        ],
    });
}
function ow(e) {
    let { node: t, extent: l, collapsed: n, selected: a, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = n ? tr._ : lB.a,
        f = i.useCallback(
            (e) => {
                (e.shiftKey && u(t.key), s(t.key));
            },
            [t.key, u, s],
        ),
        m = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? u(t.key) : o(t.key));
            },
            [t.key, u, o],
        );
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "treeitem",
        id: oy(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !n : void 0,
        "aria-selected": a,
        className: `${oj.$y} ${a ? oj.wQ : ""}`,
        onClick: f,
        children: [
            (0, r.jsxs)("div", {
                className: oj.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, r.jsx)(k.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: oj.ai,
                              onClick: m,
                              children: (0, r.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, r.jsx)("span", { className: oj.YJ }),
                    (0, r.jsx)(y.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: oj.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, r.jsx)("span", { className: `${oj.nf} ${ob[t.category]}` }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: oj.eu,
                        children: t.service,
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: oj.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, r.jsx)(y.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: oj.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, r.jsx)(om.WarningIcon, { size: "xs", color: "currentColor", className: oj.ik })
                        : null,
                ],
            }),
            (0, r.jsx)(ok, {
                start: t.start,
                end: t.end,
                extent: l,
                barClass: t.failed
                    ? `${oj.M0} ${oj.Nh}`
                    : t.running
                      ? `${oj.M0} ${oj.rF}`
                      : `${oj.M0} ${ob[t.category]}`,
                duration: oc(t),
            }),
        ],
    });
}
function oN(e) {
    let { row: t, extent: l, selected: n, onReveal: a } = e;
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "treeitem",
        id: oy(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": n,
        className: `${oj.$y} ${n ? oj.wQ : ""}`,
        onClick: () => a(t.parentKey),
        children: [
            (0, r.jsxs)("div", {
                className: oj.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, r.jsx)("span", {
                        className: oj.ai,
                        children: (0, r.jsx)(tr._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", { className: oj.U9 }),
                    (0, r.jsx)("span", { className: `${oj.nf} ${oj.dL}` }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: oj.MQ,
                        children: ou(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, r.jsx)(ok, {
                start: t.start,
                end: t.end,
                extent: l,
                barClass: `${oj.M0} ${oj.ab} ${oj.dL}`,
                duration: oo(t.totalMs),
            }),
        ],
    });
}
function oA(e) {
    let { node: t } = e;
    return null == t
        ? (0, r.jsx)(y.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, r.jsxs)("div", {
              className: oj._0,
              children: [
                  (0, r.jsxs)("div", {
                      className: oj.TQ,
                      children: [
                          (0, r.jsx)("span", { className: `${oj.nf} ${ob[t.category]}` }),
                          (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [
                          { label: "Start", value: `+${oo(e.start)}` },
                          { label: "Duration", value: oc(e) },
                      ];
                      for (let [l, n] of (e.count > 1
                          ? t.push(
                                { label: "Calls", value: String(e.count) },
                                { label: "Longest call", value: oo(e.maxMs) },
                                { label: "Spread over", value: oo(e.end - e.start) },
                            )
                          : e.children.length > 0 && t.push({ label: "Self time", value: oo(e.selfMs) }),
                      Object.entries(e.span.attrs ?? {})))
                          t.push({ label: l, value: String(n) });
                      let l = e.span.waits_on;
                      null != l && t.push({ label: "Waited on", value: `${l.span_name} in ${l.trace_name}` });
                      let n = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      return (
                          n.length > 0 && t.push({ label: "Notes", value: n.join(", ") }),
                          null != e.span.error && t.push({ label: "Error", value: e.span.error }),
                          t
                      );
                  })(t).map((e) => {
                      let { label: t, value: l } = e;
                      return (0, r.jsxs)(
                          i.Fragment,
                          {
                              children: [
                                  (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "text-muted", children: t }),
                                  (0, r.jsx)(y.E, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      tabularNumbers: !0,
                                      children: l,
                                  }),
                              ],
                          },
                          t,
                      );
                  }),
              ],
          });
}
function oS(e) {
    let { trace: t } = e,
        l = (function (e) {
            let t = i.useMemo(
                    () =>
                        null == e
                            ? null
                            : (function (e) {
                                  let t = oa(e);
                                  function l(e) {
                                      return !t.has(e.id) && null != e.end && null == e.error;
                                  }
                                  let n = s6(e);
                                  if (null == n) return null;
                                  let a = (function n(a, r, i, s) {
                                          let o = a[0],
                                              u = Math.min(...a.map((e) => e.start)),
                                              c = Math.max(...a.map((t) => or(e, t))),
                                              d = a.map((t) => or(e, t) - t.start),
                                              f = 1 === a.length ? (t.get(o.id) ?? []) : [],
                                              m = {
                                                  key: 1 === a.length ? `span-${o.id}` : `fold-${o.id}`,
                                                  depth: r,
                                                  span: o,
                                                  count: a.length,
                                                  start: u,
                                                  end: c,
                                                  totalMs: d.reduce((e, t) => e + t, 0),
                                                  maxMs: Math.max(...d),
                                                  selfMs: c - u - oi(e, f, u, c),
                                                  running: null == o.end,
                                                  failed: null != o.error,
                                                  parallel: a.some((t) =>
                                                      i.some((l) => {
                                                          var n, r, i;
                                                          return (
                                                              !a.includes(l) &&
                                                              ((n = e),
                                                              (r = t),
                                                              (i = l),
                                                              r.start < or(n, i) && i.start < or(n, r))
                                                          );
                                                      }),
                                                  ),
                                                  outlivedParent: c > s,
                                                  ...ot(o),
                                                  significant: !1,
                                                  children: [],
                                                  descendants: 0,
                                              },
                                              h = new Map();
                                          for (let e of f) l(e) && h.set(on(e), (h.get(on(e)) ?? 0) + 1);
                                          let g = new Set();
                                          for (let e of f) {
                                              let t = on(e);
                                              if (l(e) && (h.get(t) ?? 0) >= 4) {
                                                  if (g.has(t)) continue;
                                                  g.add(t);
                                                  let e = f.filter((e) => l(e) && on(e) === t);
                                                  m.children.push(n(e, r + 1, f, c));
                                              } else m.children.push(n([e], r + 1, f, c));
                                          }
                                          return (
                                              (m.descendants = m.children.reduce(
                                                  (e, t) => e + t.count + t.descendants,
                                                  0,
                                              )),
                                              m
                                          );
                                      })([n], 0, [], 1 / 0),
                                      r = 0.1 * (a.end - a.start);
                                  return (
                                      oe(a, (e) => {
                                          e.significant = s9(e) >= r;
                                      }),
                                      a
                                  );
                              })(e),
                    [e],
                ),
                [l, n] = i.useState(() => (null == t ? ov : s7(t))),
                [a, r] = i.useState(null),
                s = i.useMemo(() => {
                    let e;
                    return null == t
                        ? []
                        : ((e = []),
                          !(function t(n) {
                              if ((e.push({ kind: "node", key: n.key, node: n }), l.collapsed.has(n.key))) return;
                              let a = l.revealed.has(n.key),
                                  r = [];
                              function i() {
                                  (1 === r.length
                                      ? t(r[0])
                                      : r.length > 1 &&
                                        e.push({
                                            kind: "smaller",
                                            key: `smaller-${r[0].key}`,
                                            parentKey: n.key,
                                            depth: n.depth + 1,
                                            count: r.reduce((e, t) => e + t.count, 0),
                                            start: Math.min(...r.map((e) => e.start)),
                                            end: Math.max(...r.map((e) => e.end)),
                                            totalMs: r.reduce((e, t) => e + s9(t), 0),
                                        }),
                                      (r = []));
                              }
                              for (let e of n.children) a || e.significant ? (i(), t(e)) : r.push(e);
                              i();
                          })(t),
                          e);
                }, [t, l]),
                o = i.useCallback((e) => {
                    n((t) => {
                        let l = new Set(t.collapsed);
                        return (l.has(e) ? l.delete(e) : l.add(e), { ...t, collapsed: l });
                    });
                }, []),
                u = i.useCallback((e) => {
                    n((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                c = i.useCallback(
                    (e) => {
                        let l,
                            a =
                                null == t
                                    ? null
                                    : ((l = null),
                                      oe(t, (t) => {
                                          t.key === e && (l = t);
                                      }),
                                      l);
                        null != a &&
                            n((e) => {
                                let t, l;
                                return (
                                    (t = new Set(e.collapsed)),
                                    (l = new Set(e.revealed)),
                                    oe(a, (e) => {
                                        (t.delete(e.key), l.add(e.key));
                                    }),
                                    { collapsed: t, revealed: l }
                                );
                            });
                    },
                    [t],
                ),
                d = i.useCallback(() => {
                    null != t && n({ collapsed: new Set(), revealed: ol(t, () => !0) });
                }, [t]),
                f = i.useCallback(() => {
                    null != t && n({ collapsed: ol(t, (e) => e.depth > 0), revealed: new Set() });
                }, [t]),
                m = i.useCallback(() => {
                    null != t && n(s7(t));
                }, [t]),
                h = s.find((e) => e.key === a);
            return {
                rows: s,
                collapsed: l.collapsed,
                selectedKey: a,
                selected: h?.kind === "node" ? h.node : null,
                toggle: o,
                reveal: u,
                expandSubtree: c,
                select: r,
                expandAll: d,
                collapseAll: f,
                reset: m,
            };
        })(t),
        { rows: n, collapsed: a, selected: s, selectedKey: o, select: u, toggle: c, reveal: d, expandSubtree: f } = l,
        m = Math.max(1, ...t.spans.map((e) => or(t, e))),
        h = i.useMemo(
            () =>
                (function (e) {
                    let t = e / 6,
                        l = 10 ** Math.floor(Math.log10(t)),
                        n = [1, 2, 5, 10].map((e) => e * l).find((e) => e >= t) ?? t,
                        a = [];
                    for (let t = 0; t <= e; t += n) a.push(t);
                    return a;
                })(m),
            [m],
        ),
        g = i.useMemo(
            () =>
                (function (e) {
                    let t = oa(e),
                        l = new Map();
                    for (let n of e.spans) {
                        if (null == n.parent) continue;
                        let a = or(e, n),
                            r = a - n.start - oi(e, t.get(n.id) ?? [], n.start, a),
                            { service: i, operation: s } = ot(n),
                            o = `${i} ${s}`;
                        l.set(o, (l.get(o) ?? 0) + r);
                    }
                    return [...l.entries()]
                        .map((e) => {
                            let [t, l] = e;
                            return { name: t, ms: l };
                        })
                        .sort((e, t) => t.ms - e.ms)
                        .slice(0, 6);
                })(t),
            [t],
        ),
        x = h.length > 1 ? ((h[1] - h[0]) / m) * 100 : 100,
        p = i.useCallback(
            (e) => {
                let t,
                    l = n.findIndex((e) => e.key === o),
                    r = n[l];
                if ("ArrowDown" === e.key) t = n[Math.min(n.length - 1, l + 1)];
                else if ("ArrowUp" === e.key) t = n[Math.max(0, l - 1)];
                else if (null == r) return;
                else if ("smaller" === r.kind && ("ArrowRight" === e.key || "Enter" === e.key)) d(r.parentKey);
                else if ("node" === r.kind && "ArrowRight" === e.key && e.shiftKey) f(r.key);
                else if ("node" === r.kind && "ArrowRight" === e.key && a.has(r.key)) c(r.key);
                else {
                    if ("node" !== r.kind || "ArrowLeft" !== e.key || !(r.node.children.length > 0) || a.has(r.key))
                        return;
                    c(r.key);
                }
                (e.preventDefault(),
                    null != t && (u(t.key), document.getElementById(oy(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [a, f, d, n, u, o, c],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(oh.c, {
                children: [
                    (0, r.jsxs)("div", {
                        className: oj.z,
                        children: [
                            (0, r.jsx)(y.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: od(t) ?? "still running",
                            }),
                            (0, r.jsx)(y.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: of(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, r.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, r.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${ou(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: oj.KE,
                        children: [
                            (0, r.jsx)(S.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: l.reset }),
                            (0, r.jsx)(S.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: l.expandAll,
                            }),
                            (0, r.jsx)(S.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: l.collapseAll,
                            }),
                            (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                            (0, r.jsx)("div", {
                                className: oj.o1,
                                children: s4.map((e) =>
                                    (0, r.jsxs)(
                                        "span",
                                        {
                                            className: oj.fI,
                                            children: [
                                                (0, r.jsx)("span", { className: `${oj.nf} ${ob[e]}` }),
                                                (0, r.jsx)(y.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: os[e],
                                                }),
                                            ],
                                        },
                                        e,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == o ? void 0 : oy(o),
                        className: oj.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(x) },
                        onKeyDown: p,
                        children: [
                            (0, r.jsxs)("div", {
                                className: oj.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: oj.So,
                                        children: (0, r.jsx)(y.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: oj.c1,
                                        children: h.map((e) =>
                                            (0, r.jsx)(
                                                y.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${oj.io} ${(e / m) * 100 > 85 ? oj.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / m) * 100),
                                                    },
                                                    children: 0 === e ? "0" : oo(e),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            n.map((e) =>
                                "node" === e.kind
                                    ? (0, r.jsx)(
                                          ow,
                                          {
                                              node: e.node,
                                              extent: m,
                                              collapsed: a.has(e.key),
                                              selected: e.key === o,
                                              onSelect: u,
                                              onToggle: c,
                                              onExpandSubtree: f,
                                          },
                                          e.key,
                                      )
                                    : (0, r.jsx)(oN, { row: e, extent: m, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                    0 === g.length
                        ? null
                        : (0, r.jsxs)("div", {
                              className: oj.xZ,
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-default",
                                      children: "Most time",
                                  }),
                                  g.map((e) => {
                                      let { name: t, ms: l } = e;
                                      return (0, r.jsx)(
                                          y.E,
                                          {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              tabularNumbers: !0,
                                              children: `${t} ${oo(l)}`,
                                          },
                                          t,
                                      );
                                  }),
                              ],
                          }),
                ],
            }),
            (0, r.jsx)(og.j, { children: (0, r.jsx)(oA, { node: s }) }),
        ],
    });
}
function oC(e) {
    let { transitionState: t, onClose: l, projectId: n, traceId: a } = e,
        i = (0, f.bG)([sJ], () => sJ.getTimingTrace(n, a), [n, a]),
        s = i?.name ?? "Perf Trace";
    return (0, r.jsxs)(ox.d, {
        transitionState: t,
        onClose: l,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, r.jsx)(op.rQ, { title: s }),
            null == i
                ? (0, r.jsx)(oh.c, {
                      children: (0, r.jsx)(y.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, r.jsx)(oS, { trace: i }),
        ],
    });
}
function oE(e) {
    let { projectId: t, trace: l } = e,
        n = l.spans.find((e) => null != e.error)?.error,
        a = i.useCallback(() => {
            (0, te.openModal)((e) => (0, r.jsx)(oC, { ...e, projectId: t, traceId: l.id }));
        }, [t, l.id]);
    return (0, r.jsxs)(k.D, {
        className: oj.nM,
        onClick: a,
        children: [
            (0, r.jsxs)("div", {
                className: oj.sU,
                children: [
                    (0, r.jsx)(s1, {
                        status:
                            l.spans.some((e) => null != e.error) || s6(l)?.attrs?.ok === !1
                                ? "error"
                                : l.spans.some((e) => null == e.end)
                                  ? "started"
                                  : "ok",
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: oj._k,
                        children: l.name,
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: od(l) ?? "still running",
                    }),
                ],
            }),
            (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: of(l) }),
            null == n
                ? null
                : (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
function oI(e) {
    let { projectId: t } = e,
        l = (0, f.yK)([sJ], () => sJ.getTimingTraces(t), [t]),
        n = i.useMemo(() => [...l].reverse(), [l]);
    return 0 === l.length
        ? (0, r.jsxs)("div", {
              className: oj.Ie,
              children: [
                  (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: "No perf traces yet" }),
                  (0, r.jsx)(y.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: "Recipe imports and remix builds record a timing trace here when they finish.",
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: oj.nd,
              children: (0, r.jsx)(lD.Ch, {
                  className: oj.XG,
                  children: (0, r.jsx)("ul", {
                      className: oj.p_,
                      "aria-label": "Perf traces",
                      children: n.map((e) =>
                          (0, r.jsx)("li", { children: (0, r.jsx)(oE, { projectId: t, trace: e }) }, e.id),
                      ),
                  }),
              }),
          });
}
function oM(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function oT(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function o_(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function oP(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function oR(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function oL(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function oD(e) {
    return ed.intl.string("preview" === e ? ec.default["2yLYlG"] : ec.default.eiAi57);
}
let o$ = ["all", "preview", "stable", "web"],
    oz = new Set(["error", "aborted", "length"]);
function oF(e) {
    switch (e.reason) {
        case "local":
            return ed.intl.string(ec.default.mUeKML);
        case "unconfigured":
            return ed.intl.string(ec.default.bGefb5);
        case "unauthorized":
            return ed.intl.string(ec.default.KLx6Bb);
        default:
            return null != e.detail
                ? ed.intl.formatToPlainString(ec.default.t09Q6q, { detail: e.detail })
                : ed.intl.string(ec.default["t+tG59"]);
    }
}
function oO(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ed.intl.formatToPlainString(ec.default["XO/bN4"], {
              p50: oM(e.memory_p50_bytes ?? 0),
              p999: oM(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let oU = {
    db: () => ec.default["7l+DFG"],
    db_preview: () => ec.default.FAuffi,
    runtime: () => ec.default["Gkl+ab"],
    runtime_preview: () => ec.default.ynpJzv,
    bot: () => ec.default["5/i0cj"],
    bot_preview: () => ec.default.m2jsnw,
};
var oG = l(911608),
    oq = l(177427);
function oB(e) {
    let { generatedAt: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: oq.KE,
        children: [
            (0, r.jsx)("div", {
                className: oq.IQ,
                children:
                    "loading" === l
                        ? (0, r.jsx)(A.y, { type: A.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ed.intl.string(ec.default.ZVByPX),
                            })
                          : null != t
                            ? (0, r.jsx)(y.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: ed.intl.formatToPlainString(ec.default.INVO50, { time: oR(t) }),
                              })
                            : null,
            }),
            (0, r.jsx)(S.$, { variant: "secondary", size: "sm", text: ed.intl.string(ec.default.oKEgiu), onClick: n }),
        ],
    });
}
function oH(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("section", {
        className: oq.uW,
        "aria-label": t,
        children: [
            (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "text-muted", className: oq.Gf, children: t }),
            l,
        ],
    });
}
function oK(e) {
    let { label: t, value: l, hint: n, critical: a = !1 } = e;
    return (0, r.jsxs)("div", {
        className: oq.N8,
        children: [
            (0, r.jsxs)("div", {
                className: oq.x7,
                children: [
                    (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: a ? "text-feedback-critical" : "text-default",
                        children: l,
                    }),
                ],
            }),
            null != n && (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
        ],
    });
}
function oV(e) {
    let { label: t, used: l, max: n, formatValue: a } = e,
        i = n > 0 ? Math.min(1, Math.max(0, l / n)) : 0,
        s = i >= 0.9;
    return (0, r.jsxs)("div", {
        className: oq.N8,
        children: [
            (0, r.jsxs)("div", {
                className: oq.x7,
                children: [
                    (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${a(l)} / ${a(n)}`,
                    }),
                ],
            }),
            (0, r.jsx)(oG.z, {
                value: 100 * i,
                valueLabel: `${a(l)} of ${a(n)}`,
                "aria-label": t,
                className: s ? oq.dh : void 0,
            }),
        ],
    });
}
function oW(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, r.jsx)(oK, {
            label: ed.intl.string(ec.default.SXP7pD),
            value: ed.intl.string(ec.default.E5hKVi),
            hint: oF(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, r.jsx)(oK, {
            label: ed.intl.string(ec.default.SXP7pD),
            value: "\u2014",
            hint: ed.intl.string(ec.default.AGvoMJ),
        });
    let n = oO(l);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(oK, { label: ed.intl.string(ec.default["H/X+FI"]), value: oT(l.cpu_ms) }),
            null != n && (0, r.jsx)(oK, { label: ed.intl.string(ec.default.lmFmMO), value: n }),
        ],
    });
}
function oJ(e) {
    let { analytics: t } = e,
        l = ed.intl.string(ec.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, r.jsx)(oH, {
            title: l,
            children: (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: oF(t) }),
        });
    let n = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? oU[t] : null) ? ed.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, r.jsx)(oH, {
        title: l,
        children:
            0 === n.length
                ? (0, r.jsx)(y.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: ed.intl.string(ec.default.AGvoMJ),
                  })
                : n.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, r.jsx)(
                          oK,
                          {
                              label: l,
                              value: ed.intl.formatToPlainString(ec.default["w/2voO"], { cpu: oT(t.cpu_ms) }),
                              hint: oO(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var oX = l(400154);
let oQ = [];
function oY(e) {
    let t,
        { call: l } = e,
        { text: n, bad: a } =
            ((t = null != l.stopReason && oz.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? oT(l.durationMs) : null,
                    `${o_(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${o_(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, r.jsxs)("div", {
        className: oX.p5,
        children: [
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: oX.Q5,
                children: oP(l.observedAt),
            }),
            (0, r.jsxs)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: oX.qN,
                children: [l.role, " \xb7 ", l.model],
            }),
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: a ? "text-feedback-critical" : "text-muted",
                children: n,
            }),
        ],
    });
}
function oZ(e, t) {
    return (0, r.jsx)(oK, {
        label: e,
        value: ed.intl.formatToPlainString(ec.default.yHJxuP, { count: o_((0, ee.aM)(t)) }),
        hint: `${o_(t.input_tokens)} in \xb7 ${o_(t.output_tokens)} out \xb7 ${o_(t.cache_read_input_tokens)} cache read`,
    });
}
function o0(e) {
    let { projectId: t, status: l, fetchState: n, onRefresh: a, traceVisible: s = !1 } = e,
        o = (0, f.bG)([sJ], () => sJ.getLastTurnUsage(t), [t]),
        u = (0, f.bG)([sJ], () => sJ.getLastCompaction(t), [t]),
        c = (0, f.bG)([sJ], () => sJ.getLastCompactionDecline(t), [t]),
        d = (0, f.bG)([sJ], () => sJ.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, er.Lj)(t), [t]),
        h = i.useCallback(() => (0, er.Lj)(t, !0), [t]),
        g = (0, f.bG)([sJ], () => (s ? oQ : sJ.getModelCalls(t)), [t, s]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        v = l?.agent?.session ?? null,
        j = u?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, r.jsxs)("div", {
        className: oX.Mf,
        children: [
            (0, r.jsx)(oB, { generatedAt: l?.generated_at ?? null, fetchState: n, onRefresh: a }),
            (0, r.jsx)(oH, {
                title: ed.intl.string(ec.default.JghNal),
                children:
                    null == x
                        ? (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ed.intl.string(ec.default.s0U5Fv),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(oK, {
                                      label: ed.intl.string(ec.default["9nqym2"]),
                                      value: o_((0, ee.a7)(x.cost_usd)),
                                      hint: ed.intl.formatToPlainString(ec.default.NCdUIh, { count: o_(x.turns) }),
                                  }),
                                  oZ(ed.intl.string(ec.default.xtxP0e), x.orchestrator),
                                  oZ(ed.intl.string(ec.default["9Sj3SX"]), x.codegen),
                                  oZ(ed.intl.string(ec.default.ANCEo3), (0, ee.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, r.jsx)(oK, {
                                          label: ed.intl.string(ec.default.SQHm7C),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${o_(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, r.jsx)(oH, {
                title: ed.intl.string(ec.default.dZHPE5),
                children:
                    null == o
                        ? (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ed.intl.string(ec.default.DfVjal),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  oZ(ed.intl.string(ec.default["7X3i9d"]), o.total),
                                  (0, r.jsx)(oK, {
                                      label: ed.intl.string(ec.default["8OUg09"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, ee.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, r.jsxs)(oH, {
                title: ed.intl.string(ec.default.NbRk9a),
                children: [
                    null != u && null != j
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(oV, {
                                      label: ed.intl.string(ec.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: j,
                                      formatValue: o_,
                                  }),
                                  (0, r.jsx)(oK, {
                                      label: ed.intl.string(ec.default.mRbSns),
                                      value: `${o_(u.tokensBefore)} \u{2192} ${o_(u.tokensAfter)}`,
                                      hint: ed.intl.formatToPlainString(ec.default.Vq3skS, {
                                          count: o_(u.retainedMessages),
                                          time: oR(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? ed.intl.formatToPlainString(ec.default.GMLCNv, { ceiling: o_(j) })
                                      : ed.intl.string(ec.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, r.jsx)(oK, {
                            label: ed.intl.string(ec.default["4BX5KK"]),
                            value: `${o_(c.projected)} / ${o_(c.threshold)}`,
                            critical: !0,
                            hint: ed.intl.formatToPlainString(ec.default["6ngCax"], { time: oR(c.observedAt) }),
                        }),
                    (0, r.jsxs)("div", {
                        className: oX.Lj,
                        children: [
                            (0, r.jsx)(S.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ed.intl.string(ec.default["1EiJeb"]),
                                disabled: "pending" === d,
                                onClick: m,
                            }),
                            (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof d && "compacted" !== d.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ed.intl.string(ec.default.wox6Ev);
                                    if ("pending" === e) return ed.intl.string(ec.default.OcPHQ1);
                                    let t = oR(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return ed.intl.formatToPlainString(ec.default.BhRjZZ, { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? ec.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? ec.default.YZb4hK
                                              : ec.default.ZoUSVK;
                                    return ed.intl.formatToPlainString(l, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(d),
                            }),
                            "object" == typeof d &&
                                !0 === d.pendingTurn &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(S.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: ed.intl.string(ec.default.ZxG2AI),
                                            onClick: h,
                                        }),
                                        (0, r.jsx)(y.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: ed.intl.string(ec.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, r.jsx)(oH, {
                    title: ed.intl.string(ec.default.TkTRdW),
                    children:
                        0 === g.length
                            ? (0, r.jsx)(y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ed.intl.string(ec.default["r3/FhI"]),
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      g
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, r.jsx)(oY, { call: e }, e.id)),
                                      g.length > 30 &&
                                          (0, r.jsx)(y.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: ed.intl.formatToPlainString(ec.default["uZ9P/O"], {
                                                  shown: 30,
                                                  total: g.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != v || l?.analytics != null) &&
                (0, r.jsxs)(oH, {
                    title: ed.intl.string(ec.default.EsSzCS),
                    children: [
                        null != v &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(oK, {
                                        label: ed.intl.string(ec.default.CLXHAs),
                                        value: oR(v.instance_since),
                                        hint: ed.intl.string(ec.default.UCwUEX),
                                    }),
                                    (0, r.jsx)(oK, {
                                        label: ed.intl.string(ec.default["8V8e1Z"]),
                                        value: o_(v.sockets),
                                    }),
                                    (0, r.jsx)(oK, {
                                        label: ed.intl.string(ec.default["4pBzYW"]),
                                        value: v.turn_inflight
                                            ? ed.intl.string(ec.default.Wv025I)
                                            : ed.intl.string(ec.default["7/lsFY"]),
                                    }),
                                    v.queued_messages > 0 &&
                                        (0, r.jsx)(oK, {
                                            label: ed.intl.string(ec.default["3oUYnv"]),
                                            value: o_(v.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, r.jsx)(oW, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, r.jsxs)(oH, {
                    title: ed.intl.string(ec.default["LEIhp/"]),
                    children: [
                        (0, r.jsx)(oK, {
                            label: ed.intl.string(ec.default.IlDBN3),
                            value: o_(p.max_subagent_iterations),
                        }),
                        (0, r.jsx)(oK, {
                            label: ed.intl.string(ec.default["ZdzKR+"]),
                            value: ed.intl.formatToPlainString(ec.default.yHJxuP, {
                                count: o_(p.context_window_tokens),
                            }),
                        }),
                        (0, r.jsx)(oK, {
                            label: ed.intl.string(ec.default.cIhN2W),
                            value: ed.intl.formatToPlainString(ec.default.yHJxuP, {
                                count: o_(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, r.jsx)(oK, {
                            label: ed.intl.string(ec.default["+fOn/q"]),
                            value: o_(p.max_user_message_chars),
                        }),
                        (0, r.jsx)(oK, { label: ed.intl.string(ec.default.kIHga0), value: o_(p.max_build_attempts) }),
                        (0, r.jsx)(oK, { label: ed.intl.string(ec.default.Iw03yW), value: o_(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var o1 = l(237528),
    o2 = l(683438),
    o3 = l(531893);
function o4(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, r.jsx)("div", {
              className: o3.ut,
              children: (0, r.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: ed.intl.string(ec.default.h1SE6R),
              }),
          });
}
function o5(e) {
    let { state: t, emptyTitle: l, emptyBody: n } = e;
    return "failed" === t.status
        ? (0, r.jsxs)("div", {
              className: o3.qf,
              children: [
                  (0, r.jsx)(y.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: ed.intl.string(ec.default.h1SE6R),
                  }),
                  (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: ed.intl.string(ec.default["8SErdg"]),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: o3.qf,
              children: [
                  (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
              ],
          });
}
function o6(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, r.jsx)("div", {
              className: o3.ps,
              children: (0, r.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: ed.intl.string(ec.default.V7Ri8H),
              }),
          })
        : null;
}
var o7 = l(109079);
let o8 = i.memo(function (e) {
    var t;
    let { entry: l, showSource: n } = e,
        [a, s] = i.useState(!1),
        o = i.useId(),
        u = i.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let l = e.indexOf("{"),
                        n = e.indexOf("["),
                        a = -1 === l ? n : -1 === n ? l : Math.min(l, n);
                    if (-1 === a) return null;
                    let r = e.slice(a).trim();
                    if (r.length < 2) return null;
                    try {
                        t = JSON.parse(r);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let i = e.slice(0, a).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: i, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: i, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(l.message),
            [l.message],
        ),
        c = "error" === l.level ? "text-feedback-critical" : "text-default";
    return (0, r.jsxs)("div", {
        className: o7.vK,
        children: [
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: o7.Mt,
                selectable: !0,
                children: oP(l.ts),
            }),
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = l.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: o7.dm,
                children: l.level,
            }),
            (0, r.jsxs)("div", {
                className: o7.t4,
                children: [
                    n &&
                        null != l.source &&
                        (0, r.jsx)("span", { className: o7.Cq, children: (0, r.jsx)(o1.v, { text: l.source }) }),
                    null != l.kind &&
                        (0, r.jsx)("span", {
                            className: o7.Cq,
                            title: l.build ?? void 0,
                            children: (0, r.jsx)(o1.v, {
                                text: ed.intl.string(ec.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != u
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, r.jsxs)(y.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, r.jsxs)(k.D, {
                                      className: o7.Pq,
                                      "aria-expanded": a,
                                      "aria-controls": o,
                                      "aria-label": ed.intl.string(ec.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          a
                                              ? (0, r.jsx)(lB.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, r.jsx)(tr._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, r.jsxs)(y.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  ed.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker
                                                          ? ec.default.kUhyUv
                                                          : ec.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  a &&
                                      (0, r.jsx)(y.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: c,
                                          className: o7.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, r.jsx)(y.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: c,
                              selectable: !0,
                              children: l.message,
                          }),
                ],
            }),
        ],
    });
});
function o9(e) {
    let { projectId: t } = e,
        l = (0, f.bG)([eC.Ay], () => eC.Ay.getLogs(t), [t]),
        n = (0, f.bG)([eC.Ay], () => eC.Ay.getHistoryState(t, "logs")),
        [a, s] = i.useState("all"),
        [o, u] = i.useState(""),
        c = i.useMemo(() => {
            let e = o.trim().toLowerCase();
            return l.filter((t) => {
                var l, n;
                return (
                    "string" == typeof (l = t.log).message &&
                    "string" == typeof l.level &&
                    "string" == typeof l.ts &&
                    ("all" === a ||
                        ("preview" === (n = t.log.source) || "stable" === n || "web" === n ? n : "other") === a) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
        }, [l, a, o]),
        d = i.useRef(null),
        m = i.useRef(!0);
    i.useEffect(() => {
        m.current && d.current?.scrollToBottom();
    }, [c]);
    let h = i.useCallback(() => {
            let e = d.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = i.useMemo(
            () =>
                o$.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return oD(e);
                            case "web":
                                return ed.intl.string(ec.default.IVzfVV);
                            default:
                                return ed.intl.string(ec.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, r.jsxs)("div", {
        className: o7.$F,
        children: [
            (0, r.jsxs)("div", {
                className: o7.y4,
                children: [
                    (0, r.jsx)(tD.I, {
                        look: "pill",
                        "aria-label": ed.intl.string(ec.default.MhvyUU),
                        options: g,
                        value: a,
                        onChange: (e) => s(e.value),
                    }),
                    (0, r.jsx)("div", {
                        className: o7.KT,
                        children: (0, r.jsx)(o2.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: ed.intl.string(ec.default["m2+37Y"]),
                            "aria-label": ed.intl.string(ec.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, r.jsx)(o4, { state: n }),
            (0, r.jsxs)(lD.Ch, {
                ref: d,
                onScroll: h,
                overflow: "auto",
                className: o7.sx,
                children: [
                    (0, r.jsx)(o6, { state: n }),
                    0 === l.length
                        ? (0, r.jsx)(o5, {
                              state: n,
                              emptyTitle: ed.intl.string(ec.default.S7qlPG),
                              emptyBody: ed.intl.string(ec.default.nD0S9z),
                          })
                        : 0 === c.length
                          ? (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ed.intl.string(ec.default["4SIdrX"]),
                            })
                          : c.map((e) => (0, r.jsx)(o8, { entry: e.log, showSource: "all" === a }, e.key)),
                ],
            }),
        ],
    });
}
function ue(e) {
    let { title: t, preview: l, stable: n, renderEnv: a } = e,
        s = [];
    return (
        null != l && s.push((0, r.jsx)(i.Fragment, { children: a("preview", l) }, "preview")),
        null != n && s.push((0, r.jsx)(i.Fragment, { children: a("stable", n) }, "stable")),
        (0, r.jsx)(oH, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, r.jsx)(y.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: ed.intl.string(ec.default.umcjif),
                      }),
        })
    );
}
function ut(e) {
    var t;
    let { env: l, bot: n } = e;
    return n.ever_started
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(oK, {
                      label: ed.intl.formatToPlainString(ec.default["01ZMS4"], { env: oD(l) }),
                      value: ((t = n.connected), ed.intl.string(t ? ec.default.Wv025I : ec.default["7/lsFY"])),
                      critical: !n.connected && null != n.fatal_reason,
                      hint: n.fatal_reason ?? (n.connected ? void 0 : (n.last_start_reason ?? void 0)),
                  }),
                  (0, r.jsx)(oK, {
                      label: ed.intl.string(ec.default["z1dh+F"]),
                      value: o_(n.events_received),
                      hint:
                          null != n.last_event_type && null != n.last_event_at
                              ? `${n.last_event_type} \xb7 ${oR(n.last_event_at)}`
                              : void 0,
                  }),
                  (0, r.jsx)(oK, { label: ed.intl.string(ec.default.Iz5GnJ), value: o_(n.guild_count) }),
                  (0, r.jsx)(oK, {
                      label: ed.intl.string(ec.default["7UqtNv"]),
                      value: o_(n.reconnects),
                      hint:
                          null != n.last_close_code && null != n.last_close_at
                              ? ed.intl.formatToPlainString(ec.default.MasSly, {
                                    code: n.last_close_code,
                                    time: oR(n.last_close_at),
                                })
                              : void 0,
                  }),
                  n.dispatch_errors > 0 &&
                      (0, r.jsx)(oK, {
                          label: ed.intl.string(ec.default["x3+JXJ"]),
                          value: o_(n.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, r.jsx)(oK, { label: oD(l), value: ed.intl.string(ec.default.lTHQss) });
}
function ul(e) {
    let { env: t, metrics: l } = e,
        n = l.status_4xx + l.status_5xx;
    return (0, r.jsx)(oK, {
        label: oD(t),
        value: ed.intl.formatToPlainString(ec.default["Xq+wHT"], {
            requests: o_(l.requests),
            failures: o_(n + l.errors),
        }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? ed.intl.formatToPlainString(ec.default["o/ZBm4"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: oR(l.last_failure.at),
                  })
                : ed.intl.formatToPlainString(ec.default["7KlGT6"], { time: oR(l.since) }),
    });
}
function un(e) {
    let { env: t, runtime: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(oK, {
                label: ed.intl.formatToPlainString(ec.default["92gVTm"], { env: oD(t) }),
                value: o_(l.connections),
            }),
            l.schedules.map((e) =>
                (0, r.jsx)(
                    oK,
                    {
                        label: ed.intl.formatToPlainString(ec.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? ed.intl.formatToPlainString(ec.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? ed.intl.formatToPlainString(ec.default.wxAWNv, { time: oR(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function ua(e) {
    let { env: t, metrics: l } = e;
    return (0, r.jsx)(oK, {
        label: oD(t),
        value: ed.intl.formatToPlainString(ec.default.suAOj9, { calls: o_(l.calls), errors: o_(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function ur(e) {
    let { title: t, metrics: l, limits: n } = e;
    if (null == l || 0 === l.requests)
        return (0, r.jsx)(oH, {
            title: t,
            children: (0, r.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ed.intl.string(ec.default["Noami/"]),
            }),
        });
    let a = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, r.jsxs)(oH, {
        title: t,
        children: [
            (0, r.jsx)(oK, {
                label: ed.intl.string(ec.default.xtD4Zp),
                value: o_(l.requests),
                hint: ed.intl.formatToPlainString(ec.default["7KlGT6"], { time: oR(l.since) }),
            }),
            (0, r.jsx)(oK, { label: ed.intl.string(ec.default.gfRhR3), value: o_(l.errors), critical: l.errors > 0 }),
            i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(oV, {
                              label: ed.intl.string(ec.default.LEJ5r3),
                              used: l.cpu_ms_max,
                              max: n.cpu_ms_per_request,
                              formatValue: oT,
                          }),
                          (0, r.jsx)(oK, {
                              label: ed.intl.string(ec.default.mSKImM),
                              value: oT(a),
                              hint: ed.intl.formatToPlainString(ec.default.JqMU05, {
                                  total: oT(l.cpu_ms_total),
                                  wall: oT(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, r.jsx)(oK, {
                      label: ed.intl.string(ec.default.LEJ5r3),
                      value: ed.intl.string(ec.default["2Ekb2b"]),
                      hint: ed.intl.string(ec.default.G0aq7i),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, r.jsx)(oK, { label: ed.intl.string(ec.default.xvmL1D), value: oT(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, r.jsx)(oK, {
                    label: ed.intl.string(ec.default["4sQYwH"]),
                    value: o_(l.exceeded_cpu),
                    critical: !0,
                }),
            (0, r.jsx)(oK, {
                label: ed.intl.string(ec.default.bQenOy),
                value: o_(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: ed.intl.formatToPlainString(ec.default["5jIZwv"], { limit: `${n.memory_mb} MB` }),
            }),
            null != l.build && (0, r.jsx)(oK, { label: ed.intl.string(ec.default.xgpn4Y), value: oL(l.build) }),
        ],
    });
}
function ui(e) {
    let { status: t } = e,
        { stable: l, preview: n, shared_data: a } = t.storage,
        s = t.worker.limits,
        o = a
            ? [{ key: "shared", label: ed.intl.string(ec.default.V5kbaH), metrics: l }]
            : [
                  { key: "preview", label: ed.intl.string(ec.default["2yLYlG"]), metrics: n },
                  { key: "stable", label: ed.intl.string(ec.default.eiAi57), metrics: l },
              ];
    return (0, r.jsx)(oH, {
        title: ed.intl.string(ec.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: l, metrics: n } = e;
            return null == n
                ? (0, r.jsx)(oK, { label: l, value: "\u2014" }, t)
                : (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)(oK, {
                                  label: ed.intl.formatToPlainString(ec.default.u7kJJ4, { env: l }),
                                  value: oM(n.r2_bytes),
                                  hint: ed.intl.formatToPlainString(
                                      n.r2_truncated ? ec.default.lH0oQw : ec.default.m9h02S,
                                      { count: o_(n.r2_objects) },
                                  ),
                              }),
                              null != n.db_bytes &&
                                  (0, r.jsx)(oV, {
                                      label: ed.intl.formatToPlainString(ec.default.mnbPqt, { env: l }),
                                      used: n.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: oM,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function us(e) {
    let { status: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: oX.Mf,
        children: [
            (0, r.jsx)(oB, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: n }),
            null != t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ur, {
                            title: ed.intl.string(ec.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(ur, {
                            title: ed.intl.string(ec.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(ui, { status: t }),
                        null != t.bot &&
                            (0, r.jsx)(ue, {
                                title: ed.intl.string(ec.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, r.jsx)(ut, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, r.jsx)(ue, {
                                title: ed.intl.string(ec.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, r.jsx)(ul, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, r.jsx)(ue, {
                                title: ed.intl.string(ec.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, r.jsx)(un, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, r.jsx)(ue, {
                                title: ed.intl.string(ec.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, r.jsx)(ua, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, r.jsx)(oJ, { analytics: t.analytics }),
                        (0, r.jsxs)(oH, {
                            title: ed.intl.string(ec.default.fQMpFp),
                            children: [
                                (0, r.jsx)(oK, {
                                    label: ed.intl.string(ec.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? oL(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, r.jsx)(oK, {
                                    label: ed.intl.string(ec.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? oL(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var uo = l(761929),
    uu = l(382541);
let uc = new Map(),
    ud = new Map(),
    uf = 0,
    um = 0;
async function uh(e, t, l) {
    let n = uf,
        a = uc.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < um) return { status: "forbidden" };
    let r = ud.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, uu.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((um = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== uf) return { status: "failed" };
            var l = o.rich;
            for (uc.set(t, l); uc.size > 100;) {
                let e = uc.keys().next();
                if (!0 === e.done) break;
                uc.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    ud.set(t, i);
    let s = await i;
    return (ud.get(t) === i && ud.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function ug() {
    ((uf += 1), uc.clear(), ud.clear(), (um = 0));
}
function ux(e) {
    return "model" === e.kind
        ? "compaction" === e.agent
            ? "context"
            : "subagent" === e.agent
              ? "subagent"
              : "model"
        : "subagent" === e.agent
          ? "delegated"
          : "tool";
}
let up = ["model", "tool", "subagent", "delegated", "context"];
function uv(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(ux(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function uj(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let ub = {
    model: "blurpleLight",
    subagent: "greenLight",
    context: "grayLight",
    tool: "grayMedium",
    delegated: "orangeLight",
};
function uy(e) {
    let { category: t } = e;
    return (0, r.jsx)(o1.v, { text: sY(t), variant: ub[t] });
}
var uk = l(28863);
let uw = ["arguments", "result", "usage", "diagnostics"];
function uN(e) {
    let { label: t, value: l } = e;
    return (0, r.jsxs)("div", {
        className: sZ.wV,
        children: [
            (0, r.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", className: sZ.D6, children: t }),
            (0, r.jsx)("div", { className: sZ.zL, children: l }),
        ],
    });
}
function uA(e) {
    let { label: t, value: l } = e;
    return (0, r.jsx)(uN, {
        label: t,
        value: (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function uS(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: sZ.WA, children: t });
}
function uC(e) {
    let { title: t, children: l } = e,
        n = i.useId();
    return (0, r.jsxs)("section", {
        "aria-labelledby": n,
        className: sZ.xd,
        children: [
            (0, r.jsx)(y.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: n,
                className: sZ.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function uE(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("details", {
        className: sZ.XK,
        children: [
            (0, r.jsxs)("summary", {
                className: sZ.It,
                children: [
                    (0, r.jsx)(tr._, { className: sZ.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, r.jsx)("div", { className: sZ.bG, children: l }),
        ],
    });
}
function uI(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, r.jsx)(uN, {
            label: t.key,
            value: (0, r.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let l =
        null != t.chars
            ? ed.intl.formatToPlainString(ec.default.ib7All, { count: t.chars })
            : null != t.items
              ? ed.intl.formatToPlainString(ec.default.cIqKbA, { count: t.items })
              : null;
    return (0, r.jsx)(uN, {
        label: t.key,
        value: (0, r.jsxs)("div", {
            className: sZ.Kv,
            children: [
                (0, r.jsx)(y.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return ed.intl.string(ec.default["6oDpz5"]);
                            case "content":
                                return ed.intl.string(ec.default.kSGhxQ);
                            default:
                                return ed.intl.string(ec.default.JwGtRz);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == l
                    ? null
                    : (0, r.jsx)(y.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: l,
                      }),
            ],
        }),
    });
}
function uM(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: sZ.QR,
                      children: (0, r.jsx)(o1.v, { text: ed.intl.string(ec.default.LRIpHQ), variant: "orangeLight" }),
                  }),
                  t.map((e) =>
                      (0, r.jsx)(
                          uN,
                          {
                              label: e.key,
                              value: (0, r.jsxs)("div", {
                                  className: sZ.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, r.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: sZ.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, r.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: ed.intl.string(ec.default["+kQ+K3"]),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, r.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? ed.intl.string(ec.default.ijkkUh)
                                                        : ed.intl.formatToPlainString(ec.default.PRt8I0, {
                                                              count: e.chars,
                                                          }),
                                            }),
                                  ],
                              }),
                          },
                          e.key,
                      ),
                  ),
              ],
          });
}
function uT(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : ed.intl.string(
                      "loading" === t.status
                          ? ec.default.SKbSyo
                          : "unavailable" === t.status
                            ? ec.default.tdq5Zn
                            : ec.default["Dw1JW/"],
                  );
    return null == l
        ? null
        : (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-subtle", className: sZ.E7, children: l });
}
function u_(e) {
    let { projectId: t, entry: l, onClose: n, parent: a, onSelect: s, childCount: o } = e,
        u = (function (e) {
            let { childCount: t = 0, hasParent: l = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = new Set();
            if ("tool" === e.kind)
                (((null != e.fields && e.fields.length > 0) || null != e.detailId) && n.add("arguments"),
                    "started" !== e.status && n.add("result"));
            else
                (null != e.promptTokens ||
                    null != e.inputTokens ||
                    null != e.outputTokens ||
                    null != e.cacheReadTokens ||
                    null != e.costUsd ||
                    null != e.stopReason) &&
                    n.add("usage");
            return (
                (l || t > 0 || null != e.turnId || "" !== e.startedAt || "" !== e.id) && n.add("diagnostics"),
                uw.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != a }),
        c = (function (e, t) {
            let [l, n] = i.useState(null);
            if (
                (i.useEffect(() => {
                    if (null == t || null != uc.get(t)) return;
                    let l = new AbortController();
                    return (
                        uh(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = uc.get(t);
            return null != a ? { status: "loaded", rich: a } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        d = "model" === l.kind ? l.model : l.tool,
        f = s3(l.startedAt, "millis"),
        m = ux(l),
        h = i.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        );
    return (0, r.jsxs)(lD.Ch, {
        className: sZ._0,
        onKeyDown: h,
        role: "region",
        "aria-label": ed.intl.formatToPlainString(ec.default.Qiaeyz, { name: d }),
        children: [
            (0, r.jsx)("div", {
                className: sZ.sy,
                children: (0, r.jsxs)("div", {
                    className: sZ.HI,
                    children: [
                        (0, r.jsx)(s1, { status: l.status }),
                        (0, r.jsx)(uy, { category: m }),
                        (0, r.jsx)(y.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: sZ.kc,
                            children: d,
                        }),
                        (0, r.jsx)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: sZ.l5,
                            children: null == l.durationMs ? ed.intl.string(ec.default["2wyRDK"]) : sX(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: sZ.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, r.jsxs)(uC, {
                      title: ed.intl.string(ec.default["G/4JST"]),
                      children: [
                          (l.fields ?? []).map((e) => (0, r.jsx)(uI, { field: e }, e.key)),
                          c?.status === "loaded" && null != c.rich.args
                              ? (0, r.jsx)(uM, { entries: c.rich.args })
                              : null,
                          (0, r.jsx)(uT, { detail: c }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, r.jsxs)(uC, {
                      title: ed.intl.string(ec.default.Dgg25Y),
                      children: [
                          (0, r.jsx)(uA, {
                              label: ed.intl.string(ec.default["U+OQCo"]),
                              value: ed.intl.formatToPlainString(ec.default.ib7All, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, r.jsx)(uA, {
                                    label: ed.intl.string(ec.default["MQYS+n"]),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, r.jsx)(uN, {
                                    label: ed.intl.string(ec.default.t7GJFc),
                                    value: (0, r.jsx)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: ed.intl.string(ec.default.ijkkUh),
                                    }),
                                }),
                          c?.status === "loaded" && null != c.rich.result
                              ? (0, r.jsx)(uM, { entries: c.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, r.jsxs)(uC, {
                      title: ed.intl.string(ec.default.NXmRw1),
                      children: [
                          (0, r.jsxs)(uS, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, r.jsx)(uA, {
                                            label: ed.intl.string(ec.default.iq3T1q),
                                            value: ed.intl.formatToPlainString(ec.default["6GQUgQ"], {
                                                tokens: sQ(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, r.jsx)(uA, {
                                            label: ed.intl.string(ec.default.ZELAZn),
                                            value: ed.intl.formatToPlainString(ec.default.Te7mPn, {
                                                system: sQ(l.systemTokens),
                                                tools: sQ(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: sQ(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, r.jsx)(uA, {
                                            label: ed.intl.string(ec.default["LENc/T"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, r.jsx)(uA, {
                                            label: ed.intl.string(ec.default.ewRHwx),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, r.jsx)(uA, {
                                            label: ed.intl.string(ec.default.heVFQD),
                                            value: ed.intl.formatToPlainString(ec.default.VO3gdd, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, r.jsx)(uA, {
                                            label: ed.intl.string(ec.default.aBw2Vm),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: sZ.E7,
                              children: ed.intl.string(ec.default["foF/Bc"]),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: sZ.E7,
                      children: ed.intl.string(ec.default.o24IFK),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, r.jsx)(uE, {
                      title: ed.intl.string(ec.default["dix/W4"]),
                      children: (0, r.jsxs)(uS, {
                          children: [
                              null == a
                                  ? null
                                  : (0, r.jsx)(uN, {
                                        label: ed.intl.string(ec.default.soPsOJ),
                                        value: (0, r.jsx)(uk.Anchor, {
                                            onClick: () => s(a.id),
                                            children: (0, r.jsx)(y.E, {
                                                tag: "span",
                                                variant: "text-xs/normal",
                                                color: "none",
                                                children: "model" === a.kind ? a.model : a.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, r.jsx)(uA, {
                                        label: ed.intl.string(ec.default.kNZBxr),
                                        value: ed.intl.formatToPlainString(ec.default["6LoCUh"], { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, r.jsx)(uA, { label: ed.intl.string(ec.default.bL1r5J), value: l.turnId }),
                              (0, r.jsx)(uA, { label: ed.intl.string(ec.default.Ndwr7X), value: l.id }),
                              null == f ? null : (0, r.jsx)(uA, { label: ed.intl.string(ec.default.sO8ghW), value: f }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, r.jsx)(uA, { label: ed.intl.string(ec.default.VfYxPF), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(y.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: sZ.Hm,
                                                children: ed.intl.string(ec.default.mSm8iy),
                                            }),
                                            l.schema.map((e) =>
                                                (0, r.jsx)(
                                                    uA,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? ed.intl.formatToPlainString(ec.default["6aSRPA"], {
                                                                  type: e.type,
                                                              })
                                                            : ed.intl.formatToPlainString(ec.default.q2B975, {
                                                                  type: e.type,
                                                              }),
                                                    },
                                                    e.name,
                                                ),
                                            ),
                                        ],
                                    }),
                          ],
                      }),
                  })
                : null,
            (0, r.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sZ.E7,
                children: ed.intl.string(ec.default.FloyTQ),
            }),
        ],
    });
}
let uP = { model: sZ.WI, subagent: sZ.uM, context: sZ.eH, tool: sZ.pw, delegated: sZ.C8 };
function uR(e) {
    let { entries: t } = e,
        l = i.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = ux(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return up.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        n = l.reduce((e, t) => e + t.ms, 0);
    return (0, r.jsxs)("div", {
        className: sZ.M0,
        children: [
            (0, r.jsx)("div", {
                className: sZ.pZ,
                "aria-hidden": !0,
                children:
                    0 === n
                        ? null
                        : l.map((e) => {
                              let { category: t, ms: l } = e;
                              return 0 === l
                                  ? null
                                  : (0, r.jsx)(
                                        "div",
                                        {
                                            className: `${sZ.dL} ${uP[t]}`,
                                            style: { "--custom-conjure-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, r.jsx)("div", {
                className: sZ.z4,
                role: "group",
                "aria-label": ed.intl.string(ec.default["Gioq+C"]),
                children: up.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === n ? 0 : Math.round((a / n) * 100);
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: sZ.fI,
                            children: [
                                (0, r.jsx)("span", { className: `${sZ.A9} ${uP[e]}`, "aria-hidden": !0 }),
                                (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: sY(e) }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ed.intl.formatToPlainString(ec.default["3dQ1ly"], { percent: s }),
                                }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ed.intl.formatToPlainString(ec.default.Ow0k34, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, r.jsx)(y.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: sX(a),
                                      }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function uL(e) {
    let { entry: t, selected: l, tabbable: n, onSelect: a, onKeyDown: i, nested: s } = e,
        o = ux(t),
        u = "model" === t.kind ? t.model : t.tool,
        c =
            "model" === t.kind && null != t.promptTokens
                ? ed.intl.formatToPlainString(ec.default["6GQUgQ"], { tokens: sQ(t.promptTokens) })
                : null != t.durationMs
                  ? sX(t.durationMs)
                  : null;
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: n ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${sZ.nM} ${s ? sZ.A5 : ""} ${"error" === t.status ? sZ.Cr : ""} ${l ? sZ.CZ : ""}`,
        onKeyDown: i,
        onClick: () => a(t.id),
        children: [
            (0, r.jsxs)("div", {
                className: sZ.sU,
                children: [
                    (0, r.jsx)(s1, { status: t.status }),
                    (0, r.jsx)(uy, { category: o }),
                    (0, r.jsx)(y.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: sZ.G9,
                        children: u,
                    }),
                    null == c
                        ? null
                        : (0, r.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: sZ.j2,
                              children: c,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: sZ.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: sZ.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function uD(e) {
    var t;
    let { projectId: l, query: n } = e,
        a = (0, f.yK)([eC.Ay], () => eC.Ay.getTrace(l), [l]),
        s = (0, f.bG)([eC.Ay], () => eC.Ay.getHistoryState(l, "trace"));
    i.useEffect(() => ug, [l]);
    let [o, u] = i.useState(null),
        [c, d] = i.useState(40),
        [m, h] = i.useState(!1),
        g = i.useRef(null),
        x = i.useRef(null),
        p = i.useRef(null),
        v = i.useRef(null),
        j = i.useId(),
        b = i.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        k = i.useCallback((e) => u((t) => (t === e ? null : e)), []),
        w = i.useCallback((e) => {
            let t = g.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, nB.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = i.useCallback((e) => {
            let t = g.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, nB.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        A = (0, uo.A)({
            resizableDomNodeRef: x,
            orientation: uo.R.VERTICAL_TOP,
            getClampedValue: N,
            onElementResize: (e) => d(w(e)),
            onElementResizeStart: () => h(!0),
            onElementResizeEnd: () => h(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        S = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), A(e));
            },
            [A],
        ),
        C = i.useCallback((e) => {
            let t =
                "ArrowUp" === e.key
                    ? 5
                    : "ArrowDown" === e.key
                      ? -5
                      : "Home" === e.key
                        ? 75
                        : "End" === e.key
                          ? -75
                          : null;
            null != t && (e.preventDefault(), d((e) => (0, nB.clamp)(e + t, 25, 75)));
        }, []),
        E = i.useCallback(() => {
            (u(null), b(o));
        }, [o, b]),
        I = i.useMemo(() => uv(a, n), [a, n]),
        M = i.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = null;
                    for (let n of e) {
                        let e = n.turnId ?? null;
                        ((null == l || l.turnId !== e) &&
                            ((l = { turnId: e, entries: [] }),
                            t.push({ turnId: e, entries: l.entries, startedAt: n.startedAt, spanMs: null })),
                            l.entries.push(n));
                    }
                    return t.map((e) => ({
                        ...e,
                        spanMs: (function (e) {
                            let t = 1 / 0,
                                l = -1 / 0;
                            for (let n of e) {
                                let e = Date.parse(n.startedAt);
                                Number.isNaN(e) ||
                                    ((t = Math.min(t, e)), null != n.durationMs && (l = Math.max(l, e + n.durationMs)));
                            }
                            return Number.isFinite(t) && Number.isFinite(l) ? Math.max(0, l - t) : null;
                        })(e.entries),
                    }));
                })(a)
                    .map((e, t) => ({ ...e, index: t, entries: uv(e.entries, n) }))
                    .filter((e) => e.entries.length > 0),
            [a, n],
        ),
        T = uj(I, o),
        _ = T?.kind === "tool" ? uj(a, T.parentId ?? null) : null,
        P = null == T ? 0 : ((t = T.id), a.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        R = I[I.length - 1];
    i.useLayoutEffect(() => {
        if (null != o) return;
        let e = p.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [R, o]);
    let L = i.useCallback(
        (e) => {
            if (0 === I.length) return;
            let t = I.findIndex((e) => e.id === o);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(I.length - 1, t));
                (u(I[l].id), document.getElementById(`trace-${I[l].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? I.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(I.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), b(o));
        },
        [I, o, b],
    );
    return 0 === a.length
        ? (0, r.jsx)("div", {
              className: sZ.uP,
              ref: g,
              children: (0, r.jsx)(o5, {
                  state: s,
                  emptyTitle: ed.intl.string(ec.default["Tpvy/s"]),
                  emptyBody: ed.intl.string(ec.default.J0WcVA),
              }),
          })
        : (0, r.jsxs)("div", {
              className: `${sZ.uP} ${m ? sZ.F4 : ""}`,
              ref: g,
              children: [
                  (0, r.jsxs)("div", {
                      className: sZ.DK,
                      children: [
                          (0, r.jsx)(uR, { entries: a }),
                          (0, r.jsx)(o4, { state: s }),
                          0 === I.length
                              ? (0, r.jsx)("div", {
                                    className: sZ.Ie,
                                    children: (0, r.jsx)(y.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: ed.intl.string(ec.default.tDB4lC),
                                    }),
                                })
                              : (0, r.jsxs)(lD.Ch, {
                                    ref: p,
                                    className: sZ.Ns,
                                    children: [
                                        (0, r.jsx)(o6, { state: s }),
                                        (0, r.jsx)("div", {
                                            ref: v,
                                            id: j,
                                            role: "listbox",
                                            "aria-label": ed.intl.string(ec.default.SGbiNE),
                                            className: sZ.p_,
                                            children: M.map((e) => {
                                                let t = s3(e.startedAt),
                                                    l = ed.intl.formatToPlainString(ec.default.gPwGYA, {
                                                        number: e.index + 1,
                                                    });
                                                return (0, r.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, r.jsxs)("div", {
                                                                className: sZ.mf,
                                                                children: [
                                                                    (0, r.jsx)(y.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: l,
                                                                    }),
                                                                    (0, r.jsx)(y.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, r.jsx)(y.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: sX(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: sZ.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, r.jsx)(
                                                                        uL,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? I[0]?.id),
                                                                            onSelect: k,
                                                                            onKeyDown: L,
                                                                            nested:
                                                                                "tool" === e.kind && null != e.parentId,
                                                                        },
                                                                        e.id,
                                                                    ),
                                                                ),
                                                            }),
                                                        ],
                                                    },
                                                    e.turnId ?? `ungrouped-${e.index}`,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                      ],
                  }),
                  null == T
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": ed.intl.string(ec.default.DtSORy),
                                    "aria-valuenow": Math.round(c),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: sZ.b1,
                                    onPointerDown: S,
                                    onKeyDown: C,
                                }),
                                (0, r.jsx)("div", {
                                    ref: x,
                                    className: sZ.Or,
                                    style: { "--custom-conjure-trace-detail-share": String(c) },
                                    children: (0, r.jsx)(u_, {
                                        projectId: l,
                                        entry: T,
                                        parent: _,
                                        childCount: P,
                                        onSelect: u,
                                        onClose: E,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
function u$(e) {
    let { projectId: t, query: l, onQueryChange: n } = e,
        a = (0, f.yK)([eC.Ay], () => eC.Ay.getTrace(t), [t]),
        s = i.useRef(null),
        o = i.useCallback(() => {
            eu(
                new Blob(
                    [
                        JSON.stringify(
                            {
                                kind: "vibegrations.trace",
                                version: 1,
                                project_id: t,
                                exported_at: new Date().toISOString(),
                                note: 'Redacted developer trace. Tool arguments, results and prompts are reported as sizes and allowlisted technical values only; token counts marked "estimated" are a chars/4 heuristic measured before sending.',
                                entries: a,
                            },
                            null,
                            2,
                        ),
                    ],
                    { type: "application/json" },
                ),
                `vibegrations-trace-${t}.json`,
            ).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [a, t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: sZ.ED,
                children: (0, r.jsx)(o2.I, {
                    query: l,
                    onChange: n,
                    onClear: () => n(""),
                    size: "sm",
                    placeholder: ed.intl.string(ec.default["EY8/Mt"]),
                    "aria-label": ed.intl.string(ec.default["EY8/Mt"]),
                }),
            }),
            (0, r.jsx)(et.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: et.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, r.jsx)(el.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-trace-actions-${t}`,
                        "aria-label": ed.intl.string(ed.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, r.jsx)(en.rX, {
                            children: (0, r.jsx)(en.Dr, {
                                id: "export",
                                label: ed.intl.string(ec.default.WXrPRZ),
                                disabled: 0 === a.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, r.jsx)(t4.K, {
                        ...e,
                        buttonRef: s,
                        icon: t5.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var uz = l(592465);
function uF(e) {
    let { projectId: t, onClose: l } = e,
        [n, a] = i.useState("logs"),
        [s, o] = i.useState(""),
        u = (0, f.bG)([s$.A], () => s$.A.isDeveloper),
        c = (0, f.bG)([sJ], () => sJ.getStatus(t), [t]),
        d = (0, f.bG)([sJ], () => sJ.getFetchState(t), [t]);
    i.useEffect(() => {
        (0, er.R7)(t);
    }, [t]);
    let m = i.useCallback(() => (0, er.R7)(t), [t]),
        h = i.useCallback(() => {
            (0, t8.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: sJ.getStatus(t),
                        last_turn_usage: sJ.getLastTurnUsage(t),
                        last_compaction: sJ.getLastCompaction(t),
                        last_compaction_decline: sJ.getLastCompactionDecline(t),
                        model_calls: sJ.getModelCalls(t),
                        logs: eC.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, v.P)((0, j.o)(ed.intl.string(ec.default.wI6fhl), b.Ck.SUCCESS)),
            );
        }, [t]),
        g = ed.intl.string(ec.default["Q4FN+H"]);
    return (0, r.jsxs)("section", {
        className: uz.nd,
        "aria-label": g,
        children: [
            (0, r.jsxs)(lL.Ay, {
                "aria-label": g,
                toolbar: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(lL.Ay.Icon, {
                            icon: sL.CopyIcon,
                            tooltip: ed.intl.string(ec.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, r.jsx)(lL.Ay.Icon, { icon: L.P, tooltip: ed.intl.string(ed.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, r.jsx)(lL.Ay.ChannelIcon, { icon: E.BugIcon, "aria-hidden": !0 }),
                    (0, r.jsx)(lL.Ay.Title, { children: g }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: uz.rf,
                children: [
                    (0, r.jsxs)(sD.V, {
                        selectedItem: n,
                        type: "top",
                        onItemSelect: (e) => a(e),
                        "aria-label": ed.intl.string(ec.default.RvvWIh),
                        className: uz.vR,
                        children: [
                            (0, r.jsx)(sD.V.Item, { id: "logs", children: ed.intl.string(ec.default["+VRYCm"]) }),
                            (0, r.jsx)(sD.V.Item, { id: "worker", children: ed.intl.string(ec.default["50D0FZ"]) }),
                            (0, r.jsx)(sD.V.Item, { id: "agent", children: ed.intl.string(ec.default.UkbTK1) }),
                            u
                                ? (0, r.jsx)(sD.V.Item, { id: "trace", children: ed.intl.string(ec.default.O6nNjP) })
                                : null,
                            u ? (0, r.jsx)(sD.V.Item, { id: "perf", children: "Perf Trace" }) : null,
                        ],
                    }),
                    "logs" === n
                        ? (0, r.jsx)(o9, { projectId: t })
                        : "worker" === n
                          ? (0, r.jsx)(us, { status: c, fetchState: d, onRefresh: m })
                          : "trace" === n && u
                            ? (0, r.jsxs)("div", {
                                  className: uz.uP,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: uz.XH,
                                          children: (0, r.jsx)(u$, { projectId: t, query: s, onQueryChange: o }),
                                      }),
                                      (0, r.jsx)(uD, { projectId: t, query: s }),
                                  ],
                              })
                            : "perf" === n && u
                              ? (0, r.jsx)(oI, { projectId: t })
                              : (0, r.jsx)(o0, {
                                    projectId: t,
                                    status: c,
                                    fetchState: d,
                                    onRefresh: m,
                                    traceVisible: u,
                                }),
                ],
            }),
        ],
    });
}
var uO = l(333007),
    uU = l(365912),
    uG = l(775121),
    uq = l(873715);
function uB(e) {
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
    let l = {
        ref: e.ref,
        role: "string" == typeof e.role ? e.role : "",
        name: "string" == typeof e.name ? e.name : "",
        tag: e.tag,
        rect: { x: t.x, y: t.y, width: t.width, height: t.height },
    };
    return (
        "string" == typeof e.value && (l.value = e.value),
        "string" == typeof e.path && "" !== e.path && (l.path = e.path),
        "string" == typeof e.marker && (l.marker = e.marker),
        l
    );
}
l(884868);
let uH = Object.freeze({ x: -1, y: -1 });
function uK(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = uB(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var uV = l(470779);
function uW(e) {
    let {
            projectId: t,
            at: l,
            bounds: n,
            kind: a,
            value: s,
            onChange: u,
            onSubmit: c,
            onDismiss: d,
            canSubmit: f,
            closing: m,
            onUploadFile: h,
        } = e,
        {
            drafts: g,
            addFiles: x,
            pasteFiles: p,
            removeDraft: v,
            settled: j,
            takeRefs: b,
        } = ie({ projectId: t, surface: "design", onUploadFile: h }),
        y = i.useRef(null),
        k = (f || g.length > 0) && j && !m,
        N = i.useCallback(() => {
            if (!k) return;
            let e = b();
            c(e.length > 0 ? e : void 0);
        }, [k, b, c]),
        [A, S] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => S(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let C = i.useRef(null),
        [E, I] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = C.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let M = E?.height ?? 44,
        T = n.left + 8,
        _ = n.top + 8,
        P = Math.max(l.x, T),
        R = Math.min(Math.max(l.y + 32 + 4, _), Math.max(_, n.top + n.height - M - 8));
    return (0, r.jsxs)("div", {
        ref: C,
        className: o()(uV.M0, { [uV.ho]: A && !m, [uV.ET]: m }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, r.jsx)("input", {
                ref: y,
                type: "file",
                multiple: !0,
                className: uV.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, r.jsx)(w.m, {
                position: "bottom",
                text: ed.intl.string(ec.default.lgvqSB),
                ariaHidden: !0,
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: uV.tY,
                    onClick: () => y.current?.click(),
                    "aria-label": ed.intl.string(ec.default.lgvqSB),
                    children: (0, r.jsx)(ea.H, { size: "custom", color: "currentColor", className: uV.WW }),
                }),
            }),
            (0, r.jsx)(l8.y, {
                autoFocus: !0,
                rows: 1,
                className: uV.hF,
                value: s,
                placeholder: "" === a ? ed.intl.string(ec.default.MPPV1Q) : `Edit ${a}`,
                "aria-label": ed.intl.string(ec.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: m ? void 0 : p,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), N());
                },
            }),
            g.length > 0
                ? (0, r.jsx)("div", {
                      className: uV.ZO,
                      children: g.map((e) => (0, r.jsx)(it, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var uJ = l(192888);
function uX(e, t) {
    return (0, uJ.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(uK, () => ({ status: "failed" }));
}
var uQ = l(108308);
let uY = { x: 25, y: 21 };
function uZ(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function u0(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function u1(e, t, l, n) {
    let a = u0(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function u2(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function u3(e) {
    let t = e.snapshot ?? e.results.find((e) => null != e.snapshot)?.snapshot;
    if (null == t || !Array.isArray(t.elements)) return null;
    let l = t.viewport?.width,
        n = t.viewport?.height;
    return "number" != typeof l || "number" != typeof n || l < 1
        ? null
        : {
              elements: t.elements,
              viewport: { width: l, height: n },
              url: "string" == typeof t.url ? t.url : "",
              title: "string" == typeof t.title ? t.title : "",
          };
}
function u4(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, resolveIframe: a, toggleRef: s } = e,
        o = null != l && l === n ? t : null,
        { active: u, annotations: c } = e9(o),
        d = (0, tx.Zv)(o),
        m = (0, te.useHasAnyModalOpen)(),
        h = (0, f.bG)([tq.default], () => tq.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, p] = i.useState(null),
        [v, j] = i.useState(null),
        [b, k] = i.useState(!1),
        [w, N] = i.useState(!1),
        [A, C] = i.useState(null),
        [E, I] = i.useState(!1),
        M = i.useRef(null),
        T = i.useRef(null),
        _ = i.useRef(null),
        [R, L] = i.useState(null),
        [D, $] = i.useState(!1),
        [z, F] = i.useState(null),
        [O, U] = i.useState(null),
        G = i.useRef(!1),
        [q, B] = i.useState(!1),
        [H, K] = i.useState(null),
        V = u && !d && !m;
    null == z || (V && z.projectId === o) || F(null);
    let W = z?.projectId ?? null;
    (i.useEffect(() => {
        if (null != W) return () => nN(W, "design");
    }, [W]),
        i.useEffect(() => {
            if (!V) return;
            function e() {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.getBoundingClientRect();
                    return t.width < 1 || t.height < 1
                        ? null
                        : { left: t.left, top: t.top, width: t.width, height: t.height };
                })(a());
                p((t) => (uZ(t, e) ? t : e));
            }
            e();
            let t = window.setInterval(e, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    (window.clearInterval(t), window.removeEventListener("resize", e));
                }
            );
        }, [V, a]),
        i.useEffect(() => {
            if (!V || null == o) return;
            let e = !0,
                t = a();
            if (null == t) return void N(!0);
            (k(!0), N(!1));
            let l = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, uq.J)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? u3(t.response) : null;
                        null == l ? N(!0) : (j(l), e6(o, { url: l.url, title: l.title, viewport: l.viewport }));
                    },
                    () => {
                        e && (k(!1), N(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [V, a, o]));
    let J = i.useRef(null);
    (i.useEffect(() => {
        if (!V || null == x || null == o) return;
        if (null == v) {
            J.current = x;
            return;
        }
        if (uZ(J.current, x)) return;
        let e = window.setTimeout(() => {
            let e = a();
            if (null == e) return;
            J.current = x;
            let t = [];
            for (let e = 0; e < c.length; e += 24) t.push(c.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, uq.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let l;
                        if ("completed" !== e.status || !Z.current) return;
                        let n = u3(e.response);
                        null != n && (j(n), e6(o, { url: n.url, title: n.title, viewport: n.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, l) => {
                            let n = t[l];
                            if (null == n || "locate" !== e.action || !e.ok) return;
                            let r = uB(e.element);
                            null != r && a.set(n.id, r);
                        }),
                            (l = e3(o)).active &&
                                0 !== a.size &&
                                e4(o, {
                                    ...l,
                                    annotations: l.annotations.map((e) => {
                                        let t = a.get(e.id);
                                        return null == t ? e : { ...e, target: t };
                                    }),
                                }));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [V, x, v, c, o, a]),
        i.useEffect(() => {
            if (!V)
                return () => {
                    (C(null), F(null), K(null), j(null));
                };
        }, [V]));
    let X = i.useRef(null),
        Q = i.useRef(null),
        Y = i.useRef(!1),
        Z = i.useRef(!1);
    i.useEffect(() => {
        ((Z.current = V), V || ((X.current = null), (Q.current = null), (_.current = null), I(!1)));
    }, [V]);
    let ee = i.useCallback(
            function e() {
                if (Y.current) return;
                let t = X.current;
                if (null == t) return;
                X.current = null;
                let l = a();
                null != l &&
                    ((Y.current = !0),
                    uX(l, t).then((t) => {
                        if (((Y.current = !1), Z.current)) {
                            if ("picked" !== t.status || ce(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? C(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = eW(t.target);
                                (L((t) => (u9(t, e) ? t : e)),
                                    C((e) => {
                                        var l;
                                        return ((l = t.target),
                                        null == e || null == l
                                            ? e === l
                                            : e.ref === l.ref &&
                                              e.rect.x === l.rect.x &&
                                              e.rect.y === l.rect.y &&
                                              e.rect.width === l.rect.width &&
                                              e.rect.height === l.rect.height)
                                            ? e
                                            : t.target;
                                    }));
                            }
                            e();
                        }
                    }));
            },
            [a],
        ),
        et = i.useCallback(() => {
            if (null == z) return;
            let e = !G.current;
            (U({ at: z.at, label: z.label, draft: z.draft, instant: e }), B(e), F(null));
        }, [z]);
    (i.useEffect(() => {
        if (!q) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => B(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [q]),
        i.useEffect(() => {
            if (null == O) return;
            let e = setTimeout(() => U(null), u7);
            return () => clearTimeout(e);
        }, [O]));
    let el = null == v || null == x || v.viewport.width < 1 ? 1 : x.width / v.viewport.width,
        en = null != v || w,
        ea = i.useMemo(() => v?.elements ?? [], [v]),
        ei = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ei.current = { rect: x, scale: el };
    }, [x, el]);
    let es = i.useCallback(
            (e, t, l) => {
                null != o &&
                    (nN(o, "design"),
                    K(null),
                    (G.current = !1),
                    F({ projectId: o, target: e, anchor: t, draft: "", at: l, label: eW(e) }));
            },
            [o],
        ),
        eo = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / el, y: (e.clientY - t.top) / el }), [el]),
        eu = i.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = M.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let l = T.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(eu);
    let ef = i.useCallback(
            (e) => {
                if (null == x || null != H) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), eu(), I(!0), null != z)) {
                    (Math.abs(e.clientX - z.at.x) > u8 || Math.abs(e.clientY - z.at.y) > u8) && (G.current = !0);
                    return;
                }
                if (!en) return void C(null);
                let t = eo(e, x);
                if (D) {
                    let e = (function (e, t, l) {
                            let n = null,
                                a = 1 / 0;
                            for (let r of e) {
                                let { x: e, y: i, width: s, height: o } = r.rect;
                                if (s < 1 || o < 1 || t < e || l < i || t > e + s || l > i + o) continue;
                                let u = s * o;
                                u < a && ((n = r), (a = u));
                            }
                            return n;
                        })(ea, t.x, t.y),
                        l = null != e && ce(e, x, el) ? null : e;
                    if (null != l) {
                        let e = eW(l);
                        L((t) => (u9(t, e) ? t : e));
                    }
                    C((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = Q.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((Q.current = l), (X.current = l), ee());
            },
            [x, el, en, eo, D, ea, z, H, eu, ee],
        ),
        em = null == H ? null : c.find((e) => e.id === H.id),
        eh = V && (E || z?.target.marker != null || em?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = a();
                null != e && uX(e, uH);
            };
    }, [eh, a]);
    let eg = i.useCallback(() => {
        (I(!1), C(null), (Q.current = null), (X.current = null));
    }, []);
    i.useEffect(() => {
        if (!V || !E || !en || D || null != z || null != H) return;
        let e = _.current,
            { rect: t, scale: l } = ei.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((Q.current = n), (X.current = n), ee());
    }, [V, E, en, D, z, H, ee]);
    let ex = i.useCallback(
            (e) => {
                if (null != z || null != H) {
                    (et(), K(null));
                    return;
                }
                if (null == A || null == x) return;
                let t = eo(e, x);
                es(
                    A,
                    (function (e, t, l) {
                        let { x: n, y: a, width: r, height: i } = e.rect;
                        return r < 1 || i < 1
                            ? eK
                            : { x: Math.min(1, Math.max(0, (t - n) / r)), y: Math.min(1, Math.max(0, (l - a) / i)) };
                    })(A, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [A, x, eo, z, H, es, et],
        ),
        ep = i.useCallback(() => {
            null != o && (C(null), e5(o));
        }, [o]),
        ev = i.useCallback(() => {
            null != o &&
                (null != z
                    ? et()
                    : H?.confirmingRemove === !0
                      ? K({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? K(null)
                        : ep());
        }, [o, z, H, et, ep]),
        ej = i.useRef(ev),
        eb = i.useRef(ep);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = ep));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (V)
            return (
                uG.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        uG.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            (0, tI.vq)(t) &&
                ey.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, uU.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                eb.current();
        }
    }, [V, s]);
    let ek = i.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ev());
                    return;
                }
                if (null != z || null != H || 0 === ea.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == A ? -1 : ea.findIndex((e) => e.ref === A.ref);
                    C(ea[(l + (t ? 1 : -1) + ea.length) % ea.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    es(A, eK, { x: (x?.left ?? 0) + A.rect.x * el, y: (x?.top ?? 0) + A.rect.y * el }));
            },
            [o, z, H, ea, A, es, ev, x, el],
        ),
        ew = i.useCallback(
            (e) => {
                null == o ||
                    null == z ||
                    ((eV(z.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, er.dv)(
                            o,
                            (function (e, t) {
                                let { kind: l, name: n } = eW(e),
                                    a = [l, n].filter((e) => "" !== e).join(": ");
                                return `${eQ}${a}${eY}${eX(e)}
${t.trim()}`;
                            })(z.target, z.draft),
                            e,
                        ),
                        et(),
                        C(null)));
            },
            [o, z, et],
        ),
        eN = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, er.vX)(o, e)), [o]),
        eA = i.useCallback(() => {
            if (null != o && null != H && null != g && eV(H.draft)) {
                var e, t;
                let l, n;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (n = (l = e3(o)).annotations.find((t) => t.id === e)) &&
                        e7(n, g) &&
                        e4(o, { ...l, annotations: l.annotations.map((l) => (l.id === e ? { ...l, comment: t } : l)) }),
                    K({ ...H, editing: !1 }));
            }
        }, [o, H, g]),
        eS = i.useCallback(() => {
            if (null != o && null != H && null != g) {
                var e;
                let t, l;
                ((e = H.id),
                    null != (l = (t = e3(o)).annotations.find((t) => t.id === e)) &&
                        e7(l, g) &&
                        e4(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [o, H, g]),
        eC = u
            ? b
                ? ed.intl.string(ec.default["Eb/YV9"])
                : w
                  ? ed.intl.string(ec.default.FD30bh)
                  : ed.intl.formatToPlainString(ec.default.dTSqLF, { count: c.length })
            : "",
        eE = V && null != x,
        eI = E && null == H,
        eM = z?.target ?? em?.target ?? null,
        eT = z ?? O,
        e_ = z ?? (O?.instant === !0 ? null : O),
        eP =
            null != em && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = u2(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(u1(em.target, em.anchor, x, el), x)
                : null;
    return (
        i.useEffect(() => {
            let e = a();
            if (em?.target.marker == null || null == e) return;
            let { target: t, anchor: l } = em;
            uX(e, { x: Math.round(t.rect.x + t.rect.width * l.x), y: Math.round(t.rect.y + t.rect.height * l.y) });
        }, [em, a]),
        (0, uO.createPortal)(
            (0, r.jsxs)("div", {
                ref: ey,
                className: uQ.Li,
                children: [
                    (0, r.jsx)("div", {
                        className: uQ.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eC,
                    }),
                    eE
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: uQ.MT,
                                      style: { left: x.left, top: x.top, width: x.width, height: x.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": ed.intl.string(ec.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: eg,
                                      onClick: ex,
                                      onKeyDown: ek,
                                  }),
                                  null != A && null == A.marker && null == z && null == H
                                      ? (0, r.jsx)(ct, { box: u0(A, x, el) })
                                      : null,
                                  (0, r.jsx)("div", {
                                      ref: M,
                                      className: uQ.aZ,
                                      children: (0, r.jsx)("div", {
                                          className: uQ.xz,
                                          "data-shown": null != A && null == H && null == z ? "" : void 0,
                                          "data-instant": q ? "" : void 0,
                                          children: (0, r.jsxs)(y.E, {
                                              variant: "text-xs/medium",
                                              className: uQ.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, r.jsx)("span", { className: uQ.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, r.jsxs)("span", {
                                                            className: uQ.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      ref: T,
                                      className: uQ.Y,
                                      children: eI ? (0, r.jsx)("div", { className: uQ.u }) : null,
                                  }),
                                  null == e_
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: uQ.aZ,
                                            style: {
                                                transform: `translate3d(${e_.at.x + 20}px, ${e_.at.y + 20}px, 0)`,
                                            },
                                            children: (0, r.jsx)("div", {
                                                className: uQ.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == z ? "" : void 0,
                                                children: (0, r.jsxs)(y.E, {
                                                    variant: "text-xs/medium",
                                                    className: uQ.Ux,
                                                    children: [
                                                        (0, r.jsx)("span", {
                                                            className: uQ.Tl,
                                                            children: e_.label.kind,
                                                        }),
                                                        "" === e_.label.name
                                                            ? null
                                                            : (0, r.jsxs)("span", {
                                                                  className: uQ.kh,
                                                                  children: [" ", e_.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, r.jsx)("div", { className: uQ.D0, style: u0(eM, x, el), "aria-hidden": !0 })
                                      : null,
                                  c.map((e, t) => {
                                      let l = u1(e.target, e.anchor, x, el),
                                          n = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, r.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: uQ.xL,
                                              style: { ...u2(l, x), width: 24, height: 24 },
                                              "aria-label": ed.intl.formatToPlainString(ec.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: eJ(e.target),
                                              }),
                                              "aria-expanded": H?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == z && K(n);
                                              },
                                              onFocus: () => {
                                                  null == z && K(n);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), et(), K(n));
                                              },
                                              children: (0, r.jsx)(u5, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == o
                                      ? null
                                      : (0, r.jsx)(uW, {
                                            projectId: o,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: x,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != z && eV(eT.draft),
                                            onChange: (e) => {
                                                null != z && F({ ...z, draft: e });
                                            },
                                            onSubmit: ew,
                                            onDismiss: et,
                                            onUploadFile: eN,
                                            closing: null == z,
                                        }),
                                  null != em && null != H && null != eP
                                      ? (0, r.jsxs)(u6, {
                                            point: eP,
                                            frame: x,
                                            authorId: em.authorId,
                                            title: eJ(em.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                H.confirmingRemove ? K({ ...H, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                H.editing || H.confirmingRemove || K(null);
                                            },
                                            children: [
                                                H.editing
                                                    ? (0, r.jsx)(P.f, {
                                                          autoFocus: !0,
                                                          label: ed.intl.string(ec.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: H.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => K({ ...H, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eA());
                                                          },
                                                      })
                                                    : (0, r.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: uQ.aC,
                                                          children: em.comment,
                                                      }),
                                                e7(em, g)
                                                    ? (0, r.jsx)("div", {
                                                          className: uQ.eB,
                                                          children: H.confirmingRemove
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(y.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: uQ.nv,
                                                                            children: ed.intl.string(ec.default.wOHvts),
                                                                        }),
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ed.intl.string(ec.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...H, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ed.intl.string(ec.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eS,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: ed.intl.string(ec.default.friIzR),
                                                                            onClick: () =>
                                                                                K({
                                                                                    ...H,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        H.editing
                                                                            ? (0, r.jsx)(S.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !eV(H.draft),
                                                                                  text: ed.intl.string(
                                                                                      ec.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, r.jsx)(S.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: ed.intl.string(
                                                                                      ec.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      K({
                                                                                          ...H,
                                                                                          editing: !0,
                                                                                          draft: em.comment,
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
function u5(e) {
    let { authorId: t } = e,
        l = (0, f.bG)([tq.default], () => tq.default.getUser(t), [t]);
    return (0, r.jsx)(aW.eu, {
        src: null == l ? null : aQ.Ay.getUserAvatarURL(l),
        size: aJ._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function u6(e) {
    let t,
        l,
        n,
        a,
        s,
        o,
        { point: u, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = i.useRef(null),
        v = i.useRef(null),
        [j, b] = i.useState(uY);
    i.useLayoutEffect(() => {
        let e = p.current?.getBoundingClientRect(),
            t = v.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let l = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        b((e) => (0.5 > Math.abs(e.x - l.x) && 0.5 > Math.abs(e.y - l.y) ? e : l));
    }, []);
    let {
            left: k,
            top: w,
            originX: N,
            originY: A,
        } = ((l = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (a = Math.max((n = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), l)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, n), a)), originX: u.x - s, originY: u.y - o }),
        S = { left: k, top: w, "--custom-conjure-card-origin-x": `${N}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, r.jsxs)("div", {
        ref: p,
        className: uQ.Nr,
        style: S,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, r.jsxs)("div", {
                className: uQ.MY,
                children: [
                    (0, r.jsx)("span", { ref: v, className: uQ.ip, children: (0, r.jsx)(u5, { authorId: d }) }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: uQ.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: uQ.zI, children: x }),
        ],
    });
}
let u7 = 300,
    u8 = 2;
function u9(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function ce(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function ct(e) {
    let { box: t } = e;
    return (0, r.jsx)("div", { className: uQ.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var cl = l(659723),
    cn = l(697744),
    ca = l(130324);
function cr(e) {
    let t = (0, cn.c)(),
        { events: l, getDuration: n } = t;
    return (
        i.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function a() {
                    ((e = null), null != n()) ? l.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(a));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [l, n]),
        i.useEffect(() => {
            let t = setInterval(l.onMouseEnter, e);
            return () => clearInterval(t);
        }, [l, e]),
        t
    );
}
function ci(e) {
    let { className: t } = e,
        { Component: l, events: n } = cr(3e4);
    return (0, r.jsxs)("div", {
        className: t,
        onMouseEnter: n.onMouseEnter,
        onMouseLeave: n.onMouseLeave,
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, r.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: ca.o,
                children: ed.intl.string(ec.default.AyiQEp),
            }),
        ],
    });
}
var cs = l(251363),
    co = l(944142),
    cu = l(532247),
    cc = l(501628);
function cd(e) {
    let { progress: t } = e,
        { Component: l } = cr(1500),
        n = J.Q_.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, r.jsx)("div", {
                className: cc.Ci,
                children: Array.from({ length: t.stepCount }, (e, l) =>
                    (0, r.jsx)(
                        "span",
                        {
                            className: cc.PM,
                            "data-state": l < t.stepIndex ? "done" : l === t.stepIndex ? "current" : "todo",
                        },
                        l,
                    ),
                ),
            }),
            n && null != t.stepLabel
                ? (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function cf(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, surface: a } = e,
        s = null != t && null != l && l === n,
        o = (0, f.bG)([co.A], () => (s ? co.A.getLiveReload(t) : null), [s, t]),
        u = (0, B.A)(l, a)?.id ?? null,
        c = o?.phase ?? null,
        d = (function (e, t) {
            let l = (0, cu.dv)(e),
                [n, a] = i.useState(null),
                [r, s] = i.useState(l);
            r !== l && (s(l), a(null == l ? (0, cu.QP)(e, r) : null));
            let o = (0, f.bG)(
                    [tS.A],
                    () => {
                        let e = tS.A.getFrame(t);
                        return (0, tR.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [t],
                ),
                u = i.useRef(o),
                c = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((u.current = o), o && (c.current = !0));
                }, [o]),
                i.useEffect(() => {
                    if (null == n) return;
                    function e() {
                        return a(null);
                    }
                    function l(l) {
                        null != l.target && l.target === (0, cs.o)(null, t) && e();
                    }
                    ((c.current = u.current), document.addEventListener("load", l, !0));
                    let r = window.setTimeout(() => {
                            c.current || e();
                        }, 4e3),
                        i = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", l, !0), window.clearTimeout(r), window.clearTimeout(i));
                    };
                }, [n, t]),
                n
            );
        })(c, u),
        m = (0, cu.h_)(c, o?.step ?? null, d);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.A, { tag: "div", role: "status", "aria-live": "polite", children: m?.title ?? "" }),
            null != m
                ? (0, r.jsx)("div", {
                      className: cc.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, r.jsx)(cd, { progress: m }),
                  })
                : null,
        ],
    });
}
var cm = l(343030),
    ch = l(317608),
    cg = l(206600),
    cx = l(964404);
let cp = { width: 1 / 0, height: 1 / 0 };
function cv(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cp;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var cj = l(702083);
function cb(e) {
    let { children: t } = e,
        { mobile: l, landscape: n } = (0, f.cf)([tg.A], () => ({
            mobile: tg.A.isBuilderPreviewMobile(),
            landscape: tg.A.isBuilderPreviewLandscape(),
        })),
        a = i.useRef(null),
        [s, u] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = a.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = { width: e.clientWidth, height: e.clientHeight };
            u((e) => (e?.width === t.width && e.height === t.height ? e : t));
        }
        t();
        let l = new ResizeObserver(t);
        return (l.observe(e), () => l.disconnect());
    }, []);
    let c = null != s && s.width > 0 ? s : null,
        d = l ? cv(n, c ?? void 0) : null;
    return (0, r.jsx)("div", {
        ref: a,
        className: o()(cj.dw, { [cj.PQ]: null != d }),
        children: (0, r.jsx)("div", { className: o()(cj.R9, { [cj.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var cy = l(347927);
function ck(e) {
    let { title: t, body: l, wide: n = !1, children: a } = e;
    return (0, r.jsxs)("div", {
        className: o()(cy.Bf, n && cy.Qx),
        children: [
            (0, r.jsxs)("div", {
                className: cy.Ux,
                children: [
                    (0, r.jsx)(M.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, r.jsx)(y.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            a,
        ],
    });
}
var cw = l(957272);
function cN(e) {
    let { applicationId: t, surface: l, frameOverlay: n } = e,
        { frame: a, state: s } = (0, cg.A)({ applicationId: t, surface: l }),
        o = (0, tR.VA)(t, l);
    switch (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tS.A.getFrame(e);
                    if (null == t || tC.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT)) return;
                    let l = tS.A.getMainFrame()?.id === e;
                    t.intent === tR.sV.MAIN
                        ? (l || q.A.promoteFrame(e), q.A.resetFrameLayoutModes(e))
                        : l && q.A.clearMainFrameSlot();
                })(o),
                () => {
                    let e;
                    null != (e = tS.A.getFrame(o)) &&
                        ((0, tR.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        cx.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tR.sV.INLINE && q.A.promoteFrame(o),
                              q.A.updateFrameLayoutMode({ frameId: o, layoutMode: tR.y0.PIP }))
                            : e.intent === tR.sV.MAIN && q.A.demoteMainFrame(o));
                }
            ),
            [o],
        ),
        s)
    ) {
        case cg.n.Launched: {
            let e = (0, r.jsx)(ch.A, { frameId: a.id, level: cm.A.WithinAppContent, className: cw.Z7, overlay: n });
            return (0, tj.Q5)(l) ? (0, r.jsx)(cb, { children: e }) : e;
        }
        case cg.n.RenderingElsewhere:
            return (0, r.jsx)("div", {
                className: cw.qs,
                children: (0, r.jsx)(ck, {
                    title: ed.intl.string(ec.default["9kpdo7"]),
                    body: ed.intl.string(ec.default.iIA8Nj),
                }),
            });
        case cg.n.NoApplication:
            return (0, r.jsx)(ci, { className: cw.qs });
        case cg.n.DoesNotSupportSurface:
            return (0, r.jsx)("div", {
                className: cw.qs,
                children: (0, r.jsx)(ck, {
                    title: ed.intl.string(ec.default["7k4GyN"]),
                    body: ed.intl.string(ec.default.zdIy3R),
                }),
            });
        case cg.n.Error:
            return (0, r.jsxs)("div", {
                className: cw.qs,
                children: [
                    (0, r.jsx)(M.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ed.intl.string(ec.default.lTPbnG),
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: cw.tj,
                        children: ed.intl.string(ec.default.e6GiAZ),
                    }),
                ],
            });
        case cg.n.AwaitingLaunch:
        case cg.n.Loading:
            return (0, r.jsx)("div", { className: cw.qs, children: (0, r.jsx)(A.y, {}) });
    }
}
var cA = l(308528),
    cS = l(334738),
    cC = l(688438),
    cE = l(355622),
    cI = l(531685),
    cM = l(365971),
    cT = l(703462);
function c_(e) {
    let { message: t } = e;
    return (0, r.jsxs)("div", {
        className: cT.f,
        children: [
            (0, r.jsx)(av.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function cP() {
    return (0, r.jsx)("div", { className: cT.f, children: (0, r.jsx)(A.y, {}) });
}
function cR(e) {
    let t,
        l,
        { previewApplicationId: n } = e,
        { data: a, isLoading: s } = (0, O.YY)(n),
        o = a?.bot?.id ?? null,
        u = (0, f.bG)([X.A], () => {
            if (null == o) return null;
            let e = X.A.getDMFromUserId(o);
            return null != e ? X.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        i.useEffect(() => {
            null != t && cA.A.preload(eb.ME, t);
        }, [t]),
        (l = (0, f.bG)([cI.A], () => cI.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, cM.Xg)();
            return (
                (0, cS.yl)(t, e),
                () => {
                    (0, cS.dm)(t, e);
                }
            );
        }, [t, l]));
    let [c, d] = i.useState(null),
        m = null != o && c === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            cA.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || d(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s && null == a)
        ? (0, r.jsx)(cP, {})
        : null == o || m
          ? (0, r.jsx)(c_, { message: ed.intl.string(ec.default["VP/O8s"]) })
          : null == u
            ? (0, r.jsx)(cP, {})
            : (0, r.jsx)("div", {
                  className: cT.g,
                  children: (0, r.jsx)(cC.A, { channel: u, guild: null, chatInputType: cE.oU.SIDEBAR }, u.id),
              });
}
var cL = l(887909),
    cD = l(570962),
    c$ = l(998475);
function cz(e) {
    let {
        label: t,
        title: l,
        subtitle: n,
        header: a,
        body: i,
        actions: s,
        nextStep: u,
        appDetails: c,
        hasContentBackground: d,
        noPadding: f,
        obscured: m,
    } = (0, cL.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, r.jsxs)("section", {
        className: c$.Nr,
        "aria-label": t,
        children: [
            (0, r.jsx)("div", {
                className: c$.rf,
                children: (0, r.jsx)(cD.A, {
                    obscured: !0 === m,
                    children: (0, r.jsxs)("div", {
                        className: c$.Gq,
                        children: [
                            null != l
                                ? (0, r.jsxs)("div", {
                                      className: c$.z3,
                                      children: [
                                          (0, r.jsx)(M.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: l,
                                          }),
                                          null != n
                                              ? (0, r.jsx)(y.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: n,
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            a,
                            (0, r.jsxs)("div", {
                                className: o()(c$.Qs, d ? c$.cw : null, f ? c$.pN : null),
                                children: [i, null == u ? c : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, r.jsx)("div", {
                      className: c$.o1,
                      children: s.map((e, t) => (0, r.jsx)(S.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var cF = l(409478),
    cO = l(652227);
function cU(e) {
    let {
        applicationId: t,
        previewApplicationId: l,
        surface: n,
        previewReady: a,
        previewGate: i,
        availability: s,
        activeMode: o,
        widgetApplicationId: u,
        frameOverlay: c,
    } = e;
    if (i?.type === "checking") return (0, r.jsx)("div", { className: cO.q, children: (0, r.jsx)(A.y, {}) });
    if (i?.type === "permissions")
        return (0, r.jsx)("div", {
            className: cO.q,
            children: null == i.authorizeProps ? (0, r.jsx)(A.y, {}) : (0, r.jsx)(cz, { ...i.authorizeProps }),
        });
    if (!a) return (0, r.jsx)(ci, { className: cO.q });
    if (null == t) return null;
    let d = s.showModeSwitch && null != o ? { role: "tabpanel", id: (0, t$.z3)(o), "aria-label": (0, t$.kZ)(o) } : {};
    return (0, r.jsxs)("div", {
        className: cO.R,
        ...d,
        children: [
            (0, tv.yf)(s, o) ? (0, r.jsx)(cN, { applicationId: t, surface: n, frameOverlay: c }) : null,
            "widget" === o && null != u
                ? "unavailable-authorization-revoked" === s.profileState
                    ? (0, r.jsx)("div", {
                          className: cO.q,
                          children: (0, r.jsx)(ck, {
                              wide: !0,
                              title: ed.intl.string(ec.default["08U+YO"]),
                              body: ed.intl.string(ec.default.pKBfrc),
                          }),
                      })
                    : (0, r.jsx)(cF.A, { applicationId: u })
                : null,
            "bot" === o && null != l ? (0, r.jsx)(cR, { previewApplicationId: l }) : null,
        ],
    });
}
var cG = l(175841),
    cq = l(750506),
    cB = l(867193),
    cH = l(417760);
function cK(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function cV(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function cW(e) {
    let { phase: t, projectId: l, onOpenPublishedApp: n, compact: a } = e,
        { stop: s, stopping: u } = (function (e) {
            let t = (0, f.bG)([tH.Ay], () => null != e && tH.Ay.isThinking(e)),
                [l, n] = i.useState(!1),
                [a, r] = i.useState(t);
            (t !== a && (r(t), t || n(!1)),
                i.useEffect(() => {
                    if (!l) return;
                    let e = setTimeout(() => n(!1), 5e3);
                    return () => clearTimeout(e);
                }, [l]));
            let s = i.useCallback(() => {
                null != e && (n(!0), (0, er.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: l };
        })(l),
        c = (0, tx.CU)(l),
        d = "controlling" === t,
        m = ed.intl.string(d ? (c ? ec.default["VJW/5P"] : ec.default["+hD2Iz"]) : ec.default["h+i1r9"]),
        h =
            null != n
                ? (0, r.jsx)(S.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: ed.intl.string(ec.default["1NcO7H"]),
                      onClick: n,
                  })
                : null,
        g =
            null != s
                ? (0, r.jsx)(S.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ed.intl.string(ec.default.oU59sU),
                      loading: u,
                      onClick: s,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return a
        ? (0, r.jsxs)("div", {
              className: o()(cH.M0, cH.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, r.jsx)(sh.i, { size: 12, color: "currentColor" })
                      : (0, r.jsx)(cG.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "none", className: cH.ID, children: m }),
                  d ? (0, r.jsx)(N.A, { children: ed.intl.string(ec.default.fg1sor) }) : null,
                  d ? (0, r.jsxs)("div", { className: cH.lC, children: [h, g] }) : null,
              ],
          })
        : (0, r.jsxs)("div", {
              className: cH.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, r.jsxs)("div", {
                      className: cH.sp,
                      children: [
                          (0, r.jsx)(cG.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, r.jsx)(sh.i, { size: 12, color: "currentColor" }) : null,
                          (0, r.jsxs)("div", {
                              className: cH.f4,
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: cH.w9,
                                      children: m,
                                  }),
                                  d
                                      ? (0, r.jsx)(y.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: cH.Rb,
                                            children: ed.intl.string(ec.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, r.jsxs)("div", { className: cH.lC, children: [h, g] }) : null,
              ],
          });
}
function cJ(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: n,
            resolveTarget: a,
            frameId: s,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, tx.Zv)(null != l && l === n ? t : null),
        c = (function (e) {
            let [t, l] = i.useState(e),
                [n, a] = i.useState(!1);
            return (e !== t && (l(e), a(!e)),
            i.useEffect(() => {
                if (!n) return;
                let e = setTimeout(() => a(!1), 2400);
                return () => clearTimeout(e);
            }, [n]),
            e)
                ? "controlling"
                : n
                  ? "handoff"
                  : "idle";
        })(u),
        d = (0, te.useHasAnyModalOpen)(),
        f = tP(s);
    i.useEffect(() => {
        u &&
            f &&
            null != s &&
            (function (e) {
                if (!tT(e)) return;
                let t = tM(e);
                null != t && (0, tE.sP)(t);
            })(s);
    }, [u, f, s]);
    let [m, h] = i.useState(null),
        [g, x] = i.useState(null),
        [p, v] = i.useState(null),
        j = "idle" !== c;
    i.useEffect(() => {
        if (!j) return;
        function e() {
            let e = cK(a());
            h((t) => (cV(t, e) ? t : e));
            let t = null == g ? null : cK(g);
            (v((e) => (cV(e, t) ? e : t)), null != g && (0, cB.C)(g.getBoundingClientRect().height));
        }
        e();
        let t = window.setInterval(e, 250);
        window.addEventListener("resize", e);
        let l = null == g ? null : new ResizeObserver(e);
        return (
            null != g && l?.observe(g),
            () => {
                (window.clearInterval(t),
                    window.removeEventListener("resize", e),
                    l?.disconnect(),
                    null != g && (0, cB.C)(0));
            }
        );
    }, [j, a, g]);
    let b = "idle" !== c && null != m,
        y = b && "controlling" === c && !d,
        k = null != m && m.width < 420,
        w = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height },
        N =
            null == m
                ? void 0
                : (function (e, t) {
                      if (null == t) return { left: e.left, top: e.top, width: e.width, height: e.height };
                      let l = Math.min(e.left, t.left),
                          n = Math.min(e.top, t.top);
                      return {
                          left: l,
                          top: n,
                          width: Math.max(e.left + e.width, t.left + t.width) - l,
                          height: Math.max(e.top + e.height, t.top + t.height) - n,
                      };
                  })(m, p),
        A = (function () {
            let [e] = i.useContext(cq.uY),
                [t] = i.useState(() => document.createElement("div"));
            return (
                i.useLayoutEffect(() => {
                    if (null != e) return (e.prepend(t), () => t.remove());
                }, [e, t]),
                null == e ? document.body : t
            );
        })();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            b
                ? (0, r.jsx)("div", {
                      ref: x,
                      className: cH.D,
                      "data-phase": c,
                      children: (0, r.jsx)("div", {
                          className: cH.QF,
                          children: (0, r.jsx)(cW, { phase: c, projectId: t, onOpenPublishedApp: o, compact: k }),
                      }),
                  })
                : null,
            (0, uO.createPortal)(
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: cH.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === c
                                ? ed.intl.string(ec.default.oWcemF)
                                : "handoff" === c
                                  ? ed.intl.string(ec.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            y
                ? (0, uO.createPortal)(
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: cH.ys,
                                  style: N,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, r.jsx)("div", {
                                  className: cH.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var cX = l(399503),
    cQ = l(853555),
    cY = l(558960),
    cZ = l(187645);
let c0 = new Map(),
    c1 = !1;
function c2() {
    let e = new Map();
    for (let t of new Set([...tH.Ay.getActivityOrderedProjectIds(), ...(0, tx.T7)()])) {
        if (!tH.Ay.isThinking(t) && !(0, tx.wK)(t)) continue;
        let l = (function (e) {
            let t = eC.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let l = (0, tj.Rc)(t);
            return (0, tR.x1)(l) ? l.id : null;
        })(t);
        null != l && e.set(t, l);
    }
    for (let [n, a] of [...c0]) {
        var t, l;
        e.get(n) !== a.frameId &&
            ((t = n),
            (l = a),
            c0.delete(t),
            l.unregisterLookup(),
            cY.A.removeFrameTarget(l.frameId, l.element),
            l.element.remove());
    }
    for (let [t, l] of e)
        c0.has(t) ||
            (function (e, t) {
                let l = document.createElement("div");
                ((l.className = cZ.t),
                    l.setAttribute("inert", ""),
                    l.setAttribute("aria-hidden", "true"),
                    c3(l),
                    document.body.appendChild(l));
                let n = { frameId: t, element: l, unregisterLookup: () => {} };
                (c0.set(e, n),
                    (n.unregisterLookup = (0, cQ.Ng)(e, () => (0, cs.o)(l, t))),
                    cY.A.registerFrameTarget(t, l, cm.A.Backstage, void 0));
            })(t, l);
    for (let e of c0.values()) c3(e.element);
}
function c3(e) {
    let t = tg.A.isBuilderPreviewMobile();
    e.classList.toggle(cZ.L, !t);
    let l = t ? cv(tg.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != l ? `${l.width}px` : ""), (e.style.height = null != l ? `${l.height}px` : ""));
}
var c4 = l(873727),
    c5 = l(147248),
    c6 = l(418842),
    c7 = l(363195),
    c8 = l(818023);
let c9 = null;
var de = l(602853),
    dt = l(517461),
    dl = l(487336);
function dn(e) {
    let { open: t, maxWidth: l, onWidthChange: n, children: a } = e,
        s = (0, de.r)($.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, c] = (0, dt.V)("VibegrationsChatSidebarWidth", 460),
        [d, f] = i.useState(u ?? 460),
        m = (0, nB.clamp)(d, 360, l);
    i.useLayoutEffect(() => {
        n(t ? m + s : 0);
    }, [m, t, s, n]);
    let h = (0, uo.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: f,
            onElementResizeEnd: c,
            orientation: uo.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, r.jsxs)("div", {
        className: dl.pz,
        hidden: !t,
        children: [
            (0, r.jsx)("div", { className: dl.Di, onPointerDown: g }),
            (0, r.jsx)("div", { ref: o, className: dl.kL, style: { width: m }, children: a }),
        ],
    });
}
var da = l(541940);
function dr(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: s,
            header: u,
            mainClassName: c,
            content: d,
            sidebar: m,
            onOpenPublishedApp: h,
            showsFrame: g,
        } = e,
        [x, p] = i.useState(null),
        v = (0, B.A)(n, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let l = (0, f.bG)([c7.A], () => (0, c4.x4)(c7.A.theme)),
            n = (0, f.bG)([c5.A], () => c5.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, f.cf)([r2.Ay], () => ({
                reducedMotion: r2.Ay.useReducedMotion,
                fontScale: (0, c4.U0)(),
                highContrast: r2.Ay.isHighContrastModeEnabled,
                forcedColors: r2.Ay.useForcedColors,
                underlineLinks: r2.Ay.alwaysShowLinkDecorations,
            })),
            c = J.hH.useSetting(),
            d = (0, c6.C)(),
            m = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            p = i.useCallback(() => {
                let n = (0, cs.o)(e, t);
                if (null == n) return;
                x.current = n;
                let i = {
                    revision: ++g.current,
                    baseTheme: l,
                    customTheme: (0, c4.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: c,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, uJ.W)(n, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, o, r, t, s, c, e, a, d, u]),
            v = i.useRef(p);
        i.useLayoutEffect(() => {
            v.current = p;
        });
        let j = i.useCallback(() => {
            m.current ||
                ((m.current = !0),
                queueMicrotask(() => {
                    ((m.current = !1), h.current || v.current());
                }));
        }, []);
        (i.useEffect(
            () => (
                (h.current = !1),
                () => {
                    h.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                j();
            }, [n, j]),
            i.useLayoutEffect(() => {
                (p(), j());
            }, [j, p]),
            i.useLayoutEffect(() => {
                let l = (0, cs.o)(e, t);
                null != l && l !== x.current && j();
            }),
            i.useEffect(() => {
                function l(l) {
                    l.target === (0, cs.o)(e, t) && ((x.current = null), j());
                }
                return (document.addEventListener("load", l, !0), () => document.removeEventListener("load", l, !0));
            }, [t, e, j]),
            i.useEffect(() => {
                let e = new MutationObserver(j);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [j]));
    })(x, j),
        i.useEffect(() => {
            if (null != t) return (0, cQ.Ng)(t, () => (0, cs.o)(x, j));
        }, [t, x, j]));
    let b = i.useCallback(() => (0, cs.o)(x, j), [x, j]),
        y = i.useCallback(() => (g ? (0, cs.o)(x, j) : x), [g, x, j]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(da.Mh, c),
                children: [
                    u,
                    (0, r.jsx)(cJ, {
                        projectId: t ?? null,
                        applicationId: n,
                        previewApplicationId: a,
                        resolveTarget: y,
                        frameId: j,
                        onOpenPublishedApp: h,
                    }),
                    (0, r.jsx)("div", { ref: p, className: da.fm, children: d }),
                ],
            }),
            m,
            (0, r.jsx)(u4, {
                projectId: t ?? null,
                applicationId: n,
                previewApplicationId: a,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function di(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: l,
        applicationId: n,
        previewApplicationId: a,
        surface: s,
        header: u,
        chatOpen: c,
        onCloseChat: d,
        chatHeaderAction: m,
        onRestoreVersion: h,
        onImportProject: g,
        debugOpen: x = !1,
        onCloseDebug: p,
        restoreState: v,
        previewReady: j,
        previewGate: b,
        availability: y,
        activeMode: k,
        widgetApplicationId: w,
        onOpenPublishedApp: N = null,
    } = e;
    (0, cX.k)(t, w);
    let A = s.type === lR.U.MAIN || (0, tj.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: l } = (0, f.cf)([tg.A], () => ({
            mobile: tg.A.isBuilderPreviewMobile(),
            landscape: tg.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let n;
            if (null != e) {
                if (t) ((n = l ? c8.aX.LANDSCAPE : c8.aX.PORTRAIT), (c9 = e));
                else {
                    if (c9 !== e) return;
                    ((n = c8.aX.UNHANDLED), (c9 = null));
                }
                nd.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: n, applicationId: e });
            }
        }, [e, t, l]);
    })(A ? n : null);
    let S = i.useRef(null),
        [C, E] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, er.TP)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, er.TP)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (A) return ((0, eS.HV)(n), () => (0, eS.HV)(null));
        }, [n, A]),
        i.useEffect(() => {
            null != t &&
                ((0, er.Hc)(t),
                c1 ||
                    ((c1 = !0),
                    tH.Ay.addChangeListener(c2),
                    eC.Ay.addChangeListener(c2),
                    tS.A.addChangeListener(c2),
                    tg.A.addChangeListener(c2),
                    (0, tx.W3)(c2),
                    c2()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = S.current;
            if (null == e) return;
            function t() {
                null != e && E(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return (l.observe(e), () => l.disconnect());
        }, []),
        i.useLayoutEffect(() => () => (0, eS.Zq)(0), []));
    let I = Math.max(360, C - 320),
        M = c || A;
    return (0, r.jsx)("div", {
        ref: S,
        className: da.LB,
        children: (0, r.jsx)(dr, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: s,
            header: u,
            onOpenPublishedApp: N,
            showsFrame: (0, tv.yf)(y, k),
            mainClassName: null == u ? void 0 : o()(da.ez, { [da.zt]: c }),
            content: (0, r.jsx)(cU, {
                applicationId: n,
                previewApplicationId: a,
                surface: s,
                previewReady: j,
                previewGate: b,
                availability: y,
                activeMode: k,
                widgetApplicationId: w,
                frameOverlay: (0, r.jsx)(cf, { projectId: t, applicationId: n, previewApplicationId: a, surface: s }),
            }),
            sidebar:
                null != t && M
                    ? (0, r.jsx)(dn, {
                          open: c,
                          maxWidth: I,
                          onWidthChange: eS.Zq,
                          children: (0, r.jsx)("div", {
                              className: da.cO,
                              children: x
                                  ? (0, r.jsx)(uF, { projectId: t, onClose: p ?? (() => {}) }, t)
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(cl.A, { projectId: t }),
                                            (0, r.jsx)(lL.Ay, {
                                                "aria-label": ed.intl.string(ed.t["/VQax8"]),
                                                toolbar: (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        m,
                                                        null == d
                                                            ? null
                                                            : (0, r.jsx)(lL.Ay.Icon, {
                                                                  icon: L.P,
                                                                  tooltip: ed.intl.string(ec.default.JD6Oit),
                                                                  onClick: d,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, r.jsx)(lL.Ay.Title, {
                                                    children: ed.intl.string(ed.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: da.cb,
                                                children: (0, r.jsx)(
                                                    sR,
                                                    {
                                                        projectId: t,
                                                        restoreState: v,
                                                        onRestoreVersion: h,
                                                        onImportProject: g,
                                                    },
                                                    t,
                                                ),
                                            }),
                                        ],
                                    }),
                          }),
                      })
                    : null,
        }),
    });
}
var ds = l(631417);
function du(e) {
    let { title: t, actions: l, breadcrumb: n } = e;
    return (0, r.jsx)(K.A, {
        hideSearch: !0,
        toolbar: l,
        className: ds.wx,
        "aria-label": t,
        children: (0, r.jsxs)("div", {
            className: ds.QF,
            children: [
                (0, r.jsx)(D.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: $.A.colors.TEXT_STRONG,
                    className: ds.Kk,
                }),
                null != n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(K.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, r.jsx)(K.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, r.jsx)(K.A.Title, { className: ds.Qw, wrapperClassName: ds.DD, children: t }),
            ],
        }),
    });
}
var dc = l(683071);
let dd = "conjuring-help";
var df = l(173114);
function dm() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: l,
            } = (0, f.cf)([tq.default, Y.A, lC.Ay, iz.A], () => {
                let e = tq.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of Y.A.getGuildsArray()) {
                    if (!t.features.has(eb.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let l = lC.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, U.m1)(t, tq.default, iz.A) === dd;
                    });
                    if (null != l) return { isStaff: e, guildId: t.id, channelId: l.channel.id };
                }
                return { isStaff: e, guildId: null, channelId: null };
            });
            return e
                ? null != t && null != l
                    ? { kind: "channel", guildId: t, channelId: l }
                    : { kind: "url", url: "https://i.dis.gd/conjuring-access" }
                : null;
        })(),
        t = i.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, V.pX)(eb.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, le.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, r.jsx)("div", {
              className: df.l,
              children: (0, r.jsx)(dc.w, {
                  type: "info",
                  iconAlign: "center",
                  message: ed.intl.format(ec.default["6anmu1"], { channel: dd, onNavigate: t }),
                  role: "static",
              }),
          });
}
var dh = l(323140);
function dg(e) {
    return (0, r.jsx)(h.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function dx(e) {
    return (0, r.jsx)(g.u, { ...e, size: "custom", width: 20, height: 20 });
}
function dp(e) {
    return (0, r.jsx)(x.k, { ...e, size: "custom", width: 20, height: 20 });
}
function dv(e) {
    return (0, r.jsx)(p.H, { ...e, size: "custom", width: 20, height: 20 });
}
let dj = {
    showPublishBlocked: function (e) {
        (0, te.openModal)((t) => (0, r.jsx)(lM, { ...t, reason: e }));
    },
    openPublishNotes: lT.A,
    showError: (e) => (0, v.P)((0, j.o)(e, b.Ck.FAILURE)),
    openProfile: (e) => {
        (0, W.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(l.bind(l, 468689))
            .then((t) => {
                let { default: l } = t;
                return l.open(e, eb.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function db(e) {
    var t;
    let l,
        n,
        a,
        s,
        u,
        h,
        g,
        x,
        p,
        S,
        { project: C, guildId: E, onSelect: I, onRemix: M, shared: T = !1 } = e,
        _ =
            ((l = C.id),
            (n = C.name),
            (a = i.useRef(!1)),
            (s = i.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, v.P)((0, j.o)(ed.intl.formatToPlainString(ec.default.aN2JdD, { name: n }), b.Ck.MESSAGE)),
                    eh(l, n)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", l, e),
                                (0, v.P)(
                                    (0, j.o)(
                                        409 === (t = e instanceof er.xE ? e.status : null)
                                            ? ed.intl.string(ec.default["9oqbEw"])
                                            : 404 === t
                                              ? ed.intl.string(ec.default["0W8uLq"])
                                              : ed.intl.string(ec.default.N8753A),
                                        b.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            a.current = !1;
                        }));
            }, [l, n])),
            {
                onExport: s,
                onImport: (u = eg(
                    i.useCallback(
                        (e) => {
                            let t = em(e);
                            null != t
                                ? (0, v.P)((0, j.o)(t, b.Ck.FAILURE))
                                : (0, m.A)({
                                      title: ed.intl.formatToPlainString(ec.default["Gm+u1+"], { name: n }),
                                      subtitle: ed.intl.string(ec.default.M7H3sJ),
                                      confirmText: ed.intl.string(ec.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, V.pX)(eb.BVt.CHANNEL(E, ey.VV.CONJURE, l));
                                          try {
                                              await ef(l, e, ed.intl.string(ec.default.Owerd3));
                                          } catch {
                                              (0, v.P)((0, j.o)(ed.intl.string(ec.default["Q+l4Hv"]), b.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [l, n, E],
                    ),
                )).open,
                importInput: u.input,
            }),
        P =
            null == C.updated_at
                ? null
                : ed.intl.formatToPlainString(ec.default.AXydi3, { time: c()(C.updated_at).fromNow() }),
        R = (0, tU.wu)(C),
        L =
            (0, f.bG)([Y.A], () => (null == R ? null : (Y.A.getGuild(R)?.name ?? null)), [R]) ??
            ed.intl.string(ec.default["3QFps8"]),
        D = (0, f.bG)([eC.Ay], () => eC.Ay.isProjectDeleting(C.id), [C.id]),
        $ =
            ((t = T ? C : null),
            (h = t?.id),
            (g = t?.owner_user_id),
            (x = (0, f.yK)(
                [tH.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  tH.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== g ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, g],
            )),
            i.useEffect(() => {
                null != g && (tX(g), x.forEach(tX));
            }, [g, x]),
            (p = (0, f.bG)([tq.default], () => (null == g ? null : tq.default.getUser(g)), [g])),
            (S = (0, f.yK)([tq.default], () => x.map((e) => tq.default.getUser(e)).filter((e) => null != e), [x])),
            i.useMemo(
                () =>
                    null == p
                        ? null
                        : {
                              creator: p,
                              collaborators: S,
                              label: (function (e, t) {
                                  let l;
                                  return 0 === t.length
                                      ? ed.intl.formatToPlainString(ec.default.t5RWBS, { creator: e })
                                      : ed.intl.formatToPlainString(ec.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (l = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === l
                                                      ? ed.intl.formatToPlainString(ed.t["8s9z8P"], { first: t[0] })
                                                      : 2 === l
                                                        ? ed.intl.formatToPlainString(ed.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === l
                                                          ? ed.intl.formatToPlainString(ed.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : ed.intl.formatToPlainString(ed.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: l - 3,
                                                            }),
                                        });
                              })(
                                  (0, tB.mG)(p),
                                  S.map((e) => (0, tB.mG)(e)),
                              ),
                          },
                [p, S],
            )),
        F = i.useId(),
        O = (0, r.jsx)(y.E, { variant: "text-md/semibold", color: "text-strong", className: dh.j1, children: C.name }),
        U = (0, ek.oF)(C.id),
        G = {
            projectId: C.id,
            projectName: C.name,
            guildId: E,
            projectGuildId: C.guild_id,
            isOwner: (0, eC.PV)(C),
            canRemix: (0, eC.H_)(C),
            onRemix: M,
            onExport: _.onExport,
            onImport: _.onImport,
        };
    return (0, r.jsxs)("div", {
        className: o()(dh.OY, { [dh.Wy]: D }),
        "aria-busy": D,
        children: [
            (0, r.jsx)(tt.Ay, { projectId: C.id }),
            null == U || D ? null : (0, r.jsx)("div", { className: dh.SB, "aria-hidden": !0 }),
            (0, r.jsxs)(k.D, {
                className: dh.W6,
                onClick: D ? void 0 : I,
                onContextMenu: function (e) {
                    D || (0, z.jA)(e, () => (0, r.jsx)(lo, { ...G, onCloseMenu: z.Z_ }));
                },
                tabIndex: D ? -1 : void 0,
                "aria-describedby": null != $ ? F : void 0,
                children: [
                    (0, r.jsx)(lc.A, { project: C, size: "md", className: dh.VJ }),
                    (0, r.jsxs)("div", {
                        className: dh.MM,
                        children: [
                            (0, r.jsxs)("div", {
                                className: dh.Ub,
                                children: [
                                    null != $ ? (0, r.jsx)(w.m, { text: $.label, ariaHidden: !0, children: O }) : O,
                                    null == $ || D ? null : (0, r.jsx)(lm, { creator: $, className: dh.rb }),
                                    U !== d.I.NEEDS_INPUT || D
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: dh.fs,
                                              children: [
                                                  (0, r.jsx)(H.A, { mentionsCount: 1 }),
                                                  (0, r.jsx)(N.A, { children: ed.intl.string(ec.default.hfIuc7) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: dh.h3,
                                children: [
                                    (0, r.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: dh.Wb,
                                        children: D ? ed.intl.string(ec.default.Yh5pAc) : L,
                                    }),
                                    null == P || D
                                        ? null
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("span", {
                                                      className: dh.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, r.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: dh.zM,
                                                      children: P,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != $ ? (0, r.jsx)(N.A, { id: F, children: $.label }) : null,
            (0, r.jsx)("div", {
                className: dh.M2,
                children: D
                    ? (0, r.jsx)(A.y, { type: A.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, r.jsxs)("div", {
                          className: dh.Pl,
                          children: [(0, r.jsx)(lu, { ...G, trigger: "iconButton" }), _.importInput],
                      }),
            }),
        ],
    });
}
function dy(e) {
    var t;
    let { project: n, projectsLoaded: a, onBack: s, guildId: o } = e,
        [u, c] = i.useState(!0),
        [d, h] = i.useState(!1),
        g = J.Q_.useSetting(),
        [x, p] = i.useState(null),
        [k, N] = i.useState(null),
        A = n?.id ?? null,
        T = i.useRef(A),
        _ = i.useRef(!0),
        P = i.useRef(!1),
        R = i.useRef(null);
    ((T.current = A),
        i.useEffect(
            () => (
                (_.current = !0),
                () => {
                    _.current = !1;
                }
            ),
            [],
        ));
    let L = (0, f.bG)([eC.Ay], () => (null == A ? null : eC.Ay.getIntegrationStatus(A)), [A]),
        { data: D, isLoading: $ } = (0, O.YY)(n?.preview_application_id ?? void 0),
        z = null != A && k !== A,
        F = L?.preview_ready === !0,
        H = L?.has_activity === !0,
        {
            availability: W,
            activeMode: Q,
            setMode: Y,
            widgetApplicationId: Z,
        } = (function (e) {
            let {
                    applicationId: t,
                    previewApplicationId: l,
                    declaredActivity: n,
                    installScope: a,
                    ownerAuthorizationRevoked: r,
                    mainCardOnly: s = !1,
                } = e,
                [o, u] = i.useState(null),
                [c, d] = i.useState(t);
            c !== t && (d(t), u(null));
            let m = null != l && l === t ? l : null,
                h = (0, f.bG)([tw.default], () => tw.default.getId()),
                { applicationWidgetConfig: g } = (0, ty.A)(h, m ?? void 0),
                x = g?.surfaces,
                p = (0, tv.yZ)({
                    widgetTop: x?.[tb.m.WIDGET_TOP] != null,
                    widgetBottom: x?.[tb.m.WIDGET_BOTTOM] != null,
                    miniProfile: x?.[tb.m.MINI_PROFILE] != null,
                }),
                v = null != m && (s ? p.hasMainCard : p.hasAny),
                { data: j } = (0, O.YY)(l ?? void 0),
                b = null != l && j?.bot?.id != null,
                { data: y, isLoading: k } = (0, O.YY)(t ?? void 0),
                w = n || (0, tk.X)(y),
                N = null != t && k && null == y,
                A = (0, tv.Xm)({
                    installScope: a,
                    hasFrame: w,
                    hasProfileWidget: v,
                    hasBotDm: b,
                    ownerAuthorizationRevoked: r,
                });
            return {
                availability: A,
                isResolving: N,
                activeMode: N ? null : (0, tv.Qs)(o, A),
                setMode: u,
                widgetApplicationId: m,
            };
        })({
            applicationId: n?.preview_application_id ?? null,
            previewApplicationId: n?.preview_application_id ?? null,
            declaredActivity: H,
            installScope: n?.install_scope ?? null,
            ownerAuthorizationRevoked: L?.owner_authorization_revoked === !0,
        });
    (0, tp.x)(A, (e) => {
        W.modes.includes(e) && Y(e);
    });
    let ee = W.modes.includes("frame"),
        et = (0, tv.Qg)({
            installScope: n?.install_scope ?? null,
            previewReady: F,
            integrationInstalled: L?.integration_installed ?? null,
            botPermissionsChanged: L?.bot_permissions_changed === !0,
        }),
        el = u && !d,
        en = ed.intl.string(el ? ec.default.JD6Oit : ec.default.xjJAQm),
        ea = i.useCallback(() => {
            if (d) {
                (h(!1), c(!0));
                return;
            }
            c((e) => !e);
        }, [d]),
        ei = i.useCallback(() => c(!1), []),
        { active: es } = e9(A);
    i.useEffect(() => {
        null != A && es && !ee && e5(A);
    }, [A, es, ee]);
    let eo = i.useRef(null),
        eu = (0, tx.Zv)(A),
        eh = ed.intl.string(eu ? ec.default.Sme0T0 : es ? ec.default.vn5Rzu : ec.default["cl/Jyl"]),
        ex = i.useCallback(() => {
            if (null != A) {
                let e;
                if (es) return void e5(A);
                (h(!1), c(!0), (e = e3(A)).active || e4(A, { ...e, active: !0 }));
            }
        }, [A, es]),
        ep = i.useCallback(() => {
            h((e) => !e && (c(!0), !0));
        }, []),
        ev = i.useCallback(() => h(!1), []),
        ej = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == n || P.current) return;
                let a = n.id;
                function r() {
                    return _.current && T.current === a;
                }
                ((P.current = !0),
                    h(!1),
                    c(!0),
                    p({ entry: e, status: "restoring" }),
                    (0, er.oB)(a, e.sha)
                        .then(
                            async () => {
                                if (
                                    (l &&
                                        r() &&
                                        (0, v.P)(
                                            (0, j.o)(
                                                ed.intl.formatToPlainString(ec.default.Z4n6LX, {
                                                    title: (0, tl.T4)(e.subject).short,
                                                }),
                                                b.Ck.SUCCESS,
                                            ),
                                        ),
                                    null != t)
                                ) {
                                    let e = await (0, tn.c)(a, t);
                                    null != e && (0, v.P)((0, j.o)(e, b.Ck.FAILURE));
                                }
                                r() && p({ entry: e, status: "restored" });
                            },
                            (t) => {
                                r() &&
                                    (p({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", a, t),
                                    (0, v.P)((0, j.o)(ed.intl.string(ec.default["PSdo+w"]), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            r() && (P.current = !1);
                        }));
            },
            [n],
        ),
        ek = (0, f.bG)([tg.A], () => tg.A.isBuilderPreviewMobile()),
        ew = ed.intl.string(ek ? ec.default.tKGF0Q : ec.default.peqEOY),
        eN = i.useCallback(() => (0, eS.GG)(!ek), [ek]),
        eA = (0, f.bG)([tg.A], () => tg.A.isBuilderPreviewLandscape()),
        eE = ed.intl.string(eA ? ec.default.tunI2l : ec.default.DoNdjA),
        eI = i.useCallback(() => (0, eS.Lw)(!eA), [eA]),
        eM = (0, tj.jS)(n),
        eT = i.useMemo(() => (0, tj.Op)(eM), [eM]),
        e_ = (0, B.A)(n?.preview_application_id ?? null, eT),
        eP = (0, tR.x1)(e_) && e_.data.proxyTicketRefreshing,
        eR = i.useCallback(() => {
            null == e_ || eP || q.A.refreshProxyTicket(e_.id);
        }, [e_, eP]),
        eL = i.useCallback(() => {
            var e, t;
            (null != n && ((e = n.id), (t = e_?.id), (0, er.Bn)(e), (0, lh.A)().leaveFrame(t)), s());
        }, [n, e_?.id, s]),
        eD = i.useCallback(() => {
            null != n && (c(!0), (0, er.dv)(n.id, ed.intl.string(ec.default.oU20rd)));
        }, [n]),
        e$ = eg(
            i.useCallback(
                (e) => {
                    if (null == n) return;
                    let t = n.id,
                        l = em(e);
                    null != l
                        ? (0, v.P)((0, j.o)(l, b.Ck.FAILURE))
                        : (0, m.A)({
                              title: ed.intl.formatToPlainString(ec.default["Gm+u1+"], { name: n.name }),
                              subtitle: ed.intl.string(ec.default.M7H3sJ),
                              confirmText: ed.intl.string(ec.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  c(!0);
                                  try {
                                      await ef(t, e, ed.intl.string(ec.default.Owerd3));
                                  } catch {
                                      (0, v.P)((0, j.o)(ed.intl.string(ec.default["Q+l4Hv"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [n],
            ),
        ),
        ez = i.useCallback(() => {
            null != n && (0, l_.A)(n, o);
        }, [n, o]),
        eF = i.useCallback(async () => {
            if (null == A || T.current !== A) return;
            R.current?.abort();
            let e = new AbortController();
            ((R.current = e), N(null));
            try {
                await (0, eS.U1)(A, e.signal);
            } catch {
            } finally {
                e.signal.aborted || R.current !== e || T.current !== A || N(A);
            }
        }, [A]);
    i.useEffect(
        () => (
            eF(),
            () => {
                (R.current?.abort(), (R.current = null));
            }
        ),
        [eF],
    );
    let eO = (0, lS.a)(n ?? null, L ?? null, o),
        eU = ((t = n?.application_id ?? null), (0, f.bG)([lC.Ay], () => (null == t ? null : (0, lg.i8)(o, t)), [o, t])),
        eG = i.useMemo(() => (null == eU ? null : () => (0, V.pX)(eb.BVt.CHANNEL(o, eU))), [o, eU]),
        eq = i.useCallback(async () => {
            null != n && (await (0, lS.$)(n, eO));
        }, [eO, n]),
        eB = i.useCallback(async () => {
            try {
                await eq();
            } catch {}
            await eF();
        }, [eF, eq]),
        eH = i.useMemo(() => {
            let e = n?.preview_application_id;
            return null == e || $ || z
                ? null
                : {
                      ...(0, tO.i)({ applicationId: e, application: D ?? null, guildId: eO }),
                      onClose: () => {
                          eB();
                      },
                  };
        }, [z, eB, eO, $, D, n?.preview_application_id]),
        eK = (0, tv.JR)(Q, et)
            ? { type: "permissions", authorizeProps: eH }
            : z && null == L
              ? { type: "checking" }
              : void 0,
        eV = (0, f.bG)([eC.Ay], () => null != A && eC.Ay.isProjectDeleting(A), [A]);
    i.useEffect(() => {
        ((null == n && a) || eV) && (0, V.bG)(eb.BVt.CHANNEL(o, ey.VV.CONJURE));
    }, [o, n, a, eV]);
    let eW = i.useMemo(() => ({ guildId: o, platform: dj, busy: z || $ }), [o, z, $]),
        eJ = (0, ll.Ay)(A, eW),
        eX = eJ?.intent === "open" && "channel" === eJ.destination ? eJ.appChannelId : null,
        eQ = (0, f.bG)([X.A], () => (null == eX ? null : X.A.getChannel(eX)), [eX]),
        eY = (0, U.Ay)(eQ),
        eZ = (0, G.gU)(eQ),
        e0 =
            null != eY && null != eZ
                ? ed.intl.format(ec.default.gR7PUV, {
                      channel: eY,
                      channelIconHook: (e, t) =>
                          (0, r.jsx)(eZ, { size: "xs", color: "currentColor", className: dh.Y2 }, t),
                  })
                : eJ?.label,
        e1 = eJ?.upToDate === !0 ? ed.intl.string(ec.default.X0kGp2) : (eJ?.disabledReason ?? null),
        e2 =
            null == eJ
                ? null
                : (0, r.jsx)("div", {
                      className: dh.As,
                      children: (0, r.jsx)(w.m, {
                          text: e1,
                          asContainer: !0,
                          children: (0, r.jsx)(S.$, {
                              size: "sm",
                              variant: eJ.upToDate ? "secondary" : "primary",
                              loading: eJ.publishing,
                              disabled: eJ.disabled,
                              onClick: () => eJ.run("header"),
                              text: e0,
                          }),
                      }),
                  }),
        e6 = (0, r.jsx)(du, {
            title: n?.name ?? ed.intl.string(ec.default.G1WwgK),
            breadcrumb: { title: ed.intl.string(ec.default.uk6jhJ), onClick: s },
            actions:
                null == n
                    ? null
                    : (0, r.jsxs)("div", {
                          className: dh.FO,
                          children: [
                              W.showModeSwitch ? (0, r.jsx)(tF, { modes: W.modes, mode: Q, onChange: Y }) : null,
                              ee
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(K.A.Icon, {
                                                icon: ek ? dp : dx,
                                                tooltip: ew,
                                                "aria-label": ew,
                                                selected: ek,
                                                onClick: eN,
                                            }),
                                            ek
                                                ? (0, r.jsx)(K.A.Icon, {
                                                      icon: dv,
                                                      tooltip: eE,
                                                      "aria-label": eE,
                                                      selected: eA,
                                                      onClick: eI,
                                                  })
                                                : null,
                                            (0, r.jsx)(K.A.Icon, {
                                                ref: eo,
                                                icon: C.x,
                                                iconClassName: dh.D8,
                                                tooltip: eh,
                                                "aria-label": eh,
                                                selected: es,
                                                disabled: eu,
                                                onClick: ex,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === Q ? (0, r.jsx)(tL, { frame: e_, controlProjectId: n.id }) : null,
                              (0, r.jsx)("div", { className: dh.YJ }),
                              g
                                  ? (0, r.jsx)(K.A.Icon, {
                                        icon: E.BugIcon,
                                        tooltip: ed.intl.string(ec.default.Mt5k9d),
                                        "aria-label": ed.intl.string(ec.default.Mt5k9d),
                                        selected: d,
                                        onClick: ep,
                                    })
                                  : null,
                              (0, r.jsx)(K.A.Icon, {
                                  icon: I.SettingsIcon,
                                  tooltip: ed.intl.string(ec.default.I2XSKe),
                                  "aria-label": ed.intl.string(ec.default.I2XSKe),
                                  onClick: () => (0, ln.A)(n.id, { guildId: o, isPreview: !0, publishOptions: eW }),
                              }),
                              (0, r.jsx)(lu, {
                                  projectId: n.id,
                                  projectName: n.name,
                                  guildId: o,
                                  projectGuildId: n.guild_id,
                                  isOwner: (0, eC.PV)(n),
                                  canRemix: (0, eC.H_)(n),
                                  onRefresh: (0, tR.x1)(e_) ? eR : void 0,
                                  isRefreshing: eP,
                                  onClose: eL,
                                  onExport: eD,
                                  onImport: e$.open,
                                  onRemix: ez,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = n.id),
                                          void (0, te.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("834460"),
                                                  l.e("960521"),
                                              ]).then(l.bind(l, 699760));
                                              return (l) => (0, r.jsx)(t, { ...l, projectId: e });
                                          })
                                      );
                                  },
                                  onHistory: () => {
                                      var e;
                                      return (
                                          (e = {
                                              projectId: n.id,
                                              installScope: n.install_scope,
                                              restoreDisabled: x?.status === "restoring",
                                              onRestoreVersion: (e, t) => ej(e, t, !0),
                                          }),
                                          void (0, te.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("323079"),
                                                  l.e("437655"),
                                                  l.e("620019"),
                                                  l.e("586467"),
                                                  l.e("231782"),
                                                  l.e("551087"),
                                              ]).then(l.bind(l, 438834));
                                              return (l) => (0, r.jsx)(t, { ...l, ...e });
                                          })
                                      );
                                  },
                                  refreshApplicationId:
                                      W.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== W.profileState
                                          ? Z
                                          : null,
                                  previewProjectId: n.id,
                              }),
                              el
                                  ? null
                                  : (0, r.jsx)(K.A.Icon, { icon: dg, tooltip: en, "aria-label": en, onClick: ea }),
                          ],
                      }),
        });
    return (0, r.jsxs)("div", {
        className: dh.nj,
        children: [
            e$.input,
            (0, r.jsx)("main", {
                className: dh.JX,
                children:
                    null == n
                        ? (0, r.jsxs)("div", {
                              className: dh.j5,
                              children: [
                                  e6,
                                  (0, r.jsxs)("div", {
                                      className: dh.sD,
                                      children: [
                                          (0, r.jsx)(M.D, {
                                              variant: "heading-lg/semibold",
                                              children: ed.intl.string(ec.default.G1WwgK),
                                          }),
                                          (0, r.jsx)(y.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: ed.intl.string(ec.default.fINulo),
                                          }),
                                          (0, r.jsx)(S.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: ed.intl.string(ec.default["WFJ/vb"]),
                                              onClick: () => (0, eS.hF)(o),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, r.jsx)(ll.bI.Provider, {
                              value: eW,
                              children: (0, r.jsx)(
                                  di,
                                  {
                                      projectId: n.id,
                                      designFeedbackToggleRef: eo,
                                      applicationId: n.preview_application_id,
                                      previewApplicationId: n.preview_application_id,
                                      surface: eT,
                                      header: e6,
                                      chatOpen: u,
                                      onCloseChat: ei,
                                      chatHeaderAction: e2,
                                      debugOpen: g && d,
                                      onCloseDebug: ev,
                                      onRestoreVersion: ej,
                                      onImportProject: (0, eC.PV)(n) ? e$.open : void 0,
                                      restoreState: x,
                                      previewReady: F,
                                      previewGate: eK,
                                      availability: W,
                                      activeMode: Q,
                                      widgetApplicationId: Z,
                                      onOpenPublishedApp: eG,
                                  },
                                  n.id,
                              ),
                          }),
            }),
        ],
    });
}
function dk(e) {
    let {
            projects: t,
            idea: n,
            guildId: a,
            submitting: s,
            createError: u,
            createDisabled: c,
            conjureTarget: d,
            onConjureTargetChange: m,
            eligibleGuilds: h,
            modelSettings: g,
            onModelSettingsChange: x,
            onSelectProject: p,
            onIdeaChange: k,
            onCreate: w,
            onCreateFromTemplate: N,
            onStartTemplate: C,
            onSubmitTemplate: E,
            onCancelTemplate: I,
            onSkipTemplate: M,
            onImportNewProject: z,
            importing: F,
        } = e,
        [O, U] = i.useState(() => ({ guildId: a, filter: lj(a) })),
        G = (O.guildId === a ? O.filter : lj(a)) ?? a,
        q = i.useCallback(
            (e) => {
                (lv.set(a, e), U({ guildId: a, filter: e }));
            },
            [a],
        ),
        B = (0, f.yK)(
            [Y.A],
            () =>
                (function (e, t) {
                    let l = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && l.add(t.guild_id),
                            null != t.preview_guild_id && l.add(t.preview_guild_id));
                    let n = [];
                    for (let e of l) {
                        let t = Y.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, a),
            [t, a],
        ),
        H = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: D.D, label: ed.intl.string(ec.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: lx,
                    leading: ex.UserIcon,
                    label: ed.intl.string(ec.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: lp,
                    leading: ep.R,
                    label: ed.intl.string(ec.default["3QFps8"]),
                },
                ...B.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, r.jsx)(eB.Ay, { guild: e, size: eB.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [B],
        ),
        V = (0, f.yK)(
            [eC.Ay, Y.A],
            () => {
                let e = lb(G);
                if (null != e) return eC.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(Y.A.getGuilds()))
                    eC.Ay.hasFetchedGuildProjects(e.id) && t.push(...eC.Ay.getSharedProjects(e.id));
                return t;
            },
            [G],
        );
    i.useEffect(() => {
        let e = lb(G);
        null == e || eC.Ay.hasFetchedGuildProjects(e) || (0, eS.hF)(e);
    }, [G]);
    let W = i.useMemo(
            () =>
                V.filter((e) => ly(e, G)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [V, G],
        ),
        J = i.useMemo(
            () => [
                {
                    label: ed.intl.string(ec.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eH,
                            label: ed.intl.string(ec.default.UPLaGM),
                            leading: ex.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, r.jsx)(eB.Ay, { guild: e, size: eB.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [h],
        ),
        X = i.useMemo(
            () =>
                t
                    .filter((e) => ly(e, G))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, G],
        ),
        Q = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, lg.Ot)(e, a)
                    ? p(e.id)
                    : (0, v.P)((0, j.o)(ed.intl.string(ec.default["XUl/cs"]), b.Ck.MESSAGE));
            },
            [a, p],
        ),
        Z = ed.intl.string(ec.default.ab1sMf),
        et = [
            ed.intl.string(ec.default["9w+Chc"]),
            ed.intl.string(ec.default.WAvmdq),
            ed.intl.string(ec.default.SKsrzl),
        ],
        el = [
            {
                id: "moderation-bot",
                name: ed.intl.string(ec.default.lGLnE8),
                description: ed.intl.string(ec.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: ed.intl.string(ec.default.uJKQTs),
                description: ed.intl.string(ec.default["+dKy/B"]),
            },
            {
                id: "rust-sphere",
                name: ed.intl.string(ec.default.iF5Oru),
                description: ed.intl.string(ec.default.NbDDO6),
            },
        ],
        en = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: a,
                        eligibleGuilds: h,
                        onStart: (t) => C(e.name, t),
                        onSubmit: (t, l, n) => E(e, t, l, n),
                        onCancel: I,
                        onSkip: M,
                    }),
                    (0, te.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([l.e("881965"), l.e("166781")]).then(
                                l.bind(l, 790028),
                            );
                            return (l) => (0, r.jsx)(e, { ...l, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                N(e);
            },
            [h, a, I, N, M, C, E],
        ),
        ea = ed.intl.string(ec.default.zzYLlW),
        er =
            (i.useEffect(() => {
                (0, eS.b8)();
            }, []),
            (0, f.bG)([eC.Ay], () => {
                let e = eC.Ay.getMaxProjects();
                return null != e && eC.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - eC.Ay.getOwnedProjects().length)
                    : null;
            })),
        ei = ed.intl.string(ec.default["2XcV3x"]),
        es = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || w());
            },
            [c, w],
        ),
        eo = lb(G) ?? a,
        eu = (0, f.bG)([eC.Ay], () => eC.Ay.getGuildProjectsFetchState(eo), [eo]),
        ef = (0, f.bG)([eC.Ay], () => eC.Ay.getGuildProjectsFetchState(a), [a]),
        [em, eh] = i.useState(lN),
        eg = i.useMemo(() => lk.w.get(lA(a)) ?? !1, [a]),
        ev = "success" === ef,
        eb = (0, f.yK)([eC.Ay], () => eC.Ay.getSharedProjects(a), [a]).length > 0 || t.some((e) => ly(e, a)),
        ey = em ?? (!!eb || "error" === ef || (!ev && eg));
    i.useEffect(() => {
        ev && lk.w.set(lA(a), eb);
    }, [ev, eb, a]);
    let ek = i.useCallback((e) => {
            (lk.w.set(lw, e), eh(e));
        }, []),
        ew = i.useCallback(() => ek(!ey), [ek, ey]),
        eA = i.useCallback(() => ek(!1), [ek]),
        eI = ed.intl.string(ec.default.kar7jh),
        eM = ey ? eI : ed.intl.string(ec.default.WSc5Y2);
    return (0, r.jsx)("div", {
        className: o()(dh.nj, dh.a0),
        children: (0, r.jsxs)("div", {
            className: dh.Yo,
            children: [
                (0, r.jsxs)("main", {
                    className: dh.ps,
                    children: [
                        (0, r.jsx)(du, {
                            title: ed.intl.string(ec.default.uk6jhJ),
                            actions: (0, r.jsx)(K.A.Icon, {
                                icon: T.Z,
                                tooltip: eM,
                                "aria-label": eM,
                                selected: ey,
                                onClick: ew,
                            }),
                        }),
                        (0, r.jsx)(_.Ip, {
                            className: dh.Yy,
                            children: (0, r.jsx)("div", {
                                className: dh.Mo,
                                children: (0, r.jsxs)("section", {
                                    className: o()(dh.Qs, dh.Ix),
                                    children: [
                                        (0, r.jsx)(dm, {}),
                                        (0, r.jsx)(eq, {}),
                                        (0, r.jsxs)("section", {
                                            className: dh.WI,
                                            "aria-label": ea,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dh.G9,
                                                    children: [
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ea,
                                                        }),
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ed.intl.string(ec.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eP, {
                                                    listClassName: dh.Aw,
                                                    radius: eT,
                                                    children: el.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dh.EA,
                                                                children: (0, r.jsxs)(eE, {
                                                                    disabled: s,
                                                                    ariaLabel: ed.intl.formatToPlainString(
                                                                        ec.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(dh.nx, dh.rz),
                                                                    onClick: () => en(e),
                                                                    children: [
                                                                        (0, r.jsx)(y.E, {
                                                                            className: dh.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, r.jsx)(y.E, {
                                                                            className: dh.BK,
                                                                            variant: "text-sm/normal",
                                                                            color: "text-subtle",
                                                                            children: e.description,
                                                                        }),
                                                                    ],
                                                                }),
                                                            },
                                                            e.id,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsxs)("section", {
                                            className: dh.WI,
                                            "aria-label": ei,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dh.G9,
                                                    children: [
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ei,
                                                        }),
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ed.intl.string(ec.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eP, {
                                                    listClassName: dh.Aw,
                                                    radius: e_,
                                                    children: et.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dh.EA,
                                                                children: (0, r.jsx)(eE, {
                                                                    disabled: s,
                                                                    className: dh.nx,
                                                                    onClick: () => w(e),
                                                                    children: (0, r.jsx)(y.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: dh.un,
                                                                        children: e,
                                                                    }),
                                                                }),
                                                            },
                                                            e,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: dh.Yl,
                            children: (0, r.jsxs)("div", {
                                className: o()(dh.Qs, dh.DA),
                                children: [
                                    (0, r.jsx)(P.f, {
                                        label: Z,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: n,
                                        placeholder: Z,
                                        error: u,
                                        onChange: k,
                                        onKeyDown: es,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: dh.VP,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: dh.gH,
                                                children: (0, r.jsx)(R.l, {
                                                    selectionMode: "single",
                                                    label: ed.intl.string(ec.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: ed.intl.string(ec.default.NyVn6T),
                                                    options: J,
                                                    value: d,
                                                    onSelectionChange: m,
                                                    disabled: s,
                                                }),
                                            }),
                                            null != er
                                                ? (0, r.jsx)(y.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === er ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === er
                                                              ? ed.intl.string(ec.default.s28pGG)
                                                              : ed.intl.formatToPlainString(ec.default.Wy5aK4, {
                                                                    count: er,
                                                                }),
                                                  })
                                                : null,
                                            (0, r.jsx)(th, {
                                                settings: g ?? ee.A4,
                                                tiers: ee.lO,
                                                choices: (0, eN.b)()
                                                    ? {
                                                          main: [...ee.vC.main, ...ee.XE.main],
                                                          subagent: [...ee.vC.subagent, ...ee.XE.subagent],
                                                          thinking: ee.vC.thinking,
                                                      }
                                                    : ee.vC,
                                                disabled: s,
                                                onChange: x,
                                            }),
                                            (0, r.jsx)(S.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: ed.intl.string(ed.t.CumH4u),
                                                disabled: c,
                                                loading: s,
                                                onClick: () => w(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("aside", {
                    className: dh.pA,
                    hidden: !ey,
                    "aria-label": ed.intl.string(ec.default.dWgSAa),
                    children: [
                        (0, r.jsxs)("div", {
                            className: dh.IR,
                            children: [
                                (0, r.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: dh.RM,
                                    children: ed.intl.string(ec.default.dWgSAa),
                                }),
                                (0, r.jsxs)("div", {
                                    className: dh.Ss,
                                    children: [
                                        (0, r.jsx)(ej, { importing: F, onImport: z }),
                                        (0, r.jsx)(K.A.Icon, { icon: L.P, tooltip: eI, "aria-label": eI, onClick: eA }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)(_.Ip, {
                            className: dh.xe,
                            children: [
                                (0, r.jsx)("div", {
                                    className: dh.Vw,
                                    children: (0, r.jsx)(R.l, {
                                        selectionMode: "single",
                                        label: ed.intl.string(ec.default.U6TqU9),
                                        hideLabel: !0,
                                        options: H,
                                        value: G,
                                        onSelectionChange: q,
                                    }),
                                }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: dh.wE,
                                    children: ed.intl.string(ec.default.JQpNkh),
                                }),
                                ("unattempted" === eu || "loading" === eu) && 0 === X.length
                                    ? (0, r.jsx)("div", { className: dh.E8, children: (0, r.jsx)(A.y, {}) })
                                    : "error" === eu && 0 === X.length
                                      ? (0, r.jsxs)("div", {
                                            className: dh.E8,
                                            children: [
                                                (0, r.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: dh.JS,
                                                    children: ed.intl.string(ec.default.DJAPMO),
                                                }),
                                                (0, r.jsx)(S.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: ed.intl.string(ec.default["WFJ/vb"]),
                                                    onClick: () => (0, eS.hF)(eo),
                                                }),
                                            ],
                                        })
                                      : 0 === X.length
                                        ? (0, r.jsx)("div", {
                                              className: dh.D1,
                                              children: (0, r.jsxs)("div", {
                                                  className: dh.ST,
                                                  children: [
                                                      (0, r.jsx)(D.D, { size: "lg", color: $.A.colors.TEXT_SUBTLE }),
                                                      (0, r.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: dh.sI,
                                                          children: ed.intl.string(ec.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, r.jsx)("div", {
                                              className: dh.Dq,
                                              children: X.map((e) =>
                                                  (0, r.jsx)(
                                                      db,
                                                      {
                                                          project: e,
                                                          guildId: a,
                                                          onSelect: () => Q(e),
                                                          onRemix: () => (0, l_.A)(e, a),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                W.length > 0
                                    ? (0, r.jsxs)("div", {
                                          className: dh.qx,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: dh.uc,
                                                  children: [
                                                      (0, r.jsx)(y.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: ed.intl.string(ec.default["wFi8+o"]),
                                                      }),
                                                      (0, r.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: ed.intl.string(ec.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: dh.Dq,
                                                  children: W.map((e) =>
                                                      (0, r.jsx)(
                                                          db,
                                                          {
                                                              project: e,
                                                              guildId: a,
                                                              onSelect: () => Q(e),
                                                              onRemix: () => (0, l_.A)(e, a),
                                                              shared: !0,
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function dw(e) {
    let t,
        { guildId: l, projectId: n } = e,
        a = (0, f.yK)([eC.Ay], () => eC.Ay.getOwnedProjects()),
        s = (0, f.yK)([Q.Ay], () => Q.Ay.getSelfMember(l)?.roles ?? [], [l]),
        o = (0, f.bG)(
            [Y.A, Z.A],
            () => {
                let e = Y.A.getGuild(l);
                return null != e && Z.A.can(eb.xBc.MANAGE_GUILD, e);
            },
            [l],
        ),
        [u, c] = i.useState(""),
        d = n ?? null,
        [m, h] = i.useState(!1),
        [g, x] = i.useState(null),
        p = (0, tQ.z9)("VibegrationsScreen"),
        [y, k] = i.useState(null),
        w = (0, F.o)().get(tG.f_) === eH;
    i.useEffect(() => {
        k(null);
    }, [l, w]);
    let N = i.useMemo(() => (!w && p.some((e) => e.id === l) ? l : eH), [p, l, w]),
        A = y ?? N,
        S = A === eH ? "user" : "guild",
        C = A === eH ? l : A,
        [E, I] = i.useState(null);
    (i.useEffect(() => {
        (0, eS.hF)(l);
    }, [l, s, o]),
        i.useEffect(() => {
            (0, eS.dm)(l, d);
        }, [l, d]));
    let M = i.useCallback(
            async (e, t, l) => {
                let n = await (0, eS.gA)({ guild_id: t, install_scope: l });
                ((0, er.Hc)(n),
                    (0, er.r2)(n, E ?? ee.A4),
                    e(n),
                    (0, V.pX)(eb.BVt.CHANNEL(t, ey.VV.CONJURE, n)),
                    c(""),
                    I(null));
            },
            [E],
        ),
        T = i.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    l = eA({ idea: t, installScope: S, submitting: m });
                if ("idea" !== l && "submitting" !== l) {
                    (null != e && c(e), h(!0), x(null));
                    try {
                        await M((e) => (0, er.dv)(e, t), C, S);
                    } catch (e) {
                        x((0, ew.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [M, S, C, u, m],
        ),
        _ = i.useCallback(
            async (e) => {
                if (!m) {
                    (h(!0), x(null));
                    try {
                        await M(
                            (t) => {
                                var l;
                                (0, er.dv)(
                                    t,
                                    ((l = e.name),
                                    ed.intl.formatToPlainString(ec.default["0PQip6"], { templateName: l })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            C,
                            S,
                        );
                    } catch (e) {
                        x((0, ew.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [M, S, C, m],
        ),
        P = i.useCallback(
            async (e, t) => {
                let l = await (0, eS.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, er.Hc)(l), (0, er.r2)(l, E ?? ee.A4), (0, er.dv)(l, (0, lP.Wl)(e)), l);
            },
            [E],
        ),
        R = i.useCallback(async (e, t, l, n) => {
            if (eC.Ay.getProject(t)?.guild_id !== l) {
                let e = await (0, eS.M7)(t, { guild_id: l, preview_guild_id: l });
                if (!e.ok) throw new ew.DS((0, ew.hj)(e), e.status);
            }
            ((0, er.dv)(t, n, void 0, { templateId: e.id }), (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE, t)), I(null));
        }, []),
        L = i.useCallback((e) => {
            (0, eS.xx)(e).catch(() => void 0);
        }, []),
        D = i.useCallback(
            (e) => {
                let t = eC.Ay.getProject(e)?.guild_id ?? l;
                ((0, V.pX)(eb.BVt.CHANNEL(t, ey.VV.CONJURE, e)), I(null));
            },
            [l],
        ),
        [$, z] = i.useState(!1),
        O = i.useCallback(
            async (e, t) => {
                let n = em(e);
                if (null != n) return void (0, v.P)((0, j.o)(n, b.Ck.FAILURE));
                z(!0);
                let a = null;
                try {
                    ((a = await (0, eS.gA)({ guild_id: l, install_scope: t })),
                        (0, er.Hc)(a),
                        (0, er.r2)(a, E ?? ee.A4),
                        await ef(a, e, ed.intl.string(ec.default["LUc7/5"])),
                        (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE, a)),
                        I(null));
                } catch {
                    (null != a && (await (0, eS.xx)(a).catch(() => void 0)),
                        (0, v.P)((0, j.o)(ed.intl.string(ec.default["Q+l4Hv"]), b.Ck.FAILURE)));
                } finally {
                    z(!1);
                }
            },
            [l, E],
        ),
        U = i.useCallback(
            (e) => {
                (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE, e));
            },
            [l],
        ),
        G = i.useCallback(() => {
            (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE));
        }, [l]),
        q = i.useCallback((e) => {
            (c(e), x(null));
        }, []),
        B = (0, f.bG)(
            [eC.Ay],
            () => {
                if (null == d) return null;
                let e = eC.Ay.getProject(d);
                return null == e || (0, eC.PV)(e) || e.guild_id === l ? e : null;
            },
            [d, l],
        ),
        H = (0, f.bG)([eC.Ay], () => eC.Ay.hasFetchedGuildProjects(l), [l]);
    return null != d
        ? (0, r.jsx)(dy, { project: B, projectsLoaded: H, onBack: G, guildId: l }, d)
        : (0, r.jsx)(dk, {
              projects: a,
              modelSettings: E,
              onModelSettingsChange: I,
              idea: u,
              guildId: l,
              submitting: m,
              createError: g,
              createDisabled: "idea" === (t = eA({ idea: u, installScope: S, submitting: m })) || "submitting" === t,
              onSelectProject: U,
              onIdeaChange: q,
              onCreate: T,
              onCreateFromTemplate: _,
              onStartTemplate: P,
              onSubmitTemplate: R,
              onCancelTemplate: L,
              onSkipTemplate: D,
              onImportNewProject: O,
              importing: $,
              conjureTarget: A,
              onConjureTargetChange: k,
              eligibleGuilds: p,
          });
}
