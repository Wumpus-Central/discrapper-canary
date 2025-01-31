n.d(t, { default: () => x }), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    a = n(392711),
    s = n(36793),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    o = n(540059),
    h = n(488499),
    d = n(222062),
    p = n(530329),
    A = n(626135),
    E = n(197712),
    C = n(511004),
    g = n(486324),
    m = n(981631),
    w = n(678916),
    R = n(388032),
    f = n(63059);
let x = (e) => {
    let { file: t, imgURI: n, transitionState: x, allowSkip: N = !1, onCrop: M, onClose: _, uploadType: v = g.pC.AVATAR, showUpsellHeader: y = !1, analyticsPage: k } = e,
        [D, L] = i.useState({
            width: 0,
            height: 0
        }),
        [I, O] = i.useState({
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }),
        [b, G] = i.useState(!1),
        [j, S] = i.useState(1),
        [B, T] = i.useState({
            x: 0,
            y: 0
        }),
        [P, U] = i.useState(null),
        [V, z] = i.useState(!1),
        { analyticsLocations: H } = (0, u.ZP)(c.Z.IMAGE_CROPPING_MODAL),
        F = (0, o.Q3)('ImageCroppingNModal'),
        X = i.useRef({
            x: 0,
            y: 0
        }),
        Y = i.useRef(null),
        K = i.useRef(null),
        Z = 'image/gif' === t.type;
    i.useEffect(() => {
        (0, C.Z)();
    }, []),
        i.useEffect(() => {
            Z &&
                y &&
                A.default.track(m.rMx.OPEN_MODAL, {
                    type: m.jXE.CROP_GIF_MODAL,
                    location: { page: k }
                });
        }, [y, k, Z]);
    let W = () => {
            switch (v) {
                case g.pC.BANNER:
                    return {
                        height: g.f,
                        width: g.L0
                    };
                case g.pC.VIDEO_BACKGROUND:
                    return w.HE;
                case g.pC.AVATAR:
                case g.pC.AVATAR_DECORATION:
                    return {
                        height: m.dGM,
                        width: m.dGM
                    };
                case g.pC.GUILD_BANNER:
                    return {
                        height: g._T,
                        width: g.X_
                    };
                case g.pC.SCHEDULED_EVENT_IMAGE:
                    return {
                        height: g.xT,
                        width: g.d6
                    };
                case g.pC.HOME_HEADER:
                    return {
                        height: g.Uo,
                        width: g.N8
                    };
            }
        },
        $ = i.useCallback(
            (e, t, n) => {
                (X.current = (0, E.U$)(e, t, n)), null != Y.current && (Y.current.style.transform = 'translate3d('.concat(X.current.x, 'px, ').concat(X.current.y, 'px, 0)'));
            },
            [Y]
        ),
        q = i.useCallback(() => {
            if (null == Y.current || j > 1) return;
            let { width: e, height: t } = Y.current.getBoundingClientRect(),
                { width: n, height: r } = (0, E.Es)(v, e, t, F),
                i = (0, E.AK)(v, n, r, t, F);
            U({
                width: n,
                height: r
            }),
                L(i),
                O((0, E.kH)(n, r, i));
        }, [F, v, j]),
        J = i.useCallback(
            (e) => {
                let { x: t, y: n } = X.current;
                if (b && (e.clientX !== t || e.clientY !== n)) $(e.clientX - B.x, e.clientY - B.y, I);
            },
            [I, b, B, $]
        ),
        Q = () => {
            G(!1);
        },
        ee = () => {
            let e = W();
            return e.width !== e.height;
        },
        et = async () => {
            let e;
            if (null == Y.current) return;
            z(!0);
            let n = Y.current,
                r = W();
            if (Z)
                try {
                    let { result: i, cancelFn: a } = await (0, E.$p)(t, n, D, X.current, r);
                    (K.current = a), (e = await i), (K.current = null);
                } catch (e) {
                    var i;
                    throw (null === (i = K.current) || void 0 === i || i.call(K), (K.current = null), Error('Error cropping GIF'));
                }
            else e = (0, s.PT)(n, D, X.current, r);
            await M(e, t), z(!1), _();
        };
    i.useEffect(
        () => (
            window.addEventListener('mouseup', Q),
            window.addEventListener('resize', q),
            () => {
                window.removeEventListener('mouseup', Q), window.removeEventListener('resize', q);
            }
        ),
        [q]
    ),
        i.useEffect(
            () => () => {
                null != K.current && K.current();
            },
            []
        ),
        i.useEffect(() => {
            if (b) return window.addEventListener('mousemove', J), () => window.removeEventListener('mousemove', J);
        }, [J, b]);
    let en = v === g.pC.AVATAR || v === g.pC.BANNER,
        er = (0, d.M)(!en);
    return (0, r.jsx)(u.Gt, {
        value: H,
        children: (0, r.jsxs)(l.Y0X, {
            onAnimationEnd: q,
            transitionState: x,
            size: l.CgR.MEDIUM,
            children: [
                y &&
                    !er &&
                    (0, r.jsx)(h.Z, {
                        type: v,
                        analyticsPage: k,
                        analyticsSection: m.jXE.CROP_GIF_MODAL,
                        isGIF: Z,
                        banner: n
                    }),
                (0, r.jsx)(l.xBx, {
                    separator: !1,
                    children: (0, r.jsx)(l.vwX, {
                        className: f.titleCase,
                        tag: l.RB0.H1,
                        children: R.intl.string(R.t.DxAYCA)
                    })
                }),
                (0, r.jsxs)(l.hzk, {
                    className: f.modalContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: f.editingContainer,
                            children: [
                                (0, r.jsx)('img', {
                                    style: {
                                        opacity: null == P ? 0 : 1,
                                        transform: 'translate3d('.concat(X.current.x, 'px, ').concat(X.current.y, 'px, 0px)'),
                                        ...(() => {
                                            if (null == P) return {};
                                            let e = P.width / P.height,
                                                t = ee() && e > g.MY ? D.height / P.height : 1;
                                            return {
                                                width: P.width * j * t,
                                                minWidth: P.width * j * t,
                                                height: P.height * j * t
                                            };
                                        })()
                                    },
                                    className: V ? f.imageDisabled : f.imageEnabled,
                                    src: n,
                                    alt: 'avatar',
                                    ref: Y,
                                    onMouseDown: (e) => {
                                        T({
                                            x: e.clientX - X.current.x,
                                            y: e.clientY - X.current.y
                                        }),
                                            G(!0);
                                    },
                                    draggable: !1
                                }),
                                (0, r.jsx)('div', {
                                    className: v === g.pC.AVATAR ? f.overlayAvatar : f.overlayBanner,
                                    style: {
                                        opacity: null == P ? 0 : 1,
                                        width: D.width,
                                        height: D.height
                                    }
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: f.sliderContainer,
                            children: [
                                (0, r.jsx)(l.XBm, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: f.icon
                                }),
                                (0, r.jsx)(l.iRW, {
                                    initialValue: 1,
                                    minValue: 1,
                                    maxValue: 2,
                                    keyboardStep: 0.025,
                                    asValueChanges: (e) => {
                                        if (null == P) return;
                                        let { width: t, height: n } = P,
                                            r = (0, E.kH)(t * e, n * e, D),
                                            { x: i, y: s } = X.current;
                                        ((0, a.inRange)(i, r.right, r.left) && (0, a.inRange)(s, r.top, r.bottom)) || $(i, s, r), S(e), O(r);
                                    },
                                    disabled: V,
                                    equidistant: !0,
                                    hideBubble: !0,
                                    'aria-label': R.intl.string(R.t.dnvZSk)
                                }),
                                (0, r.jsx)(l.XBm, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: f.icon,
                                    width: 48,
                                    height: 48
                                })
                            ]
                        }),
                        y &&
                            er &&
                            (0, r.jsx)('div', {
                                children: (0, r.jsx)(p.Z, {
                                    uploadType: v,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: f.nitroUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, r.jsxs)(l.mzw, {
                    className: f.modalFooter,
                    children: [
                        N
                            ? (0, r.jsx)(l.zxk, {
                                  className: f.cancelButton,
                                  look: l.zxk.Looks.LINK,
                                  color: l.zxk.Colors.PRIMARY,
                                  size: l.PhG.SMALL,
                                  onClick: () => {
                                      N && (M(n, t), _());
                                  },
                                  children: R.intl.string(R.t.B944ys)
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: f.buttonsRight,
                            children: [
                                (0, r.jsx)(l.zxk, {
                                    className: f.cancelButton,
                                    look: l.zxk.Looks.LINK,
                                    color: l.zxk.Colors.PRIMARY,
                                    size: l.PhG.SMALL,
                                    onClick: () => {
                                        if (null != K.current) {
                                            K.current(), (K.current = null), z(!1);
                                            return;
                                        }
                                        _();
                                    },
                                    children: R.intl.string(R.t['9TG40t'])
                                }),
                                (0, r.jsx)(l.zxk, {
                                    submitting: V,
                                    size: l.PhG.SMALL,
                                    onClick: et,
                                    children: R.intl.string(R.t.ZSHmKC)
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
