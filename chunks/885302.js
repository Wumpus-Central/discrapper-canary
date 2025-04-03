s.d(t, { Z: () => u });
var r = s(200651);
s(192379);
var n = s(780384),
    i = s(410030),
    o = s(325767);
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = s[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let a = (e, t) => (null != t ? t : e ? 0.5 : 0.2),
    c = (e, t) => (null != t ? t : e ? 'url(#paint0_linear_1055_83268)' : 'url(#paint0_linear_1282_11557)'),
    u = (e) => {
        var t,
            s,
            { ellipseOpacity: u, circleColor: d } = e,
            p = (function (e, t) {
                if (null == e) return {};
                var s,
                    r,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var s,
                            r,
                            n = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (s = i[r]), t.indexOf(s) >= 0 || (n[s] = e[s]);
                        return n;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) (s = i[r]), !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s]);
                }
                return n;
            })(e, ['ellipseOpacity', 'circleColor']);
        let f = (0, i.ZP)(),
            b = (0, n.ap)(f),
            g = a(b, u),
            O = c(b, d);
        return (0, r.jsxs)(
            'svg',
            ((t = l(
                {
                    style: { overflow: 'visible' },
                    width: '80%',
                    height: '80%',
                    viewBox: '0 0 100 100',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg'
                },
                (0, o.Z)(l({}, p))
            )),
            (s = s =
                {
                    children: [
                        (0, r.jsxs)('svg', {
                            width: '100',
                            height: '100',
                            viewBox: '0 0 114 114',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: [
                                (0, r.jsxs)('defs', {
                                    children: [
                                        (0, r.jsxs)('linearGradient', {
                                            id: 'purple-gradient',
                                            x1: '0%',
                                            y1: '0%',
                                            x2: '100%',
                                            y2: '0%',
                                            children: [
                                                (0, r.jsx)('stop', {
                                                    offset: '0%',
                                                    style: {
                                                        stopColor: '#E2C7FA',
                                                        stopOpacity: 1
                                                    }
                                                }),
                                                (0, r.jsx)('stop', {
                                                    offset: '100%',
                                                    style: {
                                                        stopColor: '#F3D3DE',
                                                        stopOpacity: 1
                                                    }
                                                })
                                            ]
                                        }),
                                        (0, r.jsxs)('linearGradient', {
                                            id: 'dark-purple-gradient',
                                            x1: '0%',
                                            y1: '0%',
                                            x2: '0%',
                                            y2: '100%',
                                            children: [
                                                (0, r.jsx)('stop', {
                                                    offset: '0%',
                                                    style: {
                                                        stopColor: 'rgb(36,23,49)',
                                                        stopOpacity: 1
                                                    }
                                                }),
                                                (0, r.jsx)('stop', {
                                                    offset: '100%',
                                                    style: {
                                                        stopColor: 'rgb(36,23,49)',
                                                        stopOpacity: 1
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)('ellipse', {
                                    cx: '57.2768',
                                    cy: '57.0796',
                                    rx: '56.3726',
                                    ry: '56.3726',
                                    fill: null != d ? d : O,
                                    fillOpacity: g
                                }),
                                (0, r.jsxs)('g', {
                                    width: '65',
                                    transform: 'translate(50, 50) scale(.7) translate(-10, -39)',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    children: [
                                        (0, r.jsx)('path', {
                                            d: 'M42.0084 14.8866L33.7687 17.7832C33.3446 17.9281 32.9766 18.2015 32.7161 18.565C32.4555 18.9285 32.3154 19.3641 32.3154 19.8109C32.3154 20.2576 32.4555 20.6932 32.7161 21.0567C32.9766 21.4203 33.3446 21.6936 33.7687 21.8385L42.0084 24.7351C42.3147 24.8404 42.593 25.0138 42.8221 25.2422C43.0512 25.4705 43.2252 25.7478 43.3309 26.053L46.2373 34.2649C46.3827 34.6875 46.657 35.0543 47.0217 35.3139C47.3865 35.5736 47.8236 35.7132 48.2718 35.7132C48.7201 35.7132 49.1572 35.5736 49.522 35.3139C49.8867 35.0543 50.161 34.6875 50.3064 34.2649L53.2128 26.053C53.3204 25.7488 53.495 25.4725 53.7239 25.2444C53.9528 25.0164 54.23 24.8423 54.5353 24.7351L62.7896 21.8385C63.2136 21.6936 63.5817 21.4203 63.8422 21.0567C64.1028 20.6932 64.2428 20.2576 64.2428 19.8109C64.2428 19.3641 64.1028 18.9285 63.8422 18.565C63.5817 18.2015 63.2136 17.9281 62.7896 17.7832L54.5353 14.8866C54.2315 14.7767 53.9557 14.6018 53.7272 14.374C53.4987 14.1463 53.3231 13.8714 53.2128 13.5687L50.3064 5.34234C50.161 4.91974 49.8867 4.55297 49.522 4.2933C49.1572 4.03363 48.7201 3.89404 48.2718 3.89404C47.8236 3.89404 47.3865 4.03363 47.0217 4.2933C46.657 4.55297 46.3827 4.91974 46.2373 5.34234L43.3309 13.5687C43.2233 13.8729 43.0487 14.1492 42.8198 14.3773C42.591 14.6054 42.3137 14.7794 42.0084 14.8866Z',
                                            fill: 'white',
                                            fillOpacity: b ? '0.6' : '0.4'
                                        }),
                                        (0, r.jsx)('path', {
                                            d: 'M34.0878 3.57968L33.0393 0.634802C32.9888 0.483384 32.8917 0.351665 32.7618 0.258321C32.6319 0.164978 32.4759 0.114746 32.3158 0.114746C32.1556 0.114746 31.9996 0.164978 31.8697 0.258321C31.7398 0.351665 31.6427 0.483384 31.5922 0.634802L30.6217 3.57968C30.5838 3.68745 30.5221 3.78534 30.4411 3.86607C30.3601 3.94681 30.2619 4.00831 30.1538 4.04602L27.1555 5.02189C27.0067 5.07415 26.8777 5.17117 26.7865 5.29956C26.6953 5.42795 26.6464 5.58137 26.6464 5.73868C26.6464 5.89598 26.6953 6.04941 26.7865 6.17779C26.8777 6.30618 27.0067 6.4032 27.1555 6.45547L30.0758 7.47451C30.1839 7.51222 30.2821 7.57373 30.3631 7.65446C30.4441 7.7352 30.5059 7.83308 30.5437 7.94085L31.5575 10.8426C31.6081 10.994 31.7052 11.1257 31.835 11.219C31.9649 11.3124 32.121 11.3626 32.2811 11.3626C32.4412 11.3626 32.5973 11.3124 32.7271 11.219C32.857 11.1257 32.9541 10.994 33.0047 10.8426L34.0878 7.94085C34.1257 7.83308 34.1874 7.7352 34.2684 7.65446C34.3494 7.57373 34.4476 7.51222 34.5558 7.47451L37.476 6.45547C37.6249 6.4032 37.7538 6.30618 37.845 6.17779C37.9362 6.04941 37.9852 5.89598 37.9852 5.73868C37.9852 5.58137 37.9362 5.42795 37.845 5.29956C37.7538 5.17117 37.6249 5.07415 37.476 5.02189L34.5211 4.00284C34.4237 3.9656 34.3349 3.90883 34.2604 3.83604C34.1859 3.76326 34.1271 3.676 34.0878 3.57968Z',
                                            fill: 'white',
                                            fillOpacity: '0.8'
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)('defs', {
                            children: [
                                (0, r.jsxs)('filter', {
                                    id: 'filter0_d_1282_11577',
                                    x: '-6.55945',
                                    y: '0.382812',
                                    width: '89.2926',
                                    height: '70.3945',
                                    filterUnits: 'userSpaceOnUse',
                                    colorInterpolationFilters: 'sRGB',
                                    children: [
                                        (0, r.jsx)('feFlood', {
                                            floodOpacity: '0',
                                            result: 'BackgroundImageFix'
                                        }),
                                        (0, r.jsx)('feColorMatrix', {
                                            in: 'SourceAlpha',
                                            type: 'matrix',
                                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                                            result: 'hardAlpha'
                                        }),
                                        (0, r.jsx)('feOffset', { dy: '4' }),
                                        (0, r.jsx)('feGaussianBlur', { stdDeviation: '5' }),
                                        (0, r.jsx)('feComposite', {
                                            in2: 'hardAlpha',
                                            operator: 'out'
                                        }),
                                        (0, r.jsx)('feColorMatrix', {
                                            type: 'matrix',
                                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                                        }),
                                        (0, r.jsx)('feBlend', {
                                            mode: 'normal',
                                            in2: 'BackgroundImageFix',
                                            result: 'effect1_dropShadow_1282_11577'
                                        }),
                                        (0, r.jsx)('feBlend', {
                                            mode: 'normal',
                                            in: 'SourceGraphic',
                                            in2: 'effect1_dropShadow_1282_11577',
                                            result: 'shape'
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('linearGradient', {
                                    id: 'paint0_linear_1282_11577',
                                    x1: '3.44055',
                                    y1: '31.5801',
                                    x2: '72.7332',
                                    y2: '31.5801',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                        (0, r.jsx)('stop', { stopColor: '#B473F5' }),
                                        (0, r.jsx)('stop', {
                                            offset: '1',
                                            stopColor: '#E292AA'
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('linearGradient', {
                                    id: 'paint2_linear_1986_8686',
                                    x1: '3.44073',
                                    y1: '43.8345',
                                    x2: '72.7334',
                                    y2: '43.8345',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                        (0, r.jsx)('stop', { stopColor: '#B473F5' }),
                                        (0, r.jsx)('stop', {
                                            offset: '1',
                                            stopColor: '#E292AA'
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('linearGradient', {
                                    id: 'paint1_linear_1282_11577',
                                    x1: '3.44055',
                                    y1: '31.5801',
                                    x2: '72.7332',
                                    y2: '31.5801',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                        (0, r.jsx)('stop', { stopColor: '#B473F5' }),
                                        (0, r.jsx)('stop', {
                                            offset: '1',
                                            stopColor: '#E292AA'
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('linearGradient', {
                                    id: 'paint1_linear_1986_8686',
                                    x1: '3.44073',
                                    y1: '43.8345',
                                    x2: '72.7334',
                                    y2: '43.8345',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                        (0, r.jsx)('stop', { stopColor: '#B473F5' }),
                                        (0, r.jsx)('stop', {
                                            offset: '1',
                                            stopColor: '#E292AA'
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('linearGradient', {
                                    id: 'paint2_linear_1282_11577',
                                    x1: '3.44055',
                                    y1: '31.5801',
                                    x2: '72.7332',
                                    y2: '31.5801',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                        (0, r.jsx)('stop', { stopColor: '#B473F5' }),
                                        (0, r.jsx)('stop', {
                                            offset: '1',
                                            stopColor: '#E292AA'
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('linearGradient', {
                                    id: 'paint0_linear_1986_8686',
                                    x1: '3.44073',
                                    y1: '43.8345',
                                    x2: '72.7334',
                                    y2: '43.8345',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                        (0, r.jsx)('stop', { stopColor: '#B473F5' }),
                                        (0, r.jsx)('stop', {
                                            offset: '1',
                                            stopColor: '#E292AA'
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('linearGradient', {
                                    id: 'paint0_linear_1282_11557',
                                    x1: '0.904297',
                                    y1: '56.5004',
                                    x2: '113.649',
                                    y2: '56.5004',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                        (0, r.jsx)('stop', { stopColor: '#B473F5' }),
                                        (0, r.jsx)('stop', {
                                            offset: '1',
                                            stopColor: '#E292AA'
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('linearGradient', {
                                    id: 'paint0_linear_684_72736',
                                    x1: '0.904236',
                                    y1: '57.0796',
                                    x2: '113.649',
                                    y2: '57.0796',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                        (0, r.jsx)('stop', { stopColor: '#B473F5' }),
                                        (0, r.jsx)('stop', {
                                            offset: '1',
                                            stopColor: '#E292AA'
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('linearGradient', {
                                    id: 'paint0_linear_1055_83179',
                                    x1: '0.904236',
                                    y1: '56.5005',
                                    x2: '113.649',
                                    y2: '56.5005',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                        (0, r.jsx)('stop', { stopColor: '#B473F5' }),
                                        (0, r.jsx)('stop', {
                                            offset: '1',
                                            stopColor: '#E292AA'
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('linearGradient', {
                                    id: 'paint0_linear_1055_83268',
                                    x1: '0.904236',
                                    y1: '57.2461',
                                    x2: '113.649',
                                    y2: '57.2461',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                        (0, r.jsx)('stop', { stopColor: '#B473F5' }),
                                        (0, r.jsx)('stop', {
                                            offset: '1',
                                            stopColor: '#E292AA'
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)('g', {
                            filter: b ? void 0 : 'url(#filter0_d_1282_11577)',
                            transform: 'translate(50, 50) scale(.8) translate(-44, -30)',
                            children: [
                                (0, r.jsx)('path', {
                                    d: 'M47.5359 37.8795C51.0149 37.8795 53.8352 35.0592 53.8352 31.5801C53.8352 28.1011 51.0149 25.2808 47.5359 25.2808C44.0568 25.2808 41.2365 28.1011 41.2365 31.5801C41.2365 35.0592 44.0568 37.8795 47.5359 37.8795Z',
                                    fill: b ? 'url(#paint2_linear_1986_8686)' : 'url(#paint0_linear_1282_11577)'
                                }),
                                (0, r.jsx)('path', {
                                    fillRule: 'evenodd',
                                    clipRule: 'evenodd',
                                    d: 'M22.3385 6.38281C20.599 6.38281 19.1889 7.79297 19.1889 9.53248C19.1889 11.272 20.599 12.6821 22.3385 12.6821H31.7875C33.527 12.6821 34.9372 14.0923 34.9372 15.8318C34.9372 17.5713 33.527 18.9815 31.7875 18.9815L17.614 18.9815C15.8745 18.9815 14.4644 20.3916 14.4644 22.1311C14.4644 23.8706 15.8745 25.2808 17.614 25.2808L25.4882 25.2808C27.2277 25.2808 28.6379 26.691 28.6379 28.4305C28.6379 30.17 27.2277 31.5801 25.4882 31.5801H19.1889C17.4494 31.5801 16.0392 32.9903 16.0392 34.7298C16.0392 36.4693 17.4494 37.8795 19.1889 37.8795H23.1324C25.9295 48.7472 35.7949 56.7774 47.5359 56.7774C61.4519 56.7774 72.7332 45.4962 72.7332 31.5801C72.7332 17.664 61.4519 6.38281 47.5359 6.38281H22.3385ZM47.5359 44.1788C54.4939 44.1788 60.1345 38.5382 60.1345 31.5801C60.1345 24.6221 54.4939 18.9815 47.5359 18.9815C40.5778 18.9815 34.9372 24.6221 34.9372 31.5801C34.9372 38.5382 40.5778 44.1788 47.5359 44.1788Z',
                                    fill: b ? 'url(#paint1_linear_1986_8686)' : 'url(#paint1_linear_1282_11577)'
                                }),
                                (0, r.jsx)('path', {
                                    d: 'M8.16505 25.2808C9.90456 25.2808 11.3147 23.8706 11.3147 22.1311C11.3147 20.3916 9.90456 18.9815 8.16505 18.9815H6.59022C4.8507 18.9815 3.44055 20.3916 3.44055 22.1311C3.44055 23.8706 4.8507 25.2808 6.59022 25.2808H8.16505Z',
                                    fill: b ? 'url(#paint0_linear_1986_8686)' : 'url(#paint2_linear_1282_11577)'
                                })
                            ]
                        }),
                        (0, r.jsx)('g', {
                            width: '65',
                            transform: 'translate(50, 50) scale(0.81) translate(-26, -42)',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: (0, r.jsx)('path', {
                                d: 'M12.6686 60.7298L10.9101 55.7911C10.8254 55.5372 10.6626 55.3163 10.4448 55.1597C10.227 55.0032 9.96524 54.9189 9.69671 54.9189C9.42818 54.9189 9.16646 55.0032 8.94866 55.1597C8.73086 55.3163 8.56804 55.5372 8.48326 55.7911L6.85565 60.7298C6.7922 60.9105 6.6887 61.0747 6.55284 61.2101C6.41699 61.3455 6.25226 61.4487 6.07091 61.5119L1.04275 63.1485C0.793091 63.2361 0.576874 63.3988 0.423928 63.6141C0.270981 63.8294 0.188843 64.0868 0.188843 64.3506C0.188843 64.6144 0.270981 64.8717 0.423928 65.087C0.576874 65.3023 0.793091 65.465 1.04275 65.5527L5.94012 67.2616C6.12147 67.3249 6.2862 67.428 6.42205 67.5634C6.55791 67.6988 6.66141 67.863 6.72486 68.0437L8.42513 72.91C8.50991 73.1639 8.67273 73.3848 8.89053 73.5414C9.10833 73.6979 9.37005 73.7822 9.63858 73.7822C9.90711 73.7822 10.1688 73.6979 10.3866 73.5414C10.6044 73.3848 10.7672 73.1639 10.852 72.91L12.6686 68.0437C12.732 67.863 12.8355 67.6988 12.9714 67.5634C13.1072 67.428 13.2719 67.3249 13.4533 67.2616L18.3507 65.5527C18.6003 65.465 18.8165 65.3023 18.9695 65.087C19.1224 64.8717 19.2046 64.6144 19.2046 64.3506C19.2046 64.0868 19.1224 63.8294 18.9695 63.6141C18.8165 63.3988 18.6003 63.2361 18.3507 63.1485L13.3952 61.4395C13.2318 61.377 13.083 61.2818 12.958 61.1598C12.833 61.0377 12.7345 60.8914 12.6686 60.7298Z',
                                fill: 'white',
                                fillOpacity: '0.8'
                            })
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
                : (function (e, t) {
                      var s = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          s.push.apply(s, r);
                      }
                      return s;
                  })(Object(s)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e));
                  }),
            t)
        );
    };
