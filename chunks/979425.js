n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    a = n(481060),
    s = n(871118),
    o = n(388032),
    u = n(838187);
function c(e) {
    let { stream: t, isSmall: n, selected: i, isSelfStream: c } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.Z, {
                className: r()(u.absoluteFill, u.streamPreviewOpacity),
                stream: t,
                noText: !0
            }),
            !i &&
                (0, l.jsxs)('div', {
                    className: r()(u.content, u.streamUnavailable, { [u.small]: n }),
                    children: [
                        (0, l.jsx)(a.Text, {
                            className: u.streamUnavailableText,
                            color: 'always-white',
                            variant: n ? 'text-sm/semibold' : 'text-md/semibold',
                            children: c ? o.intl.string(o.t.UeEwj4) : o.intl.string(o.t['1i3tSU'])
                        }),
                        (0, l.jsx)(a.DY3, {
                            text: c ? o.intl.string(o.t['ro/HNz']) : o.intl.string(o.t.UPf6ZG),
                            className: u.darkCircle,
                            children: (0, l.jsx)('div', {
                                children: (0, l.jsx)(a.o8v, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: u.stopStreamIcon,
                                    colorClass: u.stopStreamForeground
                                })
                            })
                        })
                    ]
                })
        ]
    });
}
