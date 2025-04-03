n.d(t, { Z: () => P }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(642128),
    a = n(442837),
    i = n(481060),
    c = n(313201),
    l = n(668826),
    u = n(120421),
    d = n(702319),
    f = n(284539),
    p = n(67411),
    m = n(144931),
    g = n(3072),
    b = n(763283),
    y = n(477839),
    h = n(622802),
    x = n(388032),
    N = n(182643);
let v = n(450862),
    O = [y.FK.LEVEL_1, y.FK.LEVEL_2, y.FK.LEVEL_3, y.FK.LEVEL_4];
function j(e) {
    return 0 === e ? 0 : Math.floor(-((1000 * (1 - Math.pow(1.25, e))) / 0.25));
}
function Z(e) {
    let { fill: t = !1, stroke: n = !1 } = e;
    return (0, r.jsx)('path', {
        stroke: n ? '#fff' : void 0,
        fill: t ? '#fff' : void 0,
        strokeLinecap: 'round',
        strokeWidth: '3',
        d: 'M30.646 2.801c-6.131-.346-12.605-1.232-18.75-.55-.78.087-1.366.094-2.084.434-.68.323-2.099.535-2.488 1.158C6.3 5.48 4.381 6.596 3.157 8.125 2.592 8.833 2 12.716 2 13.74c0 2.983.639 2.47 3.24 3.24 8.881 2.632 18.235.926 27.373.926 7.838 0 15.634.27 23.438.521 25.652.828 51.238 2.084 76.968 2.084 13.726 0 27.377.52 41.087.52h41.436c9.814 0 19.365-1.041 29.166-1.041 10.655 0 21.458-.521 32.176-.521 19.826 0 39.571.626 59.317 2.199 5.641.45 13.403 1.38 19.04-.232 3.723-1.063 8.121-1.111 11.342-3.124.519-.325 3.618-3.579 3.646-4.052.151-2.564-.235-3.14-1.562-5.092-1.862-2.738-3.122-4.467-6.25-5.585-3.823-1.365-8.212-.78-12.24-.78h-15.625c-14.383 0-28.609 1.04-42.969 1.04h-48.958c-9.341 0-18.557-1.04-27.865-1.04-5.905 0-11.915.52-17.708.52-8.783 0-17.725.52-26.591.52-8.649 0-17.122-1.562-25.724-1.562-16.453 0-32.844.521-49.247.521H32.208'
    });
}
function _(e) {
    let { percent: t } = e,
        n = (0, c.Dt)(),
        s = (0, i.q_F)({ width: (t / 100) * 372 });
    return (0, r.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '372',
        height: '24',
        fill: 'none',
        children: [
            (0, r.jsx)('defs', {
                children: (0, r.jsx)('mask', {
                    id: n,
                    children: (0, r.jsx)(Z, { fill: !0 })
                })
            }),
            (0, r.jsx)(o.animated.rect, {
                style: (function (e) {
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
                })({ mask: 'url(#'.concat(n, ')') }, s),
                fill: '#BB45FF',
                x: '0',
                y: '0',
                height: '24'
            }),
            (0, r.jsx)(Z, { stroke: !0 })
        ]
    });
}
function P() {
    var e, t;
    let n = (0, a.e7)([u.Z], () => u.Z.lifetimePoints),
        [o, i] = (0, f.Z)(y.yN.LEVELING),
        c = null != (e = null == o ? void 0 : o.lastLevelClaimed) ? e : 0,
        Z = null != (t = null == o ? void 0 : o.pointsWhenUnlocked) ? t : n,
        P = n - Z,
        C = (function e(t, n) {
            return t >= j(n) ? e(t, n + 1) : n;
        })(P, 1),
        w = j(C - 1),
        E = j(C),
        S = P - w,
        I = E - w,
        k = c + 1,
        M = Math.floor(0.1 * (j(k) - j(k - 1))),
        W = (0, g.eR)(v);
    (0, p.Z)(O, C);
    let R = (0, s.useCallback)(() => {
        i({ lastLevelClaimed: k }), (0, l.KH)(y.yN.LEVELING, M), W();
    }, [k, M, W, i]);
    return (
        (0, s.useEffect)(() => {
            (null == o ? void 0 : o.pointsWhenUnlocked) == null && i({ pointsWhenUnlocked: n });
        }, []),
        (0, r.jsxs)('div', {
            className: N.leveling,
            children: [
                (0, r.jsxs)('div', {
                    className: N.levelInfo,
                    children: [
                        (0, r.jsx)(b.Z, {
                            variant: 'text-lg/bold',
                            color: 'clicker-game-brand',
                            children: x.NW.format(h.Z.IG6UGB, { level: C })
                        }),
                        (0, r.jsx)(b.Z, {
                            className: N.experience,
                            variant: 'text-sm/medium',
                            color: 'clicker-game-brand',
                            children: x.NW.format(h.Z.Rfy3Cg, {
                                currentExperience: Math.floor(S),
                                requiredExperience: I,
                                experienceHook: (e, t) =>
                                    (0, r.jsx)(
                                        'span',
                                        {
                                            className: N.monospace,
                                            children: e
                                        },
                                        t
                                    ),
                                grassIconHook: (e, t, n) => (0, d.Z)(e, t, n, N.experienceIcon)
                            })
                        })
                    ]
                }),
                (0, r.jsx)(_, { percent: (S / I) * 100 }),
                k < C
                    ? (0, r.jsx)(m.Z, {
                          className: N.claimButton,
                          onClick: R,
                          children: x.NW.format(h.Z.IUF6np, {
                              points: M,
                              grassIconHook: d.Z
                          })
                      })
                    : null
            ]
        })
    );
}
