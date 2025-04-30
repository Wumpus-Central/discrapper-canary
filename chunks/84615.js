n.d(t, {
    Ox: () => N,
    QP: () => I,
    ob: () => R,
    q4: () => C
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(97613),
    o = n.n(a),
    s = n(481328),
    l = n(565945),
    c = n(381814),
    u = n(731965),
    d = n(477690),
    f = n(481060),
    _ = n(714338),
    p = n(624138),
    h = n(314910),
    m = n(308569),
    g = n(623876);
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
function b(e) {
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
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = (0, p.Mg)(d.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION),
    I = (0, c.U)((e) => ({
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
function S(e) {
    let { item: t, containerRef: n } = e;
    return (
        (0, f.Tbt)(n),
        i.useEffect(
            () => (
                _.Z.disable(),
                t.key !== m.CV && _.Z.enableTemp(P(t.key)),
                () => {
                    _.Z.disableTemp();
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
    A = {
        enter: g.enterReducedMotion,
        enterActive: g.enterActiveReducedMotion,
        enterDone: g.enterDoneReducedMotion,
        exit: g.exitReducedMotion,
        exitActive: g.exitActiveReducedMotion,
        exitDone: g.exitDoneReducedMotion
    };
function N() {
    let { reducedMotion: e } = i.useContext(f.Sfi),
        t = e.enabled ? A : T,
        n = I((e) => e.fullScreenLayers),
        a = n.map((e) => ({
            item: e,
            nodeRef: i.createRef()
        }));
    return (0, r.jsx)(s.Z, {
        children: a.map((e) => {
            let { item: i, nodeRef: a } = e;
            return (0, r.jsx)(
                l.Z,
                {
                    nodeRef: a,
                    classNames: t,
                    timeout: v,
                    onEntered: () => {
                        (0, u.j)(() => {
                            I.setState({ fullScreenLayers: n.map((e) => (e.key === i.key ? O(b({}, e), { transitionState: 2 }) : e)) });
                        });
                    },
                    unmountOnExit: !0,
                    children: (0, r.jsx)(S, {
                        containerRef: a,
                        item: i
                    })
                },
                i.key
            );
        })
    });
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: r } = t,
        i = null != n ? n : o()();
    return (
        (0, u.j)(() => {
            I.setState((t) => ({
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
        I.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
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
