n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    o = n(871118),
    s = n(388032),
    c = n(668595);
function u(e) {
    let { stream: t, isSmall: n, selected: l, isSelfStream: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Z, {
                className: i()(c.absoluteFill, c.streamPreviewOpacity),
                stream: t,
                noText: !0
            }),
            !l &&
                (0, r.jsxs)('div', {
                    className: i()(c.content, c.streamUnavailable, { [c.small]: n }),
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: c.streamUnavailableText,
                            color: 'always-white',
                            variant: n ? 'text-sm/semibold' : 'text-md/semibold',
                            children: u ? s.NW.string(s.t.UeEwj4) : s.NW.string(s.t['1i3tSU'])
                        }),
                        (0, r.jsx)(a.DY3, {
                            text: u ? s.NW.string(s.t['ro/HNz']) : s.NW.string(s.t.UPf6ZG),
                            className: c.darkCircle,
                            children: (0, r.jsx)('div', {
                                children: (0, r.jsx)(a.o8v, {
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
