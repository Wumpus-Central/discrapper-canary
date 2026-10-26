(n.d(t, { A: () => g }), n(321073), n(134528), n(947204));
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    u = n(218394),
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
    let e = a.useRef(null),
        t = (0, u.j)();
    return (
        a.useEffect(() => {
            let n = e.current,
                l = n?.getContext("2d");
            if (null == n || null == l || !t || !document.documentElement.classList.contains("full-motion")) return;
            let a = getComputedStyle(n).getPropertyValue("color").trim(),
                i = n.closest('[role="group"]'),
                r = i?.querySelector("[data-conjure-effort-handle]") ?? null,
                u = 0,
                s = [],
                p = 0,
                h = 0,
                g = 8,
                m = 9,
                v = 0,
                b = 0,
                x = !1,
                y = 0,
                A = 0,
                j = performance.now();
            function w() {
                if (null == l) return;
                ((l.textAlign = "center"),
                    (l.textBaseline = "middle"),
                    (l.font = `${g}px 'AI Visual Identity Glyphs', monospace`));
                let e = 0;
                for (let t of "123456789ABC") {
                    let n = l.measureText(t);
                    e = Math.max(e, n.actualBoundingBoxAscent + n.actualBoundingBoxDescent);
                }
                let t = e > 0 ? Math.max(4, (g * g) / e) : g;
                l.font = `${t}px 'AI Visual Identity Glyphs', monospace`;
            }
            function k() {
                if (null == n || null == l) return;
                let e = n.clientWidth,
                    t = n.clientHeight;
                if (e === p && t === h) return;
                ((p = e), (m = (g = ((h = t) - 2 - 2) / 3) + 1));
                let a = i?.querySelectorAll("[data-stop]"),
                    r = a?.[a.length - 1];
                (null != r && (u = r.offsetLeft + r.offsetWidth / 2),
                    (s = null == a ? [] : Array.from(a, (e) => e.offsetLeft + e.offsetWidth / 2)));
                let o = window.devicePixelRatio,
                    d = Number.isFinite(o) && o > 0 ? o : 1;
                ((n.width = Math.round(p * d)), (n.height = Math.round(h * d)), l.setTransform(d, 0, 0, d, 0, 0), w());
            }
            (k(),
                (v = requestAnimationFrame(function e(t) {
                    if (((v = requestAnimationFrame(e)), t - b < o)) return;
                    let i = t - b;
                    if (((b = t), null == n || null == l || 0 === p || null == r)) return;
                    let w = Number(r.dataset.effortCentre),
                        k = r.hasAttribute("data-effort-live"),
                        S = Number.isFinite(w) && Math.abs(w - u) > 16;
                    if (!x && (!k || S)) return;
                    y = Math.min(1, Math.max(0, y + ((k ? 1 : -1) * i) / 260));
                    let C = n.getBoundingClientRect(),
                        E = C.width > 0 ? C.width / p : 1,
                        P = r.getBoundingClientRect(),
                        M = (P.left - C.left) / E,
                        _ = (1 - Math.min(1, Math.abs(M + P.width / E / 2 - u) / 16)) * y;
                    if (_ < 0.01) {
                        (x && l.clearRect(0, 0, p, h), (x = !1));
                        return;
                    }
                    (x || (A = t), (x = !0), l.clearRect(0, 0, p, h));
                    let N = M - 1 - (1 - _) * 16,
                        I = (t - j) / 1e3,
                        T = 0.1 + 0.9 * (1 - (1 - Math.min(1, Math.max(0, (t - A) / 1500))) ** 3),
                        L = Math.ceil(N / m);
                    l.fillStyle = a;
                    for (let e = 0; e < 3; e++) {
                        let t = 72 * (0.825 + 0.35 * f(e, 11)),
                            n = 224 * (0.88 + 0.12 * (0.5 + 0.5 * Math.sin(I * c * 0.13 + f(e, 29) * c))) * T,
                            a = 0;
                        for (let t of d) {
                            let n = (e * t.stagger + 0.07 * f(e, t.salt)) * c;
                            a += t.weight * Math.sin(I * c * t.hz + n);
                        }
                        let i = 0.30000000000000004 + 0.7 * (1 + a),
                            r = Math.floor((I * t) / m),
                            u = 1 + e * m + g / 2,
                            o = g / 2 + 3,
                            p = Math.abs(u - h / 2) < o;
                        for (let t = 0; t < L; t++) {
                            let a,
                                d = N - (t * m + g / 2);
                            if (d < 0) break;
                            let c = (N - d) / n;
                            if (c >= 1) break;
                            let h = Math.min(6, Math.floor(7 * (1 - c ** i)));
                            ((a =
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
                                        _),
                                    l.fillText(a, d, u)));
                        }
                    }
                    l.globalAlpha = 1;
                })));
            let S = document.fonts;
            null != S && S.load(`${g}px 'AI Visual Identity Glyphs'`, "123456789ABC").then(w, () => void 0);
            let C = "u" < typeof ResizeObserver ? null : new ResizeObserver(k);
            return (
                C?.observe(n),
                () => {
                    (cancelAnimationFrame(v), C?.disconnect());
                }
            );
        }, [t]),
        (0, l.jsx)("canvas", { ref: e, className: s.Z, "aria-hidden": "true" })
    );
}
var h = n(841479);
function g(e) {
    let { activeIndex: t, stops: n, ariaLabel: i, disabled: u, onSelect: s, className: o } = e,
        d = a.useRef(null),
        c = a.useRef(null),
        f = a.useRef(null),
        [g, m] = a.useState(-1),
        v = a.useRef(!1),
        b = a.useRef(t),
        x = a.useRef({ activeIndex: t, disabled: u, onSelect: s, stopCount: n.length }),
        y = a.useRef(!1),
        A = t >= 0 ? t : g,
        j = t < 0 && g >= 0,
        w = a.useCallback((e, t, n, l) => {
            let a = c.current,
                i = f.current;
            null != a &&
                null != i &&
                ("arrive" === l
                    ? ((a.style.transitionProperty = "opacity, background-color"),
                      (i.style.transitionProperty = "opacity"))
                    : "snap" === l || "drag" === l
                      ? ((a.style.transitionProperty = "none"), (i.style.transitionProperty = "none"))
                      : ((a.style.transitionProperty = ""), (i.style.transitionProperty = "")),
                (a.style.transform = `translateX(${e}px)`),
                (a.style.width = `${t}px`),
                (a.dataset.effortCentre = String(e + t / 2)),
                (i.style.transform = `translateX(${e + t - n}px)`),
                ("arrive" === l || "snap" === l) &&
                    (a.getBoundingClientRect(), (a.style.transitionProperty = ""), (i.style.transitionProperty = "")));
        }, []),
        k = a.useCallback(
            (e, t) => {
                let n = d.current,
                    l = e >= 0 ? n?.querySelector(`[data-stop='${e}']`) : null;
                null != l && w(l.offsetLeft, l.offsetWidth, n?.offsetWidth ?? 0, t);
            },
            [w],
        );
    function S(e) {
        if (u) return;
        let l = "ArrowRight" === e.key ? 1 : "ArrowLeft" === e.key ? -1 : 0;
        if (0 === l) return;
        e.preventDefault();
        let a = t >= 0 ? t : l > 0 ? -1 : n.length,
            i = Math.min(n.length - 1, Math.max(0, a + l));
        i !== t && (s(i), d.current?.querySelector(`[data-stop='${i}']`)?.focus());
    }
    return (
        a.useLayoutEffect(() => {
            let e = A >= 0,
                l = e && v.current;
            ((v.current = e),
                (b.current = A),
                (x.current = { activeIndex: t, disabled: u, onSelect: s, stopCount: n.length }),
                y.current || k(A, l ? "animate" : "arrive"));
        }, [A, t, u, s, n.length, x, k]),
        a.useEffect(() => {
            let e = d.current;
            if (null == e || "u" < typeof ResizeObserver) return;
            let t = new ResizeObserver(() => k(b.current, "snap"));
            return (t.observe(e), () => t.disconnect());
        }, [k]),
        a.useEffect(() => {
            let e = d.current,
                t = c.current;
            if (null == e || null == t) return;
            let n = null;
            function l(e, t) {
                return Math.min(Math.max(t - e.rowLeft - e.handleWidth / 2, 0), e.rowWidth - e.handleWidth);
            }
            function a(e, t) {
                let n = null;
                for (let l = 0; l < e.stops.length; l += 1) {
                    let a = e.stops[l];
                    if (null == a) continue;
                    let i = t - a;
                    (null == n || Math.abs(i) < Math.abs(n.offset)) && (n = { index: l, left: a, offset: i });
                }
                return n;
            }
            function i() {
                if (null == n) return;
                n.frame = 0;
                let { metrics: e } = n,
                    t = l(e, n.x),
                    i = a(e, t);
                if (null == i) return;
                if (24 >= Math.abs(i.offset)) {
                    var r;
                    let t;
                    n.snapped !== i.index &&
                        ((n.snapped = i.index),
                        (n.snappedAt = n.at),
                        i.index !== x.current.activeIndex && x.current.onSelect(i.index));
                    let l = n.at - n.snappedAt < 300;
                    w(
                        i.left +
                            ((t = Math.min(Math.abs((r = i.offset)) / 24, 1)), 12 * Math.sign(r) * (1 - (1 - t) ** 2)),
                        e.handleWidth,
                        e.rowWidth,
                        l ? "animate" : "drag",
                    );
                    return;
                }
                (null != n.snapped && (n.releasedAt = n.at), (n.snapped = null));
                let u = n.at - n.releasedAt < 300;
                w(t, e.handleWidth, e.rowWidth, u ? "animate" : "drag");
            }
            function r(l) {
                if (x.current.disabled || x.current.activeIndex < 0 || null == t) return;
                let a = (function () {
                    if (null == e || null == t) return null;
                    let n = e.getBoundingClientRect(),
                        l = [];
                    for (let t = 0; t < x.current.stopCount; t += 1)
                        l.push(e.querySelector(`[data-stop='${t}']`)?.offsetLeft ?? 0);
                    return { rowLeft: n.left, rowWidth: n.width, handleWidth: t.offsetWidth, stops: l };
                })();
                null != a &&
                    (l.preventDefault(),
                    t.setPointerCapture(l.pointerId),
                    (n = {
                        pointerId: l.pointerId,
                        metrics: a,
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
                    ((n.x = e.clientX), (n.at = e.timeStamp), 0 === n.frame && (n.frame = requestAnimationFrame(i)));
                }
            }
            function s(e) {
                let i = n;
                if (((n = null), (y.current = !1), null == i)) return;
                (0 !== i.frame && cancelAnimationFrame(i.frame),
                    null != t && t.hasPointerCapture(i.pointerId) && t.releasePointerCapture(i.pointerId));
                let r = a(i.metrics, l(i.metrics, e ?? i.x));
                null != r &&
                    (w(r.left, i.metrics.handleWidth, i.metrics.rowWidth, "animate"),
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
        }, [x, y, w]),
        (0, l.jsx)("div", {
            className: r()(h.u4, o),
            role: "group",
            "aria-label": i,
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
                        className: r()(h.p$, { [h.Jb]: A < 0, [h.jz]: j, [h.al]: t >= 0 && !u }),
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
                                onKeyDown: S,
                                onPointerEnter: () => m(n),
                                onPointerLeave: () => m((e) => (e === n ? -1 : e)),
                                onFocus: () => m(n),
                                onBlur: () => m((e) => (e === n ? -1 : e)),
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
