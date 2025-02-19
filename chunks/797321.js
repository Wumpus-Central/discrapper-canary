n.d(t, { Z: () => l });
var r = n(200651);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function l(e) {
    return (0, r.jsxs)(
        'svg',
        s(
            o(
                {
                    width: '18',
                    height: '21',
                    viewBox: '0 0 18 21',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg'
                },
                e
            ),
            {
                children: [
                    (0, r.jsx)('path', {
                        d: 'M9.07544 0.824707L8.07544 10.8247L9.07544 20.8747L10.0254 10.8247L9.07544 0.824707Z',
                        fill: 'url(#paint0_linear_1586_45002)'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M17.2252 10.8247L9.07524 10.0247L0.875244 10.8247L9.07524 11.6247L17.2252 10.8247Z',
                        fill: 'url(#paint1_linear_1586_45002)'
                    }),
                    (0, r.jsxs)('defs', {
                        children: [
                            (0, r.jsxs)('linearGradient', {
                                id: 'paint0_linear_1586_45002',
                                x1: '9.06044',
                                y1: '20.8647',
                                x2: '9.06044',
                                y2: '0.799707',
                                gradientUnits: 'userSpaceOnUse',
                                children: [
                                    (0, r.jsx)('stop', {
                                        stopColor: 'white',
                                        stopOpacity: '0'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.06',
                                        stopColor: 'white',
                                        stopOpacity: '0.02'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.12',
                                        stopColor: 'white',
                                        stopOpacity: '0.07'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.19',
                                        stopColor: 'white',
                                        stopOpacity: '0.15'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.25',
                                        stopColor: 'white',
                                        stopOpacity: '0.26'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.32',
                                        stopColor: 'white',
                                        stopOpacity: '0.41'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.38',
                                        stopColor: 'white',
                                        stopOpacity: '0.59'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.44',
                                        stopColor: 'white',
                                        stopOpacity: '0.8'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.5',
                                        stopColor: 'white'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.56',
                                        stopColor: 'white',
                                        stopOpacity: '0.8'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.62',
                                        stopColor: 'white',
                                        stopOpacity: '0.59'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.68',
                                        stopColor: 'white',
                                        stopOpacity: '0.41'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.75',
                                        stopColor: 'white',
                                        stopOpacity: '0.26'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.81',
                                        stopColor: 'white',
                                        stopOpacity: '0.15'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.88',
                                        stopColor: 'white',
                                        stopOpacity: '0.07'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.94',
                                        stopColor: 'white',
                                        stopOpacity: '0.02'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '1',
                                        stopColor: 'white',
                                        stopOpacity: '0'
                                    })
                                ]
                            }),
                            (0, r.jsxs)('linearGradient', {
                                id: 'paint1_linear_1586_45002',
                                x1: '0.885244',
                                y1: '10.8347',
                                x2: '17.2402',
                                y2: '10.8347',
                                gradientUnits: 'userSpaceOnUse',
                                children: [
                                    (0, r.jsx)('stop', {
                                        stopColor: 'white',
                                        stopOpacity: '0'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.04',
                                        stopColor: 'white',
                                        stopOpacity: '0.04'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.11',
                                        stopColor: 'white',
                                        stopOpacity: '0.13'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.2',
                                        stopColor: 'white',
                                        stopOpacity: '0.29'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.3',
                                        stopColor: 'white',
                                        stopOpacity: '0.5'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.41',
                                        stopColor: 'white',
                                        stopOpacity: '0.78'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.5',
                                        stopColor: 'white'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.51',
                                        stopColor: 'white',
                                        stopOpacity: '0.93'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.55',
                                        stopColor: 'white',
                                        stopOpacity: '0.74'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.59',
                                        stopColor: 'white',
                                        stopOpacity: '0.56'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.63',
                                        stopColor: 'white',
                                        stopOpacity: '0.41'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.67',
                                        stopColor: 'white',
                                        stopOpacity: '0.28'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.71',
                                        stopColor: 'white',
                                        stopOpacity: '0.18'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.76',
                                        stopColor: 'white',
                                        stopOpacity: '0.1'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.82',
                                        stopColor: 'white',
                                        stopOpacity: '0.04'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '0.89',
                                        stopColor: 'white',
                                        stopOpacity: '0.01'
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '1',
                                        stopColor: 'white',
                                        stopOpacity: '0'
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }
        )
    );
}
n(192379);
