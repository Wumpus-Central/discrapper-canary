r.d(t, { Z: () => b }), r(953529), r(388685);
var n = r(54381),
    a = r(473749),
    i = r(793030),
    o = r(481060),
    c = r(388032),
    l = r(386305);
function b(e) {
    let { errorText: t, title: r, description: b, transitionState: s, onCancel: u, onConfirm: d, children: p } = e,
        [g, f] = a.useState(!1),
        y = a.useCallback(async () => {
            f(!0);
            try {
                await d();
            } catch (e) {
                throw e;
            } finally {
                f(!1);
            }
        }, [d]);
    return (0, n.jsxs)(i.Modal, {
        transitionState: s,
        onClose: u,
        title: r,
        subtitle: b,
        actions: [
            {
                text: c.intl.string(c.t["ETE/oC"]),
                variant: "secondary",
                onClick: u,
            },
            {
                text: c.intl.string(c.t["R3BPH+"]),
                onClick: y,
                variant: "primary",
                loading: g,
            },
        ],
        children: [
            p,
            null != t && "" !== t
                ? (0, n.jsx)(o.Text, {
                      className: l.errorText,
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: t,
                  })
                : null,
        ],
    });
}
