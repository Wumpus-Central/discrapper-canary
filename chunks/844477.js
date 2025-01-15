n.d(t, {
    z: function () {
        return u;
    }
});
var i = n(200651),
    s = n(120356),
    r = n.n(s),
    a = n(84735),
    l = n(993365),
    o = n(247368);
let c = {
        xs: 'text-sm/semibold',
        sm: 'text-sm/semibold',
        md: 'text-md/semibold',
        lg: 'text-lg/semibold'
    },
    d = {
        xs: 'xs',
        sm: 'xs',
        md: 'sm',
        lg: 'md'
    };
function u(e) {
    let { role: t = 'button', variant: n = 'primary', size: s = 'md', text: u, icon: m, iconPosition: g = 'end', iconOpticalOffsetMargin: h = 0, focusProps: p, ...x } = e;
    function f() {
        if (null == m) return;
        let e = (function () {
            if (0 === h) return {};
            switch (g) {
                case 'start':
                    return { marginLeft: h };
                case 'end':
                    return { marginRight: h };
            }
            return {};
        })();
        return (0, i.jsx)(m, {
            color: 'currentColor',
            style: e,
            size: d[s]
        });
    }
    return (0, i.jsx)(a.t, {
        ...p,
        children: (0, i.jsxs)('button', {
            role: t,
            className: r()(o.button, o[s], o[n]),
            ...x,
            children: [
                null != m && 'start' === g && (0, i.jsx)(f, {}),
                (0, i.jsx)(l.x, {
                    tag: 'span',
                    variant: c[s],
                    color: 'none',
                    className: o.text,
                    lineClamp: 1,
                    children: u
                }),
                null != m && 'end' === g && (0, i.jsx)(f, {})
            ]
        })
    });
}
