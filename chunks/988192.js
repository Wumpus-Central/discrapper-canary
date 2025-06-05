n.d(t, { O: () => _ }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(197723),
    o = n(793030),
    c = n(84735),
    d = n(766646),
    u = n(667137),
    m = n(444200),
    g = n(388032),
    p = n(946598);
function h() {
    let { onClose: e } = (0, u.v)();
    return (0, i.jsx)(c.t, {
        children: (0, i.jsxs)('button', {
            className: p.closeButton,
            onClick: e,
            children: [
                (0, i.jsx)(d.n, { children: g.intl.string(m.default.WfH9io) }),
                (0, i.jsx)(a.D, {
                    size: 'md',
                    color: 'currentColor',
                    'aria-hidden': !0
                })
            ]
        })
    });
}
function f(e) {
    let { leading: t, trailing: n, children: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t &&
                (0, i.jsx)('div', {
                    className: p.titleBarLeading,
                    children: t
                }),
            r,
            (0, i.jsxs)('div', {
                className: p.titleBarTrailing,
                children: [null != n && n, (0, i.jsx)(h, {})]
            })
        ]
    });
}
function b(e) {
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
                    className: l()(p.titleBarLeading, p.titleBarLeadingAbsolute),
                    children: t
                }),
                (0, i.jsx)('div', {
                    className: p.titleBarLeadingSpacer,
                    style: {
                        height: a,
                        width: c
                    }
                }),
                s,
                (0, i.jsx)('div', {
                    className: p.titleBarTrailingSpacer,
                    style: {
                        height: a,
                        width: c
                    }
                }),
                (0, i.jsxs)('div', {
                    ref: m,
                    className: l()(p.titleBarTrailing, p.titleBarTrailingAbsolute),
                    children: [null != n && n, (0, i.jsx)(h, {})]
                })
            ]
        })
    );
}
function _(e) {
    let { title: t, titleTextVariant: n, body: r, alignCenter: s = !1, leading: a, trailing: c } = e,
        { headingId: d } = (0, u.v)();
    return (0, i.jsx)('header', {
        className: p.titleBar,
        children: (0, i.jsx)(s ? b : f, {
            leading: a,
            trailing: c,
            children: (0, i.jsxs)(o.Kq, {
                gap: 8,
                className: l()(p.titleBarMain, { [p.titleBarMainCentered]: s }),
                children: [
                    null != t &&
                        (0, i.jsx)(o.X6, {
                            id: d,
                            variant: null != n ? n : 'heading-lg/semibold',
                            color: 'text-primary',
                            children: t
                        }),
                    null != r &&
                        (0, i.jsx)(o.xv, {
                            variant: 'text-md/normal',
                            color: 'text-secondary',
                            children: r
                        })
                ]
            })
        })
    });
}
