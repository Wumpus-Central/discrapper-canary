n.d(t, {
    $: () => m,
    X: () => g
});
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(972959),
    s = n(665149),
    l = n(572004),
    c = n(561134),
    u = n(988587),
    d = n(142489);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = (0, o.H)(() => ({ selected: null }));
function g(e) {
    var t;
    let { config: n } = e,
        o = m.useField('selected'),
        { group: f, story: p } = i.useMemo(() => {
            var e;
            let t = n.groups.find((e) => e.stories.some((e) => e.id === o)),
                r = null != (e = null == t ? void 0 : t.stories.find((e) => e.id === o)) ? e : null;
            return {
                group: t,
                story: r
            };
        }, [o, n.groups]),
        g = (e) => {
            m.setState({ selected: e });
        },
        E = null != (t = null == f ? void 0 : f.title) ? t : 'Mana',
        b = null == p ? void 0 : p.name,
        y = () => {
            let e = 'dev://mana/'.concat(null == p ? void 0 : p.id);
            (0, l.JG)(e, () =>
                (0, a.showToast)({
                    id: 'playground-link-copied',
                    message: 'Copied playground link',
                    type: a.ToastType.SUCCESS
                })
            );
        };
    return (0, r.jsxs)('div', {
        className: d.root,
        children: [
            (0, r.jsx)('div', {
                className: d.group,
                children: (0, r.jsx)(a.aRk, {
                    children: (0, r.jsx)(a.ua7, {
                        position: 'right',
                        text: 'Mana Design System',
                        children: (e) =>
                            (0, r.jsx)(
                                a.LYs,
                                h(_({}, e), {
                                    name: 'Mana',
                                    selected: !0
                                })
                            )
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: d.content,
                children: [
                    (0, r.jsxs)(s.ZP, {
                        className: d.header,
                        children: [
                            null != E ? (0, r.jsx)(s.ZP.Title, { children: E }) : null,
                            null != b
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [null != E ? (0, r.jsx)(s.ZP.Caret, { className: d.headerDivider }) : null, (0, r.jsx)(s.ZP.Title, { children: b })]
                                  })
                                : null,
                            (null == p ? void 0 : p.docs) != null
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(s.ZP.Divider, { className: d.headerDivider }),
                                          (0, r.jsx)(s.ZP.Title, {
                                              children: (0, r.jsx)(a.eee, {
                                                  href: p.docs,
                                                  children: 'Docs'
                                              })
                                          })
                                      ]
                                  })
                                : null,
                            null != p
                                ? (0, r.jsx)(a.hU, {
                                      size: 'sm',
                                      'aria-label': 'Copy Link',
                                      variant: 'icon-only',
                                      icon: a.TIy,
                                      onClick: y
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: d.page,
                        children: [
                            (0, r.jsx)('div', {
                                className: d.sidebar,
                                children: (0, r.jsx)(c.N, {
                                    groups: n.groups,
                                    selectedStory: o,
                                    onStorySelect: g
                                })
                            }),
                            (0, r.jsx)('div', {
                                className: d.content,
                                children:
                                    null != p && null != f
                                        ? (0, r.jsx)(u.b, {
                                              story: p,
                                              groupTitle: f.title
                                          })
                                        : null
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
