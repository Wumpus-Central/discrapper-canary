a.d(e, { default: () => _ });
var n = a(627968);
a(64700);
var s = a(562708),
    i = a(189213),
    l = a(364522),
    r = a(834730),
    o = a(150934),
    c = a(139286),
    d = a(174459),
    m = a(60888),
    p = a(652215),
    u = a(375708),
    x = a(526826);
function _(t) {
    let { url: e, trustUrl: a, isProtocol: _, onConfirm: h, onCancel: C, onClose: f, transitionState: g } = t,
        {
            protocol: k,
            authorityPrefix: A,
            hostname: D,
            theRestOfTheUrl: L,
            shouldTrustUrl: v,
            setShouldTrustUrl: I,
            handleConfirm: y,
            handleCancel: E,
        } = (0, m.u)({ url: e, trustUrl: a, onConfirm: h, onCancel: C, onClose: f });
    return (
        (0, c.A)({ type: s.ImpressionTypes.MODAL, name: s.ImpressionNames.MASKED_LINK_MODAL }),
        (0, n.jsxs)(i.Modal, {
            size: "md",
            transitionState: g,
            onClose: f,
            title: u.intl.string(u.t["3w1QGl"]),
            subtitle: _ ? u.intl.format(u.t.aCYv1z, {}) : u.intl.string(u.t.soRxRe),
            actions: [
                {
                    text: u.intl.string(u.t["/g10LC"]),
                    onClick: () => {
                        E(),
                            d.default.track(p.HAw.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: v,
                                action_type: "cancel",
                            });
                    },
                    variant: "secondary",
                },
                {
                    text: _ ? u.intl.string(u.t.COq6kk) : u.intl.string(u.t.NcJfJG),
                    onClick: () => {
                        y(),
                            d.default.track(p.HAw.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: v,
                                action_type: "confirm",
                            });
                    },
                    variant: "primary",
                },
            ],
            children: [
                (0, n.jsxs)(l.Ip, {
                    className: x.ul,
                    children: [
                        (0, n.jsxs)(r.E, {
                            tag: "span",
                            variant: _ ? "text-md/semibold" : "text-md/normal",
                            color: _ ? "text-default" : "text-muted",
                            children: [k, A],
                        }),
                        (0, n.jsx)(r.E, {
                            tag: "span",
                            variant: _ ? "text-md/normal" : "text-md/semibold",
                            color: _ ? "text-muted" : "text-default",
                            children: D,
                        }),
                        (0, n.jsx)(r.E, { tag: "span", variant: "text-md/normal", color: "text-muted", children: L }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: x.F5,
                    children: (0, n.jsx)(o.S, {
                        checked: v,
                        onChange: (t) => I(t),
                        label: _
                            ? u.intl.format(u.t["haA+Xw"], { protocol: k.replace(":", "") })
                            : u.intl.format(u.t.ZgXDsI, { domain: D }),
                        labelType: "secondary",
                    }),
                }),
            ],
        })
    );
}
