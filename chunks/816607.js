(a.d(t, { default: () => p }), a(388685), a(953529));
var n = a(255367);
a(73800);
var i = a(512722),
    r = a.n(i),
    s = a(481060),
    o = a(584825),
    c = a(353254),
    l = a(866104),
    d = a(388032),
    m = a(578305);
function p(e) {
    let { onClose: t, guildId: a, transitionState: i } = e,
        p = (0, o.YB)(a);
    r()(null != p, 'subscriptionsSettings cannot be null');
    let u = p.cover_image_asset,
        [h] = (0, c.Z)(null != u ? u : void 0);
    return (0, n.jsxs)(s.Y0X, {
        className: m.modal,
        size: s.CgR.MEDIUM,
        transitionState: i,
        'aria-label': d.intl.string(d.t.D98gR0),
        parentComponent: 'HeroDescriptionModal',
        children: [
            (0, n.jsx)('div', {
                ref: h,
                className: m.coverImageContainer,
                children: null != u && (0, n.jsx)(l.Z, { coverImageAsset: u })
            }),
            (0, n.jsx)(s.X6q, {
                variant: 'text-lg/medium',
                color: 'header-primary',
                className: m.header,
                children: d.intl.string(d.t.xPum5e)
            }),
            (0, n.jsx)(s.hzk, {
                className: m.content,
                children: (0, n.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    className: m.description,
                    children: p.description
                })
            }),
            (0, n.jsx)(s.mzw, {
                className: m.__invalid_footer,
                children: (0, n.jsx)(s.zxk, {
                    variant: 'primary',
                    text: d.intl.string(d.t.wdo1oK),
                    onClick: t
                })
            })
        ]
    });
}
