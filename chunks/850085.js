n.d(t, { default: () => C }), n(47120), n(411104);
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
    p = n(511004),
    f = n(486324),
    b = n(981631),
    E = n(678916),
    N = n(388032),
    x = n(674619);
let C = (e) => {
    let { file: t, imageUri: n, transitionState: C, allowSkip: A = !1, onCrop: w, onClose: R, uploadType: T = f.pC.AVATAR, showUpsellHeader: y = !1, analyticsPage: v } = e,
        [I, O] = r.useState({
            width: 0,
            height: 0
        }),
        [j, B] = r.useState({
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
        [Z, G] = r.useState(null),
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
        (0, p.Z)();
    }, []),
        r.useEffect(() => {
            Y &&
                y &&
                _.default.track(b.rMx.OPEN_MODAL, {
                    type: b.jXE.CROP_GIF_MODAL,
                    location: { page: v }
                });
        }, [y, v, Y]);
    let K = () => {
            switch (T) {
                case f.pC.BANNER:
                    return {
                        height: f.f,
                        width: f.L0
                    };
                case f.pC.VIDEO_BACKGROUND:
                    return E.HE;
                case f.pC.AVATAR:
                case f.pC.AVATAR_DECORATION:
                    return {
                        height: b.dGM,
                        width: b.dGM
                    };
                case f.pC.GUILD_BANNER:
                    return {
                        height: f._T,
                        width: f.X_
                    };
                case f.pC.SCHEDULED_EVENT_IMAGE:
                    return {
                        height: f.xT,
                        width: f.d6
                    };
                case f.pC.HOME_HEADER:
                    return {
                        height: f.Uo,
                        width: f.N8
                    };
            }
        },
        q = r.useCallback(
            (e, t, n) => {
                (H.current = (0, m.U$)(e, t, n)), null != F.current && (F.current.style.transform = 'translate3d('.concat(H.current.x, 'px, ').concat(H.current.y, 'px, 0)'));
            },
            [F]
        ),
        $ = r.useCallback(() => {
            if (null == F.current || M > 1) return;
            let { width: e, height: t } = F.current.getBoundingClientRect(),
                { width: n, height: i } = (0, m.Es)(T, e, t, z),
                r = (0, m.AK)(T, n, i, t, z);
            G({
                width: n,
                height: i
            }),
                O(r),
                B((0, m.kH)(n, i, r));
        }, [z, T, M]),
        J = r.useCallback(
            (e) => {
                let { x: t, y: n } = H.current;
                if (P && (e.clientX !== t || e.clientY !== n)) q(e.clientX - S.x, e.clientY - S.y, j);
            },
            [j, P, S, q]
        ),
        Q = () => {
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
                    throw (null === (r = X.current) || void 0 === r || r.call(X), (X.current = null), Error('Error cropping GIF'));
                }
            else
                e = (0, a.PT)({
                    image: n,
                    cropDimensions: I,
                    cropOriginCoordinates: H.current,
                    maxDimensions: i
                });
            await w({
                imageUri: e,
                file: t
            }),
                W(!1),
                R();
        };
    r.useEffect(
        () => (
            window.addEventListener('mouseup', Q),
            window.addEventListener('resize', $),
            () => {
                window.removeEventListener('mouseup', Q), window.removeEventListener('resize', $);
            }
        ),
        [$]
    ),
        r.useEffect(
            () => () => {
                null != X.current && X.current();
            },
            []
        ),
        r.useEffect(() => {
            if (P) return window.addEventListener('mousemove', J), () => window.removeEventListener('mousemove', J);
        }, [J, P]);
    let en = T === f.pC.AVATAR || T === f.pC.BANNER,
        ei = (0, h.M)(!en);
    return (0, i.jsx)(c.Gt, {
        value: V,
        children: (0, i.jsxs)(l.Y0X, {
            onAnimationEnd: $,
            transitionState: C,
            size: l.CgR.MEDIUM,
            children: [
                y &&
                    !ei &&
                    (0, i.jsx)(d.Z, {
                        type: T,
                        analyticsPage: v,
                        analyticsSection: b.jXE.CROP_GIF_MODAL,
                        isGIF: Y,
                        banner: n
                    }),
                (0, i.jsx)(l.xBx, {
                    separator: !1,
                    children: (0, i.jsx)(l.vwX, {
                        className: x.titleCase,
                        tag: l.RB0.H1,
                        children: N.NW.string(N.t.DxAYCA)
                    })
                }),
                (0, i.jsxs)(l.hzk, {
                    className: x.modalContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: x.editingContainer,
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
                                            opacity: +(null != Z),
                                            transform: 'translate3d('.concat(H.current.x, 'px, ').concat(H.current.y, 'px, 0px)')
                                        },
                                        (() => {
                                            if (null == Z) return {};
                                            let e = Z.width / Z.height,
                                                t = ee() && e > f.MY ? I.height / Z.height : 1;
                                            return {
                                                width: Z.width * M * t,
                                                minWidth: Z.width * M * t,
                                                height: Z.height * M * t
                                            };
                                        })()
                                    ),
                                    className: U ? x.imageDisabled : x.imageEnabled,
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
                                    className: T === f.pC.AVATAR ? x.overlayAvatar : x.overlayBanner,
                                    style: {
                                        opacity: +(null != Z),
                                        width: I.width,
                                        height: I.height
                                    }
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: x.sliderContainer,
                            children: [
                                (0, i.jsx)(l.XBm, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: x.icon
                                }),
                                (0, i.jsx)(l.iRW, {
                                    initialValue: 1,
                                    minValue: 1,
                                    maxValue: 2,
                                    keyboardStep: 0.025,
                                    asValueChanges: (e) => {
                                        if (null == Z) return;
                                        let { width: t, height: n } = Z,
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
                                    className: x.icon,
                                    width: 48,
                                    height: 48
                                })
                            ]
                        }),
                        y &&
                            ei &&
                            (0, i.jsx)('div', {
                                children: (0, i.jsx)(g.Z, {
                                    uploadType: T,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: x.nitroUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(l.mzw, {
                    className: x.modalFooter,
                    children: [
                        A
                            ? (0, i.jsx)(l.zxk, {
                                  className: x.cancelButton,
                                  look: l.zxk.Looks.LINK,
                                  color: l.zxk.Colors.PRIMARY,
                                  size: l.PhG.SMALL,
                                  onClick: () => {
                                      A &&
                                          (w({
                                              imageUri: n,
                                              file: t
                                          }),
                                          R());
                                  },
                                  children: N.NW.string(N.t.B944ys)
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: x.buttonsRight,
                            children: [
                                (0, i.jsx)(l.zxk, {
                                    className: x.cancelButton,
                                    look: l.zxk.Looks.LINK,
                                    color: l.zxk.Colors.PRIMARY,
                                    size: l.PhG.SMALL,
                                    onClick: () => {
                                        if (null != X.current) {
                                            X.current(), (X.current = null), W(!1);
                                            return;
                                        }
                                        R();
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
