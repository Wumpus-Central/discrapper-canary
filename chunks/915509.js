(n.d(t, { Z: () => s }), n(953529), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(82659),
    i = n(481060),
    o = n(388032),
    c = n(98847);
function s(e) {
    let { errorText: t, title: n, description: s, transitionState: u, onCancel: d, onConfirm: p, children: g } = e,
        [m, b] = l.useState(!1),
        h = l.useCallback(async () => {
            b(!0);
            try {
                await p();
            } catch (e) {
                throw e;
            } finally {
                b(!1);
            }
        }, [p]);
    return (0, r.jsxs)(a.Modal, {
        transitionState: u,
        onClose: d,
        title: n,
        subtitle: s,
        actions: [
            {
                text: o.intl.string(o.t['ETE/oK']),
                variant: 'secondary',
                onClick: d
            },
            {
                text: o.intl.string(o.t.R3BPHx),
                onClick: h,
                variant: 'primary',
                loading: m
            }
        ],
        children: [
            g,
            null != t && '' !== t
                ? (0, r.jsx)(i.Text, {
                      className: c.errorText,
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: t
                  })
                : null
        ]
    });
}
