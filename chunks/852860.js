t.d(n, { Z: () => d }), t(47120);
var o = t(200651),
    r = t(192379),
    i = t(481060),
    a = t(585483),
    s = t(981631),
    c = t(388032),
    l = t(840814);
let d = function (e) {
    var n;
    let { message: t, errorMessage: d, submitting: u, onReset: _, onSave: m, onSaveText: p, onResetText: b, onSaveButtonColor: h, disabled: f, saveButtonTooltip: C } = e,
        x = r.useRef(null),
        [E, g] = r.useState(!1);
    return (
        r.useEffect(() => {
            function e() {
                g(!0), setTimeout(() => g(!1), 1000);
            }
            return (
                a.S.subscribe(s.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    a.S.unsubscribe(s.CkL.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, o.jsx)('div', {
            className: l.container,
            'data-emphasized': E,
            children: (0, o.jsx)('div', {
                className: l.flexContainer,
                ref: x,
                children: (0, o.jsxs)(i.JcV, {
                    containerRef: x,
                    children: [
                        (0, o.jsx)('div', {
                            className: l.shrinkingContainer,
                            children: (0, o.jsx)('div', {
                                className: l.message,
                                children: null !== (n = null != d ? d : t) && void 0 !== n ? n : c.intl.string(c.t.GP7JLC)
                            })
                        }),
                        (0, o.jsxs)('div', {
                            className: l.actions,
                            children: [
                                null != _ &&
                                    (0, o.jsx)(i.zxk, {
                                        className: l.resetButton,
                                        size: i.zxk.Sizes.SMALL,
                                        color: i.zxk.Colors.PRIMARY,
                                        look: i.zxk.Looks.LINK,
                                        onClick: _,
                                        children: (0, o.jsx)('span', { children: null != b ? b : c.intl.string(c.t.yBZMsb) })
                                    }),
                                null != m
                                    ? (0, o.jsx)(i.ua7, {
                                          text: C,
                                          children: (e) =>
                                              (0, o.jsx)(i.zxk, {
                                                  size: i.zxk.Sizes.SMALL,
                                                  color: null != h ? h : i.zxk.Colors.GREEN,
                                                  submitting: u,
                                                  disabled: f,
                                                  onClick: m,
                                                  ...e,
                                                  children: null != p ? p : c.intl.string(c.t.K344S0)
                                              })
                                      })
                                    : null
                            ]
                        })
                    ]
                })
            })
        })
    );
};
