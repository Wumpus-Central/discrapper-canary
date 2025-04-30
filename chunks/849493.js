s.r(t), s.d(t, { default: () => o });
var i = s(200651);
s(192379);
var r = s(481060),
    l = s(915312);
function o() {
    return (
        (0, l.bN)(document.body),
        (0, i.jsx)(r.nn4, {
            children: (0, i.jsx)('svg', {
                'aria-hidden': !0,
                children: (0, i.jsxs)('filter', {
                    id: 'violation-overlay',
                    x: '0',
                    y: '0',
                    width: '100%',
                    height: '100%',
                    children: [
                        (0, i.jsx)('feFlood', {
                            floodColor: '#ff0000',
                            floodOpacity: '0.3',
                            result: 'floodFill'
                        }),
                        (0, i.jsx)('feBlend', {
                            in: 'SourceGraphic',
                            in2: 'floodFill',
                            mode: 'overlay'
                        })
                    ]
                })
            })
        })
    );
}
s(80643);
