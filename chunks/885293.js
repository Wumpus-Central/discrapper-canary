a.d(e, { default: () => h });
var n = a(627968);
a(64700);
var l = a(110259),
    s = a(189213),
    r = a(573613),
    i = a(834730),
    o = a(150934),
    c = a(139286),
    d = a(954571),
    u = a(60888),
    m = a(652215),
    p = a(985018),
    x = a(526826);
function h(t) {
    let { url: e, trustUrl: a, isProtocol: h, onConfirm: _, onCancel: C, onClose: k, transitionState: f } = t,
        {
            protocol: g,
            authorityPrefix: b,
            hostname: A,
            theRestOfTheUrl: L,
            shouldTrustUrl: v,
            setShouldTrustUrl: D,
            handleConfirm: M,
            handleCancel: E,
        } = (0, u.u)({ url: e, trustUrl: a, onConfirm: _, onCancel: C, onClose: k });
    return (
        (0, c.A)({ type: l.ImpressionTypes.MODAL, name: l.ImpressionNames.MASKED_LINK_MODAL }),
        (0, n.jsxs)(s.Modal, {
            size: "md",
            transitionState: f,
            onClose: k,
            title: p.intl.string(p.t["3w1QGl"]),
            subtitle: h ? p.intl.format(p.t.aCYv1z, {}) : p.intl.string(p.t.soRxRe),
            actions: [
                {
                    text: p.intl.string(p.t["/g10LC"]),
                    onClick: () => {
                        E(),
                            d.default.track(m.HAw.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: v,
                                action_type: "cancel",
                            });
                    },
                    variant: "secondary",
                },
                {
                    text: h ? p.intl.string(p.t.COq6kk) : p.intl.string(p.t.NcJfJG),
                    onClick: () => {
                        M(),
                            d.default.track(m.HAw.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: v,
                                action_type: "confirm",
                            });
                    },
                    variant: "primary",
                },
            ],
            children: [
                (0, n.jsxs)(r.Ip, {
                    className: x.ul,
                    children: [
                        (0, n.jsxs)(i.E, {
                            tag: "span",
                            variant: h ? "text-md/semibold" : "text-md/normal",
                            color: h ? "text-default" : "text-muted",
                            children: [g, b],
                        }),
                        (0, n.jsx)(i.E, {
                            tag: "span",
                            variant: h ? "text-md/normal" : "text-md/semibold",
                            color: h ? "text-muted" : "text-default",
                            children: A,
                        }),
                        (0, n.jsx)(i.E, { tag: "span", variant: "text-md/normal", color: "text-muted", children: L }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: x.F5,
                    children: (0, n.jsx)(o.S, {
                        checked: v,
                        onChange: (t) => D(t),
                        label: h
                            ? p.intl.format(p.t["haA+Xw"], { protocol: g.replace(":", "") })
                            : p.intl.format(p.t.ZgXDsI, { domain: A }),
                        labelType: "secondary",
                    }),
                }),
            ],
        })
    );
}
