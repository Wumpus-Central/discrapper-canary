t.d(n, { Z: () => d }), t(47120);
var o = t(200651),
    r = t(192379),
    i = t(481060),
    a = t(585483),
    l = t(981631),
    s = t(388032),
    c = t(840814);
let d = function (e) {
    var n;
    let { message: t, errorMessage: d, submitting: u, onReset: _, onSave: m, onSaveText: p, onResetText: b, onSaveButtonColor: f, disabled: h, saveButtonTooltip: C } = e,
        E = r.useRef(null),
        [x, g] = r.useState(!1);
    return (
        r.useEffect(() => {
            function e() {
                g(!0), setTimeout(() => g(!1), 1000);
            }
            return (
                a.S.subscribe(l.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    a.S.unsubscribe(l.CkL.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, o.jsx)('div', {
            className: c.container,
            'data-emphasized': x,
            children: (0, o.jsx)('div', {
                className: c.flexContainer,
                ref: E,
                children: (0, o.jsxs)(i.JcV, {
                    containerRef: E,
                    children: [
                        (0, o.jsx)('div', {
                            className: c.shrinkingContainer,
                            children: (0, o.jsx)('div', {
                                className: c.message,
                                children: null !== (n = null != d ? d : t) && void 0 !== n ? n : s.intl.string(s.t.GP7JLC)
                            })
                        }),
                        (0, o.jsxs)('div', {
                            className: c.actions,
                            children: [
                                null != _ &&
                                    (0, o.jsx)(i.zxk, {
                                        className: c.resetButton,
                                        size: i.zxk.Sizes.SMALL,
                                        color: i.zxk.Colors.PRIMARY,
                                        look: i.zxk.Looks.LINK,
                                        onClick: _,
                                        children: (0, o.jsx)('span', { children: null != b ? b : s.intl.string(s.t.yBZMsb) })
                                    }),
                                null != m
                                    ? (0, o.jsx)(i.ua7, {
                                          text: C,
                                          children: (e) =>
                                              (0, o.jsx)(i.zxk, {
                                                  size: i.zxk.Sizes.SMALL,
                                                  color: null != f ? f : i.zxk.Colors.GREEN,
                                                  submitting: u,
                                                  disabled: h,
                                                  onClick: m,
                                                  ...e,
                                                  children: null != p ? p : s.intl.string(s.t.K344S0)
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
