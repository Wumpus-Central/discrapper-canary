(n.r(t), n.d(t, { default: () => h$ }));
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    u = n(806163),
    o = n(834730),
    c = n(289873),
    d = n(976860),
    f = n(17928),
    m = n(260498),
    h = n(385081),
    g = n(503698),
    p = n.n(g),
    x = n(821609),
    v = n(478016),
    j = n(604525),
    b = n(663417),
    y = n(70688),
    k = n(297264),
    w = n(534890),
    S = n(646270),
    N = n(31300),
    A = n(831453),
    C = n(646973),
    I = n(742589),
    E = n(723702),
    M = n(839214);
n(321073);
let _ = Object.freeze({ x: 0.5, y: 0.5 });
function T(e) {
    return "" !== e.trim();
}
function P(e) {
    let t = e.name.trim(),
        n = (function (e) {
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
    return null == n
        ? "" === t
            ? { kind: "" !== e.role ? e.role : e.tag, name: "" }
            : { kind: "", name: t }
        : { kind: n, name: t };
}
function R(e) {
    let { kind: t, name: n } = P(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function L(e) {
    let t = [`<${e.tag}>`];
    "" !== e.role && t.push(`role=${e.role}`);
    let n = e.name.trim();
    return (
        "" !== n && t.push(`name="${n}"`),
        null != e.value && "" !== e.value && t.push(`value="${e.value}"`),
        null != e.path && "" !== e.path && t.push(`path="${e.path}"`),
        null != e.marker && t.push(`marker="${e.marker}"`),
        t.push(`at x=${e.rect.x} y=${e.rect.y}`),
        t.push(`size ${e.rect.width}x${e.rect.height}`),
        t.push(`ref=${e.ref}`),
        t.join(" ")
    );
}
let $ = "[conjure:selected] ",
    q = " \u2014 ";
function D(e) {
    if (!e.startsWith($)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice($.length),
        a = r.indexOf(q),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let F = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    O = new Map(),
    z = new Set();
function G(e) {
    return O.get(e) ?? F;
}
function U(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? O.set(e, t) : O.delete(e), [...z]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function B(e) {
    let t = G(e);
    t.active || U(e, { ...t, active: !0 });
}
function K(e) {
    let t = G(e);
    t.active && U(e, { ...t, active: !1 });
}
function H(e) {
    O.has(e) && U(e, F);
}
function V(e, t) {
    let n = G(e);
    n.active && U(e, { ...n, context: t });
}
function W(e, t) {
    return null != t && e.authorId === t;
}
function X(e) {
    return (
        z.add(e),
        () => {
            z.delete(e);
        }
    );
}
function Z(e) {
    let t = i.useCallback(() => (null == e ? F : G(e)), [e]);
    return i.useSyncExternalStore(X, t, t);
}
(n(134528), n(947204));
let Q = { past: [], present: [], future: [] };
function Y(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function J(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function ee(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => J(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: J(e.from, t, n), to: J(e.to, t, n) };
        case "text":
            return { ...e, at: J(e.at, t, n) };
    }
}
function et(e) {
    return e.some((e) => "erase" !== e.kind);
}
function en(e, t) {
    switch (e.kind) {
        case "marker":
            return e.points.length > 1;
        case "erase":
            return e.points.length > 0;
        case "circle":
        case "square": {
            let n = e.width * t.width;
            return Math.abs(e.to.x - e.from.x) * t.width >= n && Math.abs(e.to.y - e.from.y) * t.height >= n;
        }
        case "text":
            return "" !== e.text.trim();
    }
}
function el(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function er(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function ea(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => er(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = er(e.from, t),
                l = er(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = er(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function ei(e) {
    return et(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let es = [3, 6, 12],
    eu = [10, 20, 40],
    eo = (0, M.D)(() => ({ byProject: {} })),
    ec = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: Q,
        sketchDismissedFor: null,
    };
function ed(e) {
    return eo.getState().byProject[e] ?? null;
}
function ef(e, t) {
    let n = ed(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = eo.getState();
    eo.setState({ byProject: { ...r, [e]: l } });
}
function em(e) {
    if (null == ed(e)) return;
    let { [e]: t, ...n } = eo.getState().byProject;
    (eo.setState({ byProject: n }), H(e));
}
function eh(e, t) {
    null != ed(e) &&
        (ef(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? B(e) : K(e));
}
function eg(e, t) {
    ef(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return Y(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return Y(
                        e,
                        e.present.map((e) => (e.id === t.id ? ee(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : Y(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : Y(e, []);
                case "undo": {
                    let t = e.past.at(-1);
                    if (null == t) return e;
                    return { past: e.past.slice(0, -1), present: t, future: [e.present, ...e.future] };
                }
                case "redo": {
                    let [t, ...n] = e.future;
                    if (null == t) return e;
                    return { past: [...e.past, e.present], present: t, future: n };
                }
            }
        })(e.history, t);
        return n === e.history ? e : { ...e, history: n };
    });
}
function ep(e) {
    return eo.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var ex = n(39416);
function ev(e) {
    let { enabled: t, onLongPress: n, children: l } = e,
        [r] = i.useState(() =>
            (function () {
                let e = null,
                    t = !1;
                function n() {
                    (null != e && clearTimeout(e), (e = null));
                }
                function l() {
                    (n(), (t = !1));
                }
                return {
                    press: (n) => {
                        (l(),
                            (e = setTimeout(() => {
                                ((e = null), (t = !0), n());
                            }, 500)));
                    },
                    release: () => {
                        (n(), t && (e = setTimeout(l, 0)));
                    },
                    cancel: l,
                    takeClick: () => {
                        let e = !t;
                        return ((t = !1), e);
                    },
                };
            })(),
        );
    return (
        i.useEffect(() => r.cancel, [r]),
        (0, a.jsx)("span", {
            className: ex.i5,
            onPointerDown: (e) => {
                t && 0 === e.button ? r.press(n) : r.cancel();
            },
            onPointerUp: r.release,
            onPointerLeave: (e) => {
                0 !== e.buttons && r.cancel();
            },
            onPointerCancel: r.cancel,
            onClickCapture: (e) => {
                r.takeClick() || (e.preventDefault(), e.stopPropagation());
            },
            children: l,
        })
    );
}
var ej = n(314116),
    eb = n(858899),
    ey = n(949757),
    ek = n(800202),
    ew = n(809526),
    eS = n(105292),
    eN = n(766367);
let eA = new Set(),
    eC = null;
function eI(e, t) {
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
                eA.add(t),
                () => {
                    eA.delete(t);
                }
            );
        }, [e]));
}
var eE = n(253932);
function eM() {
    return eE.Q_.useSetting() || !1;
}
var e_ = n(573083);
let eT = (0, n(945810).mj)({
    name: "2026-10-conjure-mcp-ui",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 } },
});
var eP = n(192308),
    eR = n(128761),
    eL = n(12177),
    e$ = n(967008);
let eq = i.createContext(null);
var eD = n(398773),
    eF = n(735769),
    eO = n(513845),
    ez = n(802905),
    eG = n(951178);
let eU = { width: 320, height: 240 };
function eB(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : eU;
}
function eK(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function eH(e) {
    return eB(e?.preview_overlay_widget ?? null);
}
var eV = n(855859),
    eW = n(238490),
    eX = n(991690),
    eZ = n(696645);
function eQ(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function eY(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, eZ.X)(e.surface)
                : eS.intl.formatToPlainString(ew.default["6xVl+N"], {
                      surface: (0, eZ.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return eS.intl.string(ew.default.y5GiL1);
        case "overlay":
            return eS.intl.string(ew.default["2940LX"]);
        case "bot":
            return eS.intl.string(ew.default.tjpaGN);
    }
}
var eJ = n(939398),
    e0 = n(86147),
    e1 = n(729475),
    e2 = n(91242),
    e3 = n(156548),
    e4 = n(869146),
    e7 = n(475815),
    e5 = n(652215),
    e6 = n(165610);
function e8(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, e3.cR)(t?.id ?? null),
        r = (0, e_.Zv)(n),
        i = (0, f.bG)(
            [e4.A, e2.A],
            () => null != t && e4.A.getWindowOpen(e5.MLl.ACTIVITY_POPOUT) && e2.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, e6.x1)(t) || i || r) return null;
    let s = (0, e3.fl)(t.id);
    if (null == s || !(0, e7.Ub)(s)) return null;
    let u = eS.intl.string(l ? eS.t.Z7MyNB : eS.t.OIDkcp);
    return (0, a.jsx)(I.A.Icon, {
        tooltip: u,
        icon: l ? e0.z : e1.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, e3.U8)(t.id),
    });
}
var e9 = n(265872),
    te = n(980707),
    tt = n(477782),
    tn = n(559106),
    tl = n(847374),
    tr = n(704745);
function ta(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        u = null != n && t.length > 1;
    r && !u && s(!1);
    let c = i.useCallback(() => s(!1), []),
        d = i.useCallback(() => s((e) => !e), []),
        f = i.useRef(null);
    if (!u) return null;
    let m = eS.intl.string(ew.default.I2ucou);
    return (0, a.jsx)(e9.Y, {
        targetElementRef: f,
        shouldShow: r,
        onRequestClose: c,
        position: "bottom",
        align: "right",
        animation: e9.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(te.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(tt.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = eQ(e);
                        return (0, a.jsx)(
                            tt.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: eY(e),
                                checked: t === eQ(n),
                                action: () => {
                                    (l(e), c());
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
            return (0, a.jsx)(tn.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: f,
                    type: "button",
                    className: tr.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: d,
                    children: [
                        (0, a.jsx)(o.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: eS.intl.string(ew.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(o.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: eY(n),
                        }),
                        (0, a.jsx)(tl.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var ti = n(324641),
    ts = n(627363),
    tu = n(371169),
    to = n(153207),
    tc = n(625180),
    td = n(672929),
    tf = n(111534),
    tm = n(754027),
    th = n(193072),
    tg = n(457827),
    tp = n(322227),
    tx = n(722701),
    tv = n(962998),
    tj = n(79733);
function tb(e) {
    return null != e && e.upToDate && "publish" === e.action && !e.awaitingApproval;
}
function ty(e, t) {
    return null != t
        ? t
        : null == e
          ? eS.intl.string(ew.default["120EFN"])
          : tb(e) && !e.publishing
            ? eS.intl.string(ew.default.kAfbEN)
            : e.label;
}
var tk = n(373540),
    tw = n(189213),
    tS = n(144228);
function tN(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, u] = i.useState(t.selected_destination_id),
        o = eS.intl.string(ew.default.lJrOGW);
    return (0, a.jsx)(tw.a, {
        transitionState: l,
        onClose: r,
        title: o,
        size: "sm",
        actions: [
            { text: eS.intl.string(ew.default.y83r6D), variant: "secondary", onClick: r },
            {
                text: eS.intl.string(ew.default.zh1Izp),
                variant: "primary",
                onClick: () => {
                    (n(s), r());
                },
            },
        ],
        children: (0, a.jsx)(tS.z, {
            label: o,
            options: t.destinations.map((e) => {
                let { id: t, label: n } = e;
                return { name: n, value: t };
            }),
            value: s,
            onChange: u,
        }),
    });
}
let tA = {
    showPublishBlocked: tk.A,
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, eP.openModal)(
                (t) =>
                    (0, a.jsx)(tN, {
                        ...t,
                        options: e,
                        onDone: (e) => {
                            n = e;
                        },
                    }),
                { onCloseCallback: () => t(n) },
            );
        });
    },
    showError: (e) => (0, eb.P0)({ text: e, variant: "critical" }),
};
var tC = n(811587);
let tI = "conjure-publish";
function tE(e) {
    let t = (0, eP.getInteractingModalContext)(),
        l = { current: !1 };
    (0, eP.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("880475"), n.e("801342"), n.e("924150")]).then(
                n.bind(n, 372501),
            );
            return (n) => (0, a.jsx)(t, { ...n, ...e, savingRef: l });
        },
        {
            modalKey: tI,
            contextKey: t,
            onCloseRequest: () => {
                l.current || (0, eP.closeModal)(tI, t);
            },
        },
    );
}
function tM(e, t, n) {
    let l, r;
    return (
        (l = i.useContext(tj.bI)),
        (r = n ?? l),
        i.useCallback(
            (n) => {
                if (null == e || null == t || null == r || t.disabled) return;
                let l = t.status?.publishState;
                t.awaitingApproval || (null != l && (0, tC.lE)(l))
                    ? t.run(n)
                    : tE({ projectId: e, publishOptions: r, entryPoint: n });
            },
            [e, t, r, tE],
        )
    );
}
var t_ = n(95264),
    tT = n(616334),
    tP = n(789645),
    tR = n(812771),
    tL = n(58736);
n(743898);
var t$ = n(333007),
    tq = n(621466),
    tD = n(775121),
    tF = n(989145),
    tO = n(866665),
    tz = n(81369),
    tG = n(826745),
    tU = n(34595),
    tB = n(470779);
function tK(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: u,
            onSubmit: o,
            onDismiss: c,
            canSubmit: d,
            closing: f,
            onUploadFile: m,
            anchor: h = "chip",
            allowAttachments: g = !0,
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
        } = (0, tU.FM)({ projectId: t, surface: "design", onUploadFile: m }),
        N = i.useRef(null),
        A = (d || j.length > 0) && w && !f,
        C = i.useCallback(() => {
            if (!A) return;
            let e = S();
            o(e.length > 0 ? e : void 0);
        }, [A, S, o]),
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
    let M = i.useRef(null),
        [_, T] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = M.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => T({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let P = _?.height ?? 44,
        R = l.left + 8,
        L = l.top + 8,
        $ = Math.max(n.x, R),
        q = Math.min(Math.max("point" === h ? n.y : n.y + 32 + 4, L), Math.max(L, l.top + l.height - P - 8));
    return (0, a.jsxs)("div", {
        ref: M,
        className: p()(tB.M0, { [tB.ho]: I && !f, [tB.ET]: f }),
        style: { left: $, top: q },
        "data-testid": "conjure-design-compose-bar",
        children: [
            g
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: N,
                              type: "file",
                              multiple: !0,
                              className: tB.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(tO.m, {
                              position: "bottom",
                              text: eS.intl.string(ew.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: tB.tY,
                                  onClick: () => N.current?.click(),
                                  "aria-label": eS.intl.string(ew.default.lgvqSB),
                                  children: (0, a.jsx)(tz.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: tB.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(tG.y, {
                autoFocus: !0,
                rows: 1,
                className: tB.hF,
                value: s,
                placeholder: x ?? ("" === r ? eS.intl.string(ew.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? eS.intl.string(ew.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: f || !g ? void 0 : y,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), C());
                },
            }),
            j.length > 0
                ? (0, a.jsx)("div", {
                      className: tB.ZO,
                      children: j.map((e) => (0, a.jsx)(tU.Nl, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function tH(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function tV(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function tW(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? tH(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = tH(e());
                l((e) => (tV(e, t) ? e : t));
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
var tX = n(876798),
    tZ = n(408278),
    tQ = n(48507),
    tY = n(193885),
    tJ = n(744898),
    t0 = n(803656),
    t1 = n(241326),
    t2 = n(972213),
    t3 = n(661531);
function t4(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function t7(e, t, n) {
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
let t5 = t7("red", t4(t3.A.unsafe_rawColors.RED_400), () => eS.intl.string(ew.default.tvXfjt)),
    t6 = [
        t5,
        t7("yellow", t4(t3.A.unsafe_rawColors.YELLOW_300), () => eS.intl.string(ew.default.FYuaJ1)),
        t7("green", t4(t3.A.unsafe_rawColors.GREEN_360), () => eS.intl.string(ew.default["Vv+paS"])),
        t7("blue", t4(t3.A.unsafe_rawColors.BLUE_345), () => eS.intl.string(ew.default.k9b1QJ)),
        t7("white", t4(t3.A.unsafe_rawColors.WHITE), () => eS.intl.string(ew.default["1sOXwH"])),
    ];
function t8(e) {
    return t6.find((t) => t.id === e) ?? t5;
}
function t9(e) {
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
function ne(e) {
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
function nt(e) {
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
function nn(e) {
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
let nl = es.map((e) => nn(Math.min(16, e + 3))),
    nr = eu.map((e) => nn(Math.min(16, e / 2.5))),
    na = [ew.default.jZtZUr, ew.default.cTQdD0, ew.default.J3ucEg],
    ni = {
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
            label: () => eS.intl.string(ew.default.oIZQbm),
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
            label: () => eS.intl.string(ew.default.ARNVr7),
        },
    };
function ns(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(tO.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: ex.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(tX.k, {
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
function nu(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(tO.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tZ.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function no(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, u] = i.useState(!1),
        o = i.useCallback(() => u(!1), []),
        c = i.useCallback(() => u((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: ex.pr,
        onMouseEnter: () => u(!0),
        onMouseLeave: o,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: ex.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(o),
                  })
                : null,
        ],
    });
}
function nc(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: u, lastShape: o, markerSize: c, eraserSize: d, history: f } = n,
        m = t8(n.colorId),
        h = ni[o],
        g = eS.intl.string(ew.default.hUm825),
        p = eS.intl.string(ew.default.n5IA3a),
        x = eS.intl.string(ew.default.r5dX6t),
        v = eS.intl.string(ew.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: ex.t$,
        children: [
            (0, a.jsx)("div", {
                className: ex.NT,
                children: (0, a.jsx)(ns, {
                    icon: ne,
                    label: eS.intl.string(ew.default.YtyKcM),
                    pressed: "pick" === u,
                    onClick: () => eh(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ex.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": eS.intl.string(ew.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(ns, {
                        icon: t9,
                        label: eS.intl.string(ew.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => eh(t, "move"),
                    }),
                    (0, a.jsx)(ns, {
                        icon: tQ.x,
                        label: eS.intl.string(ew.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => eh(t, "text"),
                    }),
                    (0, a.jsx)(no, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(ns, {
                                icon: tY.V,
                                label: g,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (eh(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            nl.map((n, l) =>
                                (0, a.jsx)(
                                    ns,
                                    {
                                        icon: n,
                                        label: eS.intl.string(na[l]),
                                        pressed: "marker" === u && c === l,
                                        onClick: () => {
                                            (ef(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), K(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(no, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(ns, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === u || "square" === u,
                                onClick: () => {
                                    (eh(t, o), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(ni).map((n) =>
                                (0, a.jsx)(
                                    ns,
                                    {
                                        icon: ni[n].icon,
                                        label: ni[n].label(),
                                        pressed: u === n,
                                        onClick: () => {
                                            (eh(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(no, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(ns, {
                                icon: nt,
                                label: p,
                                pressed: "eraser" === u,
                                onClick: () => {
                                    (eh(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            nr.map((n, l) =>
                                (0, a.jsx)(
                                    ns,
                                    {
                                        icon: n,
                                        label: eS.intl.string(na[l]),
                                        pressed: "eraser" === u && d === l,
                                        onClick: () => {
                                            (ef(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), K(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(no, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(nu, { icon: m.icon, label: v, onClick: e }),
                        children: (e) =>
                            t6.map((n) =>
                                (0, a.jsx)(
                                    ns,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === m.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                ef(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: ex.Gz, role: "separator" }),
                    (0, a.jsx)(nu, {
                        icon: tJ.e,
                        label: eS.intl.string((0, E.isMac)() ? ew.default["j/XmBQ"] : ew.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(nu, {
                        icon: t0.U,
                        label: eS.intl.string((0, E.isMac)() ? ew.default.C7jhpn : ew.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(nu, {
                        icon: t1.TrashIcon,
                        label: eS.intl.string(ew.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: ex.Gz, role: "separator" }),
                    (0, a.jsx)(nu, { icon: t2.XLargeIcon, label: eS.intl.string(ew.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
(n(323874), n(14289), n(35956));
let nd = t3.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function nf(e, t, n) {
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
                    (e.strokeStyle = nd),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function nm(e) {
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
async function nh(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = nm(e),
            r = nm(e);
        if (null == l || null == r) return null;
        return (nf(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let ng = new Map(),
    np = new Map(),
    nx = (0, M.D)(() => ({ byMessageKey: {} }));
function nv(e, t) {
    let { [e]: n, ...l } = nx.getState().byMessageKey;
    nx.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function nj(e, t) {
    null == t ? ng.delete(e) : ng.set(e, t);
}
function nb(e) {
    return ng.get(e)?.() ?? Promise.resolve(null);
}
let ny = { dx: 0, dy: 0 },
    nk = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    nw = 1;
function nS(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        u = ep(s),
        { active: o } = Z(s),
        c = (0, eP.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => em(s);
    }, [s]);
    let d = u?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !o && B(s);
    }, [s, d, o]),
    null == s || null == u || c)
        ? null
        : (0, a.jsx)(nN, { projectId: s, state: u, resolveIframe: r });
}
function nN(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = tW(l),
        [s, u] = i.useState(null),
        [o, c] = i.useState(!1),
        [d, f] = i.useState(0),
        [m, h] = i.useState(null),
        [g, p] = i.useState(ny),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        S = i.useRef(0),
        { tool: N, history: A } = n,
        C = t8(n.colorId),
        I = "pick" !== N,
        E = "marker" === n.tool ? es[n.markerSize] : "eraser" === n.tool ? eu[n.eraserSize] : null,
        M = "move" === N ? (A.present.find((e) => e.id === m) ?? null) : null,
        _ = null != r;
    (i.useLayoutEffect(() => {
        f(v.current?.offsetWidth ?? 0);
    }, [_]),
        i.useLayoutEffect(() => {
            y.current = s;
        }, [s]));
    let T = i.useCallback(async () => {
        let e = l();
        if (null == e) return null;
        let t = await (0, ti.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, t$.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, ti.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (nj(t, T), () => nj(t, null)), [t, T]);
    let P = i.useCallback(
        (e) => {
            ((w.current = null == e || null == r ? null : { x: e.clientX - r.left, y: e.clientY - r.top }),
                0 === S.current &&
                    (S.current = requestAnimationFrame(() => {
                        S.current = 0;
                        let e = k.current,
                            t = w.current;
                        null != e &&
                            (e.toggleAttribute("data-visible", null != t),
                            null != t && (e.style.transform = `translate(${t.x}px, ${t.y}px)`));
                    })));
        },
        [r],
    );
    i.useEffect(() => () => cancelAnimationFrame(S.current), []);
    let R = i.useCallback(() => {
        let e = x.current;
        if (null == e || null == r) return;
        let t = window.devicePixelRatio,
            n = Math.round(r.width * t),
            l = Math.round(r.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let a = e.getContext("2d");
        if (null == a) return;
        (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, n, l), a.setTransform(t, 0, 0, t, 0, 0));
        let i = b.current,
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? ee(e, g.dx, g.dy) : e)),
            u = j.current;
        nf(a, null == u ? s : [...s, u], { width: r.width, height: r.height });
    }, [r, A.present, g]);
    i.useLayoutEffect(R, [R]);
    let L = i.useCallback(
            (e) =>
                null == r ? { x: 0, y: 0 } : { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height },
            [r],
        ),
        $ = i.useCallback(() => {
            let e = y.current;
            if (null == e || null == r) return;
            y.current = null;
            let n = {
                id: `mark-${nw++}`,
                kind: "text",
                color: C.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (en(n, r) && eg(t, { type: "commit", shape: n }), u(null));
        }, [t, C, r]),
        q = i.useCallback(() => {
            ((y.current = null), u(null));
        }, []),
        D = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != y.current) return void $();
                let t = L(e);
                switch (N) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == M ? null : ea(M, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? M
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = er(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => er(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (el(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = er(e.from, n),
                                                                  r = er(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => el(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = er(e.from, n),
                                                                  r = er(e.to, n),
                                                                  a = Math.abs(r.x - t.x) / 2,
                                                                  i = Math.abs(r.y - t.y) / 2;
                                                              if (0 === a || 0 === i) return !1;
                                                              let s = (t.x + r.x) / 2,
                                                                  u = (t.y + r.y) / 2;
                                                              return (
                                                                  Math.abs(
                                                                      Math.hypot((l.x - s) / a, (l.y - u) / i) - 1,
                                                                  ) <=
                                                                  (6 + (e.width * n.width) / 2) / Math.min(a, i)
                                                              );
                                                          }
                                                          case "text": {
                                                              let t = ea(e, n);
                                                              return (
                                                                  l.x >= t.x - 6 &&
                                                                  l.x <= t.x + t.width + 6 &&
                                                                  l.y >= t.y - 6 &&
                                                                  l.y <= t.y + t.height + 6
                                                              );
                                                          }
                                                      }
                                                  })(e[l], t, n)
                                              )
                                                  return e[l];
                                          return null;
                                      })(A.present, t, r);
                        if ((h(a?.id ?? null), null == a)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (b.current = { id: a.id, origin: t }));
                        return;
                    }
                    case "text":
                        u({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!et(A.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nw++}`,
                                kind: "erase",
                                width: eu[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nw++}`,
                                kind: "marker",
                                color: C.value,
                                width: es[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nw++}`,
                                kind: N,
                                color: C.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                R();
            },
            [r, N, C, M, A.present, n.markerSize, n.eraserSize, L, $, R],
        ),
        F = i.useCallback(
            (e) => {
                P(e);
                let t = L(e),
                    n = b.current;
                if (null != n) return void p({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = j.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (j.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (j.current = { ...l, to: t }),
                    R());
            },
            [L, P, R],
        ),
        O = i.useCallback(() => {
            x.current?.removeAttribute("data-dragging");
            let e = b.current;
            if (null != e) {
                ((b.current = null), p(ny), eg(t, { type: "move", id: e.id, dx: g.dx, dy: g.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && en(n, r) ? eg(t, { type: "commit", shape: n }) : R());
        }, [t, r, g, R]),
        z = i.useCallback(() => em(t), [t]),
        G = i.useCallback(() => eg(t, { type: "undo" }), [t]),
        U = i.useCallback(() => eg(t, { type: "redo" }), [t]),
        B = i.useCallback(() => eg(t, { type: "clear" }), [t]),
        K = i.useRef({ tool: N, selected: M, exit: z, undo: G, redo: U });
    if (
        (i.useLayoutEffect(() => {
            K.current = { tool: N, selected: M, exit: z, undo: G, redo: U };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, tq.Cw)((0, tq.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != y.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: a, redo: i } = K.current,
                    s = e.key.toLowerCase();
                if (e.metaKey || e.ctrlKey) {
                    if (e.altKey || ("z" !== s && "y" !== s)) return;
                    (e.preventDefault(), "y" === s || e.shiftKey ? i() : a());
                    return;
                }
                if (e.altKey) return;
                if ("Escape" === e.key) {
                    if ("pick" === n) return;
                    (e.preventDefault(), null != l ? h(null) : r());
                    return;
                }
                if (("Delete" === e.key || "Backspace" === e.key) && null != l) {
                    (e.preventDefault(), eg(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let u = nk[s];
                null != u && (e.preventDefault(), eh(t, u));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (I) return (tD.A.disable(), () => tD.A.enable());
        }, [I]),
        null == r)
    )
        return null;
    let H = Math.max(8, r.left - d - 8),
        V = null == M ? null : ea(null == b.current ? M : ee(M, g.dx, g.dy), r);
    return (0, t$.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: ex.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: ex.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: ex.Ji,
                            "data-tool": N,
                            "data-interactive": I && !o ? "" : void 0,
                            "aria-label": eS.intl.string(ew.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            onPointerDown: D,
                            onPointerEnter: P,
                            onPointerLeave: () => P(null),
                            onPointerMove: F,
                            onPointerUp: O,
                            onPointerCancel: O,
                        }),
                        null == E || o
                            ? null
                            : (0, a.jsx)("div", {
                                  ref: k,
                                  className: ex.V$,
                                  "data-tool": N,
                                  "data-color": C.id,
                                  style: { width: E, height: E },
                                  "aria-hidden": !0,
                              }),
                        null == V
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: ex.r1,
                                  style: { left: V.x, top: V.y, width: V.width, height: V.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: ex.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: ex.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: ex.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: ex.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(tK, {
                          projectId: t,
                          anchor: "point",
                          at: { x: r.left + s.at.x * r.width, y: r.top + s.at.y * r.height },
                          bounds: r,
                          kind: "",
                          placeholder: eS.intl.string(ew.default["8gX1lw"]),
                          label: eS.intl.string(ew.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: s.value,
                          onChange: (e) => u((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: $,
                          onUploadFile: (e) => (0, tF.vX)(t, e),
                          onDismiss: q,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: ex.ej,
                    style: { left: H, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(nc, { projectId: t, state: n, onExit: z, onUndo: G, onRedo: U, onClear: B }),
                }),
            ],
        }),
        document.body,
    );
}
var nA = n(308081),
    nC = n(689175),
    nI = n(683071),
    nE = n(65593),
    nM = n(218394),
    n_ = n(115982),
    nT = n(886540);
function nP(e) {
    return !(0, nT.BL)(e) && !0 !== e.stopRequested;
}
var nR = n(104317),
    nL = n(939249),
    n$ = n(643278),
    nq = n(566424),
    nD = n(683063),
    nF = n(140735),
    nO = n(320448),
    nz = n(138212);
function nG(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: p()(nz.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: p()(nz.wx, null != n && nz.o5, i),
                children: [
                    (0, a.jsx)(o.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var nU = n(148590);
function nB(e) {
    let { children: t } = e;
    return (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nK(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: u,
            beforeBody: o,
            children: c,
            ...d
        } = e,
        f = i.useId(),
        [m, h] = i.useState(!l),
        [g, x] = i.useState(l);
    g !== l && (x(l), h(!l));
    let v = i.useCallback(() => h((e) => !e), []),
        j = m ? tl.a : nO._,
        b = null != n || l;
    return (0, a.jsxs)(nG, {
        ...d,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: nU.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(nL.D, {
                                className: nU.L$,
                                onClick: v,
                                "aria-expanded": m,
                                "aria-controls": f,
                                "aria-label": m ? s : r,
                                children: (0, a.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: m ? void 0 : nU.RG,
        "data-superseded": l ? "true" : void 0,
        children: [o, (0, a.jsx)("div", { id: f, className: p()(nU.rf, u), hidden: !m, children: c })],
    });
}
var nH = n(883646);
let nV = [];
function nW(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: p()(nH.xL, {
            [nH.Vb]: "in_progress" === t,
            [nH.cT]: "completed" === t,
            [nH.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return eS.intl.string(ew.default.KvBdun);
                case "in_progress":
                    return eS.intl.string(ew.default["m5G9+S"]);
                case "unfinished":
                    return eS.intl.string(ew.default.lRpwhD);
                default:
                    return eS.intl.string(ew.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(c.y, {
                type: c.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: nH.Qd,
                itemClassName: nH.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: nH.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: nH.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nX(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : nV), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [u, c] = i.useState(l),
        [d, f] = i.useState(s),
        [m, h] = i.useState(!1);
    d !== s && (f(s), c([...l, ...u.filter((e) => !r.has(e.key))]), 0 === l.length && h(!1));
    let g = u.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => c(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [g, l, n]),
        i.useEffect(() => {
            if (!n || 0 === u.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => h(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, u.length]),
        0 === u.length)
    )
        return null;
    let p = u.slice(0, 3),
        x = u.length - p.length;
    return (0, a.jsxs)("span", {
        className: nH.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    nD.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: nH.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, a.jsx)(o.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: nH.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function nZ(e) {
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
            ((t = (r ?? nV).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? nV),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: nH.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: p()(nH.AS, { [nH.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(nW, { status: n }),
                            (0, a.jsx)(o.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: nH.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: nH.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(nX, { agents: c.get(e.id) ?? nV, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: nH.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(nW, { status: "pending" }),
                          (0, a.jsx)(o.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: nH.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: nH.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nQ(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = eS.intl.formatToPlainString(ew.default["P/I+JW"], { completed: u, total: o }),
        d = eS.intl.formatToPlainString(ew.default["7tzwKB"], { completed: u, total: o });
    return (0, a.jsx)(nK, {
        title: eS.intl.string(ew.default.RtzECX),
        meta: (0, a.jsx)(nB, { children: c }),
        superseded: s,
        showLabel: eS.intl.string(ew.default.RKyN9q),
        hideLabel: eS.intl.string(ew.default.xydHoj),
        className: nH.Nr,
        bodyClassName: nH.rf,
        beforeBody: r && !s ? (0, a.jsx)(nF.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(nZ, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var nY = n(308665),
    nJ = n(59678),
    n0 = n(903847);
function n1(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: u, onJumpToActivity: o } = e,
        c = null != n,
        [d, f] = i.useState(n ?? "top"),
        [m, h] = i.useState(c),
        [g, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(c);
    (b !== c && (y(c), null != n ? (f(n), h(!0)) : (x(!1), j(!1))),
        i.useEffect(() => {
            if (c || !m) return;
            let e = setTimeout(() => h(!1), 150);
            return () => clearTimeout(e);
        }, [c, m]),
        i.useEffect(() => {
            if (!m || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [m, c]));
    let [k, w] = i.useState(!1),
        [S, N] = i.useState(!1),
        [A, C] = i.useState(v);
    (A !== v && (C(v), v ? w(!0) : N(!1)),
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
    return m
        ? (0, a.jsxs)("div", {
              className: n0.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: p()(n0.vK, { [n0.ho]: g && c, [n0.ET]: !c }),
                      children: [
                          null == o
                              ? (0, a.jsx)("ol", {
                                    className: p()(n0.Rk, nJ.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(nq.A, {
                                        glyph: (0, a.jsx)(nY.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(nL.D, {
                                    className: n0.pZ,
                                    onClick: o,
                                    "aria-label": eS.intl.string(ew.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: p()(n0.Rk, nJ.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(nq.A, {
                                            glyph: (0, a.jsx)(nY.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(tO.m, {
                                    text: eS.intl.string(ew.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(nL.D, {
                                        className: n0.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": eS.intl.string(ew.default.RtzECX),
                                        children: (0, a.jsx)(n$.ClipboardListIcon, {
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
                            className: p()(n0.vB, { [n0.pg]: v && S, [n0.ui]: !v }),
                            children: (0, a.jsx)(nQ, {
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
var n2 = n(195880),
    n3 = n(287111),
    n4 = n(16619);
function n7(e) {
    let t = (0, n4.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var n5 = n(736553),
    n6 = n(642785);
async function n8(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, n6.dv)(e),
        i = new n5.u();
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
var n9 = n(890497),
    le = n(103557),
    lt = n(29073),
    ln = n(590077);
function ll(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        u = (function (e, t, n, l, r) {
            let a = n7(e),
                [s, u] = i.useState(null),
                [o, c] = i.useState([]),
                [d, f] = i.useState(t.prompt),
                [h, g] = i.useState(!1),
                [p, x] = i.useState(!1),
                v = i.useRef(new Map()),
                j = i.useRef(!1),
                b = i.useRef(!1),
                y = i.useMemo(() => a.filter((e) => !o.some((t) => t.target.projectId === e.projectId)), [a, o]),
                k = i.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                w = i.useMemo(() => {
                    let e = s ?? k;
                    return y.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, k, y]),
                S = i.useMemo(() => y.filter((e) => w.includes(e.projectId)), [y, w]),
                N = i.useCallback((e) => {
                    u(e.slice(0, 10));
                }, []),
                A = d.trim(),
                C = n && !h && (S.length > 0 ? "" !== A : o.length > 0),
                I = i.useCallback(
                    (t) => {
                        b.current ||
                            ((b.current = !0),
                            g(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, n3.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          eS.intl.formatToPlainString(ew.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = eS.intl.formatToPlainString(ew.default.jZlNst, { targets: l });
                                              return `${r}

${t}`;
                                          }).join("\n\n");
                                      })(t),
                                  ));
                    },
                    [r, e],
                ),
                E = i.useCallback(() => {
                    let t, n;
                    if (!C) return;
                    if (0 === S.length) return void I(o);
                    (g(!0), x(!1));
                    let l =
                        ((t = m.Ay.getProject(e)?.name ?? e),
                        (n = eS.intl.formatToPlainString(ew.default.ScoZLp, { name: t, projectId: e })),
                        `${A}

${n}`);
                    Promise.allSettled(
                        S.map((e) => {
                            let t = v.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, n2.m)() }), v.current.set(e.projectId, t)),
                                n8(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = S.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...o, ...t.map((e) => ({ target: e, prompt: A }))];
                        if (t.length === S.length || j.current) {
                            n.length > 0 && I(n);
                            return;
                        }
                        (c(n), u(S.filter((e) => !t.includes(e)).map((e) => e.projectId)), g(!1), x(!0));
                    });
                }, [C, I, o, e, S, A]),
                M = i.useCallback(() => {
                    ((j.current = !0), o.length > 0 && !h && I(o), l());
                }, [I, o, l, h]);
            return {
                projects: y,
                targetIds: w,
                setTargetIds: N,
                prompt: d,
                setPrompt: f,
                sending: h,
                failed: p,
                canSubmit: C,
                submit: E,
                dismiss: M,
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
        d = `${n.id}-heading`;
    return (0, a.jsxs)("section", {
        className: p()(lt.nd, lt.jx),
        "aria-labelledby": d,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: lt.wx,
                children: [
                    (0, a.jsx)(o.E, {
                        tag: "span",
                        id: d,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: lt.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tZ.K, {
                        icon: tP.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: u.dismiss,
                        "aria-label": eS.intl.string(ew.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ln.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eS.intl.string(ew.default.TbbzW5),
                          })
                        : (0, a.jsx)(n9.Z, {
                              label: eS.intl.string(ew.default["29gr8j"]),
                              placeholder: eS.intl.string(ew.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...u.targetIds],
                              onSelectionChange: u.setTargetIds,
                              disabled: u.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(le.f, {
                        label: eS.intl.string(ew.default.XZNsDA),
                        value: u.prompt,
                        onChange: u.setPrompt,
                        maxLength: 4e3,
                        disabled: u.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: u.failed ? eS.intl.string(ew.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: lt.qr,
                children: (0, a.jsx)("div", {
                    className: lt.zt,
                    children: (0, a.jsx)(x.$, {
                        variant: "primary",
                        size: "sm",
                        text: eS.intl.string(ew.default.gG4j6o),
                        disabled: !u.canSubmit,
                        loading: u.sending,
                        onClick: u.submit,
                    }),
                }),
            }),
        ],
    });
}
var lr = n(47167),
    la = n(734057),
    li = n(994500),
    ls = n(287809),
    lu = n(360047);
function lo(e) {
    return 0 === e.options.length && null == e.input;
}
function lc(e, t, n, l) {
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
let ld = {
    [e5.rbe.GUILD_TEXT]: "text",
    [e5.rbe.GUILD_VOICE]: "voice",
    [e5.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [e5.rbe.GUILD_STAGE_VOICE]: "stage",
    [e5.rbe.GUILD_FORUM]: "forum",
    [e5.rbe.GUILD_MEDIA]: "media",
};
function lf(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = la.A.getChannel(t)?.type) ? void 0 : ld[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = ls.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let lm = { channel: "#", role: "@", user: "@", project: "", server: "" },
    lh = {
        channel: [ew.default["9+dfPT"], ew.default.pGSJqE],
        role: [ew.default["2VkCoD"], ew.default.c8YlX8],
        user: [ew.default.GZIAxl, ew.default["4bptbQ"]],
        project: [ew.default.twlOb6, ew.default.twlOb6],
        server: [ew.default.ZWXDeI, ew.default.ZWXDeI],
    };
function lg(e, t) {
    return eS.intl.string(lh[e][+!!t]);
}
var lp = n(658675),
    lx = n(22231),
    lv = n(123292),
    lj = n(900797),
    lb = n(691885);
function ly(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: u } = e,
        o = i.useMemo(() => lu.Hi.map((e) => ({ id: e, value: e, label: (0, lu.hU)(e) })), []);
    return (0, a.jsx)(lb.l, {
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
var lk = n(344587),
    lw = n(155078);
function lS(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let lN = [];
function lA(e) {
    return !0 !== e.upload ? null : eS.intl.string(e.options.length > 0 ? ew.default.dkzChE : ew.default.ZZ641e);
}
function lC(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function lI(e, t) {
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
var lE = n(548118),
    lM = n(300344),
    l_ = n(614733),
    lT = n(904363),
    lP = n(950902),
    lR = n(136722),
    lL = n(66834),
    l$ = n(808728),
    lq = n(696451),
    lD = n(71393),
    lF = n(488926),
    lO = n(426035),
    lz = n(246338);
let lG = lR.kg(e5.xBc.VIEW_CHANNEL, e5.xBc.SEND_MESSAGES);
var lU = n(384017);
function lB(e) {
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
        return lf(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
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
        className: lU.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, a.jsx)(n9.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(n9.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function lK(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, lM.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: u, onChange: o } = e,
            c =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, f.bG)(
                    [m.Ay],
                    () => {
                        let e = t ? m.Ay.getProject(l) : null;
                        return null == e ? null : (0, lO.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || lq.Ay.isMember(r, n) || lL.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, f.bG)(
                    [l$.Ay, lq.Ay, lD.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = lD.A.getGuild(r)?.safetyAlertsChannelId,
                            l = l$.Ay.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, lz.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && lq.Ay.isMember(r, n))
                            return lF.$3({ permission: lG, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? lR.BY;
                        return lR.X8(s, lG) ? null : i;
                    },
                    [r, n, t, a.channel_filter],
                )),
            d = i.useRef(null),
            h = i.useRef(!1);
        i.useEffect(() => {
            if (!h.current && !u && null != r) {
                if (null == d.current) {
                    if (s.length > 0) h.current = !0;
                    else if (null != c) {
                        var e;
                        ((d.current = c.id),
                            o(((e = []), lf("channel", [c.id], () => (0, lr.m1)(c, ls.default, li.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== d.current ? (h.current = !0) : null == c && ((h.current = !0), o([], r));
            }
        }, [c, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(lB, { ...r, guildId: n, options: s, placeholder: lg("channel", !0 === r.question.multi_select) });
}
function lH(e) {
    let { guildId: t, ...n } = e,
        l = (0, lT.A)(t);
    return (0, a.jsx)(lB, { ...n, guildId: t, options: l, placeholder: lg("role", !0 === n.question.multi_select) });
}
function lV(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, l_.A)(t);
    return (0, a.jsx)(lB, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: lg("user", !0 === n.question.multi_select),
    });
}
function lW(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = n7(t),
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
    return 0 === s.length ? n : (0, a.jsx)(lB, { ...l, options: s, placeholder: lg("project", !1) });
}
function lX(e) {
    let t = e.target;
    (0, tq.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lZ(e) {
    let { fallback: t, ...n } = e,
        l = (0, n4.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(lE.Ay, { guild: e, size: lE.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: lX,
              onMouseUp: lX,
              children: (0, a.jsx)(lB, { ...n, options: r, placeholder: lg("server", !1) }),
          });
}
function lQ(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lP.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(lW, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(lZ, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(lK, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lH, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lV, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lY = n(87221),
    lJ = n(26430),
    l0 = n(750943),
    l1 = n(173936),
    l2 = n(95477),
    l3 = n(256905),
    l4 = n(490707),
    l7 = n(907702);
function l5(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: u, handleError: c } = (0, l4._)(t, n),
        [d, f] = i.useState(null),
        m = null != s && d === s;
    return u
        ? (0, a.jsxs)("span", {
              className: p()(l7.Gt, l7.b6),
              children: [
                  (0, a.jsx)(lY.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(o.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: eS.intl.string(ew.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: p()(l7.Gt, { [l7.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: l7.Sl,
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
function l6(e) {
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
            onRemove: x,
        } = e,
        v = eS.intl.formatToPlainString(ew.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: p()(l7.Vs, { [l7.Q9]: s, [l7.RX]: u }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(nL.D, {
                className: p()(l7.Up, { [l7.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: u ? (null != r.image ? () => m(r) : void 0) : () => f(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": eS.intl.formatToPlainString(ew.default.AQbxhf, { answer: r.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: l7.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(l5, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: l7.Gt }),
                            (0, a.jsx)("span", {
                                className: l7.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(lp.P, { checked: s, disabled: u })
                                    : (0, a.jsx)(tS.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(o.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: l7.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, lw.E)(t) : "")
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
            null != x
                ? (0, a.jsx)("span", {
                      className: l7.B4,
                      children: (0, a.jsx)(tO.m, {
                          text: eS.intl.string(ew.default.HQEXJM),
                          children: (0, a.jsx)(tZ.K, {
                              icon: t1.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: x,
                              disabled: u,
                              "aria-label": eS.intl.string(ew.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: l7.B4,
                        children: (0, a.jsx)(tO.m, {
                            text: eS.intl.string(ew.default["4/eeDD"]),
                            children: (0, a.jsx)(tZ.K, {
                                icon: lJ._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(r),
                                "aria-label": v,
                                tabIndex: c && d ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function l8(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: u, own: o } = e,
        c = !0 === n.multi_select,
        { options: d } = n,
        f = d.length > 4 ? "gallery" : "row",
        m = i.useRef(null),
        h = i.useRef(new Map()),
        [g, x] = i.useState(null),
        v = null != g && d.some((e) => e.id === g) ? g : (d.find((e) => l.includes(e.id)) ?? d[0])?.id,
        j = i.useMemo(() => {
            var e;
            return null == o.image
                ? null
                : ((e = o.image),
                  {
                      id: `own:${e.attachment.id}`,
                      label: eS.intl.string(ew.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [o.image]),
        b = i.useCallback(
            (e) => {
                let n = (null == j ? d : [...d, j]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, tF.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, l3.R)({
                                items: e.map((e, t) => {
                                    let l,
                                        r = h.current.get(n[t].id);
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
            [d, j, t],
        ),
        y = i.useCallback(
            (e, t) => {
                let n = (d.findIndex((t) => t.id === e.id) + t + d.length) % d.length,
                    l = d[n];
                (x(l.id), m.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), c || r || u(l));
            },
            [r, c, u, d],
        );
    return (0, a.jsxs)("div", {
        className: l7.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === d.length && null == j
                ? null
                : (0, a.jsxs)("div", {
                      ref: m,
                      className: p()(l7.fF, "gallery" === f ? l7.nV : l7.nM, { [l7.m3]: c }),
                      role: c ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": f,
                      "data-count": d.length,
                      children: [
                          d.map((e) =>
                              (0, a.jsx)(
                                  l6,
                                  {
                                      projectId: t,
                                      option: e,
                                      multi: c,
                                      selected: l.includes(e.id),
                                      disabled: r,
                                      reachable: s,
                                      tabbable: c || e.id === v,
                                      onPick: (e) => {
                                          (x(e.id), u(e));
                                      },
                                      onView: b,
                                      onArrow: y,
                                      onMeasured: (t) => h.current.set(e.id, t),
                                  },
                                  e.id,
                              ),
                          ),
                          null != j
                              ? (0, a.jsx)(
                                    l6,
                                    {
                                        projectId: t,
                                        option: j,
                                        multi: c,
                                        selected: o.selected,
                                        disabled: r,
                                        reachable: s,
                                        tabbable: !0,
                                        onPick: o.onPick,
                                        onView: b,
                                        onArrow: () => void 0,
                                        onMeasured: (e) => h.current.set(j.id, e),
                                        onRemove: o.onRemove,
                                    },
                                    j.id,
                                )
                              : null,
                      ],
                  }),
            (0, a.jsx)(l9, {
                projectId: t,
                own: o,
                disabled: r,
                reachable: s,
                uploadText: eS.intl.string(/\bicons?\b/i.test(n.question) ? ew.default.qU4WN6 : ew.default.cbMDDB),
            }),
        ],
    });
}
function l9(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        u = i.useRef(null),
        [c, d] = i.useState(!1),
        [f, m] = i.useState(""),
        h = r ? 0 : -1,
        g = n.busy;
    function p() {
        "" !== f.trim() &&
            null == g &&
            n.onLink(f.trim()).then(
                (e) => {
                    e && (d(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, a.jsxs)("div", {
        className: l7.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: l7.QJ,
                children: [
                    (0, a.jsx)(x.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: l0.X,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => u.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    c
                        ? null
                        : (0, a.jsx)(x.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: l1.LinkIcon,
                              text: eS.intl.string(ew.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => d(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: l7.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, n3.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            c
                ? (0, a.jsxs)("div", {
                      className: l7.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: l7.Hs,
                              children: (0, a.jsx)(l2.k, {
                                  label: eS.intl.string(ew.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: eS.intl.string(ew.default.AVhvn8),
                                  value: f,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), p())
                                          : "Escape" === e.key && (e.stopPropagation(), d(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == g && n.error?.source === "link" ? n.error.text : null,
                                  disabled: l,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, a.jsxs)("div", {
                              className: l7.gd,
                              children: [
                                  (0, a.jsx)(x.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eS.intl.string(ew.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === f.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(lv.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: eS.intl.string(ew.default.eXZL4X),
                                      onClick: () => d(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(o.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      "data-conjure-own-image-error": !0,
                      children: n.error.text,
                  })
                : null,
        ],
    });
}
function re(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: u } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(nL.D, {
        className: p()(lU.uK, { [lU.ue]: l, [lU.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": eS.intl.formatToPlainString(d ? ew.default["2p6UFz"] : ew.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, a.jsx)("span", { className: lU.dy, children: (0, a.jsx)(lp.P, { checked: u, disabled: l }) })
                : (0, a.jsx)("span", { className: lU.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lU.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lU.l8,
                        children: (0, a.jsx)(o.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: lU.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, a.jsx)(o.E, {
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
                ? (0, a.jsx)(o.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: lU.rM,
                      children: eS.intl.string(ew.default.zku6r1),
                  })
                : null,
        ],
    });
}
function rt(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return lS(n)
        ? (0, a.jsx)(l8, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: u })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      re,
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
let rn = [],
    rl = [];
function rr(e) {
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
        f = !0 === n.multi_select ? eS.intl.string(ew.default.tE8qbz) : lA(n);
    return (0, a.jsxs)("div", {
        className: p()(lU.Ge, lU.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            null == f
                ? null
                : (0, a.jsx)(o.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: lU.aK,
                      children: f,
                  }),
            (0, a.jsx)(rt, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lI(u, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && lS(n))
                ? null
                : (0, a.jsxs)("div", {
                      className: lU.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lU.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lx.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: p()(lU.Pu, lU.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, a.jsx)("div", {
                      className: lU.$0,
                      children: (0, a.jsx)(lv.Q, {
                          variant: "secondary",
                          textVariant: "text-sm/medium",
                          text: eS.intl.string(ew.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function ra(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: u,
            onBack: c,
            backText: d,
            hideSubmit: f = !1,
            headingLines: m = 5,
        } = e,
        [h, g] = i.useState({}),
        [v, j] = i.useState({}),
        [b, y] = i.useState({}),
        [k, w] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [S, N] = i.useState({}),
        [A, C] = i.useState({}),
        [I, E] = i.useState(!1),
        [M, _] = i.useState(0),
        [T, P] = i.useState(null),
        [R, L] = i.useState(null),
        [$, q] = i.useState(null),
        [D, F] = i.useState(!1),
        O = i.useRef(null),
        [z, G] = i.useState(null),
        U = i.useRef(null),
        B = i.useRef(0),
        K = null == r,
        H = l.questions.length,
        V = Math.min(M, H - 1),
        W = l.questions[V],
        [X, Z] = i.useState({ id: W.id, expanded: !1 }),
        Q = X.id === W.id && X.expanded,
        [Y, J] = i.useState(null),
        ee = v[W.id] ?? "",
        et = !0 === W.multi_select,
        en = lS(W),
        el = et ? eS.intl.string(ew.default.tE8qbz) : lA(W),
        er = et
            ? (b[W.id] ?? rn)
            : ((t = h[W.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : lN),
        ea = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [u, o] = i.useState({}),
                c = eS.intl.string(ew.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                f = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : lC(t[e.id])),
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
                        if (u) return lI(h, f(i));
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
                                    null != l && (0, tF.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
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
                                    ((0, tF.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    o((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (m || !lC(e[d])) return e;
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
                                                error: { source: "upload", text: eS.intl.string(ew.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, tF.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : eS.intl.string(ew.default.l79PMc),
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
        })(n, h, g),
        ei = ea.imageFor(W.id),
        es = ea.selectedFor(W),
        { text: eu, phase: eo } = (0, lk.Q)(W.question),
        ec = eu === W.question,
        ed = ec && Y?.id === W.id && Y.truncated;
    i.useLayoutEffect(() => {
        if (null == z || Q || !ec) return;
        function e() {
            if (null == z) return;
            let e = z.scrollHeight > z.clientHeight + 1;
            J((t) => (t?.id === W.id && t.truncated === e ? t : { id: W.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(z), () => t.disconnect());
    }, [ec, z, W.id, Q]);
    let ef = eS.intl.string(Q ? eS.t.iTcuma : eS.t.dcl9MQ),
        em = i.useCallback(
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
                                              return (0, lu.Ol)(n, e, l);
                                          }),
                                      ).then(a));
                        }
                    })(n, l, e, A, r);
            },
            [l, A, r, n],
        ),
        eh = i.useCallback(
            (e, t) => {
                B.current += 1;
                let n = B.current;
                (P({ direction: t, moves: n }),
                    L({ question: W, draft: ee, selected: er, ownImage: ei, ownSelected: es, direction: t, moves: n }),
                    F(!0),
                    _(e));
            },
            [ee, ei, es, W, er],
        ),
        eg = i.useCallback(() => {
            let e = O.current,
                t = U.current;
            null != e && null != t && q({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = O.current,
            t = U.current;
        if (null == e || null == t) return;
        eg();
        let n = new ResizeObserver(eg);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [eg]);
    let ep = T?.moves;
    i.useEffect(() => {
        if (null == ep) return;
        let e = setTimeout(() => L(null), 400),
            t = setTimeout(() => F(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ep]);
    let ex = i.useCallback(
            (e) => {
                if (K) return;
                let t = { ...h, [W.id]: e };
                g(t);
                let n =
                    V < l.questions.length - 1
                        ? V + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, V);
                null == n ? em(t) : eh(n, n < V ? "back" : "forward");
            },
            [h, l, K, V, W.id, em, eh],
        ),
        ev = i.useCallback(() => {
            K || 0 === V || eh(V - 1, "back");
        }, [K, V, eh]),
        ej = 0 !== V || K ? void 0 : c,
        eb = (V > 0 && !K) || null != ej,
        ey = i.useCallback(
            (e) => {
                j((e) => ({ ...e, [W.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                en ? K || g((e) => ({ ...e, [W.id]: t })) : ex(t);
            },
            [K, en, W.id, ex],
        ),
        ek = i.useCallback(() => {
            (j((e) => ({ ...e, [W.id]: "" })), ex({ kind: "custom", text: eS.intl.string(ew.default.zxSq2q) }));
        }, [W.id, ex]),
        { multiPartFor: eN } = ea,
        eA = i.useMemo(() => (et ? lc(W, er, ee, eN(W)) : null), [ee, et, eN, W, er]),
        eC = k[W.id] ?? rl,
        eI = i.useMemo(() => {
            var e, t;
            let n;
            return null != W.input
                ? ((e = W.input),
                  (t = S[W.id]),
                  (n = ee.trim()),
                  {
                      kind: "entities",
                      entities: eC,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eC.map((t) => (t.name.startsWith(lm[e]) ? t.name : `${lm[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [ee, S, eC, W.id, W.input]),
        eE = i.useCallback(
            (e, t) => {
                (w((t) => ({ ...t, [W.id]: e })), N((e) => ({ ...e, [W.id]: t })));
            },
            [W.id],
        ),
        eM = i.useCallback(() => E(!0), []),
        e_ = i.useCallback(() => E(!1), []),
        eT = ea.controlsFor(W, K),
        eP = i.useMemo(() => {
            var e;
            let t;
            return (
                (e = h[W.id]),
                null ==
                (t = (function (e, t) {
                    if (!0 !== e.upload || !0 === e.multi_select || null == t) return null;
                    if ("option" === t.kind || "image" === t.kind) return t;
                    if ("multi" !== t.kind) return null;
                    if (null != t.attachment)
                        return { kind: "image", attachment: t.attachment, text: eS.intl.string(ew.default.wTsP5l) };
                    let n = e.options.find((e) => {
                        let { id: n } = e;
                        return t.optionIds.includes(n);
                    });
                    return null != n ? { kind: "option", optionId: n.id, text: n.label } : null;
                })(W, e))
                    ? null
                    : "" === ee.trim()
                      ? e?.kind === "multi"
                          ? t
                          : null
                      : "option" === t.kind
                        ? lc(W, [t.optionId], ee)
                        : lc(W, [], ee, t)
            );
        }, [h, ee, W]),
        eR = i.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eI, eA ?? eP, ee),
            [ee, eA, eP, eI],
        ),
        eL = i.useCallback(() => {
            null != eR && ex(eR);
        }, [eR, ex]),
        [e$, eq] = i.useState(!1),
        [eD, eF] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eq(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eO = i.useCallback(() => {
            null != s && (eF(!0), setTimeout(s, 150));
        }, [s]),
        ez = eR ?? (null == eI && null == eA ? (h[W.id] ?? null) : null),
        eG = null != ez && !K,
        eU = V === H - 1,
        eB = i.useCallback(() => {
            null == ez || K || ex(ez);
        }, [K, ez, ex]),
        eK = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tq.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tq.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tq.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eb
                            ? (e.preventDefault(), (ej ?? ev)())
                            : "ArrowRight" === e.key && eG && (e.preventDefault(), eB())));
            },
            [ej, eb, eG, ev, eB],
        ),
        eH =
            en && !0 !== W.upload
                ? null
                : (0, a.jsxs)("div", {
                      className: lU.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lU.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lx.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, a.jsx)(tG.y, {
                              value: ee,
                              onChange: (e) => {
                                  let { value: t } = e.currentTarget;
                                  j((e) => ({ ...e, [W.id]: t }));
                              },
                              onKeyDown: (e) => {
                                  "Enter" !== e.key ||
                                      e.shiftKey ||
                                      e.nativeEvent.isComposing ||
                                      (e.preventDefault(), eL());
                              },
                              placeholder: eS.intl.string(lo(W) ? ew.default.yLN1x6 : ew.default["tOC+tn"]),
                              "aria-label": eS.intl.formatToPlainString(ew.default["4JeYPB"], { question: W.question }),
                              disabled: K,
                              rows: 1,
                              className: lU.Pu,
                              "data-conjure-clarification-other": W.id,
                          }),
                      ],
                  });
    return (0, a.jsxs)("section", {
        className: p()(lU.$O, { [lU.fI]: e$ && !eD, [lU.Oh]: eD }),
        role: "dialog",
        "aria-label": W.question,
        "data-conjure-clarification": l.id,
        "data-state": K ? "inert" : "open",
        "data-question-expanded": Q ? "true" : void 0,
        "data-picker-open": I && !D ? "true" : void 0,
        "data-step": V,
        tabIndex: -1,
        onKeyDown: eK,
        children: [
            (0, a.jsxs)("div", {
                className: lU.rf,
                style: null == $ ? void 0 : { height: $.heading + $.rows },
                "data-moving": D ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: O,
                        className: lU.wx,
                        children: [
                            (0, a.jsx)(o.E, {
                                ref: G,
                                tag: "span",
                                id: `${W.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: Q ? void 0 : m,
                                className: p()(lt.TK, lU.R_, { [lU.TB]: "exit" === eo, [lU.JU]: "enter" === eo }),
                                children: eu,
                            }),
                            ed || Q
                                ? (0, a.jsx)("div", {
                                      className: lt.Q7,
                                      children: (0, a.jsx)(tO.m, {
                                          text: ef,
                                          children: (0, a.jsx)(tZ.K, {
                                              icon: Q ? lj.t : tl.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => Z({ id: W.id, expanded: !Q }),
                                              "aria-label": ef,
                                              "aria-controls": `${W.id}-label`,
                                              "aria-expanded": Q,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(nL.D, {
                                      className: p()(lt.gb, lt.Q7),
                                      onClick: eO,
                                      "aria-label": eS.intl.string(ew.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(tP.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: lU.Cg,
                        style: null == $ ? void 0 : { insetBlockStart: $.heading },
                        children: (0, a.jsxs)("div", {
                            className: lU.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: U,
                                    className: lU.Ge,
                                    role: "group",
                                    "aria-labelledby": `${W.id}-label`,
                                    "data-direction": T?.direction,
                                    "data-parity": null == T ? void 0 : T.moves % 2,
                                    children: [
                                        null == el
                                            ? null
                                            : (0, a.jsx)(o.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: lU.aK,
                                                  children: el,
                                              }),
                                        (0, a.jsx)(rt, {
                                            projectId: n,
                                            question: W,
                                            selected: er,
                                            disabled: K,
                                            onPick: (e) =>
                                                et
                                                    ? y((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [W.id]:
                                                                  ((n = t[W.id] ?? rn),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  W.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ey(e),
                                            own: eT,
                                        }),
                                        null != W.input
                                            ? (0, a.jsx)(lQ, {
                                                  projectId: n,
                                                  question: W,
                                                  value: eC,
                                                  disabled: K,
                                                  onChange: eE,
                                                  onFocus: eM,
                                                  onBlur: e_,
                                                  fallback: !1 === W.allow_custom ? eH : null,
                                              })
                                            : null,
                                        !0 === W.link && eC.length > 0 && null == A[W.id]
                                            ? (0, a.jsx)("div", {
                                                  className: lU.X_,
                                                  children: (0, a.jsx)(lv.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: eS.intl.string(ew.default.eCzCxC),
                                                      disabled: K,
                                                      onClick: () => C((e) => ({ ...e, [W.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === W.link && eC.length > 0 && null != A[W.id]
                                            ? (0, a.jsxs)("div", {
                                                  className: lU.$y,
                                                  onFocus: eM,
                                                  onBlur: e_,
                                                  children: [
                                                      (0, a.jsx)(o.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: eS.intl.string(ew.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(ly, {
                                                          label: eS.intl.string(ew.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: A[W.id] ?? "auto",
                                                          disabled: K,
                                                          onChange: (e) => C((t) => ({ ...t, [W.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        null != W.note
                                            ? (0, a.jsx)(o.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: lU.aK,
                                                  children: W.note,
                                              })
                                            : null,
                                        !1 === W.allow_custom ? null : eH,
                                        !0 === W.upload
                                            ? (0, a.jsx)("div", {
                                                  className: lU.$0,
                                                  children: (0, a.jsx)(lv.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: eS.intl.string(ew.default.zxSq2q),
                                                      disabled: K,
                                                      onClick: ek,
                                                      "data-conjure-no-image": !0,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                null == R
                                    ? null
                                    : (0, a.jsx)(
                                          rr,
                                          {
                                              projectId: n,
                                              question: R.question,
                                              draft: R.draft,
                                              selected: R.selected,
                                              ownImage: R.ownImage,
                                              ownSelected: R.ownSelected,
                                              direction: R.direction,
                                              disabled: K,
                                          },
                                          R.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            H > 1 || et || en || null != W.input || null != c || lo(W)
                ? (0, a.jsxs)("div", {
                      className: lt.qr,
                      children: [
                          (0, a.jsx)(o.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  H > 1
                                      ? eS.intl.formatToPlainString(ew.default.yzYUjq, { index: V + 1, total: H })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: lt.zt,
                              children: [
                                  eb
                                      ? (0, a.jsx)(lv.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: d ?? eS.intl.string(ew.default.Pk5lfA),
                                            onClick: ej ?? ev,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  f
                                      ? null
                                      : (0, a.jsx)(x.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eU
                                                ? (u ?? eS.intl.string(eS.t.geKm7t))
                                                : eS.intl.string(ew.default.w1nRmT),
                                            disabled: !eG,
                                            onClick: eB,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": eU ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var ri = n(557744),
    rs = n(223347),
    ru = n(894443),
    ro = n(525530),
    rc = n(245179),
    rd = n(708679);
function rf(e) {
    return (0, f.bG)([m.Ay], () => m.Ay.getProject(e)?.install_scope_setup != null, [e]);
}
let rm = "scope-setup:q0",
    rh = `${rm}:0`,
    rg = `${rm}:1`;
var rp = n(715924);
let rx = [];
function rv() {}
function rj(e) {
    let { projectId: t, card: n } = e,
        l = i.useId(),
        [r] = n.clarification.questions,
        [s, u] = i.useState(r.default_entities ?? rx),
        { onPickServer: c, onBack: d } = n,
        f = s[0]?.id;
    return (0, a.jsxs)("section", {
        className: p()(lt.nd, lt.jx),
        "aria-labelledby": l,
        "data-conjure-scope-server-card": !0,
        children: [
            (0, a.jsxs)("div", {
                className: rp.wx,
                children: [
                    (0, a.jsx)(o.E, {
                        tag: "span",
                        id: l,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: eS.intl.string(ew.default.ickKBI),
                    }),
                    (0, a.jsx)(o.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: eS.intl.string(ew.default.OyM4SV),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: rp.Qs,
                children: [
                    (0, a.jsx)(lQ, {
                        projectId: t,
                        question: r,
                        value: s,
                        disabled: null == c,
                        onChange: u,
                        onFocus: rv,
                        onBlur: rv,
                    }),
                    null != r.note
                        ? (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
            (0, a.jsxs)("div", {
                className: rp.qr,
                children: [
                    (0, a.jsx)(x.$, {
                        variant: "primary",
                        size: "sm",
                        text: eS.intl.string(ew.default.PTIP7V),
                        disabled: null == f || null == c,
                        onClick: () => {
                            null != f && c?.(f);
                        },
                    }),
                    null != d
                        ? (0, a.jsx)(lv.Q, {
                              variant: "secondary",
                              textVariant: "text-sm/medium",
                              text: eS.intl.string(eS.t["ETE/oC"]),
                              onClick: d,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function rb(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let t = (0, f.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                n = (0, n4.z9)("ConjureScopeSetupCard"),
                [l, r] = i.useState(null),
                [a, s] = i.useState(!1),
                [u, o] = i.useState(null),
                c = t?.install_scope_setup,
                d = "server" === l || (null == l && "choose_server" === c),
                h = t?.guild_id,
                g = i.useMemo(() => {
                    var t;
                    return d
                        ? ((t = h ?? (0, rd.EP)(e)),
                          {
                              id: n.length > 0 ? "server-setup" : "server-setup-empty",
                              questions: [
                                  {
                                      id: "server-setup:q0",
                                      question: eS.intl.string(n.length > 0 ? ew.default.ZWXDeI : ew.default["u5+Qhu"]),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options:
                                          n.length > 0 ? [] : [{ id: rh, label: eS.intl.string(ew.default.qLYOpH) }],
                                      ...(0, rd.XU)(n, t),
                                  },
                              ],
                          })
                        : {
                              id: "scope-setup",
                              questions: [
                                  {
                                      id: rm,
                                      question: eS.intl.string(ew.default.ickKBI),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: [
                                          {
                                              id: rh,
                                              label: eS.intl.string(ew.default.qLYOpH),
                                              detail: eS.intl.string(ew.default.QSKvUE),
                                          },
                                          {
                                              id: rg,
                                              label: eS.intl.string(ew.default.QV5C7b),
                                              detail: eS.intl.string(ew.default["ZzHR4/"]),
                                          },
                                      ],
                                  },
                              ],
                          };
                }, [d, n, h, e]);
            if (null == c) return null;
            if (null == t || !(0, m.PV)(t))
                return { clarification: (0, rd.YI)(g), readOnly: !0, hideSubmit: !0, failure: null };
            async function p(t, n) {
                (s(!0), o(null));
                try {
                    await (0, rd.JN)(e, t, n);
                } catch (e) {
                    (s(!1), o(null != n && 403 === e.status ? "server" : "failed"));
                }
            }
            return {
                clarification: g,
                readOnly: !1,
                onSubmit: a
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0];
                          null != n && (n.option_ids.includes(rg) ? r("server") : p("user", null));
                      },
                submitText: eS.intl.string(eS.t["cY+Oob"]),
                onBack: d && !a ? () => r("scope") : void 0,
                hideSubmit: !1,
                serverStep: d && n.length > 0,
                onPickServer: a ? void 0 : (e) => p("guild", e),
                failure: null == u ? null : eS.intl.string("server" === u ? ew.default["XXKd+7"] : ew.default.jNVZ3e),
            };
        })(t);
    return null == n
        ? null
        : n.readOnly
          ? (0, a.jsx)(ra, { projectId: t, clarification: n.clarification, hideSubmit: !0 })
          : (0, a.jsxs)("div", {
                children: [
                    !0 === n.serverStep
                        ? (0, a.jsx)(rj, { projectId: t, card: n }, n.clarification.id)
                        : (0, a.jsx)(
                              ra,
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
                        ? (0, a.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: n.failure,
                          })
                        : null,
                ],
            });
}
function ry(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let { projectId: t, clarification: n, offer: l, onKept: r } = e,
                { scope: a, feature: s } = l,
                u = (0, f.bG)([m.Ay], () => m.Ay.getProject(t), [t]),
                o = (0, n4.z9)("ConjureScopeSwitchCard"),
                [c, d] = i.useState(!1),
                [h, g] = i.useState(null),
                p = u?.guild_id,
                x = i.useMemo(() => {
                    let [e] = n.questions,
                        t = eS.intl.formatToPlainString("guild" === a ? ew.default["jh/iy+"] : ew.default.d7jxeT, {
                            feature: s,
                        });
                    return {
                        id: n.id,
                        questions: [
                            "guild" === a
                                ? { ...e, question: t, allow_custom: !1, ...(0, rd.XU)(o, p) }
                                : {
                                      ...e,
                                      question: t,
                                      allow_custom: !1,
                                      options: [{ id: `${e.id}:0`, label: eS.intl.string(ew.default.TVRkVh) }],
                                  },
                        ],
                    };
                }, [n, s, o, p, a]);
            if (null == u || !(0, m.PV)(u))
                return { clarification: (0, rd.YI)(x), readOnly: !0, hideSubmit: !0, failure: null };
            async function v(e) {
                (d(!0), g(null));
                try {
                    await (0, rd.yN)(t, n.id, a, e);
                } catch (e) {
                    (d(!1), g(409 === e.status ? "locked" : "failed"));
                }
            }
            return {
                clarification: x,
                readOnly: !1,
                onSubmit: c
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0]?.entities?.[0];
                          "user" === a ? v(null) : null != n && v(n.id);
                      },
                submitText: eS.intl.string("guild" === a ? ew.default.Ua7yKM : ew.default.TVRkVh),
                onBack: c
                    ? void 0
                    : function () {
                          (g(null), (0, rd.RW)(t) ? r() : g("failed"));
                      },
                backText: eS.intl.string("guild" === a ? ew.default["4WnIqd"] : ew.default["am+p7p"]),
                hideSubmit: "user" === a,
                failure: null == h ? null : eS.intl.string("locked" === h ? ew.default.irUT0N : ew.default.jNVZ3e),
            };
        })(e);
    return n.readOnly
        ? (0, a.jsx)(
              ra,
              { projectId: t, clarification: n.clarification, headingLines: 1, hideSubmit: !0 },
              n.clarification.id,
          )
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(
                      ra,
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
                      ? (0, a.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: n.failure,
                        })
                      : null,
              ],
          });
}
var rk = n(442331),
    rw = n(564963);
let rS = new Set(["select", "channel", "role", "user"]);
function rN(e, t) {
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
function rA(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
let rC = new Set(),
    rI = new Set();
function rE(e) {
    return (
        rI.add(e),
        () => {
            rI.delete(e);
        }
    );
}
function rM() {
    return i.useSyncExternalStore(rE, () => rC);
}
function r_(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, nT.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function rT(e, t, n) {
    if (!n || null == t) return !1;
    let l = rA(e, t);
    return l.length > 0 && !rN({ keys: l }, t);
}
var rP = n(628284),
    rR = n(782973),
    rL = n(1665),
    r$ = n(11120),
    rq = n(411236);
function rD(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: c,
            summary: d,
            markSaved: m,
        } = (function (e, t, n) {
            let l = rM(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!rC.has(n)) for (let e of ((rC = new Set([...rC, n])), rI)) e();
                    } else a(!0);
                }, [n]),
                o = (0, f.bG)([rk.A], () => rT(t, rk.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, f.bG)([rc.A], () => null != n && r_(rc.A.getMessages(e)).has(n), [e, n]),
                summary: (0, f.yK)(
                    [rk.A, la.A],
                    () => {
                        var n;
                        let l = rk.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => la.A.getChannel(e)?.name ?? null),
                              rA(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: eS.intl.formatToPlainString(ew.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return eS.intl.string(ew.default.CJq1rY);
                                                      case "checkbox":
                                                          return eS.intl.string(
                                                              !0 === t ? ew.default.nXtpn3 : ew.default["0vfaMW"],
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
                                                                      : eS.intl.string(ew.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? eS.intl.string(ew.default.nEv677)
                                                              : eS.intl.string(ew.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return eS.intl.string(ew.default.Fw9G9A);
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
        h = null == r && u;
    if (c && !h)
        return (0, a.jsx)("article", {
            className: rq.Mk,
            children: (0, a.jsx)(o.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: eS.intl.string(ew.default["+uXDk+"]),
            }),
        });
    if (h)
        return (0, a.jsxs)("article", {
            className: rq.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: rq.Ol,
                    children: [
                        (0, a.jsx)(rP.y, { size: "xs", color: t3.A.colors.ICON_FEEDBACK_POSITIVE, "aria-hidden": !0 }),
                        (0, a.jsx)(o.E, {
                            variant: "text-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: eS.intl.string(ew.default.AxBLLy),
                        }),
                    ],
                }),
                d.length > 0
                    ? (0, a.jsx)(o.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: d.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let g = n.keys?.length === 1 && n.keys[0] === rR.B,
        v = null != n.note && "" !== n.note ? n.note : g ? null : eS.intl.string(ew.default.XuOf5s);
    return (0, a.jsx)(r$.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: s,
        onSaved: m,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: l, submit: i } = e;
            async function s(e) {
                (e.preventDefault(), await i());
            }
            let u = (0, a.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: eS.intl.string(ew.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: rq.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(o.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: eS.intl.string(ew.default["jZjP+I"]),
                          }),
                          null != v
                              ? (0, a.jsx)(rL.A, { text: v, variant: "text-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: rq.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: p()(lt.nd, lt.jx),
                      "aria-label": eS.intl.string(ew.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: lt.wx,
                              children: [
                                  (0, a.jsx)(o.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: lt.TK,
                                      children: eS.intl.string(ew.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(nL.D, {
                                      className: p()(lt.gb, lt.Q7),
                                      onClick: r,
                                      "aria-label": eS.intl.string(ew.default["iq+Pte"]),
                                      children: (0, a.jsx)(tP.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: rq.DQ,
                              children: [
                                  null != v
                                      ? (0, a.jsx)(rL.A, { text: v, variant: "text-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: lt.qr,
                              children: [
                                  (0, a.jsx)(o.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: rq.xE,
                                      children: eS.intl.string(ew.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: lt.zt,
                                      children: [
                                          (0, a.jsx)(x.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: eS.intl.string(ew.default["9J3OG8"]),
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
var rF = n(975571),
    rO = n(427123);
let rz = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var rG = n(874421),
    rU = n(932111),
    rB = n(940874),
    rK = n(404373),
    rH = n(89222);
function rV(e) {
    return "" !== rH.A.getDraft(e).trim();
}
var rW = n(29080);
function rX(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: u } = e,
        o = (0, n_.B4)(r),
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
        })({ hasAttachments: u, showsClosingMessage: h, endsOnStreamedMessage: (0, n_.Lf)(r) }),
    };
}
var rZ = n(62617),
    rQ = n(780171);
let rY = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rJ = {
        snail: () => ew.default.ABeVsS,
        goat: () => ew.default.dhXay8,
        frog: () => ew.default.SHeweG,
        bunny: () => ew.default.FytFE1,
        cat: () => ew.default["5c+sHs"],
        caterpillar: () => ew.default["/FYcne"],
        butterfly: () => ew.default["Ib/AxK"],
        dog: () => ew.default.zDjBR1,
        spider: () => ew.default["6sxyrN"],
        bee: () => ew.default.cVtefg,
        bot: () => ew.default.MjCw0v,
    },
    r0 = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, rZ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rZ.Z)(),
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
                        () => (0, rZ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rZ.Z)(),
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
                        () => (0, rZ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rZ.Z)(),
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
                        () => (0, rZ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rZ.Z)(),
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
                        () => (0, rZ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rZ.Z)(),
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
                        () => (0, rZ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rZ.Z)(),
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
                        () => (0, rZ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rZ.Z)(),
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
                        () => (0, rZ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rZ.Z)(),
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
                        () => (0, rZ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rZ.Z)(),
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
                        () => (0, rZ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rZ.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: rQ.u, tint: "var(--illo-purple-40)" },
    };
function r1(e) {
    return { ...r0[e], name: eS.intl.string(rJ[e]()) };
}
function r2(e) {
    return rY.includes(e) ? r1(e) : void 0;
}
function r3(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rY.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rY[(t + n) % rY.length]);
            }),
            l
        );
    })(e))
        t.set(n, r1(l));
    return t;
}
var r4 = n(615839);
function r7(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : eS.intl.string(ew.default.KcFvbo);
}
var r5 = n(60160),
    r6 = n(16634);
function r8(e) {
    let t = (0, n_.SY)(e.steps);
    return null != t ? (0, n_.WQ)(t) : r7(e.task);
}
function r9(e) {
    let t = r3(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? r2(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: r7(e.task),
                      todoId: e.task.todoId,
                      line: r8(e),
                  },
              ];
    });
}
function ae(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, n_.SY)(n.steps),
        d = o
            ? r8(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(r7(e));
                  switch (e.status) {
                      case "failed":
                          return eS.intl.formatToPlainString(ew.default.YrVgOf, { task: t });
                      case "cancelled":
                          return eS.intl.formatToPlainString(ew.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return eS.intl.formatToPlainString(ew.default["++9woZ"], {
                                  task: t,
                                  duration: (0, r4.MB)(e.durationMs),
                              });
                          return eS.intl.formatToPlainString(ew.default.nmI9Uh, { task: t });
                      default:
                          return eS.intl.formatToPlainString(ew.default.nmI9Uh, { task: t });
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
                                    className: nJ.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            r6.A,
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
                                      className: nJ.iq,
                                      children: (0, a.jsx)(r5.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(nq.A, {
        glyph: (0, a.jsx)(nD.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: r7(u),
            position: "left",
            children: (0, a.jsx)("span", {
                className: nJ.nC,
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
var at = n(998445),
    an = n(643210),
    al = n(648127),
    ar = n(372795),
    aa = n(163897);
let ai = "conjure-browser-viewer";
function as(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, f.yK)(
            [an.A],
            () =>
                n.flatMap((e) => {
                    let n = an.A.getTab(t, e);
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
        className: aa.kR,
        "aria-label": eS.intl.string(ew.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(au, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function au(e) {
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
        c = (0, eP.useHasModalOpen)(ai),
        [d, f] = i.useState(!1),
        m = i.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, al.i)(l.session);
    return (0, a.jsxs)(nL.D, {
        innerRef: s,
        className: p()(aa.Nr, h && aa.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, eP.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: ai },
                )
            );
        },
        "aria-label": eS.intl.formatToPlainString(ew.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: aa.Gt,
                children: [
                    (0, a.jsx)(ar.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: aa.Ji,
                        "aria-label": eS.intl.formatToPlainString(ew.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: aa.qf,
                              children: (0, a.jsx)(at.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: aa.HS,
                              children: (0, a.jsx)(o.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: eS.intl.string(ew.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: aa.pG,
                children: [
                    (0, a.jsx)("span", { className: p()(aa.W9, h && aa.oM) }),
                    (0, a.jsx)(o.E, {
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
var ao = n(268409);
let ac = new WeakMap(),
    ad = new WeakMap();
function af(e) {
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
        u = (0, f.yK)(
            [rc.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = ac.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = ad.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), ad.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (ac.set(e, n), n);
                })(rc.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: ao.h, children: (0, a.jsx)(as, { projectId: t, sessionIds: u }) });
}
var am = n(469393);
function ah(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, eR.lG)(t.authored_at);
    return (0, a.jsx)(nG, {
        title: eS.intl.string(ew.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: am.r,
            children: [
                (0, a.jsxs)("div", {
                    className: am.z,
                    children: [
                        (0, a.jsx)(o.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(o.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(x.$, {
                          variant: "secondary",
                          size: "sm",
                          text: eS.intl.string(ew.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var ag = n(493490),
    ap = n(17742);
let ax = [];
function av(e) {
    let t = (0, f.bG)([ag.A], () => (null != e ? ag.A.getCaptures(e) : ax)),
        n = (0, f.bG)([ag.A], () => (null != e ? ag.A.getSelectedCapture(e) : null)),
        [l, r] = i.useState(null),
        a = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        i.useEffect(() => {
            if (null == e || null == n || null == a) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, ap._F)(e, n);
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
var aj = n(714917),
    ab = n(463660),
    ay = n(970211);
function ak(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, f.bG)([aj.A], () => (null != e ? aj.A.getBackground(e) : null)),
                l = n?.imageEtag ?? null,
                [r, a] = i.useState(null),
                [s, u] = i.useState(null),
                [o, c] = i.useState(!1);
            (i.useEffect(() => {
                if (null != n) return;
                let e = setTimeout(() => c(!0), 2e3);
                return () => clearTimeout(e);
            }, [n]),
                i.useEffect(() => {
                    if (null == e || null == l) return;
                    let n = !1;
                    return (
                        (async function (e, l) {
                            let r;
                            try {
                                r = await (0, ab.Mg)(e, l);
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
            let d = null != l ? r : null,
                m = null == l || (null != d && d === s) ? t : d,
                h = i.useCallback(() => {
                    m === d && u(d);
                }, [m, d]);
            return { src: null == e || null != n || o ? m : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp"),
        u = av(n ? t : null);
    return null != u.selected
        ? null != u.src
            ? (0, a.jsx)("img", { className: ay.F1, src: u.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, a.jsx)("img", {
                className: p()(ay.LO, { [ay.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var aw = n(155718);
function aS(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let aN = ["command", "user_command", "message_command", "message"],
    aA = new Set([aw.kc.CHAT, aw.kc.USER, aw.kc.MESSAGE]);
function aC(e) {
    return e.type ?? aw.kc.CHAT;
}
function aI(e) {
    return aA.has(aC(e));
}
function aE(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function aM(e, t) {
    let n = aN.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !aE(e)), ...n.filter(aE)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || aE(r) || l.push(r);
    }
    return aN.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function a_(e, t, n) {
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
    let s = e.commands.filter(aI).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (aC(e)) {
                    case aw.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case aw.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        u = "messages" === t ? [] : s.filter(aE),
        o = a.length > 0 ? aM([...a, ...u], !0) : aM("both" === t ? [...s, i] : s, !1);
    return o.length > 0 ? o : [r];
}
var aT = n(377941),
    aP = n.n(aT);
function aR(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function aL(e) {
    return e.type === aw.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === aw.kc.USER || e.type === aw.kc.MESSAGE
          ? ""
          : "/";
}
let a$ = {
        [eG.q7.APP_CHANNEL]: ew.default["3/aHX6"],
        [eG.q7.VOICE_CHANNEL]: ew.default["3/aHX6"],
        [eG.q7.ACTIVITY]: ew.default["3/aHX6"],
        [eG.q7.OVERLAY]: ew.default["rPpf5/"],
        [eG.q7.PROFILE_WIDGET]: null,
        [eG.q7.AUTOMOD]: null,
        [eG.q7.BOT]: null,
        [eG.q7.APPLICATION_COMMANDS]: null,
    },
    aq = [eG.q7.ACTIVITY, eG.q7.APP_CHANNEL, eG.q7.VOICE_CHANNEL, eG.q7.OVERLAY];
function aD(e) {
    return aq.find((t) => aS(e, t)) ?? null;
}
let aF = 1920 / 1018;
function aO(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let az = aO(24, 1018),
    aG = aO(24, 1920);
function aU(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var aB = n(176999),
    aK = (((l = {}).IMAGE = "image"), l),
    aH = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    aV = n(598748),
    aW = n(773669);
let aX = [],
    aZ = {},
    aQ = {};
function aY(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aJ(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aK.IMAGE,
        visibility: aH.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var a0 = n(127258),
    a1 = n(803306),
    a2 = n(587895),
    a3 = n(320095),
    a4 = n(963852),
    a7 = n(95701),
    a5 = n(889227),
    a6 = n(427262);
let a8 = new a7.nA({ id: "1337", guild_id: "1337", type: e5.rbe.GUILD_TEXT, name: "preview" });
function a9(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, f.bG)([ls.default], () => ls.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, a1.nj)(new a5.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let ie = /^@\S+/;
var it = n(775602);
let il = [ew.default["3eTjcV"], ew.default.l3j5nS];
var ir = n(97808),
    ia = n(778712),
    ii = n(486020),
    is = n(46054),
    iu = n(200700);
let io = {
        alert: { label: () => eS.intl.string(ew.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => eS.intl.string(ew.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => eS.intl.string(ew.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => eS.intl.string(ew.default.RGzFNK), blockedStyle: !1 },
    },
    ic = {
        blocked: { label: () => eS.intl.string(ew.default.YdnZ8q), tone: "red" },
        alert: { label: () => eS.intl.string(ew.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => eS.intl.string(ew.default.RGzFNK), tone: "green" },
    },
    id = ["blocked", "alert", "allowed"],
    im = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function ih(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : eS.intl.formatToPlainString(eS.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, iu.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? eS.intl.formatToPlainString(eS.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? eS.intl.formatToPlainString(eS.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? eS.intl.formatToPlainString(eS.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? eS.intl.formatToPlainString(eS.t.opVZ9q, { mins: n / 60 })
                                      : eS.intl.formatToPlainString(eS.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var ig = n(984097),
    ip = n(13673);
let ix = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function iv(e) {
    let { example: t } = e,
        n = ih(t);
    return null == n
        ? null
        : (0, a.jsx)(o.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let ij = ["glazedgamer", "sprinkles", "donutking"];
function ib(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = io[n.outcome];
    return (0, a.jsxs)("li", {
        className: p()(ig.nM, { [p()(ig.HV, ip.DX)]: s }),
        children: [
            (0, a.jsx)(nF.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: ig.my,
                children: (0, a.jsx)(ir.eu, {
                    src: (0, ii.AE)(void 0, void 0),
                    size: ia._3.SIZE_24,
                    "aria-label": eS.intl.string(ew.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ig.fw,
                children: [
                    (0, a.jsx)(o.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), is.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(iv, { example: n }) : null,
                ],
            }),
        ],
    });
}
function iy(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = ic[t.section],
        s = new Set(t.examples.map(ih)),
        u = 1 === s.size ? t.examples.map(ih)[0] : null;
    return (0, a.jsxs)("div", {
        className: ig.UO,
        children: [
            (0, a.jsxs)("div", {
                className: ig.RZ,
                children: [
                    (0, a.jsx)(o.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: ix[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(o.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: ig.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(o.E, {
                                      variant: "text-xs/semibold",
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
                className: ig.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(ib, { example: e, username: ij[(n + t) % ij.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function ik(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            id
                .map((e) => ({ section: e, examples: t.filter((t) => im[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: ig.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: ig.hk,
                      children: (0, a.jsx)(o.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    iy,
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
var iw = n(276293),
    iS = n(460905),
    iN = n(110384),
    iA = n(365199),
    iC = n(633018),
    iI = n(763754),
    iE = n(217424),
    iM = n(194085),
    i_ = n(20851),
    iT = n(692508),
    iP = n(798819);
function iR(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: p()(iP.item, iP.labelContainer, iP.colorDefault, {
            [iP.focused]: !0 === t.highlighted,
            [iP.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: iP.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: iP.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: p()(iP.label, iT.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: iP.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: iP.icon }),
                  })
                : null,
        ],
    });
}
function iL(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: p()(t, iT.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: eS.intl.string(eS.t["5IEsGx"]), icon: iN.W, muted: !0 }
                : { label: eS.intl.string(eS.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: p()(iP.menu, iT.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: iP.scroller,
            children: [
                (0, a.jsx)(iR, { item: s }),
                (0, a.jsx)("div", { className: iP.separator }),
                (0, a.jsx)(iR, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var i$ = n(381941);
function iq() {}
function iD(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        c,
        d,
        h,
        g,
        x,
        { projectId: v, exchanges: j } = e,
        {
            items: b,
            botIcon: y,
            appIconSrc: k,
        } = ((t = (0, f.bG)([ls.default], () => ls.default.getCurrentUser())),
        (n = (0, f.bG)([m.Ay], () => m.Ay.getProject(v))),
        (l = n?.application_id),
        (r = (0, f.bG)([a2.A], () => a2.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? eS.intl.string(ew.default.JEYq8M)),
        (u = (0, f.bG)([ls.default], () => (null != l ? ls.default.getUser(l) : void 0), [l])),
        (d = a9("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (h = c ? u : d),
        (g = a9("31338", eS.intl.string(ew.default["9iAOsw"]), { discriminator: "0003" })),
        (x = a9("31339", (0, a6.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == x || null == h || null == g
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
                                      i = (0, a3.rh)({
                                          ...(0, a4.Ay)({
                                              channelId: a8.id,
                                              content: e,
                                              author: t,
                                              type: l ?? e5.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: e5.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: a0.G.APPLICATION_COMMAND,
                                                        user: (0, a4.Vi)(s),
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
                                              messageType: e5.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: e5.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(ie, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${u.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${o.username}`).join(`<@${o.id}>`)), i);
                                  }
                              return c;
                          })(
                              j,
                              { bot: h, currentUser: t, viewer: x, member: g },
                              {
                                  targetMessage: eS.intl.string(ew.default["y+QYes"]),
                                  memberMessage: eS.intl.string(ew.default.BUTRDc),
                              },
                          ),
                [j, h, t, x, g],
            ),
            botIcon: r,
            appIconSrc: r ?? h?.getAvatarURL(void 0, 80),
        });
    if (0 === b.length) return null;
    let w = a8.name;
    return (0, a.jsxs)("div", {
        className: iT.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: iT.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(iw.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(o.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: w }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: p()(iT.TE, `group-spacing-${i$.ES}`),
                children: b.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? iT.Rz : void 0,
                            children: [
                                (0, a.jsx)(i_.A, {
                                    message: n,
                                    channel: a8,
                                    author: (0, iI.FT)(n.author, a8),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (y ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(iE.A, { message: n, channel: a8 }) : void 0,
                                    usernameClassName: r?.target === "user" ? iT.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: iT.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(iM.Ay, {
                                              children: [
                                                  (0, a.jsx)(iM.qv, {
                                                      label: eS.intl.string(eS.t.lfIHs4),
                                                      icon: iS.n,
                                                      onClick: iq,
                                                  }),
                                                  (0, a.jsx)(iM.qv, {
                                                      label: eS.intl.string(eS.t["5IEsGx"]),
                                                      icon: iN.W,
                                                      onClick: iq,
                                                  }),
                                                  (0, a.jsx)(iM.qv, {
                                                      label: eS.intl.string(eS.t["UKOtz+"]),
                                                      icon: iA.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: iq,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? iT.ET : iT.je,
                                          inert: !0,
                                          children: (0, a.jsx)(iL, {
                                              target: r.target,
                                              commandName: r.commandName,
                                              appIconSrc: k,
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
                className: iT.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(iC.k, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: eS.intl.formatToPlainString(eS.t["8lzR/R"], { channel: `#${w}` }),
                    }),
                ],
            }),
        ],
    });
}
var iF = n(332173);
function iO(e) {
    let { name: t } = e;
    return (0, a.jsxs)(iF.A, { children: ["/", t] });
}
function iz(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(aP());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(iO, { name: e.name }, e.start) : e.text));
}
n(827669);
var iG = n(687966),
    iU = n(757789),
    iB = n(26137),
    iK = n(430392),
    iH = n(231483),
    iV = n(323384);
let iW = {
    frame: ew.default.Z2bt4u,
    overlay_widget: ew.default["0mGHfU"],
    user_widget: ew.default.Jipr29,
    bot: ew.default.EbvC13,
    commands: ew.default.EbvC13,
    automod: ew.default.tiMvei,
};
var iX = n(573634);
let iZ = {
    frame: iG.GameControllerIcon,
    overlay_widget: iU.V,
    user_widget: iB.r,
    bot: iK.RobotIcon,
    commands: iK.RobotIcon,
    automod: iH.ShieldIcon,
};
function iQ(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: p()(iX.e7, l),
        children: [(0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function iY(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: iX.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: iX.jw,
                    children: (0, a.jsx)(o.E, {
                        variant: "text-sm/normal",
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
function iJ(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: iX.lj,
        children: [
            (0, a.jsx)("span", {
                className: p()(iX.Vo, iX.G),
                children: (0, a.jsx)(iV.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: iX.aV,
                children: [
                    (0, a.jsx)(o.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function i0(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: iX.wZ,
        children: t.map((e, t) => {
            let n = aL(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(iO, { name: e.name })
                                : (0, a.jsx)(iF.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function i1(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: iX.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: iX.Aw,
                    children: (0, a.jsx)(o.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(iz, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function i2(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        u = s ? iV.k : iZ[t.kind],
        c = eS.intl.string(s ? ew.default.BM4Ymz : iW[t.kind]);
    return (0, a.jsxs)("section", {
        className: iX.s9,
        "aria-label": c,
        children: [
            (0, a.jsxs)("div", {
                className: iX.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: iX.Vo,
                        children: (0, a.jsx)(u, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(o.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: c }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: iX.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(o.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(iz, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(i1, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: iX.PG, children: r }) : null,
        ],
    });
}
function i3(e) {
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
                                let n = t.map(aP()).join("|");
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
        className: iX.aN,
        children: [
            (0, a.jsxs)("div", {
                className: iX.Lv,
                children: [(0, a.jsx)(k.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            f.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: iX.yF, role: "separator" }),
                            (0, a.jsx)(i2, {
                                experience: t,
                                bullets: n,
                                preview: c(t),
                                blocks: (function (e, t, n) {
                                    let l = n
                                        ? [
                                              {
                                                  key: "permissions",
                                                  caption: ew.default["2UbW6r"],
                                                  names: e.bot_permissions,
                                              },
                                              {
                                                  key: "intents",
                                                  caption: ew.default["7TKfpj"],
                                                  names: e.privileged_intents,
                                              },
                                          ]
                                              .flatMap((e) => {
                                                  let { key: t, caption: n, names: l } = e;
                                                  return null != l && l.length > 0
                                                      ? [{ key: t, caption: eS.intl.string(n), labels: l.map(aR) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, a.jsx)(
                                                      iQ,
                                                      { caption: n, children: (0, a.jsx)(iY, { labels: l }) },
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
                                                        let n = eS.intl.string(ew.default["6/3tGY"]),
                                                            l = [];
                                                        if (t.surfaces.includes(eG.q7.APP_CHANNEL)) {
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
                                                            launchableAnywhere: t.surfaces.includes(eG.q7.ACTIVITY),
                                                            usableInVoice: t.surfaces.includes(eG.q7.VOICE_CHANNEL),
                                                        };
                                                    })(e, t);
                                                    if (null == n) return [];
                                                    let l = [];
                                                    n.channels.length > 0 &&
                                                        l.push(
                                                            (0, a.jsx)(
                                                                iQ,
                                                                {
                                                                    className: iX.Iw,
                                                                    caption: eS.intl.formatToPlainString(
                                                                        ew.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, a.jsx)("ul", {
                                                                        className: iX.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, a.jsx)(
                                                                                iJ,
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
                                                            ? [eS.intl.string(ew.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [eS.intl.string(ew.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, a.jsx)(
                                                                    iQ,
                                                                    {
                                                                        caption: eS.intl.string(ew.default.MY6UGJ),
                                                                        children: (0, a.jsx)(iY, { labels: r }),
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
                                                              iQ,
                                                              {
                                                                  caption: eS.intl.string(eS.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(i0, { commands: e.commands }),
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
var i4 = n(633075),
    i7 = n(946356),
    i5 = n(58216),
    i6 = n(27399);
function i8(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, f.bG)([ls.default], () => ls.default.getCurrentUser()),
        r = i.useMemo(() => new i4.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: i6.H,
              children: (0, a.jsx)(i7.A.Overlay, {
                  className: i6.w,
                  children: (0, a.jsx)(i5.A, {
                      user: l,
                      widget: r,
                      allowEditing: !1,
                      disableInteraction: !0,
                      interactiveLinks: !0,
                      disableCTA: !0,
                      rendererProps: n,
                  }),
              }),
          });
}
var i9 = n(443863);
function se(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        u =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: aO(i.width * t, 1920), height: aO(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ak, { projectId: n }),
            (0, a.jsx)("div", {
                className: i9.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": az,
                    "--custom-conjure-plan-overlay-widget-end": aG,
                    "--custom-conjure-plan-overlay-widget-width": u.width,
                    "--custom-conjure-plan-overlay-widget-height": u.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: i9.M7, onError: s }),
            }),
        ],
    });
}
function st(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, tF.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, l3.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function sn(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: u } = (0, l4._)(t, r);
    return s
        ? null
        : (0, a.jsx)(nL.D, {
              className: i9.xX,
              onClick: () => st(t, [{ id: r, alt: l }], 0),
              "aria-label": eS.intl.string(ew.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: i9.sN, onError: u }),
          });
}
function sl(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: u, handleError: c } = (0, l4._)(t, r),
        [d, m] = i.useState(!1),
        [h, g] = i.useState(!1),
        {
            slide: x,
            labels: v,
            pick: j,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, f.bG)([it.Ay], () => it.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, u] = i.useState(!1),
                o = t && !l && !n && !s,
                c = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!o) return;
                let e = setInterval(() => a((e) => (e + 1) % il.length), 4e3);
                return () => clearInterval(e);
            }, [o]);
            let d = i.useCallback((e) => {
                    (u(!0), a(e));
                }, []),
                m = i.useCallback(() => d(c), [d, c]);
            return { slide: c, labels: il.map((e) => eS.intl.string(e)), pick: d, hold: m };
        })({ ready: null != s, paused: d || h });
    if (u) return null;
    let b = eS.intl.string(ew.default.mjryK4),
        y = eS.intl.string(ew.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: i9.RM,
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, a.jsx)(nL.D, {
                className: p()(i9.xX, i9.nj, { [i9.qQ]: 0 === x }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(aF) },
                onClick: () => st(t, [{ id: r, alt: b }], 0),
                "aria-label": eS.intl.string(ew.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === x
                          ? (0, a.jsx)("img", { src: s, alt: b, className: i9.Ac, onError: c })
                          : (0, a.jsx)(se, { projectId: t, src: s, alt: y, size: l, onError: c }),
            }),
            (0, a.jsx)("div", {
                className: i9._4,
                role: "group",
                "aria-label": eS.intl.string(ew.default.EH36X6),
                children: v.map((e, t) =>
                    (0, a.jsx)(
                        nL.D,
                        {
                            className: p()(i9.c, { [i9.Cw]: x === t }),
                            "aria-pressed": x === t,
                            onClick: () => j(t),
                            children: (0, a.jsx)(o.E, {
                                variant: "text-xs/medium",
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
function sr(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: u } = (0, l4._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(nL.D, {
                  className: i9.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: i9.rA, onError: u }),
              }),
          });
}
function sa(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: eS.intl.formatToPlainString(ew.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: i9.Op,
              children: (0, a.jsxs)("div", {
                  className: i9.uW,
                  children: [
                      (0, a.jsx)(o.E, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: eS.intl.string(ew.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: i9.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(sr, { projectId: t, id: r, alt: i, onOpen: () => st(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function si(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        c,
        d,
        h,
        g,
        p,
        { projectId: v, proposal: j, version: b, onApprove: y } = e,
        { botExchanges: k } =
            ((n = aS(j, eG.q7.APPLICATION_COMMANDS)),
            (l =
                aS(j, eG.q7.BOT) || n
                    ? null != j.bot
                        ? j.bot.interaction
                        : n && j.commands.some(aI)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : a_(j, l, {
                              message: eS.intl.string(ew.default.J7qggf),
                              reply: eS.intl.string(ew.default.nqYtiy),
                              event: eS.intl.string(ew.default["05lU9W"]),
                          }),
                [j, l],
            )),
            { botInteraction: l, botExchanges: r }),
        w = (function (e, t) {
            let { widget_config: n, widget_preview: l = aQ } = t,
                r = (0, f.bG)([aW.default], () => aW.default.locale),
                a = (0, f.bG)([m.Ay], () => {
                    let t = m.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(aZ);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, tF.PK)(e, l.id).then(
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
                                                          ...aY(n),
                                                          ...(null != n.fallback ? { fallback: aY(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = aB.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[aV.m.WIDGET_TOP] || null == i[aV.m.WIDGET_BOTTOM]
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
                                                                    type: aB.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: aB.oG.NUMBER, value: a })
                                                                : (r[e] = { type: aB.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aJ),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: aX,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(v, j),
        S = b?.superseded === !0,
        N = j.what_changed?.trim() ?? "",
        A =
            ((t = j.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === aL(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        C =
            ((u =
                null == (s = aD(j))
                    ? null
                    : (j.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (d = null != (c = j.design_image) && c.id !== aU(j)?.id ? c : null),
            (h = aU(j)),
            (g =
                j.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "frame" === t;
                })?.id ?? u),
            (p =
                j.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "overlay_widget" === t;
                })?.id ?? u),
            {
                ui: null != d && null != g ? { experienceId: g, design: d } : null,
                overlay:
                    null != h && null != p ? { experienceId: p, design: h, size: eB(j.overlay_widget ?? null) } : null,
            }),
        I = i.useMemo(
            () =>
                j.commands.some(aI)
                    ? a_({ ...j, bot: void 0 }, "commands", {
                          message: eS.intl.string(ew.default.J7qggf),
                          reply: eS.intl.string(ew.default.nqYtiy),
                          event: eS.intl.string(ew.default["05lU9W"]),
                      })
                    : [],
            [j],
        ),
        E = (0, f.bG)([m.Ay], () => m.Ay.getProject(v)?.name, [v]),
        M =
            S && null != b
                ? eS.intl.formatToPlainString(ew.default.YZ3qJs, { version: b.version })
                : eS.intl.string(ew.default["3b6e7o"]),
        _ = S ? (0, a.jsx)(nB, { children: eS.intl.string(ew.default.hF2c41) }) : null;
    return (0, a.jsxs)(nK, {
        title: M,
        meta: _,
        superseded: S,
        showLabel: eS.intl.string(ew.default.yD8EJS),
        hideLabel: eS.intl.string(ew.default.nSPGNb),
        bodyClassName: i9.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: i9.Qs,
                children: (0, a.jsx)(i3, {
                    appName: E ?? j.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(o.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(iz, { text: j.summary, commandNames: A }),
                            }),
                            (0, a.jsx)(sa, { projectId: v, proposal: j }),
                            "" !== N
                                ? (0, a.jsxs)("section", {
                                      className: i9.uW,
                                      children: [
                                          (0, a.jsx)(o.E, {
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: eS.intl.string(ew.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(o.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(iz, { text: N, commandNames: A }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    proposal: j,
                    renderPreview: function (e) {
                        switch (e.kind) {
                            case "frame":
                            case "overlay_widget": {
                                let t,
                                    n =
                                        e.id === C.ui?.experienceId
                                            ? (0, a.jsx)(sn, {
                                                  projectId: v,
                                                  design: C.ui.design,
                                                  alt: eS.intl.string(
                                                      null == (t = aD(j)) ? ew.default["3/aHX6"] : a$[t],
                                                  ),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, a.jsx)(sl, {
                                                  projectId: v,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != w ? (0, a.jsx)(i8, { ...w }) : null;
                            case "automod":
                                return null != j.automod && j.automod.examples.length > 0
                                    ? (0, a.jsx)(ik, { automod: j.automod })
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
                                        (r = l.some((e) => "command" === e.kind || aE(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, k, I);
                                return t.length > 0 ? (0, a.jsx)(iD, { projectId: v, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: A,
                }),
            }),
            null == y || S
                ? null
                : (0, a.jsxs)("div", {
                      className: i9.qr,
                      children: [
                          (0, a.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: eS.intl.string(ew.default["6S+wRM"]),
                              onClick: y,
                          }),
                          (0, a.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: eS.intl.string(ew.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var ss = n(331322),
    su = n(289565);
function so(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: su.m, children: n })
        : (0, a.jsxs)("div", {
              className: su.Z,
              children: [
                  n,
                  (0, a.jsx)(tO.m, {
                      text: eS.intl.string(eS.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tZ.K, {
                          "aria-label": eS.intl.string(eS.t.WAI6xu),
                          icon: tP.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function sc(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function sd(e, t) {
    return null != e && sc(t, e.status);
}
let sf = new WeakMap();
var sm = n(175841),
    sh = n(27232),
    sg = n(505930),
    sp = n(506774);
let sx = "conjurePublishRatings",
    sv = [1, 2, 3, 4, 5],
    sj = {
        1: ew.default.GhbsGA,
        2: ew.default.cm0nwU,
        3: ew.default.kGvlh2,
        4: ew.default.dVBSUg,
        5: ew.default.DKlgF7,
    };
function sb(e) {
    return eS.intl.string(sj[e]);
}
let sy = new Set(),
    sk = 0;
function sw() {
    return sp.w.get(sx) ?? {};
}
function sS(e, t) {
    return sw()[e]?.[t] ?? null;
}
function sN(e) {
    return (sy.add(e), () => sy.delete(e));
}
function sA(e) {
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, h.Fz)(e, n);
                },
            };
        })(t),
        o = eS.intl.string(ew.default.IqkF07);
    return (0, a.jsx)(tw.a, {
        ...n,
        title: o,
        actions: [
            {
                variant: "primary",
                text: eS.intl.string(ew.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (u(), n.onClose());
                },
            },
        ],
        children: (0, a.jsx)(le.f, {
            label: o,
            hideLabel: !0,
            placeholder: eS.intl.string(ew.default.HMGKAV),
            value: l,
            onChange: r,
            rows: 4,
            maxLength: 256,
            showRemainingCharacterCount: !0,
        }),
    });
}
var sC = n(54100);
function sI(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: sC.mo,
        role: "status",
        children: [
            (0, a.jsx)(sm.SparklesIcon, { size: "xs", color: "currentColor", className: sC.dQ, "aria-hidden": !0 }),
            (0, a.jsx)(o.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children:
                    t <= 2
                        ? eS.intl.string(ew.default["nIc9/M"])
                        : 3 === t
                          ? eS.intl.string(ew.default.ausj8U)
                          : eS.intl.string(ew.default.HilSjw),
            }),
        ],
    });
}
function sE(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: u } = (function (e) {
            let { projectId: t, turnId: n, cta: l, status: r } = e;
            return (
                i.useSyncExternalStore(sN, () => sk),
                {
                    rating: sS(t, n),
                    rate(e) {
                        let a = (function (e) {
                            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
                            if (null != sS(t, n)) return null;
                            let i = {
                                projectId: t,
                                turnId: n,
                                rating: l,
                                publishReason: r.reason ?? "first_publish",
                                surface: a?.surface ?? r.surface,
                            };
                            (0, h.gw)(i);
                            let s = sw();
                            return (sp.w.set(sx, { ...s, [t]: { ...s[t], [n]: l } }), sk++, sy.forEach((e) => e()), i);
                        })({ projectId: t, turnId: n, rating: e, cta: l, status: r });
                        return null != a && e <= 2 ? a : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r }),
        [c, d] = i.useState(null),
        [f, m] = i.useState(null),
        [g, x] = i.useState(!1),
        v = i.useId(),
        j = i.useId(),
        b = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => x(!1), 420);
            return () => clearTimeout(e);
        }, [g]),
        null != s && !g)
    )
        return (0, a.jsx)(sI, { rating: s });
    let y = null != s,
        k = y ? s : (f ?? c),
        w = y || (null == f && null != c);
    function S(e) {
        if (y) return;
        (d(e), m(null), x(!0));
        let t = u(e);
        null != t && (0, eP.openModal)((e) => (0, a.jsx)(sA, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: sC.nM,
        onMouseLeave: () => m(null),
        children: [
            (0, a.jsxs)("span", {
                className: sC.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(o.E, {
                        id: j,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: p()(sC.Pf, { [sC.KH]: null == k }),
                        children: eS.intl.string(ew.default.mTV326),
                    }),
                    sv.map((e) =>
                        (0, a.jsx)(
                            o.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: p()(sC.Pf, { [sC.KH]: k === e }),
                                children: sb(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": j,
                className: sC.uf,
                children: sv.map((e) => {
                    let t = null != k && e <= k,
                        n = t ? sh.StarIcon : sg.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: sC.uK,
                            onMouseEnter: () => {
                                y || m(e);
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: v,
                                    value: e,
                                    checked: !1,
                                    onChange: () => {
                                        b.current ? d(e) : S(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((b.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), S(e)));
                                    },
                                    onKeyUp: () => {
                                        b.current = !1;
                                    },
                                    className: sC.hF,
                                    "aria-label": eS.intl.formatToPlainString(ew.default.NU7Dex, {
                                        rating: e,
                                        label: sb(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: p()(sC.d4, { [sC.cO]: t, [sC.Ng]: t && w }),
                                        children: (0, a.jsx)(n, {
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
function sM(e) {
    let { projectId: t, publish: n } = e,
        l = tM(t, n);
    return (0, a.jsx)(x.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function s_(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, tj.Ay)(t);
    return null != r && sd(r, l)
        ? (0, a.jsx)(so, {
              children: (0, a.jsxs)(ss.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(sM, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, a.jsx)(o.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null != n ? (0, a.jsx)(sE, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var sT = n(303345),
    sP = n(44255),
    sR = n(416473),
    sL = n(289830);
function s$(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, f.bG)(
                    [m.Ay],
                    () => {
                        let t = m.Ay.getProject(e);
                        return null != t && (0, m.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                o = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, sR.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof sT.A ? e.message : eS.intl.string(ew.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [c] = i.useState(() => Date.now()),
                d =
                    t.next_run_at > c
                        ? eS.intl.formatToPlainString(ew.default.orZDqY, { time: (0, sP.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, sP.lD)(t.trigger),
                firstPublish: d,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? o : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(nG, {
        title: eS.intl.string(ew.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: sL.r,
            children: [
                (0, a.jsxs)("div", {
                    className: sL.z,
                    children: [
                        (0, a.jsx)(o.E, { variant: "text-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(o.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: eS.intl.string(ew.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(o.E, {
                                  variant: "text-sm/normal",
                                  role: "status",
                                  children: eS.intl.string(ew.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(o.E, {
                                  variant: "text-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, a.jsx)(x.$, {
                          variant: "secondary",
                          size: "sm",
                          text: eS.intl.string(ew.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var sq = n(989271);
function sD(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(nL.D, {
        className: p()(sq.nM, { [sq.f1]: s, [sq.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": eS.intl.formatToPlainString(ew.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: sq.jo,
                children: [
                    n
                        ? (0, a.jsx)(v.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sq.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(o.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: sq.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(o.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function sF(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        u = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(nG, {
        title: eS.intl.string(ew.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                sD,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : u },
                e.id,
            ),
        ),
    });
}
var sO = n(530557),
    sz = n(872162),
    sG = n(202723);
function sU(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: u } = e,
        c = i.useCallback(() => {
            (0, eP.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        d = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: sO.R })), [r.fields]),
        f = (0, rw.bB)(l, s),
        m = p()(sG.Lo, { [sG.jY]: f });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
                  children: (0, a.jsx)(o.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: eS.intl.string(ew.default.CTxtdV),
                  }),
              },
              s,
          )
        : "inactive" === s
          ? (0, a.jsxs)(
                "article",
                {
                    className: m,
                    children: [
                        (0, a.jsx)(o.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: eS.intl.string(ew.default.HCQvpO),
                        }),
                        (0, a.jsx)(sz.C, { label: eS.intl.string(ew.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: sG.Lo,
                      children: (0, a.jsx)(sz.C, { label: eS.intl.string(ew.default.HCQvpO), size: "xs", items: d }),
                  },
                  s,
              )
            : "received" === s
              ? (0, a.jsxs)(
                    "article",
                    {
                        className: m,
                        children: [
                            (0, a.jsxs)("div", {
                                className: sG.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: sG.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(rP.y, {
                                            size: "xs",
                                            color: t3.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(o.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: eS.intl.string(ew.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(o.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                selectable: !0,
                                children: r.fields
                                    .map((e) => e.label)
                                    .map((e) =>
                                        eS.intl.formatToPlainString(ew.default["Z+FC3j"], {
                                            label: e,
                                            value: eS.intl.string(ew.default.CJq1rY),
                                        }),
                                    )
                                    .join(" \xb7 "),
                            }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: sG.Lo,
                    children: [
                        (0, a.jsx)(o.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: eS.intl.string(null != u ? ew.default.O0QIqj : ew.default.HCQvpO),
                        }),
                        (0, a.jsx)(rL.A, {
                            text: null != r.note && "" !== r.note ? r.note : eS.intl.string(ew.default.MPGSHL),
                            variant: "text-sm/normal",
                            color: "text-default",
                        }),
                        (0, a.jsx)(sz.C, { label: eS.intl.string(ew.default.HCQvpO), size: "xs", items: d }),
                        (0, a.jsx)("div", {
                            className: sG.sq,
                            children: (0, a.jsx)(x.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: eS.intl.string(ew.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var sB = n(919790),
    sK = n(908492),
    sH = n(971824),
    sV = n(162052),
    sW = n(165648);
function sX(e) {
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
        x = i.useMemo(() => (0, n_.Jf)(n, l), [n, l]),
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
            className: nJ.pj,
            "data-live": !1,
            children: (0, a.jsx)(nq.A, {
                glyph: (0, a.jsx)(rW.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: eS.intl.string(ew.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = m ? ((0, n_.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = r3(k.map((e) => e.taskId)),
        S = !g && (l || k.some((e) => "running" === e.task.status)),
        N = r9(k);
    return (0, a.jsxs)("ol", {
        className: nJ.pj,
        "data-live": S,
        children: [
            (0, a.jsx)(nR.Ay, {
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
                let l = null != e.task.helperMark ? r2(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          ae,
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
            (0, a.jsx)(af, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: nJ.YO,
                      children: (0, a.jsx)(nQ, { todos: b, provisional: d, agents: N, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function sZ(e) {
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
            settingsAskId: x,
            publishCta: v,
            turnId: j,
            onPickIdea: b,
            pickedIdeaIds: y,
            onApprovePlan: k,
            sideReply: w = !1,
            sideReplyAcknowledges: S,
            hoistedProse: N = !1,
            hoistedAttachmentsHost: A,
            restoreProposal: C,
            onRestoreProposal: I,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: M = !1,
        } = e,
        _ = i.useMemo(
            () => rX({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: T, lastStreamedMessage: P, showsClosingMessage: R, closingContent: L } = _,
        $ = (N ? A : void 0) ?? _.attachmentsHost,
        q = R && !N,
        D = null == c ? null : (0, a.jsx)(sB.A, { projectId: t, attachments: c }),
        F = null == D ? null : (0, a.jsx)("div", { className: nJ.MT, children: D }),
        O = w
            ? (0, a.jsx)(o.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return eS.intl.string(ew.default.Mv5OmK);
                          case "queued":
                              return eS.intl.string(ew.default["Po/2mi"]);
                          case "restarting":
                              return eS.intl.string(ew.default.Vj0woh);
                          default:
                              return eS.intl.string(ew.default.gY3L8p);
                      }
                  })(S),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: nJ.ue,
        children: [
            T.length > 0 && !N
                ? (0, a.jsx)("ol", {
                      className: nJ.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: nJ.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: sW.PT,
                                          children: (0, sK.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === $ && e === P ? F : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(si, { projectId: t, proposal: r, version: s, onApprove: k })
                : q
                  ? (0, a.jsxs)("div", {
                        className: p()(nJ.ky, sV.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: p()(sW.PT, nJ.cW),
                                children: (0, sK.U)(L, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === $ ? F : null,
                            O,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: p()(nJ.ky, nJ.k1, sV.XR, { [sH.O]: null != m && "open" === h }),
                      children: (0, a.jsx)(sU, {
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
                      className: p()(nJ.ky, nJ.k1, sV.XR),
                      children: (0, a.jsx)(rD, { projectId: t, request: g, askId: x }),
                  })
                : null,
            "standalone" !== $ && ("closing" !== $ || q) ? null : D,
            null != v ? (0, a.jsx)(s_, { projectId: t, turnId: j ?? null, cta: v }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(sF, { ideas: u, pickedIdeaIds: y, onPick: b }) : null,
            null != C ? (0, a.jsx)(ah, { proposal: C, onRestore: I }) : null,
            null != E ? (0, a.jsx)(s$, { projectId: t, proposal: E, current: M }) : null,
            q ? null : O,
        ],
    });
}
var sQ = n(864970),
    sY = n(146806),
    sJ = n(475358),
    s0 = n(783977),
    s1 = n(559647),
    s2 = n(655098),
    s3 = n(234320),
    s4 = n(191023),
    s7 = n(285796),
    s5 = n(922329),
    s6 = n(153171);
function s8(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(s5.p, {
        name: eS.intl.string(ew.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: ex.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(s4.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: ex.OY,
                    children: (0, a.jsx)(lx.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(o.E, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: eS.intl.string(ew.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: s6.o1,
            onClick: () => {
                ef(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": eS.intl.string(ew.default.N852dj),
            children: (0, a.jsx)(s7.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function s9(e) {
    let { send: t } = e;
    return (0, a.jsxs)(s5.p, {
        compact: !0,
        name: eS.intl.string(ew.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(o.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: eS.intl.string(ew.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: s6.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(lv.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: eS.intl.string(ew.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var ue = n(587157),
    ut = n(347111),
    un = n(120234),
    ul = n(901173),
    ur = n(161431),
    ua = n(280450),
    ui = n(503275),
    us = n(957071),
    uu = n(659280),
    uo = n(351906),
    uc = n(407653),
    ud = n(322915);
function uf(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, f.bG)([uo.A], () => uo.A.hidePersonalInformation ?? !1),
        o = `${t}-users`,
        c = `${t}-files`;
    if (0 === l.length) return null;
    let d = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      uu.Ay.User,
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
                      uu.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(uc.A, { projectId: n, file: e.file, className: ud.Vk }),
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        m = l.findIndex((e) => "file" === e.kind),
        h = -1 === m ? d : d.slice(0, m),
        g = -1 === m ? [] : d.slice(m);
    return (0, a.jsx)(uu.Ay, {
        id: t,
        className: ud.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": eS.intl.string(ew.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(um, { titleId: o, title: eS.intl.string(ew.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(um, { titleId: c, title: eS.intl.string(ew.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function um(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(o.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: ud.Gf, children: n }),
            l,
        ],
    });
}
var uh = n(719442),
    ug = n(355622),
    up = n(408018),
    ux = n(186306),
    uv = n(323350),
    uj = n(35277),
    ub = n(820066),
    uy = n(683167),
    uk = n(267102),
    uw = n(259691);
let uS = (0, a7.createChannelRecord)({ id: "1", type: e5.rbe.DM });
function uN(e) {
    let t = ub.VW.end(e, []);
    return { anchor: t, focus: t };
}
function uA(e) {
    return (0, uv.WO)(ub.VW.richValue(e), { mode: "raw" });
}
function uC(e, t) {
    ((e.children = (0, up.x7)(t)), (e.selection = uN(e)), e.onChange());
}
function uI(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rU.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(uw.A, { attachmentId: r }), n] });
}
var uE = n(497437),
    uM = n(465410);
let u_ = "text-md/normal",
    uT = null;
function uP(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, h] = i.useState(0),
        [g, x] = i.useState(0),
        [v, j] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = d.current;
        function l() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = c.current;
            if (null == l) return;
            let r = parseFloat(getComputedStyle(t).columnGap),
                a = Number.isNaN(r) ? 0 : r,
                i = e.offsetWidth,
                s = l.offsetWidth + a;
            (x(i + a), h(s));
            let o = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                f = 0 === d ? 1 : s / d,
                m = 0 === d ? 1 : o / d;
            j({
                frontFrom: 1e3 * (0, sY._R)(f),
                frontTo: 1e3 * (0, sY._R)(m),
                backFrom: 1e3 * (0, sY.T)(f),
                backTo: 1e3 * (0, sY.T)(m),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != c.current && r.observe(c.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = i.useState(0),
        [k, w] = i.useState(null),
        S = i.useRef(!1),
        N = i.useCallback(() => {
            (w(S.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        S.current = n;
    }, [n, t]);
    let A = "in" === k ? v.backFrom : v.frontFrom,
        C = "out" === k ? v.frontTo : v.backTo,
        I = (0, f.bG)([it.Ay], () => it.Ay.useReducedMotion),
        E = t === eS.intl.string(ew.default.Zc7gML),
        M = r === t && E;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: p()(uE.VT, { [uE.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, a.jsx)(sJ.e, { shortcut: "tab", className: uE.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sQ.o, {
                text: t,
                variant: u_,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: p()(uE.xM, { [uE.s2]: l }),
                onStart: N,
                onComplete: () => s(t),
            }),
            _(uE.IS, n || (!I && "out" === k), u),
            (0, a.jsx)("span", {
                ref: c,
                className: uE.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(o.E, { variant: u_, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: uE.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(o.E, { variant: u_, tag: "span", className: uE.xM, children: t }),
                          _(uE.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let uR = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                inputLocked: l = !1,
                aiPaused: r = !1,
                running: s,
                restoring: u = !1,
                onSend: o,
                onInterrupt: c,
                escapeScopeRef: d,
                onUploadFile: h,
                onApprove: g,
                onImport: x,
                onSendToOtherProjects: v,
                suggestion: j,
                questionOpen: b = !1,
                hasPendingContext: y = !1,
                onDraftHasTextChange: k,
                modelSettings: w,
                onModelSettingsChange: S,
            } = e,
            N = n && !l && !r,
            A = (function (e) {
                let t = i.useContext(uk.Ay),
                    [n] = i.useState(() => {
                        let n = (0, uh.ie)();
                        return (
                            (n.children = (0, up.x7)(e)),
                            (n.selection = uN(n)),
                            (0, uy.a)({
                                editor: n,
                                chatInputType: ug.oU.GENERIC_RICH_TEXTAREA,
                                channel: uS,
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
                                    for (let [t, l] of ub.VW.nodes(e, { at: [], match: ub.l5.isText }))
                                        for (let e of t.text.matchAll(rU.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        ux.o.withMergedEntry(e, () =>
                                            ub.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    uj.b.textToVoid(
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
            })(rH.A.getDraft(t)),
            [C, I] = i.useState(() => uA(A));
        (0, un.N$)(C);
        let E = i.useRef(C),
            [M, _] = i.useState(null),
            T = i.useCallback(() => {
                let e = uA(A);
                (e !== E.current && ((E.current = e), (0, ut.I)(t, e), I(e)),
                    _(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !ub.ZF.isCollapsed(t)) return null;
                            let [n] = ub.VW.node(e, t.anchor.path);
                            return ub.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(A),
                    ));
            }, [A, t]),
            P = i.useCallback((e) => uC(A, e), [A]),
            R = "" !== C.trim();
        i.useEffect(() => k?.(R), [R, k]);
        let L = i.useRef(t);
        i.useLayoutEffect(() => {
            L.current !== t && ((L.current = t), uC(A, rH.A.getDraft(t)));
        }, [A, t]);
        let $ = (0, f.bG)([it.Ay], () => it.Ay.isSubmitButtonEnabled),
            [q, D] = i.useState(!1);
        i.useEffect(() => {
            s || D(!1);
        }, [s]);
        let {
                drafts: F,
                addFiles: O,
                pasteFiles: z,
                removeDraft: U,
                settled: B,
                takeRefs: K,
            } = (0, tU.FM)({ projectId: t, surface: "chat", onUploadFile: h }),
            H = eo.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && ei(n);
            }),
            V = "" !== C.trim() || F.length > 0 || y || H,
            W = N && V && B,
            [X, Z] = i.useState(null);
        i.useEffect(() => {
            if (null == X) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => Z(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [X]);
        let Y = (function (e) {
                var t;
                let n,
                    l,
                    r,
                    a,
                    s,
                    { creator: u, collaborators: o } =
                        ((t = (0, f.bG)([m.Ay], () => m.Ay.getProject(e), [e])),
                        (n = t?.id),
                        (l = t?.owner_user_id),
                        (r = (0, f.yK)(
                            [rc.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              rc.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        i.useEffect(() => {
                            null != l && ((0, ui.Y_)(l), r.forEach(ui.Y_));
                        }, [l, r]),
                        (a = (0, f.bG)([ls.default], () => (null == l ? null : ls.default.getUser(l)), [l])),
                        (s = (0, f.yK)(
                            [ls.default],
                            () => r.map((e) => ls.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    c = (0, f.bG)([ua.default], () => ua.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...o].filter((e) => e.id !== c && !e.bot),
                    [u, o, c],
                );
            })(t),
            J = (0, ur.rU)(t),
            [ee, et] = i.useState(null),
            [en, el] = i.useState(0),
            er = i.useMemo(() => (null != M && N ? (0, ul.OG)(M, M.length) : null), [M, N]),
            ea = er?.start ?? null;
        i.useEffect(() => {
            null == ea ? et(null) : (0, ur.IP)(t);
        }, [ea, t]);
        let es = ea === ee ? null : er,
            eu = i.useMemo(() => (null == es ? [] : (0, ul.l$)(Y, J, es.text)), [es, Y, J]),
            ec = es?.text;
        i.useEffect(() => el(0), [ec]);
        let em = eu.length > 0,
            eh = Math.min(en, Math.max(0, eu.length - 1)),
            eg = i.useId(),
            ep = i.useCallback(
                (e) => {
                    let t = eu[e];
                    null != es &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (uj.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                uj.b.insertText(e, `${n} `));
                        })(A, es.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [eu, es, A],
            ),
            ex = i.useCallback(() => {
                if (!W) return;
                let e = K(),
                    n = H
                        ? (function (e) {
                              let t = ed(e);
                              if (null == t || !ei(t)) return null;
                              let n = t.history.present,
                                  l = nb(e);
                              return (
                                  ef(e, (e) => ({ ...e, history: Q, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, tp.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (np.set(i, s),
                                          (s.job = (function (e) {
                                              let t = 0,
                                                  n = null,
                                                  l = null,
                                                  r = null,
                                                  a = !1,
                                                  i = !1,
                                                  s = !1;
                                              async function u() {
                                                  if (!(a || i || s)) {
                                                      ((a = !0), e.update("uploading", l));
                                                      try {
                                                          if (((n ??= await e.capture(t++)), null == n))
                                                              throw Error("capture failed");
                                                          if (((l ??= await e.composite(n)), null == l))
                                                              throw Error("composite failed");
                                                          if (
                                                              (null == r || (await e.isStaged(r)) || (r = null),
                                                              s ||
                                                                  (e.update("uploading", l),
                                                                  (r ??= await e.upload(l)),
                                                                  s))
                                                          )
                                                              return;
                                                          if (!e.send(r)) throw Error("send failed");
                                                          ((i = !0), e.update("sent", l));
                                                      } catch {
                                                          s || e.update("failed", l);
                                                      } finally {
                                                          a = !1;
                                                      }
                                                  }
                                              }
                                              function o() {
                                                  u().catch(() => {});
                                              }
                                              return (
                                                  o(),
                                                  {
                                                      retry: o,
                                                      cancel: () => {
                                                          s = !0;
                                                      },
                                                  }
                                              );
                                          })({
                                              capture: (t) => (0 === t ? l : nb(e)),
                                              composite: (e) => nh(e, n),
                                              upload: (t) =>
                                                  (0, tF.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, tF.n6)(e, t.id),
                                              send: (n) => (0, tp.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nv(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (np.delete(i),
                                                          window.setTimeout(() => {
                                                              (nv(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                o(C, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == uT && (uT = document.createElement("canvas").getContext("2d"));
                    let i = uT;
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
                })(u$(eN.current), eR.current, (0, ul.Lj)(C));
                ("" !== l && Z(l), P(""), et(null));
            }, [W, H, t, C, o, K, P]),
            ev = i.useCallback(
                (e) => {
                    (e.preventDefault(), ex());
                },
                [ex],
            ),
            ej = i.useCallback(() => {
                null == c || q || (D(!0), c());
            }, [c, q]);
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
                            null == ed(n) &&
                            !G(n).active &&
                            ((t = e.target),
                            (r = l?.current),
                            (!(0, tq.vq)(t) ||
                                t === document.body ||
                                t === document.documentElement ||
                                (null != r &&
                                    r.contains(t) &&
                                    null == t.closest('input, textarea, [contenteditable="true"]'))) &&
                                (e.preventDefault(), e.stopPropagation(), a.current()));
                    }
                }, [t, n, l]));
        })({ active: s && null != c, projectId: t, scopeRef: d, onEscape: ej });
        let eb = null == j || "" !== C || !N || u || y ? null : j,
            ey = i.useCallback(
                (e) => {
                    if (em && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = eu.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), el((eh + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ep(eh));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), et(es?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && s && null != c) {
                        (e.preventDefault(), e.stopPropagation(), ej());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eb) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), P(eb));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != g && (e.preventDefault(), g());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ex());
                },
                [ex, g, s, c, ej, eb, P, em, eu.length, eh, ep, es],
            ),
            ek = i.useCallback(
                (e) => {
                    N && z(e);
                },
                [N, z],
            );
        (0, s3.Vo)({
            event: e5.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return ek(t);
            },
        });
        let eN = i.useRef(null),
            eA = i.useCallback(() => {
                let e = E.current;
                v?.((0, ul.Lj)(e), () => {
                    E.current === e && P("");
                });
            }, [v, P]),
            [eC, eI] = i.useState(0),
            [eE, eM] = i.useState(!1);
        i.useEffect(() => {
            if (0 === C.length) return void eM(!1);
            let e = u$(eN.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eI(t);
            }
            eM(!0);
            let t = setTimeout(() => eM(!1), uL);
            return () => clearTimeout(t);
        }, [C]);
        let e_ = i.useMemo(() => ({ "--custom-glow-x": `${eC}px` }), [eC]),
            eT = eE ? ` ${uE.EB}` : "",
            eP = u
                ? eS.intl.string(ew.default.qqlUiW)
                : r
                  ? eS.intl.string(ew.default.Z0hyNL)
                  : l
                    ? eS.intl.string(ew.default.GcFRaY)
                    : N
                      ? y
                          ? eS.intl.string(ew.default.knUjL3)
                          : b
                            ? eS.intl.string(ew.default.IevBEw)
                            : eS.intl.string(s ? ew.default["0BJa/0"] : ew.default.TEeU7z)
                      : eS.intl.string(ew.default.zZ9NgM),
            eR = i.useRef(0),
            eL = i.useRef(null),
            e$ = i.useCallback((e) => {
                if ((eL.current?.disconnect(), null == e)) return;
                eR.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eR.current = e.clientWidth;
                });
                (t.observe(e), (eL.current = t));
            }, []),
            eq = i.useId(),
            eD = i.useId(),
            eF = null != eb,
            eO = X ?? eb ?? eP,
            ez = "" === C && "" !== eO;
        return (0, a.jsxs)("form", {
            onSubmit: ev,
            className: uE.DA,
            children: [
                em
                    ? (0, a.jsx)(uf, {
                          id: eg,
                          projectId: t,
                          suggestions: eu,
                          selectedIndex: eh,
                          onHover: el,
                          onSelect: ep,
                      })
                    : null,
                F.length > 0 || H
                    ? (0, a.jsxs)("div", {
                          className: uE.lN,
                          children: [
                              F.map((e) => (0, a.jsx)(tU.Nl, { draft: e, onRemove: U }, e.localId)),
                              H ? (0, a.jsx)(s8, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${uE.wg} ${uE.LP}${eT}`, style: e_, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${uE.wg} ${uE.L3}${eT}`, style: e_, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: uE.VA,
                    ref: eN,
                    children: [
                        (0, a.jsx)(us.A, {
                            navId: "conjure-composer-attach",
                            disabled: !N,
                            buttonClassName: `${uE.Y0} ${uE.nu}`,
                            iconClassName: uE.Qu,
                            onAddFiles: O,
                            onImport: x,
                            onSendToOtherProjects: null != v ? eA : void 0,
                        }),
                        ez
                            ? (0, a.jsx)("div", {
                                  ref: e$,
                                  className: uE.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(uP, { text: eO, offering: eF && null == X, typed: null != X }),
                              })
                            : null,
                        (0, a.jsx)(nF.A, { id: eD, children: eS.intl.string(ew.default.ldNl9x) }),
                        (0, a.jsx)(rU.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(s2.A, {
                                editor: A,
                                containerClassName: p()(uE.sq, uM.dv),
                                className: uE.jp,
                                readOnly: !N,
                                canFocus: N,
                                onChange: T,
                                onBlur: () => _(null),
                                onKeyDown: ey,
                                onPaste: ek,
                                renderExtraElement: uI,
                                "aria-labelledby": eD,
                                "aria-describedby": ez ? eq : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": em,
                                "aria-controls": em ? eg : void 0,
                                "aria-activedescendant": em ? ((0, uu.aI)(eh) ?? void 0) : void 0,
                            }),
                        }),
                        ez ? (0, a.jsx)(nF.A, { id: eq, children: eP }) : null,
                        (0, a.jsx)("div", {
                            className: uE.Sz,
                            children:
                                s && null != c
                                    ? (0, a.jsx)(tO.m, {
                                          text: eS.intl.string(ew.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${uE.Y0} ${uE.$E}`,
                                              disabled: q,
                                              onClick: ej,
                                              "aria-label": eS.intl.string(ew.default.wiguT0),
                                              children: (0, a.jsx)(rW.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : w?.tierSettings != null && null != S
                                      ? (0, a.jsx)(ue.A, {
                                            settings: w.tierSettings,
                                            tiers: w.tiers,
                                            choices: w.choices,
                                            disabled: !N,
                                            onChange: S,
                                            className: `${uE.Y0} ${uE.$E}`,
                                            icon: (0, a.jsx)(s0.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        $
                            ? (0, a.jsxs)("div", {
                                  className: uE.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: uE.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: uE.rt,
                                          disabled: !W,
                                          "aria-label": eS.intl.string(ew.default.rxW2cl),
                                          children: (0, a.jsx)(s1.SendMessageIcon, {
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
    uL = 1500;
function u$(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var uq = n(709753),
    uD = n(540338);
function uF(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, nT.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var uO = n(986109);
let uz = i.createContext(null);
function uG(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: o,
        } = e,
        c = i.useContext(uz),
        [d, f] = i.useState(() => it.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
        m = i.useCallback((e) => {
            e.target === e.currentTarget && f(!0);
        }, []);
    return (0, a.jsx)("li", {
        onContextMenu: o,
        onAnimationEnd: d ? void 0 : m,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: p()(uO.xk, { [uO.g5]: d, [uO.Qo]: s, [uO.q3]: u }),
        children: n,
    });
}
let uU = new Map();
function uB(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let uK = "live_behind",
    uH = "conjureTipDismissals",
    uV = new Set(),
    uW = new Set(),
    uX = 0;
function uZ() {
    let e = sp.w.get(uH);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function uQ(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return uV.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && uZ().anchor[t]?.[e.id] === n;
        case "app":
            return uZ().app[t]?.includes(e.id) === !0;
        case "forever":
            return uZ().forever.includes(e.id);
    }
}
function uY(e) {
    return (uW.add(e), () => uW.delete(e));
}
function uJ(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, f.bG)([rk.A], () => null != n && n.length > 0 && rN({ keys: n }, rk.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: eS.intl.string(ew.default.F2yVHg) }
        : null;
}
function u0(e) {
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
let u1 = [12e4];
var u2 = n(292771);
function u3(e) {
    let { presentation: t, render: n } = e,
        l = (0, f.bG)([it.Ay], () => it.Ay.useReducedMotion),
        [r, s] = i.useState([{ presentation: t, leaving: !1 }]),
        u = r.find((e) => !e.leaving)?.presentation;
    u !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let o = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(null),
        m = i.useRef(u);
    i.useLayoutEffect(() => {
        let e,
            t,
            n = o.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            a = r?.querySelector("[data-conjure-tip-icon]"),
            i = c.current,
            s = d.current,
            f = r?.offsetHeight ?? 0,
            h =
                null != a
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = a.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((c.current = h), (d.current = f));
        let g = m.current !== u;
        if (((m.current = u), !g || l || null == s || null == i || null == a || null == h)) return;
        let p = i.width / Math.max(1, h.width);
        (a.animate(
            [
                {
                    transform: `translate(${i.left - h.left}px, ${i.top - h.top}px) scale(${p})`,
                    transformOrigin: "top left",
                },
                { transform: "none", transformOrigin: "top left" },
            ],
            { duration: 260, easing: "cubic-bezier(0.2, 0, 0, 1)" },
        ),
            n.animate([{ height: `${s}px` }, { height: `${f}px` }], {
                duration: 260,
                easing: "cubic-bezier(0.2, 0, 0, 1)",
            }));
    });
    let h = r.some((e) => e.leaving);
    return (
        i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [h, r]),
        (0, a.jsx)("div", {
            ref: o,
            className: u2.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: p()(u2.qd, e.leaving ? u2.dv : u2.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function u4(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var u7 = n(247171);
function u5(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: p()(u7.row, r),
        children: [
            (0, a.jsx)(o.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: p()(u7.gutter, u7[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: u7.content, children: i }),
        ],
    });
}
var u6 = n(830205);
function u8(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(u5, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: u6.aK,
        children: (0, a.jsxs)("div", {
            className: u6.n8,
            children: [
                (0, a.jsx)(o.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: u6.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: u6.X8,
                          children: (0, a.jsx)(tO.m, {
                              text: eS.intl.string(eS.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tZ.K, {
                                  "aria-label": eS.intl.string(eS.t.WAI6xu),
                                  icon: tP.P,
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
function u9(e) {
    let { projectId: t } = e,
        n = i.useContext(tj.bI);
    return (0, a.jsx)(u8, {
        icon: iH.ShieldIcon,
        children: eS.intl.format(ew.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, tj.vL)(t, n.guildId));
            },
        }),
    });
}
var oe = n(443865),
    ot = n(716502);
function on(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(u5, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: ot.Nr,
        children: (0, a.jsxs)("section", {
            className: ot.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: ot.X8,
                          children: (0, a.jsx)(tO.m, {
                              text: eS.intl.string(eS.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tZ.K, {
                                  "aria-label": eS.intl.string(eS.t.WAI6xu),
                                  icon: tP.P,
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
function ol(e) {
    let { children: t } = e;
    return (0, a.jsx)(o.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: ot.DD,
        children: t,
    });
}
function or(e) {
    let { children: t } = e;
    return (0, a.jsx)(o.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: ot.rf,
        children: t,
    });
}
function oa(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: ot.o1, children: t });
}
var oi = n(95635);
function os(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = tM(t, n);
    return (0, a.jsx)(u8, {
        icon: oi.UploadIcon,
        onDismiss: l,
        children: eS.intl.format(ew.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let ou = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && u4(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(u9, { projectId: n });
        },
    },
    {
        id: uK,
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
                (null != n.publishCta && sd(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(uK)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(os, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: a, ideasIntroAnchorId: i } = e;
            return !n || null == i || u4(l) ? null : null != t || r || a ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(on, {
                icon: oe.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(ol, { children: eS.intl.string(ew.default.OJlbhX) }),
                    (0, a.jsx)(or, { children: eS.intl.string(ew.default["3vJBni"]) }),
                    (0, a.jsx)(oa, {
                        children: (0, a.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: eS.intl.string(ew.default["U/bLzU"]),
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
var oo = n(817921);
function oc(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                let a,
                    s = (0, tj.Ay)(e),
                    u = (0, f.bG)([ls.default], () => ls.default.getCurrentUser()?.id),
                    o = t.at(-1),
                    c = null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                    d = (function (e, t) {
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
                    })(c, r),
                    m = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if (
                                "publish_notice" !== n.kind &&
                                "project_event" !== n.kind &&
                                "context_boundary" !== n.kind
                            ) {
                                if ("user" === n.role) return null;
                                if ((0, nT.BL)(n)) return n;
                                if (!(0, nT.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == m || u0(m) ? null : m,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === uB(t, g.created_at, u) ? g.id : null,
                    x = o?.projectEvent?.type === "remixed" ? o.projectEvent : null,
                    v = x?.id ?? p,
                    j = uJ(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, f.bG)([rk.A], () => b > 0 && null == rk.A.getSettings(e), [b, e]),
                    k = (0, uq.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (a = (0, nT.Ji)(t)) || !!(0, nT.B0)(t, t.lastIndexOf(a))) &&
                        (null == m || !u0(m)) &&
                        null == uF(t) &&
                        null == j &&
                        !y &&
                        0 === k.length,
                    idleMs: null != c ? Math.max(0, d - c) : 0,
                    justRemixed: null != x,
                    noTurnsYet: t.every(
                        (e) =>
                            "publish_notice" === e.kind || "project_event" === e.kind || "context_boundary" === e.kind,
                    ),
                    ideasIntroAnchorId: v,
                    messagesSinceShown: (n) => {
                        let l = uU.get(`${e}:${n}`);
                        return null != l ? uB(t, l, u) : null;
                    },
                    isDismissed: (t) => uQ(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, u1);
            i.useSyncExternalStore(uY, () => uX);
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
                                uU.set(`${e}:${t}`, n);
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
                                          if (null == e.dismissal || uQ(e, t, n)) return;
                                          let l = uZ();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  uV.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  sp.w.set(uH, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  sp.w.set(uH, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  sp.w.set(uH, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (uX++, uW.forEach((e) => e()));
                                      })(e.tip, t, a.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(ou, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(uG, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: oo.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(u3, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var od = n(52133),
    of = n(732159),
    om = n(888366),
    oh = n(862026),
    og = n(291192);
function op(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, oh.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: og.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: og.Sp,
                children: [
                    (0, a.jsx)("span", { className: og.q3 }),
                    (0, a.jsxs)("span", {
                        className: og.g8,
                        children: [
                            (0, a.jsx)(om.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(o.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: og.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: og.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(lv.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, eP.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(of.u, {
                                                                    ...t,
                                                                    title: eS.intl.string(ew.default["i+xjZM"]),
                                                                    subtitle: eS.intl.string(ew.default.fMBZmD),
                                                                    confirmText: eS.intl.string(ew.default.i5f3Uo),
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
                        ? (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var ox = n(345942),
    ov = n(468689),
    oj = n(576705);
function ob(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            eS.intl.format(n ? ew.default.esEGL5 : ew.default["XrN+Bg"], {
                onOpen: () => ov.A.open(t, e5.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
function oy(e) {
    return (0, f.bG)([m.Ay, a2.A], () => {
        let t = m.Ay.getProject(e);
        return null == t ? "" : (a2.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var ok = n(951465),
    ow = n(369455);
function oS(e) {
    var t, n, l;
    let r,
        i,
        { projectId: s, notice: u } = e,
        c = oy(s),
        d =
            null ==
            (i = (0, f.bG)([m.Ay, lD.A], () => {
                let e = m.Ay.getProject(s);
                return null == e || "user" === e.install_scope || null == e.guild_id
                    ? null
                    : (lD.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: i.id, name: i.name },
        h = (0, f.cf)([m.Ay, tx.A, lD.A, oj.A], () => {
            let e = m.Ay.getProject(s);
            if (null == e || "user" === e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(eG.q7.AUTOMOD) === !0 ||
                    tx.A.getPublishStatus(s)?.surface === "automod",
                n = lD.A.getGuild(e.guild_id),
                l = null != n && oj.A.can(e5.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(o.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: [
            eS.intl.format(
                ((t = u),
                (n = d?.name ?? null),
                (l = h.automod),
                (r = null != n),
                !0 === t.commands_failed
                    ? r
                        ? ew.default.ESu5eZ
                        : ew.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? r
                          ? ew.default.ZnQW4S
                          : ew.default.ev23Cw
                      : t.update
                        ? r
                            ? ew.default["LuS8a/"]
                            : ew.default.gQzuLC
                        : l
                          ? ew.default.KORRGl
                          : r
                            ? ew.default["/npn7F"]
                            : ew.default.MOrR29),
                {
                    name: c,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, ox.u)(d.guildId);
                    },
                },
            ),
            null != h.guildId
                ? (0, a.jsx)(ob, { guildId: h.guildId, update: u.update })
                : !h.automod && u.update && null != u.published_revision
                  ? (0, a.jsx)(oN, { projectId: s, notice: u })
                  : null,
        ],
    });
}
function oN(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tj.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, f.cf)(
                    [tx.A, m.Ay],
                    () => {
                        let r = tx.A.getPublishStatus(e),
                            a = m.Ay.getProject(e);
                        return {
                            sent:
                                null == l ? null : (r?.patchNotesSent?.find((e) => e.publishedRevision === l) ?? null),
                            canOffer:
                                null != l &&
                                t.update &&
                                l === r?.publishedRevision &&
                                null != n &&
                                null != a &&
                                "user" !== a.install_scope &&
                                (0, m.jf)(a),
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
                      ? eS.intl.format(ew.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    nL.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: ow.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, d.pX)(e5.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : eS.intl.format(ew.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = m.Ay.getProject(e),
                                        a = null == r ? null : (0, tj.KL)(r, l);
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
                                null != e && (0, ok.A)(e);
                            },
                        }),
              ],
          });
}
var oA = n(73153),
    oC = n(505527),
    oI = n(930390),
    oE = n(521981),
    oM = n(491182),
    o_ = n(438729),
    oT = n(895597),
    oP = n(448368),
    oR = n(837528),
    oL = n(941308),
    o$ = n(715628),
    oq = n(752636),
    oD = n(9842),
    oF = n(589022),
    oO = n(967198),
    oz = n(531685),
    oG = n(417461);
let oU = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function oB(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function oK(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function oH(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = oK(e, t),
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
    if (oB(r) && oB(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && oB(oK(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function oV(e, t) {
    let { streaming: n } = t,
        l = (0, f.bG)([it.Ay], () => it.Ay.useReducedMotion),
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
                      for (; a > 0 && oH(t, a);) a--;
                      return a;
                  })(u.target, e, u.length)
                : e.length,
        }),
        r || u.length === e.length || (u = { target: e, length: e.length }),
        u !== a && s(u));
    let o = r && u.length < e.length,
        c = i.useRef(u);
    i.useLayoutEffect(() => {
        c.current = u;
    });
    let d = i.useRef(0),
        m = i.useRef(0);
    (i.useEffect(() => {
        if (o)
            return (
                (m.current = 0),
                (d.current = requestAnimationFrame(function e(t) {
                    let n = 0 === m.current ? 32 : t - m.current;
                    if (n >= 32) {
                        m.current = t;
                        let e = c.current,
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
                                    for (; l > t + 1 && n - l < 12 && oU.has(e.charAt(l - 1));) l--;
                                    return oU.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && oH(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    d.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(d.current)
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
                let { target: e } = c.current;
                s({ target: e, length: e.length });
            }
        }, [o]));
    let h = Math.min(u.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: r && h < e.length };
}
var oW = n(624479),
    oX = n(890377),
    oZ = n(92446),
    oQ = n(957565),
    oY = n(180227);
function oJ(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: p()(oY.QE, { [oY.Rn]: t }),
              children: (0, a.jsx)(iM.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          iM.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function o0(e) {
    return oQ.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: eS.intl.string(eS.t.JrGD7E), icon: oW.CopyIcon, onClick: () => (0, oQ.C)(e) }]
        : [];
}
function o1(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: eS.intl.string(ew.default.CXtLD2),
                          tooltip: eS.intl.string(ew.default.DOb1HM),
                          icon: oX.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: eS.intl.string(ew.default.urZwpN),
                          icon: tP.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(oJ, { groupStart: n, actions: [...r, ...o0(t)] });
}
function o2(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: eS.intl.string(ew.default.H8Jfhu), icon: tJ.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: oZ.BugIcon, onClick: r }];
    return (0, a.jsx)(oJ, { groupStart: n, actions: [...i, ...o0(t), ...s] });
}
let o3 = (0, a7.createChannelRecord)({ id: "conjure-builder", type: e5.rbe.DM }),
    o4 = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function o7(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: p()(oY.Yq, { [oY.x1]: t }), children: e });
}
function o5(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let o6 = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function o8(e, t, n) {
    let { content: l } = (0, oL.A)(e, o6),
        r = i.useMemo(() => ((0, rU.aW)(e.content) ? (0, oE.z2)(sK.U, e, o6).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: o3, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(o_.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, o$.A)(s, r);
}
function o9(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, oR.m)(e, o3, t.usernameProfile, l),
        u = (0, oR.Jo)(t.avatarProfile, l),
        o = (0, f.bG)([oO.A], () => oO.A.getGuildId()),
        c = (0, f.bG)([ls.default], () => ls.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let n = ls.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, a.jsx)(oF.A, { ...t, user: n, currentUser: c, guildId: o ?? void 0 });
            },
            [c, o, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: d,
        guildId: o ?? void 0,
    };
}
function ce(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, rU.aW)(n.content)
                          ? (0, oE.z2)(sK.U, n, e).content
                          : (0, oE.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: oY.GV,
                              children: [
                                  (0, a.jsx)(j.x, {
                                      className: oY.Rj,
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
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, f.cf)(
            [li.A],
            () => ({
                isReplyAuthorBlocked: li.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: li.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, iI.X4)(n),
        d = (0, iI.X4)(t),
        m = o9(n);
    return (0, a.jsx)(oP.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: o3,
        referencedMessage: { state: oD.a.LOADED, message: n },
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
function ct(e) {
    let { message: t, author: n } = e,
        l = o9(t);
    return (0, a.jsx)(oT.Ay, {
        message: t,
        channel: o3,
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
function cn(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e,
        o = (0, ui.vm)(l),
        c = i.useMemo(() => (0, iI.FT)(o, null), [o]),
        d = i.useMemo(() => D(t), [t]),
        f = d?.body ?? t,
        m = (0, ul.Qu)(f),
        h = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, a4.Ay)({ channelId: o3.id, content: f, author: o });
            return (0, a3.rh)({ ...e, timestamp: o5(n, e.timestamp), state: e5.cmJ.SENT });
        }, [f, o, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              cl,
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
function cl(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: u } = e,
        o = o8(t, l);
    return (0, a.jsx)(oM.A, {
        className: oY.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(ct, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? (0, oG.b)(l)
                    ? (0, a.jsx)("div", { className: oY.dg, children: o })
                    : o
                : (0, a.jsxs)("div", {
                      className: oY.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: oY.GV,
                              children: [
                                  (0, a.jsx)(j.x, {
                                      className: oY.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: oY.WO, children: o }),
                      ],
                  }),
        childrenAccessories: o7(i, "" !== l),
        childrenButtons: (0, a.jsx)(o1, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function cr(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: o = !1,
            buttons: c,
        } = e,
        { text: d, revealing: m } = oV(t, { streaming: (0, f.bG)([oz.A], () => o && oz.A.isFocused(), [o]) }),
        h = i.useMemo(() => (0, iI.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, ui.vm)(p),
        v = i.useMemo(() => (null == r ? null : D(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, a4.Ay)({ channelId: o3.id, content: v?.body ?? r.content, author: x });
            return (0, a3.rh)({ ...e, id: r.id, timestamp: o5(r.createdAt, e.timestamp), state: e5.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: o3.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, a4.Ay)({ channelId: o3.id, content: "", author: o4 })),
        k = i.useMemo(
            () =>
                (0, a3.rh)({
                    ...y,
                    timestamp: o5(n, y.timestamp),
                    state: e5.cmJ.SENT,
                    ...(null != b ? { type: e5.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", d), [k, d]),
        S = i.useMemo(
            () => (0, oq.A)({ message: k, channel: o3, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        N = o8(w, d, oY.OS);
    return (0, a.jsxs)("div", {
        className: oY.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, a.jsx)(oM.A, {
                className: oY.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(ce, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: S,
                childrenMessageContent: N,
                childrenAccessories: o7(l, "" !== d),
                disableInteraction: !0,
            }),
            c,
            u ? (0, a.jsx)("img", { className: oY.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var ca = n(981879);
function ci(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, a3.rh)(
                    { ...(0, a4.Ay)({ channelId: o3.id, content: "" }), id: `conjure:${t}`, state: e5.cmJ.SENT },
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
                (oA.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: o3.id,
                    messageId: l.id,
                    users: [o4],
                    emoji: e,
                    reactionType: oC.v.NORMAL,
                }),
                    oA.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: o3.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: oC.v.NORMAL,
                    }));
            }
            return (
                t(),
                oA.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    oA.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: ca.H,
            children: (0, a.jsx)(oI.A, {
                message: l,
                channel: o3,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var cs = n(442433);
n(775443);
var cu = n(616e3),
    co = n(155899);
function cc(e) {
    let { onSelect: t, onClose: n = cs.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(te.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": eS.intl.string(eS.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(tt.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(tt.Dr, {
                          id: "restore-version",
                          label: eS.intl.string(ew.default.H8Jfhu),
                          icon: tJ.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(tt.Dr, { id: "view-trace", label: "View Trace", icon: oZ.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function cd(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: r,
            onJumpTo: i,
            planVersion: s,
            pickedIdeaIds: u,
            secretRequestAwaiting: o,
            secretRequestStatus: c,
            settingsFloating: d = !1,
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
        j = null != v && null != p ? () => cf(v, p) : void 0,
        b =
            ((t =
                eM() && "assistant" === x.role && (0, nT.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, f.bG)(
                [cu.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : cu.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((eC = { projectId: e, traceId: t }), [...eA])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(uG, {
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
                          void (0, cs.jA)(t, (e) => (0, a.jsx)(cc, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(cr, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(o2, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(sZ, {
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
                secretRequestStatus: c,
                settingsRequest: n.active || d ? void 0 : x.settingsRequest,
                settingsAskId: x.id,
                publishCta: n.active ? null : x.publishCta,
                turnId: (0, nT.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: g,
                restoreProposal: w,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: m,
                onRestoreProposal:
                    null != w && null != p && m
                        ? () =>
                              cf(
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
function cf(e, t) {
    (0, co.F)({ onConfirm: () => t(e) });
}
var cm = n(288539),
    ch = n(677683),
    cg = n(677690),
    cp = n(159711);
function cx(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: i } =
            ((t = (0, f.bG)([ch.A], () => ch.A.getOutcome(l))),
            (n = (0, f.bG)(
                [la.A, ls.default, li.A],
                () => {
                    let e = t?.status === "pinned" ? la.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, lr.m1)(e, ls.default, li.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = eS.intl.string(ew.default.UGAfl9);
    return null != r
        ? (0, a.jsx)(nG, {
              title: s,
              children: (0, a.jsx)(o.E, {
                  className: cp.r,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? eS.intl.formatToPlainString(ew.default.gKe6Lw, { channelName: i ?? "" })
                          : eS.intl.string(ew.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(nG, { title: s, children: (0, a.jsx)(cv, { projectId: l }) });
}
function cv(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: u,
            failed: c,
            pin: d,
            skip: h,
        } = (function (e) {
            var t;
            let n = (0, f.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, f.yK)(
                        [l$.Ay, oj.A],
                        () =>
                            null == t
                                ? []
                                : l$.Ay.getChannels(t)
                                      [l$.vM].map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === e5.rbe.GUILD_VOICE && oj.A.can(e5.xBc.MANAGE_CHANNELS, e),
                                      ),
                        [t],
                    )),
                [r, a] = i.useState(null),
                [s, u] = i.useState(!1),
                [o, c] = i.useState(!1),
                d = l.find((e) => e.id === r) ?? null,
                h = n?.application_id,
                g = i.useCallback(async () => {
                    if (null == d || null == h) return;
                    (u(!0), c(!1));
                    let t = await (0, cg.pk)(d.id, h);
                    (u(!1), t ? (0, cg.tg)(e, { status: "pinned", channelId: d.id }) : c(!0));
                }, [h, e, d]),
                p = i.useCallback(() => (0, cg.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: d,
                setPicked: a,
                pinning: s,
                failed: o,
                pin: g,
                skip: p,
            };
        })(t),
        g = (0, lM.A)(n, "voice"),
        p = i.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (g ?? []).filter((t) => e.has(t.value));
        }, [l, g]);
    return (0, a.jsx)("div", {
        className: cp.r,
        children: (0, a.jsxs)(ss.B, {
            gap: 12,
            children: [
                (0, a.jsx)(o.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: eS.intl.string(ew.default["1vVBAw"]),
                }),
                p.length > 0
                    ? (0, a.jsx)(n9.Z, {
                          selectionMode: "single",
                          label: eS.intl.string(ew.default.peOi1H),
                          placeholder: eS.intl.string(ew.default["9+dfPT"]),
                          options: p,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: c ? eS.intl.string(ew.default.d7EeAm) : void 0,
                          disabled: u,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, a.jsx)(o.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: eS.intl.string(ew.default.JVUsIY),
                      }),
                (0, a.jsxs)("div", {
                    className: cp.o,
                    children: [
                        (0, a.jsx)(x.$, {
                            variant: "secondary",
                            size: "sm",
                            text: eS.intl.string(ew.default.Iw0l8o),
                            disabled: u,
                            onClick: h,
                        }),
                        p.length > 0
                            ? (0, a.jsx)(x.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: eS.intl.string(ew.default.FYI3qr),
                                  disabled: null == r,
                                  loading: u,
                                  onClick: d,
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function cj(e, t, n) {
    return (0, a.jsx)(cm.A, { userId: e, content: `@${t}` }, n);
}
function cb(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, ui.Y_)(l);
            }, [l]);
            let r = (0, f.bG)([ls.default], () => (null == l ? null : ls.default.getUser(l)), [l]),
                a = (0, a6.tx)(r),
                s = oy(e),
                u =
                    (0, f.bG)([lD.A], () => (null == t.guild_id ? null : lD.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? eS.intl.string(ew.default.R1tPlP),
                o = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == o
                        ? eS.intl.format(ew.default.Lwsrhg, { app: s, server: u })
                        : eS.intl.format(ew.default.qqePfT, { app: s, server: u, ...o });
                case "bot_removed":
                    return null == o
                        ? eS.intl.format(ew.default.mT7EQG, { app: s, server: u })
                        : eS.intl.format(ew.default["lA/crI"], { app: s, server: u, ...o });
                case "preview_bot_removed":
                    return null == o
                        ? eS.intl.format(ew.default["4LVIeo"], { app: s, server: u })
                        : eS.intl.format(ew.default.YJOV6D, { app: s, server: u, ...o });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == o
                        ? eS.intl.format(ew.default["4VQfid"], { channel: e, server: u })
                        : eS.intl.format(ew.default.RlMIJN, { channel: e, server: u, ...o });
                }
                case "remixed":
                    return eS.intl.format(ew.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return eS.intl.string(ew.default.UGAfl9);
            }
        })(t, n, cj),
        r = uJ(t, n);
    return "voice_channel_pin" === n.type
        ? (0, a.jsx)(cx, { projectId: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(o.E, { variant: "text-md/normal", color: "text-default", children: l }),
                  null != r ? (0, a.jsx)(rD, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let cy = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                u = n.message,
                o =
                    ((t = "user" === n.kind ? u.id : null),
                    nx.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rU.DW)(u.attachments, u.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: u.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cn, {
                            groupStart: n.groupStart,
                            content: u.content,
                            createdAt: u.created_at,
                            userId: u.user_id,
                            accessories:
                                null != t || null != o || null != u.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(sB.A, { projectId: l, attachments: t }) : null,
                                              null != o ? (0, a.jsx)(s9, { send: o }) : null,
                                              null != u.agentReaction
                                                  ? (0, a.jsx)(ci, { messageId: u.id, reaction: u.agentReaction })
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
                                    return (n) => (0, rB.tp)(e, t.id, n);
                            })(l, u, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cr, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: u.created_at,
                            accessories:
                                n.hostsAttachments && null != u.attachments
                                    ? (0, a.jsx)(sB.A, { projectId: l, attachments: u.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sX, {
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
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cr, {
                            groupStart: n.groupStart,
                            content: null == u.publishNotice ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(oS, { projectId: l, notice: u.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cr, {
                            groupStart: n.groupStart,
                            content: null == u.projectEvent ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(cb, { projectId: l, event: u.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == u.contextSwitch
                                ? null
                                : (0, a.jsx)(op, { projectId: l, contextSwitch: u.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sX, { projectId: l, interrupted: !0, steps: u.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sX, {
                            projectId: l,
                            steps: ck,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(cd, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, od.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, od.A)(e.row, t.row, ["message"]) &&
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
                (0, od.A)(e.replyTo, t.replyTo) &&
                (0, od.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    ck = [],
    cw = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cS = new WeakMap();
function cN(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function cA(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cC = ["wheel", "touchstart", "pointerdown", "keydown"];
function cI(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let cE = i.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: u,
            onApprovePlan: d,
            floatingSettingsMessageId: m,
            liveClarificationId: h,
            onRestoreVersion: g,
            scrollerRef: x,
            stickToBottomRef: v,
            pinned: j,
            onUnpin: b,
            handleRef: y,
            onShowsLatestChange: k,
        } = e,
        w = i.useRef(null),
        [S, N] = i.useState(null),
        A = i.useCallback((e) => {
            ((w.current = e), N(e));
        }, []),
        [C, I] = i.useState(null),
        E = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(E.current), []);
    let M = i.useCallback((e) => {
            (I(e), window.clearTimeout(E.current), (E.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        _ = (0, f.bG)([tx.A], () => tx.A.getPublishStatus(t)),
        T = (0, f.bG)([ls.default], () => ls.default.getCurrentUser()?.id),
        P = i.useMemo(() => {
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
                                        let t = (0, n_.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = cS.get(r);
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
                        let a = !(0, nT.BL)(e),
                            i = rX({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            u = (0, n_.C6)(e.steps, { turnActive: a }),
                            { lastWork: o, open: c } = (0, n_.CT)(u, { turnActive: a }),
                            d = u.at(-1)?.index,
                            f = !1;
                        for (let n of u) {
                            if (null != n.prose && cw.test(n.prose.content)) f = !0;
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
                                        turnActive: nP(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let m = cw.test(e.content ?? "");
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
                    (cS.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return sc(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, _)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = sf.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), sf.set(t, n)), n);
                      })),
                h,
            );
        }, [n, _, h]),
        R = i.useMemo(() => P.map((e) => e.key), [P]),
        [L, $] = i.useState(null),
        q = (function (e, t, n) {
            if (null == t) return cN(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cA(e, t.endKey, t.end - 1) + 1,
                a = cA(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), cN(e, a, r));
        })(R, L, j),
        D = i.useRef(q),
        F = i.useRef(R),
        O = i.useRef(P),
        z = i.useRef(null),
        G = i.useRef(null),
        U = i.useRef(new Set()),
        B = i.useRef(null),
        K = i.useRef(!1),
        H = i.useCallback(() => {
            let e = x.current?.getScrollerNode(),
                t = K.current ? cI(w.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [x]);
    i.useLayoutEffect(() => {
        let e = x.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            K.current = !1;
        };
        for (let n of cC) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of cC) e.removeEventListener(n, t);
        };
    }, [x]);
    let V = i.useCallback(() => {
            let e = x.current?.getScrollerNode(),
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
            z.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [x]),
        W = i.useCallback(() => {
            let e = x.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), cN(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cN(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? cN(e, i, t.end) : null;
            })(F.current, D.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: v.current,
            });
            "older" === n ? (0, tp.loadOlderHistory)(t) : null != n && $(n);
        }, [x, v, t]);
    i.useImperativeHandle(
        y,
        () => ({
            handleScroll() {
                (V(),
                    $((e) => {
                        let t = D.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    W());
            },
            recordAnchor: V,
            showLatest(e) {
                ((K.current = !1), (G.current = e ?? null), $(null));
            },
            snapshot() {
                let e = z.current;
                return null == e ? null : { window: D.current, anchor: e };
            },
            restore(e) {
                let { window: t, anchor: n } = e;
                if (!F.current.includes(n.key)) return !1;
                (b(), (z.current = n));
                let l = D.current;
                if (l.startKey === t.startKey && l.endKey === t.endKey) {
                    let e = x.current?.getScrollerNode(),
                        t = w.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else $(t);
                return !0;
            },
        }),
        [V, W, b, x],
    );
    let X = i.useRef(null),
        Z = i.useCallback(
            (e) => {
                var n;
                let l;
                ((X.current = null), (K.current = !1));
                let r = w.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (b(), $(D.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let a = O.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, tp.loadOlderHistory)(t) && (X.current = e);
                    return;
                }
                (b(),
                    (G.current = () => {
                        (w.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    $(((n = F.current), cN(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [M, b, t],
        );
    (i.useEffect(() => {
        let e = X.current;
        null != e && Z(e);
    }, [P, Z]),
        i.useLayoutEffect(() => {
            if (null == S) return;
            let e = S.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), v.current)) return void x.current?.scrollToBottom();
                        (H(), V());
                    }
                });
            return (t.observe(S), () => t.disconnect());
        }, [S, H, V, x, v]));
    let Q = null == q.endKey;
    (i.useEffect(() => k?.(Q), [Q, k]),
        i.useLayoutEffect(() => {
            ((D.current = q), (F.current = R), (O.current = P));
        }),
        i.useLayoutEffect(() => {
            let e = x.current?.getScrollerNode(),
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
                    })(B, t, n);
            if (null != e && null != l) {
                let t = z.current;
                if (r && v.current && null != cI(l)) (b(), $(D.current), (K.current = !0), H());
                else if (v.current) x.current?.scrollToBottom();
                else if (K.current) H();
                else if (null != t) {
                    let n = Array.from(l.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === t.key,
                        ),
                        r = null == n ? 0 : n.getBoundingClientRect().top - e.getBoundingClientRect().top - t.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let n = G.current;
                ((G.current = null), n?.(), V(), W());
            }
            U.current = new Set(R);
        }, [t, n, P, R, q.start, q.end, x, v, b, H, V, W]));
    let Y = i.useMemo(() => uF(n), [n]),
        J = i.useMemo(
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
        ee = i.useMemo(
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
        et = i.useMemo(
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
        en = n.at(-1),
        el =
            (en?.role !== "assistant" || null == en.awaitingUser || null == en.secretRequest
                ? null
                : (0, nT.BL)(en)
                  ? en.awaitingUser
                  : null) ?? void 0,
        er = (0, f.bG)([rk.A], () => rk.A.getSettings(t)?.secrets, [t]),
        ea = (0, uq.WT)(t),
        ei = i.useMemo(() => (0, rw.Mv)(n, er), [n, er]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: p()(uO.x7, uO.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: uO.Ub, children: (0, a.jsx)(c.y, {}) }),
            });
        let e = "unavailable" === l ? ew.default.Td4Sf4 : ew.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: uO.x7,
            children: (0, a.jsx)(uG, { role: "assistant", children: (0, a.jsx)(cr, { content: eS.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(uz.Provider, {
        value: U,
        children: (0, a.jsxs)("ol", {
            ref: A,
            className: uO.x7,
            children: [
                P.slice(q.start, q.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            cy,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && C === n.id,
                                currentUserId: "user" === e.kind ? T : void 0,
                            },
                            e.key,
                        );
                    let l = n === en;
                    return (0, a.jsx)(
                        cy,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? et.get(n.in_reply_to) : void 0,
                            onJumpTo: Z,
                            planVersion: J.get(n.render_id),
                            pickedIdeaIds: ee.get(n.render_id),
                            secretRequestAwaiting: l ? el : void 0,
                            secretRequestStatus: ei.get(n.render_id),
                            settingsFloating: n.id === m,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === Y ? d : void 0,
                            onRestoreVersion: g,
                        },
                        e.key,
                    );
                }),
                Q
                    ? ea.map((e) =>
                          (0, a.jsx)(
                              uG,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(cr, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(uD.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != el && Q
                    ? (0, a.jsx)(uG, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(cr, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(o.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eS.intl.string(ew.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                Q ? (0, a.jsx)(oc, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var cM = n(731084),
    c_ = n(823376),
    cT = n(187447);
function cP(e) {
    let { activity: t, id: n } = e,
        l = (0, nM.j)(),
        { text: r, revealing: s } = oV(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: cT.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(nC.Ch, {
                ref: u,
                className: cT.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: p()(sW.PT, cT.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: is.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cR = n(53659);
function cL(e) {
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
        x = i.useId(),
        [v, j] = i.useState(null),
        b = (0, cM.xu)({
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
        y = eS.intl.string(b),
        k = b === cM.kx["0"],
        [w, S] = i.useState(m ?? y),
        N = (0, nM.j)();
    (l || (0, cM.E4)(y, w) || (!N && !k)) && w !== y && S(y);
    let A = i.useRef(y);
    (i.useEffect(() => {
        A.current = y;
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
        M = i.useRef(0);
    (i.useEffect(() => {
        ((E.current = k), !k && (0, cM.E8)(I.current) && S(A.current));
    }, [k]),
        i.useEffect(() => {
            if (!N) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((M.current = (0, cM.E8)(I.current) ? M.current + 1 : 0), S((0, cM.Ov)(M.current)))
                    : A.current !== I.current
                      ? S(A.current)
                      : C.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, cM.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [N]));
    let _ = null != t && "" !== t.text,
        T = t?.session ?? null,
        P = _ && null != T && v === T,
        R = i.useCallback(() => {
            _ && null != T && j((e) => (e === T ? null : T));
        }, [_, T]),
        L = i.useCallback(() => j(null), []);
    return (0, a.jsx)(e9.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: P,
        onRequestClose: L,
        renderPopout: () => (0, a.jsx)(cP, { id: x, activity: t }),
        children: () =>
            (0, a.jsxs)(nL.D, {
                innerRef: g,
                className: p()(cR.hF, _ && cR.Xd),
                "aria-label": eS.intl.string(
                    r
                        ? ew.default.qqlUiW
                        : b === ew.default.j8tmjK
                          ? ew.default.j8tmjK
                          : k
                            ? cM.kx["0"]
                            : ew.default["Uuj/gh"],
                ),
                "aria-expanded": P,
                "aria-describedby": P ? x : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": eS.intl.string(b),
                onClick: R,
                children: [
                    (0, a.jsx)("span", {
                        className: cR.bl,
                        children: (0, a.jsx)(c_.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: cR.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: N
                            ? (0, a.jsx)(sQ.o, {
                                  ref: C,
                                  text: w,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: cM.vg,
                                  delay: null,
                                  className: cR.yE,
                              })
                            : (0, a.jsx)(o.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: cR.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let c$ = { second: 1e3, minute: 6e4 };
function cq(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = c$[t];
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
var cD = n(719374);
function cF(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = cq(t);
    return (0, a.jsx)(o.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: cD.$,
        "data-conjure-turn-timer": !0,
        children: (0, r4.C7)(l),
    });
}
function cO(e) {
    let { startedAt: t } = e,
        n = cq(t, "minute");
    return (0, a.jsx)(nF.A, { role: "timer", children: (0, r4.Us)(n) });
}
var cz = n(885574),
    cG = n(242779),
    cU = n(436804);
function cB(e) {
    return e.toLocaleString();
}
function cK(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: cU.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: cU.mf,
                children: [
                    (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [cB((0, cG.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(o.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    cB(n.input_tokens),
                    " in \xb7 ",
                    cB(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cB(n.cache_creation_input_tokens)} cache write \xb7 ${cB(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cH(e) {
    let { project: t } = e,
        n = (0, cG.wU)(t.compaction),
        l = (0, cG.wU)(t.classifier),
        r = (0, cG.wU)(t.image),
        i = (0, cG.wV)(t.orchestrator, t.codegen),
        s = (0, cG.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: cU.si,
        role: "dialog",
        "aria-label": eS.intl.string(ew.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: cU.Q$,
                children: (0, a.jsxs)("div", {
                    className: cU.mf,
                    children: [
                        (0, a.jsxs)(o.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [cB((0, cG.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(o.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cK, { label: eS.intl.string(ew.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(cK, { label: eS.intl.string(ew.default.ANCEo3), usage: n }),
            (0, a.jsx)(cK, { label: eS.intl.string(ew.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(cK, { label: eS.intl.string(ew.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: cU.mf,
                children: [
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: eS.intl.string(ew.default["8OUg09"]),
                    }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cG.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cG.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cV(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(e9.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cH, { project: t }),
        children: (e) =>
            (0, a.jsx)(nL.D, {
                innerRef: n,
                className: cU.Y$,
                "aria-label": eS.intl.string(ew.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(cz.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cW = n(990250);
function cX(e) {
    let { queued: t } = e,
        n = eS.intl.string(ew.default.hzgPbZ);
    return (0, a.jsxs)("div", {
        className: cW.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, a.jsxs)("div", {
                className: cW.wx,
                children: [
                    (0, a.jsx)(o.E, { variant: "text-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, a.jsx)(nC.Ch, {
                className: cW.XG,
                children: (0, a.jsx)("ul", {
                    className: cW.p_,
                    children: t.map((e) => (0, a.jsx)(cZ, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cZ(e) {
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
              className: cW.AS,
              children: (0, a.jsx)(o.E, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: eS.intl.string(ew.default["07XimM"]),
              }),
          })
        : (0, a.jsxs)("li", {
              className: cW.AS,
              children: [
                  (0, a.jsx)(o.E, {
                      ref: n,
                      variant: "text-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cW.Qs,
                      children: t,
                  }),
                  s
                      ? (0, a.jsx)(lv.Q, {
                            variant: "secondary",
                            textVariant: "text-xs/medium",
                            text: eS.intl.string(l ? ew.default.nEMoeN : ew.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function cQ(e) {
    let { queued: t, className: n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(e9.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cX, { queued: t }),
        children: (e) =>
            (0, a.jsx)(nL.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, a.jsx)(o.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: eS.intl.formatToPlainString(ew.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cY = n(997421);
function cJ(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: s,
            recalling: u = !1,
            thinkingActivity: c,
            compacting: d,
            saving: m,
            projectUsage: h,
            connState: g,
            queued: x,
        } = e,
        v = (0, e_.Zv)(t),
        j = (0, f.bG)([tx.A], () => tx.A.getPublishStatus(t)?.publishing === !0, [t]),
        [b, y] = i.useState(null),
        k = i.useCallback(
            (e) =>
                y(
                    (0, cM.E8)(e) || e === eS.intl.string(ew.default.mKK6wB) || e === eS.intl.string(ew.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, cM.uc)(h),
        S = null != s,
        N = s ?? (n ? l : void 0),
        A = n || r || S || !0 === m;
    return (0, a.jsxs)("div", {
        className: cY.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cY.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    A || u || v || j
                        ? (0, a.jsx)(cL, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: S,
                              recalling: u,
                              controlling: v,
                              publishPending: j && A,
                              publishing: j,
                              spoken: b,
                              onSpokenChange: k,
                          })
                        : null,
                    null != N ? (0, a.jsx)(cF, { startedAt: N }) : null,
                ],
            }),
            null != N ? (0, a.jsx)(cO, { startedAt: N }) : null,
            0 === x.length ? null : (0, a.jsx)(cQ, { queued: x, className: p()(cY.BP, cY.A1) }),
            null == h || null == w
                ? null
                : (0, a.jsxs)("span", {
                      className: cY.BP,
                      children: [
                          (0, a.jsx)(o.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, a.jsx)(cV, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, a.jsx)(o.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": eS.intl.formatToPlainString(ew.default["tCo+ZM"], { status: (0, cM.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cY.XF,
                      children: (0, cM.Db)(g),
                  }),
        ],
    });
}
var c0 = n(698638),
    c1 = n(608711);
let c2 = [eS.intl.string(ew.default["9w+Chc"]), eS.intl.string(ew.default.WAvmdq), eS.intl.string(ew.default.SKsrzl)];
function c3(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        c,
        { projectId: d, restoreState: h, onRestoreVersion: g, onImportProject: p, escapeScopeRef: v } = e,
        j = (0, f.bG)([rc.A], () => rc.A.getMessages(d), [d]),
        b = (0, f.bG)([tp.default], () => tp.default.getConnState(d), [d]),
        y = (0, f.bG)([rc.A], () => rc.A.getProjectUsage(d), [d]),
        k = (0, f.bG)([rc.A], () => rc.A.getThinkingActivity(d), [d]),
        w = (0, f.bG)([rc.A], () => rc.A.isCompacting(d), [d]),
        S = (0, f.bG)([rc.A], () => rc.A.isSaving(d), [d]),
        N = rf(d),
        A = (0, f.bG)([ri.A], () => ri.A.getModelSettings(d), [d]),
        C = i.useRef(null),
        I = i.useRef(null),
        E = i.useRef(null),
        M = i.useRef(null),
        {
            stickToBottomRef: _,
            pinned: P,
            atBottom: R,
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
                    for (let e of cC) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of cC) t.removeEventListener(e, o);
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
        })(I),
        G = i.useCallback(() => {
            function e() {
                let e = C.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (q(), F.current ? e() : E.current?.showLatest(e));
        }, [q, F]),
        U = i.useCallback(() => {
            (z(), E.current?.handleScroll());
            let e = M.current;
            null != e && (e.position = _.current ? null : (E.current?.snapshot() ?? null));
        }, [z, _]),
        B = i.useContext(eq) === d;
    i.useLayoutEffect(() => {
        if (!B) return;
        let e = { position: eF.A.getProjectView(d).chatScroll };
        return ((M.current = e), () => (0, eD.g7)(d, { chatScroll: e.position }));
    }, [B, d]);
    let K = i.useRef(!B);
    (i.useLayoutEffect(() => {
        if (K.current || 0 === j.length) return;
        K.current = !0;
        let e = eF.A.getProjectView(d).chatScroll;
        null != e && E.current?.restore(e) !== !0 && null != M.current && (M.current.position = null);
    }, [j, d]),
        i.useLayoutEffect(() => {
            let e = C.current;
            if (null == e) return;
            let t = I.current?.getScrollerNode(),
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
                    r && (_.current ? I.current?.scrollToBottom() : E.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [_]),
        i.useEffect(() => {
            (0, tp.ensureConnection)(d);
        }, [d]),
        (0, rK.E1)(d, (0, nM.j)()));
    let V = Z(d),
        W = (function (e) {
            let t = (0, tj.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, f.bG)([lD.A], () => (null == n ? null : (lD.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: eS.intl.format("channel" === s ? ew.default["1cm4fj"] : ew.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(d),
        X = (function (e) {
            let t = (0, f.bG)([rO.A], () => rO.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rz.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rF.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? eS.intl.format(ew.default["bw/n4C"], { helpdeskURL: e })
                            : eS.intl.format(ew.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: eS.intl.formatToPlainString(ew.default.GHgG2B, { percent: l, limit: n }) };
        })(d),
        Q =
            ((l = (0, f.bG)([ru.A], () => ru.A.getFailure(d))),
            (r = i.useCallback(() => (0, ro.CM)(d), [d])),
            null == l
                ? null
                : {
                      message: eS.intl.format(ew.default.Up6Ssw, { reason: l }),
                      retry: { text: eS.intl.string(ew.default["ywA+ET"]), onClick: r },
                  }),
        Y = (0, f.bG)([ru.A], () => ru.A.getSetupStartedAt(d), [d]),
        J = i.useCallback(
            (e, t) => {
                (0, tp.sendUserMessage)(d, e, t);
            },
            [d],
        ),
        ee = i.useCallback(
            (e, t, n) => {
                let l = n ?? J;
                0 === V.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => T(e.comment)),
                                  a = [];
                              if (
                                  (a.push(
                                      `My design feedback: ${1 === r.length ? "1 comment" : `${r.length} comments`} on the app.`,
                                  ),
                                  null != l)
                              ) {
                                  let e = l.title.trim(),
                                      t = "" !== e ? `${e} (${l.url})` : l.url;
                                  (a.push(`Page: ${t}, viewport ${l.viewport.width}x${l.viewport.height}.`),
                                      a.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              r.forEach((e, t) => {
                                  let n;
                                  (a.push(""),
                                      a.push(`${t + 1}. ${L(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: V.annotations, metaComment: e, context: V.context }),
                          t,
                      ),
                      H(d));
            },
            [V, J, d],
        ),
        et = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of np)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, tp.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = np.get(e);
                            (np.delete(e), nv(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(d) ||
                rc.A.isThinking(d)) &&
                (0, tp.interruptTurn)(d);
        }, [d]),
        en = i.useCallback((e) => (0, n3.RQ)(d, e.implementation_prompt), [d]),
        [el, er] = (function (e) {
            let [t, n] = i.useState(() => rV(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rV(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(d),
        ea = i.useCallback(() => J(eS.intl.string(ew.default["t5CN3+"])), [J]),
        ei = i.useCallback((e, t, n) => (0, n3.RQ)(d, e, { clarificationAnswers: t, attachments: n }), [d]),
        es = i.useCallback((e) => (0, rs.X)(d, e), [d]),
        eu = i.useCallback((e) => (0, tF.vX)(d, e), [d]),
        eo = i.useCallback((e) => (0, tU.gn)(d, "chat", Array.from(e), eu), [d, eu]),
        ec = i.useCallback(() => (0, n3.RQ)(d, eS.intl.string(ew.default.Zc7gML)), [d]),
        ed = h?.status === "restoring",
        ef = "open" === b && !ed,
        em = j[j.length - 1],
        eh = null != em && "assistant" === em.role && null != em.proposal,
        [eg, ep] = i.useState(null),
        ex = i.useMemo(
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
        ev = null != ex && ex.id !== eg ? ex : null,
        ej = i.useCallback(() => {
            null != ev && ep(ev.id);
        }, [ev]),
        [ey, ek] = i.useState(null),
        eN = (function (e) {
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
                                summary: eS.intl.string(ew.default["o2++BO"]),
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
        })(d),
        eA = em?.appBuildRequest != null && (0, nT.BL)(em) && em.appBuildRequest.id !== ey ? em.appBuildRequest : null,
        eC = eN.request ?? (null == ev ? eA : null),
        eI = null == eN.request ? ev : null,
        eE = null != eC && eC === eN.request,
        { close: eM, sent: e_ } = eN,
        eT = eN.request?.id,
        eP = i.useCallback(() => {
            eE ? eM() : null != eC && ek(eC.id);
        }, [eC, eE, eM]),
        eR = i.useCallback(
            (e) => {
                (null != eT && e_(eT),
                    (0, eb.P0)({
                        text: eS.intl.formatToPlainString(ew.default.RZO35O, {
                            names: e.map((e) => e.name).join(", "),
                        }),
                        variant: "success",
                    }));
            },
            [eT, e_],
        ),
        eL = (0, f.bG)([rk.A], () => rk.A.getSettings(d), [d]),
        [e$, eO] = i.useState(null),
        ez = rM(),
        eG =
            null != em &&
            ((t = em.id),
            (s = (0, rw.Mv)(j, eL?.secrets)),
            (u = r_(j)),
            j.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, nT.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !rT(e.settingsRequest, eL, ez.has(e.id)))),
            )),
        eU =
            null != em &&
            "assistant" === em.role &&
            null != em.settingsRequest &&
            null == em.secretRequest &&
            (0, nT.BL)(em) &&
            em.id !== e$ &&
            ((n = em.settingsRequest),
            (c = n.keys ?? []),
            null != eL &&
                0 !== c.length &&
                c.every((e) => {
                    let t = eL.schema.find((t) => t.key === e);
                    return null != t && rS.has(t.type);
                })) &&
            rN(em.settingsRequest, eL) &&
            !eG
                ? em
                : null,
        eB = null == eN.request ? eU : null,
        eK = eB?.settingsRequest ?? null,
        eH = i.useCallback(() => {
            null != eU && eO(eU.id);
        }, [eU]),
        eV = null != eK,
        [eW, eX] = i.useState(null),
        eZ = eI?.id ?? eC?.id ?? eB?.id ?? (N ? "scope-setup" : void 0),
        eQ = null != ev || null != eC || null != eU || N;
    i.useLayoutEffect(() => {
        let e = I.current?.getScrollerNode(),
            t = eW?.firstElementChild;
        if (null == eW || null == e || !(0, tq.vq)(t, HTMLElement) || null == eZ) return;
        function n() {
            _.current && I.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eW.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eW, eZ, I, _]);
    let eY = (0, f.bG)([rc.A], () => rc.A.hasLoadedHistory(d), [d]),
        eJ = (function (e) {
            let t = rf(e),
                n = (0, f.bG)([m.Ay], () => null != m.Ay.getProject(e), [e]),
                l = (0, f.bG)([rc.A], () => rc.A.hasLoadedHistory(e), [e]),
                r = (0, f.bG)([rc.A], () => rc.A.getMessages(e), [e]),
                a = (0, f.bG)([tp.default], () => tp.default.getConnState(e), [e]),
                [s, u] = i.useState(0);
            return (
                i.useLayoutEffect(() => {
                    (0, rd.Iy)(e, () => u((e) => e + 1));
                }, [e, n, l, r, t, a]),
                s
            );
        })(d),
        e0 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: eY,
            historyUnavailable: (0, f.bG)([rc.A], () => rc.A.isHistoryUnavailable(d), [d]),
            connState: b,
        }),
        e1 = "loading" === e0 && 0 === j.length,
        e2 = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < d.length; t++) e = (31 * e + d.charCodeAt(t)) % 0x7fffffff;
            return c2[e % c2.length];
        }, [d]),
        e3 = eh ? eS.intl.string(ew.default.Zc7gML) : "greeting" === e0 && 0 === j.length ? e2 : null,
        e4 = i.useMemo(() => {
            for (let e = j.length - 1; e >= 0; e--) {
                let t = j[e];
                if ("assistant" === t.role && !(0, nT.BL)(t)) return t;
            }
        }, [j]),
        e7 = null != e4,
        e5 = i.useMemo(() => j.filter((e) => "user" === e.role && "queued" === e.disposition), [j]),
        e6 = null != e4 ? (0, rG.S)(e4) : void 0,
        e8 = eh && ef ? ec : void 0,
        e9 = i.useCallback(() => (0, n3.RQ)(d, eS.intl.string(ew.default.EMgIuY)), [d]),
        [te, tt] = i.useState(null),
        [tn, tl] = i.useState(e7);
    (tn !== e7 && (tl(e7), e7 || tt(null)),
        i.useEffect(() => {
            if (!e7) return;
            let e = I.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? tt(null)
                        : tt(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [e7, e4?.steps, D]));
    let tr = D ? te : "bottom",
        ta = i.useMemo(() => (null != e4 ? (0, nR.b9)(e4.steps) : ""), [e4]),
        ti = i.useMemo(() => (null != e4 ? ((0, n_.lt)(e4.steps) ?? e4.todos) : void 0), [e4]),
        ts = e4?.provisionalTodo,
        tu = null != e4 && nP(e4),
        to = i.useMemo(() => {
            var e;
            return null != e4 ? ((e = e4.steps), r9((0, n_.Jf)(e, !0).tasks)) : void 0;
        }, [e4]);
    return (0, a.jsxs)("section", {
        ref: C,
        "data-conjure-chat": !0,
        className: c1.TE,
        children: [
            ef
                ? (0, a.jsx)(nE.A, {
                      title: eS.intl.string(ew.default.gy7byi),
                      description: eS.intl.string(ew.default["dkv/WO"]),
                      icons: c0.ir,
                      onDrop: eo,
                  })
                : null,
            (0, a.jsx)(n1, {
                onJumpToActivity: G,
                line: ta,
                placement: e7 && "top" === tr ? "top" : null,
                todos: ti,
                todosLive: tu,
                provisionalTodo: ts,
                agents: to,
            }),
            (0, a.jsxs)("div", {
                className: c1.JX,
                children: [
                    (0, a.jsx)(nC.Ch, {
                        ref: I,
                        onScroll: U,
                        scrollbarGutter: e1 ? "both-edges" : "stable",
                        className: [c1.N$, R ? null : c1.hB, eV ? c1.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(rU.Fu.Provider, {
                            value: d,
                            children: (0, a.jsx)(cE, {
                                projectId: d,
                                messages: j,
                                emptyState: e0,
                                floatingSettingsMessageId: eU?.id,
                                liveClarificationId: eI?.id,
                                onPickIdea: ef ? en : void 0,
                                onAskForIdeas: ef ? ea : void 0,
                                draftHasText: el,
                                onApprovePlan: ef ? e9 : void 0,
                                onRestoreVersion: ed || e7 ? void 0 : g,
                                scrollerRef: I,
                                stickToBottomRef: _,
                                pinned: P,
                                onUnpin: $,
                                handleRef: E,
                                onShowsLatestChange: O,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: c1.NJ,
                        children: (0, a.jsx)(cJ, {
                            projectId: d,
                            thinking: e7,
                            turnStartedAt: e6,
                            restoring: ed,
                            remixStartedAt: Y,
                            recalling: e1,
                            thinkingActivity: k,
                            compacting: w,
                            saving: S,
                            projectUsage: y,
                            connState: b,
                            queued: e5,
                        }),
                    }),
                    N
                        ? (0, a.jsx)("div", { ref: eX, className: c1.B5, children: (0, a.jsx)(rb, { projectId: d }) })
                        : null,
                    null == eI
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eX,
                              className: eV ? `${c1.B5} ${c1.J9}` : c1.B5,
                              children:
                                  null != eI.install_scope_switch
                                      ? (0, a.jsx)(
                                            ry,
                                            {
                                                projectId: d,
                                                clarification: eI,
                                                offer: eI.install_scope_switch,
                                                onKept: ej,
                                            },
                                            eI.id,
                                        )
                                      : (0, a.jsx)(
                                            ra,
                                            {
                                                projectId: d,
                                                clarification: eI,
                                                onSubmit: ef ? ei : void 0,
                                                onDismiss: ej,
                                            },
                                            eI.id,
                                        ),
                          }),
                    null == eC
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eX,
                              className: c1.B5,
                              children: (0, a.jsx)(
                                  ll,
                                  { projectId: d, request: eC, canSend: ef, onDismiss: eP, onSent: eE ? eR : void 0 },
                                  eC.id,
                              ),
                          }),
                    null == eK
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eI && null == eC ? eX : void 0,
                              className: c1.B5,
                              children: (0, a.jsx)(
                                  rD,
                                  { askId: eB?.id, projectId: d, request: eK, onDismiss: eH },
                                  eB?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: c1.Jx,
                children: [
                    (0, a.jsx)(n1, {
                        onJumpToActivity: G,
                        line: ta,
                        placement: e7 && "bottom" === tr ? "bottom" : null,
                        todos: ti,
                        todosLive: tu,
                        provisionalTodo: ts,
                        agents: to,
                    }),
                    0 === V.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: c1.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(o.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: eS.intl.formatToPlainString(ew.default["7b49dS"], {
                                          count: V.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(o.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: eS.intl.string(ew.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(x.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: eS.intl.string(ew.default["/zOv9+"]),
                                      onClick: () => H(d),
                                  }),
                              ],
                          }),
                    null == Q
                        ? null
                        : (0, a.jsx)("div", {
                              className: c1.qB,
                              children: (0, a.jsx)(nI.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: Q.message,
                                  action: Q.retry,
                              }),
                          }),
                    null == W
                        ? null
                        : (0, a.jsxs)("div", {
                              className: c1.Db,
                              children: [
                                  (0, a.jsx)(nI.w, { type: "warning", role: "status", message: W.message }),
                                  (0, a.jsx)("div", {
                                      className: c1.jU,
                                      children: (0, a.jsx)(tO.m, {
                                          text: eS.intl.string(eS.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tZ.K, {
                                              "aria-label": eS.intl.string(eS.t.WAI6xu),
                                              icon: tP.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: W.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    null == X
                        ? null
                        : (0, a.jsx)("div", {
                              className: c1.qB,
                              children: (0, a.jsx)(nI.w, {
                                  type: X.blocked ? "critical" : "warning",
                                  role: X.blocked ? "alert" : "status",
                                  message: X.message,
                              }),
                          }),
                    (0, a.jsx)(
                        uR,
                        {
                            projectId: d,
                            escapeScopeRef: v,
                            canSend: ef,
                            running: e7,
                            restoring: ed,
                            onSend: ee,
                            hasPendingContext: V.annotations.length > 0,
                            onInterrupt: ef ? et : void 0,
                            onUploadFile: eu,
                            onImport: p,
                            onSendToOtherProjects: eQ ? void 0 : eN.open,
                            onApprove: e8,
                            suggestion: e3,
                            questionOpen: eQ,
                            modelSettings: A,
                            onModelSettingsChange: es,
                            onDraftHasTextChange: er,
                            inputLocked: N,
                            aiPaused: X?.blocked === !0,
                        },
                        eJ,
                    ),
                ],
            }),
        ],
    });
}
var c4 = n(761508),
    c7 = n(933294),
    c5 = n(207438),
    c6 = n(683438),
    c8 = n(721507);
function c9(e, t) {
    return String(e).padStart(t, "0");
}
function de(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${c9(l.getHours(), 2)}:${c9(l.getMinutes(), 2)}:${c9(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${c9(l.getMilliseconds(), 3)}` : r;
}
var dt = n(667931);
let dn = {
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
    dl = { running: "Running", ok: "Done", error: "Failed" };
function dr(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function da(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function di(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function ds(e) {
    return da(e.count > 1 ? e.totalMs : e.end - e.start);
}
let du = ["Arguments", "Result", "Usage", "Details"];
function dc(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function dd(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function df(e) {
    let t = (0, dt.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, dt.lp)(e) ? "interrupted" : "still running";
}
function dm(e) {
    return [de(new Date(e.started_at).toISOString()) ?? "", di(e.spans.length), (0, dt.Sj)((0, dt.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function dh(e) {
    let t = (0, dt.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, dt.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += dg(r, "in")),
                (l.output += dg(r, "out")),
                (l.cacheRead += dg(r, "cache_read")),
                (l.cacheWrite += dg(r, "cache_write")),
                (l.costUsd += dg(r, "cost_usd"))));
    }
    let r = dt.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function dg(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var dp = n(738188),
    dx = n(430993),
    dv = n(364840),
    dj = n(224640),
    db = n(20742);
let dy = { collapsed: new Set(), revealed: new Set() };
var dk = n(872892);
let dw = {
    op: dk.Q,
    model: dk.i3,
    tool: dk.dH,
    setup: dk.kc,
    worktree: dk.Qx,
    sandbox: dk.QH,
    build: dk.F1,
    platform: dk.Op,
    other: dk.fv,
};
function dS(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      di(t.calls, "model call"),
                      `${dr(t.input)} in`,
                      `${dr(t.output)} out`,
                      `${dr(t.cacheRead)} cache read`,
                      `${dr(t.cacheWrite)} cache write`,
                      dd(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: dk.M1,
        children: [
            (0, a.jsx)("div", {
                className: dk.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${dk.DJ} ${dw[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: dk.o1,
                children: dt.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${da(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: dk.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${dk.nf} ${dw[e]}` }),
                                (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", children: dn[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(o.E, {
                                          variant: "text-xs/normal",
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
                : (0, a.jsx)(o.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function dN(e) {
    return `conjure-perf-trace-${e}`;
}
function dA(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        u = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: dk.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(u) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(o.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${dk.p0} ${s + u > 85 ? dk.EU : dk.jh}`,
                children: i,
            }),
        ],
    });
}
function dC(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: u, onExpandSubtree: c } = e,
        d = t.children.length > 0,
        f = l ? nO._ : tl.a,
        m = i.useCallback(
            (e) => {
                (e.shiftKey && c(t.key), s(t.key));
            },
            [t.key, c, s],
        ),
        h = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? c(t.key) : u(t.key));
            },
            [t.key, c, u],
        );
    return (0, a.jsxs)(nL.D, {
        tag: "div",
        role: "treeitem",
        id: dN(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": d ? !l : void 0,
        "aria-selected": r,
        className: `${dk.$y} ${r ? dk.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: dk.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    d
                        ? (0, a.jsx)(nL.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: dk.ai,
                              onClick: h,
                              children: (0, a.jsx)(f, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: dk.YJ }),
                    (0, a.jsx)(o.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: dk.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${dk.nf} ${dw[t.category]}` }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: dk.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: dk.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(o.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: dk.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(dp.WarningIcon, { size: "xs", color: "currentColor", className: dk.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(dA, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${dk.M0} ${dk.Nh}`
                    : t.running
                      ? `${dk.M0} ${dk.rF}`
                      : `${dk.M0} ${dw[t.category]}`,
                duration: ds(t),
            }),
        ],
    });
}
function dI(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(nL.D, {
        tag: "div",
        role: "treeitem",
        id: dN(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${dk.$y} ${l ? dk.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: dk.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: dk.ai,
                        children: (0, a.jsx)(nO._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: dk.U9 }),
                    (0, a.jsx)("span", { className: `${dk.nf} ${dk.dL}` }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: dk.MQ,
                        children: di(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(dA, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${dk.M0} ${dk.ab} ${dk.dL}`,
                duration: da(t.totalMs),
            }),
        ],
    });
}
function dE(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(o.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: dk._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: dk.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${dk.nf} ${dw[t.category]}` }),
                          (0, a.jsx)(o.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [dc("Start", `+${da(e.start)}`), dc("Duration", ds(e))];
                      e.count > 1
                          ? t.push(
                                dc("Calls", String(e.count)),
                                dc("Longest call", da(e.maxMs)),
                                dc("Spread over", da(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(dc("Self time", da(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(dc("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(dc("Notes", l.join(", "))),
                          null != e.span.error && t.push(dc("Error", e.span.error)));
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
                              s = "cost_usd" === t ? dd(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), dc(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...du.flatMap((e) => {
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
                                      : (0, a.jsx)(o.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-strong",
                                            className: dk.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(o.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(o.E, {
                                                            variant: "code",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: dk.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(o.E, {
                                                            variant: "text-xs/normal",
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
function dM(e) {
    let { trace: t } = e,
        n = i.useMemo(() => dh(t), [t]);
    return (0, a.jsx)(dS, { stats: n });
}
function d_(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, dt.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? dy : (0, dt.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, dt.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, dt.x7)(t)), l((n) => (0, dt._0)(n, t, e)));
            }, [t]);
            let u = i.useMemo(() => (null == t ? [] : (0, dt.wu)(t, n)), [t, n]),
                o = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, dt.IE)(t, e);
                        null != n && l((e) => (0, dt.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, dt.IE)(t, e);
                        null != n && l((e) => (0, dt.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, dt.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, dt.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, dt.hB)(t));
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
        { rows: l, collapsed: r, selected: s, selectedKey: u, select: c, toggle: d, reveal: f, expandSubtree: m } = n,
        h = (0, dt.dj)(t),
        g = i.useMemo(() => (0, dt.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        v = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === u),
                    a = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == a) return;
                else if ("smaller" === a.kind && ("ArrowRight" === e.key || "Enter" === e.key)) f(a.parentKey);
                else if ("node" === a.kind && "ArrowRight" === e.key && e.shiftKey) m(a.key);
                else if ("node" === a.kind && "ArrowRight" === e.key && r.has(a.key)) d(a.key);
                else {
                    if ("node" !== a.kind || "ArrowLeft" !== e.key || !(a.node.children.length > 0) || r.has(a.key))
                        return;
                    d(a.key);
                }
                (e.preventDefault(),
                    null != t && (c(t.key), document.getElementById(dN(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, f, l, c, u, d],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(dx.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: dk.z,
                        children: [
                            (0, a.jsx)(o.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: df(t),
                            }),
                            (0, a.jsx)(o.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: dm(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(o.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(o.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${di(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(dM, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: dk.KE,
                        children: [
                            (0, a.jsx)(x.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(x.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(x.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == u ? void 0 : dN(u),
                        className: dk.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: v,
                        children: [
                            (0, a.jsxs)("div", {
                                className: dk.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: dk.So,
                                        children: (0, a.jsx)(o.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: dk.c1,
                                        children: g.map((e) =>
                                            (0, a.jsx)(
                                                o.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${dk.io} ${(e / h) * 100 > 85 ? dk.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : da(e),
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
                                          dC,
                                          {
                                              node: e.node,
                                              extent: h,
                                              collapsed: r.has(e.key),
                                              selected: e.key === u,
                                              onSelect: c,
                                              onToggle: d,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, a.jsx)(dI, { row: e, extent: h, selected: e.key === u, onReveal: f }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(dv.j, { children: (0, a.jsx)(dE, { node: s }) }),
        ],
    });
}
function dT(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, f.bG)([cu.A], () => cu.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(dj.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(db.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(dx.c, {
                      children: (0, a.jsx)(o.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(d_, { trace: i }),
        ],
    });
}
let dP = { running: dk.Vf, ok: dk.mo, error: dk.Sr };
function dR(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${dk.Om} ${dP[t]}`, role: "img", "aria-label": dl[t] });
}
function dL(e, t) {
    (0, eP.openModal)((n) => (0, a.jsx)(dT, { ...n, projectId: e, traceId: t }));
}
function d$(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => dL(t, n.id), [t, n.id]);
    return (0, a.jsxs)(nL.D, {
        className: dk.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: dk.sU,
                children: [
                    (0, a.jsx)(dR, { status: (0, dt.lQ)(n) }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: dk._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(o.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: df(n),
                    }),
                ],
            }),
            (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: dm(n) }),
            null == l
                ? null
                : (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dq(e) {
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
            (0, c8.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(e9.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: e9.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(te.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(tt.rX, {
                    children: (0, a.jsx)(tt.Dr, {
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
            return (0, a.jsx)(tZ.K, {
                ...e,
                buttonRef: l,
                icon: iA.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dD(e) {
    let { projectId: t } = e,
        n = (0, f.yK)([cu.A], () => cu.A.getTimingTraces(t), [t]),
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
        c = i.useMemo(
            () =>
                (function (e) {
                    let t = e.map(dh);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: dt.BF.map((e) => ({
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
              className: dk.Ie,
              children: [
                  (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(o.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: dk.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: dk.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: dk.fH,
                              children: (0, a.jsx)(c6.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(dq, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(nC.Ch, {
                      className: dk.XG,
                      children: [
                          (0, a.jsx)(dS, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(o.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: dk.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(d$, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dF(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dO(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dz(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dG(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dU(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dB(e) {
    return eS.intl.string("preview" === e ? ew.default["2yLYlG"] : ew.default.eiAi57);
}
let dK = ["all", "preview", "stable", "web"];
function dH(e) {
    switch (e.reason) {
        case "local":
            return eS.intl.string(ew.default.mUeKML);
        case "unconfigured":
            return eS.intl.string(ew.default.bGefb5);
        case "unauthorized":
            return eS.intl.string(ew.default.KLx6Bb);
        default:
            return null != e.detail
                ? eS.intl.formatToPlainString(ew.default.t09Q6q, { detail: e.detail })
                : eS.intl.string(ew.default["t+tG59"]);
    }
}
function dV(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : eS.intl.formatToPlainString(ew.default["XO/bN4"], {
              p50: dF(e.memory_p50_bytes ?? 0),
              p999: dF(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dW = {
    db: () => ew.default["7l+DFG"],
    db_preview: () => ew.default.FAuffi,
    runtime: () => ew.default["Gkl+ab"],
    runtime_preview: () => ew.default.ynpJzv,
    bot: () => ew.default["5/i0cj"],
    bot_preview: () => ew.default.m2jsnw,
};
var dX = n(911608),
    dZ = n(177427);
function dQ(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dZ.KE,
        children: [
            (0, a.jsx)("div", {
                className: dZ.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(c.y, { type: c.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: eS.intl.string(ew.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(o.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eS.intl.formatToPlainString(ew.default.INVO50, { time: dG(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(x.$, { variant: "secondary", size: "sm", text: eS.intl.string(ew.default.oKEgiu), onClick: l }),
        ],
    });
}
function dY(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dZ.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(o.E, { variant: "text-xs/semibold", color: "text-muted", className: dZ.Gf, children: t }),
            n,
        ],
    });
}
function dJ(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dZ.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dZ.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dZ.kS,
                        children: [i, (0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dZ.kS,
                        children: [
                            s,
                            (0, a.jsx)(o.E, {
                                variant: "text-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function d0(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dZ.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dZ.x7,
                children: [
                    (0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(dX.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dZ.dh : void 0,
            }),
        ],
    });
}
function d1(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dJ, {
            label: eS.intl.string(ew.default.SXP7pD),
            value: eS.intl.string(ew.default.E5hKVi),
            hint: dH(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dJ, {
            label: eS.intl.string(ew.default.SXP7pD),
            value: "\u2014",
            hint: eS.intl.string(ew.default.AGvoMJ),
        });
    let l = dV(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dJ, { label: eS.intl.string(ew.default["H/X+FI"]), value: dO(n.cpu_ms) }),
            null != l && (0, a.jsx)(dJ, { label: eS.intl.string(ew.default.lmFmMO), value: l }),
        ],
    });
}
function d2(e) {
    let { analytics: t } = e,
        n = eS.intl.string(ew.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dY, {
            title: n,
            children: (0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: dH(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dW[t] : null) ? eS.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dY, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(o.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: eS.intl.string(ew.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dJ,
                          {
                              label: n,
                              value: eS.intl.formatToPlainString(ew.default["w/2voO"], { cpu: dO(t.cpu_ms) }),
                              hint: dV(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var d3 = n(678708),
    d4 = n(414499),
    d7 = n(714800),
    d5 = n(81466),
    d6 = n(424383),
    d8 = n(664121),
    d9 = n(816943),
    fe = n(268791),
    ft = n(514042),
    fn = n(872351),
    fl = n(708988),
    fr = n(150934),
    fa = n(417270);
let fi = "Restart Agent",
    fs = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function fu(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function fo(e, t) {
    return { label: e, value: null != t && "" !== t ? dG(t) : "Unknown", icon: "calendar" };
}
function fc(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function fd(e, t, n, l) {
    let [r, a] = fs[n.status];
    return { label: e, value: `${fc(n.bytes)} of ${fc(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function ff(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dG(e.at);
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
let fm = { main: "Main vs Remote", wip: "WIP vs Remote" };
function fh(e) {
    let t = `container ${fu(e.local)} \xb7 remote ${fu(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fm[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dz(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dz(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dz(n)} Ahead, ${dz(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let fg = ["main", "wip"];
var fp = n(400154);
let fx = {
        checkout: d3.FolderIcon,
        edit: lx.PencilIcon,
        remote: d4.h,
        commits: d7.e,
        calendar: d5.CalendarIcon,
        save: d6.L,
        objects: d8.R,
        download: d9.$,
        size: fe.$,
        file: ft.FileIcon,
    },
    fv = {
        ok: [rP.y, t3.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [dp.WarningIcon, t3.A.colors.ICON_FEEDBACK_WARNING],
        error: [s7.a, t3.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [fn.z, t3.A.colors.ICON_MUTED],
        behind: [fl.M, t3.A.colors.ICON_MUTED],
    };
function fj(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, f.bG)([cu.A], () => cu.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, c5.DK)(t), [t]),
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
                    `Updated ${dG(r)}`,
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
    return (0, a.jsxs)(dY, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: fp.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(o.E, {
                        variant: "text-xs/normal",
                        role: "status",
                        color: l.critical ? "text-feedback-critical" : "text-muted",
                        children: l.line,
                    }),
            }),
            null != n.info &&
                (function (e) {
                    var t;
                    let n;
                    if (!e.running || null != e.localError) return [ff(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            ff(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dz(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = fg.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(fh))
                        : l.push(
                              { label: "Main", value: fu(e.heads.main), icon: "remote" },
                              { label: "WIP", value: fu(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dz(e.commits) : "Unknown", icon: "commits" },
                            fo("Oldest Commit", e.oldest),
                            fo("Newest Commit", e.newest),
                            ff(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dz(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dz(t.loose)} loose (${dF(t.looseBytes)}) \xb7 ${dz(t.packed)} packed in ${n} (${dF(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dz(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dz(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                fd(
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
                                  fd("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = fx[r],
                        [u, o] = null != i ? fv[i] : [null, void 0];
                    return (0, a.jsx)(
                        dJ,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: t3.A.colors.ICON_MUTED }),
                            state: null != u ? (0, a.jsx)(u, { size: "xs", color: o }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function fb(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, f.bG)([cu.A], () => cu.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, c5.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = cu.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, c5.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                oA.h.dispatch({
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
            let u = i.useCallback(() => (0, c5.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: fi,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, ej.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: fp.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: fp.nM,
                children: [
                    (0, a.jsx)(fr.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(x.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: fa.RetryIcon,
                        text: fi,
                        loading: l,
                        disabled: l,
                        onClick: d,
                    }),
                ],
            }),
            (0, a.jsx)(o.E, {
                variant: "text-xs/normal",
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
                            return `Restarted \xb7 new instance since ${dG(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dG(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fy(e, t) {
    return (0, a.jsx)(dJ, {
        label: e,
        value: eS.intl.formatToPlainString(ew.default.yHJxuP, { count: dz((0, cG.aM)(t)) }),
        hint: `${dz(t.input_tokens)} in \xb7 ${dz(t.output_tokens)} out \xb7 ${dz(t.cache_read_input_tokens)} cache read`,
    });
}
function fk(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        c,
        d,
        m,
        h,
        { projectId: g, status: p, fetchState: v, onRefresh: j } = e,
        {
            lastTurn: b,
            lastCompaction: y,
            lastDecline: k,
            forceState: w,
            restartState: S,
            turnRunning: N,
            handleForceCompaction: A,
            handleForceCompactionOverride: C,
            handleRestartWorkspace: I,
            lifetime: E,
            limits: M,
            session: _,
            contextCeiling: T,
        } = ((t = (0, f.bG)([cu.A], () => cu.A.getLastTurnUsage(g), [g])),
        (n = (0, f.bG)([cu.A], () => cu.A.getLastCompaction(g), [g])),
        (l = (0, f.bG)([cu.A], () => cu.A.getLastCompactionDecline(g), [g])),
        (r = (0, f.bG)([cu.A], () => cu.A.getForceCompactionState(g), [g])),
        (s = (0, f.bG)([cu.A], () => cu.A.getSandboxRestartState(g), [g])),
        (u = (0, f.bG)([rc.A], () => rc.A.isThinking(g), [g])),
        (c = i.useCallback(() => (0, c5.Lj)(g), [g])),
        (d = i.useCallback(() => (0, c5.Lj)(g, !0), [g])),
        (m = i.useCallback(() => (0, c5.bq)(g), [g])),
        (h = p?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: u,
            handleForceCompaction: c,
            handleForceCompactionOverride: d,
            handleRestartWorkspace: m,
            lifetime: p?.agent?.lifetime ?? null,
            limits: h,
            session: p?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, a.jsxs)("div", {
        className: fp.Mf,
        children: [
            (0, a.jsx)(dQ, { generatedAt: p?.generated_at ?? null, fetchState: v, onRefresh: j }),
            (0, a.jsx)(dY, {
                title: eS.intl.string(ew.default.JghNal),
                children:
                    null == E
                        ? (0, a.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eS.intl.string(ew.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dJ, {
                                      label: eS.intl.string(ew.default["9nqym2"]),
                                      value: dz((0, cG.a7)(E.cost_usd)),
                                      hint: eS.intl.formatToPlainString(ew.default.NCdUIh, { count: dz(E.turns) }),
                                  }),
                                  fy(eS.intl.string(ew.default.xtxP0e), E.orchestrator),
                                  fy(eS.intl.string(ew.default["9Sj3SX"]), E.codegen),
                                  fy(eS.intl.string(ew.default.ANCEo3), (0, cG.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dJ, {
                                          label: eS.intl.string(ew.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dz(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dY, {
                title: eS.intl.string(ew.default.dZHPE5),
                children:
                    null == b
                        ? (0, a.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eS.intl.string(ew.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  fy(eS.intl.string(ew.default["7X3i9d"]), b.total),
                                  (0, a.jsx)(dJ, {
                                      label: eS.intl.string(ew.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, cG.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dY, {
                title: eS.intl.string(ew.default.NbRk9a),
                children: [
                    null != y && null != T
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(d0, {
                                      label: eS.intl.string(ew.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: T,
                                      formatValue: dz,
                                  }),
                                  (0, a.jsx)(dJ, {
                                      label: eS.intl.string(ew.default.mRbSns),
                                      value: `${dz(y.tokensBefore)} \u{2192} ${dz(y.tokensAfter)}`,
                                      hint: eS.intl.formatToPlainString(ew.default.Vq3skS, {
                                          count: dz(y.retainedMessages),
                                          time: dG(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != T
                                      ? eS.intl.formatToPlainString(ew.default.GMLCNv, { ceiling: dz(T) })
                                      : eS.intl.string(ew.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dJ, {
                            label: eS.intl.string(ew.default["4BX5KK"]),
                            value: `${dz(k.projected)} / ${dz(k.threshold)}`,
                            critical: !0,
                            hint: eS.intl.formatToPlainString(ew.default["6ngCax"], { time: dG(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: fp.Lj,
                        children: [
                            (0, a.jsx)(x.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eS.intl.string(ew.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: A,
                            }),
                            (0, a.jsx)(o.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eS.intl.string(ew.default.wox6Ev);
                                    if ("pending" === e) return eS.intl.string(ew.default.OcPHQ1);
                                    let t = dG(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return eS.intl.formatToPlainString(ew.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? ew.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? ew.default.YZb4hK
                                              : ew.default.ZoUSVK;
                                    return eS.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(w),
                            }),
                            "object" == typeof w &&
                                !0 === w.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(x.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: eS.intl.string(ew.default.ZxG2AI),
                                            onClick: C,
                                        }),
                                        (0, a.jsx)(o.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: eS.intl.string(ew.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: fp.Lj,
                        children: [
                            (0, a.jsx)(x.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eS.intl.string(ew.default["5qCjBu"]),
                                loading: "pending" === S,
                                disabled: "pending" === S || N,
                                onClick: I,
                            }),
                            (0, a.jsx)(o.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof S && "restarted" !== S.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eS.intl.string(ew.default.mlok8D);
                                    if ("pending" === e) return eS.intl.string(ew.default["1ugSyK"]);
                                    let t = dG(e.observedAt);
                                    return eS.intl.formatToPlainString(
                                        "restarted" === e.outcome ? ew.default["76mfqO"] : ew.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(S),
                            }),
                        ],
                    }),
                    (0, a.jsx)(fb, { projectId: g }),
                ],
            }),
            (0, a.jsx)(fj, { projectId: g }),
            (null != _ || p?.analytics != null) &&
                (0, a.jsxs)(dY, {
                    title: eS.intl.string(ew.default.EsSzCS),
                    children: [
                        null != _ &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dJ, {
                                        label: eS.intl.string(ew.default.CLXHAs),
                                        value: dG(_.instance_since),
                                        hint: eS.intl.string(ew.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dJ, {
                                        label: eS.intl.string(ew.default["8V8e1Z"]),
                                        value: dz(_.sockets),
                                    }),
                                    (0, a.jsx)(dJ, {
                                        label: eS.intl.string(ew.default["4pBzYW"]),
                                        value: _.turn_inflight
                                            ? eS.intl.string(ew.default.Wv025I)
                                            : eS.intl.string(ew.default["7/lsFY"]),
                                    }),
                                    _.queued_messages > 0 &&
                                        (0, a.jsx)(dJ, {
                                            label: eS.intl.string(ew.default["3oUYnv"]),
                                            value: dz(_.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, a.jsx)(d1, { analytics: p.analytics }),
                    ],
                }),
            null != M &&
                (0, a.jsxs)(dY, {
                    title: eS.intl.string(ew.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dJ, {
                            label: eS.intl.string(ew.default.IlDBN3),
                            value: dz(M.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dJ, {
                            label: eS.intl.string(ew.default["ZdzKR+"]),
                            value: eS.intl.formatToPlainString(ew.default.yHJxuP, {
                                count: dz(M.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(dJ, {
                            label: eS.intl.string(ew.default.cIhN2W),
                            value: eS.intl.formatToPlainString(ew.default.yHJxuP, {
                                count: dz(M.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dJ, {
                            label: eS.intl.string(ew.default["+fOn/q"]),
                            value: dz(M.max_user_message_chars),
                        }),
                        (0, a.jsx)(dJ, { label: eS.intl.string(ew.default.kIHga0), value: dz(M.max_build_attempts) }),
                        (0, a.jsx)(dJ, { label: eS.intl.string(ew.default.Iw03yW), value: dz(M.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fw = n(237528),
    fS = n(629584),
    fN = n(531893);
function fA(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fN.ut,
              children: (0, a.jsx)(o.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: eS.intl.string(ew.default.h1SE6R),
              }),
          });
}
function fC(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fN.qf,
              children: [
                  (0, a.jsx)(o.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: eS.intl.string(ew.default.h1SE6R),
                  }),
                  (0, a.jsx)(o.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: eS.intl.string(ew.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: fN.qf,
              children: [
                  (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fI(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fN.ps,
              children: (0, a.jsx)(o.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: eS.intl.string(ew.default.V7Ri8H),
              }),
          })
        : null;
}
var fE = n(109079);
let fM = i.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = i.useState(!1),
        u = i.useId(),
        c = i.useMemo(
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
        d = "error" === n.level ? "text-feedback-critical" : "text-default";
    return (0, a.jsxs)("div", {
        className: fE.vK,
        children: [
            (0, a.jsx)(o.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: fE.Mt,
                selectable: !0,
                children: de(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(o.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: fE.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fE.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fE.Cq, children: (0, a.jsx)(fw.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fE.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fw.v, {
                                text: eS.intl.string(ew.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != c
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== c.prefix &&
                                      (0, a.jsxs)(o.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [c.prefix, " "],
                                      }),
                                  (0, a.jsxs)(nL.D, {
                                      className: fE.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": u,
                                      "aria-label": eS.intl.string(ew.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(tl.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(nO._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(o.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  c.marker,
                                                  " ",
                                                  eS.intl.formatToPlainString(
                                                      "[\u2026]" === c.marker
                                                          ? ew.default.kUhyUv
                                                          : ew.default["N+fphl"],
                                                      { count: c.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(o.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: d,
                                          className: fE.dF,
                                          selectable: !0,
                                          id: u,
                                          children: c.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(o.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: d,
                              selectable: !0,
                              children: n.message,
                          }),
                ],
            }),
        ],
    });
});
function f_(e) {
    let { projectId: t } = e,
        n = (0, f.bG)([c7.A], () => c7.A.getLogs(t), [t]),
        l = (0, f.bG)([c7.A], () => c7.A.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [u, c] = i.useState(""),
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
        m = i.useRef(null),
        h = i.useRef(!0);
    i.useEffect(() => {
        h.current && m.current?.scrollToBottom();
    }, [d]);
    let g = i.useCallback(() => {
            let e = m.current;
            null != e && (h.current = 32 > e.getDistanceFromBottom());
        }, []),
        p = i.useMemo(
            () =>
                dK.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dB(e);
                            case "web":
                                return eS.intl.string(ew.default.IVzfVV);
                            default:
                                return eS.intl.string(ew.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: fE.$F,
        children: [
            (0, a.jsxs)("div", {
                className: fE.y4,
                children: [
                    (0, a.jsx)(fS.I, {
                        look: "pill",
                        "aria-label": eS.intl.string(ew.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fE.KT,
                        children: (0, a.jsx)(c6.I, {
                            query: u,
                            onChange: c,
                            onClear: () => c(""),
                            size: "sm",
                            placeholder: eS.intl.string(ew.default["m2+37Y"]),
                            "aria-label": eS.intl.string(ew.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(fA, { state: l }),
            (0, a.jsxs)(nC.Ch, {
                ref: m,
                onScroll: g,
                overflow: "auto",
                className: fE.sx,
                children: [
                    (0, a.jsx)(fI, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fC, {
                              state: l,
                              emptyTitle: eS.intl.string(ew.default.S7qlPG),
                              emptyBody: eS.intl.string(ew.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eS.intl.string(ew.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(fM, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fT(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dY, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(o.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: eS.intl.string(ew.default.umcjif),
                      }),
        })
    );
}
function fP(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dJ, {
                      label: eS.intl.formatToPlainString(ew.default["01ZMS4"], { env: dB(n) }),
                      value: ((t = l.connected), eS.intl.string(t ? ew.default.Wv025I : ew.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dJ, {
                      label: eS.intl.string(ew.default["z1dh+F"]),
                      value: dz(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dG(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dJ, { label: eS.intl.string(ew.default.Iz5GnJ), value: dz(l.guild_count) }),
                  (0, a.jsx)(dJ, {
                      label: eS.intl.string(ew.default["7UqtNv"]),
                      value: dz(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? eS.intl.formatToPlainString(ew.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dG(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dJ, {
                          label: eS.intl.string(ew.default["x3+JXJ"]),
                          value: dz(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dJ, { label: dB(n), value: eS.intl.string(ew.default.lTHQss) });
}
function fR(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dJ, {
        label: dB(t),
        value: eS.intl.formatToPlainString(ew.default["Xq+wHT"], {
            requests: dz(n.requests),
            failures: dz(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? eS.intl.formatToPlainString(ew.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dG(n.last_failure.at),
                  })
                : eS.intl.formatToPlainString(ew.default["7KlGT6"], { time: dG(n.since) }),
    });
}
function fL(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dJ, {
                label: eS.intl.formatToPlainString(ew.default["92gVTm"], { env: dB(t) }),
                value: dz(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dJ,
                    {
                        label: eS.intl.formatToPlainString(ew.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? eS.intl.formatToPlainString(ew.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? eS.intl.formatToPlainString(ew.default.wxAWNv, { time: dG(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function f$(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dJ, {
        label: dB(t),
        value: eS.intl.formatToPlainString(ew.default.suAOj9, { calls: dz(n.calls), errors: dz(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fq(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dY, {
            title: t,
            children: (0, a.jsx)(o.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eS.intl.string(ew.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dY, {
        title: t,
        children: [
            (0, a.jsx)(dJ, {
                label: eS.intl.string(ew.default.xtD4Zp),
                value: dz(n.requests),
                hint: eS.intl.formatToPlainString(ew.default["7KlGT6"], { time: dG(n.since) }),
            }),
            (0, a.jsx)(dJ, { label: eS.intl.string(ew.default.gfRhR3), value: dz(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(d0, {
                              label: eS.intl.string(ew.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dO,
                          }),
                          (0, a.jsx)(dJ, {
                              label: eS.intl.string(ew.default.mSKImM),
                              value: dO(r),
                              hint: eS.intl.formatToPlainString(ew.default.JqMU05, {
                                  total: dO(n.cpu_ms_total),
                                  wall: dO(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dJ, {
                      label: eS.intl.string(ew.default.LEJ5r3),
                      value: eS.intl.string(ew.default["2Ekb2b"]),
                      hint: eS.intl.string(ew.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dJ, { label: eS.intl.string(ew.default.xvmL1D), value: dO(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dJ, {
                    label: eS.intl.string(ew.default["4sQYwH"]),
                    value: dz(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, a.jsx)(dJ, {
                label: eS.intl.string(ew.default.bQenOy),
                value: dz(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: eS.intl.formatToPlainString(ew.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dJ, { label: eS.intl.string(ew.default.xgpn4Y), value: dU(n.build) }),
        ],
    });
}
function fD(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: eS.intl.string(ew.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: eS.intl.string(ew.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: eS.intl.string(ew.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dY, {
        title: eS.intl.string(ew.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dJ, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dJ, {
                                  label: eS.intl.formatToPlainString(ew.default.u7kJJ4, { env: n }),
                                  value: dF(l.r2_bytes),
                                  hint: eS.intl.formatToPlainString(
                                      l.r2_truncated ? ew.default.lH0oQw : ew.default.m9h02S,
                                      { count: dz(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(d0, {
                                      label: eS.intl.formatToPlainString(ew.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dF,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fF(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fp.Mf,
        children: [
            (0, a.jsx)(dQ, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(fq, {
                            title: eS.intl.string(ew.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fq, {
                            title: eS.intl.string(ew.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fD, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(fT, {
                                title: eS.intl.string(ew.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fP, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(fT, {
                                title: eS.intl.string(ew.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fR, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(fT, {
                                title: eS.intl.string(ew.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fL, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(fT, {
                                title: eS.intl.string(ew.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f$, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(d2, { analytics: t.analytics }),
                        (0, a.jsxs)(dY, {
                            title: eS.intl.string(ew.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dJ, {
                                    label: eS.intl.string(ew.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dU(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dJ, {
                                    label: eS.intl.string(ew.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dU(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fO = n(592465);
function fz(e) {
    let { projectId: t, onClose: n } = e,
        l = eM(),
        [r, s] = i.useState(() => (l && eC?.projectId === t ? "trace" : "logs")),
        u = (0, f.bG)([cu.A], () => cu.A.getStatus(t), [t]),
        o = (0, f.bG)([cu.A], () => cu.A.getFetchState(t), [t]),
        c = i.useCallback(() => {
            ((0, c5.R7)(t), (0, c5.DK)(t));
        }, [t]);
    (i.useEffect(() => c(), [c]), i.useEffect(() => (0, tp.subscribeDebugBacklog)(t), [t]));
    let d = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == eC || eC.projectId !== e) return null;
            let { traceId: t } = eC;
            return ((eC = null), t);
        })(t);
        return null != e && (dL(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        d();
    }, [d]),
        eI(t, () => {
            d() && s("trace");
        }));
    let m = i.useCallback(() => {
            (0, oQ.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: cu.A.getStatus(t),
                        last_turn_usage: cu.A.getLastTurnUsage(t),
                        last_compaction: cu.A.getLastCompaction(t),
                        last_compaction_decline: cu.A.getLastCompactionDecline(t),
                        timing_traces: cu.A.getTimingTraces(t),
                        logs: c7.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, eb.P0)({ text: eS.intl.string(ew.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = eS.intl.string(ew.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: fO.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(tL.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(tL.Ay.Icon, {
                            icon: oW.CopyIcon,
                            tooltip: eS.intl.string(ew.default.TkHqy2),
                            onClick: m,
                        }),
                        (0, a.jsx)(tL.Ay.Icon, { icon: tP.P, tooltip: eS.intl.string(eS.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(tL.Ay.ChannelIcon, { icon: oZ.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(tL.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: fO.rf,
                children: [
                    (0, a.jsxs)(c4.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": eS.intl.string(ew.default.RvvWIh),
                        className: fO.vR,
                        children: [
                            (0, a.jsx)(c4.V.Item, { id: "logs", children: eS.intl.string(ew.default["+VRYCm"]) }),
                            (0, a.jsx)(c4.V.Item, { id: "worker", children: eS.intl.string(ew.default["50D0FZ"]) }),
                            (0, a.jsx)(c4.V.Item, { id: "agent", children: eS.intl.string(ew.default.UkbTK1) }),
                            l ? (0, a.jsx)(c4.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(f_, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(fF, { status: u, fetchState: o, onRefresh: c })
                          : "trace" === r && l
                            ? (0, a.jsx)(dD, { projectId: t })
                            : (0, a.jsx)(fk, { projectId: t, status: u, fetchState: o, onRefresh: c }),
                ],
            }),
        ],
    });
}
var fG = n(365912),
    fU = n(873715);
function fB(e) {
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
let fK = Object.freeze({ x: -1, y: -1 });
function fH(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fB(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fV = n(192888);
function fW(e, t) {
    return (0, fV.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fH, () => ({ status: "failed" }));
}
var fX = n(108308);
let fZ = { x: 25, y: 21 };
function fQ(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fY(e, t, n, l) {
    let r = fQ(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fJ(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function f0(e) {
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
function f1(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = Z(u),
        m = (0, e_.Zv)(u),
        h = (0, eP.useHasAnyModalOpen)(),
        g = (0, f.bG)([ls.default], () => ls.default.getCurrentUser()),
        p = g?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [S, N] = i.useState(null),
        [A, C] = i.useState(!1),
        I = i.useRef(null),
        E = i.useRef(null),
        M = i.useRef(null),
        [D, F] = i.useState(null),
        [O, z] = i.useState(!1),
        [B, K] = i.useState(null),
        [X, Q] = i.useState(null),
        Y = i.useRef(!1),
        [J, ee] = i.useState(!1),
        [et, en] = i.useState(null),
        el = c && !m && !h;
    null == B || (el && B.projectId === u) || K(null);
    let er = B?.projectId ?? null;
    i.useEffect(() => {
        if (null != er) return () => (0, n3.xJ)(er, "design");
    }, [er]);
    let ea = tW(r, el);
    i.useEffect(() => {
        if (!el || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fU.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? f0(t.response) : null;
                    null == n ? w(!0) : (j(n), V(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (y(!1), w(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [el, r, u]);
    let ei = i.useRef(null);
    (i.useEffect(() => {
        if (!el || null == ea || null == u) return;
        if (null == v) {
            ei.current = ea;
            return;
        }
        if (tV(ei.current, ea)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            ei.current = ea;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, fU.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ec.current) return;
                        let l = f0(e.response);
                        null != l && (j(l), V(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = fB(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = G(u)).active &&
                                0 !== r.size &&
                                U(u, {
                                    ...n,
                                    annotations: n.annotations.map((e) => {
                                        let t = r.get(e.id);
                                        return null == t ? e : { ...e, target: t };
                                    }),
                                }));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [el, ea, v, d, u, r]),
        i.useEffect(() => {
            if (!el)
                return () => {
                    (N(null), K(null), en(null), j(null));
                };
        }, [el]));
    let es = i.useRef(null),
        eu = i.useRef(null),
        eo = i.useRef(!1),
        ec = i.useRef(!1);
    i.useEffect(() => {
        ((ec.current = el), el || ((es.current = null), (eu.current = null), (M.current = null), C(!1)));
    }, [el]);
    let ef = i.useCallback(
            function e() {
                if (eo.current) return;
                let t = es.current;
                if (null == t) return;
                es.current = null;
                let n = r();
                null != n &&
                    ((eo.current = !0),
                    fW(n, t).then((t) => {
                        if (((eo.current = !1), ec.current)) {
                            if ("picked" !== t.status || f6(t.target, ev.current.rect, ev.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && z(!0);
                            else {
                                let e = P(t.target);
                                (F((t) => (f5(t, e) ? t : e)),
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
        eh = i.useCallback(() => {
            if (null == B) return;
            let e = !Y.current;
            (Q({ at: B.at, label: B.label, draft: B.draft, instant: e }), ee(e), K(null));
        }, [B]);
    (i.useEffect(() => {
        if (!J) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ee(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [J]),
        i.useEffect(() => {
            if (null == X) return;
            let e = setTimeout(() => Q(null), f4);
            return () => clearTimeout(e);
        }, [X]));
    let eg = null == v || null == ea || v.viewport.width < 1 ? 1 : ea.width / v.viewport.width,
        ep = null != v || k,
        ex = i.useMemo(() => v?.elements ?? [], [v]),
        ev = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ev.current = { rect: ea, scale: eg };
    }, [ea, eg]);
    let ej = i.useCallback(
            (e, t, n) => {
                null != u &&
                    ((0, n3.xJ)(u, "design"),
                    en(null),
                    (Y.current = !1),
                    K({ projectId: u, target: e, anchor: t, draft: "", at: n, label: P(e) }));
            },
            [u],
        ),
        eb = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / eg, y: (e.clientY - t.top) / eg }), [eg]),
        ey = i.useCallback(() => {
            let e = M.current;
            if (null == e) return;
            let t = I.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = E.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ey);
    let ek = i.useCallback(
            (e) => {
                if (null == ea || null != et) return;
                if (((M.current = { x: e.clientX, y: e.clientY }), ey(), C(!0), null != B)) {
                    (Math.abs(e.clientX - B.at.x) > f7 || Math.abs(e.clientY - B.at.y) > f7) && (Y.current = !0);
                    return;
                }
                if (!ep) return void N(null);
                let t = eb(e, ea);
                if (O) {
                    let e = (function (e, t, n) {
                            let l = null,
                                r = 1 / 0;
                            for (let a of e) {
                                let { x: e, y: i, width: s, height: u } = a.rect;
                                if (s < 1 || u < 1 || t < e || n < i || t > e + s || n > i + u) continue;
                                let o = s * u;
                                o < r && ((l = a), (r = o));
                            }
                            return l;
                        })(ex, t.x, t.y),
                        n = null != e && f6(e, ea, eg) ? null : e;
                    if (null != n) {
                        let e = P(n);
                        F((t) => (f5(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = eu.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((eu.current = n), (es.current = n), ef());
            },
            [ea, eg, ep, eb, O, ex, B, et, ey, ef],
        ),
        eN = null == et ? null : d.find((e) => e.id === et.id),
        eA = el && (A || B?.target.marker != null || eN?.target.marker != null);
    i.useEffect(() => {
        if (eA)
            return () => {
                let e = r();
                null != e && fW(e, fK);
            };
    }, [eA, r]);
    let eC = i.useCallback(() => {
        (C(!1), N(null), (eu.current = null), (es.current = null));
    }, []);
    i.useEffect(() => {
        if (!el || !A || !ep || O || null != B || null != et) return;
        let e = M.current,
            { rect: t, scale: n } = ev.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((eu.current = l), (es.current = l), ef());
    }, [el, A, ep, O, B, et, ef]);
    let eI = i.useCallback(
            (e) => {
                if (null != B || null != et) {
                    (eh(), en(null));
                    return;
                }
                if (null == S || null == ea) return;
                let t = eb(e, ea);
                ej(
                    S,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? _
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(S, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [S, ea, eb, B, et, ej, eh],
        ),
        eE = i.useCallback(() => {
            null != u && (N(null), null != ed(u) ? em(u) : H(u));
        }, [u]),
        eM = i.useCallback(() => {
            null != u &&
                (null != B
                    ? eh()
                    : et?.confirmingRemove === !0
                      ? en({ ...et, confirmingRemove: !1 })
                      : null != et
                        ? en(null)
                        : eE());
        }, [u, B, et, eh, eE]),
        eT = i.useRef(eM),
        eR = i.useRef(u),
        eL = i.useRef(eE);
    i.useLayoutEffect(() => {
        ((eT.current = eM), (eR.current = u), (eL.current = eE));
    });
    let e$ = i.useRef(null);
    i.useEffect(() => {
        if (el)
            return (
                tD.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        tD.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eT.current());
        }
        function t(e) {
            let t = e.target;
            !(0, tq.vq)(t) ||
                e$.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fG.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eR.current || null == ed(eR.current)) && eL.current());
        }
    }, [el, s]);
    let eq = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eM());
                    return;
                }
                if (null != B || null != et || 0 === ex.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == S ? -1 : ex.findIndex((e) => e.ref === S.ref);
                    N(ex[(n + (t ? 1 : -1) + ex.length) % ex.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != S &&
                    (e.preventDefault(),
                    ej(S, _, { x: (ea?.left ?? 0) + S.rect.x * eg, y: (ea?.top ?? 0) + S.rect.y * eg }));
            },
            [u, B, et, ex, S, ej, eM, ea, eg],
        ),
        eD = i.useCallback(
            (e) => {
                null == u ||
                    null == B ||
                    ((T(B.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, tp.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = P(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${$}${r}${q}${L(e)}
${t.trim()}`;
                            })(B.target, B.draft),
                            e,
                        ),
                        eh(),
                        N(null)));
            },
            [u, B, eh],
        ),
        eF = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, tF.vX)(u, e)), [u]),
        eO = i.useCallback(() => {
            if (null != u && null != et && null != p && T(et.draft)) {
                var e, t;
                let n, l;
                ((e = et.id),
                    (t = et.draft.trim()),
                    null != (l = (n = G(u)).annotations.find((t) => t.id === e)) &&
                        W(l, p) &&
                        U(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    en({ ...et, editing: !1 }));
            }
        }, [u, et, p]),
        ez = i.useCallback(() => {
            if (null != u && null != et && null != p) {
                var e;
                let t, n;
                ((e = et.id),
                    null != (n = (t = G(u)).annotations.find((t) => t.id === e)) &&
                        W(n, p) &&
                        U(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    en(null));
            }
        }, [u, et, p]),
        eG = c
            ? b
                ? eS.intl.string(ew.default["Eb/YV9"])
                : k
                  ? eS.intl.string(ew.default.FD30bh)
                  : eS.intl.formatToPlainString(ew.default.dTSqLF, { count: d.length })
            : "",
        eU = el && null != ea,
        eB = A && null == et,
        eK = B?.target ?? eN?.target ?? null,
        eH = B ?? X,
        eV = B ?? (X?.instant === !0 ? null : X),
        eW =
            null != eN && null != ea
                ? (function (e, t) {
                      let { left: n, top: l } = fJ(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fY(eN.target, eN.anchor, ea, eg), ea)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eN?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eN;
            fW(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eN, r]),
        (0, t$.createPortal)(
            (0, a.jsxs)("div", {
                ref: e$,
                className: fX.Li,
                children: [
                    (0, a.jsx)(nF.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eG,
                    }),
                    eU
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: fX.MT,
                                      style: { left: ea.left, top: ea.top, width: ea.width, height: ea.height },
                                      "data-plain-cursor": eB ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": eS.intl.string(ew.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ek,
                                      onMouseLeave: eC,
                                      onClick: eI,
                                      onKeyDown: eq,
                                  }),
                                  null != S && null == S.marker && null == B && null == et
                                      ? (0, a.jsx)(f8, { box: fQ(S, ea, eg) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: fX.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fX.xz,
                                          "data-shown": null != S && null == et && null == B ? "" : void 0,
                                          "data-instant": J ? "" : void 0,
                                          children: (0, a.jsxs)(o.E, {
                                              variant: "text-xs/medium",
                                              className: fX.Ux,
                                              children: [
                                                  null == D
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fX.Tl, children: D.kind }),
                                                  null == D || "" === D.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fX.kh,
                                                            children: [" ", D.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: E,
                                      className: fX.Y,
                                      children: eB ? (0, a.jsx)("div", { className: fX.u }) : null,
                                  }),
                                  null == eV
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fX.aZ,
                                            style: {
                                                transform: `translate3d(${eV.at.x + 20}px, ${eV.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fX.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == B ? "" : void 0,
                                                children: (0, a.jsxs)(o.E, {
                                                    variant: "text-xs/medium",
                                                    className: fX.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fX.Tl,
                                                            children: eV.label.kind,
                                                        }),
                                                        "" === eV.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fX.kh,
                                                                  children: [" ", eV.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eK && null == eK.marker
                                      ? (0, a.jsx)("div", {
                                            className: fX.D0,
                                            style: fQ(eK, ea, eg),
                                            "aria-hidden": !0,
                                        })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fY(e.target, e.anchor, ea, eg),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fX.xL,
                                              style: { ...fJ(n, ea), width: 24, height: 24 },
                                              "aria-label": eS.intl.formatToPlainString(ew.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: R(e.target),
                                              }),
                                              "aria-expanded": et?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == B && en(l);
                                              },
                                              onFocus: () => {
                                                  null == B && en(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), eh(), en(l));
                                              },
                                              children: (0, a.jsx)(f2, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eH || null == u
                                      ? null
                                      : (0, a.jsx)(tK, {
                                            projectId: u,
                                            at: { x: eH.at.x + 20, y: eH.at.y + 20 },
                                            bounds: ea,
                                            kind: eH.label.kind,
                                            value: eH.draft,
                                            canSubmit: null != B && T(eH.draft),
                                            onChange: (e) => {
                                                null != B && K({ ...B, draft: e });
                                            },
                                            onSubmit: eD,
                                            onDismiss: eh,
                                            onUploadFile: eF,
                                            closing: null == B,
                                        }),
                                  null != eN && null != et && null != eW
                                      ? (0, a.jsxs)(f3, {
                                            point: eW,
                                            frame: ea,
                                            authorId: eN.authorId,
                                            title: R(eN.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                et.confirmingRemove ? en({ ...et, confirmingRemove: !1 }) : en(null);
                                            },
                                            onMouseLeave: () => {
                                                et.editing || et.confirmingRemove || en(null);
                                            },
                                            children: [
                                                et.editing
                                                    ? (0, a.jsx)(le.f, {
                                                          autoFocus: !0,
                                                          label: eS.intl.string(ew.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: et.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => en({ ...et, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eO());
                                                          },
                                                      })
                                                    : (0, a.jsx)(o.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: fX.aC,
                                                          children: eN.comment,
                                                      }),
                                                W(eN, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: fX.eB,
                                                          children: et.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(o.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fX.nv,
                                                                            children: eS.intl.string(ew.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(x.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: eS.intl.string(ew.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                en({ ...et, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(x.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: eS.intl.string(ew.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: ez,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(x.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: eS.intl.string(ew.default.friIzR),
                                                                            onClick: () =>
                                                                                en({
                                                                                    ...et,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        et.editing
                                                                            ? (0, a.jsx)(x.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !T(et.draft),
                                                                                  text: eS.intl.string(
                                                                                      ew.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eO,
                                                                              })
                                                                            : (0, a.jsx)(x.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: eS.intl.string(
                                                                                      ew.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      en({
                                                                                          ...et,
                                                                                          editing: !0,
                                                                                          draft: eN.comment,
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
function f2(e) {
    let { authorId: t } = e,
        n = (0, f.bG)([ls.default], () => ls.default.getUser(t), [t]);
    return (0, a.jsx)(ir.eu, {
        src: null == n ? null : ii.Ay.getUserAvatarURL(n),
        size: ia._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function f3(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        { point: c, frame: d, authorId: f, title: m, testId: h, onDismiss: g, onMouseLeave: p, children: x } = e,
        v = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(fZ);
    i.useLayoutEffect(() => {
        let e = v.current?.getBoundingClientRect(),
            t = j.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: k,
            top: w,
            originX: S,
            originY: N,
        } = ((n = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (r = Math.max((l = d.top + 8), d.top + d.height - 160 - 8)),
        (s = Math.min(Math.max(c.x - b.x, t), n)),
        { left: s, top: (u = Math.min(Math.max(c.y - b.y, l), r)), originX: c.x - s, originY: c.y - u }),
        A = { left: k, top: w, "--custom-conjure-card-origin-x": `${S}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, a.jsxs)("div", {
        ref: v,
        className: fX.Nr,
        style: A,
        "data-testid": h,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), g());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fX.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: fX.ip, children: (0, a.jsx)(f2, { authorId: f }) }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: fX.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fX.zI, children: x }),
        ],
    });
}
let f4 = 300,
    f7 = 2;
function f5(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function f6(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function f8(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fX.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var f9 = n(659723),
    me = n(697744),
    mt = n(130324);
function mn(e) {
    let t = (0, me.c)(),
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
    let r = (0, nM.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function ml(e) {
    let { className: t } = e,
        { Component: n, events: l } = mn(3e4);
    return (0, a.jsxs)("div", {
        className: p()(t, mt.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(o.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: mt.ol,
                children: eS.intl.string(ew.default.AyiQEp),
            }),
        ],
    });
}
var mr = n(251363),
    ma = n(944142),
    mi = n(532247),
    ms = n(501628);
function mu(e) {
    let { progress: t } = e,
        { Component: n } = mn(1500),
        l = eE.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(o.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: ms.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: ms.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function mo(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, f.bG)([ma.A], () => (s ? ma.A.getLiveReload(t) : null), [s, t]),
        o = (0, td.A)(n, r)?.id ?? null,
        c = u?.phase ?? null,
        d = u?.background === !0,
        m = (function (e, t, n) {
            let l = (0, mi.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [o, c] = i.useState(t);
            s !== l && (u(l), c(t), a(null != l || o ? null : (0, mi.QP)(e, s)));
            let d = (0, f.bG)(
                    [e2.A],
                    () => {
                        let e = e2.A.getFrame(n);
                        return (0, e6.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [n],
                ),
                m = i.useRef(d),
                h = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((m.current = d), d && (h.current = !0));
                }, [d]),
                i.useEffect(() => {
                    if (null == r) return;
                    function e() {
                        return a(null);
                    }
                    function t(t) {
                        null != t.target && t.target === (0, mr.ow)(null, n) && e();
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
        })(c, d, o),
        h = d ? null : (0, mi.h_)(c, u?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(nF.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: ms.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(mu, { progress: h }),
                  })
                : null,
        ],
    });
}
let mc = 0;
var md = n(782134),
    mf = n(357858),
    mm = n(343030),
    mh = n(317608),
    mg = n(35367),
    mp = n(228946);
let mx = { width: 1 / 0, height: 1 / 0 };
function mv(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mx;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var mj = n(702083);
function mb(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, f.cf)([tf.A], () => ({
            mobile: tf.A.isBuilderPreviewMobile(),
            landscape: tf.A.isBuilderPreviewLandscape(),
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
    let o = null != s && s.width > 0 ? s : null,
        c = n ? mv(l, o ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: p()(mj.dw, { [mj.PQ]: null != c }),
        children: (0, a.jsx)("div", { className: p()(mj.R9, { [mj.Vg]: null != c }), style: c ?? void 0, children: t }),
    });
}
var my = n(347927);
function mk(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: p()(my.Bf, l && my.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: my.Ux,
                children: [
                    (0, a.jsx)(k.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(o.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var mw = n(957272);
function mS(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, mg.A)({ applicationId: t, surface: n, launch: l });
    if (((0, mp.A)(t, n), s === mg.n.Launched)) {
        let e = (0, a.jsx)(mh.A, { frameId: i.id, level: mm.A.WithinAppContent, className: mw.Z7, overlay: r });
        return (0, tm.Q5)(n) ? (0, a.jsx)(mb, { children: e }) : e;
    }
    return (0, a.jsx)(mN, { state: s });
}
function mN(e) {
    let { state: t } = e;
    switch (t) {
        case mg.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: mw.qs,
                children: (0, a.jsx)(mk, {
                    title: eS.intl.string(ew.default["9kpdo7"]),
                    body: eS.intl.string(ew.default.iIA8Nj),
                }),
            });
        case mg.n.NoApplication:
            return (0, a.jsx)(ml, { className: mw.qs });
        case mg.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: mw.qs,
                children: (0, a.jsx)(mk, {
                    title: eS.intl.string(ew.default["7k4GyN"]),
                    body: eS.intl.string(ew.default.zdIy3R),
                }),
            });
        case mg.n.Error:
            return (0, a.jsxs)("div", {
                className: mw.qs,
                children: [
                    (0, a.jsx)(k.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: eS.intl.string(ew.default.lTPbnG),
                    }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: mw.tj,
                        children: eS.intl.string(ew.default.e6GiAZ),
                    }),
                ],
            });
        case mg.n.AwaitingLaunch:
        case mg.n.Loading:
            return (0, a.jsx)("div", { className: mw.qs, children: (0, a.jsx)(c.y, {}) });
    }
}
var mA = n(308528),
    mC = n(334738),
    mI = n(688606),
    mE = n(365971),
    mM = n(703462);
function m_(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: mM.f,
        children: [
            (0, a.jsx)(iV.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function mT() {
    return (0, a.jsx)("div", { className: mM.f, children: (0, a.jsx)(c.y, {}) });
}
function mP(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        c = (0, f.bG)([la.A], () => (null != o ? la.A.getChannel(o) : null), [o]);
    ((t = c?.id ?? null),
        i.useEffect(() => {
            null != t && mA.A.preload(e5.ME, t);
        }, [t]),
        (n = (0, f.bG)([oz.A], () => oz.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, mE.Xg)();
            return (
                (0, mC.yl)(t, e),
                () => {
                    (0, mC.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, m] = i.useState(null),
        h = d === r;
    return (i.useEffect(() => {
        if (null != c || h) return;
        let e = !1;
        return (
            (0, eO.CN)(l).then(
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
    }, [l, r, c, h]),
    h)
        ? (0, a.jsx)(m_, { message: eS.intl.string(ew.default["VP/O8s"]) })
        : null == c
          ? (0, a.jsx)(mT, {})
          : (0, a.jsx)("div", {
                className: mM.g,
                children: (0, a.jsx)(mI.A, { channel: c, guild: null, chatInputType: ug.oU.SIDEBAR }, c.id),
            });
}
var mR = n(765671),
    mL = n(596977),
    m$ = n(921853),
    mq = n(582063);
function mD(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        i = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(i + e + r.length) % r.length];
        (0, eO.vX)(t, n?.id ?? null);
    }
    let u = eS.intl.string(ew.default.Gl3XtE),
        c = eS.intl.string(ew.default["3FvcrY"]);
    return (0, a.jsxs)("div", {
        className: mq.aF,
        children: [
            (0, a.jsx)(tO.m, {
                text: u,
                position: "top",
                children: (0, a.jsx)(tZ.K, {
                    icon: m$.n,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(-1),
                }),
            }),
            (0, a.jsx)("div", {
                className: mq.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, a.jsx)(o.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: eS.intl.formatToPlainString(ew.default["140n5k"], {
                                  name: l.name,
                                  index: i + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, a.jsx)(o.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children: eS.intl.string(ew.default.wVJL0P),
                          }),
            }),
            (0, a.jsx)(tO.m, {
                text: c,
                position: "top",
                children: (0, a.jsx)(tZ.K, {
                    icon: nO._,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": c,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var mF = n(625903),
    mO = n(666476);
let mz = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function mG() {
    (0, eb.P0)({ text: eS.intl.string(ew.default.jj3abP), variant: "critical" });
}
function mU(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = eS.intl.string(ew.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(e9.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(mB, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: mq.m2,
                        children: (0, a.jsx)(tO.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tZ.K, {
                                "aria-label": r,
                                icon: mF.SettingsIcon,
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
                accept: mz.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mz.includes(n.type)
                                ? n.size > mO.aI
                                    ? (0, eb.P0)({ text: eS.intl.string(ew.default.T8Spiu), variant: "critical" })
                                    : (0, ab.M$)(t, n).catch(mG)
                                : (0, eb.P0)({ text: eS.intl.string(ew.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function mB(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, f.bG)([aj.A], () => aj.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(te.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": eS.intl.string(ew.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(tt.rX, {
                children: [
                    (0, a.jsx)(tt.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: eS.intl.string(ew.default.uQpDky),
                        icon: l0.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(tt.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: eS.intl.string(ew.default.AiAz8J),
                        icon: fa.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, ab.Og)(t).catch(mG));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(tt.rX, {
                children: (0, a.jsx)(tt.fP, {
                    id: "conjure-overlay-background-blur",
                    label: eS.intl.string(ew.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, ab.Y1)(t, !i) || mG();
                    },
                }),
            }),
        ],
    });
}
function mK(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: u, height: o } = (0, mR.Ay)(),
        { captures: c, selected: d } = av(n),
        f = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: eK({ width: l - 48, height: r - 48 }, n) };
            let a = t.width / t.height,
                i = Math.min(l, r * a),
                s = i / 1920,
                u = eK({ width: 1872, height: 1920 / a - 48 }, n);
            return { top: (r - i / a) / 2 + 24 * s, end: (l - i) / 2 + 24 * s, scale: u * s };
        })({ width: u, height: o }, d, l);
    return (
        i.useEffect(() => (0, mL.L0)(), []),
        (0, a.jsxs)("div", {
            className: mq.JH,
            children: [
                (0, a.jsx)(ak, { projectId: n, gameCaptures: !0 }),
                (0, a.jsx)("div", {
                    ref: s,
                    className: mq.dw,
                    children: (0, a.jsx)("div", {
                        className: mq.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${f.top}px`,
                            "--custom-conjure-overlay-widget-end": `${f.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(f.scale),
                        },
                        children: (0, a.jsx)(mS, { applicationId: t, surface: e6.ZN, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, a.jsx)(mU, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, a.jsx)(mD, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function mH(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, a.jsx)(mk, {
        title: eS.intl.string(ew.default.xlEjZ8),
        body: eS.intl.string(ew.default["4ByPbd"]),
        children: (0, a.jsx)(x.$, {
            size: "sm",
            variant: "primary",
            text: eS.intl.string(ew.default.RGeB11),
            onClick: t,
            loading: n,
        }),
    });
}
var mV = n(409478),
    mW = n(652227);
function mX(e) {
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
            overlayWidgetSize: m = eU,
            projectId: h,
            renderFrameOverlay: g,
            paused: p = !1,
            onResume: x,
        } = e,
        v = (0, f.bG)([ru.A], () => null != h && null != ru.A.getSetupStartedAt(h), [h]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: mW.qs, children: (0, a.jsx)(c.y, {}) })
        : s?.type === "bot_install"
          ? (0, a.jsx)("div", {
                className: mW.qs,
                children: (0, a.jsx)(mH, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: mW.RG,
                      children: [
                          (0, eW.yf)(u, o)
                              ? p
                                  ? (0, a.jsx)(mZ, { projectId: h, onResume: x })
                                  : (0, a.jsx)(mS, { applicationId: t, surface: l, launch: r, frameOverlay: g?.(l) })
                              : null,
                          "widget" === o && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: mW.qs,
                                        children: (0, a.jsx)(mk, {
                                            wide: !0,
                                            title: eS.intl.string(ew.default["08U+YO"]),
                                            body: eS.intl.string(ew.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(mV.A, { applicationId: d })
                              : null,
                          "overlay" === o && u.modes.includes("overlay")
                              ? (0, a.jsx)(mK, { applicationId: t, projectId: h, size: m, frameOverlay: g?.(e6.ZN) })
                              : null,
                          "bot" === o && null != n && null != h
                              ? (0, a.jsx)(mP, { projectId: h, previewApplicationId: n })
                              : null,
                      ],
                  })
            : v
              ? (0, a.jsx)("div", { className: mW.qs, children: (0, a.jsx)(c.y, {}) })
              : (0, a.jsx)(ml, { className: mW.qs });
}
function mZ(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mf.Pu)(t),
        (0, a.jsx)("div", {
            className: mW.qs,
            children: (0, a.jsx)(mk, {
                wide: !0,
                title: eS.intl.string(ew.default.MMWEH2),
                body: eS.intl.string(ew.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(x.$, {
                              size: "sm",
                              variant: "primary",
                              icon: md.PlayIcon,
                              text: eS.intl.string(ew.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var mQ = n(750506),
    mY = n(867193),
    mJ = n(539197),
    m0 = n(977020);
function m1(e) {
    let { projectId: t } = e,
        n = (0, mJ.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, mJ.Ie)(e);
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
    let { left: r, top: s, width: u, height: o, scale: c } = l;
    function d(e, t) {
        return { "--custom-conjure-cursor-x": `${e * c}px`, "--custom-conjure-cursor-y": `${t * c}px` };
    }
    return (0, a.jsxs)("div", {
        className: m0.$Q,
        style: { left: r, top: s, width: u, height: o, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [mJ.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: p()(m0.hN, m0.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: p()(m0.hN, m0.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: p()(m0.UE, { [m0.SP]: n.shown, [m0.Vq]: n.pressed, [m0.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var m2 = n(417760);
function m3(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, f.bG)([rc.A], () => null != e && rc.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, tp.interruptTurn)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, e_.CU)(n),
        c = "controlling" === t,
        d = eS.intl.string(c ? (u ? ew.default["VJW/5P"] : ew.default["+hD2Iz"]) : ew.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(x.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: eS.intl.string(ew.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: p()(m2.M0, m2.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(c_.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(sm.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(o.E, { variant: "text-sm/semibold", color: "none", className: m2.ID, children: d }),
                  c ? (0, a.jsx)(nF.A, { children: eS.intl.string(ew.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: m2.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: m2.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: m2.sp,
                      children: [
                          (0, a.jsx)(sm.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(c_.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: m2.f4,
                              children: [
                                  (0, a.jsx)(o.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: m2.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(o.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: m2.Rb,
                                            children: eS.intl.string(ew.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: m2.lC, children: m }) : null,
              ],
          });
}
function m4(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        u = (0, e_.Zv)(null != n && n === l ? t : null),
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
        c = (0, eP.useHasAnyModalOpen)(),
        d = (0, e3.cR)(s);
    i.useEffect(() => {
        u && d && null != s && (0, e3.BL)(s);
    }, [u, d, s]);
    let [f, m] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== o;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = tH(r());
            m((t) => (tV(t, e) ? t : e));
            let t = null == h ? null : tH(h);
            (x((e) => (tV(e, t) ? e : t)), null != h && (0, mY.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, mY.C)(0));
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
            let [e] = i.useContext(mQ.uY),
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
                      className: m2.D,
                      "data-phase": o,
                      children: (0, a.jsx)("div", {
                          className: m2.QF,
                          children: (0, a.jsx)(m3, { phase: o, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, t$.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(nF.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === o
                                ? eS.intl.string(ew.default.oWcemF)
                                : "handoff" === o
                                  ? eS.intl.string(ew.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, t$.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: m2.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: m2.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(m1, { projectId: t }),
                          ],
                      }),
                      S,
                  )
                : null,
        ],
    });
}
var m7 = n(399503),
    m5 = n(853555),
    m6 = n(271982),
    m8 = n(327152),
    m9 = n(187645);
let he = { width: 1280, height: 720 },
    ht = new Map(),
    hn = !1;
function hl() {
    let e = new Map();
    for (let t of new Set([...rc.A.getActivityOrderedProjectIds(), ...(0, e_.T7)()])) {
        if (!(rc.A.isThinking(t) || (0, e_.wK)(t)) || ez.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = m.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, tm.Rc)(t), (0, tm.Th)(t)].find(e6.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...ht]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            ht.delete(t),
            n.unregisterLookup(),
            m6.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, m8.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        ht.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = m9.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    hr(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (ht.set(e, l),
                    (l.unregisterLookup = (0, m5.Ng)(e, () => (0, mr.n5)(n, t))),
                    m6.A.registerFrameTarget(t, n, mm.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of ht) hr(t.element, e, t.frameId);
}
function hr(e, t, n) {
    if (e2.A.getFrame(n)?.surface.type === eX.U.OVERLAY) {
        let l = eH(m.Ay.getProject(t));
        (e.classList.remove(m9.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, m8.Pn)(n, l));
        return;
    }
    let l = tf.A.isBuilderPreviewMobile();
    e.classList.toggle(m9.L, !l);
    let r = l ? mv(tf.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, m8.Pn)(n, r ?? he));
}
var ha = n(873727),
    hi = n(147248),
    hs = n(418842),
    hu = n(363195);
let ho = 0;
var hc = n(818023);
let hd = null;
var hf = n(949621);
function hm(e) {
    let { projectId: t } = e,
        n = (0, f.bG)(
            [m.Ay],
            () => {
                let e = m.Ay.getProject(t);
                return null == e || null != e.install_scope_setup ? null : e.install_scope;
            },
            [t],
        );
    if (null == n) return null;
    let l = "guild" === n,
        r = eS.intl.string(l ? ew.default.cAExE8 : ew.default["15Y/Yz"]);
    return (0, a.jsx)(nD.u, {
        title: r,
        body: eS.intl.string(l ? ew.default.r8rVq1 : ew.default.IZMyda),
        position: "bottom",
        children: (0, a.jsx)("span", { className: hf.I, tabIndex: 0, children: (0, a.jsx)(fw.v, { text: r }) }),
    });
}
var hh = n(541940);
function hg(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: o,
            content: c,
            sidebar: d,
            showsFrame: m,
            paused: h,
        } = e,
        [g, x] = i.useState(null),
        v = (0, td.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, f.bG)([hu.A], () => (0, ha.x4)(hu.A.theme)),
            l = (0, f.bG)([hi.A], () => hi.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, f.cf)([it.Ay], () => ({
                reducedMotion: it.Ay.useReducedMotion,
                fontScale: (0, ha.U0)(),
                highContrast: it.Ay.isHighContrastModeEnabled,
                forcedColors: it.Ay.useForcedColors,
                underlineLinks: it.Ay.alwaysShowLinkDecorations,
            })),
            c = eE.hH.useSetting(),
            d = (0, hs.C)(),
            m = (0, f.bG)(
                [e2.A, tf.A],
                () =>
                    tf.A.isBuilderPreviewMobile() &&
                    e2.A.getFrame(t)?.applicationId === tf.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            g = i.useRef(!1),
            p = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, mr.n5)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++ho,
                    baseTheme: n,
                    customTheme: (0, ha.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: c,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                    formFactor: m,
                };
                (0, fV.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, m, t, s, c, e, r, d, o]),
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
                let n = (0, mr.n5)(e, t);
                null != n && n !== p.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, mr.n5)(e, t) && ((p.current = null), j());
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
    })(g, j),
        i.useEffect(() => {
            if (null != t) return (0, m5.Ng)(t, () => (0, mr.n5)(g, j));
        }, [t, g, j]));
    let b = i.useCallback(() => (0, mr.ow)(g, j), [g, j]),
        y = i.useCallback(() => (m ? (0, mr.ow)(g, j) : g), [m, g, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: p()(hh.Mh, o),
                children: [
                    u,
                    h
                        ? null
                        : (0, a.jsx)(m4, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: hh.fm, children: c }),
                ],
            }),
            d,
            h
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(f1, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(nS, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function hp(e) {
    let t,
        {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            frameLaunchParams: o,
            header: c,
            chatOpen: d,
            onCloseChat: h,
            chatHeaderAction: g,
            onRestoreVersion: x,
            onImportProject: v,
            debugOpen: j = !1,
            onCloseDebug: b,
            restoreState: y,
            previewReady: k,
            previewGate: w,
            availability: S,
            activeMode: N,
            widgetApplicationId: A,
            overlayWidgetSize: C,
            previewPaused: I = !1,
            onResumePreview: E,
        } = e;
    (0, m7.k)(n, A);
    let M = u.type === eX.U.MAIN || (0, tm.Q5)(u);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, f.cf)([tf.A], () => ({
            mobile: tf.A.isBuilderPreviewMobile(),
            landscape: tf.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? hc.aX.LANDSCAPE : hc.aX.PORTRAIT), (hd = e));
                else {
                    if (hd !== e) return;
                    ((l = hc.aX.UNHANDLED), (hd = null));
                }
                oA.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? r : null);
    let _ = i.useRef(null),
        [T, P] = i.useState(0);
    (i.useEffect(() => {
        if (null == n) return;
        (0, nA.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, nA.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = i.useRef(0)),
        i.useLayoutEffect(() => {
            M && ((t.current = ++mc), (0, eO.HV)(r));
        }, [r, M]),
        i.useEffect(() => {
            if (!M) return;
            let e = t.current;
            return () => {
                e === mc && (0, eO.HV)(null);
            };
        }, [r, M]),
        i.useEffect(() => {
            null != n &&
                ((0, tp.ensureConnection)(n),
                hn ||
                    ((hn = !0),
                    rc.A.addChangeListener(hl),
                    m.Ay.addChangeListener(hl),
                    e2.A.addChangeListener(hl),
                    tf.A.addChangeListener(hl),
                    ez.A.addChangeListener(hl),
                    (0, e_.W3)(hl),
                    hl()));
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
    let R = Math.max(450, T - 320),
        L = d || M;
    return (0, a.jsx)("div", {
        ref: _,
        className: hh.LB,
        children: (0, a.jsx)(hg, {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            header: c,
            showsFrame: (0, eW.yf)(S, N),
            paused: I,
            mainClassName: null == c ? void 0 : p()(hh.ez, { [hh.zt]: d }),
            content: (0, a.jsx)(mX, {
                applicationId: r,
                previewApplicationId: s,
                surface: u,
                frameLaunchParams: o,
                previewReady: k,
                previewGate: w,
                availability: S,
                activeMode: N,
                widgetApplicationId: A,
                overlayWidgetSize: C,
                projectId: n,
                paused: I,
                onResume: E,
                renderFrameOverlay: (e) =>
                    (0, a.jsx)(mo, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
            }),
            sidebar:
                null != n && L
                    ? (0, a.jsx)("div", {
                          className: d ? hh.v7 : hh.LL,
                          children: (0, a.jsx)(tR.A, {
                              sidebarType: tR.X.CallChatSidebar,
                              maxWidth: R,
                              capturePointer: !0,
                              children: (0, a.jsx)("div", {
                                  className: hh.cO,
                                  children: j
                                      ? (0, a.jsx)(fz, { projectId: n, onClose: b ?? (() => {}) }, n)
                                      : (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(f9.Ay, { projectId: n }),
                                                (0, a.jsxs)(tL.Ay, {
                                                    "aria-label": eS.intl.string(eS.t["/VQax8"]),
                                                    toolbar: (0, a.jsxs)(a.Fragment, {
                                                        children: [
                                                            g,
                                                            null == h
                                                                ? null
                                                                : (0, a.jsx)(tL.Ay.Icon, {
                                                                      icon: tP.P,
                                                                      tooltip: eS.intl.string(ew.default.JD6Oit),
                                                                      onClick: h,
                                                                  }),
                                                        ],
                                                    }),
                                                    children: [
                                                        (0, a.jsx)(tL.Ay.Title, {
                                                            children: eS.intl.string(eS.t["/VQax8"]),
                                                        }),
                                                        (0, a.jsx)(hm, { projectId: n }),
                                                    ],
                                                }),
                                                (0, a.jsx)("div", {
                                                    className: hh.cb,
                                                    children: (0, a.jsx)(
                                                        c3,
                                                        {
                                                            projectId: n,
                                                            restoreState: y,
                                                            onRestoreVersion: x,
                                                            onImportProject: v,
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
var hx = n(705427),
    hv = n(606128),
    hj = n(323140);
function hb(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: u, onBack: c, guildId: d } = e,
        h = i.useContext(eq),
        [g] = i.useState(() => (null != h ? eF.A.getProjectView(h) : null)),
        [w, S] = i.useState(g?.chatOpen ?? !0),
        [N, A] = i.useState(g?.debugOpen ?? !1);
    i.useEffect(() => {
        null != h && (0, eD.g7)(h, { chatOpen: w, debugOpen: N });
    }, [h, w, N]);
    let M = i.useCallback(
            (e) => {
                null != h && (0, eD.g7)(h, { previewSelection: e });
            },
            [h],
        ),
        _ = eM(),
        T = eT.useConfig({ location: "ConjureSelectedProjectScreen" }).enabled,
        P = i.useCallback(() => S(!0), []),
        R = i.useCallback(() => {
            (A(!1), S(!0));
        }, []),
        { restoreState: L, handleRestoreVersion: $ } = (function (e, t) {
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
                                (0, eL.oB)(o, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, eb.P0)({
                                                        text: eS.intl.formatToPlainString(ew.default.Z4n6LX, {
                                                            title: (0, eR.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, e$.c)(o, r);
                                                null != e && (0, eb.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", o, e),
                                                (0, eb.P0)({
                                                    text: eS.intl.string(ew.default["PSdo+w"]),
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
        })(s, R),
        q = s?.id ?? null,
        {
            integrationStatus: D,
            isPreviewApplicationLoading: F,
            checkingIntegration: O,
            previewReady: z,
            hasFrame: G,
        } = (function (e) {
            let [t, n] = i.useState(null),
                l = e?.id ?? null,
                r = i.useRef(l),
                a = i.useRef(null);
            r.current = l;
            let s = (0, f.bG)(
                    [m.Ay, to.A],
                    () => (null == l ? null : (m.Ay.getIntegrationStatus(l) ?? to.A.getIntegrationStatus(l))),
                    [l],
                ),
                u = e?.preview_application_id ?? null,
                { isLoading: o } = (0, ts.YY)(u ?? void 0),
                c = null != l && t !== l,
                d = s?.preview_ready === !0,
                h = s?.has_activity === !0,
                g = s?.bot_permissions_changed === !0,
                p = (0, eW.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: d,
                    integrationInstalled: s?.integration_installed ?? null,
                    botPermissionsChanged: g,
                });
            i.useEffect(() => {
                p && !c && null != u && e(u);
                async function e(e) {
                    try {
                        await (0, ts.TA)(e);
                    } catch {}
                }
            }, [g, c, p, u]);
            let x = i.useCallback(async () => {
                if (null == l || r.current !== l) return;
                a.current?.abort();
                let e = new AbortController();
                ((a.current = e), n(null));
                try {
                    await ((0, tu.CG)(l)?.catch(() => (0, tu.U1)(l, e.signal)) ?? (0, tu.U1)(l, e.signal));
                } catch {
                } finally {
                    e.signal.aborted || a.current !== e || r.current !== l || n(l);
                }
            }, [l]);
            return (
                i.useEffect(
                    () => (
                        x(),
                        () => {
                            (a.current?.abort(), (a.current = null));
                        }
                    ),
                    [x],
                ),
                {
                    integrationStatus: s,
                    isPreviewApplicationLoading: o,
                    checkingIntegration: c,
                    previewReady: d,
                    hasFrame: h,
                }
            );
        })(s),
        U =
            (0, f.bG)([tx.A], () => (null == q ? void 0 : tx.A.getPublishStatus(q)?.previewAppChannels), [q]) ??
            D?.preview_app_channels,
        {
            availability: K,
            activeMode: V,
            setMode: W,
            frameSurface: X,
            frameSurfaceOptions: Q,
            setFrameSurface: Y,
            appChannel: J,
            setAppChannel: ee,
            frameLaunchParams: et,
            widgetApplicationId: en,
        } = (0, eJ.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: G,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: D?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(eG.q7.OVERLAY) === !0,
            previewAppChannels: U,
            initialSelection: g?.previewSelection,
            onSelectionChange: M,
        }),
        el = eH(s);
    ((0, eV.x)(q, (e) => {
        K.modes.includes(e) && W(e);
    }),
        eI(q, () => {
            (S(!0), A(!0));
        }));
    let er = K.modes.includes("frame"),
        ea = (0, f.bG)([ez.A], () => ez.A.isPaused(q), [q]),
        ei = er && !ea,
        {
            previewTargetOptions: es,
            handleSelectPreviewTarget: eu,
            mobilePreview: ef,
            mobilePreviewLabel: eh,
            handleToggleMobilePreview: eg,
            landscapePreview: ex,
            rotatePreviewLabel: eA,
            handleRotatePreview: eC,
            previewSurface: eE,
            previewFrame: eU,
            refreshFrame: eB,
            isRefreshing: eK,
            handleRefresh: eZ,
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
                    setAppChannel: c,
                } = e,
                d = i.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return e.flatMap((e) =>
                                "frame" === e
                                    ? t.flatMap((t) =>
                                          t === eX.U.APP_CHANNEL && n.length > 1
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
                        ("frame" === e.mode && (o(e.surface), null != e.appChannel && c?.(e.appChannel)), u(e.mode));
                    },
                    [c, o, u],
                ),
                h = (0, f.bG)([tf.A], () => tf.A.isBuilderPreviewMobile()),
                g = eS.intl.string(h ? ew.default.tKGF0Q : ew.default.peqEOY),
                p = i.useCallback(() => (0, eO.GG)(!h), [h]),
                x = (0, f.bG)([tf.A], () => tf.A.isBuilderPreviewLandscape()),
                v = eS.intl.string(x ? ew.default.tunI2l : ew.default.DoNdjA),
                j = i.useCallback(() => (0, eO.Lw)(!x), [x]),
                b = (0, tm.jS)(t),
                y = i.useMemo(() => (0, tm.Op)(b, r), [b, r]),
                k = (0, td.A)(t?.preview_application_id ?? null, y),
                w = (0, td.A)(t?.preview_application_id ?? null, e6.ZN),
                S = "overlay" === l ? w : k,
                N = (0, e6.x1)(S) && S.data.proxyTicketRefreshing,
                A = i.useCallback(() => {
                    null == S || N || tc.A.refreshProxyTicket(S.id);
                }, [S, N]);
            return {
                previewTargetOptions: d,
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
                isRefreshing: N,
                handleRefresh: A,
            };
        })({
            project: s,
            modes: K.modes,
            activeMode: V,
            frameSurface: X,
            frameSurfaceOptions: Q,
            previewAppChannels: U,
            setMode: W,
            setFrameSurface: Y,
            setAppChannel: ee,
        }),
        eQ = w && !N,
        eY = eS.intl.string(eQ ? ew.default.JD6Oit : ew.default.xjJAQm),
        e0 = i.useCallback(() => {
            if (N) {
                (A(!1), S(!0));
                return;
            }
            S((e) => !e);
        }, [N]),
        e1 = i.useCallback(() => S(!1), []),
        {
            designFeedbackActive: e2,
            designFeedbackToggleRef: e3,
            agentDrivingPreview: e4,
            designFeedbackLabel: e7,
            handleToggleDesignFeedback: e5,
        } = (function (e, t, n) {
            let { active: l } = Z(e);
            i.useEffect(() => {
                null != e && l && !t && H(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, e_.Zv)(e),
                s = eS.intl.string(a ? ew.default.Sme0T0 : l ? ew.default.vn5Rzu : ew.default["cl/Jyl"]),
                u = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void H(e);
                        (n(), B(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: u,
            };
        })(q, ei, R),
        [e9] = i.useState(() => E.isPlatformEmbedded && (0, ti.qM)()),
        te = null != ep(q);
    i.useEffect(() => {
        null != q && te && !ei && em(q);
    }, [q, te, ei]);
    let tt = i.useCallback(() => {
            null != q &&
                (R(),
                (function (e) {
                    if (null != ed(e)) return;
                    let { byProject: t } = eo.getState();
                    eo.setState({ byProject: { ...t, [e]: ec } });
                })(q));
        }, [q, R]),
        tn = i.useCallback(() => {
            null != q && em(q);
        }, [q]),
        tl = te ? eS.intl.string(ew.default.tuQ5f3) : e7,
        tr = i.useCallback(() => {
            A((e) => !e && (S(!0), !0));
        }, []),
        tk = i.useCallback(() => A(!1), []),
        tw = i.useCallback(() => {
            null != q && (0, eO._j)(q);
        }, [q]),
        tS = i.useCallback(() => {
            null != q && (ea ? (0, eO._j)(q) : (0, eO.di)(q, eU?.id));
        }, [q, ea, eU?.id]),
        tN = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eU?.id), (0, tp.closeConnection)(e), (0, tg.r)(t)), c());
        }, [s, eU?.id, c]),
        tC =
            ((t = (0, ek.z)(s)),
            (l = i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, ey.vt)(e);
                    null != n
                        ? (0, eb.P0)({ text: n, variant: "critical" })
                        : (0, ej.A)({
                              title: eS.intl.formatToPlainString(ew.default["Gm+u1+"], { name: s.name }),
                              subtitle: eS.intl.string(ew.default.M7H3sJ),
                              confirmText: eS.intl.string(ew.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  P();
                                  try {
                                      await (0, ey.Hj)(t, e, eS.intl.string(ew.default.Owerd3));
                                  } catch {
                                      (0, eb.P0)({ text: eS.intl.string(ew.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, P],
            )),
            { onExport: t, onImport: (r = (0, ey.yN)(l)).open, importInput: r.input }),
        tI = i.useCallback(() => {
            null != s && (0, t_.A)(s, d);
        }, [s, d]),
        tE = i.useCallback(async () => {
            null != q && (await (0, tj.vL)(q, d));
        }, [d, q]),
        tP = (0, eW.aN)(V, {
            installScope: s?.install_scope ?? null,
            previewReady: z,
            integrationInstalled: D?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tE, loading: F }
            : O && null == D
              ? { type: "checking" }
              : void 0,
        tR = (0, f.bG)([m.Ay], () => null != q && m.Ay.isProjectDeleting(q), [q]);
    i.useEffect(() => {
        ((null == s && u) || tR) && c();
    }, [s, u, tR, c]);
    let {
            publishOptions: tL,
            publish: t$,
            publishing: tq,
            confirmation: tD,
            variant: tF,
            text: tO,
        } = (function (e, t, n, l) {
            let [r, a] = i.useState(null),
                s = i.useRef(null),
                u = i.useCallback(() => {
                    (null != s.current && clearTimeout(s.current), (s.current = null));
                }, []);
            i.useEffect(() => u, [u]);
            let o = i.useMemo(
                    () => ({
                        ...l,
                        showConfirmation: (e) => {
                            (u(),
                                a(e),
                                (s.current = setTimeout(() => {
                                    ((s.current = null), a(null));
                                }, 1500)));
                        },
                    }),
                    [l, u],
                ),
                c = i.useMemo(() => ({ guildId: t, platform: o, busy: n }), [t, o, n]),
                d = (0, tj.Ay)(e, c),
                f = d?.publishing === !0;
            i.useEffect(() => {
                f && (u(), a(null));
            }, [f, u]);
            let m = f ? null : r;
            return {
                publishOptions: c,
                publish: d,
                publishing: f,
                confirmation: m,
                variant: tb(d) ? "secondary" : "primary",
                text: ty(d, m),
                label: ty(d, null),
                indicator: null == d ? null : d.publishing ? "publishing" : tb(d) ? null : "unpublished",
            };
        })(q, d, O || F, tA),
        tz = tM(q, t$, tL),
        tG = (0, C.A)(eU),
        tU = "frame" === V && !ea && (0, e6.x1)(eU) && (tG.isPoppedOut || tG.canPopout),
        tB = null == s ? void 0 : () => (0, tT.A)(s.id, { guildId: d, isPreview: !0, publishOptions: tL }),
        tK =
            null == s
                ? null
                : (0, a.jsx)(th.A, {
                      projectId: s.id,
                      projectName: s.name,
                      guildId: d,
                      projectGuildId: s.guild_id,
                      isOwner: (0, m.PV)(s),
                      canRemix: (0, m.H_)(s),
                      onOpenProjectSettings: tB,
                      onTogglePreviewPaused: "frame" === V ? tS : void 0,
                      previewPaused: ea,
                      previewPauseDisabled: !ea && e4,
                      onTogglePopout: tU ? (tG.isPoppedOut ? tG.popIn : tG.popOut) : void 0,
                      poppedOut: tG.isPoppedOut,
                      onToggleDebug: _ ? tr : void 0,
                      debugOpen: N,
                      onExport: tC.onExport,
                      onImport: tC.onImport,
                      onRemix: tI,
                      onConnectTool: T
                          ? () => {
                                var e;
                                return (
                                    (e = s.id),
                                    void (0, eP.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([n.e("834460"), n.e("960521")]).then(
                                            n.bind(n, 699760),
                                        );
                                        return (n) => (0, a.jsx)(t, { ...n, projectId: e });
                                    })
                                );
                            }
                          : void 0,
                      onHistory: () => {
                          var e;
                          return (
                              (e = {
                                  projectId: s.id,
                                  installScope: s.install_scope,
                                  restoreDisabled: L?.status === "restoring",
                                  onRestoreVersion: (e, t) => $(e, t, !0),
                              }),
                              void (0, eP.openModalLazy)(async () => {
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
                              })
                          );
                      },
                      refreshApplicationId:
                          K.modes.includes("widget") && "unavailable-authorization-revoked" !== K.profileState
                              ? en
                              : null,
                      previewProjectId: s.id,
                  }),
        tH =
            null == t$ || null == s
                ? null
                : (0, a.jsx)("div", {
                      className: hj.As,
                      onMouseDown:
                          null == q || t$.disabled || tq
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, tv.dx)(q);
                                },
                      children: (0, a.jsx)(x.$, {
                          size: "sm",
                          variant: tF,
                          icon: tq ? hy : null != tD ? v.U : void 0,
                          text: tO,
                          onClick: () => tz("header"),
                      }),
                  }),
        tV = (0, a.jsx)(hx.A, {
            title: s?.name ?? eS.intl.string(ew.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tB,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: hj.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: hj.QQ,
                                  children: [
                                      (0, a.jsx)(ta, {
                                          targets: es,
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
                                          })(V, X, J),
                                          onChange: eu,
                                      }),
                                      er
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    "frame" === V
                                                        ? (0, a.jsx)(I.A.Icon, {
                                                              icon: ef ? hS : hw,
                                                              tooltip: eh,
                                                              "aria-label": eh,
                                                              selected: ef,
                                                              onClick: eg,
                                                          })
                                                        : null,
                                                    ef && "frame" === V
                                                        ? (0, a.jsx)(I.A.Icon, {
                                                              icon: hN,
                                                              tooltip: eA,
                                                              "aria-label": eA,
                                                              selected: ex,
                                                              onClick: eC,
                                                          })
                                                        : null,
                                                    (0, a.jsx)(ev, {
                                                        enabled: e9 && !te && !e4 && !ea,
                                                        onLongPress: tt,
                                                        children: (0, a.jsx)(I.A.Icon, {
                                                            ref: e3,
                                                            icon: j.x,
                                                            iconClassName: hj.D8,
                                                            tooltip: tl,
                                                            "aria-label": tl,
                                                            selected: te || e2,
                                                            disabled: ea || (e4 && !te),
                                                            onClick: te ? tn : e5,
                                                        }),
                                                    }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== V || ea
                                          ? null
                                          : (0, a.jsx)(e8, { frame: eU, controlProjectId: s.id }),
                                      (0, e6.x1)(eB)
                                          ? (0, a.jsx)(I.A.Icon, {
                                                icon: b.RefreshIcon,
                                                tooltip: eS.intl.string(ew.default.FZIHQN),
                                                "aria-label": eS.intl.string(ew.default.FZIHQN),
                                                disabled: eK,
                                                onClick: eZ,
                                            })
                                          : null,
                                  ],
                              }),
                              (0, a.jsx)("div", { className: hj.YJ }),
                              (0, a.jsx)(eN.A, { frame: eU }),
                              (0, a.jsx)(I.A.Icon, {
                                  icon: y.DoorExitIcon,
                                  tooltip: eS.intl.string(ew.default["/TlGcK"]),
                                  "aria-label": eS.intl.string(ew.default["/TlGcK"]),
                                  onClick: tN,
                              }),
                              (0, a.jsx)(I.A.Icon, {
                                  icon: hk,
                                  tooltip: eY,
                                  "aria-label": eY,
                                  selected: eQ,
                                  onClick: e0,
                              }),
                              tK,
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: p()(hj.nj, hv.T),
        children: [
            tC.importInput,
            (0, a.jsx)("main", {
                className: hj.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: hj.j5,
                              children: [
                                  tV,
                                  (0, a.jsxs)("div", {
                                      className: hj.sD,
                                      children: [
                                          (0, a.jsx)(k.D, {
                                              variant: "heading-lg/semibold",
                                              children: eS.intl.string(ew.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(o.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: eS.intl.string(ew.default.fINulo),
                                          }),
                                          (0, a.jsx)(x.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: eS.intl.string(ew.default["WFJ/vb"]),
                                              onClick: () => (0, tu.listProjects)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tj.bI.Provider, {
                              value: tL,
                              children: (0, a.jsx)(
                                  hp,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: e3,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: eE,
                                      frameLaunchParams: et,
                                      header: tV,
                                      chatOpen: w,
                                      onCloseChat: e1,
                                      chatHeaderAction: tH,
                                      debugOpen: _ && N,
                                      onCloseDebug: tk,
                                      onRestoreVersion: $,
                                      onImportProject: (0, m.PV)(s) ? tC.onImport : void 0,
                                      restoreState: L,
                                      previewReady: z,
                                      previewGate: tP,
                                      availability: K,
                                      activeMode: V,
                                      widgetApplicationId: en,
                                      overlayWidgetSize: el,
                                      previewPaused: ea,
                                      onResumePreview: tw,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function hy() {
    return (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: hj.Hv, itemClassName: hj.C5 });
}
function hk(e) {
    return (0, a.jsx)(w.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function hw(e) {
    return (0, a.jsx)(S.u, { ...e, size: "custom", width: 20, height: 20 });
}
function hS(e) {
    return (0, a.jsx)(N.k, { ...e, size: "custom", width: 20, height: 20 });
}
function hN(e) {
    return (0, a.jsx)(A.H, { ...e, size: "custom", width: 20, height: 20 });
}
var hA = n(97005),
    hC = n(46746),
    hI = n(434279),
    hE = n(751841),
    hM = n(159308);
let h_ = "ConjurePage";
function hT() {
    return (0, a.jsx)("div", {
        className: hM.l,
        children: (0, a.jsx)(o.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: eS.intl.string(ew.default.BGh3xB),
        }),
    });
}
function hP() {
    (0, d.bG)((0, hE.hU)(null));
}
function hR(e) {
    let { projectId: t, workspaceGuildId: n } = e,
        { project: l, settled: r } = (function (e) {
            let { project: t, unavailable: n } = (0, f.cf)(
                    [m.Ay],
                    () => ({ project: m.Ay.getProject(e), unavailable: (0, tu.su)(e) }),
                    [e],
                ),
                l = null == t;
            return (
                i.useEffect(() => {
                    l && (0, tu.tF)([e]);
                }, [l, e]),
                { project: t, settled: null != t || n }
            );
        })(t);
    (0, rK.wB)(t);
    let s = (null != l ? (0, hI.wu)(l) : null) ?? n;
    return (!(function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "unknown",
            n = (0, f.bG)([m.Ay], () => null != e && null != m.Ay.getProject(e), [e]),
            l = i.useRef(null);
        i.useEffect(() => {
            null != e && n && l.current !== e && ((l.current = e), (0, h.wQ)(e, t));
        }, [e, t, n]);
    })(t, (0, u.zy)().state?.conjureEntryPoint),
    null != l || r)
        ? null == s
            ? (0, a.jsx)(hT, {})
            : (0, a.jsx)(eq.Provider, {
                  value: t,
                  children: (0, a.jsx)(hb, { project: l, projectsLoaded: r, onBack: hP, guildId: s }),
              })
        : (0, a.jsx)("div", { className: hM.l, children: (0, a.jsx)(c.y, {}) });
}
function hL(e) {
    let { projectId: t } = e,
        n = (0, n4.rX)(h_);
    return (i.useEffect(() => {
        m.Ay.hasFetchedOwnedProjects() || (0, tu.listProjects)();
    }, []),
    i.useEffect(() => {
        (0, eD.jQ)(t);
    }, [t]),
    i.useEffect(() => eD.mE, []),
    null == t)
        ? (0, a.jsx)("div", {
              className: hM.i,
              children: null == n ? (0, a.jsx)(hT, {}) : (0, a.jsx)(hC.A, { guildId: n, onConjurePage: !0 }),
          })
        : (0, a.jsx)(hR, { projectId: t, workspaceGuildId: n }, t);
}
function h$(e) {
    let { projectId: t } = e;
    return (0, hA.TW)(h_) ? (0, a.jsx)(hL, { projectId: t }) : null;
}
