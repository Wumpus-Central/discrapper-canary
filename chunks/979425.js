n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    o = n(871118),
    s = n(388032),
    u = n(519417);
function c(e) {
    let { stream: t, isSmall: n, selected: l, isSelfStream: c } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Z, {
                className: i()(u.absoluteFill, u.streamPreviewOpacity),
                stream: t,
                noText: !0
            }),
            !l &&
                (0, r.jsxs)('div', {
                    className: i()(u.content, u.streamUnavailable, { [u.small]: n }),
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: u.streamUnavailableText,
                            color: 'always-white',
                            variant: n ? 'text-sm/semibold' : 'text-md/semibold',
                            children: c ? s.NW.string(s.t.UeEwj4) : s.NW.string(s.t['1i3tSU'])
                        }),
                        (0, r.jsx)(a.DY3, {
                            text: c ? s.NW.string(s.t['ro/HNz']) : s.NW.string(s.t.UPf6ZG),
                            className: u.darkCircle,
                            children: (0, r.jsx)('div', {
                                children: (0, r.jsx)(a.o8v, {
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
