n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(471445),
    s = n(8426),
    o = n(388032),
    c = n(773100);
let d = function (e) {
    var t;
    let { channel: n, end: d } = e,
        u = i.useCallback(() => {
            (0, s.r2)({
                channelId: n.id,
                title: n.name,
                description: '',
                emoji: null,
                icon: null
            });
        }, [n]),
        m = null != (t = (0, a.KS)(n)) ? t : l.VL1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: c.suggestedChannel,
                children: [
                    (0, r.jsx)(m, { className: c.suggestedChannelIcon }),
                    (0, r.jsx)(l.Text, {
                        className: c.suggestedChannelText,
                        variant: 'text-sm/normal',
                        children: n.name
                    }),
                    (0, r.jsx)(l.zxk, {
                        size: 'sm',
                        variant: 'primary',
                        onClick: u,
                        text: o.intl.string(o.t.OYkgVl)
                    })
                ]
            }),
            d && (0, r.jsx)('div', { className: c.suggestedSeparator })
        ]
    });
};
