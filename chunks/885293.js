a.d(e, { default: () => _ });
var n = a(627968);
a(64700);
var i = a(562708),
    s = a(189213),
    l = a(364522),
    r = a(834730),
    o = a(150934),
    c = a(139286),
    d = a(174459),
    m = a(60888),
    u = a(652215),
    p = a(375708),
    x = a(526826);
function _(t) {
    let { url: e, trustUrl: a, isProtocol: _, onConfirm: h, onCancel: f, onClose: C, transitionState: g } = t,
        {
            protocol: k,
            authorityPrefix: A,
            hostname: D,
            theRestOfTheUrl: L,
            shouldTrustUrl: v,
            setShouldTrustUrl: I,
            handleConfirm: y,
            handleCancel: E,
        } = (0, m.u)({ url: e, trustUrl: a, onConfirm: h, onCancel: f, onClose: C });
    return (
        (0, c.A)({ type: i.ImpressionTypes.MODAL, name: i.ImpressionNames.MASKED_LINK_MODAL }),
        (0, n.jsxs)(s.Modal, {
            size: "md",
            transitionState: g,
            onClose: C,
            title: p.intl.string(p.t["3w1QGl"]),
            subtitle: _ ? p.intl.format(p.t.aCYv1z, {}) : p.intl.string(p.t.soRxRe),
            actions: [
                {
                    text: p.intl.string(p.t["/g10LC"]),
                    onClick: function () {
                        E(),
                            d.default.track(u.HAw.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: v,
                                action_type: "cancel",
                            });
                    },
                    variant: "secondary",
                },
                {
                    text: _ ? p.intl.string(p.t.COq6kk) : p.intl.string(p.t.NcJfJG),
                    onClick: function () {
                        y(),
                            d.default.track(u.HAw.MASKED_LINK_MODAL_CLICKED, {
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
                            ? p.intl.format(p.t["haA+Xw"], { protocol: k.replace(":", "") })
                            : p.intl.format(p.t.ZgXDsI, { domain: D }),
                        labelType: "secondary",
                    }),
                }),
            ],
        })
    );
}
