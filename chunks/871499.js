r.d(n, {
    Z: function () {
        return b;
    },
    d: function () {
        return A;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(212605),
    c = r(481060),
    d = r(131388),
    f = r(686546),
    _ = r(70097),
    h = r(861254),
    p = r(259580),
    m = r(937995),
    g = r(618158),
    E = r(362267),
    v = r(388032),
    I = r(32390);
let T = 'https://cdn.discordapp.com/assets/content/3988d11030317ce331a0b327cac18a9c02a693041f9a7695bb13b3d4cb486e11.webm';
function b(e) {
    let { label: n, onClick: r, onKeyDown: i, onMouseEnter: s, onMouseLeave: o, onContextMenu: d, className: f, wrapperClassName: _, iconClassName: h, iconColor: p = 'currentColor', iconComponent: m, themeable: E = !1, disabled: v = !1, isActive: T = !1, tooltipPosition: b = 'top', shouldShowTooltip: y = !0, forceTooltipOpen: S = !1, buttonRef: A, grow: N, 'aria-label': C } = e;
    return (0, a.jsx)(g.Z, {
        children: (0, a.jsx)(c.Tooltip, {
            position: b,
            text: n,
            'aria-label': C,
            shouldShow: y,
            forceOpen: S,
            children: (e) => {
                let { onClick: n, onContextMenu: g, onMouseEnter: b, onMouseLeave: y, ...S } = e;
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
                        null == b || b(), null == s || s(e);
                    },
                    onMouseLeave: (e) => {
                        null == y || y(), null == o || o(e);
                    },
                    onContextMenu: (e) => {
                        null == g || g(), null == d || d(e);
                    },
                    onFocus: (e) => {
                        null == b || b(), null == s || s(e);
                    },
                    onBlur: (e) => {
                        null == y || y(), null == o || o(e);
                    },
                    disabled: v,
                    innerClassName: I.lineHeightReset,
                    className: l()({ [I.active]: T }, f),
                    wrapperClassName: _,
                    buttonRef: A,
                    grow: N,
                    'aria-label': C,
                    ...S,
                    children: (0, a.jsx)(m, {
                        size: u.Z.md,
                        className: l()(I.controlIcon, h, {
                            [I.themeable]: E,
                            [I.active]: T
                        }),
                        color: p
                    })
                });
            }
        })
    });
}
let y = {
        red: I.red,
        white: I.white,
        green: I.green,
        yellow: I.yellow,
        primaryDark: I.primaryDark,
        primaryLight: I.primaryLight,
        activeLight: I.activeLight,
        premiumGradient: I.premiumGradient
    },
    S = {
        red: I.red,
        white: I.white,
        green: I.green,
        yellow: I.yellow,
        primaryDark: I.experimentDark,
        primaryLight: I.experimentDark,
        activeLight: I.experimentActiveLight,
        premiumGradient: I.premiumGradient
    };
function A(e) {
    let { color: n, ignoreColorForCaret: r = !1, isActive: i = !1, className: o, iconClassName: u, onPopoutClick: A, popoutOpen: N = !1, premiumGlow: C = !1, fullRegionButton: R = !1, ...O } = e,
        D = (0, E.Z)(n, i),
        L = (0, E.Z)(r ? void 0 : n, !1),
        x = (0, d.Z)('(max-width: 456px)'),
        w = s.useRef(null),
        P = s.useContext(m.h9);
    s.useEffect(() => {
        null != w.current && (P ? w.current.pause() : w.current.play());
    }, [P]);
    let { groupedButtons: M } = (0, h.ZP)({ location: 'CenterControlButton' }),
        k = M ? [I.experimentButton, S[D], R && null == A && I.fullRegionButton] : [y[D]],
        U = (0, a.jsx)(b, {
            ...O,
            grow: !1,
            onContextMenu: A,
            iconClassName: l()(u, I.centerIcon, M && I.experimentControlIcon, M && R && null == A && I.fullRegionIcon),
            className: l()(x ? o : null, I.staticButton, I.centerButton, ...k)
        });
    return x
        ? U
        : M
          ? (0, a.jsxs)('div', {
                className: l()(I.caretButtonContainer, o, R && null != A && [I.fullRegionDropdownButton, S[D]]),
                children: [
                    U,
                    null != A
                        ? (0, a.jsx)(g.Z, {
                              children: (0, a.jsx)(c.Clickable, {
                                  'aria-label': v.intl.string(v.t.PdRCRk),
                                  onClick: A,
                                  onContextMenu: A,
                                  className: l()(I.contextMenuNubExperiment, S[L], { [I.active]: N }),
                                  children: (0, a.jsx)(p.Z, { className: l()(I.contextMenuCaretExperiment, { [I.open]: N }) })
                              })
                          })
                        : null
                ]
            })
          : (0, a.jsxs)('div', {
                className: l()(o, I.contextMenuContainer),
                children: [
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(f.ZP, {
                                className: l()(I.buttonMask),
                                mask: null == A ? null : f.QS.CHANNEL_CALL_CONTROL_BUTTON,
                                width: 56,
                                height: 56,
                                children: U
                            }),
                            C &&
                                (0, a.jsx)('div', {
                                    className: I.glow,
                                    children: (0, a.jsx)(_.Z, {
                                        ref: w,
                                        loop: !0,
                                        autoPlay: !0,
                                        className: I.glowVideo,
                                        children: (0, a.jsx)('source', {
                                            src: T,
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
                                  className: l()(I.contextMenuNub, y[D], { [I.active]: N }),
                                  children: (0, a.jsx)(p.Z, { className: l()(I.contextMenuCaret, { [I.open]: N }) })
                              })
                          })
                        : null
                ]
            });
}
