n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(556012),
    s = n(388032),
    a = n(467397);
function o(e) {
    let { action: t, triggerType: n, toggled: o, onToggleAction: c } = e,
        u = (e) => () => c(e),
        d = (0, l.c)(t.type, t, n);
    if (null == d) return null;
    let { headerText: m, descriptionText: g, icon: p } = d;
    return (0, r.jsxs)('div', {
        className: a.actionContainer,
        children: [
            (0, r.jsx)('div', {
                className: a.actionIconContainer,
                children: (0, r.jsx)(p, {
                    size: 'custom',
                    color: 'currentColor',
                    className: a.actionIcon
                })
            }),
            (0, r.jsxs)('div', {
                className: a.actionTextContainer,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-sm/semibold',
                        children: m
                    }),
                    (0, r.jsx)(i.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: g
                    }),
                    o
                        ? (0, r.jsxs)(i.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: [
                                  s.intl.string(s.t.Oa9oWF),
                                  (0, r.jsx)(i.P3F, {
                                      onClick: u(!0),
                                      className: a.editChannel,
                                      tag: 'span',
                                      role: 'link',
                                      children: s.intl.string(s.t.QupmYW)
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(i.XZJ, {
                    type: i.XZJ.Types.INVERTED,
                    value: o,
                    onChange: u(!1),
                    className: a.__invalid_actionCheckbox
                })
            })
        ]
    });
}
