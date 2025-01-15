i.d(t, {
    Z: function () {
        return s;
    }
});
var n = i(200651);
i(192379);
var a = i(120356),
    r = i.n(a),
    o = i(481060),
    l = i(388032),
    c = i(582613);
function s(e) {
    let { className: t, onClick: i, imageSrc: a, iconSrc: s, header: d, headerClassName: u, subheaderVariant: _ = 'text-sm/normal', subheader: p, children: h, animatesOnHover: m, ...f } = e,
        g = null != a,
        x = (0, n.jsxs)(n.Fragment, {
            children: [
                g &&
                    (0, n.jsx)('div', {
                        className: c.imageContainer,
                        children: (0, n.jsx)('img', {
                            alt: '',
                            className: c.image,
                            src: a
                        })
                    }),
                (0, n.jsxs)('div', {
                    className: c.textContainer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: r()(c.topRowContainer),
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
                                        null != p &&
                                            (0, n.jsx)(o.Text, {
                                                className: c.subheader,
                                                color: 'header-secondary',
                                                variant: _,
                                                children: p
                                            })
                                    ]
                                })
                            ]
                        }),
                        h
                    ]
                })
            ]
        }),
        C = r()(t, c.container, { [c.hasImage]: g });
    return null != i
        ? (0, n.jsx)(o.ClickableContainer, {
              tag: 'article',
              'aria-label': l.intl.formatToPlainString(l.t['0cVQIC'], { name: d }),
              onClick: i,
              className: r()(C, c.clickable, { [c.animatesOnHoverContainer]: m }),
              focusProps: { offset: 4 },
              children: x
          })
        : (0, n.jsx)('article', {
              className: C,
              ...f,
              children: x
          });
}
