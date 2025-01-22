r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(388032),
    u = r(990999);
function c(e) {
    let { className: n, src: r, unicodeEmoji: a, name: c, size: d = 20, enableTooltip: f = !0, enableHeight: p = !0, onClick: h } = e;
    if (null == r && null == a) return null;
    let _ = () => {
        let e = (0, i.jsx)('img', {
            alt: '',
            'aria-label': l.intl.formatToPlainString(l.t['9+YWrK'], { name: c }),
            className: o()(u.roleIcon, n, { [u.clickable]: null != h }),
            height: p ? d : void 0,
            src: r,
            width: d
        });
        return (null != a &&
            (e = (0, i.jsx)('img', {
                alt: '',
                'aria-label': a.allNamesString,
                className: o()(u.roleIcon, n, { [u.clickable]: null != h }),
                height: p ? d : void 0,
                src: a.url,
                width: d
            })),
        null == h)
            ? (0, i.jsx)(s.FocusRing, {
                  offset: { left: 5 },
                  children: e
              })
            : (0, i.jsx)(s.Clickable, {
                  onClick: h,
                  tag: 'span',
                  focusProps: { offset: { left: 5 } },
                  children: e
              });
    };
    return (0, i.jsx)(s.TooltipContainer, {
        text: c,
        'aria-label': !1,
        shouldShow: f,
        element: 'span',
        children: _()
    });
}
