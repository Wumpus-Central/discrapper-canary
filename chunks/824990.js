n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(471445),
    a = n(8426),
    o = n(388032),
    c = n(773100);
let u = function (e) {
    var t;
    let { channel: n, end: u } = e,
        d = i.useCallback(() => {
            (0, a.r2)({
                channelId: n.id,
                title: n.name,
                description: '',
                emoji: null,
                icon: null
            });
        }, [n]),
        m = null != (t = (0, s.KS)(n)) ? t : l.VL1;
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
                        className: c.suggestedChannelButton,
                        size: l.zxk.Sizes.MIN,
                        onClick: d,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            color: 'always-white',
                            children: o.intl.string(o.t.OYkgVl)
                        })
                    })
                ]
            }),
            u && (0, r.jsx)('div', { className: c.suggestedSeparator })
        ]
    });
};
