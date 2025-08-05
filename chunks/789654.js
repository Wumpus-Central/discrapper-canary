(a.d(t, {
    Z: () => E,
    q: () => T
}),
    a(804061),
    a(704826),
    a(35282),
    a(388685),
    a(190126),
    a(368063),
    a(65234),
    a(111804),
    a(490233),
    a(97749),
    a(410992),
    a(227481),
    a(730884),
    a(20464),
    a(341884),
    a(364341),
    a(629680),
    a(505025),
    a(918970),
    a(121784),
    a(644351),
    a(146733),
    a(361932),
    a(187205),
    a(49124));
var n = a(255367),
    r = a(73800),
    l = a(688619),
    i = a.n(l),
    s = a(392711),
    o = a.n(s),
    c = a(446431),
    d = a(521904),
    u = a(407146),
    m = a(755721),
    x = a(481060),
    p = a(410030),
    h = a(705262),
    b = a(374794),
    f = a(58755),
    v = a(246992),
    g = a(500949),
    j = a(770378);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
              }),
        e
    );
}
let { SemanticColors: C } = d.V;
function O(e) {
    return e.replaceAll(/_|\./g, '-').toLowerCase();
}
function N(e) {
    return e.replaceAll(/_|-/g, '.').toLowerCase();
}
function T(e, t) {
    let a = new Blob([t], { type: 'application/json' }),
        n = URL.createObjectURL(a),
        r = document.createElement('a'),
        l = new TextEncoder().encode(t);
    crypto.subtle.digest('SHA-256', l).then((t) => {
        let a = Array.from(new Uint8Array(t))
            .map((e) => e.toString(16).padStart(2, '0'))
            .join('');
        ((r.href = n), (r.download = ''.concat(e, '-').concat(a.slice(0, 8), '.json')), r.click(), URL.revokeObjectURL(n));
    });
}
function E() {
    let e = (0, p.Fg)(),
        [t, a, l, s, d, u] = (0, g.zn)(),
        { semanticColorOverrides: v, rawColorOverrides: C, tab: N, scales: E } = t,
        P = r.useMemo(() => {
            let t = Object.entries(v).map((t) => {
                    let [a, n] = t,
                        { colors: r, highlight: l } = n,
                        i = r[e];
                    if (null == i) return '';
                    let s = O(a);
                    if (l) return '--'.concat(s, ': magenta !important;');
                    let o = O(i.color),
                        c = i.opacity,
                        d = c < 1 ? 'hsl(var(--'.concat(o, '-hsl) / ').concat(c, ')') : 'var(--'.concat(o, ')');
                    return '--'.concat(s, ': color-mix(\n        in oklab,\n        ').concat(d, ' 100%,\n        var(--theme-base-color, black) var(--theme-base-color-amount, 0%)\n      );');
                }),
                a = Object.keys(C).flatMap((e) => {
                    let t = C[e],
                        {
                            h: a,
                            s: n,
                            l: r
                        } = (function (e) {
                            let [t, a, n] = 'transparent' === e ? [0, 0, 0] : i()(e).hsl(),
                                r = isNaN(t) ? 0 : o().round(t, 1),
                                l = o().round(100 * n, 1);
                            return {
                                h: r,
                                s: o().round(100 * a, 1),
                                l: l
                            };
                        })(t.highlight ? '#FF00FF' : t.color),
                        l = o().kebabCase(e);
                    return ['--'.concat(l, '-hsl: ').concat(a, ' calc(var(--saturation-factor, 1) * ').concat(n, '%) ').concat(r, '% !important;'), '--'.concat(l, ': hsl(var(--').concat(l, '-hsl)) !important;')];
                }),
                n = E.reduce((e, t) => {
                    let { name: a } = t,
                        n = (0, g.XM)(t),
                        r = (0, g.W6)(n, a);
                    return (
                        e +
                        Object.keys(r).reduce((e, t) => {
                            let a = r[t],
                                l = n[t],
                                i = (0, g.HI)(l);
                            return ''.concat(e, '\n--').concat(a, ': ').concat(i, ';');
                        }, '')
                    );
                }, '');
            return '\n      :root {\n        '.concat(n, '\n      }\n\n      .theme-').concat(e, ' {\n        ').concat(t.join('\n'), '\n      }\n\n      html {\n        ').concat(a.join('\n'), '\n      }\n    ');
        }, [C, E, v, e]);
    return (0, n.jsxs)('div', {
        className: j.panel,
        children: [
            (0, n.jsxs)('div', {
                className: j.toolbar,
                style: {
                    '--custom-theme-selection-selection-size': '40px',
                    '--custom-theme-selection-group-column-gap': 'var(--spacing-8)'
                },
                children: [
                    (0, n.jsxs)(x.njP, {
                        className: j.tabBar,
                        type: 'top',
                        look: 'brand',
                        selectedItem: N,
                        onItemSelect: (e) => {
                            a((t) => y(_({}, t), { tab: e }));
                        },
                        children: [
                            (0, n.jsx)(x.njP.Item, {
                                id: g.H8.TOKENS,
                                children: 'Tokens'
                            }),
                            (0, n.jsx)(x.njP.Item, {
                                id: g.H8.PALETTES,
                                children: 'Palettes'
                            })
                        ]
                    }),
                    (0, n.jsx)(h.ZP, {
                        type: h.yH.SETTINGS,
                        children: (0, n.jsx)(h.ZP.Basic, {
                            className: j.toolbarThemeSelector,
                            hideSystemSelector: !0
                        })
                    }),
                    (0, n.jsxs)('div', {
                        className: j.toolbarButtons,
                        children: [
                            (0, n.jsx)(m.zx, {
                                size: m.zx.Sizes.ICON,
                                color: m.zx.Colors.TRANSPARENT,
                                look: m.zx.Looks.BLANK,
                                onClick: l,
                                disabled: !d,
                                children: (0, n.jsx)(x.UEU, {})
                            }),
                            (0, n.jsx)(m.zx, {
                                size: m.zx.Sizes.ICON,
                                color: m.zx.Colors.TRANSPARENT,
                                look: m.zx.Looks.BLANK,
                                onClick: s,
                                disabled: !u,
                                children: (0, n.jsx)(x.zGS, {})
                            }),
                            (0, n.jsx)(b.Z, {
                                'aria-label': 'Import',
                                filters: [
                                    {
                                        name: 'JSON',
                                        extensions: ['json']
                                    }
                                ],
                                onChange: (e) => {
                                    let t = e.currentTarget.files,
                                        n = null == t ? void 0 : t[0];
                                    if (null == n) return;
                                    let r = new FileReader();
                                    ((r.onload = () => {
                                        let e = r.result;
                                        if ('string' == typeof e)
                                            try {
                                                let t = JSON.parse(e);
                                                if (null == t) return;
                                                a(t);
                                            } catch (e) {}
                                    }),
                                        r.readAsText(n));
                                },
                                size: m.zx.Sizes.ICON,
                                color: m.zx.Colors.TRANSPARENT,
                                look: m.zx.Looks.BLANK,
                                children: (0, n.jsx)(x.rG2, {})
                            }),
                            (0, n.jsx)(m.zx, {
                                size: m.zx.Sizes.ICON,
                                color: m.zx.Colors.TRANSPARENT,
                                look: m.zx.Looks.BLANK,
                                onClick: () => {
                                    T('color-overrides', JSON.stringify(_({}, t), null, 2));
                                },
                                children: (0, n.jsx)(x._8t, {})
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: j.tab,
                hidden: N !== g.H8.TOKENS,
                children: (0, n.jsx)(S, {
                    state: t,
                    setState: a
                })
            }),
            (0, n.jsx)('div', {
                className: j.tab,
                hidden: N !== g.H8.PALETTES,
                children: (0, n.jsx)(f.P, {
                    state: t,
                    setState: a
                })
            }),
            (0, n.jsx)(c.ql, {
                children: (0, n.jsx)('style', {
                    id: 'devtools-color-overrides',
                    children: P
                })
            })
        ]
    });
}
function S(e) {
    let { state: t, setState: a } = e,
        l = (0, p.Fg)(),
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
                a((t) => {
                    var a;
                    let { semanticColorOverrides: n } = t,
                        r = null != (a = n[e]) ? a : (0, g.$R)(e);
                    return y(_({}, t), { semanticColorOverrides: y(_({}, n), { [e]: r }) });
                });
            },
            [a]
        ),
        d = r.useCallback(
            (e) => {
                a((t) => {
                    let { rawColorOverrides: a } = t;
                    return null == a[e]
                        ? y(_({}, t), {
                              rawColorOverrides: y(_({}, a), {
                                  [e]: {
                                      color: u.b[e].hex,
                                      highlight: !1
                                  }
                              })
                          })
                        : t;
                });
            },
            [a]
        ),
        m = r.useCallback(
            (e) => {
                a((t) => {
                    let { semanticColorOverrides: a } = t,
                        n = _({}, a);
                    return (delete n[e], y(_({}, t), { semanticColorOverrides: n }));
                });
            },
            [a]
        ),
        h = r.useCallback(
            (e) => {
                a((t) => {
                    let { semanticColorOverrides: a } = t,
                        n = a[e];
                    if (null == n) return t;
                    let r = _({}, a);
                    return ((r[e] = (0, g.GU)(n)), y(_({}, t), { semanticColorOverrides: r }));
                });
            },
            [a]
        ),
        b = Object.keys(C).map((e) => ({
            value: e,
            label: O(e)
        })),
        f = Object.keys(u.b).map((e) => ({
            value: e,
            label: e
        }));
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(x.Text, {
                variant: 'text-lg/semibold',
                children: 'Semantic Tokens'
            }),
            (0, n.jsx)(x.VcW, {
                options: b,
                placeholder: 'Search for a semantic token...',
                value: void 0,
                onChange: c,
                renderOptionPrefix: (e) =>
                    null == e
                        ? null
                        : (0, n.jsx)('div', {
                              'data-theme': l,
                              className: j.colorPreview,
                              style: { '--custom-color': 'var(--'.concat(e.label, ')') }
                          }),
                popoutLayerContext: v.O$
            }),
            (0, n.jsx)('ul', {
                className: j.overrides,
                children: Object.entries(i).map((e) => {
                    let [t, r] = e,
                        i = r.colors[l];
                    if (null == i) return null;
                    let s = N(i.color),
                        c = i.opacity,
                        d = g.jC[t][l];
                    return (0, n.jsx)(
                        P,
                        {
                            title: O(t),
                            subtitle: 1 === d.opacity ? N(d.raw) : ''.concat(N(d.raw), ' @ ').concat(100 * d.opacity, '%'),
                            highlight: r.highlight,
                            onReset: () => {
                                a((e) => {
                                    let { semanticColorOverrides: a } = e;
                                    if (null == a[t]) return e;
                                    let n = (0, g.$R)(t);
                                    return y(_({}, e), { semanticColorOverrides: y(_({}, a), { [t]: n }) });
                                });
                            },
                            onRemove: () => m(t),
                            onHighlightToggle: () => h(t),
                            children: (0, n.jsxs)('div', {
                                className: j.semanticOverride,
                                children: [
                                    (0, n.jsx)(x.VcW, {
                                        value: s,
                                        options: o,
                                        onChange: (e) => {
                                            a((a) => {
                                                let { semanticColorOverrides: n } = a,
                                                    r = n[t];
                                                if (null == r) return a;
                                                let i = r.colors[l];
                                                if (null == i) return a;
                                                let s = (0, g.lT)(r, t, e, i.opacity, l);
                                                return y(_({}, a), { semanticColorOverrides: y(_({}, n), { [t]: s }) });
                                            });
                                        },
                                        renderOptionPrefix: (e) => {
                                            if (null == e) return null;
                                            let t = e.label.replaceAll('.', '-');
                                            return (0, n.jsx)('div', {
                                                'data-theme': l,
                                                className: j.colorPreview,
                                                style: { '--custom-color': 'var(--'.concat(t, ')') }
                                            });
                                        },
                                        popoutLayerContext: v.O$
                                    }),
                                    (0, n.jsx)(x.oil, {
                                        inputClassName: j.opacityInput,
                                        type: 'number',
                                        value: c,
                                        min: 0,
                                        max: 1,
                                        step: 0.01,
                                        onChange: (e) => {
                                            let n = parseFloat(e);
                                            isNaN(n) ||
                                                a((e) => {
                                                    let { semanticColorOverrides: a } = e,
                                                        r = a[t];
                                                    if (null == r) return e;
                                                    let i = r.colors[l];
                                                    if (null == i) return e;
                                                    let s = (0, g.lT)(r, t, i.color, n, l);
                                                    return y(_({}, e), { semanticColorOverrides: y(_({}, a), { [t]: s }) });
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
            (0, n.jsx)('div', { className: j.divider }),
            (0, n.jsx)(x.Text, {
                variant: 'text-lg/semibold',
                children: 'Raw Tokens'
            }),
            (0, n.jsx)(x.VcW, {
                options: f,
                placeholder: 'Search for a raw color...',
                value: void 0,
                onChange: d,
                renderOptionPrefix: (e) => {
                    if (null == e) return null;
                    let t = e.label.replaceAll('.', '-');
                    return (0, n.jsx)('div', {
                        'data-theme': l,
                        className: j.colorPreview,
                        style: { '--custom-color': 'var(--'.concat(t, ')') }
                    });
                },
                popoutLayerContext: v.O$
            }),
            (0, n.jsx)('ul', {
                className: j.rawOverrides,
                children: Object.entries(s).map((e) => {
                    let [t, r] = e;
                    return (0, n.jsxs)(
                        P,
                        {
                            title: t,
                            subtitle: u.b[t].hex,
                            highlight: r.highlight,
                            onReset: () => {
                                a((e) => {
                                    let { rawColorOverrides: a } = e,
                                        n = _({}, a);
                                    return (
                                        (n[t] = {
                                            color: u.b[t].hex,
                                            highlight: !1
                                        }),
                                        y(_({}, e), { rawColorOverrides: n })
                                    );
                                });
                            },
                            onRemove: () => {
                                a((e) => {
                                    let { rawColorOverrides: a } = e,
                                        n = _({}, a);
                                    return (delete n[t], y(_({}, e), { rawColorOverrides: n }));
                                });
                            },
                            onHighlightToggle: () => {
                                a((e) => {
                                    let { rawColorOverrides: a } = e,
                                        n = a[t];
                                    if (null == n) return e;
                                    let r = _({}, a);
                                    return ((r[t] = y(_({}, n), { highlight: !n.highlight })), y(_({}, e), { rawColorOverrides: r }));
                                });
                            },
                            children: [
                                (0, n.jsx)('input', {
                                    className: j.colorInput,
                                    type: 'color',
                                    value: r.color,
                                    onChange: (e) => {
                                        let n = e.target.value;
                                        a((e) => {
                                            let { rawColorOverrides: a } = e;
                                            return y(_({}, e), {
                                                rawColorOverrides: y(_({}, a), {
                                                    [t]: {
                                                        color: n,
                                                        highlight: !1
                                                    }
                                                })
                                            });
                                        });
                                    }
                                }),
                                (0, n.jsx)(x.Text, {
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
function P(e) {
    let { title: t, subtitle: a, highlight: r, onReset: l, onRemove: i, onHighlightToggle: s, children: o } = e;
    return (0, n.jsxs)('li', {
        className: j.override,
        'data-highlight': r,
        children: [
            (0, n.jsxs)('div', {
                className: j.overrideHeader,
                children: [
                    (0, n.jsxs)('div', {
                        className: j.title,
                        children: [
                            (0, n.jsx)(x.Text, {
                                lineClamp: 1,
                                variant: 'text-md/medium',
                                className: j.overrideHeading,
                                tabularNumbers: !0,
                                children: t
                            }),
                            null != a
                                ? (0, n.jsx)(x.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'text-secondary',
                                      tabularNumbers: !0,
                                      children: a
                                  })
                                : null
                        ]
                    }),
                    (0, n.jsx)(x.P3F, {
                        onClick: s,
                        className: j.clickabeIcon,
                        children: (0, n.jsx)(x.tEF, {
                            size: 'xs',
                            color: r ? 'var(--text-brand)' : 'currentColor'
                        })
                    }),
                    (0, n.jsx)(x.P3F, {
                        className: j.clickabeIcon,
                        onClick: l,
                        children: (0, n.jsx)(x.DuK, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    }),
                    (0, n.jsx)(x.P3F, {
                        className: j.removeOverride,
                        onClick: i,
                        children: (0, n.jsx)(x.Dio, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: j.overrideContent,
                children: o
            })
        ]
    });
}
