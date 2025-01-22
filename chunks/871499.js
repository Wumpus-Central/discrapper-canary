r.d(n, {
    Z: function () {
        return I;
    },
    d: function () {
        return A;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(212605),
    c = r(481060),
    d = r(131388),
    f = r(686546),
    p = r(70097),
    h = r(861254),
    _ = r(259580),
    m = r(937995),
    g = r(618158),
    E = r(362267),
    v = r(388032),
    y = r(32390);
let b = 'https://cdn.discordapp.com/assets/content/3988d11030317ce331a0b327cac18a9c02a693041f9a7695bb13b3d4cb486e11.webm';
function I(e) {
    let { label: n, onClick: r, onKeyDown: i, onMouseEnter: o, onMouseLeave: s, onContextMenu: d, className: f, wrapperClassName: p, iconClassName: h, iconColor: _ = 'currentColor', iconComponent: m, themeable: E = !1, disabled: v = !1, isActive: b = !1, tooltipPosition: I = 'top', shouldShowTooltip: T = !0, forceTooltipOpen: S = !1, buttonRef: A, grow: C, 'aria-label': N } = e;
    return (0, a.jsx)(g.Z, {
        children: (0, a.jsx)(c.Tooltip, {
            position: I,
            text: n,
            'aria-label': N,
            shouldShow: T,
            forceOpen: S,
            children: (e) => {
                let { onClick: n, onContextMenu: g, onMouseEnter: I, onMouseLeave: T, ...S } = e;
                return (0, a.jsx)(c.Button, {
                    look: c.Button.Looks.BLANK,
                    size: c.Button.Sizes.NONE,
                    onKeyDown: (e) => {
                        null == i || i(e);
                    },
                    onClick: (e) => {
                        null == n || n(), null == r || r(e);
                    },
                    onMouseEnter: (e) => {
                        null == I || I(), null == o || o(e);
                    },
                    onMouseLeave: (e) => {
                        null == T || T(), null == s || s(e);
                    },
                    onContextMenu: (e) => {
                        null == g || g(), null == d || d(e);
                    },
                    onFocus: (e) => {
                        null == I || I(), null == o || o(e);
                    },
                    onBlur: (e) => {
                        null == T || T(), null == s || s(e);
                    },
                    disabled: v,
                    innerClassName: y.lineHeightReset,
                    className: l()({ [y.active]: b }, f),
                    wrapperClassName: p,
                    buttonRef: A,
                    grow: C,
                    'aria-label': N,
                    ...S,
                    children: (0, a.jsx)(m, {
                        size: u.Z.md,
                        className: l()(y.controlIcon, h, {
                            [y.themeable]: E,
                            [y.active]: b
                        }),
                        color: _
                    })
                });
            }
        })
    });
}
let T = {
        red: y.red,
        white: y.white,
        green: y.green,
        yellow: y.yellow,
        primaryDark: y.primaryDark,
        primaryLight: y.primaryLight,
        activeLight: y.activeLight,
        premiumGradient: y.premiumGradient
    },
    S = {
        red: y.red,
        white: y.white,
        green: y.green,
        yellow: y.yellow,
        primaryDark: y.experimentDark,
        primaryLight: y.experimentDark,
        activeLight: y.experimentActiveLight,
        premiumGradient: y.premiumGradient
    };
function A(e) {
    let { color: n, ignoreColorForCaret: r = !1, isActive: i = !1, className: s, iconClassName: u, onPopoutClick: A, popoutOpen: C = !1, popoutDisabled: N = !1, premiumGlow: R = !1, fullRegionButton: O = !1, ...D } = e,
        x = (0, E.Z)(n, i),
        L = (0, E.Z)(r ? void 0 : n, !1),
        w = (0, d.Z)('(max-width: 456px)'),
        P = o.useRef(null),
        M = o.useContext(m.h9);
    o.useEffect(() => {
        null != P.current && (M ? P.current.pause() : P.current.play());
    }, [M]);
    let { groupedButtons: k } = (0, h.ZP)({ location: 'CenterControlButton' }),
        U = k ? [y.experimentButton, S[x], O && null == A && y.fullRegionButton] : [T[x]],
        B = (0, a.jsx)(I, {
            ...D,
            grow: !1,
            onContextMenu: A,
            iconClassName: l()(u, y.centerIcon, k && y.experimentControlIcon, k && O && null == A && y.fullRegionIcon),
            className: l()(w ? s : null, y.staticButton, y.centerButton, ...U)
        });
    return w
        ? B
        : k
          ? (0, a.jsxs)('div', {
                className: l()(y.caretButtonContainer, s, O && null != A && [y.fullRegionDropdownButton, S[x]]),
                children: [
                    B,
                    null != A
                        ? (0, a.jsx)(g.Z, {
                              children: (0, a.jsx)(c.Clickable, {
                                  'aria-label': v.intl.string(v.t.PdRCRk),
                                  onClick: N ? void 0 : A,
                                  onContextMenu: N ? void 0 : A,
                                  className: l()(y.contextMenuNubExperiment, S[L], {
                                      [y.active]: C,
                                      [y.disabled]: N
                                  }),
                                  children: (0, a.jsx)(_.Z, { className: l()(y.contextMenuCaretExperiment, { [y.open]: C }, N && y.disabled) })
                              })
                          })
                        : null
                ]
            })
          : (0, a.jsxs)('div', {
                className: l()(s, y.contextMenuContainer),
                children: [
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(f.ZP, {
                                className: l()(y.buttonMask),
                                mask: null == A ? null : f.QS.CHANNEL_CALL_CONTROL_BUTTON,
                                width: 56,
                                height: 56,
                                children: B
                            }),
                            R &&
                                (0, a.jsx)('div', {
                                    className: y.glow,
                                    children: (0, a.jsx)(p.Z, {
                                        ref: P,
                                        loop: !0,
                                        autoPlay: !0,
                                        className: y.glowVideo,
                                        children: (0, a.jsx)('source', {
                                            src: b,
                                            type: 'video/webm'
                                        })
                                    })
                                })
                        ]
                    }),
                    null != A
                        ? (0, a.jsx)(g.Z, {
                              children: (0, a.jsx)(c.Clickable, {
                                  'aria-label': v.intl.string(v.t.PdRCRk),
                                  onClick: A,
                                  onContextMenu: A,
                                  className: l()(y.contextMenuNub, T[x], { [y.active]: C }),
                                  children: (0, a.jsx)(_.Z, { className: l()(y.contextMenuCaret, { [y.open]: C }) })
                              })
                          })
                        : null
                ]
            });
}
