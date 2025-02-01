n.d(t, {
    Ox: () => b,
    QP: () => v,
    ob: () => A,
    q4: () => S
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(97613),
    s = n.n(a),
    o = n(858863),
    l = n(5188),
    u = n(15729),
    c = n(731965),
    d = n(477690),
    f = n(481060),
    _ = n(714338),
    p = n(624138),
    h = n(314910),
    m = n(308569),
    g = n(819312);
let E = (0, p.Mg)(d.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION),
    v = (0, u.U)((e) => ({
        fullScreenLayers: [],
        addLayer: (t) =>
            (0, c.j)(() => {
                e((e) => {
                    let { fullScreenLayers: n } = e;
                    return {
                        fullScreenLayers: [...n, t]
                    };
                });
            })
    }));
function y(e) {
    let { item: t } = e,
        n = r.useRef(null);
    return (
        (0, f.Tbt)(n),
        r.useEffect(
            () => (
                _.Z.disable(),
                t.key !== m.CV && _.Z.enableTemp(N(t.key)),
                () => {
                    _.Z.disableTemp();
                }
            ),
            [t.key]
        ),
        (0, i.jsx)(t.LayerComponent, {
            children: (0, i.jsxs)('div', {
                className: g.root,
                ref: n,
                children: [
                    (0, i.jsx)('div', { className: g.drag }),
                    t.render({
                        transitionState: null != t ? t.transitionState : 3,
                        closeLayer: () => A(t.key)
                    })
                ]
            })
        })
    );
}
let I = {
        enter: g.enter,
        enterActive: g.enterActive,
        enterDone: g.enterDone,
        exit: g.exit,
        exitActive: g.exitActive,
        exitDone: g.exitDone
    },
    T = {
        enter: g.enterReducedMotion,
        enterActive: g.enterActiveReducedMotion,
        enterDone: g.enterDoneReducedMotion,
        exit: g.exitReducedMotion,
        exitActive: g.exitActiveReducedMotion,
        exitDone: g.exitDoneReducedMotion
    };
function b() {
    let { reducedMotion: e } = r.useContext(f.Sfi),
        t = e.enabled ? T : I,
        n = v((e) => e.fullScreenLayers);
    return (0, i.jsx)(o.Z, {
        children: n.map((e) =>
            (0, i.jsx)(
                l.Z,
                {
                    classNames: t,
                    timeout: E,
                    onEntered: () => {
                        (0, c.j)(() => {
                            v.setState({
                                fullScreenLayers: n.map((t) =>
                                    t.key === e.key
                                        ? {
                                              ...t,
                                              transitionState: 2
                                          }
                                        : t
                                )
                            });
                        });
                    },
                    unmountOnExit: !0,
                    children: (0, i.jsx)(y, { item: e })
                },
                e.key
            )
        )
    });
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: i } = t,
        r = null != n ? n : s()();
    return (
        (0, c.j)(() => {
            v.setState((t) => ({
                fullScreenLayers: [
                    ...t.fullScreenLayers,
                    {
                        key: r,
                        transitionState: 1,
                        LayerComponent: null != i ? i : h.ZP,
                        render: e
                    }
                ]
            }));
        }),
        r
    );
}
function A(e) {
    (0, c.j)(() => {
        v.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
function N(e) {
    return {
        POP_LAYER: {
            binds: ['esc'],
            comboKeysBindGlobal: !0,
            action() {
                A(e);
            }
        }
    };
}
