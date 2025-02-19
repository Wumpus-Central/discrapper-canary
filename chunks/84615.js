n.d(t, {
    Ox: () => A,
    QP: () => S,
    ob: () => R,
    q4: () => C
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(97613),
    a = n.n(o),
    s = n(858863),
    l = n(5188),
    c = n(15729),
    u = n(731965),
    d = n(477690),
    f = n(481060),
    p = n(714338),
    _ = n(624138),
    h = n(314910),
    m = n(308569),
    g = n(852915);
function E(e, t, n) {
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
function v(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = (0, _.Mg)(d.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION),
    S = (0, c.U)((e) => ({
        fullScreenLayers: [],
        addLayer: (t) =>
            (0, u.j)(() => {
                e((e) => {
                    let { fullScreenLayers: n } = e;
                    return {
                        fullScreenLayers: [...n, t]
                    };
                });
            })
    }));
function I(e) {
    let { item: t } = e,
        n = i.useRef(null);
    return (
        (0, f.Tbt)(n),
        i.useEffect(
            () => (
                p.Z.disable(),
                t.key !== m.CV && p.Z.enableTemp(P(t.key)),
                () => {
                    p.Z.disableTemp();
                }
            ),
            [t.key]
        ),
        (0, r.jsx)(t.LayerComponent, {
            children: (0, r.jsxs)('div', {
                className: g.root,
                ref: n,
                children: [
                    (0, r.jsx)('div', { className: g.drag }),
                    t.render({
                        transitionState: null != t ? t.transitionState : 3,
                        closeLayer: () => R(t.key)
                    })
                ]
            })
        })
    );
}
let T = {
        enter: g.enter,
        enterActive: g.enterActive,
        enterDone: g.enterDone,
        exit: g.exit,
        exitActive: g.exitActive,
        exitDone: g.exitDone
    },
    N = {
        enter: g.enterReducedMotion,
        enterActive: g.enterActiveReducedMotion,
        enterDone: g.enterDoneReducedMotion,
        exit: g.exitReducedMotion,
        exitActive: g.exitActiveReducedMotion,
        exitDone: g.exitDoneReducedMotion
    };
function A() {
    let { reducedMotion: e } = i.useContext(f.Sfi),
        t = e.enabled ? N : T,
        n = S((e) => e.fullScreenLayers);
    return (0, r.jsx)(s.Z, {
        children: n.map((e) =>
            (0, r.jsx)(
                l.Z,
                {
                    classNames: t,
                    timeout: O,
                    onEntered: () => {
                        (0, u.j)(() => {
                            S.setState({ fullScreenLayers: n.map((t) => (t.key === e.key ? y(v({}, t), { transitionState: 2 }) : t)) });
                        });
                    },
                    unmountOnExit: !0,
                    children: (0, r.jsx)(I, { item: e })
                },
                e.key
            )
        )
    });
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: r } = t,
        i = null != n ? n : a()();
    return (
        (0, u.j)(() => {
            S.setState((t) => ({
                fullScreenLayers: [
                    ...t.fullScreenLayers,
                    {
                        key: i,
                        transitionState: 1,
                        LayerComponent: null != r ? r : h.ZP,
                        render: e
                    }
                ]
            }));
        }),
        i
    );
}
function R(e) {
    (0, u.j)(() => {
        S.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
function P(e) {
    return {
        POP_LAYER: {
            binds: ['esc'],
            comboKeysBindGlobal: !0,
            action() {
                R(e);
            }
        }
    };
}
