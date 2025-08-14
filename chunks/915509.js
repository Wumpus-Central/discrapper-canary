r.d(e, { Z: () => u }), r(953529), r(388685);
var n = r(255367),
    a = r(73800),
    i = r(82659),
    o = r(481060),
    l = r(388032),
    c = r(1904);
function u(t) {
    let { errorText: e, title: r, description: u, transitionState: s, onCancel: d, onConfirm: p, children: b } = t,
        [g, _] = a.useState(!1),
        y = a.useCallback(async () => {
            _(!0);
            try {
                await p();
            } catch (t) {
                throw t;
            } finally {
                _(!1);
            }
        }, [p]);
    return (0, n.jsxs)(i.Modal, {
        transitionState: s,
        onClose: d,
        title: r,
        subtitle: u,
        actions: [
            {
                text: l.intl.string(l.t["ETE/oK"]),
                variant: "secondary",
                onClick: d,
            },
            {
                text: l.intl.string(l.t.R3BPHx),
                onClick: y,
                variant: "primary",
                loading: g,
            },
        ],
        children: [
            b,
            null != e && "" !== e
                ? (0, n.jsx)(o.Text, {
                      className: c.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: e,
                  })
                : null,
        ],
    });
}
