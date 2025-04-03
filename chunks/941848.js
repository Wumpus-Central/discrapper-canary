a.d(t, { Z: () => N }), a(47120);
var n = a(200651),
    r = a(192379),
    s = a(481060),
    i = a(458044),
    o = a(388032),
    c = a(895080);
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function d(e, t) {
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
function m(e) {
    let { user: t, tagId: a, title: r, messageCount: i, reactionCount: l, activeAgo: d, tags: m, attachment: g } = e,
        { name: u, avatarSrc: N } = t;
    return (0, n.jsxs)('div', {
        className: c.post,
        children: [
            (0, n.jsxs)('div', {
                children: [
                    (0, n.jsxs)('div', {
                        className: c.inline,
                        children: [
                            (0, n.jsxs)(s.Text, {
                                color: 'header-primary',
                                variant: 'text-xs/medium',
                                className: c.inline,
                                children: [
                                    (0, n.jsx)('img', {
                                        src: N,
                                        alt: o.NW.string(o.t.lqaIxM),
                                        width: 16,
                                        height: 16
                                    }),
                                    u
                                ]
                            }),
                            null != a &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)('span', {
                                            className: c.bullet,
                                            children: '\u2022'
                                        }),
                                        (0, n.jsx)(s.Text, {
                                            color: 'header-primary',
                                            variant: 'text-xxs/medium',
                                            className: c.inlineTag,
                                            children: m[a]
                                        })
                                    ]
                                })
                        ]
                    }),
                    (0, n.jsx)(s.X6q, {
                        color: 'header-primary',
                        variant: 'heading-md/semibold',
                        className: c.title,
                        children: r
                    }),
                    (0, n.jsxs)('div', {
                        className: c.inline,
                        children: [
                            (0, n.jsxs)(s.Text, {
                                color: 'header-secondary',
                                variant: 'text-xs/medium',
                                className: c.alignCenter,
                                children: [
                                    (0, n.jsx)(s.kBi, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: c.icon
                                    }),
                                    i
                                ]
                            }),
                            l > 0 &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)('span', {
                                            className: c.bullet,
                                            children: '\u2022'
                                        }),
                                        (0, n.jsxs)(s.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xs/medium',
                                            className: c.alignCenter,
                                            children: [
                                                (0, n.jsx)('span', {
                                                    role: 'img',
                                                    'aria-label': o.NW.string(o.t.gHp0Cw),
                                                    className: c.icon,
                                                    children: '\u2764️'
                                                }),
                                                l
                                            ]
                                        })
                                    ]
                                }),
                            (0, n.jsx)('span', {
                                className: c.bullet,
                                children: '\u2022'
                            }),
                            (0, n.jsx)(s.Text, {
                                color: 'header-secondary',
                                variant: 'text-xs/medium',
                                children: d
                            })
                        ]
                    })
                ]
            }),
            null != g &&
                (0, n.jsx)('img', {
                    src: g,
                    alt: o.NW.formatToPlainString(o.t.MJHFt7, { name: r }),
                    className: c.attachment
                })
        ]
    });
}
function g(e) {
    let { author: t, content: a } = e,
        { name: r, isOP: i, avatarSrc: l } = t;
    return (0, n.jsxs)('div', {
        className: c.message,
        children: [
            (0, n.jsx)('img', {
                src: l,
                alt: o.NW.string(o.t.lqaIxM),
                width: 40,
                height: 40
            }),
            (0, n.jsxs)('div', {
                children: [
                    (0, n.jsxs)('div', {
                        className: c.inline,
                        children: [
                            (0, n.jsx)(s.Text, {
                                color: 'header-primary',
                                variant: 'text-sm/semibold',
                                children: r
                            }),
                            i &&
                                (0, n.jsx)('span', {
                                    className: c.opTag,
                                    children: o.NW.string(o.t.fyE8sL)
                                })
                        ]
                    }),
                    (0, n.jsx)(s.Text, {
                        color: 'text-normal',
                        variant: 'text-sm/normal',
                        children: a
                    })
                ]
            })
        ]
    });
}
function u(e) {
    let { title: t, messages: a, maxHeight: r } = e;
    return (0, n.jsx)('div', {
        className: c.previewContainer,
        style: { maxHeight: r },
        'aria-hidden': !0,
        children: (0, n.jsxs)('div', {
            className: c.preview,
            children: [
                (0, n.jsx)(s.kBi, {
                    size: 'md',
                    color: 'currentColor',
                    className: c.forumPostIcon
                }),
                (0, n.jsx)(s.X6q, {
                    color: 'header-primary',
                    variant: 'heading-lg/semibold',
                    className: c.header,
                    children: t
                }),
                (0, n.jsx)('div', {
                    className: c.messageContainer,
                    children: a.map((e, t) =>
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(g, l({}, e), t),
                                0 === t &&
                                    (0, n.jsxs)('div', {
                                        children: [
                                            (0, n.jsx)('hr', { className: c.topSeparator }),
                                            (0, n.jsxs)('div', {
                                                className: c.actionBar,
                                                children: [
                                                    (0, n.jsxs)(s.Text, {
                                                        color: 'text-brand',
                                                        variant: 'text-xs/medium',
                                                        className: c.fakeReactions,
                                                        children: [
                                                            (0, n.jsx)('span', {
                                                                role: 'img',
                                                                'aria-label': o.NW.string(o.t.gHp0Cw),
                                                                className: c.icon,
                                                                children: '\u2764️'
                                                            }),
                                                            '17'
                                                        ]
                                                    }),
                                                    (0, n.jsxs)(s.Text, {
                                                        color: 'text-muted',
                                                        variant: 'text-xs/medium',
                                                        className: c.following,
                                                        children: [
                                                            (0, n.jsx)(s.Dkj, {
                                                                size: 'xs',
                                                                color: 'currentColor'
                                                            }),
                                                            o.NW.string(o.t['3aOv+v'])
                                                        ]
                                                    })
                                                ]
                                            }),
                                            (0, n.jsx)('hr', { className: c.bottomSeparator })
                                        ]
                                    })
                            ]
                        })
                    )
                }),
                (0, n.jsx)('div', {
                    className: c.chatInput,
                    children: (0, n.jsx)(s.Text, {
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        children: o.NW.string(o.t.YzpScX)
                    })
                })
            ]
        })
    });
}
function N(e) {
    let { id: t } = e,
        [a, o] = r.useState(0),
        g = r.useRef(null),
        { tags: N, posts: x, postPreview: p, ariaLabel: h } = (0, i.Z)(t);
    return (
        r.useEffect(() => {
            o(0);
        }, [t]),
        r.useEffect(() => {
            var e;
            0 === a && (null == g || null == (e = g.current) ? void 0 : e.clientHeight) != null && o(g.current.clientHeight - 40);
        }, [a]),
        (0, n.jsxs)('div', {
            className: c.container,
            role: 'image',
            'aria-label': h,
            children: [
                (0, n.jsxs)('div', {
                    ref: g,
                    className: c.browser,
                    'aria-hidden': !0,
                    children: [
                        (0, n.jsx)('div', {
                            className: c.tags,
                            children: N.map((e, t) =>
                                (0, n.jsx)(
                                    s.Text,
                                    {
                                        color: 'header-primary',
                                        variant: 'text-xs/medium',
                                        className: c.tag,
                                        children: e
                                    },
                                    t
                                )
                            )
                        }),
                        (0, n.jsx)('div', {
                            className: c.posts,
                            children: x.map((e, t) => (0, n.jsx)(m, d(l({}, e), { tags: N }), t))
                        })
                    ]
                }),
                (0, n.jsx)(u, d(l({}, p), { maxHeight: a }))
            ]
        })
    );
}
