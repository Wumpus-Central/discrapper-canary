t.d(a, { default: () => h }), t(47120), t(266796);
var n = t(200651);
t(192379);
var i = t(512722),
    r = t.n(i),
    s = t(481060),
    c = t(584825),
    o = t(353254),
    d = t(866104),
    l = t(388032),
    m = t(578305);
function h(e) {
    let { onClose: a, guildId: t, transitionState: i } = e,
        h = (0, c.YB)(t);
    r()(null != h, 'subscriptionsSettings cannot be null');
    let u = h.cover_image_asset,
        [x] = (0, o.Z)(null != u ? u : void 0);
    return (0, n.jsxs)(s.Y0X, {
        className: m.modal,
        size: s.CgR.MEDIUM,
        transitionState: i,
        'aria-label': l.NW.string(l.t.D98gR0),
        children: [
            (0, n.jsx)('div', {
                ref: x,
                className: m.coverImageContainer,
                children: null != u && (0, n.jsx)(d.Z, { coverImageAsset: u })
            }),
            (0, n.jsx)(s.X6q, {
                variant: 'text-lg/medium',
                color: 'header-primary',
                className: m.header,
                children: l.NW.string(l.t.xPum5e)
            }),
            (0, n.jsx)(s.hzk, {
                className: m.content,
                children: (0, n.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    className: m.description,
                    children: h.description
                })
            }),
            (0, n.jsx)(s.mzw, {
                className: m.__invalid_footer,
                children: (0, n.jsx)(s.zxk, {
                    onClick: a,
                    children: l.NW.string(l.t.wdo1oK)
                })
            })
        ]
    });
}
