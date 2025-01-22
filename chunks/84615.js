r.d(n, {
    Ox: function () {
        return C;
    },
    QP: function () {
        return I;
    },
    ob: function () {
        return R;
    },
    q4: function () {
        return N;
    }
});
var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(97613),
    u = r.n(l),
    c = r(858863),
    d = r(5188),
    f = r(15729),
    p = r(731965),
    h = r(477690),
    _ = r(481060),
    m = r(714338),
    g = r(624138),
    E = r(314910),
    v = r(308569),
    y = r(819312);
let b = (0, g.Mg)(h.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
!(function (e) {
    (e[(e.ENTERING = 1)] = 'ENTERING'), (e[(e.ENTERED = 2)] = 'ENTERED'), (e[(e.EXITING = 3)] = 'EXITING'), (e[(e.EXITED = 4)] = 'EXITED');
})(i || (i = {}));
let I = (0, f.U)((e) => ({
    fullScreenLayers: [],
    addLayer: (n) =>
        (0, p.j)(() => {
            e((e) => {
                let { fullScreenLayers: r } = e;
                return {
                    fullScreenLayers: [...r, n]
                };
            });
        })
}));
function T(e) {
    let { item: n } = e,
        r = s.useRef(null);
    return (
        (0, _.useFocusLock)(r),
        s.useEffect(
            () => (
                m.Z.disable(),
                n.key !== v.CV && m.Z.enableTemp(O(n.key)),
                () => {
                    m.Z.disableTemp();
                }
            ),
            [n.key]
        ),
        (0, o.jsx)(n.LayerComponent, {
            children: (0, o.jsxs)('div', {
                className: y.root,
                ref: r,
                children: [
                    (0, o.jsx)('div', { className: y.drag }),
                    n.render({
                        transitionState: null != n ? n.transitionState : 3,
                        closeLayer: () => R(n.key)
                    })
                ]
            })
        })
    );
}
let S = {
        enter: y.enter,
        enterActive: y.enterActive,
        enterDone: y.enterDone,
        exit: y.exit,
        exitActive: y.exitActive,
        exitDone: y.exitDone
    },
    A = {
        enter: y.enterReducedMotion,
        enterActive: y.enterActiveReducedMotion,
        enterDone: y.enterDoneReducedMotion,
        exit: y.exitReducedMotion,
        exitActive: y.exitActiveReducedMotion,
        exitDone: y.exitDoneReducedMotion
    };
function C() {
    let { reducedMotion: e } = s.useContext(_.AccessibilityPreferencesContext),
        n = e.enabled ? A : S,
        r = I((e) => e.fullScreenLayers);
    return (0, o.jsx)(c.Z, {
        children: r.map((e) =>
            (0, o.jsx)(
                d.Z,
                {
                    classNames: n,
                    timeout: b,
                    onEntered: () => {
                        (0, p.j)(() => {
                            I.setState({
                                fullScreenLayers: r.map((n) =>
                                    n.key === e.key
                                        ? {
                                              ...n,
                                              transitionState: 2
                                          }
                                        : n
                                )
                            });
                        });
                    },
                    unmountOnExit: !0,
                    children: (0, o.jsx)(T, { item: e })
                },
                e.key
            )
        )
    });
}
function N(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: r, Layer: i } = n,
        a = null != r ? r : u()();
    return (
        (0, p.j)(() => {
            I.setState((n) => ({
                fullScreenLayers: [
                    ...n.fullScreenLayers,
                    {
                        key: a,
                        transitionState: 1,
                        LayerComponent: null != i ? i : E.ZP,
                        render: e
                    }
                ]
            }));
        }),
        a
    );
}
function R(e) {
    (0, p.j)(() => {
        I.setState((n) => ({ fullScreenLayers: n.fullScreenLayers.filter((n) => n.key !== e) }));
    });
}
function O(e) {
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
