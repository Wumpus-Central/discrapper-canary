n.r(e), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    a = n(392711),
    l = n(36793),
    s = n(481060),
    u = n(100527),
    o = n(906732),
    c = n(540059),
    h = n(488499),
    d = n(222062),
    p = n(530329),
    g = n(626135),
    A = n(197712),
    E = n(511004),
    C = n(486324),
    m = n(981631),
    w = n(678916),
    f = n(388032),
    R = n(63059);
e.default = (t) => {
    let { file: e, imgURI: n, transitionState: M, allowSkip: N = !1, onCrop: x, onClose: _, uploadType: v = C.pC.AVATAR, showUpsellHeader: y = !1, analyticsPage: I } = t,
        [D, L] = i.useState({
            width: 0,
            height: 0
        }),
        [B, S] = i.useState({
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }),
        [O, b] = i.useState(!1),
        [T, j] = i.useState(1),
        [G, k] = i.useState({
            x: 0,
            y: 0
        }),
        [U, V] = i.useState(null),
        [P, H] = i.useState(!1),
        { analyticsLocations: F } = (0, o.ZP)(u.Z.IMAGE_CROPPING_MODAL),
        z = (0, c.Q3)('ImageCroppingNModal'),
        Y = i.useRef({
            x: 0,
            y: 0
        }),
        K = i.useRef(null),
        X = i.useRef(null),
        Z = 'image/gif' === e.type;
    i.useEffect(() => {
        (0, E.Z)();
    }, []),
        i.useEffect(() => {
            Z &&
                y &&
                g.default.track(m.rMx.OPEN_MODAL, {
                    type: m.jXE.CROP_GIF_MODAL,
                    location: { page: I }
                });
        }, [y, I, Z]);
    let W = () => {
            switch (v) {
                case C.pC.BANNER:
                    return {
                        height: C.f,
                        width: C.L0
                    };
                case C.pC.VIDEO_BACKGROUND:
                    return w.HE;
                case C.pC.AVATAR:
                case C.pC.AVATAR_DECORATION:
                    return {
                        height: m.dGM,
                        width: m.dGM
                    };
                case C.pC.GUILD_BANNER:
                    return {
                        height: C._T,
                        width: C.X_
                    };
                case C.pC.SCHEDULED_EVENT_IMAGE:
                    return {
                        height: C.xT,
                        width: C.d6
                    };
                case C.pC.HOME_HEADER:
                    return {
                        height: C.Uo,
                        width: C.N8
                    };
            }
        },
        $ = i.useCallback(
            (t, e, n) => {
                (Y.current = (0, A.U$)(t, e, n)), null != K.current && (K.current.style.transform = 'translate3d('.concat(Y.current.x, 'px, ').concat(Y.current.y, 'px, 0)'));
            },
            [K]
        ),
        q = i.useCallback(() => {
            if (null == K.current || T > 1) return;
            let { width: t, height: e } = K.current.getBoundingClientRect(),
                { width: n, height: r } = (0, A.Es)(v, t, e, z),
                i = (0, A.AK)(v, n, r, e, z);
            V({
                width: n,
                height: r
            }),
                L(i),
                S((0, A.kH)(n, r, i));
        }, [z, v, T]),
        J = i.useCallback(
            (t) => {
                let { x: e, y: n } = Y.current;
                if (!O || (t.clientX === e && t.clientY === n)) return;
                let r = t.clientX - G.x;
                $(r, t.clientY - G.y, B);
            },
            [B, O, G, $]
        ),
        Q = () => {
            b(!1);
        },
        tt = () => {
            let t = W();
            return t.width !== t.height;
        },
        te = async () => {
            let t;
            if (null == K.current) return;
            H(!0);
            let n = K.current,
                r = W();
            if (Z)
                try {
                    let { result: i, cancelFn: a } = await (0, A.$p)(e, n, D, Y.current, r);
                    (X.current = a), (t = await i), (X.current = null);
                } catch (t) {
                    var i;
                    throw (null === (i = X.current) || void 0 === i || i.call(X), (X.current = null), Error('Error cropping GIF'));
                }
            else t = (0, l.PT)(n, D, Y.current, r);
            await x(t, e), H(!1), _();
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
                null != X.current && X.current();
            },
            []
        ),
        i.useEffect(() => {
            if (O) return window.addEventListener('mousemove', J), () => window.removeEventListener('mousemove', J);
        }, [J, O]);
    let tn = v === C.pC.AVATAR || v === C.pC.BANNER,
        tr = (0, d.M)(!tn);
    return (0, r.jsx)(o.Gt, {
        value: F,
        children: (0, r.jsxs)(s.ModalRoot, {
            onAnimationEnd: q,
            transitionState: M,
            size: s.ModalSize.MEDIUM,
            children: [
                y &&
                    !tr &&
                    (0, r.jsx)(h.Z, {
                        type: v,
                        analyticsPage: I,
                        analyticsSection: m.jXE.CROP_GIF_MODAL,
                        isGIF: Z,
                        banner: n
                    }),
                (0, r.jsx)(s.ModalHeader, {
                    separator: !1,
                    children: (0, r.jsx)(s.FormTitle, {
                        className: R.titleCase,
                        tag: s.FormTitleTags.H1,
                        children: f.intl.string(f.t.DxAYCA)
                    })
                }),
                (0, r.jsxs)(s.ModalContent, {
                    className: R.modalContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: R.editingContainer,
                            children: [
                                (0, r.jsx)('img', {
                                    style: {
                                        opacity: null == U ? 0 : 1,
                                        transform: 'translate3d('.concat(Y.current.x, 'px, ').concat(Y.current.y, 'px, 0px)'),
                                        ...(() => {
                                            if (null == U) return {};
                                            let t = U.width / U.height,
                                                e = tt() && t > C.MY ? D.height / U.height : 1;
                                            return {
                                                width: U.width * T * e,
                                                minWidth: U.width * T * e,
                                                height: U.height * T * e
                                            };
                                        })()
                                    },
                                    className: P ? R.imageDisabled : R.imageEnabled,
                                    src: n,
                                    alt: 'avatar',
                                    ref: K,
                                    onMouseDown: (t) => {
                                        let e = t.clientX - Y.current.x;
                                        k({
                                            x: e,
                                            y: t.clientY - Y.current.y
                                        }),
                                            b(!0);
                                    },
                                    draggable: !1
                                }),
                                (0, r.jsx)('div', {
                                    className: v === C.pC.AVATAR ? R.overlayAvatar : R.overlayBanner,
                                    style: {
                                        opacity: null == U ? 0 : 1,
                                        width: D.width,
                                        height: D.height
                                    }
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: R.sliderContainer,
                            children: [
                                (0, r.jsx)(s.ImageIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: R.icon
                                }),
                                (0, r.jsx)(s.Slider, {
                                    initialValue: 1,
                                    minValue: 1,
                                    maxValue: 2,
                                    keyboardStep: 0.025,
                                    asValueChanges: (t) => {
                                        if (null == U) return;
                                        let { width: e, height: n } = U,
                                            r = (0, A.kH)(e * t, n * t, D),
                                            { x: i, y: l } = Y.current;
                                        (!(0, a.inRange)(i, r.right, r.left) || !(0, a.inRange)(l, r.top, r.bottom)) && $(i, l, r), j(t), S(r);
                                    },
                                    disabled: P,
                                    equidistant: !0,
                                    hideBubble: !0,
                                    'aria-label': f.intl.string(f.t.dnvZSk)
                                }),
                                (0, r.jsx)(s.ImageIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: R.icon,
                                    width: 48,
                                    height: 48
                                })
                            ]
                        }),
                        y &&
                            tr &&
                            (0, r.jsx)('div', {
                                children: (0, r.jsx)(p.Z, {
                                    uploadType: v,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: R.nitroUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, r.jsxs)(s.ModalFooter, {
                    className: R.modalFooter,
                    children: [
                        N
                            ? (0, r.jsx)(s.Button, {
                                  className: R.cancelButton,
                                  look: s.Button.Looks.LINK,
                                  color: s.Button.Colors.PRIMARY,
                                  size: s.ButtonSizes.SMALL,
                                  onClick: () => {
                                      N && (x(n, e), _());
                                  },
                                  children: f.intl.string(f.t.B944ys)
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: R.buttonsRight,
                            children: [
                                (0, r.jsx)(s.Button, {
                                    className: R.cancelButton,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    size: s.ButtonSizes.SMALL,
                                    onClick: () => {
                                        if (null != X.current) {
                                            X.current(), (X.current = null), H(!1);
                                            return;
                                        }
                                        _();
                                    },
                                    children: f.intl.string(f.t['9TG40t'])
                                }),
                                (0, r.jsx)(s.Button, {
                                    submitting: P,
                                    size: s.ButtonSizes.SMALL,
                                    onClick: te,
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
