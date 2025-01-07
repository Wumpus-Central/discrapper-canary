var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(666912),
    o = n(481060),
    c = n(86321);
class d extends r.Component {
    render() {
        let { icon: e, ...t } = this.props;
        return (0, i.jsx)(e, {
            size: 'md',
            ...t,
            color: 'currentColor'
        });
    }
}
let u = (0, s.animated)(d);
t.Z = function (e) {
    let { className: t, name: n, icon: r, iconClassName: l } = e,
        s = (0, o.useTransition)(
            {
                name: n,
                icon: r,
                iconClassName: l
            },
            {
                key: (e) => e.name,
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            'animate-always'
        );
    return (0, i.jsx)('div', {
        className: a()(c.crossfade, t),
        children: s((e, t) => {
            let { icon: n, iconClassName: r } = t;
            return (0, i.jsx)(u, {
                icon: n,
                className: a()(c.icon, r),
                style: e
            });
        })
    });
};
