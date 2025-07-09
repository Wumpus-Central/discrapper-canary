(n.d(t, { Z: () => _ }), n(388685));
var a = n(255367),
    r = n(73800),
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
            a = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                ((a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a));
            }));
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
let _ = function (e) {
    var t, n, l, _, P, k;
    let { sourceURL: O } = e,
        { videoPlayerRef: S, cropData: N, setCropData: E } = (0, h.S)(),
        [R, L] = r.useState((((k = !(null == (n = S.current) || null == (t = n.videoElement) ? void 0 : t.paused)), true), k)),
        T = r.useRef(null),
        [F, D] = r.useState(null),
        [I, A] = r.useState(),
        Z = r.useRef(null),
        B = r.useRef(null),
        [M, z] = r.useState(0),
        [H, W] = r.useState(!1),
        [U, V] = r.useState(null);
    (0, m.Z)(() => {
        var e;
        let t = null == (e = S.current) ? void 0 : e.videoElement;
        null != t && M !== t.currentTime && z(t.currentTime);
    });
    let X = r.useMemo(() => N.end - N.start, [N]);
    r.useEffect(() => {
        var e;
        let t = null == (e = S.current) ? void 0 : e.videoElement,
            n = Z.current,
            a = B.current;
        if (null == t || null == n || null == a) return;
        let r = (0, o.debounce)(L, g.HW),
            l = () => {
                (D(null), W(!1), r.cancel(), r(!0));
            },
            i = () => {
                (r.cancel(), r(!1));
            };
        return (
            t.addEventListener('play', l),
            t.addEventListener('pause', i),
            () => {
                (t.removeEventListener('play', l), t.removeEventListener('pause', i));
            }
        );
    }, [S]);
    let { ref: G, width: K = 0, height: Y = 0 } = (0, d.ZP)(),
        Q = (0, s.e7)([f.Z], () => f.Z.windowSize());
    r.useMemo(() => {
        (Q.width, Q.height);
        let e = G.current;
        null != e && V(e.getBoundingClientRect());
    }, [Q.width, Q.height, K, G]);
    let J = r.useRef(null),
        $ = r.useRef({}),
        q = r.useCallback(
            (e) => {
                var t;
                let n = (0, o.clamp)(e, 0, N.end - g.Hp);
                (E(y(j({}, N), { start: n })), null == (t = S.current) || t.seek(n));
            },
            [N, E, S]
        ),
        ee = r.useCallback(
            (e) => {
                var t, n;
                let a = null == (t = S.current) ? void 0 : t.videoElement;
                if (null == a) return;
                let r = (0, o.clamp)(e, N.start + g.Hp, a.duration);
                (E(y(j({}, N), { end: r })), null == (n = S.current) || n.seek(r));
            },
            [N, E, S]
        ),
        et = r.useCallback(
            (e, t) => {
                var n, a;
                if (null == I) return;
                if (null == U) return null;
                let r = (((0, o.clamp)(e, U.left, U.right) - U.left) / U.width) * I,
                    l = (0, o.clamp)(r, 0, I),
                    i = F;
                if ((null == i && t && ((i = l <= N.start ? 'start' : l >= N.end ? 'end' : 'playhead'), null == (n = S.current) || n.pause(), D(i), W(R)), 'start' === i)) q(l);
                else if ('end' === i) ee(l);
                else if ('playhead' === i) {
                    let e = (0, o.clamp)(l, N.start, N.end);
                    null == (a = S.current) || a.seek(e);
                }
            },
            [I, U, F, N.start, N.end, S, R, q, ee]
        ),
        en = r.useCallback(
            (e) => {
                var t;
                let n = null == (t = S.current) ? void 0 : t.videoElement;
                if (null == n) return;
                let a = (0, v.Z)(n.duration, e.shiftKey),
                    r = !1;
                switch (e.key) {
                    case 'ArrowLeft':
                        ((r = !0), q(N.start - a));
                        break;
                    case 'ArrowRight':
                        ((r = !0), q(N.start + a));
                }
                r && (e.stopPropagation(), e.preventDefault());
            },
            [S, q, N.start]
        ),
        ea = r.useCallback(
            (e) => {
                var t;
                let n = null == (t = S.current) ? void 0 : t.videoElement;
                if (null == n) return;
                let a = (0, v.Z)(n.duration, e.shiftKey),
                    r = !1;
                switch (e.key) {
                    case 'ArrowLeft':
                        ((r = !0), ee(N.end - a));
                        break;
                    case 'ArrowRight':
                        ((r = !0), ee(N.end + a));
                }
                r && (e.stopPropagation(), e.preventDefault());
            },
            [S, ee, N.end]
        ),
        er = r.useCallback(
            (e) => {
                et(e.clientX, !0);
            },
            [et]
        ),
        el = r.useCallback(
            (e) => {
                et(e.clientX, !1);
            },
            [et]
        ),
        ei = r.useCallback(() => {
            if (H) {
                var e;
                null == (e = S.current) || e.play();
            }
            (W(!1), D(null));
        }, [S, H]);
    (r.useEffect(
        () => (
            document.addEventListener('mousemove', el),
            document.addEventListener('mouseup', ei),
            () => {
                (document.removeEventListener('mousemove', el), document.removeEventListener('mouseup', ei));
            }
        ),
        [el, ei]
    ),
        r.useEffect(() => {
            !(async function () {
                var e;
                let t = G.current,
                    n = T.current;
                if (null == t || null == n || null == I) return;
                ((t.height = Y), (t.width = K));
                let a = t.getContext('2d');
                if (null == a) return;
                ((a.fillStyle = '#000'), a.fillRect(0, 0, K, Y));
                let r = Math.ceil(Y * (n.videoWidth / n.videoHeight)),
                    l = Math.ceil(K / r),
                    i = J.current;
                if (null == i) return;
                ((i.width = r), (i.height = Y));
                let o = null == i ? void 0 : i.getContext('2d', { willReadFrequently: !0 });
                if (null == o) return;
                let s = $.current;
                if ((null == (e = s[l]) ? void 0 : e.length) === l) {
                    for (let e = 0; e < l; e++) a.putImageData(s[l][e], r * e, 0);
                    return;
                }
                for (let e = 0; e < l; e++)
                    await new Promise((t) => {
                        ((n.onseeked = () => {
                            (a.drawImage(n, r * e, 0, r, Y), o.drawImage(n, 0, 0, r, Y));
                            let i = o.getImageData(0, 0, r, Y);
                            (null == s[l] && (s[l] = []), (s[l][e] = i), t());
                        }),
                            (n.currentTime = (r / K) * I * e));
                    });
            })();
        }, [K, Y, G, I, J]));
    let eo = M - N.start,
        es = null == (l = S.current) ? void 0 : l.videoElement;
    return (0, a.jsx)('div', {
        className: b.centeringWrapper,
        children: (0, a.jsxs)('div', {
            className: b.timelineContainer,
            children: [
                (0, a.jsx)('div', {
                    className: b.playPauseButtonWrapper,
                    children: (0, a.jsx)(c.P3F, {
                        tabIndex: 0,
                        onClick: () => {
                            var e, t;
                            return R ? (null == (e = S.current) ? void 0 : e.pause()) : null == (t = S.current) ? void 0 : t.play();
                        },
                        className: b.playPauseButton,
                        children: R
                            ? (0, a.jsx)(c.fpf, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: b.playPauseIcon
                              })
                            : (0, a.jsx)(c.o1U, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: b.playPauseIcon
                              })
                    })
                }),
                (0, a.jsxs)('div', {
                    className: i()(b.timeline, { [b.timelineDragging]: null != F }),
                    onMouseDown: er,
                    children: [
                        (0, a.jsx)('canvas', {
                            className: b.hiddenCanvas,
                            ref: J
                        }),
                        (0, a.jsx)('canvas', {
                            className: b.timelineBackground,
                            ref: G
                        }),
                        (0, a.jsx)(u.t, {
                            children: (0, a.jsx)('div', {
                                tabIndex: 0,
                                ref: Z,
                                className: b.playhead,
                                style: { left: null != es ? ''.concat((es.currentTime / es.duration) * 100, '%') : 0 }
                            })
                        }),
                        (0, a.jsx)(p.Z, {
                            preload: 'auto',
                            onLoadedMetadata: function () {
                                let e = T.current;
                                if (null != e) {
                                    if ((A(e.duration), 0 === N.start && (0 === N.end || N.end === e.duration))) {
                                        var t;
                                        (null == (t = S.current) || t.seek(e.duration / 2), z(e.duration / 2));
                                    }
                                    0 === N.end && E((t) => y(j({}, t), { end: e.duration }));
                                }
                            },
                            className: b.timelineVideo,
                            ref: T,
                            src: O,
                            muted: !0
                        }),
                        (0, a.jsxs)('div', {
                            className: b.dragBox,
                            style: {
                                left: null != I ? ''.concat((N.start / I) * 100, '%') : '0',
                                right: null != I ? ''.concat(((I - N.end) / I) * 100, '%') : '0'
                            },
                            children: [
                                (0, a.jsx)('div', {
                                    className: b.timePillContainer,
                                    children: (0, a.jsx)('div', {
                                        ref: B,
                                        className: b.timePillBackground,
                                        children: (0, a.jsxs)(c.Text, {
                                            variant: 'text-sm/normal',
                                            className: b.timePillText,
                                            color: 'always-white',
                                            children: [
                                                w(eo),
                                                (0, a.jsx)('span', {
                                                    className: b.slashCharacter,
                                                    children: ' / '
                                                }),
                                                w(X)
                                            ]
                                        })
                                    })
                                }),
                                (0, a.jsx)(u.t, {
                                    children: (0, a.jsx)('button', {
                                        className: i()(b.dragHandleLeft, { [b.dragging]: 'start' === F }),
                                        onMouseDown: er,
                                        onKeyDown: en,
                                        role: 'slider',
                                        tabIndex: 0,
                                        'aria-valuemin': 0,
                                        'aria-valuenow': N.start,
                                        'aria-valuetext': C(N.start),
                                        'aria-valuemax': N.end - g.Hp,
                                        'aria-label': x.intl.string(x.t['+BTvw8']),
                                        children: (0, a.jsx)('div', { className: b.cropLeftArrow })
                                    })
                                }),
                                (0, a.jsx)(u.t, {
                                    children: (0, a.jsx)('button', {
                                        className: i()(b.dragHandleRight, { [b.dragging]: 'end' === F }),
                                        onMouseDown: er,
                                        onKeyDown: ea,
                                        role: 'slider',
                                        tabIndex: 0,
                                        'aria-valuemin': N.start + g.Hp,
                                        'aria-valuenow': N.end,
                                        'aria-valuetext': C(N.end),
                                        'aria-valuemax': null == (P = S.current) || null == (_ = P.videoElement) ? void 0 : _.duration,
                                        'aria-label': x.intl.string(x.t.bBgBYm),
                                        children: (0, a.jsx)('div', { className: b.cropRightArrow })
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
        a = Math.floor((e % 1) * 100);
    return ((t = t < 10 ? '0' + t : t), (n = n < 10 ? '0' + n : n), (a = a < 10 ? '0' + a : a), ''.concat(t, ':').concat(n, '.').concat(a));
}
function C(e) {
    let t = Math.floor(e / 60),
        n = x.intl.formatToPlainString(x.t.iXLF9f, { minutes: t }),
        a = x.intl.formatToPlainString(x.t.geSp4O, { seconds: e % 60 });
    return ''.concat(n, ' ').concat(a);
}
