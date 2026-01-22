n.d(t, { V: () => f });
var r = n(627968);
n(64700);
var i = n(989349),
    a = n.n(i),
    s = n(827734),
    o = n(397927),
    l = n(239093),
    c = n(985018),
    u = n(153400);
let d = (e) => a()().diff(a().unix(e), "days");
function f(e) {
    var t, i, a, f, p;
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let _ = e.message.embeds[0],
        h =
            null != (t = null == (f = _.fields) ? void 0 : f.find((e) => e.rawName === l.AT.CLASSIFICATION_ID))
                ? t
                : void 0,
        m = null != (i = null == h ? void 0 : h.rawValue) ? i : void 0,
        g =
            null != (a = null == (p = _.fields) ? void 0 : p.find((e) => e.rawName === l.AT.INCIDENT_TIMESTAMP))
                ? a
                : void 0,
        E = null == g || null == g.rawValue ? void 0 : parseFloat(g.rawValue);
    if (null == m || null == E) return null;
    let b = () => {
        (0, o.mMO)(async () => {
            let { default: e } = await n.e("9407").then(n.bind(n, 956450));
            return (t) =>
                (0, r.jsx)(e, {
                    classificationId: m,
                    source: l.XN.SystemDM,
                    transitionState: t.transitionState,
                    onClose: t.onClose,
                });
        });
    };
    return (0, r.jsxs)(o.DUT, {
        onClick: b,
        className: u.o3,
        children: [
            (0, r.jsxs)("div", {
                className: u.qZ,
                children: [
                    (0, r.jsxs)("div", {
                        className: u.U1,
                        children: [
                            (0, r.jsx)(o.id, {
                                className: u.QW,
                                color: s.A.colors.ICON_FEEDBACK_CRITICAL,
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/semibold",
                                children: c.intl.string(c.t["4CxGXi"]),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: u.VU,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            children: c.intl.format(c.t.eevFb6, { daysAgo: d(E) }),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: u.vv,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: c.intl.string(c.t["5CLb0A"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: u.xQ,
                children: (0, r.jsx)(o.QWc, {
                    text: c.intl.string(c.t.zKnzwm),
                    variant: "secondary",
                }),
            }),
        ],
    });
}
