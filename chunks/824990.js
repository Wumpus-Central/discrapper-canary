n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(471445),
    l = n(8426),
    o = n(388032),
    c = n(773100);
let d = function (e) {
    var t;
    let { channel: n, end: d } = e,
        u = i.useCallback(() => {
            (0, l.r2)({
                channelId: n.id,
                title: n.name,
                description: '',
                emoji: null,
                icon: null
            });
        }, [n]),
        m = null != (t = (0, a.KS)(n)) ? t : s.VL1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: c.suggestedChannel,
                children: [
                    (0, r.jsx)(m, { className: c.suggestedChannelIcon }),
                    (0, r.jsx)(s.Text, {
                        className: c.suggestedChannelText,
                        variant: 'text-sm/normal',
                        children: n.name
                    }),
                    (0, r.jsx)(s.zxk, {
                        className: c.suggestedChannelButton,
                        size: s.zxk.Sizes.MIN,
                        onClick: u,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/semibold',
                            color: 'always-white',
                            children: o.NW.string(o.t.OYkgVl)
                        })
                    })
                ]
            }),
            d && (0, r.jsx)('div', { className: c.suggestedSeparator })
        ]
    });
};
