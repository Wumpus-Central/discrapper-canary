n.d(t, {
    Z: () => y,
    d: () => T
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(212605),
    l = n(481060),
    u = n(131388),
    c = n(686546),
    d = n(70097),
    f = n(861254),
    _ = n(259580),
    p = n(937995),
    h = n(618158),
    m = n(362267),
    g = n(388032),
    E = n(32390);
let v = 'https://cdn.discordapp.com/assets/content/3988d11030317ce331a0b327cac18a9c02a693041f9a7695bb13b3d4cb486e11.webm';
function y(e) {
    let { label: t, onClick: n, onKeyDown: r, onMouseEnter: a, onMouseLeave: u, onContextMenu: c, className: d, wrapperClassName: f, iconClassName: _, iconColor: p = 'currentColor', iconComponent: m, themeable: g = !1, disabled: v = !1, isActive: y = !1, tooltipPosition: I = 'top', shouldShowTooltip: b = !0, forceTooltipOpen: T = !1, buttonRef: S, grow: A, 'aria-label': N } = e;
    return (0, i.jsx)(h.Z, {
        children: (0, i.jsx)(l.ua7, {
            position: I,
            text: t,
            'aria-label': N,
            shouldShow: b,
            forceOpen: T,
            children: (e) => {
                let { onClick: t, onContextMenu: h, onMouseEnter: I, onMouseLeave: b, ...T } = e;
                return (0, i.jsx)(l.zxk, {
                    look: l.zxk.Looks.BLANK,
                    size: l.zxk.Sizes.NONE,
                    onKeyDown: (e) => {
                        null == r || r(e);
                    },
                    onClick: (e) => {
                        null == t || t(), null == n || n(e);
                    },
                    onMouseEnter: (e) => {
                        null == I || I(), null == a || a(e);
                    },
                    onMouseLeave: (e) => {
                        null == b || b(), null == u || u(e);
                    },
                    onContextMenu: (e) => {
                        null == h || h(), null == c || c(e);
                    },
                    onFocus: (e) => {
                        null == I || I(), null == a || a(e);
                    },
                    onBlur: (e) => {
                        null == b || b(), null == u || u(e);
                    },
                    disabled: v,
                    innerClassName: E.lineHeightReset,
                    className: s()({ [E.active]: y }, d),
                    wrapperClassName: f,
                    buttonRef: S,
                    grow: A,
                    'aria-label': N,
                    ...T,
                    children: (0, i.jsx)(m, {
                        size: o.Z.md,
                        className: s()(E.controlIcon, _, {
                            [E.themeable]: g,
                            [E.active]: y
                        }),
                        color: p
                    })
                });
            }
        })
    });
}
let I = {
        red: E.red,
        white: E.white,
        green: E.green,
        yellow: E.yellow,
        primaryDark: E.primaryDark,
        primaryLight: E.primaryLight,
        activeLight: E.activeLight,
        premiumGradient: E.premiumGradient
    },
    b = {
        red: E.red,
        white: E.white,
        green: E.green,
        yellow: E.yellow,
        primaryDark: E.experimentDark,
        primaryLight: E.experimentDark,
        activeLight: E.experimentActiveLight,
        premiumGradient: E.premiumGradient
    };
function T(e) {
    let { color: t, ignoreColorForCaret: n = !1, isActive: a = !1, className: o, iconClassName: T, onPopoutClick: S, popoutOpen: A = !1, popoutDisabled: N = !1, premiumGlow: C = !1, fullRegionButton: R = !1, ...O } = e,
        D = (0, m.Z)(t, a),
        x = (0, m.Z)(n ? void 0 : t, !1),
        L = (0, u.Z)('(max-width: 456px)'),
        P = r.useRef(null),
        w = r.useContext(p.h9);
    r.useEffect(() => {
        null != P.current && (w ? P.current.pause() : P.current.play());
    }, [w]);
    let { groupedButtons: M } = (0, f.ZP)({ location: 'CenterControlButton' }),
        k = M ? [E.experimentButton, b[D], R && null == S && E.fullRegionButton] : [I[D]],
        U = (0, i.jsx)(y, {
            ...O,
            grow: !1,
            onContextMenu: S,
            iconClassName: s()(T, E.centerIcon, M && E.experimentControlIcon, M && R && null == S && E.fullRegionIcon),
            className: s()(L ? o : null, E.staticButton, E.centerButton, ...k)
        });
    return L
        ? U
        : M
          ? (0, i.jsxs)('div', {
                className: s()(E.caretButtonContainer, o, R && null != S && [E.fullRegionDropdownButton, b[D]]),
                children: [
                    U,
                    null != S
                        ? (0, i.jsx)(h.Z, {
                              children: (0, i.jsx)(l.P3F, {
                                  'aria-label': g.intl.string(g.t.PdRCRk),
                                  onClick: N ? void 0 : S,
                                  onContextMenu: N ? void 0 : S,
                                  className: s()(E.contextMenuNubExperiment, b[x], {
                                      [E.active]: A,
                                      [E.disabled]: N
                                  }),
                                  children: (0, i.jsx)(_.Z, { className: s()(E.contextMenuCaretExperiment, { [E.open]: A }, N && E.disabled) })
                              })
                          })
                        : null
                ]
            })
          : (0, i.jsxs)('div', {
                className: s()(o, E.contextMenuContainer),
                children: [
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(c.ZP, {
                                className: s()(E.buttonMask),
                                mask: null == S ? null : c.QS.CHANNEL_CALL_CONTROL_BUTTON,
                                width: 56,
                                height: 56,
                                children: U
                            }),
                            C &&
                                (0, i.jsx)('div', {
                                    className: E.glow,
                                    children: (0, i.jsx)(d.Z, {
                                        ref: P,
                                        loop: !0,
                                        autoPlay: !0,
                                        className: E.glowVideo,
                                        children: (0, i.jsx)('source', {
                                            src: v,
                                            type: 'video/webm'
                                        })
                                    })
                                })
                        ]
                    }),
                    null != S
                        ? (0, i.jsx)(h.Z, {
                              children: (0, i.jsx)(l.P3F, {
                                  'aria-label': g.intl.string(g.t.PdRCRk),
                                  onClick: S,
                                  onContextMenu: S,
                                  className: s()(E.contextMenuNub, I[D], { [E.active]: A }),
                                  children: (0, i.jsx)(_.Z, { className: s()(E.contextMenuCaret, { [E.open]: A }) })
                              })
                          })
                        : null
                ]
            });
}
