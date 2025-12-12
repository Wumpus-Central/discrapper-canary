n.d(t, { Z: () => s }), n(953529), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(793030),
    a = n(481060),
    o = n(388032),
    c = n(1904);
function s(e) {
    let { errorText: t, title: n, description: s, transitionState: d, onCancel: u, onConfirm: p, children: g } = e,
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
    return (0, r.jsxs)(i.Modal, {
        transitionState: d,
        onClose: u,
        title: n,
        subtitle: s,
        actions: [
            {
                text: o.intl.string(o.t["ETE/oC"]),
                variant: "secondary",
                onClick: u,
            },
            {
                text: o.intl.string(o.t["R3BPH+"]),
                onClick: h,
                variant: "primary",
                loading: m,
            },
        ],
        children: [
            g,
            null != t && "" !== t
                ? (0, r.jsx)(a.Text, {
                      className: c.errorText,
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: t,
                  })
                : null,
        ],
    });
}
