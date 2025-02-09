n.d(t, { z: () => u });
var i = n(200651),
    s = n(120356),
    l = n.n(s),
    r = n(84735),
    a = n(993365),
    o = n(347540);
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
    let { role: t = 'button', variant: n = 'primary', size: s = 'md', text: u, icon: h, iconPosition: m = 'end', iconOpticalOffsetMargin: g = 0, focusProps: x, ..._ } = e;
    function p() {
        if (null == h) return;
        let e = (function () {
            if (0 === g) return {};
            switch (m) {
                case 'start':
                    return { marginLeft: g };
                case 'end':
                    return { marginRight: g };
            }
            return {};
        })();
        return (0, i.jsx)(h, {
            color: 'currentColor',
            style: e,
            size: d[s]
        });
    }
    return (0, i.jsx)(r.t, {
        ...x,
        children: (0, i.jsxs)('button', {
            role: t,
            className: l()(o.button, o[s], o[n]),
            ..._,
            children: [
                null != h && 'start' === m && (0, i.jsx)(p, {}),
                (0, i.jsx)(a.x, {
                    tag: 'span',
                    variant: c[s],
                    color: 'none',
                    className: o.text,
                    lineClamp: 1,
                    children: u
                }),
                null != h && 'end' === m && (0, i.jsx)(p, {})
            ]
        })
    });
}
