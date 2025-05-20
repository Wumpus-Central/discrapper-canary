n.d(t, { default: () => h }), n(388685), n(953529);
var a = n(255367);
n(73800);
var i = n(512722),
    r = n.n(i),
    s = n(481060),
    c = n(584825),
    l = n(353254),
    o = n(866104),
    d = n(388032),
    m = n(578305);
function h(e) {
    let { onClose: t, guildId: n, transitionState: i } = e,
        h = (0, c.YB)(n);
    r()(null != h, 'subscriptionsSettings cannot be null');
    let u = h.cover_image_asset,
        [x] = (0, l.Z)(null != u ? u : void 0);
    return (0, a.jsxs)(s.Y0X, {
        className: m.modal,
        size: s.CgR.MEDIUM,
        transitionState: i,
        'aria-label': d.intl.string(d.t.D98gR0),
        children: [
            (0, a.jsx)('div', {
                ref: x,
                className: m.coverImageContainer,
                children: null != u && (0, a.jsx)(o.Z, { coverImageAsset: u })
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
                    onClick: t,
                    children: d.intl.string(d.t.wdo1oK)
                })
            })
        ]
    });
}
