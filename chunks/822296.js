n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(755721),
    l = n(481060),
    c = n(872810),
    u = n(493773),
    d = n(569545),
    f = n(592125),
    _ = n(231338),
    p = n(388032),
    h = n(65558);
function m(e) {
    let { stream: t, width: n } = e,
        i = (0, o.e7)([f.Z], () => f.Z.getChannel(t.channelId));
    function m(e) {
        return e < 550 ? 'small' : e < 1000 ? 'medium' : 'large';
    }
    (0, u.ZP)(() => {
        (null == i ? void 0 : i.isGuildStageVoice()) && (0, c.aP)((0, d.V9)(t), !1);
    });
    let g = () => (0, c.aP)((0, d.V9)(t)),
        E = p.intl.string(p.t['4EGMWF']),
        b = m(n);
    return (0, r.jsx)(l.f6W, {
        disableAdaptiveTheme: !0,
        theme: _.BR.MIDNIGHT,
        children: (e) =>
            (0, r.jsx)('div', {
                className: a()(h.container, e),
                children: (0, r.jsxs)('div', {
                    className: h.content,
                    children: [
                        (0, r.jsx)('div', {
                            className: a()(h.artContainer, h[b]),
                            children: (0, r.jsx)('div', { className: a()(h.art, h[b]) })
                        }),
                        (0, r.jsxs)('div', {
                            className: h.cta,
                            children: [
                                (0, r.jsx)(l.X6q, {
                                    color: 'none',
                                    variant: 'small' === b ? 'heading-md/normal' : 'heading-lg/normal',
                                    className: h.header,
                                    children: p.intl.formatToMarkdownString(p.t.Kb4Ukp, {})
                                }),
                                (0, r.jsx)(s.zx, {
                                    size: 'small' === b ? s.zx.Sizes.MEDIUM : s.zx.Sizes.LARGE,
                                    color: s.zx.Colors.PRIMARY,
                                    onClick: (e) => {
                                        (e.stopPropagation(), g());
                                    },
                                    children: (0, r.jsx)(l.Text, {
                                        color: 'none',
                                        variant: 'text-md/semibold',
                                        children: E
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
    });
}
