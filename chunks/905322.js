t.d(n, { j: () => o });
var r = t(200651),
    i = t(192379),
    l = t(777207),
    s = t(944494);
function o(e) {
    let { title: n, subtitle: t, iconSrc: o, backgroundSrc: a, animatedBackgroundSrc: u, prefersReducedMotion: c = !0 } = e,
        d = i.useMemo(() => {
            let e = null != a ? a : o;
            if (null != e) return { '--custom-background-url': 'url('.concat(e.toString(), ')') };
        }, [a, o]),
        p = i.useMemo(() => {
            if (null == a) return;
            let e = { '--custom-background-static': 'url('.concat(a.toString()) };
            return c || null == u || (e['--custom-background-animated'] = 'url('.concat(u.toString(), ')')), e;
        }, [u, a, c]);
    return (0, r.jsxs)('div', {
        className: s.wrapper,
        children: [
            (0, r.jsx)('div', {
                className: s.background,
                style: d
            }),
            (0, r.jsxs)('div', {
                className: s.content,
                children: [
                    null != o &&
                        (0, r.jsx)('div', {
                            className: s.icon,
                            children: (0, r.jsx)('img', {
                                src: o.toString(),
                                alt: ''
                            })
                        }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(l.x, {
                                variant: 'heading-xl/bold',
                                tag: 'div',
                                children: n
                            }),
                            null != t &&
                                (0, r.jsxs)(l.x, {
                                    variant: 'text-sm/normal',
                                    children: ['\u201C', t, '\u201D']
                                })
                        ]
                    })
                ]
            }),
            null != a
                ? (0, r.jsx)('div', {
                      className: s.image,
                      style: p
                  })
                : null
        ]
    });
}
