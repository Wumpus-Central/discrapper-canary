n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    u = n(871118),
    o = n(388032),
    s = n(519417);
function c(e) {
    let { stream: t, isSmall: n, selected: l, isSelfStream: c } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Z, {
                className: i()(s.absoluteFill, s.streamPreviewOpacity),
                stream: t,
                noText: !0
            }),
            !l &&
                (0, r.jsxs)('div', {
                    className: i()(s.content, s.streamUnavailable, { [s.small]: n }),
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: s.streamUnavailableText,
                            color: 'always-white',
                            variant: n ? 'text-sm/semibold' : 'text-md/semibold',
                            children: c ? o.intl.string(o.t.UeEwj4) : o.intl.string(o.t['1i3tSU'])
                        }),
                        (0, r.jsx)(a.DY3, {
                            text: c ? o.intl.string(o.t['ro/HNz']) : o.intl.string(o.t.UPf6ZG),
                            className: s.darkCircle,
                            children: (0, r.jsx)('div', {
                                children: (0, r.jsx)(a.o8v, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: s.stopStreamIcon,
                                    colorClass: s.stopStreamForeground
                                })
                            })
                        })
                    ]
                })
        ]
    });
}
