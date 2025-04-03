n.d(t, {
    Z: () => N,
    q: () => S
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
    l = n(688619),
    i = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(765053),
    d = n(190558),
    u = n(203165),
    m = n(481060),
    x = n(410030),
    h = n(705262),
    p = n(374794),
    b = n(58755),
    f = n(246992),
    _ = n(500949),
    g = n(770378);
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
let { SemanticColors: y } = d.V;
function C(e) {
    return e.replaceAll(/_|\./g, '-').toLowerCase();
}
function T(e) {
    return e.replaceAll(/_|-/g, '.').toLowerCase();
}
function S(e, t) {
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
function N() {
    let e = (0, x.Fg)(),
        [t, n, l, o, d, u] = (0, _.zn)(),
        { semanticColorOverrides: f, rawColorOverrides: y, tab: T, scales: N } = t,
        k = a.useMemo(() => {
            let t = Object.entries(f).map((t) => {
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
                n = Object.keys(y).flatMap((e) => {
                    let t = y[e],
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
                r = N.reduce((e, t) => {
                    let { name: n } = t,
                        r = (0, _.XM)(t),
                        a = (0, _.W6)(r, n);
                    return (
                        e +
                        Object.keys(a).reduce((e, t) => {
                            let n = a[t],
                                l = r[t],
                                i = (0, _.HI)(l);
                            return ''.concat(e, '\n--').concat(n, ': ').concat(i, ';');
                        }, '')
                    );
                }, '');
            return '\n      :root {\n        '.concat(r, '\n      }\n\n      .theme-').concat(e, ' {\n        ').concat(t.join('\n'), '\n      }\n\n      html {\n        ').concat(n.join('\n'), '\n      }\n    ');
        }, [y, N, f, e]);
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
                    (0, r.jsxs)(m.njP, {
                        className: g.tabBar,
                        type: 'top',
                        look: 'brand',
                        selectedItem: T,
                        onItemSelect: (e) => {
                            n((t) => j(v({}, t), { tab: e }));
                        },
                        children: [
                            (0, r.jsx)(m.njP.Item, {
                                id: _.H8.TOKENS,
                                children: 'Tokens'
                            }),
                            (0, r.jsx)(m.njP.Item, {
                                id: _.H8.PALETTES,
                                children: 'Palettes'
                            })
                        ]
                    }),
                    (0, r.jsx)(h.ZP, {
                        type: h.yH.SETTINGS,
                        children: (0, r.jsx)(h.ZP.Basic, {
                            className: g.toolbarThemeSelector,
                            hideSystemSelector: !0
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: g.toolbarButtons,
                        children: [
                            (0, r.jsx)(m.zxk, {
                                size: m.zxk.Sizes.ICON,
                                color: m.zxk.Colors.TRANSPARENT,
                                look: m.zxk.Looks.BLANK,
                                onClick: l,
                                disabled: !d,
                                children: (0, r.jsx)(m.UEU, {})
                            }),
                            (0, r.jsx)(m.zxk, {
                                size: m.zxk.Sizes.ICON,
                                color: m.zxk.Colors.TRANSPARENT,
                                look: m.zxk.Looks.BLANK,
                                onClick: o,
                                disabled: !u,
                                children: (0, r.jsx)(m.zGS, {})
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
                                size: m.zxk.Sizes.ICON,
                                color: m.zxk.Colors.TRANSPARENT,
                                look: m.zxk.Looks.BLANK,
                                children: (0, r.jsx)(m.rG2, {})
                            }),
                            (0, r.jsx)(m.zxk, {
                                size: m.zxk.Sizes.ICON,
                                color: m.zxk.Colors.TRANSPARENT,
                                look: m.zxk.Looks.BLANK,
                                onClick: () => {
                                    S('color-overrides', JSON.stringify(v({}, t), null, 2));
                                },
                                children: (0, r.jsx)(m._8t, {})
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: g.tab,
                hidden: T !== _.H8.TOKENS,
                children: (0, r.jsx)(O, {
                    state: t,
                    setState: n
                })
            }),
            (0, r.jsx)('div', {
                className: g.tab,
                hidden: T !== _.H8.PALETTES,
                children: (0, r.jsx)(b.P, {
                    state: t,
                    setState: n
                })
            }),
            (0, r.jsx)(c.ql, {
                children: (0, r.jsx)('style', {
                    id: 'devtools-color-overrides',
                    children: k
                })
            })
        ]
    });
}
function O(e) {
    let { state: t, setState: n } = e,
        l = (0, x.Fg)(),
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
                        a = null != (n = r[e]) ? n : (0, _.$R)(e);
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
        h = a.useCallback(
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
        b = Object.keys(y).map((e) => ({
            value: e,
            label: C(e)
        })),
        S = Object.keys(u.b).map((e) => ({
            value: e,
            label: e
        }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.Text, {
                variant: 'text-lg/semibold',
                children: 'Semantic Tokens'
            }),
            (0, r.jsx)(m.VcW, {
                options: b,
                placeholder: 'Search for a semantic token...',
                value: void 0,
                onChange: c,
                renderOptionPrefix: (e) =>
                    null == e
                        ? null
                        : (0, r.jsx)('div', {
                              'data-theme': l,
                              className: g.colorPreview,
                              style: { '--custom-color': 'var(--'.concat(e.label, ')') }
                          }),
                popoutLayerContext: f.O$
            }),
            (0, r.jsx)('ul', {
                className: g.overrides,
                children: Object.entries(i).map((e) => {
                    let [t, a] = e,
                        i = a.colors[l];
                    if (null == i) return null;
                    let o = T(i.color),
                        c = i.opacity,
                        d = _.jC[t][l];
                    return (0, r.jsx)(
                        k,
                        {
                            title: C(t),
                            subtitle: 1 === d.opacity ? T(d.raw) : ''.concat(T(d.raw), ' @ ').concat(100 * d.opacity, '%'),
                            highlight: a.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { semanticColorOverrides: n } = e;
                                    if (null == n[t]) return e;
                                    let r = (0, _.$R)(t);
                                    return j(v({}, e), { semanticColorOverrides: j(v({}, n), { [t]: r }) });
                                });
                            },
                            onRemove: () => h(t),
                            onHighlightToggle: () => p(t),
                            children: (0, r.jsxs)('div', {
                                className: g.semanticOverride,
                                children: [
                                    (0, r.jsx)(m.VcW, {
                                        value: o,
                                        options: s,
                                        onChange: (e) => {
                                            n((n) => {
                                                let { semanticColorOverrides: r } = n,
                                                    a = r[t];
                                                if (null == a) return n;
                                                let i = a.colors[l];
                                                if (null == i) return n;
                                                let o = (0, _.lT)(a, t, e, i.opacity, l);
                                                return j(v({}, n), { semanticColorOverrides: j(v({}, r), { [t]: o }) });
                                            });
                                        },
                                        renderOptionPrefix: (e) => {
                                            if (null == e) return null;
                                            let t = e.label.replaceAll('.', '-');
                                            return (0, r.jsx)('div', {
                                                'data-theme': l,
                                                className: g.colorPreview,
                                                style: { '--custom-color': 'var(--'.concat(t, ')') }
                                            });
                                        },
                                        popoutLayerContext: f.O$
                                    }),
                                    (0, r.jsx)(m.oil, {
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
                                                    let i = a.colors[l];
                                                    if (null == i) return e;
                                                    let o = (0, _.lT)(a, t, i.color, r, l);
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
            (0, r.jsx)(m.Text, {
                variant: 'text-lg/semibold',
                children: 'Raw Tokens'
            }),
            (0, r.jsx)(m.VcW, {
                options: S,
                placeholder: 'Search for a raw color...',
                value: void 0,
                onChange: d,
                renderOptionPrefix: (e) => {
                    if (null == e) return null;
                    let t = e.label.replaceAll('.', '-');
                    return (0, r.jsx)('div', {
                        'data-theme': l,
                        className: g.colorPreview,
                        style: { '--custom-color': 'var(--'.concat(t, ')') }
                    });
                },
                popoutLayerContext: f.O$
            }),
            (0, r.jsx)('ul', {
                className: g.rawOverrides,
                children: Object.entries(o).map((e) => {
                    let [t, a] = e;
                    return (0, r.jsxs)(
                        k,
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
function k(e) {
    let { title: t, subtitle: n, highlight: a, onReset: l, onRemove: i, onHighlightToggle: o, children: s } = e;
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
                            (0, r.jsx)(m.Text, {
                                lineClamp: 1,
                                variant: 'text-md/medium',
                                className: g.overrideHeading,
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
                    (0, r.jsx)(m.P3F, {
                        onClick: o,
                        className: g.clickabeIcon,
                        children: (0, r.jsx)(m.tEF, {
                            size: 'xs',
                            color: a ? 'var(--text-brand)' : 'currentColor'
                        })
                    }),
                    (0, r.jsx)(m.P3F, {
                        className: g.clickabeIcon,
                        onClick: l,
                        children: (0, r.jsx)(m.DuK, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    }),
                    (0, r.jsx)(m.P3F, {
                        className: g.removeOverride,
                        onClick: i,
                        children: (0, r.jsx)(m.Dio, {
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
