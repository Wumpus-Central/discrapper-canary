n.d(t, { Z: () => y }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n(399606),
    u = n(481060),
    c = n(393238),
    d = n(98650),
    m = n(70097),
    p = n(451478),
    f = n(917042),
    v = n(20437),
    h = n(356659),
    g = n(388032),
    x = n(107657);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = function (e) {
    var t, n, l, y, C, k;
    let { sourceURL: O } = e,
        { videoPlayerRef: P, cropData: S, setCropData: N } = (0, v.S)(),
        [E, R] = r.useState(
            ((k = !(null == (n = P.current) || null == (t = n.videoElement) ? void 0 : t.paused)), true, k),
        ),
        T = r.useRef(null),
        [L, D] = r.useState(null),
        [F, A] = r.useState(),
        I = r.useRef(null),
        Z = r.useRef(null),
        [M, B] = r.useState(0),
        [z, H] = r.useState(!1),
        [W, U] = r.useState(null);
    (0, d.Z)(() => {
        var e;
        let t = null == (e = P.current) ? void 0 : e.videoElement;
        null != t && M !== t.currentTime && B(t.currentTime);
    });
    let V = r.useMemo(() => S.end - S.start, [S]);
    r.useEffect(() => {
        var e;
        let t = null == (e = P.current) ? void 0 : e.videoElement,
            n = I.current,
            a = Z.current;
        if (null == t || null == n || null == a) return;
        let r = (0, o.debounce)(R, h.HW),
            l = () => {
                D(null), H(!1), r.cancel(), r(!0);
            },
            i = () => {
                r.cancel(), r(!1);
            };
        return (
            t.addEventListener("play", l),
            t.addEventListener("pause", i),
            () => {
                t.removeEventListener("play", l), t.removeEventListener("pause", i);
            }
        );
    }, [P]);
    let { ref: Y, width: X = 0, height: G = 0 } = (0, c.ZP)(),
        K = (0, s.e7)([p.Z], () => p.Z.windowSize());
    r.useMemo(() => {
        K.width, K.height;
        let e = Y.current;
        null != e && U(e.getBoundingClientRect());
    }, [K.width, K.height, X, Y]);
    let Q = r.useRef(null),
        J = r.useRef({}),
        $ = r.useCallback(
            (e) => {
                var t;
                let n = (0, o.clamp)(e, 0, S.end - h.Hp);
                N(j(b({}, S), { start: n })), null == (t = P.current) || t.seek(n);
            },
            [S, N, P],
        ),
        q = r.useCallback(
            (e) => {
                var t, n;
                let a = null == (t = P.current) ? void 0 : t.videoElement;
                if (null == a) return;
                let r = (0, o.clamp)(e, S.start + h.Hp, a.duration);
                N(j(b({}, S), { end: r })), null == (n = P.current) || n.seek(r);
            },
            [S, N, P],
        ),
        ee = r.useCallback(
            (e, t) => {
                var n, a;
                if (null == F) return;
                if (null == W) return null;
                let r = (((0, o.clamp)(e, W.left, W.right) - W.left) / W.width) * F,
                    l = (0, o.clamp)(r, 0, F),
                    i = L;
                if (
                    (null == i &&
                        t &&
                        ((i = l <= S.start ? "start" : l >= S.end ? "end" : "playhead"),
                        null == (n = P.current) || n.pause(),
                        D(i),
                        H(E)),
                    "start" === i)
                )
                    $(l);
                else if ("end" === i) q(l);
                else if ("playhead" === i) {
                    let e = (0, o.clamp)(l, S.start, S.end);
                    null == (a = P.current) || a.seek(e);
                }
            },
            [F, W, L, S.start, S.end, P, E, $, q],
        ),
        et = r.useCallback(
            (e) => {
                var t;
                let n = null == (t = P.current) ? void 0 : t.videoElement;
                if (null == n) return;
                let a = (0, f.Z)(n.duration, e.shiftKey),
                    r = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (r = !0), $(S.start - a);
                        break;
                    case "ArrowRight":
                        (r = !0), $(S.start + a);
                }
                r && (e.stopPropagation(), e.preventDefault());
            },
            [P, $, S.start],
        ),
        en = r.useCallback(
            (e) => {
                var t;
                let n = null == (t = P.current) ? void 0 : t.videoElement;
                if (null == n) return;
                let a = (0, f.Z)(n.duration, e.shiftKey),
                    r = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (r = !0), q(S.end - a);
                        break;
                    case "ArrowRight":
                        (r = !0), q(S.end + a);
                }
                r && (e.stopPropagation(), e.preventDefault());
            },
            [P, q, S.end],
        ),
        ea = r.useCallback(
            (e) => {
                ee(e.clientX, !0);
            },
            [ee],
        ),
        er = r.useCallback(
            (e) => {
                ee(e.clientX, !1);
            },
            [ee],
        ),
        el = r.useCallback(() => {
            if (z) {
                var e;
                null == (e = P.current) || e.play();
            }
            H(!1), D(null);
        }, [P, z]);
    r.useEffect(
        () => (
            document.addEventListener("mousemove", er),
            document.addEventListener("mouseup", el),
            () => {
                document.removeEventListener("mousemove", er), document.removeEventListener("mouseup", el);
            }
        ),
        [er, el],
    ),
        r.useEffect(() => {
            !(async function () {
                var e;
                let t = Y.current,
                    n = T.current;
                if (null == t || null == n || null == F) return;
                (t.height = G), (t.width = X);
                let a = t.getContext("2d");
                if (null == a) return;
                (a.fillStyle = "#000"), a.fillRect(0, 0, X, G);
                let r = Math.ceil(G * (n.videoWidth / n.videoHeight)),
                    l = Math.ceil(X / r),
                    i = Q.current;
                if (null == i) return;
                (i.width = r), (i.height = G);
                let o = null == i ? void 0 : i.getContext("2d", { willReadFrequently: !0 });
                if (null == o) return;
                let s = J.current;
                if ((null == (e = s[l]) ? void 0 : e.length) === l) {
                    for (let e = 0; e < l; e++) a.putImageData(s[l][e], r * e, 0);
                    return;
                }
                for (let e = 0; e < l; e++)
                    await new Promise((t) => {
                        (n.onseeked = () => {
                            a.drawImage(n, r * e, 0, r, G), o.drawImage(n, 0, 0, r, G);
                            let i = o.getImageData(0, 0, r, G);
                            null == s[l] && (s[l] = []), (s[l][e] = i), t();
                        }),
                            (n.currentTime = (r / X) * F * e);
                    });
            })();
        }, [X, G, Y, F, Q]);
    let ei = M - S.start,
        eo = null == (l = P.current) ? void 0 : l.videoElement;
    return (0, a.jsx)("div", {
        className: x.centeringWrapper,
        children: (0, a.jsxs)("div", {
            className: x.timelineContainer,
            children: [
                (0, a.jsx)("div", {
                    className: x.playPauseButtonWrapper,
                    children: (0, a.jsx)(u.P3F, {
                        tabIndex: 0,
                        onClick: () => {
                            var e, t;
                            return E
                                ? null == (e = P.current)
                                    ? void 0
                                    : e.pause()
                                : null == (t = P.current)
                                  ? void 0
                                  : t.play();
                        },
                        className: x.playPauseButton,
                        children: E
                            ? (0, a.jsx)(u.fpf, {
                                  size: "md",
                                  color: "currentColor",
                                  className: x.playPauseIcon,
                              })
                            : (0, a.jsx)(u.o1U, {
                                  size: "md",
                                  color: "currentColor",
                                  className: x.playPauseIcon,
                              }),
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: i()(x.timeline, { [x.timelineDragging]: null != L }),
                    onMouseDown: ea,
                    children: [
                        (0, a.jsx)("canvas", {
                            className: x.hiddenCanvas,
                            ref: Q,
                        }),
                        (0, a.jsx)("canvas", {
                            className: x.timelineBackground,
                            ref: Y,
                        }),
                        (0, a.jsx)(u.tEY, {
                            children: (0, a.jsx)("div", {
                                tabIndex: 0,
                                ref: I,
                                className: x.playhead,
                                style: { left: null != eo ? "".concat((eo.currentTime / eo.duration) * 100, "%") : 0 },
                            }),
                        }),
                        (0, a.jsx)(m.Z, {
                            preload: "auto",
                            onLoadedMetadata: function () {
                                let e = T.current;
                                if (null != e) {
                                    if ((A(e.duration), 0 === S.start && (0 === S.end || S.end === e.duration))) {
                                        var t;
                                        null == (t = P.current) || t.seek(e.duration / 2), B(e.duration / 2);
                                    }
                                    0 === S.end && N((t) => j(b({}, t), { end: e.duration }));
                                }
                            },
                            className: x.timelineVideo,
                            ref: T,
                            src: O,
                            muted: !0,
                        }),
                        (0, a.jsxs)("div", {
                            className: x.dragBox,
                            style: {
                                left: null != F ? "".concat((S.start / F) * 100, "%") : "0",
                                right: null != F ? "".concat(((F - S.end) / F) * 100, "%") : "0",
                            },
                            children: [
                                (0, a.jsx)("div", {
                                    className: x.timePillContainer,
                                    children: (0, a.jsx)("div", {
                                        ref: Z,
                                        className: x.timePillBackground,
                                        children: (0, a.jsxs)(u.Text, {
                                            variant: "text-sm/normal",
                                            className: x.timePillText,
                                            color: "always-white",
                                            children: [
                                                _(ei),
                                                (0, a.jsx)("span", {
                                                    className: x.slashCharacter,
                                                    children: " / ",
                                                }),
                                                _(V),
                                            ],
                                        }),
                                    }),
                                }),
                                (0, a.jsx)(u.tEY, {
                                    children: (0, a.jsx)("button", {
                                        className: i()(x.dragHandleLeft, { [x.dragging]: "start" === L }),
                                        onMouseDown: ea,
                                        onKeyDown: et,
                                        role: "slider",
                                        tabIndex: 0,
                                        "aria-valuemin": 0,
                                        "aria-valuenow": S.start,
                                        "aria-valuetext": w(S.start),
                                        "aria-valuemax": S.end - h.Hp,
                                        "aria-label": g.intl.string(g.t["+BTvw8"]),
                                        children: (0, a.jsx)("div", { className: x.cropLeftArrow }),
                                    }),
                                }),
                                (0, a.jsx)(u.tEY, {
                                    children: (0, a.jsx)("button", {
                                        className: i()(x.dragHandleRight, { [x.dragging]: "end" === L }),
                                        onMouseDown: ea,
                                        onKeyDown: en,
                                        role: "slider",
                                        tabIndex: 0,
                                        "aria-valuemin": S.start + h.Hp,
                                        "aria-valuenow": S.end,
                                        "aria-valuetext": w(S.end),
                                        "aria-valuemax":
                                            null == (C = P.current) || null == (y = C.videoElement)
                                                ? void 0
                                                : y.duration,
                                        "aria-label": g.intl.string(g.t.bBgBYm),
                                        children: (0, a.jsx)("div", { className: x.cropRightArrow }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
};
function _(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        n = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return (
        (t = t < 10 ? "0" + t : t),
        (n = n < 10 ? "0" + n : n),
        (a = a < 10 ? "0" + a : a),
        "".concat(t, ":").concat(n, ".").concat(a)
    );
}
function w(e) {
    let t = Math.floor(e / 60),
        n = g.intl.formatToPlainString(g.t.iXLF9f, { minutes: t }),
        a = g.intl.formatToPlainString(g.t.geSp4O, { seconds: e % 60 });
    return "".concat(n, " ").concat(a);
}
