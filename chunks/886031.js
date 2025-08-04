n.d(t, { B: () => p });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(680018),
    o = n(374415),
    s = n(861066),
    l = n(179538);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = {
        name: 'Button',
        id: 'button',
        component: a.z,
        docs: 'https://design.discord.tools/components/web/buttons/button',
        controls: {
            text: {
                label: 'Text',
                type: 'text',
                defaultValue: 'Click me'
            },
            variant: {
                label: 'Variant',
                type: 'select',
                defaultValue: 'primary',
                options: [
                    {
                        label: 'Primary',
                        value: 'primary'
                    },
                    {
                        label: 'Secondary',
                        value: 'secondary'
                    },
                    {
                        label: 'Critical Primary',
                        value: 'critical-primary'
                    },
                    {
                        label: 'Critical Secondary',
                        value: 'critical-secondary'
                    },
                    {
                        label: 'Active',
                        value: 'active'
                    },
                    {
                        label: 'Overlay Primary',
                        value: 'overlay-primary'
                    },
                    {
                        label: 'Overlay Secondary',
                        value: 'overlay-secondary'
                    },
                    {
                        label: 'Expressive',
                        value: 'expressive'
                    }
                ]
            },
            size: {
                label: 'Size',
                type: 'select',
                defaultValue: 'md',
                options: [
                    {
                        label: 'Small',
                        value: 'sm'
                    },
                    {
                        label: 'Medium',
                        value: 'md'
                    }
                ]
            },
            disabled: {
                label: 'Disabled',
                type: 'boolean',
                defaultValue: !1
            },
            loading: {
                label: 'Loading',
                type: 'boolean',
                defaultValue: !1
            },
            fullWidth: {
                label: 'Full Width',
                type: 'boolean',
                defaultValue: !1
            }
        }
    },
    p = {
        title: 'Buttons',
        stories: [
            _,
            {
                name: 'IconButton',
                id: 'icon-button',
                docs: 'https://design.discord.tools/components/web/buttons/icon-button',
                component: function (e) {
                    return (0, r.jsx)(
                        s.h,
                        f(u({}, e), {
                            icon: i.gw7,
                            'aria-label': 'Clyde'
                        })
                    );
                },
                controls: {
                    variant: {
                        label: 'Variant',
                        type: 'select',
                        defaultValue: 'primary',
                        options: [
                            {
                                label: 'Primary',
                                value: 'primary'
                            },
                            {
                                label: 'Secondary',
                                value: 'secondary'
                            },
                            {
                                label: 'Critical Primary',
                                value: 'critical-primary'
                            },
                            {
                                label: 'Critical Secondary',
                                value: 'critical-secondary'
                            },
                            {
                                label: 'Active',
                                value: 'active'
                            },
                            {
                                label: 'Overlay Primary',
                                value: 'overlay-primary'
                            },
                            {
                                label: 'Overlay Secondary',
                                value: 'overlay-secondary'
                            },
                            {
                                label: 'Icon Only',
                                value: 'icon-only'
                            }
                        ]
                    },
                    size: {
                        label: 'Size',
                        type: 'select',
                        defaultValue: 'md',
                        options: [
                            {
                                label: 'Small',
                                value: 'sm'
                            },
                            {
                                label: 'Medium',
                                value: 'md'
                            }
                        ]
                    },
                    disabled: {
                        label: 'Disabled',
                        type: 'boolean',
                        defaultValue: !1
                    },
                    loading: {
                        label: 'Loading',
                        type: 'boolean',
                        defaultValue: !1
                    }
                }
            },
            {
                name: 'TextButton',
                id: 'text-button',
                docs: 'https://design.discord.tools/components/web/buttons/text-button',
                component: l.A,
                controls: {
                    text: {
                        label: 'Text',
                        type: 'text',
                        defaultValue: 'Link Button'
                    },
                    variant: {
                        label: 'Variant',
                        type: 'select',
                        defaultValue: 'primary',
                        options: [
                            {
                                label: 'Primary',
                                value: 'primary'
                            },
                            {
                                label: 'Secondary',
                                value: 'secondary'
                            },
                            {
                                label: 'Always White',
                                value: 'always-white'
                            },
                            {
                                label: 'Critical',
                                value: 'critical'
                            }
                        ]
                    },
                    disabled: {
                        label: 'Disabled',
                        type: 'boolean',
                        defaultValue: !1
                    }
                }
            },
            {
                name: 'ButtonGroup',
                id: 'button-group',
                docs: 'https://design.discord.tools/components/web/buttons/button-group',
                component: function (e) {
                    return (0, r.jsxs)(
                        o.h,
                        f(u({}, e), {
                            children: [
                                (0, r.jsx)(a.z, {
                                    variant: 'secondary',
                                    text: 'Cancel'
                                }),
                                (0, r.jsx)(a.z, {
                                    variant: 'primary',
                                    text: 'Submit'
                                })
                            ]
                        })
                    );
                },
                controls: {
                    size: {
                        label: 'Size',
                        type: 'select',
                        defaultValue: 'md',
                        options: [
                            {
                                label: 'Small',
                                value: 'sm'
                            },
                            {
                                label: 'Medium',
                                value: 'md'
                            }
                        ]
                    },
                    direction: {
                        label: 'Direction',
                        type: 'select',
                        defaultValue: 'horizontal',
                        options: [
                            {
                                label: 'Horizontal',
                                value: 'horizontal'
                            },
                            {
                                label: 'Vertical',
                                value: 'vertical'
                            }
                        ]
                    },
                    fullWidth: {
                        label: 'Full Width',
                        type: 'boolean',
                        defaultValue: !1
                    }
                }
            }
        ]
    };
