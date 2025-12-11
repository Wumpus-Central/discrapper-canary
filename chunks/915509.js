n.d(t, { Z: () => s }), n(953529), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(793030),
    i = n(481060),
    o = n(388032),
    c = n(386305);
function s(e) {
    let { errorText: t, title: n, description: s, transitionState: d, onCancel: u, onConfirm: p, children: b } = e,
        [g, m] = l.useState(!1),
        h = l.useCallback(async () => {
            m(!0);
            try {
                await p();
            } catch (e) {
                throw e;
            } finally {
                m(!1);
            }
        }, [p]);
    return (0, r.jsxs)(a.Modal, {
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
                loading: g,
            },
        ],
        children: [
            b,
            null != t && "" !== t
                ? (0, r.jsx)(i.Text, {
                      className: c.errorText,
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: t,
                  })
                : null,
        ],
    });
}
