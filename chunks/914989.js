var n = r(192379),
    o = r(476400),
    a = r.n(o),
    i = r(723184),
    l = r(329022),
    s = r(829307),
    u = r(705513),
    c = r(877837),
    p = r(214811),
    f = function (e) {
        var t = e.width,
            r = e.height,
            o = e.onChange,
            a = e.onSwatchHover,
            u = e.colors,
            f = e.hex,
            d = e.styles,
            h = e.className,
            b = (0, i.default)(
                (0, s.Z)(
                    {
                        default: {
                            picker: {
                                width: t,
                                height: r
                            },
                            overflow: {
                                height: r,
                                overflowY: 'scroll'
                            },
                            body: { padding: '16px 0 6px 16px' },
                            clear: { clear: 'both' }
                        }
                    },
                    void 0 === d ? {} : d
                )
            ),
            v = function (e, t) {
                return o(
                    {
                        hex: e,
                        source: 'hex'
                    },
                    t
                );
            };
        return n.createElement(
            'div',
            {
                style: b.picker,
                className: 'swatches-picker ' + (void 0 === h ? '' : h)
            },
            n.createElement(
                c.xZ,
                null,
                n.createElement(
                    'div',
                    { style: b.overflow },
                    n.createElement(
                        'div',
                        { style: b.body },
                        (0, l.Z)(u, function (e) {
                            return n.createElement(p.Z, {
                                key: e.toString(),
                                group: e,
                                active: f,
                                onClick: v,
                                onSwatchHover: a
                            });
                        }),
                        n.createElement('div', { style: b.clear })
                    )
                )
            )
        );
    };
(f.propTypes = {
    width: a().oneOfType([a().string, a().number]),
    height: a().oneOfType([a().string, a().number]),
    colors: a().arrayOf(a().arrayOf(a().string)),
    styles: a().object
}),
    (f.defaultProps = {
        width: 320,
        height: 240,
        colors: [
            [u.Q6['900'], u.Q6['700'], u.Q6['500'], u.Q6['300'], u.Q6['100']],
            [u.iQ['900'], u.iQ['700'], u.iQ['500'], u.iQ['300'], u.iQ['100']],
            [u.jk['900'], u.jk['700'], u.jk['500'], u.jk['300'], u.jk['100']],
            [u.vq['900'], u.vq['700'], u.vq['500'], u.vq['300'], u.vq['100']],
            [u.QN['900'], u.QN['700'], u.QN['500'], u.QN['300'], u.QN['100']],
            [u.iN['900'], u.iN['700'], u.iN['500'], u.iN['300'], u.iN['100']],
            [u.f7['900'], u.f7['700'], u.f7['500'], u.f7['300'], u.f7['100']],
            [u.sl['900'], u.sl['700'], u.sl['500'], u.sl['300'], u.sl['100']],
            [u.$C['900'], u.$C['700'], u.$C['500'], u.$C['300'], u.$C['100']],
            ['#194D33', u.ek['700'], u.ek['500'], u.ek['300'], u.ek['100']],
            [u.ZE['900'], u.ZE['700'], u.ZE['500'], u.ZE['300'], u.ZE['100']],
            [u.LR['900'], u.LR['700'], u.LR['500'], u.LR['300'], u.LR['100']],
            [u.er['900'], u.er['700'], u.er['500'], u.er['300'], u.er['100']],
            [u.Dz['900'], u.Dz['700'], u.Dz['500'], u.Dz['300'], u.Dz['100']],
            [u.$y['900'], u.$y['700'], u.$y['500'], u.$y['300'], u.$y['100']],
            [u.bK['900'], u.bK['700'], u.bK['500'], u.bK['300'], u.bK['100']],
            [u.P_['900'], u.P_['700'], u.P_['500'], u.P_['300'], u.P_['100']],
            [u.BU['900'], u.BU['700'], u.BU['500'], u.BU['300'], u.BU['100']],
            ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF']
        ],
        styles: {}
    }),
    (0, c.t1)(f);
