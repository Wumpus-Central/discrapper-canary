A(47120);
var n = A(200651),
    r = A(192379),
    a = A(481060),
    i = A(585483),
    l = A(981631),
    o = A(388032),
    s = A(840814);
t.Z = function (e) {
    var t;
    let { message: A, errorMessage: d, submitting: c, onReset: u, onSave: g, onSaveText: h, onResetText: p, onSaveButtonColor: m, disabled: f, saveButtonTooltip: v } = e,
        C = r.useRef(null),
        [q, x] = r.useState(!1);
    return (
        r.useEffect(() => {
            function e() {
                x(!0), setTimeout(() => x(!1), 1000);
            }
            return (
                i.S.subscribe(l.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    i.S.unsubscribe(l.CkL.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, n.jsx)('div', {
            className: s.container,
            'data-emphasized': q,
            children: (0, n.jsx)('div', {
                className: s.flexContainer,
                ref: C,
                children: (0, n.jsxs)(a.FocusRingScope, {
                    containerRef: C,
                    children: [
                        (0, n.jsx)('div', {
                            className: s.shrinkingContainer,
                            children: (0, n.jsx)('div', {
                                className: s.message,
                                children: null !== (t = null != d ? d : A) && void 0 !== t ? t : o.intl.string(o.t.GP7JLC)
                            })
                        }),
                        (0, n.jsxs)('div', {
                            className: s.actions,
                            children: [
                                null != u &&
                                    (0, n.jsx)(a.Button, {
                                        className: s.resetButton,
                                        size: a.Button.Sizes.SMALL,
                                        color: a.Button.Colors.PRIMARY,
                                        look: a.Button.Looks.LINK,
                                        onClick: u,
                                        children: (0, n.jsx)('span', { children: null != p ? p : o.intl.string(o.t.yBZMsb) })
                                    }),
                                null != g
                                    ? (0, n.jsx)(a.Tooltip, {
                                          text: v,
                                          children: (e) =>
                                              (0, n.jsx)(a.Button, {
                                                  size: a.Button.Sizes.SMALL,
                                                  color: null != m ? m : a.Button.Colors.GREEN,
                                                  submitting: c,
                                                  disabled: f,
                                                  onClick: g,
                                                  ...e,
                                                  children: null != h ? h : o.intl.string(o.t.K344S0)
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
