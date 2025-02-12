l.d(i, { j: () => d });
var e = l(200651),
    t = l(192379),
    r = l(777207),
    s = l(242930);
function d(n) {
    let { title: i, subtitle: l, iconSrc: d, backgroundSrc: a, animatedBackgroundSrc: u, prefersReducedMotion: o = !0 } = n,
        c = t.useMemo(() => {
            let n = null != a ? a : d;
            if (null != n) return { '--custom-background-url': 'url('.concat(n.toString(), ')') };
        }, [a, d]),
        m = t.useMemo(() => {
            if (null == a) return;
            let n = { '--custom-background-static': 'url('.concat(a.toString()) };
            return o || null == u || (n['--custom-background-animated'] = 'url('.concat(u.toString(), ')')), n;
        }, [u, a, o]);
    return (0, e.jsxs)('div', {
        className: s.wrapper,
        children: [
            (0, e.jsx)('div', {
                className: s.background,
                style: c
            }),
            (0, e.jsxs)('div', {
                className: s.content,
                children: [
                    null != d &&
                        (0, e.jsx)('div', {
                            className: s.icon,
                            children: (0, e.jsx)('img', {
                                src: d.toString(),
                                alt: ''
                            })
                        }),
                    (0, e.jsxs)('div', {
                        children: [
                            (0, e.jsx)(r.x, {
                                variant: 'heading-xl/bold',
                                tag: 'div',
                                children: i
                            }),
                            null != l &&
                                (0, e.jsxs)(r.x, {
                                    variant: 'text-sm/normal',
                                    children: ['\u201C', l, '\u201D']
                                })
                        ]
                    })
                ]
            }),
            null != a
                ? (0, e.jsx)('div', {
                      className: s.image,
                      style: m
                  })
                : null
        ]
    });
}
