n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
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
    p = n(65558);
function h(e) {
    let { stream: t, width: n } = e,
        i = (0, o.e7)([d.Z], () => d.Z.getChannel(t.channelId));
    function h(e) {
        return e < 550 ? 'small' : e < 1000 ? 'medium' : 'large';
    }
    (0, c.ZP)(() => {
        (null == i ? void 0 : i.isGuildStageVoice()) && (0, l.aP)((0, u.V9)(t), !1);
    });
    let m = () => (0, l.aP)((0, u.V9)(t)),
        g = _.intl.string(_.t['4EGMWF']),
        E = h(n);
    return (0, r.jsx)(s.f6W, {
        disableAdaptiveTheme: !0,
        theme: f.BR.MIDNIGHT,
        children: (e) =>
            (0, r.jsx)('div', {
                className: a()(p.container, e),
                children: (0, r.jsxs)('div', {
                    className: p.content,
                    children: [
                        (0, r.jsx)('div', {
                            className: a()(p.artContainer, p[E]),
                            children: (0, r.jsx)('div', { className: a()(p.art, p[E]) })
                        }),
                        (0, r.jsxs)('div', {
                            className: p.cta,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    color: 'none',
                                    variant: 'small' === E ? 'heading-md/normal' : 'heading-lg/normal',
                                    className: p.header,
                                    children: _.intl.formatToMarkdownString(_.t.Kb4Ukp, {})
                                }),
                                (0, r.jsx)(s.zxk, {
                                    size: 'small' === E ? s.zxk.Sizes.MEDIUM : s.zxk.Sizes.LARGE,
                                    color: s.zxk.Colors.PRIMARY,
                                    onClick: (e) => {
                                        e.stopPropagation(), m();
                                    },
                                    children: (0, r.jsx)(s.Text, {
                                        color: 'none',
                                        variant: 'text-md/semibold',
                                        children: g
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
    });
}
