r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(388032),
    u = r(990999);
function c(e) {
    let { className: n, src: r, unicodeEmoji: a, name: c, size: d = 20, enableTooltip: f = !0, enableHeight: _ = !0, onClick: h } = e;
    if (null == r && null == a) return null;
    let p = () => {
        let e = (0, i.jsx)('img', {
            alt: '',
            'aria-label': l.intl.formatToPlainString(l.t['9+YWrK'], { name: c }),
            className: s()(u.roleIcon, n, { [u.clickable]: null != h }),
            height: _ ? d : void 0,
            src: r,
            width: d
        });
        return (null != a &&
            (e = (0, i.jsx)('img', {
                alt: '',
                'aria-label': a.allNamesString,
                className: s()(u.roleIcon, n, { [u.clickable]: null != h }),
                height: _ ? d : void 0,
                src: a.url,
                width: d
            })),
        null == h)
            ? (0, i.jsx)(o.FocusRing, {
                  offset: { left: 5 },
                  children: e
              })
            : (0, i.jsx)(o.Clickable, {
                  onClick: h,
                  tag: 'span',
                  focusProps: { offset: { left: 5 } },
                  children: e
              });
    };
    return (0, i.jsx)(o.TooltipContainer, {
        text: c,
        'aria-label': !1,
        shouldShow: f,
        element: 'span',
        children: p()
    });
}
