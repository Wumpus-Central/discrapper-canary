r.d(e, { Z: () => s }), r(953529), r(388685);
var n = r(255367),
    i = r(73800),
    o = r(82659),
    a = r(481060),
    l = r(388032),
    c = r(98847);
function s(t) {
    let { errorText: e, title: r, description: s, transitionState: u, onCancel: d, onConfirm: p, children: b } = t,
        [g, y] = i.useState(!1),
        _ = i.useCallback(async () => {
            y(!0);
            try {
                await p();
            } catch (t) {
                throw t;
            } finally {
                y(!1);
            }
        }, [p]);
    return (0, n.jsxs)(o.Modal, {
        transitionState: u,
        onClose: d,
        title: r,
        subtitle: s,
        actions: [
            {
                text: l.intl.string(l.t["ETE/oK"]),
                variant: "secondary",
                onClick: d,
            },
            {
                text: l.intl.string(l.t.R3BPHx),
                onClick: _,
                variant: "primary",
                loading: g,
            },
        ],
        children: [
            b,
            null != e && "" !== e
                ? (0, n.jsx)(a.Text, {
                      className: c.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: e,
                  })
                : null,
        ],
    });
}
