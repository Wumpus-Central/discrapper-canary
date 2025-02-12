n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(388032),
    l = n(280772);
function u(e) {
    let { className: t, src: n, unicodeEmoji: r, name: u, size: c = 20, enableTooltip: d = !0, enableHeight: f = !0, onClick: _ } = e;
    if (null == n && null == r) return null;
    let p = () => {
        let e = (0, i.jsx)('img', {
            alt: '',
            'aria-label': o.intl.formatToPlainString(o.t['9+YWrK'], { name: u }),
            className: a()(l.roleIcon, t, { [l.clickable]: null != _ }),
            height: f ? c : void 0,
            src: n,
            width: c
        });
        return (null != r &&
            (e = (0, i.jsx)('img', {
                alt: '',
                'aria-label': r.allNamesString,
                className: a()(l.roleIcon, t, { [l.clickable]: null != _ }),
                height: f ? c : void 0,
                src: r.url,
                width: c
            })),
        null == _)
            ? (0, i.jsx)(s.tEY, {
                  offset: { left: 5 },
                  children: e
              })
            : (0, i.jsx)(s.P3F, {
                  onClick: _,
                  tag: 'span',
                  focusProps: { offset: { left: 5 } },
                  children: e
              });
    };
    return (0, i.jsx)(s.DY3, {
        text: u,
        'aria-label': !1,
        shouldShow: d,
        element: 'span',
        children: p()
    });
}
