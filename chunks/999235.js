r.d(e, { default: () => S });
var a = r(627968),
    n = r(64700),
    i = r(417597),
    c = r(404809),
    s = r(772707),
    o = r(652929),
    u = r(782134),
    d = r(113494),
    l = r(775602),
    f = r(954571),
    p = r(178186),
    _ = r(431804),
    A = r(652215),
    I = r(985018),
    h = r(263206);
function S(t) {
    let { onClose: e, source: r = _.y.KEYBIND, transitionState: S } = t,
        U = (0, i.bG)([l.A], () => l.A.useReducedMotion),
        [k, W] = n.useState(U),
        N = n.useRef(null),
        b = n.useRef(null);
    async function C() {
        await e();
    }
    return (
        n.useEffect(() => {
            let t = new Date();
            return (
                f.default.track(A.HAw.VIBING_WUMPUS_VIEWED, { source: r }),
                U || (0, p.q0)(),
                () => {
                    f.default.track(A.HAw.VIBING_WUMPUS_CLOSED, {
                        duration_open_ms: new Date().getTime() - t.getTime(),
                        source: r,
                    }),
                        (0, p.S9)();
                }
            );
        }, [r]),
        (0, a.jsxs)("div", {
            className: h._q,
            children: [
                (0, a.jsx)(c.R, {
                    withReducedMotion: "halt",
                    listenOnDocumentBody: !0,
                    artboard: "Background",
                    ref: b,
                    className: h.JW,
                }),
                (0, a.jsx)(s.k, {
                    graphic: { rive: o.Z, type: "rive", props: { ref: N, withReducedMotion: "halt" } },
                    gradientColor: "blue",
                    title: I.intl.string(I.t.L4ifkZ),
                    subtitle: I.intl.string(I.t.GkCsLr),
                    actions: [
                        {
                            text: I.intl.string(I.t["8eKkaf"]),
                            onClick: () => {
                                e(), f.default.track(A.HAw.VIBING_WUMPUS_ACTION, { action: _.r.BACK_TO_CONVERSATION });
                            },
                            variant: "secondary",
                        },
                        {
                            text: I.intl.string(k ? I.t.RscU7I : I.t.ZcgDJX),
                            onClick: () => {
                                k
                                    ? ((0, p.q0)(),
                                      f.default.track(A.HAw.VIBING_WUMPUS_ACTION, { action: _.r.PLAY }),
                                      N.current?.play(),
                                      b.current?.play())
                                    : ((0, p.O$)(),
                                      f.default.track(A.HAw.VIBING_WUMPUS_ACTION, { action: _.r.PAUSE }),
                                      N.current?.pause(),
                                      b.current?.pause()),
                                    W(!k);
                            },
                            icon: k ? u.u : d.E,
                        },
                    ],
                    onClose: C,
                    transitionState: S,
                }),
            ],
        })
    );
}
