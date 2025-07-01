(t.d(n, { default: () => h }), t(388685), t(953529));
var a = t(255367);
t(73800);
var i = t(512722),
    r = t.n(i),
    s = t(481060),
    o = t(584825),
    c = t(353254),
    l = t(866104),
    d = t(388032),
    m = t(578305);
function h(e) {
    let { onClose: n, guildId: t, transitionState: i } = e,
        h = (0, o.YB)(t);
    r()(null != h, 'subscriptionsSettings cannot be null');
    let p = h.cover_image_asset,
        [u] = (0, c.Z)(null != p ? p : void 0);
    return (0, a.jsxs)(s.Y0X, {
        className: m.modal,
        size: s.CgR.MEDIUM,
        transitionState: i,
        'aria-label': d.intl.string(d.t.D98gR0),
        parentComponent: 'HeroDescriptionModal',
        children: [
            (0, a.jsx)('div', {
                ref: u,
                className: m.coverImageContainer,
                children: null != p && (0, a.jsx)(l.Z, { coverImageAsset: p })
            }),
            (0, a.jsx)(s.X6q, {
                variant: 'text-lg/medium',
                color: 'header-primary',
                className: m.header,
                children: d.intl.string(d.t.xPum5e)
            }),
            (0, a.jsx)(s.hzk, {
                className: m.content,
                children: (0, a.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    className: m.description,
                    children: h.description
                })
            }),
            (0, a.jsx)(s.mzw, {
                className: m.__invalid_footer,
                children: (0, a.jsx)(s.zxk, {
                    onClick: n,
                    children: d.intl.string(d.t.wdo1oK)
                })
            })
        ]
    });
}
