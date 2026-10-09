(n.d(t, { A: () => m }), n(321073), n(134528), n(947204));
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    u = n(148087),
    s = n(390870);
let o = 1e3 / 30,
    d = [
        { hz: 0.285, stagger: 0.17, weight: 0.62, salt: 47 },
        { hz: 0.1245, stagger: -0.29, weight: 0.38, salt: 91 },
    ],
    c = 2 * Math.PI;
function f(e, t) {
    let n = Math.imul(e, 0x165667b1) + Math.imul(t, 0x27d4eb2f);
    return (((n = Math.imul(n ^ (n >>> 13), 0x4bf19f61)) ^ (n >>> 16)) >>> 0) / 0xffffffff;
}
function p() {
    let e = i.useRef(null),
        t = (0, u.A)();
    return (
        i.useEffect(() => {
            let n = e.current,
                l = n?.getContext("2d");
            if (null == n || null == l || !t || !document.documentElement.classList.contains("full-motion")) return;
            let i = getComputedStyle(n).getPropertyValue("color").trim(),
                a = n.closest('[role="group"]'),
                r = a?.querySelector("[data-conjure-effort-handle]") ?? null,
                u = 0,
                s = [],
                p = 0,
                h = 0,
                m = 8,
                g = 9,
                b = 0,
                v = 0,
                x = !1,
                y = 0,
                A = 0,
                C = performance.now();
            function j() {
                if (null == l) return;
                ((l.textAlign = "center"),
                    (l.textBaseline = "middle"),
                    (l.font = `${m}px 'AI Visual Identity Glyphs', monospace`));
                let e = 0;
                for (let t of "123456789ABC") {
                    let n = l.measureText(t);
                    e = Math.max(e, n.actualBoundingBoxAscent + n.actualBoundingBoxDescent);
                }
                let t = e > 0 ? Math.max(4, (m * m) / e) : m;
                l.font = `${t}px 'AI Visual Identity Glyphs', monospace`;
            }
            function M() {
                if (null == n || null == l) return;
                let e = n.clientWidth,
                    t = n.clientHeight;
                if (e === p && t === h) return;
                ((p = e), (g = (m = ((h = t) - 2 - 2) / 3) + 1));
                let i = a?.querySelectorAll("[data-stop]"),
                    r = i?.[i.length - 1];
                (null != r && (u = r.offsetLeft + r.offsetWidth / 2),
                    (s = null == i ? [] : Array.from(i, (e) => e.offsetLeft + e.offsetWidth / 2)));
                let o = window.devicePixelRatio,
                    d = Number.isFinite(o) && o > 0 ? o : 1;
                ((n.width = Math.round(p * d)), (n.height = Math.round(h * d)), l.setTransform(d, 0, 0, d, 0, 0), j());
            }
            (M(),
                (b = requestAnimationFrame(function e(t) {
                    if (((b = requestAnimationFrame(e)), t - v < o)) return;
                    let a = t - v;
                    if (((v = t), null == n || null == l || 0 === p || null == r)) return;
                    let j = Number(r.dataset.effortCentre),
                        M = r.hasAttribute("data-effort-live"),
                        w = Number.isFinite(j) && Math.abs(j - u) > 16;
                    if (!x && (!M || w)) return;
                    y = Math.min(1, Math.max(0, y + ((M ? 1 : -1) * a) / 260));
                    let S = n.getBoundingClientRect(),
                        P = S.width > 0 ? S.width / p : 1,
                        k = r.getBoundingClientRect(),
                        N = (k.left - S.left) / P,
                        E = (1 - Math.min(1, Math.abs(N + k.width / P / 2 - u) / 16)) * y;
                    if (E < 0.01) {
                        (x && l.clearRect(0, 0, p, h), (x = !1));
                        return;
                    }
                    (x || (A = t), (x = !0), l.clearRect(0, 0, p, h));
                    let I = N - 1 - (1 - E) * 16,
                        _ = (t - C) / 1e3,
                        R = 0.1 + 0.9 * (1 - (1 - Math.min(1, Math.max(0, (t - A) / 1500))) ** 3),
                        L = Math.ceil(I / g);
                    l.fillStyle = i;
                    for (let e = 0; e < 3; e++) {
                        let t = 72 * (0.825 + 0.35 * f(e, 11)),
                            n = 224 * (0.88 + 0.12 * (0.5 + 0.5 * Math.sin(_ * c * 0.13 + f(e, 29) * c))) * R,
                            i = 0;
                        for (let t of d) {
                            let n = (e * t.stagger + 0.07 * f(e, t.salt)) * c;
                            i += t.weight * Math.sin(_ * c * t.hz + n);
                        }
                        let a = 0.30000000000000004 + 0.7 * (1 + i),
                            r = Math.floor((_ * t) / g),
                            u = 1 + e * g + m / 2,
                            o = m / 2 + 3,
                            p = Math.abs(u - h / 2) < o;
                        for (let t = 0; t < L; t++) {
                            let i,
                                d = I - (t * g + m / 2);
                            if (d < 0) break;
                            let c = (I - d) / n;
                            if (c >= 1) break;
                            let h = Math.min(6, Math.floor(7 * (1 - c ** a)));
                            ((i =
                                0.07 > f(t - r, e + 613)
                                    ? "123456".charAt(0)
                                    : h < 6
                                      ? "123456".charAt(h)
                                      : "789ABC".charAt(Math.floor(6 * f(e, 977)))),
                                (p && s.some((e) => Math.abs(d - e) < o)) ||
                                    ((l.globalAlpha =
                                        0.5 *
                                        (function (e) {
                                            let t = Math.min(1, Math.max(0, e));
                                            return t * t * (3 - 2 * t);
                                        })((1 - c) / 0.34) *
                                        E),
                                    l.fillText(i, d, u)));
                        }
                    }
                    l.globalAlpha = 1;
                })));
            let w = document.fonts;
            null != w && w.load(`${m}px 'AI Visual Identity Glyphs'`, "123456789ABC").then(j, () => void 0);
            let S = "u" < typeof ResizeObserver ? null : new ResizeObserver(M);
            return (
                S?.observe(n),
                () => {
                    (cancelAnimationFrame(b), S?.disconnect());
                }
            );
        }, [t]),
        (0, l.jsx)("canvas", { ref: e, className: s.Z, "aria-hidden": "true" })
    );
}
var h = n(841479);
function m(e) {
    let { activeIndex: t, stops: n, ariaLabel: a, disabled: u, onSelect: s, className: o } = e,
        d = i.useRef(null),
        c = i.useRef(null),
        f = i.useRef(null),
        [m, g] = i.useState(-1),
        b = i.useRef(!1),
        v = i.useRef(t),
        x = i.useRef({ activeIndex: t, disabled: u, onSelect: s, stopCount: n.length }),
        y = i.useRef(!1),
        A = t >= 0 ? t : m,
        C = t < 0 && m >= 0,
        j = i.useCallback((e, t, n, l) => {
            let i = c.current,
                a = f.current;
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
        M = i.useCallback(
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
                y.current || M(A, l ? "animate" : "arrive"));
        }, [A, t, u, s, n.length, x, M]),
        i.useEffect(() => {
            let e = d.current;
            if (null == e || "u" < typeof ResizeObserver) return;
            let t = new ResizeObserver(() => M(v.current, "snap"));
            return (t.observe(e), () => t.disconnect());
        }, [M]),
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
            className: r()(h.u4, o),
            role: "group",
            "aria-label": a,
            children: (0, l.jsxs)("div", {
                ref: d,
                className: h.Gb,
                children: [
                    (0, l.jsx)("span", {
                        className: h.Ek,
                        "aria-hidden": "true",
                        children: (0, l.jsx)("span", { ref: f, className: r()(h.GS, { [h.eG]: t < 0 }) }),
                    }),
                    (0, l.jsx)("span", {
                        ref: c,
                        "data-conjure-effort-handle": "",
                        "data-effort-live": t >= 0 ? "" : void 0,
                        className: r()(h.p$, { [h.Jb]: A < 0, [h.jz]: C, [h.al]: t >= 0 && !u }),
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
                                className: h.ds,
                                onKeyDown: w,
                                onPointerEnter: () => g(n),
                                onPointerLeave: () => g((e) => (e === n ? -1 : e)),
                                onFocus: () => g(n),
                                onBlur: () => g((e) => (e === n ? -1 : e)),
                                onClick: () => s(n),
                                children: (0, l.jsx)("span", { className: h.Om, "aria-hidden": "true" }),
                            },
                            e,
                        ),
                    ),
                    (0, l.jsx)("span", { className: h.jN, "aria-hidden": "true", children: (0, l.jsx)(p, {}) }),
                ],
            }),
        })
    );
}
