(l.r(t), l.d(t, { default: () => dQ }), l(321073));
var n,
    a,
    i,
    r = l(477900),
    s = l(582128),
    u = l(503698),
    o = l.n(u),
    d = l(536637),
    c = l.n(d),
    f = l(478104),
    m = l(17928),
    g = l(314116),
    h = l(534890),
    x = l(646270),
    p = l(31300),
    v = l(831453),
    b = l(739187),
    j = l(857250),
    y = l(97483),
    k = l(834730),
    w = l(939249),
    A = l(866665),
    N = l(140735),
    C = l(289873),
    S = l(821609),
    E = l(604525),
    I = l(92446),
    T = l(625903),
    M = l(297264),
    _ = l(97893),
    P = l(364522),
    R = l(103557),
    L = l(691885),
    D = l(789645),
    O = l(152367),
    F = l(661531),
    z = l(442433),
    U = l(458518),
    G = l(627363),
    $ = l(47167),
    q = l(713654),
    B = l(625180),
    H = l(672929),
    V = l(775946),
    K = l(742589),
    W = l(976860),
    J = l(402860),
    X = l(885386),
    Q = l(734057),
    Y = l(696451),
    Z = l(71393),
    ee = l(576705),
    et = l(164892),
    el = l(922016),
    en = l(980707),
    ea = l(477782),
    ei = l(81369),
    er = l(712808);
(l(323874), l(14289), l(35956));
var es = l(77729),
    eu = l(723702),
    eo = l(264572).Buffer;
async function ed(e, t) {
    if (eu.isPlatformEmbedded) {
        let l = eo.from(await e.arrayBuffer());
        if ("function" == typeof es.A.fileManager.saveWithDialog2) await es.A.fileManager.saveWithDialog2(l, t);
        else
            try {
                await es.A.fileManager.saveWithDialog(l, t);
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
var ec = l(248675),
    ef = l(375708);
async function em(e, t, l) {
    (0, er.Hc)(e);
    let n = await (0, er.vX)(e, t);
    (0, er.dv)(e, l, [n]);
}
function eg(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, et.Oq)(e.size, t)
        ? null
        : ef.intl.formatToPlainString(ec.default.ThxcOX, { size: (0, et.sM)((0, et.Ju)(t)) });
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
    await ed(a, n);
}
function ex(e) {
    let t = s.useRef(null),
        l = s.useCallback(
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
var ep = l(950305),
    ev = l(664121);
let eb = [
    { value: "user", icon: ep.UserIcon, nameMessage: ec.default.s1TsXl },
    { value: "guild", icon: ev.R, nameMessage: ec.default.LlLIJw },
];
function ej(e) {
    let { importing: t, onImport: l } = e,
        n = s.useRef(null),
        a = ex(s.useCallback((e) => l(e, "user"), [l])),
        i = ex(s.useCallback((e) => l(e, "guild"), [l])),
        u = { user: a.open, guild: i.open };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(el.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: el.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(en.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": ef.intl.string(ec.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, r.jsx)(ea.rX, {
                            label: ef.intl.string(ec.default.NyVn6T),
                            children: eb
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: ef.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, r.jsx)(
                                        ea.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: u[e.scope] },
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
                        icon: ei.H,
                        text: ef.intl.string(ec.default.NJGZA3),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": a,
                    });
                },
            }),
            a.input,
            i.input,
        ],
    });
}
var ey = l(652215),
    ek = l(746080),
    ew = l(404373),
    eA = l(639519),
    eN = l(361504);
function eC(e) {
    let { idea: t, installScope: l, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var eS = l(371169),
    eE = l(260498);
function eI(e) {
    let { className: t, ariaLabel: l, disabled: n, onClick: a, children: i } = e;
    return (0, r.jsx)(w.D, { "aria-disabled": n, "aria-label": l, className: t, onClick: n ? void 0 : a, children: i });
}
var eT = l(865665),
    eM = l(373913);
let e_ = { x: 5, y: 7 },
    eP = { x: 5, y: 4 };
function eR(e) {
    let { listClassName: t, radius: l, children: n } = e,
        [a, i] = s.useState(!1);
    return (0, r.jsxs)("div", {
        className: eM.n,
        onMouseEnter: () => i(!0),
        onMouseLeave: () => i(!1),
        children: [
            (0, r.jsx)("ol", { className: t, children: n }),
            a ? (0, r.jsx)(eT.C, { area: 64, radius: l, color: F.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eL = l(864970),
    eD = l(707554),
    eO = l(770178),
    eF = l(765548),
    ez = l(595528),
    eU = l(885576),
    eG = l(662429);
let e$ = "heading-xxl/semibold",
    eq = !1;
function eB() {
    let e = s.useRef(null),
        [t, l] = s.useState(!0),
        n = (0, eF.A)((e) => {
            l(e.target.clientWidth >= 500);
        }),
        a = (0, eO.w)(n, [], { fireOnMount: !0 }),
        i = (0, m.bG)([ez.A], () => ez.A.isConnected());
    s.useEffect(() => {
        if (!i || !t || eq) return;
        let l = !1,
            n = 0;
        function a() {
            l ||
                (n = window.setTimeout(() => {
                    ((eq = !0), e.current?.play());
                }, 400));
        }
        let r = document.fonts;
        return (
            null == r ? a() : r.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(a, a),
            () => {
                ((l = !0), window.clearTimeout(n));
            }
        );
    }, [i, t]);
    let u = (0, m.bG)([eU.A], () => eU.A.isIdle()),
        o = s.useRef(u);
    s.useEffect(() => {
        let t = o.current && !u;
        ((o.current = u), t && eq && (e.current?.stop(), e.current?.play()));
    }, [u]);
    let d = ef.intl.string(ec.default["+5XyCR"]);
    return (0, r.jsx)("div", {
        ref: a,
        className: eG.x,
        children: t
            ? (0, r.jsx)(eD.H, { children: (0, r.jsx)(eL.o, { ref: e, text: d, variant: e$, delay: null }) })
            : (0, r.jsx)(M.D, { variant: e$, children: d }),
    });
}
var eH = l(548118);
let eV = "user",
    eK = Object.freeze({ x: 0.5, y: 0.5 });
function eW(e) {
    return "" !== e.trim();
}
function eJ(e) {
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
function eX(e) {
    let { kind: t, name: l } = eJ(e);
    return [t, l].filter((e) => "" !== e).join(" ");
}
function eQ(e) {
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
let eY = "[vibegrations:selected] ",
    eZ = " \u2014 ";
function e0(e) {
    if (!e.startsWith(eY)) return null;
    let t = e.indexOf("\n"),
        l = -1 === t ? e : e.slice(0, t),
        n = -1 === t ? "" : e.slice(t + 1),
        a = l.slice(eY.length),
        i = a.indexOf(eZ),
        r = (-1 === i ? a : a.slice(0, i)).trim();
    return "" === r ? null : { label: r, body: n };
}
let e1 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    e2 = new Map(),
    e3 = new Set();
function e5(e) {
    return e2.get(e) ?? e1;
}
function e4(e, t) {
    for (let l of (t.active || 0 !== t.annotations.length ? e2.set(e, t) : e2.delete(e), [...e3]))
        try {
            l();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function e7(e) {
    e2.has(e) && e4(e, e1);
}
function e8(e, t) {
    let l = e5(e);
    l.active && e4(e, { ...l, context: t });
}
function e6(e, t) {
    return null != t && e.authorId === t;
}
function e9(e) {
    return (
        e3.add(e),
        () => {
            e3.delete(e);
        }
    );
}
function te(e) {
    let t = s.useCallback(() => (null == e ? e1 : e5(e)), [e]);
    return s.useSyncExternalStore(e9, t, t);
}
var tt = l(192308),
    tl = l(855793),
    tn = l(128761),
    ta = l(967008),
    ti = l(900797),
    tr = l(320448),
    ts = l(783977),
    tu = l(344587),
    to = l(534554),
    td = l(837984),
    tc = l(359589),
    tf = l(254575);
function tm(e) {
    let [t, l] = s.useState(e),
        [n, a] = s.useState(!1),
        [i, r] = s.useState(e);
    return (
        i !== e && (r(e), e ? l(!0) : a(!1)),
        s.useEffect(() => {
            if (e || !t) return;
            let n = setTimeout(() => l(!1), 150);
            return () => clearTimeout(n);
        }, [e, t]),
        s.useEffect(() => {
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
function tg(e) {
    let { settings: t, tiers: l, choices: n, disabled: a, onChange: i, placement: u, open: d, entered: c } = e,
        [f, m] = s.useState(!1),
        g = tm(f),
        h = et.PY.indexOf(t.tier),
        x = f ? ti.t : tr._,
        p = et.PY.map(to.D0),
        v = (0, to.Tc)(t.tier),
        { text: b, phase: j } = (0, tu.Q)(v);
    return (0, r.jsx)("div", {
        className: tf.qd,
        "data-placement": u ?? void 0,
        children: (0, r.jsxs)("div", {
            className: o()(tf.t$, { [tf.Zr]: d && c, [tf.GF]: !d }),
            role: "dialog",
            "aria-label": ef.intl.string(ec.default["3E7Yc0"]),
            children: [
                g.mounted
                    ? (0, r.jsx)("div", {
                          className: o()(tf.Nr, tf.uO, { [tf.Zr]: f && g.entered, [tf.GF]: !f }),
                          children: (0, r.jsx)(tc.bR, { settings: t, tiers: l, choices: n, disabled: a, onChange: i }),
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: `${tf.Nr} ${tf.rF}`,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tf.wx,
                            children: [
                                (0, r.jsxs)("button", {
                                    type: "button",
                                    className: tf.y6,
                                    "aria-expanded": f,
                                    "aria-label": ef.intl.string(ec.default.eGqPbV),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, r.jsx)(k.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: ef.intl.string(ec.default.aBPQxX),
                                        }),
                                        (0, r.jsx)(x, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: tf.vg,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(k.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: o()(tf.Z, { [tf.xQ]: "exit" === j, [tf.lm]: "enter" === j }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tf.hs,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: tf.Nb,
                                    children: [
                                        (0, r.jsx)(k.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ef.intl.string(ec.default["/tlOR5"]),
                                        }),
                                        (0, r.jsx)(k.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ef.intl.string(ec.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(td.A, {
                                    activeIndex: h,
                                    stops: p,
                                    ariaLabel: ef.intl.string(ec.default.aBPQxX),
                                    disabled: a,
                                    onSelect: function (e) {
                                        let l = et.PY[e];
                                        null != l && l !== t.tier && i((0, to.CM)((0, to.j6)(t, l)));
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
    let { settings: t, tiers: l, choices: n, disabled: a, onChange: i, className: u, icon: o } = e,
        d = s.useRef(null),
        [c, f] = (0, tc.FT)(t, i),
        [m, g] = s.useState(!1),
        { mounted: h, entered: x } = tm(m);
    return (0, r.jsx)(el.Y, {
        targetElementRef: d,
        position: "top",
        align: "right",
        shouldShow: h,
        onRequestClose: () => g(!1),
        animation: el.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, r.jsx)(tg, {
                settings: c,
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
            return (0, r.jsx)(A.m, {
                text: ef.intl.string(ec.default["k2JN/p"]),
                shouldShow: !l,
                ariaHidden: !0,
                children: (0, r.jsx)(w.D, {
                    innerRef: d,
                    className: u ?? tf.hZ,
                    "aria-label": ef.intl.string(ec.default["k2JN/p"]),
                    ...e,
                    onClick: () => g((e) => !e),
                    "aria-expanded": m,
                    children: o ?? (0, r.jsx)(ts.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tx = l(111534),
    tp = l(573083),
    tv = l(855859),
    tb = l(238490),
    tj = l(754027),
    ty = l(598748),
    tk = l(294323),
    tw = l(25451),
    tA = l(280450),
    tN = l(86147),
    tC = l(729475),
    tS = l(91242),
    tE = l(869146),
    tI = l(475815),
    tT = l(621466);
function tM(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function t_(e) {
    let t;
    return (
        null != e &&
        ((t =
            document.fullscreenElement ??
            document.webkitFullscreenElement ??
            document.mozFullScreenElement ??
            document.msFullscreenElement ??
            null),
        ((0, tT.vq)(t, Element) ? t.getAttribute("data-frame-id") : null) === e)
    );
}
function tP(e) {
    return (0, tI.a3)(document, e);
}
function tR(e) {
    return s.useSyncExternalStore(tP, () => t_(e));
}
var tL = l(165610);
function tD(e) {
    let { frame: t, controlProjectId: l } = e,
        n = tR(t?.id ?? null),
        a = (0, tp.Zv)(l),
        i = (0, m.bG)(
            [tE.A, tS.A],
            () => null != t && tE.A.getWindowOpen(ey.MLl.ACTIVITY_POPOUT) && tS.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tL.x1)(t) || i || a) return null;
    let s = tM(t.id);
    if (null == s || !(0, tI.Ub)(s)) return null;
    let u = ef.intl.string(n ? ef.t.Z7MyNB : ef.t.OIDkcp);
    return (0, r.jsx)(K.A.Icon, {
        tooltip: u,
        icon: n ? tN.z : tC.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": n,
        selected: n,
        onClick: () => {
            var e;
            let l;
            null != (l = tM((e = t.id))) && (0, tI.Ub)(l) && (t_(e) ? (0, tI.sP)(l) : (0, tI.tl)(l));
        },
    });
}
var tO = l(629584),
    tF = l(696645),
    tz = l(861899);
function tU(e) {
    let { modes: t, mode: l, onChange: n, className: a } = e,
        i = s.useMemo(() => t.map((e) => ({ value: e, name: (0, tF.kZ)(e), "aria-controls": (0, tF.z3)(e) })), [t]),
        u = s.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == l
        ? null
        : (0, r.jsx)(tO.I, {
              role: "tablist",
              look: "pill",
              className: o()(tz.b, a),
              optionClassName: tz.u,
              options: i,
              value: l,
              onChange: u,
          });
}
var tG = l(226178),
    t$ = l(434279),
    tq = l(941985),
    tB = l(287809),
    tH = l(427262),
    tV = l(245179),
    tK = l(803306);
let tW = new Set(),
    tJ = new Map();
function tX(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
function tQ(e) {
    if (null == e || tW.has(e) || null != tB.default.getUser(e)) return;
    let t = tJ.get(e) ?? 0;
    t >= 3 ||
        (tJ.set(e, t + 1),
        tW.add(e),
        tK
            .wz(e)
            .finally(() => tW.delete(e))
            .catch(() => {}));
}
var tY = l(16619),
    tZ = l(782603),
    t0 = l(780338),
    t1 = l(663417),
    t2 = l(70688),
    t3 = l(173936),
    t5 = l(473935),
    t4 = l(408278),
    t7 = l(365199),
    t8 = l(7437),
    t6 = l(147036),
    t9 = l(957565),
    le = l(785389),
    lt = l(123917);
let ll = new Set();
var ln = l(616334),
    la = l(189714),
    li = l(552821);
let lr = [];
function ls(e) {
    (0, b.P)((0, j.o)(e, y.Ck.FAILURE));
}
function lu(e) {
    let {
            projectId: t,
            projectName: l,
            guildId: n,
            projectGuildId: a,
            isOwner: i,
            canRemix: u,
            onExport: o,
            onImport: d,
            onRemix: c,
            onConnectTool: f,
            onHistory: h,
            onRefresh: x,
            isRefreshing: p = !1,
            onClose: v,
            refreshApplicationId: k,
            previewProjectId: w,
            onCloseMenu: A,
        } = e,
        N = (0, la.iI)(t),
        { pending: C, refresh: S } = (0, t8.A)(k ?? null),
        { pending: E, connect: I } = (function (e, t) {
            let [l, n] = s.useState(ll),
                a = s.useRef(ll),
                i = s.useCallback((e) => {
                    ((a.current = (0, le.Q6)(a.current, e)), n(a.current));
                }, []);
            return {
                pending: l,
                connect: s.useCallback(
                    (l) => {
                        if (null == e) return;
                        let r = (0, le.K9)(a.current, l.type);
                        async function s() {
                            let n = await (0, er.JI)(e, l.type);
                            (i(l.type), "url" === n.type)
                                ? (0, lt.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, le.rq)(n.error)
                                          ? ef.intl.string(ec.default["jCQ/1B"])
                                          : ef.intl.string(ec.default.POxkSh),
                                  );
                        }
                        null != r && ((a.current = r), n(r), s().catch(() => i(l.type)));
                    },
                    [t, e, i],
                ),
            };
        })(w ?? null, ls),
        M = (0, m.bG)([er.Ay], () => (null == w ? lr : er.Ay.getDeclaredConnections(w))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: l, offers: n, connectPending: a } = e,
                i = [];
            for (let { connection: e, offer: r } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: ef.intl.string(ec.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: l,
                }),
            n))
                i.push(
                    "authorize" === r
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: ef.intl.formatToPlainString(ec.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: ef.intl.formatToPlainString(ec.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != k,
            refreshPending: C,
            offers: s.useMemo(() => (0, le.Xl)(M), [M]),
            connectPending: E,
        }),
        P = s.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        R = null != c && u,
        L = i && null != d,
        D = R || null != o || L || null != f || null != h,
        O = t9.p5 && null != n,
        F = t9.p5,
        z = N ? tZ.BellIcon : t0.BellSlashIcon;
    return (0, r.jsxs)(en.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": ef.intl.string(ef.t.ogxXGq),
        onClose: A,
        onSelect: A,
        children: [
            null != x || null != v
                ? (0, r.jsxs)(ea.rX, {
                      children: [
                          null != x
                              ? (0, r.jsx)(ea.Dr, {
                                    id: "refresh",
                                    icon: t1.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t1.RefreshIcon },
                                    label: ef.intl.string(ec.default["p4B/7M"]),
                                    disabled: p,
                                    action: x,
                                })
                              : null,
                          null != v
                              ? (0, r.jsx)(ea.Dr, {
                                    id: "close",
                                    icon: t2.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t2.DoorExitIcon },
                                    label: ef.intl.string(ec.default["/TlGcK"]),
                                    action: v,
                                })
                              : null,
                      ],
                  })
                : null,
            _.length > 0
                ? (0, r.jsx)(ea.rX, {
                      children: _.map((e) =>
                          (0, r.jsx)(
                              ea.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void S();
                                      let t = null == e.connectionType ? null : P.get(e.connectionType);
                                      null != t && I(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, r.jsx)(ea.rX, {
                children: (0, r.jsx)(ea.Dr, {
                    id: "mute",
                    label: ef.intl.string(N ? ec.default.s9rCuH : ec.default["a+i/As"]),
                    icon: z,
                    leadingAccessory: { type: "icon", icon: z },
                    action: () => (0, la.$L)(t, !N),
                }),
            }),
            D
                ? (0, r.jsxs)(ea.rX, {
                      children: [
                          R
                              ? (0, r.jsx)(ea.Dr, { id: "remix", label: ef.intl.string(ec.default.XWgAfc), action: c })
                              : null,
                          null != o
                              ? (0, r.jsx)(ea.Dr, { id: "export", label: ef.intl.string(ec.default.WsEEP7), action: o })
                              : null,
                          L
                              ? (0, r.jsx)(ea.Dr, { id: "import", label: ef.intl.string(ec.default.rWGY3e), action: d })
                              : null,
                          null != f
                              ? (0, r.jsx)(ea.Dr, {
                                    id: "connect-tool",
                                    label: ef.intl.string(ec.default.yOIql5),
                                    action: f,
                                })
                              : null,
                          null != h
                              ? (0, r.jsx)(ea.Dr, {
                                    id: "history",
                                    label: ef.intl.string(ec.default["3hIVou"]),
                                    action: h,
                                })
                              : null,
                      ],
                  })
                : null,
            F
                ? (0, r.jsxs)(ea.rX, {
                      children: [
                          O
                              ? (0, r.jsx)(ea.Dr, {
                                    id: "copy-link",
                                    label: ef.intl.string(ef.t.WqhZss),
                                    icon: t3.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t3.LinkIcon },
                                    action: () =>
                                        (0, t9.C)((0, t6.n)(n, ek.VV.CONJURE, t), () =>
                                            (0, b.P)((0, j.o)(ef.intl.string(ef.t["L/PwZf"]), y.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(ea.Dr, {
                              id: "copy-project-id",
                              label: ef.intl.string(ec.default["nm/zuU"]),
                              icon: t5.L,
                              leadingAccessory: { type: "icon", icon: t5.L },
                              action: () =>
                                  (0, t9.C)(t, () =>
                                      (0, b.P)((0, j.o)(ef.intl.string(ec.default.CmfaZG), y.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            i
                ? (0, r.jsxs)(ea.rX, {
                      children: [
                          (0, r.jsx)(ea.Dr, {
                              id: "settings",
                              label: ef.intl.string(ec.default.FzfmQ8),
                              icon: T.SettingsIcon,
                              leadingAccessory: { type: "icon", icon: T.SettingsIcon },
                              action: () => (0, ln.A)(t, { guildId: a ?? n, initialTab: "project", isPreview: !0 }),
                          }),
                          (0, r.jsx)(ea.Dr, {
                              id: "delete",
                              label: ef.intl.string(ef.t.oyYWHE),
                              color: "danger",
                              action: () => {
                                  (0, g.A)({
                                      title: ef.intl.formatToPlainString(ec.default.CJBhb2, { name: l }),
                                      subtitle: ef.intl.string(ec.default["0OmrVn"]),
                                      confirmText: ef.intl.string(ef.t.oyYWHE),
                                      variant: "critical",
                                      onConfirm: () => {
                                          (0, eS.K)(t, () =>
                                              (0, b.P)((0, j.o)(ef.intl.string(ec.default["0XDHob"]), y.Ck.FAILURE)),
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
function lo(e) {
    let { trigger: t = "header", ...l } = e,
        n = s.useRef(null);
    return (0, r.jsx)(el.Y, {
        targetElementRef: n,
        position: "bottom",
        align: "right",
        animation: el.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(lu, { ...l, onCloseMenu: t });
        },
        children: (e, l) => {
            let { onClick: a } = e,
                { isShown: i } = l;
            return (0, r.jsx)("div", {
                ref: n,
                className: li.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(A.m, {
                              text: ef.intl.string(ef.t["UKOtz+"]),
                              children: (0, r.jsx)(t4.K, {
                                  icon: t7.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ef.intl.string(ef.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: a,
                              }),
                          })
                        : (0, r.jsx)(K.A.Icon, {
                              icon: t7.MoreHorizontalIcon,
                              tooltip: ef.intl.string(ef.t["UKOtz+"]),
                              "aria-label": ef.intl.string(ef.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: a,
                          }),
            });
        },
    });
}
var ld = l(845079),
    lc = l(104171),
    lf = l(286739);
function lm(e) {
    let { creator: t, className: l } = e;
    return (0, r.jsx)("div", {
        className: o()(lf.c, l),
        "aria-hidden": !0,
        children: (0, r.jsx)(lc.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: lc.DN.SIZE_16 }),
    });
}
var lg = l(580954),
    lh = l(246338);
let lx = "user",
    lp = "no-server",
    lv = new Map();
function lb(e) {
    return lv.get(e) ?? null;
}
function lj(e) {
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
            return null == (0, t$.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var lk = l(506774);
let lw = "VibegrationsProjectsPanelOpen";
function lA() {
    return lk.w.get(lw) ?? null;
}
function lN(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
function lC(e, t, l) {
    return t?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : l;
}
async function lS(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, eS.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var lE = l(73153),
    lI = l(587895),
    lT = l(321191),
    lM = l(808728),
    l_ = l(385081),
    lP = l(89505);
function lR(e) {
    let { installScope: t, status: l, integrationStatus: n, guildName: a, appChannelName: i } = e;
    if (null == l) return null;
    let r = l.surface;
    if ("unpublished" === l.state && null == r && n?.preview_ready !== !0) return null;
    let s =
            null == r
                ? null
                : "user" === t
                  ? (function (e) {
                        switch (e) {
                            case "bot":
                                return {
                                    update: ef.intl.string(ec.default.JpDnbE),
                                    open: ef.intl.string(ec.default.NNIwRu),
                                    destination: "dm",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: ef.intl.string(ec.default.QesMDC),
                                    open: ef.intl.string(ec.default.iyQTsb),
                                    destination: "launch",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return {
                                    update: ef.intl.string(ec.default["LUi/55"]),
                                    open: ef.intl.string(ec.default.TXUK1g),
                                    destination: "profile",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !0,
                                };
                            case "automod":
                                return null;
                        }
                    })(r)
                  : (function (e, t, l) {
                        if (null == t) return null;
                        let n = ef.intl.formatToPlainString(ec.default.fTgw6C, { server: t });
                        switch (e) {
                            case "bot":
                                return {
                                    update: ef.intl.string(ec.default.JpDnbE),
                                    open: n,
                                    destination: "guild",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: ef.intl.string(ec.default.QesMDC),
                                    open:
                                        null == l ? n : ef.intl.formatToPlainString(ec.default.l9xGQD, { channel: l }),
                                    destination: "channel",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "automod":
                                return {
                                    update: ef.intl.string(ec.default.bwBMMn),
                                    open: ef.intl.string(ec.default.KjbLum),
                                    destination: "automod",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return null;
                        }
                    })(r, a, i),
        u = (function (e) {
            let { installScope: t, status: l, appChannelName: n, appChannelPending: a, botInGuild: i } = e;
            return (
                "guild" === t &&
                null != l &&
                "unpublished" !== l.state &&
                ("activity" === l.surface ? null == n && !0 !== a : "bot" === l.surface && !1 === i)
            );
        })(e);
    if (null != s && "up_to_date" === l.state && !u)
        return {
            label: s.open,
            intent: "open",
            action: "open",
            destination: s.destination,
            navigatesOnPublish: !1,
            upToDate: !0,
            isUpdate: !1,
            disabledReason: null,
        };
    let o = (function (e) {
            let {
                installScope: t,
                guildName: l,
                canManageGuild: n,
                canManageChannels: a,
                usesNativeAppChannels: i,
            } = e;
            if ("guild" !== t) return null;
            let r = !1 === n,
                s = i && !1 === a,
                u = { server: l ?? "" };
            return r && s
                ? ef.intl.formatToPlainString(ec.default["4sqXfg"], u)
                : r
                  ? ef.intl.formatToPlainString(ec.default.N4NkyR, u)
                  : s
                    ? ef.intl.formatToPlainString(ec.default.PxtHIV, u)
                    : null;
        })(e),
        d = (0, tb.Qg)({
            installScope: t,
            previewReady: n?.preview_ready === !0,
            integrationInstalled: n?.integration_installed ?? null,
            botPermissionsChanged: n?.bot_permissions_changed === !0,
        }),
        c = "changes" === l.state && !u,
        f = {
            intent: d ? "consent_then_publish" : "publish",
            destination: s?.destination ?? null,
            upToDate: !1,
            isUpdate: c,
            disabledReason: o,
        },
        m = null != s && (c ? s.navigatesOnUpdate : s.navigatesOnFirstPublish);
    if (d && n?.bot_permissions_changed === !0)
        return {
            ...f,
            label: ef.intl.string(ec.default["tUeY/h"]),
            action: "review_permissions",
            navigatesOnPublish: m,
        };
    let g = s?.update ?? ef.intl.string(ec.default.QesMDC);
    return { ...f, label: c ? g : ef.intl.string(ec.default["120EFN"]), action: "publish", navigatesOnPublish: m };
}
var lL = (((n = {}).NO_PREVIEW = "no-preview"), (n.PERMISSIONS = "permissions"), n),
    lD = l(308528),
    lO = l(345942);
let lF = s.createContext(null);
function lz(e) {
    return lI.A.getApplication(e.application_id)?.bot?.id ?? e.application_id;
}
function lU(e, t) {
    let l = eE.Ay.getProject(e);
    if (null == l) return null;
    let n = "user" === l.install_scope ? null : (l.guild_id ?? t),
        a = null == n ? null : (0, lh.i8)(n, l.application_id),
        i = null == n ? null : Z.A.getGuild(n);
    return {
        project: l,
        guildId: n,
        appChannelId: a,
        input: {
            installScope: l.install_scope,
            status: eE.Ay.getPublishStatus(e),
            integrationStatus: eE.Ay.getIntegrationStatus(e),
            guildName: i?.name ?? null,
            appChannelName: null == a ? null : (Q.A.getChannel(a)?.name ?? null),
            appChannelPending: eE.Ay.isAppChannelPending(e),
            canManageGuild: null == i ? null : ee.A.can(ey.xBc.MANAGE_GUILD, i),
            canManageChannels: null == i ? null : ee.A.can(ey.xBc.MANAGE_CHANNELS, i),
            usesNativeAppChannels: (0, et.KQ)(l),
            botInGuild: (function (e, t) {
                if (null == t) return null;
                let l = lT.A.getMutualGuilds(lz(e));
                return null == l
                    ? null
                    : l.some((e) => {
                          let { guild: l } = e;
                          return l.id === t;
                      });
            })(l, n),
        },
    };
}
function lG(e, t, l) {
    return (function e(t, l) {
        let n,
            { applicationId: a, guildId: i, appChannelId: r, openProfile: s, openAutomodSettings: u } = l;
        switch (t) {
            case "launch":
                if (null != i) return e("channel", { applicationId: a, guildId: i, appChannelId: r, openProfile: s });
                if ((0, tw.X)(lI.A.getApplication(a)))
                    return (B.A.launchFrame({ applicationId: a, surface: tL.sd }).catch(() => {}), Promise.resolve());
                break;
            case "profile": {
                let e = tB.default.getCurrentUser()?.id;
                if (null != e) return (s(e), Promise.resolve());
                break;
            }
            case "channel":
                if (null != i && null != r) return ((0, W.pX)(ey.BVt.CHANNEL(i, r)), Promise.resolve());
                break;
            case "automod":
                if (null != i && null != u) return (u(i), Promise.resolve());
        }
        if ("dm" !== t && null != i) {
            let e;
            return (
                null != (e = lM.Ay.getDefaultChannel(i)?.id) ? (0, W.pX)(ey.BVt.CHANNEL(i, e)) : (0, lO.u)(i),
                Promise.resolve()
            );
        }
        return ((n = lI.A.getApplication(a)?.bot?.id ?? a), lD.A.openPrivateChannel({ recipientIds: n }));
    })(t, {
        applicationId: e.project.application_id,
        guildId: e.guildId,
        appChannelId: e.appChannelId,
        openProfile: l.openProfile,
        openAutomodSettings: l.openAutomodSettings,
    });
}
async function l$(e, t) {
    let l = eE.Ay.getProject(e),
        n = l?.preview_application_id;
    if (null == l || null == n) return;
    let a = lC(l, eE.Ay.getIntegrationStatus(e), t);
    (null == lI.A.getApplication(n) && (await (0, G.TA)(n).catch(() => {})),
        await new Promise((e) => {
            lP.A.openConjureAppInstallModal({
                applicationId: n,
                application: lI.A.getApplication(n) ?? null,
                guildId: a,
                onClose: e,
            });
        }),
        await lS(l, a).catch(() => {}),
        await (0, eS.U1)(e).catch(() => {}));
}
function lq(e, t, l) {
    let { project: n } = e,
        { platform: a, guildId: i } = l,
        r = n.id,
        s = t.navigatesOnPublish ? t.destination : null,
        u = "user" === n.install_scope || null != s ? null : (0, er.$C)(r);
    (u?.catch(() => {}), "channel" === s && lB(r, !0));
    let o = (0, er.TV)(r).then((e) => {
            if (!0 !== e.ok) {
                let t;
                throw Error(
                    null != (t = e.detail?.trim()) && "" !== t
                        ? ef.intl.formatToPlainString(ec.default["7ZsIF1"], { reason: t })
                        : ef.intl.string(ec.default.gMWZeG),
                );
            }
            return e;
        }),
        d = o.then(
            () =>
                (0, eS.tZ)(r, { isPreview: !1 }).catch((e) => {
                    console.error("[vibegrations] post-publish refresh failed", r, e);
                }),
            () => {},
        );
    if (
        (o.then(
            () => {
                (null != e.guildId && lV(n),
                    null != s &&
                        d
                            .then(() => ("channel" === s ? lH(r, i) : void 0))
                            .finally(() => lB(r, !1))
                            .then(() => lG(lU(r, i) ?? e, s, a))
                            .catch(() => {}));
            },
            (e) => {
                (lB(r, !1), a.showError(e instanceof Error ? e.message : ef.intl.string(ec.default.gMWZeG)));
            },
        ),
        null != u && null != e.guildId)
    ) {
        let t = o.then(() => {});
        (t.catch(() => {}),
            a.openPublishNotes({
                projectId: r,
                guildId: e.guildId,
                applicationId: n.application_id,
                projectName: n.name,
                publish: t,
                initialDraft: u,
            }));
    }
}
function lB(e, t) {
    lE.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function lH(e, t) {
    let l = Date.now() + 5e3;
    for (; lU(e, t)?.appChannelId == null && Date.now() < l;) await new Promise((e) => setTimeout(e, 250));
}
function lV(e) {
    (0, tK.eO)(lz(e), { withMutualGuilds: !0 }).catch(() => {});
}
let lK = new Set();
async function lW(e, t, l) {
    let { guildId: n, platform: a } = l;
    if (!0 === l.busy || lK.has(e)) return;
    let i = lU(e, n);
    if (null == i || eE.Ay.isProjectPublishing(e)) return;
    let r = lR(i.input);
    if (null != r) {
        if (
            ((0, l_.yJ)(e, {
                entryPoint: t,
                publishState: i.input.status?.state ?? null,
                surface: i.input.status?.surface ?? null,
                installScope: i.project.install_scope,
                action: r.action,
            }),
            "open" === r.intent)
        ) {
            null != r.destination && lG(i, r.destination, a).catch(() => {});
            return;
        }
        if (null == r.disabledReason) {
            if (i.input.integrationStatus?.preview_ready !== !0) return void a.showPublishBlocked(lL.NO_PREVIEW);
            if ("consent_then_publish" === r.intent) {
                lK.add(e);
                try {
                    await (a.requestConsent ?? ((e) => l$(e, n)))(e);
                } finally {
                    lK.delete(e);
                }
                if (eE.Ay.isProjectPublishing(e)) return;
                let t = lU(e, n),
                    i = t?.input.integrationStatus ?? null;
                if (
                    null == t ||
                    (0, tb.Qg)({
                        installScope: t.project.install_scope,
                        previewReady: i?.preview_ready === !0,
                        integrationInstalled: i?.integration_installed ?? null,
                        botPermissionsChanged: i?.bot_permissions_changed === !0,
                    })
                )
                    return;
                lq(t, r, l);
                return;
            }
            lq(i, r, l);
        }
    }
}
function lJ(e, t) {
    let l = s.useContext(lF),
        n = t ?? l,
        a = n?.guildId ?? null,
        {
            canPublish: i,
            publishing: r,
            project: u,
            guildId: o,
            appChannelId: d,
            installScope: c,
            status: f,
            integrationStatus: g,
            guildName: h,
            appChannelName: x,
            appChannelPending: p,
            canManageGuild: v,
            canManageChannels: b,
            usesNativeAppChannels: j,
            botInGuild: y,
        } = (0, m.cf)(
            [eE.Ay, Z.A, lM.Ay, Q.A, ee.A, lT.A, lI.A],
            () => {
                let t = null == e || null == a ? null : lU(e, a);
                return {
                    canPublish: null != t && (0, eE.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing: null != e && eE.Ay.isProjectPublishing(e),
                    installScope: t?.input.installScope ?? null,
                    status: t?.input.status ?? null,
                    integrationStatus: t?.input.integrationStatus ?? null,
                    guildName: t?.input.guildName ?? null,
                    appChannelName: t?.input.appChannelName ?? null,
                    appChannelPending: t?.input.appChannelPending ?? !1,
                    canManageGuild: t?.input.canManageGuild ?? null,
                    canManageChannels: t?.input.canManageChannels ?? null,
                    usesNativeAppChannels: t?.input.usesNativeAppChannels ?? !1,
                    botInGuild: t?.input.botInGuild ?? null,
                };
            },
            [e, a],
        ),
        k = s.useMemo(
            () =>
                null == u
                    ? null
                    : {
                          installScope: c,
                          status: f,
                          integrationStatus: g,
                          guildName: h,
                          appChannelName: x,
                          appChannelPending: p,
                          canManageGuild: v,
                          canManageChannels: b,
                          usesNativeAppChannels: j,
                          botInGuild: y,
                      },
            [u, c, f, g, h, x, p, v, b, j, y],
        ),
        w = k?.status?.state ?? null,
        A = k?.installScope === "guild" && k.status?.surface === "bot";
    s.useEffect(() => {
        null != u && null != o && A && null != w && "unpublished" !== w && lV(u);
    }, [u?.id, o, A, w]);
    let N = s.useMemo(() => (null == k ? null : lR(k)), [k]),
        C = s.useCallback(
            (t) => {
                null != e &&
                    null != n &&
                    lW(e, t, n).catch((t) => {
                        console.error("[vibegrations] publish action failed", e, t);
                    });
            },
            [e, n],
        );
    return null != n && i && null != N
        ? {
              ...N,
              status: k?.status ?? null,
              guildId: o,
              appChannelId: d,
              publishing: r,
              disabled: r || !0 === n.busy || null != N.disabledReason,
              run: C,
          }
        : null;
}
var lX = l(189213);
function lQ(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = t === lL.PERMISSIONS;
    return (0, r.jsx)(lX.a, {
        transitionState: l,
        onClose: n,
        title: ef.intl.string(a ? ec.default.wQ4UyJ : ec.default.ZNGLFE),
        subtitle: ef.intl.string(a ? ec.default.Agqmbt : ec.default.ffxKGK),
        size: "sm",
        actions: [{ text: ef.intl.string(a ? ef.t.BddRzS : ec.default["/omTNx"]), variant: "primary", onClick: n }],
    });
}
var lY = l(951465),
    lZ = l(95264),
    l0 = l(952644),
    l1 = l(991690),
    l2 = l(58736),
    l3 = l(689175),
    l5 = l(65593),
    l4 = l(115982);
function l7(e) {
    return !(0, tV.BL)(e) && !0 !== e.stopRequested;
}
var l8 = l(104317),
    l6 = l(643278),
    l9 = l(566424),
    ne = l(683063),
    nt = l(847374),
    nl = l(138212);
function nn(e) {
    let { title: t, trailing: l, children: n, className: a, headerClassName: i, ...s } = e;
    return (0, r.jsxs)("section", {
        className: o()(nl.Nr, a),
        ...s,
        children: [
            (0, r.jsxs)("header", {
                className: o()(nl.wx, null != l && nl.o5, i),
                children: [
                    (0, r.jsx)(k.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            n,
        ],
    });
}
var na = l(148590);
function ni(e) {
    let { children: t } = e;
    return (0, r.jsx)(k.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nr(e) {
    let {
            title: t,
            meta: l,
            superseded: n = !1,
            showLabel: a,
            hideLabel: i,
            bodyClassName: u,
            beforeBody: d,
            children: c,
            ...f
        } = e,
        m = s.useId(),
        [g, h] = s.useState(!n),
        [x, p] = s.useState(n);
    x !== n && (p(n), h(!n));
    let v = s.useCallback(() => h((e) => !e), []),
        b = g ? nt.a : tr._,
        j = null != l || n;
    return (0, r.jsxs)(nn, {
        ...f,
        title: t,
        trailing: j
            ? (0, r.jsxs)("span", {
                  className: na.ZY,
                  children: [
                      l,
                      n
                          ? (0, r.jsx)(w.D, {
                                className: na.L$,
                                onClick: v,
                                "aria-expanded": g,
                                "aria-controls": m,
                                "aria-label": g ? i : a,
                                children: (0, r.jsx)(b, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: g ? void 0 : na.RG,
        "data-superseded": n ? "true" : void 0,
        children: [d, (0, r.jsx)("div", { id: m, className: o()(na.rf, u), hidden: !g, children: c })],
    });
}
var ns = l(883646);
let nu = [];
function no(e) {
    let { status: t } = e;
    return (0, r.jsxs)("span", {
        className: o()(ns.xL, {
            [ns.Vb]: "in_progress" === t,
            [ns.cT]: "completed" === t,
            [ns.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return ef.intl.string(ec.default.KvBdun);
                case "in_progress":
                    return ef.intl.string(ec.default["m5G9+S"]);
                case "unfinished":
                    return ef.intl.string(ec.default.lRpwhD);
                default:
                    return ef.intl.string(ec.default.sPGeWi);
            }
        })(t),
        children: [
            (0, r.jsx)(C.y, {
                type: C.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: ns.Qd,
                itemClassName: ns.xB,
                "aria-hidden": !0,
            }),
            (0, r.jsx)("svg", {
                className: ns.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, r.jsx)("path", { className: ns.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nd(e) {
    let { agents: t, active: l } = e,
        n = s.useMemo(() => (l ? t : nu), [l, t]),
        a = s.useMemo(() => new Set(n.map((e) => e.key)), [n]),
        i = n.map((e) => e.key).join("\0"),
        [u, o] = s.useState(n),
        [d, c] = s.useState(i),
        [f, m] = s.useState(!1);
    d !== i && (c(i), o([...n, ...u.filter((e) => !a.has(e.key))]), 0 === n.length && m(!1));
    let g = u.some((e) => !a.has(e.key));
    if (
        (s.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => o(n), l ? 200 : 250);
            return () => clearTimeout(e);
        }, [g, n, l]),
        s.useEffect(() => {
            if (!l || 0 === u.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => m(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [l, u.length]),
        0 === u.length)
    )
        return null;
    let h = u.slice(0, 3),
        x = u.length - h.length;
    return (0, r.jsxs)("span", {
        className: ns.X6,
        "data-shown": l && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            h.map((e) => {
                let { key: t, mark: l, name: n, task: i } = e,
                    { Illocon: s } = l;
                return (0, r.jsx)(
                    ne.u,
                    {
                        asset: (0, r.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: n,
                        body: i,
                        position: "top",
                        children: (0, r.jsx)("span", {
                            className: ns.MA,
                            "data-leaving": a.has(t) ? void 0 : "true",
                            children: (0, r.jsx)(s, { size: 16, alt: n, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, r.jsx)(k.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: ns.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function nc(e) {
    let t,
        { todos: l, provisional: n, agents: a, live: i = !0 } = e,
        u = (function (e) {
            let t = e.join("\0"),
                [l, n] = s.useState(() => new Set(e)),
                [a, i] = s.useState(t),
                [r, u] = s.useState(() => new Set());
            return (
                a !== t && (i(t), n(new Set(e)), u(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
                s.useEffect(() => {
                    if (0 === r.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => u(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [r]),
                r
            );
        })(s.useMemo(() => l.map((e) => e.id), [l])),
        d =
            ((t = (a ?? nu).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            s.useMemo(() => {
                let e = new Map();
                for (let t of a ?? nu) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, r.jsxs)("ul", {
        className: ns.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || i ? t : "unfinished");
                return (0, r.jsxs)(
                    "li",
                    {
                        className: o()(ns.AS, { [ns.J1]: "completed" === l }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, r.jsx)(no, { status: l }),
                            (0, r.jsx)(k.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: ns.iV,
                                selectable: !0,
                                children: (0, r.jsx)("span", {
                                    className: ns.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, r.jsx)(nd, { agents: d.get(e.id) ?? nu, active: "completed" !== l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != n
                ? (0, r.jsxs)("li", {
                      className: ns.AS,
                      "data-provisional": !0,
                      children: [
                          (0, r.jsx)(no, { status: "pending" }),
                          (0, r.jsx)(k.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: ns.iV,
                              selectable: !0,
                              children: (0, r.jsx)("span", { className: ns.Qq, children: n }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nf(e) {
    let { todos: t, provisional: l, agents: n, announceProgress: a = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let d = ef.intl.formatToPlainString(ec.default["P/I+JW"], { completed: u, total: o }),
        c = ef.intl.formatToPlainString(ec.default["7tzwKB"], { completed: u, total: o });
    return (0, r.jsx)(nr, {
        title: ef.intl.string(ec.default.RtzECX),
        meta: (0, r.jsx)(ni, { children: d }),
        superseded: s,
        showLabel: ef.intl.string(ec.default.RKyN9q),
        hideLabel: ef.intl.string(ec.default.xydHoj),
        className: ns.Nr,
        bodyClassName: ns.rf,
        beforeBody: a && !s ? (0, r.jsx)(N.A, { role: "status", "aria-live": "polite", children: c }) : null,
        "data-conjure-todo-card": !0,
        children: (0, r.jsx)(nc, { todos: t, provisional: l, agents: n, live: i }),
    });
}
var nm = l(308665),
    ng = l(59678),
    nh = l(903847);
function nx(e) {
    let { line: t, placement: l, todos: n, todosLive: a = !0, provisionalTodo: i, agents: u, onJumpToActivity: d } = e,
        c = null != l,
        [f, m] = s.useState(l ?? "top"),
        [g, h] = s.useState(c),
        [x, p] = s.useState(!1),
        [v, b] = s.useState(!1),
        [j, y] = s.useState(c);
    (j !== c && (y(c), null != l ? (m(l), h(!0)) : (p(!1), b(!1))),
        s.useEffect(() => {
            if (c || !g) return;
            let e = setTimeout(() => h(!1), 150);
            return () => clearTimeout(e);
        }, [c, g]),
        s.useEffect(() => {
            if (!g || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => p(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [g, c]));
    let [k, N] = s.useState(!1),
        [C, S] = s.useState(!1),
        [E, I] = s.useState(v);
    (E !== v && (I(v), v ? N(!0) : S(!1)),
        s.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => N(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        s.useEffect(() => {
            if (!k || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => S(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [k, v]));
    let T = null != n && n.length > 0,
        M = s.useCallback(() => b((e) => !e), []);
    return g
        ? (0, r.jsxs)("div", {
              className: nh.qd,
              "data-placement": f,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, r.jsxs)("div", {
                      className: o()(nh.vK, { [nh.ho]: x && c, [nh.ET]: !c }),
                      children: [
                          null == d
                              ? (0, r.jsx)("ol", {
                                    className: o()(nh.Rk, ng.pj),
                                    "data-live": "true",
                                    children: (0, r.jsx)(l9.A, {
                                        glyph: (0, r.jsx)(nm.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, r.jsx)(w.D, {
                                    className: nh.pZ,
                                    onClick: d,
                                    "aria-label": ef.intl.string(ec.default.hEK6qu),
                                    children: (0, r.jsx)("ol", {
                                        className: o()(nh.Rk, ng.pj),
                                        "data-live": "true",
                                        children: (0, r.jsx)(l9.A, {
                                            glyph: (0, r.jsx)(nm.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, r.jsx)(A.m, {
                                    text: ef.intl.string(ec.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, r.jsx)(w.D, {
                                        className: nh.BO,
                                        onClick: M,
                                        "aria-expanded": v,
                                        "aria-label": ef.intl.string(ec.default.RtzECX),
                                        children: (0, r.jsx)(l6.ClipboardListIcon, {
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
                  k && T
                      ? (0, r.jsx)("div", {
                            className: o()(nh.vB, { [nh.pg]: v && C, [nh.ui]: !v }),
                            children: (0, r.jsx)(nf, {
                                todos: n,
                                provisional: i,
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
var np = l(658675),
    nv = l(22231),
    nb = l(826745),
    nj = l(123292),
    ny = l(155078);
function nk(e) {
    return e.options.some((e) => null != e.image);
}
let nw = [];
function nA(e, t) {
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
var nN = l(87221),
    nC = l(144228),
    nS = l(241326),
    nE = l(26430),
    nI = l(750943),
    nT = l(95477),
    nM = l(256905),
    n_ = l(839214);
let nP = [],
    nR = 1,
    nL = (0, n_.D)(() => ({ draftsByProject: {} }));
function nD(e, t, l) {
    return e.draftsByProject[t]?.[l] ?? nP;
}
function nO(e, t) {
    return nD(nL.getState(), e, t);
}
function nF(e, t, l) {
    let { draftsByProject: n } = nL.getState();
    nL.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: l } } });
}
function nz(e, t, l, n) {
    let a = nO(e, t);
    return (
        !!a.some((e) => e.localId === l) &&
        (nF(
            e,
            t,
            a.map((e) => (e.localId === l ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function nU(e, t) {
    (0, er.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function nG(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && nU(e, t.ref.id));
}
function n$(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = nL.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? nP) l ? nG(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: i, ...r } = n;
    nL.setState({ draftsByProject: r });
}
function nq(e) {
    return ef.intl.formatToPlainString(ec.default.JZ59Bo, { size: (0, et.sM)((0, et.Ju)(e)) });
}
function nB(e, t) {
    let l = nO(e, t);
    if (0 !== l.length) {
        for (let t of l) nG(e, t);
        nF(e, t, nP);
    }
}
function nH(e, t) {
    let l = nO(e, t);
    if (0 === l.length) return [];
    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (nF(e, t, nP), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function nV(e, t) {
    let { clarificationAnswers: l, attachments: n = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = nO(e, "chat"),
        i = a.length > 0 && a.every((e) => "ready" === e.status) ? nH(e, "chat") : [];
    (0, er.dv)(e, t, [...n, ...i], { clarificationAnswers: l });
}
function nK(e, t) {
    let [l, n] = s.useState(null),
        [a, i] = s.useState(!1),
        [r, u] = s.useState(0);
    return (
        s.useEffect(() => {
            let l = !1;
            return (
                (0, er.PK)(e, t).then(
                    (e) => {
                        l || n(e);
                    },
                    () => {
                        l || (0 === r ? u(1) : i(!0));
                    },
                ),
                () => {
                    l = !0;
                }
            );
        }, [e, t, r]),
        {
            src: l,
            gone: a,
            handleError: s.useCallback(() => {
                (n(null),
                    (0, er.n6)(e, t).then(
                        (e) => {
                            e && 0 === r ? u(1) : i(!0);
                        },
                        () => i(!0),
                    ));
            }, [e, t, r]),
        }
    );
}
(lE.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(nL.getState().draftsByProject)) n$(e, { deleteFromWorker: !0 });
}),
    lE.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        n$(t, { deleteFromWorker: !1 });
    }));
var nW = l(907702);
function nJ(e) {
    let { projectId: t, attachmentId: l, alt: n, onMeasured: a } = e,
        { src: i, gone: u, handleError: d } = nK(t, l),
        [c, f] = s.useState(null),
        m = null != i && c === i;
    return u
        ? (0, r.jsxs)("span", {
              className: o()(nW.Gt, nW.b6),
              children: [
                  (0, r.jsx)(nN.D, { size: "md", color: "currentColor" }),
                  (0, r.jsx)(k.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: ef.intl.string(ec.default.lhgD88),
                  }),
              ],
          })
        : (0, r.jsx)("span", {
              className: o()(nW.Gt, { [nW.iP]: !m }),
              children:
                  null != i
                      ? (0, r.jsx)("img", {
                            src: i,
                            alt: n,
                            className: nW.Sl,
                            onLoad: (e) => {
                                f(i);
                                let { naturalWidth: t, naturalHeight: l } = e.currentTarget;
                                t > 0 && l > 0 && a({ width: t, height: l });
                            },
                            onError: d,
                            draggable: !1,
                        })
                      : null,
          });
}
function nX(e) {
    let t,
        l,
        {
            projectId: n,
            option: a,
            multi: i,
            selected: s,
            disabled: u,
            reachable: d,
            tabbable: c,
            onPick: f,
            onView: m,
            onArrow: g,
            onMeasured: h,
            onRemove: x,
        } = e,
        p = ef.intl.formatToPlainString(ec.default.JGjZMs, { answer: a.label });
    return (0, r.jsxs)("div", {
        className: o()(nW.Vs, { [nW.Q9]: s, [nW.RX]: u }),
        "data-conjure-clarification-option": a.id,
        children: [
            (0, r.jsxs)(w.D, {
                className: nW.Up,
                "data-conjure-image-option-pick": !0,
                onClick: u ? void 0 : () => f(a),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), g(a, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": ef.intl.formatToPlainString(ec.default.AQbxhf, { answer: a.label }),
                "aria-disabled": u,
                tabIndex: d && c ? 0 : -1,
                children: [
                    (0, r.jsxs)("span", {
                        className: nW.$_,
                        children: [
                            null != a.image
                                ? (0, r.jsx)(nJ, {
                                      projectId: n,
                                      attachmentId: a.image.attachment_id,
                                      alt: a.label,
                                      onMeasured: h,
                                  })
                                : (0, r.jsx)("span", { className: nW.Gt }),
                            (0, r.jsx)("span", {
                                className: nW.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, r.jsx)(np.P, { checked: s, disabled: u })
                                    : (0, r.jsx)(nC.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(k.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: nW.pG,
                        children:
                            "" !== (l = null != (t = a.image?.page_url ?? a.image?.url) ? (0, ny.E)(t) : "")
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
                      className: nW.B4,
                      children: (0, r.jsx)(A.m, {
                          text: ef.intl.string(ec.default.HQEXJM),
                          children: (0, r.jsx)(t4.K, {
                              icon: nS.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: x,
                              disabled: u,
                              "aria-label": ef.intl.string(ec.default.HQEXJM),
                              tabIndex: d ? 0 : -1,
                          }),
                      }),
                  })
                : null != a.image
                  ? (0, r.jsx)("span", {
                        className: nW.B4,
                        children: (0, r.jsx)(A.m, {
                            text: ef.intl.string(ec.default["4/eeDD"]),
                            children: (0, r.jsx)(t4.K, {
                                icon: nE._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(a),
                                "aria-label": p,
                                tabIndex: d && c ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function nQ(e) {
    var t;
    let { projectId: l, question: n, selectedIds: a, disabled: i, reachable: u = !0, onPick: d, own: c } = e,
        f = !0 === n.multi_select,
        { options: m } = n,
        g = m.length > 4 ? "gallery" : "row",
        h = s.useRef(null),
        x = s.useRef(new Map()),
        [p, v] = s.useState(null),
        b = null != p && m.some((e) => e.id === p) ? p : (m.find((e) => a.includes(e.id)) ?? m[0])?.id,
        j = s.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    n = t.findIndex((t) => t.id === e.id);
                n < 0 ||
                    Promise.all(t.map((e) => (0, er.PK)(l, e.image.attachment_id))).then(
                        (e) => {
                            (0, nM.R)({
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
        y = s.useCallback(
            (e, t) => {
                let l = (m.findIndex((t) => t.id === e.id) + t + m.length) % m.length,
                    n = m[l];
                (v(n.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[l]?.focus(), f || i || d(n));
            },
            [i, f, d, m],
        ),
        k =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: ef.intl.string(ec.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, r.jsxs)("div", {
        className: nW.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, r.jsxs)("div", {
                ref: h,
                className: o()(nW.fF, "gallery" === g ? nW.nV : nW.nM, { [nW.m3]: f }),
                role: f ? "group" : "radiogroup",
                "aria-labelledby": `${n.id}-label`,
                "data-layout": g,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, r.jsx)(
                            nX,
                            {
                                projectId: l,
                                option: e,
                                multi: f,
                                selected: a.includes(e.id),
                                disabled: i,
                                reachable: u,
                                tabbable: f || e.id === b,
                                onPick: (e) => {
                                    (v(e.id), d(e));
                                },
                                onView: j,
                                onArrow: y,
                                onMeasured: (t) => x.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != k
                        ? (0, r.jsx)(
                              nX,
                              {
                                  projectId: l,
                                  option: k,
                                  multi: f,
                                  selected: c.selected,
                                  disabled: i,
                                  reachable: u,
                                  tabbable: !0,
                                  onPick: c.onPick,
                                  onView: () => void 0,
                                  onArrow: () => void 0,
                                  onMeasured: () => void 0,
                                  onRemove: c.onRemove,
                              },
                              k.id,
                          )
                        : null,
                ],
            }),
            (0, r.jsx)(nY, {
                projectId: l,
                own: c,
                disabled: i,
                reachable: u,
                uploadText: ef.intl.string(/\bicons?\b/i.test(n.question) ? ec.default.qU4WN6 : ec.default.cbMDDB),
            }),
        ],
    });
}
function nY(e) {
    let { projectId: t, own: l, disabled: n, reachable: a, uploadText: i } = e,
        u = s.useRef(null),
        [o, d] = s.useState(!1),
        [c, f] = s.useState(""),
        m = a ? 0 : -1,
        g = l.busy;
    function h() {
        "" !== c.trim() &&
            null == g &&
            l.onLink(c.trim()).then(
                (e) => {
                    e && (d(!1), f(""));
                },
                () => void 0,
            );
    }
    return (0, r.jsxs)("div", {
        className: nW.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, r.jsxs)("div", {
                className: nW.QJ,
                children: [
                    (0, r.jsx)(S.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: nI.X,
                        text: i,
                        loading: "upload" === g,
                        disabled: n || "link" === g,
                        onClick: () => u.current?.click(),
                        tabIndex: m,
                        "data-conjure-own-image-upload": !0,
                    }),
                    o
                        ? null
                        : (0, r.jsx)(S.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t3.LinkIcon,
                              text: ef.intl.string(ec.default["1TgOO+"]),
                              disabled: n || "upload" === g,
                              onClick: () => d(!0),
                              tabIndex: m,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, r.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: nW.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            var n, a;
                            let i = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""),
                                null != i &&
                                    l.onUpload(
                                        ((n = i.name),
                                        (a = i.type),
                                        (0, et.Oq)(i.size, a)
                                            ? (0, er.c9)(t, i, n, a)
                                            : Promise.resolve({ errorText: nq(a) })),
                                    ));
                        },
                    }),
                ],
            }),
            o
                ? (0, r.jsxs)("div", {
                      className: nW.vG,
                      children: [
                          (0, r.jsx)("div", {
                              className: nW.Hs,
                              children: (0, r.jsx)(nT.k, {
                                  label: ef.intl.string(ec.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: ef.intl.string(ec.default.AVhvn8),
                                  value: c,
                                  onChange: (e) => f(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), h())
                                          : "Escape" === e.key && (e.stopPropagation(), d(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == g && l.error?.source === "link" ? l.error.text : null,
                                  disabled: n,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: nW.gd,
                              children: [
                                  (0, r.jsx)(S.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ef.intl.string(ec.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: n || "" === c.trim(),
                                      onClick: h,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, r.jsx)(nj.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: ef.intl.string(ec.default.eXZL4X),
                                      onClick: () => d(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            l.error?.source === "upload"
                ? (0, r.jsx)(k.E, {
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
var nZ = l(29073),
    n0 = l(384017);
function n1(e) {
    let { option: t, position: l, disabled: n, onPick: a, reachable: i = !0, selected: u } = e,
        d = s.useId(),
        c = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, r.jsxs)(w.D, {
        className: o()(n0.uK, { [n0.ue]: n, [n0.h4]: !0 === u }),
        onClick: n ? void 0 : () => a(t),
        "aria-label": ef.intl.formatToPlainString(c ? ec.default["2p6UFz"] : ec.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? d : void 0,
        "aria-disabled": n,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: i ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != u
                ? (0, r.jsx)("span", { className: n0.dy, children: (0, r.jsx)(np.P, { checked: u, disabled: n }) })
                : (0, r.jsx)("span", { className: n0.Gy, "aria-hidden": !0, children: l }),
            (0, r.jsxs)("span", {
                className: n0.qO,
                children: [
                    (0, r.jsx)("span", {
                        className: n0.l8,
                        children: (0, r.jsx)(k.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: n0.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, r.jsx)(k.E, {
                              tag: "span",
                              id: d,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            c
                ? (0, r.jsx)(k.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: n0.rM,
                      children: ef.intl.string(ec.default.zku6r1),
                  })
                : null,
        ],
    });
}
function n2(e) {
    let { projectId: t, question: l, selected: n, disabled: a, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === l.multi_select;
    return nk(l)
        ? (0, r.jsx)(nQ, { projectId: t, question: l, selectedIds: n, disabled: a, reachable: i, onPick: s, own: u })
        : (0, r.jsx)(r.Fragment, {
              children: l.options.map((e, t) =>
                  (0, r.jsx)(
                      n1,
                      {
                          option: e,
                          position: t + 1,
                          disabled: a,
                          selected: o ? n.includes(e.id) : void 0,
                          onPick: s,
                          reachable: i,
                      },
                      e.id,
                  ),
              ),
          });
}
let n3 = [];
function n5(e) {
    let {
            projectId: t,
            question: l,
            draft: n,
            selected: a,
            direction: i,
            disabled: s,
            ownImage: u,
            ownSelected: d,
        } = e,
        c = "" === n.trim() ? null : n,
        f = !0 === l.multi_select;
    return (0, r.jsxs)("div", {
        className: o()(n0.Ge, n0.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            f
                ? (0, r.jsx)(k.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: n0.aK,
                      children: ef.intl.string(ec.default.tE8qbz),
                  })
                : null,
            (0, r.jsx)(n2, {
                projectId: t,
                question: l,
                selected: a,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: nA(u, d),
            }),
            nk(l)
                ? null
                : (0, r.jsxs)("div", {
                      className: n0.Xy,
                      children: [
                          (0, r.jsx)("span", {
                              className: n0.Gy,
                              "aria-hidden": !0,
                              children: (0, r.jsx)(nv.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, r.jsx)("span", { className: o()(n0.Pu, n0.es), children: c }),
                      ],
                  }),
        ],
    });
}
function n4(e) {
    var t;
    let { projectId: l, clarification: n, onSubmit: a, onDismiss: i } = e,
        [u, d] = s.useState({}),
        [c, f] = s.useState({}),
        [m, g] = s.useState({}),
        [h, x] = s.useState(0),
        [p, v] = s.useState(null),
        [b, j] = s.useState(null),
        [y, N] = s.useState(null),
        [C, E] = s.useState(!1),
        I = s.useRef(null),
        [T, M] = s.useState(null),
        _ = s.useRef(null),
        P = s.useRef(0),
        R = null == a,
        L = n.questions.length,
        O = Math.min(h, L - 1),
        F = n.questions[O],
        [z, U] = s.useState({ id: F.id, expanded: !1 }),
        G = z.id === F.id && z.expanded,
        [$, q] = s.useState(null),
        B = c[F.id] ?? "",
        H = !0 === F.multi_select,
        V = nk(F),
        K = H ? (m[F.id] ?? n3) : ((t = u[F.id]), t?.kind === "option" ? [t.optionId] : nw),
        W = (function (e, t, l) {
            let [n, a] = s.useState({}),
                [i, r] = s.useState({}),
                [u, o] = s.useState({}),
                d = ef.intl.string(ec.default.wTsP5l),
                c = s.useCallback((e) => n[e] ?? null, [n]),
                f = s.useCallback(
                    (e) => null != n[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : t[e.id]?.kind === "image"),
                    [t, n, u],
                ),
                m = s.useCallback(
                    (e) => {
                        let t = n[e.id];
                        return null != t && !0 === u[e.id] ? { attachment: t.attachment, text: d } : void 0;
                    },
                    [d, n, u],
                ),
                g = s.useCallback(
                    (s, u) => {
                        let c = s.id,
                            m = !0 === s.multi_select,
                            g = n[c] ?? null;
                        if (u) return nA(g, f(s));
                        function h(e) {
                            return r((t) => ({ ...t, [c]: e }));
                        }
                        function x(e) {
                            return { kind: "image", attachment: e.attachment, text: d };
                        }
                        let p = t[c];
                        function v(t) {
                            (a((l) => {
                                let n = l[c];
                                return (
                                    null != n && (0, er.Vm)(e, n.attachment.id).catch(() => void 0), { ...l, [c]: t }
                                );
                            }),
                                h({ busy: null, error: null }),
                                m ? o((e) => ({ ...e, [c]: !0 })) : l((e) => (e[c] === p ? { ...e, [c]: x(t) } : e)));
                        }
                        return {
                            image: g,
                            selected: f(s),
                            busy: i[c]?.busy ?? null,
                            error: i[c]?.error ?? null,
                            onPick: () => {
                                null != g &&
                                    (m ? o((e) => ({ ...e, [c]: !0 !== e[c] })) : l((e) => ({ ...e, [c]: x(g) })));
                            },
                            onRemove: () => {
                                null != g &&
                                    ((0, er.Vm)(e, g.attachment.id).catch(() => void 0),
                                    a((e) => {
                                        let { [c]: t, ...l } = e;
                                        return l;
                                    }),
                                    o((e) => ({ ...e, [c]: !1 })),
                                    l((e) => {
                                        if (e[c]?.kind !== "image") return e;
                                        let { [c]: t, ...l } = e;
                                        return l;
                                    }));
                            },
                            onUpload: (e) => {
                                (h({ busy: "upload", error: null }),
                                    e.then(
                                        (e) => {
                                            "errorText" in e
                                                ? h({ busy: null, error: { source: "upload", text: e.errorText } })
                                                : v({ attachment: e });
                                        },
                                        () =>
                                            h({
                                                busy: null,
                                                error: { source: "upload", text: ef.intl.string(ec.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                h({ busy: "link", error: null }),
                                (0, er.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        h({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : ef.intl.string(ec.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [d, t, n, e, f, l, i],
                );
            return { imageFor: c, selectedFor: f, multiPartFor: m, controlsFor: g };
        })(l, u, d),
        J = W.imageFor(F.id),
        X = W.selectedFor(F),
        { text: Q, phase: Y } = (0, tu.Q)(F.question),
        Z = Q === F.question,
        ee = Z && $?.id === F.id && $.truncated;
    s.useLayoutEffect(() => {
        if (null == T || G || !Z) return;
        function e() {
            if (null == T) return;
            let e = T.scrollHeight > T.clientHeight + 1;
            q((t) => (t?.id === F.id && t.truncated === e ? t : { id: F.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(T), () => t.disconnect());
    }, [Z, T, F.id, G]);
    let et = ef.intl.string(G ? ef.t.iTcuma : ef.t.dcl9MQ),
        el = s.useCallback(
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
                                i = "image" === l.kind || "multi" === l.kind ? l.attachment : void 0;
                            return [
                                {
                                    question_id: t.id,
                                    option_ids: n,
                                    ...(null != a && "" !== a ? { custom: a } : {}),
                                    ...(null != i ? { attachment_id: i.id } : {}),
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
        en = s.useCallback(
            (e, t) => {
                P.current += 1;
                let l = P.current;
                (v({ direction: t, moves: l }),
                    j({ question: F, draft: B, selected: K, ownImage: J, ownSelected: X, direction: t, moves: l }),
                    E(!0),
                    x(e));
            },
            [B, J, X, F, K],
        ),
        ea = s.useCallback(() => {
            let e = I.current,
                t = _.current;
            null != e && null != t && N({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    s.useLayoutEffect(() => {
        let e = I.current,
            t = _.current;
        if (null == e || null == t) return;
        ea();
        let l = new ResizeObserver(ea);
        return (l.observe(e), l.observe(t), () => l.disconnect());
    }, [ea]);
    let ei = p?.moves;
    s.useEffect(() => {
        if (null == ei) return;
        let e = setTimeout(() => j(null), 400),
            t = setTimeout(() => E(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ei]);
    let es = s.useCallback(
            (e) => {
                if (R) return;
                let t = { ...u, [F.id]: e };
                d(t);
                let l =
                    O < n.questions.length - 1
                        ? O + 1
                        : (function (e, t, l) {
                              let { questions: n } = e;
                              for (let e = 1; e <= n.length; e++) {
                                  let a = (l + e) % n.length,
                                      i = t[n[a].id];
                                  if (null == i || "" === i.text.trim()) return a;
                              }
                              return null;
                          })(n, t, O);
                null == l ? el(t) : en(l, l < O ? "back" : "forward");
            },
            [u, n, R, O, F.id, el, en],
        ),
        eu = s.useCallback(() => {
            R || 0 === O || en(O - 1, "back");
        }, [R, O, en]),
        eo = O > 0 && !R,
        ed = s.useCallback(
            (e) => {
                f((e) => ({ ...e, [F.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                V ? R || d((e) => ({ ...e, [F.id]: t })) : es(t);
            },
            [R, V, F.id, es],
        ),
        { multiPartFor: em } = W,
        eg = s.useMemo(() => {
            var e;
            let t, l;
            return H
                ? ((e = em(F)),
                  (t = B.trim()),
                  (l = F.options.filter((e) => K.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: K,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...l, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [B, H, em, F, K]),
        eh = W.controlsFor(F, R),
        ex = s.useCallback(() => {
            if (null != eg) {
                "" !== eg.text && es(eg);
                return;
            }
            let e = B.trim();
            "" !== e && es({ kind: "custom", text: e });
        }, [B, eg, es]),
        [ep, ev] = s.useState(!1),
        [eb, ej] = s.useState(!1);
    s.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ev(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let ey = s.useCallback(() => {
            null != i && (ej(!0), setTimeout(i, 150));
        }, [i]),
        ek = s.useMemo(
            () =>
                null != eg
                    ? "" !== eg.text
                        ? eg
                        : null
                    : "" !== B.trim()
                      ? { kind: "custom", text: B.trim() }
                      : (u[F.id] ?? null),
            [u, B, eg, F.id],
        ),
        ew = null != ek && !R,
        eA = O === L - 1,
        eN = s.useCallback(() => {
            null == ek || R || es(ek);
        }, [R, ek, es]),
        eC = s.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tT.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tT.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tT.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eo
                            ? (e.preventDefault(), eu())
                            : "ArrowRight" === e.key && ew && (e.preventDefault(), eN())));
            },
            [eo, ew, eu, eN],
        );
    return (0, r.jsxs)("section", {
        className: o()(n0.$O, { [n0.fI]: ep && !eb, [n0.Oh]: eb }),
        role: "dialog",
        "aria-label": F.question,
        "data-conjure-clarification": n.id,
        "data-state": R ? "inert" : "open",
        "data-question-expanded": G ? "true" : void 0,
        "data-step": O,
        tabIndex: -1,
        onKeyDown: eC,
        children: [
            (0, r.jsxs)("div", {
                className: n0.rf,
                style: null == y ? void 0 : { height: y.heading + y.rows },
                "data-moving": C ? "" : void 0,
                children: [
                    (0, r.jsxs)("div", {
                        ref: I,
                        className: n0.wx,
                        children: [
                            (0, r.jsx)(k.E, {
                                ref: M,
                                tag: "span",
                                id: `${F.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: G ? void 0 : 5,
                                className: o()(nZ.TK, n0.R_, { [n0.TB]: "exit" === Y, [n0.JU]: "enter" === Y }),
                                children: Q,
                            }),
                            ee || G
                                ? (0, r.jsx)("div", {
                                      className: nZ.Q7,
                                      children: (0, r.jsx)(A.m, {
                                          text: et,
                                          children: (0, r.jsx)(t4.K, {
                                              icon: G ? ti.t : nt.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => U({ id: F.id, expanded: !G }),
                                              "aria-label": et,
                                              "aria-controls": `${F.id}-label`,
                                              "aria-expanded": G,
                                          }),
                                      }),
                                  })
                                : null,
                            null == i
                                ? null
                                : (0, r.jsx)(w.D, {
                                      className: o()(nZ.gb, nZ.Q7),
                                      onClick: ey,
                                      "aria-label": ef.intl.string(ec.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, r.jsx)(D.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: n0.Cg,
                        style: null == y ? void 0 : { insetBlockStart: y.heading },
                        children: (0, r.jsxs)("div", {
                            className: n0.I,
                            children: [
                                (0, r.jsxs)("div", {
                                    ref: _,
                                    className: n0.Ge,
                                    role: "group",
                                    "aria-labelledby": `${F.id}-label`,
                                    "data-direction": p?.direction,
                                    "data-parity": null == p ? void 0 : p.moves % 2,
                                    children: [
                                        H
                                            ? (0, r.jsx)(k.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: n0.aK,
                                                  children: ef.intl.string(ec.default.tE8qbz),
                                              })
                                            : null,
                                        (0, r.jsx)(n2, {
                                            projectId: l,
                                            question: F,
                                            selected: K,
                                            disabled: R,
                                            onPick: (e) =>
                                                H
                                                    ? g((t) => {
                                                          var l, n;
                                                          let a;
                                                          return {
                                                              ...t,
                                                              [F.id]:
                                                                  ((l = t[F.id] ?? n3),
                                                                  (n = e.id),
                                                                  (a = l.includes(n)
                                                                      ? l.filter((e) => e !== n)
                                                                      : [...l, n]),
                                                                  F.options
                                                                      .filter((e) => a.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ed(e),
                                            own: eh,
                                        }),
                                        V
                                            ? null
                                            : (0, r.jsxs)("div", {
                                                  className: n0.Xy,
                                                  children: [
                                                      (0, r.jsx)("span", {
                                                          className: n0.Gy,
                                                          "aria-hidden": !0,
                                                          children: (0, r.jsx)(nv.PencilIcon, {
                                                              size: "custom",
                                                              width: 20,
                                                              height: 20,
                                                              color: "currentColor",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(nb.y, {
                                                          value: B,
                                                          onChange: (e) => {
                                                              let { value: t } = e.currentTarget;
                                                              f((e) => ({ ...e, [F.id]: t }));
                                                          },
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  e.nativeEvent.isComposing ||
                                                                  (e.preventDefault(), ex());
                                                          },
                                                          placeholder: ef.intl.string(ec.default["tOC+tn"]),
                                                          "aria-label": ef.intl.formatToPlainString(
                                                              ec.default["4JeYPB"],
                                                              { question: F.question },
                                                          ),
                                                          disabled: R,
                                                          rows: 1,
                                                          className: n0.Pu,
                                                          "data-conjure-clarification-other": F.id,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                null == b
                                    ? null
                                    : (0, r.jsx)(
                                          n5,
                                          {
                                              projectId: l,
                                              question: b.question,
                                              draft: b.draft,
                                              selected: b.selected,
                                              ownImage: b.ownImage,
                                              ownSelected: b.ownSelected,
                                              direction: b.direction,
                                              disabled: R,
                                          },
                                          b.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            L > 1 || H || V
                ? (0, r.jsxs)("div", {
                      className: nZ.qr,
                      children: [
                          (0, r.jsx)(k.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  L > 1
                                      ? ef.intl.formatToPlainString(ec.default.yzYUjq, { index: O + 1, total: L })
                                      : null,
                          }),
                          (0, r.jsxs)("div", {
                              className: nZ.zt,
                              children: [
                                  eo
                                      ? (0, r.jsx)(nj.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: ef.intl.string(ec.default.Pk5lfA),
                                            onClick: eu,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, r.jsx)(S.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ef.intl.string(eA ? ef.t.geKm7t : ec.default.w1nRmT),
                                      disabled: !ew,
                                      onClick: eN,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": eA ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var n7 = l(856059),
    n8 = l(411236);
function n6(e) {
    let { projectId: t, request: l, onDismiss: n } = e,
        a = null != l.note && "" !== l.note ? l.note : ef.intl.string(ec.default.XuOf5s);
    return (0, r.jsx)(n7.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: l, saving: i, submit: s } = e;
            function u(e) {
                (e.preventDefault(), s());
            }
            let d = (0, r.jsx)(S.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !l,
                text: ef.intl.string(ec.default.A7dQd9),
            });
            return null == n
                ? (0, r.jsxs)("form", {
                      className: n8.Mk,
                      onSubmit: u,
                      children: [
                          (0, r.jsx)(k.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: ef.intl.string(ec.default["jZjP+I"]),
                          }),
                          (0, r.jsx)(k.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: a,
                          }),
                          t,
                          (0, r.jsx)("div", { className: n8.p0, children: d }),
                      ],
                  })
                : (0, r.jsxs)("form", {
                      className: o()(nZ.nd, nZ.jx),
                      "aria-label": ef.intl.string(ec.default["jZjP+I"]),
                      onSubmit: u,
                      children: [
                          (0, r.jsxs)("div", {
                              className: nZ.wx,
                              children: [
                                  (0, r.jsx)(k.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: nZ.TK,
                                      children: ef.intl.string(ec.default["jZjP+I"]),
                                  }),
                                  (0, r.jsx)(w.D, {
                                      className: o()(nZ.gb, nZ.Q7),
                                      onClick: n,
                                      "aria-label": ef.intl.string(ec.default["iq+Pte"]),
                                      children: (0, r.jsx)(D.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: n8.DQ,
                              children: [
                                  (0, r.jsx)(k.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: a,
                                  }),
                                  t,
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: nZ.qr,
                              children: (0, r.jsx)("div", { className: nZ.zt, children: d }),
                          }),
                      ],
                  });
        },
    });
}
var n9 = l(935208),
    ae = l(435558),
    at = l.n(ae);
let al = "VibegrationsComposerDrafts";
function an() {
    return lk.w.get(al) ?? {};
}
let aa = new Map(),
    ai = at().throttle(() => {
        if (0 === aa.size) return;
        let e = an();
        for (let [t, l] of aa) "" === l ? delete e[t] : (e[t] = l);
        (aa.clear(), lk.w.set(al, e));
    }, 1e3);
class ar extends m.Ay.Store {
    getDraft(e) {
        let t = aa.get(e);
        return null != t ? t : (an()[e] ?? "");
    }
}
let as = new ar(lE.h, {
    LOGOUT: function () {
        return (aa.clear(), ai.cancel(), lk.w.remove(al), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (aa.set(t, l), ai(), "" === l && ai.flush(), !1);
    },
});
function au(e) {
    return "" !== as.getDraft(e).trim();
}
var ao = l(29080),
    ad = l(46054),
    ac = l(615839);
function af(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : ef.intl.string(ec.default.KcFvbo);
}
function am(e) {
    var t;
    let l,
        n,
        { steps: a, content: i, hasProposal: r, hasAttachments: s } = e,
        u = (0, l4.B4)(a),
        o = u.filter((e) => "message" === e.type).at(-1),
        d =
            !r &&
            null != o &&
            ((t = o.content),
            (l = t.trim()),
            (n = i.trim()),
            "" !== l && "" !== n && (l === n || (t.length >= 16e3 && n.startsWith(l))))
                ? o
                : null,
        c = u.filter((e) => e !== d),
        f = c.filter((e) => "message" === e.type).at(-1),
        m = !r && "" !== i.trim();
    return {
        streamed: c,
        lastStreamedMessage: f,
        replyKey: d?.key,
        showsClosingMessage: m,
        closingContent: m ? i.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: s, showsClosingMessage: m, endsOnStreamedMessage: (0, l4.Lf)(a) }),
    };
}
(l(134528), l(947204));
let ag = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    ah = {
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
    ax = {
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
function ap(e) {
    return { ...ax[e], name: ef.intl.string(ah[e]()) };
}
function av(e) {
    return ag.includes(e) ? ap(e) : void 0;
}
function ab(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % ag.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, ag[(t + l) % ag.length]);
            }),
            n
        );
    })(e))
        t.set(l, ap(n));
    return t;
}
var aj = l(60160),
    ay = l(16634);
function ak(e) {
    let { projectId: t, lane: l, Illocon: n, tint: a, name: i, connectsDown: s } = e,
        u = l.task,
        o = "running" === u.status,
        d = (0, l4.SY)(l.steps),
        c = o
            ? null != d
                ? (0, l4.WQ)(d)
                : af(u)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(af(e));
                  switch (e.status) {
                      case "failed":
                          return ef.intl.formatToPlainString(ec.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ef.intl.formatToPlainString(ec.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return ef.intl.formatToPlainString(ec.default["++9woZ"], {
                                  task: t,
                                  duration: (0, ac.MB)(e.durationMs),
                              });
                          return ef.intl.formatToPlainString(ec.default.nmI9Uh, { task: t });
                      default:
                          return ef.intl.formatToPlainString(ec.default.nmI9Uh, { task: t });
                  }
              })(u),
        f = o ? d : void 0,
        m =
            u.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, r.jsx)("ol", {
                                    className: ng.dO,
                                    children: l.steps.map((e) =>
                                        (0, r.jsx)(
                                            ay.A,
                                            { projectId: t, node: e, presentation: "detail", active: o && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          u.detail.map((e, t) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: ng.iq,
                                      children: (0, r.jsx)(aj.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, r.jsx)(l9.A, {
        glyph: (0, r.jsx)(ne.u, {
            asset: (0, r.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: af(u),
            position: "left",
            children: (0, r.jsx)("span", {
                className: ng.nC,
                children: (0, r.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: o,
        settled: !o,
        tint: a,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
var aw = l(469393);
function aA(e) {
    let { proposal: t, onRestore: l } = e,
        n = (0, tn.lG)(t.authored_at);
    return (0, r.jsx)(nn, {
        title: ef.intl.string(ec.default["t+b0rz"]),
        children: (0, r.jsxs)("div", {
            className: aw.r,
            children: [
                (0, r.jsxs)("div", {
                    className: aw.z,
                    children: [
                        (0, r.jsx)(k.E, { variant: "text-md/medium", children: t.subject }),
                        null != n.relative
                            ? (0, r.jsx)(k.E, {
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
                          text: ef.intl.string(ec.default.H8Jfhu),
                          onClick: l,
                      })
                    : null,
            ],
        }),
    });
}
var aN = l(231483),
    aC = l(632015),
    aS = l(323384),
    aE = l(633018),
    aI = l(430392),
    aT = l(885574);
let aM = {
    automod: ec.default.DnWMLj,
    widget: ec.default["EswAi+"],
    activity: ef.t.IC5Ann,
    commands: ec.default.w7JaEP,
    chat_bot: ec.default["5QSvrP"],
    bot: ec.default.VFWfz1,
};
var a_ = l(176999),
    aP = (((a = {}).IMAGE = "image"), a),
    aR = (((i = {}).PRIVATE = "private"), (i.PUBLIC = "public"), i),
    aL = l(773669);
let aD = [],
    aO = {};
function aF(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function az(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aP.IMAGE,
        visibility: aR.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aU = l(127258),
    aG = l(320095),
    a$ = l(963852),
    aq = l(95701),
    aB = l(889227),
    aH = l(155718);
let aV = ["command", "user_command", "message_command", "message"],
    aK = new Set([aH.kc.CHAT, aH.kc.USER, aH.kc.MESSAGE]);
function aW(e) {
    return e.type ?? aH.kc.CHAT;
}
function aJ(e) {
    return "launch" !== e.kind && aK.has(aW(e));
}
function aX(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function aQ(e, t) {
    let l = aV.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        n = [...l.filter((e) => !aX(e)), ...l.filter(aX)].slice(0, 3);
    for (let a of t || 1 === l.length ? e : []) {
        if (n.length >= 3) break;
        n.includes(a) || aX(a) || n.push(a);
    }
    return aV.flatMap((t) => e.filter((e) => e.kind === t && n.includes(e)));
}
let aY = new aq.nA({ id: "1337", guild_id: "1337", type: ey.rbe.GUILD_TEXT, name: "preview" });
function aZ(e, t) {
    let {
            bot: l = !1,
            discriminator: n = "0000",
            enabled: a = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = (0, m.bG)([tB.default], () => tB.default.getUser(e), [e]);
    return (
        s.useEffect(() => {
            a && i?.username !== t && (0, tK.nj)(new aB.A({ id: e, username: t, discriminator: n, bot: l }));
        }, [a, i, e, t, n, l]),
        i
    );
}
let a0 = /^@\S+/;
var a1 = l(628284),
    a2 = l(97808),
    a3 = l(778712),
    a5 = l(809115),
    a4 = l(486020),
    a7 = l(200700);
let a8 = {
        alert: { label: () => ef.intl.string(ec.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ef.intl.string(ec.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ef.intl.string(ec.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ef.intl.string(ec.default.RGzFNK), blockedStyle: !1 },
    },
    a6 = {
        blocked: { label: () => ef.intl.string(ec.default.YdnZ8q), tone: "red" },
        alert: { label: () => ef.intl.string(ec.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ef.intl.string(ec.default.RGzFNK), tone: "green" },
    },
    a9 = ["blocked", "alert", "allowed"],
    ie = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var it = l(984097),
    il = l(13673);
let ia = { blocked: aN.ShieldIcon, alert: tZ.BellIcon, allowed: a1.y },
    ii = {
        blurple: { text: "text-brand", icon: F.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: F.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: F.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function ir(e) {
    var t, l;
    let n,
        a,
        { example: i } = e,
        s =
            "" ===
            (a = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : ef.intl.formatToPlainString(ef.t["3LYql6"], {
                          duration:
                              ((l = t.timeout_seconds),
                              null != (n = (0, a7.getFriendlyDurationString)(l))
                                  ? n
                                  : l % 604800 == 0
                                    ? ef.intl.formatToPlainString(ef.t.EmoBD2, { weeks: l / 604800 })
                                    : l % 86400 == 0
                                      ? ef.intl.formatToPlainString(ef.t["k2UNz+"], { days: l / 86400 })
                                      : l % 3600 == 0
                                        ? ef.intl.formatToPlainString(ef.t.xCjYxK, { hours: l / 3600 })
                                        : l % 60 == 0
                                          ? ef.intl.formatToPlainString(ef.t.opVZ9q, { mins: l / 60 })
                                          : ef.intl.formatToPlainString(ef.t["4zv/jq"], { secs: l })),
                      }),
                i.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : a;
    return null == s
        ? null
        : (0, r.jsx)(k.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: s,
          });
}
function is(e) {
    var t;
    let { example: l } = e,
        { label: n, blockedStyle: a } = a8[l.outcome];
    return (0, r.jsxs)("li", {
        className: o()(it.nM, { [o()(it.HV, il.DX)]: a }),
        children: [
            (0, r.jsx)(N.A, { children: `${n()}: ` }),
            (0, r.jsx)("span", {
                className: it.my,
                children: (0, r.jsx)(a2.eu, {
                    src: (0, a4.AE)(void 0, void 0),
                    size: a3._3.SIZE_24,
                    "aria-label": ef.intl.string(ec.default["1yI0xV"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: it.fw,
                children: [
                    (0, r.jsx)(k.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = l.content), ad.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, r.jsx)(ir, { example: l }),
                ],
            }),
        ],
    });
}
function iu(e) {
    let { group: t } = e,
        l = s.useId(),
        n = a6[t.section],
        a = ia[t.section],
        i = ii[n.tone];
    return (0, r.jsxs)("div", {
        className: it.uW,
        children: [
            (0, r.jsxs)("div", {
                className: it.bV,
                children: [
                    (0, r.jsx)(a, { size: "xs", color: i.icon, "aria-hidden": !0 }),
                    (0, r.jsx)(k.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: i.text,
                        className: it.a9,
                        children: n.label(),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: it.Ge,
                "aria-labelledby": l,
                children: t.examples.map((e, t) => (0, r.jsx)(is, { example: e }, t)),
            }),
        ],
    });
}
function io() {
    let { avatarSrc: e, eventHandlers: t } = (0, a5.a)(!0);
    return (0, r.jsx)("span", {
        className: it.Gy,
        ...t,
        children: (0, r.jsx)(a2.eu, { src: e, size: a3._3.SIZE_16, "aria-label": ef.intl.string(ef.t.hG1StD) }),
    });
}
function id(e) {
    var t;
    let { automod: l } = e;
    return (0, r.jsx)("div", {
        className: it.K1,
        children: ((t = l.examples),
        a9
            .map((e) => ({ section: e, examples: t.filter((t) => ie[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, r.jsx)(iu, { group: e }, e.section)),
    });
}
var ic = l(460905),
    im = l(110384),
    ig = l(763754),
    ih = l(217424),
    ix = l(194085),
    ip = l(20851),
    iv = l(692508),
    ib = l(798819);
function ij(e) {
    let { item: t } = e,
        { iconLeft: l, icon: n } = t;
    return (0, r.jsxs)("div", {
        className: o()(ib.item, ib.labelContainer, ib.colorDefault, {
            [ib.focused]: !0 === t.highlighted,
            [ib.disabled]: !0 === t.muted,
        }),
        children: [
            null != l
                ? (0, r.jsx)("div", {
                      className: ib.iconContainerLeft,
                      children: (0, r.jsx)(l, { color: "currentColor", className: ib.icon }),
                  })
                : null,
            (0, r.jsx)("div", { className: o()(ib.label, iv.Gy), children: t.label }),
            null != n
                ? (0, r.jsx)("div", {
                      className: ib.iconContainer,
                      children: (0, r.jsx)(n, { color: "currentColor", className: ib.icon }),
                  })
                : null,
        ],
    });
}
function iy(e) {
    let { target: t, commandName: l, appIconSrc: n } = e,
        a = s.useMemo(
            () =>
                null != n
                    ? (e) => {
                          let { className: t } = e;
                          return (0, r.jsx)("img", { src: n, alt: "", className: o()(t, iv.ak) });
                      }
                    : void 0,
            [n],
        ),
        i =
            "message" === t
                ? { label: ef.intl.string(ef.t["5IEsGx"]), icon: im.W, muted: !0 }
                : { label: ef.intl.string(ef.t.LYju5J), muted: !0 };
    return (0, r.jsx)("div", {
        className: o()(ib.menu, iv.MK),
        "aria-hidden": !0,
        children: (0, r.jsxs)("div", {
            className: ib.scroller,
            children: [
                (0, r.jsx)(ij, { item: i }),
                (0, r.jsx)("div", { className: ib.separator }),
                (0, r.jsx)(ij, { item: { label: l, iconLeft: a, highlighted: !0 } }),
            ],
        }),
    });
}
var ik = l(381941);
function iw() {}
function iA(e) {
    let t,
        l,
        n,
        a,
        i,
        u,
        d,
        c,
        f,
        g,
        h,
        { projectId: x, exchanges: p } = e,
        {
            items: v,
            botIcon: b,
            appIconSrc: j,
        } = ((t = (0, m.bG)([tB.default], () => tB.default.getCurrentUser())),
        (l = (0, m.bG)([eE.Ay], () => eE.Ay.getProject(x))),
        (n = l?.application_id),
        (a = (0, m.bG)([lI.A], () => lI.A.getApplication(n)?.getIconURL(80) ?? null, [n])),
        (i = l?.name ?? ef.intl.string(ec.default.JEYq8M)),
        (u = (0, m.bG)([tB.default], () => (null != n ? tB.default.getUser(n) : void 0), [n])),
        (c = aZ("31337", i, { bot: !0, enabled: !(d = u?.bot === !0) })),
        (f = d ? u : c),
        (g = aZ("31338", ef.intl.string(ec.default["9iAOsw"]), { discriminator: "0003" })),
        (h = aZ("31339", (0, tH.mG)(t) ?? "", { enabled: null != t })),
        {
            items: s.useMemo(
                () =>
                    null == t || null == h || null == f || null == g
                        ? []
                        : (function (e, t, l) {
                              let { bot: n, currentUser: a, viewer: i, member: r } = t,
                                  s = [];
                              function u(e, t) {
                                  let {
                                          interactionName: l,
                                          messageType: n,
                                          menu: i,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      r = String(s.length + 1),
                                      u = (0, aG.rh)({
                                          ...(0, a$.Ay)({
                                              channelId: aY.id,
                                              content: e,
                                              author: t,
                                              type: n ?? ey.lAJ.DEFAULT,
                                          }),
                                          id: r,
                                          state: ey.cmJ.SENT,
                                          ...(null != l
                                              ? {
                                                    interaction: {
                                                        id: r,
                                                        name: l,
                                                        type: aU.G.APPLICATION_COMMAND,
                                                        user: (0, a$.Vi)(a),
                                                    },
                                                }
                                              : {}),
                                      });
                                  s.push({ key: r, record: u, isCommandReply: null != l, menu: i });
                              }
                              for (let t of e)
                                  switch (t.kind) {
                                      case "command":
                                          u(t.bot, n, {
                                              interactionName: t.user.trim().replace(/^\//, "").split(/\s+/)[0] ?? "",
                                              messageType: ey.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (u(e ? l.memberMessage : l.targetMessage, e ? r : a, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              u(t.bot, n, {
                                                  interactionName: t.user,
                                                  messageType: ey.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          var o, d;
                                          (u(((o = t.user), o.trim().replace(a0, `<@${n.id}>`)), a),
                                              u(((d = t.bot), d.includes("<@") ? d : `<@${i.id}> ${d}`), n));
                                  }
                              return s;
                          })(
                              p,
                              { bot: f, currentUser: t, viewer: h, member: g },
                              {
                                  targetMessage: ef.intl.string(ec.default["y+QYes"]),
                                  memberMessage: ef.intl.string(ec.default.BUTRDc),
                              },
                          ),
                [p, f, t, h, g],
            ),
            botIcon: a,
            appIconSrc: a ?? f?.getAvatarURL(void 0, 80),
        });
    return 0 === v.length
        ? null
        : (0, r.jsx)("ol", {
              className: o()(iv.TE, `group-spacing-${ik.ES}`),
              children: v.map((e) => {
                  let { key: t, record: l, isCommandReply: n, menu: a } = e;
                  return (0, r.jsxs)(
                      "li",
                      {
                          className: null != a ? iv.Rz : void 0,
                          children: [
                              (0, r.jsx)(ip.A, {
                                  message: l,
                                  channel: aY,
                                  author: (0, ig.FT)(l.author, aY),
                                  isGroupStart: !0,
                                  avatarOverride: l.author.bot ? (b ?? void 0) : void 0,
                                  childrenExecutedCommand: n ? (0, r.jsx)(ih.A, { message: l, channel: aY }) : void 0,
                                  usernameClassName: a?.target === "user" ? iv.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              a?.target === "message"
                                  ? (0, r.jsx)("div", {
                                        className: iv.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, r.jsxs)(ix.Ay, {
                                            children: [
                                                (0, r.jsx)(ix.qv, {
                                                    label: ef.intl.string(ef.t.lfIHs4),
                                                    icon: ic.n,
                                                    onClick: iw,
                                                }),
                                                (0, r.jsx)(ix.qv, {
                                                    label: ef.intl.string(ef.t["5IEsGx"]),
                                                    icon: im.W,
                                                    onClick: iw,
                                                }),
                                                (0, r.jsx)(ix.qv, {
                                                    label: ef.intl.string(ef.t["UKOtz+"]),
                                                    icon: t7.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: iw,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != a
                                  ? (0, r.jsx)("div", {
                                        className: "user" === a.target ? iv.ET : iv.je,
                                        inert: !0,
                                        children: (0, r.jsx)(iy, {
                                            target: a.target,
                                            commandName: a.commandName,
                                            appIconSrc: j,
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
var iN = l(633075),
    iC = l(946356),
    iS = l(58216),
    iE = l(27399);
function iI(e) {
    let { applicationId: t, rendererProps: l } = e,
        n = (0, m.bG)([tB.default], () => tB.default.getCurrentUser()),
        a = s.useMemo(() => new iN.R({ applicationId: t }), [t]);
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: iE.H,
              children: (0, r.jsx)(iC.A.Overlay, {
                  className: iE.w,
                  children: (0, r.jsx)(iS.A, {
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
var iT = l(443863);
let iM = {
    automod: aN.ShieldIcon,
    widget: aC.f,
    activity: aS.k,
    commands: aE.k,
    chat_bot: h.ChatIcon,
    bot: aI.RobotIcon,
};
function i_(e) {
    let { label: t, icon: l, info: n, children: a } = e;
    return (0, r.jsxs)("section", {
        className: iT.uW,
        children: [
            (0, r.jsxs)("span", {
                className: iT.a9,
                children: [
                    l,
                    (0, r.jsx)(k.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    n,
                ],
            }),
            a,
        ],
    });
}
function iP(e) {
    let { text: t, label: l } = e;
    return (0, r.jsx)(A.m, {
        text: t,
        children: (0, r.jsx)(w.D, {
            className: iT.bk,
            "aria-label": l,
            children: (0, r.jsx)(aT.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function iR(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, r.jsx)(i_, {
              label: t,
              children: (0, r.jsx)("div", {
                  className: iT.Ip,
                  children: l.map((e) =>
                      (0, r.jsx)(
                          "span",
                          {
                              className: iT.jw,
                              children: (0, r.jsx)(k.E, {
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
function iL(e) {
    let { tags: t } = e;
    return (0, r.jsx)("span", {
        className: iT.K2,
        children: t.map((e) => {
            let t = iM[e];
            return (0, r.jsxs)(
                "span",
                {
                    className: iT.L6,
                    children: [
                        (0, r.jsx)(t, {
                            size: "custom",
                            width: 16,
                            height: 16,
                            color: "currentColor",
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(k.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            tag: "span",
                            children: ef.intl.string(aM[e]),
                        }),
                    ],
                },
                e,
            );
        }),
    });
}
function iD(e) {
    let { projectId: t, design: l } = e,
        { id: n } = l,
        { src: a, gone: i, handleError: u } = nK(t, n),
        o = ef.intl.string(ec.default["3/aHX6"]),
        d = s.useCallback(() => {
            (0, er.PK)(t, n).then(
                (e) => {
                    (0, nM.R)({
                        items: [{ type: "IMAGE", url: e, alt: o }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, n, o]);
    return i
        ? null
        : (0, r.jsx)(i_, {
              label: ef.intl.string(ec.default.X15LLY),
              info: (0, r.jsx)(iP, {
                  text: ef.intl.string(ec.default.nR4B8P),
                  label: ef.intl.string(ec.default.nc0SNY),
              }),
              children: (0, r.jsx)(w.D, {
                  className: iT.xX,
                  onClick: d,
                  "aria-label": ef.intl.string(ec.default.TvAPIm),
                  children: null != a ? (0, r.jsx)("img", { src: a, alt: o, className: iT.sN, onError: u }) : null,
              }),
          });
}
function iO(e) {
    let t,
        l,
        { projectId: n, proposal: a, version: i, onApprove: u } = e,
        { automod: o } = a,
        { botInteraction: d, botExchanges: c } =
            ((t = (function (e) {
                if (null != e.bot) return e.bot.interaction;
                let t = e.commands.some(aJ),
                    l = e.privileged_intents?.includes("MESSAGE_CONTENT") === !0;
                return t && l ? "both" : t ? "commands" : l ? "messages" : null;
            })(a)),
            (l = s.useMemo(
                () =>
                    null == t
                        ? []
                        : (function (e, t, l) {
                              let n = { kind: "message", user: l.message, bot: l.reply };
                              if ("messages" === t && (e.bot?.example_exchanges?.length ?? 0) === 0) return [n];
                              let a = e.commands.filter(aJ).map((e) =>
                                      (function (e, t) {
                                          let l = e.description?.trim() ?? "",
                                              n = "" !== l ? l : t.reply;
                                          switch (aW(e)) {
                                              case aH.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: n };
                                              case aH.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: n };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: n };
                                          }
                                      })(e, l),
                                  ),
                                  i = "messages" === t ? [] : a.filter(aX),
                                  r = e.bot?.example_exchanges ?? [];
                              return r.length > 0
                                  ? aQ(
                                        [
                                            ...r.map((e) => ({
                                                kind:
                                                    "messages" !== t && e.user.trimStart().startsWith("/")
                                                        ? "command"
                                                        : "message",
                                                user: e.user,
                                                bot: e.bot,
                                            })),
                                            ...i,
                                        ],
                                        !0,
                                    )
                                  : aQ("both" === t ? [...a, n] : a, !1);
                          })(a, t, {
                              message: ef.intl.string(ec.default.J7qggf),
                              reply: ef.intl.string(ec.default.nqYtiy),
                          }),
                [a, t],
            )),
            { botInteraction: t, botExchanges: l }),
        f = (function (e, t) {
            let { widget_config: l, widget_preview: n } = t,
                a = (0, m.bG)([aL.default], () => aL.default.locale),
                i = (0, m.bG)([eE.Ay], () => {
                    let t = eE.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                r = (function (e, t) {
                    let [l, n] = s.useState(aO);
                    return (
                        s.useEffect(() => {
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
                u = s.useMemo(
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
                                                          ...aF(l),
                                                          ...(null != l.fallback ? { fallback: aF(l.fallback) } : {}),
                                                      };
                                                  t[l] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(l));
                                  let i = a_.uW.safeParse(a);
                                  if (!i.success) return null;
                                  let r = i.data;
                                  return null == r[ty.m.WIDGET_TOP] || null == r[ty.m.WIDGET_BOTTOM]
                                      ? null
                                      : {
                                            locale: n,
                                            surfaceConfigs: r,
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
                                                    for (let [e, i] of Object.entries(t.sample_data ?? {}))
                                                        if ("image" === n.get(e)) {
                                                            let t = l[String(i)];
                                                            null != t &&
                                                                (a[e] = {
                                                                    type: a_.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof i
                                                                ? (a[e] = { type: a_.oG.NUMBER, value: i })
                                                                : (a[e] = { type: a_.oG.STRING, value: i });
                                                    return a;
                                                })(e, t, l),
                                                applicationAssets: Object.keys(l).map(az),
                                                getApplicationAssetUrl: (e) => l[e.key] ?? "",
                                                localizedStrings: aD,
                                            },
                                        };
                              })(l, n, r, a),
                    [l, n, r, a],
                );
            return s.useMemo(() => (null == i || null == u ? null : { applicationId: i, rendererProps: u }), [i, u]);
        })(n, a),
        g = i?.superseded === !0,
        h = a.what_changed?.trim() ?? "";
    return (0, r.jsxs)(nr, {
        title:
            g && null != i
                ? ef.intl.formatToPlainString(ec.default.YZ3qJs, { version: i.version })
                : ef.intl.string(ec.default["3b6e7o"]),
        meta: g
            ? (0, r.jsx)(ni, { children: ef.intl.string(ec.default.hF2c41) })
            : (0, r.jsx)(iL, {
                  tags: (function (e, t) {
                      if (null != e.automod) return ["automod"];
                      let l = null != e.widget_config ? ["widget"] : [];
                      return !0 === e.is_activity
                          ? [...l, "activity"]
                          : null == t
                            ? [...l, "bot"]
                            : ("messages" !== t && l.push("commands"), "commands" !== t && l.push("chat_bot"), l);
                  })(a, d),
              }),
        superseded: g,
        showLabel: ef.intl.string(ec.default.yD8EJS),
        hideLabel: ef.intl.string(ec.default.nSPGNb),
        bodyClassName: iT.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== h
                ? (0, r.jsx)(i_, {
                      label: ef.intl.string(ec.default.iNS4dl),
                      children: (0, r.jsx)(k.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: h,
                      }),
                  })
                : null,
            (0, r.jsx)(k.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: a.summary,
            }),
            null != o && o.examples.length > 0
                ? (0, r.jsx)(i_, {
                      label: ef.intl.string(ec.default.z4ZKYG),
                      icon: (0, r.jsx)(io, {}),
                      info: (0, r.jsx)(iP, {
                          text: ef.intl.string(ec.default.bo4MOx),
                          label: ef.intl.string(ec.default.VPLNot),
                      }),
                      children: (0, r.jsx)(id, { automod: o }),
                  })
                : null,
            null == o && null != a.design_image ? (0, r.jsx)(iD, { projectId: n, design: a.design_image }) : null,
            c.length > 0
                ? (0, r.jsx)(i_, {
                      label: ef.intl.string(ec.default.sA1lTv),
                      info: (0, r.jsx)(iP, {
                          text: ef.intl.string(ec.default.NnmbJu),
                          label: ef.intl.string(ec.default.KsqQJX),
                      }),
                      children: (0, r.jsx)(iA, { projectId: n, exchanges: c }),
                  })
                : null,
            null == o && null != f
                ? (0, r.jsx)(i_, {
                      label: ef.intl.string(ec.default.ove4zH),
                      info: (0, r.jsx)(iP, {
                          text: ef.intl.string(ec.default.XcIrHx),
                          label: ef.intl.string(ec.default["TwT+ht"]),
                      }),
                      children: (0, r.jsx)(iI, { ...f }),
                  })
                : null,
            a.changes.length > 0
                ? (0, r.jsx)(i_, {
                      label: ef.intl.string(ec.default["5+mG1z"]),
                      children: (0, r.jsx)("ul", {
                          className: iT.p_,
                          children: a.changes.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: iT.Aw,
                                      children: (0, r.jsx)(k.E, {
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
                ? (0, r.jsx)(i_, {
                      label: ef.intl.string(ef.t["0hKkS+"]),
                      children: (0, r.jsx)("ul", {
                          className: iT.p_,
                          children: a.commands.map((e, t) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: iT.uX,
                                      children: [
                                          (0, r.jsxs)(k.E, {
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
                                          (0, r.jsx)(k.E, {
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
            (0, r.jsx)(iR, { label: ef.intl.string(ec.default["2UbW6r"]), names: a.bot_permissions ?? [] }),
            (0, r.jsx)(iR, { label: ef.intl.string(ec.default["7TKfpj"]), names: a.privileged_intents ?? [] }),
            null == u || g
                ? null
                : (0, r.jsxs)("div", {
                      className: iT.o1,
                      children: [
                          (0, r.jsx)(S.$, {
                              variant: "primary",
                              size: "sm",
                              text: ef.intl.string(ec.default["6S+wRM"]),
                              onClick: u,
                          }),
                          (0, r.jsx)(k.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: ef.intl.string(ec.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var iF = l(331322);
function iz(e) {
    return null != e && e.status?.state === "unpublished";
}
function iU(e) {
    let { publish: t } = e,
        l = t.guildId,
        n = (0, m.bG)([Z.A], () => (null == l ? null : Z.A.getGuild(l)));
    return (0, r.jsx)(iF.B, {
        gap: 8,
        align: "start",
        children: (0, r.jsxs)(iF.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, r.jsx)(A.m, {
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
                    ? (0, r.jsxs)(iF.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, r.jsx)(k.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ef.intl.string(ec.default["+HGTlC"]),
                              }),
                              (0, r.jsx)(eH.Ay, { guild: n, size: eH.Ay.Sizes.SMOL }),
                              (0, r.jsx)(k.E, {
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
function iG(e) {
    let { projectId: t } = e,
        l = lJ(t);
    return null != l && iz(l) ? (0, r.jsx)(iU, { publish: l }) : null;
}
var i$ = l(478016),
    iq = l(989271);
function iB(e) {
    let { idea: t, selected: l, onPick: n } = e,
        a = s.useId(),
        i = null == n;
    return (0, r.jsxs)(w.D, {
        className: o()(iq.nM, { [iq.f1]: i, [iq.CZ]: l }),
        onClick: i ? void 0 : () => n(t),
        "aria-label": ef.intl.formatToPlainString(ec.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : a,
        "aria-disabled": i,
        "aria-pressed": l,
        children: [
            (0, r.jsxs)("div", {
                className: iq.jo,
                children: [
                    l
                        ? (0, r.jsx)(i$.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: iq.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, r.jsx)(k.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: iq.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, r.jsx)(k.E, {
                      tag: "div",
                      id: a,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function iH(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: n } = e,
        [a, i] = s.useState(() => new Set()),
        u = s.useCallback(
            (e) => {
                (i((t) => new Set(t).add(e.id)), n?.(e));
            },
            [n],
        );
    return (0, r.jsx)(nn, {
        title: ef.intl.string(ec.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, r.jsx)(
                iB,
                { idea: e, selected: a.has(e.id) || l?.has(e.id) === !0, onPick: null == n ? void 0 : u },
                e.id,
            ),
        ),
    });
}
function iV(e) {
    let { onAsk: t } = e;
    return (0, r.jsx)(iF.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, r.jsx)(S.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: ef.intl.string(ec.default["U/bLzU"]),
        }),
    });
}
var iK = l(530557),
    iW = l(872162);
function iJ(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var iX = l(202723);
function iQ(e) {
    let { projectId: t, cardId: n, request: a, status: i, awaiting: u } = e,
        d = s.useCallback(() => {
            (0, tt.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("291953"), l.e("408337")]).then(l.bind(l, 789864));
                return (l) => (0, r.jsx)(e, { ...l, projectId: t, request: a });
            });
        }, [t, a]),
        c = s.useMemo(() => a.fields.map((e) => ({ id: e.name, label: e.label, icon: iK.R })), [a.fields]),
        f = (function (e, t) {
            let [l, n] = s.useState(() => iJ(e, t));
            return l.cardId !== e || (null == l.status && "pending" !== t)
                ? (n(iJ(e, t)), !1)
                : null != l.status && t !== l.status;
        })(n, i),
        m = o()(iX.Lo, { [iX.jY]: f });
    return "superseded" === i
        ? (0, r.jsx)(
              "article",
              {
                  className: m,
                  children: (0, r.jsx)(k.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: ef.intl.string(ec.default.CTxtdV),
                  }),
              },
              i,
          )
        : "inactive" === i
          ? (0, r.jsxs)(
                "article",
                {
                    className: m,
                    children: [
                        (0, r.jsx)(k.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: ef.intl.string(ec.default.HCQvpO),
                        }),
                        (0, r.jsx)(iW.C, { label: ef.intl.string(ec.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                i,
            )
          : "pending" === i
            ? (0, r.jsx)(
                  "article",
                  {
                      className: iX.Lo,
                      children: (0, r.jsx)(iW.C, { label: ef.intl.string(ec.default.HCQvpO), size: "xs", items: c }),
                  },
                  i,
              )
            : "received" === i
              ? (0, r.jsxs)(
                    "article",
                    {
                        className: m,
                        children: [
                            (0, r.jsxs)("div", {
                                className: iX.$h,
                                children: [
                                    (0, r.jsx)("span", {
                                        className: iX.c9,
                                        "aria-hidden": !0,
                                        children: (0, r.jsx)(a1.y, {
                                            size: "xs",
                                            color: F.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, r.jsx)(k.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: ef.intl.string(ec.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(iW.C, { label: ef.intl.string(ec.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    i,
                )
              : (0, r.jsxs)("article", {
                    className: iX.Lo,
                    children: [
                        (0, r.jsx)(k.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: ef.intl.string(null != u ? ec.default.O0QIqj : ec.default.HCQvpO),
                        }),
                        (0, r.jsx)(k.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != a.note && "" !== a.note ? a.note : ef.intl.string(ec.default.MPGSHL),
                        }),
                        (0, r.jsx)(iW.C, { label: ef.intl.string(ec.default.HCQvpO), size: "xs", items: c }),
                        (0, r.jsx)("div", {
                            className: iX.sq,
                            children: (0, r.jsx)(S.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: d,
                                text: ef.intl.string(ec.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var iY = l(919790),
    iZ = l(971824),
    i0 = l(162052),
    i1 = l(165648);
function i2(e) {
    let t = ab(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? av(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: af(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function i3(e) {
    let {
            projectId: t,
            steps: l,
            active: n = !1,
            turnActive: a = n,
            checklistSuperseded: i = !1,
            durationMs: u,
            interrupted: o = !1,
            todos: d,
            provisionalTodo: c,
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: g = !0,
            closed: h = !1,
            segmentDurationMs: x,
        } = e,
        p = s.useMemo(() => (0, l4.GO)(l, { turnActive: n }), [l, n]),
        v = s.useMemo(
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
    if (o)
        return (0, r.jsx)("ol", {
            className: ng.pj,
            "data-live": !1,
            children: (0, r.jsx)(l9.A, {
                glyph: (0, r.jsx)(ao.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ef.intl.string(ec.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let b = n ? void 0 : (x ?? (g ? (p.turn?.durationMs ?? u) : void 0)),
        j = m ? ((0, l4.lt)(l) ?? d ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = ab(k.map((e) => e.taskId)),
        A = !h && (n || k.some((e) => "running" === e.task.status)),
        N = i2(k);
    return (0, r.jsx)(l9.E.Provider, {
        value: k.length,
        children: (0, r.jsxs)("ol", {
            className: ng.pj,
            "data-live": A,
            children: [
                (0, r.jsx)(l8.A, {
                    projectId: t,
                    steps: v.steps,
                    fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: n,
                    closed: h,
                    durationMs: b,
                    connectsDown: k.length > 0,
                    tier: p.turn?.tier,
                }),
                k.map((e, l) => {
                    let n = null != e.task.helperMark ? av(e.task.helperMark) : void 0,
                        a = n ?? w.get(e.taskId);
                    return null == a
                        ? null
                        : (0, r.jsx)(
                              ak,
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
                y
                    ? (0, r.jsx)("li", {
                          className: ng.YO,
                          children: (0, r.jsx)(nf, { todos: j, provisional: c, agents: N, live: a, superseded: i }),
                      })
                    : null,
            ],
        }),
    });
}
function i5(e) {
    let {
            projectId: t,
            steps: l,
            content: n,
            proposal: a,
            planVersion: i,
            ideas: u,
            attachments: d,
            secretRequest: c,
            secretRequestId: f,
            secretRequestAwaiting: m,
            secretRequestStatus: g = "open",
            settingsRequest: h,
            publishCta: x,
            onPickIdea: p,
            pickedIdeaIds: v,
            onApprovePlan: b,
            sideReply: j = !1,
            sideReplyAcknowledges: y,
            hoistedProse: w = !1,
            hoistedAttachmentsHost: A,
            restoreProposal: N,
            onRestoreProposal: C,
        } = e,
        S = s.useMemo(
            () => am({ steps: l, content: n, hasProposal: null != a, hasAttachments: null != d && d.length > 0 }),
            [l, n, a, d],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: T, closingContent: M } = S,
        _ = (w ? A : void 0) ?? S.attachmentsHost,
        P = T && !w,
        R = null == d ? null : (0, r.jsx)(iY.A, { projectId: t, attachments: d }),
        L = null == R ? null : (0, r.jsx)("div", { className: ng.MT, children: R }),
        D = j
            ? (0, r.jsx)(k.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return ef.intl.string(ec.default.Mv5OmK);
                          case "queued":
                              return ef.intl.string(ec.default["Po/2mi"]);
                          case "restarting":
                              return ef.intl.string(ec.default.Vj0woh);
                          default:
                              return ef.intl.string(ec.default.gY3L8p);
                      }
                  })(y),
              })
            : null;
    return (0, r.jsxs)("div", {
        className: ng.ue,
        children: [
            E.length > 0 && !w
                ? (0, r.jsx)("ol", {
                      className: ng.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: ng.DV,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: i1.PT,
                                          children: ad.A.parse(e.content, !0, {
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
                ? (0, r.jsx)(iO, { projectId: t, proposal: a, version: i, onApprove: b })
                : P
                  ? (0, r.jsxs)("div", {
                        className: o()(ng.ky, i0.XR),
                        children: [
                            (0, r.jsx)("div", {
                                className: o()(i1.PT, ng.cW),
                                children: ad.A.parse(M, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === _ ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != c
                ? (0, r.jsx)("div", {
                      className: o()(ng.ky, i0.XR, { [iZ.O]: null != m && "open" === g }),
                      children: (0, r.jsx)(iQ, {
                          projectId: t,
                          cardId: f ?? "",
                          request: c,
                          status: g,
                          awaiting: "open" === g ? m : void 0,
                      }),
                  })
                : null,
            null != h
                ? (0, r.jsx)("div", {
                      className: o()(ng.ky, i0.XR),
                      children: (0, r.jsx)(n6, { projectId: t, request: h }),
                  })
                : null,
            "standalone" !== _ && ("closing" !== _ || P) ? null : R,
            null != x ? (0, r.jsx)(iG, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, r.jsx)(iH, { ideas: u, pickedIdeaIds: v, onPick: p }) : null,
            null != N ? (0, r.jsx)(aA, { proposal: N, onRestore: C }) : null,
            P ? null : D,
        ],
    });
}
var i4 = l(146806),
    i7 = l(477262),
    i8 = l(432017),
    i6 = l(475358),
    i9 = l(717400),
    re = l(663341),
    rt = l(559647),
    rl = l(775602),
    rn = l(234320),
    ra = l(285796),
    ri = l(922329),
    rr = l(153171);
let rs = et.lN;
function ru(e, t, l, n) {
    let a = nO(e, t).length;
    !(function (e, t, l) {
        if (0 === l.length) return;
        let n = l.map((e) => {
            let { draft: t, upload: l } = e;
            return { draft: { ...t, localId: nR++ }, upload: l };
        });
        for (let { draft: l, upload: a } of (nF(e, t, [
            ...nO(e, t),
            ...n.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        n))
            a?.().then(
                (n) => {
                    "errorText" in n
                        ? nz(e, t, l.localId, { status: "error", errorText: n.errorText })
                        : nz(e, t, l.localId, { status: "ready", ref: n })
                          ? setTimeout(
                                () =>
                                    nz(e, t, l.localId, {
                                        status: "error",
                                        errorText: ef.intl.string(ec.default.E7dS5n),
                                    }),
                                et.o2 - 3e5,
                            )
                          : nU(e, n.id);
                },
                (n) => {
                    (console.error("[vibegrations] attachment upload failed", n),
                        nz(e, t, l.localId, { status: "error", errorText: ef.intl.string(ec.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        l.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                l = { name: e.name, contentType: t };
            if (a++ >= rs)
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: ef.intl.formatToPlainString(ec.default.Q0aCVZ, { count: rs }),
                    },
                };
            if (!(0, et.Oq)(e.size, t)) return { draft: { ...l, status: "error", errorText: nq(t) } };
            let i = et.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...l, status: "uploading", previewUrl: i }, upload: () => n(e) };
        }),
    );
}
function ro(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        a = nL.useState((e) => nD(e, t, l)),
        i = s.useCallback((e) => ru(t, l, e, n), [t, l, n]),
        r = s.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), i(t));
            },
            [i],
        ),
        u = s.useCallback(
            (e) => {
                let n, a;
                null != (a = (n = nO(t, l)).find((t) => t.localId === e)) &&
                    (nG(t, a),
                    nF(
                        t,
                        l,
                        n.filter((t) => t.localId !== e),
                    ));
            },
            [t, l],
        ),
        o = s.useCallback(() => nH(t, l), [t, l]);
    return {
        drafts: a,
        addFiles: i,
        pasteFiles: r,
        removeDraft: u,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: o,
    };
}
function rd(e) {
    let { draft: t, onRemove: l } = e;
    return (0, r.jsxs)(ri.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, r.jsx)(k.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, r.jsx)(C.y, { type: C.t.SPINNING_CIRCLE_SIMPLE, className: rr.Rk }) : null,
            (0, r.jsx)("button", {
                type: "button",
                className: rr.o1,
                onClick: () => l(t.localId),
                "aria-label": ef.intl.string(ec.default.Slam9g),
                children: (0, r.jsx)(ra.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var rc = l(497437);
let rf = [
        {
            id: "add-images-videos",
            label: ec.default["51+9lc"],
            icon: i7.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: ec.default["10ljr2"],
            icon: i8.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: ec.default.aotDee, icon: ei.H, accept: "" },
    ],
    rm = "text-md/normal",
    rg = null;
function rh(e) {
    let { text: t, offering: l, typed: n } = e,
        [a, i] = s.useState(t),
        u = s.useRef(null),
        d = s.useRef(null),
        c = s.useRef(0),
        [f, g] = s.useState(0),
        [h, x] = s.useState(0),
        [p, v] = s.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (s.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let l = c.current;
        function n() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let n = d.current;
            if (null == n) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                i = Number.isNaN(a) ? 0 : a,
                r = e.offsetWidth,
                s = n.offsetWidth + i;
            (x(r + i), g(s));
            let o = s + r,
                c = Math.max(l, n.offsetWidth) + i + r,
                f = 0 === c ? 1 : s / c,
                m = 0 === c ? 1 : o / c;
            v({
                frontFrom: 1e3 * (0, i4._R)(f),
                frontTo: 1e3 * (0, i4._R)(m),
                backFrom: 1e3 * (0, i4.T)(f),
                backTo: 1e3 * (0, i4.T)(m),
            });
        }
        let a = new ResizeObserver(n);
        return (n(), a.observe(e), a.observe(t), null != d.current && a.observe(d.current), () => a.disconnect());
    }, [t]),
        s.useEffect(() => {
            c.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, j] = s.useState(0),
        [y, w] = s.useState(null),
        A = s.useRef(!1),
        N = s.useCallback(() => {
            (w(A.current ? (l ? "through" : "out") : l ? "in" : null), j((e) => e + 1));
        }, [l]);
    s.useEffect(() => {
        A.current = l;
    }, [l, t]);
    let C = "in" === y ? p.backFrom : p.frontFrom,
        S = "out" === y ? p.frontTo : p.backTo,
        E = (0, m.bG)([rl.Ay], () => rl.Ay.useReducedMotion),
        I = t === ef.intl.string(ec.default.Zc7gML),
        T = a === t && I;
    function M(e, t, l) {
        let n = null != l;
        return (0, r.jsx)("span", {
            ref: l,
            className: o()(rc.VT, { [rc.qk]: n }),
            style: n
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - C)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": n && b > 0 && null != y ? b % 2 : void 0,
            "data-wipe-kind": n ? (y ?? void 0) : void 0,
            children: (0, r.jsx)(i6.e, { shortcut: "tab", className: rc.xT, keyClassName: e }),
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eL.o, {
                text: t,
                variant: rm,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: o()(rc.xM, { [rc.s2]: n }),
                onStart: N,
                onComplete: () => i(t),
            }),
            M(rc.IS, l || (!E && "out" === y), u),
            (0, r.jsx)("span", {
                ref: d,
                className: rc.QI,
                "aria-hidden": !0,
                children: (0, r.jsx)(k.E, { variant: rm, tag: "span", children: t }),
            }),
            T
                ? (0, r.jsxs)("span", {
                      className: rc.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, r.jsx)(k.E, { variant: rm, tag: "span", className: rc.xM, children: t }),
                          M(rc.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function rx(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: n,
            running: a,
            restoring: i = !1,
            onSend: u,
            onInterrupt: o,
            onUploadFile: d,
            onApprove: c,
            onImport: f,
            suggestion: g,
            questionOpen: h = !1,
            hasPendingContext: x = !1,
            onDraftHasTextChange: p,
            modelSettings: v,
            onModelSettingsChange: b,
        } = e,
        [j, y] = s.useState(() => as.getDraft(t)),
        k = s.useCallback(
            (e) => {
                ((0, eS.I$)(t, e), y(e));
            },
            [t],
        ),
        w = "" !== j.trim();
    s.useEffect(() => p?.(w), [w, p]);
    let [C, S] = s.useState(t);
    C !== t && (S(t), y(as.getDraft(t)));
    let E = (0, m.bG)([rl.Ay], () => rl.Ay.isSubmitButtonEnabled),
        [I, T] = s.useState(!1);
    s.useEffect(() => {
        a || T(!1);
    }, [a]);
    let M = s.useRef(null),
        {
            drafts: _,
            addFiles: P,
            pasteFiles: R,
            removeDraft: L,
            settled: D,
            takeRefs: O,
        } = ro({ projectId: t, surface: "chat", onUploadFile: d }),
        F = "" !== j.trim() || _.length > 0 || x,
        z = l && F && D,
        [U, G] = s.useState(null);
    s.useEffect(() => {
        if (null == U) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => G(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [U]);
    let $ = s.useCallback(() => {
            if (!z) return;
            let e = O();
            u(j, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    i = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === i) return i;
                null == rg && (rg = document.createElement("canvas").getContext("2d"));
                let r = rg;
                if (null == r) return i;
                let s = getComputedStyle(e);
                r.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                let u =
                    t > 0
                        ? t
                        : ((n = parseFloat(s.paddingInlineStart)),
                          (a = parseFloat(s.paddingInlineEnd)),
                          e.clientWidth - (Number.isNaN(n) ? 0 : n) - (Number.isNaN(a) ? 0 : a));
                if (u <= 0 || r.measureText(i).width <= u) return i;
                let o = 0,
                    d = i.length;
                for (; o < d;) {
                    let e = Math.ceil((o + d) / 2);
                    r.measureText(i.slice(0, e)).width <= u ? (o = e) : (d = e - 1);
                }
                let c = i.slice(0, o),
                    f = c.lastIndexOf(" ");
                return (f > 0 ? c.slice(0, f) : c).trimEnd();
            })(J.current?.querySelector("textarea") ?? null, eu.current, j);
            ("" !== t && G(t), k(""));
        }, [z, j, u, O, k]),
        q = s.useCallback(
            (e) => {
                (e.preventDefault(), $());
            },
            [$],
        ),
        B = s.useCallback(() => {
            null == o || I || (T(!0), o());
        }, [o, I]),
        H = null == g || "" !== j || !l || n || i || x ? null : g,
        V = s.useCallback(
            (e) => {
                if ("Escape" === e.key && a && null != o && !I) {
                    (e.preventDefault(), e.stopPropagation(), B());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != H) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), k(H));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != c && (e.preventDefault(), c());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), $());
            },
            [$, c, a, o, I, B, H, k],
        ),
        K = s.useCallback(
            (e) => {
                l && R(e);
            },
            [l, R],
        );
    (0, rn.Vo)({
        event: ey.jej.GLOBAL_CLIPBOARD_PASTE,
        handler: (e) => {
            let { event: t } = e;
            return K(t);
        },
    });
    let W = s.useCallback(
            (e) => {
                (P(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [P],
        ),
        J = s.useRef(null),
        X = s.useRef(null),
        Q = s.useCallback((e) => {
            let t = M.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        [Y, Z] = s.useState(0),
        [ee, et] = s.useState(!1);
    s.useEffect(() => {
        if (0 === j.length) return void et(!1);
        let e = J.current?.querySelector("textarea");
        if (null != e) {
            let t = rb(e);
            null != t && Z(t);
        }
        et(!0);
        let t = setTimeout(() => et(!1), rp);
        return () => clearTimeout(t);
    }, [j]);
    let ei = s.useMemo(() => ({ "--custom-glow-x": `${Y}px` }), [Y]),
        er = ee ? ` ${rc.EB}` : "",
        es = i
            ? ef.intl.string(ec.default.qqlUiW)
            : n
              ? ef.intl.string(ec.default.mPB3eo)
              : l
                ? x
                    ? ef.intl.string(ec.default.knUjL3)
                    : h
                      ? ef.intl.string(ec.default.IevBEw)
                      : ef.intl.string(a ? ec.default["0BJa/0"] : ec.default.TEeU7z)
                : ef.intl.string(ec.default.zZ9NgM),
        eu = s.useRef(0),
        eo = s.useRef(null),
        ed = s.useCallback((e) => {
            if ((eo.current?.disconnect(), null == e)) return;
            eu.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                eu.current = e.clientWidth;
            });
            (t.observe(e), (eo.current = t));
        }, []),
        em = s.useId(),
        eg = null != H,
        eh = U ?? H ?? es,
        ex = "" === j && "" !== eh;
    return (0, r.jsxs)("form", {
        onSubmit: q,
        className: rc.DA,
        children: [
            _.length > 0
                ? (0, r.jsx)("div", {
                      className: rc.lN,
                      children: _.map((e) => (0, r.jsx)(rd, { draft: e, onRemove: L }, e.localId)),
                  })
                : null,
            (0, r.jsx)("span", { className: `${rc.wg} ${rc.LP}${er}`, style: ei, "aria-hidden": !0 }),
            (0, r.jsx)("span", { className: `${rc.wg} ${rc.L3}${er}`, style: ei, "aria-hidden": !0 }),
            (0, r.jsxs)("div", {
                className: rc.VA,
                ref: J,
                children: [
                    (0, r.jsx)("input", {
                        ref: M,
                        type: "file",
                        multiple: !0,
                        onChange: W,
                        className: rc.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(el.Y, {
                        targetElementRef: X,
                        position: "top",
                        align: "left",
                        animation: el.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(en.W, {
                                "data-menu-migrated": !0,
                                navId: "conjure-composer-attach",
                                "aria-label": ef.intl.string(ef.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, r.jsxs)(ea.rX, {
                                    children: [
                                        rf.map((e) =>
                                            (0, r.jsx)(
                                                ea.Dr,
                                                {
                                                    id: e.id,
                                                    label: ef.intl.string(e.label),
                                                    iconLeft: e.icon,
                                                    leadingAccessory: { type: "icon", icon: e.icon },
                                                    action: () => Q(e.accept),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        null != f
                                            ? (0, r.jsx)(ea.Dr, {
                                                  id: "import-project",
                                                  label: ef.intl.string(ec.default["p/k5i7"]),
                                                  iconLeft: i9.q,
                                                  leadingAccessory: { type: "icon", icon: i9.q },
                                                  action: f,
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
                                className: `${rc.Y0} ${rc.nu}`,
                                disabled: !l,
                                "aria-label": ef.intl.string(ef.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": n,
                                children: (0, r.jsx)(re.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: rc.Qu,
                                }),
                            });
                        },
                    }),
                    ex
                        ? (0, r.jsx)("div", {
                              ref: ed,
                              className: rc.ar,
                              "aria-hidden": "true",
                              children: (0, r.jsx)(rh, { text: eh, offering: eg && null == U, typed: null != U }),
                          })
                        : null,
                    (0, r.jsx)(nb.y, {
                        value: j,
                        onChange: (e) => k(e.currentTarget.value),
                        onKeyDown: V,
                        onPaste: K,
                        placeholder: ex ? "" : es,
                        disabled: !l,
                        "aria-label": ef.intl.string(ec.default.ldNl9x),
                        "aria-describedby": ex ? em : void 0,
                        rows: 1,
                        className: rc.jp,
                    }),
                    ex ? (0, r.jsx)(N.A, { id: em, children: es }) : null,
                    (0, r.jsx)("div", {
                        className: rc.Sz,
                        children:
                            a && null != o
                                ? (0, r.jsx)(A.m, {
                                      text: ef.intl.string(ec.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, r.jsx)("button", {
                                          type: "button",
                                          className: `${rc.Y0} ${rc.$E}`,
                                          disabled: I,
                                          onClick: B,
                                          "aria-label": ef.intl.string(ec.default.wiguT0),
                                          children: (0, r.jsx)(ao.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : v?.tierSettings != null && null != b
                                  ? (0, r.jsx)(th, {
                                        settings: v.tierSettings,
                                        tiers: v.tiers,
                                        choices: v.choices,
                                        disabled: !l,
                                        onChange: b,
                                        className: `${rc.Y0} ${rc.$E}`,
                                        icon: (0, r.jsx)(ts.R, {
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
                              className: rc.fF,
                              children: [
                                  (0, r.jsx)("div", { className: rc.MT }),
                                  (0, r.jsx)("button", {
                                      type: "submit",
                                      className: rc.rt,
                                      disabled: !z,
                                      "aria-label": ef.intl.string(ec.default.rxW2cl),
                                      children: (0, r.jsx)(rt.SendMessageIcon, {
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
let rp = 1500,
    rv = [
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
function rb(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = rb.mirror;
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
                (rb.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of rv) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
rb.mirror = null;
var rj = l(155899),
    ry = l(148087);
let rk = [6e4, 18e4, 6e5],
    rw = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: rk,
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
                    (0, tV.BL)(t) &&
                    !(null != l.publishCta && iz(n))
                );
            },
        },
    ];
function rA(e, t) {
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
let rN = new Map();
function rC(e) {
    let { projectId: t, notice: l } = e;
    return "outdated" === l ? (0, r.jsx)(rE, { projectId: t }) : (0, r.jsx)(rS, { projectId: t, notice: l });
}
function rS(e) {
    let { projectId: t, notice: l } = e,
        n = s.useContext(lF),
        a = (0, m.bG)([eE.Ay, lI.A], () => {
            let e = eE.Ay.getProject(t);
            return null == e ? "" : (lI.A.getApplication(e.application_id)?.name ?? e.name);
        }),
        i = s.useCallback(() => {
            null != n &&
                (function (e, t) {
                    let l = lU(e, t.guildId);
                    if (null == l) return;
                    let n = lR({
                        ...l.input,
                        status: null == l.input.status ? null : { ...l.input.status, state: "up_to_date" },
                    })?.destination;
                    null != n && lG(l, n, t.platform).catch(() => {});
                })(t, n);
        }, [n, t]);
    return (0, r.jsx)(k.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: ef.intl.format(
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
            { name: a, onOpen: i },
        ),
    });
}
function rE(e) {
    let { projectId: t } = e,
        l = lJ(t),
        [n, a] = s.useState(!1);
    return null == l
        ? null
        : n && (l.publishing || !l.isUpdate)
          ? (0, r.jsx)(rI, {})
          : (0, r.jsx)(k.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ef.intl.format(ec.default.X8tdbS, {
                    action: l.label,
                    onUpdate: () => {
                        (a(!0), rN.get(t)?.forEach((e) => e()), l.run("outdated_notice"));
                    },
                }),
            });
}
function rI() {
    let e = ef.intl.string(ec.default.lexcBN),
        t = (function () {
            let e = (0, m.bG)([rl.Ay], () => rl.Ay.useReducedMotion),
                [t, l] = s.useState(1);
            return (
                s.useEffect(() => {
                    if (e) return;
                    let t = setInterval(() => l((e) => (e % 3) + 1), 400);
                    return () => clearInterval(t);
                }, [e]),
                ".".repeat(e ? 3 : t)
            );
        })();
    return (0, r.jsxs)(k.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, r.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var rT = l(248798);
function rM(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function r_(e) {
    let { reminder: t, renderReminder: l } = e,
        n = (function (e) {
            let t,
                [l, n] = s.useState([]);
            (l.find((e) => !e.leaving)?.key ?? null) !== e &&
                n(
                    ((t = l.filter((t) => t.key !== e).map((e) => ({ ...e, leaving: !0 }))),
                    null != e ? [...t, { key: e, leaving: !1 }] : t),
                );
            let a = l.some((e) => e.leaving);
            return (
                s.useEffect(() => {
                    if (!a) return;
                    let e = setTimeout(() => n((e) => e.filter((e) => !e.leaving)), 180);
                    return () => clearTimeout(e);
                }, [a, l]),
                l
            );
        })(t),
        a = n.find((e) => !e.leaving)?.key ?? null,
        i = null == a && n.length > 0,
        u = s.useRef(null),
        d = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            let e = u.current;
            if (null == e || i) return;
            e.getBoundingClientRect();
            let t = d.current;
            if (null == t) {
                e.style.height = "0px";
                return;
            }
            rM(e, t);
            let l = new ResizeObserver(() => rM(e, t));
            return (l.observe(t), () => l.disconnect());
        }, [a, i]),
        (0, r.jsx)("div", {
            ref: u,
            className: o()(rT.NI, { [rT.Jg]: null == a }),
            "aria-live": "polite",
            children: (0, r.jsx)("div", {
                className: rT.t$,
                children: n.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : d,
                            "aria-hidden": e.leaving || void 0,
                            className: o()(rT.qd, e.leaving ? rT.cu : rT.We),
                            children: l(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var rP = l(521981),
    rR = l(491182),
    rL = l(438729),
    rD = l(622868),
    rO = l(448368),
    rF = l(837528),
    rz = l(439762),
    rU = l(715628),
    rG = l(752636),
    r$ = l(9842),
    rq = l(589022),
    rB = l(994500),
    rH = l(967198),
    rV = l(7584);
let rK = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function rW(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function rJ(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function rX(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = rJ(e, t),
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
        8205 === a
    )
        return !0;
    if (rW(a) && rW(i)) {
        let l = 0,
            n = t;
        for (; l < 32 && rW(rJ(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function rQ(e, t) {
    let { streaming: l } = t,
        n = (0, m.bG)([rl.Ay], () => rl.Ay.useReducedMotion),
        a = l && !n,
        [i, r] = s.useState(() => ({ target: e, length: e.length })),
        u = i;
    (u.target !== e &&
        (u = {
            target: e,
            length: a
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          i = 0;
                      for (; i < a && e.charCodeAt(i) === t.charCodeAt(i);) i++;
                      for (; i > 0 && rX(t, i);) i--;
                      return i;
                  })(u.target, e, u.length)
                : e.length,
        }),
        a || u.length === e.length || (u = { target: e, length: e.length }),
        u !== i && r(u));
    let o = a && u.length < e.length,
        d = s.useRef(u);
    s.useLayoutEffect(() => {
        d.current = u;
    });
    let c = s.useRef(0),
        f = s.useRef(0);
    (s.useEffect(() => {
        if (o)
            return (
                (f.current = 0),
                (c.current = requestAnimationFrame(function e(t) {
                    let l = 0 === f.current ? 32 : t - f.current;
                    if (l >= 32) {
                        f.current = t;
                        let e = d.current,
                            n = (function (e) {
                                let { target: t, revealed: l, elapsedMs: n } = e,
                                    a = Math.min(Math.max(l, 0), t.length),
                                    i = t.length - a;
                                if (i <= 0) return a;
                                if (i > 900) return t.length;
                                let r = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, i / 280) * Math.max(n, 0))),
                                );
                                var s = (function (e, t, l) {
                                    if (l >= e.length) return l;
                                    let n = l;
                                    for (; n > t + 1 && l - n < 12 && rK.has(e.charAt(n - 1));) n--;
                                    return rK.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + r));
                                let u = s;
                                for (; u < t.length && u - s < 32 && rX(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && r({ target: e.target, length: n });
                    }
                    c.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(c.current)
            );
    }, [o]),
        s.useEffect(() => {
            if (o)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                r({ target: e, length: e.length });
            }
        }, [o]));
    let g = Math.min(u.length, e.length);
    return { text: g >= e.length ? e : e.slice(0, g), revealing: a && g < e.length };
}
var rY = l(565645),
    rZ = l(981879);
function r0(e) {
    let { emoji: t, label: l } = e;
    return (0, r.jsx)("div", {
        className: rZ.H,
        children: (0, r.jsx)(rY.A, { emojiName: t, alt: l, size: "reaction" }),
    });
}
var r1 = l(734495),
    r2 = l(180227);
function r3(e) {
    let { message: t, onClose: l } = e,
        n = (0, r1.A)(t);
    return (0, r.jsx)(en.W, {
        navId: "conjure-message-actions",
        "aria-label": ef.intl.string(ef.t.Lv7LxN),
        onClose: l,
        onSelect: l,
        children: (0, r.jsx)(ea.rX, { children: n }),
    });
}
function r5(e) {
    let { groupStart: t, renderMenu: l } = e,
        [n, a] = s.useState(!1),
        i = s.useRef(null),
        u = s.useCallback(() => a((e) => !e), []),
        d = s.useCallback(() => a(!1), []);
    return (0, r.jsx)("div", {
        className: o()(r2.QE, { [r2.Rn]: t, [r2.vg]: n }),
        children: (0, r.jsx)(ix.Ay, {
            children: (0, r.jsx)(el.Y, {
                targetElementRef: i,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return l(t);
                },
                shouldShow: n,
                onRequestClose: d,
                position: "left",
                align: "top",
                animation: el.Y.Animation.NONE,
                children: (e, t) => {
                    let { onClick: l, ...n } = e,
                        { isShown: a } = t;
                    return (0, r.jsx)(ix.qv, {
                        ref: i,
                        label: ef.intl.string(ef.t["UKOtz+"]),
                        icon: t7.MoreHorizontalIcon,
                        selected: a,
                        onClick: u,
                        ...n,
                    });
                },
            }),
        }),
    });
}
function r4(e) {
    let { message: t, groupStart: l } = e,
        n = s.useCallback((e) => (0, r.jsx)(r3, { message: t, onClose: e }), [t]);
    return null == (0, r1.A)(t) ? null : (0, r.jsx)(r5, { groupStart: l, renderMenu: n });
}
let r7 = (0, aq.createChannelRecord)({ id: "conjure-builder", type: ey.rbe.DM }),
    r8 = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function r6(e, t) {
    return null == e ? e : (0, r.jsx)("div", { className: o()(r2.Yq, { [r2.x1]: t }), children: e });
}
function r9(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function se(e, t, l) {
    let { content: n } = (0, rz.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        a = s.useMemo(() => ({ message: e, channel: r7, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, r.jsx)(rL.Ay, { className: l, message: e, content: n, compact: !1 })
          : (0, rU.A)(a, n);
}
function st(e) {
    let [t, l] = s.useState({ usernameProfile: !1, avatarProfile: !1 }),
        n = s.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        a = s.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        i = (0, rF.m)(e, r7, t.usernameProfile, n),
        u = (0, rF.Jo)(t.avatarProfile, n),
        o = (0, m.bG)([rH.A], () => rH.A.getGuildId()),
        d = (0, m.bG)([tB.default], () => tB.default.getCurrentUser()),
        c = s.useCallback(
            (t) => {
                let l = tB.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, r.jsx)(rq.A, { ...t, user: l, currentUser: d, guildId: o ?? void 0 });
            },
            [d, o, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: i,
        onPopoutRequestClose: a,
        renderPopout: c,
        guildId: o ?? void 0,
    };
}
function sl(e) {
    let { baseMessage: t, referenced: l, selected: n, onJumpToReplied: a } = e,
        i = s.useMemo(() => {
            let e = "" !== l.content ? (0, rP.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == n
                ? e
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("span", {
                              className: r2.GV,
                              children: [
                                  (0, r.jsx)(E.x, {
                                      className: r2.Rj,
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
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, m.cf)(
            [rB.A],
            () => ({
                isReplyAuthorBlocked: rB.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: rB.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, ig.X4)(l),
        c = (0, ig.X4)(t),
        f = st(l);
    return (0, r.jsx)(rO.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: r7,
        referencedMessage: { state: r$.a.LOADED, message: l },
        content: i,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != a,
        showReplySpine: !0,
        renderPopout: f.renderPopout,
        showAvatarPopout: f.showAvatarPopout,
        showUsernamePopout: f.showUsernamePopout,
        onClickAvatar: f.onClickAvatar,
        onClickUsername: f.onClickUsername,
        onClickReply: a,
        onPopoutRequestClose: f.onPopoutRequestClose,
    });
}
function sn(e) {
    let { message: t, author: l } = e,
        n = st(t);
    return (0, r.jsx)(rD.Ay, {
        message: t,
        channel: r7,
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
function sa(e) {
    let { content: t, createdAt: l, userId: n, accessories: a, agentReaction: i, groupStart: u } = e;
    s.useEffect(() => tQ(n), [n]);
    let o = (0, m.bG)(
            [tB.default],
            () => tX(n, null != n ? tB.default.getUser(n) : null, tB.default.getCurrentUser()),
            [n],
        ),
        d = s.useMemo(() => (0, ig.FT)(o, null), [o]),
        c = s.useMemo(() => e0(t), [t]),
        f = c?.body ?? t,
        g = s.useMemo(() => {
            if (null == o) return null;
            let e = (0, a$.Ay)({ channelId: r7.id, content: f, author: o });
            return (0, aG.rh)({ ...e, timestamp: r9(l, e.timestamp), state: ey.cmJ.SENT });
        }, [f, o, l]),
        h = (function (e) {
            if (null == e || "" === e) return null;
            let t = rV.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : ef.intl.formatToPlainString(ec.default.lxXLho, { emojiName: t });
        })(i);
    return null == g
        ? null
        : (0, r.jsx)(si, {
              message: g,
              author: d,
              content: f,
              selected: c?.label,
              accessories:
                  null != i && null != h
                      ? (0, r.jsxs)(r.Fragment, { children: [a, (0, r.jsx)(r0, { emoji: i, label: h })] })
                      : a,
              groupStart: u,
          });
}
function si(e) {
    let { message: t, author: l, content: n, selected: a, accessories: i, groupStart: s = !0 } = e,
        u = se(t, n);
    return (0, r.jsx)(rR.A, {
        className: r2.yE,
        author: l,
        childrenHeader: s ? (0, r.jsx)(sn, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == a
                ? u
                : (0, r.jsxs)("div", {
                      className: r2.zq,
                      children: [
                          (0, r.jsxs)("span", {
                              className: r2.GV,
                              children: [
                                  (0, r.jsx)(E.x, {
                                      className: r2.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  a,
                              ],
                          }),
                          (0, r.jsx)("span", { className: r2.WO, children: u }),
                      ],
                  }),
        childrenAccessories: r6(i, "" !== n),
        childrenButtons: (0, r.jsx)(r4, { message: t, groupStart: s }),
    });
}
function sr(e) {
    let {
            content: t,
            createdAt: l,
            accessories: n,
            replyTo: a,
            onJumpToReplied: i,
            groupStart: u = !0,
            streaming: o = !1,
            buttons: d,
        } = e,
        { text: c, revealing: f } = rQ(t, { streaming: o }),
        g = s.useMemo(() => (0, ig.FT)(null, null), []),
        h = s.useMemo(() => ({ ...g, nick: "Conjure", colorString: "var(--text-brand)" }), [g]),
        x = a?.userId,
        p = (0, m.bG)(
            [tB.default],
            () => tX(x, null != x ? tB.default.getUser(x) : null, tB.default.getCurrentUser()),
            [x],
        ),
        v = s.useMemo(() => (null == a ? null : e0(a.content)), [a]),
        b = s.useMemo(() => {
            if (null == a || null == p) return null;
            let e = (0, a$.Ay)({ channelId: r7.id, content: v?.body ?? a.content, author: p });
            return (0, aG.rh)({ ...e, id: a.id, timestamp: r9(a.createdAt, e.timestamp), state: ey.cmJ.SENT });
        }, [a, v, p]),
        j = s.useMemo(() => (null == a ? void 0 : { channel_id: r7.id, message_id: a.id }), [a]),
        y = s.useMemo(() => {
            let e = (0, a$.Ay)({ channelId: r7.id, content: c, author: r8 });
            return (0, aG.rh)({
                ...e,
                timestamp: r9(l, e.timestamp),
                state: ey.cmJ.SENT,
                ...(null != j ? { type: ey.lAJ.REPLY, message_reference: j } : {}),
            });
        }, [c, l, j]),
        k = se(y, c, r2.OS);
    return (0, r.jsxs)("div", {
        className: r2.$4,
        "data-replying": null != b ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, r.jsx)(rR.A, {
                className: r2.yE,
                author: h,
                childrenRepliedMessage:
                    null == b
                        ? null
                        : (0, r.jsx)(sl, { baseMessage: y, referenced: b, selected: v?.label, onJumpToReplied: i }),
                childrenHeader: (0, rG.A)({ message: y, channel: r7, author: h, guildId: void 0, isGroupStart: u }),
                childrenMessageContent: k,
                childrenAccessories: r6(n, "" !== c),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, r.jsx)("span", {
                      className: r2.st,
                      "aria-hidden": "true",
                      children: (0, r.jsx)(aS.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let ss = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var su = l(744898);
function so(e) {
    let { onSelect: t, onClose: l = z.Z_, onRestoreVersion: n } = e;
    return (0, r.jsx)(en.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: l,
        "aria-label": ef.intl.string(ef.t.ogxXGq),
        onSelect: t,
        children: (0, r.jsx)(ea.rX, {
            children: (0, r.jsx)(ea.Dr, {
                id: "restore-version",
                label: ef.intl.string(ec.default.H8Jfhu),
                icon: su.e,
                action: n,
            }),
        }),
    });
}
var sd = l(986109);
function sc(e, t) {
    (0, rj.F)({ onConfirm: () => t(e) });
}
function sf(e) {
    let {
            projectId: t,
            messages: l,
            emptyState: n,
            ref: a,
            onPickIdea: i,
            onAskForIdeas: u,
            draftHasText: d,
            onApprovePlan: c,
            floatingSettingsMessageId: f,
            onRestoreVersion: g,
        } = e,
        h = s.useRef(null),
        x = s.useCallback(
            (e) => {
                ((h.current = e), "function" == typeof a ? a(e) : null != a && (a.current = e));
            },
            [a],
        ),
        [p, v] = s.useState(null),
        b = s.useRef(0);
    s.useEffect(() => () => window.clearTimeout(b.current), []);
    let j = s.useCallback((e) => {
            let t = h.current?.querySelector(`[data-conjure-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                v(e),
                window.clearTimeout(b.current),
                (b.current = window.setTimeout(() => v(null), 1600)));
        }, []),
        y = (0, m.bG)([eE.Ay], () => eE.Ay.getPublishStatus(t)?.state ?? null),
        w = s.useMemo(() => {
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
                                        let t = (0, l4.lt)(e.steps);
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
                    let e = !(0, tV.BL)(t),
                        a = am({
                            steps: t.steps,
                            content: t.content,
                            hasProposal: null != t.proposal,
                            hasAttachments: (t.attachments?.length ?? 0) > 0,
                        }),
                        i = a.lastStreamedMessage?.key,
                        r = (0, l4.C6)(t.steps, { turnActive: e }),
                        { lastWork: s, open: u } = (0, l4.CT)(r, { turnActive: e }),
                        o = r.at(-1)?.index,
                        d = !1;
                    for (let c of r) {
                        if (null != c.prose && ss.test(c.prose.content)) d = !0;
                        else if (null != c.prose && c.prose.key !== a.replyKey) {
                            let l = `${t.render_id}:${c.key}`;
                            n(
                                {
                                    kind: "prose",
                                    key: l,
                                    message: t,
                                    groupStart: !1,
                                    content: c.prose.content,
                                    hostsAttachments:
                                        "streamed" === a.attachmentsHost && c.prose.key === i && null != t.attachments,
                                    streaming: e && c.index === o && !c.hasWork,
                                },
                                { actor: "assistant", boundary: l },
                            );
                        }
                        (c.hasWork || c.hasTodos) &&
                            n(
                                {
                                    kind: "activity",
                                    key: `${t.render_id}:work-${c.index}`,
                                    message: t,
                                    groupStart: !1,
                                    segment: c.index,
                                    active: c.index === u,
                                    closed: c.index !== u,
                                    ...(null != c.durationMs ? { segmentDurationMs: c.durationMs } : {}),
                                    reportsDuration: c.index === s,
                                    hostsChecklist: c.hasTodos,
                                    turnActive: l7(t),
                                    checklistSuperseded: c.hasTodos && l.has(t.render_id),
                                },
                                { actor: null, boundary: void 0 },
                            );
                    }
                    let c = ss.test(t.content ?? "");
                    if (
                        (!0 === t.interrupted || d || c
                            ? n(
                                  {
                                      kind: "interrupted",
                                      key: `${t.render_id}:interrupted`,
                                      message: t,
                                      groupStart: !1,
                                  },
                                  { actor: null, boundary: void 0 },
                              )
                            : r.every((e) => !e.hasTodos) &&
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
                        (a.showsClosingMessage && !c) ||
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
                        i = !1,
                        r = !1;
                    for (let s of e) {
                        if (null == s.actor) {
                            (n.push(!1), (a = null), (t = void 0), (i = !1), (r = !1), (l = void 0));
                            continue;
                        }
                        let e = !i || a !== s.actor || t !== s.authorId || s.boundary !== l || !0 === s.separate || r;
                        (e && ((a = s.actor), (t = s.authorId), (i = !0), (r = !0 === s.separate), (l = s.boundary)),
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
                })(l, y)),
                l.every((t) => null == t.publishCta || t.id === e)
                    ? l
                    : l.map((t) => (null == t.publishCta || t.id === e ? t : { ...t, publishCta: null }))),
            );
        }, [l, y]),
        A = l.at(-1),
        N = (function (e, t, l) {
            var n;
            let a = lJ(e),
                i = (0, ry.A)(),
                r = (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let l = e[t];
                        if ("publish_notice" !== l.kind) {
                            if ("user" === l.role) return null;
                            if ((0, tV.BL)(l)) return l;
                            if (!(0, tV.B0)(e, t)) break;
                        }
                    }
                    return null;
                })(t),
                u = t.at(-1),
                o = {
                    projectId: e,
                    draftHasText: l,
                    publishing: a?.publishing === !0,
                    drift: a?.status?.state === "changes",
                    messageAt: null != u ? Math.max(u.created_at, u.finished_at ?? 0, u.settled_at ?? 0) : null,
                    visible: i,
                },
                [d, c] = s.useState(() => rA(o, Date.now())),
                f = (function (e, t, l) {
                    if (e.projectId !== t.projectId) return rA(t, l());
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
                            let t = Math.min(e.outdatedBackoff + 1, rk.length - 1);
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
                })(d, o, Date.now),
                m =
                    null == r ||
                    null != (n = r).awaitingUser ||
                    null != n.secretRequest ||
                    null != n.settingsRequest ||
                    (n.intake?.questions.length ?? 0) > 0
                        ? null
                        : {
                              turn: r,
                              publish: a,
                              draftHasText: l,
                              draftTyped: f.draftTyped && l,
                              outdatedUpdating: f.outdatedUpdating,
                          },
                { shown: g, nextDueAt: h } = (function (e, t) {
                    var l;
                    let n;
                    if (t.unseen) return { shown: null, nextDueAt: null };
                    let a = e.filter((e) => e.eligible).sort((e, t) => t.priority - e.priority)[0];
                    if (null == a) return { shown: null, nextDueAt: null };
                    let i =
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
                    return i <= t.now ? { shown: a.key, nextDueAt: null } : { shown: null, nextDueAt: i };
                })(
                    rw.map((e) => ({
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
                "outdated" !== g || f.outdatedShown ? f !== d && c(f) : c({ ...f, outdatedShown: !0 }),
                s.useEffect(() => {
                    function t() {
                        c((e) => ({ ...e, outdatedUpdating: !0 }));
                    }
                    let l = rN.get(e) ?? new Set();
                    return (
                        rN.set(e, l),
                        l.add(t),
                        () => {
                            (l.delete(t), 0 === l.size && rN.delete(e));
                        }
                    );
                }, [e]),
                s.useEffect(() => {
                    if (null == h) return;
                    let e = setTimeout(() => c((e) => ({ ...e, now: Date.now() })), Math.max(0, h - Date.now()));
                    return () => clearTimeout(e);
                }, [h, f.now]),
                g
            );
        })(t, l, !0 === d),
        S = s.useCallback(
            (e) => {
                switch (e) {
                    case "outdated":
                        return (0, r.jsx)(sr, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, r.jsx)(rC, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, r.jsx)("div", {
                            className: sd.u$,
                            children: (0, r.jsx)(sr, {
                                content: ef.intl.string(ec.default.s96AWB),
                                accessories: (0, r.jsx)(iV, { onAsk: u }),
                            }),
                        });
                }
            },
            [t, u],
        ),
        E = s.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let l = e[t];
                        if ("assistant" === l.role) {
                            if (!(0, tV.BL)(l) || "plan_implemented" === l.kind) return null;
                            if (null != l.proposal) return l.render_id;
                        }
                    }
                    return null;
                })(l),
            [l],
        ),
        I = s.useMemo(
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
        T =
            (A?.role !== "assistant" || null == A.awaitingUser || null == A.secretRequest
                ? null
                : (0, tV.BL)(A)
                  ? A.awaitingUser
                  : null) ?? void 0,
        M = (0, m.bG)([er.Ay], () => er.Ay.getSettings(t)?.secrets, [t]),
        _ = s.useMemo(
            () =>
                (function (e, t) {
                    let l = null != t ? new Set(t.filter((e) => e.set).map((e) => e.name)) : null,
                        n = new Map(),
                        a = new Set(),
                        i = !1,
                        r = !1;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let s = e[t];
                        if (null == s) continue;
                        if ("user" === s.role) {
                            r =
                                r ||
                                (function (e) {
                                    let t = e.content.trim();
                                    return (
                                        t === ef.intl.string(ec.default.UGqnoV) ||
                                        t === ef.intl.string(ec.default.sMQt5O)
                                    );
                                })(s);
                            continue;
                        }
                        let u = s.secretRequest?.fields ?? [];
                        if (0 === u.length || !(0, tV.BL)(s)) continue;
                        let o = r;
                        for (let e of (o && null == l
                            ? n.set(s.render_id, "pending")
                            : o && null != l && u.every((e) => l.has(e.name))
                              ? n.set(s.render_id, "received")
                              : i
                                ? n.set(s.render_id, u.some((e) => a.has(e.name)) ? "superseded" : "inactive")
                                : n.set(s.render_id, "open"),
                        u))
                            a.add(e.name);
                        ((i = !0), (r = !1));
                    }
                    return n;
                })(l, M),
            [l, M],
        );
    if (0 === l.length) {
        if ("loading" === n)
            return (0, r.jsx)("ol", {
                ref: a,
                className: o()(sd.x7, sd.jH),
                "aria-busy": !0,
                children: (0, r.jsx)("li", { className: sd.Ub, children: (0, r.jsx)(C.y, {}) }),
            });
        let e = "unavailable" === n ? ec.default.Td4Sf4 : ec.default.V1QiNz;
        return (0, r.jsx)("ol", {
            ref: a,
            className: sd.x7,
            children: (0, r.jsx)(sm, { role: "assistant", children: (0, r.jsx)(sr, { content: ef.intl.string(e) }) }),
        });
    }
    return (0, r.jsxs)("ol", {
        ref: x,
        className: sd.x7,
        children: [
            w.map((e) => {
                let n = e.message;
                switch (e.kind) {
                    case "user": {
                        let l = null != n.attachments && n.attachments.length > 0 ? n.attachments : null;
                        return (0, r.jsx)(
                            sm,
                            {
                                role: "user",
                                anchorId: n.id,
                                highlighted: p === n.id,
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(sa, {
                                    groupStart: e.groupStart,
                                    content: n.content,
                                    createdAt: n.created_at,
                                    userId: n.user_id,
                                    agentReaction: n.agentReaction,
                                    accessories:
                                        null != l ? (0, r.jsx)(iY.A, { projectId: t, attachments: l }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, r.jsx)(
                            sm,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(sr, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: n.created_at,
                                    accessories:
                                        e.hostsAttachments && null != n.attachments
                                            ? (0, r.jsx)(iY.A, { projectId: t, attachments: n.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, r.jsx)(
                            sm,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(i3, {
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
                            sm,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(sr, {
                                    groupStart: e.groupStart,
                                    content: null == n.publishNotice ? n.content : "",
                                    createdAt: n.created_at,
                                    accessories:
                                        null == n.publishNotice
                                            ? void 0
                                            : (0, r.jsx)(rC, { projectId: t, notice: n.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, r.jsx)(
                            sm,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(i3, { projectId: t, interrupted: !0, steps: n.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, r.jsx)(
                            sm,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(i3, {
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
                                null != g
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
                            s = null != a && null != g ? () => sc(a, g) : void 0,
                            u = n.restoreProposal;
                        return (0, r.jsx)(
                            sm,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != s
                                        ? (e) => {
                                              (0, z.jA)(e, (e) => (0, r.jsx)(so, { ...e, onRestoreVersion: s }));
                                          }
                                        : void 0,
                                children: (0, r.jsx)(sr, {
                                    groupStart: e.groupStart,
                                    buttons:
                                        null != s
                                            ? (0, r.jsx)(r5, {
                                                  groupStart: e.groupStart,
                                                  renderMenu: (e) =>
                                                      (0, r.jsx)(so, { onClose: e, onSelect: e, onRestoreVersion: s }),
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
                                    onJumpToReplied: null != n.in_reply_to ? () => j(n.in_reply_to) : void 0,
                                    accessories: (0, r.jsx)(i5, {
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
                                        secretRequestAwaiting: n === A ? T : void 0,
                                        secretRequestStatus: _.get(n.render_id),
                                        settingsRequest: e.active || n.id === f ? void 0 : n.settingsRequest,
                                        publishCta: e.active ? null : n.publishCta,
                                        onPickIdea: i,
                                        onApprovePlan: n.render_id === E ? c : void 0,
                                        restoreProposal: u,
                                        onRestoreProposal:
                                            null != u && null != g && n === A
                                                ? () =>
                                                      sc(
                                                          {
                                                              sha: u.sha,
                                                              authorName: "",
                                                              authorEmail: "",
                                                              authoredAt: u.authored_at,
                                                              subject: u.subject,
                                                          },
                                                          g,
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
            null != T
                ? (0, r.jsx)(sm, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, r.jsx)(sr, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, r.jsx)(k.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: ef.intl.string(ec.default.YR8A2v),
                          }),
                      }),
                  })
                : null,
            (0, r.jsx)("li", {
                role: "none",
                className: sd.q3,
                children: (0, r.jsx)(r_, { reminder: N, renderReminder: S }),
            }),
        ],
    });
}
function sm(e) {
    let { role: t, children: l, anchorId: n, highlighted: a = !1, continuation: i = !1, onContextMenu: s } = e;
    return (0, r.jsx)("li", {
        onContextMenu: s,
        "data-role": t,
        "data-conjure-message": n,
        className: o()(sd.xk, { [sd.Qo]: a, [sd.q3]: i }),
        children: l,
    });
}
let sg = [ec.default["AX+5lk"], ec.default.VAU6A7, ec.default["1emysd"], ec.default.EXHX3L, ec.default.ChslmX];
function sh(e) {
    return sg.some((t) => ef.intl.string(t) === e);
}
function sx(e) {
    switch (e) {
        case "connecting":
            return ef.intl.string(ec.default["ECl+Dx"]);
        case "closed":
            return ef.intl.string(ec.default.mQZSp1);
        case "failed":
            return ef.intl.string(ec.default.xzJSZ6);
    }
}
var sp = l(823376),
    sv = l(187447);
function sb(e) {
    let { activity: t, id: l } = e,
        { text: n, revealing: a } = rQ(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        i = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            i.current?.scrollToBottom();
        }, [n]),
        (0, r.jsx)("div", {
            id: l,
            role: "tooltip",
            className: sv.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, r.jsx)(l3.Ch, {
                ref: i,
                className: sv.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, r.jsx)("div", {
                    className: o()(i1.PT, sv.bb),
                    "data-conjure-revealing": a ? "true" : void 0,
                    children: ad.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var sj = l(53659);
function sy(e) {
    let {
            activity: t,
            compacting: l = !1,
            restoring: n = !1,
            recalling: a = !1,
            controlling: i = !1,
            spoken: u,
            onSpokenChange: d,
        } = e,
        c = s.useRef(null),
        f = s.useId(),
        [m, g] = s.useState(null),
        h = (function (e) {
            let { activity: t, compacting: l = !1, restoring: n = !1, recalling: a = !1, controlling: i = !1 } = e,
                r = null != t && "end" !== t.phase;
            return i
                ? ec.default["1jqaAc"]
                : n
                  ? ec.default.M4KI5F
                  : a
                    ? sg[0]
                    : l
                      ? ec.default.xnCAaP
                      : r
                        ? ec.default.izrt52
                        : ec.default.L9EDub;
        })({ activity: t, compacting: l, restoring: n, recalling: a, controlling: i }),
        x = ef.intl.string(h),
        p = h === sg["0"],
        [v, b] = s.useState(u ?? x),
        j = s.useRef(x);
    (s.useEffect(() => {
        j.current = x;
    }, [x]),
        s.useEffect(() => {
            d?.(v);
        }, [v, d]));
    let y = s.useRef(null),
        k = s.useRef(v);
    s.useEffect(() => {
        k.current = v;
    }, [v]);
    let A = s.useRef(p),
        N = s.useRef(0);
    (s.useEffect(() => {
        ((A.current = p), !p && sh(k.current) && b(j.current));
    }, [p]),
        s.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                if (A.current) {
                    var e;
                    ((N.current = sh(k.current) ? N.current + 1 : 0),
                        b(((e = N.current), ef.intl.string(sg[e % sg.length]))));
                } else j.current !== k.current ? b(j.current) : y.current?.play();
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
            function i() {
                (y.current?.stop(), a());
            }
            return (
                ("u" < typeof document || document.hasFocus()) && a(),
                window.addEventListener("focus", i),
                window.addEventListener("blur", n),
                () => {
                    (n(), window.removeEventListener("focus", i), window.removeEventListener("blur", n));
                }
            );
        }, []));
    let C = null != t && "" !== t.text,
        S = t?.session ?? null,
        E = C && null != S && m === S,
        I = s.useCallback(() => {
            C && null != S && g((e) => (e === S ? null : S));
        }, [C, S]),
        T = s.useCallback(() => g(null), []);
    return (0, r.jsx)(el.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: E,
        onRequestClose: T,
        renderPopout: () => (0, r.jsx)(sb, { id: f, activity: t }),
        children: () =>
            (0, r.jsxs)(w.D, {
                innerRef: c,
                className: o()(sj.hF, C && sj.Xd),
                "aria-label": ef.intl.string(n ? ec.default.qqlUiW : p ? sg["0"] : ec.default["Uuj/gh"]),
                "aria-expanded": E,
                "aria-describedby": E ? f : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ef.intl.string(h),
                onClick: I,
                children: [
                    (0, r.jsx)("span", {
                        className: sj.bl,
                        children: (0, r.jsx)(sp.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", {
                        className: sj.xu,
                        "aria-hidden": !!i || !!p || void 0,
                        children: (0, r.jsx)(eL.o, {
                            ref: y,
                            text: v,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: sj.yE,
                        }),
                    }),
                ],
            }),
    });
}
let sk = { second: 1e3, minute: 6e4 };
function sw(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = s.useState(() => Date.now());
    return (
        s.useEffect(() => {
            let l;
            if (null == e) return;
            let a = sk[t];
            return (
                !(function t() {
                    let i = Date.now();
                    (n(i), (l = setTimeout(t, a - ((((i - e) % a) + a) % a))));
                })(),
                () => clearTimeout(l)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, l - e)
    );
}
var sA = l(719374);
function sN(e) {
    let { startedAt: t } = e,
        l = sw(t);
    return (0, r.jsx)(k.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: sA.$,
        "data-conjure-turn-timer": !0,
        children: (0, ac.C7)(l),
    });
}
function sC(e) {
    let { startedAt: t } = e,
        l = sw(t, "minute");
    return (0, r.jsx)(N.A, { role: "timer", children: (0, ac.Us)(l) });
}
var sS = l(436804);
function sE(e) {
    return e.toLocaleString();
}
function sI(e) {
    let { label: t, usage: l, cached: n = !0 } = e;
    return (0, r.jsxs)("div", {
        className: sS.Q$,
        children: [
            (0, r.jsxs)("div", {
                className: sS.mf,
                children: [
                    (0, r.jsx)(k.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, r.jsxs)(k.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [sE((0, et.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, r.jsxs)(k.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    sE(l.input_tokens),
                    " in \xb7 ",
                    sE(l.output_tokens),
                    " out",
                    n
                        ? ` \xb7 ${sE(l.cache_creation_input_tokens)} cache write \xb7 ${sE(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function sT(e) {
    let { project: t } = e,
        l = (0, et.wU)(t.compaction),
        n = (0, et.wU)(t.classifier),
        a = (0, et.wV)(t.orchestrator, t.codegen),
        i = (0, et.wV)(a, l);
    return (0, r.jsxs)("div", {
        className: sS.si,
        role: "dialog",
        "aria-label": ef.intl.string(ec.default.p5EGzq),
        children: [
            (0, r.jsx)("div", {
                className: sS.Q$,
                children: (0, r.jsxs)("div", {
                    className: sS.mf,
                    children: [
                        (0, r.jsxs)(k.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [sE((0, et.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, r.jsxs)(k.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(sI, { label: ef.intl.string(ec.default["9Sj3SX"]), usage: a }),
            (0, r.jsx)(sI, { label: ef.intl.string(ec.default.ANCEo3), usage: l }),
            (0, r.jsx)(sI, { label: ef.intl.string(ec.default.ugL6D4), usage: n, cached: !1 }),
            (0, r.jsxs)("div", {
                className: sS.mf,
                children: [
                    (0, r.jsx)(k.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: ef.intl.string(ec.default["8OUg09"]),
                    }),
                    (0, r.jsx)(k.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, et.sj)(i) ? "\u2014" : `${Math.round(100 * (0, et.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function sM(e) {
    let { project: t } = e,
        l = s.useRef(null);
    return (0, r.jsx)(el.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, r.jsx)(sT, { project: t }),
        children: (e) =>
            (0, r.jsx)(w.D, {
                innerRef: l,
                className: sS.Y$,
                "aria-label": ef.intl.string(ec.default.Z96gxQ),
                ...e,
                children: (0, r.jsx)(aT.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var s_ = l(997421);
function sP(e) {
    let t,
        {
            projectId: l,
            thinking: n,
            turnStartedAt: a,
            restoring: i = !1,
            recalling: u = !1,
            thinkingActivity: o,
            compacting: d,
            projectUsage: c,
            connState: f,
        } = e,
        m = (0, tp.Zv)(l),
        [g, h] = s.useState(null),
        x = s.useCallback((e) => h(sh(e) ? null : e), []),
        p =
            null == c
                ? null
                : ((t = (0, et.a7)(c.cost_usd)),
                  {
                      text: ef.intl.formatToPlainString(ec.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: ef.intl.formatToPlainString(ec.default.Z4LvGa, { runes: t, turns: c.turns }),
                  }),
        v = n && null != a;
    return (0, r.jsxs)("div", {
        className: s_.jf,
        children: [
            (0, r.jsxs)("div", {
                className: s_.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    n || i || u || m
                        ? (0, r.jsx)(sy, {
                              activity: o,
                              compacting: d,
                              restoring: i,
                              recalling: u,
                              controlling: m,
                              spoken: g,
                              onSpokenChange: x,
                          })
                        : null,
                    v ? (0, r.jsx)(sN, { startedAt: a }) : null,
                ],
            }),
            v ? (0, r.jsx)(sC, { startedAt: a }) : null,
            null == c || null == p
                ? null
                : (0, r.jsxs)("span", {
                      className: s_.BP,
                      children: [
                          (0, r.jsx)(k.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": p.aria,
                              children: p.text,
                          }),
                          (0, r.jsx)(sM, { project: c }),
                      ],
                  }),
            "open" === f
                ? null
                : (0, r.jsx)(k.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === f ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ef.intl.formatToPlainString(ec.default["tCo+ZM"], { status: sx(f) }),
                      "data-conjure-conn": !0,
                      "data-state": f,
                      className: s_.XF,
                      children: sx(f),
                  }),
        ],
    });
}
var sR = l(698638),
    sL = l(608711);
let sD = [ef.intl.string(ec.default["9w+Chc"]), ef.intl.string(ec.default.WAvmdq), ef.intl.string(ec.default.SKsrzl)];
function sO(e) {
    var t;
    let { projectId: l, restoreState: n, onRestoreVersion: a, onImportProject: i } = e,
        u = (0, m.bG)([tV.Ay], () => tV.Ay.getMessages(l), [l]),
        o = (0, m.bG)([er.Ay], () => er.Ay.getConnState(l), [l]),
        d = (0, m.bG)([er.Ay], () => er.Ay.isChatStopped(l), [l]),
        c = (0, m.bG)([tV.Ay], () => tV.Ay.getProjectUsage(l), [l]),
        f = (0, m.bG)([tV.Ay], () => tV.Ay.getThinkingActivity(l), [l]),
        g = (0, m.bG)([tV.Ay], () => tV.Ay.isCompacting(l), [l]),
        h = (0, m.bG)([er.Ay], () => er.Ay.getModelSettings(l), [l]),
        x = s.useRef(null),
        p = s.useRef(null),
        v = s.useRef(null),
        b = s.useRef(!0),
        [j, y] = s.useState(!0),
        w = s.useRef(null);
    s.useLayoutEffect(() => {
        let e = p.current?.getScrollerNode();
        if (null == e) return;
        let t = w.current;
        b.current
            ? p.current?.scrollToBottom()
            : t?.row.isConnected === !0 && (e.scrollTop += t.row.getBoundingClientRect().top + e.scrollTop - t.top);
        let n = v.current?.firstElementChild;
        ((w.current = null != n ? { row: n, top: n.getBoundingClientRect().top + e.scrollTop } : null),
            e.scrollTop < 600 && (0, er.P6)(l));
    }, [u, l]);
    let A = s.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        N = s.useCallback(() => {
            let e = p.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            b.current = t < 32;
            let n = t > 1;
            y((e) => (!n === e ? e : !n));
            let a = e.getScrollerNode();
            null != a && a.scrollTop < 600 && (0, er.P6)(l);
        }, [l]);
    (s.useLayoutEffect(() => {
        let e = x.current,
            t = v.current;
        if (null == e) return;
        let l = p.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            i = l?.getBoundingClientRect().height,
            r = null;
        function s() {
            b.current &&
                (null != r && cancelAnimationFrame(r), (r = requestAnimationFrame(() => p.current?.scrollToBottom())));
        }
        let u = new ResizeObserver((t) => {
            for (let r of t)
                if (r.target === e) {
                    let e = r.contentRect.width;
                    if (e === n) continue;
                    ((n = e), s());
                } else if (r.target === l) {
                    let e = r.contentRect.height;
                    if (e === i) continue;
                    ((i = e), s());
                } else {
                    let e = r.contentRect.height;
                    if (e === a) continue;
                    ((a = e), s());
                }
        });
        return (
            u.observe(e),
            null != l && u.observe(l),
            null != t && u.observe(t),
            () => {
                (u.disconnect(), null != r && cancelAnimationFrame(r));
            }
        );
    }, []),
        s.useEffect(() => {
            (0, er.Hc)(l);
        }, [l]),
        (0, ew.E1)(l));
    let C = te(l),
        E = s.useCallback(
            (e, t) => {
                (0, er.dv)(l, e, t);
            },
            [l],
        ),
        I = s.useCallback(
            (e, t) => {
                0 === C.annotations.length
                    ? E(e, t)
                    : (E(
                          (function (e) {
                              let { annotations: t, metaComment: l, context: n } = e,
                                  a = t.filter((e) => eW(e.comment)),
                                  i = [];
                              if (
                                  (i.push(
                                      `My design feedback: ${1 === a.length ? "1 comment" : `${a.length} comments`} on the app.`,
                                  ),
                                  null != n)
                              ) {
                                  let e = n.title.trim(),
                                      t = "" !== e ? `${e} (${n.url})` : n.url;
                                  (i.push(`Page: ${t}, viewport ${n.viewport.width}x${n.viewport.height}.`),
                                      i.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              a.forEach((e, t) => {
                                  let l;
                                  (i.push(""),
                                      i.push(`${t + 1}. ${eQ(e.target)}`),
                                      i.push(
                                          `   Feedback: ${(l = e.comment.trim()).length <= 1e3 ? l : `${l.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let r = l.trim();
                              return ("" !== r && (i.push(""), i.push(`Note for the whole batch: ${r}`)), i.join("\n"));
                          })({ annotations: C.annotations, metaComment: e, context: C.context }),
                          t,
                      ),
                      e7(l));
            },
            [C, E, l],
        ),
        T = s.useCallback(() => (0, er.fu)(l), [l]),
        M = s.useCallback((e) => nV(l, e.implementation_prompt), [l]),
        [_, P] = (function (e) {
            let [t, l] = s.useState(() => au(e)),
                [n, a] = s.useState(e),
                i = n !== e,
                r = i ? au(e) : t;
            return (i && (a(e), l(r)), [r, l]);
        })(l),
        R = s.useCallback(() => E(ef.intl.string(ec.default["t5CN3+"])), [E]),
        L = s.useCallback((e, t, n) => nV(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        D = s.useCallback((e) => (0, er.XZ)(l, e), [l]),
        O = s.useCallback((e) => (0, er.vX)(l, e), [l]),
        F = s.useCallback((e) => ru(l, "chat", Array.from(e), O), [l, O]),
        z = s.useCallback(() => nV(l, ef.intl.string(ec.default.Zc7gML)), [l]),
        U = n?.status === "restoring",
        G = "open" === o && !d && !U,
        $ = u[u.length - 1],
        q = null != $ && "assistant" === $.role && null != $.proposal,
        [B, H] = s.useState(null),
        V = $?.clarification != null && $.clarification.id !== B ? $.clarification : null,
        K = s.useCallback(() => {
            null != V && H(V.id);
        }, [V]),
        W = (0, m.bG)([er.Ay], () => er.Ay.getSettings(l), [l]),
        [J, X] = s.useState(null),
        Q =
            null != $ &&
            "assistant" === $.role &&
            null != $.settingsRequest &&
            (0, tV.BL)($) &&
            $.id !== J &&
            ((t = $.settingsRequest),
            null != W &&
                (t.keys ?? []).some((e) => {
                    let t = W.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return W.secrets.find((t) => t.name === e)?.set !== !0;
                    let l = W.values[e];
                    return null == l || "" === l;
                }))
                ? $
                : null,
        Y = Q?.settingsRequest ?? null,
        Z = s.useCallback(() => {
            null != Q && X(Q.id);
        }, [Q]),
        ee = null != Y,
        et = (function (e) {
            let { historyLoaded: t, historyUnavailable: l, connState: n } = e;
            return l ? "unavailable" : t ? "greeting" : "failed" === n || "closed" === n ? "unavailable" : "loading";
        })({
            historyLoaded: (0, m.bG)([tV.Ay], () => tV.Ay.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, m.bG)([tV.Ay], () => tV.Ay.isHistoryUnavailable(l), [l]),
            connState: o,
        }),
        el = "loading" === et && 0 === u.length,
        en = s.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return sD[e % sD.length];
        }, [l]),
        ea = q ? ef.intl.string(ec.default.Zc7gML) : "greeting" === et && 0 === u.length ? en : null,
        ei = s.useMemo(() => {
            for (let e = u.length - 1; e >= 0; e--) {
                let t = u[e];
                if ("assistant" === t.role && !(0, tV.BL)(t)) return t;
            }
        }, [u]),
        es = null != ei,
        eu =
            null != ei
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = n9.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(ei)
                : void 0,
        eo = q && G ? z : void 0,
        ed = s.useCallback(() => nV(l, ef.intl.string(ec.default.EMgIuY)), [l]),
        [em, eg] = s.useState(null),
        [eh, ex] = s.useState(es);
    (eh !== es && (ex(es), es || eg(null)),
        s.useEffect(() => {
            if (!es) return;
            let e = p.current?.getScrollerNode(),
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
        }, [es, ei?.steps]));
    let ep = s.useMemo(() => (null != ei ? (0, l8.b)(ei.steps) : ""), [ei]),
        ev = s.useMemo(() => (null != ei ? ((0, l4.lt)(ei.steps) ?? ei.todos) : void 0), [ei]),
        eb = ei?.provisionalTodo,
        ej = null != ei && l7(ei),
        ey = s.useMemo(() => {
            var e;
            return null != ei ? ((e = ei.steps), i2((0, l4.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [ei]);
    return (0, r.jsxs)("section", {
        ref: x,
        "data-conjure-chat": !0,
        className: sL.TE,
        children: [
            G
                ? (0, r.jsx)(l5.A, {
                      title: ef.intl.string(ec.default.gy7byi),
                      description: ef.intl.string(ec.default["dkv/WO"]),
                      icons: sR.ir,
                      onDrop: F,
                  })
                : null,
            (0, r.jsx)(nx, {
                onJumpToActivity: A,
                line: ep,
                placement: es && "top" === em ? "top" : null,
                todos: ev,
                todosLive: ej,
                provisionalTodo: eb,
                agents: ey,
            }),
            (0, r.jsxs)("div", {
                className: sL.JX,
                children: [
                    (0, r.jsx)(l3.Ch, {
                        ref: p,
                        onScroll: N,
                        scrollbarGutter: el ? "both-edges" : "stable",
                        className: [sL.N$, j ? null : sL.hB, ee ? sL.J9 : null].filter(Boolean).join(" "),
                        children: (0, r.jsx)(sf, {
                            ref: v,
                            projectId: l,
                            messages: u,
                            emptyState: et,
                            floatingSettingsMessageId: Q?.id,
                            onPickIdea: G ? M : void 0,
                            onAskForIdeas: G ? R : void 0,
                            draftHasText: _,
                            onApprovePlan: G ? ed : void 0,
                            onRestoreVersion: U || es ? void 0 : a,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: sL.NJ,
                        children: (0, r.jsx)(sP, {
                            projectId: l,
                            thinking: es,
                            turnStartedAt: eu,
                            restoring: U,
                            recalling: el,
                            thinkingActivity: f,
                            compacting: g,
                            projectUsage: c,
                            connState: o,
                        }),
                    }),
                    null == V
                        ? null
                        : (0, r.jsx)("div", {
                              className: ee ? `${sL.B5} ${sL.J9}` : sL.B5,
                              children: (0, r.jsx)(
                                  n4,
                                  { projectId: l, clarification: V, onSubmit: G ? L : void 0, onDismiss: K },
                                  V.id,
                              ),
                          }),
                    null == Y
                        ? null
                        : (0, r.jsx)("div", {
                              className: sL.B5,
                              children: (0, r.jsx)(n6, { projectId: l, request: Y, onDismiss: Z }, Q?.id),
                          }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: sL.Jx,
                children: [
                    (0, r.jsx)(nx, {
                        onJumpToActivity: A,
                        line: ep,
                        placement: es && "bottom" === em ? "bottom" : null,
                        todos: ev,
                        todosLive: ej,
                        provisionalTodo: eb,
                        agents: ey,
                    }),
                    0 === C.annotations.length
                        ? null
                        : (0, r.jsxs)("div", {
                              className: sL.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, r.jsx)(k.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: ef.intl.formatToPlainString(ec.default["7b49dS"], {
                                          count: C.annotations.length,
                                      }),
                                  }),
                                  (0, r.jsx)(k.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ef.intl.string(ec.default["5zG+CR"]),
                                  }),
                                  (0, r.jsx)(S.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ef.intl.string(ec.default["/zOv9+"]),
                                      onClick: () => e7(l),
                                  }),
                              ],
                          }),
                    (0, r.jsx)(rx, {
                        projectId: l,
                        canSend: G,
                        stopped: d,
                        running: es,
                        restoring: U,
                        onSend: I,
                        hasPendingContext: C.annotations.length > 0,
                        onInterrupt: G ? T : void 0,
                        onUploadFile: O,
                        onImport: i,
                        onApprove: eo,
                        suggestion: ea,
                        questionOpen: null != V || null != Y,
                        modelSettings: h,
                        onModelSettingsChange: D,
                        onDraftHasTextChange: P,
                    }),
                ],
            }),
        ],
    });
}
var sF = l(624479),
    sz = l(761508),
    sU = l(540999);
let sG = [],
    s$ = new Map(),
    sq = new Map(),
    sB = new Map(),
    sH = new Map(),
    sV = new Map(),
    sK = new Map(),
    sW = new Map();
class sJ extends m.Ay.Store {
    getStatus(e) {
        return s$.get(e) ?? null;
    }
    getFetchState(e) {
        return sq.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return sH.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return sK.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return sV.get(e) ?? null;
    }
    getModelCalls(e) {
        return sW.get(e) ?? sG;
    }
    getForceCompactionState(e) {
        return sB.get(e) ?? "idle";
    }
}
let sX = new sJ(lE.h, {
    LOGOUT: function () {
        if (
            0 === s$.size &&
            0 === sq.size &&
            0 === sB.size &&
            0 === sH.size &&
            0 === sV.size &&
            0 === sK.size &&
            0 === sW.size
        )
            return !1;
        (s$.clear(), sq.clear(), sB.clear(), sH.clear(), sV.clear(), sK.clear(), sW.clear());
    },
    CONJURE_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        sq.set(t, "loading");
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === sB.get(t);
        n &&
            sB.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === sq.get(t);
        if ((a && sq.set(t, "failed"), !n && !a)) return !1;
    },
    CONJURE_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? sq.set(t, "failed") : (s$.set(t, l), sq.set(t, "loaded"));
    },
    CONJURE_DEBUG_COMPACTION_REPORT: function (e) {
        sH.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_COMPACTION_DECLINED: function (e) {
        sV.set(e.projectId, {
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
        sB.set(t, "pending");
    },
    CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        sB.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_MODEL_CALL: function (e) {
        let t = sW.get(e.projectId);
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
        sW.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, et.aM)(l.total)) return !1;
        sK.set(t, l);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (s$.delete(t), sq.delete(t), sB.delete(t), sH.delete(t), sV.delete(t), sK.delete(t), sW.delete(t));
    },
});
function sQ(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function sY(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function sZ(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function s0(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function s1(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function s2(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function s3(e) {
    return ef.intl.string("preview" === e ? ec.default["2yLYlG"] : ec.default.eiAi57);
}
let s5 = ["all", "preview", "stable", "web"],
    s4 = new Set(["error", "aborted", "length"]);
function s7(e) {
    switch (e.reason) {
        case "local":
            return ef.intl.string(ec.default.mUeKML);
        case "unconfigured":
            return ef.intl.string(ec.default.bGefb5);
        case "unauthorized":
            return ef.intl.string(ec.default.KLx6Bb);
        default:
            return null != e.detail
                ? ef.intl.formatToPlainString(ec.default.t09Q6q, { detail: e.detail })
                : ef.intl.string(ec.default["t+tG59"]);
    }
}
function s8(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ef.intl.formatToPlainString(ec.default["XO/bN4"], {
              p50: sQ(e.memory_p50_bytes ?? 0),
              p999: sQ(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let s6 = {
    db: () => ec.default["7l+DFG"],
    db_preview: () => ec.default.FAuffi,
    runtime: () => ec.default["Gkl+ab"],
    runtime_preview: () => ec.default.ynpJzv,
    bot: () => ec.default["5/i0cj"],
    bot_preview: () => ec.default.m2jsnw,
};
var s9 = l(911608),
    ue = l(177427);
function ut(e) {
    let { generatedAt: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: ue.KE,
        children: [
            (0, r.jsx)("div", {
                className: ue.IQ,
                children:
                    "loading" === l
                        ? (0, r.jsx)(C.y, { type: C.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, r.jsx)(k.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ef.intl.string(ec.default.ZVByPX),
                            })
                          : null != t
                            ? (0, r.jsx)(k.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: ef.intl.formatToPlainString(ec.default.INVO50, { time: s1(t) }),
                              })
                            : null,
            }),
            (0, r.jsx)(S.$, { variant: "secondary", size: "sm", text: ef.intl.string(ec.default.oKEgiu), onClick: n }),
        ],
    });
}
function ul(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("section", {
        className: ue.uW,
        "aria-label": t,
        children: [
            (0, r.jsx)(k.E, { variant: "text-xs/semibold", color: "text-muted", className: ue.Gf, children: t }),
            l,
        ],
    });
}
function un(e) {
    let { label: t, value: l, hint: n, critical: a = !1 } = e;
    return (0, r.jsxs)("div", {
        className: ue.N8,
        children: [
            (0, r.jsxs)("div", {
                className: ue.x7,
                children: [
                    (0, r.jsx)(k.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(k.E, {
                        variant: "text-sm/medium",
                        color: a ? "text-feedback-critical" : "text-default",
                        children: l,
                    }),
                ],
            }),
            null != n && (0, r.jsx)(k.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
        ],
    });
}
function ua(e) {
    let { label: t, used: l, max: n, formatValue: a } = e,
        i = n > 0 ? Math.min(1, Math.max(0, l / n)) : 0,
        s = i >= 0.9;
    return (0, r.jsxs)("div", {
        className: ue.N8,
        children: [
            (0, r.jsxs)("div", {
                className: ue.x7,
                children: [
                    (0, r.jsx)(k.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(k.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${a(l)} / ${a(n)}`,
                    }),
                ],
            }),
            (0, r.jsx)(s9.z, {
                value: 100 * i,
                valueLabel: `${a(l)} of ${a(n)}`,
                "aria-label": t,
                className: s ? ue.dh : void 0,
            }),
        ],
    });
}
function ui(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, r.jsx)(un, {
            label: ef.intl.string(ec.default.SXP7pD),
            value: ef.intl.string(ec.default.E5hKVi),
            hint: s7(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, r.jsx)(un, {
            label: ef.intl.string(ec.default.SXP7pD),
            value: "\u2014",
            hint: ef.intl.string(ec.default.AGvoMJ),
        });
    let n = s8(l);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(un, { label: ef.intl.string(ec.default["H/X+FI"]), value: sY(l.cpu_ms) }),
            null != n && (0, r.jsx)(un, { label: ef.intl.string(ec.default.lmFmMO), value: n }),
        ],
    });
}
function ur(e) {
    let { analytics: t } = e,
        l = ef.intl.string(ec.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, r.jsx)(ul, {
            title: l,
            children: (0, r.jsx)(k.E, { variant: "text-sm/normal", color: "text-muted", children: s7(t) }),
        });
    let n = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? s6[t] : null) ? ef.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, r.jsx)(ul, {
        title: l,
        children:
            0 === n.length
                ? (0, r.jsx)(k.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: ef.intl.string(ec.default.AGvoMJ),
                  })
                : n.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, r.jsx)(
                          un,
                          {
                              label: l,
                              value: ef.intl.formatToPlainString(ec.default["w/2voO"], { cpu: sY(t.cpu_ms) }),
                              hint: s8(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var us = l(400154);
let uu = [];
function uo(e) {
    let t,
        { call: l } = e,
        { text: n, bad: a } =
            ((t = null != l.stopReason && s4.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? sY(l.durationMs) : null,
                    `${sZ(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${sZ(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, r.jsxs)("div", {
        className: us.p5,
        children: [
            (0, r.jsx)(k.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: us.Q5,
                children: s0(l.observedAt),
            }),
            (0, r.jsxs)(k.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: us.qN,
                children: [l.role, " \xb7 ", l.model],
            }),
            (0, r.jsx)(k.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: a ? "text-feedback-critical" : "text-muted",
                children: n,
            }),
        ],
    });
}
function ud(e, t) {
    return (0, r.jsx)(un, {
        label: e,
        value: ef.intl.formatToPlainString(ec.default.yHJxuP, { count: sZ((0, et.aM)(t)) }),
        hint: `${sZ(t.input_tokens)} in \xb7 ${sZ(t.output_tokens)} out \xb7 ${sZ(t.cache_read_input_tokens)} cache read`,
    });
}
function uc(e) {
    let { projectId: t, status: l, fetchState: n, onRefresh: a, traceVisible: i = !1 } = e,
        u = (0, m.bG)([sX], () => sX.getLastTurnUsage(t), [t]),
        o = (0, m.bG)([sX], () => sX.getLastCompaction(t), [t]),
        d = (0, m.bG)([sX], () => sX.getLastCompactionDecline(t), [t]),
        c = (0, m.bG)([sX], () => sX.getForceCompactionState(t), [t]),
        f = s.useCallback(() => (0, er.Lj)(t), [t]),
        g = s.useCallback(() => (0, er.Lj)(t, !0), [t]),
        h = (0, m.bG)([sX], () => (i ? uu : sX.getModelCalls(t)), [t, i]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        v = l?.agent?.session ?? null,
        b = o?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, r.jsxs)("div", {
        className: us.Mf,
        children: [
            (0, r.jsx)(ut, { generatedAt: l?.generated_at ?? null, fetchState: n, onRefresh: a }),
            (0, r.jsx)(ul, {
                title: ef.intl.string(ec.default.JghNal),
                children:
                    null == x
                        ? (0, r.jsx)(k.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ef.intl.string(ec.default.s0U5Fv),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(un, {
                                      label: ef.intl.string(ec.default["9nqym2"]),
                                      value: sZ((0, et.a7)(x.cost_usd)),
                                      hint: ef.intl.formatToPlainString(ec.default.NCdUIh, { count: sZ(x.turns) }),
                                  }),
                                  ud(ef.intl.string(ec.default.xtxP0e), x.orchestrator),
                                  ud(ef.intl.string(ec.default["9Sj3SX"]), x.codegen),
                                  ud(ef.intl.string(ec.default.ANCEo3), (0, et.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, r.jsx)(un, {
                                          label: ef.intl.string(ec.default.SQHm7C),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${sZ(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, r.jsx)(ul, {
                title: ef.intl.string(ec.default.dZHPE5),
                children:
                    null == u
                        ? (0, r.jsx)(k.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ef.intl.string(ec.default.DfVjal),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  ud(ef.intl.string(ec.default["7X3i9d"]), u.total),
                                  (0, r.jsx)(un, {
                                      label: ef.intl.string(ec.default["8OUg09"]),
                                      value: `${Math.round((u.cache_hit_rate ?? (0, et.CA)(u.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, r.jsxs)(ul, {
                title: ef.intl.string(ec.default.NbRk9a),
                children: [
                    null != o && null != b
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(ua, {
                                      label: ef.intl.string(ec.default.Kw5wiQ),
                                      used: o.tokensAfter,
                                      max: b,
                                      formatValue: sZ,
                                  }),
                                  (0, r.jsx)(un, {
                                      label: ef.intl.string(ec.default.mRbSns),
                                      value: `${sZ(o.tokensBefore)} \u{2192} ${sZ(o.tokensAfter)}`,
                                      hint: ef.intl.formatToPlainString(ec.default.Vq3skS, {
                                          count: sZ(o.retainedMessages),
                                          time: s1(o.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(k.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != b
                                      ? ef.intl.formatToPlainString(ec.default.GMLCNv, { ceiling: sZ(b) })
                                      : ef.intl.string(ec.default.s0U5Fv),
                          }),
                    null != d &&
                        (0, r.jsx)(un, {
                            label: ef.intl.string(ec.default["4BX5KK"]),
                            value: `${sZ(d.projected)} / ${sZ(d.threshold)}`,
                            critical: !0,
                            hint: ef.intl.formatToPlainString(ec.default["6ngCax"], { time: s1(d.observedAt) }),
                        }),
                    (0, r.jsxs)("div", {
                        className: us.Lj,
                        children: [
                            (0, r.jsx)(S.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ef.intl.string(ec.default["1EiJeb"]),
                                disabled: "pending" === c,
                                onClick: f,
                            }),
                            (0, r.jsx)(k.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof c && "compacted" !== c.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ef.intl.string(ec.default.wox6Ev);
                                    if ("pending" === e) return ef.intl.string(ec.default.OcPHQ1);
                                    let t = s1(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return ef.intl.formatToPlainString(ec.default.BhRjZZ, { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? ec.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? ec.default.YZb4hK
                                              : ec.default.ZoUSVK;
                                    return ef.intl.formatToPlainString(l, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(c),
                            }),
                            "object" == typeof c &&
                                !0 === c.pendingTurn &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(S.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: ef.intl.string(ec.default.ZxG2AI),
                                            onClick: g,
                                        }),
                                        (0, r.jsx)(k.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: ef.intl.string(ec.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !i &&
                (0, r.jsx)(ul, {
                    title: ef.intl.string(ec.default.TkTRdW),
                    children:
                        0 === h.length
                            ? (0, r.jsx)(k.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ef.intl.string(ec.default["r3/FhI"]),
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      h
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, r.jsx)(uo, { call: e }, e.id)),
                                      h.length > 30 &&
                                          (0, r.jsx)(k.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: ef.intl.formatToPlainString(ec.default["uZ9P/O"], {
                                                  shown: 30,
                                                  total: h.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != v || l?.analytics != null) &&
                (0, r.jsxs)(ul, {
                    title: ef.intl.string(ec.default.EsSzCS),
                    children: [
                        null != v &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(un, {
                                        label: ef.intl.string(ec.default.CLXHAs),
                                        value: s1(v.instance_since),
                                        hint: ef.intl.string(ec.default.UCwUEX),
                                    }),
                                    (0, r.jsx)(un, {
                                        label: ef.intl.string(ec.default["8V8e1Z"]),
                                        value: sZ(v.sockets),
                                    }),
                                    (0, r.jsx)(un, {
                                        label: ef.intl.string(ec.default["4pBzYW"]),
                                        value: v.turn_inflight
                                            ? ef.intl.string(ec.default.Wv025I)
                                            : ef.intl.string(ec.default["7/lsFY"]),
                                    }),
                                    v.queued_messages > 0 &&
                                        (0, r.jsx)(un, {
                                            label: ef.intl.string(ec.default["3oUYnv"]),
                                            value: sZ(v.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, r.jsx)(ui, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, r.jsxs)(ul, {
                    title: ef.intl.string(ec.default["LEIhp/"]),
                    children: [
                        (0, r.jsx)(un, {
                            label: ef.intl.string(ec.default.IlDBN3),
                            value: sZ(p.max_subagent_iterations),
                        }),
                        (0, r.jsx)(un, {
                            label: ef.intl.string(ec.default["ZdzKR+"]),
                            value: ef.intl.formatToPlainString(ec.default.yHJxuP, {
                                count: sZ(p.context_window_tokens),
                            }),
                        }),
                        (0, r.jsx)(un, {
                            label: ef.intl.string(ec.default.cIhN2W),
                            value: ef.intl.formatToPlainString(ec.default.yHJxuP, {
                                count: sZ(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, r.jsx)(un, {
                            label: ef.intl.string(ec.default["+fOn/q"]),
                            value: sZ(p.max_user_message_chars),
                        }),
                        (0, r.jsx)(un, { label: ef.intl.string(ec.default.kIHga0), value: sZ(p.max_build_attempts) }),
                        (0, r.jsx)(un, { label: ef.intl.string(ec.default.Iw03yW), value: sZ(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var uf = l(237528),
    um = l(683438),
    ug = l(531893);
function uh(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, r.jsx)("div", {
              className: ug.ut,
              children: (0, r.jsx)(k.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: ef.intl.string(ec.default.h1SE6R),
              }),
          });
}
function ux(e) {
    let { state: t, emptyTitle: l, emptyBody: n } = e;
    return "failed" === t.status
        ? (0, r.jsxs)("div", {
              className: ug.qf,
              children: [
                  (0, r.jsx)(k.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: ef.intl.string(ec.default.h1SE6R),
                  }),
                  (0, r.jsx)(k.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: ef.intl.string(ec.default["8SErdg"]),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: ug.qf,
              children: [
                  (0, r.jsx)(k.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, r.jsx)(k.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
              ],
          });
}
function up(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, r.jsx)("div", {
              className: ug.ps,
              children: (0, r.jsx)(k.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: ef.intl.string(ec.default.V7Ri8H),
              }),
          })
        : null;
}
var uv = l(109079);
let ub = s.memo(function (e) {
    var t;
    let { entry: l, showSource: n } = e,
        [a, i] = s.useState(!1),
        u = s.useId(),
        o = s.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let l = e.indexOf("{"),
                        n = e.indexOf("["),
                        a = -1 === l ? n : -1 === n ? l : Math.min(l, n);
                    if (-1 === a) return null;
                    let i = e.slice(a).trim();
                    if (i.length < 2) return null;
                    try {
                        t = JSON.parse(i);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let r = e.slice(0, a).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: r, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: r, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(l.message),
            [l.message],
        ),
        d = "error" === l.level ? "text-feedback-critical" : "text-default";
    return (0, r.jsxs)("div", {
        className: uv.vK,
        children: [
            (0, r.jsx)(k.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: uv.Mt,
                selectable: !0,
                children: s0(l.ts),
            }),
            (0, r.jsx)(k.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = l.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: uv.dm,
                children: l.level,
            }),
            (0, r.jsxs)("div", {
                className: uv.t4,
                children: [
                    n &&
                        null != l.source &&
                        (0, r.jsx)("span", { className: uv.Cq, children: (0, r.jsx)(uf.v, { text: l.source }) }),
                    null != l.kind &&
                        (0, r.jsx)("span", {
                            className: uv.Cq,
                            title: l.build ?? void 0,
                            children: (0, r.jsx)(uf.v, {
                                text: ef.intl.string(ec.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != o
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  "" !== o.prefix &&
                                      (0, r.jsxs)(k.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [o.prefix, " "],
                                      }),
                                  (0, r.jsxs)(w.D, {
                                      className: uv.Pq,
                                      "aria-expanded": a,
                                      "aria-controls": u,
                                      "aria-label": ef.intl.string(ec.default["9CTzyV"]),
                                      onClick: () => i((e) => !e),
                                      children: [
                                          a
                                              ? (0, r.jsx)(nt.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, r.jsx)(tr._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, r.jsxs)(k.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  o.marker,
                                                  " ",
                                                  ef.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker
                                                          ? ec.default.kUhyUv
                                                          : ec.default["N+fphl"],
                                                      { count: o.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  a &&
                                      (0, r.jsx)(k.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: d,
                                          className: uv.dF,
                                          selectable: !0,
                                          id: u,
                                          children: o.pretty,
                                      }),
                              ],
                          })
                        : (0, r.jsx)(k.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: d,
                              selectable: !0,
                              children: l.message,
                          }),
                ],
            }),
        ],
    });
});
function uj(e) {
    let { projectId: t } = e,
        l = (0, m.bG)([eE.Ay], () => eE.Ay.getLogs(t), [t]),
        n = (0, m.bG)([eE.Ay], () => eE.Ay.getHistoryState(t, "logs")),
        [a, i] = s.useState("all"),
        [u, o] = s.useState(""),
        d = s.useMemo(() => {
            let e = u.trim().toLowerCase();
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
        }, [l, a, u]),
        c = s.useRef(null),
        f = s.useRef(!0);
    s.useEffect(() => {
        f.current && c.current?.scrollToBottom();
    }, [d]);
    let g = s.useCallback(() => {
            let e = c.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        h = s.useMemo(
            () =>
                s5.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return s3(e);
                            case "web":
                                return ef.intl.string(ec.default.IVzfVV);
                            default:
                                return ef.intl.string(ec.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, r.jsxs)("div", {
        className: uv.$F,
        children: [
            (0, r.jsxs)("div", {
                className: uv.y4,
                children: [
                    (0, r.jsx)(tO.I, {
                        look: "pill",
                        "aria-label": ef.intl.string(ec.default.MhvyUU),
                        options: h,
                        value: a,
                        onChange: (e) => i(e.value),
                    }),
                    (0, r.jsx)("div", {
                        className: uv.KT,
                        children: (0, r.jsx)(um.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: ef.intl.string(ec.default["m2+37Y"]),
                            "aria-label": ef.intl.string(ec.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, r.jsx)(uh, { state: n }),
            (0, r.jsxs)(l3.Ch, {
                ref: c,
                onScroll: g,
                overflow: "auto",
                className: uv.sx,
                children: [
                    (0, r.jsx)(up, { state: n }),
                    0 === l.length
                        ? (0, r.jsx)(ux, {
                              state: n,
                              emptyTitle: ef.intl.string(ec.default.S7qlPG),
                              emptyBody: ef.intl.string(ec.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, r.jsx)(k.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ef.intl.string(ec.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, r.jsx)(ub, { entry: e.log, showSource: "all" === a }, e.key)),
                ],
            }),
        ],
    });
}
function uy(e) {
    let { title: t, preview: l, stable: n, renderEnv: a } = e,
        i = [];
    return (
        null != l && i.push((0, r.jsx)(s.Fragment, { children: a("preview", l) }, "preview")),
        null != n && i.push((0, r.jsx)(s.Fragment, { children: a("stable", n) }, "stable")),
        (0, r.jsx)(ul, {
            title: t,
            children:
                i.length > 0
                    ? i
                    : (0, r.jsx)(k.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: ef.intl.string(ec.default.umcjif),
                      }),
        })
    );
}
function uk(e) {
    var t;
    let { env: l, bot: n } = e;
    return n.ever_started
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(un, {
                      label: ef.intl.formatToPlainString(ec.default["01ZMS4"], { env: s3(l) }),
                      value: ((t = n.connected), ef.intl.string(t ? ec.default.Wv025I : ec.default["7/lsFY"])),
                      critical: !n.connected && null != n.fatal_reason,
                      hint: n.fatal_reason ?? (n.connected ? void 0 : (n.last_start_reason ?? void 0)),
                  }),
                  (0, r.jsx)(un, {
                      label: ef.intl.string(ec.default["z1dh+F"]),
                      value: sZ(n.events_received),
                      hint:
                          null != n.last_event_type && null != n.last_event_at
                              ? `${n.last_event_type} \xb7 ${s1(n.last_event_at)}`
                              : void 0,
                  }),
                  (0, r.jsx)(un, { label: ef.intl.string(ec.default.Iz5GnJ), value: sZ(n.guild_count) }),
                  (0, r.jsx)(un, {
                      label: ef.intl.string(ec.default["7UqtNv"]),
                      value: sZ(n.reconnects),
                      hint:
                          null != n.last_close_code && null != n.last_close_at
                              ? ef.intl.formatToPlainString(ec.default.MasSly, {
                                    code: n.last_close_code,
                                    time: s1(n.last_close_at),
                                })
                              : void 0,
                  }),
                  n.dispatch_errors > 0 &&
                      (0, r.jsx)(un, {
                          label: ef.intl.string(ec.default["x3+JXJ"]),
                          value: sZ(n.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, r.jsx)(un, { label: s3(l), value: ef.intl.string(ec.default.lTHQss) });
}
function uw(e) {
    let { env: t, metrics: l } = e,
        n = l.status_4xx + l.status_5xx;
    return (0, r.jsx)(un, {
        label: s3(t),
        value: ef.intl.formatToPlainString(ec.default["Xq+wHT"], {
            requests: sZ(l.requests),
            failures: sZ(n + l.errors),
        }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? ef.intl.formatToPlainString(ec.default["o/ZBm4"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: s1(l.last_failure.at),
                  })
                : ef.intl.formatToPlainString(ec.default["7KlGT6"], { time: s1(l.since) }),
    });
}
function uA(e) {
    let { env: t, runtime: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(un, {
                label: ef.intl.formatToPlainString(ec.default["92gVTm"], { env: s3(t) }),
                value: sZ(l.connections),
            }),
            l.schedules.map((e) =>
                (0, r.jsx)(
                    un,
                    {
                        label: ef.intl.formatToPlainString(ec.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? ef.intl.formatToPlainString(ec.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? ef.intl.formatToPlainString(ec.default.wxAWNv, { time: s1(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function uN(e) {
    let { env: t, metrics: l } = e;
    return (0, r.jsx)(un, {
        label: s3(t),
        value: ef.intl.formatToPlainString(ec.default.suAOj9, { calls: sZ(l.calls), errors: sZ(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function uC(e) {
    let { title: t, metrics: l, limits: n } = e;
    if (null == l || 0 === l.requests)
        return (0, r.jsx)(ul, {
            title: t,
            children: (0, r.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ef.intl.string(ec.default["Noami/"]),
            }),
        });
    let a = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, r.jsxs)(ul, {
        title: t,
        children: [
            (0, r.jsx)(un, {
                label: ef.intl.string(ec.default.xtD4Zp),
                value: sZ(l.requests),
                hint: ef.intl.formatToPlainString(ec.default["7KlGT6"], { time: s1(l.since) }),
            }),
            (0, r.jsx)(un, { label: ef.intl.string(ec.default.gfRhR3), value: sZ(l.errors), critical: l.errors > 0 }),
            i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(ua, {
                              label: ef.intl.string(ec.default.LEJ5r3),
                              used: l.cpu_ms_max,
                              max: n.cpu_ms_per_request,
                              formatValue: sY,
                          }),
                          (0, r.jsx)(un, {
                              label: ef.intl.string(ec.default.mSKImM),
                              value: sY(a),
                              hint: ef.intl.formatToPlainString(ec.default.JqMU05, {
                                  total: sY(l.cpu_ms_total),
                                  wall: sY(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, r.jsx)(un, {
                      label: ef.intl.string(ec.default.LEJ5r3),
                      value: ef.intl.string(ec.default["2Ekb2b"]),
                      hint: ef.intl.string(ec.default.G0aq7i),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, r.jsx)(un, { label: ef.intl.string(ec.default.xvmL1D), value: sY(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, r.jsx)(un, {
                    label: ef.intl.string(ec.default["4sQYwH"]),
                    value: sZ(l.exceeded_cpu),
                    critical: !0,
                }),
            (0, r.jsx)(un, {
                label: ef.intl.string(ec.default.bQenOy),
                value: sZ(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: ef.intl.formatToPlainString(ec.default["5jIZwv"], { limit: `${n.memory_mb} MB` }),
            }),
            null != l.build && (0, r.jsx)(un, { label: ef.intl.string(ec.default.xgpn4Y), value: s2(l.build) }),
        ],
    });
}
function uS(e) {
    let { status: t } = e,
        { stable: l, preview: n, shared_data: a } = t.storage,
        i = t.worker.limits,
        u = a
            ? [{ key: "shared", label: ef.intl.string(ec.default.V5kbaH), metrics: l }]
            : [
                  { key: "preview", label: ef.intl.string(ec.default["2yLYlG"]), metrics: n },
                  { key: "stable", label: ef.intl.string(ec.default.eiAi57), metrics: l },
              ];
    return (0, r.jsx)(ul, {
        title: ef.intl.string(ec.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: l, metrics: n } = e;
            return null == n
                ? (0, r.jsx)(un, { label: l, value: "\u2014" }, t)
                : (0, r.jsxs)(
                      s.Fragment,
                      {
                          children: [
                              (0, r.jsx)(un, {
                                  label: ef.intl.formatToPlainString(ec.default.u7kJJ4, { env: l }),
                                  value: sQ(n.r2_bytes),
                                  hint: ef.intl.formatToPlainString(
                                      n.r2_truncated ? ec.default.lH0oQw : ec.default.m9h02S,
                                      { count: sZ(n.r2_objects) },
                                  ),
                              }),
                              null != n.db_bytes &&
                                  (0, r.jsx)(ua, {
                                      label: ef.intl.formatToPlainString(ec.default.mnbPqt, { env: l }),
                                      used: n.db_bytes,
                                      max: i.db_bytes,
                                      formatValue: sQ,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function uE(e) {
    let { status: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: us.Mf,
        children: [
            (0, r.jsx)(ut, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: n }),
            null != t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(uC, {
                            title: ef.intl.string(ec.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(uC, {
                            title: ef.intl.string(ec.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(uS, { status: t }),
                        null != t.bot &&
                            (0, r.jsx)(uy, {
                                title: ef.intl.string(ec.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uk, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, r.jsx)(uy, {
                                title: ef.intl.string(ec.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uw, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, r.jsx)(uy, {
                                title: ef.intl.string(ec.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uA, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, r.jsx)(uy, {
                                title: ef.intl.string(ec.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uN, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, r.jsx)(ur, { analytics: t.analytics }),
                        (0, r.jsxs)(ul, {
                            title: ef.intl.string(ec.default.fQMpFp),
                            children: [
                                (0, r.jsx)(un, {
                                    label: ef.intl.string(ec.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? s2(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, r.jsx)(un, {
                                    label: ef.intl.string(ec.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? s2(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var uI = l(761929);
function uT(e, t) {
    return String(e).padStart(t, "0");
}
function uM(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${uT(n.getHours(), 2)}:${uT(n.getMinutes(), 2)}:${uT(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${uT(n.getMilliseconds(), 3)}` : a;
}
var u_ = l(382541);
let uP = new Map(),
    uR = new Map(),
    uL = 0,
    uD = 0;
async function uO(e, t, l) {
    let n = uL,
        a = uP.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < uD) return { status: "forbidden" };
    let i = uR.get(t);
    if (null != i) return i;
    let r = (async () => {
        try {
            let a,
                { ticket: i, baseUrl: r } = await (0, u_.d)(e),
                s = await fetch(
                    ((a = new URL(`${r}/agent/trace-detail`)).searchParams.set("ticket", i),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((uD = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let u = await s.json();
            if (!0 !== u.available || null == u.rich) return { status: "unavailable" };
            if (n !== uL) return { status: "failed" };
            var l = u.rich;
            for (uP.set(t, l); uP.size > 100;) {
                let e = uP.keys().next();
                if (!0 === e.done) break;
                uP.delete(e.value);
            }
            return { status: "loaded", rich: u.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    uR.set(t, r);
    let s = await r;
    return (uR.get(t) === r && uR.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function uF() {
    ((uL += 1), uP.clear(), uR.clear(), (uD = 0));
}
function uz(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function uU(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function uG(e) {
    switch (e) {
        case "subagent":
            return ef.intl.string(ec.default.PbKt9r);
        case "context":
            return ef.intl.string(ec.default["tNk/P2"]);
        case "tool":
            return ef.intl.string(ec.default.NBOJcw);
        case "delegated":
            return ef.intl.string(ec.default.QgrFdt);
        default:
            return ef.intl.string(ec.default.LsLVUy);
    }
}
function u$(e) {
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
let uq = ["model", "tool", "subagent", "delegated", "context"];
function uB(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(u$(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function uH(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let uV = {
    model: "blurpleLight",
    subagent: "greenLight",
    context: "grayLight",
    tool: "grayMedium",
    delegated: "orangeLight",
};
function uK(e) {
    let { category: t } = e;
    return (0, r.jsx)(uf.v, { text: uG(t), variant: uV[t] });
}
var uW = l(28863);
let uJ = ["arguments", "result", "usage", "diagnostics"];
var uX = l(536113);
let uQ = { started: uX.Vf, ok: uX.mo, error: uX.Sr };
function uY(e) {
    let { status: t } = e;
    return (0, r.jsx)("span", {
        className: `${uX.Om} ${uQ[t] ?? uX.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return ef.intl.string(ec.default["2wyRDK"]);
                case "error":
                    return ef.intl.string(ec.default["2Cu8n+"]);
                default:
                    return ef.intl.string(ec.default["6kgw6D"]);
            }
        })(t),
    });
}
function uZ(e) {
    let { label: t, value: l } = e;
    return (0, r.jsxs)("div", {
        className: uX.wV,
        children: [
            (0, r.jsx)(k.E, { variant: "text-xs/medium", color: "text-muted", className: uX.D6, children: t }),
            (0, r.jsx)("div", { className: uX.zL, children: l }),
        ],
    });
}
function u0(e) {
    let { label: t, value: l } = e;
    return (0, r.jsx)(uZ, {
        label: t,
        value: (0, r.jsx)(k.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function u1(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: uX.WA, children: t });
}
function u2(e) {
    let { title: t, children: l } = e,
        n = s.useId();
    return (0, r.jsxs)("section", {
        "aria-labelledby": n,
        className: uX.xd,
        children: [
            (0, r.jsx)(k.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: n,
                className: uX.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function u3(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("details", {
        className: uX.XK,
        children: [
            (0, r.jsxs)("summary", {
                className: uX.It,
                children: [
                    (0, r.jsx)(tr._, { className: uX.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, r.jsx)(k.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, r.jsx)("div", { className: uX.bG, children: l }),
        ],
    });
}
function u5(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, r.jsx)(uZ, {
            label: t.key,
            value: (0, r.jsx)(k.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let l =
        null != t.chars
            ? ef.intl.formatToPlainString(ec.default.ib7All, { count: t.chars })
            : null != t.items
              ? ef.intl.formatToPlainString(ec.default.cIqKbA, { count: t.items })
              : null;
    return (0, r.jsx)(uZ, {
        label: t.key,
        value: (0, r.jsxs)("div", {
            className: uX.Kv,
            children: [
                (0, r.jsx)(k.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return ef.intl.string(ec.default["6oDpz5"]);
                            case "content":
                                return ef.intl.string(ec.default.kSGhxQ);
                            default:
                                return ef.intl.string(ec.default.JwGtRz);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == l
                    ? null
                    : (0, r.jsx)(k.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: l,
                      }),
            ],
        }),
    });
}
function u4(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: uX.QR,
                      children: (0, r.jsx)(uf.v, { text: ef.intl.string(ec.default.LRIpHQ), variant: "orangeLight" }),
                  }),
                  t.map((e) =>
                      (0, r.jsx)(
                          uZ,
                          {
                              label: e.key,
                              value: (0, r.jsxs)("div", {
                                  className: uX.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, r.jsx)(k.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: uX.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, r.jsx)(k.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: ef.intl.string(ec.default["+kQ+K3"]),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, r.jsx)(k.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? ef.intl.string(ec.default.ijkkUh)
                                                        : ef.intl.formatToPlainString(ec.default.PRt8I0, {
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
function u7(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : ef.intl.string(
                      "loading" === t.status
                          ? ec.default.SKbSyo
                          : "unavailable" === t.status
                            ? ec.default.tdq5Zn
                            : ec.default["Dw1JW/"],
                  );
    return null == l
        ? null
        : (0, r.jsx)(k.E, { variant: "text-xs/normal", color: "text-subtle", className: uX.E7, children: l });
}
function u8(e) {
    let { projectId: t, entry: l, onClose: n, parent: a, onSelect: i, childCount: u } = e,
        o = (function (e) {
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
                uJ.filter((e) => n.has(e))
            );
        })(l, { childCount: u, hasParent: null != a }),
        d = (function (e, t) {
            let [l, n] = s.useState(null);
            if (
                (s.useEffect(() => {
                    if (null == t || null != uP.get(t)) return;
                    let l = new AbortController();
                    return (
                        uO(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = uP.get(t);
            return null != a ? { status: "loaded", rich: a } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        f = uM(l.startedAt, "millis"),
        m = u$(l),
        g = s.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        );
    return (0, r.jsxs)(l3.Ch, {
        className: uX._0,
        onKeyDown: g,
        role: "region",
        "aria-label": ef.intl.formatToPlainString(ec.default.Qiaeyz, { name: c }),
        children: [
            (0, r.jsx)("div", {
                className: uX.sy,
                children: (0, r.jsxs)("div", {
                    className: uX.HI,
                    children: [
                        (0, r.jsx)(uY, { status: l.status }),
                        (0, r.jsx)(uK, { category: m }),
                        (0, r.jsx)(k.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: uX.kc,
                            children: c,
                        }),
                        (0, r.jsx)(k.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: uX.l5,
                            children: null == l.durationMs ? ef.intl.string(ec.default["2wyRDK"]) : uz(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, r.jsx)(k.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: uX.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            o.includes("arguments") && "tool" === l.kind
                ? (0, r.jsxs)(u2, {
                      title: ef.intl.string(ec.default["G/4JST"]),
                      children: [
                          (l.fields ?? []).map((e) => (0, r.jsx)(u5, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, r.jsx)(u4, { entries: d.rich.args })
                              : null,
                          (0, r.jsx)(u7, { detail: d }),
                      ],
                  })
                : null,
            o.includes("result") && "tool" === l.kind
                ? (0, r.jsxs)(u2, {
                      title: ef.intl.string(ec.default.Dgg25Y),
                      children: [
                          (0, r.jsx)(u0, {
                              label: ef.intl.string(ec.default["U+OQCo"]),
                              value: ef.intl.formatToPlainString(ec.default.ib7All, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, r.jsx)(u0, {
                                    label: ef.intl.string(ec.default["MQYS+n"]),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, r.jsx)(uZ, {
                                    label: ef.intl.string(ec.default.t7GJFc),
                                    value: (0, r.jsx)(k.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: ef.intl.string(ec.default.ijkkUh),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, r.jsx)(u4, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            o.includes("usage") && "model" === l.kind
                ? (0, r.jsxs)(u2, {
                      title: ef.intl.string(ec.default.NXmRw1),
                      children: [
                          (0, r.jsxs)(u1, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, r.jsx)(u0, {
                                            label: ef.intl.string(ec.default.iq3T1q),
                                            value: ef.intl.formatToPlainString(ec.default["6GQUgQ"], {
                                                tokens: uU(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, r.jsx)(u0, {
                                            label: ef.intl.string(ec.default.ZELAZn),
                                            value: ef.intl.formatToPlainString(ec.default.Te7mPn, {
                                                system: uU(l.systemTokens),
                                                tools: uU(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: uU(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, r.jsx)(u0, {
                                            label: ef.intl.string(ec.default["LENc/T"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, r.jsx)(u0, {
                                            label: ef.intl.string(ec.default.ewRHwx),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, r.jsx)(u0, {
                                            label: ef.intl.string(ec.default.heVFQD),
                                            value: ef.intl.formatToPlainString(ec.default.VO3gdd, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, r.jsx)(u0, {
                                            label: ef.intl.string(ec.default.aBw2Vm),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, r.jsx)(k.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: uX.E7,
                              children: ef.intl.string(ec.default["foF/Bc"]),
                          }),
                      ],
                  })
                : null,
            o.includes("arguments") || o.includes("result")
                ? (0, r.jsx)(k.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: uX.E7,
                      children: ef.intl.string(ec.default.o24IFK),
                  })
                : null,
            o.includes("diagnostics")
                ? (0, r.jsx)(u3, {
                      title: ef.intl.string(ec.default["dix/W4"]),
                      children: (0, r.jsxs)(u1, {
                          children: [
                              null == a
                                  ? null
                                  : (0, r.jsx)(uZ, {
                                        label: ef.intl.string(ec.default.soPsOJ),
                                        value: (0, r.jsx)(uW.Anchor, {
                                            onClick: () => i(a.id),
                                            children: (0, r.jsx)(k.E, {
                                                tag: "span",
                                                variant: "text-xs/normal",
                                                color: "none",
                                                children: "model" === a.kind ? a.model : a.tool,
                                            }),
                                        }),
                                    }),
                              0 === u
                                  ? null
                                  : (0, r.jsx)(u0, {
                                        label: ef.intl.string(ec.default.kNZBxr),
                                        value: ef.intl.formatToPlainString(ec.default["6LoCUh"], { count: u }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, r.jsx)(u0, { label: ef.intl.string(ec.default.bL1r5J), value: l.turnId }),
                              (0, r.jsx)(u0, { label: ef.intl.string(ec.default.Ndwr7X), value: l.id }),
                              null == f ? null : (0, r.jsx)(u0, { label: ef.intl.string(ec.default.sO8ghW), value: f }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, r.jsx)(u0, { label: ef.intl.string(ec.default.VfYxPF), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(k.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: uX.Hm,
                                                children: ef.intl.string(ec.default.mSm8iy),
                                            }),
                                            l.schema.map((e) =>
                                                (0, r.jsx)(
                                                    u0,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? ef.intl.formatToPlainString(ec.default["6aSRPA"], {
                                                                  type: e.type,
                                                              })
                                                            : ef.intl.formatToPlainString(ec.default.q2B975, {
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
            (0, r.jsx)(k.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: uX.E7,
                children: ef.intl.string(ec.default.FloyTQ),
            }),
        ],
    });
}
let u6 = { model: uX.WI, subagent: uX.uM, context: uX.eH, tool: uX.pw, delegated: uX.C8 };
function u9(e) {
    let { entries: t } = e,
        l = s.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = u$(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return uq.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        n = l.reduce((e, t) => e + t.ms, 0);
    return (0, r.jsxs)("div", {
        className: uX.M0,
        children: [
            (0, r.jsx)("div", {
                className: uX.pZ,
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
                                            className: `${uX.dL} ${u6[t]}`,
                                            style: { "--custom-conjure-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, r.jsx)("div", {
                className: uX.z4,
                role: "group",
                "aria-label": ef.intl.string(ec.default["Gioq+C"]),
                children: uq.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === n ? 0 : Math.round((a / n) * 100);
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: uX.fI,
                            children: [
                                (0, r.jsx)("span", { className: `${uX.A9} ${u6[e]}`, "aria-hidden": !0 }),
                                (0, r.jsx)(k.E, { variant: "text-xs/normal", color: "text-muted", children: uG(e) }),
                                (0, r.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ef.intl.formatToPlainString(ec.default["3dQ1ly"], { percent: s }),
                                }),
                                (0, r.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ef.intl.formatToPlainString(ec.default.Ow0k34, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, r.jsx)(k.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: uz(a),
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
function oe(e) {
    let { entry: t, selected: l, tabbable: n, onSelect: a, onKeyDown: i, nested: s } = e,
        u = u$(t),
        o = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? ef.intl.formatToPlainString(ec.default["6GQUgQ"], { tokens: uU(t.promptTokens) })
                : null != t.durationMs
                  ? uz(t.durationMs)
                  : null;
    return (0, r.jsxs)(w.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: n ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${uX.nM} ${s ? uX.A5 : ""} ${"error" === t.status ? uX.Cr : ""} ${l ? uX.CZ : ""}`,
        onKeyDown: i,
        onClick: () => a(t.id),
        children: [
            (0, r.jsxs)("div", {
                className: uX.sU,
                children: [
                    (0, r.jsx)(uY, { status: t.status }),
                    (0, r.jsx)(uK, { category: u }),
                    (0, r.jsx)(k.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: uX.G9,
                        children: o,
                    }),
                    null == d
                        ? null
                        : (0, r.jsx)(k.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: uX.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, r.jsx)(k.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: uX.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, r.jsx)(k.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: uX.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function ot(e) {
    var t;
    let { projectId: l, query: n } = e,
        a = (0, m.yK)([eE.Ay], () => eE.Ay.getTrace(l), [l]),
        i = (0, m.bG)([eE.Ay], () => eE.Ay.getHistoryState(l, "trace"));
    s.useEffect(() => uF, [l]);
    let [u, o] = s.useState(null),
        [d, c] = s.useState(40),
        [f, g] = s.useState(!1),
        h = s.useRef(null),
        x = s.useRef(null),
        p = s.useRef(null),
        v = s.useRef(null),
        b = s.useId(),
        j = s.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        y = s.useCallback((e) => o((t) => (t === e ? null : e)), []),
        w = s.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, ae.clamp)((e / t) * 100, 25, 75);
        }, []),
        A = s.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, ae.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        N = (0, uI.A)({
            resizableDomNodeRef: x,
            orientation: uI.R.VERTICAL_TOP,
            getClampedValue: A,
            onElementResize: (e) => c(w(e)),
            onElementResizeStart: () => g(!0),
            onElementResizeEnd: () => g(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        C = s.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), N(e));
            },
            [N],
        ),
        S = s.useCallback((e) => {
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
            null != t && (e.preventDefault(), c((e) => (0, ae.clamp)(e + t, 25, 75)));
        }, []),
        E = s.useCallback(() => {
            (o(null), j(u));
        }, [u, j]),
        I = s.useMemo(() => uB(a, n), [a, n]),
        T = s.useMemo(
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
                    .map((e, t) => ({ ...e, index: t, entries: uB(e.entries, n) }))
                    .filter((e) => e.entries.length > 0),
            [a, n],
        ),
        M = uH(I, u),
        _ = M?.kind === "tool" ? uH(a, M.parentId ?? null) : null,
        P = null == M ? 0 : ((t = M.id), a.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        R = I[I.length - 1];
    s.useLayoutEffect(() => {
        if (null != u) return;
        let e = p.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [R, u]);
    let L = s.useCallback(
        (e) => {
            if (0 === I.length) return;
            let t = I.findIndex((e) => e.id === u);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(I.length - 1, t));
                (o(I[l].id), document.getElementById(`trace-${I[l].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? I.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(I.length - 1)
                      : "Escape" === e.key && null != u && (e.preventDefault(), o(null), j(u));
        },
        [I, u, j],
    );
    return 0 === a.length
        ? (0, r.jsx)("div", {
              className: uX.uP,
              ref: h,
              children: (0, r.jsx)(ux, {
                  state: i,
                  emptyTitle: ef.intl.string(ec.default["Tpvy/s"]),
                  emptyBody: ef.intl.string(ec.default.J0WcVA),
              }),
          })
        : (0, r.jsxs)("div", {
              className: `${uX.uP} ${f ? uX.F4 : ""}`,
              ref: h,
              children: [
                  (0, r.jsxs)("div", {
                      className: uX.DK,
                      children: [
                          (0, r.jsx)(u9, { entries: a }),
                          (0, r.jsx)(uh, { state: i }),
                          0 === I.length
                              ? (0, r.jsx)("div", {
                                    className: uX.Ie,
                                    children: (0, r.jsx)(k.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: ef.intl.string(ec.default.tDB4lC),
                                    }),
                                })
                              : (0, r.jsxs)(l3.Ch, {
                                    ref: p,
                                    className: uX.Ns,
                                    children: [
                                        (0, r.jsx)(up, { state: i }),
                                        (0, r.jsx)("div", {
                                            ref: v,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": ef.intl.string(ec.default.SGbiNE),
                                            className: uX.p_,
                                            children: T.map((e) => {
                                                let t = uM(e.startedAt),
                                                    l = ef.intl.formatToPlainString(ec.default.gPwGYA, {
                                                        number: e.index + 1,
                                                    });
                                                return (0, r.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, r.jsxs)("div", {
                                                                className: uX.mf,
                                                                children: [
                                                                    (0, r.jsx)(k.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: l,
                                                                    }),
                                                                    (0, r.jsx)(k.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, r.jsx)(k.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: uz(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: uX.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, r.jsx)(
                                                                        oe,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === u,
                                                                            tabbable: e.id === (u ?? I[0]?.id),
                                                                            onSelect: y,
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
                  null == M
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": ef.intl.string(ec.default.DtSORy),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: uX.b1,
                                    onPointerDown: C,
                                    onKeyDown: S,
                                }),
                                (0, r.jsx)("div", {
                                    ref: x,
                                    className: uX.Or,
                                    style: { "--custom-conjure-trace-detail-share": String(d) },
                                    children: (0, r.jsx)(u8, {
                                        projectId: l,
                                        entry: M,
                                        parent: _,
                                        childCount: P,
                                        onSelect: o,
                                        onClose: E,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
function ol(e) {
    let { projectId: t, query: l, onQueryChange: n } = e,
        a = (0, m.yK)([eE.Ay], () => eE.Ay.getTrace(t), [t]),
        i = s.useRef(null),
        u = s.useCallback(() => {
            ed(
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
                className: uX.ED,
                children: (0, r.jsx)(um.I, {
                    query: l,
                    onChange: n,
                    onClear: () => n(""),
                    size: "sm",
                    placeholder: ef.intl.string(ec.default["EY8/Mt"]),
                    "aria-label": ef.intl.string(ec.default["EY8/Mt"]),
                }),
            }),
            (0, r.jsx)(el.Y, {
                targetElementRef: i,
                position: "bottom",
                align: "right",
                animation: el.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, r.jsx)(en.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-trace-actions-${t}`,
                        "aria-label": ef.intl.string(ef.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, r.jsx)(ea.rX, {
                            children: (0, r.jsx)(ea.Dr, {
                                id: "export",
                                label: ef.intl.string(ec.default.WXrPRZ),
                                disabled: 0 === a.length,
                                action: u,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, r.jsx)(t4.K, {
                        ...e,
                        buttonRef: i,
                        icon: t7.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": ef.intl.string(ef.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var on = l(592465);
function oa(e) {
    let { projectId: t, onClose: l } = e,
        [n, a] = s.useState("logs"),
        [i, u] = s.useState(""),
        o = (0, m.bG)([sU.A], () => sU.A.isDeveloper),
        d = (0, m.bG)([sX], () => sX.getStatus(t), [t]),
        c = (0, m.bG)([sX], () => sX.getFetchState(t), [t]);
    s.useEffect(() => {
        (0, er.R7)(t);
    }, [t]);
    let f = s.useCallback(() => (0, er.R7)(t), [t]),
        g = s.useCallback(() => {
            (0, t9.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: sX.getStatus(t),
                        last_turn_usage: sX.getLastTurnUsage(t),
                        last_compaction: sX.getLastCompaction(t),
                        last_compaction_decline: sX.getLastCompactionDecline(t),
                        model_calls: sX.getModelCalls(t),
                        logs: eE.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, b.P)((0, j.o)(ef.intl.string(ec.default.wI6fhl), y.Ck.SUCCESS)),
            );
        }, [t]),
        h = ef.intl.string(ec.default["Q4FN+H"]);
    return (0, r.jsxs)("section", {
        className: on.nd,
        "aria-label": h,
        children: [
            (0, r.jsxs)(l2.Ay, {
                "aria-label": h,
                toolbar: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l2.Ay.Icon, {
                            icon: sF.CopyIcon,
                            tooltip: ef.intl.string(ec.default.TkHqy2),
                            onClick: g,
                        }),
                        (0, r.jsx)(l2.Ay.Icon, { icon: D.P, tooltip: ef.intl.string(ef.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, r.jsx)(l2.Ay.ChannelIcon, { icon: I.BugIcon, "aria-hidden": !0 }),
                    (0, r.jsx)(l2.Ay.Title, { children: h }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: on.rf,
                children: [
                    (0, r.jsxs)(sz.V, {
                        selectedItem: n,
                        type: "top",
                        onItemSelect: (e) => a(e),
                        "aria-label": ef.intl.string(ec.default.RvvWIh),
                        className: on.vR,
                        children: [
                            (0, r.jsx)(sz.V.Item, { id: "logs", children: ef.intl.string(ec.default["+VRYCm"]) }),
                            (0, r.jsx)(sz.V.Item, { id: "worker", children: ef.intl.string(ec.default["50D0FZ"]) }),
                            (0, r.jsx)(sz.V.Item, { id: "agent", children: ef.intl.string(ec.default.UkbTK1) }),
                            o
                                ? (0, r.jsx)(sz.V.Item, { id: "trace", children: ef.intl.string(ec.default.O6nNjP) })
                                : null,
                        ],
                    }),
                    "logs" === n
                        ? (0, r.jsx)(uj, { projectId: t })
                        : "worker" === n
                          ? (0, r.jsx)(uE, { status: d, fetchState: c, onRefresh: f })
                          : "trace" === n && o
                            ? (0, r.jsxs)("div", {
                                  className: on.uP,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: on.XH,
                                          children: (0, r.jsx)(ol, { projectId: t, query: i, onQueryChange: u }),
                                      }),
                                      (0, r.jsx)(ot, { projectId: t, query: i }),
                                  ],
                              })
                            : (0, r.jsx)(uc, { projectId: t, status: d, fetchState: c, onRefresh: f, traceVisible: o }),
                ],
            }),
        ],
    });
}
var oi = l(333007),
    or = l(365912),
    os = l(775121),
    ou = l(873715);
function oo(e) {
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
let od = Object.freeze({ x: -1, y: -1 });
function oc(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = oo(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var of = l(470779);
function om(e) {
    let {
            projectId: t,
            at: l,
            bounds: n,
            kind: a,
            value: i,
            onChange: u,
            onSubmit: d,
            onDismiss: c,
            canSubmit: f,
            closing: m,
            onUploadFile: g,
        } = e,
        {
            drafts: h,
            addFiles: x,
            pasteFiles: p,
            removeDraft: v,
            settled: b,
            takeRefs: j,
        } = ro({ projectId: t, surface: "design", onUploadFile: g }),
        y = s.useRef(null),
        k = (f || h.length > 0) && b && !m,
        w = s.useCallback(() => {
            if (!k) return;
            let e = j();
            d(e.length > 0 ? e : void 0);
        }, [k, j, d]),
        [N, C] = s.useState(!1);
    s.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => C(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let S = s.useRef(null),
        [E, I] = s.useState(null);
    s.useLayoutEffect(() => {
        let e = S.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let T = E?.height ?? 44,
        M = n.left + 8,
        _ = n.top + 8,
        P = Math.max(l.x, M),
        R = Math.min(Math.max(l.y + 32 + 4, _), Math.max(_, n.top + n.height - T - 8));
    return (0, r.jsxs)("div", {
        ref: S,
        className: o()(of.M0, { [of.ho]: N && !m, [of.ET]: m }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, r.jsx)("input", {
                ref: y,
                type: "file",
                multiple: !0,
                className: of.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, r.jsx)(A.m, {
                position: "bottom",
                text: ef.intl.string(ec.default.lgvqSB),
                ariaHidden: !0,
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: of.tY,
                    onClick: () => y.current?.click(),
                    "aria-label": ef.intl.string(ec.default.lgvqSB),
                    children: (0, r.jsx)(ei.H, { size: "custom", color: "currentColor", className: of.WW }),
                }),
            }),
            (0, r.jsx)(nb.y, {
                autoFocus: !0,
                rows: 1,
                className: of.hF,
                value: i,
                placeholder: "" === a ? ef.intl.string(ec.default.MPPV1Q) : `Edit ${a}`,
                "aria-label": ef.intl.string(ec.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: m ? void 0 : p,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), w());
                },
            }),
            h.length > 0
                ? (0, r.jsx)("div", {
                      className: of.ZO,
                      children: h.map((e) => (0, r.jsx)(rd, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var og = l(192888);
function oh(e, t) {
    return (0, og.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(oc, () => ({ status: "failed" }));
}
var ox = l(108308);
let op = { x: 25, y: 21 };
function ov(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function ob(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function oj(e, t, l, n) {
    let a = ob(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function oy(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function ok(e) {
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
function ow(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, resolveIframe: a, toggleRef: i } = e,
        u = null != l && l === n ? t : null,
        { active: o, annotations: d } = te(u),
        c = (0, tp.Zv)(u),
        f = (0, tt.useHasAnyModalOpen)(),
        g = (0, m.bG)([tB.default], () => tB.default.getCurrentUser()),
        h = g?.id ?? null,
        [x, p] = s.useState(null),
        [v, b] = s.useState(null),
        [j, y] = s.useState(!1),
        [w, A] = s.useState(!1),
        [N, C] = s.useState(null),
        [E, I] = s.useState(!1),
        T = s.useRef(null),
        M = s.useRef(null),
        _ = s.useRef(null),
        [P, L] = s.useState(null),
        [D, O] = s.useState(!1),
        [F, z] = s.useState(null),
        [U, G] = s.useState(null),
        $ = s.useRef(!1),
        [q, B] = s.useState(!1),
        [H, V] = s.useState(null),
        K = o && !c && !f;
    null == F || (K && F.projectId === u) || z(null);
    let W = F?.projectId ?? null;
    (s.useEffect(() => {
        if (null != W) return () => nB(W, "design");
    }, [W]),
        s.useEffect(() => {
            if (!K) return;
            function e() {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.getBoundingClientRect();
                    return t.width < 1 || t.height < 1
                        ? null
                        : { left: t.left, top: t.top, width: t.width, height: t.height };
                })(a());
                p((t) => (ov(t, e) ? t : e));
            }
            e();
            let t = window.setInterval(e, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    (window.clearInterval(t), window.removeEventListener("resize", e));
                }
            );
        }, [K, a]),
        s.useEffect(() => {
            if (!K || null == u) return;
            let e = !0,
                t = a();
            if (null == t) return void A(!0);
            (y(!0), A(!1));
            let l = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, ou.J)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        y(!1);
                        let l = "completed" === t.status ? ok(t.response) : null;
                        null == l ? A(!0) : (b(l), e8(u, { url: l.url, title: l.title, viewport: l.viewport }));
                    },
                    () => {
                        e && (y(!1), A(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [K, a, u]));
    let J = s.useRef(null);
    (s.useEffect(() => {
        if (!K || null == x || null == u) return;
        if (null == v) {
            J.current = x;
            return;
        }
        if (ov(J.current, x)) return;
        let e = window.setTimeout(() => {
            let e = a();
            if (null == e) return;
            J.current = x;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, ou.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let l;
                        if ("completed" !== e.status || !Z.current) return;
                        let n = ok(e.response);
                        null != n && (b(n), e8(u, { url: n.url, title: n.title, viewport: n.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, l) => {
                            let n = t[l];
                            if (null == n || "locate" !== e.action || !e.ok) return;
                            let i = oo(e.element);
                            null != i && a.set(n.id, i);
                        }),
                            (l = e5(u)).active &&
                                0 !== a.size &&
                                e4(u, {
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
    }, [K, x, v, d, u, a]),
        s.useEffect(() => {
            if (!K)
                return () => {
                    (C(null), z(null), V(null), b(null));
                };
        }, [K]));
    let X = s.useRef(null),
        Q = s.useRef(null),
        Y = s.useRef(!1),
        Z = s.useRef(!1);
    s.useEffect(() => {
        ((Z.current = K), K || ((X.current = null), (Q.current = null), (_.current = null), I(!1)));
    }, [K]);
    let ee = s.useCallback(
            function e() {
                if (Y.current) return;
                let t = X.current;
                if (null == t) return;
                X.current = null;
                let l = a();
                null != l &&
                    ((Y.current = !0),
                    oh(l, t).then((t) => {
                        if (((Y.current = !1), Z.current)) {
                            if ("picked" !== t.status || oI(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? C(null)
                                    : "unsupported" === t.status && O(!0);
                            else {
                                let e = eJ(t.target);
                                (L((t) => (oE(t, e) ? t : e)),
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
        et = s.useCallback(() => {
            if (null == F) return;
            let e = !$.current;
            (G({ at: F.at, label: F.label, draft: F.draft, instant: e }), B(e), z(null));
        }, [F]);
    (s.useEffect(() => {
        if (!q) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => B(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [q]),
        s.useEffect(() => {
            if (null == U) return;
            let e = setTimeout(() => G(null), oC);
            return () => clearTimeout(e);
        }, [U]));
    let el = null == v || null == x || v.viewport.width < 1 ? 1 : x.width / v.viewport.width,
        en = null != v || w,
        ea = s.useMemo(() => v?.elements ?? [], [v]),
        ei = s.useRef({ rect: null, scale: 1 });
    s.useLayoutEffect(() => {
        ei.current = { rect: x, scale: el };
    }, [x, el]);
    let es = s.useCallback(
            (e, t, l) => {
                null != u &&
                    (nB(u, "design"),
                    V(null),
                    ($.current = !1),
                    z({ projectId: u, target: e, anchor: t, draft: "", at: l, label: eJ(e) }));
            },
            [u],
        ),
        eu = s.useCallback((e, t) => ({ x: (e.clientX - t.left) / el, y: (e.clientY - t.top) / el }), [el]),
        eo = s.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let l = M.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    s.useLayoutEffect(eo);
    let ed = s.useCallback(
            (e) => {
                if (null == x || null != H) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), eo(), I(!0), null != F)) {
                    (Math.abs(e.clientX - F.at.x) > oS || Math.abs(e.clientY - F.at.y) > oS) && ($.current = !0);
                    return;
                }
                if (!en) return void C(null);
                let t = eu(e, x);
                if (D) {
                    let e = (function (e, t, l) {
                            let n = null,
                                a = 1 / 0;
                            for (let i of e) {
                                let { x: e, y: r, width: s, height: u } = i.rect;
                                if (s < 1 || u < 1 || t < e || l < r || t > e + s || l > r + u) continue;
                                let o = s * u;
                                o < a && ((n = i), (a = o));
                            }
                            return n;
                        })(ea, t.x, t.y),
                        l = null != e && oI(e, x, el) ? null : e;
                    if (null != l) {
                        let e = eJ(l);
                        L((t) => (oE(t, e) ? t : e));
                    }
                    C((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = Q.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((Q.current = l), (X.current = l), ee());
            },
            [x, el, en, eu, D, ea, F, H, eo, ee],
        ),
        em = null == H ? null : d.find((e) => e.id === H.id),
        eg = K && (E || F?.target.marker != null || em?.target.marker != null);
    s.useEffect(() => {
        if (eg)
            return () => {
                let e = a();
                null != e && oh(e, od);
            };
    }, [eg, a]);
    let eh = s.useCallback(() => {
        (I(!1), C(null), (Q.current = null), (X.current = null));
    }, []);
    s.useEffect(() => {
        if (!K || !E || !en || D || null != F || null != H) return;
        let e = _.current,
            { rect: t, scale: l } = ei.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((Q.current = n), (X.current = n), ee());
    }, [K, E, en, D, F, H, ee]);
    let ex = s.useCallback(
            (e) => {
                if (null != F || null != H) {
                    (et(), V(null));
                    return;
                }
                if (null == N || null == x) return;
                let t = eu(e, x);
                es(
                    N,
                    (function (e, t, l) {
                        let { x: n, y: a, width: i, height: r } = e.rect;
                        return i < 1 || r < 1
                            ? eK
                            : { x: Math.min(1, Math.max(0, (t - n) / i)), y: Math.min(1, Math.max(0, (l - a) / r)) };
                    })(N, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [N, x, eu, F, H, es, et],
        ),
        ep = s.useCallback(() => {
            null != u && (C(null), e7(u));
        }, [u]),
        ev = s.useCallback(() => {
            null != u &&
                (null != F
                    ? et()
                    : H?.confirmingRemove === !0
                      ? V({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? V(null)
                        : ep());
        }, [u, F, H, et, ep]),
        eb = s.useRef(ev),
        ej = s.useRef(ep);
    s.useLayoutEffect(() => {
        ((eb.current = ev), (ej.current = ep));
    });
    let ey = s.useRef(null);
    s.useEffect(() => {
        if (K)
            return (
                os.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        os.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            (0, tT.vq)(t) &&
                ey.current?.contains(t) !== !0 &&
                i?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, or.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ej.current();
        }
    }, [K, i]);
    let ek = s.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ev());
                    return;
                }
                if (null != F || null != H || 0 === ea.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == N ? -1 : ea.findIndex((e) => e.ref === N.ref);
                    C(ea[(l + (t ? 1 : -1) + ea.length) % ea.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != N &&
                    (e.preventDefault(),
                    es(N, eK, { x: (x?.left ?? 0) + N.rect.x * el, y: (x?.top ?? 0) + N.rect.y * el }));
            },
            [u, F, H, ea, N, es, ev, x, el],
        ),
        ew = s.useCallback(
            (e) => {
                null == u ||
                    null == F ||
                    ((eW(F.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, er.dv)(
                            u,
                            (function (e, t) {
                                let { kind: l, name: n } = eJ(e),
                                    a = [l, n].filter((e) => "" !== e).join(": ");
                                return `${eY}${a}${eZ}${eQ(e)}
${t.trim()}`;
                            })(F.target, F.draft),
                            e,
                        ),
                        et(),
                        C(null)));
            },
            [u, F, et],
        ),
        eA = s.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, er.vX)(u, e)), [u]),
        eN = s.useCallback(() => {
            if (null != u && null != H && null != h && eW(H.draft)) {
                var e, t;
                let l, n;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (n = (l = e5(u)).annotations.find((t) => t.id === e)) &&
                        e6(n, h) &&
                        e4(u, { ...l, annotations: l.annotations.map((l) => (l.id === e ? { ...l, comment: t } : l)) }),
                    V({ ...H, editing: !1 }));
            }
        }, [u, H, h]),
        eC = s.useCallback(() => {
            if (null != u && null != H && null != h) {
                var e;
                let t, l;
                ((e = H.id),
                    null != (l = (t = e5(u)).annotations.find((t) => t.id === e)) &&
                        e6(l, h) &&
                        e4(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    V(null));
            }
        }, [u, H, h]),
        eS = o
            ? j
                ? ef.intl.string(ec.default["Eb/YV9"])
                : w
                  ? ef.intl.string(ec.default.FD30bh)
                  : ef.intl.formatToPlainString(ec.default.dTSqLF, { count: d.length })
            : "",
        eE = K && null != x,
        eI = E && null == H,
        eT = F?.target ?? em?.target ?? null,
        eM = F ?? U,
        e_ = F ?? (U?.instant === !0 ? null : U),
        eP =
            null != em && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = oy(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(oj(em.target, em.anchor, x, el), x)
                : null;
    return (
        s.useEffect(() => {
            let e = a();
            if (em?.target.marker == null || null == e) return;
            let { target: t, anchor: l } = em;
            oh(e, { x: Math.round(t.rect.x + t.rect.width * l.x), y: Math.round(t.rect.y + t.rect.height * l.y) });
        }, [em, a]),
        (0, oi.createPortal)(
            (0, r.jsxs)("div", {
                ref: ey,
                className: ox.Li,
                children: [
                    (0, r.jsx)("div", {
                        className: ox.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eS,
                    }),
                    eE
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: ox.MT,
                                      style: { left: x.left, top: x.top, width: x.width, height: x.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": ef.intl.string(ec.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ed,
                                      onMouseLeave: eh,
                                      onClick: ex,
                                      onKeyDown: ek,
                                  }),
                                  null != N && null == N.marker && null == F && null == H
                                      ? (0, r.jsx)(oT, { box: ob(N, x, el) })
                                      : null,
                                  (0, r.jsx)("div", {
                                      ref: T,
                                      className: ox.aZ,
                                      children: (0, r.jsx)("div", {
                                          className: ox.xz,
                                          "data-shown": null != N && null == H && null == F ? "" : void 0,
                                          "data-instant": q ? "" : void 0,
                                          children: (0, r.jsxs)(k.E, {
                                              variant: "text-xs/medium",
                                              className: ox.Ux,
                                              children: [
                                                  null == P
                                                      ? null
                                                      : (0, r.jsx)("span", { className: ox.Tl, children: P.kind }),
                                                  null == P || "" === P.name
                                                      ? null
                                                      : (0, r.jsxs)("span", {
                                                            className: ox.kh,
                                                            children: [" ", P.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      ref: M,
                                      className: ox.Y,
                                      children: eI ? (0, r.jsx)("div", { className: ox.u }) : null,
                                  }),
                                  null == e_
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: ox.aZ,
                                            style: {
                                                transform: `translate3d(${e_.at.x + 20}px, ${e_.at.y + 20}px, 0)`,
                                            },
                                            children: (0, r.jsx)("div", {
                                                className: ox.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == F ? "" : void 0,
                                                children: (0, r.jsxs)(k.E, {
                                                    variant: "text-xs/medium",
                                                    className: ox.Ux,
                                                    children: [
                                                        (0, r.jsx)("span", {
                                                            className: ox.Tl,
                                                            children: e_.label.kind,
                                                        }),
                                                        "" === e_.label.name
                                                            ? null
                                                            : (0, r.jsxs)("span", {
                                                                  className: ox.kh,
                                                                  children: [" ", e_.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eT && null == eT.marker
                                      ? (0, r.jsx)("div", { className: ox.D0, style: ob(eT, x, el), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let l = oj(e.target, e.anchor, x, el),
                                          n = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, r.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: ox.xL,
                                              style: { ...oy(l, x), width: 24, height: 24 },
                                              "aria-label": ef.intl.formatToPlainString(ec.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: eX(e.target),
                                              }),
                                              "aria-expanded": H?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == F && V(n);
                                              },
                                              onFocus: () => {
                                                  null == F && V(n);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), et(), V(n));
                                              },
                                              children: (0, r.jsx)(oA, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eM || null == u
                                      ? null
                                      : (0, r.jsx)(om, {
                                            projectId: u,
                                            at: { x: eM.at.x + 20, y: eM.at.y + 20 },
                                            bounds: x,
                                            kind: eM.label.kind,
                                            value: eM.draft,
                                            canSubmit: null != F && eW(eM.draft),
                                            onChange: (e) => {
                                                null != F && z({ ...F, draft: e });
                                            },
                                            onSubmit: ew,
                                            onDismiss: et,
                                            onUploadFile: eA,
                                            closing: null == F,
                                        }),
                                  null != em && null != H && null != eP
                                      ? (0, r.jsxs)(oN, {
                                            point: eP,
                                            frame: x,
                                            authorId: em.authorId,
                                            title: eX(em.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                H.confirmingRemove ? V({ ...H, confirmingRemove: !1 }) : V(null);
                                            },
                                            onMouseLeave: () => {
                                                H.editing || H.confirmingRemove || V(null);
                                            },
                                            children: [
                                                H.editing
                                                    ? (0, r.jsx)(R.f, {
                                                          autoFocus: !0,
                                                          label: ef.intl.string(ec.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: H.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => V({ ...H, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eN());
                                                          },
                                                      })
                                                    : (0, r.jsx)(k.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: ox.aC,
                                                          children: em.comment,
                                                      }),
                                                e6(em, h)
                                                    ? (0, r.jsx)("div", {
                                                          className: ox.eB,
                                                          children: H.confirmingRemove
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(k.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: ox.nv,
                                                                            children: ef.intl.string(ec.default.wOHvts),
                                                                        }),
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ef.intl.string(ec.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                V({ ...H, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ef.intl.string(ec.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eC,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: ef.intl.string(ec.default.friIzR),
                                                                            onClick: () =>
                                                                                V({
                                                                                    ...H,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        H.editing
                                                                            ? (0, r.jsx)(S.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !eW(H.draft),
                                                                                  text: ef.intl.string(
                                                                                      ec.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eN,
                                                                              })
                                                                            : (0, r.jsx)(S.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: ef.intl.string(
                                                                                      ec.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      V({
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
function oA(e) {
    let { authorId: t } = e,
        l = (0, m.bG)([tB.default], () => tB.default.getUser(t), [t]);
    return (0, r.jsx)(a2.eu, {
        src: null == l ? null : a4.Ay.getUserAvatarURL(l),
        size: a3._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function oN(e) {
    let t,
        l,
        n,
        a,
        i,
        u,
        { point: o, frame: d, authorId: c, title: f, testId: m, onDismiss: g, onMouseLeave: h, children: x } = e,
        p = s.useRef(null),
        v = s.useRef(null),
        [b, j] = s.useState(op);
    s.useLayoutEffect(() => {
        let e = p.current?.getBoundingClientRect(),
            t = v.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let l = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        j((e) => (0.5 > Math.abs(e.x - l.x) && 0.5 > Math.abs(e.y - l.y) ? e : l));
    }, []);
    let {
            left: y,
            top: w,
            originX: A,
            originY: N,
        } = ((l = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (a = Math.max((n = d.top + 8), d.top + d.height - 160 - 8)),
        (i = Math.min(Math.max(o.x - b.x, t), l)),
        { left: i, top: (u = Math.min(Math.max(o.y - b.y, n), a)), originX: o.x - i, originY: o.y - u }),
        C = { left: y, top: w, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, r.jsxs)("div", {
        ref: p,
        className: ox.Nr,
        style: C,
        "data-testid": m,
        onMouseLeave: h,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), g());
        },
        children: [
            (0, r.jsxs)("div", {
                className: ox.MY,
                children: [
                    (0, r.jsx)("span", { ref: v, className: ox.ip, children: (0, r.jsx)(oA, { authorId: c }) }),
                    (0, r.jsx)(k.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: ox.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: ox.zI, children: x }),
        ],
    });
}
let oC = 300,
    oS = 2;
function oE(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function oI(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function oT(e) {
    let { box: t } = e;
    return (0, r.jsx)("div", { className: ox.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var oM = l(659723),
    o_ = l(697744),
    oP = l(130324);
function oR(e) {
    let t = (0, o_.c)(),
        { events: l, getDuration: n } = t;
    return (
        s.useEffect(() => {
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
        s.useEffect(() => {
            let t = setInterval(l.onMouseEnter, e);
            return () => clearInterval(t);
        }, [l, e]),
        t
    );
}
function oL(e) {
    let { className: t } = e,
        { Component: l, events: n } = oR(3e4);
    return (0, r.jsxs)("div", {
        className: t,
        onMouseEnter: n.onMouseEnter,
        onMouseLeave: n.onMouseLeave,
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, r.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: oP.o,
                children: ef.intl.string(ec.default.AyiQEp),
            }),
        ],
    });
}
var oD = l(251363),
    oO = l(944142),
    oF = l(532247),
    oz = l(501628);
function oU(e) {
    let { progress: t } = e,
        { Component: l } = oR(1500),
        n = X.Q_.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, r.jsx)(k.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, r.jsx)("div", {
                className: oz.Ci,
                children: Array.from({ length: t.stepCount }, (e, l) =>
                    (0, r.jsx)(
                        "span",
                        {
                            className: oz.PM,
                            "data-state": l < t.stepIndex ? "done" : l === t.stepIndex ? "current" : "todo",
                        },
                        l,
                    ),
                ),
            }),
            n && null != t.stepLabel
                ? (0, r.jsx)(k.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function oG(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, surface: a } = e,
        i = null != t && null != l && l === n,
        u = (0, m.bG)([oO.A], () => (i ? oO.A.getLiveReload(t) : null), [i, t]),
        o = (0, H.A)(l, a)?.id ?? null,
        d = u?.phase ?? null,
        c = (function (e, t) {
            let l = (0, oF.dv)(e),
                [n, a] = s.useState(null),
                [i, r] = s.useState(l);
            i !== l && (r(l), a(null == l ? (0, oF.QP)(e, i) : null));
            let u = (0, m.bG)(
                    [tS.A],
                    () => {
                        let e = tS.A.getFrame(t);
                        return (0, tL.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [t],
                ),
                o = s.useRef(u),
                d = s.useRef(!1);
            return (
                s.useEffect(() => {
                    ((o.current = u), u && (d.current = !0));
                }, [u]),
                s.useEffect(() => {
                    if (null == n) return;
                    function e() {
                        return a(null);
                    }
                    function l(l) {
                        null != l.target && l.target === (0, oD.o)(null, t) && e();
                    }
                    ((d.current = o.current), document.addEventListener("load", l, !0));
                    let i = window.setTimeout(() => {
                            d.current || e();
                        }, 4e3),
                        r = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", l, !0), window.clearTimeout(i), window.clearTimeout(r));
                    };
                }, [n, t]),
                n
            );
        })(d, o),
        f = (0, oF.h_)(d, u?.step ?? null, c);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, r.jsx)("div", {
                      className: oz.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, r.jsx)(oU, { progress: f }),
                  })
                : null,
        ],
    });
}
var o$ = l(343030),
    oq = l(317608),
    oB = l(206600),
    oH = l(742023);
let oV = { width: 1 / 0, height: 1 / 0 };
function oK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oV;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var oW = l(702083);
function oJ(e) {
    let { children: t } = e,
        { mobile: l, landscape: n } = (0, m.cf)([tx.A], () => ({
            mobile: tx.A.isBuilderPreviewMobile(),
            landscape: tx.A.isBuilderPreviewLandscape(),
        })),
        a = s.useRef(null),
        [i, u] = s.useState(null);
    s.useLayoutEffect(() => {
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
    let d = null != i && i.width > 0 ? i : null,
        c = l ? oK(n, d ?? void 0) : null;
    return (0, r.jsx)("div", {
        ref: a,
        className: o()(oW.dw, { [oW.PQ]: null != c }),
        children: (0, r.jsx)("div", { className: o()(oW.R9, { [oW.Vg]: null != c }), style: c ?? void 0, children: t }),
    });
}
var oX = l(347927);
function oQ(e) {
    let { title: t, body: l, wide: n = !1, children: a } = e;
    return (0, r.jsxs)("div", {
        className: o()(oX.Bf, n && oX.Qx),
        children: [
            (0, r.jsxs)("div", {
                className: oX.Ux,
                children: [
                    (0, r.jsx)(M.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, r.jsx)(k.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            a,
        ],
    });
}
var oY = l(957272);
function oZ(e) {
    let { applicationId: t, surface: l, frameOverlay: n } = e,
        { frame: a, state: i } = (0, oB.A)({ applicationId: t, surface: l }),
        u = (0, tL.VA)(t, l);
    switch (
        (s.useEffect(
            () => (
                !(function (e) {
                    let t = tS.A.getFrame(e);
                    if (null == t || tE.A.getWindowOpen(ey.MLl.ACTIVITY_POPOUT)) return;
                    let l = tS.A.getMainFrame()?.id === e;
                    t.intent === tL.sV.MAIN
                        ? (l || B.A.promoteFrame(e), B.A.resetFrameLayoutModes(e))
                        : l && B.A.clearMainFrameSlot();
                })(u),
                () => {
                    let e;
                    null != (e = tS.A.getFrame(u)) &&
                        ((0, tL.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        oH.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tL.sV.INLINE && B.A.promoteFrame(u),
                              B.A.updateFrameLayoutMode({ frameId: u, layoutMode: tL.y0.PIP }))
                            : e.intent === tL.sV.MAIN && B.A.demoteMainFrame(u));
                }
            ),
            [u],
        ),
        i)
    ) {
        case oB.n.Launched: {
            let e = (0, r.jsx)(oq.A, { frameId: a.id, level: o$.A.WithinAppContent, className: oY.Z7, overlay: n });
            return (0, tj.Q5)(l) ? (0, r.jsx)(oJ, { children: e }) : e;
        }
        case oB.n.RenderingElsewhere:
            return (0, r.jsx)("div", {
                className: oY.qs,
                children: (0, r.jsx)(oQ, {
                    title: ef.intl.string(ec.default["9kpdo7"]),
                    body: ef.intl.string(ec.default.iIA8Nj),
                }),
            });
        case oB.n.NoApplication:
            return (0, r.jsx)(oL, { className: oY.qs });
        case oB.n.DoesNotSupportSurface:
            return (0, r.jsx)("div", {
                className: oY.qs,
                children: (0, r.jsx)(oQ, {
                    title: ef.intl.string(ec.default["7k4GyN"]),
                    body: ef.intl.string(ec.default.zdIy3R),
                }),
            });
        case oB.n.Error:
            return (0, r.jsxs)("div", {
                className: oY.qs,
                children: [
                    (0, r.jsx)(M.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ef.intl.string(ec.default.lTPbnG),
                    }),
                    (0, r.jsx)(k.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: oY.tj,
                        children: ef.intl.string(ec.default.e6GiAZ),
                    }),
                ],
            });
        case oB.n.AwaitingLaunch:
        case oB.n.Loading:
            return (0, r.jsx)("div", { className: oY.qs, children: (0, r.jsx)(C.y, {}) });
    }
}
var o0 = l(334738),
    o1 = l(688438),
    o2 = l(355622),
    o3 = l(531685),
    o5 = l(365971),
    o4 = l(703462);
function o7(e) {
    let { message: t } = e;
    return (0, r.jsxs)("div", {
        className: o4.f,
        children: [
            (0, r.jsx)(aS.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, r.jsx)(k.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function o8() {
    return (0, r.jsx)("div", { className: o4.f, children: (0, r.jsx)(C.y, {}) });
}
function o6(e) {
    let t,
        l,
        { previewApplicationId: n } = e,
        { data: a, isLoading: i } = (0, G.YY)(n),
        u = a?.bot?.id ?? null,
        o = (0, m.bG)([Q.A], () => {
            if (null == u) return null;
            let e = Q.A.getDMFromUserId(u);
            return null != e ? Q.A.getChannel(e) : null;
        });
    ((t = o?.id ?? null),
        s.useEffect(() => {
            null != t && lD.A.preload(ey.ME, t);
        }, [t]),
        (l = (0, m.bG)([o3.A], () => o3.A.isFocused())),
        s.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, o5.Xg)();
            return (
                (0, o0.yl)(t, e),
                () => {
                    (0, o0.dm)(t, e);
                }
            );
        }, [t, l]));
    let [d, c] = s.useState(null),
        f = null != u && d === u;
    return (s.useEffect(() => {
        if (null == u || null != o) return;
        let e = !1;
        return (
            lD.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || c(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, o]),
    i && null == a)
        ? (0, r.jsx)(o8, {})
        : null == u || f
          ? (0, r.jsx)(o7, { message: ef.intl.string(ec.default["VP/O8s"]) })
          : null == o
            ? (0, r.jsx)(o8, {})
            : (0, r.jsx)("div", {
                  className: o4.g,
                  children: (0, r.jsx)(o1.A, { channel: o, guild: null, chatInputType: o2.oU.SIDEBAR }, o.id),
              });
}
var o9 = l(887909),
    de = l(570962),
    dt = l(998475);
function dl(e) {
    let {
        label: t,
        title: l,
        subtitle: n,
        header: a,
        body: i,
        actions: s,
        nextStep: u,
        appDetails: d,
        hasContentBackground: c,
        noPadding: f,
        obscured: m,
    } = (0, o9.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, r.jsxs)("section", {
        className: dt.Nr,
        "aria-label": t,
        children: [
            (0, r.jsx)("div", {
                className: dt.rf,
                children: (0, r.jsx)(de.A, {
                    obscured: !0 === m,
                    children: (0, r.jsxs)("div", {
                        className: dt.Gq,
                        children: [
                            null != l
                                ? (0, r.jsxs)("div", {
                                      className: dt.z3,
                                      children: [
                                          (0, r.jsx)(M.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: l,
                                          }),
                                          null != n
                                              ? (0, r.jsx)(k.E, {
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
                                className: o()(dt.Qs, c ? dt.cw : null, f ? dt.pN : null),
                                children: [i, null == u ? d : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, r.jsx)("div", {
                      className: dt.o1,
                      children: s.map((e, t) => (0, r.jsx)(S.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var dn = l(409478),
    da = l(652227);
function di(e) {
    let {
            applicationId: t,
            previewApplicationId: l,
            surface: n,
            previewReady: a,
            previewGate: i,
            availability: s,
            activeMode: u,
            widgetApplicationId: o,
            frameOverlay: d,
        } = e,
        { data: c, isLoading: f } = (0, G.YY)(t ?? void 0);
    if (i?.type === "checking") return (0, r.jsx)("div", { className: da.q, children: (0, r.jsx)(C.y, {}) });
    if (i?.type === "permissions")
        return (0, r.jsx)("div", {
            className: da.q,
            children: null == i.authorizeProps ? (0, r.jsx)(C.y, {}) : (0, r.jsx)(dl, { ...i.authorizeProps }),
        });
    if (!a) return (0, r.jsx)(oL, { className: da.q });
    if (null == t) return null;
    if (f && null == c) return (0, r.jsx)("div", { className: da.q, children: (0, r.jsx)(C.y, {}) });
    let m = s.showModeSwitch && null != u ? { role: "tabpanel", id: (0, tF.z3)(u), "aria-label": (0, tF.kZ)(u) } : {};
    return (0, r.jsxs)("div", {
        className: da.R,
        ...m,
        children: [
            (0, tb.yf)(s, u) ? (0, r.jsx)(oZ, { applicationId: t, surface: n, frameOverlay: d }) : null,
            "widget" === u && null != o
                ? "unavailable-authorization-revoked" === s.profileState
                    ? (0, r.jsx)("div", {
                          className: da.q,
                          children: (0, r.jsx)(oQ, {
                              wide: !0,
                              title: ef.intl.string(ec.default["08U+YO"]),
                              body: ef.intl.string(ec.default.pKBfrc),
                          }),
                      })
                    : (0, r.jsx)(dn.A, { applicationId: o })
                : null,
            "bot" === u && null != l ? (0, r.jsx)(o6, { previewApplicationId: l }) : null,
        ],
    });
}
var dr = l(175841),
    ds = l(750506),
    du = l(867193),
    dd = l(417760);
function dc(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function df(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function dm(e) {
    let { phase: t, projectId: l, onOpenPublishedApp: n, compact: a } = e,
        { stop: i, stopping: u } = (function (e) {
            let t = (0, m.bG)([tV.Ay], () => null != e && tV.Ay.isThinking(e)),
                [l, n] = s.useState(!1),
                [a, i] = s.useState(t);
            (t !== a && (i(t), t || n(!1)),
                s.useEffect(() => {
                    if (!l) return;
                    let e = setTimeout(() => n(!1), 5e3);
                    return () => clearTimeout(e);
                }, [l]));
            let r = s.useCallback(() => {
                null != e && (n(!0), (0, er.fu)(e));
            }, [e]);
            return { stop: t ? r : null, stopping: l };
        })(l),
        d = (0, tp.CU)(l),
        c = "controlling" === t,
        f = ef.intl.string(c ? (d ? ec.default["VJW/5P"] : ec.default["+hD2Iz"]) : ec.default["h+i1r9"]),
        g =
            null != n
                ? (0, r.jsx)(S.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: ef.intl.string(ec.default["1NcO7H"]),
                      onClick: n,
                  })
                : null,
        h =
            null != i
                ? (0, r.jsx)(S.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ef.intl.string(ec.default.oU59sU),
                      loading: u,
                      onClick: i,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return a
        ? (0, r.jsxs)("div", {
              className: o()(dd.M0, dd.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, r.jsx)(sp.i, { size: 12, color: "currentColor" })
                      : (0, r.jsx)(dr.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, r.jsx)(k.E, { variant: "text-sm/semibold", color: "none", className: dd.ID, children: f }),
                  c ? (0, r.jsx)(N.A, { children: ef.intl.string(ec.default.fg1sor) }) : null,
                  c ? (0, r.jsxs)("div", { className: dd.lC, children: [g, h] }) : null,
              ],
          })
        : (0, r.jsxs)("div", {
              className: dd.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, r.jsxs)("div", {
                      className: dd.sp,
                      children: [
                          (0, r.jsx)(dr.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, r.jsx)(sp.i, { size: 12, color: "currentColor" }) : null,
                          (0, r.jsxs)("div", {
                              className: dd.f4,
                              children: [
                                  (0, r.jsx)(k.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: dd.w9,
                                      children: f,
                                  }),
                                  c
                                      ? (0, r.jsx)(k.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: dd.Rb,
                                            children: ef.intl.string(ec.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, r.jsxs)("div", { className: dd.lC, children: [g, h] }) : null,
              ],
          });
}
function dg(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: n,
            resolveTarget: a,
            frameId: i,
            onOpenPublishedApp: u = null,
        } = e,
        o = (0, tp.Zv)(null != l && l === n ? t : null),
        d = (function (e) {
            let [t, l] = s.useState(e),
                [n, a] = s.useState(!1);
            return (e !== t && (l(e), a(!e)),
            s.useEffect(() => {
                if (!n) return;
                let e = setTimeout(() => a(!1), 2400);
                return () => clearTimeout(e);
            }, [n]),
            e)
                ? "controlling"
                : n
                  ? "handoff"
                  : "idle";
        })(o),
        c = (0, tt.useHasAnyModalOpen)(),
        f = tR(i);
    s.useEffect(() => {
        o &&
            f &&
            null != i &&
            (function (e) {
                if (!t_(e)) return;
                let t = tM(e);
                null != t && (0, tI.sP)(t);
            })(i);
    }, [o, f, i]);
    let [m, g] = s.useState(null),
        [h, x] = s.useState(null),
        [p, v] = s.useState(null),
        b = "idle" !== d;
    s.useEffect(() => {
        if (!b) return;
        function e() {
            let e = dc(a());
            g((t) => (df(t, e) ? t : e));
            let t = null == h ? null : dc(h);
            (v((e) => (df(e, t) ? e : t)), null != h && (0, du.C)(h.getBoundingClientRect().height));
        }
        e();
        let t = window.setInterval(e, 250);
        window.addEventListener("resize", e);
        let l = null == h ? null : new ResizeObserver(e);
        return (
            null != h && l?.observe(h),
            () => {
                (window.clearInterval(t),
                    window.removeEventListener("resize", e),
                    l?.disconnect(),
                    null != h && (0, du.C)(0));
            }
        );
    }, [b, a, h]);
    let j = "idle" !== d && null != m,
        y = j && "controlling" === d && !c,
        k = null != m && m.width < 420,
        w = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height },
        A =
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
        N = (function () {
            let [e] = s.useContext(ds.uY),
                [t] = s.useState(() => document.createElement("div"));
            return (
                s.useLayoutEffect(() => {
                    if (null != e) return (e.prepend(t), () => t.remove());
                }, [e, t]),
                null == e ? document.body : t
            );
        })();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            j
                ? (0, r.jsx)("div", {
                      ref: x,
                      className: dd.D,
                      "data-phase": d,
                      children: (0, r.jsx)("div", {
                          className: dd.QF,
                          children: (0, r.jsx)(dm, { phase: d, projectId: t, onOpenPublishedApp: u, compact: k }),
                      }),
                  })
                : null,
            (0, oi.createPortal)(
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: dd.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === d
                                ? ef.intl.string(ec.default.oWcemF)
                                : "handoff" === d
                                  ? ef.intl.string(ec.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            y
                ? (0, oi.createPortal)(
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: dd.ys,
                                  style: A,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, r.jsx)("div", {
                                  className: dd.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var dh = l(399503),
    dx = l(853555),
    dp = l(558960),
    dv = l(187645);
let db = new Map(),
    dj = !1;
function dy() {
    let e = new Map();
    for (let t of new Set([...tV.Ay.getActivityOrderedProjectIds(), ...(0, tp.T7)()])) {
        if (!tV.Ay.isThinking(t) && !(0, tp.wK)(t)) continue;
        let l = (function (e) {
            let t = eE.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let l = (0, tj.Rc)(t);
            return (0, tL.x1)(l) ? l.id : null;
        })(t);
        null != l && e.set(t, l);
    }
    for (let [n, a] of [...db]) {
        var t, l;
        e.get(n) !== a.frameId &&
            ((t = n),
            (l = a),
            db.delete(t),
            l.unregisterLookup(),
            dp.A.removeFrameTarget(l.frameId, l.element),
            l.element.remove());
    }
    for (let [t, l] of e)
        db.has(t) ||
            (function (e, t) {
                let l = document.createElement("div");
                ((l.className = dv.t),
                    l.setAttribute("inert", ""),
                    l.setAttribute("aria-hidden", "true"),
                    dk(l),
                    document.body.appendChild(l));
                let n = { frameId: t, element: l, unregisterLookup: () => {} };
                (db.set(e, n),
                    (n.unregisterLookup = (0, dx.Ng)(e, () => (0, oD.o)(l, t))),
                    dp.A.registerFrameTarget(t, l, o$.A.Backstage, void 0));
            })(t, l);
    for (let e of db.values()) dk(e.element);
}
function dk(e) {
    let t = tx.A.isBuilderPreviewMobile();
    e.classList.toggle(dv.L, !t);
    let l = t ? oK(tx.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != l ? `${l.width}px` : ""), (e.style.height = null != l ? `${l.height}px` : ""));
}
var dw = l(873727),
    dA = l(175734),
    dN = l(418842),
    dC = l(363195),
    dS = l(818023);
let dE = null;
var dI = l(602853),
    dT = l(517461),
    dM = l(487336);
function d_(e) {
    let { open: t, maxWidth: l, onWidthChange: n, children: a } = e,
        i = (0, dI.r)(F.A.modules.chat.RESIZE_HANDLE_WIDTH),
        u = s.useRef(null),
        [o, d] = (0, dT.V)("VibegrationsChatSidebarWidth", 460),
        [c, f] = s.useState(o ?? 460),
        m = (0, ae.clamp)(c, 360, l);
    s.useLayoutEffect(() => {
        n(t ? m + i : 0);
    }, [m, t, i, n]);
    let g = (0, uI.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: u,
            onElementResize: f,
            onElementResizeEnd: d,
            orientation: uI.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        h = s.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), g(e));
            },
            [g],
        );
    return (0, r.jsxs)("div", {
        className: dM.pz,
        hidden: !t,
        children: [
            (0, r.jsx)("div", { className: dM.Di, onPointerDown: h }),
            (0, r.jsx)("div", { ref: u, className: dM.kL, style: { width: m }, children: a }),
        ],
    });
}
var dP = l(541940);
function dR(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: i,
            header: u,
            mainClassName: d,
            content: c,
            sidebar: f,
            onOpenPublishedApp: g,
            showsFrame: h,
        } = e,
        [x, p] = s.useState(null),
        v = (0, H.A)(n, i),
        b = v?.id ?? null;
    (!(function (e, t) {
        let l = (0, m.bG)([dC.A], () => (0, dw.x4)(dC.A.theme)),
            n = (0, m.bG)([dA.A], () => dA.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: i,
                highContrast: r,
                forcedColors: u,
                underlineLinks: o,
            } = (0, m.cf)([rl.Ay], () => ({
                reducedMotion: rl.Ay.useReducedMotion,
                fontScale: (0, dw.U0)(),
                highContrast: rl.Ay.isHighContrastModeEnabled,
                forcedColors: rl.Ay.useForcedColors,
                underlineLinks: rl.Ay.alwaysShowLinkDecorations,
            })),
            d = X.hH.useSetting(),
            c = (0, dN.C)(),
            f = s.useRef(!1),
            g = s.useRef(!1),
            h = s.useRef(0),
            x = s.useRef(null),
            p = s.useCallback(() => {
                let n = (0, oD.o)(e, t);
                if (null == n) return;
                x.current = n;
                let s = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, dw.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: u,
                    underlineLinks: o,
                };
                (0, og.W)(n, "set-env", s, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, u, i, t, r, d, e, a, c, o]),
            v = s.useRef(p);
        s.useLayoutEffect(() => {
            v.current = p;
        });
        let b = s.useCallback(() => {
            f.current ||
                ((f.current = !0),
                queueMicrotask(() => {
                    ((f.current = !1), g.current || v.current());
                }));
        }, []);
        (s.useEffect(
            () => (
                (g.current = !1),
                () => {
                    g.current = !0;
                }
            ),
            [],
        ),
            s.useEffect(() => {
                b();
            }, [n, b]),
            s.useLayoutEffect(() => {
                (p(), b());
            }, [b, p]),
            s.useLayoutEffect(() => {
                let l = (0, oD.o)(e, t);
                null != l && l !== x.current && b();
            }),
            s.useEffect(() => {
                function l(l) {
                    l.target === (0, oD.o)(e, t) && ((x.current = null), b());
                }
                return (document.addEventListener("load", l, !0), () => document.removeEventListener("load", l, !0));
            }, [t, e, b]),
            s.useEffect(() => {
                let e = new MutationObserver(b);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [b]));
    })(x, b),
        s.useEffect(() => {
            if (null != t) return (0, dx.Ng)(t, () => (0, oD.o)(x, b));
        }, [t, x, b]));
    let j = s.useCallback(() => (0, oD.o)(x, b), [x, b]),
        y = s.useCallback(() => (h ? (0, oD.o)(x, b) : x), [h, x, b]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(dP.Mh, d),
                children: [
                    u,
                    (0, r.jsx)(dg, {
                        projectId: t ?? null,
                        applicationId: n,
                        previewApplicationId: a,
                        resolveTarget: y,
                        frameId: b,
                        onOpenPublishedApp: g,
                    }),
                    (0, r.jsx)("div", { ref: p, className: dP.fm, children: c }),
                ],
            }),
            f,
            (0, r.jsx)(ow, {
                projectId: t ?? null,
                applicationId: n,
                previewApplicationId: a,
                resolveIframe: j,
                toggleRef: l,
            }),
        ],
    });
}
function dL(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: l,
        applicationId: n,
        previewApplicationId: a,
        surface: i,
        header: u,
        chatOpen: d,
        onCloseChat: c,
        chatHeaderAction: f,
        onRestoreVersion: g,
        onImportProject: h,
        debugOpen: x = !1,
        onCloseDebug: p,
        restoreState: v,
        previewReady: b,
        previewGate: j,
        availability: y,
        activeMode: k,
        widgetApplicationId: w,
        onOpenPublishedApp: A = null,
    } = e;
    (0, dh.k)(t, w);
    let N = i.type === l1.U.MAIN || (0, tj.Q5)(i);
    !(function (e) {
        let { mobile: t, landscape: l } = (0, m.cf)([tx.A], () => ({
            mobile: tx.A.isBuilderPreviewMobile(),
            landscape: tx.A.isBuilderPreviewLandscape(),
        }));
        s.useEffect(() => {
            let n;
            if (null != e) {
                if (t) ((n = l ? dS.aX.LANDSCAPE : dS.aX.PORTRAIT), (dE = e));
                else {
                    if (dE !== e) return;
                    ((n = dS.aX.UNHANDLED), (dE = null));
                }
                lE.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: n, applicationId: e });
            }
        }, [e, t, l]);
    })(N ? n : null);
    let C = s.useRef(null),
        [S, E] = s.useState(0);
    (s.useLayoutEffect(() => {
        if (N) return ((0, eS.HV)(n), () => (0, eS.HV)(null));
    }, [n, N]),
        s.useEffect(() => {
            null != t &&
                ((0, er.Hc)(t),
                dj ||
                    ((dj = !0),
                    tV.Ay.addChangeListener(dy),
                    eE.Ay.addChangeListener(dy),
                    tS.A.addChangeListener(dy),
                    tx.A.addChangeListener(dy),
                    (0, tp.W3)(dy),
                    dy()));
        }, [t]),
        s.useLayoutEffect(() => {
            let e = C.current;
            if (null == e) return;
            function t() {
                null != e && E(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return (l.observe(e), () => l.disconnect());
        }, []),
        s.useLayoutEffect(() => () => (0, eS.Zq)(0), []));
    let I = Math.max(360, S - 320),
        T = d || N;
    return (0, r.jsx)("div", {
        ref: C,
        className: dP.LB,
        children: (0, r.jsx)(dR, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: i,
            header: u,
            onOpenPublishedApp: A,
            showsFrame: (0, tb.yf)(y, k),
            mainClassName: null == u ? void 0 : o()(dP.ez, { [dP.zt]: d }),
            content: (0, r.jsx)(di, {
                applicationId: n,
                previewApplicationId: a,
                surface: i,
                previewReady: b,
                previewGate: j,
                availability: y,
                activeMode: k,
                widgetApplicationId: w,
                frameOverlay: (0, r.jsx)(oG, { projectId: t, applicationId: n, previewApplicationId: a, surface: i }),
            }),
            sidebar:
                null != t && T
                    ? (0, r.jsx)(d_, {
                          open: d,
                          maxWidth: I,
                          onWidthChange: eS.Zq,
                          children: (0, r.jsx)("div", {
                              className: dP.cO,
                              children: x
                                  ? (0, r.jsx)(oa, { projectId: t, onClose: p ?? (() => {}) }, t)
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(oM.A, { projectId: t }),
                                            (0, r.jsx)(l2.Ay, {
                                                "aria-label": ef.intl.string(ef.t["/VQax8"]),
                                                toolbar: (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        f,
                                                        null == c
                                                            ? null
                                                            : (0, r.jsx)(l2.Ay.Icon, {
                                                                  icon: D.P,
                                                                  tooltip: ef.intl.string(ec.default.JD6Oit),
                                                                  onClick: c,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, r.jsx)(l2.Ay.Title, {
                                                    children: ef.intl.string(ef.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: dP.cb,
                                                children: (0, r.jsx)(
                                                    sO,
                                                    {
                                                        projectId: t,
                                                        restoreState: v,
                                                        onRestoreVersion: g,
                                                        onImportProject: h,
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
var dD = l(631417);
function dO(e) {
    let { title: t, actions: l, breadcrumb: n } = e;
    return (0, r.jsx)(K.A, {
        hideSearch: !0,
        toolbar: l,
        className: dD.wx,
        "aria-label": t,
        children: (0, r.jsxs)("div", {
            className: dD.QF,
            children: [
                (0, r.jsx)(O.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: F.A.colors.TEXT_STRONG,
                    className: dD.Kk,
                }),
                null != n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(K.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, r.jsx)(K.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, r.jsx)(K.A.Title, { className: dD.Qw, wrapperClassName: dD.DD, children: t }),
            ],
        }),
    });
}
var dF = l(683071);
let dz = "conjuring-help";
var dU = l(173114);
function dG() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: l,
            } = (0, m.cf)([tB.default, Z.A, lM.Ay, rB.A], () => {
                let e = tB.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of Z.A.getGuildsArray()) {
                    if (!t.features.has(ey.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let l = lM.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, $.m1)(t, tB.default, rB.A) === dz;
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
        t = s.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, W.pX)(ey.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, lt.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, r.jsx)("div", {
              className: dU.l,
              children: (0, r.jsx)(dF.w, {
                  type: "info",
                  iconAlign: "center",
                  message: ef.intl.format(ec.default["6anmu1"], { channel: dz, onNavigate: t }),
                  role: "static",
              }),
          });
}
var d$ = l(323140);
function dq(e) {
    return (0, r.jsx)(h.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function dB(e) {
    return (0, r.jsx)(x.u, { ...e, size: "custom", width: 20, height: 20 });
}
function dH(e) {
    return (0, r.jsx)(p.k, { ...e, size: "custom", width: 20, height: 20 });
}
function dV(e) {
    return (0, r.jsx)(v.H, { ...e, size: "custom", width: 20, height: 20 });
}
let dK = {
    showPublishBlocked: function (e) {
        (0, tt.openModal)((t) => (0, r.jsx)(lQ, { ...t, reason: e }));
    },
    openPublishNotes: lY.A,
    showError: (e) => (0, b.P)((0, j.o)(e, y.Ck.FAILURE)),
    openProfile: (e) => {
        (0, J.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(l.bind(l, 468689))
            .then((t) => {
                let { default: l } = t;
                return l.open(e, ey.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function dW(e) {
    var t;
    let l,
        n,
        a,
        i,
        u,
        d,
        h,
        x,
        p,
        v,
        { project: S, guildId: E, onSelect: I, onRemix: T, shared: M = !1 } = e,
        _ =
            ((l = S.id),
            (n = S.name),
            (a = s.useRef(!1)),
            (i = s.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, b.P)((0, j.o)(ef.intl.formatToPlainString(ec.default.aN2JdD, { name: n }), y.Ck.MESSAGE)),
                    eh(l, n)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", l, e),
                                (0, b.P)(
                                    (0, j.o)(
                                        409 === (t = e instanceof er.xE ? e.status : null)
                                            ? ef.intl.string(ec.default["9oqbEw"])
                                            : 404 === t
                                              ? ef.intl.string(ec.default["0W8uLq"])
                                              : ef.intl.string(ec.default.N8753A),
                                        y.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            a.current = !1;
                        }));
            }, [l, n])),
            {
                onExport: i,
                onImport: (u = ex(
                    s.useCallback(
                        (e) => {
                            let t = eg(e);
                            null != t
                                ? (0, b.P)((0, j.o)(t, y.Ck.FAILURE))
                                : (0, g.A)({
                                      title: ef.intl.formatToPlainString(ec.default["Gm+u1+"], { name: n }),
                                      subtitle: ef.intl.string(ec.default.M7H3sJ),
                                      confirmText: ef.intl.string(ec.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, W.pX)(ey.BVt.CHANNEL(E, ek.VV.CONJURE, l));
                                          try {
                                              await em(l, e, ef.intl.string(ec.default.Owerd3));
                                          } catch {
                                              (0, b.P)((0, j.o)(ef.intl.string(ec.default["Q+l4Hv"]), y.Ck.FAILURE));
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
            null == S.updated_at
                ? null
                : ef.intl.formatToPlainString(ec.default.AXydi3, { time: c()(S.updated_at).fromNow() }),
        R = (0, t$.wu)(S),
        L =
            (0, m.bG)([Z.A], () => (null == R ? null : (Z.A.getGuild(R)?.name ?? null)), [R]) ??
            ef.intl.string(ec.default["3QFps8"]),
        D = (0, m.bG)([eE.Ay], () => eE.Ay.isProjectDeleting(S.id), [S.id]),
        O =
            ((t = M ? S : null),
            (d = t?.id),
            (h = t?.owner_user_id),
            (x = (0, m.yK)(
                [tV.Ay],
                () =>
                    null == d
                        ? []
                        : [
                              ...new Set(
                                  tV.Ay.getMessages(d)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== h ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [d, h],
            )),
            s.useEffect(() => {
                null != h && (tQ(h), x.forEach(tQ));
            }, [h, x]),
            (p = (0, m.bG)([tB.default], () => (null == h ? null : tB.default.getUser(h)), [h])),
            (v = (0, m.yK)([tB.default], () => x.map((e) => tB.default.getUser(e)).filter((e) => null != e), [x])),
            s.useMemo(
                () =>
                    null == p
                        ? null
                        : {
                              creator: p,
                              collaborators: v,
                              label: (function (e, t) {
                                  let l;
                                  return 0 === t.length
                                      ? ef.intl.formatToPlainString(ec.default.t5RWBS, { creator: e })
                                      : ef.intl.formatToPlainString(ec.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (l = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === l
                                                      ? ef.intl.formatToPlainString(ef.t["8s9z8P"], { first: t[0] })
                                                      : 2 === l
                                                        ? ef.intl.formatToPlainString(ef.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === l
                                                          ? ef.intl.formatToPlainString(ef.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : ef.intl.formatToPlainString(ef.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: l - 3,
                                                            }),
                                        });
                              })(
                                  (0, tH.mG)(p),
                                  v.map((e) => (0, tH.mG)(e)),
                              ),
                          },
                [p, v],
            )),
        F = s.useId(),
        U = (0, r.jsx)(k.E, { variant: "text-md/semibold", color: "text-strong", className: d$.j1, children: S.name }),
        G = (0, ew.oF)(S.id),
        $ = {
            projectId: S.id,
            projectName: S.name,
            guildId: E,
            projectGuildId: S.guild_id,
            isOwner: (0, eE.PV)(S),
            canRemix: (0, eE.H_)(S),
            onRemix: T,
            onExport: _.onExport,
            onImport: _.onImport,
        };
    return (0, r.jsxs)("div", {
        className: o()(d$.OY, { [d$.Wy]: D }),
        "aria-busy": D,
        children: [
            (0, r.jsx)(tl.Ay, { projectId: S.id }),
            null == G || D ? null : (0, r.jsx)("div", { className: d$.SB, "aria-hidden": !0 }),
            (0, r.jsxs)(w.D, {
                className: d$.W6,
                onClick: D ? void 0 : I,
                onContextMenu: function (e) {
                    D || (0, z.jA)(e, () => (0, r.jsx)(lu, { ...$, onCloseMenu: z.Z_ }));
                },
                tabIndex: D ? -1 : void 0,
                "aria-describedby": null != O ? F : void 0,
                children: [
                    (0, r.jsx)(ld.A, { project: S, size: "md", className: d$.VJ }),
                    (0, r.jsxs)("div", {
                        className: d$.MM,
                        children: [
                            (0, r.jsxs)("div", {
                                className: d$.Ub,
                                children: [
                                    null != O ? (0, r.jsx)(A.m, { text: O.label, ariaHidden: !0, children: U }) : U,
                                    null == O || D ? null : (0, r.jsx)(lm, { creator: O, className: d$.rb }),
                                    G !== f.I.NEEDS_INPUT || D
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: d$.fs,
                                              children: [
                                                  (0, r.jsx)(V.A, { mentionsCount: 1 }),
                                                  (0, r.jsx)(N.A, { children: ef.intl.string(ec.default.hfIuc7) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: d$.h3,
                                children: [
                                    (0, r.jsx)(k.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: d$.Wb,
                                        children: D ? ef.intl.string(ec.default.Yh5pAc) : L,
                                    }),
                                    null == P || D
                                        ? null
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("span", {
                                                      className: d$.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, r.jsx)(k.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: d$.zM,
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
            null != O ? (0, r.jsx)(N.A, { id: F, children: O.label }) : null,
            (0, r.jsx)("div", {
                className: d$.M2,
                children: D
                    ? (0, r.jsx)(C.y, { type: C.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, r.jsxs)("div", {
                          className: d$.Pl,
                          children: [(0, r.jsx)(lo, { ...$, trigger: "iconButton" }), _.importInput],
                      }),
            }),
        ],
    });
}
function dJ(e) {
    var t;
    let { project: n, projectsLoaded: a, onBack: i, guildId: u } = e,
        [o, d] = s.useState(!0),
        [c, f] = s.useState(!1),
        h = X.Q_.useSetting(),
        [x, p] = s.useState(null),
        [v, w] = s.useState(null),
        N = n?.id ?? null,
        C = s.useRef(N),
        _ = s.useRef(!0),
        P = s.useRef(!1),
        R = s.useRef(null);
    ((C.current = N),
        s.useEffect(
            () => (
                (_.current = !0),
                () => {
                    _.current = !1;
                }
            ),
            [],
        ));
    let L = (0, m.bG)([eE.Ay], () => (null == N ? null : eE.Ay.getIntegrationStatus(N)), [N]),
        { data: D, isLoading: O } = (0, G.YY)(n?.preview_application_id ?? void 0),
        F = null != N && v !== N,
        z = L?.preview_ready === !0,
        U = L?.has_activity === !0,
        {
            availability: V,
            activeMode: J,
            setMode: Y,
            widgetApplicationId: Z,
        } = (function (e) {
            let {
                    applicationId: t,
                    previewApplicationId: l,
                    declaredActivity: n,
                    installScope: a,
                    ownerAuthorizationRevoked: i,
                    mainCardOnly: r = !1,
                } = e,
                [u, o] = s.useState(null),
                [d, c] = s.useState(t);
            d !== t && (c(t), o(null));
            let f = null != l && l === t ? l : null,
                g = (0, m.bG)([tA.default], () => tA.default.getId()),
                { applicationWidgetConfig: h } = (0, tk.A)(g, f ?? void 0),
                x = h?.surfaces,
                p = (0, tb.yZ)({
                    widgetTop: x?.[ty.m.WIDGET_TOP] != null,
                    widgetBottom: x?.[ty.m.WIDGET_BOTTOM] != null,
                    miniProfile: x?.[ty.m.MINI_PROFILE] != null,
                }),
                v = null != f && (r ? p.hasMainCard : p.hasAny),
                { data: b } = (0, G.YY)(l ?? void 0),
                j = null != l && b?.bot?.id != null,
                { data: y, isLoading: k } = (0, G.YY)(t ?? void 0),
                w = n || (0, tw.X)(y),
                A = null != t && k && null == y,
                N = (0, tb.Xm)({
                    installScope: a,
                    hasFrame: w,
                    hasProfileWidget: v,
                    hasBotDm: j,
                    ownerAuthorizationRevoked: i,
                });
            return {
                availability: N,
                isResolving: A,
                activeMode: A ? null : (0, tb.Qs)(u, N),
                setMode: o,
                widgetApplicationId: f,
            };
        })({
            applicationId: n?.preview_application_id ?? null,
            previewApplicationId: n?.preview_application_id ?? null,
            declaredActivity: U,
            installScope: n?.install_scope ?? null,
            ownerAuthorizationRevoked: L?.owner_authorization_revoked === !0,
        });
    (0, tv.x)(N, (e) => {
        V.modes.includes(e) && Y(e);
    });
    let ee = V.modes.includes("frame"),
        et = (0, tb.Qg)({
            installScope: n?.install_scope ?? null,
            previewReady: z,
            integrationInstalled: L?.integration_installed ?? null,
            botPermissionsChanged: L?.bot_permissions_changed === !0,
        }),
        el = o && !c,
        en = ef.intl.string(el ? ec.default.JD6Oit : ec.default.xjJAQm),
        ea = s.useCallback(() => {
            if (c) {
                (f(!1), d(!0));
                return;
            }
            d((e) => !e);
        }, [c]),
        ei = s.useCallback(() => d(!1), []),
        { active: es } = te(N);
    s.useEffect(() => {
        null != N && es && !ee && e7(N);
    }, [N, es, ee]);
    let eu = s.useRef(null),
        eo = (0, tp.Zv)(N),
        ed = ef.intl.string(eo ? ec.default.Sme0T0 : es ? ec.default.vn5Rzu : ec.default["cl/Jyl"]),
        eh = s.useCallback(() => {
            if (null != N) {
                let e;
                if (es) return void e7(N);
                (f(!1), d(!0), (e = e5(N)).active || e4(N, { ...e, active: !0 }));
            }
        }, [N, es]),
        ep = s.useCallback(() => {
            f((e) => !e && (d(!0), !0));
        }, []),
        ev = s.useCallback(() => f(!1), []),
        eb = s.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == n || P.current) return;
                let a = n.id;
                function i() {
                    return _.current && C.current === a;
                }
                ((P.current = !0),
                    f(!1),
                    d(!0),
                    p({ entry: e, status: "restoring" }),
                    (0, er.oB)(a, e.sha)
                        .then(
                            async () => {
                                if (
                                    (l &&
                                        i() &&
                                        (0, b.P)(
                                            (0, j.o)(
                                                ef.intl.formatToPlainString(ec.default.Z4n6LX, {
                                                    title: (0, tn.T4)(e.subject).short,
                                                }),
                                                y.Ck.SUCCESS,
                                            ),
                                        ),
                                    null != t)
                                ) {
                                    let e = await (0, ta.c)(a, t);
                                    null != e && (0, b.P)((0, j.o)(e, y.Ck.FAILURE));
                                }
                                i() && p({ entry: e, status: "restored" });
                            },
                            (t) => {
                                i() &&
                                    (p({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", a, t),
                                    (0, b.P)((0, j.o)(ef.intl.string(ec.default["PSdo+w"]), y.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (P.current = !1);
                        }));
            },
            [n],
        ),
        ej = (0, m.bG)([tx.A], () => tx.A.isBuilderPreviewMobile()),
        ew = ef.intl.string(ej ? ec.default.tKGF0Q : ec.default.peqEOY),
        eA = s.useCallback(() => (0, eS.GG)(!ej), [ej]),
        eN = (0, m.bG)([tx.A], () => tx.A.isBuilderPreviewLandscape()),
        eC = ef.intl.string(eN ? ec.default.tunI2l : ec.default.DoNdjA),
        eI = s.useCallback(() => (0, eS.Lw)(!eN), [eN]),
        eT = (0, tj.jS)(n),
        eM = s.useMemo(() => (0, tj.Op)(eT), [eT]),
        e_ = (0, H.A)(n?.preview_application_id ?? null, eM),
        eP = (0, tL.x1)(e_) && e_.data.proxyTicketRefreshing,
        eR = s.useCallback(() => {
            null == e_ || eP || B.A.refreshProxyTicket(e_.id);
        }, [e_, eP]),
        eL = s.useCallback(() => {
            var e, t;
            (null != n && ((e = n.id), (t = e_?.id), (0, er.Bn)(e), (0, lg.A)().leaveFrame(t)), i());
        }, [n, e_?.id, i]),
        eD = s.useCallback(() => {
            null != n && (d(!0), (0, er.dv)(n.id, ef.intl.string(ec.default.oU20rd)));
        }, [n]),
        eO = ex(
            s.useCallback(
                (e) => {
                    if (null == n) return;
                    let t = n.id,
                        l = eg(e);
                    null != l
                        ? (0, b.P)((0, j.o)(l, y.Ck.FAILURE))
                        : (0, g.A)({
                              title: ef.intl.formatToPlainString(ec.default["Gm+u1+"], { name: n.name }),
                              subtitle: ef.intl.string(ec.default.M7H3sJ),
                              confirmText: ef.intl.string(ec.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  d(!0);
                                  try {
                                      await em(t, e, ef.intl.string(ec.default.Owerd3));
                                  } catch {
                                      (0, b.P)((0, j.o)(ef.intl.string(ec.default["Q+l4Hv"]), y.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [n],
            ),
        ),
        eF = s.useCallback(() => {
            null != n && (0, lZ.A)(n, u);
        }, [n, u]),
        ez = s.useCallback(async () => {
            if (null == N || C.current !== N) return;
            R.current?.abort();
            let e = new AbortController();
            ((R.current = e), w(null));
            try {
                await (0, eS.U1)(N, e.signal);
            } catch {
            } finally {
                e.signal.aborted || R.current !== e || C.current !== N || w(N);
            }
        }, [N]);
    s.useEffect(
        () => (
            ez(),
            () => {
                (R.current?.abort(), (R.current = null));
            }
        ),
        [ez],
    );
    let eU = lC(n ?? null, L ?? null, u),
        eG = ((t = n?.application_id ?? null), (0, m.bG)([lM.Ay], () => (null == t ? null : (0, lh.i8)(u, t)), [u, t])),
        e$ = s.useMemo(() => (null == eG ? null : () => (0, W.pX)(ey.BVt.CHANNEL(u, eG))), [u, eG]),
        eq = s.useCallback(async () => {
            null != n && (await lS(n, eU));
        }, [eU, n]),
        eB = s.useCallback(async () => {
            try {
                await eq();
            } catch {}
            await ez();
        }, [ez, eq]),
        eH = s.useMemo(() => {
            let e = n?.preview_application_id;
            return null == e || O || F
                ? null
                : {
                      ...(0, tG.i)({ applicationId: e, application: D ?? null, guildId: eU }),
                      onClose: () => {
                          eB();
                      },
                  };
        }, [F, eB, eU, O, D, n?.preview_application_id]),
        eV = (0, tb.JR)(J, et)
            ? { type: "permissions", authorizeProps: eH }
            : F && null == L
              ? { type: "checking" }
              : void 0,
        eK = (0, m.bG)([eE.Ay], () => null != N && eE.Ay.isProjectDeleting(N), [N]);
    s.useEffect(() => {
        ((null == n && a) || eK) && (0, W.bG)(ey.BVt.CHANNEL(u, ek.VV.CONJURE));
    }, [u, n, a, eK]);
    let eW = s.useMemo(() => ({ guildId: u, platform: dK, busy: F || O }), [u, F, O]),
        eJ = lJ(N, eW),
        eX = eJ?.intent === "open" && "channel" === eJ.destination ? eJ.appChannelId : null,
        eQ = (0, m.bG)([Q.A], () => (null == eX ? null : Q.A.getChannel(eX)), [eX]),
        eY = (0, $.Ay)(eQ),
        eZ = (0, q.gU)(eQ),
        e0 =
            null != eY && null != eZ
                ? ef.intl.format(ec.default.gR7PUV, {
                      channel: eY,
                      channelIconHook: (e, t) =>
                          (0, r.jsx)(eZ, { size: "xs", color: "currentColor", className: d$.Y2 }, t),
                  })
                : eJ?.label,
        e1 = eJ?.upToDate === !0 ? ef.intl.string(ec.default.X0kGp2) : (eJ?.disabledReason ?? null),
        e2 =
            null == eJ
                ? null
                : (0, r.jsx)("div", {
                      className: d$.As,
                      children: (0, r.jsx)(A.m, {
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
        e3 = (0, r.jsx)(dO, {
            title: n?.name ?? ef.intl.string(ec.default.G1WwgK),
            breadcrumb: { title: ef.intl.string(ec.default.uk6jhJ), onClick: i },
            actions:
                null == n
                    ? null
                    : (0, r.jsxs)("div", {
                          className: d$.FO,
                          children: [
                              V.showModeSwitch ? (0, r.jsx)(tU, { modes: V.modes, mode: J, onChange: Y }) : null,
                              ee
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(K.A.Icon, {
                                                icon: ej ? dH : dB,
                                                tooltip: ew,
                                                "aria-label": ew,
                                                selected: ej,
                                                onClick: eA,
                                            }),
                                            ej
                                                ? (0, r.jsx)(K.A.Icon, {
                                                      icon: dV,
                                                      tooltip: eC,
                                                      "aria-label": eC,
                                                      selected: eN,
                                                      onClick: eI,
                                                  })
                                                : null,
                                            (0, r.jsx)(K.A.Icon, {
                                                ref: eu,
                                                icon: E.x,
                                                iconClassName: d$.D8,
                                                tooltip: ed,
                                                "aria-label": ed,
                                                selected: es,
                                                disabled: eo,
                                                onClick: eh,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === J ? (0, r.jsx)(tD, { frame: e_, controlProjectId: n.id }) : null,
                              (0, r.jsx)("div", { className: d$.YJ }),
                              h
                                  ? (0, r.jsx)(K.A.Icon, {
                                        icon: I.BugIcon,
                                        tooltip: ef.intl.string(ec.default.Mt5k9d),
                                        "aria-label": ef.intl.string(ec.default.Mt5k9d),
                                        selected: c,
                                        onClick: ep,
                                    })
                                  : null,
                              (0, r.jsx)(K.A.Icon, {
                                  icon: T.SettingsIcon,
                                  tooltip: ef.intl.string(ec.default.I2XSKe),
                                  "aria-label": ef.intl.string(ec.default.I2XSKe),
                                  onClick: () => (0, ln.A)(n.id, { guildId: u, isPreview: !0 }),
                              }),
                              (0, r.jsx)(lo, {
                                  projectId: n.id,
                                  projectName: n.name,
                                  guildId: u,
                                  projectGuildId: n.guild_id,
                                  isOwner: (0, eE.PV)(n),
                                  canRemix: (0, eE.H_)(n),
                                  onRefresh: (0, tL.x1)(e_) ? eR : void 0,
                                  isRefreshing: eP,
                                  onClose: eL,
                                  onExport: eD,
                                  onImport: eO.open,
                                  onRemix: eF,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = n.id),
                                          void (0, tt.openModalLazy)(async () => {
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
                                              onRestoreVersion: (e, t) => eb(e, t, !0),
                                          }),
                                          void (0, tt.openModalLazy)(async () => {
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
                                      V.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== V.profileState
                                          ? Z
                                          : null,
                                  previewProjectId: n.id,
                              }),
                              el
                                  ? null
                                  : (0, r.jsx)(K.A.Icon, { icon: dq, tooltip: en, "aria-label": en, onClick: ea }),
                          ],
                      }),
        });
    return (0, r.jsxs)("div", {
        className: d$.nj,
        children: [
            eO.input,
            (0, r.jsx)("main", {
                className: d$.JX,
                children:
                    null == n
                        ? (0, r.jsxs)("div", {
                              className: d$.j5,
                              children: [
                                  e3,
                                  (0, r.jsxs)("div", {
                                      className: d$.sD,
                                      children: [
                                          (0, r.jsx)(M.D, {
                                              variant: "heading-lg/semibold",
                                              children: ef.intl.string(ec.default.G1WwgK),
                                          }),
                                          (0, r.jsx)(k.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: ef.intl.string(ec.default.fINulo),
                                          }),
                                          (0, r.jsx)(S.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: ef.intl.string(ec.default["WFJ/vb"]),
                                              onClick: () => (0, eS.hF)(u),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, r.jsx)(lF.Provider, {
                              value: eW,
                              children: (0, r.jsx)(
                                  dL,
                                  {
                                      projectId: n.id,
                                      designFeedbackToggleRef: eu,
                                      applicationId: n.preview_application_id,
                                      previewApplicationId: n.preview_application_id,
                                      surface: eM,
                                      header: e3,
                                      chatOpen: o,
                                      onCloseChat: ei,
                                      chatHeaderAction: e2,
                                      debugOpen: h && c,
                                      onCloseDebug: ev,
                                      onRestoreVersion: eb,
                                      onImportProject: (0, eE.PV)(n) ? eO.open : void 0,
                                      restoreState: x,
                                      previewReady: z,
                                      previewGate: eV,
                                      availability: V,
                                      activeMode: J,
                                      widgetApplicationId: Z,
                                      onOpenPublishedApp: e$,
                                  },
                                  n.id,
                              ),
                          }),
            }),
        ],
    });
}
function dX(e) {
    let {
            projects: t,
            idea: n,
            guildId: a,
            submitting: i,
            createError: u,
            createDisabled: d,
            conjureTarget: c,
            onConjureTargetChange: f,
            eligibleGuilds: g,
            modelSettings: h,
            onModelSettingsChange: x,
            onSelectProject: p,
            onIdeaChange: v,
            onCreate: w,
            onCreateFromTemplate: A,
            onStartTemplate: N,
            onSubmitTemplate: E,
            onCancelTemplate: I,
            onSkipTemplate: T,
            onImportNewProject: M,
            importing: z,
        } = e,
        [U, G] = s.useState(() => ({ guildId: a, filter: lb(a) })),
        $ = (U.guildId === a ? U.filter : lb(a)) ?? a,
        q = s.useCallback(
            (e) => {
                (lv.set(a, e), G({ guildId: a, filter: e }));
            },
            [a],
        ),
        B = (0, m.yK)(
            [Z.A],
            () =>
                (function (e, t) {
                    let l = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && l.add(t.guild_id),
                            null != t.preview_guild_id && l.add(t.preview_guild_id));
                    let n = [];
                    for (let e of l) {
                        let t = Z.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, a),
            [t, a],
        ),
        H = s.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: O.D, label: ef.intl.string(ec.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: lx,
                    leading: ep.UserIcon,
                    label: ef.intl.string(ec.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: lp,
                    leading: ev.R,
                    label: ef.intl.string(ec.default["3QFps8"]),
                },
                ...B.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, r.jsx)(eH.Ay, { guild: e, size: eH.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [B],
        ),
        V = (0, m.yK)(
            [eE.Ay, Z.A],
            () => {
                let e = lj($);
                if (null != e) return eE.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(Z.A.getGuilds()))
                    eE.Ay.hasFetchedGuildProjects(e.id) && t.push(...eE.Ay.getSharedProjects(e.id));
                return t;
            },
            [$],
        );
    s.useEffect(() => {
        let e = lj($);
        null == e || eE.Ay.hasFetchedGuildProjects(e) || (0, eS.hF)(e);
    }, [$]);
    let W = s.useMemo(
            () =>
                V.filter((e) => ly(e, $)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [V, $],
        ),
        J = s.useMemo(
            () => [
                {
                    label: ef.intl.string(ec.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eV,
                            label: ef.intl.string(ec.default.UPLaGM),
                            leading: ep.UserIcon,
                        },
                        ...g.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, r.jsx)(eH.Ay, { guild: e, size: eH.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [g],
        ),
        X = s.useMemo(
            () =>
                t
                    .filter((e) => ly(e, $))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, $],
        ),
        Q = s.useCallback(
            (e) => {
                "user" === e.install_scope || (0, lh.Ot)(e, a)
                    ? p(e.id)
                    : (0, b.P)((0, j.o)(ef.intl.string(ec.default["XUl/cs"]), y.Ck.MESSAGE));
            },
            [a, p],
        ),
        Y = ef.intl.string(ec.default.ab1sMf),
        ee = [
            ef.intl.string(ec.default["9w+Chc"]),
            ef.intl.string(ec.default.WAvmdq),
            ef.intl.string(ec.default.SKsrzl),
        ],
        el = [
            {
                id: "moderation-bot",
                name: ef.intl.string(ec.default.lGLnE8),
                description: ef.intl.string(ec.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: ef.intl.string(ec.default.uJKQTs),
                description: ef.intl.string(ec.default["+dKy/B"]),
            },
            {
                id: "rust-sphere",
                name: ef.intl.string(ec.default.iF5Oru),
                description: ef.intl.string(ec.default.NbDDO6),
            },
        ],
        en = s.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: a,
                        eligibleGuilds: g,
                        onStart: (t) => N(e.name, t),
                        onSubmit: (t, l, n) => E(e, t, l, n),
                        onCancel: I,
                        onSkip: T,
                    }),
                    (0, tt.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([l.e("881965"), l.e("166781")]).then(
                                l.bind(l, 790028),
                            );
                            return (l) => (0, r.jsx)(e, { ...l, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                A(e);
            },
            [g, a, I, A, T, N, E],
        ),
        ea = ef.intl.string(ec.default.zzYLlW),
        ei =
            (s.useEffect(() => {
                (0, eS.b8)();
            }, []),
            (0, m.bG)([eE.Ay], () => {
                let e = eE.Ay.getMaxProjects();
                return null != e && eE.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - eE.Ay.getOwnedProjects().length)
                    : null;
            })),
        er = ef.intl.string(ec.default["2XcV3x"]),
        es = s.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || w());
            },
            [d, w],
        ),
        eu = lj($) ?? a,
        eo = (0, m.bG)([eE.Ay], () => eE.Ay.getGuildProjectsFetchState(eu), [eu]),
        ed = (0, m.bG)([eE.Ay], () => eE.Ay.getGuildProjectsFetchState(a), [a]),
        [em, eg] = s.useState(lA),
        eh = s.useMemo(() => lk.w.get(lN(a)) ?? !1, [a]),
        ex = "success" === ed,
        eb = (0, m.yK)([eE.Ay], () => eE.Ay.getSharedProjects(a), [a]).length > 0 || t.some((e) => ly(e, a)),
        ey = em ?? (!!eb || "error" === ed || (!ex && eh));
    s.useEffect(() => {
        ex && lk.w.set(lN(a), eb);
    }, [ex, eb, a]);
    let ek = s.useCallback((e) => {
            (lk.w.set(lw, e), eg(e));
        }, []),
        ew = s.useCallback(() => ek(!ey), [ek, ey]),
        eA = s.useCallback(() => ek(!1), [ek]),
        eC = ef.intl.string(ec.default.kar7jh),
        eT = ey ? eC : ef.intl.string(ec.default.WSc5Y2);
    return (0, r.jsx)("div", {
        className: o()(d$.nj, d$.a0),
        children: (0, r.jsxs)("div", {
            className: d$.Yo,
            children: [
                (0, r.jsxs)("main", {
                    className: d$.ps,
                    children: [
                        (0, r.jsx)(dO, {
                            title: ef.intl.string(ec.default.uk6jhJ),
                            actions: (0, r.jsx)(K.A.Icon, {
                                icon: _.Z,
                                tooltip: eT,
                                "aria-label": eT,
                                selected: ey,
                                onClick: ew,
                            }),
                        }),
                        (0, r.jsx)(P.Ip, {
                            className: d$.Yy,
                            children: (0, r.jsx)("div", {
                                className: d$.Mo,
                                children: (0, r.jsxs)("section", {
                                    className: o()(d$.Qs, d$.Ix),
                                    children: [
                                        (0, r.jsx)(dG, {}),
                                        (0, r.jsx)(eB, {}),
                                        (0, r.jsxs)("section", {
                                            className: d$.WI,
                                            "aria-label": ea,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: d$.G9,
                                                    children: [
                                                        (0, r.jsx)(k.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ea,
                                                        }),
                                                        (0, r.jsx)(k.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ef.intl.string(ec.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eR, {
                                                    listClassName: d$.Aw,
                                                    radius: e_,
                                                    children: el.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: d$.EA,
                                                                children: (0, r.jsxs)(eI, {
                                                                    disabled: i,
                                                                    ariaLabel: ef.intl.formatToPlainString(
                                                                        ec.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(d$.nx, d$.rz),
                                                                    onClick: () => en(e),
                                                                    children: [
                                                                        (0, r.jsx)(k.E, {
                                                                            className: d$.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, r.jsx)(k.E, {
                                                                            className: d$.BK,
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
                                            className: d$.WI,
                                            "aria-label": er,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: d$.G9,
                                                    children: [
                                                        (0, r.jsx)(k.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: er,
                                                        }),
                                                        (0, r.jsx)(k.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ef.intl.string(ec.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eR, {
                                                    listClassName: d$.Aw,
                                                    radius: eP,
                                                    children: ee.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: d$.EA,
                                                                children: (0, r.jsx)(eI, {
                                                                    disabled: i,
                                                                    className: d$.nx,
                                                                    onClick: () => w(e),
                                                                    children: (0, r.jsx)(k.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: d$.un,
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
                            className: d$.Yl,
                            children: (0, r.jsxs)("div", {
                                className: o()(d$.Qs, d$.DA),
                                children: [
                                    (0, r.jsx)(R.f, {
                                        label: Y,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: n,
                                        placeholder: Y,
                                        error: u,
                                        onChange: v,
                                        onKeyDown: es,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: d$.VP,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: d$.gH,
                                                children: (0, r.jsx)(L.l, {
                                                    selectionMode: "single",
                                                    label: ef.intl.string(ec.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: ef.intl.string(ec.default.NyVn6T),
                                                    options: J,
                                                    value: c,
                                                    onSelectionChange: f,
                                                    disabled: i,
                                                }),
                                            }),
                                            null != ei
                                                ? (0, r.jsx)(k.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === ei ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === ei
                                                              ? ef.intl.string(ec.default.s28pGG)
                                                              : ef.intl.formatToPlainString(ec.default.Wy5aK4, {
                                                                    count: ei,
                                                                }),
                                                  })
                                                : null,
                                            (0, r.jsx)(th, {
                                                settings: h ?? et.A4,
                                                tiers: et.lO,
                                                choices: (0, eN.b)()
                                                    ? {
                                                          main: [...et.vC.main, ...et.XE.main],
                                                          subagent: [...et.vC.subagent, ...et.XE.subagent],
                                                          thinking: et.vC.thinking,
                                                      }
                                                    : et.vC,
                                                disabled: i,
                                                onChange: x,
                                            }),
                                            (0, r.jsx)(S.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: ef.intl.string(ef.t.CumH4u),
                                                disabled: d,
                                                loading: i,
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
                    className: d$.pA,
                    hidden: !ey,
                    "aria-label": ef.intl.string(ec.default.dWgSAa),
                    children: [
                        (0, r.jsxs)("div", {
                            className: d$.IR,
                            children: [
                                (0, r.jsx)(k.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: d$.RM,
                                    children: ef.intl.string(ec.default.dWgSAa),
                                }),
                                (0, r.jsxs)("div", {
                                    className: d$.Ss,
                                    children: [
                                        (0, r.jsx)(ej, { importing: z, onImport: M }),
                                        (0, r.jsx)(K.A.Icon, { icon: D.P, tooltip: eC, "aria-label": eC, onClick: eA }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)(P.Ip, {
                            className: d$.xe,
                            children: [
                                (0, r.jsx)("div", {
                                    className: d$.Vw,
                                    children: (0, r.jsx)(L.l, {
                                        selectionMode: "single",
                                        label: ef.intl.string(ec.default.U6TqU9),
                                        hideLabel: !0,
                                        options: H,
                                        value: $,
                                        onSelectionChange: q,
                                    }),
                                }),
                                (0, r.jsx)(k.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: d$.wE,
                                    children: ef.intl.string(ec.default.JQpNkh),
                                }),
                                ("unattempted" === eo || "loading" === eo) && 0 === X.length
                                    ? (0, r.jsx)("div", { className: d$.E8, children: (0, r.jsx)(C.y, {}) })
                                    : "error" === eo && 0 === X.length
                                      ? (0, r.jsxs)("div", {
                                            className: d$.E8,
                                            children: [
                                                (0, r.jsx)(k.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: d$.JS,
                                                    children: ef.intl.string(ec.default.DJAPMO),
                                                }),
                                                (0, r.jsx)(S.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: ef.intl.string(ec.default["WFJ/vb"]),
                                                    onClick: () => (0, eS.hF)(eu),
                                                }),
                                            ],
                                        })
                                      : 0 === X.length
                                        ? (0, r.jsx)("div", {
                                              className: d$.D1,
                                              children: (0, r.jsxs)("div", {
                                                  className: d$.ST,
                                                  children: [
                                                      (0, r.jsx)(O.D, { size: "lg", color: F.A.colors.TEXT_SUBTLE }),
                                                      (0, r.jsx)(k.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: d$.sI,
                                                          children: ef.intl.string(ec.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, r.jsx)("div", {
                                              className: d$.Dq,
                                              children: X.map((e) =>
                                                  (0, r.jsx)(
                                                      dW,
                                                      {
                                                          project: e,
                                                          guildId: a,
                                                          onSelect: () => Q(e),
                                                          onRemix: () => (0, lZ.A)(e, a),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                W.length > 0
                                    ? (0, r.jsxs)("div", {
                                          className: d$.qx,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: d$.uc,
                                                  children: [
                                                      (0, r.jsx)(k.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: ef.intl.string(ec.default["wFi8+o"]),
                                                      }),
                                                      (0, r.jsx)(k.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: ef.intl.string(ec.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: d$.Dq,
                                                  children: W.map((e) =>
                                                      (0, r.jsx)(
                                                          dW,
                                                          {
                                                              project: e,
                                                              guildId: a,
                                                              onSelect: () => Q(e),
                                                              onRemix: () => (0, lZ.A)(e, a),
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
function dQ(e) {
    let t,
        { guildId: l, projectId: n } = e,
        a = (0, m.yK)([eE.Ay], () => eE.Ay.getOwnedProjects()),
        i = (0, m.yK)([Y.Ay], () => Y.Ay.getSelfMember(l)?.roles ?? [], [l]),
        u = (0, m.bG)(
            [Z.A, ee.A],
            () => {
                let e = Z.A.getGuild(l);
                return null != e && ee.A.can(ey.xBc.MANAGE_GUILD, e);
            },
            [l],
        ),
        [o, d] = s.useState(""),
        c = n ?? null,
        [f, g] = s.useState(!1),
        [h, x] = s.useState(null),
        p = (0, tY.z9)("VibegrationsScreen"),
        [v, k] = s.useState(null),
        w = (0, U.o)().get(tq.f_) === eV;
    s.useEffect(() => {
        k(null);
    }, [l, w]);
    let A = s.useMemo(() => (!w && p.some((e) => e.id === l) ? l : eV), [p, l, w]),
        N = v ?? A,
        C = N === eV ? "user" : "guild",
        S = N === eV ? l : N,
        [E, I] = s.useState(null);
    (s.useEffect(() => {
        (0, eS.hF)(l);
    }, [l, i, u]),
        s.useEffect(() => {
            (0, eS.dm)(l, c);
        }, [l, c]));
    let T = s.useCallback(
            async (e, t, l) => {
                let n = await (0, eS.gA)({ guild_id: t, install_scope: l });
                ((0, er.Hc)(n),
                    (0, er.r2)(n, E ?? et.A4),
                    e(n),
                    (0, W.pX)(ey.BVt.CHANNEL(t, ek.VV.CONJURE, n)),
                    d(""),
                    I(null));
            },
            [E],
        ),
        M = s.useCallback(
            async (e) => {
                let t = (e ?? o).trim(),
                    l = eC({ idea: t, installScope: C, submitting: f });
                if ("idea" !== l && "submitting" !== l) {
                    (null != e && d(e), g(!0), x(null));
                    try {
                        await T((e) => (0, er.dv)(e, t), S, C);
                    } catch (e) {
                        x((0, eA.mG)(e));
                    } finally {
                        g(!1);
                    }
                }
            },
            [T, C, S, o, f],
        ),
        _ = s.useCallback(
            async (e) => {
                if (!f) {
                    (g(!0), x(null));
                    try {
                        await T(
                            (t) => {
                                var l;
                                (0, er.dv)(
                                    t,
                                    ((l = e.name),
                                    ef.intl.formatToPlainString(ec.default["0PQip6"], { templateName: l })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            S,
                            C,
                        );
                    } catch (e) {
                        x((0, eA.mG)(e));
                    } finally {
                        g(!1);
                    }
                }
            },
            [T, C, S, f],
        ),
        P = s.useCallback(
            async (e, t) => {
                let l = await (0, eS.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, er.Hc)(l), (0, er.r2)(l, E ?? et.A4), (0, er.dv)(l, (0, l0.Wl)(e)), l);
            },
            [E],
        ),
        R = s.useCallback(async (e, t, l, n) => {
            if (eE.Ay.getProject(t)?.guild_id !== l) {
                let e = await (0, eS.M7)(t, { guild_id: l, preview_guild_id: l });
                if (!e.ok) throw new eA.DS((0, eA.hj)(e), e.status);
            }
            ((0, er.dv)(t, n, void 0, { templateId: e.id }), (0, W.pX)(ey.BVt.CHANNEL(l, ek.VV.CONJURE, t)), I(null));
        }, []),
        L = s.useCallback((e) => {
            (0, eS.xx)(e).catch(() => void 0);
        }, []),
        D = s.useCallback(
            (e) => {
                let t = eE.Ay.getProject(e)?.guild_id ?? l;
                ((0, W.pX)(ey.BVt.CHANNEL(t, ek.VV.CONJURE, e)), I(null));
            },
            [l],
        ),
        [O, F] = s.useState(!1),
        z = s.useCallback(
            async (e, t) => {
                let n = eg(e);
                if (null != n) return void (0, b.P)((0, j.o)(n, y.Ck.FAILURE));
                F(!0);
                let a = null;
                try {
                    ((a = await (0, eS.gA)({ guild_id: l, install_scope: t })),
                        (0, er.Hc)(a),
                        (0, er.r2)(a, E ?? et.A4),
                        await em(a, e, ef.intl.string(ec.default["LUc7/5"])),
                        (0, W.pX)(ey.BVt.CHANNEL(l, ek.VV.CONJURE, a)),
                        I(null));
                } catch {
                    (null != a && (await (0, eS.xx)(a).catch(() => void 0)),
                        (0, b.P)((0, j.o)(ef.intl.string(ec.default["Q+l4Hv"]), y.Ck.FAILURE)));
                } finally {
                    F(!1);
                }
            },
            [l, E],
        ),
        G = s.useCallback(
            (e) => {
                (0, W.pX)(ey.BVt.CHANNEL(l, ek.VV.CONJURE, e));
            },
            [l],
        ),
        $ = s.useCallback(() => {
            (0, W.pX)(ey.BVt.CHANNEL(l, ek.VV.CONJURE));
        }, [l]),
        q = s.useCallback((e) => {
            (d(e), x(null));
        }, []),
        B = (0, m.bG)(
            [eE.Ay],
            () => {
                if (null == c) return null;
                let e = eE.Ay.getProject(c);
                return null == e || (0, eE.PV)(e) || e.guild_id === l ? e : null;
            },
            [c, l],
        ),
        H = (0, m.bG)([eE.Ay], () => eE.Ay.hasFetchedGuildProjects(l), [l]);
    return null != c
        ? (0, r.jsx)(dJ, { project: B, projectsLoaded: H, onBack: $, guildId: l }, c)
        : (0, r.jsx)(dX, {
              projects: a,
              modelSettings: E,
              onModelSettingsChange: I,
              idea: o,
              guildId: l,
              submitting: f,
              createError: h,
              createDisabled: "idea" === (t = eC({ idea: o, installScope: C, submitting: f })) || "submitting" === t,
              onSelectProject: G,
              onIdeaChange: q,
              onCreate: M,
              onCreateFromTemplate: _,
              onStartTemplate: P,
              onSubmitTemplate: R,
              onCancelTemplate: L,
              onSkipTemplate: D,
              onImportNewProject: z,
              importing: O,
              conjureTarget: N,
              onConjureTargetChange: k,
              eligibleGuilds: p,
          });
}
