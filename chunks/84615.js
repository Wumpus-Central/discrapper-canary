n.d(t, {
    Ox: () => C,
    QP: () => S,
    ob: () => P,
    q4: () => N,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(97613),
    o = n.n(a),
    s = n(757275),
    l = n(818537),
    c = n(663042),
    u = n(731965),
    d = n(477690),
    f = n(481060),
    p = n(714338),
    _ = n(624138),
    m = n(314910),
    h = n(308569),
    g = n(102521);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
let v = (0, _.Mg)(d.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION),
    S = (0, c.U)((e) => ({
        fullScreenLayers: [],
        addLayer: (t) =>
            (0, u.j)(() => {
                e((e) => {
                    let { fullScreenLayers: n } = e;
                    return {
                        fullScreenLayers: [...n, t],
                    };
                });
            }),
    }));
function I(e) {
    let { item: t, containerRef: n } = e;
    return (
        (0, f.Tbt)(n),
        i.useEffect(
            () => (
                p.Z.disable(),
                t.key !== h.CV && p.Z.enableTemp(R(t.key)),
                () => {
                    p.Z.disableTemp();
                }
            ),
            [t.key],
        ),
        (0, r.jsx)(t.LayerComponent, {
            children: (0, r.jsxs)("div", {
                className: g.root,
                ref: n,
                children: [
                    (0, r.jsx)("div", { className: g.drag }),
                    t.render({
                        transitionState: null != t ? t.transitionState : 3,
                        closeLayer: () => P(t.key),
                    }),
                ],
            }),
        })
    );
}
let T = {
        enter: g.enter,
        enterActive: g.enterActive,
        enterDone: g.enterDone,
        exit: g.exit,
        exitActive: g.exitActive,
        exitDone: g.exitDone,
    },
    A = {
        enter: g.enterReducedMotion,
        enterActive: g.enterActiveReducedMotion,
        enterDone: g.enterDoneReducedMotion,
        exit: g.exitReducedMotion,
        exitActive: g.exitActiveReducedMotion,
        exitDone: g.exitDoneReducedMotion,
    };
function C() {
    let { reducedMotion: e } = i.useContext(f.Sfi),
        t = e.enabled ? A : T,
        n = S((e) => e.fullScreenLayers),
        a = n.map((e) => ({
            item: e,
            nodeRef: i.createRef(),
        }));
    return (0, r.jsx)(s.Z, {
        children: a.map((e) => {
            let { item: i, nodeRef: a } = e;
            return (0, r.jsx)(
                l.Z,
                {
                    nodeRef: a,
                    classNames: i.options.disableAnimation ? void 0 : t,
                    timeout: v,
                    onEntered: () => {
                        (0, u.j)(() => {
                            S.setState({
                                fullScreenLayers: n.map((e) =>
                                    e.key === i.key ? O(b({}, e), { transitionState: 2 }) : e,
                                ),
                            });
                        });
                    },
                    unmountOnExit: !0,
                    children: (0, r.jsx)(I, {
                        containerRef: a,
                        item: i,
                    }),
                },
                i.key,
            );
        }),
    });
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: r, disableAnimation: i = !1, showAppUnderLayer: a = !1 } = t,
        s = null != n ? n : o()();
    return (
        (0, u.j)(() => {
            S.setState((t) => ({
                fullScreenLayers: [
                    ...t.fullScreenLayers,
                    {
                        key: s,
                        transitionState: 1,
                        LayerComponent: null != r ? r : m.ZP,
                        render: e,
                        options: {
                            disableAnimation: i,
                            showAppUnderLayer: a,
                        },
                    },
                ],
            }));
        }),
        s
    );
}
function P(e) {
    (0, u.j)(() => {
        S.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
function R(e) {
    return {
        POP_LAYER: {
            binds: ["esc"],
            comboKeysBindGlobal: !0,
            action() {
                P(e);
            },
        },
    };
}
