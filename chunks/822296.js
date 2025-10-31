n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(872810),
    c = n(493773),
    u = n(569545),
    d = n(592125),
    f = n(231338),
    _ = n(388032),
    p = n(15456);
function h(e) {
    var t;
    let { stream: n, width: i } = e,
        h = (0, o.e7)([d.Z], () => d.Z.getChannel(n.channelId));
    (0, c.ZP)(() => {
        (null == h ? void 0 : h.isGuildStageVoice()) && (0, l.aP)((0, u.V9)(n), !1);
    });
    let m = () => (0, l.aP)((0, u.V9)(n)),
        g = (t = i) < 550 ? "small" : t < 1000 ? "medium" : "large";
    return (0, r.jsx)(s.f6W, {
        disableAdaptiveTheme: !0,
        theme: f.BR.MIDNIGHT,
        children: (e) =>
            (0, r.jsx)("div", {
                className: a()(p.container, e),
                children: (0, r.jsxs)("div", {
                    className: p.content,
                    children: [
                        (0, r.jsx)("div", {
                            className: a()(p.artContainer, p[g]),
                            children: (0, r.jsx)("div", { className: a()(p.art, p[g]) }),
                        }),
                        (0, r.jsxs)("div", {
                            className: p.cta,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    color: "none",
                                    variant: "small" === g ? "heading-md/normal" : "heading-lg/normal",
                                    className: p.header,
                                    children: _.intl.formatToMarkdownString(_.t.Kb4Ukp, {}),
                                }),
                                (0, r.jsx)(s.Button, {
                                    variant: "secondary",
                                    size: "small" === g ? "sm" : "md",
                                    onClick: (e) => {
                                        e.stopPropagation(), m();
                                    },
                                    text: _.intl.string(_.t["4EGMWL"]),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
