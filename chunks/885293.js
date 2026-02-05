n.d(t, { default: () => p });
var a = n(627968);
n(64700);
var s = n(484030),
    i = n(110259),
    l = n(158954),
    r = n(397927),
    o = n(139286),
    d = n(422230),
    c = n(954571),
    u = n(60888),
    m = n(652215),
    h = n(985018),
    x = n(589049);
function p(e) {
    let { url: t, trustUrl: n, isProtocol: p, onConfirm: g, onCancel: _, onClose: f, transitionState: v } = e,
        {
            protocol: b,
            authorityPrefix: j,
            hostname: A,
            theRestOfTheUrl: C,
            shouldTrustUrl: S,
            setShouldTrustUrl: T,
            handleConfirm: y,
            handleCancel: N,
        } = (0, u.u)({ url: t, trustUrl: n, onConfirm: g, onCancel: _, onClose: f });
    return (
        (0, o.A)({ type: i.ImpressionTypes.MODAL, name: i.ImpressionNames.MASKED_LINK_MODAL }),
        (0, a.jsxs)(l.Modal, {
            size: "md",
            transitionState: v,
            onClose: f,
            title: h.intl.string(h.t["3w1QGl"]),
            subtitle: p ? h.intl.format(h.t.aCYv1z, {}) : h.intl.string(h.t.soRxRe),
            actions: [
                {
                    text: h.intl.string(h.t["/g10LC"]),
                    onClick: () => {
                        N(),
                            c.default.track(m.HAw.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: S,
                                action_type: "cancel",
                            });
                    },
                    variant: "secondary",
                },
                {
                    text: p ? h.intl.string(h.t.COq6kk) : h.intl.string(h.t.NcJfJG),
                    onClick: () => {
                        y(),
                            c.default.track(m.HAw.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: S,
                                action_type: "confirm",
                            });
                    },
                    variant: "primary",
                },
            ],
            children: [
                (0, a.jsxs)(r.HOs, {
                    className: x.ul,
                    children: [
                        (0, a.jsxs)(r.Text, {
                            tag: "span",
                            variant: p ? "text-md/semibold" : "text-md/normal",
                            color: p ? "text-default" : "text-muted",
                            children: [b, j],
                        }),
                        (0, a.jsx)(r.Text, {
                            tag: "span",
                            variant: p ? "text-md/normal" : "text-md/semibold",
                            color: p ? "text-muted" : "text-default",
                            children: A,
                        }),
                        (0, a.jsx)(r.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C,
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: x.F5,
                    children: (0, a.jsx)(r.Checkbox, {
                        checked: S,
                        onChange: (e) => T(e),
                        label: p
                            ? h.intl.format(h.t["haA+Xw"], { protocol: b.replace(":", "") })
                            : h.intl.format(h.t.ZgXDsI, { domain: A }),
                        labelType: "secondary",
                    }),
                }),
                (0, a.jsx)(s.tH, { fallback: null, children: (0, a.jsx)(d.l, { onClose: f }) }),
            ],
        })
    );
}
