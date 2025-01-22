n.d(t, {
    Z: function () {
        return S;
    },
    q: function () {
        return T;
    }
}),
    n(627494),
    n(757143),
    n(47120),
    n(315314),
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
    r = n(192379),
    l = n(688619),
    i = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(765053),
    d = n(190558),
    u = n(203165),
    h = n(481060),
    m = n(410030),
    x = n(705262),
    f = n(374794),
    p = n(58755),
    b = n(246992),
    g = n(500949),
    v = n(833999);
let { SemanticColors: j } = d.V;
function C(e) {
    return e.replaceAll(/_|\./g, '-').toLowerCase();
}
function _(e) {
    return e.replaceAll(/_|-/g, '.').toLowerCase();
}
function T(e, t) {
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
function S() {
    let e = (0, m.Fg)(),
        [t, n, l, o, d, u] = (0, g.zn)(),
        { semanticColorOverrides: b, rawColorOverrides: j, tab: _, scales: S } = t,
        y = r.useMemo(() => {
            let t = Object.entries(b).map((t) => {
                    let [n, a] = t,
                        { colors: r, highlight: l } = a,
                        i = r[e];
                    if (null == i) return '';
                    let o = C(n);
                    if (l) return '--'.concat(o, ': magenta !important;');
                    let s = C(i.color),
                        c = i.opacity,
                        d = c < 1 ? 'hsl(var(--'.concat(s, '-hsl) / ').concat(c, ')') : 'var(--'.concat(s, ')');
                    return '--'.concat(o, ': color-mix(\n        in oklab,\n        ').concat(d, ' 100%,\n        var(--theme-base-color, black) var(--theme-base-color-amount, 0%)\n      );');
                }),
                n = Object.keys(j).flatMap((e) => {
                    let t = j[e],
                        {
                            h: n,
                            s: a,
                            l: r
                        } = (function (e) {
                            let [t, n, a] = 'transparent' === e ? [0, 0, 0] : i()(e).hsl(),
                                r = isNaN(t) ? 0 : s().round(t, 1),
                                l = s().round(100 * a, 1);
                            return {
                                h: r,
                                s: s().round(100 * n, 1),
                                l: l
                            };
                        })(t.highlight ? '#FF00FF' : t.color),
                        l = s().kebabCase(e);
                    return ['--'.concat(l, '-hsl: ').concat(n, ' calc(var(--saturation-factor, 1) * ').concat(a, '%) ').concat(r, '% !important;'), '--'.concat(l, ': hsl(var(--').concat(l, '-hsl)) !important;')];
                }),
                a = S.reduce((e, t) => {
                    let { name: n } = t,
                        a = (0, g.XM)(t),
                        r = (0, g.W6)(a, n);
                    return (
                        e +
                        Object.keys(r).reduce((e, t) => {
                            let n = r[t],
                                l = a[t],
                                i = (0, g.HI)(l);
                            return ''.concat(e, '\n--').concat(n, ': ').concat(i, ';');
                        }, '')
                    );
                }, '');
            return '\n      :root {\n        '.concat(a, '\n      }\n\n      .theme-').concat(e, ' {\n        ').concat(t.join('\n'), '\n      }\n\n      html {\n        ').concat(n.join('\n'), '\n      }\n    ');
        }, [j, S, b, e]);
    return (0, a.jsxs)('div', {
        className: v.panel,
        children: [
            (0, a.jsxs)('div', {
                className: v.toolbar,
                style: {
                    '--custom-theme-selection-selection-size': '40px',
                    '--custom-theme-selection-group-column-gap': 'var(--spacing-8)'
                },
                children: [
                    (0, a.jsxs)(h.TabBar, {
                        className: v.tabBar,
                        type: 'top',
                        look: 'brand',
                        selectedItem: _,
                        onItemSelect: (e) => {
                            n((t) => ({
                                ...t,
                                tab: e
                            }));
                        },
                        children: [
                            (0, a.jsx)(h.TabBar.Item, {
                                id: g.H8.TOKENS,
                                children: 'Tokens'
                            }),
                            (0, a.jsx)(h.TabBar.Item, {
                                id: g.H8.PALETTES,
                                children: 'Palettes'
                            })
                        ]
                    }),
                    (0, a.jsx)(x.ZP, {
                        type: x.yH.SETTINGS,
                        children: (0, a.jsx)(x.ZP.Basic, {
                            className: v.toolbarThemeSelector,
                            hideSystemSelector: !0
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: v.toolbarButtons,
                        children: [
                            (0, a.jsx)(h.Button, {
                                size: h.Button.Sizes.ICON,
                                color: h.Button.Colors.TRANSPARENT,
                                look: h.Button.Looks.BLANK,
                                onClick: l,
                                disabled: !d,
                                children: (0, a.jsx)(h.UndoIcon, {})
                            }),
                            (0, a.jsx)(h.Button, {
                                size: h.Button.Sizes.ICON,
                                color: h.Button.Colors.TRANSPARENT,
                                look: h.Button.Looks.BLANK,
                                onClick: o,
                                disabled: !u,
                                children: (0, a.jsx)(h.RedoIcon, {})
                            }),
                            (0, a.jsx)(f.Z, {
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
                                size: h.Button.Sizes.ICON,
                                color: h.Button.Colors.TRANSPARENT,
                                look: h.Button.Looks.BLANK,
                                children: (0, a.jsx)(h.UploadIcon, {})
                            }),
                            (0, a.jsx)(h.Button, {
                                size: h.Button.Sizes.ICON,
                                color: h.Button.Colors.TRANSPARENT,
                                look: h.Button.Looks.BLANK,
                                onClick: () => {
                                    T('color-overrides', JSON.stringify({ ...t }, null, 2));
                                },
                                children: (0, a.jsx)(h.DownloadIcon, {})
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: v.tab,
                hidden: _ !== g.H8.TOKENS,
                children: (0, a.jsx)(N, {
                    state: t,
                    setState: n
                })
            }),
            (0, a.jsx)('div', {
                className: v.tab,
                hidden: _ !== g.H8.PALETTES,
                children: (0, a.jsx)(p.P, {
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
function N(e) {
    let { state: t, setState: n } = e,
        l = (0, m.Fg)(),
        { semanticColorOverrides: i, rawColorOverrides: o } = t,
        s = r.useMemo(
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
                        r = null !== (n = a[e]) && void 0 !== n ? n : (0, g.$R)(e);
                    return {
                        ...t,
                        semanticColorOverrides: {
                            ...a,
                            [e]: r
                        }
                    };
                });
            },
            [n]
        ),
        d = r.useCallback(
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
        x = r.useCallback(
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
        f = r.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        a = n[e];
                    if (null == a) return t;
                    let r = { ...n };
                    return (
                        (r[e] = (0, g.GU)(a)),
                        {
                            ...t,
                            semanticColorOverrides: r
                        }
                    );
                });
            },
            [n]
        ),
        p = Object.keys(j).map((e) => ({
            value: e,
            label: C(e)
        })),
        T = Object.keys(u.b).map((e) => ({
            value: e,
            label: e
        }));
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(h.Text, {
                variant: 'text-lg/semibold',
                children: 'Semantic Tokens'
            }),
            (0, a.jsx)(h.SearchableSelect, {
                options: p,
                placeholder: 'Search for a semantic token...',
                value: void 0,
                onChange: c,
                renderOptionPrefix: (e) =>
                    null == e
                        ? null
                        : (0, a.jsx)('div', {
                              'data-theme': l,
                              className: v.colorPreview,
                              style: { '--custom-color': 'var(--'.concat(e.label, ')') }
                          }),
                popoutLayerContext: b.O$
            }),
            (0, a.jsx)('ul', {
                className: v.overrides,
                children: Object.entries(i).map((e) => {
                    let [t, r] = e,
                        i = r.colors[l];
                    if (null == i) return null;
                    let o = _(i.color),
                        c = i.opacity,
                        d = g.jC[t][l];
                    return (0, a.jsx)(
                        y,
                        {
                            title: C(t),
                            subtitle: 1 === d.opacity ? _(d.raw) : ''.concat(_(d.raw), ' @ ').concat(100 * d.opacity, '%'),
                            highlight: r.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { semanticColorOverrides: n } = e;
                                    if (null == n[t]) return e;
                                    let a = (0, g.$R)(t);
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
                            onHighlightToggle: () => f(t),
                            children: (0, a.jsxs)('div', {
                                className: v.semanticOverride,
                                children: [
                                    (0, a.jsx)(h.SearchableSelect, {
                                        value: o,
                                        options: s,
                                        onChange: (e) => {
                                            n((n) => {
                                                let { semanticColorOverrides: a } = n,
                                                    r = a[t];
                                                if (null == r) return n;
                                                let i = r.colors[l];
                                                if (null == i) return n;
                                                let o = (0, g.lT)(r, t, e, i.opacity, l);
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
                                                'data-theme': l,
                                                className: v.colorPreview,
                                                style: { '--custom-color': 'var(--'.concat(t, ')') }
                                            });
                                        },
                                        popoutLayerContext: b.O$
                                    }),
                                    (0, a.jsx)(h.TextInput, {
                                        inputClassName: v.opacityInput,
                                        type: 'number',
                                        value: c,
                                        min: 0,
                                        max: 1,
                                        step: 0.01,
                                        onChange: (e) => {
                                            let a = parseFloat(e);
                                            !isNaN(a) &&
                                                n((e) => {
                                                    let { semanticColorOverrides: n } = e,
                                                        r = n[t];
                                                    if (null == r) return e;
                                                    let i = r.colors[l];
                                                    if (null == i) return e;
                                                    let o = (0, g.lT)(r, t, i.color, a, l);
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
            (0, a.jsx)('div', { className: v.divider }),
            (0, a.jsx)(h.Text, {
                variant: 'text-lg/semibold',
                children: 'Raw Tokens'
            }),
            (0, a.jsx)(h.SearchableSelect, {
                options: T,
                placeholder: 'Search for a raw color...',
                value: void 0,
                onChange: d,
                renderOptionPrefix: (e) => {
                    if (null == e) return null;
                    let t = e.label.replaceAll('.', '-');
                    return (0, a.jsx)('div', {
                        'data-theme': l,
                        className: v.colorPreview,
                        style: { '--custom-color': 'var(--'.concat(t, ')') }
                    });
                },
                popoutLayerContext: b.O$
            }),
            (0, a.jsx)('ul', {
                className: v.rawOverrides,
                children: Object.entries(o).map((e) => {
                    let [t, r] = e;
                    return (0, a.jsxs)(
                        y,
                        {
                            title: t,
                            subtitle: u.b[t].hex,
                            highlight: r.highlight,
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
                                    let r = { ...n };
                                    return (
                                        (r[t] = {
                                            ...a,
                                            highlight: !a.highlight
                                        }),
                                        {
                                            ...e,
                                            rawColorOverrides: r
                                        }
                                    );
                                });
                            },
                            children: [
                                (0, a.jsx)('input', {
                                    className: v.colorInput,
                                    type: 'color',
                                    value: r.color,
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
                                (0, a.jsx)(h.Text, {
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
function y(e) {
    let { title: t, subtitle: n, highlight: r, onReset: l, onRemove: i, onHighlightToggle: o, children: s } = e;
    return (0, a.jsxs)('li', {
        className: v.override,
        'data-highlight': r,
        children: [
            (0, a.jsxs)('div', {
                className: v.overrideHeader,
                children: [
                    (0, a.jsxs)('div', {
                        className: v.title,
                        children: [
                            (0, a.jsx)(h.Text, {
                                lineClamp: 1,
                                variant: 'text-md/medium',
                                className: v.overrideHeading,
                                tabularNumbers: !0,
                                children: t
                            }),
                            null != n
                                ? (0, a.jsx)(h.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'text-secondary',
                                      tabularNumbers: !0,
                                      children: n
                                  })
                                : null
                        ]
                    }),
                    (0, a.jsx)(h.Clickable, {
                        onClick: o,
                        className: v.clickabeIcon,
                        children: (0, a.jsx)(h.EyeIcon, {
                            size: 'xs',
                            color: r ? 'var(--text-brand)' : 'currentColor'
                        })
                    }),
                    (0, a.jsx)(h.Clickable, {
                        className: v.clickabeIcon,
                        onClick: l,
                        children: (0, a.jsx)(h.RefreshIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    }),
                    (0, a.jsx)(h.Clickable, {
                        className: v.removeOverride,
                        onClick: i,
                        children: (0, a.jsx)(h.XSmallIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: v.overrideContent,
                children: s
            })
        ]
    });
}
