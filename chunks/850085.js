i.d(t, { default: () => A }), i(47120), i(411104);
var n = i(200651),
    r = i(192379),
    o = i(392711),
    a = i(36793),
    l = i(481060),
    s = i(100527),
    c = i(906732),
    u = i(540059),
    d = i(488499),
    h = i(222062),
    g = i(530329),
    _ = i(626135),
    m = i(197712),
    E = i(511004),
    p = i(486324),
    x = i(981631),
    C = i(678916),
    f = i(388032),
    N = i(310857);
let A = (e) => {
    let { file: t, imgURI: i, transitionState: A, allowSkip: R = !1, onCrop: T, onClose: b, uploadType: I = p.pC.AVATAR, showUpsellHeader: w = !1, analyticsPage: B } = e,
        [v, k] = r.useState({
            width: 0,
            height: 0
        }),
        [y, j] = r.useState({
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }),
        [M, P] = r.useState(!1),
        [L, D] = r.useState(1),
        [Z, G] = r.useState({
            x: 0,
            y: 0
        }),
        [O, S] = r.useState(null),
        [U, V] = r.useState(!1),
        { analyticsLocations: z } = (0, c.ZP)(s.Z.IMAGE_CROPPING_MODAL),
        H = (0, u.Q3)('ImageCroppingNModal'),
        W = r.useRef({
            x: 0,
            y: 0
        }),
        F = r.useRef(null),
        X = r.useRef(null),
        Y = 'image/gif' === t.type;
    r.useEffect(() => {
        (0, E.Z)();
    }, []),
        r.useEffect(() => {
            Y &&
                w &&
                _.default.track(x.rMx.OPEN_MODAL, {
                    type: x.jXE.CROP_GIF_MODAL,
                    location: { page: B }
                });
        }, [w, B, Y]);
    let K = () => {
            switch (I) {
                case p.pC.BANNER:
                    return {
                        height: p.f,
                        width: p.L0
                    };
                case p.pC.VIDEO_BACKGROUND:
                    return C.HE;
                case p.pC.AVATAR:
                case p.pC.AVATAR_DECORATION:
                    return {
                        height: x.dGM,
                        width: x.dGM
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
            (e, t, i) => {
                (W.current = (0, m.U$)(e, t, i)), null != F.current && (F.current.style.transform = 'translate3d('.concat(W.current.x, 'px, ').concat(W.current.y, 'px, 0)'));
            },
            [F]
        ),
        $ = r.useCallback(() => {
            if (null == F.current || L > 1) return;
            let { width: e, height: t } = F.current.getBoundingClientRect(),
                { width: i, height: n } = (0, m.Es)(I, e, t, H),
                r = (0, m.AK)(I, i, n, t, H);
            S({
                width: i,
                height: n
            }),
                k(r),
                j((0, m.kH)(i, n, r));
        }, [H, I, L]),
        J = r.useCallback(
            (e) => {
                let { x: t, y: i } = W.current;
                if (M && (e.clientX !== t || e.clientY !== i)) q(e.clientX - Z.x, e.clientY - Z.y, y);
            },
            [y, M, Z, q]
        ),
        Q = () => {
            P(!1);
        },
        ee = () => {
            let e = K();
            return e.width !== e.height;
        },
        et = async () => {
            let e;
            if (null == F.current) return;
            V(!0);
            let i = F.current,
                n = K();
            if (Y)
                try {
                    let { result: r, cancelFn: o } = await (0, m.$p)({
                        file: t,
                        image: i,
                        cropDimensions: v,
                        cropOriginCoordinates: W.current,
                        maxDimensions: n
                    });
                    (X.current = o), (e = await r), (X.current = null);
                } catch (e) {
                    var r;
                    throw (null === (r = X.current) || void 0 === r || r.call(X), (X.current = null), Error('Error cropping GIF'));
                }
            else
                e = (0, a.PT)({
                    image: i,
                    cropDimensions: v,
                    cropOriginCoordinates: W.current,
                    maxDimensions: n
                });
            await T(e, t), V(!1), b();
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
            if (M) return window.addEventListener('mousemove', J), () => window.removeEventListener('mousemove', J);
        }, [J, M]);
    let ei = I === p.pC.AVATAR || I === p.pC.BANNER,
        en = (0, h.M)(!ei);
    return (0, n.jsx)(c.Gt, {
        value: z,
        children: (0, n.jsxs)(l.Y0X, {
            onAnimationEnd: $,
            transitionState: A,
            size: l.CgR.MEDIUM,
            children: [
                w &&
                    !en &&
                    (0, n.jsx)(d.Z, {
                        type: I,
                        analyticsPage: B,
                        analyticsSection: x.jXE.CROP_GIF_MODAL,
                        isGIF: Y,
                        banner: i
                    }),
                (0, n.jsx)(l.xBx, {
                    separator: !1,
                    children: (0, n.jsx)(l.vwX, {
                        className: N.titleCase,
                        tag: l.RB0.H1,
                        children: f.intl.string(f.t.DxAYCA)
                    })
                }),
                (0, n.jsxs)(l.hzk, {
                    className: N.modalContent,
                    children: [
                        (0, n.jsxs)('div', {
                            className: N.editingContainer,
                            children: [
                                (0, n.jsx)('img', {
                                    style: {
                                        opacity: null == O ? 0 : 1,
                                        transform: 'translate3d('.concat(W.current.x, 'px, ').concat(W.current.y, 'px, 0px)'),
                                        ...(() => {
                                            if (null == O) return {};
                                            let e = O.width / O.height,
                                                t = ee() && e > p.MY ? v.height / O.height : 1;
                                            return {
                                                width: O.width * L * t,
                                                minWidth: O.width * L * t,
                                                height: O.height * L * t
                                            };
                                        })()
                                    },
                                    className: U ? N.imageDisabled : N.imageEnabled,
                                    src: i,
                                    alt: 'avatar',
                                    ref: F,
                                    onMouseDown: (e) => {
                                        G({
                                            x: e.clientX - W.current.x,
                                            y: e.clientY - W.current.y
                                        }),
                                            P(!0);
                                    },
                                    draggable: !1
                                }),
                                (0, n.jsx)('div', {
                                    className: I === p.pC.AVATAR ? N.overlayAvatar : N.overlayBanner,
                                    style: {
                                        opacity: null == O ? 0 : 1,
                                        width: v.width,
                                        height: v.height
                                    }
                                })
                            ]
                        }),
                        (0, n.jsxs)('div', {
                            className: N.sliderContainer,
                            children: [
                                (0, n.jsx)(l.XBm, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: N.icon
                                }),
                                (0, n.jsx)(l.iRW, {
                                    initialValue: 1,
                                    minValue: 1,
                                    maxValue: 2,
                                    keyboardStep: 0.025,
                                    asValueChanges: (e) => {
                                        if (null == O) return;
                                        let { width: t, height: i } = O,
                                            n = (0, m.kH)(t * e, i * e, v),
                                            { x: r, y: a } = W.current;
                                        ((0, o.inRange)(r, n.right, n.left) && (0, o.inRange)(a, n.top, n.bottom)) || q(r, a, n), D(e), j(n);
                                    },
                                    disabled: U,
                                    equidistant: !0,
                                    hideBubble: !0,
                                    'aria-label': f.intl.string(f.t.dnvZSk)
                                }),
                                (0, n.jsx)(l.XBm, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: N.icon,
                                    width: 48,
                                    height: 48
                                })
                            ]
                        }),
                        w &&
                            en &&
                            (0, n.jsx)('div', {
                                children: (0, n.jsx)(g.Z, {
                                    uploadType: I,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: N.nitroUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, n.jsxs)(l.mzw, {
                    className: N.modalFooter,
                    children: [
                        R
                            ? (0, n.jsx)(l.zxk, {
                                  className: N.cancelButton,
                                  look: l.zxk.Looks.LINK,
                                  color: l.zxk.Colors.PRIMARY,
                                  size: l.PhG.SMALL,
                                  onClick: () => {
                                      R && (T(i, t), b());
                                  },
                                  children: f.intl.string(f.t.B944ys)
                              })
                            : null,
                        (0, n.jsxs)('div', {
                            className: N.buttonsRight,
                            children: [
                                (0, n.jsx)(l.zxk, {
                                    className: N.cancelButton,
                                    look: l.zxk.Looks.LINK,
                                    color: l.zxk.Colors.PRIMARY,
                                    size: l.PhG.SMALL,
                                    onClick: () => {
                                        if (null != X.current) {
                                            X.current(), (X.current = null), V(!1);
                                            return;
                                        }
                                        b();
                                    },
                                    children: f.intl.string(f.t['9TG40t'])
                                }),
                                (0, n.jsx)(l.zxk, {
                                    submitting: U,
                                    size: l.PhG.SMALL,
                                    onClick: et,
                                    children: f.intl.string(f.t.ZSHmKC)
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
