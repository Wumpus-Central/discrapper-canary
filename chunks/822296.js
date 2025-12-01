n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(872810),
    c = n(493773),
    u = n(569545),
    d = n(592125),
    f = n(231338),
    p = n(388032),
    _ = n(15456);
function m(e) {
    var t;
    let { stream: n, width: i } = e,
        m = (0, o.e7)([d.Z], () => d.Z.getChannel(n.channelId));
    (0, c.ZP)(() => {
        (null == m ? void 0 : m.isGuildStageVoice()) && (0, l.aP)((0, u.V9)(n), !1);
    });
    let h = () => (0, l.aP)((0, u.V9)(n)),
        g = (t = i) < 550 ? "small" : t < 1000 ? "medium" : "large";
    return (0, r.jsx)(s.f6W, {
        disableAdaptiveTheme: !0,
        theme: f.BR.MIDNIGHT,
        children: (e) =>
            (0, r.jsx)("div", {
                className: a()(_.container, e),
                children: (0, r.jsxs)("div", {
                    className: _.content,
                    children: [
                        (0, r.jsx)("div", {
                            className: a()(_.artContainer, _[g]),
                            children: (0, r.jsx)("div", { className: a()(_.art, _[g]) }),
                        }),
                        (0, r.jsxs)("div", {
                            className: _.cta,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    color: "none",
                                    variant: "small" === g ? "heading-md/normal" : "heading-lg/normal",
                                    className: _.header,
                                    children: p.intl.formatToMarkdownString(p.t.Kb4Ukp, {}),
                                }),
                                (0, r.jsx)(s.Button, {
                                    variant: "secondary",
                                    size: "small" === g ? "sm" : "md",
                                    onClick: (e) => {
                                        e.stopPropagation(), h();
                                    },
                                    text: p.intl.string(p.t["4EGMWL"]),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
