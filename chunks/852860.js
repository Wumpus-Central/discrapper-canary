n(47120);
var i = n(200651),
    l = n(192379),
    s = n(666912),
    r = n(692547),
    a = n(481060),
    o = n(585483),
    c = n(981631),
    d = n(388032),
    u = n(840814);
t.Z = function (e) {
    var t;
    let { message: n, errorMessage: h, submitting: m, onReset: g, onSave: p, onSaveText: x, onResetText: f, onSaveButtonColor: v, disabled: C, saveButtonTooltip: j } = e,
        b = l.useRef(null),
        [{ spring: T }, N] = (0, a.useSpring)(() => ({ spring: 0 }));
    l.useEffect(() => {
        function e() {
            N({
                spring: 1,
                config: s.config.gentle
            }),
                N({
                    spring: 0,
                    config: s.config.gentle,
                    delay: 1000
                });
        }
        return (
            o.S.subscribe(c.CkL.EMPHASIZE_NOTICE, e),
            () => {
                o.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, e);
            }
        );
    }, [N]);
    let S = T.to({
            range: [0, 1],
            output: [(0, a.useToken)(r.Z.colors.TEXT_NORMAL).hex(), (0, a.useToken)(r.Z.unsafe_rawColors.WHITE_500).hex()]
        }),
        Z = T.to({
            range: [0, 1],
            output: [(0, a.useToken)(r.Z.colors.BACKGROUND_FLOATING).hex(), (0, a.useToken)(r.Z.colors.STATUS_DANGER).hex()]
        }),
        E = T.to({
            range: [0, 1],
            output: [(0, a.useToken)(r.Z.colors.TEXT_DANGER).hex(), (0, a.useToken)(r.Z.unsafe_rawColors.WHITE_500).hex()]
        });
    return (0, i.jsx)(s.animated.div, {
        className: u.container,
        style: { backgroundColor: Z },
        children: (0, i.jsx)('div', {
            className: u.flexContainer,
            ref: b,
            children: (0, i.jsxs)(a.FocusRingScope, {
                containerRef: b,
                children: [
                    (0, i.jsx)('div', {
                        className: u.shrinkingContainer,
                        children: (0, i.jsx)(s.animated.div, {
                            className: u.message,
                            style: { color: null != h ? E : S },
                            children: null !== (t = null != h ? h : n) && void 0 !== t ? t : d.intl.string(d.t.GP7JLC)
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: u.actions,
                        children: [
                            null != g &&
                                (0, i.jsx)(a.Button, {
                                    className: u.resetButton,
                                    size: a.Button.Sizes.SMALL,
                                    color: a.Button.Colors.PRIMARY,
                                    look: a.Button.Looks.LINK,
                                    onClick: g,
                                    children: (0, i.jsx)(s.animated.span, {
                                        style: { color: S },
                                        children: null != f ? f : d.intl.string(d.t.yBZMsb)
                                    })
                                }),
                            null != p
                                ? (0, i.jsx)(a.Tooltip, {
                                      text: j,
                                      children: (e) =>
                                          (0, i.jsx)(a.Button, {
                                              size: a.Button.Sizes.SMALL,
                                              color: null != v ? v : a.Button.Colors.GREEN,
                                              submitting: m,
                                              disabled: C,
                                              onClick: p,
                                              ...e,
                                              children: null != x ? x : d.intl.string(d.t.K344S0)
                                          })
                                  })
                                : null
                        ]
                    })
                ]
            })
        })
    });
};
