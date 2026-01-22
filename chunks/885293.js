n.d(t, {
    default: () => f,
}),
    n(747238),
    n(812715);
var a = n(627968);
n(64700);
var l = n(484030),
    i = n(110259),
    r = n(158954),
    s = n(397927),
    o = n(139286),
    c = n(422230),
    d = n(954571),
    u = n(60888),
    m = n(652215),
    p = n(985018),
    h = n(589049);

function f(e) {
    let { url: t, trustUrl: n, isProtocol: f, onConfirm: x, onCancel: b, onClose: g, transitionState: v } = e,
        {
            protocol: j,
            authorityPrefix: y,
            hostname: _,
            theRestOfTheUrl: A,
            shouldTrustUrl: C,
            setShouldTrustUrl: S,
            handleConfirm: O,
            handleCancel: E,
        } = (0, u.u)({
            url: t,
            trustUrl: n,
            onConfirm: x,
            onCancel: b,
            onClose: g,
        });
    return (
        (0, o.A)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.MASKED_LINK_MODAL,
        }),
        (0, a.jsxs)(r.Modal, {
            size: "md",
            transitionState: v,
            onClose: g,
            title: p.intl.string(p.t["3w1QGl"]),
            subtitle: f ? p.intl.format(p.t.aCYv1z, {}) : p.intl.string(p.t.soRxRe),
            actions: [
                {
                    text: p.intl.string(p.t["/g10LC"]),
                    onClick: () => {
                        E(),
                            d.default.track(m.HAw.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: C,
                                action_type: "cancel",
                            });
                    },
                    variant: "secondary",
                },
                {
                    text: f ? p.intl.string(p.t.COq6kk) : p.intl.string(p.t.NcJfJG),
                    onClick: () => {
                        O(),
                            d.default.track(m.HAw.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: C,
                                action_type: "confirm",
                            });
                    },
                    variant: "primary",
                },
            ],
            children: [
                (0, a.jsxs)(s.HOs, {
                    className: h.ul,
                    children: [
                        (0, a.jsxs)(s.Text, {
                            tag: "span",
                            variant: f ? "text-md/semibold" : "text-md/normal",
                            color: f ? "text-default" : "text-muted",
                            children: [j, y],
                        }),
                        (0, a.jsx)(s.Text, {
                            tag: "span",
                            variant: f ? "text-md/normal" : "text-md/semibold",
                            color: f ? "text-muted" : "text-default",
                            children: _,
                        }),
                        (0, a.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: A,
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: h.F5,
                    children: (0, a.jsx)(s.Checkbox, {
                        checked: C,
                        onChange: (e) => S(e),
                        label: f
                            ? p.intl.format(p.t["haA+Xw"], {
                                  protocol: j.replace(":", ""),
                              })
                            : p.intl.format(p.t.ZgXDsI, {
                                  domain: _,
                              }),
                        labelType: "secondary",
                    }),
                }),
                (0, a.jsx)(l.tH, {
                    fallback: null,
                    children: (0, a.jsx)(c.l, {
                        onClose: g,
                    }),
                }),
            ],
        })
    );
}
