n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(471445),
    a = n(8426),
    o = n(388032),
    c = n(934842);
let d = function (e) {
    var t;
    let { channel: n, end: d } = e,
        u = r.useCallback(() => {
            (0, a.r2)({
                channelId: n.id,
                title: n.name,
                description: '',
                emoji: null,
                icon: null
            });
        }, [n]),
        m = null !== (t = (0, s.KS)(n)) && void 0 !== t ? t : l.VL1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: c.suggestedChannel,
                children: [
                    (0, i.jsx)(m, { className: c.suggestedChannelIcon }),
                    (0, i.jsx)(l.Text, {
                        className: c.suggestedChannelText,
                        variant: 'text-sm/normal',
                        children: n.name
                    }),
                    (0, i.jsx)(l.zxk, {
                        className: c.suggestedChannelButton,
                        size: l.zxk.Sizes.MIN,
                        onClick: u,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            color: 'always-white',
                            children: o.intl.string(o.t.OYkgVl)
                        })
                    })
                ]
            }),
            d && (0, i.jsx)('div', { className: c.suggestedSeparator })
        ]
    });
};
