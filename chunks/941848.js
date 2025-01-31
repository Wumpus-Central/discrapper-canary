a.d(e, { Z: () => g }), a(47120);
var n = a(200651),
    i = a(192379),
    s = a(481060),
    r = a(458044),
    l = a(388032),
    o = a(648125);
function c(t) {
    let { user: e, tagId: a, title: i, messageCount: r, reactionCount: c, activeAgo: d, tags: m, attachment: g } = t,
        { name: u, avatarSrc: x } = e;
    return (0, n.jsxs)('div', {
        className: o.post,
        children: [
            (0, n.jsxs)('div', {
                children: [
                    (0, n.jsxs)('div', {
                        className: o.inline,
                        children: [
                            (0, n.jsxs)(s.Text, {
                                color: 'header-primary',
                                variant: 'text-xs/medium',
                                className: o.inline,
                                children: [
                                    (0, n.jsx)('img', {
                                        src: x,
                                        alt: l.intl.string(l.t.lqaIxM),
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
                                            className: o.bullet,
                                            children: '\u2022'
                                        }),
                                        (0, n.jsx)(s.Text, {
                                            color: 'header-primary',
                                            variant: 'text-xxs/medium',
                                            className: o.inlineTag,
                                            children: m[a]
                                        })
                                    ]
                                })
                        ]
                    }),
                    (0, n.jsx)(s.X6q, {
                        color: 'header-primary',
                        variant: 'heading-md/semibold',
                        className: o.title,
                        children: i
                    }),
                    (0, n.jsxs)('div', {
                        className: o.inline,
                        children: [
                            (0, n.jsxs)(s.Text, {
                                color: 'header-secondary',
                                variant: 'text-xs/medium',
                                className: o.alignCenter,
                                children: [
                                    (0, n.jsx)(s.kBi, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: o.icon
                                    }),
                                    r
                                ]
                            }),
                            c > 0 &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)('span', {
                                            className: o.bullet,
                                            children: '\u2022'
                                        }),
                                        (0, n.jsxs)(s.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xs/medium',
                                            className: o.alignCenter,
                                            children: [
                                                (0, n.jsx)('span', {
                                                    role: 'img',
                                                    'aria-label': l.intl.string(l.t.gHp0Cw),
                                                    className: o.icon,
                                                    children: '\u2764️'
                                                }),
                                                c
                                            ]
                                        })
                                    ]
                                }),
                            (0, n.jsx)('span', {
                                className: o.bullet,
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
                    alt: l.intl.formatToPlainString(l.t.MJHFt7, { name: i }),
                    className: o.attachment
                })
        ]
    });
}
function d(t) {
    let { author: e, content: a } = t,
        { name: i, isOP: r, avatarSrc: c } = e;
    return (0, n.jsxs)('div', {
        className: o.message,
        children: [
            (0, n.jsx)('img', {
                src: c,
                alt: l.intl.string(l.t.lqaIxM),
                width: 40,
                height: 40
            }),
            (0, n.jsxs)('div', {
                children: [
                    (0, n.jsxs)('div', {
                        className: o.inline,
                        children: [
                            (0, n.jsx)(s.Text, {
                                color: 'header-primary',
                                variant: 'text-sm/semibold',
                                children: i
                            }),
                            r &&
                                (0, n.jsx)('span', {
                                    className: o.opTag,
                                    children: l.intl.string(l.t.fyE8sL)
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
function m(t) {
    let { title: e, messages: a, maxHeight: i } = t;
    return (0, n.jsx)('div', {
        className: o.previewContainer,
        style: { maxHeight: i },
        'aria-hidden': !0,
        children: (0, n.jsxs)('div', {
            className: o.preview,
            children: [
                (0, n.jsx)(s.kBi, {
                    size: 'md',
                    color: 'currentColor',
                    className: o.forumPostIcon
                }),
                (0, n.jsx)(s.X6q, {
                    color: 'header-primary',
                    variant: 'heading-lg/semibold',
                    className: o.header,
                    children: e
                }),
                (0, n.jsx)('div', {
                    className: o.messageContainer,
                    children: a.map((t, e) =>
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(d, { ...t }, e),
                                0 === e &&
                                    (0, n.jsxs)('div', {
                                        children: [
                                            (0, n.jsx)('hr', { className: o.topSeparator }),
                                            (0, n.jsxs)('div', {
                                                className: o.actionBar,
                                                children: [
                                                    (0, n.jsxs)(s.Text, {
                                                        color: 'text-brand',
                                                        variant: 'text-xs/medium',
                                                        className: o.fakeReactions,
                                                        children: [
                                                            (0, n.jsx)('span', {
                                                                role: 'img',
                                                                'aria-label': l.intl.string(l.t.gHp0Cw),
                                                                className: o.icon,
                                                                children: '\u2764️'
                                                            }),
                                                            '17'
                                                        ]
                                                    }),
                                                    (0, n.jsxs)(s.Text, {
                                                        color: 'text-muted',
                                                        variant: 'text-xs/medium',
                                                        className: o.following,
                                                        children: [
                                                            (0, n.jsx)(s.Dkj, {
                                                                size: 'xs',
                                                                color: 'currentColor'
                                                            }),
                                                            l.intl.string(l.t['3aOv+v'])
                                                        ]
                                                    })
                                                ]
                                            }),
                                            (0, n.jsx)('hr', { className: o.bottomSeparator })
                                        ]
                                    })
                            ]
                        })
                    )
                }),
                (0, n.jsx)('div', {
                    className: o.chatInput,
                    children: (0, n.jsx)(s.Text, {
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        children: l.intl.string(l.t.YzpScX)
                    })
                })
            ]
        })
    });
}
function g(t) {
    let { id: e } = t,
        [a, l] = i.useState(0),
        d = i.useRef(null),
        { tags: g, posts: u, postPreview: x, ariaLabel: h } = (0, r.Z)(e);
    return (
        i.useEffect(() => {
            l(0);
        }, [e]),
        i.useEffect(() => {
            var t;
            0 === a && (null == d ? void 0 : null === (t = d.current) || void 0 === t ? void 0 : t.clientHeight) != null && l(d.current.clientHeight - 40);
        }, [a]),
        (0, n.jsxs)('div', {
            className: o.container,
            role: 'image',
            'aria-label': h,
            children: [
                (0, n.jsxs)('div', {
                    ref: d,
                    className: o.browser,
                    'aria-hidden': !0,
                    children: [
                        (0, n.jsx)('div', {
                            className: o.tags,
                            children: g.map((t, e) =>
                                (0, n.jsx)(
                                    s.Text,
                                    {
                                        color: 'header-primary',
                                        variant: 'text-xs/medium',
                                        className: o.tag,
                                        children: t
                                    },
                                    e
                                )
                            )
                        }),
                        (0, n.jsx)('div', {
                            className: o.posts,
                            children: u.map((t, e) =>
                                (0, n.jsx)(
                                    c,
                                    {
                                        ...t,
                                        tags: g
                                    },
                                    e
                                )
                            )
                        })
                    ]
                }),
                (0, n.jsx)(m, {
                    ...x,
                    maxHeight: a
                })
            ]
        })
    );
}
