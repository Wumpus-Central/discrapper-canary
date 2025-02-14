t.d(n, { Z: () => d }), t(47120);
var r = t(200651),
    o = t(192379),
    i = t(481060),
    s = t(585483),
    a = t(981631),
    l = t(388032),
    c = t(534877);
let d = function (e) {
    var n;
    let { message: t, errorMessage: d, submitting: u, onReset: m, onSave: h, onSaveText: x, onResetText: _, onSaveButtonColor: p, disabled: C, saveButtonTooltip: f } = e,
        b = o.useRef(null),
        [v, j] = o.useState(!1);
    return (
        o.useEffect(() => {
            function e() {
                j(!0), setTimeout(() => j(!1), 1000);
            }
            return (
                s.S.subscribe(a.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    s.S.unsubscribe(a.CkL.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, r.jsx)('div', {
            className: c.container,
            'data-emphasized': v,
            children: (0, r.jsx)('div', {
                className: c.flexContainer,
                ref: b,
                children: (0, r.jsxs)(i.JcV, {
                    containerRef: b,
                    children: [
                        (0, r.jsx)('div', {
                            className: c.shrinkingContainer,
                            children: (0, r.jsx)('div', {
                                className: c.message,
                                children: null !== (n = null != d ? d : t) && void 0 !== n ? n : l.intl.string(l.t.GP7JLC)
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: c.actions,
                            children: [
                                null != m &&
                                    (0, r.jsx)(i.zxk, {
                                        className: c.resetButton,
                                        size: i.zxk.Sizes.SMALL,
                                        color: i.zxk.Colors.PRIMARY,
                                        look: i.zxk.Looks.LINK,
                                        onClick: m,
                                        children: (0, r.jsx)('span', { children: null != _ ? _ : l.intl.string(l.t.yBZMsb) })
                                    }),
                                null != h
                                    ? (0, r.jsx)(i.ua7, {
                                          text: f,
                                          children: (e) =>
                                              (0, r.jsx)(i.zxk, {
                                                  size: i.zxk.Sizes.SMALL,
                                                  color: null != p ? p : i.zxk.Colors.GREEN,
                                                  submitting: u,
                                                  disabled: C,
                                                  onClick: h,
                                                  ...e,
                                                  children: null != x ? x : l.intl.string(l.t.K344S0)
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
