n.d(t, { A: () => h }), n(938796);
var l = n(627968),
    a = n(64700),
    r = n(397927),
    i = n(973925),
    s = n(975571),
    c = n(307600),
    o = n(652215),
    d = n(985018),
    u = n(276156);
let p = s.A.getArticleURL(o.MVz.BOT_DATA_ACCESS);
function h(e) {
    let { application: t } = e,
        {
            hasMessageContent: n,
            hasGuildPresences: s,
            hasGuildMembers: o,
            hasIntents: h,
        } = (0, i.Z)({ flags: null == t ? void 0 : t.flags }),
        b = a.useCallback(() => {
            null != t.privacy_policy_url && (0, c.h)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, l.jsxs)("div", {
        className: u.hd,
        children: [
            (0, l.jsx)(r.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: d.intl.string(d.t.QzDgMq),
            }),
            (0, l.jsxs)("div", {
                className: u.hQ,
                children: [
                    h &&
                        (0, l.jsxs)("ul", {
                            className: u.In,
                            children: [
                                (0, l.jsx)(r.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "text-default",
                                    children: d.intl.string(d.t.U6KH5S),
                                }),
                                n &&
                                    (0, l.jsx)(m, {
                                        icon: r.oyn,
                                        heading: d.intl.string(d.t.gJpBO2),
                                        body: d.intl.string(d.t["L+QVbh"]),
                                    }),
                                s &&
                                    (0, l.jsx)(m, {
                                        icon: r.nRI,
                                        heading: d.intl.string(d.t["jo0oj/"]),
                                        body: d.intl.string(d.t.Dm0jqx),
                                    }),
                                o &&
                                    (0, l.jsx)(m, {
                                        icon: r.nFg,
                                        heading: d.intl.string(d.t.QZql7O),
                                        body: d.intl.string(d.t["ez/N/R"]),
                                    }),
                            ],
                        }),
                    (0, l.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: d.intl.format(d.t.b6nqk0, { helpCenterUrl: p }),
                    }),
                    null != t.privacy_policy_url &&
                        (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: u.hM,
                            children: d.intl.format(d.t.agYVY5, { onClick: b }),
                        }),
                ],
            }),
        ],
    });
}
function m(e) {
    let { icon: t, heading: n, body: a } = e;
    return (0, l.jsxs)("li", {
        className: u.KT,
        children: [
            (0, l.jsx)(t, {
                color: "currentColor",
                size: "md",
            }),
            (0, l.jsxs)("div", {
                className: u.D6,
                children: [
                    (0, l.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: n,
                    }),
                    (0, l.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: a,
                    }),
                ],
            }),
        ],
    });
}
