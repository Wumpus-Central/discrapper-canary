i.d(t, { default: () => b }), i(47120), i(411104);
var n = i(200651),
    o = i(192379),
    r = i(392711),
    a = i(36793),
    l = i(481060),
    s = i(100527),
    c = i(906732),
    d = i(540059),
    u = i(488499),
    g = i(222062),
    h = i(530329),
    _ = i(626135),
    m = i(197712),
    x = i(511004),
    p = i(486324),
    f = i(981631),
    C = i(678916),
    E = i(388032),
    N = i(310857);
let b = (e) => {
    let { file: t, imgURI: i, transitionState: b, allowSkip: T = !1, onCrop: v, onClose: I, uploadType: A = p.pC.AVATAR, showUpsellHeader: B = !1, analyticsPage: R } = e,
        [w, k] = o.useState({
            width: 0,
            height: 0
        }),
        [j, y] = o.useState({
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }),
        [P, Z] = o.useState(!1),
        [L, M] = o.useState(1),
        [S, z] = o.useState({
            x: 0,
            y: 0
        }),
        [D, G] = o.useState(null),
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
        (0, x.Z)();
    }, []),
        o.useEffect(() => {
            Y &&
                B &&
                _.default.track(f.rMx.OPEN_MODAL, {
                    type: f.jXE.CROP_GIF_MODAL,
                    location: { page: R }
                });
        }, [B, R, Y]);
    let K = () => {
            switch (A) {
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
                        height: f.dGM,
                        width: f.dGM
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
        q = o.useCallback(
            (e, t, i) => {
                (H.current = (0, m.U$)(e, t, i)), null != F.current && (F.current.style.transform = 'translate3d('.concat(H.current.x, 'px, ').concat(H.current.y, 'px, 0)'));
            },
            [F]
        ),
        Q = o.useCallback(() => {
            if (null == F.current || L > 1) return;
            let { width: e, height: t } = F.current.getBoundingClientRect(),
                { width: i, height: n } = (0, m.Es)(A, e, t, W),
                o = (0, m.AK)(A, i, n, t, W);
            G({
                width: i,
                height: n
            }),
                k(o),
                y((0, m.kH)(i, n, o));
        }, [W, A, L]),
        $ = o.useCallback(
            (e) => {
                let { x: t, y: i } = H.current;
                if (P && (e.clientX !== t || e.clientY !== i)) q(e.clientX - S.x, e.clientY - S.y, j);
            },
            [j, P, S, q]
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
            let i = F.current,
                n = K();
            if (Y)
                try {
                    let { result: o, cancelFn: r } = await (0, m.$p)({
                        file: t,
                        image: i,
                        cropDimensions: w,
                        cropOriginCoordinates: H.current,
                        maxDimensions: n
                    });
                    (X.current = r), (e = await o), (X.current = null);
                } catch (e) {
                    var o;
                    throw (null === (o = X.current) || void 0 === o || o.call(X), (X.current = null), Error('Error cropping GIF'));
                }
            else
                e = (0, a.PT)({
                    image: i,
                    cropDimensions: w,
                    cropOriginCoordinates: H.current,
                    maxDimensions: n
                });
            await v(e, t), U(!1), I();
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
    let ei = A === p.pC.AVATAR || A === p.pC.BANNER,
        en = (0, g.M)(!ei);
    return (0, n.jsx)(c.Gt, {
        value: V,
        children: (0, n.jsxs)(l.Y0X, {
            onAnimationEnd: Q,
            transitionState: b,
            size: l.CgR.MEDIUM,
            children: [
                B &&
                    !en &&
                    (0, n.jsx)(u.Z, {
                        type: A,
                        analyticsPage: R,
                        analyticsSection: f.jXE.CROP_GIF_MODAL,
                        isGIF: Y,
                        banner: i
                    }),
                (0, n.jsx)(l.xBx, {
                    separator: !1,
                    children: (0, n.jsx)(l.vwX, {
                        className: N.titleCase,
                        tag: l.RB0.H1,
                        children: E.intl.string(E.t.DxAYCA)
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
                                        opacity: null == D ? 0 : 1,
                                        transform: 'translate3d('.concat(H.current.x, 'px, ').concat(H.current.y, 'px, 0px)'),
                                        ...(() => {
                                            if (null == D) return {};
                                            let e = D.width / D.height,
                                                t = ee() && e > p.MY ? w.height / D.height : 1;
                                            return {
                                                width: D.width * L * t,
                                                minWidth: D.width * L * t,
                                                height: D.height * L * t
                                            };
                                        })()
                                    },
                                    className: O ? N.imageDisabled : N.imageEnabled,
                                    src: i,
                                    alt: 'avatar',
                                    ref: F,
                                    onMouseDown: (e) => {
                                        z({
                                            x: e.clientX - H.current.x,
                                            y: e.clientY - H.current.y
                                        }),
                                            Z(!0);
                                    },
                                    draggable: !1
                                }),
                                (0, n.jsx)('div', {
                                    className: A === p.pC.AVATAR ? N.overlayAvatar : N.overlayBanner,
                                    style: {
                                        opacity: null == D ? 0 : 1,
                                        width: w.width,
                                        height: w.height
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
                                        if (null == D) return;
                                        let { width: t, height: i } = D,
                                            n = (0, m.kH)(t * e, i * e, w),
                                            { x: o, y: a } = H.current;
                                        ((0, r.inRange)(o, n.right, n.left) && (0, r.inRange)(a, n.top, n.bottom)) || q(o, a, n), M(e), y(n);
                                    },
                                    disabled: O,
                                    equidistant: !0,
                                    hideBubble: !0,
                                    'aria-label': E.intl.string(E.t.dnvZSk)
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
                        B &&
                            en &&
                            (0, n.jsx)('div', {
                                children: (0, n.jsx)(h.Z, {
                                    uploadType: A,
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
                        T
                            ? (0, n.jsx)(l.zxk, {
                                  className: N.cancelButton,
                                  look: l.zxk.Looks.LINK,
                                  color: l.zxk.Colors.PRIMARY,
                                  size: l.PhG.SMALL,
                                  onClick: () => {
                                      T && (v(i, t), I());
                                  },
                                  children: E.intl.string(E.t.B944ys)
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
                                            X.current(), (X.current = null), U(!1);
                                            return;
                                        }
                                        I();
                                    },
                                    children: E.intl.string(E.t['9TG40t'])
                                }),
                                (0, n.jsx)(l.zxk, {
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
