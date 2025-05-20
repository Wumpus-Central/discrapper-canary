n.d(e, { Z: () => x }), n(388685);
var a = n(255367),
    r = n(73800),
    i = n(481060),
    s = n(458044),
    o = n(388032),
    l = n(895080);
function c(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            a.forEach(function (e) {
                var a;
                (a = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = a);
            });
    }
    return t;
}
function d(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function m(t) {
    let { user: e, tagId: n, title: r, messageCount: s, reactionCount: c, activeAgo: d, tags: m, attachment: g } = t,
        { name: u, avatarSrc: x } = e;
    return (0, a.jsxs)('div', {
        className: l.post,
        children: [
            (0, a.jsxs)('div', {
                children: [
                    (0, a.jsxs)('div', {
                        className: l.inline,
                        children: [
                            (0, a.jsxs)(i.Text, {
                                color: 'header-primary',
                                variant: 'text-xs/medium',
                                className: l.inline,
                                children: [
                                    (0, a.jsx)('img', {
                                        src: x,
                                        alt: o.intl.string(o.t.lqaIxM),
                                        width: 16,
                                        height: 16
                                    }),
                                    u
                                ]
                            }),
                            null != n &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)('span', {
                                            className: l.bullet,
                                            children: '\u2022'
                                        }),
                                        (0, a.jsx)(i.Text, {
                                            color: 'header-primary',
                                            variant: 'text-xxs/medium',
                                            className: l.inlineTag,
                                            children: m[n]
                                        })
                                    ]
                                })
                        ]
                    }),
                    (0, a.jsx)(i.X6q, {
                        color: 'header-primary',
                        variant: 'heading-md/semibold',
                        className: l.title,
                        children: r
                    }),
                    (0, a.jsxs)('div', {
                        className: l.inline,
                        children: [
                            (0, a.jsxs)(i.Text, {
                                color: 'header-secondary',
                                variant: 'text-xs/medium',
                                className: l.alignCenter,
                                children: [
                                    (0, a.jsx)(i.kBi, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: l.icon
                                    }),
                                    s
                                ]
                            }),
                            c > 0 &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)('span', {
                                            className: l.bullet,
                                            children: '\u2022'
                                        }),
                                        (0, a.jsxs)(i.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xs/medium',
                                            className: l.alignCenter,
                                            children: [
                                                (0, a.jsx)('span', {
                                                    role: 'img',
                                                    'aria-label': o.intl.string(o.t.gHp0Cw),
                                                    className: l.icon,
                                                    children: '\u2764️'
                                                }),
                                                c
                                            ]
                                        })
                                    ]
                                }),
                            (0, a.jsx)('span', {
                                className: l.bullet,
                                children: '\u2022'
                            }),
                            (0, a.jsx)(i.Text, {
                                color: 'header-secondary',
                                variant: 'text-xs/medium',
                                children: d
                            })
                        ]
                    })
                ]
            }),
            null != g &&
                (0, a.jsx)('img', {
                    src: g,
                    alt: o.intl.formatToPlainString(o.t.MJHFt7, { name: r }),
                    className: l.attachment
                })
        ]
    });
}
function g(t) {
    let { author: e, content: n } = t,
        { name: r, isOP: s, avatarSrc: c } = e;
    return (0, a.jsxs)('div', {
        className: l.message,
        children: [
            (0, a.jsx)('img', {
                src: c,
                alt: o.intl.string(o.t.lqaIxM),
                width: 40,
                height: 40
            }),
            (0, a.jsxs)('div', {
                children: [
                    (0, a.jsxs)('div', {
                        className: l.inline,
                        children: [
                            (0, a.jsx)(i.Text, {
                                color: 'header-primary',
                                variant: 'text-sm/semibold',
                                children: r
                            }),
                            s &&
                                (0, a.jsx)('span', {
                                    className: l.opTag,
                                    children: o.intl.string(o.t.fyE8sL)
                                })
                        ]
                    }),
                    (0, a.jsx)(i.Text, {
                        color: 'text-normal',
                        variant: 'text-sm/normal',
                        children: n
                    })
                ]
            })
        ]
    });
}
function u(t) {
    let { title: e, messages: n, maxHeight: r } = t;
    return (0, a.jsx)('div', {
        className: l.previewContainer,
        style: { maxHeight: r },
        'aria-hidden': !0,
        children: (0, a.jsxs)('div', {
            className: l.preview,
            children: [
                (0, a.jsx)(i.kBi, {
                    size: 'md',
                    color: 'currentColor',
                    className: l.forumPostIcon
                }),
                (0, a.jsx)(i.X6q, {
                    color: 'header-primary',
                    variant: 'heading-lg/semibold',
                    className: l.header,
                    children: e
                }),
                (0, a.jsx)('div', {
                    className: l.messageContainer,
                    children: n.map((t, e) =>
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(g, c({}, t), e),
                                0 === e &&
                                    (0, a.jsxs)('div', {
                                        children: [
                                            (0, a.jsx)('hr', { className: l.topSeparator }),
                                            (0, a.jsxs)('div', {
                                                className: l.actionBar,
                                                children: [
                                                    (0, a.jsxs)(i.Text, {
                                                        color: 'text-brand',
                                                        variant: 'text-xs/medium',
                                                        className: l.fakeReactions,
                                                        children: [
                                                            (0, a.jsx)('span', {
                                                                role: 'img',
                                                                'aria-label': o.intl.string(o.t.gHp0Cw),
                                                                className: l.icon,
                                                                children: '\u2764️'
                                                            }),
                                                            '17'
                                                        ]
                                                    }),
                                                    (0, a.jsxs)(i.Text, {
                                                        color: 'text-muted',
                                                        variant: 'text-xs/medium',
                                                        className: l.following,
                                                        children: [
                                                            (0, a.jsx)(i.Dkj, {
                                                                size: 'xs',
                                                                color: 'currentColor'
                                                            }),
                                                            o.intl.string(o.t['3aOv+v'])
                                                        ]
                                                    })
                                                ]
                                            }),
                                            (0, a.jsx)('hr', { className: l.bottomSeparator })
                                        ]
                                    })
                            ]
                        })
                    )
                }),
                (0, a.jsx)('div', {
                    className: l.chatInput,
                    children: (0, a.jsx)(i.Text, {
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        children: o.intl.string(o.t.YzpScX)
                    })
                })
            ]
        })
    });
}
function x(t) {
    let { id: e } = t,
        [n, o] = r.useState(0),
        g = r.useRef(null),
        { tags: x, posts: p, postPreview: h, ariaLabel: f } = (0, s.Z)(e);
    return (
        r.useEffect(() => {
            o(0);
        }, [e]),
        r.useEffect(() => {
            var t;
            0 === n && (null == g || null == (t = g.current) ? void 0 : t.clientHeight) != null && o(g.current.clientHeight - 40);
        }, [n]),
        (0, a.jsxs)('div', {
            className: l.container,
            role: 'image',
            'aria-label': f,
            children: [
                (0, a.jsxs)('div', {
                    ref: g,
                    className: l.browser,
                    'aria-hidden': !0,
                    children: [
                        (0, a.jsx)('div', {
                            className: l.tags,
                            children: x.map((t, e) =>
                                (0, a.jsx)(
                                    i.Text,
                                    {
                                        color: 'header-primary',
                                        variant: 'text-xs/medium',
                                        className: l.tag,
                                        children: t
                                    },
                                    e
                                )
                            )
                        }),
                        (0, a.jsx)('div', {
                            className: l.posts,
                            children: p.map((t, e) => (0, a.jsx)(m, d(c({}, t), { tags: x }), e))
                        })
                    ]
                }),
                (0, a.jsx)(u, d(c({}, h), { maxHeight: n }))
            ]
        })
    );
}
