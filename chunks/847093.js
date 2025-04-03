n.d(t, { Z: () => M }), n(47120), n(653041);
var r = n(200651),
    s = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(392711),
    c = n(642128),
    l = n(772848),
    u = n(442837),
    d = n(481060),
    f = n(393238),
    p = n(313201),
    m = n(668826),
    g = n(359013),
    b = n(120421),
    y = n(284539),
    h = n(18582),
    x = n(3072),
    N = n(763283),
    v = n(81829),
    O = n(477839),
    j = n(622802),
    Z = n(388032),
    _ = n(574554);
function P(e) {
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
                var r;
                (r = n[t]),
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
let C = n(874332),
    w = n(225334),
    E = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        return {
            0: {
                top: t + s + e,
                right: n - r / 6 - e
            },
            1: {
                top: t - s / 3 - e,
                left: n + r / 2 - e
            },
            2: {
                top: t + s / 3 + e,
                left: n - r / 3 - e
            },
            3: {
                top: t - s / 6 - e,
                right: n - r / 6 - e
            },
            4: {
                top: t - s / 6 - e,
                left: n - r / 6 - e
            },
            5: {
                top: t + s + e,
                left: n + r / 2 - e
            }
        };
    },
    S = () => [Z.NW.string(j.Z.TXLQ3d), Z.NW.string(j.Z.TC42mZ), Z.NW.string(j.Z.h3tura), Z.NW.string(j.Z['sAbI/v']), Z.NW.string(j.Z.NJ4o2t), Z.NW.string(j.Z.sUsj8f), Z.NW.string(j.Z.jMKjJC), Z.NW.string(j.Z.J6uWam)];
function I(e) {
    let { text: t, position: n } = e,
        o = (0, d.Yzy)(
            !0,
            {
                from: {
                    opacity: 1,
                    scale: 0.2
                },
                enter: {
                    opacity: 0,
                    scale: 3
                },
                config: { duration: 1000 }
            },
            'respect-motion-settings'
        ),
        a = (0, s.useRef)(n);
    return o((e, n) =>
        n
            ? (0, r.jsx)(c.animated.div, {
                  className: _.affirmation,
                  style: P({}, a.current, e),
                  children: t
              })
            : null
    );
}
function k(e) {
    let { isRainbow: t, pathData: n, width: s, height: o, gradientWidthScale: a, className: i } = e,
        c = (0, p.Dt)(),
        l = (0, p.Dt)(),
        u = (0, r.jsx)('path', {
            d: n,
            stroke: t ? 'white' : 'currentColor',
            strokeWidth: '3',
            strokeLinecap: 'round'
        });
    return (0, r.jsx)('svg', {
        className: i,
        viewBox: '0 0 '.concat(s, ' ').concat(o),
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)('defs', {
                          children: [
                              (0, r.jsxs)('linearGradient', {
                                  id: c,
                                  x2: '100%',
                                  children: [
                                      (0, r.jsx)('stop', {
                                          offset: '0%',
                                          stopColor: '#FF0000'
                                      }),
                                      (0, r.jsx)('stop', {
                                          offset: '10%',
                                          stopColor: '#FF9A00'
                                      }),
                                      (0, r.jsx)('stop', {
                                          offset: '20%',
                                          stopColor: '#D0DE21'
                                      }),
                                      (0, r.jsx)('stop', {
                                          offset: '30%',
                                          stopColor: '#4FDC4A'
                                      }),
                                      (0, r.jsx)('stop', {
                                          offset: '40%',
                                          stopColor: '#3FDAE8'
                                      }),
                                      (0, r.jsx)('stop', {
                                          offset: '50%',
                                          stopColor: '#2FC9E2'
                                      }),
                                      (0, r.jsx)('stop', {
                                          offset: '60%',
                                          stopColor: '#1C7FEE'
                                      }),
                                      (0, r.jsx)('stop', {
                                          offset: '70%',
                                          stopColor: '#5F15F2'
                                      }),
                                      (0, r.jsx)('stop', {
                                          offset: '80%',
                                          stopColor: '#BA0CF8'
                                      }),
                                      (0, r.jsx)('stop', {
                                          offset: '90%',
                                          stopColor: '#FB07D9'
                                      }),
                                      (0, r.jsx)('stop', {
                                          offset: '100%',
                                          stopColor: '#FF0000'
                                      })
                                  ]
                              }),
                              (0, r.jsx)('mask', {
                                  id: l,
                                  children: u
                              })
                          ]
                      }),
                      (0, r.jsxs)('g', {
                          style: { mask: 'url(#'.concat(l, ')') },
                          children: [
                              (0, r.jsx)('rect', {
                                  x: -s,
                                  y: '0',
                                  width: s * a,
                                  height: o,
                                  fill: 'url(#'.concat(c, ')'),
                                  children: (0, r.jsx)('animate', {
                                      attributeName: 'x',
                                      values: '0;'.concat(s * a),
                                      dur: ''.concat(2, 's'),
                                      repeatCount: 'indefinite'
                                  })
                              }),
                              (0, r.jsx)('rect', {
                                  x: '-'.concat(s * a),
                                  y: '0',
                                  width: s * a,
                                  height: o,
                                  fill: 'url(#'.concat(c, ')'),
                                  children: (0, r.jsx)('animate', {
                                      attributeName: 'x',
                                      values: '-'.concat(s * a, ';0'),
                                      dur: ''.concat(2, 's'),
                                      repeatCount: 'indefinite'
                                  })
                              })
                          ]
                      })
                  ]
              })
            : u
    });
}
function M(e) {
    let t = (0, u.e7)([b.Z], () => b.Z.getPurchasedUpgradesForItem(O.yN.CLICKER_BUTTON)),
        { ref: n } = (0, f.Z)(),
        o = null != t[O.uv.CLICKER_BUTTON_AFFIRMATIONS],
        [c, d] = (0, s.useState)([]),
        p = (0, s.useRef)([]),
        M = null != t[O.uv.CLICKER_BUTTON_RAINBOW],
        W = g.Mq[O.yN.CLICKER_BUTTON],
        R = (0, s.useMemo)(() => W.getPoints(t), [t, W]),
        [A, T] = (0, s.useState)({}),
        [L, B] = (0, y.Z)(O.yN.CLICKER_BUTTON),
        D = (0, x.eR)(C),
        F = (0, x.eR)(w);
    (0, s.useEffect)(() => {
        M && !L.hasPlayedRainbowSound && (D(), B({ hasPlayedRainbowSound: !0 }));
    }, [M, L, D, B]);
    let U = (0, s.useCallback)(() => {
            var e, t, n;
            o &&
                (c.push({
                    text: null != (e = (0, i.sample)(S())) ? e : '',
                    variation: 50 * Math.random()
                }),
                d([...c]),
                0.05 > Math.random() && F()),
                T(
                    ((t = P({}, A)),
                    (n = n = { [(0, l.Z)()]: R }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                ),
                (0, m.KH)(O.yN.CLICKER_BUTTON, R);
        }, [c, o, F, R, A]),
        G = (0, s.useCallback)(
            (e) => {
                delete A[e], T(P({}, A));
            },
            [A]
        );
    return (
        (0, s.useEffect)(() => {
            let e = null;
            if (c.length > 0) {
                let e = setTimeout(() => {
                    c.splice(0, 1), d([...c]);
                }, 1000);
                p.current.push(e);
            }
            return (
                p.current.length > 0 && (e = p.current),
                () => {
                    null == e ||
                        e.forEach((e) => {
                            clearTimeout(e);
                        });
                }
            );
        }, [c]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(h.Z, {
                    isGrass: !0,
                    innerRef: n,
                    onClick: U,
                    className: a()(_.logo, { [_.logoGreen]: !M }),
                    children: [
                        (0, r.jsx)(k, {
                            className: _.logoLeft,
                            isRainbow: M,
                            pathData: 'M24.5675 64C24.5675 59.5748 23.8752 55.6114 22.7735 51.3211C21.1302 44.9218 17.2871 39.9123 13.6781 34.5142C11.3666 31.057 8.56344 27.91 6.08466 24.5733C5.34252 23.5742 3.79213 21.522 2.78862 20.8665C1.39038 19.953 2.02739 20.1317 3.33101 20.4874C5.26062 21.0139 7.27007 21.3997 9.17209 22.0038C11.9878 22.8981 14.6646 24.9713 17.141 26.553C20.7971 28.8883 22.3418 31.4421 24.943 34.7248C26.2227 36.3398 27.2753 38.3344 28.6145 39.8216C29.2397 40.5159 29.4902 41.5789 29.9079 42.3911C30.4168 43.3806 31.2583 44.0869 31.7854 45.0448C32.3261 46.0273 32.9713 47.5191 33.6629 48.3725C33.9041 48.6701 35.0815 51.1419 35.0815 50.3523C35.0815 48.2392 34.2656 45.8477 33.8715 43.739C33.2198 40.252 31.4786 37.0788 30.5755 33.6717C29.6595 30.2158 27.7679 26.225 25.9861 23.1411C22.1637 16.5256 18.5614 9.63991 14.888 2.96438C13.6682 0.747679 16.9214 2.99899 17.8085 3.34348C20.255 4.29346 21.8033 6.98584 23.8165 8.56668C26.7945 10.9051 29.0306 14.7278 31.3265 17.7494C33.6675 20.8304 36.5665 23.7662 38.3775 27.227C40.9377 32.1197 43.7558 36.7334 45.5954 42.012C46.2284 43.8283 46.986 45.7872 47.0974 47.6986C47.1356 48.3549 47.6303 49.8659 48.1404 48.8359C50.0137 45.0535 54.8218 43.373 57.6948 40.5798C58.9421 39.3672 60.6015 38.1864 59.7809 40.5798C59.154 42.4082 57.4656 43.959 56.9438 45.803C56.3868 47.7713 55.3602 49.614 54.6908 51.5738C54.1223 53.2384 54.0632 54.8653 53.5643 56.5022C52.8172 58.9534 53.4809 61.5106 53.4809 64',
                            width: 62,
                            height: 66,
                            gradientWidthScale: 1.2
                        }),
                        (0, r.jsxs)(N.Z, {
                            variant: 'text-lg/bold',
                            color: 'clicker-game-brand',
                            className: a()(_.logoText, _.override, {
                                [_.logoGreen]: !M,
                                [_.rainbow]: M
                            }),
                            children: [
                                Z.NW.format(j.Z['u5OO/f'], {}),
                                (0, r.jsx)(v.Z, {
                                    renderedPoints: A,
                                    onRemovePoint: G
                                })
                            ]
                        }),
                        (0, r.jsx)(k, {
                            className: _.logoRight,
                            isRainbow: M,
                            pathData: 'M20.9026 79.1169C19.7562 65.1255 19.5154 50.7086 14.2042 37.4791C11.1266 29.8132 7.2725 21.4339 2.81686 14.5282C2.25753 13.6613 1.29888 11.1238 2.81686 13.1934C5.03999 16.2245 7.50204 19.1421 9.8502 22.092C13.3069 26.4345 16.03 32.0675 18.7442 36.9229C21.6097 42.0489 24.5937 47.096 27.2289 52.3471C30.1836 58.2349 28.2709 50.5674 28.2709 48.1203C28.2709 44.7355 27.506 41.5997 27.08 38.2577C26.4201 33.0796 26.9312 27.5607 26.9312 22.3515C26.9312 16.819 28.629 7.61735 26.4102 2.36684C25.9269 1.22335 30.0676 4.24978 30.0676 6.47116C31.2491 8.79672 31.5446 12.7494 31.643 15.8885C31.7783 20.2048 31.9541 19.1038 32.9597 23.056C34.5696 29.3826 37.4138 35.52 38.2813 42.0025C38.8454 46.2183 40.0747 50.2104 40.9979 54.3493C41.6381 57.22 41.6677 52.8763 41.6677 52.1246C41.6677 42.4167 46.359 33.396 49.2965 24.3908C51.0933 18.8823 53.2612 14.1966 56.2554 9.18907C57.2057 7.5997 58.9436 4.16397 60.721 3.405C61.5869 3.03525 60.1719 9.31428 60.0511 9.70815C58.3787 15.1617 56.526 20.5301 54.9157 26.0222C51.5554 37.4826 49.325 49.1509 48.3289 61.0603C47.8112 67.2494 48.3661 73.0601 48.3661 79.1169',
                            width: 63,
                            height: 81,
                            gradientWidthScale: 2
                        })
                    ]
                }),
                c.map((e, t) => {
                    var s, o, a, i;
                    return (0, r.jsx)(
                        I,
                        {
                            text: e.text,
                            position: P({}, E(e.variation, null == (s = n.current) ? void 0 : s.offsetTop, null == (o = n.current) ? void 0 : o.offsetLeft, null == (a = n.current) ? void 0 : a.offsetWidth, null == (i = n.current) ? void 0 : i.offsetHeight)[t % Object.keys(E(0)).length])
                        },
                        t
                    );
                })
            ]
        })
    );
}
