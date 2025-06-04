n.d(t, { O: () => b }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(197723),
    o = n(766646),
    c = n(481060),
    d = n(667137),
    u = n(444200),
    m = n(388032),
    g = n(946598);
function p() {
    let { onClose: e } = (0, d.v)();
    return (0, i.jsx)(c.tEY, {
        children: (0, i.jsxs)('button', {
            className: g.closeButton,
            onClick: e,
            children: [
                (0, i.jsx)(o.n, { children: m.intl.string(u.default.WfH9io) }),
                (0, i.jsx)(a.D, {
                    size: 'md',
                    color: 'currentColor',
                    'aria-hidden': !0
                })
            ]
        })
    });
}
function h(e) {
    let { leading: t, trailing: n, children: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t &&
                (0, i.jsx)('div', {
                    className: g.titleBarLeading,
                    children: t
                }),
            r,
            (0, i.jsxs)('div', {
                className: g.titleBarTrailing,
                children: [null != n && n, (0, i.jsx)(p, {})]
            })
        ]
    });
}
function f(e) {
    let { leading: t, trailing: n, children: s } = e,
        [a, o] = r.useState(24),
        [c, d] = r.useState(24),
        u = r.useRef(null),
        m = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                let e = 0,
                    t = 0;
                if (null != u && null != u.current) {
                    let n = u.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                if (null != m && null != m.current) {
                    let n = m.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                d(Math.ceil(t)), o(Math.ceil(e));
            });
            return null != u.current && e.observe(u.current), null != m.current && e.observe(m.current), () => e.disconnect();
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    ref: u,
                    className: l()(g.titleBarLeading, g.titleBarLeadingAbsolute),
                    children: t
                }),
                (0, i.jsx)('div', {
                    className: g.titleBarLeadingSpacer,
                    style: {
                        height: a,
                        width: c
                    }
                }),
                s,
                (0, i.jsx)('div', {
                    className: g.titleBarTrailingSpacer,
                    style: {
                        height: a,
                        width: c
                    }
                }),
                (0, i.jsxs)('div', {
                    ref: m,
                    className: l()(g.titleBarTrailing, g.titleBarTrailingAbsolute),
                    children: [null != n && n, (0, i.jsx)(p, {})]
                })
            ]
        })
    );
}
function b(e) {
    let { title: t, titleTextVariant: n, body: r, alignCenter: s = !1, leading: a, trailing: o } = e,
        { headingId: u } = (0, d.v)();
    return (0, i.jsx)('header', {
        className: g.titleBar,
        children: (0, i.jsx)(s ? f : h, {
            leading: a,
            trailing: o,
            children: (0, i.jsxs)(c.Kqy, {
                gap: 8,
                className: l()(g.titleBarMain, { [g.titleBarMainCentered]: s }),
                children: [
                    null != t &&
                        (0, i.jsx)(c.X6q, {
                            id: u,
                            variant: null != n ? n : 'heading-lg/semibold',
                            color: 'text-primary',
                            children: t
                        }),
                    null != r &&
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'text-secondary',
                            children: r
                        })
                ]
            })
        })
    });
}
