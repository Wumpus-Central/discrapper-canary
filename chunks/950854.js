i.d(t, {
    Z: function () {
        return s;
    }
});
var n = i(200651);
i(192379);
var r = i(120356),
    a = i.n(r),
    o = i(481060),
    l = i(388032),
    c = i(746220);
function s(e) {
    let { className: t, onClick: i, imageSrc: r, iconSrc: s, header: d, headerClassName: u, subheaderVariant: h = 'text-sm/normal', subheader: _, children: p, animatesOnHover: m, ...f } = e,
        g = null != r,
        x = (0, n.jsxs)(n.Fragment, {
            children: [
                g &&
                    (0, n.jsx)('div', {
                        className: c.imageContainer,
                        children: (0, n.jsx)('img', {
                            alt: '',
                            className: c.image,
                            src: r
                        })
                    }),
                (0, n.jsxs)('div', {
                    className: c.textContainer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: a()(c.topRowContainer),
                            children: [
                                null != s &&
                                    (0, n.jsx)('img', {
                                        className: c.icon,
                                        alt: '',
                                        'aria-hidden': !0,
                                        src: s,
                                        width: 48,
                                        height: 48
                                    }),
                                (0, n.jsxs)('div', {
                                    className: c.headerContainer,
                                    children: [
                                        (0, n.jsx)(o.Heading, {
                                            variant: 'heading-md/medium',
                                            className: u,
                                            children: d
                                        }),
                                        null != _ &&
                                            (0, n.jsx)(o.Text, {
                                                className: c.subheader,
                                                color: 'header-secondary',
                                                variant: h,
                                                children: _
                                            })
                                    ]
                                })
                            ]
                        }),
                        p
                    ]
                })
            ]
        }),
        C = a()(t, c.container, { [c.hasImage]: g });
    return null != i
        ? (0, n.jsx)(o.ClickableContainer, {
              tag: 'article',
              'aria-label': l.intl.formatToPlainString(l.t['0cVQIC'], { name: d }),
              onClick: i,
              className: a()(C, c.clickable, { [c.animatesOnHoverContainer]: m }),
              focusProps: { offset: 4 },
              children: x
          })
        : (0, n.jsx)('article', {
              className: C,
              ...f,
              children: x
          });
}
