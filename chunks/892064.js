n.d(t, { A: () => h9 });
var l,
    r,
    i = n(477900),
    a = n(582128),
    s = n.t(a, 2),
    o = n(503698),
    u = n.n(o),
    c = n(855986),
    d = n(866665),
    f = n(821609),
    m = n(625903),
    h = n(259730),
    g = n(604525),
    p = n(534514),
    x = n(834730),
    v = n(289873),
    b = n(646973),
    j = n(742589),
    y = n(287809),
    k = n(723702),
    w = n(839214);
n(321073);
let A = Object.freeze({ x: 0.5, y: 0.5 });
function S(e) {
    return "" !== e.trim();
}
function C(e) {
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
function I(e) {
    let { kind: t, name: n } = C(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function N(e) {
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
let E = "[conjure:selected] ",
    _ = " \u2014 ";
function M(e) {
    if (!e.startsWith(E)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(E.length),
        i = r.indexOf(_),
        a = (-1 === i ? r : r.slice(0, i)).trim();
    return "" === a ? null : { label: a, body: l };
}
let P = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    R = new Map(),
    T = new Set();
function L(e) {
    return R.get(e) ?? P;
}
function $(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? R.set(e, t) : R.delete(e), [...T]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function D(e) {
    let t = L(e);
    t.active || $(e, { ...t, active: !0 });
}
function q(e) {
    let t = L(e);
    t.active && $(e, { ...t, active: !1 });
}
function F(e) {
    R.has(e) && $(e, P);
}
function O(e, t) {
    let n = L(e);
    n.active && $(e, { ...n, context: t });
}
function G(e, t) {
    return null != t && e.authorId === t;
}
function z(e) {
    return (
        T.add(e),
        () => {
            T.delete(e);
        }
    );
}
function U(e) {
    let t = a.useCallback(() => (null == e ? P : L(e)), [e]);
    return a.useSyncExternalStore(z, t, t);
}
(n(134528), n(947204));
let B = { past: [], present: [], future: [] };
function K(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function W(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function H(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => W(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: W(e.from, t, n), to: W(e.to, t, n) };
        case "text":
            return { ...e, at: W(e.at, t, n) };
    }
}
function V(e) {
    return e.some((e) => "erase" !== e.kind);
}
function X(e, t) {
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
function Y(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        i = l * l + r * r,
        a = 0 === i ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / i));
    return Math.hypot(e.x - (t.x + a * l), e.y - (t.y + a * r));
}
function Z(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function J(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => Z(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                i = n.map((e) => e.y),
                a = Math.min(...r) - l,
                s = Math.min(...i) - l;
            return { x: a, y: s, width: Math.max(...r) + l - a, height: Math.max(...i) + l - s };
        }
        case "circle":
        case "square": {
            let n = Z(e.from, t),
                l = Z(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = Z(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function Q(e) {
    return V(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let ee = [3, 6, 12],
    et = [10, 20, 40],
    en = new Map(),
    el = (0, w.D)(() => ({ byProject: {} })),
    er = {
        active: !0,
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: B,
        sketchDismissedFor: null,
        chatFocusRequest: 0,
        keptStill: null,
    };
function ei(e) {
    return el.getState().byProject[e] ?? null;
}
function ea(e, t) {
    let n = ei(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = el.getState();
    el.setState({ byProject: { ...r, [e]: l } });
}
function es(e, t) {
    null == t ? en.delete(e) : en.set(e, t);
}
function eo(e) {
    return en.get(e)?.() ?? Promise.resolve(null);
}
function eu(e) {
    let t = ei(e);
    if (null != t) {
        if (!Q(t)) return void ec(e);
        (t.active && ea(e, (t) => ({ ...t, active: !1, keptStill: eo(e) })), F(e));
    }
}
function ec(e) {
    if (null == ei(e)) return;
    let { [e]: t, ...n } = el.getState().byProject;
    (el.setState({ byProject: n }), F(e));
}
function ed(e, t) {
    null != ei(e) &&
        (ea(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? D(e) : q(e));
}
function ef(e, t) {
    ea(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return K(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return K(
                        e,
                        e.present.map((e) => (e.id === t.id ? H(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : K(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : K(e, []);
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
function em(e) {
    ea(e, (e) => ({ ...e, chatFocusRequest: e.chatFocusRequest + 1 }));
}
function eh(e) {
    return el.useState((t) => null != e && t.byProject[e]?.active === !0);
}
var eg = n(314116),
    ep = n(858899),
    ex = n(949757),
    ev = n(800202),
    eb = n(258576),
    ej = n(792996),
    ey = n(540665);
let ek = new Set(),
    ew = null;
function eA(e, t) {
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
                ek.add(t),
                () => {
                    ek.delete(t);
                }
            );
        }, [e]));
}
var eS = n(400421),
    eC = n(573083),
    eI = n(971079),
    eN = n(61577),
    eE = n(686507),
    e_ = n(192308),
    eM = n(128761),
    eP = n(503922),
    eR = n(967008),
    eT = n(777847),
    eL = n(227007),
    e$ = n(398773),
    eD = n(735769),
    eq = n(513845),
    eF = n(802905),
    eO = n(951178);
let eG = { width: 320, height: 240 };
function ez(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : eG;
}
function eU(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function eB(e) {
    return ez(e?.preview_overlay_widget ?? null);
}
var eK = n(855859),
    eW = n(238490),
    eH = n(991690);
function eV(e) {
    return e
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, "-")
        .replace(/^-+|-+$/g, "");
}
var eX = n(696645);
function eY(e) {
    return "frame" !== e.mode
        ? e.mode
        : null != e.view
          ? `frame-view-${e.view.id}`
          : null == e.appChannel
            ? `frame-${e.surface}`
            : `frame-${e.surface}-${e.appChannel}`;
}
function eZ(e, t) {
    if ("bot" === e.mode) return ej.intl.string(eb.default.gThNz6);
    if ("frame" === e.mode && null != e.view) return e.view.name;
    if ("frame" === e.mode && e.surface === eH.U.APP_CHANNEL) {
        let n = e.appChannel ?? eV(t);
        if ("" !== n) return `#${n}`;
    }
    switch (e.mode) {
        case "frame":
            if (null != e.view) return e.view.name;
            return null == e.appChannel
                ? (0, eX.X)(e.surface)
                : ej.intl.formatToPlainString(eb.default["6xVl+N"], {
                      surface: (0, eX.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return ej.intl.string(eb.default.y5GiL1);
        case "overlay":
            return ej.intl.string(eb.default["2940LX"]);
        case "bot":
            return ej.intl.string(eb.default.tjpaGN);
    }
}
var eJ = n(939398),
    eQ = n(52724),
    e0 = n(323384),
    e1 = n(983851),
    e2 = n(794083),
    e3 = n(861004),
    e4 = n(687966),
    e5 = n(430392),
    e7 = n(939249),
    e8 = n(789645),
    e6 = n(388155);
function e9(e, t) {
    return `${e}-tab-${eY(t).replace(/\s+/g, "-")}`;
}
function te(e, t) {
    let n = e.getBoundingClientRect(),
        l = t.getBoundingClientRect();
    l.left < n.left ? (e.scrollLeft -= n.left - l.left) : l.right > n.right && (e.scrollLeft += l.right - n.right);
}
let tt = { [eH.U.APP_CHANNEL]: e0.AppsIcon, [eH.U.VOICE_CHANNEL]: e1.VoiceNormalIcon, [eH.U.MAIN]: e2.ActivitiesIcon };
function tn(e) {
    let { targets: t, activeTarget: n, projectName: l, onSelect: r, closableTarget: s, onClose: o, panelId: c } = e,
        f = null == n ? null : eY(n),
        m = null == s ? null : eY(s),
        h = t.findIndex((e) => eY(e) === m),
        g = t.some((e) => eY(e) === f) ? f : t.length > 0 ? eY(t[0]) : null,
        p = ej.intl.string(eb.default["/TlGcK"]),
        v = a.useRef(null),
        b = a.useRef(null),
        j = a.useRef(null);
    a.useEffect(() => {
        let e = v.current;
        if (null != e)
            return (e.addEventListener("wheel", t, { passive: !1 }), () => e.removeEventListener("wheel", t));
        function t(t) {
            if (null == e || Math.abs(t.deltaY) <= Math.abs(t.deltaX)) return;
            let n = Math.abs(e.scrollLeft);
            (t.deltaY > 0 ? n < e.scrollWidth - e.clientWidth - 1 : n > 1) &&
                (t.preventDefault(), (e.scrollLeft += "rtl" === getComputedStyle(e).direction ? -t.deltaY : t.deltaY));
        }
    }, [v]);
    let y = (function (e, t) {
        let [n, l] = a.useState(!1),
            [r, i] = a.useState(!1);
        return (
            a.useLayoutEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = "rtl" === getComputedStyle(t).direction;
                function r() {
                    if (null == t) return;
                    let e = Math.abs(t.scrollLeft),
                        r = e > 1,
                        a = e < t.scrollWidth - t.clientWidth - 1;
                    (l(n ? a : r), i(n ? r : a));
                }
                r();
                let a = new ResizeObserver(r);
                for (let e of (a.observe(t), t.querySelectorAll(`.${e6.Mf}`))) a.observe(e);
                return (
                    t.addEventListener("scroll", r, { passive: !0 }),
                    () => {
                        (a.disconnect(), t.removeEventListener("scroll", r));
                    }
                );
            }, [e, t]),
            { left: n, right: r }
        );
    })(v, t);
    async function k(e) {
        let t,
            n = b.current;
        if (null == n) return;
        let l = (0, eQ.C)({
                getFocusableElements: () => Array.from(n.querySelectorAll('[role="tab"]')),
                getActiveElement: () => n.ownerDocument.activeElement,
            }),
            r = "rtl" === getComputedStyle(n).direction;
        switch (e.key) {
            case "ArrowLeft":
            case "ArrowRight":
                t =
                    ("ArrowRight" === e.key) !== r
                        ? l.getNextFocusableElement({ wrap: !0 })
                        : l.getPreviousFocusableElement({ wrap: !0 });
                break;
            case "Home":
                t = l.getFirstFocusableElement();
                break;
            case "End":
                t = l.getLastFocusableElement();
                break;
            default:
                return;
        }
        (e.preventDefault(), (await t)?.focus());
    }
    function w(e) {
        let t = v.current,
            n = e.currentTarget.closest(`.${e6.Mf}`);
        null != t && null != n && te(t, n);
    }
    a.useLayoutEffect(() => {
        let e = v.current,
            t = j.current;
        null != e && null != t && te(e, t);
    }, [f]);
    let A = h < 0 ? null : eZ(t[h], l);
    return (0, i.jsxs)("div", {
        ref: v,
        className: u()(e6.vR, { [e6.e$]: y.left, [e6.Rh]: y.right }),
        children: [
            (0, i.jsx)("div", {
                ref: b,
                className: e6.gj,
                role: "tablist",
                "aria-label": ej.intl.string(eb.default.I2ucou),
                children: t.map((e, t) => {
                    let n = eY(e),
                        a = n === f,
                        s = eZ(e, l),
                        o = (function (e) {
                            switch (e.mode) {
                                case "frame":
                                    return tt[e.surface];
                                case "widget":
                                    return e3.UserSquareIcon;
                                case "overlay":
                                    return e4.GameControllerIcon;
                                case "bot":
                                    return e5.RobotIcon;
                            }
                        })(e);
                    return (0, i.jsx)(
                        "div",
                        {
                            ref: a ? j : void 0,
                            className: u()(e6.Mf, { [e6.yR]: a, [e6.P5]: t === h, [e6.h5]: h >= 0 && t > h }),
                            children: (0, i.jsxs)(e7.D, {
                                id: e9(c, e),
                                className: e6.eg,
                                role: "tab",
                                "aria-selected": a,
                                "aria-controls": a ? c : void 0,
                                tabIndex: n === g ? 0 : -1,
                                onClick: () => r(e),
                                onKeyDown: k,
                                onFocus: w,
                                children: [
                                    (0, i.jsx)(o, { size: "sm", color: "currentColor", className: e6.Ll }),
                                    (0, i.jsx)(x.E, {
                                        variant: "body-sm/medium",
                                        color: "none",
                                        lineClamp: 1,
                                        className: e6.Gn,
                                        children: s,
                                    }),
                                ],
                            }),
                        },
                        n,
                    );
                }),
            }),
            null != A
                ? (0, i.jsx)(d.m, {
                      position: "bottom",
                      text: p,
                      ariaHidden: !0,
                      children: (0, i.jsx)(e7.D, {
                          className: e6.b,
                          onClick: o,
                          "aria-label": `${p}, ${A}`,
                          children: (0, i.jsx)(e8.XSmallIcon, { size: "sm", color: "currentColor" }),
                      }),
                  })
                : null,
        ],
    });
}
var tl = n(27184),
    tr = n(627363),
    ti = n(233470),
    ta = n(153207),
    ts = n(260498),
    to = n(625180),
    tu = n(672929),
    tc = n(111534),
    td = n(754027),
    tf = n(165610),
    tm = n(738604),
    th = n(485104),
    tg = n(141299),
    tp = n(530165),
    tx = n(457827),
    tv = n(722701),
    tb = n(962998),
    tj = n(585412),
    ty = n(165862),
    tk = n(477782),
    tw = n(442433),
    tA = n(167483),
    tS = n(719593),
    tC = n(265872),
    tI = n(405433),
    tN = n(42473),
    tE = n(811587),
    t_ = n(95264),
    tM = n(412073);
function tP(e) {
    var t;
    let l,
        r,
        { project: s, guildId: o } = e,
        d =
            ((l = s?.id),
            (null !=
            (r = (0, c.bG)([tv.A], () => (null == l ? null : (tv.A.getPublishStatus(l)?.publishState ?? null)), [l]))
                ? (0, tE.l)(r)
                : (s?.supported_surfaces?.length ?? 0) > 0) && (0, ts.H_)(s)),
        { canShare: f } =
            ((t = s.id),
            (0, c.cf)(
                [ts.Ay, tv.A],
                () => {
                    let e = ts.Ay.getProject(t),
                        n = tv.A.getPublishStatus(t)?.publishState,
                        l = null != e && (0, ts.PV)(e);
                    return { canShare: null != e && null != n && (l ? "nothing_built" !== n : (0, tE.l)(n)) };
                },
                [t],
            )),
        m = a.useCallback(() => {
            null != s && (0, t_.A)(s, o);
        }, [s, o]),
        h = a.useRef(null);
    if (!d && !f) return null;
    let g = ej.intl.string(eb.default.XWgAfc),
        p = ej.intl.string(ej.t.RDE0Sc);
    return (0, i.jsx)(tC.Q, {
        targetElementRef: h,
        position: "bottom",
        align: "right",
        ignoreModalClicks: !0,
        renderPopout: async () => {
            let { default: e } = await Promise.all([n.e(440720), n.e(159957), n.e(441532), n.e(838858)]).then(
                n.bind(n, 958234),
            );
            return () => (0, i.jsx)(e, { projectId: s.id });
        },
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsxs)("div", {
                ref: h,
                className: u()(tM.Os, { [tM.q6]: l }),
                children: [
                    d
                        ? (0, i.jsx)(tN.A, {
                              className: u()(tM.MX, tM.mz, { [tM.JA]: f }),
                              icon: (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "none", children: g }),
                              "aria-label": g,
                              tooltipText: null,
                              onClick: m,
                          })
                        : null,
                    f
                        ? (0, i.jsx)(tN.A, {
                              className: u()(tM.MX, tM.uM, { [tM.w9]: d }),
                              icon: tI.ShareIcon,
                              tooltipText: p,
                              tooltipShouldShow: !l,
                              onClick: n,
                          })
                        : null,
                ],
            });
        },
    });
}
var tR = n(616334),
    tT = n(450030),
    tL = n(812771),
    t$ = n(58736),
    tD = n(743898),
    tq = n(333007),
    tF = n(621466),
    tO = n(775121),
    tG = n(989145),
    tz = n(81369),
    tU = n(826745),
    tB = n(34595),
    tK = n(470779);
function tW(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: o,
            onSubmit: c,
            onDismiss: f,
            canSubmit: m,
            closing: h,
            onUploadFile: g,
            anchor: p = "chip",
            allowAttachments: x = !0,
            placeholder: v,
            label: b,
        } = e,
        {
            drafts: j,
            addFiles: y,
            pasteFiles: k,
            removeDraft: w,
            settled: A,
            takeRefs: S,
        } = (0, tB.FM)({ projectId: t, surface: "design", onUploadFile: g }),
        C = a.useRef(null),
        I = (m || j.length > 0) && A && !h,
        N = a.useCallback(() => {
            if (!I) return;
            let e = S();
            c(e.length > 0 ? e : void 0);
        }, [I, S, c]),
        [E, _] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => _(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let M = a.useRef(null),
        [P, R] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = M.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => R({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let T = P?.height ?? 44,
        L = l.left + 8,
        $ = l.top + 8,
        D = Math.max(n.x, L),
        q = Math.min(Math.max("point" === p ? n.y : n.y + 32 + 4, $), Math.max($, l.top + l.height - T - 8));
    return (0, i.jsxs)("div", {
        ref: M,
        className: u()(tK.M0, { [tK.ho]: E && !h, [tK.ET]: h }),
        style: { left: D, top: q },
        "data-testid": "conjure-design-compose-bar",
        children: [
            x
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("input", {
                              ref: C,
                              type: "file",
                              multiple: !0,
                              className: tK.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (y(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, i.jsx)(d.m, {
                              position: "bottom",
                              text: ej.intl.string(eb.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, i.jsx)("button", {
                                  type: "button",
                                  className: tK.tY,
                                  onClick: () => C.current?.click(),
                                  "aria-label": ej.intl.string(eb.default.lgvqSB),
                                  children: (0, i.jsx)(tz.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: tK.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, i.jsx)(tU.y, {
                autoFocus: !0,
                rows: 1,
                className: tK.hF,
                value: s,
                placeholder: v ?? ("" === r ? ej.intl.string(eb.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": b ?? ej.intl.string(eb.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: h || !x ? void 0 : k,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), f());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), N());
                },
            }),
            j.length > 0
                ? (0, i.jsx)("div", {
                      className: tK.ZO,
                      children: j.map((e) => (0, i.jsx)(tB.Nl, { draft: e, onRemove: w }, e.localId)),
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
function tX(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = a.useState(() => (t ? tH(e()) : null));
    return (
        a.useEffect(() => {
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
var tY = n(876798),
    tZ = n(408278),
    tJ = n(48507),
    tQ = n(193885),
    t0 = n(744898),
    t1 = n(803656),
    t2 = n(241326),
    t3 = n(972213),
    t4 = n(646514);
function t5(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function t7(e, t, n) {
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
let t8 = t7("red", t5(t4.A.unsafe_rawColors.RED_400), () => ej.intl.string(eb.default.tvXfjt)),
    t6 = [
        t8,
        t7("yellow", t5(t4.A.unsafe_rawColors.YELLOW_300), () => ej.intl.string(eb.default.FYuaJ1)),
        t7("green", t5(t4.A.unsafe_rawColors.GREEN_360), () => ej.intl.string(eb.default["Vv+paS"])),
        t7("blue", t5(t4.A.unsafe_rawColors.BLUE_345), () => ej.intl.string(eb.default.k9b1QJ)),
        t7("white", t5(t4.A.unsafe_rawColors.WHITE), () => ej.intl.string(eb.default["1sOXwH"])),
    ];
function t9(e) {
    return t6.find((t) => t.id === e) ?? t8;
}
var ne = n(39416);
function nt(e) {
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
function nn(e) {
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
function nl(e) {
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
function nr(e) {
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
let ni = ee.map((e) => nr(Math.min(16, e + 3))),
    na = et.map((e) => nr(Math.min(16, e / 2.5))),
    ns = [eb.default.jZtZUr, eb.default.cTQdD0, eb.default.J3ucEg],
    no = {
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
            label: () => ej.intl.string(eb.default.oIZQbm),
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
            label: () => ej.intl.string(eb.default.ARNVr7),
        },
    };
function nu(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, i.jsx)(d.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)("span", {
            className: ne.z6,
            "data-active": l ? "" : void 0,
            children: (0, i.jsx)(tY.k, {
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
function nc(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, i.jsx)(d.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)(tZ.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function nd(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = a.useState(!1),
        u = a.useCallback(() => o(!1), []),
        c = a.useCallback(() => o((e) => !e), []);
    return (0, i.jsxs)("div", {
        className: ne.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, i.jsx)("div", {
                      className: ne.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function nf(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: a, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: f } = n,
        m = t9(n.colorId),
        h = no[u],
        g = ej.intl.string(eb.default.hUm825),
        p = ej.intl.string(eb.default.n5IA3a),
        x = ej.intl.string(eb.default.r5dX6t),
        v = ej.intl.string(eb.default.VfYqDq);
    return (0, i.jsxs)("div", {
        className: ne.t$,
        children: [
            (0, i.jsx)("div", {
                className: ne.NT,
                children: (0, i.jsx)(nu, {
                    icon: nn,
                    label: ej.intl.string(eb.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => ed(t, "pick"),
                }),
            }),
            (0, i.jsxs)("div", {
                className: ne.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": ej.intl.string(eb.default["0IAEFf"]),
                children: [
                    (0, i.jsx)(nu, {
                        icon: nt,
                        label: ej.intl.string(eb.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => ed(t, "move"),
                    }),
                    (0, i.jsx)(nu, {
                        icon: tJ.LettersIcon,
                        label: ej.intl.string(eb.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => ed(t, "text"),
                    }),
                    (0, i.jsx)(nd, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(nu, {
                                icon: tQ.PaintbrushThinIcon,
                                label: g,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (ed(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            ni.map((n, l) =>
                                (0, i.jsx)(
                                    nu,
                                    {
                                        icon: n,
                                        label: ej.intl.string(ns[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (ea(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), q(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(nd, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, i.jsx)(nu, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (ed(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(no).map((n) =>
                                (0, i.jsx)(
                                    nu,
                                    {
                                        icon: no[n].icon,
                                        label: no[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (ed(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, i.jsx)(nd, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(nu, {
                                icon: nl,
                                label: p,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (ed(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            na.map((n, l) =>
                                (0, i.jsx)(
                                    nu,
                                    {
                                        icon: n,
                                        label: ej.intl.string(ns[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (ea(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), q(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(nd, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, i.jsx)(nc, { icon: m.icon, label: v, onClick: e }),
                        children: (e) =>
                            t6.map((n) =>
                                (0, i.jsx)(
                                    nu,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === m.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                ea(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, i.jsx)("div", { className: ne.Gz, role: "separator" }),
                    (0, i.jsx)(nc, {
                        icon: t0.UndoIcon,
                        label: ej.intl.string((0, k.cX)() ? eb.default["j/XmBQ"] : eb.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, i.jsx)(nc, {
                        icon: t1.RedoIcon,
                        label: ej.intl.string((0, k.cX)() ? eb.default.C7jhpn : eb.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: a,
                    }),
                    (0, i.jsx)(nc, {
                        icon: t2.TrashIcon,
                        label: ej.intl.string(eb.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, i.jsx)("div", { className: ne.Gz, role: "separator" }),
                    (0, i.jsx)(nc, { icon: t3.XLargeIcon, label: ej.intl.string(eb.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let nm = t4.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    nh = t4.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    ng = t4.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function np(e, t, n) {
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
                    (e.strokeStyle = ng),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function nx(e) {
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
let nv = { dx: 0, dy: 0 },
    nb = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    nj = 1;
function ny(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = el.useState((e) => (null == s ? null : (e.byProject[s] ?? null))),
        { active: u } = U(s),
        c = (0, e_.Rv)(),
        [d, f] = a.useState(!1);
    a.useEffect(() => {
        if (null != s)
            return () => {
                ei(s)?.active === !0 && ec(s);
            };
    }, [s]);
    let m = o?.active === !0 && "pick" === o.tool;
    a.useEffect(() => {
        null != s && m && !u && D(s);
    }, [s, m, u]);
    let h = a.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, tl.wn)(e);
        if (null != t) return t;
        function n() {
            f(!1);
        }
        (0, tq.flushSync)(() => f(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, tl.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (a.useEffect(() => {
        if (null != s) return (es(s, h), () => es(s, null));
    }, [s, h]),
    null == s || null == o || !o.active || c)
        ? null
        : (0, i.jsx)(nk, { projectId: s, state: o, capturing: d, resolveIframe: r });
}
function nk(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = tX(r),
        [o, u] = a.useState(null),
        [c, d] = a.useState(0),
        [f, m] = a.useState(null),
        [h, g] = a.useState(nv),
        p = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        b = a.useRef(null),
        j = a.useRef(null),
        { tool: y, history: k } = n,
        w = t9(n.colorId),
        A = "pick" !== y,
        S = "marker" === n.tool ? ee[n.markerSize] : "eraser" === n.tool ? et[n.eraserSize] : null,
        C = "eraser" === y ? null : w.value,
        I = a.useMemo(
            () =>
                null == S
                    ? void 0
                    : (function (e, t) {
                          let n = Math.ceil(Math.max(e, 24) / 2),
                              l = 2 * n + 4;
                          if (l > 128) return "crosshair";
                          let r = l / 2,
                              i = (e, t) => `<circle cx="${r}" cy="${r}" r="${e}" ${t}/>`,
                              a = [
                                  `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${l}" viewBox="0 0 ${l} ${l}">`,
                                  i(n, `fill="none" stroke="${nh}" stroke-width="4"`),
                                  i(n, `fill="none" stroke="${nm}" stroke-width="2"`),
                                  i(3, `fill="${t ?? nm}" stroke="${nh}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(a)}") ${r} ${r}, crosshair`;
                      })(S, C),
            [S, C],
        ),
        N = "move" === y ? (k.present.find((e) => e.id === f) ?? null) : null,
        E = null != s;
    (a.useLayoutEffect(() => {
        d(x.current?.offsetWidth ?? 0);
    }, [E]),
        a.useLayoutEffect(() => {
            j.current = o;
        }, [o]));
    let _ = a.useCallback(() => {
        let e = p.current;
        if (null == e || null == s) return;
        let t = window.devicePixelRatio,
            n = Math.round(s.width * t),
            l = Math.round(s.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let r = e.getContext("2d");
        if (null == r) return;
        (r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, n, l), r.setTransform(t, 0, 0, t, 0, 0));
        let i = b.current,
            a = null == i ? k.present : k.present.map((e) => (e.id === i.id ? H(e, h.dx, h.dy) : e)),
            o = v.current;
        np(r, null == o ? a : [...a, o], { width: s.width, height: s.height });
    }, [s, k.present, h]);
    a.useLayoutEffect(_, [_]);
    let M = a.useCallback(
            (e) =>
                null == s ? { x: 0, y: 0 } : { x: (e.clientX - s.left) / s.width, y: (e.clientY - s.top) / s.height },
            [s],
        ),
        P = a.useCallback(() => {
            let e = j.current;
            if (null == e || null == s) return;
            j.current = null;
            let n = {
                id: `mark-${nj++}`,
                kind: "text",
                color: w.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            (X(n, s) && ef(t, { type: "commit", shape: n }), u(null), em(t));
        }, [t, w, s]),
        R = a.useCallback(() => {
            ((j.current = null), u(null), em(t));
        }, [t]),
        T = a.useCallback(
            (e) => {
                if (0 !== e.button || null == s) return;
                if (null != j.current) return void P();
                let t = M(e);
                switch (y) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * s.width, y: t.y * s.height },
                            l = null == N ? null : J(N, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? N
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = Z(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => Z(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (Y(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = Z(e.from, n),
                                                                  r = Z(e.to, n),
                                                                  i = 6 + (e.width * n.width) / 2,
                                                                  a = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return a.some((e, t) => Y(l, e, a[(t + 1) % 4]) <= i);
                                                          }
                                                          case "circle": {
                                                              let t = Z(e.from, n),
                                                                  r = Z(e.to, n),
                                                                  i = Math.abs(r.x - t.x) / 2,
                                                                  a = Math.abs(r.y - t.y) / 2;
                                                              if (0 === i || 0 === a) return !1;
                                                              let s = (t.x + r.x) / 2,
                                                                  o = (t.y + r.y) / 2;
                                                              return (
                                                                  Math.abs(
                                                                      Math.hypot((l.x - s) / i, (l.y - o) / a) - 1,
                                                                  ) <=
                                                                  (6 + (e.width * n.width) / 2) / Math.min(i, a)
                                                              );
                                                          }
                                                          case "text": {
                                                              let t = J(e, n);
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
                                      })(k.present, t, s);
                        if ((m(r?.id ?? null), null == r)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (b.current = { id: r.id, origin: t }));
                        return;
                    }
                    case "text":
                        u({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!V(k.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${nj++}`,
                                kind: "erase",
                                width: et[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${nj++}`,
                                kind: "marker",
                                color: w.value,
                                width: ee[n.markerSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${nj++}`,
                                kind: y,
                                color: w.value,
                                width: 4 / s.width,
                                from: t,
                                to: t,
                            }));
                }
                _();
            },
            [s, y, w, N, k.present, n.markerSize, n.eraserSize, M, P, _],
        ),
        L = a.useCallback(
            (e) => {
                let t = M(e),
                    n = b.current;
                if (null != n) return void g({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = v.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (v.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (v.current = { ...l, to: t }),
                    _());
            },
            [M, _],
        ),
        $ = a.useCallback(() => {
            p.current?.removeAttribute("data-dragging");
            let e = b.current;
            if (null != e) {
                ((b.current = null), g(nv), ef(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && X(n, s) ? (ef(t, { type: "commit", shape: n }), em(t)) : _());
        }, [t, s, h, _]),
        D = a.useCallback(() => eu(t), [t]),
        q = a.useCallback(() => ef(t, { type: "undo" }), [t]),
        F = a.useCallback(() => ef(t, { type: "redo" }), [t]),
        O = a.useCallback(() => ef(t, { type: "clear" }), [t]),
        G = a.useRef({ tool: y, selected: N, exit: D, undo: q, redo: F });
    if (
        (a.useLayoutEffect(() => {
            G.current = { tool: y, selected: N, exit: D, undo: q, redo: F };
        }),
        a.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, tF.Cw)((0, tF.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != j.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: i, redo: a } = G.current,
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
                    (e.preventDefault(), ef(t, { type: "remove", id: l.id }), m(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = nb[s];
                null != o && (e.preventDefault(), ed(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        a.useEffect(() => {
            if (A) return (tO.A.disable(), () => tO.A.enable());
        }, [A]),
        null == s)
    )
        return null;
    let z = Math.max(8, s.left - c - 8),
        U = null == N ? null : J(null == b.current ? N : H(N, h.dx, h.dy), s);
    return (0, tq.createPortal)(
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", {
                    className: ne.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: ne.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, i.jsx)("canvas", {
                            ref: p,
                            className: ne.Ji,
                            "data-tool": y,
                            "data-interactive": A && !l ? "" : void 0,
                            "aria-label": ej.intl.string(eb.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            style: { cursor: l ? void 0 : I },
                            onPointerDown: T,
                            onPointerMove: L,
                            onPointerUp: $,
                            onPointerCancel: $,
                        }),
                        null == U
                            ? null
                            : (0, i.jsxs)("div", {
                                  className: ne.r1,
                                  style: { left: U.x, top: U.y, width: U.width, height: U.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, i.jsx)("span", { className: ne.p$, "data-corner": "nw" }),
                                      (0, i.jsx)("span", { className: ne.p$, "data-corner": "ne" }),
                                      (0, i.jsx)("span", { className: ne.p$, "data-corner": "sw" }),
                                      (0, i.jsx)("span", { className: ne.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == o
                    ? null
                    : (0, i.jsx)(tW, {
                          projectId: t,
                          anchor: "point",
                          at: { x: s.left + o.at.x * s.width, y: s.top + o.at.y * s.height },
                          bounds: s,
                          kind: "",
                          placeholder: ej.intl.string(eb.default["8gX1lw"]),
                          label: ej.intl.string(eb.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: o.value,
                          onChange: (e) => u((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: P,
                          onUploadFile: (e) => (0, tG.vX)(t, e),
                          onDismiss: R,
                          canSubmit: "" !== o.value.trim(),
                          closing: !1,
                      }),
                (0, i.jsx)("div", {
                    ref: x,
                    className: ne.ej,
                    style: { left: z, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, i.jsx)(nf, { projectId: t, state: n, onExit: D, onUndo: q, onRedo: F, onClear: O }),
                }),
            ],
        }),
        document.body,
    );
}
var nw = n(308081),
    nA = n(516521),
    nS = n(683071),
    nC = n(65593),
    nI = n(218394),
    nN = n(115982),
    nE = n(886540);
function n_(e) {
    return !(0, nE.BL)(e) && !0 !== e.stopRequested;
}
var nM = n(104317),
    nP = n(643278),
    nR = n(566424),
    nT = n(683063),
    nL = n(140735),
    n$ = n(847374),
    nD = n(320448),
    nq = n(138212);
function nF(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: a, ...s } = e;
    return (0, i.jsxs)("section", {
        className: u()(nq.Nr, r),
        ...s,
        children: [
            (0, i.jsxs)("header", {
                className: u()(nq.wx, null != n && nq.o5, a),
                children: [
                    (0, i.jsx)(x.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var nO = n(148590);
function nG(e) {
    let { children: t } = e;
    return (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nz(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: o,
            beforeBody: c,
            children: d,
            ...f
        } = e,
        m = a.useId(),
        [h, g] = a.useState(!l),
        [p, x] = a.useState(l);
    p !== l && (x(l), g(!l));
    let v = a.useCallback(() => g((e) => !e), []),
        b = h ? n$.ChevronSmallDownIcon : nD.ChevronSmallRightIcon,
        j = null != n || l;
    return (0, i.jsxs)(nF, {
        ...f,
        title: t,
        trailing: j
            ? (0, i.jsxs)("span", {
                  className: nO.ZY,
                  children: [
                      n,
                      l
                          ? (0, i.jsx)(e7.D, {
                                className: nO.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": m,
                                "aria-label": h ? s : r,
                                children: (0, i.jsx)(b, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : nO.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, i.jsx)("div", { id: m, className: u()(nO.rf, o), hidden: !h, children: d })],
    });
}
var nU = n(883646);
let nB = [];
function nK(e) {
    let { status: t } = e;
    return (0, i.jsxs)("span", {
        className: u()(nU.xL, {
            [nU.Vb]: "in_progress" === t,
            [nU.cT]: "completed" === t,
            [nU.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return ej.intl.string(eb.default.KvBdun);
                case "in_progress":
                    return ej.intl.string(eb.default["m5G9+S"]);
                case "unfinished":
                    return ej.intl.string(eb.default.lRpwhD);
                default:
                    return ej.intl.string(eb.default.sPGeWi);
            }
        })(t),
        children: [
            (0, i.jsx)(v.y, {
                type: v.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: nU.Qd,
                itemClassName: nU.xB,
                "aria-hidden": !0,
            }),
            (0, i.jsx)("svg", {
                className: nU.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, i.jsx)("path", { className: nU.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nW(e) {
    let { agents: t, active: n } = e,
        l = a.useMemo(() => (n ? t : nB), [n, t]),
        r = a.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = a.useState(l),
        [c, d] = a.useState(s),
        [f, m] = a.useState(!1);
    c !== s && (d(s), u([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && m(!1));
    let h = o.some((e) => !r.has(e.key));
    if (
        (a.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, l, n]),
        a.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => m(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        p = o.length - g.length;
    return (0, i.jsxs)("span", {
        className: nU.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: a } = e,
                    { Illocon: s } = n;
                return (0, i.jsx)(
                    nT.u,
                    {
                        asset: (0, i.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: a,
                        position: "top",
                        children: (0, i.jsx)("span", {
                            className: nU.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, i.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, i.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      className: nU.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function nH(e) {
    let t,
        { todos: n, provisional: l, agents: r, live: s = !0 } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [n, l] = a.useState(() => new Set(e)),
                [r, i] = a.useState(t),
                [s, o] = a.useState(() => new Set());
            return (
                r !== t && (i(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                a.useEffect(() => {
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
        })(a.useMemo(() => n.map((e) => e.id), [n])),
        c =
            ((t = (r ?? nB).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? nB),
                [t],
            ));
    return (0, i.jsxs)("ul", {
        className: nU.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, i.jsxs)(
                    "li",
                    {
                        className: u()(nU.AS, { [nU.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, i.jsx)(nK, { status: n }),
                            (0, i.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: nU.iV,
                                selectable: !0,
                                children: (0, i.jsx)("span", {
                                    className: nU.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, i.jsx)(nW, { agents: c.get(e.id) ?? nB, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, i.jsxs)("li", {
                      className: nU.AS,
                      "data-provisional": !0,
                      children: [
                          (0, i.jsx)(nK, { status: "pending" }),
                          (0, i.jsx)(x.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: nU.iV,
                              selectable: !0,
                              children: (0, i.jsx)("span", { className: nU.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nV(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: a = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = ej.intl.formatToPlainString(eb.default["P/I+JW"], { completed: o, total: u }),
        d = ej.intl.formatToPlainString(eb.default["7tzwKB"], { completed: o, total: u });
    return (0, i.jsx)(nz, {
        title: ej.intl.string(eb.default.RtzECX),
        meta: (0, i.jsx)(nG, { children: c }),
        superseded: s,
        showLabel: ej.intl.string(eb.default.RKyN9q),
        hideLabel: ej.intl.string(eb.default.xydHoj),
        className: nU.Nr,
        bodyClassName: nU.rf,
        beforeBody: r && !s ? (0, i.jsx)(nL.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, i.jsx)(nH, { todos: t, provisional: n, agents: l, live: a }),
    });
}
var nX = n(308665),
    nY = n(59678),
    nZ = n(903847);
function nJ(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: c } = e,
        f = null != n,
        [m, h] = a.useState(n ?? "top"),
        [g, p] = a.useState(f),
        [x, v] = a.useState(!1),
        [b, j] = a.useState(!1),
        [y, k] = a.useState(f);
    (y !== f && (k(f), null != n ? (h(n), p(!0)) : (v(!1), j(!1))),
        a.useEffect(() => {
            if (f || !g) return;
            let e = setTimeout(() => p(!1), 150);
            return () => clearTimeout(e);
        }, [f, g]),
        a.useEffect(() => {
            if (!g || !f) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => v(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [g, f]));
    let [w, A] = a.useState(!1),
        [S, C] = a.useState(!1),
        [I, N] = a.useState(b);
    (I !== b && (N(b), b ? A(!0) : C(!1)),
        a.useEffect(() => {
            if (b || !w) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [b, w]),
        a.useEffect(() => {
            if (!w || !b) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => C(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [w, b]));
    let E = null != l && l.length > 0,
        _ = a.useCallback(() => j((e) => !e), []);
    return g
        ? (0, i.jsxs)("div", {
              className: nZ.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, i.jsxs)("div", {
                      className: u()(nZ.vK, { [nZ.ho]: x && f, [nZ.ET]: !f }),
                      children: [
                          null == c
                              ? (0, i.jsx)("ol", {
                                    className: u()(nZ.Rk, nY.pj),
                                    "data-live": "true",
                                    children: (0, i.jsx)(nR.A, {
                                        glyph: (0, i.jsx)(nX.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, i.jsx)(e7.D, {
                                    className: nZ.pZ,
                                    onClick: c,
                                    "aria-label": ej.intl.string(eb.default.hEK6qu),
                                    children: (0, i.jsx)("ol", {
                                        className: u()(nZ.Rk, nY.pj),
                                        "data-live": "true",
                                        children: (0, i.jsx)(nR.A, {
                                            glyph: (0, i.jsx)(nX.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          E
                              ? (0, i.jsx)(d.m, {
                                    text: ej.intl.string(eb.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, i.jsx)(e7.D, {
                                        className: nZ.BO,
                                        onClick: _,
                                        "aria-expanded": b,
                                        "aria-label": ej.intl.string(eb.default.RtzECX),
                                        children: (0, i.jsx)(nP.ClipboardListIcon, {
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
                  w && E
                      ? (0, i.jsx)("div", {
                            className: u()(nZ.vB, { [nZ.pg]: b && S, [nZ.ui]: !b }),
                            children: (0, i.jsx)(nV, {
                                todos: l,
                                provisional: s,
                                agents: o,
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
let nQ = new Map(),
    n0 = (0, w.D)(() => ({ byMessageKey: {} }));
function n1(e, t) {
    let { [e]: n, ...l } = n0.getState().byMessageKey;
    n0.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var n2 = n(195880),
    n3 = n(287111),
    n4 = n(16619);
function n5(e) {
    let t = (0, n4.qh)("ConjureClarificationProjectPicker");
    return a.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var n7 = n(337232),
    n8 = n(890497),
    n6 = n(103557),
    n9 = n(29073),
    le = n(590077);
function lt(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let i = n5(e),
                [s, o] = a.useState(null),
                [u, c] = a.useState([]),
                [d, f] = a.useState(t.prompt),
                [m, h] = a.useState(!1),
                [g, p] = a.useState(!1),
                x = a.useRef(new Map()),
                v = a.useRef(!1),
                b = a.useRef(!1),
                j = a.useMemo(() => i.filter((e) => !u.some((t) => t.target.projectId === e.projectId)), [i, u]),
                y = a.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                k = a.useMemo(() => {
                    let e = s ?? y;
                    return j.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, y, j]),
                w = a.useMemo(() => j.filter((e) => k.includes(e.projectId)), [j, k]),
                A = a.useCallback((e) => {
                    o(e.slice(0, 10));
                }, []),
                S = d.trim(),
                C = n && !m && (w.length > 0 ? "" !== S : u.length > 0),
                I = a.useCallback(
                    (t) => {
                        b.current ||
                            ((b.current = !0),
                            h(!0),
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
                                                          ej.intl.formatToPlainString(eb.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = ej.intl.formatToPlainString(eb.default.jZlNst, { targets: l });
                                              return `${r}

${t}`;
                                          }).join("\n\n");
                                      })(t),
                                  ));
                    },
                    [r, e],
                ),
                N = a.useCallback(() => {
                    let t, n;
                    if (!C) return;
                    if (0 === w.length) return void I(u);
                    (h(!0), p(!1));
                    let l =
                        ((t = ts.Ay.getProject(e)?.name ?? e),
                        (n = ej.intl.formatToPlainString(eb.default.ScoZLp, { name: t, projectId: e })),
                        `${S}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, n2.m)() }), x.current.set(e.projectId, t)),
                                (0, n7.s)(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...u, ...t.map((e) => ({ target: e, prompt: S }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && I(n);
                            return;
                        }
                        (c(n), o(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [C, I, u, e, w, S]),
                E = a.useCallback(() => {
                    ((v.current = !0), u.length > 0 && !m && I(u), l());
                }, [I, u, l, m]);
            return {
                projects: j,
                targetIds: k,
                setTargetIds: A,
                prompt: d,
                setPrompt: f,
                sending: m,
                failed: g,
                canSubmit: C,
                submit: N,
                dismiss: E,
            };
        })(t, n, l, r, s),
        c = a.useMemo(
            () =>
                o.projects.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [o.projects],
        ),
        d = `${n.id}-heading`;
    return (0, i.jsxs)("section", {
        className: u()(n9.nd, n9.jx),
        "aria-labelledby": d,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, i.jsxs)("div", {
                className: n9.wx,
                children: [
                    (0, i.jsx)(x.E, {
                        tag: "span",
                        id: d,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: n9.TK,
                        children: n.summary,
                    }),
                    (0, i.jsx)(tZ.K, {
                        icon: e8.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": ej.intl.string(eb.default.KQUuAZ),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: le.r,
                children: [
                    0 === c.length
                        ? (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ej.intl.string(eb.default.TbbzW5),
                          })
                        : (0, i.jsx)(n8.Z, {
                              label: ej.intl.string(eb.default["29gr8j"]),
                              placeholder: ej.intl.string(eb.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...o.targetIds],
                              onSelectionChange: o.setTargetIds,
                              disabled: o.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, i.jsx)(n6.f, {
                        label: ej.intl.string(eb.default.XZNsDA),
                        value: o.prompt,
                        onChange: o.setPrompt,
                        maxLength: 4e3,
                        disabled: o.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: o.failed ? ej.intl.string(eb.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: n9.qr,
                children: (0, i.jsx)("div", {
                    className: n9.zt,
                    children: (0, i.jsx)(f.$, {
                        variant: "primary",
                        size: "sm",
                        text: ej.intl.string(eb.default.gG4j6o),
                        disabled: !o.canSubmit,
                        loading: o.sending,
                        onClick: o.submit,
                    }),
                }),
            }),
        ],
    });
}
var ln = n(47167),
    ll = n(734057),
    lr = n(994500),
    li = n(360047);
function la(e, t, n) {
    let l = n[0]?.id;
    return null == l
        ? null
        : !0 === t.link
          ? { target: l, caller: e, key: `${l}:${e}` }
          : "incoming" === t.link
            ? { target: e, caller: l, key: `${e}:${l}` }
            : null;
}
var ls = n(652215);
function lo(e) {
    return 0 === e.options.length && null == e.input;
}
function lu(e) {
    return !1 !== e.allow_custom && !0 !== e.link && "incoming" !== e.link;
}
function lc(e, t, n) {
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
function ld(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function lf(e, t, n, l) {
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
let lm = {
    [ls.rbe.GUILD_TEXT]: "text",
    [ls.rbe.GUILD_VOICE]: "voice",
    [ls.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [ls.rbe.GUILD_STAGE_VOICE]: "stage",
    [ls.rbe.GUILD_FORUM]: "forum",
    [ls.rbe.GUILD_MEDIA]: "media",
};
function lh(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = ll.A.getChannel(t)?.type) ? void 0 : lm[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = y.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let lg = { channel: "#", role: "@", user: "@", project: "", server: "" },
    lp = {
        channel: [eb.default["9+dfPT"], eb.default.pGSJqE],
        role: [eb.default["2VkCoD"], eb.default.c8YlX8],
        user: [eb.default.GZIAxl, eb.default["4bptbQ"]],
        project: [eb.default.twlOb6, eb.default.twlOb6],
        server: [eb.default.ZWXDeI, eb.default.ZWXDeI],
    };
function lx(e, t) {
    return ej.intl.string(lp[e][+!!t]);
}
var lv = n(658675),
    lb = n(22231),
    lj = n(123292),
    ly = n(900797),
    lk = n(331322),
    lw = n(771871),
    lA = n(700915),
    lS = n(985965),
    lC = n(831819);
function lI(e) {
    let { link: t, disabled: n } = e,
        l = a.useId(),
        [r, s] = a.useState(!1),
        o = a.useRef(null),
        { sentence: u, options: c } = t.data,
        d = c.length > 1,
        f = a.useMemo(() => c.map((e) => ({ name: e.label, value: e.build })), [c]);
    return (
        a.useEffect(() => {
            r && o.current?.querySelector("input:checked")?.focus();
        }, [r]),
        (0, i.jsx)("div", {
            className: lC.Nz,
            children: (0, i.jsxs)(lk.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(lA.A, {
                        caller: t.sides.caller,
                        target: t.sides.target,
                        callerProject: t.callerProject,
                        targetProject: t.targetProject,
                        flow: t.flow,
                    }),
                    null != t.purpose ? (0, i.jsx)(lS.A, { purpose: t.purpose }) : null,
                    null != u
                        ? (0, i.jsxs)("div", {
                              className: lC.em,
                              children: [
                                  (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-subtle", children: u }),
                                  d && !r
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(x.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    "aria-hidden": !0,
                                                    children: "\xb7",
                                                }),
                                                (0, i.jsx)(lj.Q, {
                                                    text: ej.intl.string(eb.default.I5F6YX),
                                                    textVariant: "body-sm/medium",
                                                    disabled: n,
                                                    onClick: () => s(!0),
                                                }),
                                            ],
                                        })
                                      : null,
                              ],
                          })
                        : null,
                    r && d
                        ? (0, i.jsxs)("div", {
                              ref: o,
                              className: lC.zM,
                              children: [
                                  (0, i.jsx)("span", { id: l, hidden: !0, children: t.aria }),
                                  (0, i.jsx)(lw.z, {
                                      "aria-labelledby": l,
                                      options: f,
                                      value: t.value,
                                      disabled: n,
                                      onChange: t.onChange,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        })
    );
}
var lN = n(344587),
    lE = n(155078);
function l_(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let lM = [];
function lP(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? ej.intl.string(eb.default.ZZ641e)
          : ej.intl.string(1 === e.options.length ? eb.default["2g3gk9"] : eb.default.dkzChE);
}
var lR = n(762026);
function lT(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function lL(e, t) {
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
var l$ = n(682163),
    lD = n(300344),
    lq = n(614733),
    lF = n(904363),
    lO = n(950902),
    lG = n(136722),
    lz = n(778858),
    lU = n(808728),
    lB = n(696451),
    lK = n(71393),
    lW = n(488926),
    lH = n(426035),
    lV = n(246338);
let lX = lG.kg(ls.xBc.VIEW_CHANNEL, ls.xBc.SEND_MESSAGES);
var lY = n(384017);
function lZ(e) {
    let {
            guildId: t,
            question: n,
            value: l,
            disabled: r,
            onChange: a,
            onFocus: s,
            onBlur: o,
            options: u,
            placeholder: c,
            onQueryChange: d,
            matchSorterOptions: f,
        } = e,
        m = !0 === n.multi_select,
        h = l.map((e) => e.id);
    function g(e) {
        return lh(n.input ?? "channel", e, (e) => u.find((t) => t.value === e)?.label, l);
    }
    let p = {
        options: u,
        placeholder: c,
        disabled: r,
        onQueryChange: d,
        matchSorterOptions: f,
        onFocus: s,
        onBlur: o,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, i.jsx)("div", {
        className: lY.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, i.jsx)(n8.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => a(g(e), t),
              })
            : (0, i.jsx)(n8.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => a(null == e ? [] : g([e]), t),
              }),
    });
}
function lJ(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, lD.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: i, value: s, disabled: o, onChange: u } = e,
            d =
                ((t = null != r && "channel" === i.input && "safety_alerts_channel" === i.default),
                (n = (0, c.bG)(
                    [ts.Ay],
                    () => {
                        let e = t ? ts.Ay.getProject(l) : null;
                        return null == e ? null : (0, lH.ug)(e);
                    },
                    [l, t],
                )),
                a.useEffect(() => {
                    null == r || null == n || lB.Ay.isMember(r, n) || lz.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [lU.A, lB.Ay, lK.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = lK.A.getGuild(r)?.safetyAlertsChannelId,
                            l = lU.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let a = (0, lV.Lp)(l, i.channel_filter).find((t) => t.id === e);
                        if (null == a) return null;
                        if (null != n && lB.Ay.isMember(r, n))
                            return lW.$3({ permission: lX, user: n, context: a }) ? a : null;
                        let s = a.permissionOverwrites[r]?.deny ?? lG.BY;
                        return lG.X8(s, lX) ? null : a;
                    },
                    [r, n, t, i.channel_filter],
                )),
            f = a.useRef(null),
            m = a.useRef(!1);
        a.useEffect(() => {
            if (!m.current && !o && null != r) {
                if (null == f.current) {
                    if (s.length > 0) m.current = !0;
                    else if (null != d) {
                        var e;
                        ((f.current = d.id),
                            u(((e = []), lh("channel", [d.id], () => (0, ln.m1)(d, y.default, lr.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== f.current ? (m.current = !0) : null == d && ((m.current = !0), u([], r));
            }
        }, [d, o, r, u, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, i.jsx)(lZ, { ...r, guildId: n, options: s, placeholder: lx("channel", !0 === r.question.multi_select) });
}
function lQ(e) {
    let { guildId: t, ...n } = e,
        l = (0, lF.A)(t);
    return (0, i.jsx)(lZ, { ...n, guildId: t, options: l, placeholder: lx("role", !0 === n.question.multi_select) });
}
function l0(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: a } = (0, lq.A)(t);
    return (0, i.jsx)(lZ, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: a,
        placeholder: lx("user", !0 === n.question.multi_select),
    });
}
function l1(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = n5(t),
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
    return 0 === s.length ? n : (0, i.jsx)(lZ, { ...l, options: s, placeholder: lx("project", !1) });
}
function l2(e) {
    let t = e.target;
    (0, tF.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function l3(e) {
    let { fallback: t, ...n } = e,
        l = (0, n4.z9)("ConjureClarificationEntityPicker"),
        r = a.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, i.jsx)(l$.Ay, { guild: e, size: l$.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, i.jsx)("div", {
              onFocus: l2,
              onMouseUp: l2,
              children: (0, i.jsx)(lZ, { ...n, options: r, placeholder: lx("server", !1) }),
          });
}
function l4(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lO.Tj)(t, !0);
    if ("project" === l.question.input) return (0, i.jsx)(l1, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, i.jsx)(l3, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, i.jsx)(lJ, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, i.jsx)(lQ, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, i.jsx)(l0, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var l5 = n(87221),
    l7 = n(26430),
    l8 = n(750943),
    l6 = n(173936),
    l9 = n(95477),
    re = n(256905),
    rt = n(490707),
    rn = n(907702);
function rl(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: c } = (0, rt._)(t, n),
        [d, f] = a.useState(null),
        m = null != s && d === s;
    return o
        ? (0, i.jsxs)("span", {
              className: u()(rn.Gt, rn.b6),
              children: [
                  (0, i.jsx)(l5.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, i.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: ej.intl.string(eb.default.lhgD88),
                  }),
              ],
          })
        : (0, i.jsx)("span", {
              className: u()(rn.Gt, { [rn.iP]: !m }),
              children:
                  null != s
                      ? (0, i.jsx)("img", {
                            src: s,
                            alt: l,
                            className: rn.Sl,
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
function rr(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: a,
            selected: s,
            disabled: o,
            reachable: c,
            tabbable: f,
            onPick: m,
            onView: h,
            onArrow: g,
            onMeasured: p,
            onRemove: v,
        } = e,
        b = ej.intl.formatToPlainString(eb.default.JGjZMs, { answer: r.label });
    return (0, i.jsxs)("div", {
        className: u()(rn.Vs, { [rn.Q9]: s, [rn.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, i.jsxs)(e7.D, {
                className: u()(rn.Up, { [rn.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: o ? (null != r.image ? () => h(r) : void 0) : () => m(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), g(r, t));
                },
                role: a ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": ej.intl.formatToPlainString(eb.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: c && f ? 0 : -1,
                children: [
                    (0, i.jsxs)("span", {
                        className: rn.$_,
                        children: [
                            null != r.image
                                ? (0, i.jsx)(rl, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: p,
                                  })
                                : (0, i.jsx)("span", { className: rn.Gt }),
                            (0, i.jsx)("span", {
                                className: rn.q3,
                                "aria-hidden": !0,
                                children: a
                                    ? (0, i.jsx)(lv.P, { checked: s, disabled: o })
                                    : (0, i.jsx)(lw.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(x.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: rn.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, lE.E)(t) : "")
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
            null != v
                ? (0, i.jsx)("span", {
                      className: rn.B4,
                      children: (0, i.jsx)(d.m, {
                          text: ej.intl.string(eb.default.HQEXJM),
                          children: (0, i.jsx)(tZ.K, {
                              icon: t2.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: v,
                              disabled: o,
                              "aria-label": ej.intl.string(eb.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, i.jsx)("span", {
                        className: rn.B4,
                        children: (0, i.jsx)(d.m, {
                            text: ej.intl.string(eb.default["4/eeDD"]),
                            children: (0, i.jsx)(tZ.K, {
                                icon: l7.MaximizeIcon,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => h(r),
                                "aria-label": b,
                                tabIndex: c && f ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function ri(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: o, own: c } = e,
        d = !0 === n.multi_select,
        { options: f } = n,
        m = f.length > 4 ? "gallery" : "row",
        h = a.useRef(null),
        g = a.useRef(new Map()),
        [p, x] = a.useState(null),
        v = null != p && f.some((e) => e.id === p) ? p : (f.find((e) => l.includes(e.id)) ?? f[0])?.id,
        b = a.useMemo(() => {
            var e;
            return null == c.image
                ? null
                : ((e = c.image),
                  {
                      id: `own:${e.attachment.id}`,
                      label: ej.intl.string(eb.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [c.image]),
        j = a.useCallback(
            (e) => {
                let n = (null == b ? f : [...f, b]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, tG.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, re.R)({
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
            [f, b, t],
        ),
        y = a.useCallback(
            (e, t) => {
                let n = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    l = f[n];
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || r || o(l));
            },
            [r, d, o, f],
        );
    return (0, i.jsxs)("div", {
        className: rn.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === f.length && null == b
                ? null
                : (0, i.jsxs)("div", {
                      ref: h,
                      className: u()(rn.fF, "gallery" === m ? rn.nV : rn.nM, { [rn.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": m,
                      "data-count": f.length,
                      children: [
                          f.map((e) =>
                              (0, i.jsx)(
                                  rr,
                                  {
                                      projectId: t,
                                      option: e,
                                      multi: d,
                                      selected: l.includes(e.id),
                                      disabled: r,
                                      reachable: s,
                                      tabbable: d || e.id === v,
                                      onPick: (e) => {
                                          (x(e.id), o(e));
                                      },
                                      onView: j,
                                      onArrow: y,
                                      onMeasured: (t) => g.current.set(e.id, t),
                                  },
                                  e.id,
                              ),
                          ),
                          null != b
                              ? (0, i.jsx)(
                                    rr,
                                    {
                                        projectId: t,
                                        option: b,
                                        multi: d,
                                        selected: c.selected,
                                        disabled: r,
                                        reachable: s,
                                        tabbable: !0,
                                        onPick: c.onPick,
                                        onView: j,
                                        onArrow: () => void 0,
                                        onMeasured: (e) => g.current.set(b.id, e),
                                        onRemove: c.onRemove,
                                    },
                                    b.id,
                                )
                              : null,
                      ],
                  }),
            (0, i.jsx)(ra, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: ej.intl.string(/\bicons?\b/i.test(n.question) ? eb.default.qU4WN6 : eb.default.cbMDDB),
            }),
        ],
    });
}
function ra(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = a.useRef(null),
        [u, c] = a.useState(!1),
        [d, m] = a.useState(""),
        h = r ? 0 : -1,
        g = n.busy;
    function p() {
        "" !== d.trim() &&
            null == g &&
            n.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, i.jsxs)("div", {
        className: rn.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, i.jsxs)("div", {
                className: rn.QJ,
                children: [
                    (0, i.jsx)(f.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: l8.ImagePlusIcon,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => o.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, i.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: l6.LinkIcon,
                              text: ej.intl.string(eb.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, i.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: rn.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, n3.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            u
                ? (0, i.jsxs)("div", {
                      className: rn.vG,
                      children: [
                          (0, i.jsx)("div", {
                              className: rn.Hs,
                              children: (0, i.jsx)(l9.k, {
                                  label: ej.intl.string(eb.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: ej.intl.string(eb.default.AVhvn8),
                                  value: d,
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
                              className: rn.gd,
                              children: [
                                  (0, i.jsx)(f.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ej.intl.string(eb.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === d.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, i.jsx)(lj.Q, {
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: ej.intl.string(eb.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, i.jsx)(x.E, {
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
function rs(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        c = a.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, i.jsxs)(e7.D, {
        className: u()(lY.uK, { [lY.ue]: l, [lY.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": ej.intl.formatToPlainString(d ? eb.default["2p6UFz"] : eb.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != o
                ? (0, i.jsx)("span", { className: lY.dy, children: (0, i.jsx)(lv.P, { checked: o, disabled: l }) })
                : (0, i.jsx)("span", { className: lY.Gy, "aria-hidden": !0, children: n }),
            (0, i.jsxs)("span", {
                className: lY.qO,
                children: [
                    (0, i.jsx)("span", {
                        className: lY.l8,
                        children: (0, i.jsx)(x.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: lY.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, i.jsx)(x.E, {
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
                ? (0, i.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      className: lY.rM,
                      children: ej.intl.string(eb.default.zku6r1),
                  })
                : null,
        ],
    });
}
function ro(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: a = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return l_(n)
        ? (0, i.jsx)(ri, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: a, onPick: s, own: o })
        : (0, i.jsx)(i.Fragment, {
              children: n.options.map((e, t) =>
                  (0, i.jsx)(
                      rs,
                      {
                          option: e,
                          position: t + 1,
                          disabled: r,
                          selected: u ? l.includes(e.id) : void 0,
                          onPick: s,
                          reachable: a,
                      },
                      e.id,
                  ),
              ),
          });
}
let ru = [],
    rc = [];
function rd(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: r,
            direction: a,
            disabled: s,
            ownImage: o,
            ownSelected: c,
        } = e,
        d = "" === l.trim() ? null : l,
        f = !0 === n.multi_select ? ej.intl.string(eb.default.tE8qbz) : lP(n);
    return (0, i.jsxs)("div", {
        className: u()(lY.Ge, lY.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            null == f
                ? null
                : (0, i.jsx)(x.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: lY.aK,
                      children: f,
                  }),
            (0, i.jsx)(ro, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lL(o, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && l_(n))
                ? null
                : (0, i.jsxs)("div", {
                      className: lY.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: lY.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(lb.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, i.jsx)("span", { className: u()(lY.Pu, lY.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, i.jsx)("div", {
                      className: lY.$0,
                      children: (0, i.jsx)(lj.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: ej.intl.string(eb.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function rf(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: o,
            onBack: m,
            backText: h,
            hideSubmit: g = !1,
            headingLines: p = 5,
        } = e,
        [v, b] = a.useState({}),
        [j, y] = a.useState({}),
        [k, w] = a.useState({}),
        [A, S] = a.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [C, I] = a.useState({}),
        { builds: N, linkFor: E } = (function (e, t, n) {
            let l = a.useMemo(
                    () =>
                        Object.fromEntries(
                            t.questions.flatMap((t) => {
                                let l = la(e, t, n[t.id] ?? []);
                                return null == l ? [] : [[t.id, l]];
                            }),
                        ),
                    [t, n, e],
                ),
                [r, i] = a.useState({}),
                [s, o] = a.useState({}),
                u = a.useRef(new Set());
            a.useEffect(() => {
                for (let e of Object.values(l))
                    u.current.has(e.key) ||
                        (u.current.add(e.key),
                        (async function (e, t, n) {
                            try {
                                let l = await (0, li.LW)(e, t);
                                i((e) => ({ ...e, [n]: l }));
                            } catch {}
                        })(e.target, e.caller, e.key));
            }, [l]);
            let d = (0, c.cf)(
                [ts.Ay],
                () =>
                    Object.fromEntries(
                        Object.values(l).flatMap((e) => [e.target, e.caller].map((e) => [e, ts.Ay.getProject(e)])),
                    ),
                [l],
            );
            return {
                builds: a.useMemo(
                    () =>
                        Object.fromEntries(
                            Object.entries(l).flatMap((e) => {
                                let [t, n] = e,
                                    l = s[n.key];
                                return null == l ? [] : [[t, l]];
                            }),
                        ),
                    [s, l],
                ),
                linkFor: a.useCallback(
                    (i) => {
                        let a = l[i],
                            u = null == a ? null : r[a.key],
                            c = n[i]?.[0]?.name,
                            f = d[e]?.name;
                        if (null == a || null == u || null == c || null == f) return null;
                        let m = a.caller === e,
                            h = d[a.caller],
                            g = {
                                caller: m ? f : c,
                                target: m ? c : f,
                                targetLive: u.live,
                                targetHasPreview: u.hasPreview,
                                callerHasPreview: null == h || (0, eO._7)(h),
                                callerLiveOnVibeyard: !1,
                            },
                            p = s[a.key] ?? u.build,
                            x = t.questions.find((e) => e.id === i);
                        return {
                            sides: g,
                            callerProject: h ?? null,
                            targetProject: d[a.target] ?? null,
                            flow: x?.link_flow ?? u.flow,
                            purpose: (0, lR.xP)(x?.link_purpose ?? u.purpose),
                            data: (0, lR.Bw)(g, p),
                            value: p,
                            aria: (0, lR.sr)(g),
                            onChange: (e) => o((t) => ({ ...t, [a.key]: e })),
                        };
                    },
                    [s, t, n, l, e, d, r],
                ),
            };
        })(n, l, A),
        [_, M] = a.useState(!1),
        [P, R] = a.useState(0),
        [T, L] = a.useState(null),
        [$, D] = a.useState(null),
        [q, F] = a.useState(null),
        [O, G] = a.useState(!1),
        z = a.useRef(null),
        [U, B] = a.useState(null),
        K = a.useRef(null),
        W = a.useRef(0),
        H = null == r,
        V = l.questions.length,
        X = Math.min(P, V - 1),
        Y = l.questions[X],
        [Z, J] = a.useState({ id: Y.id, expanded: !1 }),
        Q = Z.id === Y.id && Z.expanded,
        [ee, et] = a.useState(null),
        en = j[Y.id] ?? "",
        el = !0 === Y.multi_select,
        er = l_(Y),
        ei = el ? ej.intl.string(eb.default.tE8qbz) : lP(Y),
        ea = el
            ? (k[Y.id] ?? ru)
            : ((t = v[Y.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : lM),
        es = (function (e, t, n) {
            let [l, r] = a.useState({}),
                [i, s] = a.useState({}),
                [o, u] = a.useState({}),
                c = ej.intl.string(eb.default.wTsP5l),
                d = a.useCallback((e) => l[e] ?? null, [l]),
                f = a.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : lT(t[e.id])),
                    [t, l, o],
                ),
                m = a.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, o],
                ),
                h = a.useCallback(
                    (a, o) => {
                        let d = a.id,
                            m = !0 === a.multi_select,
                            h = l[d] ?? null;
                        if (o) return lL(h, f(a));
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
                                    null != l && (0, tG.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                m ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: f(a),
                            busy: i[d]?.busy ?? null,
                            error: i[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (m ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, tG.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    u((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (m || !lT(e[d])) return e;
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
                                                error: { source: "upload", text: ej.intl.string(eb.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, tG.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : ej.intl.string(eb.default.l79PMc),
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
        })(n, v, b),
        eo = es.imageFor(Y.id),
        eu = es.selectedFor(Y),
        { text: ec, phase: ed } = (0, lN.Q)(Y.question),
        ef = ec === Y.question,
        em = ef && ee?.id === Y.id && ee.truncated;
    a.useLayoutEffect(() => {
        if (null == U || Q || !ef) return;
        function e() {
            if (null == U) return;
            let e = U.scrollHeight > U.clientHeight + 1;
            et((t) => (t?.id === Y.id && t.truncated === e ? t : { id: Y.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(U), () => t.disconnect());
    }, [ef, U, Y.id, Q]);
    let eh = ej.intl.string(Q ? ej.t.iTcuma : ej.t.dcl9MQ),
        eg = a.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        let i = ld(t, n);
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
                                (s = t.questions.flatMap((t) => {
                                    let r = n[t.id];
                                    return r?.kind !== "entities"
                                        ? []
                                        : r.entities.flatMap((n) => {
                                              let r = la(e, t, [n]);
                                              return null == r
                                                  ? []
                                                  : [
                                                        {
                                                            ...r,
                                                            build: l[t.id],
                                                            purpose: t.link_purpose,
                                                            flow: t.link_flow,
                                                        },
                                                    ];
                                          });
                                })).length
                                    ? a()
                                    : Promise.allSettled(
                                          s.map((e) => {
                                              let { target: t, caller: n, ...l } = e;
                                              return (0, li.Ol)(t, n, l);
                                          }),
                                      ).then(a));
                        }
                    })(n, l, e, N, r);
            },
            [l, N, r, n],
        ),
        ep = a.useCallback(
            (e, t) => {
                W.current += 1;
                let n = W.current;
                (L({ direction: t, moves: n }),
                    D({ question: Y, draft: en, selected: ea, ownImage: eo, ownSelected: eu, direction: t, moves: n }),
                    G(!0),
                    R(e));
            },
            [en, eo, eu, Y, ea],
        ),
        ex = a.useCallback(() => {
            let e = z.current,
                t = K.current;
            null != e && null != t && F({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = z.current,
            t = K.current;
        if (null == e || null == t) return;
        ex();
        let n = new ResizeObserver(ex);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ex]);
    let ev = T?.moves;
    a.useEffect(() => {
        if (null == ev) return;
        let e = setTimeout(() => D(null), 400),
            t = setTimeout(() => G(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ev]);
    let ey = a.useCallback(
            (e) => {
                let t = lc(l, e, X);
                null == t ? eg(e) : ep(t, t < X ? "back" : "forward");
            },
            [l, X, eg, ep],
        ),
        ek = a.useCallback(
            (e) => {
                if (H) return;
                let t = { ...v, [Y.id]: e };
                (b(t), ey(t));
            },
            [ey, v, H, Y.id],
        ),
        ew = a.useCallback(() => {
            H || 0 === X || ep(X - 1, "back");
        }, [H, X, ep]),
        eA = 0 !== X || H ? void 0 : m,
        eS = (X > 0 && !H) || null != eA,
        eC = a.useCallback(
            (e) => {
                y((e) => ({ ...e, [Y.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                er ? H || b((e) => ({ ...e, [Y.id]: t })) : ek(t);
            },
            [H, er, Y.id, ek],
        ),
        eI = a.useCallback(() => {
            (y((e) => ({ ...e, [Y.id]: "" })), ek({ kind: "custom", text: ej.intl.string(eb.default.zxSq2q) }));
        }, [Y.id, ek]),
        { multiPartFor: eN } = es,
        eE = a.useMemo(() => (el ? lf(Y, ea, en, eN(Y)) : null), [en, el, eN, Y, ea]),
        e_ = A[Y.id] ?? rc,
        eM = E(Y.id),
        eP = a.useMemo(() => {
            var e, t;
            let n;
            return null != Y.input
                ? ((e = Y.input),
                  (t = C[Y.id]),
                  (n = en.trim()),
                  {
                      kind: "entities",
                      entities: e_,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...e_.map((t) => (t.name.startsWith(lg[e]) ? t.name : `${lg[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [en, C, e_, Y.id, Y.input]),
        eR = a.useCallback(
            (e, t) => {
                (S((t) => ({ ...t, [Y.id]: e })), I((e) => ({ ...e, [Y.id]: t })));
            },
            [Y.id],
        ),
        eT = a.useCallback(() => M(!0), []),
        eL = a.useCallback(() => M(!1), []),
        e$ = es.controlsFor(Y, H),
        eD = a.useMemo(() => {
            var e;
            let t;
            return (
                (e = v[Y.id]),
                null ==
                (t = (function (e, t) {
                    if (!0 !== e.upload || !0 === e.multi_select || null == t) return null;
                    if ("option" === t.kind || "image" === t.kind) return t;
                    if ("multi" !== t.kind) return null;
                    if (null != t.attachment)
                        return { kind: "image", attachment: t.attachment, text: ej.intl.string(eb.default.wTsP5l) };
                    let n = e.options.find((e) => {
                        let { id: n } = e;
                        return t.optionIds.includes(n);
                    });
                    return null != n ? { kind: "option", optionId: n.id, text: n.label } : null;
                })(Y, e))
                    ? null
                    : "" === en.trim()
                      ? e?.kind === "multi"
                          ? t
                          : null
                      : "option" === t.kind
                        ? lf(Y, [t.optionId], en)
                        : lf(Y, [], en, t)
            );
        }, [v, en, Y]),
        eq = a.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eP, eE ?? eD, en),
            [en, eE, eD, eP],
        ),
        eF = a.useCallback(() => {
            null != eq && ek(eq);
        }, [eq, ek]),
        [eG, ez] = a.useState(!1),
        [eU, eB] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ez(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eK = a.useCallback(() => {
            null != s && (eB(!0), setTimeout(s, 150));
        }, [s]),
        eW = eq ?? (null == eP && null == eE ? (v[Y.id] ?? null) : null),
        eH = a.useMemo(
            () =>
                null == eW
                    ? (function (e, t, n) {
                          let l = e.questions[n];
                          if (l?.optional !== !0) return null;
                          let r = Object.fromEntries(
                              Object.entries(t).filter((e) => {
                                  let [t] = e;
                                  return t !== l.id;
                              }),
                          );
                          return null == lc(e, r, n) && "" === ld(e, r) ? null : r;
                      })(l, v, X)
                    : null,
            [v, l, X, eW],
        ),
        eV = null != eH,
        eX = (null != eW || eV) && !H,
        eY = X === V - 1,
        eZ = a.useCallback(() => {
            H || (null != eW ? ek(eW) : null != eH && (b(eH), ey(eH)));
        }, [ey, H, eW, ek, eH]),
        eJ = a.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tF.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tF.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tF.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eS
                            ? (e.preventDefault(), (eA ?? ew)())
                            : "ArrowRight" === e.key && eX && (e.preventDefault(), eZ())));
            },
            [eA, eS, eX, ew, eZ],
        ),
        eQ =
            er && !0 !== Y.upload
                ? null
                : (0, i.jsxs)("div", {
                      className: lY.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: lY.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(lb.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, i.jsx)(tU.y, {
                              value: en,
                              onChange: (e) => {
                                  let { value: t } = e.currentTarget;
                                  y((e) => ({ ...e, [Y.id]: t }));
                              },
                              onKeyDown: (e) => {
                                  "Enter" !== e.key ||
                                      e.shiftKey ||
                                      e.nativeEvent.isComposing ||
                                      (e.preventDefault(), eF());
                              },
                              placeholder: ej.intl.string(lo(Y) ? eb.default.yLN1x6 : eb.default["tOC+tn"]),
                              "aria-label": ej.intl.formatToPlainString(eb.default["4JeYPB"], { question: Y.question }),
                              disabled: H,
                              rows: 1,
                              className: lY.Pu,
                              "data-conjure-clarification-other": Y.id,
                          }),
                      ],
                  });
    return (0, i.jsxs)("section", {
        className: u()(lY.$O, { [lY.fI]: eG && !eU, [lY.Oh]: eU }),
        role: "dialog",
        "aria-label": Y.question,
        "data-conjure-clarification": l.id,
        "data-state": H ? "inert" : "open",
        "data-question-expanded": Q ? "true" : void 0,
        "data-picker-open": _ && !O ? "true" : void 0,
        "data-step": X,
        tabIndex: -1,
        onKeyDown: eJ,
        children: [
            (0, i.jsxs)("div", {
                className: lY.rf,
                style: null == q ? void 0 : { height: q.heading + q.rows },
                "data-moving": O ? "" : void 0,
                children: [
                    (0, i.jsxs)("div", {
                        ref: z,
                        className: lY.wx,
                        children: [
                            (0, i.jsx)(x.E, {
                                ref: B,
                                tag: "span",
                                id: `${Y.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: Q ? void 0 : p,
                                className: u()(n9.TK, lY.R_, { [lY.TB]: "exit" === ed, [lY.JU]: "enter" === ed }),
                                children: ec,
                            }),
                            em || Q
                                ? (0, i.jsx)("div", {
                                      className: n9.Q7,
                                      children: (0, i.jsx)(d.m, {
                                          text: eh,
                                          children: (0, i.jsx)(tZ.K, {
                                              icon: Q ? ly.ChevronSmallUpIcon : n$.ChevronSmallDownIcon,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => J({ id: Y.id, expanded: !Q }),
                                              "aria-label": eh,
                                              "aria-controls": `${Y.id}-label`,
                                              "aria-expanded": Q,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, i.jsx)(e7.D, {
                                      className: u()(n9.gb, n9.Q7),
                                      onClick: eK,
                                      "aria-label": ej.intl.string(eb.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, i.jsx)(e8.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: lY.Cg,
                        style: null == q ? void 0 : { insetBlockStart: q.heading },
                        children: (0, i.jsxs)("div", {
                            className: lY.I,
                            children: [
                                (0, i.jsxs)("div", {
                                    ref: K,
                                    className: lY.Ge,
                                    role: "group",
                                    "aria-labelledby": `${Y.id}-label`,
                                    "data-direction": T?.direction,
                                    "data-parity": null == T ? void 0 : T.moves % 2,
                                    children: [
                                        null == ei
                                            ? null
                                            : (0, i.jsx)(x.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lY.aK,
                                                  children: ei,
                                              }),
                                        (0, i.jsx)(ro, {
                                            projectId: n,
                                            question: Y,
                                            selected: ea,
                                            disabled: H,
                                            onPick: (e) =>
                                                el
                                                    ? w((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [Y.id]:
                                                                  ((n = t[Y.id] ?? ru),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  Y.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eC(e),
                                            own: e$,
                                        }),
                                        null != Y.input
                                            ? (0, i.jsx)(l4, {
                                                  projectId: n,
                                                  question: Y,
                                                  value: e_,
                                                  disabled: H,
                                                  onChange: eR,
                                                  onFocus: eT,
                                                  onBlur: eL,
                                                  fallback: lu(Y) ? null : eQ,
                                              })
                                            : null,
                                        null != eM ? (0, i.jsx)(lI, { link: eM, disabled: H }) : null,
                                        null != Y.note
                                            ? (0, i.jsx)(x.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lY.aK,
                                                  children: Y.note,
                                              })
                                            : null,
                                        lu(Y) ? eQ : null,
                                        !0 === Y.upload
                                            ? (0, i.jsx)("div", {
                                                  className: lY.$0,
                                                  children: (0, i.jsx)(lj.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: ej.intl.string(eb.default.zxSq2q),
                                                      disabled: H,
                                                      onClick: eI,
                                                      "data-conjure-no-image": !0,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                null == $
                                    ? null
                                    : (0, i.jsx)(
                                          rd,
                                          {
                                              projectId: n,
                                              question: $.question,
                                              draft: $.draft,
                                              selected: $.selected,
                                              ownImage: $.ownImage,
                                              ownSelected: $.ownSelected,
                                              direction: $.direction,
                                              disabled: H,
                                          },
                                          $.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            V > 1 || el || er || null != Y.input || null != m || !0 === Y.optional || lo(Y)
                ? (0, i.jsxs)("div", {
                      className: n9.qr,
                      children: [
                          (0, i.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  V > 1
                                      ? ej.intl.formatToPlainString(eb.default.yzYUjq, { index: X + 1, total: V })
                                      : null,
                          }),
                          (0, i.jsxs)("div", {
                              className: n9.zt,
                              children: [
                                  eS
                                      ? (0, i.jsx)(lj.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: h ?? ej.intl.string(eb.default.Pk5lfA),
                                            onClick: eA ?? ew,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  g
                                      ? null
                                      : (0, i.jsx)(f.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eY
                                                ? (o ?? ej.intl.string(ej.t.geKm7t))
                                                : ej.intl.string(eV ? eb.default.ZcrbKz : eb.default.w1nRmT),
                                            disabled: !eX,
                                            onClick: eZ,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": eY ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var rm = n(557744),
    rh = n(223347),
    rg = n(890698),
    rp = n(27232),
    rx = n(505930);
let rv = [1, 2, 3, 4, 5];
n(786986);
var rb = n(693654);
function rj(e) {
    let { dimension: t, value: n, disabled: l, onChange: r } = e,
        s = a.useId(),
        o = a.useId();
    return (0, i.jsxs)("div", {
        className: rb.zm,
        children: [
            (0, i.jsx)(x.E, { id: s, variant: "body-sm/medium", color: "text-default", children: (0, rg.wy)(t) }),
            (0, i.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": s,
                "aria-required": !0,
                className: rb.uf,
                children: rv.map((e) => {
                    let a = null != n && e <= n,
                        s = a ? rp.StarIcon : rx.StarOutlineIcon;
                    return (0, i.jsxs)(
                        "label",
                        {
                            className: rb.uK,
                            children: [
                                (0, i.jsx)("input", {
                                    type: "radio",
                                    name: o,
                                    value: e,
                                    checked: n === e,
                                    disabled: l,
                                    onChange: () => r(e),
                                    className: rb.hF,
                                    "aria-label": (0, rg.MF)(t, e),
                                }),
                                (0, i.jsx)("span", {
                                    className: u()(rb.d4, { [rb.cO]: a }),
                                    children: (0, i.jsx)(s, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
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
function ry(e) {
    let { pending: t } = e,
        n = (0, rg.PM)(t),
        l = a.useId();
    return (0, i.jsx)("section", {
        className: rb.Nr,
        "aria-labelledby": l,
        children: (0, i.jsxs)(lk.B, {
            gap: 12,
            children: [
                (0, i.jsxs)(lk.B, {
                    gap: 4,
                    children: [
                        (0, i.jsx)(p.D, {
                            id: l,
                            variant: "heading-md/semibold",
                            children: ej.intl.string(eb.default.GVLtfq),
                        }),
                        (0, i.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: ej.intl.string(eb.default["Zj4E+A"]),
                        }),
                    ],
                }),
                (0, i.jsxs)(lk.B, {
                    gap: 4,
                    children: [
                        n.dimensions.map((e) =>
                            (0, i.jsx)(
                                rj,
                                {
                                    dimension: e,
                                    value: n.scores[e],
                                    disabled: n.submitting,
                                    onChange: (t) => n.setScore(e, t),
                                },
                                e,
                            ),
                        ),
                        (0, i.jsx)(x.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: ej.intl.string(eb.default.BvaFUc),
                        }),
                    ],
                }),
                (0, i.jsx)(n6.f, {
                    label: ej.intl.string(eb.default.d28g0o),
                    placeholder: ej.intl.string(eb.default.EBB7lL),
                    value: n.feedback,
                    onChange: n.setFeedback,
                    rows: 3,
                    maxLength: 2e3,
                    disabled: n.submitting,
                }),
                null != n.error
                    ? (0, i.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: n.error,
                      })
                    : null,
                (0, i.jsx)(lk.B, {
                    direction: "horizontal",
                    justify: "end",
                    children: (0, i.jsx)(f.$, {
                        variant: "primary",
                        size: "sm",
                        text: ej.intl.string(eb.default.CYQood),
                        disabled: !n.canSubmit,
                        loading: n.submitting,
                        onClick: n.submit,
                    }),
                }),
            ],
        }),
    });
}
var rk = n(894443),
    rw = n(525530),
    rA = n(564963),
    rS = n(442331),
    rC = n(513425);
function rI(e) {
    let t = e?.type === "remixed" ? e.settings_keys : void 0;
    return null == t || 0 === t.length ? null : { keys: t, note: ej.intl.string(eb.default.F2yVHg) };
}
var rN = n(512976),
    rE = n(661095);
let r_ = new Set(),
    rM = new Set();
function rP(e) {
    return (
        rM.add(e),
        () => {
            rM.delete(e);
        }
    );
}
function rR(e) {
    if (!r_.has(e)) for (let t of ((r_ = new Set([...r_, e])), rM)) t();
}
function rT() {
    return a.useSyncExternalStore(rP, () => r_);
}
function rL(e) {
    if ("assistant" !== e.role) return null;
    let t = rI(e.projectEvent);
    return null != t ? t : (0, nE.BL)(e) ? (e.settingsRequest ?? null) : null;
}
function r$(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let i = e.length - 1; i >= 0; i--) {
        let a = e[i],
            s = null != a ? rL(a) : null;
        if (null == a || null == s) continue;
        let o = s.keys ?? [];
        for (let e of ((r || (0 === o.length ? l : o.some((e) => n.has(e)))) && t.add(a.id), o)) n.add(e);
        ((l = !0), (r = r || 0 === o.length));
    }
    return t;
}
function rD(e, t, n) {
    return (
        n.has(e) ||
        (function (e) {
            let t = new Set(),
                n = ej.intl.string(eb.default["08bsJL"]),
                l = !1;
            for (let r = e.length - 1; r >= 0; r--) {
                let i = e[r];
                null != i &&
                    ("user" === i.role ? (l = l || i.content.trim() === n) : l && null != rL(i) && t.add(i.id));
            }
            return t;
        })(t).has(e)
    );
}
let rq = [];
function rF(e, t, n) {
    let l = rT(),
        r = (0, c.bG)([rC.A], () => null != n && rD(n, rC.A.getMessages(e), l), [e, n, l]);
    return {
        saved: r,
        superseded: (0, c.bG)([rC.A], () => null != n && r$(rC.A.getMessages(e)).has(n), [e, n]),
        summary: (0, c.yK)(
            [rS.A, ll.A],
            () => {
                var n;
                let l = rS.A.getSettings(e);
                return null == t || null == l
                    ? rq
                    : ((n = (e) => ll.A.getChannel(e)?.name ?? null),
                      (0, rN.f8)(t, l).flatMap((e) => {
                          let t = (0, rN.Fk)(e, l);
                          return null != t && t.filled
                              ? [
                                    {
                                        key: e,
                                        text: ej.intl.formatToPlainString(eb.default["Z+FC3j"], {
                                            label: t.def?.label ?? e,
                                            value:
                                                "secret" === t.kind
                                                    ? ej.intl.string(eb.default["w0Pnu+"])
                                                    : (function (e, t, n) {
                                                          let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                          switch (e.type) {
                                                              case "checkbox":
                                                                  return ej.intl.string(
                                                                      !0 === t
                                                                          ? eb.default.nXtpn3
                                                                          : eb.default["0vfaMW"],
                                                                  );
                                                              case "select":
                                                                  return l
                                                                      .map(
                                                                          (t) =>
                                                                              e.options?.find((e) => e.value === t)
                                                                                  ?.label ?? t,
                                                                      )
                                                                      .join(", ");
                                                              case "channel":
                                                                  return l
                                                                      .map((e) => {
                                                                          let t = n(e);
                                                                          return null != t
                                                                              ? `#${t}`
                                                                              : ej.intl.string(eb.default.Fw9G9A);
                                                                      })
                                                                      .join(", ");
                                                              case "game":
                                                                  return 0 === l.length
                                                                      ? ej.intl.string(eb.default.nEv677)
                                                                      : ej.intl.string(eb.default.Fw9G9A);
                                                              case "role":
                                                              case "user":
                                                                  return ej.intl.string(eb.default.Fw9G9A);
                                                              default:
                                                                  return l.join(", ");
                                                          }
                                                      })(t.def, (0, rE.De)(l, t.def), n),
                                        }),
                                    },
                                ]
                              : [];
                      })).map((e) => e.text);
            },
            [e, t],
        ),
    };
}
function rO(e, t) {
    if ("keys" === e.kind) {
        let { request: n, status: l } = e,
            r = new Set((t?.secrets ?? []).filter((e) => e.set).map((e) => e.name)),
            i = n.fields.filter((e) => !r.has(e.name)).length;
        return {
            status: "received" === l ? "saved" : l,
            presentation: "button",
            needed: "open" !== l ? 0 : i > 0 ? i : n.fields.length,
            form: { kind: "keys", request: n },
        };
    }
    let { request: n, askId: l, saved: r, superseded: i } = e;
    return {
        status: !(function (e, t, n) {
            if (!n || null == t) return !1;
            let l = (0, rN.f8)(e, t);
            return l.length > 0 && 0 === (0, rN.C3)({ keys: l }, t, !0);
        })(n, t, r)
            ? i
                ? "superseded"
                : "open"
            : "saved",
        presentation: (0, rN.xn)(n, t),
        needed: (0, rN.C3)(n, t, r),
        form: { kind: "settings", request: n, askId: l },
    };
}
let rG = new Set();
function rz(e, t) {
    if ("keys" === t.kind) {
        var l;
        return void ((l = t.request),
        (0, e_.mM)(async () => {
            let { default: t } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
            return (n) => (0, i.jsx)(t, { ...n, projectId: e, request: l });
        }));
    }
    let { request: r, askId: a } = t;
    (0, tR.A)(e, {
        initialTab: "app",
        scopeKeys: r.keys,
        note: r.note,
        notifyAgent: null != a,
        isPreview: !0,
        onSaved: null != a ? () => rR(a) : void 0,
    });
}
var rU = n(694264);
function rB(e) {
    let { projectId: t, ask: n, onDismiss: l } = e,
        r = a.useCallback(() => rz(t, n.form), [n, t]),
        s = ej.intl.string(eb.default.DLw3tf);
    return (0, i.jsxs)("section", {
        className: rU.M,
        "aria-label": s,
        children: [
            (0, i.jsxs)("div", {
                className: rU.P,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-sm/semibold", color: "text-default", tag: "span", children: s }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        children: ej.intl.formatToPlainString(eb.default.GCBZ4y, { count: n.needed }),
                    }),
                ],
            }),
            (0, i.jsx)(f.$, { variant: "primary", size: "sm", text: ej.intl.string(eb.default.OCzOAI), onClick: r }),
            (0, i.jsx)(d.m, {
                text: ej.intl.string(eb.default["920tul"]),
                asContainer: !0,
                children: (0, i.jsx)(tZ.K, {
                    "aria-label": ej.intl.string(eb.default["920tul"]),
                    icon: e8.XSmallIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: l,
                }),
            }),
        ],
    });
}
var rK = n(975571),
    rW = n(427123);
let rH = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var rV = n(874421),
    rX = n(932111),
    rY = n(940874),
    rZ = n(404373),
    rJ = n(89222);
function rQ(e) {
    return "" !== rJ.A.getDraft(e).trim();
}
var r0 = n(29080);
function r1(e) {
    var t;
    let n,
        l,
        { steps: r, content: i, hasProposal: a, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, nN.B4)(r),
        c = u.filter((e) => "message" === e.type).at(-1),
        d =
            !a &&
            null != c &&
            ((t = c.content),
            (n = t.trim()),
            (l = i.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? c
                : null,
        f = u.filter((e) => e !== d),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, nN.Lf)(r) }),
    };
}
var r2 = n(62617),
    r3 = n(182368);
let r4 = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    r5 = {
        snail: () => eb.default.ABeVsS,
        goat: () => eb.default.dhXay8,
        frog: () => eb.default.SHeweG,
        bunny: () => eb.default.FytFE1,
        cat: () => eb.default["5c+sHs"],
        caterpillar: () => eb.default["/FYcne"],
        butterfly: () => eb.default["Ib/AxK"],
        dog: () => eb.default.zDjBR1,
        spider: () => eb.default["6sxyrN"],
        bee: () => eb.default.cVtefg,
        bot: () => eb.default.MjCw0v,
    },
    r7 = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = a.useMemo(
                        () => (0, r2.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, r2.Z)(),
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
                    o = a.useMemo(
                        () => (0, r2.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, r2.Z)(),
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
                    o = a.useMemo(
                        () => (0, r2.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, r2.Z)(),
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
                    o = a.useMemo(
                        () => (0, r2.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, r2.Z)(),
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
                    o = a.useMemo(
                        () => (0, r2.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, r2.Z)(),
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
                    o = a.useMemo(
                        () => (0, r2.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, r2.Z)(),
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
                    o = a.useMemo(
                        () => (0, r2.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, r2.Z)(),
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
                    o = a.useMemo(
                        () => (0, r2.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, r2.Z)(),
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
                    o = a.useMemo(
                        () => (0, r2.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, r2.Z)(),
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
                    o = a.useMemo(
                        () => (0, r2.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, r2.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: r3.u, tint: "var(--illo-purple-40)" },
    };
function r8(e) {
    return { ...r7[e], name: ej.intl.string(r5[e]()) };
}
function r6(e) {
    return r4.includes(e) ? r8(e) : void 0;
}
function r9(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % r4.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, r4[(t + n) % r4.length]);
            }),
            l
        );
    })(e))
        t.set(n, r8(l));
    return t;
}
var ie = n(615839);
function it(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : ej.intl.string(eb.default.KcFvbo);
}
var il = n(60160),
    ir = n(101147);
function ii(e) {
    let t = (0, nN.SY)(e.steps);
    return null != t ? (0, nN.WQ)(t) : it(e.task);
}
function ia(e) {
    let t = r9(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? r6(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: it(e.task),
                      todoId: e.task.todoId,
                      line: ii(e),
                  },
              ];
    });
}
function is(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: a, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, nN.SY)(n.steps),
        d = u
            ? ii(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(it(e));
                  switch (e.status) {
                      case "failed":
                          return ej.intl.formatToPlainString(eb.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ej.intl.formatToPlainString(eb.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return ej.intl.formatToPlainString(eb.default["++9woZ"], {
                                  task: t,
                                  duration: (0, ie.MB)(e.durationMs),
                              });
                          return ej.intl.formatToPlainString(eb.default.nmI9Uh, { task: t });
                      default:
                          return ej.intl.formatToPlainString(eb.default.nmI9Uh, { task: t });
                  }
              })(o),
        f = u ? c : void 0,
        m =
            o.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, i.jsx)("ol", {
                                    className: nY.dO,
                                    children: n.steps.map((e) =>
                                        (0, i.jsx)(
                                            ir.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, i.jsx)(
                                  "div",
                                  {
                                      className: nY.iq,
                                      children: (0, i.jsx)(il.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, i.jsx)(nR.A, {
        glyph: (0, i.jsx)(nT.u, {
            asset: (0, i.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: a,
            body: it(o),
            position: "left",
            children: (0, i.jsx)("span", {
                className: nY.nC,
                children: (0, i.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: u,
        settled: !u,
        tint: r,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
var io = n(998445),
    iu = n(643210),
    ic = n(648127),
    id = n(372795),
    im = n(163897);
let ih = "conjure-browser-viewer";
function ig(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [iu.A],
            () =>
                n.flatMap((e) => {
                    let n = iu.A.getTab(t, e);
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
        className: im.kR,
        "aria-label": ej.intl.string(eb.default.Uvkr1G),
        children: l.map((e) =>
            (0, i.jsx)("li", { children: (0, i.jsx)(ip, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function ip(e) {
    let { projectId: t, tab: l, sessionIds: r } = e,
        [s, o] = (function () {
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
        c = (0, e_.Ry)(ih),
        [d, f] = a.useState(!1),
        m = a.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, ic.i)(l.session);
    return (0, i.jsxs)(e7.D, {
        innerRef: s,
        className: u()(im.Nr, h && im.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, e_.mM)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e(277162),
                            n.e(513843),
                            n.e(501962),
                            n.e(531527),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, i.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: ih },
                )
            );
        },
        "aria-label": ej.intl.formatToPlainString(eb.default.G3a822, { title: g }),
        children: [
            (0, i.jsxs)("div", {
                className: im.Gt,
                children: [
                    (0, i.jsx)(id.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || c || h,
                        className: im.Ji,
                        "aria-label": ej.intl.formatToPlainString(eb.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, i.jsx)("div", {
                              className: im.qf,
                              children: (0, i.jsx)(io.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, i.jsx)("div", {
                              className: im.HS,
                              children: (0, i.jsx)(x.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: ej.intl.string(eb.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("span", {
                className: im.pG,
                children: [
                    (0, i.jsx)("span", { className: u()(im.W9, h && im.oM) }),
                    (0, i.jsx)(x.E, {
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
var ix = n(268409);
let iv = new WeakMap(),
    ib = new WeakMap();
function ij(e) {
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
        o = (0, c.yK)(
            [rC.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = iv.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = ib.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), ib.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (iv.set(e, n), n);
                })(rC.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === o.length
        ? null
        : (0, i.jsx)("li", { className: ix.h, children: (0, i.jsx)(ig, { projectId: t, sessionIds: o }) });
}
var iy = n(469393);
function ik(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, eM.lG)(t.authored_at);
    return (0, i.jsx)(nF, {
        title: ej.intl.string(eb.default["t+b0rz"]),
        children: (0, i.jsxs)("div", {
            className: iy.r,
            children: [
                (0, i.jsxs)("div", {
                    className: iy.z,
                    children: [
                        (0, i.jsx)(x.E, { variant: "body-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, i.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, i.jsx)(f.$, {
                          variant: "secondary",
                          size: "sm",
                          text: ej.intl.string(eb.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var iw = n(288610),
    iA = n(493490),
    iS = n(17742);
let iC = [];
function iI(e) {
    let t = (0, c.bG)([iA.A], () => (null != e ? iA.A.getCaptures(e) : iC)),
        n = (0, c.bG)([iA.A], () => (null != e ? iA.A.getSelectedCapture(e) : null)),
        [l, r] = a.useState(null),
        i = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        a.useEffect(() => {
            if (null == e || null == n || null == i) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, iS._F)(e, n);
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
var iN = n(714917),
    iE = n(463660),
    i_ = n(970211);
function iM(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([iN.A], () => (null != e ? iN.A.getBackground(e) : null)),
                l = n?.imageEtag ?? null,
                [r, i] = a.useState(null),
                [s, o] = a.useState(null),
                [u, d] = a.useState(!1);
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
                                r = await (0, iE.Mg)(e, l);
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
                    m === f && o(f);
                }, [m, f]);
            return { src: null == e || null != n || u ? m : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp"),
        o = iI(n ? t : null);
    return null != o.selected
        ? null != o.src
            ? (0, i.jsx)("img", { className: i_.F1, src: o.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, i.jsx)("img", {
                className: u()(i_.LO, { [i_.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var iP = n(155718);
function iR(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let iT = ["command", "user_command", "message_command", "message"],
    iL = new Set([iP.kc.CHAT, iP.kc.USER, iP.kc.MESSAGE]);
function i$(e) {
    return e.type ?? iP.kc.CHAT;
}
function iD(e) {
    return iL.has(i$(e));
}
function iq(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function iF(e, t) {
    let n = iT.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !iq(e)), ...n.filter(iq)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || iq(r) || l.push(r);
    }
    return iT.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function iO(e, t, n) {
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
    let s = e.commands.filter(iD).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (i$(e)) {
                    case iP.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case iP.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(iq),
        u = i.length > 0 ? iF([...i, ...o], !0) : iF("both" === t ? [...s, a] : s, !1);
    return u.length > 0 ? u : [r];
}
var iG = n(377941),
    iz = n.n(iG);
n(205816);
var iU = n(886094);
function iB(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
let iK = { READ_MESSAGES: "VIEW_CHANNEL", VIEW_GUILD_INSIGHTS: "VIEW_GUILD_ANALYTICS" };
function iW(e) {
    return e.type === iP.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === iP.kc.USER || e.type === iP.kc.MESSAGE
          ? ""
          : "/";
}
let iH = {
        [eO.q7.APP_CHANNEL]: eb.default["3/aHX6"],
        [eO.q7.VOICE_CHANNEL]: eb.default["3/aHX6"],
        [eO.q7.ACTIVITY]: eb.default["3/aHX6"],
        [eO.q7.OVERLAY]: eb.default["rPpf5/"],
        [eO.q7.PROFILE_WIDGET]: null,
        [eO.q7.AUTOMOD]: null,
        [eO.q7.BOT]: null,
        [eO.q7.APPLICATION_COMMANDS]: null,
    },
    iV = [eO.q7.ACTIVITY, eO.q7.APP_CHANNEL, eO.q7.VOICE_CHANNEL, eO.q7.OVERLAY];
function iX(e) {
    return iV.find((t) => iR(e, t)) ?? null;
}
let iY = 1920 / 1018;
function iZ(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let iJ = iZ(24, 1018),
    iQ = iZ(24, 1920);
function i0(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var i1 = n(90947),
    i2 = (((l = {}).IMAGE = "image"), l),
    i3 = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    i4 = n(598748),
    i5 = n(773669);
let i7 = [],
    i8 = {},
    i6 = {};
function i9(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function ae(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: i2.IMAGE,
        visibility: i3.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var at = n(127258),
    an = n(803306),
    al = n(587895),
    ar = n(432005),
    ai = n(963852),
    aa = n(95701),
    as = n(619019),
    ao = n(427262);
let au = new aa.nA({ id: "1337", guild_id: "1337", type: ls.rbe.GUILD_TEXT, name: "preview" });
function ac(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = (0, c.bG)([y.default], () => y.default.getUser(e), [e]);
    return (
        a.useEffect(() => {
            r && i?.username !== t && (0, an.nj)(new as.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, i, e, t, l, n]),
        i
    );
}
let ad = /^@\S+/;
var af = n(775602);
let am = [eb.default["3eTjcV"], eb.default.l3j5nS];
var ah = n(97808),
    ag = n(778712),
    ap = n(486020),
    ax = n(46054),
    av = n(200700);
let ab = {
        alert: { label: () => ej.intl.string(eb.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ej.intl.string(eb.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ej.intl.string(eb.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ej.intl.string(eb.default.RGzFNK), blockedStyle: !1 },
    },
    aj = {
        blocked: { label: () => ej.intl.string(eb.default.YdnZ8q), tone: "red" },
        alert: { label: () => ej.intl.string(eb.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ej.intl.string(eb.default.RGzFNK), tone: "green" },
    },
    ay = ["blocked", "alert", "allowed"],
    ak = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function aw(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : ej.intl.formatToPlainString(ej.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, av.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? ej.intl.formatToPlainString(ej.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? ej.intl.formatToPlainString(ej.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? ej.intl.formatToPlainString(ej.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? ej.intl.formatToPlainString(ej.t.opVZ9q, { mins: n / 60 })
                                      : ej.intl.formatToPlainString(ej.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var aA = n(984097),
    aS = n(13673);
let aC = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function aI(e) {
    let { example: t } = e,
        n = aw(t);
    return null == n
        ? null
        : (0, i.jsx)(x.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let aN = ["glazedgamer", "sprinkles", "donutking"];
function aE(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: a, blockedStyle: s } = ab[n.outcome];
    return (0, i.jsxs)("li", {
        className: u()(aA.nM, { [u()(aA.HV, aS.DX)]: s }),
        children: [
            (0, i.jsx)(nL.A, { children: `${a()}: ` }),
            (0, i.jsx)("span", {
                className: aA.my,
                children: (0, i.jsx)(ah.eu, {
                    src: (0, ap.AE)(void 0, void 0),
                    size: ag._3.SIZE_24,
                    "aria-label": ej.intl.string(eb.default["1yI0xV"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: aA.fw,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), ax.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, i.jsx)(aI, { example: n }) : null,
                ],
            }),
        ],
    });
}
function a_(e) {
    let { group: t, firstIndex: n } = e,
        l = a.useId(),
        r = aj[t.section],
        s = new Set(t.examples.map(aw)),
        o = 1 === s.size ? t.examples.map(aw)[0] : null;
    return (0, i.jsxs)("div", {
        className: aA.UO,
        children: [
            (0, i.jsxs)("div", {
                className: aA.RZ,
                children: [
                    (0, i.jsx)(x.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: aC[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(x.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: aA.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, i.jsx)(x.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      children: o,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsx)("ul", {
                className: aA.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, i.jsx)(aE, { example: e, username: aN[(n + t) % aN.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function aM(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            ay
                .map((e) => ({ section: e, examples: t.filter((t) => ak[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, i.jsxs)("div", {
        className: aA.Nr,
        children: [
            "" !== r
                ? (0, i.jsx)("div", {
                      className: aA.hk,
                      children: (0, i.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, i.jsx)(
                    a_,
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
var aP = n(276293),
    aR = n(460905),
    aT = n(110384),
    aL = n(365199),
    a$ = n(633018),
    aD = n(763754),
    aq = n(267508),
    aF = n(194085),
    aO = n(20851),
    aG = n(692508),
    az = n(798819);
function aU(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, i.jsxs)("div", {
        className: u()(az.item, az.labelContainer, az.colorDefault, {
            [az.focused]: !0 === t.highlighted,
            [az.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, i.jsx)("div", {
                      className: az.iconContainerLeft,
                      children: (0, i.jsx)(n, { color: "currentColor", className: az.icon }),
                  })
                : null,
            (0, i.jsx)("div", { className: u()(az.label, aG.Gy), children: t.label }),
            null != l
                ? (0, i.jsx)("div", {
                      className: az.iconContainer,
                      children: (0, i.jsx)(l, { color: "currentColor", className: az.icon }),
                  })
                : null,
        ],
    });
}
function aB(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = a.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, i.jsx)("img", { src: l, alt: "", className: u()(t, aG.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: ej.intl.string(ej.t["5IEsGx"]), icon: aT.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: ej.intl.string(ej.t.LYju5J), muted: !0 };
    return (0, i.jsx)("div", {
        className: u()(az.menu, aG.MK),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: az.scroller,
            children: [
                (0, i.jsx)(aU, { item: s }),
                (0, i.jsx)("div", { className: az.separator }),
                (0, i.jsx)(aU, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function aK() {}
function aW(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        d,
        f,
        m,
        h,
        g,
        { projectId: p, exchanges: v } = e,
        {
            items: b,
            botIcon: j,
            appIconSrc: k,
        } = ((t = (0, c.bG)([y.default], () => y.default.getCurrentUser())),
        (n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(p))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([al.A], () => al.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? ej.intl.string(eb.default.JEYq8M)),
        (o = (0, c.bG)([y.default], () => (null != l ? y.default.getUser(l) : void 0), [l])),
        (f = ac("31337", s, { bot: !0, enabled: !(d = o?.bot === !0) })),
        (m = d ? o : f),
        (h = ac("31338", ej.intl.string(eb.default["9iAOsw"]), { discriminator: "0003" })),
        (g = ac("31339", (0, ao.mG)(t) ?? "", { enabled: null != t })),
        {
            items: a.useMemo(
                () =>
                    null == t || null == g || null == m || null == h
                        ? []
                        : (function (e, t, n) {
                              var l, r, i;
                              let { bot: a, currentUser: s, viewer: o, member: u } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: n,
                                          messageType: l,
                                          menu: r,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      i = String(c.length + 1),
                                      a = (0, ar.rh)({
                                          ...(0, ai.Ay)({
                                              channelId: au.id,
                                              content: e,
                                              author: t,
                                              type: l ?? ls.lAJ.DEFAULT,
                                          }),
                                          id: i,
                                          state: ls.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: i,
                                                        name: n,
                                                        type: at.G.APPLICATION_COMMAND,
                                                        user: (0, ai.Vi)(s),
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
                                              messageType: ls.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (d(e ? n.memberMessage : n.targetMessage, e ? u : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, a, {
                                                  interactionName: t.user,
                                                  messageType: ls.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(ad, `<@${a.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), a));
                                          break;
                                      case "event":
                                          d(((i = t.bot), i.split(`@${u.username}`).join(`<@${u.id}>`)), a);
                                  }
                              return c;
                          })(
                              v,
                              { bot: m, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: ej.intl.string(eb.default["y+QYes"]),
                                  memberMessage: ej.intl.string(eb.default.BUTRDc),
                              },
                          ),
                [v, m, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === b.length) return null;
    let w = au.name;
    return (0, i.jsxs)("div", {
        className: aG.Ix,
        children: [
            (0, i.jsxs)("div", {
                className: aG.ZO,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aP.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(x.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: w }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: u()(aG.TE, "group-spacing-16"),
                children: b.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, i.jsxs)(
                        "li",
                        {
                            className: null != r ? aG.Rz : void 0,
                            children: [
                                (0, i.jsx)(aO.A, {
                                    message: n,
                                    channel: au,
                                    author: (0, aD.FT)(n.author, au),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (j ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, i.jsx)(aq.A, { message: n, channel: au }) : void 0,
                                    usernameClassName: r?.target === "user" ? aG.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, i.jsx)("div", {
                                          className: aG.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, i.jsxs)(aF.Ay, {
                                              children: [
                                                  (0, i.jsx)(aF.qv, {
                                                      label: ej.intl.string(ej.t.lfIHs4),
                                                      icon: aR.ReactionIcon,
                                                      onClick: aK,
                                                  }),
                                                  (0, i.jsx)(aF.qv, {
                                                      label: ej.intl.string(ej.t["5IEsGx"]),
                                                      icon: aT.ArrowAngleLeftUpIcon,
                                                      onClick: aK,
                                                  }),
                                                  (0, i.jsx)(aF.qv, {
                                                      label: ej.intl.string(ej.t["UKOtz+"]),
                                                      icon: aL.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: aK,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, i.jsx)("div", {
                                          className: "user" === r.target ? aG.ET : aG.je,
                                          inert: !0,
                                          children: (0, i.jsx)(aB, {
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
            (0, i.jsxs)("div", {
                className: aG.DA,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(a$.SlashBoxIcon, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: ej.intl.formatToPlainString(ej.t["8lzR/R"], { channel: `#${w}` }),
                    }),
                ],
            }),
        ],
    });
}
n(381941);
var aH = n(332173);
function aV(e) {
    let { name: t } = e;
    return (0, i.jsxs)(aH.A, { children: ["/", t] });
}
function aX(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(iz());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, i.jsx)(aV, { name: e.name }, e.start) : e.text));
}
n(827669);
var aY = n(757789),
    aZ = n(26137),
    aJ = n(231483),
    aQ = n(558393);
let a0 = { frame: eb.default.Z2bt4u, bot: eb.default.EbvC13, commands: eb.default.EbvC13, automod: eb.default.tiMvei },
    a1 = {
        user_widget: { server: eb.default.VlI3et, personal: eb.default.njJ4YL },
        overlay_widget: { server: eb.default.nUcjJ1, personal: eb.default.RDpKqP },
    };
function a2(e) {
    return "frame" === e.kind && !0 !== e.game;
}
var a3 = n(573634);
let a4 = {
    frame: e4.GameControllerIcon,
    overlay_widget: aY.WindowTopIcon,
    user_widget: aZ.UserCircleIcon,
    bot: e5.RobotIcon,
    commands: e5.RobotIcon,
    automod: aJ.ShieldIcon,
};
function a5(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, i.jsxs)("div", {
        className: u()(a3.e7, l),
        children: [(0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function a7(e) {
    let { labels: t } = e;
    return (0, i.jsx)("ul", {
        className: a3.Ip,
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    className: a3.jw,
                    children: (0, i.jsx)(x.E, {
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
function a8(e) {
    let { name: t, description: n } = e;
    return (0, i.jsxs)("li", {
        className: a3.lj,
        children: [
            (0, i.jsx)("span", {
                className: u()(a3.Vo, a3.G),
                children: (0, i.jsx)(e0.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, i.jsxs)("div", {
                className: a3.aV,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function a6(e) {
    let { commands: t } = e;
    return (0, i.jsx)("ul", {
        className: a3.wZ,
        children: t.map((e, t) => {
            let n = iW(e),
                l = e.description?.trim() ?? "";
            return (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsxs)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, i.jsx)(aV, { name: e.name })
                                : (0, i.jsx)(aH.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function a9(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, i.jsx)("ul", {
        className: a3.p_,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    className: a3.Aw,
                    children: (0, i.jsx)(x.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, i.jsx)(aX, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function se(e) {
    let { experience: t, inServer: n, bullets: l, preview: r, blocks: a, commandNames: s } = e,
        o = a2(t) ? e0.AppsIcon : a4[t.kind],
        u = (function (e, t) {
            if (a2(e)) return ej.intl.string(eb.default.BM4Ymz);
            if ("user_widget" === e.kind || "overlay_widget" === e.kind) {
                let n = a1[e.kind];
                return ej.intl.string(t ? n.server : n.personal);
            }
            return ej.intl.string(a0[e.kind]);
        })(t, n),
        c = n && t.kind in a1 ? ej.intl.string(eb.default.UXJCSG) : null;
    return (0, i.jsxs)("section", {
        className: a3.s9,
        "aria-label": u,
        children: [
            (0, i.jsxs)("div", {
                className: a3.JQ,
                children: [
                    (0, i.jsx)("span", {
                        className: a3.Vo,
                        children: (0, i.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, i.jsx)(x.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != c ? (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            null != r ? (0, i.jsx)("div", { className: a3.VH, children: r }) : null,
            "automod" === t.kind && 1 === l.length
                ? (0, i.jsx)(x.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, i.jsx)(aX, { text: l[0], commandNames: s }),
                  })
                : l.length > 0
                  ? (0, i.jsx)(a9, { bullets: l, commandNames: s })
                  : null,
            a.length > 0 ? (0, i.jsx)("div", { className: a3.PG, children: a }) : null,
        ],
    });
}
function st(e) {
    var t;
    let n,
        l,
        r,
        { appName: s, inServer: o, guild: u, intro: c, proposal: d, renderPreview: f, commandNames: m } = e,
        h =
            ((t = d.experiences ?? []),
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
                                let n = t.map(iz()).join("|");
                                return RegExp(`(?<![\\p{L}\\p{N}/.:])/(?:${n})(?![\\p{L}\\p{N}_-])`, "iu").test(e);
                            })(e, m),
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
        g =
            ((r =
                h.find((e) => {
                    let { experience: t } = e;
                    return "bot" === t.kind || "commands" === t.kind;
                }) ?? h[0]),
            r?.experience.id);
    return (0, i.jsxs)("div", {
        className: a3.aN,
        children: [
            (0, i.jsxs)("div", {
                className: a3.Lv,
                children: [(0, i.jsx)(p.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), c],
            }),
            h.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, i.jsxs)(
                    a.Fragment,
                    {
                        children: [
                            (0, i.jsx)("div", { className: a3.yF, role: "separator" }),
                            (0, i.jsx)(se, {
                                experience: t,
                                inServer: o,
                                bullets: n,
                                preview: f(t),
                                blocks: (function (e, t, n, l) {
                                    let r,
                                        a = n
                                            ? ((r = null != l ? aQ.A.getGuildPermissionSpecMap(l) : null),
                                              [
                                                  {
                                                      key: "permissions",
                                                      caption: eb.default["2UbW6r"],
                                                      names: e.bot_permissions,
                                                      label: (e) => {
                                                          let t, n;
                                                          return (
                                                              (t = Object.hasOwn(iK, e) ? iK[e] : e),
                                                              null != (n = Object.hasOwn(ls.xBc, t) ? ls.xBc[t] : null)
                                                                  ? (0, iU.A)(n, r)
                                                                  : iB(e)
                                                          );
                                                      },
                                                  },
                                                  {
                                                      key: "intents",
                                                      caption: eb.default["7TKfpj"],
                                                      names: e.privileged_intents,
                                                      label: iB,
                                                  },
                                              ].flatMap((e) => {
                                                  let { key: t, caption: n, names: l, label: r } = e;
                                                  return null != l && l.length > 0
                                                      ? [
                                                            {
                                                                key: t,
                                                                caption: ej.intl.string(n),
                                                                labels: [...new Set(l.map(r))],
                                                            },
                                                        ]
                                                      : [];
                                              })).map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, i.jsx)(
                                                      a5,
                                                      { caption: n, children: (0, i.jsx)(a7, { labels: l }) },
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
                                                        let n = ej.intl.string(eb.default["6/3tGY"]),
                                                            l = [];
                                                        if (t.surfaces.includes(eO.q7.APP_CHANNEL)) {
                                                            let r = e.app_channel_names ?? [];
                                                            l = (
                                                                null != t.app_channels && t.app_channels.length > 0
                                                                    ? t.app_channels
                                                                    : r.length > 0
                                                                      ? r.map((e) => ({ name: e }))
                                                                      : [{ name: eV(t.name) }]
                                                            ).map((e) => {
                                                                let { name: t, description: l } = e,
                                                                    r = l?.trim() ?? "";
                                                                return { name: t, description: "" !== r ? r : n };
                                                            });
                                                        }
                                                        return {
                                                            channels: l,
                                                            launchableAnywhere: t.surfaces.includes(eO.q7.ACTIVITY),
                                                            usableInVoice: t.surfaces.includes(eO.q7.VOICE_CHANNEL),
                                                        };
                                                    })(e, t);
                                                    if (null == n) return [];
                                                    let l = [];
                                                    n.channels.length > 0 &&
                                                        l.push(
                                                            (0, i.jsx)(
                                                                a5,
                                                                {
                                                                    className: a3.Iw,
                                                                    caption: ej.intl.formatToPlainString(
                                                                        eb.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, i.jsx)("ul", {
                                                                        className: a3.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, i.jsx)(
                                                                                a8,
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
                                                            ? [ej.intl.string(eb.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [ej.intl.string(eb.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, i.jsx)(
                                                                    a5,
                                                                    {
                                                                        caption: ej.intl.string(eb.default.MY6UGJ),
                                                                        children: (0, i.jsx)(a7, { labels: r }),
                                                                    },
                                                                    "features",
                                                                ),
                                                            ),
                                                        l
                                                    );
                                                })(e, t),
                                                ...a,
                                            ];
                                        case "bot":
                                        case "commands":
                                            return [
                                                ...(0 === e.commands.length
                                                    ? []
                                                    : [
                                                          (0, i.jsx)(
                                                              a5,
                                                              {
                                                                  caption: ej.intl.string(ej.t["0hKkS+"]),
                                                                  children: (0, i.jsx)(a6, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...a,
                                            ];
                                        default:
                                            return a;
                                    }
                                })(d, t, t.id === g, u),
                                commandNames: m,
                            }),
                        ],
                    },
                    t.id,
                );
            }),
        ],
    });
}
var sn = n(633075),
    sl = n(591410),
    sr = n(27399);
function si(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
        r = a.useMemo(() => new sn.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, i.jsx)("div", {
              className: sr.H,
              children: (0, i.jsx)(sl.A, {
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
var sa = n(443863);
function ss(e) {
    let t,
        { projectId: n, src: l, alt: r, size: a, onError: s } = e,
        o =
            ((t = Math.min(1, 1872 / a.width, 970 / a.height)),
            { width: iZ(a.width * t, 1920), height: iZ(a.height * t, 1018) });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(iM, { projectId: n }),
            (0, i.jsx)("div", {
                className: sa.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": iJ,
                    "--custom-conjure-plan-overlay-widget-end": iQ,
                    "--custom-conjure-plan-overlay-widget-width": o.width,
                    "--custom-conjure-plan-overlay-widget-height": o.height,
                },
                children: (0, i.jsx)("img", { src: l, alt: r, className: sa.M7, onError: s }),
            }),
        ],
    });
}
function so(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, tG.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, re.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function su(e) {
    return new Promise((t) => setTimeout(t, e));
}
function sc(e) {
    let { projectId: t, src: n, alt: l, size: r, generateImageRef: s } = e,
        o = a.useRef(null);
    return (
        a.useEffect(() => {
            let e = o.current;
            if (null == e) return;
            let t = !1,
                n = [];
            return (
                !(async function (e) {
                    (await (async function (e) {
                        let t = Date.now() + 3e3;
                        for (; e.querySelectorAll("img").length < 2 && Date.now() < t;) await su(50);
                    })(e),
                        await Promise.all(
                            Array.from(e.querySelectorAll("img"), async (e) => {
                                try {
                                    await e.decode();
                                    let l = await fetch(e.currentSrc, { cache: "reload" });
                                    if (!l.ok) return;
                                    let r = URL.createObjectURL(await l.blob());
                                    if (t) return void URL.revokeObjectURL(r);
                                    (n.push(r), (e.src = r), await e.decode());
                                } catch {}
                            }),
                        ),
                        t || s(e));
                })(e),
                () => {
                    ((t = !0), n.forEach((e) => URL.revokeObjectURL(e)));
                }
            );
        }, [s]),
        (0, i.jsx)("div", {
            ref: o,
            className: u()(sa.nj, sa.d9),
            style: { "--custom-conjure-plan-overlay-scene-aspect": String(iY) },
            children: (0, i.jsx)(ss, { projectId: t, src: n, alt: l, size: r, onError: () => {} }),
        })
    );
}
function sd(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: a, gone: s, handleError: o } = (0, rt._)(t, r);
    return s
        ? null
        : (0, i.jsx)(e7.D, {
              className: sa.xX,
              onClick: () => so(t, [{ id: r, alt: l }], 0),
              "aria-label": ej.intl.string(eb.default.TvAPIm),
              children: null == a ? null : (0, i.jsx)("img", { src: a, alt: l, className: sa.sN, onError: o }),
          });
}
function sf(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: d } = (0, rt._)(t, r),
        [f, m] = a.useState(!1),
        [h, g] = a.useState(!1),
        {
            slide: p,
            labels: v,
            pick: b,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([af.Ay], () => af.Ay.useReducedMotion),
                [r, i] = a.useState(0),
                [s, o] = a.useState(!1),
                u = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            a.useEffect(() => {
                if (!u) return;
                let e = setInterval(() => i((e) => (e + 1) % am.length), 4e3);
                return () => clearInterval(e);
            }, [u]);
            let f = a.useCallback((e) => {
                    (o(!0), i(e));
                }, []),
                m = a.useCallback(() => f(d), [f, d]);
            return { slide: d, labels: am.map((e) => ej.intl.string(e)), pick: f, hold: m };
        })({ ready: null != s, paused: f || h }),
        j = ej.intl.string(eb.default.mjryK4),
        y = ej.intl.string(eb.default["rPpf5/"]),
        { generateImage: k } = (0, iw.R)({
            renderComponent: (e) =>
                null == s ? null : (0, i.jsx)(sc, { ...e, projectId: t, src: s, alt: y, size: l }),
            imageOptions: { width: 1920 },
        });
    return o
        ? null
        : (0, i.jsxs)("div", {
              className: sa.RM,
              onMouseEnter: () => m(!0),
              onMouseLeave: () => m(!1),
              onFocus: () => g(!0),
              onBlur: (e) => {
                  e.currentTarget.contains(e.relatedTarget) || g(!1);
              },
              children: [
                  (0, i.jsx)(e7.D, {
                      className: u()(sa.xX, sa.nj, { [sa.qQ]: 0 === p }),
                      style: { "--custom-conjure-plan-overlay-scene-aspect": String(iY) },
                      onClick: () =>
                          (async function (e) {
                              let t,
                                  {
                                      projectId: n,
                                      id: l,
                                      widgetAlt: r,
                                      sceneAlt: i,
                                      startingIndex: a,
                                      captureScene: s,
                                  } = e;
                              try {
                                  t = await (0, tG.PK)(n, l);
                              } catch {
                                  return;
                              }
                              let o = null;
                              if (null != s)
                                  try {
                                      let e = await Promise.race([s(), su(8e3)]);
                                      null != e && (o = URL.createObjectURL(e));
                                  } catch {}
                              let u = o;
                              (0, re.R)({
                                  items: [
                                      { type: "IMAGE", url: t, alt: r },
                                      ...(null == u ? [] : [{ type: "IMAGE", url: u, alt: i }]),
                                  ],
                                  startingIndex: null == u ? 0 : a,
                                  shouldHideMediaOptions: !0,
                                  location: "ConjureChat",
                                  onClose: null == u ? void 0 : () => URL.revokeObjectURL(u),
                              });
                          })({
                              projectId: t,
                              id: r,
                              widgetAlt: j,
                              sceneAlt: y,
                              startingIndex: p,
                              captureScene: null == s ? null : k,
                          }),
                      "aria-label": ej.intl.string(eb.default.TvAPIm),
                      children:
                          null == s
                              ? null
                              : 0 === p
                                ? (0, i.jsx)("img", { src: s, alt: j, className: sa.Ac, onError: d })
                                : (0, i.jsx)(ss, { projectId: t, src: s, alt: y, size: l, onError: d }),
                  }),
                  (0, i.jsx)("div", {
                      className: sa._4,
                      role: "group",
                      "aria-label": ej.intl.string(eb.default.EH36X6),
                      children: v.map((e, t) =>
                          (0, i.jsx)(
                              e7.D,
                              {
                                  className: u()(sa.c, { [sa.Cw]: p === t }),
                                  "aria-pressed": p === t,
                                  onClick: () => b(t),
                                  children: (0, i.jsx)(x.E, {
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
function sm(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: a, gone: s, handleError: o } = (0, rt._)(t, n);
    return s
        ? null
        : (0, i.jsx)("li", {
              children: (0, i.jsx)(e7.D, {
                  className: sa.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == a ? null : (0, i.jsx)("img", { src: a, alt: "", className: sa.rA, onError: o }),
              }),
          });
}
function sh(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: ej.intl.formatToPlainString(eb.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("section", {
              className: sa.Op,
              children: (0, i.jsxs)("div", {
                  className: sa.uW,
                  children: [
                      (0, i.jsx)(x.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: ej.intl.string(eb.default.ubBJcy),
                      }),
                      (0, i.jsx)("ul", {
                          className: sa.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: a } = e;
                              return (0, i.jsx)(sm, { projectId: t, id: r, alt: a, onOpen: () => so(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function sg(e) {
    var t;
    let n,
        l,
        r,
        s,
        o,
        u,
        d,
        m,
        h,
        g,
        { projectId: p, proposal: v, version: b, onApprove: j } = e,
        { botExchanges: y } =
            ((n = iR(v, eO.q7.APPLICATION_COMMANDS)),
            (l =
                iR(v, eO.q7.BOT) || n
                    ? null != v.bot
                        ? v.bot.interaction
                        : n && v.commands.some(iD)
                          ? "commands"
                          : null
                    : null),
            (r = a.useMemo(
                () =>
                    null == l
                        ? []
                        : iO(v, l, {
                              message: ej.intl.string(eb.default.J7qggf),
                              reply: ej.intl.string(eb.default.nqYtiy),
                              event: ej.intl.string(eb.default["05lU9W"]),
                          }),
                [v, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = i6 } = t,
                r = (0, c.bG)([i5.default], () => i5.default.locale),
                i = (0, c.bG)([ts.Ay], () => {
                    let t = ts.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = a.useState(i8);
                    return (
                        a.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, tG.PK)(e, l.id).then(
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
                o = a.useMemo(
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
                                                          ...i9(n),
                                                          ...(null != n.fallback ? { fallback: i9(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let i = i1.uW.safeParse(r);
                                  if (!i.success) return null;
                                  let a = i.data;
                                  return null == a[i4.m.WIDGET_TOP] || null == a[i4.m.WIDGET_BOTTOM]
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
                                                                    type: i1.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof i
                                                                ? (r[e] = { type: i1.oG.NUMBER, value: i })
                                                                : (r[e] = { type: i1.oG.STRING, value: i });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(ae),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: i7,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return a.useMemo(() => (null == i || null == o ? null : { applicationId: i, rendererProps: o }), [i, o]);
        })(p, v),
        w = b?.superseded === !0,
        A = v.what_changed?.trim() ?? "",
        S =
            ((t = v.commands),
            a.useMemo(
                () =>
                    t
                        .filter((e) => "/" === iW(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        C =
            ((o =
                null == (s = iX(v))
                    ? null
                    : (v.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (d = null != (u = v.design_image) && u.id !== i0(v)?.id ? u : null),
            (m = i0(v)),
            (h =
                v.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "frame" === t;
                })?.id ?? o),
            (g =
                v.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "overlay_widget" === t;
                })?.id ?? o),
            {
                ui: null != d && null != h ? { experienceId: h, design: d } : null,
                overlay:
                    null != m && null != g ? { experienceId: g, design: m, size: ez(v.overlay_widget ?? null) } : null,
            }),
        I = a.useMemo(
            () =>
                v.commands.some(iD)
                    ? iO({ ...v, bot: void 0 }, "commands", {
                          message: ej.intl.string(eb.default.J7qggf),
                          reply: ej.intl.string(eb.default.nqYtiy),
                          event: ej.intl.string(eb.default["05lU9W"]),
                      })
                    : [],
            [v],
        ),
        N = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(p)?.name, [p]),
        E = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(p)?.install_scope === "guild", [p]),
        _ = (0, c.bG)(
            [ts.Ay, lK.A],
            () => {
                let e = ts.Ay.getProject(p)?.guild_id;
                return null != e ? (lK.A.getGuild(e) ?? null) : null;
            },
            [p],
        ),
        M =
            w && null != b
                ? ej.intl.formatToPlainString(eb.default.YZ3qJs, { version: b.version })
                : ej.intl.string(eb.default["3b6e7o"]),
        P = w ? (0, i.jsx)(nG, { children: ej.intl.string(eb.default.hF2c41) }) : null;
    return (0, i.jsxs)(nz, {
        title: M,
        meta: P,
        superseded: w,
        showLabel: ej.intl.string(eb.default.yD8EJS),
        hideLabel: ej.intl.string(eb.default.nSPGNb),
        bodyClassName: sa.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, i.jsx)("div", {
                className: sa.Qs,
                children: (0, i.jsx)(st, {
                    appName: N ?? v.experiences?.[0]?.name ?? "",
                    inServer: E,
                    guild: _,
                    intro: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, i.jsx)(aX, { text: v.summary, commandNames: S }),
                            }),
                            (0, i.jsx)(sh, { projectId: p, proposal: v }),
                            "" !== A
                                ? (0, i.jsxs)("section", {
                                      className: sa.uW,
                                      children: [
                                          (0, i.jsx)(x.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: ej.intl.string(eb.default.iNS4dl),
                                          }),
                                          (0, i.jsx)(x.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, i.jsx)(aX, { text: A, commandNames: S }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    proposal: v,
                    renderPreview: function (e) {
                        switch (e.kind) {
                            case "frame":
                            case "overlay_widget": {
                                let t,
                                    n =
                                        e.id === C.ui?.experienceId
                                            ? (0, i.jsx)(sd, {
                                                  projectId: p,
                                                  design: C.ui.design,
                                                  alt: ej.intl.string(
                                                      null == (t = iX(v)) ? eb.default["3/aHX6"] : iH[t],
                                                  ),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, i.jsx)(sf, {
                                                  projectId: p,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, i.jsxs)(i.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, i.jsx)(si, { ...k }) : null;
                            case "automod":
                                return null != v.automod && v.automod.examples.length > 0
                                    ? (0, i.jsx)(aM, { automod: v.automod })
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
                                        (r = l.some((e) => "command" === e.kind || iq(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, I);
                                return t.length > 0 ? (0, i.jsx)(aW, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: S,
                }),
            }),
            null == j || w
                ? null
                : (0, i.jsxs)("div", {
                      className: sa.qr,
                      children: [
                          (0, i.jsx)(f.$, {
                              variant: "primary",
                              size: "sm",
                              text: ej.intl.string(eb.default["6S+wRM"]),
                              onClick: j,
                          }),
                          (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: ej.intl.string(eb.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var sp = n(289565);
function sx(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, i.jsx)("div", { className: sp.m, children: n })
        : (0, i.jsxs)("div", {
              className: sp.Z,
              children: [
                  n,
                  (0, i.jsx)(d.m, {
                      text: ej.intl.string(ej.t.WAI6xu),
                      asContainer: !0,
                      children: (0, i.jsx)(tZ.K, {
                          "aria-label": ej.intl.string(ej.t.WAI6xu),
                          icon: e8.XSmallIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function sv(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function sb(e, t) {
    return (e?.state === "action_needed" || e?.state === "publishing") && sv(t, e.status);
}
let sj = new WeakMap();
function sy(e) {
    let { projectId: t, publish: n } = e,
        l = (0, tj.A)(t, n);
    return (0, i.jsx)(f.$, {
        variant: "primary",
        size: "sm",
        loading: "publishing" === n.state && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function sk(e) {
    let { projectId: t, cta: n } = e,
        l = (0, tm.Ay)(t);
    return null != l && sb(l, n)
        ? (0, i.jsx)(sx, {
              children: (0, i.jsxs)(lk.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, i.jsx)(sy, { projectId: t, publish: l }),
                      null != l.failure
                          ? (0, i.jsx)(x.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: l.failure,
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var sw = n(303345),
    sA = n(44255),
    sS = n(416473),
    sC = n(289830);
function sI(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, c.bG)(
                    [ts.Ay],
                    () => {
                        let t = ts.Ay.getProject(e);
                        return null != t && (0, ts.jf)(t);
                    },
                    [e],
                ),
                [r, i] = a.useState("idle"),
                [s, o] = a.useState(null),
                u = a.useCallback(async () => {
                    (i("sending"), o(null));
                    try {
                        (await (0, sS.Du)(e, t.trigger), i("on"));
                    } catch (e) {
                        (o(e instanceof sw.A ? e.message : ej.intl.string(eb.default.EXceox)), i("error"));
                    }
                }, [e, t.trigger]),
                [d] = a.useState(() => Date.now()),
                f =
                    t.next_run_at > d
                        ? ej.intl.formatToPlainString(eb.default.orZDqY, { time: (0, sA.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, sA.lD)(t.trigger),
                firstPublish: f,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? u : void 0,
            };
        })(t, n, l);
    return (0, i.jsx)(nF, {
        title: ej.intl.string(eb.default.ZtfX9V),
        children: (0, i.jsxs)("div", {
            className: sC.r,
            children: [
                (0, i.jsxs)("div", {
                    className: sC.z,
                    children: [
                        (0, i.jsx)(x.E, { variant: "body-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, i.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, i.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: ej.intl.string(eb.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, i.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: ej.intl.string(eb.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, i.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, i.jsx)(f.$, {
                          variant: "secondary",
                          size: "sm",
                          text: ej.intl.string(eb.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var sN = n(478016),
    sE = n(989271);
function s_(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = a.useId(),
        s = null == l;
    return (0, i.jsxs)(e7.D, {
        className: u()(sE.nM, { [sE.f1]: s, [sE.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": ej.intl.formatToPlainString(eb.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, i.jsxs)("div", {
                className: sE.jo,
                children: [
                    n
                        ? (0, i.jsx)(sN.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sE.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, i.jsx)(x.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: sE.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, i.jsx)(x.E, {
                      tag: "div",
                      id: r,
                      variant: "body-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function sM(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = a.useState(() => new Set()),
        o = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, i.jsx)(nF, {
        title: ej.intl.string(eb.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, i.jsx)(
                s_,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var sP = n(313537),
    sR = n(125372);
let sT = {
        add_to_server: eb.default["7SD3ul"],
        remove_from_server: eb.default.ErhKil,
        change_server: eb.default["1E5/ay"],
    },
    sL = {
        add_to_server: eb.default["Wy+mGW"],
        remove_from_server: eb.default.vUWHZe,
        change_server: eb.default.MfnSEe,
    };
var s$ = n(189213),
    sD = n(733791),
    sq = n(680032),
    sF = n(624048),
    sO = n(947275),
    sG = n(127062),
    sz = n(280645),
    sU = n(177953),
    sB = n(950305),
    sK = n(152367),
    sW = n(664121),
    sH = n(32924);
let sV = {
    bots: e5.RobotIcon,
    channels: e0.AppsIcon,
    test_app: sG.BeakerIcon,
    profile_widget: sz.IdCardIcon,
    overlay: e4.GameControllerIcon,
    automod: aJ.ShieldIcon,
    collaboration: sU.GroupIcon,
    only_you: sB.UserIcon,
    location: sK.MagicWandIcon,
    server: sW.ServerIcon,
    settings: m.SettingsIcon,
};
function sX(e) {
    let { rows: t } = e;
    return (0, i.jsxs)(lk.B, {
        gap: 8,
        children: [
            (0, i.jsx)(x.E, {
                variant: "body-md/semibold",
                color: "text-strong",
                children: ej.intl.string(eb.default["kG/2e8"]),
            }),
            (0, i.jsx)("div", {
                className: sH.aP,
                children: t.map((e) => {
                    let t = sV[e.key];
                    return (0, i.jsxs)(
                        "div",
                        {
                            className: sH.nM,
                            children: [
                                (0, i.jsx)(t, {
                                    size: "sm",
                                    color: "currentColor",
                                    className: sH.Kk,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", children: e.text }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
function sY(e) {
    let { project: t, transitionState: n, onClose: l } = e,
        r = (function (e) {
            let [t, n] = a.useState(!1),
                [l, r] = a.useState(null);
            a.useEffect(() => (0, ti.GO)(e.id), [e.id]);
            let i = (0, sD.Bs)(e.id),
                [s, o] = a.useState(null),
                u = null == s ? i : s.target,
                c = u?.appName ?? e.name,
                d = a.useMemo(() => (0, sq.wJ)(e, u), [e, u]),
                f = a.useCallback(async () => {
                    (n(!0), r(null), o({ target: i }), (0, sF.u6)(e.id));
                    try {
                        await (0, ti.kY)(e.id);
                    } catch {
                        return ((0, sF.MX)(e.id), r(ej.intl.string(eb.default["d+wTRF"])), o(null), n(!1), null);
                    }
                    (n(!1), (0, sO.Ay)(e, "removed"));
                    let t = ts.Ay.getIntegrationStatus(e.id)?.owner_authorization_revoked === !0;
                    return ej.intl.formatToPlainString(t ? eb.default.tOu7uv : eb.default.TWYUzf, { app: c });
                }, [c, i, e]);
            return {
                appName: c,
                rows: d,
                keptChannels: null == u ? null : (0, sD.Mi)(u),
                pending: t,
                error: l,
                submit: f,
            };
        })(t),
        { appName: s, rows: o, keptChannels: u, pending: c, error: d } = r;
    return (0, i.jsx)(s$.a, {
        transitionState: n,
        onClose: l,
        role: "alertdialog",
        title: ej.intl.formatToPlainString(eb.default.cAxBIL, { app: s }),
        notice: null == d ? void 0 : { type: "critical", message: d, role: "alert" },
        actions: [
            { text: ej.intl.string(ej.t["ETE/oC"]), variant: "secondary", onClick: l, disabled: c },
            {
                text: ej.intl.string(eb.default.ErhKil),
                variant: "critical-primary",
                onClick: async function () {
                    let e = await r.submit();
                    null != e &&
                        ((0, ep.P0)({ text: e, variant: "success" }),
                        (0, e_.s7)(),
                        (0, eT.n0)(t.id, s, { kind: "wand" }));
                },
                loading: c,
                disabled: c,
            },
        ],
        children: (0, i.jsxs)(lk.B, {
            gap: 12,
            children: [
                (0, i.jsx)(sX, { rows: o }),
                null != u ? (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: u }) : null,
            ],
        }),
    });
}
var sZ = n(691885);
function sJ(e) {
    let { projectId: t, transitionState: n, onClose: l } = e,
        r = (0, sR.Ay)(t),
        { appName: s, moving: o, guilds: u, guild: c, rows: d, pending: f, error: m } = r,
        h = a.useMemo(
            () =>
                u.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: (0, i.jsx)(l$.Ay, { guild: e, size: l$.Ay.Sizes.MINI, active: !0 }),
                })),
            [u],
        );
    return (0, i.jsx)(s$.a, {
        transitionState: n,
        onClose: l,
        title: ej.intl.formatToPlainString(o ? eb.default.M4jq44 : eb.default.PE4egI, { app: s }),
        notice: null != m ? { type: "critical", message: m, role: "alert" } : void 0,
        actions: [
            { text: ej.intl.string(ej.t["ETE/oC"]), variant: "secondary", onClick: l, disabled: f },
            {
                text: ej.intl.string(o ? eb.default.MHSKBb : eb.default["+uQwxA"]),
                variant: "primary",
                onClick: async function () {
                    let e = await r.submit();
                    null != e &&
                        null != c &&
                        ((0, ep.P0)({ text: e, variant: "success" }),
                        (0, e_.s7)(),
                        (0, eT.n0)(t, s, { kind: "server", guildId: c.id, name: c.name }));
                },
                loading: f,
                disabled: null == c || f,
            },
        ],
        children: (0, i.jsxs)(lk.B, {
            gap: 16,
            children: [
                null != c
                    ? (0, i.jsx)(sZ.l, {
                          label: ej.intl.string(eb.default.Uq5hU9),
                          options: h,
                          value: c.id,
                          onSelectionChange: r.pickGuild,
                          selectionMode: "single",
                          disabled: f,
                          fullWidth: !0,
                      })
                    : null,
                d.length > 0 ? (0, i.jsx)(sX, { rows: d }) : null,
            ],
        }),
    });
}
function sQ(e) {
    var t;
    let n,
        l,
        r,
        a,
        s,
        o,
        u,
        d,
        m,
        h,
        g,
        p,
        { projectId: v, change: b, current: j, onReply: y } = e,
        {
            project: k,
            action: w,
            done: A,
            note: S,
        } = ((n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(v), [v])),
        (l = (0, sP.fL)(n)),
        (r = n?.install_scope === "guild"),
        (t = "remove_from_server" === b.action ? b.guild_id : l),
        (a = (0, c.bG)([lK.A], () => lK.A.getGuild(t)?.name, [t]) ?? ej.intl.string(eb.default["6bhivN"])),
        (s = (0, sR.Y3)(v).length > 0),
        (o =
            (0, c.bG)(
                [rC.A],
                () =>
                    (function (e, t, n) {
                        let l = e.findIndex((e) => e.serverChange === t);
                        if (-1 === l) return !1;
                        let r = [];
                        for (let t of e.slice(l + 1)) {
                            if (null != t.serverChange) return !1;
                            t.projectEvent?.type === "app_removed" && r.push(t.projectEvent);
                        }
                        if ("add_to_server" === t.action) return 0 === r.length;
                        if ("remove_from_server" === t.action && 0 === r.length) return !0;
                        if (1 !== r.length) return !1;
                        let [i] = r;
                        return "change_server" === t.action
                            ? null != n &&
                                  i.moved_to_guild_id === n &&
                                  (null == t.guild_id || i.guild_id === t.guild_id)
                            : null == i.moved_to_guild_id && i.guild_id === t.guild_id;
                    })(rC.A.getMessages(v), b, l),
                [v, b, l],
            ) &&
            null != n &&
            ("remove_from_server" === b.action ? !r : r)),
        (u = "change_server" !== b.action || null == b.guild_id || l === b.guild_id),
        (d = null != n && ("add_to_server" === b.action ? !r : r) && u && !o),
        (m = null != n && (0, ts.PV)(n)),
        (h = "remove_from_server" !== b.action),
        (g = d && m ? { kind: b.action, label: ej.intl.string(sT[b.action]), disabled: h && !s } : null),
        (p = null),
        d && !m
            ? (p = ej.intl.string(eb.default.Kt9exT))
            : g?.disabled === !0 && (p = ej.intl.string(eb.default.NXvmoQ)),
        { project: n, action: g, done: o ? ej.intl.formatToPlainString(sL[b.action], { server: a }) : null, note: p }),
        C = b.keep_label,
        I = j && null != w,
        N = I && null != C && null != y,
        E = A ?? (j ? S : null);
    return null != E || I
        ? (0, i.jsxs)(lk.B, {
              gap: 8,
              children: [
                  I
                      ? (0, i.jsxs)(lk.B, {
                            direction: "horizontal",
                            gap: 8,
                            wrap: !0,
                            children: [
                                (0, i.jsx)(f.$, {
                                    variant: "remove_from_server" === w.kind ? "critical-secondary" : "primary",
                                    size: "sm",
                                    text: w.label,
                                    disabled: w.disabled,
                                    onClick: () => {
                                        var e, t;
                                        null != k &&
                                            (w?.kind === "remove_from_server"
                                                ? ((e = { project: k }),
                                                  (0, e_.qf)((t) => (0, i.jsx)(sY, { ...t, ...e })))
                                                : ((t = { projectId: v }),
                                                  (0, e_.qf)((e) => (0, i.jsx)(sJ, { ...e, ...t }))));
                                    },
                                }),
                                N
                                    ? (0, i.jsx)(f.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: C,
                                          onClick: () => y(C),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  null != E ? (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: E }) : null,
              ],
          })
        : null;
}
var s0 = n(431527),
    s1 = n(530557),
    s2 = n(628284),
    s3 = n(290713),
    s4 = n(383668),
    s5 = n(782973),
    s7 = n(971824),
    s8 = n(162052),
    s6 = n(114339);
function s9(e) {
    let { projectId: t, ...n } = e,
        l = (function (e, t) {
            let { overlayGamesPickerPrompts: n = !1 } =
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                l = "settings" === t.kind ? t : null,
                r = (0, c.bG)([rS.A], () => rS.A.getSettings(e), [e]),
                i = rF(e, l?.request ?? null, l?.askId),
                s =
                    "keys" === t.kind
                        ? (function (e) {
                              let { request: t, status: n, cardId: l, awaiting: r } = e;
                              return {
                                  ask: { kind: "keys", request: t, status: n },
                                  body: ej.intl.string(eb.default.MPGSHL),
                                  keys: t.fields.map((e) => e.name),
                                  tags: t.fields.map((e) => ({ id: e.name, label: e.label })),
                                  summary: t.fields
                                      .map((e) => e.label)
                                      .map((e) =>
                                          ej.intl.formatToPlainString(eb.default["Z+FC3j"], {
                                              label: e,
                                              value: ej.intl.string(eb.default["w0Pnu+"]),
                                          }),
                                      )
                                      .join(" \xb7 "),
                                  awaiting: null != r,
                                  transitionId: l,
                              };
                          })(t)
                        : (function (e, t) {
                              let { request: n, askId: l } = e,
                                  { saved: r, superseded: i, summary: a } = t;
                              return {
                                  ask: { kind: "settings", request: n, askId: l, saved: r, superseded: i },
                                  body: ej.intl.string(eb.default.XuOf5s),
                                  keys: n.keys,
                                  tags: [],
                                  summary: a.join(" \xb7 "),
                                  awaiting: !1,
                                  transitionId: null,
                              };
                          })(t, i),
                o = rO(s.ask, r),
                u = (0, rA.bB)(s.transitionId ?? "", null != s.transitionId ? o.status : "open"),
                d = l?.askId,
                f = a.useCallback(() => {
                    null != d && rR(d);
                }, [d]),
                { keys: m } = s,
                h = null != t.request.note && "" !== t.request.note ? t.request.note : null,
                g = n && m?.length === 1 && m[0] === s5.B;
            return {
                state: o,
                copy: {
                    title: ej.intl.string(eb.default["jZjP+I"]),
                    open: ej.intl.string(eb.default.d49riY),
                    saved: ej.intl.string(eb.default.AxBLLy),
                    superseded: ej.intl.string(eb.default["+uXDk+"]),
                },
                awaiting: s.awaiting,
                note: h ?? (g ? null : s.body),
                tags: s.tags,
                summary: s.summary,
                editForm: { kind: "settings", request: { keys: m } },
                entering: u && "open" !== o.status && "pending" !== o.status,
                transitionId: s.transitionId,
                markSaved: f,
            };
        })(t, n, { overlayGamesPickerPrompts: !0 }),
        { status: r, presentation: s, form: o } = l.state,
        { copy: d } = l,
        m = u()(s6.Nr, s8.XR, { [s7.O]: l.awaiting }),
        h = u()(m, { [s6.rO]: l.entering }),
        g =
            l.tags.length > 0
                ? (0, i.jsx)(s0.C, {
                      label: d.title,
                      size: "xs",
                      items: l.tags.map((e) => ({ ...e, icon: s1.KeyIcon })),
                  })
                : null;
    if ("superseded" === r)
        return (0, i.jsx)(
            "article",
            {
                className: h,
                children: (0, i.jsx)(x.E, {
                    variant: "body-xs/semibold",
                    color: "text-muted",
                    tag: "span",
                    children: d.superseded,
                }),
            },
            r,
        );
    if ("inactive" === r)
        return (0, i.jsxs)(
            "article",
            {
                className: h,
                children: [
                    (0, i.jsx)(x.E, {
                        variant: "body-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: d.title,
                    }),
                    g,
                ],
            },
            r,
        );
    if ("pending" === r) return (0, i.jsx)("article", { className: m, children: g }, r);
    if ("saved" === r)
        return (0, i.jsxs)(
            "article",
            {
                className: h,
                children: [
                    (0, i.jsxs)("div", {
                        className: s6.Ol,
                        children: [
                            (0, i.jsx)("span", {
                                className: s6.bG,
                                "aria-hidden": !0,
                                children: (0, i.jsx)(s2.CircleCheckIcon, {
                                    size: "xs",
                                    color: t4.A.colors.ICON_FEEDBACK_POSITIVE,
                                }),
                            }),
                            (0, i.jsx)(x.E, {
                                variant: "body-xs/semibold",
                                color: "text-feedback-positive",
                                tag: "span",
                                children: d.saved,
                            }),
                        ],
                    }),
                    "" !== l.summary
                        ? (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: l.summary,
                          })
                        : null,
                    (0, i.jsx)("div", {
                        className: s6.o1,
                        children: (0, i.jsx)(f.$, {
                            variant: "secondary",
                            size: "sm",
                            text: ej.intl.string(ej.t.bt75uw),
                            onClick: () => rz(t, l.editForm),
                        }),
                    }),
                ],
            },
            r,
        );
    let p = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.E, {
                variant: "body-xs/semibold",
                color: l.awaiting ? "text-brand" : "text-muted",
                tag: "span",
                children: d.title,
            }),
            null != l.note
                ? (0, i.jsx)(s4.A, { text: l.note, variant: "body-sm/normal", color: "text-default" })
                : null,
            g,
        ],
    });
    return "button" === s
        ? (0, i.jsxs)("article", {
              className: m,
              children: [
                  p,
                  (0, i.jsx)("div", {
                      className: s6.o1,
                      children: (0, i.jsx)(f.$, {
                          variant: "primary",
                          size: "sm",
                          text: d.open,
                          onClick: () => rz(t, o),
                      }),
                  }),
              ],
          })
        : (0, i.jsx)(s3.A, {
              projectId: t,
              scopeKeys: o.request.keys,
              notifyAgent: !0,
              onSaved: l.markSaved,
              isPreview: !0,
              children: (e) => {
                  let { fields: t, canSave: n, saving: l, submit: r } = e;
                  return (0, i.jsxs)("form", {
                      className: m,
                      noValidate: !0,
                      onSubmit: async (e) => {
                          (e.preventDefault(), await r());
                      },
                      children: [
                          p,
                          t,
                          (0, i.jsx)("div", {
                              className: s6.o1,
                              children: (0, i.jsx)(f.$, {
                                  variant: "primary",
                                  size: "sm",
                                  type: "submit",
                                  loading: l,
                                  disabled: !n,
                                  text: ej.intl.string(eb.default.A7dQd9),
                              }),
                          }),
                      ],
                  });
              },
          });
}
var oe = n(919790),
    ot = n(908492),
    on = n(165648);
function ol(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            turnActive: r = l,
            checklistSuperseded: s = !1,
            durationMs: o,
            interrupted: u = !1,
            todos: c,
            provisionalTodo: d,
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: p,
        } = e,
        x = a.useMemo(() => (0, nN.Jf)(n, l), [n, l]),
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
    if (u)
        return (0, i.jsx)("ol", {
            className: nY.pj,
            "data-live": !1,
            children: (0, i.jsx)(nR.A, {
                glyph: (0, i.jsx)(r0.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ej.intl.string(eb.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let b = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        j = m ? ((0, nN.lt)(n) ?? c ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = r9(k.map((e) => e.taskId)),
        A = !g && (l || k.some((e) => "running" === e.task.status)),
        S = ia(k);
    return (0, i.jsxs)("ol", {
        className: nY.pj,
        "data-live": A,
        children: [
            (0, i.jsx)(nM.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: g,
                durationMs: b,
                connectsDown: k.length > 0,
                tier: x.turn?.tier,
            }),
            k.map((e, n) => {
                let l = null != e.task.helperMark ? r6(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          is,
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
            (0, i.jsx)(ij, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, i.jsx)("li", {
                      className: nY.YO,
                      children: (0, i.jsx)(nV, { todos: j, provisional: d, agents: S, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function or(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: s,
            ideas: o,
            attachments: d,
            secretRequest: f,
            secretRequestId: m,
            secretRequestAwaiting: h,
            secretRequestStatus: g = "open",
            settingsRequest: p,
            settingsAskId: v,
            publishCta: b,
            onPickIdea: j,
            pickedIdeaIds: y,
            onApprovePlan: k,
            sideReply: w = !1,
            sideReplyAcknowledges: A,
            hoistedProse: S = !1,
            hoistedAttachmentsHost: C,
            restoreProposal: I,
            onRestoreProposal: N,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: _ = !1,
            serverChange: M,
            serverChangeCurrent: P = !1,
            onCardReply: R,
        } = e,
        T = a.useMemo(
            () => r1({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != d && d.length > 0 }),
            [n, l, r, d],
        ),
        { streamed: L, lastStreamedMessage: $, showsClosingMessage: D, closingContent: q } = T,
        F = (0, c.bG)([rS.A], () => null != rS.A.getSettings(t), [t]),
        O = (S ? C : void 0) ?? T.attachmentsHost,
        G = D && !S,
        z = null == d ? null : (0, i.jsx)(oe.A, { projectId: t, attachments: d }),
        U = null == z ? null : (0, i.jsx)("div", { className: nY.MT, children: z }),
        B = w
            ? (0, i.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return ej.intl.string(eb.default.Mv5OmK);
                          case "queued":
                              return ej.intl.string(eb.default["Po/2mi"]);
                          case "restarting":
                              return ej.intl.string(eb.default.Vj0woh);
                          default:
                              return ej.intl.string(eb.default.gY3L8p);
                      }
                  })(A),
              })
            : null;
    return (0, i.jsxs)("div", {
        className: nY.ue,
        children: [
            L.length > 0 && !S
                ? (0, i.jsx)("ol", {
                      className: nY.dO,
                      children: L.filter((e) => "todos" !== e.type).map((e) =>
                          (0, i.jsxs)(
                              "li",
                              {
                                  className: nY.DV,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: on.PT,
                                          children: (0, ot.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === O && e === $ ? U : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, i.jsx)(sg, { projectId: t, proposal: r, version: s, onApprove: k })
                : G
                  ? (0, i.jsxs)("div", {
                        className: u()(nY.ky, s8.XR),
                        children: [
                            (0, i.jsx)("div", {
                                className: u()(on.PT, nY.cW),
                                children: (0, ot.U)(q, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === O ? U : null,
                            B,
                        ],
                    })
                  : null,
            null != f
                ? (0, i.jsx)(s9, {
                      projectId: t,
                      kind: "keys",
                      cardId: m ?? "",
                      request: f,
                      status: g,
                      awaiting: "open" === g ? h : void 0,
                  })
                : null,
            null != p && F ? (0, i.jsx)(s9, { projectId: t, kind: "settings", request: p, askId: v ?? "" }) : null,
            "standalone" !== O && ("closing" !== O || G) ? null : z,
            null != b ? (0, i.jsx)(sk, { projectId: t, cta: b }) : null,
            null != o && o.length > 0 ? (0, i.jsx)(sM, { ideas: o, pickedIdeaIds: y, onPick: j }) : null,
            null != I ? (0, i.jsx)(ik, { proposal: I, onRestore: N }) : null,
            null != M ? (0, i.jsx)(sQ, { projectId: t, change: M, current: P, onReply: R }) : null,
            null != E ? (0, i.jsx)(sI, { projectId: t, proposal: E, current: _ }) : null,
            G ? null : B,
        ],
    });
}
var oi = n(286251),
    oa = n(146806),
    os = n(475358),
    oo = n(783977),
    ou = n(559647),
    oc = n(787564),
    od = n(339200),
    of = n(234320),
    om = n(191023),
    oh = n(285796),
    og = n(922329),
    op = n(153171);
function ox(e) {
    let { projectId: t } = e;
    return (0, i.jsx)(og.p, {
        name: ej.intl.string(eb.default.xhFsEP),
        thumb: (0, i.jsxs)("span", {
            className: ne.PA,
            "aria-hidden": !0,
            children: [
                (0, i.jsx)(om.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, i.jsx)("span", {
                    className: ne.OY,
                    children: (0, i.jsx)(lb.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, i.jsx)(x.E, {
            variant: "body-xs/normal",
            color: "text-muted",
            children: ej.intl.string(eb.default["9y+Dae"]),
        }),
        children: (0, i.jsx)("button", {
            type: "button",
            className: op.o1,
            onClick: () => {
                ei(t)?.active === !1 ? ec(t) : ea(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": ej.intl.string(eb.default.N852dj),
            children: (0, i.jsx)(oh.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function ov(e) {
    let { send: t } = e;
    return (0, i.jsxs)(og.p, {
        compact: !0,
        name: ej.intl.string(eb.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, i.jsx)(x.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: ej.intl.string(eb.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, i.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: op.Rk }) : null,
            "failed" === t.status
                ? (0, i.jsx)(lj.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: ej.intl.string(eb.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var ob = n(587157),
    oj = n(347111),
    oy = n(120234),
    ok = n(901173),
    ow = n(161431),
    oA = n(46653),
    oS = n(695184),
    oC = n(661191),
    oI = n(502472);
function oN(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(e), [e]),
        { creator: r, collaborators: i } = (0, oI.yv)(l),
        s = (0, c.bG)([oA.default], () => oA.default.getId()),
        o = null != l && (0, eO.pL)(l) ? l.guild_id : void 0,
        u = t?.toLowerCase() ?? null;
    return (
        a.useEffect(() => {
            n && null != o && null != u && oS.A.requestMembers(o, u, 100);
        }, [n, o, u]),
        (0, c.yK)(
            [lB.Ay, lK.A, y.default],
            () => {
                if (null == u) return [];
                let e = null != o ? lK.A.getGuild(o) : null,
                    t = (t) => (0, ok.mO)(t, u, null != e ? lB.Ay.getNick(e.id, t.id) : null),
                    n = new Set(l?.collaborator_role_ids ?? []),
                    a = null != e && n.has(oC.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                    c =
                        null == e
                            ? []
                            : lB.Ay.getMemberIds(e.id)
                                  .map((e) => y.default.getUser(e))
                                  .filter(
                                      (l) =>
                                          null != l &&
                                          t(l) &&
                                          (a ||
                                              (lB.Ay.getMember(e.id, l.id)?.roles ?? []).some((e) => n.has(e)) ||
                                              lW.$3({ permission: ls.xBc.MANAGE_GUILD, user: l, context: e })),
                                  ),
                    d = new Set();
                return [...[...(null != r ? [r] : []), ...i].filter(t), ...c].filter(
                    (e) => !(e.id === s || e.bot || d.has(e.id)) && (d.add(e.id), !0),
                );
            },
            [l, o, u, r, i, s],
        )
    );
}
var oE = n(957071),
    o_ = n(927659),
    oM = n(351906),
    oP = n(407653),
    oR = n(322915);
function oT(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: a, onSelect: s } = e,
        o = (0, c.bG)([oM.A], () => oM.A.hidePersonalInformation ?? !1),
        u = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let f = l.map((e, t) =>
            "user" === e.kind
                ? (0, i.jsx)(
                      o_.Ay.User,
                      {
                          index: t,
                          user: e.user,
                          nick: null,
                          status: null,
                          hidePersonalInformation: o,
                          selected: t === r,
                          onHover: a,
                          onClick: s,
                      },
                      e.user.id,
                  )
                : (0, i.jsx)(
                      o_.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, i.jsx)(oP.A, { projectId: n, file: e.file, className: oR.Vk }),
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
    return (0, i.jsx)(o_.Ay, {
        id: t,
        className: oR.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, i.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": ej.intl.string(eb.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, i.jsx)(oL, { titleId: u, title: ej.intl.string(eb.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, i.jsx)(oL, { titleId: d, title: ej.intl.string(eb.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function oL(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, i.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, i.jsx)(x.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: oR.Gf, children: n }),
            l,
        ],
    });
}
var o$ = n(719442),
    oD = n(355622),
    oq = n(408018),
    oF = n(186306),
    oO = n(323350),
    oG = n(35277),
    oz = n(68059),
    oU = n(267102),
    oB = n(259691);
let oK = (0, aa.createChannelRecord)({ id: "1", type: ls.rbe.DM });
function oW(e) {
    let t = od.VW.end(e, []);
    return { anchor: t, focus: t };
}
function oH(e) {
    return (0, oO.WO)(od.VW.richValue(e), { mode: "raw" });
}
function oV(e, t) {
    ((e.children = (0, oq.x7)(t)), (e.selection = oW(e)), e.onChange());
}
function oX(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rX.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, i.jsxs)("span", { ...t, contentEditable: !1, children: [(0, i.jsx)(oB.A, { attachmentId: r }), n] });
}
var oY = n(366811);
function oZ(e, t) {
    return e.split("/").some((e, n, l) => e === t && "conjure" === l[n - 1]);
}
function oJ(e) {
    let t = oY.A.getState().path;
    return oZ(window.location.pathname, e) && (null == t || oZ(t, e));
}
function oQ(e, t) {
    return null != t && (0, tF.vq)(e) && t.contains(e);
}
var o0 = n(497437),
    o1 = n(465410);
let o2 = "body-md/normal",
    o3 = null;
function o4(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = a.useState(t),
        o = a.useRef(null),
        d = a.useRef(null),
        f = a.useRef(0),
        [m, h] = a.useState(0),
        [g, p] = a.useState(0),
        [v, b] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (a.useLayoutEffect(() => {
        let e = o.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = f.current;
        function l() {
            let e = o.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = d.current;
            if (null == l) return;
            let r = parseFloat(getComputedStyle(t).columnGap),
                i = Number.isNaN(r) ? 0 : r,
                a = e.offsetWidth,
                s = l.offsetWidth + i;
            (p(a + i), h(s));
            let u = s + a,
                c = Math.max(n, l.offsetWidth) + i + a,
                f = 0 === c ? 1 : s / c,
                m = 0 === c ? 1 : u / c;
            b({
                frontFrom: 1e3 * (0, oa._R)(f),
                frontTo: 1e3 * (0, oa._R)(m),
                backFrom: 1e3 * (0, oa.T)(f),
                backTo: 1e3 * (0, oa.T)(m),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != d.current && r.observe(d.current), () => r.disconnect());
    }, [t]),
        a.useEffect(() => {
            f.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [j, y] = a.useState(0),
        [k, w] = a.useState(null),
        A = a.useRef(!1),
        S = a.useCallback(() => {
            (w(A.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    a.useEffect(() => {
        A.current = n;
    }, [n, t]);
    let C = "in" === k ? v.backFrom : v.frontFrom,
        I = "out" === k ? v.frontTo : v.backTo,
        N = (0, c.bG)([af.Ay], () => af.Ay.useReducedMotion),
        E = t === ej.intl.string(eb.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, i.jsx)("span", {
            ref: n,
            className: u()(o0.VT, { [o0.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, I - C)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && j > 0 && null != k ? j % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, i.jsx)(os.e, { shortcut: "tab", className: o0.xT, keyClassName: e }),
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(oi.o, {
                text: t,
                variant: o2,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: u()(o0.xM, { [o0.s2]: l }),
                onStart: S,
                onComplete: () => s(t),
            }),
            M(o0.IS, n || (!N && "out" === k), o),
            (0, i.jsx)("span", {
                ref: d,
                className: o0.QI,
                "aria-hidden": !0,
                children: (0, i.jsx)(x.E, { variant: o2, tag: "span", children: t }),
            }),
            _
                ? (0, i.jsxs)("span", {
                      className: o0.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, i.jsx)(x.E, { variant: o2, tag: "span", className: o0.xM, children: t }),
                          M(o0.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let o5 = a.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                aiPaused: l = !1,
                running: r,
                restoring: s = !1,
                onSend: o,
                onInterrupt: f,
                escapeScopeRef: m,
                onUploadFile: h,
                onApprove: g,
                onImport: p,
                onSendToOtherProjects: x,
                suggestion: v,
                questionOpen: b = !1,
                secretPending: j = !1,
                hasPendingContext: y = !1,
                onDraftHasTextChange: k,
                modelSettings: w,
                onModelSettingsChange: A,
                visible: S = !0,
            } = e,
            C = n && !l,
            I = (function (e) {
                let t = a.useContext(oU.Ay),
                    [n] = a.useState(() => {
                        let n = (0, o$.ie)();
                        return (
                            (n.children = (0, oq.x7)(e)),
                            (n.selection = oW(n)),
                            (0, oz.a)({
                                editor: n,
                                chatInputType: oD.oU.GENERIC_RICH_TEXTAREA,
                                channel: oK,
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
                                    for (let [t, l] of od.VW.nodes(e, { at: [], match: od.l5.isText }))
                                        for (let e of t.text.matchAll(rX.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        oF.o.withMergedEntry(e, () =>
                                            od.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: i } of n.reverse())
                                                    oG.b.textToVoid(
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
            })(rJ.A.getDraft(t)),
            [N, E] = a.useState(() => oH(I));
        (0, oy.N$)(N);
        let _ = a.useRef(N),
            [M, P] = a.useState(null),
            R = a.useCallback(() => {
                let e = oH(I);
                (e !== _.current && ((_.current = e), (0, oj.I)(t, e), E(e)),
                    P(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !od.ZF.isCollapsed(t)) return null;
                            let [n] = od.VW.node(e, t.anchor.path);
                            return od.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(I),
                    ));
            }, [I, t]),
            T = a.useCallback((e) => oV(I, e), [I]),
            $ = "" !== N.trim();
        a.useEffect(() => k?.($), [$, k]);
        let D = a.useRef(t);
        a.useLayoutEffect(() => {
            D.current !== t && ((D.current = t), oV(I, rJ.A.getDraft(t)));
        }, [I, t]);
        let q = (0, c.bG)([af.Ay], () => af.Ay.isSubmitButtonEnabled),
            [F, O] = a.useState(!1),
            [G, z] = a.useState(!1);
        (a.useEffect(() => {
            r ? z(!1) : (F && z(!0), O(!1));
        }, [r, F]),
            a.useEffect(() => {
                if (!G) return;
                let e = setTimeout(() => z(!1), o8);
                return () => clearTimeout(e);
            }, [G]));
        let {
                drafts: U,
                addFiles: K,
                pasteFiles: W,
                removeDraft: H,
                settled: V,
                takeRefs: X,
            } = (0, tB.FM)({ projectId: t, surface: "chat", onUploadFile: h }),
            Y = el.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && Q(n);
            }),
            Z = el.useState((e) => (null == t ? null : (e.byProject[t]?.chatFocusRequest ?? null))),
            J = a.useRef(Z);
        a.useEffect(() => {
            let e = J.current;
            ((J.current = Z), C && null != e && null != Z && Z !== e && od.VW.focus(I));
        }, [Z, C, I]);
        let ee = "" !== N.trim() || U.length > 0 || y || Y,
            et = C && ee && V,
            [en, er] = a.useState(null);
        a.useEffect(() => {
            if (null == en) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => er(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [en]);
        let es = (0, ow.rU)(t),
            [ed, ef] = a.useState(null),
            [em, eh] = a.useState(0),
            eg = a.useMemo(() => (null != M && C ? (0, ok.OG)(M, M.length) : null), [M, C]),
            ep = eg?.start ?? null;
        a.useEffect(() => {
            null == ep ? ef(null) : (0, ow.IP)(t);
        }, [ep, t]);
        let ex = ep === ed ? null : eg,
            ev = oN(t, ex?.text ?? null),
            ek = oN(t, N.includes("@") ? "" : null, !1),
            ew = a.useMemo(() => (null == ex ? [] : (0, ok.l$)(ev, es, ex.text)), [ex, ev, es]),
            eA = ex?.text;
        a.useEffect(() => eh(0), [eA]);
        let eS = ew.length > 0,
            eC = Math.min(em, Math.max(0, ew.length - 1)),
            eI = a.useId(),
            eN = a.useCallback(
                (e) => {
                    let t = ew[e];
                    null != ex &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: i } = l.anchor;
                            (oG.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: i } }),
                                oG.b.insertText(e, `${n} `));
                        })(I, ex.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ew, ex, I],
            ),
            eE = a.useCallback(() => {
                if (!et) return;
                let e = X(),
                    n = Y
                        ? (function (e) {
                              let t = ei(e);
                              if (null == t || !Q(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? eo(e);
                              return (
                                  ei(e)?.active === !1
                                      ? ec(e)
                                      : ea(e, (e) => ({ ...e, history: B, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: i, messageKey: a } = (0, ey.Wx)(e, t, r),
                                          s = { projectId: e, nonce: i, job: null, thumbUrl: null };
                                      (nQ.set(a, s),
                                          (s.job = (function (e) {
                                              let t = 0,
                                                  n = null,
                                                  l = null,
                                                  r = null,
                                                  i = !1,
                                                  a = !1,
                                                  s = !1;
                                              function o() {
                                                  (async function () {
                                                      if (!(i || a || s)) {
                                                          ((i = !0), e.update("uploading", l));
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
                                                              ((a = !0), e.update("sent", l));
                                                          } catch {
                                                              s || e.update("failed", l);
                                                          } finally {
                                                              i = !1;
                                                          }
                                                      }
                                                  })().catch(() => {});
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
                                              capture: (t) => (0 === t ? l : eo(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = nx(e),
                                                              r = nx(e);
                                                          if (null == l || null == r) return null;
                                                          return (
                                                              np(r.ctx, t, e),
                                                              l.ctx.drawImage(n, 0, 0),
                                                              l.ctx.drawImage(r.canvas, 0, 0),
                                                              await l.toBlob()
                                                          );
                                                      } finally {
                                                          n.close();
                                                      }
                                                  })(e, n),
                                              upload: (t) =>
                                                  (0, tG.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, tG.n6)(e, t.id),
                                              send: (n) => (0, ey.dv)(e, t, [...r, n], { nonce: i }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      n1(a, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (nQ.delete(a),
                                                          window.setTimeout(() => {
                                                              (n1(a, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                o((0, ok.wl)(N, ek), e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        i = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === i) return i;
                    null == o3 && (o3 = document.createElement("canvas").getContext("2d"));
                    let a = o3;
                    if (null == a) return i;
                    let s = getComputedStyle(e);
                    a.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                    let o =
                        t > 0
                            ? t
                            : ((l = parseFloat(s.paddingInlineStart)),
                              (r = parseFloat(s.paddingInlineEnd)),
                              e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(r) ? 0 : r));
                    if (o <= 0 || a.measureText(i).width <= o) return i;
                    let u = 0,
                        c = i.length;
                    for (; u < c;) {
                        let e = Math.ceil((u + c) / 2);
                        a.measureText(i.slice(0, e)).width <= o ? (u = e) : (c = e - 1);
                    }
                    let d = i.slice(0, u),
                        f = d.lastIndexOf(" ");
                    return (f > 0 ? d.slice(0, f) : d).trimEnd();
                })(o9(e$.current), eK.current, (0, ok.Lj)(N));
                ("" !== l && er(l), T(""), ef(null));
            }, [et, Y, t, N, ek, o, X, T]),
            e_ = a.useCallback(
                (e) => {
                    (e.preventDefault(), eE());
                },
                [eE],
            ),
            eM = a.useCallback(() => {
                null != f && !F && (O(!0), f(), C && od.VW.focus(I));
            }, [f, F, C, I]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                i = a.useRef(r);
            (a.useEffect(() => {
                i.current = r;
            }),
                a.useEffect(() => {
                    if (!t) return;
                    let e = oQ(document.activeElement, l?.current);
                    function r(t) {
                        e = oQ(t.target, l?.current);
                    }
                    function a(t) {
                        var r, a, s;
                        "Escape" === t.key &&
                            !t.isComposing &&
                            oJ(n) &&
                            ei(n)?.active !== !0 &&
                            !L(n).active &&
                            ((r = t.target),
                            (a = l?.current),
                            (s = e),
                            ((0, tF.vq)(r) && r !== document.body && r !== document.documentElement
                                ? !!oQ(r, a) && null == r.closest('input, textarea, [contenteditable="true"]')
                                : s) && (t.preventDefault(), t.stopPropagation(), i.current()));
                    }
                    return (
                        window.addEventListener("keydown", a, !0),
                        window.addEventListener("pointerdown", r, !0),
                        window.addEventListener("focusin", r, !0),
                        () => {
                            (window.removeEventListener("keydown", a, !0),
                                window.removeEventListener("pointerdown", r, !0),
                                window.removeEventListener("focusin", r, !0));
                        }
                    );
                }, [t, n, l]));
        })({ active: r && null != f && S, projectId: t, scopeRef: m, onEscape: eM });
        let eP = (r && null != f) || G,
            eR = null == v || "" !== N || !C || s || y ? null : v,
            eT = a.useCallback(
                (e) => {
                    if (eS && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ew.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), eh((eC + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), eN(eC));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), ef(ex?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && ei(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), eu(t));
                        return;
                    }
                    if ("Escape" === e.key && r && null != f && oJ(t)) {
                        (e.preventDefault(), e.stopPropagation(), eM());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eR) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), T(eR));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != g && (e.preventDefault(), g());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eE());
                },
                [eE, g, r, f, eM, eR, T, eS, ew.length, eC, eN, ex, t],
            ),
            eL = a.useCallback(
                (e) => {
                    C && W(e);
                },
                [C, W],
            );
        (0, of.Vo)({
            event: ls.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eL(t);
            },
        });
        let e$ = a.useRef(null),
            eD = a.useCallback(() => {
                let e = _.current;
                x?.((0, ok.Lj)(e), () => {
                    _.current === e && T("");
                });
            }, [x, T]),
            [eq, eF] = a.useState(0),
            [eO, eG] = a.useState(!1);
        a.useEffect(() => {
            if (0 === N.length) return void eG(!1);
            let e = o9(e$.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eF(t);
            }
            eG(!0);
            let t = setTimeout(() => eG(!1), o7);
            return () => clearTimeout(t);
        }, [N]);
        let ez = a.useMemo(() => ({ "--custom-glow-x": `${eq}px` }), [eq]),
            eU = eO ? ` ${o0.EB}` : "",
            eB = s
                ? ej.intl.string(eb.default.qqlUiW)
                : l
                  ? ej.intl.string(eb.default.Z0hyNL)
                  : C
                    ? y
                        ? ej.intl.string(eb.default.knUjL3)
                        : Y
                          ? ej.intl.string(eb.default["6rXxwa"])
                          : j
                            ? ej.intl.string(eb.default.VxH5vv)
                            : b
                              ? ej.intl.string(eb.default.IevBEw)
                              : ej.intl.string(r ? eb.default["0BJa/0"] : eb.default.TEeU7z)
                    : ej.intl.string(eb.default.zZ9NgM),
            eK = a.useRef(0),
            eW = a.useRef(null),
            eH = a.useCallback((e) => {
                if ((eW.current?.disconnect(), null == e)) return;
                eK.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eK.current = e.clientWidth;
                });
                (t.observe(e), (eW.current = t));
            }, []),
            eV = a.useId(),
            eX = a.useId(),
            eY = null != eR,
            eZ = en ?? eR ?? eB,
            eJ = "" === N && "" !== eZ;
        return (0, i.jsxs)("form", {
            onSubmit: e_,
            className: o0.DA,
            children: [
                eS
                    ? (0, i.jsx)(oT, {
                          id: eI,
                          projectId: t,
                          suggestions: ew,
                          selectedIndex: eC,
                          onHover: eh,
                          onSelect: eN,
                      })
                    : null,
                U.length > 0 || Y
                    ? (0, i.jsxs)("div", {
                          className: o0.lN,
                          children: [
                              U.map((e) => (0, i.jsx)(tB.Nl, { draft: e, onRemove: H }, e.localId)),
                              Y ? (0, i.jsx)(ox, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, i.jsx)("span", { className: `${o0.wg} ${o0.LP}${eU}`, style: ez, "aria-hidden": !0 }),
                (0, i.jsx)("span", { className: `${o0.wg} ${o0.L3}${eU}`, style: ez, "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: o0.VA,
                    ref: e$,
                    children: [
                        (0, i.jsx)(oE.A, {
                            navId: "conjure-composer-attach",
                            disabled: !C,
                            buttonClassName: `${o0.Y0} ${o0.nu}`,
                            iconClassName: o0.Qu,
                            onAddFiles: K,
                            onImport: p,
                            onSendToOtherProjects: null != x ? eD : void 0,
                        }),
                        eJ
                            ? (0, i.jsx)("div", {
                                  ref: eH,
                                  className: o0.ar,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(
                                      o4,
                                      { text: eZ, offering: eY && null == en, typed: null != en },
                                      S ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, i.jsx)(nL.A, { id: eX, children: ej.intl.string(eb.default.ldNl9x) }),
                        (0, i.jsx)(rX.Fu.Provider, {
                            value: t,
                            children: (0, i.jsx)(oc.A, {
                                editor: I,
                                containerClassName: u()(o0.sq, o1.dv),
                                className: o0.jp,
                                readOnly: !C,
                                canFocus: C,
                                onChange: R,
                                onBlur: () => P(null),
                                onKeyDown: eT,
                                onPaste: eL,
                                renderExtraElement: oX,
                                "aria-labelledby": eX,
                                "aria-describedby": eJ ? eV : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": eS,
                                "aria-controls": eS ? eI : void 0,
                                "aria-activedescendant": eS ? ((0, o_.aI)(eC) ?? void 0) : void 0,
                            }),
                        }),
                        eJ ? (0, i.jsx)(nL.A, { id: eV, children: eB }) : null,
                        (0, i.jsx)("div", {
                            className: o0.Sz,
                            onMouseDown: eP ? o6 : void 0,
                            children: eP
                                ? (0, i.jsx)(d.m, {
                                      text: ej.intl.string(eb.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)("button", {
                                          type: "button",
                                          className: `${o0.Y0} ${o0.$E} ${o0.PG}`,
                                          disabled: F || !r,
                                          onClick: eM,
                                          "aria-label": ej.intl.string(eb.default.wiguT0),
                                          children: (0, i.jsx)(r0.StopIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : w?.tierSettings != null && null != A
                                  ? (0, i.jsx)(ob.A, {
                                        settings: w.tierSettings,
                                        tiers: w.tiers,
                                        choices: w.choices,
                                        disabled: !C,
                                        onChange: A,
                                        className: `${o0.Y0} ${o0.$E}`,
                                        icon: (0, i.jsx)(oo.FiltersHorizontalIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                        }),
                        q
                            ? (0, i.jsxs)("div", {
                                  className: o0.fF,
                                  children: [
                                      (0, i.jsx)("div", { className: o0.MT }),
                                      (0, i.jsx)("button", {
                                          type: "submit",
                                          className: o0.rt,
                                          disabled: !et,
                                          "aria-label": ej.intl.string(eb.default.rxW2cl),
                                          children: (0, i.jsx)(ou.SendMessageIcon, {
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
    o7 = 1500,
    o8 = 1e3;
function o6(e) {
    e.preventDefault();
}
function o9(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var ue = n(709753),
    ut = n(540338);
function un(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, nE.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var ul = n(986109);
let ur = a.createContext(null);
function ui(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: c,
        } = e,
        d = a.useContext(ur),
        [f, m] = a.useState(() => af.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
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
        className: u()(ul.xk, { [ul.g5]: f, [ul.Qo]: s, [ul.q3]: o }),
        children: n,
    });
}
let ua = new Map();
function us(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let uo = "live_behind";
var uu = n(165963);
function uc(e, t, n) {
    let l = a.useMemo(() => rI(t), [t]),
        { saved: r, superseded: i } = rF(e, l, n),
        s = (0, c.bG)(
            [rS.A],
            () => {
                let t = rS.A.getSettings(e);
                return null == l || null == n || null == t
                    ? null
                    : rO({ kind: "settings", request: l, askId: n, saved: r, superseded: i }, t).status;
            },
            [l, n, e, r, i],
        );
    return a.useMemo(() => (null == l || null == s ? null : { request: l, open: "open" === s }), [l, s]);
}
function ud(e) {
    return (
        null != e.awaitingUser ||
        null != e.secretRequest ||
        null != e.settingsRequest ||
        (e.intake?.questions.length ?? 0) > 0 ||
        null != e.clarification ||
        null != e.appBuildRequest ||
        null != e.restoreProposal ||
        null != e.serverChange ||
        null != e.publishScheduleProposal
    );
}
let uf = [12e4];
var um = n(292771);
function uh(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([af.Ay], () => af.Ay.useReducedMotion),
        [r, s] = a.useState([{ presentation: t, leaving: !1 }]),
        o = r.find((e) => !e.leaving)?.presentation;
    o !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let d = a.useRef(null),
        f = a.useRef(null),
        m = a.useRef(null),
        h = a.useRef(o);
    a.useLayoutEffect(() => {
        let e,
            t,
            n = d.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            i = r?.querySelector("[data-conjure-tip-icon]"),
            a = f.current,
            s = m.current,
            u = r?.offsetHeight ?? 0,
            c =
                null != i
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = i.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((f.current = c), (m.current = u));
        let g = h.current !== o;
        if (((h.current = o), !g || l || null == s || null == a || null == i || null == c)) return;
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
            n.animate([{ height: `${s}px` }, { height: `${u}px` }], {
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
            className: um.wg,
            children: r.map((e) =>
                (0, i.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: u()(um.qd, e.leaving ? um.dv : um.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function ug(e) {
    return e?.state === "action_needed" && e.permissionsChanged;
}
var up = n(247171);
function ux(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: a } = e;
    return (0, i.jsxs)("div", {
        className: u()(up.row, r),
        children: [
            (0, i.jsx)(x.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: u()(up.gutter, up[n]),
                "aria-hidden": !0,
                children: (0, i.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, i.jsx)("div", { className: up.content, children: a }),
        ],
    });
}
var uv = n(830205);
function ub(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(ux, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: uv.aK,
        children: (0, i.jsxs)("div", {
            className: uv.n8,
            children: [
                (0, i.jsx)(x.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: uv.Qq,
                    children: l,
                }),
                null != n
                    ? (0, i.jsx)("div", {
                          className: uv.X8,
                          children: (0, i.jsx)(d.m, {
                              text: ej.intl.string(ej.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(tZ.K, {
                                  "aria-label": ej.intl.string(ej.t.WAI6xu),
                                  icon: e8.XSmallIcon,
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
function uj(e) {
    let { projectId: t } = e,
        n = a.useContext(tm.bI);
    return (0, i.jsx)(ub, {
        icon: aJ.ShieldIcon,
        children: ej.intl.format(eb.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, tm.vL)(t, n.guildId));
            },
        }),
    });
}
var uy = n(443865),
    uk = n(716502);
function uw(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(ux, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: uk.Nr,
        children: (0, i.jsxs)("section", {
            className: uk.Qs,
            children: [
                l,
                null != n
                    ? (0, i.jsx)("div", {
                          className: uk.X8,
                          children: (0, i.jsx)(d.m, {
                              text: ej.intl.string(ej.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(tZ.K, {
                                  "aria-label": ej.intl.string(ej.t.WAI6xu),
                                  icon: e8.XSmallIcon,
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
function uA(e) {
    let { children: t } = e;
    return (0, i.jsx)(x.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: uk.DD,
        children: t,
    });
}
function uS(e) {
    let { children: t } = e;
    return (0, i.jsx)(x.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: uk.rf,
        children: t,
    });
}
function uC(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: uk.o1, children: t });
}
var uI = n(95635);
function uN(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, tj.A)(t, n);
    return (0, i.jsx)(ub, {
        icon: uI.UploadIcon,
        onDismiss: l,
        children: ej.intl.format(eb.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let uE = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && ug(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, i.jsx)(uj, { projectId: n });
        },
    },
    {
        id: uo,
        priority: 2,
        resolve: function (e) {
            var t;
            let { turn: n, publish: l, draftHasText: r, idleMs: i } = e;
            return null == n ||
                r ||
                l?.state !== "action_needed" ||
                !l.isUpdate ||
                null != l.disabledReason ||
                i < 12e4 ||
                (null != n.publishCta && sb(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(uo)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, i.jsx)(uN, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: i, ideasIntroAnchorId: a } = e;
            return !n || null == a || ug(l) ? null : null != t || r || i ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, i.jsxs)(uw, {
                icon: uy.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, i.jsx)(uA, { children: ej.intl.string(eb.default.OJlbhX) }),
                    (0, i.jsx)(uS, { children: ej.intl.string(eb.default["3vJBni"]) }),
                    (0, i.jsx)(uC, {
                        children: (0, i.jsx)(f.$, {
                            variant: "primary",
                            size: "sm",
                            text: ej.intl.string(eb.default["U/bLzU"]),
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
var u_ = n(817921);
function uM(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let i = (function (e, t, n, l, r) {
                let i,
                    s = (0, tm.Ay)(e),
                    o = (0, c.bG)([y.default], () => y.default.getCurrentUser()?.id),
                    u = t.at(-1),
                    d = null != u ? Math.max(u.created_at, u.finished_at ?? 0, u.settled_at ?? 0) : null,
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
                                if ((0, nE.BL)(n)) return n;
                                if (!(0, nE.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == m || ud(m) ? null : m,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === us(t, g.created_at, o) ? g.id : null,
                    x = u?.projectEvent?.type === "remixed" ? u.projectEvent : null,
                    v = x?.id ?? p,
                    b = uc(e, x, u?.id),
                    j = x?.settings_keys?.length ?? 0,
                    k = (0, c.bG)([rS.A], () => j > 0 && null == rS.A.getSettings(e), [j, e]),
                    w = (0, ue.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (i = (0, nE.Ji)(t)) || !!(0, nE.B0)(t, t.lastIndexOf(i))) &&
                        (null == m || !ud(m)) &&
                        null == un(t) &&
                        b?.open !== !0 &&
                        !k &&
                        0 === w.length,
                    idleMs: null != d ? Math.max(0, f - d) : 0,
                    justRemixed: null != x,
                    noTurnsYet: t.every(
                        (e) =>
                            "publish_notice" === e.kind || "project_event" === e.kind || "context_boundary" === e.kind,
                    ),
                    ideasIntroAnchorId: v,
                    messagesSinceShown: (n) => {
                        let l = ua.get(`${e}:${n}`);
                        return null != l ? us(t, l, o) : null;
                    },
                    isDismissed: (t) => (0, uu.VS)(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, uf);
            (0, uu.$p)();
            let { callout: s, hint: o } = (function (e, t, n) {
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
                u = [s, o].filter((e) => null != e);
            return (
                a.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of u)
                        0 !== i.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                ua.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                u.map((e) => ({
                    ...e,
                    options: {
                        context: i,
                        dismiss: null != e.tip.dismissal ? () => (0, uu.qv)(e.tip, t, i.ideasIntroAnchorId) : void 0,
                    },
                }))
            );
        })(uE, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, i.jsx)(ui, {
              role: "assistant",
              continuation: !0,
              children: (0, i.jsx)("div", {
                  className: u_.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, i.jsx)(uh, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var uP = n(52133),
    uR = n(732159),
    uT = n(888366),
    uL = n(862026),
    u$ = n(291192);
function uD(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = a.useId(),
        r = (0, uL.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, i.jsxs)("div", {
        className: u$.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, i.jsxs)("div", {
                className: u$.Sp,
                children: [
                    (0, i.jsx)("span", { className: u$.q3 }),
                    (0, i.jsxs)("span", {
                        className: u$.g8,
                        children: [
                            (0, i.jsx)(uT.ChatPlusIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, i.jsx)(x.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, i.jsx)("span", { className: u$.q3 }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: u$.nM,
                role: "status",
                children: [
                    (0, i.jsxs)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          " ",
                                          (0, i.jsx)(lj.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, e_.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, i.jsx)(uR.u, {
                                                                    ...t,
                                                                    title: ej.intl.string(eb.default["i+xjZM"]),
                                                                    subtitle: ej.intl.string(eb.default.fMBZmD),
                                                                    confirmText: ej.intl.string(eb.default.i5f3Uo),
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
                        ? (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var uq = n(345942),
    uF = n(727419),
    uO = n(576705);
function uG(e) {
    let { guildId: t, update: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            " ",
            ej.intl.format(n ? eb.default.esEGL5 : eb.default["XrN+Bg"], {
                onOpen: () => uF.A.open(t, ls.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var uz = n(976860);
function uU(e) {
    return (0, c.bG)([ts.Ay, al.A], () => {
        let t = ts.Ay.getProject(e);
        return null == t ? "" : (al.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var uB = n(951465),
    uK = n(369455);
function uW(e) {
    var t, n, l;
    let r,
        a,
        { projectId: s, notice: o } = e,
        u = uU(s),
        d =
            null ==
            (a = (0, c.bG)([ts.Ay, lK.A], () => {
                let e = ts.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (lK.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: a.id, name: a.name },
        f = (0, c.cf)([ts.Ay, tv.A, lK.A, uO.A], () => {
            let e = ts.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(eO.q7.AUTOMOD) === !0 ||
                    tv.A.getPublishStatus(s)?.surface === "automod",
                n = lK.A.getGuild(e.guild_id),
                l = null != n && uO.A.can(ls.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, i.jsxs)(x.E, {
        variant: "body-md/normal",
        color: "text-default",
        children: [
            ej.intl.format(
                ((t = o),
                (n = d?.name ?? null),
                (l = f.automod),
                (r = null != n),
                !0 === t.commands_failed
                    ? r
                        ? eb.default.ESu5eZ
                        : eb.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? r
                          ? eb.default.ZnQW4S
                          : eb.default.ev23Cw
                      : t.update
                        ? r
                            ? eb.default["LuS8a/"]
                            : eb.default.gQzuLC
                        : l
                          ? eb.default.KORRGl
                          : r
                            ? eb.default["/npn7F"]
                            : eb.default.MOrR29),
                {
                    name: u,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, uq.u)(d.guildId);
                    },
                },
            ),
            null != f.guildId
                ? (0, i.jsx)(uG, { guildId: f.guildId, update: o.update })
                : !f.automod && o.update && null != o.published_revision
                  ? (0, i.jsx)(uH, { projectId: s, notice: o })
                  : null,
        ],
    });
}
function uH(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tm.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: i } = (0, c.cf)(
                    [tv.A, ts.Ay],
                    () => {
                        let r = tv.A.getPublishStatus(e),
                            i = ts.Ay.getProject(e);
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
                                (0, ts.jf)(i),
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
                      ? ej.intl.format(eb.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, i.jsx)(
                                    e7.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: uK.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, uz.pX)(ls.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : ej.intl.format(eb.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = ts.Ay.getProject(e),
                                        i = null == r ? null : (0, tm.KL)(r, l);
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
                                null != e && (0, uB.A)(e);
                            },
                        }),
              ],
          });
}
var uV = n(73153),
    uX = n(505527),
    uY = n(367790),
    uZ = n(354777),
    uJ = n(491182),
    uQ = n(74096),
    u0 = n(549587),
    u1 = n(448368),
    u2 = n(21299),
    u3 = n(538355),
    u4 = n(715628),
    u5 = n(752636),
    u7 = n(9842),
    u8 = n(589022),
    u6 = n(967198),
    u9 = n(531685),
    ce = n(503275);
let ct = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function cn(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function cl(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function cr(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = cl(e, t),
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
    if (cn(r) && cn(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && cn(cl(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function ci(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([af.Ay], () => af.Ay.useReducedMotion),
        r = n && !l,
        [i, s] = a.useState(() => ({ target: e, length: e.length })),
        o = i;
    (o.target !== e &&
        (o = {
            target: e,
            length: r
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let r = Math.min(l, t.length),
                          i = 0;
                      for (; i < r && e.charCodeAt(i) === t.charCodeAt(i);) i++;
                      for (; i > 0 && cr(t, i);) i--;
                      return i;
                  })(o.target, e, o.length)
                : e.length,
        }),
        r || o.length === e.length || (o = { target: e, length: e.length }),
        o !== i && s(o));
    let u = r && o.length < e.length,
        d = a.useRef(o);
    a.useLayoutEffect(() => {
        d.current = o;
    });
    let f = a.useRef(0),
        m = a.useRef(0);
    (a.useEffect(() => {
        if (u)
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
                                    for (; l > t + 1 && n - l < 12 && ct.has(e.charAt(l - 1));) l--;
                                    return ct.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + a));
                                let o = s;
                                for (; o < t.length && o - s < 32 && cr(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    f.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(f.current)
            );
    }, [u]),
        a.useEffect(() => {
            if (u)
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
        }, [u]));
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: r && h < e.length };
}
var ca = n(624479),
    cs = n(890377),
    co = n(92446),
    cu = n(957565),
    cc = n(180227);
function cd(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: u()(cc.QE, { [cc.Rn]: t }),
              children: (0, i.jsx)(aF.Ay, {
                  children: n.map((e) =>
                      (0, i.jsx)(
                          aF.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function cf(e) {
    return cu.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: ej.intl.string(ej.t.JrGD7E), icon: ca.CopyIcon, onClick: () => (0, cu.C)(e) }]
        : [];
}
function cm(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: ej.intl.string(eb.default.CXtLD2),
                          tooltip: ej.intl.string(eb.default.DOb1HM),
                          icon: cs.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: ej.intl.string(eb.default.urZwpN),
                          icon: e8.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, i.jsx)(cd, { groupStart: n, actions: [...r, ...cf(t)] });
}
function ch(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        a =
            null == l
                ? []
                : [{ id: "restore-version", label: ej.intl.string(eb.default.H8Jfhu), icon: t0.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: co.BugIcon, onClick: r }];
    return (0, i.jsx)(cd, { groupStart: n, actions: [...a, ...cf(t), ...s] });
}
let cg = (0, aa.createChannelRecord)({ id: "conjure-builder", type: ls.rbe.DM }),
    cp = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function cx(e, t) {
    return null == e ? e : (0, i.jsx)("div", { className: u()(cc.Yq, { [cc.x1]: t }), children: e });
}
function cv(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let cb = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function cj(e, t, n) {
    let { content: l } = (0, u3.A)(e, cb),
        r = a.useMemo(() => ((0, rX.aW)(e.content) ? (0, uZ.z2)(ot.U, e, cb).content : null), [e]) ?? l,
        s = a.useMemo(() => ({ message: e, channel: cg, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, i.jsx)(uQ.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, u4.A)(s, r);
}
function cy(e) {
    let [t, n] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = a.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = a.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, u2.m)(e, cg, t.usernameProfile, l),
        o = (0, u2.Jo)(t.avatarProfile, l),
        u = (0, c.bG)([u6.A], () => u6.A.getGuildId()),
        d = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
        f = a.useCallback(
            (t) => {
                let n = y.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, i.jsx)(u8.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: f,
        guildId: u ?? void 0,
    };
}
let ck = { formatInline: !0, allowGameMentions: !0 };
function cw(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, u3.A)(n, ck),
        o = a.useMemo(() => {
            let e = "" === n.content ? null : (0, rX.aW)(n.content) ? (0, uZ.z2)(ot.U, n, ck).content : s;
            return null == l
                ? e
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("span", {
                              className: cc.GV,
                              children: [
                                  (0, i.jsx)(g.ExperimentalDirectSelectIcon, {
                                      className: cc.Rj,
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
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: d } = (0, c.cf)(
            [lr.A],
            () => ({
                isReplyAuthorBlocked: lr.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: lr.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        f = (0, aD.X4)(n),
        m = (0, aD.X4)(t),
        h = cy(n);
    return (0, i.jsx)(u1.A, {
        repliedAuthor: f,
        baseAuthor: m,
        baseMessage: t,
        channel: cg,
        referencedMessage: { state: u7.a.LOADED, message: n },
        content: o,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: d,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: h.renderPopout,
        showAvatarPopout: h.showAvatarPopout,
        showUsernamePopout: h.showUsernamePopout,
        onClickAvatar: h.onClickAvatar,
        onClickUsername: h.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: h.onPopoutRequestClose,
    });
}
function cA(e) {
    let { message: t, author: n } = e,
        l = cy(t);
    return (0, i.jsx)(u0.Ay, {
        message: t,
        channel: cg,
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
function cS(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, ce.vm)(l),
        c = a.useMemo(() => (0, aD.FT)(u, null), [u]),
        d = a.useMemo(() => M(t), [t]),
        f = d?.body ?? t,
        m = (0, ok.Qu)(f),
        h = a.useMemo(() => {
            if (null == u) return null;
            let e = (0, ai.Ay)({ channelId: cg.id, content: f, author: u });
            return (0, ar.rh)({ ...e, timestamp: cv(n, e.timestamp), state: ls.cmJ.SENT });
        }, [f, u, n]);
    return null == h
        ? null
        : (0, i.jsx)(
              cC,
              {
                  message: h,
                  author: c,
                  content: f,
                  selected: d?.label,
                  accessories: r,
                  groupStart: s,
                  onQueuedAction: o,
              },
              m,
          );
}
function cC(e) {
    let { message: t, author: n, content: l, selected: r, accessories: a, groupStart: s = !0, onQueuedAction: o } = e,
        u = cj(t, l);
    return (0, i.jsx)(uJ.A, {
        className: cc.yE,
        author: n,
        childrenHeader: s ? (0, i.jsx)(cA, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, i.jsxs)("div", {
                      className: cc.zq,
                      children: [
                          (0, i.jsxs)("span", {
                              className: cc.GV,
                              children: [
                                  (0, i.jsx)(g.ExperimentalDirectSelectIcon, {
                                      className: cc.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, i.jsx)("span", { className: cc.WO, children: u }),
                      ],
                  }),
        childrenAccessories: cx(a, "" !== l),
        childrenButtons: (0, i.jsx)(cm, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function cI(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
            buttons: d,
        } = e,
        { text: f, revealing: m } = ci(t, { streaming: (0, c.bG)([u9.A], () => u && u9.A.isFocused(), [u]) }),
        h = a.useMemo(() => (0, aD.FT)(null, null), []),
        g = a.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, ce.vm)(p),
        v = a.useMemo(() => (null == r ? null : M(r.content)), [r]),
        b = a.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, ai.Ay)({ channelId: cg.id, content: v?.body ?? r.content, author: x });
            return (0, ar.rh)({ ...e, id: r.id, timestamp: cv(r.createdAt, e.timestamp), state: ls.cmJ.SENT });
        }, [r, v, x]),
        j = a.useMemo(() => (null == r ? void 0 : { channel_id: cg.id, message_id: r.id }), [r]),
        [y] = a.useState(() => (0, ai.Ay)({ channelId: cg.id, content: "", author: cp })),
        k = a.useMemo(
            () =>
                (0, ar.rh)({
                    ...y,
                    timestamp: cv(n, y.timestamp),
                    state: ls.cmJ.SENT,
                    ...(null != j ? { type: ls.lAJ.REPLY, message_reference: j } : {}),
                }),
            [y, n, j],
        ),
        w = a.useMemo(() => k.set("content", f), [k, f]),
        A = a.useMemo(
            () => (0, u5.A)({ message: k, channel: cg, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        S = cj(w, f, cc.OS);
    return (0, i.jsxs)("div", {
        className: cc.$4,
        "data-replying": null != b ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, i.jsx)(uJ.A, {
                className: cc.yE,
                author: g,
                childrenRepliedMessage:
                    null == b
                        ? null
                        : (0, i.jsx)(cw, { baseMessage: k, referenced: b, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: S,
                childrenAccessories: cx(l, "" !== f),
                disableInteraction: !0,
            }),
            d,
            o ? (0, i.jsx)("img", { className: cc.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var cN = n(981879);
function cE(e) {
    let { messageId: t, reaction: n } = e,
        l = a.useMemo(
            () =>
                (0, ar.rh)(
                    { ...(0, ai.Ay)({ channelId: cg.id, content: "" }), id: `conjure:${t}`, state: ls.cmJ.SENT },
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
                (uV.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: cg.id,
                    messageId: l.id,
                    users: [cp],
                    emoji: e,
                    reactionType: uX.v6.NORMAL,
                }),
                    uV.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: cg.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: uX.v6.NORMAL,
                    }));
            }
            return (
                t(),
                uV.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    uV.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, i.jsx)("div", {
            className: cN.H,
            children: (0, i.jsx)(uY.A, {
                message: l,
                channel: cg,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
n(775443);
var c_ = n(990779),
    cM = n(155899);
function cP(e) {
    let { onSelect: t, onClose: n = tw.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, i.jsx)(ty.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": ej.intl.string(ej.t.ogxXGq),
        onSelect: t,
        children: (0, i.jsxs)(tk.rX, {
            children: [
                null != l
                    ? (0, i.jsx)(tk.Dr, {
                          id: "restore-version",
                          label: ej.intl.string(eb.default.H8Jfhu),
                          icon: t0.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, i.jsx)(tk.Dr, { id: "view-trace", label: "View Trace", icon: co.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function cR(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: r,
            onJumpTo: a,
            planVersion: s,
            pickedIdeaIds: o,
            secretRequestAwaiting: u,
            secretRequestStatus: d,
            isNewest: f = !1,
            onPickIdea: m,
            onApprovePlan: h,
            onRestoreVersion: g,
            onCardReply: p,
        } = e,
        x = n.message,
        v =
            null != g
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
        b = null != v && null != g ? () => cT(v, g) : void 0,
        j =
            ((t =
                (0, eS.BQ)() && "assistant" === x.role && (0, nE.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [c_.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : c_.A.getTimingTraces(l).findLast((e) => {
                                  let { name: n, spans: l } = e;
                                  return "turn" === n && l.find((e) => null == e.parent)?.attrs?.turn_id === t;
                              });
                    return null == e || e.live ? null : e.id;
                },
                [l, t],
            )),
        y =
            null != j
                ? () =>
                      (function (e, t) {
                          for (let n of ((ew = { projectId: e, traceId: t }), [...ek])) n(e);
                      })(l, j)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, i.jsx)(ui, {
        rowKey: n.key,
        role: "assistant",
        continuation: !n.groupStart,
        onContextMenu:
            null != b || null != y
                ? (e) => {
                      var t, n, l;
                      return (
                          (t = e),
                          (n = b),
                          (l = y),
                          void (0, tw.jA)(t, (e) => (0, i.jsx)(cP, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, i.jsx)(cI, {
            groupStart: n.groupStart,
            buttons: (0, i.jsx)(ch, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: b,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != a ? () => a(k) : void 0,
            accessories: (0, i.jsx)(or, {
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
                pickedIdeaIds: null == x.ideas ? void 0 : o,
                attachments: x.attachments,
                secretRequest: n.active ? void 0 : x.secretRequest,
                secretRequestId: x.render_id,
                secretRequestAwaiting: u,
                secretRequestStatus: d,
                settingsRequest: n.active ? void 0 : x.settingsRequest,
                settingsAskId: x.id,
                publishCta: n.active ? null : x.publishCta,
                onPickIdea: m,
                onApprovePlan: h,
                restoreProposal: w,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: f,
                serverChange: n.active ? void 0 : x.serverChange,
                serverChangeCurrent: f,
                onCardReply: p,
                onRestoreProposal:
                    null != w && null != g && f
                        ? () =>
                              cT(
                                  {
                                      sha: w.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: w.authored_at,
                                      subject: w.subject,
                                  },
                                  g,
                              )
                        : void 0,
            }),
        }),
    });
}
function cT(e, t) {
    (0, cM.F)({ onConfirm: () => t(e) });
}
var cL = n(288539),
    c$ = n(677683),
    cD = n(677690),
    cq = n(159711);
function cF(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: a } =
            ((t = (0, c.bG)([c$.A], () => c$.A.getOutcome(l))),
            (n = (0, c.bG)(
                [ll.A, y.default, lr.A],
                () => {
                    let e = t?.status === "pinned" ? ll.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, ln.m1)(e, y.default, lr.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = ej.intl.string(eb.default.UGAfl9);
    return null != r
        ? (0, i.jsx)(nF, {
              title: s,
              children: (0, i.jsx)(x.E, {
                  className: cq.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? ej.intl.formatToPlainString(eb.default.gKe6Lw, { channelName: a ?? "" })
                          : ej.intl.string(eb.default["+kpQ3v"]),
              }),
          })
        : (0, i.jsx)(nF, { title: s, children: (0, i.jsx)(cO, { projectId: l }) });
}
function cO(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: o,
            failed: u,
            pin: d,
            skip: m,
        } = (function (e) {
            var t;
            let n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [lU.A, uO.A],
                        () =>
                            null == t
                                ? []
                                : lU.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === ls.rbe.GUILD_VOICE && uO.A.can(ls.xBc.MANAGE_CHANNELS, e),
                                      ),
                        [t],
                    )),
                [r, i] = a.useState(null),
                [s, o] = a.useState(!1),
                [u, d] = a.useState(!1),
                f = l.find((e) => e.id === r) ?? null,
                m = n?.application_id,
                h = a.useCallback(async () => {
                    if (null == f || null == m) return;
                    (o(!0), d(!1));
                    let t = await (0, cD.pk)(f.id, m);
                    (o(!1), t ? (0, cD.tg)(e, { status: "pinned", channelId: f.id }) : d(!0));
                }, [m, e, f]),
                g = a.useCallback(() => (0, cD.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: f,
                setPicked: i,
                pinning: s,
                failed: u,
                pin: h,
                skip: g,
            };
        })(t),
        h = (0, lD.A)(n, "voice"),
        g = a.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, i.jsx)("div", {
        className: cq.r,
        children: (0, i.jsxs)(lk.B, {
            gap: 12,
            children: [
                (0, i.jsx)(x.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: ej.intl.string(eb.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, i.jsx)(n8.Z, {
                          selectionMode: "single",
                          label: ej.intl.string(eb.default.peOi1H),
                          placeholder: ej.intl.string(eb.default["9+dfPT"]),
                          options: g,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: u ? ej.intl.string(eb.default.d7EeAm) : void 0,
                          disabled: o,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, i.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: ej.intl.string(eb.default.JVUsIY),
                      }),
                (0, i.jsxs)("div", {
                    className: cq.o,
                    children: [
                        (0, i.jsx)(f.$, {
                            variant: "secondary",
                            size: "sm",
                            text: ej.intl.string(eb.default.Iw0l8o),
                            disabled: o,
                            onClick: m,
                        }),
                        g.length > 0
                            ? (0, i.jsx)(f.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: ej.intl.string(eb.default.FYI3qr),
                                  disabled: null == r,
                                  loading: o,
                                  onClick: d,
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function cG(e, t, n) {
    return (0, i.jsx)(cL.A, { userId: e, content: `@${t}` }, n);
}
function cz(e) {
    let { projectId: t, askId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            a.useEffect(() => {
                (0, ce.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([y.default], () => (null == l ? null : y.default.getUser(l)), [l]),
                i = (0, ao.tx)(r),
                s = uU(e),
                o =
                    (0, c.bG)([lK.A], () => (null == t.guild_id ? null : lK.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ??
                    ("app_removed" === t.type ? t.guild_name : null) ??
                    ej.intl.string(eb.default.R1tPlP),
                u = "app_removed" === t.type ? t.moved_to_guild_id : void 0,
                d = (0, c.bG)([lK.A], () => (null == u ? null : lK.A.getGuild(u)?.name), [u]),
                f = null == r || null == i ? null : { user: i, userHook: (e, t) => n(r.id, i, t) };
            switch (t.type) {
                case "app_removed":
                    if (null != u) {
                        let e = d ?? t.moved_to_guild_name ?? ej.intl.string(eb.default.R1tPlP);
                        return null == f
                            ? ej.intl.format(eb.default.NVM0sD, { app: s, server: o, newServer: e })
                            : ej.intl.format(eb.default["/hlliy"], { app: s, server: o, newServer: e, ...f });
                    }
                    return null == f
                        ? ej.intl.format(eb.default.Lwsrhg, { app: s, server: o })
                        : ej.intl.format(eb.default.qqePfT, { app: s, server: o, ...f });
                case "bot_removed":
                    return null == f
                        ? ej.intl.format(eb.default.mT7EQG, { app: s, server: o })
                        : ej.intl.format(eb.default["lA/crI"], { app: s, server: o, ...f });
                case "preview_bot_removed":
                    return null == f
                        ? ej.intl.format(eb.default["4LVIeo"], { app: s, server: o })
                        : ej.intl.format(eb.default.YJOV6D, { app: s, server: o, ...f });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == f
                        ? ej.intl.format(eb.default["4VQfid"], { channel: e, server: o })
                        : ej.intl.format(eb.default.RlMIJN, { channel: e, server: o, ...f });
                }
                case "remixed":
                    return ej.intl.format(eb.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return ej.intl.string(eb.default.UGAfl9);
                case "staff_notice":
                    return t.message;
            }
        })(t, l, cG),
        s = uc(t, l, n);
    if ("voice_channel_pin" === l.type) return (0, i.jsx)(cF, { projectId: t });
    let o = (0, i.jsx)(x.E, { variant: "body-md/normal", color: "text-default", children: r });
    return null == s
        ? o
        : (0, i.jsxs)(lk.B, {
              gap: 8,
              children: [o, (0, i.jsx)(s9, { projectId: t, kind: "settings", request: s.request, askId: n })],
          });
}
let cU = a.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: a, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    n0.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rX.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, i.jsx)(ui, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(cS, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              null != t ? (0, i.jsx)(oe.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, i.jsx)(ov, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, i.jsx)(cE, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, rY.tp)(e, t.id, n);
                            })(l, o, a),
                        }),
                    });
                }
                case "prose":
                    return (0, i.jsx)(ui, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(cI, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, i.jsx)(oe.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, i.jsx)(ui, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(ol, {
                            projectId: l,
                            steps: o.steps,
                            segment: n.segment,
                            active: n.active,
                            closed: n.closed,
                            segmentDurationMs: n.segmentDurationMs,
                            reportsDuration: n.reportsDuration,
                            hostsChecklist: n.hostsChecklist,
                            turnActive: n.turnActive,
                            checklistSuperseded: n.checklistSuperseded,
                            durationMs: null != o.finished_at ? o.finished_at - o.created_at : void 0,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "publishNotice":
                    return (0, i.jsx)(ui, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(cI, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, i.jsx)(uW, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, i.jsx)(ui, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(cI, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, i.jsx)(cz, { projectId: l, askId: o.id, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, i.jsx)(ui, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, i.jsx)(uD, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, i.jsx)(ui, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(ol, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, i.jsx)(ui, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(ol, {
                            projectId: l,
                            steps: cB,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, i.jsx)(cR, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, uP.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, uP.A)(e.row, t.row, ["message"]) &&
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
                (0, uP.A)(e.replyTo, t.replyTo) &&
                (0, uP.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    cB = [],
    cK = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cW = new WeakMap();
function cH(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function cV(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cX = ["wheel", "touchstart", "pointerdown", "keydown"];
function cY(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let cZ = a.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: o,
            onApprovePlan: d,
            liveClarificationId: f,
            onRestoreVersion: m,
            onCardReply: h,
            scrollerRef: g,
            stickToBottomRef: p,
            pinned: b,
            onUnpin: j,
            handleRef: k,
            onShowsLatestChange: w,
        } = e,
        A = a.useRef(null),
        [S, C] = a.useState(null),
        I = a.useCallback((e) => {
            ((A.current = e), C(e));
        }, []),
        [N, E] = a.useState(null),
        _ = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(_.current), []);
    let M = a.useCallback((e) => {
            (E(e), window.clearTimeout(_.current), (_.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        P = (0, c.bG)([tv.A], () => tv.A.getPublishStatus(t)),
        R = (0, c.bG)([y.default], () => y.default.getCurrentUser()?.id),
        T = a.useMemo(() => {
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
                                        let t = (0, nN.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        i = null != r.clarification && r.clarification.id === t,
                        a = cW.get(r);
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
                                (0, nE.ST)(e) ||
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
                        let i = !(0, nE.BL)(e),
                            a = r1({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = a.lastStreamedMessage?.key,
                            o = (0, nN.C6)(e.steps, { turnActive: i }),
                            { lastWork: u, open: c } = (0, nN.CT)(o, { turnActive: i }),
                            d = o.at(-1)?.index,
                            f = !1;
                        for (let n of o) {
                            if (null != n.prose && cK.test(n.prose.content)) f = !0;
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
                                        reportsDuration: n.index === u,
                                        hostsChecklist: n.hasTodos,
                                        turnActive: n_(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let m = cK.test(e.content ?? "");
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
                                : o.every((e) => !e.hasTodos) &&
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
                                        null != e.settingsRequest ||
                                        null != e.serverChange)) ||
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
                    (cW.set(r, { superseded: e, liveCard: i, planned: s }), n.push(...s));
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
                        if (null != l) return sv(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, P)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = sj.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), sj.set(t, n)), n);
                      })),
                f,
            );
        }, [n, P, f]),
        L = a.useMemo(() => T.map((e) => e.key), [T]),
        [$, D] = a.useState(null),
        q = (function (e, t, n) {
            if (null == t) return cH(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cV(e, t.endKey, t.end - 1) + 1,
                i = cV(e, t.startKey, t.start);
            return (l && n && r - i > 120 && (i = r - 60), cH(e, i, r));
        })(L, $, b),
        F = a.useRef(q),
        O = a.useRef(L),
        G = a.useRef(T),
        z = a.useRef(null),
        U = a.useRef(null),
        B = a.useRef(new Set()),
        K = a.useRef(null),
        W = a.useRef(!1),
        H = a.useCallback(() => {
            let e = g.current?.getScrollerNode(),
                t = W.current ? cY(A.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [g]);
    a.useLayoutEffect(() => {
        let e = g.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            W.current = !1;
        };
        for (let n of cX) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of cX) e.removeEventListener(n, t);
        };
    }, [g]);
    let V = a.useCallback(() => {
            let e = g.current?.getScrollerNode(),
                t = A.current;
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
            z.current = null != a && null != s ? { key: s, offset: a.getBoundingClientRect().top - n } : null;
        }, [g]),
        X = a.useCallback(() => {
            let e = g.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: i } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), cH(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!i && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cH(e, n, l));
                }
                let a = Math.max(t.start - 30, t.end - 120);
                return a < t.start ? cH(e, a, t.end) : null;
            })(O.current, F.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: p.current,
            });
            "older" === n ? (0, ey.P6)(t) : null != n && D(n);
        }, [g, p, t]);
    a.useImperativeHandle(
        k,
        () => ({
            handleScroll() {
                (V(),
                    D((e) => {
                        let t = F.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    X());
            },
            recordAnchor: V,
            showLatest(e) {
                ((W.current = !1), (U.current = e ?? null), D(null));
            },
            snapshot() {
                let e = z.current;
                return null == e ? null : { window: F.current, anchor: e };
            },
            restore(e) {
                let { window: t, anchor: n } = e;
                if (!O.current.includes(n.key)) return !1;
                (j(), (z.current = n));
                let l = F.current;
                if (l.startKey === t.startKey && l.endKey === t.endKey) {
                    let e = g.current?.getScrollerNode(),
                        t = A.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else D(t);
                return !0;
            },
        }),
        [V, X, j, g],
    );
    let Y = a.useRef(null),
        Z = a.useCallback(
            (e) => {
                var n;
                let l;
                ((Y.current = null), (W.current = !1));
                let r = A.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (j(), D(F.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let i = G.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === i) {
                    (0, ey.P6)(t) && (Y.current = e);
                    return;
                }
                (j(),
                    (U.current = () => {
                        (A.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    D(((n = O.current), cH(n, (l = Math.max(0, i - 30)), l + 60))));
            },
            [M, j, t],
        );
    (a.useEffect(() => {
        let e = Y.current;
        null != e && Z(e);
    }, [T, Z]),
        a.useLayoutEffect(() => {
            if (null == S) return;
            let e = S.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), p.current)) return void g.current?.scrollToBottom();
                        (H(), V());
                    }
                });
            return (t.observe(S), () => t.disconnect());
        }, [S, H, V, g, p]));
    let J = null == q.endKey;
    (a.useEffect(() => w?.(J), [J, w]),
        a.useLayoutEffect(() => {
            ((F.current = q), (O.current = L), (G.current = T));
        }),
        a.useLayoutEffect(() => {
            let e = g.current?.getScrollerNode(),
                l = A.current,
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
                    })(K, t, n);
            if (null != e && null != l) {
                let t = z.current;
                if (r && p.current && null != cY(l)) (j(), D(F.current), (W.current = !0), H());
                else if (p.current) g.current?.scrollToBottom();
                else if (W.current) H();
                else if (null != t) {
                    let n = Array.from(l.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === t.key,
                        ),
                        r = null == n ? 0 : n.getBoundingClientRect().top - e.getBoundingClientRect().top - t.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let n = U.current;
                ((U.current = null), n?.(), V(), X());
            }
            B.current = new Set(L);
        }, [t, n, T, L, q.start, q.end, g, p, j, H, V, X]));
    let Q = a.useMemo(() => un(n), [n]),
        ee = a.useMemo(
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
        et = a.useMemo(
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
        en = a.useMemo(
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
        el = n.at(-1),
        er =
            (el?.role !== "assistant" || null == el.awaitingUser || null == el.secretRequest
                ? null
                : (0, nE.BL)(el)
                  ? el.awaitingUser
                  : null) ?? void 0,
        ei = (0, c.bG)([rS.A], () => rS.A.getSettings(t)?.secrets, [t]),
        ea = (0, ue.WT)(t),
        es = a.useMemo(() => (0, rA.Mv)(n, ei), [n, ei]);
    if (!(0, nE.i_)(n)) {
        if ("loading" === l)
            return (0, i.jsx)("ol", {
                className: u()(ul.x7, ul.jH),
                "aria-busy": !0,
                children: (0, i.jsx)("li", { className: ul.Ub, children: (0, i.jsx)(v.y, {}) }),
            });
        let e = "unavailable" === l ? eb.default.Td4Sf4 : eb.default.V1QiNz;
        return (0, i.jsx)("ol", {
            className: ul.x7,
            children: (0, i.jsx)(ui, { role: "assistant", children: (0, i.jsx)(cI, { content: ej.intl.string(e) }) }),
        });
    }
    return (0, i.jsx)(ur.Provider, {
        value: B,
        children: (0, i.jsxs)("ol", {
            ref: I,
            className: ul.x7,
            children: [
                T.slice(q.start, q.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, i.jsx)(
                            cU,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && N === n.id,
                                currentUserId: "user" === e.kind ? R : void 0,
                            },
                            e.key,
                        );
                    let l = n === el;
                    return (0, i.jsx)(
                        cU,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? en.get(n.in_reply_to) : void 0,
                            onJumpTo: Z,
                            planVersion: ee.get(n.render_id),
                            pickedIdeaIds: et.get(n.render_id),
                            secretRequestAwaiting: l ? er : void 0,
                            secretRequestStatus: es.get(n.render_id),
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === Q ? d : void 0,
                            onRestoreVersion: m,
                            onCardReply: h,
                        },
                        e.key,
                    );
                }),
                J
                    ? ea.map((e) =>
                          (0, i.jsx)(
                              ui,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, i.jsx)(cI, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, i.jsx)(ut.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != er && J
                    ? (0, i.jsx)(ui, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, i.jsx)(cI, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, i.jsx)(x.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: ej.intl.string(eb.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                J ? (0, i.jsx)(uM, { projectId: t, messages: n, draftHasText: !0 === o, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var cJ = n(731084),
    cQ = n(336288),
    c0 = n(187447);
function c1(e) {
    let { activity: t, id: n } = e,
        l = (0, nI.j)(),
        { text: r, revealing: s } = ci(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = a.useRef(null),
        c = a.useRef(!0),
        d = a.useRef(0),
        f = a.useCallback(() => {
            let e = o.current,
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
            let e = o.current;
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
            className: c0.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, i.jsx)(nA.Ch, {
                ref: o,
                onScroll: f,
                className: c0.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, i.jsx)("div", {
                    className: u()(on.PT, c0.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: ax.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var c2 = n(53659);
function c3(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: s = !1,
            recalling: o = !1,
            controlling: c = !1,
            publishPending: d = !1,
            publishing: f = !1,
            spoken: m,
            onSpokenChange: h,
        } = e,
        g = a.useRef(null),
        p = a.useId(),
        [v, b] = a.useState(null),
        j = (0, cJ.xu)({
            activity: t,
            compacting: n,
            saving: l,
            restoring: r,
            remixing: s,
            recalling: o,
            controlling: c,
            publishPending: d,
            publishing: f,
        }),
        y = ej.intl.string(j),
        k = j === cJ.kx["0"],
        [w, A] = a.useState(m ?? y),
        S = (0, nI.j)();
    (l || (0, cJ.E4)(y, w) || (!S && !k)) && w !== y && A(y);
    let C = a.useRef(y);
    (a.useEffect(() => {
        C.current = y;
    }, [y]),
        a.useEffect(() => {
            h?.(w);
        }, [w, h]));
    let I = a.useRef(null),
        N = a.useRef(w);
    a.useEffect(() => {
        N.current = w;
    }, [w]);
    let E = a.useRef(k),
        _ = a.useRef(0);
    (a.useEffect(() => {
        ((E.current = k), !k && (0, cJ.E8)(N.current) && A(C.current));
    }, [k]),
        a.useEffect(() => {
            if (!S) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, cJ.E8)(N.current) ? _.current + 1 : 0), A((0, cJ.Ov)(_.current)))
                    : C.current !== N.current
                      ? A(C.current)
                      : I.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, 1800)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [S]));
    let M = null != t && "" !== t.text,
        P = t?.session ?? null,
        R = M && null != P && v === P,
        T = a.useCallback(() => {
            M && null != P && b((e) => (e === P ? null : P));
        }, [M, P]),
        L = a.useCallback(() => b(null), []);
    return (0, i.jsx)(tC.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: R,
        onRequestClose: L,
        renderPopout: () => (0, i.jsx)(c1, { id: p, activity: t }),
        children: () =>
            (0, i.jsxs)(e7.D, {
                innerRef: g,
                className: u()(c2.hF, M && c2.Xd),
                "aria-label": ej.intl.string(
                    r
                        ? eb.default.qqlUiW
                        : j === eb.default.j8tmjK
                          ? eb.default.j8tmjK
                          : k
                            ? cJ.kx["0"]
                            : eb.default["Uuj/gh"],
                ),
                "aria-expanded": R,
                "aria-describedby": R ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ej.intl.string(j),
                onClick: T,
                children: [
                    (0, i.jsx)("span", {
                        className: c2.bl,
                        children: (0, i.jsx)(cQ.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, i.jsx)("span", {
                        className: c2.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: S
                            ? (0, i.jsx)(oi.o, {
                                  ref: I,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: c2.yE,
                              })
                            : (0, i.jsx)(x.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: c2.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let c4 = { second: 1e3, minute: 6e4 };
function c5(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let n;
            if (null == e) return;
            let r = c4[t];
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
var c7 = n(719374);
function c8(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = c5(t);
    return (0, i.jsx)(x.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: c7.$,
        "data-conjure-turn-timer": !0,
        children: (0, ie.C7)(l),
    });
}
function c6(e) {
    let { startedAt: t } = e,
        n = c5(t, "minute");
    return (0, i.jsx)(nL.A, { role: "timer", children: (0, ie.Us)(n) });
}
var c9 = n(885574),
    de = n(242779),
    dt = n(436804);
function dn(e) {
    return e.toLocaleString();
}
function dl(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, i.jsxs)("div", {
        className: dt.Q$,
        children: [
            (0, i.jsxs)("div", {
                className: dt.mf,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, i.jsxs)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [dn((0, de.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, i.jsxs)(x.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    dn(n.input_tokens),
                    " in \xb7 ",
                    dn(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${dn(n.cache_creation_input_tokens)} cache write \xb7 ${dn(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function dr(e) {
    let { project: t } = e,
        n = (0, de.wU)(t.compaction),
        l = (0, de.wU)(t.classifier),
        r = (0, de.wU)(t.image),
        a = (0, de.wV)(t.orchestrator, t.codegen),
        s = (0, de.wV)(a, n);
    return (0, i.jsxs)("div", {
        className: dt.si,
        role: "dialog",
        "aria-label": ej.intl.string(eb.default.p5EGzq),
        children: [
            (0, i.jsx)("div", {
                className: dt.Q$,
                children: (0, i.jsxs)("div", {
                    className: dt.mf,
                    children: [
                        (0, i.jsxs)(x.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [dn((0, de.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, i.jsxs)(x.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(dl, { label: ej.intl.string(eb.default["9Sj3SX"]), usage: a }),
            (0, i.jsx)(dl, { label: ej.intl.string(eb.default.ANCEo3), usage: n }),
            (0, i.jsx)(dl, { label: ej.intl.string(eb.default.ugL6D4), usage: l, cached: !1 }),
            (0, i.jsx)(dl, { label: ej.intl.string(eb.default.DHr5On), usage: r, cached: !1 }),
            (0, i.jsxs)("div", {
                className: dt.mf,
                children: [
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: ej.intl.string(eb.default["8OUg09"]),
                    }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, de.sj)(s) ? "\u2014" : `${Math.round(100 * (0, de.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function di(e) {
    let { project: t } = e,
        n = a.useRef(null);
    return (0, i.jsx)(tC.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(dr, { project: t }),
        children: (e) =>
            (0, i.jsx)(e7.D, {
                innerRef: n,
                className: dt.Y$,
                "aria-label": ej.intl.string(eb.default.Z96gxQ),
                ...e,
                children: (0, i.jsx)(c9.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var da = n(990250);
function ds(e) {
    let { queued: t } = e,
        n = ej.intl.string(eb.default.hzgPbZ);
    return (0, i.jsxs)("div", {
        className: da.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, i.jsxs)("div", {
                className: da.wx,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, i.jsx)(nA.Ch, {
                className: da.XG,
                children: (0, i.jsx)("ul", {
                    className: da.p_,
                    children: t.map((e) => (0, i.jsx)(du, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function du(e) {
    let { content: t } = e,
        n = a.useRef(null),
        [l, r] = a.useState(!1),
        [s, o] = a.useState(!1);
    return (a.useLayoutEffect(() => {
        let e = n.current;
        null == e || l || o(e.scrollHeight > e.clientHeight);
    }, [t, l]),
    "" === t)
        ? (0, i.jsx)("li", {
              className: da.AS,
              children: (0, i.jsx)(x.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: ej.intl.string(eb.default["07XimM"]),
              }),
          })
        : (0, i.jsxs)("li", {
              className: da.AS,
              children: [
                  (0, i.jsx)(x.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: da.Qs,
                      children: t,
                  }),
                  s
                      ? (0, i.jsx)(lj.Q, {
                            variant: "secondary",
                            textVariant: "body-xs/medium",
                            text: ej.intl.string(l ? eb.default.nEMoeN : eb.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function dc(e) {
    let { queued: t, className: n } = e,
        l = a.useRef(null);
    return (0, i.jsx)(tC.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(ds, { queued: t }),
        children: (e) =>
            (0, i.jsx)(e7.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, i.jsx)(x.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-muted",
                    children: ej.intl.formatToPlainString(eb.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var dd = n(997421);
function df(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: s,
            recalling: o = !1,
            thinkingActivity: d,
            compacting: f,
            saving: m,
            projectUsage: h,
            connState: g,
            queued: p,
        } = e,
        v = (0, eC.Zv)(t),
        b = (0, c.bG)([tv.A], () => tv.A.getPublishStatus(t)?.publishing === !0, [t]),
        [j, y] = a.useState(null),
        k = a.useCallback(
            (e) =>
                y(
                    (0, cJ.E8)(e) || e === ej.intl.string(eb.default.mKK6wB) || e === ej.intl.string(eb.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, cJ.uc)(h),
        A = null != s,
        S = s ?? (n ? l : void 0),
        C = n || r || A || !0 === m;
    return (0, i.jsxs)("div", {
        className: dd.jf,
        children: [
            (0, i.jsxs)("div", {
                className: dd.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    C || o || v || b
                        ? (0, i.jsx)(c3, {
                              activity: d,
                              compacting: f,
                              saving: m,
                              restoring: r,
                              remixing: A,
                              recalling: o,
                              controlling: v,
                              publishPending: b && C,
                              publishing: b,
                              spoken: j,
                              onSpokenChange: k,
                          })
                        : null,
                    null != S ? (0, i.jsx)(c8, { startedAt: S }) : null,
                ],
            }),
            null != S ? (0, i.jsx)(c6, { startedAt: S }) : null,
            0 === p.length ? null : (0, i.jsx)(dc, { queued: p, className: u()(dd.BP, dd.A1) }),
            null == h || null == w
                ? null
                : (0, i.jsxs)("span", {
                      className: dd.BP,
                      children: [
                          (0, i.jsx)(x.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, i.jsx)(di, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, i.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ej.intl.formatToPlainString(eb.default["tCo+ZM"], { status: (0, cJ.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: dd.XF,
                      children: (0, cJ.Db)(g),
                  }),
        ],
    });
}
var dm = n(698638),
    dh = n(608711);
let dg = [ej.intl.string(eb.default["9w+Chc"]), ej.intl.string(eb.default.WAvmdq), ej.intl.string(eb.default.SKsrzl)];
function dp(e) {
    let t,
        n,
        {
            projectId: l,
            restoreState: r,
            onRestoreVersion: s,
            onImportProject: o,
            escapeScopeRef: u,
            visible: m = !0,
        } = e,
        h = (0, c.bG)([rC.A], () => rC.A.getMessages(l), [l]),
        g = (0, c.bG)([ey.Ay], () => ey.Ay.getConnState(l), [l]),
        p = (0, c.bG)([rC.A], () => rC.A.getProjectUsage(l), [l]),
        v = (0, c.bG)([rC.A], () => rC.A.getThinkingActivity(l), [l]),
        b = (0, c.bG)([rC.A], () => rC.A.isCompacting(l), [l]),
        j = (0, c.bG)([rC.A], () => rC.A.isSaving(l), [l]),
        y = (0, c.bG)([rm.A], () => rm.A.getModelSettings(l), [l]),
        k = a.useRef(null),
        w = a.useRef(null),
        A = a.useRef(null),
        C = a.useRef(null),
        {
            stickToBottomRef: I,
            pinned: E,
            atBottom: _,
            unpin: M,
            releasePinHold: P,
            showsLatest: R,
            showsLatestRef: T,
            handleShowsLatestChange: L,
            updatePin: $,
        } = (function (e) {
            let t = a.useRef(!0),
                [n, l] = a.useState(!0),
                [r, i] = a.useState(!0),
                s = a.useRef(!1),
                o = a.useCallback(() => {
                    ((s.current = !0), (t.current = !1), l(!1));
                }, []),
                u = a.useCallback(() => {
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
                    for (let e of cX) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of cX) t.removeEventListener(e, u);
                    };
                }
            }, [e, u]);
            let h = a.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    a = !s.current && r < 32 && f.current;
                t.current = a;
                let o = r > 1 || !f.current;
                (i((e) => (!o === e ? e : !o)), l((e) => (e === a ? e : a)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: n,
                atBottom: r,
                unpin: o,
                releasePinHold: u,
                showsLatest: c,
                showsLatestRef: f,
                handleShowsLatestChange: m,
                updatePin: h,
            };
        })(w),
        D = a.useCallback(() => {
            function e() {
                let e = k.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (P(), T.current ? e() : A.current?.showLatest(e));
        }, [P, T]),
        q = a.useCallback(() => {
            ($(), A.current?.handleScroll());
            let e = C.current;
            null != e && (e.position = I.current ? null : (A.current?.snapshot() ?? null));
        }, [$, I]),
        O = a.useContext(eL.A) === l;
    a.useLayoutEffect(() => {
        if (!O) return;
        let e = { position: eD.A.getProjectView(l).chatScroll };
        return ((C.current = e), () => (0, e$.g7)(l, { chatScroll: e.position }));
    }, [O, l]);
    let G = a.useRef(!O);
    (a.useLayoutEffect(() => {
        if (G.current || !(0, nE.i_)(h)) return;
        G.current = !0;
        let e = eD.A.getProjectView(l).chatScroll;
        null != e && A.current?.restore(e) !== !0 && null != C.current && (C.current.position = null);
    }, [h, l]),
        a.useLayoutEffect(() => {
            let e = k.current;
            if (null == e) return;
            let t = w.current?.getScrollerNode(),
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
                    r && (I.current ? w.current?.scrollToBottom() : A.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [I]),
        a.useEffect(() => {
            (0, ey.ensureConnection)(l);
        }, [l]),
        (0, rZ.E1)(l, (0, nI.j)()));
    let z = U(l),
        B = (function (e) {
            let t = (0, tm.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([lK.A], () => (null == n ? null : (lK.A.getGuild(n)?.name ?? null))),
                [r, i] = a.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: ej.intl.format("channel" === s ? eb.default["1cm4fj"] : eb.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => i(e),
                  };
        })(l),
        K = (function (e) {
            let t = (0, c.bG)([rW.A], () => rW.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rH.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rK.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? ej.intl.format(eb.default["bw/n4C"], { helpdeskURL: e })
                            : ej.intl.format(eb.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: ej.intl.formatToPlainString(eb.default.GHgG2B, { percent: l, limit: n }) };
        })(l),
        W =
            ((t = (0, c.bG)([rk.A], () => rk.A.getFailure(l))),
            (n = a.useCallback(() => (0, rw.CM)(l), [l])),
            null == t
                ? null
                : {
                      message: ej.intl.format(eb.default.Up6Ssw, { reason: t }),
                      retry: { text: ej.intl.string(eb.default["ywA+ET"]), onClick: n },
                  }),
        H = (0, rg.E8)(l),
        V = (0, c.bG)([rk.A], () => rk.A.getSetupStartedAt(l), [l]),
        X = a.useCallback(
            (e, t) => {
                (0, ey.dv)(l, e, t);
            },
            [l],
        ),
        Y = a.useCallback(
            (e, t, n) => {
                let r = n ?? X;
                0 === z.annotations.length
                    ? r(e, t)
                    : (r(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => S(e.comment)),
                                  i = [];
                              if (
                                  (i.push(
                                      `My design feedback: ${1 === r.length ? "1 comment" : `${r.length} comments`} on the app.`,
                                  ),
                                  null != l)
                              ) {
                                  let e = l.title.trim(),
                                      t = "" !== e ? `${e} (${l.url})` : l.url;
                                  (i.push(`Page: ${t}, viewport ${l.viewport.width}x${l.viewport.height}.`),
                                      i.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              r.forEach((e, t) => {
                                  let n;
                                  (i.push(""),
                                      i.push(`${t + 1}. ${N(e.target)}`),
                                      i.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let a = n.trim();
                              return ("" !== a && (i.push(""), i.push(`Note for the whole batch: ${a}`)), i.join("\n"));
                          })({ annotations: z.annotations, metaComment: e, context: z.context }),
                          t,
                      ),
                      F(l));
            },
            [z, X, l],
        ),
        Z = a.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of nQ)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, ey.re)(e, l.nonce),
                        (function (e) {
                            let t = nQ.get(e);
                            (nQ.delete(e), n1(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(l) ||
                rC.A.isThinking(l)) &&
                (0, ey.fu)(l);
        }, [l]),
        J = a.useCallback((e) => (0, n3.RQ)(l, e.implementation_prompt), [l]),
        Q = a.useCallback((e) => (0, n3.RQ)(l, e), [l]),
        [ee, et] = (function (e) {
            let [t, n] = a.useState(() => rQ(e)),
                [l, r] = a.useState(e),
                i = l !== e,
                s = i ? rQ(e) : t;
            return (i && (r(e), n(s)), [s, n]);
        })(l),
        en = a.useCallback(() => X(ej.intl.string(eb.default["t5CN3+"])), [X]),
        el = a.useCallback((e, t, n) => (0, n3.RQ)(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        er = a.useCallback((e) => (0, rh.X)(l, e), [l]),
        ei = a.useCallback((e) => (0, tG.vX)(l, e), [l]),
        ea = a.useCallback((e) => (0, tB.gn)(l, "chat", Array.from(e), ei), [l, ei]),
        es = a.useCallback(() => (0, n3.RQ)(l, ej.intl.string(eb.default.Zc7gML)), [l]),
        eo = r?.status === "restoring",
        eu = "open" === g && !eo,
        ec = h[h.length - 1],
        ed = null != ec && "assistant" === ec.role && null != ec.proposal,
        [ef, em] = a.useState(null),
        eh = a.useMemo(
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
                })(h),
            [h],
        ),
        eg = null != eh && eh.id !== ef ? eh : null,
        ex = a.useCallback(() => {
            null != eg && em(eg.id);
        }, [eg]),
        [ev, ek] = a.useState(null),
        ew = (function (e) {
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
                                summary: ej.intl.string(eb.default["o2++BO"]),
                                prompt: t.trim().slice(0, 4e3),
                            },
                            clearComposer: n,
                        }),
                    [e, r],
                ),
                o = a.useCallback(() => r(null), [r]),
                u = a.useCallback(
                    (e) => {
                        let t = l.current;
                        t?.request.id === e && (t.clearComposer(), r(null));
                    },
                    [r],
                );
            return { request: i?.request ?? null, open: s, close: o, sent: u };
        })(l),
        eA = ec?.appBuildRequest != null && (0, nE.BL)(ec) && ec.appBuildRequest.id !== ev ? ec.appBuildRequest : null,
        eS = ew.request ?? (null == eg ? eA : null),
        eC = null == ew.request ? eg : null,
        eI = null != eS && eS === ew.request,
        { close: eN, sent: eE } = ew,
        e_ = ew.request?.id,
        eM = a.useCallback(() => {
            eI ? eN() : null != eS && ek(eS.id);
        }, [eS, eI, eN]),
        eP = a.useCallback(
            (e) => {
                (null != e_ && eE(e_),
                    (0, ep.P0)({
                        text: ej.intl.formatToPlainString(eb.default.RZO35O, {
                            names: e.map((e) => e.name).join(", "),
                        }),
                        variant: "success",
                    }));
            },
            [e_, eE],
        ),
        eR = (function (e, t) {
            let n = (0, c.bG)([rS.A], () => rS.A.getSettings(e), [e]),
                l = rT(),
                r = a.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rG;
                            for (let l = e.length - 1; l >= 0; l--) {
                                let r = e[l];
                                if (null == r || "assistant" !== r.role) continue;
                                let i = (function (e, t, n, l) {
                                    let r = (0, nE.BL)(e) ? e.secretRequest : void 0;
                                    if (null != r && r.fields.length > 0)
                                        return {
                                            kind: "keys",
                                            request: r,
                                            status: (0, rA.Mv)(t, n?.secrets).get(e.render_id) ?? "open",
                                        };
                                    let i = rL(e);
                                    return null == i
                                        ? null
                                        : {
                                              kind: "settings",
                                              request: i,
                                              askId: e.id,
                                              saved: rD(e.id, t, l),
                                              superseded: r$(t).has(e.id),
                                          };
                                })(r, e, t, n);
                                if (null == i) continue;
                                let { needed: a, form: s } = rO(i, t);
                                return a > 0 ? { id: r.id, needed: a, form: s } : null;
                            }
                            return null;
                        })(t, n, l),
                    [t, n, l],
                ),
                [i, s] = a.useState(null),
                o = r?.id,
                u = a.useCallback(() => {
                    null != o && s(o);
                }, [o]);
            return { ask: null != r && r.id !== i ? r : null, dismiss: u };
        })(l, h),
        [eT, eq] = a.useState(null),
        eF = eC?.id ?? eS?.id,
        eO = null != eg || null != eS;
    a.useLayoutEffect(() => {
        let e = w.current?.getScrollerNode(),
            t = eT?.firstElementChild;
        if (null == eT || null == e || !(0, tF.vq)(t, HTMLElement) || null == eF) return;
        function n() {
            I.current && w.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eT.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eT, eF, w, I]);
    let eG = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([rC.A], () => rC.A.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, c.bG)([rC.A], () => rC.A.isHistoryUnavailable(l), [l]),
            connState: g,
        }),
        ez = !(0, nE.i_)(h),
        eU = "loading" === eG && ez,
        eB = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return dg[e % dg.length];
        }, [l]),
        eK = ed ? ej.intl.string(eb.default.Zc7gML) : "greeting" === eG && ez ? eB : null,
        eW = a.useMemo(() => {
            for (let e = h.length - 1; e >= 0; e--) {
                let t = h[e];
                if ("assistant" === t.role && !(0, nE.BL)(t)) return t;
            }
        }, [h]),
        eH = null != eW,
        eV = a.useMemo(() => h.filter((e) => "user" === e.role && "queued" === e.disposition), [h]),
        eX = null != eW ? (0, rV.S)(eW) : void 0,
        eY = ed && eu ? es : void 0,
        eZ = a.useCallback(() => (0, n3.RQ)(l, ej.intl.string(eb.default.EMgIuY)), [l]),
        [eJ, eQ] = a.useState(null),
        [e0, e1] = a.useState(eH);
    (e0 !== eH && (e1(eH), eH || eQ(null)),
        a.useEffect(() => {
            if (!eH) return;
            let e = w.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eQ(null)
                        : eQ(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eH, eW?.steps, R]));
    let e2 = R ? eJ : "bottom",
        e3 = a.useMemo(() => (null != eW ? (0, nM.b9)(eW.steps) : ""), [eW]),
        e4 = a.useMemo(() => (null != eW ? ((0, nN.lt)(eW.steps) ?? eW.todos) : void 0), [eW]),
        e5 = eW?.provisionalTodo,
        e7 = null != eW && n_(eW),
        e6 = a.useMemo(() => {
            var e;
            return null != eW ? ((e = eW.steps), ia((0, nN.Jf)(e, !0).tasks)) : void 0;
        }, [eW]);
    return (0, i.jsxs)("section", {
        ref: k,
        "data-conjure-chat": !0,
        className: dh.TE,
        children: [
            eu
                ? (0, i.jsx)(nC.A, {
                      title: ej.intl.string(eb.default.gy7byi),
                      description: ej.intl.string(eb.default["dkv/WO"]),
                      icons: dm.ir,
                      onDrop: ea,
                  })
                : null,
            (0, i.jsx)(nJ, {
                onJumpToActivity: D,
                line: e3,
                placement: eH && "top" === e2 ? "top" : null,
                todos: e4,
                todosLive: e7,
                provisionalTodo: e5,
                agents: e6,
            }),
            (0, i.jsxs)("div", {
                className: dh.JX,
                children: [
                    (0, i.jsx)(nA.Ch, {
                        ref: w,
                        onScroll: q,
                        scrollbarGutter: eU ? "both-edges" : "stable",
                        className: _ ? dh.N$ : `${dh.N$} ${dh.hB}`,
                        children: (0, i.jsx)(rX.Fu.Provider, {
                            value: l,
                            children: (0, i.jsx)(cZ, {
                                projectId: l,
                                messages: h,
                                emptyState: eG,
                                liveClarificationId: eC?.id,
                                onPickIdea: eu ? J : void 0,
                                onAskForIdeas: eu ? en : void 0,
                                draftHasText: ee,
                                onApprovePlan: eu ? eZ : void 0,
                                onRestoreVersion: eo || eH ? void 0 : s,
                                onCardReply: eu ? Q : void 0,
                                scrollerRef: w,
                                stickToBottomRef: I,
                                pinned: E,
                                onUnpin: M,
                                handleRef: A,
                                onShowsLatestChange: L,
                            }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: dh.NJ,
                        children: (0, i.jsx)(df, {
                            projectId: l,
                            thinking: eH,
                            turnStartedAt: eX,
                            restoring: eo,
                            remixStartedAt: V,
                            recalling: eU,
                            thinkingActivity: v,
                            compacting: b,
                            saving: j,
                            projectUsage: p,
                            connState: g,
                            queued: eV,
                        }),
                    }),
                    null == eC
                        ? null
                        : (0, i.jsx)("div", {
                              ref: eq,
                              className: dh.B5,
                              children: (0, i.jsx)(
                                  rf,
                                  { projectId: l, clarification: eC, onSubmit: eu ? el : void 0, onDismiss: ex },
                                  eC.id,
                              ),
                          }),
                    null == eS
                        ? null
                        : (0, i.jsx)("div", {
                              ref: eq,
                              className: dh.B5,
                              children: (0, i.jsx)(
                                  lt,
                                  { projectId: l, request: eS, canSend: eu, onDismiss: eM, onSent: eI ? eP : void 0 },
                                  eS.id,
                              ),
                          }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: dh.Jx,
                children: [
                    (0, i.jsx)(nJ, {
                        onJumpToActivity: D,
                        line: e3,
                        placement: eH && "bottom" === e2 ? "bottom" : null,
                        todos: e4,
                        todosLive: e7,
                        provisionalTodo: e5,
                        agents: e6,
                    }),
                    0 === z.annotations.length
                        ? null
                        : (0, i.jsxs)("div", {
                              className: dh.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, i.jsx)(x.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: ej.intl.formatToPlainString(eb.default["7b49dS"], {
                                          count: z.annotations.length,
                                      }),
                                  }),
                                  (0, i.jsx)(x.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: ej.intl.string(eb.default["5zG+CR"]),
                                  }),
                                  (0, i.jsx)(f.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ej.intl.string(eb.default["/zOv9+"]),
                                      onClick: () => F(l),
                                  }),
                              ],
                          }),
                    null == H ? null : (0, i.jsx)(ry, { pending: H }, H.publishTurnId),
                    null == W
                        ? null
                        : (0, i.jsx)("div", {
                              className: dh.qB,
                              children: (0, i.jsx)(nS.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: W.message,
                                  action: W.retry,
                              }),
                          }),
                    null == B
                        ? null
                        : (0, i.jsxs)("div", {
                              className: dh.Db,
                              children: [
                                  (0, i.jsx)(nS.w, { type: "warning", role: "status", message: B.message }),
                                  (0, i.jsx)("div", {
                                      className: dh.jU,
                                      children: (0, i.jsx)(d.m, {
                                          text: ej.intl.string(ej.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, i.jsx)(tZ.K, {
                                              "aria-label": ej.intl.string(ej.t.WAI6xu),
                                              icon: e8.XSmallIcon,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: B.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    null == K
                        ? null
                        : (0, i.jsx)("div", {
                              className: dh.qB,
                              children: (0, i.jsx)(nS.w, {
                                  type: K.blocked ? "critical" : "warning",
                                  role: K.blocked ? "alert" : "status",
                                  message: K.message,
                              }),
                          }),
                    null == eR.ask ? null : (0, i.jsx)(rB, { projectId: l, ask: eR.ask, onDismiss: eR.dismiss }),
                    (0, i.jsx)(o5, {
                        projectId: l,
                        escapeScopeRef: u,
                        canSend: eu,
                        running: eH,
                        restoring: eo,
                        onSend: Y,
                        hasPendingContext: z.annotations.length > 0,
                        onInterrupt: eu ? Z : void 0,
                        onUploadFile: ei,
                        onImport: o,
                        onSendToOtherProjects: eO ? void 0 : ew.open,
                        onApprove: eY,
                        suggestion: eK,
                        questionOpen: eO,
                        secretPending: eR.ask?.form.kind === "keys",
                        modelSettings: y,
                        onModelSettingsChange: er,
                        onDraftHasTextChange: et,
                        aiPaused: K?.blocked === !0,
                        visible: m,
                    }),
                ],
            }),
        ],
    });
}
var dx = n(761508),
    dv = n(209695),
    db = n(207438),
    dj = n(683438),
    dy = n(564218),
    dk = n(488412),
    dw = n(667931);
function dA(e, t) {
    let n = t.trim().toLowerCase();
    return "" === n
        ? e
        : e.filter((e) =>
              (function (e) {
                  let t = [e.name];
                  for (let n of e.spans)
                      for (let e of (t.push(n.name, n.error ?? ""),
                      [...Object.values(n.attrs ?? {}), ...Object.values(n.details ?? {})]))
                          t.push(String(e));
                  return t.join(" ").toLowerCase();
              })(e).includes(n),
          );
}
var dS = n(311540),
    dC = n(747653),
    dI = n(165363);
function dN(e) {
    return { kind: "launch", trace: e.trace, launchId: e.launchId };
}
var dE = n(296032),
    d_ = n(872892);
let dM = { running: d_.Vf, ok: d_.mo, error: d_.Sr };
function dP(e) {
    let { status: t } = e;
    return (0, i.jsx)("span", { className: `${d_.Om} ${dM[t]}`, role: "img", "aria-label": dk.Pv[t] });
}
function dR(e, t) {
    (0, e_.mM)(async () => {
        let { default: l } = await n.e(510016).then(n.bind(n, 918723));
        return (n) => (0, i.jsx)(l, { ...n, projectId: e, traceId: t });
    });
}
function dT(e) {
    let { trace: t, onOpen: n } = e,
        l = t.spans.find((e) => null != e.error)?.error;
    return (0, i.jsxs)(e7.D, {
        className: d_.nM,
        onClick: n,
        children: [
            (0, i.jsxs)("div", {
                className: d_.sU,
                children: [
                    (0, i.jsx)(dP, { status: (0, dw.lQ)(t) }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: d_._k,
                        children: t.name,
                    }),
                    (0, i.jsx)(x.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: (0, dk.LK)(t),
                    }),
                ],
            }),
            (0, i.jsx)(x.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                children: (0, dk.Tl)(t),
            }),
            null == l
                ? null
                : (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dL(e) {
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
            (0, dy.H)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, i.jsx)(tC.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: tC.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(ty.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, i.jsx)(tk.rX, {
                    children: (0, i.jsx)(tk.Dr, {
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
            return (0, i.jsx)(tZ.K, {
                ...e,
                buttonRef: l,
                icon: aL.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function d$(e) {
    let t,
        l,
        r,
        s,
        o,
        u,
        d,
        f,
        { projectId: m } = e,
        [h, g] = a.useState(""),
        p =
            ((t = (0, c.yK)([c_.A], () => c_.A.getTimingTraces(m), [m])),
            (l = (0, c.yK)(
                [ts.Ay],
                () => {
                    let e = ts.Ay.getProject(m);
                    return null == e ? [] : [e.application_id, e.preview_application_id];
                },
                [m],
            )),
            (r = (0, c.bG)([dC.A], () => dC.A.getRecords())),
            (s = a.useMemo(
                () =>
                    r
                        .filter((e) => l.includes(e.applicationId))
                        .map((e) => ({ launchId: e.launchId, trace: (0, dI.x)(e) })),
                [l, r],
            )),
            (o = a.useMemo(() => dA(t, h), [t, h])),
            (u = a.useMemo(() => {
                let e;
                return (
                    (e = new Set(
                        dA(
                            s.map((e) => e.trace),
                            h,
                        ),
                    )),
                    s.filter((t) => e.has(t.trace))
                );
            }, [s, h])),
            (d = a.useMemo(
                () =>
                    (function (e, t) {
                        let n,
                            l = [...e].reverse(),
                            r = [
                                ...((n = [...t]).sort((e, t) => e.trace.started_at - t.trace.started_at), n),
                            ].reverse(),
                            i = [],
                            a = 0;
                        for (let e of l) {
                            for (; a < r.length && r[a].trace.started_at > e.started_at;) (i.push(dN(r[a])), (a += 1));
                            i.push({ kind: "worker", trace: e });
                        }
                        for (let e of r.slice(a)) i.push(dN(e));
                        return i;
                    })(o, u),
                [o, u],
            )),
            (f = a.useMemo(() => (0, dS.J)(o), [o])),
            { entries: d, workerTraces: o, workerStats: f, isEmpty: 0 === t.length && 0 === s.length });
    return p.isEmpty
        ? (0, i.jsxs)("div", {
              className: d_.Ie,
              children: [
                  (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, i.jsx)(x.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail. Launches of this app on this device show up as they finish.",
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: d_.nd,
              children: [
                  (0, i.jsxs)("div", {
                      className: d_.Ko,
                      children: [
                          (0, i.jsx)("div", {
                              className: d_.fH,
                              children: (0, i.jsx)(dj.I, {
                                  query: h,
                                  onChange: g,
                                  onClear: () => g(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, i.jsx)(dL, { projectId: m, traces: p.workerTraces }),
                      ],
                  }),
                  (0, i.jsxs)(nA.Ch, {
                      className: d_.XG,
                      children: [
                          (0, i.jsx)(dE.A, { stats: p.workerStats }),
                          0 === p.entries.length
                              ? (0, i.jsx)(x.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, i.jsx)("ul", {
                                    className: d_.p_,
                                    "aria-label": "Traces",
                                    children: p.entries.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            {
                                                children: (0, i.jsx)(dT, {
                                                    trace: e.trace,
                                                    onOpen: () =>
                                                        (function (e, t) {
                                                            if ("launch" === t.kind) {
                                                                var l;
                                                                return void ((l = t.launchId),
                                                                (0, e_.mM)(async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e(510016),
                                                                        n.e(514721),
                                                                    ]).then(n.bind(n, 911928));
                                                                    return (t) => (0, i.jsx)(e, { ...t, launchId: l });
                                                                }));
                                                            }
                                                            dR(e, t.trace.id);
                                                        })(m, e),
                                                }),
                                            },
                                            e.trace.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dD(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dq(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dF(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dO(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dG(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dz(e) {
    return ej.intl.string("preview" === e ? eb.default["2yLYlG"] : eb.default.eiAi57);
}
let dU = ["all", "preview", "stable", "web"];
function dB(e) {
    switch (e.reason) {
        case "local":
            return ej.intl.string(eb.default.mUeKML);
        case "unconfigured":
            return ej.intl.string(eb.default.bGefb5);
        case "unauthorized":
            return ej.intl.string(eb.default.KLx6Bb);
        default:
            return null != e.detail
                ? ej.intl.formatToPlainString(eb.default.t09Q6q, { detail: e.detail })
                : ej.intl.string(eb.default["t+tG59"]);
    }
}
function dK(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ej.intl.formatToPlainString(eb.default["XO/bN4"], {
              p50: dD(e.memory_p50_bytes ?? 0),
              p999: dD(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dW = {
    db: () => eb.default["7l+DFG"],
    db_preview: () => eb.default.FAuffi,
    runtime: () => eb.default["Gkl+ab"],
    runtime_preview: () => eb.default.ynpJzv,
    bot: () => eb.default["5/i0cj"],
    bot_preview: () => eb.default.m2jsnw,
};
var dH = n(911608),
    dV = n(177427);
function dX(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: dV.KE,
        children: [
            (0, i.jsx)("div", {
                className: dV.IQ,
                children:
                    "loading" === n
                        ? (0, i.jsx)(v.y, { type: v.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, i.jsx)(x.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ej.intl.string(eb.default.ZVByPX),
                            })
                          : null != t
                            ? (0, i.jsx)(x.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: ej.intl.formatToPlainString(eb.default.INVO50, { time: dO(t) }),
                              })
                            : null,
            }),
            (0, i.jsx)(f.$, { variant: "secondary", size: "sm", text: ej.intl.string(eb.default.oKEgiu), onClick: l }),
        ],
    });
}
function dY(e) {
    let { title: t, children: n } = e;
    return (0, i.jsxs)("section", {
        className: dV.uW,
        "aria-label": t,
        children: [
            (0, i.jsx)(x.E, { variant: "body-xs/semibold", color: "text-muted", className: dV.Gf, children: t }),
            n,
        ],
    });
}
function dZ(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: a, state: s } = e;
    return (0, i.jsxs)("div", {
        className: dV.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dV.x7,
                children: [
                    (0, i.jsxs)("span", {
                        className: dV.kS,
                        children: [a, (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, i.jsxs)("span", {
                        className: dV.kS,
                        children: [
                            s,
                            (0, i.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function dJ(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        a = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = a >= 0.9;
    return (0, i.jsxs)("div", {
        className: dV.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dV.x7,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, i.jsx)(dH.z, {
                value: 100 * a,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dV.dh : void 0,
            }),
        ],
    });
}
function dQ(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, i.jsx)(dZ, {
            label: ej.intl.string(eb.default.SXP7pD),
            value: ej.intl.string(eb.default.E5hKVi),
            hint: dB(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, i.jsx)(dZ, {
            label: ej.intl.string(eb.default.SXP7pD),
            value: "\u2014",
            hint: ej.intl.string(eb.default.AGvoMJ),
        });
    let l = dK(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(dZ, { label: ej.intl.string(eb.default["H/X+FI"]), value: dq(n.cpu_ms) }),
            null != l && (0, i.jsx)(dZ, { label: ej.intl.string(eb.default.lmFmMO), value: l }),
        ],
    });
}
function d0(e) {
    let { analytics: t } = e,
        n = ej.intl.string(eb.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, i.jsx)(dY, {
            title: n,
            children: (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: dB(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dW[t] : null) ? ej.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, i.jsx)(dY, {
        title: n,
        children:
            0 === l.length
                ? (0, i.jsx)(x.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: ej.intl.string(eb.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, i.jsx)(
                          dZ,
                          {
                              label: n,
                              value: ej.intl.formatToPlainString(eb.default["w/2voO"], { cpu: dq(t.cpu_ms) }),
                              hint: dK(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var d1 = n(678708),
    d2 = n(414499),
    d3 = n(714800),
    d4 = n(81466),
    d5 = n(424383),
    d7 = n(816943),
    d8 = n(268791),
    d6 = n(514042),
    d9 = n(738188),
    fe = n(872351),
    ft = n(708988),
    fn = n(150934),
    fl = n(417270);
let fr = "Restart Agent",
    fi = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function fa(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function fs(e, t) {
    return { label: e, value: null != t && "" !== t ? dO(t) : "Unknown", icon: "calendar" };
}
function fo(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function fu(e, t, n, l) {
    let [r, i] = fi[n.status];
    return { label: e, value: `${fo(n.bytes)} of ${fo(n.max)} \xb7 ${r}`, hint: l, icon: t, state: i };
}
function fc(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dO(e.at);
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
let fd = { main: "Main vs Remote", wip: "WIP vs Remote" };
function ff(e) {
    let t = `container ${fa(e.local)} \xb7 remote ${fa(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fd[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dF(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dF(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dF(n)} Ahead, ${dF(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let fm = ["main", "wip"];
var fh = n(400154);
let fg = {
        checkout: d1.FolderIcon,
        edit: lb.PencilIcon,
        remote: d2.CloudIcon,
        commits: d3.ListNumberedIcon,
        calendar: d4.CalendarIcon,
        save: d5.SaveIcon,
        objects: sW.ServerIcon,
        download: d7.CloudDownloadIcon,
        size: d8.SpeedometerIcon,
        file: d6.FileIcon,
    },
    fp = {
        ok: [s2.CircleCheckIcon, t4.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [d9.WarningIcon, t4.A.colors.ICON_FEEDBACK_WARNING],
        error: [oh.CircleXIcon, t4.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [fe.ArrowSmallUpIcon, t4.A.colors.ICON_MUTED],
        behind: [ft.ArrowSmallDownIcon, t4.A.colors.ICON_MUTED],
    };
function fx(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([c_.A], () => c_.A.getGitInfoState(t), [t]),
            load: a.useCallback(() => (0, db.DK)(t), [t]),
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
                    `Updated ${dO(r)}`,
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
    return (0, i.jsxs)(dY, {
        title: "Git",
        children: [
            (0, i.jsx)("div", {
                className: fh.Lj,
                children:
                    "" !== l.line &&
                    (0, i.jsx)(x.E, {
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
                    if (!e.running || null != e.localError) return [fc(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            fc(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dF(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = fm.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(ff))
                        : l.push(
                              { label: "Main", value: fa(e.heads.main), icon: "remote" },
                              { label: "WIP", value: fa(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dF(e.commits) : "Unknown", icon: "commits" },
                            fs("Oldest Commit", e.oldest),
                            fs("Newest Commit", e.newest),
                            fc(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dF(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dF(t.loose)} loose (${dD(t.looseBytes)}) \xb7 ${dF(t.packed)} packed in ${n} (${dD(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dF(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dF(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != i && l.push(i),
                        null != e.localBytes &&
                            l.push(
                                fu(
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
                                  fu("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: a } = e,
                        s = fg[r],
                        [o, u] = null != a ? fp[a] : [null, void 0];
                    return (0, i.jsx)(
                        dZ,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === a,
                            icon: (0, i.jsx)(s, { size: "xs", color: t4.A.colors.ICON_MUTED }),
                            state: null != o ? (0, i.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function fv(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: o,
            restart: u,
        } = (function (e) {
            let t = (0, c.bG)([c_.A], () => c_.A.getRestartAgentState(e), [e]),
                [n, l] = a.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                i = "restarted" === t.phase ? t.instanceSince : null,
                s = a.useRef(i);
            (a.useEffect(() => {
                null != i && i !== s.current && ((s.current = i), (0, db.DK)(e));
            }, [e, i]),
                a.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = c_.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, db.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                uV.h.dispatch({
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
            let o = a.useCallback(() => (0, db.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: fr,
                },
                restart: o,
            };
        })(t),
        d = a.useCallback(() => {
            (0, eg.A)({ title: o.title, subtitle: o.body, confirmText: o.confirm, variant: "critical", onConfirm: u });
        }, [o, u]);
    return (0, i.jsxs)("div", {
        className: fh.Lj,
        children: [
            (0, i.jsxs)("div", {
                className: fh.nM,
                children: [
                    (0, i.jsx)(fn.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, i.jsx)(f.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: fl.RetryIcon,
                        text: fr,
                        loading: l,
                        disabled: l,
                        onClick: d,
                    }),
                ],
            }),
            (0, i.jsx)(x.E, {
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
                            return `Restarted \xb7 new instance since ${dO(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dO(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fb(e, t) {
    return (0, i.jsx)(dZ, {
        label: e,
        value: ej.intl.formatToPlainString(eb.default.yHJxuP, { count: dF((0, de.aM)(t)) }),
        hint: `${dF(t.input_tokens)} in \xb7 ${dF(t.output_tokens)} out \xb7 ${dF(t.cache_read_input_tokens)} cache read`,
    });
}
function fj(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        u,
        d,
        m,
        h,
        { projectId: g, status: p, fetchState: v, onRefresh: b } = e,
        {
            lastTurn: j,
            lastCompaction: y,
            lastDecline: k,
            forceState: w,
            restartState: A,
            turnRunning: S,
            handleForceCompaction: C,
            handleForceCompactionOverride: I,
            handleRestartWorkspace: N,
            lifetime: E,
            limits: _,
            session: M,
            contextCeiling: P,
        } = ((t = (0, c.bG)([c_.A], () => c_.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([c_.A], () => c_.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([c_.A], () => c_.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([c_.A], () => c_.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([c_.A], () => c_.A.getSandboxRestartState(g), [g])),
        (o = (0, c.bG)([rC.A], () => rC.A.isThinking(g), [g])),
        (u = a.useCallback(() => (0, db.Lj)(g), [g])),
        (d = a.useCallback(() => (0, db.Lj)(g, !0), [g])),
        (m = a.useCallback(() => (0, db.bq)(g), [g])),
        (h = p?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: o,
            handleForceCompaction: u,
            handleForceCompactionOverride: d,
            handleRestartWorkspace: m,
            lifetime: p?.agent?.lifetime ?? null,
            limits: h,
            session: p?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, i.jsxs)("div", {
        className: fh.Mf,
        children: [
            (0, i.jsx)(dX, { generatedAt: p?.generated_at ?? null, fetchState: v, onRefresh: b }),
            (0, i.jsx)(dY, {
                title: ej.intl.string(eb.default.JghNal),
                children:
                    null == E
                        ? (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ej.intl.string(eb.default.s0U5Fv),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(dZ, {
                                      label: ej.intl.string(eb.default["9nqym2"]),
                                      value: dF((0, de.a7)(E.cost_usd)),
                                      hint: ej.intl.formatToPlainString(eb.default.NCdUIh, { count: dF(E.turns) }),
                                  }),
                                  fb(ej.intl.string(eb.default.xtxP0e), E.orchestrator),
                                  fb(ej.intl.string(eb.default["9Sj3SX"]), E.codegen),
                                  fb(ej.intl.string(eb.default.ANCEo3), (0, de.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, i.jsx)(dZ, {
                                          label: ej.intl.string(eb.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dF(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, i.jsx)(dY, {
                title: ej.intl.string(eb.default.dZHPE5),
                children:
                    null == j
                        ? (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ej.intl.string(eb.default.DfVjal),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  fb(ej.intl.string(eb.default["7X3i9d"]), j.total),
                                  (0, i.jsx)(dZ, {
                                      label: ej.intl.string(eb.default["8OUg09"]),
                                      value: `${Math.round((j.cache_hit_rate ?? (0, de.CA)(j.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, i.jsxs)(dY, {
                title: ej.intl.string(eb.default.NbRk9a),
                children: [
                    null != y && null != P
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(dJ, {
                                      label: ej.intl.string(eb.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: P,
                                      formatValue: dF,
                                  }),
                                  (0, i.jsx)(dZ, {
                                      label: ej.intl.string(eb.default.mRbSns),
                                      value: `${dF(y.tokensBefore)} \u{2192} ${dF(y.tokensAfter)}`,
                                      hint: ej.intl.formatToPlainString(eb.default.Vq3skS, {
                                          count: dF(y.retainedMessages),
                                          time: dO(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != P
                                      ? ej.intl.formatToPlainString(eb.default.GMLCNv, { ceiling: dF(P) })
                                      : ej.intl.string(eb.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, i.jsx)(dZ, {
                            label: ej.intl.string(eb.default["4BX5KK"]),
                            value: `${dF(k.projected)} / ${dF(k.threshold)}`,
                            critical: !0,
                            hint: ej.intl.formatToPlainString(eb.default["6ngCax"], { time: dO(k.observedAt) }),
                        }),
                    (0, i.jsxs)("div", {
                        className: fh.Lj,
                        children: [
                            (0, i.jsx)(f.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ej.intl.string(eb.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: C,
                            }),
                            (0, i.jsx)(x.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ej.intl.string(eb.default.wox6Ev);
                                    if ("pending" === e) return ej.intl.string(eb.default.OcPHQ1);
                                    let t = dO(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return ej.intl.formatToPlainString(eb.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? eb.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? eb.default.YZb4hK
                                              : eb.default.ZoUSVK;
                                    return ej.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(w),
                            }),
                            "object" == typeof w &&
                                !0 === w.pendingTurn &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(f.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: ej.intl.string(eb.default.ZxG2AI),
                                            onClick: I,
                                        }),
                                        (0, i.jsx)(x.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: ej.intl.string(eb.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: fh.Lj,
                        children: [
                            (0, i.jsx)(f.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ej.intl.string(eb.default["5qCjBu"]),
                                loading: "pending" === A,
                                disabled: "pending" === A || S,
                                onClick: N,
                            }),
                            (0, i.jsx)(x.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof A && "restarted" !== A.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ej.intl.string(eb.default.mlok8D);
                                    if ("pending" === e) return ej.intl.string(eb.default["1ugSyK"]);
                                    let t = dO(e.observedAt);
                                    return ej.intl.formatToPlainString(
                                        "restarted" === e.outcome ? eb.default["76mfqO"] : eb.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(A),
                            }),
                        ],
                    }),
                    (0, i.jsx)(fv, { projectId: g }),
                ],
            }),
            (0, i.jsx)(fx, { projectId: g }),
            (null != M || p?.analytics != null) &&
                (0, i.jsxs)(dY, {
                    title: ej.intl.string(eb.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(dZ, {
                                        label: ej.intl.string(eb.default.CLXHAs),
                                        value: dO(M.instance_since),
                                        hint: ej.intl.string(eb.default.UCwUEX),
                                    }),
                                    (0, i.jsx)(dZ, {
                                        label: ej.intl.string(eb.default["8V8e1Z"]),
                                        value: dF(M.sockets),
                                    }),
                                    (0, i.jsx)(dZ, {
                                        label: ej.intl.string(eb.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? ej.intl.string(eb.default.Wv025I)
                                            : ej.intl.string(eb.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, i.jsx)(dZ, {
                                            label: ej.intl.string(eb.default["3oUYnv"]),
                                            value: dF(M.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, i.jsx)(dQ, { analytics: p.analytics }),
                    ],
                }),
            null != _ &&
                (0, i.jsxs)(dY, {
                    title: ej.intl.string(eb.default["LEIhp/"]),
                    children: [
                        (0, i.jsx)(dZ, {
                            label: ej.intl.string(eb.default.IlDBN3),
                            value: dF(_.max_subagent_iterations),
                        }),
                        (0, i.jsx)(dZ, {
                            label: ej.intl.string(eb.default["ZdzKR+"]),
                            value: ej.intl.formatToPlainString(eb.default.yHJxuP, {
                                count: dF(_.context_window_tokens),
                            }),
                        }),
                        (0, i.jsx)(dZ, {
                            label: ej.intl.string(eb.default.cIhN2W),
                            value: ej.intl.formatToPlainString(eb.default.yHJxuP, {
                                count: dF(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, i.jsx)(dZ, {
                            label: ej.intl.string(eb.default["+fOn/q"]),
                            value: dF(_.max_user_message_chars),
                        }),
                        (0, i.jsx)(dZ, { label: ej.intl.string(eb.default.kIHga0), value: dF(_.max_build_attempts) }),
                        (0, i.jsx)(dZ, { label: ej.intl.string(eb.default.Iw03yW), value: dF(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fy = n(237528),
    fk = n(629584),
    fw = n(697361),
    fA = n(531893);
function fS(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, i.jsx)("div", {
              className: fA.ut,
              children: (0, i.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: ej.intl.string(eb.default.h1SE6R),
              }),
          });
}
function fC(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, i.jsxs)("div", {
              className: fA.qf,
              children: [
                  (0, i.jsx)(x.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: ej.intl.string(eb.default.h1SE6R),
                  }),
                  (0, i.jsx)(x.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: ej.intl.string(eb.default["8SErdg"]),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: fA.qf,
              children: [
                  (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fI(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, i.jsx)("div", {
              className: fA.ps,
              children: (0, i.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: ej.intl.string(eb.default.V7Ri8H),
              }),
          })
        : null;
}
var fN = n(109079);
let fE = a.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = a.useState(!1),
        o = a.useId(),
        u = a.useMemo(
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
        className: fN.vK,
        children: [
            (0, i.jsx)(x.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: fN.Mt,
                selectable: !0,
                children: (0, fw.R)(n.ts) ?? n.ts,
            }),
            (0, i.jsx)(x.E, {
                tag: "span",
                variant: "footnote/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: fN.dm,
                children: n.level,
            }),
            (0, i.jsxs)("div", {
                className: fN.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, i.jsx)("span", { className: fN.Cq, children: (0, i.jsx)(fy.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, i.jsx)("span", {
                            className: fN.Cq,
                            title: n.build ?? void 0,
                            children: (0, i.jsx)(fy.v, {
                                text: ej.intl.string(eb.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != u
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, i.jsxs)(x.E, {
                                          tag: "span",
                                          variant: "body-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, i.jsxs)(e7.D, {
                                      className: fN.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": ej.intl.string(eb.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, i.jsx)(n$.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, i.jsx)(nD.ChevronSmallRightIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, i.jsxs)(x.E, {
                                              tag: "span",
                                              variant: "body-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  ej.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker
                                                          ? eb.default.kUhyUv
                                                          : eb.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, i.jsx)(x.E, {
                                          tag: "div",
                                          variant: "body-xs/normal",
                                          color: c,
                                          className: fN.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, i.jsx)(x.E, {
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
function f_(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([dv.A], () => dv.A.getLogs(t), [t]),
        l = (0, c.bG)([dv.A], () => dv.A.getHistoryState(t, "logs")),
        [r, s] = a.useState("all"),
        [o, u] = a.useState(""),
        d = a.useMemo(() => {
            let e;
            return (
                (e = o.trim().toLowerCase()),
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
        }, [n, r, o]),
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
                dU.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dz(e);
                            case "web":
                                return ej.intl.string(eb.default.IVzfVV);
                            default:
                                return ej.intl.string(eb.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, i.jsxs)("div", {
        className: fN.$F,
        children: [
            (0, i.jsxs)("div", {
                className: fN.y4,
                children: [
                    (0, i.jsx)(fk.I, {
                        look: "pill",
                        "aria-label": ej.intl.string(eb.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, i.jsx)("div", {
                        className: fN.KT,
                        children: (0, i.jsx)(dj.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: ej.intl.string(eb.default["m2+37Y"]),
                            "aria-label": ej.intl.string(eb.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, i.jsx)(fS, { state: l }),
            (0, i.jsxs)(nA.Ch, {
                ref: f,
                onScroll: h,
                overflow: "auto",
                className: fN.sx,
                children: [
                    (0, i.jsx)(fI, { state: l }),
                    0 === n.length
                        ? (0, i.jsx)(fC, {
                              state: l,
                              emptyTitle: ej.intl.string(eb.default.S7qlPG),
                              emptyBody: ej.intl.string(eb.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, i.jsx)(x.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: ej.intl.string(eb.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, i.jsx)(fE, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fM(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, i.jsx)(a.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, i.jsx)(a.Fragment, { children: r("stable", l) }, "stable")),
        (0, i.jsx)(dY, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, i.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: ej.intl.string(eb.default.umcjif),
                      }),
        })
    );
}
function fP(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(dZ, {
                      label: ej.intl.formatToPlainString(eb.default["01ZMS4"], { env: dz(n) }),
                      value: ((t = l.connected), ej.intl.string(t ? eb.default.Wv025I : eb.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, i.jsx)(dZ, {
                      label: ej.intl.string(eb.default["z1dh+F"]),
                      value: dF(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dO(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, i.jsx)(dZ, { label: ej.intl.string(eb.default.Iz5GnJ), value: dF(l.guild_count) }),
                  (0, i.jsx)(dZ, {
                      label: ej.intl.string(eb.default["7UqtNv"]),
                      value: dF(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? ej.intl.formatToPlainString(eb.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dO(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, i.jsx)(dZ, {
                          label: ej.intl.string(eb.default["x3+JXJ"]),
                          value: dF(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, i.jsx)(dZ, { label: dz(n), value: ej.intl.string(eb.default.lTHQss) });
}
function fR(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, i.jsx)(dZ, {
        label: dz(t),
        value: ej.intl.formatToPlainString(eb.default["Xq+wHT"], {
            requests: dF(n.requests),
            failures: dF(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? ej.intl.formatToPlainString(eb.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dO(n.last_failure.at),
                  })
                : ej.intl.formatToPlainString(eb.default["7KlGT6"], { time: dO(n.since) }),
    });
}
function fT(e) {
    let { env: t, runtime: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(dZ, {
                label: ej.intl.formatToPlainString(eb.default["92gVTm"], { env: dz(t) }),
                value: dF(n.connections),
            }),
            n.schedules.map((e) =>
                (0, i.jsx)(
                    dZ,
                    {
                        label: ej.intl.formatToPlainString(eb.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? ej.intl.formatToPlainString(eb.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? ej.intl.formatToPlainString(eb.default.wxAWNv, { time: dO(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function fL(e) {
    let { env: t, metrics: n } = e;
    return (0, i.jsx)(dZ, {
        label: dz(t),
        value: ej.intl.formatToPlainString(eb.default.suAOj9, { calls: dF(n.calls), errors: dF(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function f$(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, i.jsx)(dY, {
            title: t,
            children: (0, i.jsx)(x.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: ej.intl.string(eb.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        a = n.cpu_ms_total > 0;
    return (0, i.jsxs)(dY, {
        title: t,
        children: [
            (0, i.jsx)(dZ, {
                label: ej.intl.string(eb.default.xtD4Zp),
                value: dF(n.requests),
                hint: ej.intl.formatToPlainString(eb.default["7KlGT6"], { time: dO(n.since) }),
            }),
            (0, i.jsx)(dZ, { label: ej.intl.string(eb.default.gfRhR3), value: dF(n.errors), critical: n.errors > 0 }),
            a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(dJ, {
                              label: ej.intl.string(eb.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dq,
                          }),
                          (0, i.jsx)(dZ, {
                              label: ej.intl.string(eb.default.mSKImM),
                              value: dq(r),
                              hint: ej.intl.formatToPlainString(eb.default.JqMU05, {
                                  total: dq(n.cpu_ms_total),
                                  wall: dq(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, i.jsx)(dZ, {
                      label: ej.intl.string(eb.default.LEJ5r3),
                      value: ej.intl.string(eb.default["2Ekb2b"]),
                      hint: ej.intl.string(eb.default.G0aq7i),
                  }),
            !a &&
                n.wall_ms_total > 0 &&
                (0, i.jsx)(dZ, { label: ej.intl.string(eb.default.xvmL1D), value: dq(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, i.jsx)(dZ, {
                    label: ej.intl.string(eb.default["4sQYwH"]),
                    value: dF(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, i.jsx)(dZ, {
                label: ej.intl.string(eb.default.bQenOy),
                value: dF(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: ej.intl.formatToPlainString(eb.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, i.jsx)(dZ, { label: ej.intl.string(eb.default.xgpn4Y), value: dG(n.build) }),
        ],
    });
}
function fD(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: ej.intl.string(eb.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: ej.intl.string(eb.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: ej.intl.string(eb.default.eiAi57), metrics: n },
              ];
    return (0, i.jsx)(dY, {
        title: ej.intl.string(eb.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, i.jsx)(dZ, { label: n, value: "\u2014" }, t)
                : (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)(dZ, {
                                  label: ej.intl.formatToPlainString(eb.default.u7kJJ4, { env: n }),
                                  value: dD(l.r2_bytes),
                                  hint: ej.intl.formatToPlainString(
                                      l.r2_truncated ? eb.default.lH0oQw : eb.default.m9h02S,
                                      { count: dF(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, i.jsx)(dJ, {
                                      label: ej.intl.formatToPlainString(eb.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dD,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fq(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: fh.Mf,
        children: [
            (0, i.jsx)(dX, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(f$, {
                            title: ej.intl.string(eb.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(f$, {
                            title: ej.intl.string(eb.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(fD, { status: t }),
                        null != t.bot &&
                            (0, i.jsx)(fM, {
                                title: ej.intl.string(eb.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fP, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, i.jsx)(fM, {
                                title: ej.intl.string(eb.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fR, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, i.jsx)(fM, {
                                title: ej.intl.string(eb.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fT, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, i.jsx)(fM, {
                                title: ej.intl.string(eb.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fL, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, i.jsx)(d0, { analytics: t.analytics }),
                        (0, i.jsxs)(dY, {
                            title: ej.intl.string(eb.default.fQMpFp),
                            children: [
                                (0, i.jsx)(dZ, {
                                    label: ej.intl.string(eb.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dG(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, i.jsx)(dZ, {
                                    label: ej.intl.string(eb.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dG(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fF = n(592465);
function fO(e) {
    let { projectId: t, onClose: n } = e,
        l = (0, eS.BQ)(),
        [r, s] = a.useState(() => (l && ew?.projectId === t ? "trace" : "logs")),
        o = (0, c.bG)([c_.A], () => c_.A.getStatus(t), [t]),
        u = (0, c.bG)([c_.A], () => c_.A.getFetchState(t), [t]),
        d = a.useCallback(() => {
            ((0, db.R7)(t), (0, db.DK)(t));
        }, [t]);
    (a.useEffect(() => d(), [d]), a.useEffect(() => (0, ey.Rw)(t), [t]));
    let f = a.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == ew || ew.projectId !== e) return null;
            let { traceId: t } = ew;
            return ((ew = null), t);
        })(t);
        return null != e && (dR(t, e), !0);
    }, [t, l]);
    (a.useEffect(() => {
        f();
    }, [f]),
        eA(t, () => {
            f() && s("trace");
        }));
    let m = a.useCallback(() => {
            (0, cu.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: c_.A.getStatus(t),
                        last_turn_usage: c_.A.getLastTurnUsage(t),
                        last_compaction: c_.A.getLastCompaction(t),
                        last_compaction_decline: c_.A.getLastCompactionDecline(t),
                        timing_traces: c_.A.getTimingTraces(t),
                        logs: dv.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, ep.P0)({ text: ej.intl.string(eb.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = ej.intl.string(eb.default["Q4FN+H"]);
    return (0, i.jsxs)("section", {
        className: fF.nd,
        "aria-label": h,
        children: [
            (0, i.jsxs)(t$.Ay, {
                "aria-label": h,
                toolbar: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(t$.Ay.Icon, {
                            icon: ca.CopyIcon,
                            tooltip: ej.intl.string(eb.default.TkHqy2),
                            onClick: m,
                        }),
                        (0, i.jsx)(t$.Ay.Icon, {
                            icon: e8.XSmallIcon,
                            tooltip: ej.intl.string(ej.t.cpT0Cq),
                            onClick: n,
                        }),
                    ],
                }),
                children: [
                    (0, i.jsx)(t$.Ay.ChannelIcon, { icon: co.BugIcon, "aria-hidden": !0 }),
                    (0, i.jsx)(t$.Ay.Title, { children: h }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: fF.rf,
                children: [
                    (0, i.jsxs)(dx.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": ej.intl.string(eb.default.RvvWIh),
                        className: fF.vR,
                        children: [
                            (0, i.jsx)(dx.V.Item, { id: "logs", children: ej.intl.string(eb.default["+VRYCm"]) }),
                            (0, i.jsx)(dx.V.Item, { id: "worker", children: ej.intl.string(eb.default["50D0FZ"]) }),
                            (0, i.jsx)(dx.V.Item, { id: "agent", children: ej.intl.string(eb.default.UkbTK1) }),
                            l ? (0, i.jsx)(dx.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, i.jsx)(f_, { projectId: t })
                        : "worker" === r
                          ? (0, i.jsx)(fq, { status: o, fetchState: u, onRefresh: d })
                          : "trace" === r && l
                            ? (0, i.jsx)(d$, { projectId: t })
                            : (0, i.jsx)(fj, { projectId: t, status: o, fetchState: u, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fG = n(365912),
    fz = n(873715);
function fU(e) {
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
let fB = Object.freeze({ x: -1, y: -1 });
function fK(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fU(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fW = n(192888);
function fH(e, t) {
    return (0, fW.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fK, () => ({ status: "failed" }));
}
var fV = n(108308);
let fX = { x: 25, y: 21 };
function fY(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fZ(e, t, n, l) {
    let r = fY(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fJ(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fQ(e) {
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
function f0(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: d } = U(o),
        m = (0, eC.Zv)(o),
        h = (0, e_.Rv)(),
        g = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
        p = g?.id ?? null,
        [v, b] = a.useState(null),
        [j, k] = a.useState(!1),
        [w, M] = a.useState(!1),
        [P, R] = a.useState(null),
        [T, D] = a.useState(!1),
        q = a.useRef(null),
        z = a.useRef(null),
        B = a.useRef(null),
        [K, W] = a.useState(null),
        [H, V] = a.useState(!1),
        [X, Y] = a.useState(null),
        [Z, J] = a.useState(null),
        Q = a.useRef(!1),
        [ee, et] = a.useState(!1),
        [en, el] = a.useState(null),
        er = u && !m && !h;
    null == X || (er && X.projectId === o) || Y(null);
    let ea = X?.projectId ?? null;
    a.useEffect(() => {
        if (null != ea) return () => (0, n3.xJ)(ea, "design");
    }, [ea]);
    let es = tX(r, er);
    a.useEffect(() => {
        if (!er || null == o) return;
        let e = !0,
            t = r();
        if (null == t) return void M(!0);
        (k(!0), M(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fz.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    k(!1);
                    let n = "completed" === t.status ? fQ(t.response) : null;
                    null == n ? M(!0) : (b(n), O(o, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (k(!1), M(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [er, r, o]);
    let eo = a.useRef(null);
    (a.useEffect(() => {
        if (!er || null == es || null == o) return;
        if (null == v) {
            eo.current = es;
            return;
        }
        if (tV(eo.current, es)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            eo.current = es;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, fz.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !em.current) return;
                        let l = fQ(e.response);
                        null != l && (b(l), O(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let i = fU(e.element);
                            null != i && r.set(l.id, i);
                        }),
                            (n = L(o)).active &&
                                0 !== r.size &&
                                $(o, {
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
    }, [er, es, v, d, o, r]),
        a.useEffect(() => {
            if (!er)
                return () => {
                    (R(null), Y(null), el(null), b(null));
                };
        }, [er]));
    let ec = a.useRef(null),
        ed = a.useRef(null),
        ef = a.useRef(!1),
        em = a.useRef(!1);
    a.useEffect(() => {
        ((em.current = er), er || ((ec.current = null), (ed.current = null), (B.current = null), D(!1)));
    }, [er]);
    let eh = a.useCallback(
            function e() {
                if (ef.current) return;
                let t = ec.current;
                if (null == t) return;
                ec.current = null;
                let n = r();
                null != n &&
                    ((ef.current = !0),
                    fH(n, t).then((t) => {
                        if (((ef.current = !1), em.current)) {
                            if ("picked" !== t.status || f7(t.target, ek.current.rect, ek.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? R(null)
                                    : "unsupported" === t.status && V(!0);
                            else {
                                let e = C(t.target);
                                (W((t) => (f5(t, e) ? t : e)),
                                    R((e) => {
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
        eg = a.useCallback(() => {
            if (null == X) return;
            let e = !Q.current;
            (J({ at: X.at, label: X.label, draft: X.draft, instant: e }), et(e), Y(null));
        }, [X]);
    (a.useEffect(() => {
        if (!ee) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => et(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [ee]),
        a.useEffect(() => {
            if (null == Z) return;
            let e = setTimeout(() => J(null), f3);
            return () => clearTimeout(e);
        }, [Z]));
    let ep = null == v || null == es || v.viewport.width < 1 ? 1 : es.width / v.viewport.width,
        ex = null != v || w,
        ev = a.useMemo(() => v?.elements ?? [], [v]),
        ek = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        ek.current = { rect: es, scale: ep };
    }, [es, ep]);
    let ew = a.useCallback(
            (e, t, n) => {
                null != o &&
                    ((0, n3.xJ)(o, "design"),
                    el(null),
                    (Q.current = !1),
                    Y({ projectId: o, target: e, anchor: t, draft: "", at: n, label: C(e) }));
            },
            [o],
        ),
        eA = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / ep, y: (e.clientY - t.top) / ep }), [ep]),
        eS = a.useCallback(() => {
            let e = B.current;
            if (null == e) return;
            let t = q.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = z.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(eS);
    let eI = a.useCallback(
            (e) => {
                if (null == es || null != en) return;
                if (((B.current = { x: e.clientX, y: e.clientY }), eS(), D(!0), null != X)) {
                    (Math.abs(e.clientX - X.at.x) > f4 || Math.abs(e.clientY - X.at.y) > f4) && (Q.current = !0);
                    return;
                }
                if (!ex) return void R(null);
                let t = eA(e, es);
                if (H) {
                    let e = (function (e, t, n) {
                            let l = null,
                                r = 1 / 0;
                            for (let i of e) {
                                let { x: e, y: a, width: s, height: o } = i.rect;
                                if (s < 1 || o < 1 || t < e || n < a || t > e + s || n > a + o) continue;
                                let u = s * o;
                                u < r && ((l = i), (r = u));
                            }
                            return l;
                        })(ev, t.x, t.y),
                        n = null != e && f7(e, es, ep) ? null : e;
                    if (null != n) {
                        let e = C(n);
                        W((t) => (f5(t, e) ? t : e));
                    }
                    R((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = ed.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((ed.current = n), (ec.current = n), eh());
            },
            [es, ep, ex, eA, H, ev, X, en, eS, eh],
        ),
        eN = null == en ? null : d.find((e) => e.id === en.id),
        eE = er && (T || X?.target.marker != null || eN?.target.marker != null);
    a.useEffect(() => {
        if (eE)
            return () => {
                let e = r();
                null != e && fH(e, fB);
            };
    }, [eE, r]);
    let eM = a.useCallback(() => {
        (D(!1), R(null), (ed.current = null), (ec.current = null));
    }, []);
    a.useEffect(() => {
        if (!er || !T || !ex || H || null != X || null != en) return;
        let e = B.current,
            { rect: t, scale: n } = ek.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((ed.current = l), (ec.current = l), eh());
    }, [er, T, ex, H, X, en, eh]);
    let eP = a.useCallback(
            (e) => {
                if (null != X || null != en) {
                    (eg(), el(null));
                    return;
                }
                if (null == P || null == es) return;
                let t = eA(e, es);
                ew(
                    P,
                    (function (e, t, n) {
                        let { x: l, y: r, width: i, height: a } = e.rect;
                        return i < 1 || a < 1
                            ? A
                            : { x: Math.min(1, Math.max(0, (t - l) / i)), y: Math.min(1, Math.max(0, (n - r) / a)) };
                    })(P, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [P, es, eA, X, en, ew, eg],
        ),
        eR = a.useCallback(() => {
            null != o && (R(null), ei(o)?.active === !0 ? eu(o) : F(o));
        }, [o]),
        eT = a.useCallback(() => {
            null != o &&
                (null != X
                    ? eg()
                    : en?.confirmingRemove === !0
                      ? el({ ...en, confirmingRemove: !1 })
                      : null != en
                        ? el(null)
                        : eR());
        }, [o, X, en, eg, eR]),
        eL = a.useRef(eT),
        e$ = a.useRef(o),
        eD = a.useRef(eR);
    a.useLayoutEffect(() => {
        ((eL.current = eT), (e$.current = o), (eD.current = eR));
    });
    let eq = a.useRef(null);
    a.useEffect(() => {
        if (er)
            return (
                tO.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        tO.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eL.current());
        }
        function t(e) {
            let t = e.target;
            !(0, tF.vq)(t) ||
                eq.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fG.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == e$.current || ei(e$.current)?.active !== !0) && eD.current());
        }
    }, [er, s]);
    let eF = a.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eT());
                    return;
                }
                if (null != X || null != en || 0 === ev.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == P ? -1 : ev.findIndex((e) => e.ref === P.ref);
                    R(ev[(n + (t ? 1 : -1) + ev.length) % ev.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != P &&
                    (e.preventDefault(),
                    ew(P, A, { x: (es?.left ?? 0) + P.rect.x * ep, y: (es?.top ?? 0) + P.rect.y * ep }));
            },
            [o, X, en, ev, P, ew, eT, es, ep],
        ),
        eO = a.useCallback(
            (e) => {
                null == o ||
                    null == X ||
                    ((S(X.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, ey.dv)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = C(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${E}${r}${_}${N(e)}
${t.trim()}`;
                            })(X.target, X.draft),
                            e,
                        ),
                        eg(),
                        R(null)));
            },
            [o, X, eg],
        ),
        eG = a.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, tG.vX)(o, e)), [o]),
        ez = a.useCallback(() => {
            if (null != o && null != en && null != p && S(en.draft)) {
                var e, t;
                let n, l;
                ((e = en.id),
                    (t = en.draft.trim()),
                    null != (l = (n = L(o)).annotations.find((t) => t.id === e)) &&
                        G(l, p) &&
                        $(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    el({ ...en, editing: !1 }));
            }
        }, [o, en, p]),
        eU = a.useCallback(() => {
            if (null != o && null != en && null != p) {
                var e;
                let t, n;
                ((e = en.id),
                    null != (n = (t = L(o)).annotations.find((t) => t.id === e)) &&
                        G(n, p) &&
                        $(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    el(null));
            }
        }, [o, en, p]),
        eB = u
            ? j
                ? ej.intl.string(eb.default["Eb/YV9"])
                : w
                  ? ej.intl.string(eb.default.FD30bh)
                  : ej.intl.formatToPlainString(eb.default.dTSqLF, { count: d.length })
            : "",
        eK = er && null != es,
        eW = T && null == en,
        eH = X?.target ?? eN?.target ?? null,
        eV = X ?? Z,
        eX = X ?? (Z?.instant === !0 ? null : Z),
        eY =
            null != eN && null != es
                ? (function (e, t) {
                      let { left: n, top: l } = fJ(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fZ(eN.target, eN.anchor, es, ep), es)
                : null;
    return (
        a.useEffect(() => {
            let e = r();
            if (eN?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eN;
            fH(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eN, r]),
        (0, tq.createPortal)(
            (0, i.jsxs)("div", {
                ref: eq,
                className: fV.Li,
                children: [
                    (0, i.jsx)(nL.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eB,
                    }),
                    eK
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: fV.MT,
                                      style: { left: es.left, top: es.top, width: es.width, height: es.height },
                                      "data-plain-cursor": eW ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": ej.intl.string(eb.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: eI,
                                      onMouseLeave: eM,
                                      onClick: eP,
                                      onKeyDown: eF,
                                  }),
                                  null != P && null == P.marker && null == X && null == en
                                      ? (0, i.jsx)(f8, { box: fY(P, es, ep) })
                                      : null,
                                  (0, i.jsx)("div", {
                                      ref: q,
                                      className: fV.aZ,
                                      children: (0, i.jsx)("div", {
                                          className: fV.xz,
                                          "data-shown": null != P && null == en && null == X ? "" : void 0,
                                          "data-instant": ee ? "" : void 0,
                                          children: (0, i.jsxs)(x.E, {
                                              variant: "body-xs/medium",
                                              className: fV.Ux,
                                              children: [
                                                  null == K
                                                      ? null
                                                      : (0, i.jsx)("span", { className: fV.Tl, children: K.kind }),
                                                  null == K || "" === K.name
                                                      ? null
                                                      : (0, i.jsxs)("span", {
                                                            className: fV.kh,
                                                            children: [" ", K.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      ref: z,
                                      className: fV.Y,
                                      children: eW ? (0, i.jsx)("div", { className: fV.u }) : null,
                                  }),
                                  null == eX
                                      ? null
                                      : (0, i.jsx)("div", {
                                            className: fV.aZ,
                                            style: {
                                                transform: `translate3d(${eX.at.x + 20}px, ${eX.at.y + 20}px, 0)`,
                                            },
                                            children: (0, i.jsx)("div", {
                                                className: fV.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == X ? "" : void 0,
                                                children: (0, i.jsxs)(x.E, {
                                                    variant: "body-xs/medium",
                                                    className: fV.Ux,
                                                    children: [
                                                        (0, i.jsx)("span", {
                                                            className: fV.Tl,
                                                            children: eX.label.kind,
                                                        }),
                                                        "" === eX.label.name
                                                            ? null
                                                            : (0, i.jsxs)("span", {
                                                                  className: fV.kh,
                                                                  children: [" ", eX.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eH && null == eH.marker
                                      ? (0, i.jsx)("div", {
                                            className: fV.D0,
                                            style: fY(eH, es, ep),
                                            "aria-hidden": !0,
                                        })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fZ(e.target, e.anchor, es, ep),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, i.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fV.xL,
                                              style: { ...fJ(n, es), width: 24, height: 24 },
                                              "aria-label": ej.intl.formatToPlainString(eb.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: I(e.target),
                                              }),
                                              "aria-expanded": en?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == X && el(l);
                                              },
                                              onFocus: () => {
                                                  null == X && el(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), eg(), el(l));
                                              },
                                              children: (0, i.jsx)(f1, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eV || null == o
                                      ? null
                                      : (0, i.jsx)(tW, {
                                            projectId: o,
                                            at: { x: eV.at.x + 20, y: eV.at.y + 20 },
                                            bounds: es,
                                            kind: eV.label.kind,
                                            value: eV.draft,
                                            canSubmit: null != X && S(eV.draft),
                                            onChange: (e) => {
                                                null != X && Y({ ...X, draft: e });
                                            },
                                            onSubmit: eO,
                                            onDismiss: eg,
                                            onUploadFile: eG,
                                            closing: null == X,
                                        }),
                                  null != eN && null != en && null != eY
                                      ? (0, i.jsxs)(f2, {
                                            point: eY,
                                            frame: es,
                                            authorId: eN.authorId,
                                            title: I(eN.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                en.confirmingRemove ? el({ ...en, confirmingRemove: !1 }) : el(null);
                                            },
                                            onMouseLeave: () => {
                                                en.editing || en.confirmingRemove || el(null);
                                            },
                                            children: [
                                                en.editing
                                                    ? (0, i.jsx)(n6.f, {
                                                          autoFocus: !0,
                                                          label: ej.intl.string(eb.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: en.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => el({ ...en, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), ez());
                                                          },
                                                      })
                                                    : (0, i.jsx)(x.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: fV.aC,
                                                          children: eN.comment,
                                                      }),
                                                G(eN, p)
                                                    ? (0, i.jsx)("div", {
                                                          className: fV.eB,
                                                          children: en.confirmingRemove
                                                              ? (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(x.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fV.nv,
                                                                            children: ej.intl.string(eb.default.wOHvts),
                                                                        }),
                                                                        (0, i.jsx)(f.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ej.intl.string(eb.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                el({ ...en, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, i.jsx)(f.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ej.intl.string(eb.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eU,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(f.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: ej.intl.string(eb.default.friIzR),
                                                                            onClick: () =>
                                                                                el({
                                                                                    ...en,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        en.editing
                                                                            ? (0, i.jsx)(f.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !S(en.draft),
                                                                                  text: ej.intl.string(
                                                                                      eb.default.iicRP9,
                                                                                  ),
                                                                                  onClick: ez,
                                                                              })
                                                                            : (0, i.jsx)(f.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: ej.intl.string(
                                                                                      eb.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      el({
                                                                                          ...en,
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
function f1(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([y.default], () => y.default.getUser(t), [t]);
    return (0, i.jsx)(ah.eu, {
        src: null == n ? null : ap.Ay.getUserAvatarURL(n),
        size: ag._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function f2(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        v = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(fX);
    a.useLayoutEffect(() => {
        let e = v.current?.getBoundingClientRect(),
            t = b.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: k,
            top: w,
            originX: A,
            originY: S,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, l), r)), originX: u.x - s, originY: u.y - o }),
        C = { left: k, top: w, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${S}px` };
    return (0, i.jsxs)("div", {
        ref: v,
        className: fV.Nr,
        style: C,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, i.jsxs)("div", {
                className: fV.MY,
                children: [
                    (0, i.jsx)("span", { ref: b, className: fV.ip, children: (0, i.jsx)(f1, { authorId: d }) }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: fV.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: fV.zI, children: p }),
        ],
    });
}
let f3 = 300,
    f4 = 2;
function f5(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function f7(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function f8(e) {
    let { box: t } = e;
    return (0, i.jsx)("div", { className: fV.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var f6 = n(318774),
    f9 = n(91242),
    me = n(253932),
    mt = n(697744),
    mn = n(130324);
function ml(e) {
    let t = (0, mt.c)(),
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
    let r = (0, nI.j)();
    return (
        a.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mr(e) {
    let { className: t } = e,
        { Component: n, events: l } = ml(3e4);
    return (0, i.jsxs)("div", {
        className: u()(t, mn.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, i.jsx)(x.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: mn.ol,
                children: ej.intl.string(eb.default.AyiQEp),
            }),
        ],
    });
}
var mi = n(251363),
    ma = n(944142),
    ms = n(532247),
    mo = n(501628);
function mu(e) {
    let { progress: t } = e,
        { Component: n } = ml(1500),
        l = me.Q_.useSetting();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, i.jsx)(x.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, i.jsx)("div", {
                className: mo.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, i.jsx)(
                        "span",
                        {
                            className: mo.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function mc(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        o = (0, c.bG)([ma.A], () => (s ? ma.A.getLiveReload(t) : null), [s, t]),
        u = (0, tu.A)(n, r)?.id ?? null,
        d = o?.phase ?? null,
        f = o?.background === !0,
        m = (function (e, t, n) {
            let l = (0, ms.dv)(e),
                [r, i] = a.useState(null),
                [s, o] = a.useState(l),
                [u, d] = a.useState(t);
            s !== l && (o(l), d(t), i(null != l || u ? null : (0, ms.QP)(e, s)));
            let f = (0, c.bG)(
                    [f9.A],
                    () => {
                        let e = f9.A.getFrame(n);
                        return (0, tf.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, mi.ow)(null, n) && e();
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
        })(d, f, u),
        h = f ? null : (0, ms.h_)(d, o?.step ?? null, m);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(nL.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, i.jsx)("div", {
                      className: mo.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, i.jsx)(mu, { progress: h }),
                  })
                : null,
        ],
    });
}
let md = 0;
var mf = n(782134),
    mm = n(357858),
    mh = n(878014),
    mg = n(343030),
    mp = n(759829),
    mx = n(11411),
    mv = n(206600),
    mb = n(240666);
let mj = { width: 1 / 0, height: 1 / 0 };
function my(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mj;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var mk = n(702083);
function mw(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([tc.A], () => ({
            mobile: tc.A.isBuilderPreviewMobile(),
            landscape: tc.A.isBuilderPreviewLandscape(),
        })),
        r = a.useRef(null),
        [s, o] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = r.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = { width: e.clientWidth, height: e.clientHeight };
            o((e) => (e?.width === t.width && e.height === t.height ? e : t));
        }
        t();
        let n = new ResizeObserver(t);
        return (n.observe(e), () => n.disconnect());
    }, []);
    let d = null != s && s.width > 0 ? s : null,
        f = n ? my(l, d ?? void 0) : null;
    return (0, i.jsx)("div", {
        ref: r,
        className: u()(mk.dw, { [mk.PQ]: null != f }),
        children: (0, i.jsx)("div", { className: u()(mk.R9, { [mk.Vg]: null != f }), style: f ?? void 0, children: t }),
    });
}
var mA = n(347927);
function mS(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, i.jsxs)("div", {
        className: u()(mA.Bf, l && mA.Qx),
        children: [
            (0, i.jsxs)("div", {
                className: mA.Ux,
                children: [
                    (0, i.jsx)(p.D, { variant: "heading-sm/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, i.jsx)(x.E, { variant: "body-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var mC = n(957272);
function mI(e) {
    let [t, n] = a.useState(0);
    function l() {
        n((e) => e + 1);
    }
    return !0 === e.screenExpected ? (0, i.jsx)(mN, { ...e, onRetry: l }, t) : (0, i.jsx)(mE, { ...e, onRetry: l }, t);
}
function mN(e) {
    let { applicationId: t, surface: n, launch: l, onRetry: r } = e,
        s = (0, tf.VA)(t, n),
        o = null != (0, mp.A)(s),
        { data: u, isLoading: c } = (0, tr.YY)(t),
        d = null != u && !(0, mh.D)(u),
        f = d || (null == u && c),
        [m, h] = a.useState(!1),
        [g, p] = a.useState(!1),
        x = a.useCallback(async () => {
            p(!0);
            try {
                await (0, ti.$N)(t);
            } catch {}
            p(!1);
        }, [t]),
        v = a.useRef({ surface: n, launch: l });
    return (a.useLayoutEffect(() => {
        v.current = { surface: n, launch: l };
    }),
    a.useEffect(() => {
        if (f || null != f9.A.getFrame(s)) return;
        let e = !1;
        return (
            !(async function () {
                try {
                    await to.A.launchFrame({ applicationId: t, ...v.current, showErrorModal: !1 });
                } catch {
                    e || h(!0);
                }
            })(),
            () => {
                e = !0;
            }
        );
    }, [t, s, f]),
    o)
        ? (0, i.jsx)(mE, { ...e })
        : d
          ? (0, i.jsx)(m_, { state: mv.n.Error, onRetry: x, retrying: g })
          : (0, i.jsx)(m_, { state: m ? mv.n.Error : mv.n.Loading, onRetry: r });
}
function mE(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r, screenExpected: s = !1, onRetry: o } = e,
        { frame: u, state: c } = (0, mv.A)({ applicationId: t, surface: n, launch: l }),
        [d, f] = a.useState(!1),
        m = a.useCallback(async () => {
            f(!0);
            try {
                await (0, ti.$N)(t);
            } catch {}
            f(!1);
        }, [t]);
    if (((0, mb.A)(t, n), c === mv.n.Launched)) {
        let e = (0, i.jsx)(mx.A, { frameId: u.id, level: mg.A.WithinAppContent, className: mC.Z7, overlay: r });
        return (0, td.Q5)(n) ? (0, i.jsx)(mw, { children: e }) : e;
    }
    return s && c === mv.n.DoesNotSupportSurface
        ? (0, i.jsx)(m_, { state: mv.n.Error, onRetry: m, retrying: d })
        : (0, i.jsx)(m_, { state: c, onRetry: o });
}
function m_(e) {
    let { state: t, onRetry: n, retrying: l = !1 } = e;
    switch (t) {
        case mv.n.RenderingElsewhere:
            return (0, i.jsx)("div", {
                className: mC.qs,
                children: (0, i.jsx)(mS, {
                    title: ej.intl.string(eb.default["9kpdo7"]),
                    body: ej.intl.string(eb.default.iIA8Nj),
                }),
            });
        case mv.n.NoApplication:
            return (0, i.jsx)(mr, { className: mC.qs });
        case mv.n.DoesNotSupportSurface:
            return (0, i.jsx)("div", {
                className: mC.qs,
                children: (0, i.jsx)(mS, {
                    title: ej.intl.string(eb.default["7k4GyN"]),
                    body: ej.intl.string(eb.default.zdIy3R),
                }),
            });
        case mv.n.Error:
            return (0, i.jsxs)("div", {
                className: mC.qs,
                children: [
                    (0, i.jsx)(p.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: ej.intl.string(eb.default.lTPbnG),
                    }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: mC.tj,
                        children: ej.intl.string(eb.default.e6GiAZ),
                    }),
                    (0, i.jsx)("div", {
                        className: mC.pb,
                        children: (0, i.jsx)(f.$, {
                            size: "sm",
                            variant: "secondary",
                            text: ej.intl.string(eb.default["WFJ/vb"]),
                            onClick: n,
                            loading: l,
                        }),
                    }),
                ],
            });
        case mv.n.AwaitingLaunch:
        case mv.n.Loading:
            return (0, i.jsx)("div", { className: mC.qs, children: (0, i.jsx)(v.y, {}) });
    }
}
var mM = n(308528),
    mP = n(334738),
    mR = n(5206),
    mT = n(365971),
    mL = n(703462);
function m$(e) {
    let { message: t } = e;
    return (0, i.jsxs)("div", {
        className: mL.f,
        children: [
            (0, i.jsx)(e0.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function mD() {
    return (0, i.jsx)("div", { className: mL.f, children: (0, i.jsx)(v.y, {}) });
}
function mq(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, o] = a.useState(null),
        u = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([ll.A], () => (null != u ? ll.A.getChannel(u) : null), [u]);
    ((t = d?.id ?? null),
        a.useEffect(() => {
            null != t && mM.A.preload(ls.ME, t);
        }, [t]),
        (n = (0, c.bG)([u9.A], () => u9.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, mT.Xg)();
            return (
                (0, mP.yl)(t, e),
                () => {
                    (0, mP.dm)(t, e);
                }
            );
        }, [t, n]));
    let [f, m] = a.useState(null),
        h = f === r;
    return (a.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, eq.CN)(l).then(
                (t) => {
                    e || o({ previewApplicationId: r, channelId: t });
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
        ? (0, i.jsx)(m$, { message: ej.intl.string(eb.default["VP/O8s"]) })
        : null == d
          ? (0, i.jsx)(mD, {})
          : (0, i.jsx)("div", {
                className: mL.g,
                children: (0, i.jsx)(mR.A, { channel: d, guild: null, chatInputType: oD.oU.SIDEBAR }, d.id),
            });
}
var mF = n(765671),
    mO = n(596977),
    mG = n(921853),
    mz = n(582063);
function mU(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        a = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(a + e + r.length) % r.length];
        (0, eq.vX)(t, n?.id ?? null);
    }
    let o = ej.intl.string(eb.default.Gl3XtE),
        u = ej.intl.string(eb.default["3FvcrY"]);
    return (0, i.jsxs)("div", {
        className: mz.aF,
        children: [
            (0, i.jsx)(d.m, {
                text: o,
                position: "top",
                children: (0, i.jsx)(tZ.K, {
                    icon: mG.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(-1),
                }),
            }),
            (0, i.jsx)("div", {
                className: mz.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, i.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: ej.intl.formatToPlainString(eb.default["140n5k"], {
                                  name: l.name,
                                  index: a + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, i.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: ej.intl.string(eb.default.wVJL0P),
                          }),
            }),
            (0, i.jsx)(d.m, {
                text: u,
                position: "top",
                children: (0, i.jsx)(tZ.K, {
                    icon: nD.ChevronSmallRightIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var mB = n(666476);
let mK = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function mW() {
    (0, ep.P0)({ text: ej.intl.string(eb.default.jj3abP), variant: "critical" });
}
function mH(e) {
    let { projectId: t } = e,
        n = a.useRef(null),
        l = a.useRef(null),
        r = ej.intl.string(eb.default["xd/1IW"]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(tC.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(mV, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, i.jsx)("div", {
                        ref: n,
                        className: mz.m2,
                        children: (0, i.jsx)(d.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, i.jsx)(tZ.K, {
                                "aria-label": r,
                                icon: m.SettingsIcon,
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
                accept: mK.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mK.includes(n.type)
                                ? n.size > mB.aI
                                    ? (0, ep.P0)({ text: ej.intl.string(eb.default.T8Spiu), variant: "critical" })
                                    : (0, iE.M$)(t, n).catch(mW)
                                : (0, ep.P0)({ text: ej.intl.string(eb.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function mV(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([iN.A], () => iN.A.getBackground(t)),
        a = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, i.jsxs)(ty.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": ej.intl.string(eb.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, i.jsxs)(tk.rX, {
                children: [
                    (0, i.jsx)(tk.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: ej.intl.string(eb.default.uQpDky),
                        icon: l8.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, i.jsx)(tk.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: ej.intl.string(eb.default.AiAz8J),
                        icon: fl.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, iE.Og)(t).catch(mW));
                        },
                    }),
                ],
            }),
            (0, i.jsx)(tk.rX, {
                children: (0, i.jsx)(tk.fP, {
                    id: "conjure-overlay-background-blur",
                    label: ej.intl.string(eb.default["hyN+kc"]),
                    checked: a,
                    action: () => {
                        (0, iE.Y1)(t, !a) || mW();
                    },
                }),
            }),
        ],
    });
}
function mX(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: o, height: u } = (0, mF.Ay)(),
        { captures: c, selected: d } = iI(n),
        f = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: eU({ width: l - 48, height: r - 48 }, n) };
            let i = t.width / t.height,
                a = Math.min(l, r * i),
                s = a / 1920,
                o = eU({ width: 1872, height: 1920 / i - 48 }, n);
            return { top: (r - a / i) / 2 + 24 * s, end: (l - a) / 2 + 24 * s, scale: o * s };
        })({ width: o, height: u }, d, l);
    return (
        a.useEffect(() => (0, mO.L0)(), []),
        (0, i.jsxs)("div", {
            className: mz.JH,
            children: [
                (0, i.jsx)(iM, { projectId: n, gameCaptures: !0 }),
                (0, i.jsx)("div", {
                    ref: s,
                    className: mz.dw,
                    children: (0, i.jsx)("div", {
                        className: mz.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${f.top}px`,
                            "--custom-conjure-overlay-widget-end": `${f.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(f.scale),
                        },
                        children: (0, i.jsx)(mI, { applicationId: t, surface: td.p$, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, i.jsx)(mH, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, i.jsx)(mU, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
var mY = n(825484);
function mZ(e) {
    let { onAddBot: t, loading: n = !1, agentPrompt: l } = e,
        r = (0, i.jsx)(f.$, {
            size: "sm",
            variant: "primary",
            text: ej.intl.string(eb.default.RGeB11),
            onClick: t,
            loading: n,
        });
    return null == l
        ? (0, i.jsx)(mS, {
              title: ej.intl.string(eb.default.xlEjZ8),
              body: ej.intl.string(eb.default["4ByPbd"]),
              children: r,
          })
        : (0, i.jsx)(mS, {
              title: ej.intl.string(eb.default.sRzJdk),
              body: ej.intl.formatToPlainString(eb.default.cbU1iq, { reason: l.reason }),
              children: (0, i.jsxs)(mY.e, {
                  size: "sm",
                  children: [
                      r,
                      (0, i.jsx)(f.$, {
                          size: "sm",
                          variant: "secondary",
                          text: ej.intl.string(eb.default.Vmb0K4),
                          onClick: l.onSkip,
                          disabled: n,
                      }),
                  ],
              }),
          });
}
var mJ = n(409478),
    mQ = n(652227);
function m0(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            frameLaunchParams: r,
            previewReady: a,
            previewGate: s,
            availability: o,
            activeMode: d,
            widgetApplicationId: f,
            overlayWidgetSize: m = eG,
            projectId: h,
            renderFrameOverlay: g,
            paused: p = !1,
            onResume: b,
        } = e,
        j = (0, c.bG)([rk.A], () => null != h && null != rk.A.getSetupStartedAt(h), [h]),
        y = (0, sF.ss)(h),
        k = "settling" === y;
    return s?.type === "checking"
        ? (0, i.jsx)("div", { className: mQ.qs, children: (0, i.jsx)(v.y, {}) })
        : s?.type !== "bot_install" || (k && null == s.agentPrompt)
          ? a
              ? null == t
                  ? null
                  : k
                    ? (0, i.jsxs)("div", {
                          className: u()(mQ.qs, mQ.Lk),
                          role: "status",
                          children: [
                              (0, i.jsx)(v.y, {}),
                              (0, i.jsx)(x.E, {
                                  variant: "body-md/normal",
                                  color: "text-subtle",
                                  children: ej.intl.string(eb.default["+1Em5x"]),
                              }),
                          ],
                      })
                    : (0, i.jsxs)("div", {
                          "data-conjure-entrance": !0,
                          className: mQ.RG,
                          children: [
                              (0, eW.yf)(o, d)
                                  ? p
                                      ? (0, i.jsx)(m1, { projectId: h, onResume: b })
                                      : (0, i.jsx)(mI, {
                                            applicationId: t,
                                            surface: l,
                                            launch: r,
                                            frameOverlay: g?.(l),
                                            screenExpected: "settled" === y && o.modes.includes("frame"),
                                        })
                                  : null,
                              "widget" === d && null != f
                                  ? "unavailable-authorization-revoked" === o.profileState
                                      ? (0, i.jsx)("div", {
                                            className: mQ.qs,
                                            children: (0, i.jsx)(mS, {
                                                wide: !0,
                                                title: ej.intl.string(eb.default["08U+YO"]),
                                                body: ej.intl.string(eb.default.pKBfrc),
                                            }),
                                        })
                                      : (0, i.jsx)(mJ.A, { applicationId: f })
                                  : null,
                              "overlay" === d && o.modes.includes("overlay")
                                  ? (0, i.jsx)(mX, {
                                        applicationId: t,
                                        projectId: h,
                                        size: m,
                                        frameOverlay: g?.(tf.ZN),
                                    })
                                  : null,
                              "bot" === d && null != n && null != h
                                  ? (0, i.jsx)(mq, { projectId: h, previewApplicationId: n })
                                  : null,
                          ],
                      })
              : j
                ? (0, i.jsx)("div", { className: mQ.qs, children: (0, i.jsx)(v.y, {}) })
                : (0, i.jsx)(mr, { className: mQ.qs })
          : (0, i.jsx)("div", {
                className: mQ.qs,
                children: (0, i.jsx)(mZ, { onAddBot: s.onAddBot, loading: s.loading, agentPrompt: s.agentPrompt }),
            });
}
function m1(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mm.Pu)(t),
        (0, i.jsx)("div", {
            className: mQ.qs,
            children: (0, i.jsx)(mS, {
                wide: !0,
                title: ej.intl.string(eb.default.MMWEH2),
                body: ej.intl.string(eb.default.iKSu55),
                children:
                    null != n
                        ? (0, i.jsx)(f.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mf.PlayIcon,
                              text: ej.intl.string(eb.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var m2 = n(175841),
    m3 = n(156548),
    m4 = n(750506),
    m5 = n(867193),
    m7 = n(539197),
    m8 = n(977020);
function m6(e) {
    let { projectId: t } = e,
        n = (0, m7.X2)(t),
        l = (function (e) {
            let [t, n] = a.useState(null);
            return (
                a.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, m7.Ie)(e);
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
    let { left: r, top: s, width: o, height: c, scale: d } = l;
    function f(e, t) {
        return { "--custom-conjure-cursor-x": `${e * d}px`, "--custom-conjure-cursor-y": `${t * d}px` };
    }
    return (0, i.jsxs)("div", {
        className: m8.$Q,
        style: { left: r, top: s, width: o, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [m7.t$]: "",
        children: [
            n.presses > 0
                ? (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)("div", { className: u()(m8.hN, m8.vW), style: f(n.pressX, n.pressY) }),
                              (0, i.jsx)("div", { className: u()(m8.hN, m8.A7), style: f(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, i.jsx)("svg", {
                className: u()(m8.UE, { [m8.SP]: n.shown, [m8.Vq]: n.pressed, [m8.GP]: n.dipping }),
                style: f(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, i.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var m9 = n(417760);
function he(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([rC.A], () => null != e && rC.A.isThinking(e)),
                [n, l] = a.useState(!1),
                [r, i] = a.useState(t);
            (t !== r && (i(t), t || l(!1)),
                a.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = a.useCallback(() => {
                null != e && (l(!0), (0, ey.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        o = (0, eC.CU)(n),
        d = "controlling" === t,
        m = ej.intl.string(d ? (o ? eb.default["VJW/5P"] : eb.default["+hD2Iz"]) : eb.default["h+i1r9"]),
        h =
            null != r
                ? (0, i.jsx)(f.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ej.intl.string(eb.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, i.jsxs)("div", {
              className: u()(m9.M0, m9.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, i.jsx)(cQ.i, { size: 12, color: "currentColor" })
                      : (0, i.jsx)(m2.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, i.jsx)(x.E, { variant: "body-sm/semibold", color: "none", className: m9.ID, children: m }),
                  d ? (0, i.jsx)(nL.A, { children: ej.intl.string(eb.default.fg1sor) }) : null,
                  d ? (0, i.jsx)("div", { className: m9.lC, children: h }) : null,
              ],
          })
        : (0, i.jsxs)("div", {
              className: m9.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, i.jsxs)("div", {
                      className: m9.sp,
                      children: [
                          (0, i.jsx)(m2.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, i.jsx)(cQ.i, { size: 12, color: "currentColor" }) : null,
                          (0, i.jsxs)("div", {
                              className: m9.f4,
                              children: [
                                  (0, i.jsx)(x.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: m9.w9,
                                      children: m,
                                  }),
                                  d
                                      ? (0, i.jsx)(x.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: m9.Rb,
                                            children: ej.intl.string(eb.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, i.jsx)("div", { className: m9.lC, children: h }) : null,
              ],
          });
}
function ht(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, eC.Zv)(null != n && n === l ? t : null),
        u = (function (e) {
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
        })(o),
        c = (0, e_.Rv)(),
        d = (0, m3.cR)(s);
    a.useEffect(() => {
        o && d && null != s && (0, m3.BL)(s);
    }, [o, d, s]);
    let [f, m] = a.useState(null),
        [h, g] = a.useState(null),
        [p, x] = a.useState(null),
        v = "idle" !== u;
    a.useEffect(() => {
        if (!v) return;
        function e() {
            let e = tH(r());
            m((t) => (tV(t, e) ? t : e));
            let t = null == h ? null : tH(h);
            (x((e) => (tV(e, t) ? e : t)), null != h && (0, m5.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, m5.C)(0));
            }
        );
    }, [v, r, h]);
    let b = "idle" !== u && null != f,
        j = b && "controlling" === u && !c,
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
            let [e] = a.useContext(m4.uY),
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
            b
                ? (0, i.jsx)("div", {
                      ref: g,
                      className: m9.D,
                      "data-phase": u,
                      children: (0, i.jsx)("div", {
                          className: m9.QF,
                          children: (0, i.jsx)(he, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, tq.createPortal)(
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(nL.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? ej.intl.string(eb.default.oWcemF)
                                : "handoff" === u
                                  ? ej.intl.string(eb.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            j
                ? (0, tq.createPortal)(
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: m9.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", {
                                  className: m9.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)(m6, { projectId: t }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var hn = n(399503),
    hl = n(853555),
    hr = n(944100),
    hi = n(327152),
    ha = n(187645);
let hs = { width: 1280, height: 720 },
    ho = new Map(),
    hu = !1;
function hc() {
    let e = new Map();
    for (let t of new Set([...rC.A.getActivityOrderedProjectIds(), ...(0, eC.T7)()])) {
        if (!(rC.A.isThinking(t) || (0, eC.wK)(t)) || eF.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = ts.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, td.Rc)(t), (0, td.Th)(t)].find(tf.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...ho]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            ho.delete(t),
            n.unregisterLookup(),
            hr.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, hi.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        ho.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = ha.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    hd(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (ho.set(e, l),
                    (l.unregisterLookup = (0, hl.Ng)(e, () => (0, mi.n5)(n, t))),
                    hr.A.registerFrameTarget(t, n, mg.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of ho) hd(t.element, e, t.frameId);
}
function hd(e, t, n) {
    if (f9.A.getFrame(n)?.surface.type === eH.U.OVERLAY) {
        let l = eB(ts.Ay.getProject(t));
        (e.classList.remove(ha.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, hi.Pn)(n, l));
        return;
    }
    let l = tc.A.isBuilderPreviewMobile();
    e.classList.toggle(ha.L, !l);
    let r = l ? my(tc.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, hi.Pn)(n, r ?? hs));
}
var hf = n(873727),
    hm = n(47671),
    hh = n(418842),
    hg = n(413599);
let hp = 0;
var hx = n(487887);
let hv = null;
var hb = n(780338),
    hj = n(782603),
    hy = n(189714);
function hk(e) {
    let { projectId: t } = e,
        n = (0, hy.iI)(t),
        l = a.useRef(null),
        r = ej.intl.string(ej.t.h850Ss);
    return (0, i.jsx)(tC.Y, {
        targetElementRef: l,
        animation: tC.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(ty.W, {
                "data-menu-migrated": !0,
                navId: `conjure-project-notifications-${t}`,
                "aria-label": r,
                onClose: l,
                onSelect: l,
                children: (0, i.jsx)(tk.rX, {
                    children: (0, i.jsx)(tk.Dr, {
                        id: n ? "unmute" : "mute",
                        label: ej.intl.string(n ? eb.default.s9rCuH : eb.default["a+i/As"]),
                        action: () => (0, hy.$L)(t, !n),
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { onClick: a } = e,
                { isShown: s } = t;
            return (0, i.jsx)(t$.Ay.Icon, {
                ref: l,
                onClick: a,
                tooltip: s ? null : r,
                icon: n ? hb.BellSlashIcon : hj.BellIcon,
                "aria-label": r,
                "aria-haspopup": "menu",
                "aria-expanded": s,
                selected: s,
            });
        },
    });
}
var hw = n(541940);
function hA(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            mainClassName: o,
            header: d,
            controlBar: f,
            previewPanelId: m,
            previewPanelLabelledBy: h,
            content: g,
            sidebar: p,
            showsFrame: x,
            paused: v,
        } = e,
        [b, j] = a.useState(null),
        y = (0, tu.A)(l, s),
        k = y?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([hg.A], () => (0, hf.x4)(hg.A.theme)),
            l = (0, c.bG)([hm.A], () => hm.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, c.cf)([af.Ay], () => ({
                reducedMotion: af.Ay.useReducedMotion,
                fontScale: (0, hf.U0)(),
                highContrast: af.Ay.isHighContrastModeEnabled,
                forcedColors: af.Ay.useForcedColors,
                underlineLinks: af.Ay.alwaysShowLinkDecorations,
            })),
            d = me.hH.useSetting(),
            f = (0, c.bG)([oM.A], () => oM.A.hidePersonalInformation),
            m = (0, hh.C)(),
            h = (0, c.bG)(
                [f9.A, tc.A],
                () =>
                    tc.A.isBuilderPreviewMobile() &&
                    f9.A.getFrame(t)?.applicationId === tc.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            g = a.useRef(!1),
            p = a.useRef(!1),
            x = a.useRef(null),
            v = a.useCallback(() => {
                let l = (0, mi.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let a = {
                    revision: ++hp,
                    baseTheme: n,
                    customTheme: (0, hf.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                    formFactor: h,
                    hidePersonalInformation: f,
                };
                (0, fW.W)(l, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, i, h, t, f, s, d, e, r, m, u]),
            b = a.useRef(v);
        a.useLayoutEffect(() => {
            b.current = v;
        });
        let j = a.useCallback(() => {
            g.current ||
                ((g.current = !0),
                queueMicrotask(() => {
                    ((g.current = !1), p.current || b.current());
                }));
        }, []);
        (a.useEffect(
            () => (
                (p.current = !1),
                () => {
                    p.current = !0;
                }
            ),
            [],
        ),
            a.useEffect(() => {
                j();
            }, [l, j]),
            a.useLayoutEffect(() => {
                (v(), j());
            }, [j, v]),
            a.useLayoutEffect(() => {
                let n = (0, mi.n5)(e, t);
                null != n && n !== x.current && j();
            }),
            a.useEffect(() => {
                function n(n) {
                    n.target === (0, mi.n5)(e, t) && ((x.current = null), j());
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
    })(b, k),
        a.useEffect(() => {
            if (null != t) return (0, hl.Ng)(t, () => (0, mi.n5)(b, k));
        }, [t, b, k]));
    let w = a.useCallback(() => (0, mi.ow)(b, k), [b, k]),
        A = a.useCallback(() => (x ? (0, mi.ow)(b, k) : b), [x, b, k]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: u()(hw.Mh, o),
                children: [
                    d,
                    f,
                    v
                        ? null
                        : (0, i.jsx)(ht, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: A,
                              frameId: k,
                          }),
                    (0, i.jsx)("div", {
                        ref: j,
                        id: m,
                        role: null == m ? void 0 : "tabpanel",
                        "aria-labelledby": h,
                        className: hw.fm,
                        children: g,
                    }),
                ],
            }),
            p,
            v
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f0, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: w,
                              toggleRef: n,
                          }),
                          (0, i.jsx)(ny, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: w }),
                      ],
                  }),
        ],
    });
}
function hS(e) {
    let t,
        {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: o,
            frameLaunchParams: d,
            header: f,
            controlBar: m,
            previewPanelId: h,
            previewPanelLabelledBy: g,
            chatOpen: p,
            onCloseChat: x,
            onRestoreVersion: v,
            onImportProject: b,
            debugOpen: j = !1,
            onCloseDebug: y,
            restoreState: k,
            previewReady: w,
            previewGate: A,
            availability: S,
            activeMode: C,
            widgetApplicationId: I,
            overlayWidgetSize: N,
            previewPaused: E = !1,
            onResumePreview: _,
        } = e;
    (0, hn.k)(n, I);
    let M = o.type === eH.U.MAIN || (0, td.Q5)(o);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([tc.A], () => ({
            mobile: tc.A.isBuilderPreviewMobile(),
            landscape: tc.A.isBuilderPreviewLandscape(),
        }));
        a.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? hx.aX.LANDSCAPE : hx.aX.PORTRAIT), (hv = e));
                else {
                    if (hv !== e) return;
                    ((l = hx.aX.UNHANDLED), (hv = null));
                }
                uV.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? r : null);
    let P = a.useRef(null),
        [R, T] = a.useState(0);
    (a.useEffect(() => {
        if (null == n) return;
        (0, nw.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, nw.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = a.useRef(0)),
        a.useLayoutEffect(() => {
            M && ((t.current = ++md), (0, eq.HV)(r));
        }, [r, M]),
        a.useEffect(() => {
            if (!M) return;
            let e = t.current;
            return () => {
                e === md && (0, eq.HV)(null);
            };
        }, [r, M]),
        a.useEffect(() => {
            null != n &&
                ((0, ey.ensureConnection)(n),
                hu ||
                    ((hu = !0),
                    rC.A.addChangeListener(hc),
                    ts.Ay.addChangeListener(hc),
                    f9.A.addChangeListener(hc),
                    tc.A.addChangeListener(hc),
                    eF.A.addChangeListener(hc),
                    (0, eC.W3)(hc),
                    hc()));
        }, [n]),
        a.useLayoutEffect(() => {
            let e = P.current;
            if (null == e) return;
            function t() {
                null != e && T(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let L = Math.max(450, R - 320),
        $ = (0, tD.P)({ maxWidth: L, minWidth: 450 }),
        D = p || M;
    return (0, i.jsx)("div", {
        className: hw.cL,
        children: (0, i.jsx)("div", {
            ref: P,
            className: hw.LB,
            children: (0, i.jsx)(hA, {
                projectId: n,
                designFeedbackToggleRef: l,
                applicationId: r,
                previewApplicationId: s,
                surface: o,
                header: f,
                controlBar: m,
                previewPanelId: h,
                previewPanelLabelledBy: g,
                showsFrame: (0, eW.yf)(S, C),
                paused: E,
                mainClassName: null == f ? void 0 : u()(hw.ez, { [hw.zt]: p }),
                content: (0, i.jsx)(m0, {
                    applicationId: r,
                    previewApplicationId: s,
                    surface: o,
                    frameLaunchParams: d,
                    previewReady: w,
                    previewGate: A,
                    availability: S,
                    activeMode: C,
                    widgetApplicationId: I,
                    overlayWidgetSize: N,
                    projectId: n,
                    paused: E,
                    onResume: _,
                    renderFrameOverlay: (e) =>
                        (0, i.jsx)(mc, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
                }),
                sidebar:
                    null != n && D
                        ? (0, i.jsx)("div", {
                              className: p ? u()(hw.v7, { [hw.z4]: $, [hw.iu]: $ && null != m }) : hw.LL,
                              children: (0, i.jsx)(tL.A, {
                                  sidebarType: tL.X.CallChatSidebar,
                                  maxWidth: L,
                                  capturePointer: !0,
                                  children: (0, i.jsx)("div", {
                                      className: hw.cO,
                                      children: j
                                          ? (0, i.jsx)(fO, { projectId: n, onClose: y ?? (() => {}) }, n)
                                          : (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(f6.Ay, { projectId: n }),
                                                    (0, i.jsx)(hC, { projectId: n, onClose: x }),
                                                    (0, i.jsx)("div", {
                                                        className: hw.cb,
                                                        children: (0, i.jsx)(
                                                            dp,
                                                            {
                                                                projectId: n,
                                                                restoreState: k,
                                                                onRestoreVersion: v,
                                                                onImportProject: b,
                                                                escapeScopeRef: P,
                                                                visible: p,
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
        }),
    });
}
function hC(e) {
    let { projectId: t, onClose: n } = e,
        l = ej.intl.string(eb.default.vLoFRs),
        r = ej.intl.string(eb.default.JD6Oit);
    return (0, i.jsx)(t$.Ay, {
        "aria-label": l,
        toolbar: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(hk, { projectId: t }),
                (0, i.jsx)(t$.Ay.Icon, { icon: tT.PanelClosedIcon, tooltip: r, "aria-label": r, onClick: n }),
            ],
        }),
        children: (0, i.jsx)(t$.Ay.Title, { children: l }),
    });
}
var hI = n(473935),
    hN = n(785389),
    hE = n(889558),
    h_ = n(860402);
let hM = new Set();
var hP = n(127139),
    hR = n(256616),
    hT = n(719588),
    hL = n(273569);
function h$(e) {
    (0, ep.P0)({ text: e, variant: "critical" });
}
function hD(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            isOwner: r,
            onExport: s,
            onHistory: o,
            onConnectTool: u,
            onToggleDebug: d,
            debugOpen: f,
            onCloseMenu: m,
        } = e,
        h = (0, hT.A)(t, n),
        g = (0, sD.CU)(t),
        p = (0, tp.UC)(t),
        { pending: x, connect: v } = (function (e, t) {
            let [n, l] = a.useState(hM),
                r = a.useRef(hM),
                i = a.useCallback((e) => {
                    ((r.current = (0, hN.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: a.useCallback(
                    (n) => {
                        if (null == e) return;
                        let a = (0, hN.K9)(r.current, n.type);
                        null != a &&
                            ((r.current = a),
                            l(a),
                            (async function () {
                                let l = await (0, h_.JI)(e, n.type);
                                (i(n.type), "url" === l.type)
                                    ? (0, hE.h)({ href: l.url, trusted: !1 })
                                    : t(
                                          "setup" === (0, hN.rq)(l.error)
                                              ? ej.intl.string(eb.default["jCQ/1B"])
                                              : ej.intl.string(eb.default.POxkSh),
                                      );
                            })().catch(() => i(n.type)));
                    },
                    [t, e, i],
                ),
            };
        })(t, h$),
        b = (0, c.bG)([rS.A], () => rS.A.getDeclaredConnections(t), [t]),
        j = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                i = [];
            for (let { connection: e, offer: a } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: ej.intl.string(eb.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: ej.intl.formatToPlainString(eb.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: ej.intl.formatToPlainString(eb.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: !1, refreshPending: !1, offers: a.useMemo(() => (0, hN.Xl)(b), [b]), connectPending: x }),
        y = a.useMemo(() => new Map(b.map((e) => [e.type, e])), [b]);
    return (0, i.jsxs)(ty.W, {
        "data-menu-migrated": !0,
        navId: `conjure-editor-actions-${t}`,
        "aria-label": ej.intl.string(ej.t.ogxXGq),
        onClose: m,
        onSelect: m,
        children: [
            (0, i.jsxs)(tk.rX, {
                children: [
                    r
                        ? (0, i.jsx)(tk.Dr, {
                              id: "move",
                              label: ej.intl.string(eb.default.J9OF2X),
                              action: () => (0, hL.A)(t, l),
                          })
                        : null,
                    (0, i.jsx)(tk.Dr, { id: "export", label: ej.intl.string(eb.default.WsEEP7), action: s }),
                    (0, i.jsx)(tk.Dr, { id: "history", label: ej.intl.string(eb.default["3hIVou"]), action: o }),
                ],
            }),
            cu.p5 || null != d
                ? (0, i.jsxs)(tk.rX, {
                      children: [
                          cu.p5
                              ? (0, i.jsx)(tk.Dr, {
                                    id: "copy-link",
                                    label: ej.intl.string(ej.t.WqhZss),
                                    icon: l6.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: l6.LinkIcon },
                                    action: () => (0, hP.V)(l, t),
                                })
                              : null,
                          cu.p5
                              ? (0, i.jsx)(tk.Dr, {
                                    id: "copy-project-id",
                                    label: ej.intl.string(eb.default["nm/zuU"]),
                                    icon: hI.IdIcon,
                                    leadingAccessory: { type: "icon", icon: hI.IdIcon },
                                    action: () => (0, hP.o)(t),
                                })
                              : null,
                          null != d
                              ? (0, i.jsx)(tk.sL, {
                                    id: "debug",
                                    label: ej.intl.string(eb.default.Mt5k9d),
                                    leftIcon: co.BugIcon,
                                    leadingAccessory: { type: "icon", icon: co.BugIcon },
                                    checked: f,
                                    action: d,
                                })
                              : null,
                      ],
                  })
                : null,
            null != u || j.length > 0
                ? (0, i.jsxs)(tk.rX, {
                      children: [
                          null != u
                              ? (0, i.jsx)(tk.Dr, {
                                    id: "connect-tool",
                                    label: ej.intl.string(eb.default.yOIql5),
                                    action: u,
                                })
                              : null,
                          j.map((e) =>
                              (0, i.jsx)(
                                  tk.Dr,
                                  {
                                      id: e.id,
                                      label: e.label,
                                      disabled: e.disabled,
                                      dontCloseOnAction: !0,
                                      action: () => {
                                          let t = null == e.connectionType ? null : y.get(e.connectionType);
                                          null != t && v(t);
                                      },
                                  },
                                  e.id,
                              ),
                          ),
                      ],
                  })
                : null,
            r
                ? (0, i.jsxs)(tk.rX, {
                      children: [
                          g
                              ? (0, i.jsx)(tk.Dr, {
                                    id: "unpublish",
                                    label: ej.intl.string(eb.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        let e = ts.Ay.getProject(t);
                                        null != e && (0, hR.A)({ project: e });
                                    },
                                })
                              : null,
                          (0, i.jsx)(tk.Dr, {
                              id: "delete",
                              label: ej.intl.string(ej.t.oyYWHE),
                              color: "danger",
                              action: h,
                          }),
                      ],
                  })
                : null,
            null != p
                ? (0, i.jsx)(tk.rX, {
                      children: (0, i.jsx)(tk.Dr, {
                          id: "unpublish-from-server",
                          label: ej.intl.string(eb.default.mS61Dm),
                          color: "danger",
                          action: () => {
                              let e = ts.Ay.getProject(t);
                              null != e && (0, tA.A)({ project: e, target: p, action: "remove" });
                          },
                      }),
                  })
                : null,
        ],
    });
}
function hq(e) {
    let t = a.useRef(null),
        n = ej.intl.string(ej.t["UKOtz+"]);
    return (0, i.jsx)(tC.Y, {
        targetElementRef: t,
        position: "bottom",
        align: "right",
        animation: tC.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, i.jsx)(hD, { ...e, onCloseMenu: n });
        },
        children: (e, l) => {
            let { onClick: r } = e,
                { isShown: a } = l;
            return (0, i.jsx)(j.A.Icon, {
                ref: t,
                icon: aL.MoreHorizontalIcon,
                tooltip: a ? null : n,
                "aria-label": n,
                "aria-haspopup": "menu",
                "aria-expanded": a,
                selected: a,
                onClick: r,
            });
        },
    });
}
var hF = n(663417),
    hO = n(646270),
    hG = n(31300),
    hz = n(831453),
    hU = n(872344),
    hB = n(64656),
    hK = n(766367),
    hW = n(113494),
    hH = n(86147),
    hV = n(729475),
    hX = n(12470),
    hY = n(811893),
    hZ = n(387758),
    hJ = n(715482),
    hQ = n(429582),
    h0 = n(869146),
    h1 = n(475815);
function h2(e) {
    let {
            projectId: t,
            previewPaused: n,
            pauseDisabled: l,
            onTogglePreviewPaused: r,
            drawing: a,
            fullscreenFrame: s,
            onTogglePopout: o,
            poppedOut: u,
            onCloseMenu: d,
        } = e,
        f = (function (e, t) {
            let n = (0, m3.cR)(e?.id ?? null),
                l = (0, eC.Zv)(t),
                r = (0, c.bG)(
                    [h0.A, f9.A],
                    () => null != e && h0.A.getWindowOpen(ls.MLl.ACTIVITY_POPOUT) && f9.A.getMainFrame()?.id === e.id,
                    [e],
                );
            if (!(0, tf.x1)(e) || r || l) return null;
            let i = (0, m3.fl)(e.id);
            return null != i && (0, h1.Ub)(i) ? { active: n, toggle: () => (0, m3.U8)(e.id) } : null;
        })(s, t),
        m = n ? mf.PlayIcon : hW.PauseIcon,
        h = f?.active === !0 ? hH.FullscreenExitIcon : hV.FullscreenEnterIcon,
        g = u ? hX.WindowReturnIcon : hY.WindowLaunchIcon,
        p = ej.intl.string(eb.default.WjdaFw),
        x = (0, hl.UJ)(t),
        v = null != x ? (0, hQ.FO)(x) : null;
    return (0, i.jsx)(ty.W, {
        "data-menu-migrated": !0,
        navId: `conjure-frame-actions-${t}`,
        "aria-label": ej.intl.string(ej.t.ogxXGq),
        onClose: d,
        onSelect: d,
        children: (0, i.jsxs)(tk.rX, {
            children: [
                (0, i.jsx)(tk.Dr, {
                    id: "toggle-pause",
                    icon: m,
                    leadingAccessory: { type: "icon", icon: m },
                    label: ej.intl.string(n ? eb.default.ZKd2Cw : eb.default.VHxerm),
                    subtext: a ? p : void 0,
                    disabled: l || a,
                    action: r,
                }),
                null != f
                    ? (0, i.jsx)(tk.Dr, {
                          id: "toggle-fullscreen",
                          icon: h,
                          leadingAccessory: { type: "icon", icon: h },
                          label: ej.intl.string(f.active ? ej.t.Z7MyNB : ej.t.OIDkcp),
                          action: f.toggle,
                      })
                    : null,
                null != o
                    ? (0, i.jsx)(tk.Dr, {
                          id: "toggle-popout",
                          icon: g,
                          leadingAccessory: { type: "icon", icon: g },
                          label: ej.intl.string(u ? ej.t["NKV/MO"] : ej.t["3Zypbv"]),
                          subtext: a && !u ? p : void 0,
                          disabled: a && !u,
                          action: o,
                      })
                    : null,
                null != v
                    ? (0, i.jsx)(tk.Dr, {
                          id: "open-devtools",
                          icon: hZ.AngleBracketsIcon,
                          leadingAccessory: { type: "icon", icon: hZ.AngleBracketsIcon },
                          label: ej.intl.string(eb.default.gQB2mY),
                          action: v,
                      })
                    : null,
            ],
        }),
    });
}
function h3(e) {
    let t = a.useRef(null),
        n = ej.intl.string(ej.t["UKOtz+"]);
    return (0, i.jsx)(tC.Y, {
        targetElementRef: t,
        position: "bottom",
        align: "right",
        animation: tC.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, i.jsx)(h2, { ...e, onCloseMenu: n });
        },
        children: (e, l) => {
            let { onClick: r } = e,
                { isShown: a } = l;
            return (0, i.jsx)(t$.Ay.Icon, {
                ref: t,
                icon: hJ.ChevronLargeDownIcon,
                tooltip: a ? null : n,
                "aria-label": n,
                "aria-haspopup": "menu",
                "aria-expanded": a,
                selected: a,
                onClick: r,
            });
        },
    });
}
var h4 = n(705609);
function h5(e) {
    let {
            projectId: t,
            projectName: n,
            toolbar: l,
            activeMode: r,
            activeTarget: a,
            frameTarget: s,
            onCloseApp: o,
            widgetRefreshApplicationId: u,
            previewPaused: c,
            onTogglePreviewPaused: d,
            onTogglePopout: f,
            poppedOut: m,
            agentDrivingPreview: h,
            previewControlsBlocked: g,
            blockedPreviewControlLabel: p,
            previewPanelId: x,
            editToggle: v,
        } = e,
        {
            previewTargetOptions: b,
            handleSelectPreviewTarget: j,
            previewFrame: y,
            refreshFrame: k,
            isRefreshing: w,
            handleRefresh: A,
            mobilePreview: S,
            mobilePreviewLabel: C,
            handleToggleMobilePreview: I,
            landscapePreview: N,
            rotatePreviewLabel: E,
            handleRotatePreview: _,
        } = l,
        M = (0, hB.A)(y?.id),
        { pending: P, refresh: R } = (0, hU.A)(u),
        T = eh(t) && !c,
        L = null;
    if ("widget" === r) {
        if (null != u) {
            let e = ej.intl.string(eb.default["/nOi5n"]);
            L = (0, i.jsx)(t$.Ay.Icon, { icon: hF.RefreshIcon, tooltip: e, "aria-label": e, disabled: P, onClick: R });
        }
    } else if ((0, tf.x1)(k)) {
        let e = ej.intl.string(eb.default.FZIHQN);
        L = (0, i.jsx)(t$.Ay.Icon, { icon: hF.RefreshIcon, tooltip: e, "aria-label": e, disabled: w, onClick: A });
    }
    let $ = p(C),
        D = p(E),
        q = S ? hO.MobilePhoneIcon : hG.ScreenIcon;
    return (0, i.jsxs)("div", {
        className: h4.M,
        children: [
            (0, i.jsx)(tn, {
                targets: b,
                activeTarget: a,
                projectName: n,
                onSelect: j,
                closableTarget: M ? s : null,
                onClose: o,
                panelId: x,
            }),
            (0, i.jsxs)("div", {
                className: h4.o,
                children: [
                    v,
                    L,
                    "frame" === r
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(hK.A, { frame: y }),
                                  S
                                      ? (0, i.jsx)(t$.Ay.Icon, {
                                            icon: hz.RotateIcon,
                                            tooltip: D,
                                            "aria-label": D,
                                            selected: N,
                                            disabled: g,
                                            onClick: _,
                                        })
                                      : null,
                                  (0, i.jsx)(t$.Ay.Icon, {
                                      icon: q,
                                      tooltip: $,
                                      "aria-label": $,
                                      disabled: g,
                                      onClick: I,
                                  }),
                                  (0, i.jsx)(h3, {
                                      projectId: t,
                                      previewPaused: c,
                                      pauseDisabled: !c && h,
                                      onTogglePreviewPaused: d,
                                      drawing: T,
                                      fullscreenFrame: c ? null : y,
                                      onTogglePopout: f,
                                      poppedOut: m,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
var h7 = n(705427),
    h8 = n(606128),
    h6 = n(323140);
function h9(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: o, onBack: v, guildId: w } = e,
        A = a.useContext(eL.A),
        [S] = a.useState(() => (null != A ? eD.A.getProjectView(A) : null)),
        [C, I] = a.useState(S?.chatOpen ?? !0),
        [N, E] = a.useState(S?.debugOpen ?? !1);
    a.useEffect(() => {
        null != A && (0, e$.g7)(A, { chatOpen: C, debugOpen: N });
    }, [A, C, N]);
    let _ = a.useCallback(
            (e) => {
                null != A && (0, e$.g7)(A, { previewSelection: e });
            },
            [A],
        ),
        M = (0, eS.Qy)(),
        P = (0, eI.f)("ConjureSelectedProjectScreen"),
        R = a.useCallback(() => I(!0), []),
        T = a.useCallback(() => {
            (E(!1), I(!0));
        }, []),
        { restoreState: L, handleRestoreVersion: $ } = (function (e, t) {
            let [n, l] = a.useState(null),
                r = e?.id ?? null,
                i = a.useRef(r),
                s = a.useRef(!0),
                o = a.useRef(!1);
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
                            if (null == e || o.current) return;
                            let u = e.id;
                            function c() {
                                return s.current && i.current === u;
                            }
                            ((o.current = !0),
                                t(),
                                l({ entry: n, status: "restoring" }),
                                (0, eP.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (a &&
                                                    c() &&
                                                    (0, ep.P0)({
                                                        text: ej.intl.formatToPlainString(eb.default.Z4n6LX, {
                                                            title: (0, eM.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, eR.c)(u, r);
                                                null != e && (0, ep.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, ep.P0)({
                                                    text: ej.intl.string(eb.default["PSdo+w"]),
                                                    variant: "critical",
                                                }));
                                        },
                                    )
                                    .finally(() => {
                                        c() && (o.current = !1);
                                    }));
                        },
                        [e, t],
                    ),
                }
            );
        })(s, T),
        q = s?.id ?? null,
        O = (0, eT.bP)(),
        G = O?.blocking === !0 && O.projectId === q,
        {
            integrationStatus: z,
            isPreviewApplicationLoading: B,
            checkingIntegration: K,
            previewReady: W,
            hasFrame: H,
        } = (function (e) {
            let [t, n] = a.useState(null),
                l = e?.id ?? null,
                r = a.useRef(l),
                i = a.useRef(null);
            r.current = l;
            let s = (0, c.bG)(
                    [ts.Ay, ta.A],
                    () => (null == l ? null : (ts.Ay.getIntegrationStatus(l) ?? ta.A.getIntegrationStatus(l))),
                    [l],
                ),
                o = e?.preview_application_id ?? null,
                { isLoading: u } = (0, tr.YY)(o ?? void 0),
                d = null != l && t !== l,
                f = s?.preview_ready === !0,
                m = s?.has_activity === !0,
                h = s?.bot_permissions_changed === !0,
                g = (0, eW.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: s?.integration_installed ?? null,
                    botPermissionsChanged: h,
                });
            a.useEffect(() => {
                g &&
                    !d &&
                    null != o &&
                    (async function (e) {
                        try {
                            await (0, tr.TA)(e);
                        } catch {}
                    })(o);
            }, [h, d, g, o]);
            let p = a.useCallback(async () => {
                if (null == l || r.current !== l) return;
                i.current?.abort();
                let e = new AbortController();
                ((i.current = e), n(null));
                try {
                    await ((0, ti.CG)(l)?.catch(() => (0, ti.U1)(l, e.signal)) ?? (0, ti.U1)(l, e.signal));
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
                    isPreviewApplicationLoading: u,
                    checkingIntegration: d,
                    previewReady: f,
                    hasFrame: m,
                }
            );
        })(s),
        V =
            (0, c.bG)([tv.A], () => (null == q ? void 0 : tv.A.getPublishStatus(q)?.previewAppChannels), [q]) ??
            z?.preview_app_channels,
        X = (0, c.bG)([tv.A], () => (null == q ? void 0 : tv.A.getPublishStatus(q)?.views?.views), [q]),
        Y = (0, c.bG)([tv.A], () => (null == q ? null : (tv.A.getPublishStatus(q)?.publishState ?? null)), [q]),
        Z = (0, c.bG)(
            [ey.Ay],
            () => {
                if (null == q) return !1;
                let e = ey.Ay.getConnState(q);
                return "failed" === e || "closed" === e;
            },
            [q],
        ),
        J = (0, c.bG)([y.default], () => y.default.getCurrentUser()?.id),
        Q = (0, c.bG)([ey.Ay], () => null != q && ey.Ay.isAccessRefused(q, J), [q, J]),
        {
            availability: ee,
            activeMode: et,
            setMode: en,
            frameSurface: es,
            frameSurfaceOptions: eo,
            setFrameSurface: ef,
            appChannel: em,
            setAppChannel: ek,
            view: ew,
            setView: eG,
            frameLaunchParams: ez,
            widgetApplicationId: eU,
        } = (0, eJ.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: H,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: z?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(eO.q7.OVERLAY) === !0,
            previewAppChannels: V,
            previewViews: X,
            initialSelection: S?.previewSelection,
            onSelectionChange: _,
        }),
        eV = eB(s);
    ((0, eK.x)(q, (e) => {
        ee.modes.includes(e) && en(e);
    }),
        eA(q, () => {
            (I(!0), E(!0));
        }));
    let eX = ee.modes.includes("frame"),
        eY = (0, c.bG)([eF.A], () => eF.A.isPaused(q), [q]),
        eZ = (function (e) {
            let {
                    project: t,
                    modes: n,
                    activeMode: l,
                    frameSurface: r,
                    frameSurfaceOptions: i,
                    previewAppChannels: s,
                    previewViews: o,
                    setMode: u,
                    setFrameSurface: d,
                    setAppChannel: f,
                    setView: m,
                } = e,
                h = a.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                                l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                            return e.flatMap((e) =>
                                "frame" === e && l.length > 0
                                    ? l.map((t) => ({
                                          mode: e,
                                          surface: eH.U.APP_CHANNEL,
                                          view: { id: t.id, name: t.name },
                                      }))
                                    : "frame" === e
                                      ? t.flatMap((t) =>
                                            t === eH.U.APP_CHANNEL && n.length > 1
                                                ? n.map((n) => ({ mode: e, surface: t, appChannel: n }))
                                                : [{ mode: e, surface: t }],
                                        )
                                      : [{ mode: e }],
                            );
                        })(n, i, s, o),
                    [n, i, s, o],
                ),
                g = a.useCallback(
                    (e) => {
                        ("frame" === e.mode &&
                            (d(e.surface), null != e.appChannel && f?.(e.appChannel), null != e.view && m?.(e.view.id)),
                            u(e.mode));
                    },
                    [f, d, u, m],
                ),
                p = (0, c.bG)([tc.A], () => tc.A.isBuilderPreviewMobile()),
                x = ej.intl.string(p ? eb.default.tKGF0Q : eb.default.peqEOY),
                v = a.useCallback(() => (0, eq.GG)(!p), [p]),
                b = (0, c.bG)([tc.A], () => tc.A.isBuilderPreviewLandscape()),
                j = ej.intl.string(b ? eb.default.tunI2l : eb.default.DoNdjA),
                y = a.useCallback(() => (0, eq.Lw)(!b), [b]),
                k = (0, td.jS)(t),
                w = a.useMemo(() => (0, td.Op)(k, r), [k, r]),
                A = (0, tu.A)(t?.preview_application_id ?? null, w),
                S = (0, tu.A)(t?.preview_application_id ?? null, tf.ZN),
                C = "overlay" === l ? S : A,
                I = (0, tf.x1)(C) && C.data.proxyTicketRefreshing,
                N = a.useCallback(() => {
                    null == C || I || to.A.refreshProxyTicket(C.id);
                }, [C, I]);
            return {
                previewTargetOptions: h,
                handleSelectPreviewTarget: g,
                mobilePreview: p,
                mobilePreviewLabel: x,
                handleToggleMobilePreview: v,
                landscapePreview: b,
                rotatePreviewLabel: j,
                handleRotatePreview: y,
                previewSurface: w,
                previewFrame: A,
                refreshFrame: C,
                isRefreshing: I,
                handleRefresh: N,
            };
        })({
            project: s,
            modes: ee.modes,
            activeMode: et,
            frameSurface: es,
            frameSurfaceOptions: eo,
            previewAppChannels: V,
            previewViews: X,
            setMode: en,
            setFrameSurface: ef,
            setAppChannel: ek,
            setView: eG,
        }),
        { previewSurface: eQ, previewFrame: e0 } = eZ,
        e1 = (0, b.A)(e0),
        e2 = eX && !eY,
        e3 = eh(q),
        e4 = e1.isPoppedOut ? eb.default.pmkK8i : eY ? eb.default.Yet11p : null,
        e5 = null != e4;
    function e7(e) {
        return null == e4 ? e : ej.intl.formatToPlainString(e4, { label: e });
    }
    let e8 = a.useCallback(() => I(!1), []),
        {
            designFeedbackActive: e6,
            designFeedbackToggleRef: te,
            agentDrivingPreview: tt,
            designFeedbackLabel: tn,
            handleToggleDesignFeedback: tC,
        } = (function (e, t, n) {
            let { active: l } = U(e);
            a.useEffect(() => {
                null != e && l && !t && F(e);
            }, [e, l, t]);
            let r = a.useRef(null),
                i = (0, eC.Zv)(e),
                s = ej.intl.string(i ? eb.default.Sme0T0 : l ? eb.default.vn5Rzu : eb.default["cl/Jyl"]),
                o = a.useCallback(() => {
                    if (null != e) {
                        if (l) return void F(e);
                        (n(), D(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: i,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(q, e2 && (!e1.isPoppedOut || e3), T),
        [tI] = a.useState(() => k.isPlatformEmbedded && (0, tl.qM)());
    a.useEffect(() => {
        null != q && e3 && !e2 && ec(q);
    }, [q, e3, e2]);
    let tN = a.useCallback(() => {
            null != q &&
                (T(),
                (function (e) {
                    let t = ei(e);
                    if (null != t) {
                        t.active || ea(e, (e) => ({ ...e, active: !0, keptStill: null }));
                        return;
                    }
                    let { byProject: n } = el.getState();
                    el.setState({ byProject: { ...n, [e]: er } });
                })(q),
                ed(q, "marker"));
        }, [q, T]),
        tE = a.useCallback(() => {
            null != q && eu(q);
        }, [q]),
        t_ =
            e5 && !e3
                ? e7(ej.intl.string(eb.default["XWU+XF"]))
                : ej.intl.string(e3 ? eb.default.tuQ5f3 : tt ? eb.default.agwlrD : eb.default["XWU+XF"]),
        tM = e5 ? e7(ej.intl.string(eb.default["cl/Jyl"])) : tn,
        tT = a.useCallback(() => {
            E((e) => !e && (I(!0), !0));
        }, []),
        tL = a.useCallback(() => E(!1), []),
        t$ = a.useCallback(() => {
            null != q && (0, eq._j)(q);
        }, [q]),
        tD = a.useCallback(() => {
            null != q && (eY ? (0, eq._j)(q) : (0, eq.di)(q, e0?.id));
        }, [q, eY, e0?.id]),
        tq = a.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = e0?.id), (0, ey.Bn)(e), (0, tx.r)(t)), v());
        }, [s, e0?.id, v]),
        tF =
            ((t = (0, ev.z)(s)),
            (l = a.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, ex.vt)(e);
                    null != n
                        ? (0, ep.P0)({ text: n, variant: "critical" })
                        : (0, eg.A)({
                              title: ej.intl.formatToPlainString(eb.default["Gm+u1+"], { name: s.name }),
                              subtitle: ej.intl.string(eb.default.M7H3sJ),
                              confirmText: ej.intl.string(eb.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  R();
                                  try {
                                      await (0, ex.Hj)(t, e, ej.intl.string(eb.default.Owerd3));
                                  } catch {
                                      (0, ep.P0)({ text: ej.intl.string(eb.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, R],
            )),
            { onExport: t, onImport: (r = (0, ex.yN)(l)).open, importInput: r.input }),
        tO = a.useCallback(async () => {
            null != q && (await (0, tm.vL)(q, w));
        }, [w, q]),
        tG = (function (e, t) {
            let n = (0, c.bG)([th.A], () => (null == e ? null : th.A.getPrompt(e)), [e]),
                [l, r] = a.useState(!1),
                i = n?.id ?? null,
                s = a.useCallback(async () => {
                    if (null != e && null != i) {
                        r(!0);
                        try {
                            await (0, tm.vL)(e, t);
                        } finally {
                            r(!1);
                        }
                        (0, tg.aS)(e) && (0, tg.xy)(e, i, "added");
                    }
                }, [i, t, e]),
                o = a.useCallback(() => {
                    null != e && null != i && (0, tg.xy)(e, i, "skipped");
                }, [i, e]);
            return a.useMemo(() => (null == n ? null : { prompt: n, adding: l, onAddBot: s, onSkip: o }), [n, l, s, o]);
        })(q, w),
        tz =
            null != tG
                ? {
                      type: "bot_install",
                      onAddBot: tG.onAddBot,
                      loading: tG.adding || B,
                      agentPrompt: { reason: tG.prompt.reason, onSkip: tG.onSkip },
                  }
                : (0, eW.aN)(et, {
                        installScope: s?.install_scope ?? null,
                        previewReady: W,
                        integrationInstalled: z?.integration_installed ?? null,
                    })
                  ? { type: "bot_install", onAddBot: tO, loading: B }
                  : K && null == z
                    ? { type: "checking" }
                    : void 0,
        tU = (0, c.bG)([ts.Ay], () => null != q && ts.Ay.isProjectDeleting(q), [q]);
    a.useEffect(() => {
        ((null == s && o) || tU) && v();
    }, [s, o, tU, v]);
    let {
            publishOptions: tB,
            publish: tK,
            state: tW,
            variant: tH,
            text: tV,
            hint: tX,
            pendingChanges: tY,
        } = (0, tS.A)(q, w, K || B),
        tZ = (0, tj.A)(q, tK, tB),
        tJ = (0, tp.UC)(q),
        tQ = "frame" === et && !eY && (0, tf.x1)(e0) && (e1.isPoppedOut || e1.canPopout),
        t0 = a.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    restoreDisabled: L?.status === "restoring",
                    onRestoreVersion: (e, t) => $(e, t, !0),
                }),
                    (0, e_.mM)(async () => {
                        let { default: t } = await Promise.all([
                            n.e(323079),
                            n.e(906887),
                            n.e(420238),
                            n.e(795807),
                            n.e(231782),
                            n.e(587883),
                        ]).then(n.bind(n, 247270));
                        return (n) => (0, i.jsx)(t, { ...n, ...e });
                    }));
            }
        }, [s, L?.status, $]);
    (0, eE.z)(q, t0);
    let t1 = null == s || Q ? void 0 : () => (0, tR.A)(s.id, { guildId: w, isPreview: !0, publishOptions: tB }),
        t2 = ee.modes.includes("widget") && "unavailable-authorization-revoked" !== ee.profileState ? eU : null,
        t3 =
            null == tK || null == s
                ? null
                : (0, i.jsx)("div", {
                      className: h6.As,
                      onMouseDown:
                          null == q || tK.disabled
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, tb.dx)(q);
                                },
                      onContextMenu:
                          null == tJ
                              ? void 0
                              : (e) => {
                                    (0, tw.jA)(e, () =>
                                        (0, i.jsx)(ty.W, {
                                            "data-menu-migrated": !0,
                                            navId: `conjure-publish-actions-${s.id}`,
                                            "aria-label": ej.intl.string(ej.t.ogxXGq),
                                            onClose: tw.Z_,
                                            onSelect: tw.Z_,
                                            children: (0, i.jsx)(tk.Dr, {
                                                id: "unpublish-from-server",
                                                label: ej.intl.string(eb.default.mS61Dm),
                                                color: "danger",
                                                action: () => (0, tA.A)({ project: s, target: tJ, action: "remove" }),
                                            }),
                                        }),
                                    );
                                },
                      children: (0, i.jsx)(d.m, {
                          text: tX,
                          children: (0, i.jsx)(f.$, {
                              size: "sm",
                              variant: tH,
                              icon: "publishing" === tW ? ge : void 0,
                              text: tV,
                              onClick: () => tZ("header"),
                          }),
                      }),
                  }),
        t4 = ej.intl.string(eb.default.FzfmQ8),
        t5 = ej.intl.string(eb.default.xjJAQm),
        t7 = (0, i.jsx)(h7.A, {
            title: s?.name ?? ej.intl.string(eb.default.G1WwgK),
            project: s,
            onOpenProjectSettings: t1,
            draft: tY,
            actions:
                null == s
                    ? null
                    : (0, i.jsxs)("div", {
                          className: h6.FO,
                          children: [
                              null != t1
                                  ? (0, i.jsx)(j.A.Icon, {
                                        icon: m.SettingsIcon,
                                        tooltip: t4,
                                        "aria-label": t4,
                                        onClick: t1,
                                    })
                                  : null,
                              (0, i.jsx)(hq, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: w,
                                  isOwner: (0, ts.PV)(s),
                                  onExport: tF.onExport,
                                  onHistory: t0,
                                  onConnectTool: P ? () => (0, eN.A)(s.id) : void 0,
                                  onToggleDebug: M ? tT : void 0,
                                  debugOpen: N,
                              }),
                              (0, i.jsxs)("div", {
                                  className: h6.Cl,
                                  children: [(0, i.jsx)(tP, { project: s, guildId: w }), t3],
                              }),
                              C || Q
                                  ? null
                                  : (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("div", { className: h6.YJ, "aria-hidden": !0 }),
                                            (0, i.jsx)(j.A.Icon, {
                                                icon: h.PanelOpenIcon,
                                                tooltip: t5,
                                                "aria-label": t5,
                                                onClick: R,
                                            }),
                                        ],
                                    }),
                          ],
                      }),
        }),
        t8 = a.useId(),
        t6 = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return null == e
                ? null
                : "frame" !== e
                  ? { mode: e }
                  : null != l
                    ? { mode: e, surface: eH.U.APP_CHANNEL, view: l }
                    : null == n
                      ? { mode: e, surface: t }
                      : { mode: e, surface: t, appChannel: n };
        })(et, es, em, ew),
        t9 = eX
            ? tI
                ? (0, i.jsx)(j.A.Icon, {
                      icon: g.ExperimentalDirectSelectIcon,
                      iconClassName: h6.D8,
                      tooltip: t_,
                      "aria-label": t_,
                      selected: e3,
                      disabled: (e5 || tt) && !e3,
                      onClick: e3 ? tE : tN,
                  })
                : (0, i.jsx)(j.A.Icon, {
                      ref: te,
                      icon: g.ExperimentalDirectSelectIcon,
                      iconClassName: h6.D8,
                      tooltip: tM,
                      "aria-label": tM,
                      selected: e6,
                      disabled: e5 || tt,
                      onClick: tC,
                  })
            : null,
        ne =
            null != s && (null == Y ? Z : "nothing_built" !== Y)
                ? (0, i.jsx)(h5, {
                      editToggle: t9,
                      projectId: s.id,
                      projectName: s.name,
                      toolbar: eZ,
                      activeMode: et,
                      activeTarget: t6,
                      frameTarget: {
                          mode: "frame",
                          surface: es,
                          ...(null == em ? {} : { appChannel: em }),
                          ...(null == ew ? {} : { view: ew }),
                      },
                      onCloseApp: tq,
                      widgetRefreshApplicationId: t2,
                      previewPaused: eY,
                      onTogglePreviewPaused: tD,
                      onTogglePopout: tQ ? (e1.isPoppedOut ? e1.popIn : e1.popOut) : void 0,
                      poppedOut: e1.isPoppedOut,
                      agentDrivingPreview: tt,
                      previewControlsBlocked: e5,
                      blockedPreviewControlLabel: e7,
                      previewPanelId: t8,
                  })
                : null;
    return (0, i.jsxs)("div", {
        className: u()(h6.nj, h8.T),
        children: [
            tF.importInput,
            (0, i.jsx)("main", {
                className: h6.JX,
                children: G
                    ? (0, i.jsx)("div", {
                          className: h6.j5,
                          children: (0, i.jsx)("div", {
                              className: h6.sD,
                              children: (0, i.jsx)(p.D, {
                                  variant: "heading-lg/semibold",
                                  children: ej.intl.string(eb.default.i7PaZ5),
                              }),
                          }),
                      })
                    : null == s
                      ? (0, i.jsxs)("div", {
                            className: h6.j5,
                            children: [
                                t7,
                                (0, i.jsxs)("div", {
                                    className: h6.sD,
                                    children: [
                                        (0, i.jsx)(p.D, {
                                            variant: "heading-lg/semibold",
                                            children: ej.intl.string(eb.default.G1WwgK),
                                        }),
                                        (0, i.jsx)(x.E, {
                                            variant: "body-md/normal",
                                            color: "text-muted",
                                            children: ej.intl.string(eb.default.fINulo),
                                        }),
                                        (0, i.jsx)(f.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: ej.intl.string(eb.default["WFJ/vb"]),
                                            onClick: () => (0, ti.listProjects)(w),
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : Q
                        ? (0, i.jsxs)("div", {
                              className: h6.j5,
                              children: [
                                  t7,
                                  (0, i.jsx)("div", {
                                      className: h6.sD,
                                      children: (0, i.jsx)(p.D, {
                                          variant: "heading-lg/semibold",
                                          children: ej.intl.string(eb.default.Y2sGrh),
                                      }),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(tm.bI.Provider, {
                              value: tB,
                              children: (0, i.jsx)(
                                  hS,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: te,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: eQ,
                                      frameLaunchParams: ez,
                                      header: t7,
                                      controlBar: ne,
                                      previewPanelId: null == ne ? void 0 : t8,
                                      previewPanelLabelledBy: null == ne || null == t6 ? void 0 : e9(t8, t6),
                                      chatOpen: C,
                                      onCloseChat: e8,
                                      debugOpen: M && N,
                                      onCloseDebug: tL,
                                      onRestoreVersion: $,
                                      onImportProject: (0, ts.PV)(s) ? tF.onImport : void 0,
                                      restoreState: L,
                                      previewReady: W,
                                      previewGate: tz,
                                      availability: ee,
                                      activeMode: et,
                                      widgetApplicationId: eU,
                                      overlayWidgetSize: eV,
                                      previewPaused: eY,
                                      onResumePreview: t$,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function ge() {
    return (0, i.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: h6.Hv, itemClassName: h6.C5 });
}
