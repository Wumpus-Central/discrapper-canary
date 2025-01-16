n.d(a, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var e = n(200651),
    i = n(192379),
    s = n(481060),
    r = n(458044),
    o = n(388032),
    l = n(648125);
function c(t) {
    let { user: a, tagId: n, title: i, messageCount: r, reactionCount: c, activeAgo: d, tags: m, attachment: g } = t,
        { name: u, avatarSrc: x } = a;
    return (0, e.jsxs)('div', {
        className: l.post,
        children: [
            (0, e.jsxs)('div', {
                children: [
                    (0, e.jsxs)('div', {
                        className: l.inline,
                        children: [
                            (0, e.jsxs)(s.Text, {
                                color: 'header-primary',
                                variant: 'text-xs/medium',
                                className: l.inline,
                                children: [
                                    (0, e.jsx)('img', {
                                        src: x,
                                        alt: o.intl.string(o.t.lqaIxM),
                                        width: 16,
                                        height: 16
                                    }),
                                    u
                                ]
                            }),
                            null != n &&
                                (0, e.jsxs)(e.Fragment, {
                                    children: [
                                        (0, e.jsx)('span', {
                                            className: l.bullet,
                                            children: '\u2022'
                                        }),
                                        (0, e.jsx)(s.Text, {
                                            color: 'header-primary',
                                            variant: 'text-xxs/medium',
                                            className: l.inlineTag,
                                            children: m[n]
                                        })
                                    ]
                                })
                        ]
                    }),
                    (0, e.jsx)(s.Heading, {
                        color: 'header-primary',
                        variant: 'heading-md/semibold',
                        className: l.title,
                        children: i
                    }),
                    (0, e.jsxs)('div', {
                        className: l.inline,
                        children: [
                            (0, e.jsxs)(s.Text, {
                                color: 'header-secondary',
                                variant: 'text-xs/medium',
                                className: l.alignCenter,
                                children: [
                                    (0, e.jsx)(s.ChatIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: l.icon
                                    }),
                                    r
                                ]
                            }),
                            c > 0 &&
                                (0, e.jsxs)(e.Fragment, {
                                    children: [
                                        (0, e.jsx)('span', {
                                            className: l.bullet,
                                            children: '\u2022'
                                        }),
                                        (0, e.jsxs)(s.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xs/medium',
                                            className: l.alignCenter,
                                            children: [
                                                (0, e.jsx)('span', {
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
                            (0, e.jsx)('span', {
                                className: l.bullet,
                                children: '\u2022'
                            }),
                            (0, e.jsx)(s.Text, {
                                color: 'header-secondary',
                                variant: 'text-xs/medium',
                                children: d
                            })
                        ]
                    })
                ]
            }),
            null != g &&
                (0, e.jsx)('img', {
                    src: g,
                    alt: o.intl.formatToPlainString(o.t.MJHFt7, { name: i }),
                    className: l.attachment
                })
        ]
    });
}
function d(t) {
    let { author: a, content: n } = t,
        { name: i, isOP: r, avatarSrc: c } = a;
    return (0, e.jsxs)('div', {
        className: l.message,
        children: [
            (0, e.jsx)('img', {
                src: c,
                alt: o.intl.string(o.t.lqaIxM),
                width: 40,
                height: 40
            }),
            (0, e.jsxs)('div', {
                children: [
                    (0, e.jsxs)('div', {
                        className: l.inline,
                        children: [
                            (0, e.jsx)(s.Text, {
                                color: 'header-primary',
                                variant: 'text-sm/semibold',
                                children: i
                            }),
                            r &&
                                (0, e.jsx)('span', {
                                    className: l.opTag,
                                    children: o.intl.string(o.t.fyE8sL)
                                })
                        ]
                    }),
                    (0, e.jsx)(s.Text, {
                        color: 'text-normal',
                        variant: 'text-sm/normal',
                        children: n
                    })
                ]
            })
        ]
    });
}
function m(t) {
    let { title: a, messages: n, maxHeight: i } = t;
    return (0, e.jsx)('div', {
        className: l.previewContainer,
        style: { maxHeight: i },
        'aria-hidden': !0,
        children: (0, e.jsxs)('div', {
            className: l.preview,
            children: [
                (0, e.jsx)(s.ChatIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: l.forumPostIcon
                }),
                (0, e.jsx)(s.Heading, {
                    color: 'header-primary',
                    variant: 'heading-lg/semibold',
                    className: l.header,
                    children: a
                }),
                (0, e.jsx)('div', {
                    className: l.messageContainer,
                    children: n.map((t, a) =>
                        (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsx)(d, { ...t }, a),
                                0 === a &&
                                    (0, e.jsxs)('div', {
                                        children: [
                                            (0, e.jsx)('hr', { className: l.topSeparator }),
                                            (0, e.jsxs)('div', {
                                                className: l.actionBar,
                                                children: [
                                                    (0, e.jsxs)(s.Text, {
                                                        color: 'text-brand',
                                                        variant: 'text-xs/medium',
                                                        className: l.fakeReactions,
                                                        children: [
                                                            (0, e.jsx)('span', {
                                                                role: 'img',
                                                                'aria-label': o.intl.string(o.t.gHp0Cw),
                                                                className: l.icon,
                                                                children: '\u2764️'
                                                            }),
                                                            '17'
                                                        ]
                                                    }),
                                                    (0, e.jsxs)(s.Text, {
                                                        color: 'text-muted',
                                                        variant: 'text-xs/medium',
                                                        className: l.following,
                                                        children: [
                                                            (0, e.jsx)(s.BellIcon, {
                                                                size: 'xs',
                                                                color: 'currentColor'
                                                            }),
                                                            o.intl.string(o.t['3aOv+v'])
                                                        ]
                                                    })
                                                ]
                                            }),
                                            (0, e.jsx)('hr', { className: l.bottomSeparator })
                                        ]
                                    })
                            ]
                        })
                    )
                }),
                (0, e.jsx)('div', {
                    className: l.chatInput,
                    children: (0, e.jsx)(s.Text, {
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        children: o.intl.string(o.t.YzpScX)
                    })
                })
            ]
        })
    });
}
function g(t) {
    let { id: a } = t,
        [n, o] = i.useState(0),
        d = i.useRef(null),
        { tags: g, posts: u, postPreview: x, ariaLabel: h } = (0, r.Z)(a);
    return (
        i.useEffect(() => {
            o(0);
        }, [a]),
        i.useEffect(() => {
            var t;
            0 === n && (null == d ? void 0 : null === (t = d.current) || void 0 === t ? void 0 : t.clientHeight) != null && o(d.current.clientHeight - 40);
        }, [n]),
        (0, e.jsxs)('div', {
            className: l.container,
            role: 'image',
            'aria-label': h,
            children: [
                (0, e.jsxs)('div', {
                    ref: d,
                    className: l.browser,
                    'aria-hidden': !0,
                    children: [
                        (0, e.jsx)('div', {
                            className: l.tags,
                            children: g.map((t, a) =>
                                (0, e.jsx)(
                                    s.Text,
                                    {
                                        color: 'header-primary',
                                        variant: 'text-xs/medium',
                                        className: l.tag,
                                        children: t
                                    },
                                    a
                                )
                            )
                        }),
                        (0, e.jsx)('div', {
                            className: l.posts,
                            children: u.map((t, a) =>
                                (0, e.jsx)(
                                    c,
                                    {
                                        ...t,
                                        tags: g
                                    },
                                    a
                                )
                            )
                        })
                    ]
                }),
                (0, e.jsx)(m, {
                    ...x,
                    maxHeight: n
                })
            ]
        })
    );
}
