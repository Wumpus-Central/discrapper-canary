a.d(e, { default: () => x });
var n = a(627968);
a(64700);
var l = a(110259),
    s = a(158954),
    r = a(397927),
    i = a(139286),
    o = a(954571),
    c = a(60888),
    d = a(652215),
    u = a(985018),
    m = a(20675);
function x(t) {
    let { url: e, trustUrl: a, isProtocol: x, onConfirm: p, onCancel: h, onClose: _, transitionState: C } = t,
        {
            protocol: k,
            authorityPrefix: f,
            hostname: b,
            theRestOfTheUrl: g,
            shouldTrustUrl: A,
            setShouldTrustUrl: L,
            handleConfirm: v,
            handleCancel: D,
        } = (0, c.u)({ url: e, trustUrl: a, onConfirm: p, onCancel: h, onClose: _ });
    return (
        (0, i.A)({ type: l.ImpressionTypes.MODAL, name: l.ImpressionNames.MASKED_LINK_MODAL }),
        (0, n.jsxs)(s.Modal, {
            size: "md",
            transitionState: C,
            onClose: _,
            title: u.intl.string(u.t["3w1QGl"]),
            subtitle: x ? u.intl.format(u.t.aCYv1z, {}) : u.intl.string(u.t.soRxRe),
            actions: [
                {
                    text: u.intl.string(u.t["/g10LC"]),
                    onClick: () => {
                        D(),
                            o.default.track(d.HAw.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: A,
                                action_type: "cancel",
                            });
                    },
                    variant: "secondary",
                },
                {
                    text: x ? u.intl.string(u.t.COq6kk) : u.intl.string(u.t.NcJfJG),
                    onClick: () => {
                        v(),
                            o.default.track(d.HAw.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: A,
                                action_type: "confirm",
                            });
                    },
                    variant: "primary",
                },
            ],
            children: [
                (0, n.jsxs)(r.HOs, {
                    className: m.ul,
                    children: [
                        (0, n.jsxs)(r.Text, {
                            tag: "span",
                            variant: x ? "text-md/semibold" : "text-md/normal",
                            color: x ? "text-default" : "text-muted",
                            children: [k, f],
                        }),
                        (0, n.jsx)(r.Text, {
                            tag: "span",
                            variant: x ? "text-md/normal" : "text-md/semibold",
                            color: x ? "text-muted" : "text-default",
                            children: b,
                        }),
                        (0, n.jsx)(r.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: g,
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: m.F5,
                    children: (0, n.jsx)(r.Checkbox, {
                        checked: A,
                        onChange: (t) => L(t),
                        label: x
                            ? u.intl.format(u.t["haA+Xw"], { protocol: k.replace(":", "") })
                            : u.intl.format(u.t.ZgXDsI, { domain: b }),
                        labelType: "secondary",
                    }),
                }),
            ],
        })
    );
}
