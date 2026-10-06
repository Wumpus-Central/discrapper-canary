(n.d(t, { A: () => h }), n(321073), n(134528), n(947204));
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    u = n(390870);
let s = 1e3 / 30,
    o = [
        { hz: 0.285, stagger: 0.17, weight: 0.62, salt: 47 },
        { hz: 0.1245, stagger: -0.29, weight: 0.38, salt: 91 },
    ],
    d = 2 * Math.PI;
function c(e, t) {
    let n = Math.imul(e, 0x165667b1) + Math.imul(t, 0x27d4eb2f);
    return (((n = Math.imul(n ^ (n >>> 13), 0x4bf19f61)) ^ (n >>> 16)) >>> 0) / 0xffffffff;
}
function f() {
    let e = i.useRef(null);
    return (
        i.useEffect(() => {
            let t = e.current,
                n = t?.getContext("2d");
            if (null == t || null == n || !document.documentElement.classList.contains("full-motion")) return;
            let l = getComputedStyle(t).getPropertyValue("color").trim(),
                i = t.closest('[role="group"]'),
                a = i?.querySelector("[data-conjure-effort-handle]") ?? null,
                r = 0,
                u = [],
                f = 0,
                p = 0,
                h = 8,
                g = 9,
                m = 0,
                b = 0,
                v = !1,
                x = 0,
                y = 0,
                A = performance.now();
            function C() {
                if (null == n) return;
                ((n.textAlign = "center"),
                    (n.textBaseline = "middle"),
                    (n.font = `${h}px 'AI Visual Identity Glyphs', monospace`));
                let e = 0;
                for (let t of "123456789ABC") {
                    let l = n.measureText(t);
                    e = Math.max(e, l.actualBoundingBoxAscent + l.actualBoundingBoxDescent);
                }
                let t = e > 0 ? Math.max(4, (h * h) / e) : h;
                n.font = `${t}px 'AI Visual Identity Glyphs', monospace`;
            }
            function j() {
                if (null == t || null == n) return;
                let e = t.clientWidth,
                    l = t.clientHeight;
                if (e === f && l === p) return;
                ((f = e), (g = (h = ((p = l) - 2 - 2) / 3) + 1));
                let a = i?.querySelectorAll("[data-stop]"),
                    s = a?.[a.length - 1];
                (null != s && (r = s.offsetLeft + s.offsetWidth / 2),
                    (u = null == a ? [] : Array.from(a, (e) => e.offsetLeft + e.offsetWidth / 2)));
                let o = window.devicePixelRatio,
                    d = Number.isFinite(o) && o > 0 ? o : 1;
                ((t.width = Math.round(f * d)), (t.height = Math.round(p * d)), n.setTransform(d, 0, 0, d, 0, 0), C());
            }
            (j(),
                (m = requestAnimationFrame(function e(i) {
                    if (((m = requestAnimationFrame(e)), i - b < s)) return;
                    let C = i - b;
                    if (((b = i), null == t || null == n || 0 === f || null == a)) return;
                    let j = Number(a.dataset.effortCentre),
                        P = a.hasAttribute("data-effort-live"),
                        w = Number.isFinite(j) && Math.abs(j - r) > 16;
                    if (!v && (!P || w)) return;
                    x = Math.min(1, Math.max(0, x + ((P ? 1 : -1) * C) / 260));
                    let M = t.getBoundingClientRect(),
                        k = M.width > 0 ? M.width / f : 1,
                        I = a.getBoundingClientRect(),
                        E = (I.left - M.left) / k,
                        N = (1 - Math.min(1, Math.abs(E + I.width / k / 2 - r) / 16)) * x;
                    if (N < 0.01) {
                        (v && n.clearRect(0, 0, f, p), (v = !1));
                        return;
                    }
                    (v || (y = i), (v = !0), n.clearRect(0, 0, f, p));
                    let _ = E - 1 - (1 - N) * 16,
                        S = (i - A) / 1e3,
                        R = 0.1 + 0.9 * (1 - (1 - Math.min(1, Math.max(0, (i - y) / 1500))) ** 3),
                        O = Math.ceil(_ / g);
                    n.fillStyle = l;
                    for (let e = 0; e < 3; e++) {
                        let t = 72 * (0.825 + 0.35 * c(e, 11)),
                            l = 224 * (0.88 + 0.12 * (0.5 + 0.5 * Math.sin(S * d * 0.13 + c(e, 29) * d))) * R,
                            i = 0;
                        for (let t of o) {
                            let n = (e * t.stagger + 0.07 * c(e, t.salt)) * d;
                            i += t.weight * Math.sin(S * d * t.hz + n);
                        }
                        let a = 0.30000000000000004 + 0.7 * (1 + i),
                            r = Math.floor((S * t) / g),
                            s = 1 + e * g + h / 2,
                            f = h / 2 + 3,
                            m = Math.abs(s - p / 2) < f;
                        for (let t = 0; t < O; t++) {
                            let i,
                                o = _ - (t * g + h / 2);
                            if (o < 0) break;
                            let d = (_ - o) / l;
                            if (d >= 1) break;
                            let p = Math.min(6, Math.floor(7 * (1 - d ** a)));
                            ((i =
                                0.07 > c(t - r, e + 613)
                                    ? "123456".charAt(0)
                                    : p < 6
                                      ? "123456".charAt(p)
                                      : "789ABC".charAt(Math.floor(6 * c(e, 977)))),
                                (m && u.some((e) => Math.abs(o - e) < f)) ||
                                    ((n.globalAlpha =
                                        0.5 *
                                        (function (e) {
                                            let t = Math.min(1, Math.max(0, e));
                                            return t * t * (3 - 2 * t);
                                        })((1 - d) / 0.34) *
                                        N),
                                    n.fillText(i, o, s)));
                        }
                    }
                    n.globalAlpha = 1;
                })));
            let P = document.fonts;
            null != P && P.load(`${h}px 'AI Visual Identity Glyphs'`, "123456789ABC").then(C, () => void 0);
            let w = "u" < typeof ResizeObserver ? null : new ResizeObserver(j);
            return (
                w?.observe(t),
                () => {
                    (cancelAnimationFrame(m), w?.disconnect());
                }
            );
        }, []),
        (0, l.jsx)("canvas", { ref: e, className: u.Z, "aria-hidden": "true" })
    );
}
var p = n(841479);
function h(e) {
    let { activeIndex: t, stops: n, ariaLabel: a, disabled: u, onSelect: s, className: o } = e,
        d = i.useRef(null),
        c = i.useRef(null),
        h = i.useRef(null),
        [g, m] = i.useState(-1),
        b = i.useRef(!1),
        v = i.useRef(t),
        x = i.useRef({ activeIndex: t, disabled: u, onSelect: s, stopCount: n.length }),
        y = i.useRef(!1),
        A = t >= 0 ? t : g,
        C = t < 0 && g >= 0,
        j = i.useCallback((e, t, n, l) => {
            let i = c.current,
                a = h.current;
            null != i &&
                null != a &&
                ("arrive" === l
                    ? ((i.style.transitionProperty = "opacity, background-color"),
                      (a.style.transitionProperty = "opacity"))
                    : "snap" === l || "drag" === l
                      ? ((i.style.transitionProperty = "none"), (a.style.transitionProperty = "none"))
                      : ((i.style.transitionProperty = ""), (a.style.transitionProperty = "")),
                (i.style.transform = `translateX(${e}px)`),
                (i.style.width = `${t}px`),
                (i.dataset.effortCentre = String(e + t / 2)),
                (a.style.transform = `translateX(${e + t - n}px)`),
                ("arrive" === l || "snap" === l) &&
                    (i.getBoundingClientRect(), (i.style.transitionProperty = ""), (a.style.transitionProperty = "")));
        }, []),
        P = i.useCallback(
            (e, t) => {
                let n = d.current,
                    l = e >= 0 ? n?.querySelector(`[data-stop='${e}']`) : null;
                null != l && j(l.offsetLeft, l.offsetWidth, n?.offsetWidth ?? 0, t);
            },
            [j],
        );
    function w(e) {
        if (u) return;
        let l = "ArrowRight" === e.key ? 1 : "ArrowLeft" === e.key ? -1 : 0;
        if (0 === l) return;
        e.preventDefault();
        let i = t >= 0 ? t : l > 0 ? -1 : n.length,
            a = Math.min(n.length - 1, Math.max(0, i + l));
        a !== t && (s(a), d.current?.querySelector(`[data-stop='${a}']`)?.focus());
    }
    return (
        i.useLayoutEffect(() => {
            let e = A >= 0,
                l = e && b.current;
            ((b.current = e),
                (v.current = A),
                (x.current = { activeIndex: t, disabled: u, onSelect: s, stopCount: n.length }),
                y.current || P(A, l ? "animate" : "arrive"));
        }, [A, t, u, s, n.length, x, P]),
        i.useEffect(() => {
            let e = d.current;
            if (null == e || "u" < typeof ResizeObserver) return;
            let t = new ResizeObserver(() => P(v.current, "snap"));
            return (t.observe(e), () => t.disconnect());
        }, [P]),
        i.useEffect(() => {
            let e = d.current,
                t = c.current;
            if (null == e || null == t) return;
            let n = null;
            function l(e, t) {
                return Math.min(Math.max(t - e.rowLeft - e.handleWidth / 2, 0), e.rowWidth - e.handleWidth);
            }
            function i(e, t) {
                let n = null;
                for (let l = 0; l < e.stops.length; l += 1) {
                    let i = e.stops[l];
                    if (null == i) continue;
                    let a = t - i;
                    (null == n || Math.abs(a) < Math.abs(n.offset)) && (n = { index: l, left: i, offset: a });
                }
                return n;
            }
            function a() {
                if (null == n) return;
                n.frame = 0;
                let { metrics: e } = n,
                    t = l(e, n.x),
                    a = i(e, t);
                if (null == a) return;
                if (24 >= Math.abs(a.offset)) {
                    var r;
                    let t;
                    n.snapped !== a.index &&
                        ((n.snapped = a.index),
                        (n.snappedAt = n.at),
                        a.index !== x.current.activeIndex && x.current.onSelect(a.index));
                    let l = n.at - n.snappedAt < 300;
                    j(
                        a.left +
                            ((t = Math.min(Math.abs((r = a.offset)) / 24, 1)), 12 * Math.sign(r) * (1 - (1 - t) ** 2)),
                        e.handleWidth,
                        e.rowWidth,
                        l ? "animate" : "drag",
                    );
                    return;
                }
                (null != n.snapped && (n.releasedAt = n.at), (n.snapped = null));
                let u = n.at - n.releasedAt < 300;
                j(t, e.handleWidth, e.rowWidth, u ? "animate" : "drag");
            }
            function r(l) {
                if (x.current.disabled || x.current.activeIndex < 0 || null == t) return;
                let i = (function () {
                    if (null == e || null == t) return null;
                    let n = e.getBoundingClientRect(),
                        l = [];
                    for (let t = 0; t < x.current.stopCount; t += 1)
                        l.push(e.querySelector(`[data-stop='${t}']`)?.offsetLeft ?? 0);
                    return { rowLeft: n.left, rowWidth: n.width, handleWidth: t.offsetWidth, stops: l };
                })();
                null != i &&
                    (l.preventDefault(),
                    t.setPointerCapture(l.pointerId),
                    (n = {
                        pointerId: l.pointerId,
                        metrics: i,
                        snapped: x.current.activeIndex,
                        snappedAt: l.timeStamp,
                        releasedAt: 0,
                        x: l.clientX,
                        at: l.timeStamp,
                        frame: 0,
                    }),
                    (y.current = !0));
            }
            function u(e) {
                if (null != n) {
                    if (0 === e.buttons) return void s(e.clientX);
                    ((n.x = e.clientX), (n.at = e.timeStamp), 0 === n.frame && (n.frame = requestAnimationFrame(a)));
                }
            }
            function s(e) {
                let a = n;
                if (((n = null), (y.current = !1), null == a)) return;
                (0 !== a.frame && cancelAnimationFrame(a.frame),
                    null != t && t.hasPointerCapture(a.pointerId) && t.releasePointerCapture(a.pointerId));
                let r = i(a.metrics, l(a.metrics, e ?? a.x));
                null != r &&
                    (j(r.left, a.metrics.handleWidth, a.metrics.rowWidth, "animate"),
                    r.index !== x.current.activeIndex && x.current.onSelect(r.index));
            }
            function o(e) {
                s(e.clientX);
            }
            function f() {
                s(null);
            }
            return (
                t.addEventListener("pointerdown", r),
                t.addEventListener("pointermove", u),
                t.addEventListener("pointerup", o),
                t.addEventListener("pointercancel", o),
                t.addEventListener("lostpointercapture", f),
                window.addEventListener("pointerup", o),
                window.addEventListener("blur", f),
                () => {
                    (null != n && 0 !== n.frame && cancelAnimationFrame(n.frame),
                        t.removeEventListener("pointerdown", r),
                        t.removeEventListener("pointermove", u),
                        t.removeEventListener("pointerup", o),
                        t.removeEventListener("pointercancel", o),
                        t.removeEventListener("lostpointercapture", f),
                        window.removeEventListener("pointerup", o),
                        window.removeEventListener("blur", f));
                }
            );
        }, [x, y, j]),
        (0, l.jsx)("div", {
            className: r()(p.u4, o),
            role: "group",
            "aria-label": a,
            children: (0, l.jsxs)("div", {
                ref: d,
                className: p.Gb,
                children: [
                    (0, l.jsx)("span", {
                        className: p.Ek,
                        "aria-hidden": "true",
                        children: (0, l.jsx)("span", { ref: h, className: r()(p.GS, { [p.eG]: t < 0 }) }),
                    }),
                    (0, l.jsx)("span", {
                        ref: c,
                        "data-conjure-effort-handle": "",
                        "data-effort-live": t >= 0 ? "" : void 0,
                        className: r()(p.p$, { [p.Jb]: A < 0, [p.jz]: C, [p.al]: t >= 0 && !u }),
                        "aria-hidden": "true",
                    }),
                    n.map((e, n) =>
                        (0, l.jsx)(
                            "button",
                            {
                                type: "button",
                                "data-stop": n,
                                "aria-pressed": n === t,
                                "aria-label": e,
                                disabled: u,
                                className: p.ds,
                                onKeyDown: w,
                                onPointerEnter: () => m(n),
                                onPointerLeave: () => m((e) => (e === n ? -1 : e)),
                                onFocus: () => m(n),
                                onBlur: () => m((e) => (e === n ? -1 : e)),
                                onClick: () => s(n),
                                children: (0, l.jsx)("span", { className: p.Om, "aria-hidden": "true" }),
                            },
                            e,
                        ),
                    ),
                    (0, l.jsx)("span", { className: p.jN, "aria-hidden": "true", children: (0, l.jsx)(f, {}) }),
                ],
            }),
        })
    );
}
