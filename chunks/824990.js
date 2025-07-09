n.d(t, { Z: () => u });
var r = n(255367),
    i = n(73800),
    l = n(755721),
    s = n(481060),
    a = n(471445),
    o = n(8426),
    c = n(388032),
    d = n(773100);
let u = function (e) {
    var t;
    let { channel: n, end: u } = e,
        m = i.useCallback(() => {
            (0, o.r2)({
                channelId: n.id,
                title: n.name,
                description: '',
                emoji: null,
                icon: null
            });
        }, [n]),
        g = null != (t = (0, a.KS)(n)) ? t : s.VL1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: d.suggestedChannel,
                children: [
                    (0, r.jsx)(g, { className: d.suggestedChannelIcon }),
                    (0, r.jsx)(s.Text, {
                        className: d.suggestedChannelText,
                        variant: 'text-sm/normal',
                        children: n.name
                    }),
                    (0, r.jsx)(l.zx, {
                        className: d.suggestedChannelButton,
                        size: l.zx.Sizes.MIN,
                        onClick: m,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/semibold',
                            color: 'always-white',
                            children: c.intl.string(c.t.OYkgVl)
                        })
                    })
                ]
            }),
            u && (0, r.jsx)('div', { className: d.suggestedSeparator })
        ]
    });
};
