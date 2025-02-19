n.d(t, {
    Z: () => T,
    q: () => N
}),
    n(627494),
    n(757143),
    n(301563),
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
    n(610885),
    n(126298),
    n(13667),
    n(390547),
    n(26686);
var r = n(200651),
    a = n(192379),
    i = n(688619),
    l = n.n(i),
    o = n(392711),
    s = n.n(o),
    c = n(765053),
    d = n(190558),
    u = n(203165),
    h = n(481060),
    m = n(410030),
    x = n(705262),
    p = n(374794),
    f = n(58755),
    b = n(246992),
    _ = n(500949),
    g = n(452721);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let { SemanticColors: C } = d.V;
function y(e) {
    return e.replaceAll(/_|\./g, '-').toLowerCase();
}
function O(e) {
    return e.replaceAll(/_|-/g, '.').toLowerCase();
}
function N(e, t) {
    let n = new Blob([t], { type: 'application/json' }),
        r = URL.createObjectURL(n),
        a = document.createElement('a'),
        i = new TextEncoder().encode(t);
    crypto.subtle.digest('SHA-256', i).then((t) => {
        let n = Array.from(new Uint8Array(t))
            .map((e) => e.toString(16).padStart(2, '0'))
            .join('');
        (a.href = r), (a.download = ''.concat(e, '-').concat(n.slice(0, 8), '.json')), a.click(), URL.revokeObjectURL(r);
    });
}
function T() {
    let e = (0, m.Fg)(),
        [t, n, i, o, d, u] = (0, _.zn)(),
        { semanticColorOverrides: b, rawColorOverrides: C, tab: O, scales: T } = t,
        S = a.useMemo(() => {
            let t = Object.entries(b).map((t) => {
                    let [n, r] = t,
                        { colors: a, highlight: i } = r,
                        l = a[e];
                    if (null == l) return '';
                    let o = y(n);
                    if (i) return '--'.concat(o, ': magenta !important;');
                    let s = y(l.color),
                        c = l.opacity,
                        d = c < 1 ? 'hsl(var(--'.concat(s, '-hsl) / ').concat(c, ')') : 'var(--'.concat(s, ')');
                    return '--'.concat(o, ': color-mix(\n        in oklab,\n        ').concat(d, ' 100%,\n        var(--theme-base-color, black) var(--theme-base-color-amount, 0%)\n      );');
                }),
                n = Object.keys(C).flatMap((e) => {
                    let t = C[e],
                        {
                            h: n,
                            s: r,
                            l: a
                        } = (function (e) {
                            let [t, n, r] = 'transparent' === e ? [0, 0, 0] : l()(e).hsl(),
                                a = isNaN(t) ? 0 : s().round(t, 1),
                                i = s().round(100 * r, 1);
                            return {
                                h: a,
                                s: s().round(100 * n, 1),
                                l: i
                            };
                        })(t.highlight ? '#FF00FF' : t.color),
                        i = s().kebabCase(e);
                    return ['--'.concat(i, '-hsl: ').concat(n, ' calc(var(--saturation-factor, 1) * ').concat(r, '%) ').concat(a, '% !important;'), '--'.concat(i, ': hsl(var(--').concat(i, '-hsl)) !important;')];
                }),
                r = T.reduce((e, t) => {
                    let { name: n } = t,
                        r = (0, _.XM)(t),
                        a = (0, _.W6)(r, n);
                    return (
                        e +
                        Object.keys(a).reduce((e, t) => {
                            let n = a[t],
                                i = r[t],
                                l = (0, _.HI)(i);
                            return ''.concat(e, '\n--').concat(n, ': ').concat(l, ';');
                        }, '')
                    );
                }, '');
            return '\n      :root {\n        '.concat(r, '\n      }\n\n      .theme-').concat(e, ' {\n        ').concat(t.join('\n'), '\n      }\n\n      html {\n        ').concat(n.join('\n'), '\n      }\n    ');
        }, [C, T, b, e]);
    return (0, r.jsxs)('div', {
        className: g.panel,
        children: [
            (0, r.jsxs)('div', {
                className: g.toolbar,
                style: {
                    '--custom-theme-selection-selection-size': '40px',
                    '--custom-theme-selection-group-column-gap': 'var(--spacing-8)'
                },
                children: [
                    (0, r.jsxs)(h.njP, {
                        className: g.tabBar,
                        type: 'top',
                        look: 'brand',
                        selectedItem: O,
                        onItemSelect: (e) => {
                            n((t) => j(v({}, t), { tab: e }));
                        },
                        children: [
                            (0, r.jsx)(h.njP.Item, {
                                id: _.H8.TOKENS,
                                children: 'Tokens'
                            }),
                            (0, r.jsx)(h.njP.Item, {
                                id: _.H8.PALETTES,
                                children: 'Palettes'
                            })
                        ]
                    }),
                    (0, r.jsx)(x.ZP, {
                        type: x.yH.SETTINGS,
                        children: (0, r.jsx)(x.ZP.Basic, {
                            className: g.toolbarThemeSelector,
                            hideSystemSelector: !0
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: g.toolbarButtons,
                        children: [
                            (0, r.jsx)(h.zxk, {
                                size: h.zxk.Sizes.ICON,
                                color: h.zxk.Colors.TRANSPARENT,
                                look: h.zxk.Looks.BLANK,
                                onClick: i,
                                disabled: !d,
                                children: (0, r.jsx)(h.UEU, {})
                            }),
                            (0, r.jsx)(h.zxk, {
                                size: h.zxk.Sizes.ICON,
                                color: h.zxk.Colors.TRANSPARENT,
                                look: h.zxk.Looks.BLANK,
                                onClick: o,
                                disabled: !u,
                                children: (0, r.jsx)(h.zGS, {})
                            }),
                            (0, r.jsx)(p.Z, {
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
                                size: h.zxk.Sizes.ICON,
                                color: h.zxk.Colors.TRANSPARENT,
                                look: h.zxk.Looks.BLANK,
                                children: (0, r.jsx)(h.rG2, {})
                            }),
                            (0, r.jsx)(h.zxk, {
                                size: h.zxk.Sizes.ICON,
                                color: h.zxk.Colors.TRANSPARENT,
                                look: h.zxk.Looks.BLANK,
                                onClick: () => {
                                    N('color-overrides', JSON.stringify(v({}, t), null, 2));
                                },
                                children: (0, r.jsx)(h._8t, {})
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: g.tab,
                hidden: O !== _.H8.TOKENS,
                children: (0, r.jsx)(E, {
                    state: t,
                    setState: n
                })
            }),
            (0, r.jsx)('div', {
                className: g.tab,
                hidden: O !== _.H8.PALETTES,
                children: (0, r.jsx)(f.P, {
                    state: t,
                    setState: n
                })
            }),
            (0, r.jsx)(c.ql, {
                children: (0, r.jsx)('style', {
                    id: 'devtools-color-overrides',
                    children: S
                })
            })
        ]
    });
}
function E(e) {
    let { state: t, setState: n } = e,
        i = (0, m.Fg)(),
        { semanticColorOverrides: l, rawColorOverrides: o } = t,
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
                        a = null !== (n = r[e]) && void 0 !== n ? n : (0, _.$R)(e);
                    return j(v({}, t), { semanticColorOverrides: j(v({}, r), { [e]: a }) });
                });
            },
            [n]
        ),
        d = a.useCallback(
            (e) => {
                n((t) => {
                    let { rawColorOverrides: n } = t;
                    return null == n[e]
                        ? j(v({}, t), {
                              rawColorOverrides: j(v({}, n), {
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
        x = a.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        r = v({}, n);
                    return delete r[e], j(v({}, t), { semanticColorOverrides: r });
                });
            },
            [n]
        ),
        p = a.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        r = n[e];
                    if (null == r) return t;
                    let a = v({}, n);
                    return (a[e] = (0, _.GU)(r)), j(v({}, t), { semanticColorOverrides: a });
                });
            },
            [n]
        ),
        f = Object.keys(C).map((e) => ({
            value: e,
            label: y(e)
        })),
        N = Object.keys(u.b).map((e) => ({
            value: e,
            label: e
        }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h.Text, {
                variant: 'text-lg/semibold',
                children: 'Semantic Tokens'
            }),
            (0, r.jsx)(h.VcW, {
                options: f,
                placeholder: 'Search for a semantic token...',
                value: void 0,
                onChange: c,
                renderOptionPrefix: (e) =>
                    null == e
                        ? null
                        : (0, r.jsx)('div', {
                              'data-theme': i,
                              className: g.colorPreview,
                              style: { '--custom-color': 'var(--'.concat(e.label, ')') }
                          }),
                popoutLayerContext: b.O$
            }),
            (0, r.jsx)('ul', {
                className: g.overrides,
                children: Object.entries(l).map((e) => {
                    let [t, a] = e,
                        l = a.colors[i];
                    if (null == l) return null;
                    let o = O(l.color),
                        c = l.opacity,
                        d = _.jC[t][i];
                    return (0, r.jsx)(
                        S,
                        {
                            title: y(t),
                            subtitle: 1 === d.opacity ? O(d.raw) : ''.concat(O(d.raw), ' @ ').concat(100 * d.opacity, '%'),
                            highlight: a.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { semanticColorOverrides: n } = e;
                                    if (null == n[t]) return e;
                                    let r = (0, _.$R)(t);
                                    return j(v({}, e), { semanticColorOverrides: j(v({}, n), { [t]: r }) });
                                });
                            },
                            onRemove: () => x(t),
                            onHighlightToggle: () => p(t),
                            children: (0, r.jsxs)('div', {
                                className: g.semanticOverride,
                                children: [
                                    (0, r.jsx)(h.VcW, {
                                        value: o,
                                        options: s,
                                        onChange: (e) => {
                                            n((n) => {
                                                let { semanticColorOverrides: r } = n,
                                                    a = r[t];
                                                if (null == a) return n;
                                                let l = a.colors[i];
                                                if (null == l) return n;
                                                let o = (0, _.lT)(a, t, e, l.opacity, i);
                                                return j(v({}, n), { semanticColorOverrides: j(v({}, r), { [t]: o }) });
                                            });
                                        },
                                        renderOptionPrefix: (e) => {
                                            if (null == e) return null;
                                            let t = e.label.replaceAll('.', '-');
                                            return (0, r.jsx)('div', {
                                                'data-theme': i,
                                                className: g.colorPreview,
                                                style: { '--custom-color': 'var(--'.concat(t, ')') }
                                            });
                                        },
                                        popoutLayerContext: b.O$
                                    }),
                                    (0, r.jsx)(h.oil, {
                                        inputClassName: g.opacityInput,
                                        type: 'number',
                                        value: c,
                                        min: 0,
                                        max: 1,
                                        step: 0.01,
                                        onChange: (e) => {
                                            let r = parseFloat(e);
                                            isNaN(r) ||
                                                n((e) => {
                                                    let { semanticColorOverrides: n } = e,
                                                        a = n[t];
                                                    if (null == a) return e;
                                                    let l = a.colors[i];
                                                    if (null == l) return e;
                                                    let o = (0, _.lT)(a, t, l.color, r, i);
                                                    return j(v({}, e), { semanticColorOverrides: j(v({}, n), { [t]: o }) });
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
            (0, r.jsx)('div', { className: g.divider }),
            (0, r.jsx)(h.Text, {
                variant: 'text-lg/semibold',
                children: 'Raw Tokens'
            }),
            (0, r.jsx)(h.VcW, {
                options: N,
                placeholder: 'Search for a raw color...',
                value: void 0,
                onChange: d,
                renderOptionPrefix: (e) => {
                    if (null == e) return null;
                    let t = e.label.replaceAll('.', '-');
                    return (0, r.jsx)('div', {
                        'data-theme': i,
                        className: g.colorPreview,
                        style: { '--custom-color': 'var(--'.concat(t, ')') }
                    });
                },
                popoutLayerContext: b.O$
            }),
            (0, r.jsx)('ul', {
                className: g.rawOverrides,
                children: Object.entries(o).map((e) => {
                    let [t, a] = e;
                    return (0, r.jsxs)(
                        S,
                        {
                            title: t,
                            subtitle: u.b[t].hex,
                            highlight: a.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        r = v({}, n);
                                    return (
                                        (r[t] = {
                                            color: u.b[t].hex,
                                            highlight: !1
                                        }),
                                        j(v({}, e), { rawColorOverrides: r })
                                    );
                                });
                            },
                            onRemove: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        r = v({}, n);
                                    return delete r[t], j(v({}, e), { rawColorOverrides: r });
                                });
                            },
                            onHighlightToggle: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        r = n[t];
                                    if (null == r) return e;
                                    let a = v({}, n);
                                    return (a[t] = j(v({}, r), { highlight: !r.highlight })), j(v({}, e), { rawColorOverrides: a });
                                });
                            },
                            children: [
                                (0, r.jsx)('input', {
                                    className: g.colorInput,
                                    type: 'color',
                                    value: a.color,
                                    onChange: (e) => {
                                        let r = e.target.value;
                                        n((e) => {
                                            let { rawColorOverrides: n } = e;
                                            return j(v({}, e), {
                                                rawColorOverrides: j(v({}, n), {
                                                    [t]: {
                                                        color: r,
                                                        highlight: !1
                                                    }
                                                })
                                            });
                                        });
                                    }
                                }),
                                (0, r.jsx)(h.Text, {
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
function S(e) {
    let { title: t, subtitle: n, highlight: a, onReset: i, onRemove: l, onHighlightToggle: o, children: s } = e;
    return (0, r.jsxs)('li', {
        className: g.override,
        'data-highlight': a,
        children: [
            (0, r.jsxs)('div', {
                className: g.overrideHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: g.title,
                        children: [
                            (0, r.jsx)(h.Text, {
                                lineClamp: 1,
                                variant: 'text-md/medium',
                                className: g.overrideHeading,
                                tabularNumbers: !0,
                                children: t
                            }),
                            null != n
                                ? (0, r.jsx)(h.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'text-secondary',
                                      tabularNumbers: !0,
                                      children: n
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(h.P3F, {
                        onClick: o,
                        className: g.clickabeIcon,
                        children: (0, r.jsx)(h.tEF, {
                            size: 'xs',
                            color: a ? 'var(--text-brand)' : 'currentColor'
                        })
                    }),
                    (0, r.jsx)(h.P3F, {
                        className: g.clickabeIcon,
                        onClick: i,
                        children: (0, r.jsx)(h.DuK, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    }),
                    (0, r.jsx)(h.P3F, {
                        className: g.removeOverride,
                        onClick: l,
                        children: (0, r.jsx)(h.Dio, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: g.overrideContent,
                children: s
            })
        ]
    });
}
