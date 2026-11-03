a.d(e, { default: () => x });
var n = a(477900);
a(582128);
var i = a(131937),
    s = a(189213),
    l = a(364522),
    r = a(834730),
    o = a(150934),
    d = a(139286),
    c = a(174459),
    m = a(60888),
    u = a(652215),
    p = a(105292),
    _ = a(860311);
function x(t) {
    let { url: e, trustUrl: a, isProtocol: x, onConfirm: h, onCancel: f, onClose: y, transitionState: C } = t,
        {
            protocol: b,
            authorityPrefix: g,
            hostname: k,
            theRestOfTheUrl: A,
            shouldTrustUrl: D,
            setShouldTrustUrl: L,
            handleConfirm: v,
            handleCancel: I,
        } = (0, m.u)({ url: e, trustUrl: a, onConfirm: h, onCancel: f, onClose: y });
    return (
        (0, d.A)({ type: i.ImpressionTypes.MODAL, name: i.ImpressionNames.MASKED_LINK_MODAL }),
        (0, n.jsxs)(s.a, {
            size: "md",
            transitionState: C,
            onClose: y,
            title: p.intl.string(p.t["3w1QGl"]),
            subtitle: x ? p.intl.format(p.t.aCYv1z, {}) : p.intl.string(p.t.soRxRe),
            actions: [
                {
                    text: p.intl.string(p.t["/g10LC"]),
                    onClick: function () {
                        (I(),
                            c.default.track(u.HAw.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: D,
                                action_type: "cancel",
                            }));
                    },
                    variant: "secondary",
                },
                {
                    text: x ? p.intl.string(p.t.COq6kk) : p.intl.string(p.t.NcJfJG),
                    onClick: function () {
                        (v(),
                            c.default.track(u.HAw.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: D,
                                action_type: "confirm",
                            }));
                    },
                    variant: "primary",
                },
            ],
            children: [
                (0, n.jsxs)(l.Ip, {
                    className: _.ul,
                    children: [
                        (0, n.jsxs)(r.E, {
                            tag: "span",
                            variant: x ? "body-md/semibold" : "body-md/normal",
                            color: x ? "text-default" : "text-muted",
                            children: [b, g],
                        }),
                        (0, n.jsx)(r.E, {
                            tag: "span",
                            variant: x ? "body-md/normal" : "body-md/semibold",
                            color: x ? "text-muted" : "text-default",
                            children: k,
                        }),
                        (0, n.jsx)(r.E, { tag: "span", variant: "body-md/normal", color: "text-muted", children: A }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: _.F5,
                    children: (0, n.jsx)(o.S, {
                        checked: D,
                        onChange: (t) => L(t),
                        label: x
                            ? p.intl.format(p.t["haA+Xw"], { protocol: b.replace(":", "") })
                            : p.intl.format(p.t.ZgXDsI, { domain: k }),
                        labelType: "secondary",
                    }),
                }),
            ],
        })
    );
}
