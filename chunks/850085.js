n.d(t, { default: () => x }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    o = n(392711),
    a = n(36793),
    l = n(481060),
    s = n(100527),
    c = n(906732),
    u = n(540059),
    d = n(488499),
    h = n(222062),
    g = n(530329),
    _ = n(626135),
    m = n(197712),
    f = n(511004),
    p = n(486324),
    b = n(981631),
    E = n(678916),
    N = n(388032),
    C = n(817056);
let x = (e) => {
    let { file: t, imageUri: n, transitionState: x, allowSkip: R = !1, onCrop: A, onClose: v, uploadType: w = p.pC.AVATAR, showUpsellHeader: T = !1, analyticsPage: y } = e,
        [I, j] = r.useState({
            width: 0,
            height: 0
        }),
        [O, B] = r.useState({
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }),
        [P, k] = r.useState(!1),
        [M, D] = r.useState(1),
        [S, L] = r.useState({
            x: 0,
            y: 0
        }),
        [G, Z] = r.useState(null),
        [U, W] = r.useState(!1),
        { analyticsLocations: V } = (0, c.ZP)(s.Z.IMAGE_CROPPING_MODAL),
        z = (0, u.Q3)('ImageCroppingNModal'),
        H = r.useRef({
            x: 0,
            y: 0
        }),
        F = r.useRef(null),
        X = r.useRef(null),
        Y = 'image/gif' === t.type;
    r.useEffect(() => {
        (0, f.Z)();
    }, []),
        r.useEffect(() => {
            Y &&
                T &&
                _.default.track(b.rMx.OPEN_MODAL, {
                    type: b.jXE.CROP_GIF_MODAL,
                    location: { page: y }
                });
        }, [T, y, Y]);
    let K = () => {
            switch (w) {
                case p.pC.BANNER:
                    return {
                        height: p.f,
                        width: p.L0
                    };
                case p.pC.VIDEO_BACKGROUND:
                    return E.HE;
                case p.pC.AVATAR:
                case p.pC.AVATAR_DECORATION:
                    return {
                        height: b.dGM,
                        width: b.dGM
                    };
                case p.pC.GUILD_BANNER:
                    return {
                        height: p._T,
                        width: p.X_
                    };
                case p.pC.SCHEDULED_EVENT_IMAGE:
                    return {
                        height: p.xT,
                        width: p.d6
                    };
                case p.pC.HOME_HEADER:
                    return {
                        height: p.Uo,
                        width: p.N8
                    };
            }
        },
        q = r.useCallback(
            (e, t, n) => {
                (H.current = (0, m.U$)(e, t, n)), null != F.current && (F.current.style.transform = 'translate3d('.concat(H.current.x, 'px, ').concat(H.current.y, 'px, 0)'));
            },
            [F]
        ),
        Q = r.useCallback(() => {
            if (null == F.current || M > 1) return;
            let { width: e, height: t } = F.current.getBoundingClientRect(),
                { width: n, height: i } = (0, m.Es)(w, e, t, z),
                r = (0, m.AK)(w, n, i, t, z);
            Z({
                width: n,
                height: i
            }),
                j(r),
                B((0, m.kH)(n, i, r));
        }, [z, w, M]),
        $ = r.useCallback(
            (e) => {
                let { x: t, y: n } = H.current;
                if (P && (e.clientX !== t || e.clientY !== n)) q(e.clientX - S.x, e.clientY - S.y, O);
            },
            [O, P, S, q]
        ),
        J = () => {
            k(!1);
        },
        ee = () => {
            let e = K();
            return e.width !== e.height;
        },
        et = async () => {
            let e;
            if (null == F.current) return;
            W(!0);
            let n = F.current,
                i = K();
            if (Y)
                try {
                    let { result: r, cancelFn: o } = await (0, m.$p)({
                        file: t,
                        image: n,
                        cropDimensions: I,
                        cropOriginCoordinates: H.current,
                        maxDimensions: i
                    });
                    (X.current = o), (e = await r), (X.current = null);
                } catch (e) {
                    var r;
                    throw (null == (r = X.current) || r.call(X), (X.current = null), Error('Error cropping GIF'));
                }
            else
                e = (0, a.PT)({
                    image: n,
                    cropDimensions: I,
                    cropOriginCoordinates: H.current,
                    maxDimensions: i
                });
            await A({
                imageUri: e,
                file: t
            }),
                W(!1),
                v();
        };
    r.useEffect(
        () => (
            window.addEventListener('mouseup', J),
            window.addEventListener('resize', Q),
            () => {
                window.removeEventListener('mouseup', J), window.removeEventListener('resize', Q);
            }
        ),
        [Q]
    ),
        r.useEffect(
            () => () => {
                null != X.current && X.current();
            },
            []
        ),
        r.useEffect(() => {
            if (P) return window.addEventListener('mousemove', $), () => window.removeEventListener('mousemove', $);
        }, [$, P]);
    let en = w === p.pC.AVATAR || w === p.pC.BANNER,
        ei = (0, h.M)(!en);
    return (0, i.jsx)(c.Gt, {
        value: V,
        children: (0, i.jsxs)(l.Y0X, {
            onAnimationEnd: Q,
            transitionState: x,
            size: l.CgR.MEDIUM,
            children: [
                T &&
                    !ei &&
                    (0, i.jsx)(d.Z, {
                        type: w,
                        analyticsPage: y,
                        analyticsSection: b.jXE.CROP_GIF_MODAL,
                        isGIF: Y,
                        banner: n
                    }),
                (0, i.jsx)(l.xBx, {
                    separator: !1,
                    children: (0, i.jsx)(l.vwX, {
                        className: C.titleCase,
                        tag: l.RB0.H1,
                        children: N.NW.string(N.t.DxAYCA)
                    })
                }),
                (0, i.jsxs)(l.hzk, {
                    className: C.modalContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: C.editingContainer,
                            children: [
                                (0, i.jsx)('img', {
                                    style: (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                i = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                i.forEach(function (t) {
                                                    var i;
                                                    (i = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = i);
                                                });
                                        }
                                        return e;
                                    })(
                                        {
                                            opacity: +(null != G),
                                            transform: 'translate3d('.concat(H.current.x, 'px, ').concat(H.current.y, 'px, 0px)')
                                        },
                                        (() => {
                                            if (null == G) return {};
                                            let e = G.width / G.height,
                                                t = ee() && e > p.MY ? I.height / G.height : 1;
                                            return {
                                                width: G.width * M * t,
                                                minWidth: G.width * M * t,
                                                height: G.height * M * t
                                            };
                                        })()
                                    ),
                                    className: U ? C.imageDisabled : C.imageEnabled,
                                    src: n,
                                    alt: 'avatar',
                                    ref: F,
                                    onMouseDown: (e) => {
                                        L({
                                            x: e.clientX - H.current.x,
                                            y: e.clientY - H.current.y
                                        }),
                                            k(!0);
                                    },
                                    draggable: !1
                                }),
                                (0, i.jsx)('div', {
                                    className: w === p.pC.AVATAR ? C.overlayAvatar : C.overlayBanner,
                                    style: {
                                        opacity: +(null != G),
                                        width: I.width,
                                        height: I.height
                                    }
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: C.sliderContainer,
                            children: [
                                (0, i.jsx)(l.XBm, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: C.icon
                                }),
                                (0, i.jsx)(l.iRW, {
                                    initialValue: 1,
                                    minValue: 1,
                                    maxValue: 2,
                                    keyboardStep: 0.025,
                                    asValueChanges: (e) => {
                                        if (null == G) return;
                                        let { width: t, height: n } = G,
                                            i = (0, m.kH)(t * e, n * e, I),
                                            { x: r, y: a } = H.current;
                                        ((0, o.inRange)(r, i.right, i.left) && (0, o.inRange)(a, i.top, i.bottom)) || q(r, a, i), D(e), B(i);
                                    },
                                    disabled: U,
                                    equidistant: !0,
                                    hideBubble: !0,
                                    'aria-label': N.NW.string(N.t.dnvZSk)
                                }),
                                (0, i.jsx)(l.XBm, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: C.icon,
                                    width: 48,
                                    height: 48
                                })
                            ]
                        }),
                        T &&
                            ei &&
                            (0, i.jsx)('div', {
                                children: (0, i.jsx)(g.Z, {
                                    uploadType: w,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: C.nitroUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(l.mzw, {
                    className: C.modalFooter,
                    children: [
                        R
                            ? (0, i.jsx)(l.zxk, {
                                  className: C.cancelButton,
                                  look: l.zxk.Looks.LINK,
                                  color: l.zxk.Colors.PRIMARY,
                                  size: l.PhG.SMALL,
                                  onClick: () => {
                                      R &&
                                          (A({
                                              imageUri: n,
                                              file: t
                                          }),
                                          v());
                                  },
                                  children: N.NW.string(N.t.B944ys)
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: C.buttonsRight,
                            children: [
                                (0, i.jsx)(l.zxk, {
                                    className: C.cancelButton,
                                    look: l.zxk.Looks.LINK,
                                    color: l.zxk.Colors.PRIMARY,
                                    size: l.PhG.SMALL,
                                    onClick: () => {
                                        if (null != X.current) {
                                            X.current(), (X.current = null), W(!1);
                                            return;
                                        }
                                        v();
                                    },
                                    children: N.NW.string(N.t['9TG40t'])
                                }),
                                (0, i.jsx)(l.zxk, {
                                    submitting: U,
                                    size: l.PhG.SMALL,
                                    onClick: et,
                                    children: N.NW.string(N.t.ZSHmKC)
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
