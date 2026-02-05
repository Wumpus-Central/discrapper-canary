n.d(e, { default: () => p });
var r = n(627968),
    i = n(64700),
    a = n(417597),
    c = n(397927),
    u = n(775602),
    s = n(954571),
    o = n(178186),
    _ = n(431804),
    d = n(652215),
    l = n(985018),
    I = n(236103);
function p(t) {
    let { onClose: e, source: n = _.y.KEYBIND, transitionState: p } = t,
        f = (0, a.bG)([u.A], () => u.A.useReducedMotion),
        [S, U] = i.useState(f),
        h = i.useRef(null),
        A = i.useRef(null);
    async function N() {
        await e();
    }
    return (
        i.useEffect(() => {
            let t = new Date();
            return (
                s.default.track(d.HAw.VIBING_WUMPUS_VIEWED, { source: n }),
                f || (0, o.q0)(),
                () => {
                    s.default.track(d.HAw.VIBING_WUMPUS_CLOSED, {
                        duration_open_ms: new Date().getTime() - t.getTime(),
                        source: n,
                    }),
                        (0, o.S9)();
                }
            );
        }, [n]),
        (0, r.jsxs)("div", {
            className: I._q,
            children: [
                (0, r.jsx)(c.Rfp, {
                    withReducedMotion: "halt",
                    listenOnDocumentBody: !0,
                    artboard: "Background",
                    ref: A,
                    className: I.JW,
                }),
                (0, r.jsx)(c.kpP, {
                    graphic: { rive: c.Zd_, type: "rive", props: { ref: h, withReducedMotion: "halt" } },
                    gradientColor: "blue",
                    title: l.intl.string(l.t.L4ifkZ),
                    subtitle: l.intl.string(l.t.GkCsLr),
                    actions: [
                        {
                            text: l.intl.string(l.t["8eKkaf"]),
                            onClick: () => {
                                e(), s.default.track(d.HAw.VIBING_WUMPUS_ACTION, { action: _.r.BACK_TO_CONVERSATION });
                            },
                            variant: "secondary",
                        },
                        {
                            text: l.intl.string(S ? l.t.RscU7I : l.t.ZcgDJX),
                            onClick: () => {
                                S
                                    ? ((0, o.q0)(),
                                      s.default.track(d.HAw.VIBING_WUMPUS_ACTION, { action: _.r.PLAY }),
                                      h.current?.play(),
                                      A.current?.play())
                                    : ((0, o.O$)(),
                                      s.default.track(d.HAw.VIBING_WUMPUS_ACTION, { action: _.r.PAUSE }),
                                      h.current?.pause(),
                                      A.current?.pause()),
                                    U(!S);
                            },
                            icon: S ? c.udU : c.E$n,
                        },
                    ],
                    onClose: N,
                    transitionState: p,
                }),
            ],
        })
    );
}
