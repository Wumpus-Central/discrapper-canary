r.d(e, { Z: () => s }), r(953529), r(388685);
var n = r(54381),
    a = r(473749),
    i = r(793030),
    o = r(481060),
    c = r(388032),
    l = r(1904);
function s(t) {
    let { errorText: e, title: r, description: s, transitionState: u, onCancel: d, onConfirm: p, children: b } = t,
        [g, f] = a.useState(!1),
        y = a.useCallback(async () => {
            f(!0);
            try {
                await p();
            } catch (t) {
                throw t;
            } finally {
                f(!1);
            }
        }, [p]);
    return (0, n.jsxs)(i.Modal, {
        transitionState: u,
        onClose: d,
        title: r,
        subtitle: s,
        actions: [
            {
                text: c.intl.string(c.t["ETE/oC"]),
                variant: "secondary",
                onClick: d,
            },
            {
                text: c.intl.string(c.t["R3BPH+"]),
                onClick: y,
                variant: "primary",
                loading: g,
            },
        ],
        children: [
            b,
            null != e && "" !== e
                ? (0, n.jsx)(o.Text, {
                      className: l.errorText,
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: e,
                  })
                : null,
        ],
    });
}
