r.d(t, { Z: () => y }), r(474991), r(398202), r(301563), r(47120), r(266796);
var s = r(200651),
    a = r(192379),
    i = r(120356),
    n = r.n(i),
    c = r(418435),
    l = r.n(c),
    o = r(442837),
    d = r(481060),
    u = r(558324),
    m = r(367907),
    g = r(456268),
    p = r(626135),
    h = r(999382),
    x = r(654351),
    N = r(259674),
    v = r(203377),
    b = r(981631),
    f = r(388032),
    j = r(878003);
let S = RegExp('^[A-Za-z0-9\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF-]+$', 'u'),
    y = (e) => {
        var t;
        let { guild: r, guildMetadata: i, headerId: c } = e,
            [y, I] = a.useState(!1),
            C = (0, o.e7)([h.Z], () => 'keywords' in h.Z.getErrors()),
            E = (e) => {
                if (!S.test(e)) return void I(!0);
                if ((I(!1), (null == r ? void 0 : r.id) == null)) return;
                let { keywords: t } = i;
                t.length >= v.G7 || (0, g.zH)(r.id, l()([...t, e.toLowerCase()]));
            },
            k = (e) => {
                E(e),
                    p.default.track(
                        b.rMx.DISCOVERY_SETUP_POPULAR_TAG_CLICKED,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    s = Object.keys(r);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (s = s.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    s.forEach(function (t) {
                                        var s;
                                        (s = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: s,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = s);
                                    });
                            }
                            return e;
                        })(
                            {
                                tag: e,
                                primary_category_id: i.primaryCategoryId
                            },
                            (0, m.hH)(r.id)
                        )
                    );
            },
            _ = y
                ? f.NW.string(f.t['t/mtnZ'])
                : C
                  ? f.NW.format(f.t.loup7u, {
                        onLearnMoreClick: () => {
                            (0, N.lW)({
                                articleId: b.BhN.SERVER_DISCOVERY_GUIDELINES,
                                guildId: r.id,
                                modalStep: N.tK.TAGS
                            });
                        }
                    })
                  : null,
            O = new Set(i.keywords);
        return (0, s.jsxs)('div', {
            className: j.container,
            children: [
                (0, s.jsxs)('div', {
                    className: j.content,
                    children: [
                        (0, s.jsx)('div', { className: n()(j.stepImage, j.tagImage) }),
                        (0, s.jsx)(d.X6q, {
                            variant: 'heading-xl/semibold',
                            className: j.header,
                            id: c,
                            children: f.NW.string(f.t['0PJZXl'])
                        }),
                        (0, s.jsx)(d.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: j.headerCaption,
                            children: f.NW.string(f.t.MMEJFB)
                        })
                    ]
                }),
                (0, s.jsxs)(d.hjN, {
                    className: j.form,
                    children: [
                        (0, s.jsx)(d.vwX, {
                            required: !0,
                            children: f.NW.string(f.t['0PJZXl'])
                        }),
                        (0, s.jsx)(d.R94, {
                            type: d.geA.DESCRIPTION,
                            className: j.description,
                            children: f.NW.string(f.t.ztiTDA)
                        }),
                        (0, s.jsx)(u.Z, {
                            className: n()(j.tags, { [j.error]: null != _ }),
                            tags: i.keywords,
                            onRemoveTag: (e) => {
                                if ((null == r ? void 0 : r.id) == null) return;
                                let t = [...i.keywords];
                                t.splice(e, 1), (0, g.zH)(r.id, t);
                            },
                            onAddTag: E,
                            maxTags: v.G7,
                            maxTaxLength: v._0,
                            placeholder: (null == i || null == (t = i.keywords) ? void 0 : t.length) === 0 ? f.NW.string(f.t.EL4Lho) : ''
                        }),
                        (0, s.jsx)(d.Text, {
                            className: j.error,
                            color: 'text-danger',
                            variant: 'text-sm/normal',
                            children: _
                        })
                    ]
                }),
                (0, s.jsx)('div', {
                    className: j.form,
                    children: (0, s.jsx)(d.vwX, { children: f.NW.string(f.t.sF28Oj) })
                }),
                (0, s.jsx)('div', {
                    className: j.tagContainer,
                    children: (0, x.P5)(i.primaryCategoryId).map((e) =>
                        (0, s.jsx)(
                            d.eee,
                            {
                                onClick: () => k(e),
                                className: n()(j.tag, { [j.usedTag]: O.has(e) }),
                                children: e
                            },
                            e
                        )
                    )
                })
            ]
        });
    };
