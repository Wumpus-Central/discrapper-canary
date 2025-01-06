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
var r = n(200651),
    a = n(192379),
    l = n(688619),
    i = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(765053),
    d = n(190558),
    u = n(203165),
    m = n(481060),
    h = n(410030),
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
        r = URL.createObjectURL(n),
        a = document.createElement('a'),
        l = new TextEncoder().encode(t);
    crypto.subtle.digest('SHA-256', l).then((t) => {
        let n = Array.from(new Uint8Array(t))
            .map((e) => e.toString(16).padStart(2, '0'))
            .join('');
        (a.href = r), (a.download = ''.concat(e, '-').concat(n.slice(0, 8), '.json')), a.click(), URL.revokeObjectURL(r);
    });
}
function S() {
    let e = (0, h.Fg)(),
        [t, n, l, o, d, u] = (0, g.zn)(),
        { semanticColorOverrides: b, rawColorOverrides: j, tab: _, scales: S } = t,
        y = a.useMemo(() => {
            let t = Object.entries(b).map((t) => {
                    let [n, r] = t,
                        { colors: a, highlight: l } = r,
                        i = a[e];
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
                            s: r,
                            l: a
                        } = (function (e) {
                            let [t, n, r] = 'transparent' === e ? [0, 0, 0] : i()(e).hsl(),
                                a = isNaN(t) ? 0 : s().round(t, 1),
                                l = s().round(100 * r, 1);
                            return {
                                h: a,
                                s: s().round(100 * n, 1),
                                l: l
                            };
                        })(t.highlight ? '#FF00FF' : t.color),
                        l = s().kebabCase(e);
                    return ['--'.concat(l, '-hsl: ').concat(n, ' calc(var(--saturation-factor, 1) * ').concat(r, '%) ').concat(a, '% !important;'), '--'.concat(l, ': hsl(var(--').concat(l, '-hsl)) !important;')];
                }),
                r = S.reduce((e, t) => {
                    let { name: n } = t,
                        r = (0, g.XM)(t),
                        a = (0, g.W6)(r, n);
                    return (
                        e +
                        Object.keys(a).reduce((e, t) => {
                            let n = a[t],
                                l = r[t],
                                i = (0, g.HI)(l);
                            return ''.concat(e, '\n--').concat(n, ': ').concat(i, ';');
                        }, '')
                    );
                }, '');
            return '\n      :root {\n        '.concat(r, '\n      }\n\n      .theme-').concat(e, ' {\n        ').concat(t.join('\n'), '\n      }\n\n      html {\n        ').concat(n.join('\n'), '\n      }\n    ');
        }, [j, S, b, e]);
    return (0, r.jsxs)('div', {
        className: v.panel,
        children: [
            (0, r.jsxs)('div', {
                className: v.toolbar,
                style: {
                    '--custom-theme-selection-selection-size': '40px',
                    '--custom-theme-selection-group-column-gap': 'var(--spacing-8)'
                },
                children: [
                    (0, r.jsxs)(m.TabBar, {
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
                            (0, r.jsx)(m.TabBar.Item, {
                                id: g.H8.TOKENS,
                                children: 'Tokens'
                            }),
                            (0, r.jsx)(m.TabBar.Item, {
                                id: g.H8.PALETTES,
                                children: 'Palettes'
                            })
                        ]
                    }),
                    (0, r.jsx)(x.ZP, {
                        type: x.yH.SETTINGS,
                        children: (0, r.jsx)(x.ZP.Basic, {
                            className: v.toolbarThemeSelector,
                            hideSystemSelector: !0
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: v.toolbarButtons,
                        children: [
                            (0, r.jsx)(m.Button, {
                                size: m.Button.Sizes.ICON,
                                color: m.Button.Colors.TRANSPARENT,
                                look: m.Button.Looks.BLANK,
                                onClick: l,
                                disabled: !d,
                                children: (0, r.jsx)(m.UndoIcon, {})
                            }),
                            (0, r.jsx)(m.Button, {
                                size: m.Button.Sizes.ICON,
                                color: m.Button.Colors.TRANSPARENT,
                                look: m.Button.Looks.BLANK,
                                onClick: o,
                                disabled: !u,
                                children: (0, r.jsx)(m.RedoIcon, {})
                            }),
                            (0, r.jsx)(f.Z, {
                                'aria-label': 'Import',
                                filters: [
                                    {
                                        name: 'JSON',
                                        extensions: ['json']
                                    }
                                ],
                                onChange: (e) => {
                                    let t = e.currentTarget.files,
                                        r = null == t ? void 0 : t[0];
                                    if (null == r) return;
                                    let a = new FileReader();
                                    (a.onload = () => {
                                        let e = a.result;
                                        if ('string' == typeof e)
                                            try {
                                                let t = JSON.parse(e);
                                                if (null == t) return;
                                                n(t);
                                            } catch (e) {}
                                    }),
                                        a.readAsText(r);
                                },
                                size: m.Button.Sizes.ICON,
                                color: m.Button.Colors.TRANSPARENT,
                                look: m.Button.Looks.BLANK,
                                children: (0, r.jsx)(m.UploadIcon, {})
                            }),
                            (0, r.jsx)(m.Button, {
                                size: m.Button.Sizes.ICON,
                                color: m.Button.Colors.TRANSPARENT,
                                look: m.Button.Looks.BLANK,
                                onClick: () => {
                                    T('color-overrides', JSON.stringify({ ...t }, null, 2));
                                },
                                children: (0, r.jsx)(m.DownloadIcon, {})
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: v.tab,
                hidden: _ !== g.H8.TOKENS,
                children: (0, r.jsx)(N, {
                    state: t,
                    setState: n
                })
            }),
            (0, r.jsx)('div', {
                className: v.tab,
                hidden: _ !== g.H8.PALETTES,
                children: (0, r.jsx)(p.P, {
                    state: t,
                    setState: n
                })
            }),
            (0, r.jsx)(c.ql, {
                children: (0, r.jsx)('style', {
                    id: 'devtools-color-overrides',
                    children: y
                })
            })
        ]
    });
}
function N(e) {
    let { state: t, setState: n } = e,
        l = (0, h.Fg)(),
        { semanticColorOverrides: i, rawColorOverrides: o } = t,
        s = a.useMemo(
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
        c = a.useCallback(
            (e) => {
                n((t) => {
                    var n;
                    let { semanticColorOverrides: r } = t,
                        a = null !== (n = r[e]) && void 0 !== n ? n : (0, g.$R)(e);
                    return {
                        ...t,
                        semanticColorOverrides: {
                            ...r,
                            [e]: a
                        }
                    };
                });
            },
            [n]
        ),
        d = a.useCallback(
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
        x = a.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        r = { ...n };
                    return (
                        delete r[e],
                        {
                            ...t,
                            semanticColorOverrides: r
                        }
                    );
                });
            },
            [n]
        ),
        f = a.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        r = n[e];
                    if (null == r) return t;
                    let a = { ...n };
                    return (
                        (a[e] = (0, g.GU)(r)),
                        {
                            ...t,
                            semanticColorOverrides: a
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
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.Text, {
                variant: 'text-lg/semibold',
                children: 'Semantic Tokens'
            }),
            (0, r.jsx)(m.SearchableSelect, {
                options: p,
                placeholder: 'Search for a semantic token...',
                value: void 0,
                onChange: c,
                renderOptionPrefix: (e) =>
                    null == e
                        ? null
                        : (0, r.jsx)('div', {
                              'data-theme': l,
                              className: v.colorPreview,
                              style: { '--custom-color': 'var(--'.concat(e.label, ')') }
                          }),
                popoutLayerContext: b.O$
            }),
            (0, r.jsx)('ul', {
                className: v.overrides,
                children: Object.entries(i).map((e) => {
                    let [t, a] = e,
                        i = a.colors[l];
                    if (null == i) return null;
                    let o = _(i.color),
                        c = i.opacity,
                        d = g.jC[t][l];
                    return (0, r.jsx)(
                        y,
                        {
                            title: C(t),
                            subtitle: 1 === d.opacity ? _(d.raw) : ''.concat(_(d.raw), ' @ ').concat(100 * d.opacity, '%'),
                            highlight: a.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { semanticColorOverrides: n } = e;
                                    if (null == n[t]) return e;
                                    let r = (0, g.$R)(t);
                                    return {
                                        ...e,
                                        semanticColorOverrides: {
                                            ...n,
                                            [t]: r
                                        }
                                    };
                                });
                            },
                            onRemove: () => x(t),
                            onHighlightToggle: () => f(t),
                            children: (0, r.jsxs)('div', {
                                className: v.semanticOverride,
                                children: [
                                    (0, r.jsx)(m.SearchableSelect, {
                                        value: o,
                                        options: s,
                                        onChange: (e) => {
                                            n((n) => {
                                                let { semanticColorOverrides: r } = n,
                                                    a = r[t];
                                                if (null == a) return n;
                                                let i = a.colors[l];
                                                if (null == i) return n;
                                                let o = (0, g.lT)(a, t, e, i.opacity, l);
                                                return {
                                                    ...n,
                                                    semanticColorOverrides: {
                                                        ...r,
                                                        [t]: o
                                                    }
                                                };
                                            });
                                        },
                                        renderOptionPrefix: (e) => {
                                            if (null == e) return null;
                                            let t = e.label.replaceAll('.', '-');
                                            return (0, r.jsx)('div', {
                                                'data-theme': l,
                                                className: v.colorPreview,
                                                style: { '--custom-color': 'var(--'.concat(t, ')') }
                                            });
                                        },
                                        popoutLayerContext: b.O$
                                    }),
                                    (0, r.jsx)(m.TextInput, {
                                        inputClassName: v.opacityInput,
                                        type: 'number',
                                        value: c,
                                        min: 0,
                                        max: 1,
                                        step: 0.01,
                                        onChange: (e) => {
                                            let r = parseFloat(e);
                                            !isNaN(r) &&
                                                n((e) => {
                                                    let { semanticColorOverrides: n } = e,
                                                        a = n[t];
                                                    if (null == a) return e;
                                                    let i = a.colors[l];
                                                    if (null == i) return e;
                                                    let o = (0, g.lT)(a, t, i.color, r, l);
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
            (0, r.jsx)('div', { className: v.divider }),
            (0, r.jsx)(m.Text, {
                variant: 'text-lg/semibold',
                children: 'Raw Tokens'
            }),
            (0, r.jsx)(m.SearchableSelect, {
                options: T,
                placeholder: 'Search for a raw color...',
                value: void 0,
                onChange: d,
                renderOptionPrefix: (e) => {
                    if (null == e) return null;
                    let t = e.label.replaceAll('.', '-');
                    return (0, r.jsx)('div', {
                        'data-theme': l,
                        className: v.colorPreview,
                        style: { '--custom-color': 'var(--'.concat(t, ')') }
                    });
                },
                popoutLayerContext: b.O$
            }),
            (0, r.jsx)('ul', {
                className: v.rawOverrides,
                children: Object.entries(o).map((e) => {
                    let [t, a] = e;
                    return (0, r.jsxs)(
                        y,
                        {
                            title: t,
                            subtitle: u.b[t].hex,
                            highlight: a.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        r = { ...n };
                                    return (
                                        (r[t] = {
                                            color: u.b[t].hex,
                                            highlight: !1
                                        }),
                                        {
                                            ...e,
                                            rawColorOverrides: r
                                        }
                                    );
                                });
                            },
                            onRemove: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        r = { ...n };
                                    return (
                                        delete r[t],
                                        {
                                            ...e,
                                            rawColorOverrides: r
                                        }
                                    );
                                });
                            },
                            onHighlightToggle: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        r = n[t];
                                    if (null == r) return e;
                                    let a = { ...n };
                                    return (
                                        (a[t] = {
                                            ...r,
                                            highlight: !r.highlight
                                        }),
                                        {
                                            ...e,
                                            rawColorOverrides: a
                                        }
                                    );
                                });
                            },
                            children: [
                                (0, r.jsx)('input', {
                                    className: v.colorInput,
                                    type: 'color',
                                    value: a.color,
                                    onChange: (e) => {
                                        let r = e.target.value;
                                        n((e) => {
                                            let { rawColorOverrides: n } = e;
                                            return {
                                                ...e,
                                                rawColorOverrides: {
                                                    ...n,
                                                    [t]: {
                                                        color: r,
                                                        highlight: !1
                                                    }
                                                }
                                            };
                                        });
                                    }
                                }),
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-sm/medium',
                                    tabularNumbers: !0,
                                    children: a.color
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
    let { title: t, subtitle: n, highlight: a, onReset: l, onRemove: i, onHighlightToggle: o, children: s } = e;
    return (0, r.jsxs)('li', {
        className: v.override,
        'data-highlight': a,
        children: [
            (0, r.jsxs)('div', {
                className: v.overrideHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: v.title,
                        children: [
                            (0, r.jsx)(m.Text, {
                                lineClamp: 1,
                                variant: 'text-md/medium',
                                className: v.overrideHeading,
                                tabularNumbers: !0,
                                children: t
                            }),
                            null != n
                                ? (0, r.jsx)(m.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'text-secondary',
                                      tabularNumbers: !0,
                                      children: n
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(m.Clickable, {
                        onClick: o,
                        className: v.clickabeIcon,
                        children: (0, r.jsx)(m.EyeIcon, {
                            size: 'xs',
                            color: a ? 'var(--text-brand)' : 'currentColor'
                        })
                    }),
                    (0, r.jsx)(m.Clickable, {
                        className: v.clickabeIcon,
                        onClick: l,
                        children: (0, r.jsx)(m.RefreshIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    }),
                    (0, r.jsx)(m.Clickable, {
                        className: v.removeOverride,
                        onClick: i,
                        children: (0, r.jsx)(m.XSmallIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: v.overrideContent,
                children: s
            })
        ]
    });
}
