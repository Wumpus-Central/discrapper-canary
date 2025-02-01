a.d(t, { Z: () => j }), a(47120);
var n = a(200651),
    l = a(192379),
    i = a(120356),
    r = a.n(i),
    o = a(392711),
    s = a(399606),
    u = a(84735),
    d = a(481060),
    c = a(393238),
    m = a(98650),
    p = a(70097),
    v = a(451478),
    f = a(917042),
    h = a(20437),
    x = a(356659),
    g = a(388032),
    _ = a(146555);
let j = function (e) {
    var t, a, i, j, w, y;
    let { sourceURL: k } = e,
        { videoPlayerRef: N, cropData: S, setCropData: R } = (0, h.S)(),
        [E, L] = l.useState((y = !(null === (a = N.current) || void 0 === a ? void 0 : null === (t = a.videoElement) || void 0 === t ? void 0 : t.paused))),
        T = l.useRef(null),
        [F, P] = l.useState(null),
        [I, A] = l.useState(),
        Z = l.useRef(null),
        D = l.useRef(null),
        [B, M] = l.useState(0),
        [z, H] = l.useState(!1),
        [O, W] = l.useState(null);
    (0, m.Z)(() => {
        var e;
        let t = null === (e = N.current) || void 0 === e ? void 0 : e.videoElement;
        null != t && B !== t.currentTime && M(t.currentTime);
    });
    let U = l.useMemo(() => S.end - S.start, [S]);
    l.useEffect(() => {
        var e;
        let t = null === (e = N.current) || void 0 === e ? void 0 : e.videoElement,
            a = Z.current,
            n = D.current;
        if (null == t || null == a || null == n) return;
        let l = (0, o.debounce)(L, x.HW),
            i = () => {
                P(null), H(!1), l.cancel(), l(!0);
            },
            r = () => {
                l.cancel(), l(!1);
            };
        return (
            t.addEventListener('play', i),
            t.addEventListener('pause', r),
            () => {
                t.removeEventListener('play', i), t.removeEventListener('pause', r);
            }
        );
    }, [N]);
    let { ref: V, width: X = 0, height: G = 0 } = (0, c.Z)(),
        K = (0, s.e7)([v.Z], () => v.Z.windowSize());
    l.useMemo(() => {
        K.width, K.height;
        let e = V.current;
        null != e && W(e.getBoundingClientRect());
    }, [K.width, K.height, X, V]);
    let Y = l.useRef(null),
        Q = l.useRef({}),
        J = l.useCallback(
            (e) => {
                var t;
                let a = (0, o.clamp)(e, 0, S.end - x.Hp);
                R({
                    ...S,
                    start: a
                }),
                    null === (t = N.current) || void 0 === t || t.seek(a);
            },
            [S, R, N]
        ),
        $ = l.useCallback(
            (e) => {
                var t, a;
                let n = null === (t = N.current) || void 0 === t ? void 0 : t.videoElement;
                if (null == n) return;
                let l = (0, o.clamp)(e, S.start + x.Hp, n.duration);
                R({
                    ...S,
                    end: l
                }),
                    null === (a = N.current) || void 0 === a || a.seek(l);
            },
            [S, R, N]
        ),
        q = l.useCallback(
            (e, t) => {
                var a, n;
                if (null == I) return;
                if (null == O) return null;
                let l = (((0, o.clamp)(e, O.left, O.right) - O.left) / O.width) * I,
                    i = (0, o.clamp)(l, 0, I),
                    r = F;
                if ((null == r && t && ((r = i <= S.start ? 'start' : i >= S.end ? 'end' : 'playhead'), null === (a = N.current) || void 0 === a || a.pause(), P(r), H(E)), 'start' === r)) J(i);
                else if ('end' === r) $(i);
                else if ('playhead' === r) {
                    let e = (0, o.clamp)(i, S.start, S.end);
                    null === (n = N.current) || void 0 === n || n.seek(e);
                }
            },
            [I, O, F, S.start, S.end, N, E, J, $]
        ),
        ee = l.useCallback(
            (e) => {
                var t;
                let a = null === (t = N.current) || void 0 === t ? void 0 : t.videoElement;
                if (null == a) return;
                let n = (0, f.Z)(a.duration, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case 'ArrowLeft':
                        (l = !0), J(S.start - n);
                        break;
                    case 'ArrowRight':
                        (l = !0), J(S.start + n);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [N, J, S.start]
        ),
        et = l.useCallback(
            (e) => {
                var t;
                let a = null === (t = N.current) || void 0 === t ? void 0 : t.videoElement;
                if (null == a) return;
                let n = (0, f.Z)(a.duration, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case 'ArrowLeft':
                        (l = !0), $(S.end - n);
                        break;
                    case 'ArrowRight':
                        (l = !0), $(S.end + n);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [N, $, S.end]
        ),
        ea = l.useCallback(
            (e) => {
                q(e.clientX, !0);
            },
            [q]
        ),
        en = l.useCallback(
            (e) => {
                q(e.clientX, !1);
            },
            [q]
        ),
        el = l.useCallback(() => {
            if (z) {
                var e;
                null === (e = N.current) || void 0 === e || e.play();
            }
            H(!1), P(null);
        }, [N, z]);
    l.useEffect(
        () => (
            document.addEventListener('mousemove', en),
            document.addEventListener('mouseup', el),
            () => {
                document.removeEventListener('mousemove', en), document.removeEventListener('mouseup', el);
            }
        ),
        [en, el]
    ),
        l.useEffect(() => {
            (async function () {
                var e;
                let t = V.current,
                    a = T.current;
                if (null == t || null == a || null == I) return;
                (t.height = G), (t.width = X);
                let n = t.getContext('2d');
                if (null == n) return;
                (n.fillStyle = '#000'), n.fillRect(0, 0, X, G);
                let l = Math.ceil(G * (a.videoWidth / a.videoHeight)),
                    i = Math.ceil(X / l),
                    r = Y.current;
                if (null == r) return;
                (r.width = l), (r.height = G);
                let o = null == r ? void 0 : r.getContext('2d', { willReadFrequently: !0 });
                if (null == o) return;
                let s = Q.current;
                if ((null === (e = s[i]) || void 0 === e ? void 0 : e.length) === i) {
                    for (let e = 0; e < i; e++) n.putImageData(s[i][e], l * e, 0);
                    return;
                }
                for (let e = 0; e < i; e++)
                    await new Promise((t) => {
                        (a.onseeked = () => {
                            n.drawImage(a, l * e, 0, l, G), o.drawImage(a, 0, 0, l, G);
                            let r = o.getImageData(0, 0, l, G);
                            null == s[i] && (s[i] = []), (s[i][e] = r), t();
                        }),
                            (a.currentTime = (l / X) * I * e);
                    });
            })();
        }, [X, G, V, I, Y]);
    let ei = B - S.start,
        er = null === (i = N.current) || void 0 === i ? void 0 : i.videoElement;
    return (0, n.jsx)('div', {
        className: _.centeringWrapper,
        children: (0, n.jsxs)('div', {
            className: _.timelineContainer,
            children: [
                (0, n.jsx)('div', {
                    className: _.playPauseButtonWrapper,
                    children: (0, n.jsx)(d.P3F, {
                        tabIndex: 0,
                        onClick: () => {
                            var e, t;
                            return E ? (null === (e = N.current) || void 0 === e ? void 0 : e.pause()) : null === (t = N.current) || void 0 === t ? void 0 : t.play();
                        },
                        className: _.playPauseButton,
                        children: E
                            ? (0, n.jsx)(d.fpf, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: _.playPauseIcon
                              })
                            : (0, n.jsx)(d.o1U, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: _.playPauseIcon
                              })
                    })
                }),
                (0, n.jsxs)('div', {
                    className: r()(_.timeline, { [_.timelineDragging]: null != F }),
                    onMouseDown: ea,
                    children: [
                        (0, n.jsx)('canvas', {
                            className: _.hiddenCanvas,
                            ref: Y
                        }),
                        (0, n.jsx)('canvas', {
                            className: _.timelineBackground,
                            ref: V
                        }),
                        (0, n.jsx)(u.t, {
                            children: (0, n.jsx)('div', {
                                tabIndex: 0,
                                ref: Z,
                                className: _.playhead,
                                style: { left: null != er ? ''.concat((er.currentTime / er.duration) * 100, '%') : 0 }
                            })
                        }),
                        (0, n.jsx)(p.Z, {
                            preload: 'auto',
                            onLoadedMetadata: function () {
                                let e = T.current;
                                if (null != e) {
                                    if ((A(e.duration), 0 === S.start && (0 === S.end || S.end === e.duration))) {
                                        var t;
                                        null === (t = N.current) || void 0 === t || t.seek(e.duration / 2), M(e.duration / 2);
                                    }
                                    0 === S.end &&
                                        R((t) => ({
                                            ...t,
                                            end: e.duration
                                        }));
                                }
                            },
                            className: _.timelineVideo,
                            ref: T,
                            src: k,
                            muted: !0
                        }),
                        (0, n.jsxs)('div', {
                            className: _.dragBox,
                            style: {
                                left: null != I ? ''.concat((S.start / I) * 100, '%') : '0',
                                right: null != I ? ''.concat(((I - S.end) / I) * 100, '%') : '0'
                            },
                            children: [
                                (0, n.jsx)('div', {
                                    className: _.timePillContainer,
                                    children: (0, n.jsx)('div', {
                                        ref: D,
                                        className: _.timePillBackground,
                                        children: (0, n.jsxs)(d.Text, {
                                            variant: 'text-sm/normal',
                                            className: _.timePillText,
                                            color: 'always-white',
                                            children: [
                                                C(ei),
                                                (0, n.jsx)('span', {
                                                    className: _.slashCharacter,
                                                    children: ' / '
                                                }),
                                                C(U)
                                            ]
                                        })
                                    })
                                }),
                                (0, n.jsx)(u.t, {
                                    children: (0, n.jsx)('button', {
                                        className: r()(_.dragHandleLeft, { [_.dragging]: 'start' === F }),
                                        onMouseDown: ea,
                                        onKeyDown: ee,
                                        role: 'slider',
                                        tabIndex: 0,
                                        'aria-valuemin': 0,
                                        'aria-valuenow': S.start,
                                        'aria-valuetext': b(S.start),
                                        'aria-valuemax': S.end - x.Hp,
                                        'aria-label': g.intl.string(g.t['+BTvw8']),
                                        children: (0, n.jsx)('div', { className: _.cropLeftArrow })
                                    })
                                }),
                                (0, n.jsx)(u.t, {
                                    children: (0, n.jsx)('button', {
                                        className: r()(_.dragHandleRight, { [_.dragging]: 'end' === F }),
                                        onMouseDown: ea,
                                        onKeyDown: et,
                                        role: 'slider',
                                        tabIndex: 0,
                                        'aria-valuemin': S.start + x.Hp,
                                        'aria-valuenow': S.end,
                                        'aria-valuetext': b(S.end),
                                        'aria-valuemax': null === (w = N.current) || void 0 === w ? void 0 : null === (j = w.videoElement) || void 0 === j ? void 0 : j.duration,
                                        'aria-label': g.intl.string(g.t.bBgBYm),
                                        children: (0, n.jsx)('div', { className: _.cropRightArrow })
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
function C(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        a = Math.floor(e % 60),
        n = Math.floor((e % 1) * 100);
    return (t = t < 10 ? '0' + t : t), (a = a < 10 ? '0' + a : a), (n = n < 10 ? '0' + n : n), ''.concat(t, ':').concat(a, '.').concat(n);
}
function b(e) {
    let t = Math.floor(e / 60),
        a = g.intl.formatToPlainString(g.t.iXLF9f, { minutes: t }),
        n = g.intl.formatToPlainString(g.t.geSp4O, { seconds: e % 60 });
    return ''.concat(a, ' ').concat(n);
}
