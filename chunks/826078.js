n(47120);
var a = n(200651),
    l = n(192379),
    i = n(120356),
    r = n.n(i),
    o = n(392711),
    s = n(399606),
    u = n(84735),
    d = n(481060),
    c = n(393238),
    m = n(98650),
    p = n(70097),
    v = n(451478),
    f = n(917042),
    b = n(20437),
    h = n(356659),
    x = n(388032),
    g = n(146555);
function j(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        n = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return (t = t < 10 ? '0' + t : t), (n = n < 10 ? '0' + n : n), (a = a < 10 ? '0' + a : a), ''.concat(t, ':').concat(n, '.').concat(a);
}
function C(e) {
    let t = Math.floor(e / 60),
        n = x.intl.formatToPlainString(x.t.iXLF9f, { minutes: t }),
        a = x.intl.formatToPlainString(x.t.geSp4O, { seconds: e % 60 });
    return ''.concat(n, ' ').concat(a);
}
t.Z = function (e) {
    var t, n, i, w, y, _;
    let { sourceURL: k } = e,
        { videoPlayerRef: S, cropData: N, setCropData: T } = (0, b.S)(),
        [L, F] = l.useState(((_ = !(null === (n = S.current) || void 0 === n ? void 0 : null === (t = n.videoElement) || void 0 === t ? void 0 : t.paused)), _)),
        R = l.useRef(null),
        [E, I] = l.useState(null),
        [P, B] = l.useState(),
        M = l.useRef(null),
        A = l.useRef(null),
        [Z, D] = l.useState(0),
        [z, O] = l.useState(!1),
        [H, W] = l.useState(null);
    (0, m.Z)(() => {
        var e;
        let t = null === (e = S.current) || void 0 === e ? void 0 : e.videoElement;
        null != t && Z !== t.currentTime && D(t.currentTime);
    });
    let U = l.useMemo(() => N.end - N.start, [N]);
    l.useEffect(() => {
        var e;
        let t = null === (e = S.current) || void 0 === e ? void 0 : e.videoElement,
            n = M.current,
            a = A.current;
        if (null == t || null == n || null == a) return;
        let l = (0, o.debounce)(F, h.HW),
            i = () => {
                I(null), O(!1), l.cancel(), l(!0);
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
    }, [S]);
    let { ref: V, width: K = 0, height: G = 0 } = (0, c.Z)(),
        X = (0, s.e7)([v.Z], () => v.Z.windowSize());
    l.useMemo(() => {
        X.width, X.height;
        let e = V.current;
        null != e && W(e.getBoundingClientRect());
    }, [X.width, X.height, K, V]);
    let Q = l.useRef(null),
        Y = l.useRef({}),
        J = l.useCallback(
            (e) => {
                var t;
                let n = (0, o.clamp)(e, 0, N.end - h.Hp);
                T({
                    ...N,
                    start: n
                }),
                    null === (t = S.current) || void 0 === t || t.seek(n);
            },
            [N, T, S]
        ),
        q = l.useCallback(
            (e) => {
                var t, n;
                let a = null === (t = S.current) || void 0 === t ? void 0 : t.videoElement;
                if (null == a) return;
                let l = (0, o.clamp)(e, N.start + h.Hp, a.duration);
                T({
                    ...N,
                    end: l
                }),
                    null === (n = S.current) || void 0 === n || n.seek(l);
            },
            [N, T, S]
        ),
        $ = l.useCallback(
            (e, t) => {
                var n, a;
                if (null == P) return;
                if (null == H) return null;
                let l = (((0, o.clamp)(e, H.left, H.right) - H.left) / H.width) * P,
                    i = (0, o.clamp)(l, 0, P),
                    r = E;
                if ((null == r && t && ((r = i <= N.start ? 'start' : i >= N.end ? 'end' : 'playhead'), null === (n = S.current) || void 0 === n || n.pause(), I(r), O(L)), 'start' === r)) J(i);
                else if ('end' === r) q(i);
                else if ('playhead' === r) {
                    let e = (0, o.clamp)(i, N.start, N.end);
                    null === (a = S.current) || void 0 === a || a.seek(e);
                }
            },
            [P, H, E, N.start, N.end, S, L, J, q]
        ),
        ee = l.useCallback(
            (e) => {
                var t;
                let n = null === (t = S.current) || void 0 === t ? void 0 : t.videoElement;
                if (null == n) return;
                let a = (0, f.Z)(n.duration, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case 'ArrowLeft':
                        (l = !0), J(N.start - a);
                        break;
                    case 'ArrowRight':
                        (l = !0), J(N.start + a);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [S, J, N.start]
        ),
        et = l.useCallback(
            (e) => {
                var t;
                let n = null === (t = S.current) || void 0 === t ? void 0 : t.videoElement;
                if (null == n) return;
                let a = (0, f.Z)(n.duration, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case 'ArrowLeft':
                        (l = !0), q(N.end - a);
                        break;
                    case 'ArrowRight':
                        (l = !0), q(N.end + a);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [S, q, N.end]
        ),
        en = l.useCallback(
            (e) => {
                $(e.clientX, !0);
            },
            [$]
        ),
        ea = l.useCallback(
            (e) => {
                $(e.clientX, !1);
            },
            [$]
        ),
        el = l.useCallback(() => {
            if (z) {
                var e;
                null === (e = S.current) || void 0 === e || e.play();
            }
            O(!1), I(null);
        }, [S, z]);
    l.useEffect(
        () => (
            document.addEventListener('mousemove', ea),
            document.addEventListener('mouseup', el),
            () => {
                document.removeEventListener('mousemove', ea), document.removeEventListener('mouseup', el);
            }
        ),
        [ea, el]
    ),
        l.useEffect(() => {
            (async function e() {
                var e;
                let t = V.current,
                    n = R.current;
                if (null == t || null == n || null == P) return;
                (t.height = G), (t.width = K);
                let a = t.getContext('2d');
                if (null == a) return;
                (a.fillStyle = '#000'), a.fillRect(0, 0, K, G);
                let l = Math.ceil(G * (n.videoWidth / n.videoHeight)),
                    i = Math.ceil(K / l),
                    r = Q.current;
                if (null == r) return;
                (r.width = l), (r.height = G);
                let o = null == r ? void 0 : r.getContext('2d', { willReadFrequently: !0 });
                if (null == o) return;
                let s = Y.current;
                if ((null === (e = s[i]) || void 0 === e ? void 0 : e.length) === i) {
                    for (let e = 0; e < i; e++) a.putImageData(s[i][e], l * e, 0);
                    return;
                }
                for (let e = 0; e < i; e++)
                    await new Promise((t) => {
                        (n.onseeked = () => {
                            a.drawImage(n, l * e, 0, l, G), o.drawImage(n, 0, 0, l, G);
                            let r = o.getImageData(0, 0, l, G);
                            null == s[i] && (s[i] = []), (s[i][e] = r), t();
                        }),
                            (n.currentTime = (l / K) * P * e);
                    });
            })();
        }, [K, G, V, P, Q]);
    let ei = Z - N.start,
        er = null === (i = S.current) || void 0 === i ? void 0 : i.videoElement;
    return (0, a.jsx)('div', {
        className: g.centeringWrapper,
        children: (0, a.jsxs)('div', {
            className: g.timelineContainer,
            children: [
                (0, a.jsx)('div', {
                    className: g.playPauseButtonWrapper,
                    children: (0, a.jsx)(d.Clickable, {
                        tabIndex: 0,
                        onClick: () => {
                            var e, t;
                            return L ? (null === (e = S.current) || void 0 === e ? void 0 : e.pause()) : null === (t = S.current) || void 0 === t ? void 0 : t.play();
                        },
                        className: g.playPauseButton,
                        children: L
                            ? (0, a.jsx)(d.PauseIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: g.playPauseIcon
                              })
                            : (0, a.jsx)(d.PlayIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: g.playPauseIcon
                              })
                    })
                }),
                (0, a.jsxs)('div', {
                    className: r()(g.timeline, { [g.timelineDragging]: null != E }),
                    onMouseDown: en,
                    children: [
                        (0, a.jsx)('canvas', {
                            className: g.hiddenCanvas,
                            ref: Q
                        }),
                        (0, a.jsx)('canvas', {
                            className: g.timelineBackground,
                            ref: V
                        }),
                        (0, a.jsx)(u.t, {
                            children: (0, a.jsx)('div', {
                                tabIndex: 0,
                                ref: M,
                                className: g.playhead,
                                style: { left: null != er ? ''.concat((er.currentTime / er.duration) * 100, '%') : 0 }
                            })
                        }),
                        (0, a.jsx)(p.Z, {
                            preload: 'auto',
                            onLoadedMetadata: function () {
                                let e = R.current;
                                if (null != e) {
                                    if ((B(e.duration), 0 === N.start && (0 === N.end || N.end === e.duration))) {
                                        var t;
                                        null === (t = S.current) || void 0 === t || t.seek(e.duration / 2), D(e.duration / 2);
                                    }
                                    0 === N.end &&
                                        T((t) => ({
                                            ...t,
                                            end: e.duration
                                        }));
                                }
                            },
                            className: g.timelineVideo,
                            ref: R,
                            src: k,
                            muted: !0
                        }),
                        (0, a.jsxs)('div', {
                            className: g.dragBox,
                            style: {
                                left: null != P ? ''.concat((N.start / P) * 100, '%') : '0',
                                right: null != P ? ''.concat(((P - N.end) / P) * 100, '%') : '0'
                            },
                            children: [
                                (0, a.jsx)('div', {
                                    className: g.timePillContainer,
                                    children: (0, a.jsx)('div', {
                                        ref: A,
                                        className: g.timePillBackground,
                                        children: (0, a.jsxs)(d.Text, {
                                            variant: 'text-sm/normal',
                                            className: g.timePillText,
                                            color: 'always-white',
                                            children: [
                                                j(ei),
                                                (0, a.jsx)('span', {
                                                    className: g.slashCharacter,
                                                    children: ' / '
                                                }),
                                                j(U)
                                            ]
                                        })
                                    })
                                }),
                                (0, a.jsx)(u.t, {
                                    children: (0, a.jsx)('button', {
                                        className: r()(g.dragHandleLeft, { [g.dragging]: 'start' === E }),
                                        onMouseDown: en,
                                        onKeyDown: ee,
                                        role: 'slider',
                                        tabIndex: 0,
                                        'aria-valuemin': 0,
                                        'aria-valuenow': N.start,
                                        'aria-valuetext': C(N.start),
                                        'aria-valuemax': N.end - h.Hp,
                                        'aria-label': x.intl.string(x.t['+BTvw8']),
                                        children: (0, a.jsx)('div', { className: g.cropLeftArrow })
                                    })
                                }),
                                (0, a.jsx)(u.t, {
                                    children: (0, a.jsx)('button', {
                                        className: r()(g.dragHandleRight, { [g.dragging]: 'end' === E }),
                                        onMouseDown: en,
                                        onKeyDown: et,
                                        role: 'slider',
                                        tabIndex: 0,
                                        'aria-valuemin': N.start + h.Hp,
                                        'aria-valuenow': N.end,
                                        'aria-valuetext': C(N.end),
                                        'aria-valuemax': null === (y = S.current) || void 0 === y ? void 0 : null === (w = y.videoElement) || void 0 === w ? void 0 : w.duration,
                                        'aria-label': x.intl.string(x.t.bBgBYm),
                                        children: (0, a.jsx)('div', { className: g.cropRightArrow })
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
