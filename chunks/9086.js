a.d(t, { A: () => x });
var n = a(627968),
    l = a(64700),
    i = a(534514),
    s = a(534890),
    r = a(812991),
    o = a(177953),
    c = a(834730),
    d = a(973925),
    u = a(975571),
    h = a(307600),
    m = a(652215),
    p = a(985018),
    _ = a(169795);
let g = u.A.getArticleURL(m.MVz.BOT_DATA_ACCESS);
function x(e) {
    let { application: t } = e,
        { hasMessageContent: a, hasGuildPresences: u, hasGuildMembers: m, hasIntents: x } = (0, d.Z)(t),
        f = l.useCallback(() => {
            null != t.privacy_policy_url && (0, h.h)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, n.jsxs)("div", {
        className: _.hd,
        children: [
            (0, n.jsx)(i.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: p.intl.string(p.t.QzDgMq),
            }),
            (0, n.jsxs)("div", {
                className: _.hQ,
                children: [
                    x &&
                        (0, n.jsxs)("ul", {
                            className: _.In,
                            children: [
                                (0, n.jsx)(i.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-default",
                                    children: p.intl.string(p.t.U6KH5S),
                                }),
                                a &&
                                    (0, n.jsx)(A, {
                                        icon: s.o,
                                        heading: p.intl.string(p.t.gJpBO2),
                                        body: p.intl.string(p.t["L+QVbh"]),
                                    }),
                                u &&
                                    (0, n.jsx)(A, {
                                        icon: r.n,
                                        heading: p.intl.string(p.t["jo0oj/"]),
                                        body: p.intl.string(p.t.Dm0jqx),
                                    }),
                                m &&
                                    (0, n.jsx)(A, {
                                        icon: o.n,
                                        heading: p.intl.string(p.t.QZql7O),
                                        body: p.intl.string(p.t["ez/N/R"]),
                                    }),
                            ],
                        }),
                    (0, n.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: p.intl.format(p.t.b6nqk0, { helpCenterUrl: g }),
                    }),
                    null != t.privacy_policy_url &&
                        (0, n.jsx)(c.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: _.hM,
                            children: p.intl.format(p.t.agYVY5, { onClick: f }),
                        }),
                ],
            }),
        ],
    });
}
function A(e) {
    let { icon: t, heading: a, body: l } = e;
    return (0, n.jsxs)("li", {
        className: _.KT,
        children: [
            (0, n.jsx)(t, { color: "currentColor", size: "md" }),
            (0, n.jsxs)("div", {
                className: _.D6,
                children: [
                    (0, n.jsx)(i.D, { variant: "heading-md/semibold", color: "text-default", children: a }),
                    (0, n.jsx)(c.E, { variant: "text-md/normal", color: "text-default", children: l }),
                ],
            }),
        ],
    });
}
