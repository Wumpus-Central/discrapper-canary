n.d(t, { Z: () => y });
var r = n(255367),
    o = n(73800),
    i = n(924322),
    l = n(481060),
    a = n(634733),
    c = n(210753),
    s = n(247397),
    d = n(570911),
    u = n(388032),
    f = n(436860);
function p(e) {
    let { widgetType: t } = e,
        n = t === i.g.FAVORITE ? d.J6['23'] : d.J6['58'],
        { coverImageUrl: o, localizedName: l } = (0, c.$)(n);
    return (0, r.jsxs)('div', {
        className: f.placeholderDetailCard,
        children: [
            (0, r.jsx)('div', {
                className: f.placeholderCover,
                children:
                    null != o && '' !== o
                        ? (0, r.jsx)('img', {
                              src: o,
                              alt: null != l ? l : 'Game cover',
                              className: f.placeholderGameImage
                          })
                        : (0, r.jsx)('div', { className: f.placeholderGameFallback })
            }),
            (0, r.jsxs)('div', {
                className: f.placeholderText,
                children: [(0, r.jsx)('div', { className: f.placeholderBar }), (0, r.jsx)('div', { className: f.placeholderBar })]
            })
        ]
    });
}
function m(e) {
    let { widgetType: t } = e,
        n = t === i.g.WANT_TO_PLAY ? [d.J6['0'], d.J6['1'], d.J6['2']] : [d.J6['20'], d.J6['35'], d.J6['42']];
    return (0, r.jsx)('div', {
        className: f.placeholderCoverGrid,
        children: n.map((e, t) => (0, r.jsx)(g, { applicationId: e }, t))
    });
}
function g(e) {
    let { applicationId: t } = e,
        { coverImageUrl: n, localizedName: o } = (0, c.$)(t);
    return (0, r.jsx)('div', {
        className: f.placeholderCoverItem,
        children:
            null != n && '' !== n
                ? (0, r.jsx)('img', {
                      src: n,
                      alt: null != o ? o : 'Game cover',
                      className: f.placeholderGameImage
                  })
                : (0, r.jsx)('div', { className: f.placeholderGameFallback })
    });
}
function b(e) {
    let { widgetType: t } = e,
        n = o.useCallback(() => {
            (0, a.w6)(t);
        }, [t]);
    return (0, r.jsxs)(l.P3F, {
        className: f.widgetPromptContainer,
        onClick: n,
        'aria-label': 'Add widget: '.concat(u.intl.string(s.NP[t])),
        children: [
            (() => {
                switch (t) {
                    case i.g.FAVORITE:
                    case i.g.CURRENT:
                        return (0, r.jsx)(p, { widgetType: t });
                    case i.g.WANT_TO_PLAY:
                    case i.g.PLAYED:
                        return (0, r.jsx)(m, { widgetType: t });
                    default:
                        return null;
                }
            })(),
            (0, r.jsxs)('div', {
                className: f.widgetPromptOverlay,
                children: [
                    (0, r.jsx)('div', {
                        className: f.addButton,
                        children: (0, r.jsx)(l.oFk, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: u.intl.string(s.NP[t])
                    })
                ]
            })
        ]
    });
}
function y() {
    return (0, r.jsxs)('div', {
        className: f.empty,
        children: [
            (0, r.jsxs)('div', {
                className: f.textContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: u.intl.string(u.t.oqalCw)
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: u.intl.string(u.t.O9SQ1d)
                    })
                ]
            }),
            (0, r.jsx)('ul', {
                className: f.widgetGrid,
                'aria-label': 'Widget options',
                children: s.rR.map((e) => (0, r.jsx)('li', { children: (0, r.jsx)(b, { widgetType: e }) }, e))
            })
        ]
    });
}
