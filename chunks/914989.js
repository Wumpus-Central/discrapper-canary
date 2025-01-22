var i = r(192379),
    a = r(476400),
    o = r.n(a),
    s = r(723184),
    l = r(329022),
    u = r(829307),
    c = r(705513),
    d = r(877837),
    f = r(214811),
    p = function (e) {
        var n = e.width,
            r = e.height,
            a = e.onChange,
            o = e.onSwatchHover,
            c = e.colors,
            p = e.hex,
            h = e.styles,
            _ = void 0 === h ? {} : h,
            m = e.className,
            g = void 0 === m ? '' : m,
            E = (0, s.default)(
                (0, u.Z)(
                    {
                        default: {
                            picker: {
                                width: n,
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
                    _
                )
            ),
            v = function (e, n) {
                return a(
                    {
                        hex: e,
                        source: 'hex'
                    },
                    n
                );
            };
        return i.createElement(
            'div',
            {
                style: E.picker,
                className: 'swatches-picker ' + g
            },
            i.createElement(
                d.xZ,
                null,
                i.createElement(
                    'div',
                    { style: E.overflow },
                    i.createElement(
                        'div',
                        { style: E.body },
                        (0, l.Z)(c, function (e) {
                            return i.createElement(f.Z, {
                                key: e.toString(),
                                group: e,
                                active: p,
                                onClick: v,
                                onSwatchHover: o
                            });
                        }),
                        i.createElement('div', { style: E.clear })
                    )
                )
            )
        );
    };
(p.propTypes = {
    width: o().oneOfType([o().string, o().number]),
    height: o().oneOfType([o().string, o().number]),
    colors: o().arrayOf(o().arrayOf(o().string)),
    styles: o().object
}),
    (p.defaultProps = {
        width: 320,
        height: 240,
        colors: [
            [c.Q6['900'], c.Q6['700'], c.Q6['500'], c.Q6['300'], c.Q6['100']],
            [c.iQ['900'], c.iQ['700'], c.iQ['500'], c.iQ['300'], c.iQ['100']],
            [c.jk['900'], c.jk['700'], c.jk['500'], c.jk['300'], c.jk['100']],
            [c.vq['900'], c.vq['700'], c.vq['500'], c.vq['300'], c.vq['100']],
            [c.QN['900'], c.QN['700'], c.QN['500'], c.QN['300'], c.QN['100']],
            [c.iN['900'], c.iN['700'], c.iN['500'], c.iN['300'], c.iN['100']],
            [c.f7['900'], c.f7['700'], c.f7['500'], c.f7['300'], c.f7['100']],
            [c.sl['900'], c.sl['700'], c.sl['500'], c.sl['300'], c.sl['100']],
            [c.$C['900'], c.$C['700'], c.$C['500'], c.$C['300'], c.$C['100']],
            ['#194D33', c.ek['700'], c.ek['500'], c.ek['300'], c.ek['100']],
            [c.ZE['900'], c.ZE['700'], c.ZE['500'], c.ZE['300'], c.ZE['100']],
            [c.LR['900'], c.LR['700'], c.LR['500'], c.LR['300'], c.LR['100']],
            [c.er['900'], c.er['700'], c.er['500'], c.er['300'], c.er['100']],
            [c.Dz['900'], c.Dz['700'], c.Dz['500'], c.Dz['300'], c.Dz['100']],
            [c.$y['900'], c.$y['700'], c.$y['500'], c.$y['300'], c.$y['100']],
            [c.bK['900'], c.bK['700'], c.bK['500'], c.bK['300'], c.bK['100']],
            [c.P_['900'], c.P_['700'], c.P_['500'], c.P_['300'], c.P_['100']],
            [c.BU['900'], c.BU['700'], c.BU['500'], c.BU['300'], c.BU['100']],
            ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF']
        ],
        styles: {}
    }),
    (0, d.t1)(p);
