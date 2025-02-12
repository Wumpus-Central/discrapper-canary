n.d(t, { default: () => N }), n(47120), n(411104);
var i = n(200651),
    o = n(192379),
    r = n(392711),
    a = n(36793),
    l = n(481060),
    s = n(100527),
    c = n(906732),
    d = n(540059),
    u = n(488499),
    _ = n(222062),
    g = n(530329),
    h = n(626135),
    m = n(197712),
    p = n(511004),
    x = n(486324),
    f = n(981631),
    C = n(678916),
    E = n(388032),
    b = n(2382);
let N = (e) => {
    let { file: t, imgURI: n, transitionState: N, allowSkip: v = !1, onCrop: T, onClose: B, uploadType: I = x.pC.AVATAR, showUpsellHeader: A = !1, analyticsPage: R } = e,
        [w, k] = o.useState({
            width: 0,
            height: 0
        }),
        [y, j] = o.useState({
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }),
        [P, Z] = o.useState(!1),
        [L, M] = o.useState(1),
        [S, D] = o.useState({
            x: 0,
            y: 0
        }),
        [z, G] = o.useState(null),
        [O, U] = o.useState(!1),
        { analyticsLocations: V } = (0, c.ZP)(s.Z.IMAGE_CROPPING_MODAL),
        W = (0, d.Q3)('ImageCroppingNModal'),
        H = o.useRef({
            x: 0,
            y: 0
        }),
        F = o.useRef(null),
        X = o.useRef(null),
        Y = 'image/gif' === t.type;
    o.useEffect(() => {
        (0, p.Z)();
    }, []),
        o.useEffect(() => {
            Y &&
                A &&
                h.default.track(f.rMx.OPEN_MODAL, {
                    type: f.jXE.CROP_GIF_MODAL,
                    location: { page: R }
                });
        }, [A, R, Y]);
    let K = () => {
            switch (I) {
                case x.pC.BANNER:
                    return {
                        height: x.f,
                        width: x.L0
                    };
                case x.pC.VIDEO_BACKGROUND:
                    return C.HE;
                case x.pC.AVATAR:
                case x.pC.AVATAR_DECORATION:
                    return {
                        height: f.dGM,
                        width: f.dGM
                    };
                case x.pC.GUILD_BANNER:
                    return {
                        height: x._T,
                        width: x.X_
                    };
                case x.pC.SCHEDULED_EVENT_IMAGE:
                    return {
                        height: x.xT,
                        width: x.d6
                    };
                case x.pC.HOME_HEADER:
                    return {
                        height: x.Uo,
                        width: x.N8
                    };
            }
        },
        q = o.useCallback(
            (e, t, n) => {
                (H.current = (0, m.U$)(e, t, n)), null != F.current && (F.current.style.transform = 'translate3d('.concat(H.current.x, 'px, ').concat(H.current.y, 'px, 0)'));
            },
            [F]
        ),
        Q = o.useCallback(() => {
            if (null == F.current || L > 1) return;
            let { width: e, height: t } = F.current.getBoundingClientRect(),
                { width: n, height: i } = (0, m.Es)(I, e, t, W),
                o = (0, m.AK)(I, n, i, t, W);
            G({
                width: n,
                height: i
            }),
                k(o),
                j((0, m.kH)(n, i, o));
        }, [W, I, L]),
        $ = o.useCallback(
            (e) => {
                let { x: t, y: n } = H.current;
                if (P && (e.clientX !== t || e.clientY !== n)) q(e.clientX - S.x, e.clientY - S.y, y);
            },
            [y, P, S, q]
        ),
        J = () => {
            Z(!1);
        },
        ee = () => {
            let e = K();
            return e.width !== e.height;
        },
        et = async () => {
            let e;
            if (null == F.current) return;
            U(!0);
            let n = F.current,
                i = K();
            if (Y)
                try {
                    let { result: o, cancelFn: r } = await (0, m.$p)({
                        file: t,
                        image: n,
                        cropDimensions: w,
                        cropOriginCoordinates: H.current,
                        maxDimensions: i
                    });
                    (X.current = r), (e = await o), (X.current = null);
                } catch (e) {
                    var o;
                    throw (null === (o = X.current) || void 0 === o || o.call(X), (X.current = null), Error('Error cropping GIF'));
                }
            else
                e = (0, a.PT)({
                    image: n,
                    cropDimensions: w,
                    cropOriginCoordinates: H.current,
                    maxDimensions: i
                });
            await T(e, t), U(!1), B();
        };
    o.useEffect(
        () => (
            window.addEventListener('mouseup', J),
            window.addEventListener('resize', Q),
            () => {
                window.removeEventListener('mouseup', J), window.removeEventListener('resize', Q);
            }
        ),
        [Q]
    ),
        o.useEffect(
            () => () => {
                null != X.current && X.current();
            },
            []
        ),
        o.useEffect(() => {
            if (P) return window.addEventListener('mousemove', $), () => window.removeEventListener('mousemove', $);
        }, [$, P]);
    let en = I === x.pC.AVATAR || I === x.pC.BANNER,
        ei = (0, _.M)(!en);
    return (0, i.jsx)(c.Gt, {
        value: V,
        children: (0, i.jsxs)(l.Y0X, {
            onAnimationEnd: Q,
            transitionState: N,
            size: l.CgR.MEDIUM,
            children: [
                A &&
                    !ei &&
                    (0, i.jsx)(u.Z, {
                        type: I,
                        analyticsPage: R,
                        analyticsSection: f.jXE.CROP_GIF_MODAL,
                        isGIF: Y,
                        banner: n
                    }),
                (0, i.jsx)(l.xBx, {
                    separator: !1,
                    children: (0, i.jsx)(l.vwX, {
                        className: b.titleCase,
                        tag: l.RB0.H1,
                        children: E.intl.string(E.t.DxAYCA)
                    })
                }),
                (0, i.jsxs)(l.hzk, {
                    className: b.modalContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: b.editingContainer,
                            children: [
                                (0, i.jsx)('img', {
                                    style: {
                                        opacity: null == z ? 0 : 1,
                                        transform: 'translate3d('.concat(H.current.x, 'px, ').concat(H.current.y, 'px, 0px)'),
                                        ...(() => {
                                            if (null == z) return {};
                                            let e = z.width / z.height,
                                                t = ee() && e > x.MY ? w.height / z.height : 1;
                                            return {
                                                width: z.width * L * t,
                                                minWidth: z.width * L * t,
                                                height: z.height * L * t
                                            };
                                        })()
                                    },
                                    className: O ? b.imageDisabled : b.imageEnabled,
                                    src: n,
                                    alt: 'avatar',
                                    ref: F,
                                    onMouseDown: (e) => {
                                        D({
                                            x: e.clientX - H.current.x,
                                            y: e.clientY - H.current.y
                                        }),
                                            Z(!0);
                                    },
                                    draggable: !1
                                }),
                                (0, i.jsx)('div', {
                                    className: I === x.pC.AVATAR ? b.overlayAvatar : b.overlayBanner,
                                    style: {
                                        opacity: null == z ? 0 : 1,
                                        width: w.width,
                                        height: w.height
                                    }
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: b.sliderContainer,
                            children: [
                                (0, i.jsx)(l.XBm, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: b.icon
                                }),
                                (0, i.jsx)(l.iRW, {
                                    initialValue: 1,
                                    minValue: 1,
                                    maxValue: 2,
                                    keyboardStep: 0.025,
                                    asValueChanges: (e) => {
                                        if (null == z) return;
                                        let { width: t, height: n } = z,
                                            i = (0, m.kH)(t * e, n * e, w),
                                            { x: o, y: a } = H.current;
                                        ((0, r.inRange)(o, i.right, i.left) && (0, r.inRange)(a, i.top, i.bottom)) || q(o, a, i), M(e), j(i);
                                    },
                                    disabled: O,
                                    equidistant: !0,
                                    hideBubble: !0,
                                    'aria-label': E.intl.string(E.t.dnvZSk)
                                }),
                                (0, i.jsx)(l.XBm, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: b.icon,
                                    width: 48,
                                    height: 48
                                })
                            ]
                        }),
                        A &&
                            ei &&
                            (0, i.jsx)('div', {
                                children: (0, i.jsx)(g.Z, {
                                    uploadType: I,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: b.nitroUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(l.mzw, {
                    className: b.modalFooter,
                    children: [
                        v
                            ? (0, i.jsx)(l.zxk, {
                                  className: b.cancelButton,
                                  look: l.zxk.Looks.LINK,
                                  color: l.zxk.Colors.PRIMARY,
                                  size: l.PhG.SMALL,
                                  onClick: () => {
                                      v && (T(n, t), B());
                                  },
                                  children: E.intl.string(E.t.B944ys)
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: b.buttonsRight,
                            children: [
                                (0, i.jsx)(l.zxk, {
                                    className: b.cancelButton,
                                    look: l.zxk.Looks.LINK,
                                    color: l.zxk.Colors.PRIMARY,
                                    size: l.PhG.SMALL,
                                    onClick: () => {
                                        if (null != X.current) {
                                            X.current(), (X.current = null), U(!1);
                                            return;
                                        }
                                        B();
                                    },
                                    children: E.intl.string(E.t['9TG40t'])
                                }),
                                (0, i.jsx)(l.zxk, {
                                    submitting: O,
                                    size: l.PhG.SMALL,
                                    onClick: et,
                                    children: E.intl.string(E.t.ZSHmKC)
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
