n.d(e, { default: () => C });
var a = n(627968),
    i = n(64700),
    r = n(702841),
    c = n(615429),
    u = n(772707),
    s = n(773350),
    o = n(782134),
    l = n(113494),
    d = n(775602),
    f = n(174459),
    I = n(178186),
    _ = n(431804),
    k = n(652215),
    p = n(375708),
    A = n(263206);
function C(t) {
    let { onClose: e, source: n = _.y.KEYBIND, transitionState: C } = t,
        N = (0, r.bG)([d.Ay], () => d.Ay.useReducedMotion),
        [w, U] = i.useState(N),
        h = i.useRef(null),
        S = i.useRef(null);
    async function g() {
        await e();
    }
    return (
        i.useEffect(() => {
            let t = new Date();
            return (
                f.default.track(k.HAw.VIBING_WUMPUS_VIEWED, { source: n }),
                N || (0, I.q0)(),
                () => {
                    f.default.track(k.HAw.VIBING_WUMPUS_CLOSED, {
                        duration_open_ms: new Date().getTime() - t.getTime(),
                        source: n,
                    }),
                        (0, I.S9)();
                }
            );
        }, [n]),
        (0, a.jsxs)("div", {
            className: A._q,
            children: [
                (0, a.jsx)(c.R, {
                    withReducedMotion: "halt",
                    listenOnDocumentBody: !0,
                    artboard: "Background",
                    ref: S,
                    className: A.JW,
                }),
                (0, a.jsx)(u.k, {
                    graphic: { rive: s.Z, type: "rive", props: { ref: h, withReducedMotion: "halt" } },
                    gradientColor: "blue",
                    title: p.intl.string(p.t.L4ifkZ),
                    subtitle: p.intl.string(p.t.GkCsLr),
                    actions: [
                        {
                            text: p.intl.string(p.t["8eKkaf"]),
                            onClick: function () {
                                e(), f.default.track(k.HAw.VIBING_WUMPUS_ACTION, { action: _.r.BACK_TO_CONVERSATION });
                            },
                            variant: "secondary",
                        },
                        {
                            text: p.intl.string(w ? p.t.RscU7I : p.t.ZcgDJX),
                            onClick: function () {
                                w
                                    ? ((0, I.q0)(),
                                      f.default.track(k.HAw.VIBING_WUMPUS_ACTION, { action: _.r.PLAY }),
                                      h.current?.play(),
                                      S.current?.play())
                                    : ((0, I.O$)(),
                                      f.default.track(k.HAw.VIBING_WUMPUS_ACTION, { action: _.r.PAUSE }),
                                      h.current?.pause(),
                                      S.current?.pause()),
                                    U(!w);
                            },
                            icon: w ? o.u : l.E,
                        },
                    ],
                    onClose: g,
                    transitionState: C,
                }),
            ],
        })
    );
}
