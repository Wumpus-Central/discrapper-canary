n.d(t, { I: () => g });
var r = n(255367),
    i = n(73800),
    a = n(836459),
    o = n(481060),
    s = n(667202),
    l = n(82659),
    c = n(177475),
    u = n(691739);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            }));
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let g = {
    title: 'Modal',
    stories: [
        {
            name: 'Modal',
            id: 'modal',
            docs: 'https://design.discord.tools/components/web/modals/modal',
            component: function (e) {
                var { showPreview: t, showInput: n } = e,
                    i = h(e, ['showPreview', 'showInput']);
                return (0, r.jsxs)(o.Kqy, {
                    gap: 16,
                    align: 'center',
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: 'Click the button below to open the modal'
                        }),
                        (0, r.jsx)(o.zxk, {
                            variant: 'primary',
                            text: 'Open Modal',
                            onClick: () =>
                                (0, o.h7j)((e) =>
                                    (0, r.jsx)(
                                        l.Modal,
                                        p(f({}, i, e), {
                                            input: n
                                                ? (0, r.jsx)(o.E1j, {
                                                      placeholder: 'Search...',
                                                      onChange: () => {},
                                                      query: ''
                                                  })
                                                : void 0,
                                            preview: t
                                                ? (0, r.jsxs)(o.Kqy, {
                                                      gap: 8,
                                                      children: [
                                                          (0, r.jsx)(o.Text, {
                                                              variant: 'text-lg/semibold',
                                                              children: 'Preview Content'
                                                          }),
                                                          (0, r.jsx)(o.Text, {
                                                              variant: 'text-md/normal',
                                                              color: 'text-secondary',
                                                              children: 'This is preview content that appears in the modal footer.'
                                                          })
                                                      ]
                                                  })
                                                : void 0,
                                            actions: [
                                                {
                                                    variant: 'secondary',
                                                    text: 'Cancel',
                                                    onClick: e.onClose
                                                },
                                                {
                                                    variant: 'primary',
                                                    text: 'Submit',
                                                    onClick: e.onClose
                                                }
                                            ],
                                            children: (0, r.jsxs)(o.Kqy, {
                                                gap: 16,
                                                children: [
                                                    (0, r.jsx)(o.xJW, {
                                                        title: 'Example Input',
                                                        children: (0, r.jsx)(o.oil, { placeholder: 'Enter some text...' })
                                                    }),
                                                    (0, r.jsx)(o.Text, {
                                                        variant: 'text-md/normal',
                                                        children: 'This is the main content area of the modal. You can place any content here.'
                                                    })
                                                ]
                                            })
                                        })
                                    )
                                )
                        })
                    ]
                });
            },
            controls: {
                title: {
                    label: 'Title',
                    type: 'text',
                    defaultValue: 'Example Modal'
                },
                subtitle: {
                    label: 'Subtitle',
                    type: 'text',
                    defaultValue: 'This is a modal subtitle'
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
                showInput: {
                    label: 'Show Search Input',
                    type: 'boolean',
                    defaultValue: !1
                },
                showPreview: {
                    label: 'Show Preview',
                    type: 'boolean',
                    defaultValue: !1
                }
            }
        },
        {
            name: 'ExpressiveModal',
            id: 'expressive-modal',
            docs: 'https://design.discord.tools/components/web/modals/expressive-modal',
            component: function (e) {
                var { graphic: t } = e,
                    l = h(e, ['graphic']);
                let d = i.useMemo(
                    () =>
                        0 === t
                            ? {
                                  type: 'image',
                                  src: c
                              }
                            : 1 === t
                              ? {
                                    type: 'lottie',
                                    lottie: () => n.e('94792').then(n.t.bind(n, 972951, 19)),
                                    aspectRatio: '6/4'
                                }
                              : 2 === t
                                ? {
                                      type: 'rive',
                                      rive: a.PerfTestRive
                                  }
                                : 3 === t
                                  ? {
                                        type: 'video',
                                        src: u.Z,
                                        fallbackImageSrc: c,
                                        loop: !0,
                                        loopAt: 2.5
                                    }
                                  : 4 === t
                                    ? {
                                          type: 'dynamic',
                                          component: o.AX$.DEMO,
                                          props: { text: 'Dynamic Content' }
                                      }
                                    : void 0,
                    [t]
                );
                return (0, r.jsxs)(o.Kqy, {
                    gap: 16,
                    align: 'center',
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: 'Click the button below to open the expressive modal'
                        }),
                        (0, r.jsx)(o.zxk, {
                            variant: 'primary',
                            text: 'Open ExpressiveModal',
                            onClick: () =>
                                (0, o.h7j)((e) =>
                                    (0, r.jsx)(
                                        s.I,
                                        p(f({}, l, e), {
                                            graphic: d,
                                            actions: [
                                                {
                                                    variant: 'secondary',
                                                    text: 'Cancel',
                                                    onClick: e.onClose
                                                },
                                                {
                                                    variant: 'primary',
                                                    text: 'Submit',
                                                    onClick: e.onClose
                                                }
                                            ],
                                            children: (0, r.jsx)(o.Kqy, {
                                                gap: 16,
                                                children: (0, r.jsx)(o.Text, {
                                                    variant: 'text-md/normal',
                                                    children: 'This is an expressive modal with a gradient background and optional badge.'
                                                })
                                            })
                                        })
                                    )
                                )
                        })
                    ]
                });
            },
            controls: {
                title: {
                    label: 'Title',
                    type: 'text',
                    defaultValue: 'Expressive Modal'
                },
                subtitle: {
                    label: 'Subtitle',
                    type: 'text',
                    defaultValue: 'This modal has a gradient background'
                },
                gradientColor: {
                    label: 'Gradient Color',
                    type: 'select',
                    defaultValue: 'purple',
                    options: [
                        {
                            label: 'Purple',
                            value: 'purple'
                        },
                        {
                            label: 'Blue',
                            value: 'blue'
                        },
                        {
                            label: 'Nitro Pink',
                            value: 'nitro-pink'
                        }
                    ]
                },
                graphic: {
                    label: 'Graphic',
                    type: 'select',
                    defaultValue: 0,
                    options: [
                        {
                            label: 'Image',
                            value: 0
                        },
                        {
                            label: 'Lottie',
                            value: 1
                        },
                        {
                            label: 'Rive',
                            value: 2
                        },
                        {
                            label: 'Looping Video',
                            value: 3
                        },
                        {
                            label: 'Dynamic Content',
                            value: 4
                        }
                    ]
                },
                badge: {
                    label: 'Badge',
                    type: 'select',
                    defaultValue: 'new',
                    options: [
                        {
                            label: 'None',
                            value: void 0
                        },
                        {
                            label: 'New',
                            value: 'new'
                        },
                        {
                            label: 'Beta',
                            value: 'beta'
                        },
                        {
                            label: 'Early Access',
                            value: 'early_access'
                        }
                    ]
                }
            }
        }
    ]
};
