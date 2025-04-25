n.d(t, {
    Z: () => N,
    q: () => E
}),
    n(804061),
    n(704826),
    n(35282),
    n(388685),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(361932),
    n(187205),
    n(49124);
var a = n(200651),
    r = n(192379),
    l = n(688619),
    i = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(765053),
    d = n(190558),
    u = n(203165),
    m = n(481060),
    x = n(410030),
    h = n(705262),
    p = n(374794),
    b = n(58755),
    f = n(246992),
    v = n(500949),
    j = n(770378);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let { SemanticColors: y } = d.V;
function O(e) {
    return e.replaceAll(/_|\./g, '-').toLowerCase();
}
function C(e) {
    return e.replaceAll(/_|-/g, '.').toLowerCase();
}
function E(e, t) {
    let n = new Blob([t], { type: 'application/json' }),
        a = URL.createObjectURL(n),
        r = document.createElement('a'),
        l = new TextEncoder().encode(t);
    crypto.subtle.digest('SHA-256', l).then((t) => {
        let n = Array.from(new Uint8Array(t))
            .map((e) => e.toString(16).padStart(2, '0'))
            .join('');
        (r.href = a), (r.download = ''.concat(e, '-').concat(n.slice(0, 8), '.json')), r.click(), URL.revokeObjectURL(a);
    });
}
function N() {
    let e = (0, x.Fg)(),
        [t, n, l, s, d, u] = (0, v.zn)(),
        { semanticColorOverrides: f, rawColorOverrides: y, tab: C, scales: N } = t,
        S = r.useMemo(() => {
            let t = Object.entries(f).map((t) => {
                    let [n, a] = t,
                        { colors: r, highlight: l } = a,
                        i = r[e];
                    if (null == i) return '';
                    let s = O(n);
                    if (l) return '--'.concat(s, ': magenta !important;');
                    let o = O(i.color),
                        c = i.opacity,
                        d = c < 1 ? 'hsl(var(--'.concat(o, '-hsl) / ').concat(c, ')') : 'var(--'.concat(o, ')');
                    return '--'.concat(s, ': color-mix(\n        in oklab,\n        ').concat(d, ' 100%,\n        var(--theme-base-color, black) var(--theme-base-color-amount, 0%)\n      );');
                }),
                n = Object.keys(y).flatMap((e) => {
                    let t = y[e],
                        {
                            h: n,
                            s: a,
                            l: r
                        } = (function (e) {
                            let [t, n, a] = 'transparent' === e ? [0, 0, 0] : i()(e).hsl(),
                                r = isNaN(t) ? 0 : o().round(t, 1),
                                l = o().round(100 * a, 1);
                            return {
                                h: r,
                                s: o().round(100 * n, 1),
                                l: l
                            };
                        })(t.highlight ? '#FF00FF' : t.color),
                        l = o().kebabCase(e);
                    return ['--'.concat(l, '-hsl: ').concat(n, ' calc(var(--saturation-factor, 1) * ').concat(a, '%) ').concat(r, '% !important;'), '--'.concat(l, ': hsl(var(--').concat(l, '-hsl)) !important;')];
                }),
                a = N.reduce((e, t) => {
                    let { name: n } = t,
                        a = (0, v.XM)(t),
                        r = (0, v.W6)(a, n);
                    return (
                        e +
                        Object.keys(r).reduce((e, t) => {
                            let n = r[t],
                                l = a[t],
                                i = (0, v.HI)(l);
                            return ''.concat(e, '\n--').concat(n, ': ').concat(i, ';');
                        }, '')
                    );
                }, '');
            return '\n      :root {\n        '.concat(a, '\n      }\n\n      .theme-').concat(e, ' {\n        ').concat(t.join('\n'), '\n      }\n\n      html {\n        ').concat(n.join('\n'), '\n      }\n    ');
        }, [y, N, f, e]);
    return (0, a.jsxs)('div', {
        className: j.panel,
        children: [
            (0, a.jsxs)('div', {
                className: j.toolbar,
                style: {
                    '--custom-theme-selection-selection-size': '40px',
                    '--custom-theme-selection-group-column-gap': 'var(--spacing-8)'
                },
                children: [
                    (0, a.jsxs)(m.njP, {
                        className: j.tabBar,
                        type: 'top',
                        look: 'brand',
                        selectedItem: C,
                        onItemSelect: (e) => {
                            n((t) => _(g({}, t), { tab: e }));
                        },
                        children: [
                            (0, a.jsx)(m.njP.Item, {
                                id: v.H8.TOKENS,
                                children: 'Tokens'
                            }),
                            (0, a.jsx)(m.njP.Item, {
                                id: v.H8.PALETTES,
                                children: 'Palettes'
                            })
                        ]
                    }),
                    (0, a.jsx)(h.ZP, {
                        type: h.yH.SETTINGS,
                        children: (0, a.jsx)(h.ZP.Basic, {
                            className: j.toolbarThemeSelector,
                            hideSystemSelector: !0
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: j.toolbarButtons,
                        children: [
                            (0, a.jsx)(m.zxk, {
                                size: m.zxk.Sizes.ICON,
                                color: m.zxk.Colors.TRANSPARENT,
                                look: m.zxk.Looks.BLANK,
                                onClick: l,
                                disabled: !d,
                                children: (0, a.jsx)(m.UEU, {})
                            }),
                            (0, a.jsx)(m.zxk, {
                                size: m.zxk.Sizes.ICON,
                                color: m.zxk.Colors.TRANSPARENT,
                                look: m.zxk.Looks.BLANK,
                                onClick: s,
                                disabled: !u,
                                children: (0, a.jsx)(m.zGS, {})
                            }),
                            (0, a.jsx)(p.Z, {
                                'aria-label': 'Import',
                                filters: [
                                    {
                                        name: 'JSON',
                                        extensions: ['json']
                                    }
                                ],
                                onChange: (e) => {
                                    let t = e.currentTarget.files,
                                        a = null == t ? void 0 : t[0];
                                    if (null == a) return;
                                    let r = new FileReader();
                                    (r.onload = () => {
                                        let e = r.result;
                                        if ('string' == typeof e)
                                            try {
                                                let t = JSON.parse(e);
                                                if (null == t) return;
                                                n(t);
                                            } catch (e) {}
                                    }),
                                        r.readAsText(a);
                                },
                                size: m.zxk.Sizes.ICON,
                                color: m.zxk.Colors.TRANSPARENT,
                                look: m.zxk.Looks.BLANK,
                                children: (0, a.jsx)(m.rG2, {})
                            }),
                            (0, a.jsx)(m.zxk, {
                                size: m.zxk.Sizes.ICON,
                                color: m.zxk.Colors.TRANSPARENT,
                                look: m.zxk.Looks.BLANK,
                                onClick: () => {
                                    E('color-overrides', JSON.stringify(g({}, t), null, 2));
                                },
                                children: (0, a.jsx)(m._8t, {})
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: j.tab,
                hidden: C !== v.H8.TOKENS,
                children: (0, a.jsx)(T, {
                    state: t,
                    setState: n
                })
            }),
            (0, a.jsx)('div', {
                className: j.tab,
                hidden: C !== v.H8.PALETTES,
                children: (0, a.jsx)(b.P, {
                    state: t,
                    setState: n
                })
            }),
            (0, a.jsx)(c.ql, {
                children: (0, a.jsx)('style', {
                    id: 'devtools-color-overrides',
                    children: S
                })
            })
        ]
    });
}
function T(e) {
    let { state: t, setState: n } = e,
        l = (0, x.Fg)(),
        { semanticColorOverrides: i, rawColorOverrides: s } = t,
        o = r.useMemo(
            () =>
                Object.keys(u.b).reduce(
                    (e, t) => [
                        ...e,
                        {
                            value: t,
                            label: t
                        }
                    ],
                    []
                ),
            []
        ),
        c = r.useCallback(
            (e) => {
                n((t) => {
                    var n;
                    let { semanticColorOverrides: a } = t,
                        r = null != (n = a[e]) ? n : (0, v.$R)(e);
                    return _(g({}, t), { semanticColorOverrides: _(g({}, a), { [e]: r }) });
                });
            },
            [n]
        ),
        d = r.useCallback(
            (e) => {
                n((t) => {
                    let { rawColorOverrides: n } = t;
                    return null == n[e]
                        ? _(g({}, t), {
                              rawColorOverrides: _(g({}, n), {
                                  [e]: {
                                      color: u.b[e].hex,
                                      highlight: !1
                                  }
                              })
                          })
                        : t;
                });
            },
            [n]
        ),
        h = r.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        a = g({}, n);
                    return delete a[e], _(g({}, t), { semanticColorOverrides: a });
                });
            },
            [n]
        ),
        p = r.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        a = n[e];
                    if (null == a) return t;
                    let r = g({}, n);
                    return (r[e] = (0, v.GU)(a)), _(g({}, t), { semanticColorOverrides: r });
                });
            },
            [n]
        ),
        b = Object.keys(y).map((e) => ({
            value: e,
            label: O(e)
        })),
        E = Object.keys(u.b).map((e) => ({
            value: e,
            label: e
        }));
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(m.Text, {
                variant: 'text-lg/semibold',
                children: 'Semantic Tokens'
            }),
            (0, a.jsx)(m.VcW, {
                options: b,
                placeholder: 'Search for a semantic token...',
                value: void 0,
                onChange: c,
                renderOptionPrefix: (e) =>
                    null == e
                        ? null
                        : (0, a.jsx)('div', {
                              'data-theme': l,
                              className: j.colorPreview,
                              style: { '--custom-color': 'var(--'.concat(e.label, ')') }
                          }),
                popoutLayerContext: f.O$
            }),
            (0, a.jsx)('ul', {
                className: j.overrides,
                children: Object.entries(i).map((e) => {
                    let [t, r] = e,
                        i = r.colors[l];
                    if (null == i) return null;
                    let s = C(i.color),
                        c = i.opacity,
                        d = v.jC[t][l];
                    return (0, a.jsx)(
                        S,
                        {
                            title: O(t),
                            subtitle: 1 === d.opacity ? C(d.raw) : ''.concat(C(d.raw), ' @ ').concat(100 * d.opacity, '%'),
                            highlight: r.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { semanticColorOverrides: n } = e;
                                    if (null == n[t]) return e;
                                    let a = (0, v.$R)(t);
                                    return _(g({}, e), { semanticColorOverrides: _(g({}, n), { [t]: a }) });
                                });
                            },
                            onRemove: () => h(t),
                            onHighlightToggle: () => p(t),
                            children: (0, a.jsxs)('div', {
                                className: j.semanticOverride,
                                children: [
                                    (0, a.jsx)(m.VcW, {
                                        value: s,
                                        options: o,
                                        onChange: (e) => {
                                            n((n) => {
                                                let { semanticColorOverrides: a } = n,
                                                    r = a[t];
                                                if (null == r) return n;
                                                let i = r.colors[l];
                                                if (null == i) return n;
                                                let s = (0, v.lT)(r, t, e, i.opacity, l);
                                                return _(g({}, n), { semanticColorOverrides: _(g({}, a), { [t]: s }) });
                                            });
                                        },
                                        renderOptionPrefix: (e) => {
                                            if (null == e) return null;
                                            let t = e.label.replaceAll('.', '-');
                                            return (0, a.jsx)('div', {
                                                'data-theme': l,
                                                className: j.colorPreview,
                                                style: { '--custom-color': 'var(--'.concat(t, ')') }
                                            });
                                        },
                                        popoutLayerContext: f.O$
                                    }),
                                    (0, a.jsx)(m.oil, {
                                        inputClassName: j.opacityInput,
                                        type: 'number',
                                        value: c,
                                        min: 0,
                                        max: 1,
                                        step: 0.01,
                                        onChange: (e) => {
                                            let a = parseFloat(e);
                                            isNaN(a) ||
                                                n((e) => {
                                                    let { semanticColorOverrides: n } = e,
                                                        r = n[t];
                                                    if (null == r) return e;
                                                    let i = r.colors[l];
                                                    if (null == i) return e;
                                                    let s = (0, v.lT)(r, t, i.color, a, l);
                                                    return _(g({}, e), { semanticColorOverrides: _(g({}, n), { [t]: s }) });
                                                });
                                        }
                                    })
                                ]
                            })
                        },
                        t
                    );
                })
            }),
            (0, a.jsx)('div', { className: j.divider }),
            (0, a.jsx)(m.Text, {
                variant: 'text-lg/semibold',
                children: 'Raw Tokens'
            }),
            (0, a.jsx)(m.VcW, {
                options: E,
                placeholder: 'Search for a raw color...',
                value: void 0,
                onChange: d,
                renderOptionPrefix: (e) => {
                    if (null == e) return null;
                    let t = e.label.replaceAll('.', '-');
                    return (0, a.jsx)('div', {
                        'data-theme': l,
                        className: j.colorPreview,
                        style: { '--custom-color': 'var(--'.concat(t, ')') }
                    });
                },
                popoutLayerContext: f.O$
            }),
            (0, a.jsx)('ul', {
                className: j.rawOverrides,
                children: Object.entries(s).map((e) => {
                    let [t, r] = e;
                    return (0, a.jsxs)(
                        S,
                        {
                            title: t,
                            subtitle: u.b[t].hex,
                            highlight: r.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        a = g({}, n);
                                    return (
                                        (a[t] = {
                                            color: u.b[t].hex,
                                            highlight: !1
                                        }),
                                        _(g({}, e), { rawColorOverrides: a })
                                    );
                                });
                            },
                            onRemove: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        a = g({}, n);
                                    return delete a[t], _(g({}, e), { rawColorOverrides: a });
                                });
                            },
                            onHighlightToggle: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        a = n[t];
                                    if (null == a) return e;
                                    let r = g({}, n);
                                    return (r[t] = _(g({}, a), { highlight: !a.highlight })), _(g({}, e), { rawColorOverrides: r });
                                });
                            },
                            children: [
                                (0, a.jsx)('input', {
                                    className: j.colorInput,
                                    type: 'color',
                                    value: r.color,
                                    onChange: (e) => {
                                        let a = e.target.value;
                                        n((e) => {
                                            let { rawColorOverrides: n } = e;
                                            return _(g({}, e), {
                                                rawColorOverrides: _(g({}, n), {
                                                    [t]: {
                                                        color: a,
                                                        highlight: !1
                                                    }
                                                })
                                            });
                                        });
                                    }
                                }),
                                (0, a.jsx)(m.Text, {
                                    variant: 'text-sm/medium',
                                    tabularNumbers: !0,
                                    children: r.color
                                })
                            ]
                        },
                        t
                    );
                })
            })
        ]
    });
}
function S(e) {
    let { title: t, subtitle: n, highlight: r, onReset: l, onRemove: i, onHighlightToggle: s, children: o } = e;
    return (0, a.jsxs)('li', {
        className: j.override,
        'data-highlight': r,
        children: [
            (0, a.jsxs)('div', {
                className: j.overrideHeader,
                children: [
                    (0, a.jsxs)('div', {
                        className: j.title,
                        children: [
                            (0, a.jsx)(m.Text, {
                                lineClamp: 1,
                                variant: 'text-md/medium',
                                className: j.overrideHeading,
                                tabularNumbers: !0,
                                children: t
                            }),
                            null != n
                                ? (0, a.jsx)(m.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'text-secondary',
                                      tabularNumbers: !0,
                                      children: n
                                  })
                                : null
                        ]
                    }),
                    (0, a.jsx)(m.P3F, {
                        onClick: s,
                        className: j.clickabeIcon,
                        children: (0, a.jsx)(m.tEF, {
                            size: 'xs',
                            color: r ? 'var(--text-brand)' : 'currentColor'
                        })
                    }),
                    (0, a.jsx)(m.P3F, {
                        className: j.clickabeIcon,
                        onClick: l,
                        children: (0, a.jsx)(m.DuK, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    }),
                    (0, a.jsx)(m.P3F, {
                        className: j.removeOverride,
                        onClick: i,
                        children: (0, a.jsx)(m.Dio, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: j.overrideContent,
                children: o
            })
        ]
    });
}
