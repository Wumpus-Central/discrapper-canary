n(47120);
var r = n(200651),
    s = n(192379),
    o = n(666912),
    i = n(692547),
    c = n(481060),
    a = n(585483),
    d = n(981631),
    u = n(388032),
    l = n(840814);
t.Z = function (e) {
    var t;
    let { message: n, errorMessage: f, submitting: p, onReset: b, onSave: g, onSaveText: _, onResetText: m, onSaveButtonColor: h, disabled: x, saveButtonTooltip: C } = e,
        E = s.useRef(null),
        [{ spring: N }, v] = (0, c.useSpring)(() => ({ spring: 0 }));
    s.useEffect(() => {
        function e() {
            v({
                spring: 1,
                config: o.config.gentle
            }),
                v({
                    spring: 0,
                    config: o.config.gentle,
                    delay: 1000
                });
        }
        return (
            a.S.subscribe(d.CkL.EMPHASIZE_NOTICE, e),
            () => {
                a.S.unsubscribe(d.CkL.EMPHASIZE_NOTICE, e);
            }
        );
    }, [v]);
    let T = N.to({
            range: [0, 1],
            output: [(0, c.useToken)(i.Z.colors.TEXT_NORMAL).hex(), (0, c.useToken)(i.Z.unsafe_rawColors.WHITE_500).hex()]
        }),
        y = N.to({
            range: [0, 1],
            output: [(0, c.useToken)(i.Z.colors.BACKGROUND_FLOATING).hex(), (0, c.useToken)(i.Z.colors.STATUS_DANGER).hex()]
        }),
        I = N.to({
            range: [0, 1],
            output: [(0, c.useToken)(i.Z.colors.TEXT_DANGER).hex(), (0, c.useToken)(i.Z.unsafe_rawColors.WHITE_500).hex()]
        });
    return (0, r.jsx)(o.animated.div, {
        className: l.container,
        style: { backgroundColor: y },
        children: (0, r.jsx)('div', {
            className: l.flexContainer,
            ref: E,
            children: (0, r.jsxs)(c.FocusRingScope, {
                containerRef: E,
                children: [
                    (0, r.jsx)('div', {
                        className: l.shrinkingContainer,
                        children: (0, r.jsx)(o.animated.div, {
                            className: l.message,
                            style: { color: null != f ? I : T },
                            children: null !== (t = null != f ? f : n) && void 0 !== t ? t : u.intl.string(u.t.GP7JLC)
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: l.actions,
                        children: [
                            null != b &&
                                (0, r.jsx)(c.Button, {
                                    className: l.resetButton,
                                    size: c.Button.Sizes.SMALL,
                                    color: c.Button.Colors.PRIMARY,
                                    look: c.Button.Looks.LINK,
                                    onClick: b,
                                    children: (0, r.jsx)(o.animated.span, {
                                        style: { color: T },
                                        children: null != m ? m : u.intl.string(u.t.yBZMsb)
                                    })
                                }),
                            null != g
                                ? (0, r.jsx)(c.Tooltip, {
                                      text: C,
                                      children: (e) =>
                                          (0, r.jsx)(c.Button, {
                                              size: c.Button.Sizes.SMALL,
                                              color: null != h ? h : c.Button.Colors.GREEN,
                                              submitting: p,
                                              disabled: x,
                                              onClick: g,
                                              ...e,
                                              children: null != _ ? _ : u.intl.string(u.t.K344S0)
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
