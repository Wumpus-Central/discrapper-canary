n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n(399606),
    u = n(84735),
    c = n(481060),
    d = n(393238),
    m = n(98650),
    p = n(70097),
    f = n(451478),
    v = n(917042),
    h = n(20437),
    g = n(356659),
    x = n(388032),
    b = n(992019);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = function (e) {
    var t, n, l, _, N, k;
    let { sourceURL: O } = e,
        { videoPlayerRef: P, cropData: S, setCropData: E } = (0, h.S)(),
        [R, L] = a.useState((((k = !(null == (n = P.current) || null == (t = n.videoElement) ? void 0 : t.paused)), true), k)),
        T = a.useRef(null),
        [F, D] = a.useState(null),
        [I, A] = a.useState(),
        Z = a.useRef(null),
        B = a.useRef(null),
        [M, W] = a.useState(0),
        [z, H] = a.useState(!1),
        [U, V] = a.useState(null);
    (0, m.Z)(() => {
        var e;
        let t = null == (e = P.current) ? void 0 : e.videoElement;
        null != t && M !== t.currentTime && W(t.currentTime);
    });
    let X = a.useMemo(() => S.end - S.start, [S]);
    a.useEffect(() => {
        var e;
        let t = null == (e = P.current) ? void 0 : e.videoElement,
            n = Z.current,
            r = B.current;
        if (null == t || null == n || null == r) return;
        let a = (0, o.debounce)(L, g.HW),
            l = () => {
                D(null), H(!1), a.cancel(), a(!0);
            },
            i = () => {
                a.cancel(), a(!1);
            };
        return (
            t.addEventListener('play', l),
            t.addEventListener('pause', i),
            () => {
                t.removeEventListener('play', l), t.removeEventListener('pause', i);
            }
        );
    }, [P]);
    let { ref: G, width: K = 0, height: Y = 0 } = (0, d.Z)(),
        Q = (0, s.e7)([f.Z], () => f.Z.windowSize());
    a.useMemo(() => {
        Q.width, Q.height;
        let e = G.current;
        null != e && V(e.getBoundingClientRect());
    }, [Q.width, Q.height, K, G]);
    let J = a.useRef(null),
        $ = a.useRef({}),
        q = a.useCallback(
            (e) => {
                var t;
                let n = (0, o.clamp)(e, 0, S.end - g.Hp);
                E(y(j({}, S), { start: n })), null == (t = P.current) || t.seek(n);
            },
            [S, E, P]
        ),
        ee = a.useCallback(
            (e) => {
                var t, n;
                let r = null == (t = P.current) ? void 0 : t.videoElement;
                if (null == r) return;
                let a = (0, o.clamp)(e, S.start + g.Hp, r.duration);
                E(y(j({}, S), { end: a })), null == (n = P.current) || n.seek(a);
            },
            [S, E, P]
        ),
        et = a.useCallback(
            (e, t) => {
                var n, r;
                if (null == I) return;
                if (null == U) return null;
                let a = (((0, o.clamp)(e, U.left, U.right) - U.left) / U.width) * I,
                    l = (0, o.clamp)(a, 0, I),
                    i = F;
                if ((null == i && t && ((i = l <= S.start ? 'start' : l >= S.end ? 'end' : 'playhead'), null == (n = P.current) || n.pause(), D(i), H(R)), 'start' === i)) q(l);
                else if ('end' === i) ee(l);
                else if ('playhead' === i) {
                    let e = (0, o.clamp)(l, S.start, S.end);
                    null == (r = P.current) || r.seek(e);
                }
            },
            [I, U, F, S.start, S.end, P, R, q, ee]
        ),
        en = a.useCallback(
            (e) => {
                var t;
                let n = null == (t = P.current) ? void 0 : t.videoElement;
                if (null == n) return;
                let r = (0, v.Z)(n.duration, e.shiftKey),
                    a = !1;
                switch (e.key) {
                    case 'ArrowLeft':
                        (a = !0), q(S.start - r);
                        break;
                    case 'ArrowRight':
                        (a = !0), q(S.start + r);
                }
                a && (e.stopPropagation(), e.preventDefault());
            },
            [P, q, S.start]
        ),
        er = a.useCallback(
            (e) => {
                var t;
                let n = null == (t = P.current) ? void 0 : t.videoElement;
                if (null == n) return;
                let r = (0, v.Z)(n.duration, e.shiftKey),
                    a = !1;
                switch (e.key) {
                    case 'ArrowLeft':
                        (a = !0), ee(S.end - r);
                        break;
                    case 'ArrowRight':
                        (a = !0), ee(S.end + r);
                }
                a && (e.stopPropagation(), e.preventDefault());
            },
            [P, ee, S.end]
        ),
        ea = a.useCallback(
            (e) => {
                et(e.clientX, !0);
            },
            [et]
        ),
        el = a.useCallback(
            (e) => {
                et(e.clientX, !1);
            },
            [et]
        ),
        ei = a.useCallback(() => {
            if (z) {
                var e;
                null == (e = P.current) || e.play();
            }
            H(!1), D(null);
        }, [P, z]);
    a.useEffect(
        () => (
            document.addEventListener('mousemove', el),
            document.addEventListener('mouseup', ei),
            () => {
                document.removeEventListener('mousemove', el), document.removeEventListener('mouseup', ei);
            }
        ),
        [el, ei]
    ),
        a.useEffect(() => {
            !(async function () {
                var e;
                let t = G.current,
                    n = T.current;
                if (null == t || null == n || null == I) return;
                (t.height = Y), (t.width = K);
                let r = t.getContext('2d');
                if (null == r) return;
                (r.fillStyle = '#000'), r.fillRect(0, 0, K, Y);
                let a = Math.ceil(Y * (n.videoWidth / n.videoHeight)),
                    l = Math.ceil(K / a),
                    i = J.current;
                if (null == i) return;
                (i.width = a), (i.height = Y);
                let o = null == i ? void 0 : i.getContext('2d', { willReadFrequently: !0 });
                if (null == o) return;
                let s = $.current;
                if ((null == (e = s[l]) ? void 0 : e.length) === l) {
                    for (let e = 0; e < l; e++) r.putImageData(s[l][e], a * e, 0);
                    return;
                }
                for (let e = 0; e < l; e++)
                    await new Promise((t) => {
                        (n.onseeked = () => {
                            r.drawImage(n, a * e, 0, a, Y), o.drawImage(n, 0, 0, a, Y);
                            let i = o.getImageData(0, 0, a, Y);
                            null == s[l] && (s[l] = []), (s[l][e] = i), t();
                        }),
                            (n.currentTime = (a / K) * I * e);
                    });
            })();
        }, [K, Y, G, I, J]);
    let eo = M - S.start,
        es = null == (l = P.current) ? void 0 : l.videoElement;
    return (0, r.jsx)('div', {
        className: b.centeringWrapper,
        children: (0, r.jsxs)('div', {
            className: b.timelineContainer,
            children: [
                (0, r.jsx)('div', {
                    className: b.playPauseButtonWrapper,
                    children: (0, r.jsx)(c.P3F, {
                        tabIndex: 0,
                        onClick: () => {
                            var e, t;
                            return R ? (null == (e = P.current) ? void 0 : e.pause()) : null == (t = P.current) ? void 0 : t.play();
                        },
                        className: b.playPauseButton,
                        children: R
                            ? (0, r.jsx)(c.fpf, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: b.playPauseIcon
                              })
                            : (0, r.jsx)(c.o1U, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: b.playPauseIcon
                              })
                    })
                }),
                (0, r.jsxs)('div', {
                    className: i()(b.timeline, { [b.timelineDragging]: null != F }),
                    onMouseDown: ea,
                    children: [
                        (0, r.jsx)('canvas', {
                            className: b.hiddenCanvas,
                            ref: J
                        }),
                        (0, r.jsx)('canvas', {
                            className: b.timelineBackground,
                            ref: G
                        }),
                        (0, r.jsx)(u.t, {
                            children: (0, r.jsx)('div', {
                                tabIndex: 0,
                                ref: Z,
                                className: b.playhead,
                                style: { left: null != es ? ''.concat((es.currentTime / es.duration) * 100, '%') : 0 }
                            })
                        }),
                        (0, r.jsx)(p.Z, {
                            preload: 'auto',
                            onLoadedMetadata: function () {
                                let e = T.current;
                                if (null != e) {
                                    if ((A(e.duration), 0 === S.start && (0 === S.end || S.end === e.duration))) {
                                        var t;
                                        null == (t = P.current) || t.seek(e.duration / 2), W(e.duration / 2);
                                    }
                                    0 === S.end && E((t) => y(j({}, t), { end: e.duration }));
                                }
                            },
                            className: b.timelineVideo,
                            ref: T,
                            src: O,
                            muted: !0
                        }),
                        (0, r.jsxs)('div', {
                            className: b.dragBox,
                            style: {
                                left: null != I ? ''.concat((S.start / I) * 100, '%') : '0',
                                right: null != I ? ''.concat(((I - S.end) / I) * 100, '%') : '0'
                            },
                            children: [
                                (0, r.jsx)('div', {
                                    className: b.timePillContainer,
                                    children: (0, r.jsx)('div', {
                                        ref: B,
                                        className: b.timePillBackground,
                                        children: (0, r.jsxs)(c.Text, {
                                            variant: 'text-sm/normal',
                                            className: b.timePillText,
                                            color: 'always-white',
                                            children: [
                                                w(eo),
                                                (0, r.jsx)('span', {
                                                    className: b.slashCharacter,
                                                    children: ' / '
                                                }),
                                                w(X)
                                            ]
                                        })
                                    })
                                }),
                                (0, r.jsx)(u.t, {
                                    children: (0, r.jsx)('button', {
                                        className: i()(b.dragHandleLeft, { [b.dragging]: 'start' === F }),
                                        onMouseDown: ea,
                                        onKeyDown: en,
                                        role: 'slider',
                                        tabIndex: 0,
                                        'aria-valuemin': 0,
                                        'aria-valuenow': S.start,
                                        'aria-valuetext': C(S.start),
                                        'aria-valuemax': S.end - g.Hp,
                                        'aria-label': x.NW.string(x.t['+BTvw8']),
                                        children: (0, r.jsx)('div', { className: b.cropLeftArrow })
                                    })
                                }),
                                (0, r.jsx)(u.t, {
                                    children: (0, r.jsx)('button', {
                                        className: i()(b.dragHandleRight, { [b.dragging]: 'end' === F }),
                                        onMouseDown: ea,
                                        onKeyDown: er,
                                        role: 'slider',
                                        tabIndex: 0,
                                        'aria-valuemin': S.start + g.Hp,
                                        'aria-valuenow': S.end,
                                        'aria-valuetext': C(S.end),
                                        'aria-valuemax': null == (N = P.current) || null == (_ = N.videoElement) ? void 0 : _.duration,
                                        'aria-label': x.NW.string(x.t.bBgBYm),
                                        children: (0, r.jsx)('div', { className: b.cropRightArrow })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
function w(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        n = Math.floor(e % 60),
        r = Math.floor((e % 1) * 100);
    return (t = t < 10 ? '0' + t : t), (n = n < 10 ? '0' + n : n), (r = r < 10 ? '0' + r : r), ''.concat(t, ':').concat(n, '.').concat(r);
}
function C(e) {
    let t = Math.floor(e / 60),
        n = x.NW.formatToPlainString(x.t.iXLF9f, { minutes: t }),
        r = x.NW.formatToPlainString(x.t.geSp4O, { seconds: e % 60 });
    return ''.concat(n, ' ').concat(r);
}
