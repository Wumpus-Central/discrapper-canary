n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(871118),
    o = n(388032),
    c = n(995544);
function u(e) {
    let { stream: t, isSmall: n, selected: l, isSelfStream: u } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.Z, {
                className: a()(c.absoluteFill, c.streamPreviewOpacity),
                stream: t,
                noText: !0
            }),
            !l &&
                (0, i.jsxs)('div', {
                    className: a()(c.content, c.streamUnavailable, { [c.small]: n }),
                    children: [
                        (0, i.jsx)(r.Text, {
                            className: c.streamUnavailableText,
                            color: 'always-white',
                            variant: n ? 'text-sm/semibold' : 'text-md/semibold',
                            children: u ? o.intl.string(o.t.UeEwj4) : o.intl.string(o.t['1i3tSU'])
                        }),
                        (0, i.jsx)(r.TooltipContainer, {
                            text: u ? o.intl.string(o.t['ro/HNz']) : o.intl.string(o.t.UPf6ZG),
                            className: c.darkCircle,
                            children: (0, i.jsx)('div', {
                                children: (0, i.jsx)(r.ScreenSlashIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: c.stopStreamIcon,
                                    colorClass: c.stopStreamForeground
                                })
                            })
                        })
                    ]
                })
        ]
    });
}
