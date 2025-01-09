n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(556012),
    s = n(388032),
    a = n(421273);
function o(e) {
    let { action: t, triggerType: n, toggled: o, onToggleAction: c } = e,
        d = (e) => () => c(e),
        u = (0, l.c)(t.type, t, n);
    if (null == u) return null;
    let { headerText: m, descriptionText: h, icon: g } = u;
    return (0, i.jsxs)('div', {
        className: a.actionContainer,
        children: [
            (0, i.jsx)('div', {
                className: a.actionIconContainer,
                children: (0, i.jsx)(g, {
                    size: 'custom',
                    color: 'currentColor',
                    className: a.actionIcon
                })
            }),
            (0, i.jsxs)('div', {
                className: a.actionTextContainer,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-sm/semibold',
                        children: m
                    }),
                    (0, i.jsx)(r.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: h
                    }),
                    o
                        ? (0, i.jsxs)(r.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: [
                                  s.intl.string(s.t.Oa9oWF),
                                  (0, i.jsx)(r.Clickable, {
                                      onClick: d(!0),
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
            (0, i.jsx)('div', {
                children: (0, i.jsx)(r.Checkbox, {
                    type: r.Checkbox.Types.INVERTED,
                    value: o,
                    onChange: d(!1),
                    className: a.__invalid_actionCheckbox
                })
            })
        ]
    });
}
