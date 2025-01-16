r.d(n, {
    Ox: function () {
        return N;
    },
    QP: function () {
        return b;
    },
    ob: function () {
        return R;
    },
    q4: function () {
        return C;
    }
});
var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(97613),
    u = r.n(l),
    c = r(858863),
    d = r(5188),
    f = r(15729),
    _ = r(731965),
    h = r(477690),
    p = r(481060),
    m = r(714338),
    g = r(624138),
    E = r(314910),
    v = r(308569),
    I = r(819312);
let T = (0, g.Mg)(h.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
!(function (e) {
    (e[(e.ENTERING = 1)] = 'ENTERING'), (e[(e.ENTERED = 2)] = 'ENTERED'), (e[(e.EXITING = 3)] = 'EXITING'), (e[(e.EXITED = 4)] = 'EXITED');
})(i || (i = {}));
let b = (0, f.U)((e) => ({
    fullScreenLayers: [],
    addLayer: (n) =>
        (0, _.j)(() => {
            e((e) => {
                let { fullScreenLayers: r } = e;
                return {
                    fullScreenLayers: [...r, n]
                };
            });
        })
}));
function y(e) {
    let { item: n } = e,
        r = o.useRef(null);
    return (
        (0, p.useFocusLock)(r),
        o.useEffect(
            () => (
                m.Z.disable(),
                n.key !== v.CV && m.Z.enableTemp(O(n.key)),
                () => {
                    m.Z.disableTemp();
                }
            ),
            [n.key]
        ),
        (0, s.jsx)(n.LayerComponent, {
            children: (0, s.jsxs)('div', {
                className: I.root,
                ref: r,
                children: [
                    (0, s.jsx)('div', { className: I.drag }),
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
        enter: I.enter,
        enterActive: I.enterActive,
        enterDone: I.enterDone,
        exit: I.exit,
        exitActive: I.exitActive,
        exitDone: I.exitDone
    },
    A = {
        enter: I.enterReducedMotion,
        enterActive: I.enterActiveReducedMotion,
        enterDone: I.enterDoneReducedMotion,
        exit: I.exitReducedMotion,
        exitActive: I.exitActiveReducedMotion,
        exitDone: I.exitDoneReducedMotion
    };
function N() {
    let { reducedMotion: e } = o.useContext(p.AccessibilityPreferencesContext),
        n = e.enabled ? A : S,
        r = b((e) => e.fullScreenLayers);
    return (0, s.jsx)(c.Z, {
        children: r.map((e) =>
            (0, s.jsx)(
                d.Z,
                {
                    classNames: n,
                    timeout: T,
                    onEntered: () => {
                        (0, _.j)(() => {
                            b.setState({
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
                    children: (0, s.jsx)(y, { item: e })
                },
                e.key
            )
        )
    });
}
function C(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: r, Layer: i } = n,
        a = null != r ? r : u()();
    return (
        (0, _.j)(() => {
            b.setState((n) => ({
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
    (0, _.j)(() => {
        b.setState((n) => ({ fullScreenLayers: n.fullScreenLayers.filter((n) => n.key !== e) }));
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
