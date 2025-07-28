(r.d(e, { Z: () => s }), r(953529), r(388685));
var n = r(255367),
    a = r(73800),
    i = r(82659),
    o = r(481060),
    c = r(388032),
    l = r(98847);
function s(t) {
    let { errorText: e, title: r, description: s, transitionState: d, onCancel: u, onConfirm: p, children: b } = t,
        [g, y] = a.useState(!1),
        f = a.useCallback(async () => {
            y(!0);
            try {
                await p();
            } catch (t) {
                throw t;
            } finally {
                y(!1);
            }
        }, [p]);
    return (0, n.jsxs)(i.Modal, {
        transitionState: d,
        onClose: u,
        title: r,
        subtitle: s,
        actions: [
            {
                text: c.intl.string(c.t['ETE/oK']),
                variant: 'secondary',
                onClick: u
            },
            {
                text: c.intl.string(c.t.R3BPHx),
                onClick: f,
                variant: 'primary',
                loading: g
            }
        ],
        children: [
            b,
            null != e && '' !== e
                ? (0, n.jsx)(o.Text, {
                      className: l.errorText,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: e
                  })
                : null
        ]
    });
}
