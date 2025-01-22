n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    l = n(481060),
    o = n(388032),
    s = n(746220);
function c(e) {
    let { className: t, onClick: n, imageSrc: a, iconSrc: c, header: d, headerClassName: u, subheaderVariant: p = 'text-sm/normal', subheader: m, children: _, animatesOnHover: f, ...g } = e,
        h = null != a,
        I = (0, i.jsxs)(i.Fragment, {
            children: [
                h &&
                    (0, i.jsx)('div', {
                        className: s.imageContainer,
                        children: (0, i.jsx)('img', {
                            alt: '',
                            className: s.image,
                            src: a
                        })
                    }),
                (0, i.jsxs)('div', {
                    className: s.textContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: r()(s.topRowContainer),
                            children: [
                                null != c &&
                                    (0, i.jsx)('img', {
                                        className: s.icon,
                                        alt: '',
                                        'aria-hidden': !0,
                                        src: c,
                                        width: 48,
                                        height: 48
                                    }),
                                (0, i.jsxs)('div', {
                                    className: s.headerContainer,
                                    children: [
                                        (0, i.jsx)(l.Heading, {
                                            variant: 'heading-md/medium',
                                            className: u,
                                            children: d
                                        }),
                                        null != m &&
                                            (0, i.jsx)(l.Text, {
                                                className: s.subheader,
                                                color: 'header-secondary',
                                                variant: p,
                                                children: m
                                            })
                                    ]
                                })
                            ]
                        }),
                        _
                    ]
                })
            ]
        }),
        v = r()(t, s.container, { [s.hasImage]: h });
    return null != n
        ? (0, i.jsx)(l.ClickableContainer, {
              tag: 'article',
              'aria-label': o.intl.formatToPlainString(o.t['0cVQIC'], { name: d }),
              onClick: n,
              className: r()(v, s.clickable, { [s.animatesOnHoverContainer]: f }),
              focusProps: { offset: 4 },
              children: I
          })
        : (0, i.jsx)('article', {
              className: v,
              ...g,
              children: I
          });
}
