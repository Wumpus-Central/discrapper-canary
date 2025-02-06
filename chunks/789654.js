n.d(t, {
    Z: () => T,
    q: () => N
}),
    n(627494),
    n(757143),
    n(47120),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(390547),
    n(724458);
var a = n(200651),
    l = n(192379),
    r = n(688619),
    i = n.n(r),
    o = n(392711),
    s = n.n(o),
    c = n(765053),
    d = n(190558),
    u = n(203165),
    m = n(481060),
    h = n(410030),
    x = n(705262),
    p = n(374794),
    f = n(58755),
    _ = n(246992),
    b = n(500949),
    g = n(833999);
let { SemanticColors: v } = d.V;
function j(e) {
    return e.replaceAll(/_|\./g, '-').toLowerCase();
}
function C(e) {
    return e.replaceAll(/_|-/g, '.').toLowerCase();
}
function N(e, t) {
    let n = new Blob([t], { type: 'application/json' }),
        a = URL.createObjectURL(n),
        l = document.createElement('a'),
        r = new TextEncoder().encode(t);
    crypto.subtle.digest('SHA-256', r).then((t) => {
        let n = Array.from(new Uint8Array(t))
            .map((e) => e.toString(16).padStart(2, '0'))
            .join('');
        (l.href = a), (l.download = ''.concat(e, '-').concat(n.slice(0, 8), '.json')), l.click(), URL.revokeObjectURL(a);
    });
}
function T() {
    let e = (0, h.Fg)(),
        [t, n, r, o, d, u] = (0, b.zn)(),
        { semanticColorOverrides: _, rawColorOverrides: v, tab: C, scales: T } = t,
        y = l.useMemo(() => {
            let t = Object.entries(_).map((t) => {
                    let [n, a] = t,
                        { colors: l, highlight: r } = a,
                        i = l[e];
                    if (null == i) return '';
                    let o = j(n);
                    if (r) return '--'.concat(o, ': magenta !important;');
                    let s = j(i.color),
                        c = i.opacity,
                        d = c < 1 ? 'hsl(var(--'.concat(s, '-hsl) / ').concat(c, ')') : 'var(--'.concat(s, ')');
                    return '--'.concat(o, ': color-mix(\n        in oklab,\n        ').concat(d, ' 100%,\n        var(--theme-base-color, black) var(--theme-base-color-amount, 0%)\n      );');
                }),
                n = Object.keys(v).flatMap((e) => {
                    let t = v[e],
                        {
                            h: n,
                            s: a,
                            l
                        } = (function (e) {
                            let [t, n, a] = 'transparent' === e ? [0, 0, 0] : i()(e).hsl(),
                                l = isNaN(t) ? 0 : s().round(t, 1),
                                r = s().round(100 * a, 1);
                            return {
                                h: l,
                                s: s().round(100 * n, 1),
                                l: r
                            };
                        })(t.highlight ? '#FF00FF' : t.color),
                        r = s().kebabCase(e);
                    return ['--'.concat(r, '-hsl: ').concat(n, ' calc(var(--saturation-factor, 1) * ').concat(a, '%) ').concat(l, '% !important;'), '--'.concat(r, ': hsl(var(--').concat(r, '-hsl)) !important;')];
                }),
                a = T.reduce((e, t) => {
                    let { name: n } = t,
                        a = (0, b.XM)(t),
                        l = (0, b.W6)(a, n);
                    return (
                        e +
                        Object.keys(l).reduce((e, t) => {
                            let n = l[t],
                                r = a[t],
                                i = (0, b.HI)(r);
                            return ''.concat(e, '\n--').concat(n, ': ').concat(i, ';');
                        }, '')
                    );
                }, '');
            return '\n      :root {\n        '.concat(a, '\n      }\n\n      .theme-').concat(e, ' {\n        ').concat(t.join('\n'), '\n      }\n\n      html {\n        ').concat(n.join('\n'), '\n      }\n    ');
        }, [v, T, _, e]);
    return (0, a.jsxs)('div', {
        className: g.panel,
        children: [
            (0, a.jsxs)('div', {
                className: g.toolbar,
                style: {
                    '--custom-theme-selection-selection-size': '40px',
                    '--custom-theme-selection-group-column-gap': 'var(--spacing-8)'
                },
                children: [
                    (0, a.jsxs)(m.njP, {
                        className: g.tabBar,
                        type: 'top',
                        look: 'brand',
                        selectedItem: C,
                        onItemSelect: (e) => {
                            n((t) => ({
                                ...t,
                                tab: e
                            }));
                        },
                        children: [
                            (0, a.jsx)(m.njP.Item, {
                                id: b.H8.TOKENS,
                                children: 'Tokens'
                            }),
                            (0, a.jsx)(m.njP.Item, {
                                id: b.H8.PALETTES,
                                children: 'Palettes'
                            })
                        ]
                    }),
                    (0, a.jsx)(x.ZP, {
                        type: x.yH.SETTINGS,
                        children: (0, a.jsx)(x.ZP.Basic, {
                            className: g.toolbarThemeSelector,
                            hideSystemSelector: !0
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: g.toolbarButtons,
                        children: [
                            (0, a.jsx)(m.zxk, {
                                size: m.zxk.Sizes.ICON,
                                color: m.zxk.Colors.TRANSPARENT,
                                look: m.zxk.Looks.BLANK,
                                onClick: r,
                                disabled: !d,
                                children: (0, a.jsx)(m.UEU, {})
                            }),
                            (0, a.jsx)(m.zxk, {
                                size: m.zxk.Sizes.ICON,
                                color: m.zxk.Colors.TRANSPARENT,
                                look: m.zxk.Looks.BLANK,
                                onClick: o,
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
                                    let l = new FileReader();
                                    (l.onload = () => {
                                        let e = l.result;
                                        if ('string' == typeof e)
                                            try {
                                                let t = JSON.parse(e);
                                                if (null == t) return;
                                                n(t);
                                            } catch (e) {}
                                    }),
                                        l.readAsText(a);
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
                                    N('color-overrides', JSON.stringify({ ...t }, null, 2));
                                },
                                children: (0, a.jsx)(m._8t, {})
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: g.tab,
                hidden: C !== b.H8.TOKENS,
                children: (0, a.jsx)(E, {
                    state: t,
                    setState: n
                })
            }),
            (0, a.jsx)('div', {
                className: g.tab,
                hidden: C !== b.H8.PALETTES,
                children: (0, a.jsx)(f.P, {
                    state: t,
                    setState: n
                })
            }),
            (0, a.jsx)(c.ql, {
                children: (0, a.jsx)('style', {
                    id: 'devtools-color-overrides',
                    children: y
                })
            })
        ]
    });
}
function E(e) {
    let { state: t, setState: n } = e,
        r = (0, h.Fg)(),
        { semanticColorOverrides: i, rawColorOverrides: o } = t,
        s = l.useMemo(
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
        c = l.useCallback(
            (e) => {
                n((t) => {
                    var n;
                    let { semanticColorOverrides: a } = t,
                        l = null !== (n = a[e]) && void 0 !== n ? n : (0, b.$R)(e);
                    return {
                        ...t,
                        semanticColorOverrides: {
                            ...a,
                            [e]: l
                        }
                    };
                });
            },
            [n]
        ),
        d = l.useCallback(
            (e) => {
                n((t) => {
                    let { rawColorOverrides: n } = t;
                    return null == n[e]
                        ? {
                              ...t,
                              rawColorOverrides: {
                                  ...n,
                                  [e]: {
                                      color: u.b[e].hex,
                                      highlight: !1
                                  }
                              }
                          }
                        : t;
                });
            },
            [n]
        ),
        x = l.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        a = { ...n };
                    return (
                        delete a[e],
                        {
                            ...t,
                            semanticColorOverrides: a
                        }
                    );
                });
            },
            [n]
        ),
        p = l.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        a = n[e];
                    if (null == a) return t;
                    let l = { ...n };
                    return (
                        (l[e] = (0, b.GU)(a)),
                        {
                            ...t,
                            semanticColorOverrides: l
                        }
                    );
                });
            },
            [n]
        ),
        f = Object.keys(v).map((e) => ({
            value: e,
            label: j(e)
        })),
        N = Object.keys(u.b).map((e) => ({
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
                options: f,
                placeholder: 'Search for a semantic token...',
                value: void 0,
                onChange: c,
                renderOptionPrefix: (e) =>
                    null == e
                        ? null
                        : (0, a.jsx)('div', {
                              'data-theme': r,
                              className: g.colorPreview,
                              style: { '--custom-color': 'var(--'.concat(e.label, ')') }
                          }),
                popoutLayerContext: _.O$
            }),
            (0, a.jsx)('ul', {
                className: g.overrides,
                children: Object.entries(i).map((e) => {
                    let [t, l] = e,
                        i = l.colors[r];
                    if (null == i) return null;
                    let o = C(i.color),
                        c = i.opacity,
                        d = b.jC[t][r];
                    return (0, a.jsx)(
                        y,
                        {
                            title: j(t),
                            subtitle: 1 === d.opacity ? C(d.raw) : ''.concat(C(d.raw), ' @ ').concat(100 * d.opacity, '%'),
                            highlight: l.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { semanticColorOverrides: n } = e;
                                    if (null == n[t]) return e;
                                    let a = (0, b.$R)(t);
                                    return {
                                        ...e,
                                        semanticColorOverrides: {
                                            ...n,
                                            [t]: a
                                        }
                                    };
                                });
                            },
                            onRemove: () => x(t),
                            onHighlightToggle: () => p(t),
                            children: (0, a.jsxs)('div', {
                                className: g.semanticOverride,
                                children: [
                                    (0, a.jsx)(m.VcW, {
                                        value: o,
                                        options: s,
                                        onChange: (e) => {
                                            n((n) => {
                                                let { semanticColorOverrides: a } = n,
                                                    l = a[t];
                                                if (null == l) return n;
                                                let i = l.colors[r];
                                                if (null == i) return n;
                                                let o = (0, b.lT)(l, t, e, i.opacity, r);
                                                return {
                                                    ...n,
                                                    semanticColorOverrides: {
                                                        ...a,
                                                        [t]: o
                                                    }
                                                };
                                            });
                                        },
                                        renderOptionPrefix: (e) => {
                                            if (null == e) return null;
                                            let t = e.label.replaceAll('.', '-');
                                            return (0, a.jsx)('div', {
                                                'data-theme': r,
                                                className: g.colorPreview,
                                                style: { '--custom-color': 'var(--'.concat(t, ')') }
                                            });
                                        },
                                        popoutLayerContext: _.O$
                                    }),
                                    (0, a.jsx)(m.oil, {
                                        inputClassName: g.opacityInput,
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
                                                        l = n[t];
                                                    if (null == l) return e;
                                                    let i = l.colors[r];
                                                    if (null == i) return e;
                                                    let o = (0, b.lT)(l, t, i.color, a, r);
                                                    return {
                                                        ...e,
                                                        semanticColorOverrides: {
                                                            ...n,
                                                            [t]: o
                                                        }
                                                    };
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
            (0, a.jsx)('div', { className: g.divider }),
            (0, a.jsx)(m.Text, {
                variant: 'text-lg/semibold',
                children: 'Raw Tokens'
            }),
            (0, a.jsx)(m.VcW, {
                options: N,
                placeholder: 'Search for a raw color...',
                value: void 0,
                onChange: d,
                renderOptionPrefix: (e) => {
                    if (null == e) return null;
                    let t = e.label.replaceAll('.', '-');
                    return (0, a.jsx)('div', {
                        'data-theme': r,
                        className: g.colorPreview,
                        style: { '--custom-color': 'var(--'.concat(t, ')') }
                    });
                },
                popoutLayerContext: _.O$
            }),
            (0, a.jsx)('ul', {
                className: g.rawOverrides,
                children: Object.entries(o).map((e) => {
                    let [t, l] = e;
                    return (0, a.jsxs)(
                        y,
                        {
                            title: t,
                            subtitle: u.b[t].hex,
                            highlight: l.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        a = { ...n };
                                    return (
                                        (a[t] = {
                                            color: u.b[t].hex,
                                            highlight: !1
                                        }),
                                        {
                                            ...e,
                                            rawColorOverrides: a
                                        }
                                    );
                                });
                            },
                            onRemove: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        a = { ...n };
                                    return (
                                        delete a[t],
                                        {
                                            ...e,
                                            rawColorOverrides: a
                                        }
                                    );
                                });
                            },
                            onHighlightToggle: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        a = n[t];
                                    if (null == a) return e;
                                    let l = { ...n };
                                    return (
                                        (l[t] = {
                                            ...a,
                                            highlight: !a.highlight
                                        }),
                                        {
                                            ...e,
                                            rawColorOverrides: l
                                        }
                                    );
                                });
                            },
                            children: [
                                (0, a.jsx)('input', {
                                    className: g.colorInput,
                                    type: 'color',
                                    value: l.color,
                                    onChange: (e) => {
                                        let a = e.target.value;
                                        n((e) => {
                                            let { rawColorOverrides: n } = e;
                                            return {
                                                ...e,
                                                rawColorOverrides: {
                                                    ...n,
                                                    [t]: {
                                                        color: a,
                                                        highlight: !1
                                                    }
                                                }
                                            };
                                        });
                                    }
                                }),
                                (0, a.jsx)(m.Text, {
                                    variant: 'text-sm/medium',
                                    tabularNumbers: !0,
                                    children: l.color
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
function y(e) {
    let { title: t, subtitle: n, highlight: l, onReset: r, onRemove: i, onHighlightToggle: o, children: s } = e;
    return (0, a.jsxs)('li', {
        className: g.override,
        'data-highlight': l,
        children: [
            (0, a.jsxs)('div', {
                className: g.overrideHeader,
                children: [
                    (0, a.jsxs)('div', {
                        className: g.title,
                        children: [
                            (0, a.jsx)(m.Text, {
                                lineClamp: 1,
                                variant: 'text-md/medium',
                                className: g.overrideHeading,
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
                        onClick: o,
                        className: g.clickabeIcon,
                        children: (0, a.jsx)(m.tEF, {
                            size: 'xs',
                            color: l ? 'var(--text-brand)' : 'currentColor'
                        })
                    }),
                    (0, a.jsx)(m.P3F, {
                        className: g.clickabeIcon,
                        onClick: r,
                        children: (0, a.jsx)(m.DuK, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    }),
                    (0, a.jsx)(m.P3F, {
                        className: g.removeOverride,
                        onClick: i,
                        children: (0, a.jsx)(m.Dio, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: g.overrideContent,
                children: s
            })
        ]
    });
}
