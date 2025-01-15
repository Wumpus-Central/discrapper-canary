n(47120);
var A = n(200651),
    r = n(192379),
    a = n(476183),
    l = n(692547),
    i = n(481060),
    o = n(585483),
    s = n(981631),
    d = n(388032),
    c = n(565232);
t.Z = function (e) {
    var t;
    let { message: n, errorMessage: u, submitting: g, onReset: h, onSave: p, onSaveText: m, onResetText: f, onSaveButtonColor: v, disabled: C, saveButtonTooltip: q } = e,
        x = r.useRef(null),
        [{ spring: b }, U] = (0, i.useSpring)(() => ({ spring: 0 }));
    r.useEffect(() => {
        function e() {
            U({
                spring: 1,
                config: a.config.gentle
            }),
                U({
                    spring: 0,
                    config: a.config.gentle,
                    delay: 1000
                });
        }
        return (
            o.S.subscribe(s.CkL.EMPHASIZE_NOTICE, e),
            () => {
                o.S.unsubscribe(s.CkL.EMPHASIZE_NOTICE, e);
            }
        );
    }, [U]);
    let V = b.to({
            range: [0, 1],
            output: [(0, i.useToken)(l.Z.colors.TEXT_NORMAL).hex(), (0, i.useToken)(l.Z.unsafe_rawColors.WHITE_500).hex()]
        }),
        j = b.to({
            range: [0, 1],
            output: [(0, i.useToken)(l.Z.colors.BACKGROUND_FLOATING).hex(), (0, i.useToken)(l.Z.colors.STATUS_DANGER).hex()]
        }),
        I = b.to({
            range: [0, 1],
            output: [(0, i.useToken)(l.Z.colors.TEXT_DANGER).hex(), (0, i.useToken)(l.Z.unsafe_rawColors.WHITE_500).hex()]
        });
    return (0, A.jsx)(a.animated.div, {
        className: c.container,
        style: { backgroundColor: j },
        children: (0, A.jsx)('div', {
            className: c.flexContainer,
            ref: x,
            children: (0, A.jsxs)(i.FocusRingScope, {
                containerRef: x,
                children: [
                    (0, A.jsx)('div', {
                        className: c.shrinkingContainer,
                        children: (0, A.jsx)(a.animated.div, {
                            className: c.message,
                            style: { color: null != u ? I : V },
                            children: null !== (t = null != u ? u : n) && void 0 !== t ? t : d.intl.string(d.t.GP7JLC)
                        })
                    }),
                    (0, A.jsxs)('div', {
                        className: c.actions,
                        children: [
                            null != h &&
                                (0, A.jsx)(i.Button, {
                                    className: c.resetButton,
                                    size: i.Button.Sizes.SMALL,
                                    color: i.Button.Colors.PRIMARY,
                                    look: i.Button.Looks.LINK,
                                    onClick: h,
                                    children: (0, A.jsx)(a.animated.span, {
                                        style: { color: V },
                                        children: null != f ? f : d.intl.string(d.t.yBZMsb)
                                    })
                                }),
                            null != p
                                ? (0, A.jsx)(i.Tooltip, {
                                      text: q,
                                      children: (e) =>
                                          (0, A.jsx)(i.Button, {
                                              size: i.Button.Sizes.SMALL,
                                              color: null != v ? v : i.Button.Colors.GREEN,
                                              submitting: g,
                                              disabled: C,
                                              onClick: p,
                                              ...e,
                                              children: null != m ? m : d.intl.string(d.t.K344S0)
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
