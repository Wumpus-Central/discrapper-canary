t.d(n, { Z: () => d }), t(47120);
var o = t(200651),
    r = t(192379),
    i = t(481060),
    s = t(585483),
    a = t(981631),
    l = t(388032),
    c = t(534877);
let d = function (e) {
    var n;
    let { message: t, errorMessage: d, submitting: u, onReset: m, onSave: _, onSaveText: h, onResetText: b, onSaveButtonColor: p, disabled: x, saveButtonTooltip: C } = e,
        f = r.useRef(null),
        [N, g] = r.useState(!1);
    return (
        r.useEffect(() => {
            function e() {
                g(!0), setTimeout(() => g(!1), 1000);
            }
            return (
                s.S.subscribe(a.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    s.S.unsubscribe(a.CkL.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, o.jsx)('div', {
            className: c.container,
            'data-emphasized': N,
            children: (0, o.jsx)('div', {
                className: c.flexContainer,
                ref: f,
                children: (0, o.jsxs)(i.JcV, {
                    containerRef: f,
                    children: [
                        (0, o.jsx)('div', {
                            className: c.shrinkingContainer,
                            children: (0, o.jsx)('div', {
                                className: c.message,
                                children: null !== (n = null != d ? d : t) && void 0 !== n ? n : l.intl.string(l.t.GP7JLC)
                            })
                        }),
                        (0, o.jsxs)('div', {
                            className: c.actions,
                            children: [
                                null != m &&
                                    (0, o.jsx)(i.zxk, {
                                        className: c.resetButton,
                                        size: i.zxk.Sizes.SMALL,
                                        color: i.zxk.Colors.PRIMARY,
                                        look: i.zxk.Looks.LINK,
                                        onClick: m,
                                        children: (0, o.jsx)('span', { children: null != b ? b : l.intl.string(l.t.yBZMsb) })
                                    }),
                                null != _
                                    ? (0, o.jsx)(i.ua7, {
                                          text: C,
                                          children: (e) =>
                                              (0, o.jsx)(i.zxk, {
                                                  size: i.zxk.Sizes.SMALL,
                                                  color: null != p ? p : i.zxk.Colors.GREEN,
                                                  submitting: u,
                                                  disabled: x,
                                                  onClick: _,
                                                  ...e,
                                                  children: null != h ? h : l.intl.string(l.t.K344S0)
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
