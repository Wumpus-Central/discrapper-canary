n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(388032),
    c = n(163845);
let u = i.forwardRef(function (e, t) {
    let { className: n, src: i, unicodeEmoji: o, name: u, size: d = 20, enableTooltip: f = !0, enableHeight: _ = !0, onClick: p } = e;
    if (null == i && null == o) return null;
    let h = () => {
        let e = (0, r.jsx)('img', {
            ref: t,
            alt: '',
            'aria-label': l.NW.formatToPlainString(l.t['9+YWrK'], { name: u }),
            className: a()(c.roleIcon, n, { [c.clickable]: null != p }),
            height: _ ? d : void 0,
            src: i,
            width: d
        });
        return (null != o &&
            (e = (0, r.jsx)('img', {
                ref: t,
                alt: '',
                'aria-label': o.allNamesString,
                className: a()(c.roleIcon, n, { [c.clickable]: null != p }),
                height: _ ? d : void 0,
                src: o.url,
                width: d
            })),
        null == p)
            ? (0, r.jsx)(s.tEY, {
                  offset: { left: 5 },
                  children: e
              })
            : (0, r.jsx)(s.P3F, {
                  onClick: p,
                  tag: 'span',
                  focusProps: { offset: { left: 5 } },
                  children: e
              });
    };
    return (0, r.jsx)(s.DY3, {
        text: u,
        'aria-label': !1,
        shouldShow: f,
        element: 'span',
        children: h()
    });
});
