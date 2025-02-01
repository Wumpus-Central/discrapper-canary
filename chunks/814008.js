i.d(t, { Z: () => S }), i(47120);
var s = i(200651),
    a = i(192379),
    n = i(120356),
    r = i.n(n),
    l = i(418435),
    c = i.n(l),
    d = i(442837),
    o = i(481060),
    u = i(558324),
    m = i(367907),
    g = i(456268),
    x = i(626135),
    h = i(999382),
    p = i(654351),
    v = i(259674),
    N = i(203377),
    j = i(981631),
    b = i(388032),
    f = i(89388);
let I = /^[A-Za-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]+$/u,
    S = (e) => {
        var t;
        let { guild: i, guildMetadata: n, headerId: l } = e,
            [S, C] = a.useState(!1),
            E = (0, d.e7)([h.Z], () => 'keywords' in h.Z.getErrors()),
            _ = (e) => {
                if (I.test(e)) C(!1);
                else {
                    C(!0);
                    return;
                }
                if ((null == i ? void 0 : i.id) == null) return;
                let { keywords: t } = n;
                t.length >= N.G7 || (0, g.zH)(i.id, c()([...t, e.toLowerCase()]));
            },
            k = (e) => {
                _(e),
                    x.default.track(j.rMx.DISCOVERY_SETUP_POPULAR_TAG_CLICKED, {
                        tag: e,
                        primary_category_id: n.primaryCategoryId,
                        ...(0, m.hH)(i.id)
                    });
            },
            T = S
                ? b.intl.string(b.t['t/mtnZ'])
                : E
                  ? b.intl.format(b.t.loup7u, {
                        onLearnMoreClick: () => {
                            (0, v.lW)({
                                articleId: j.BhN.SERVER_DISCOVERY_GUIDELINES,
                                guildId: i.id,
                                modalStep: v.tK.TAGS
                            });
                        }
                    })
                  : null,
            y = new Set(n.keywords);
        return (0, s.jsxs)('div', {
            className: f.container,
            children: [
                (0, s.jsxs)('div', {
                    className: f.content,
                    children: [
                        (0, s.jsx)('div', { className: r()(f.stepImage, f.tagImage) }),
                        (0, s.jsx)(o.X6q, {
                            variant: 'heading-xl/semibold',
                            className: f.header,
                            id: l,
                            children: b.intl.string(b.t['0PJZXl'])
                        }),
                        (0, s.jsx)(o.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: f.headerCaption,
                            children: b.intl.string(b.t.MMEJFB)
                        })
                    ]
                }),
                (0, s.jsxs)(o.hjN, {
                    className: f.form,
                    children: [
                        (0, s.jsx)(o.vwX, {
                            required: !0,
                            children: b.intl.string(b.t['0PJZXl'])
                        }),
                        (0, s.jsx)(o.R94, {
                            type: o.geA.DESCRIPTION,
                            className: f.description,
                            children: b.intl.string(b.t.ztiTDA)
                        }),
                        (0, s.jsx)(u.Z, {
                            className: r()(f.tags, { [f.error]: null != T }),
                            tags: n.keywords,
                            onRemoveTag: (e) => {
                                if ((null == i ? void 0 : i.id) == null) return;
                                let t = [...n.keywords];
                                t.splice(e, 1), (0, g.zH)(i.id, t);
                            },
                            onAddTag: _,
                            maxTags: N.G7,
                            maxTaxLength: N._0,
                            placeholder: (null == n ? void 0 : null === (t = n.keywords) || void 0 === t ? void 0 : t.length) === 0 ? b.intl.string(b.t.EL4Lho) : ''
                        }),
                        (0, s.jsx)(o.Text, {
                            className: f.error,
                            color: 'text-danger',
                            variant: 'text-sm/normal',
                            children: T
                        })
                    ]
                }),
                (0, s.jsx)('div', {
                    className: f.form,
                    children: (0, s.jsx)(o.vwX, { children: b.intl.string(b.t.sF28Oj) })
                }),
                (0, s.jsx)('div', {
                    className: f.tagContainer,
                    children: (0, p.P5)(n.primaryCategoryId).map((e) =>
                        (0, s.jsx)(
                            o.eee,
                            {
                                onClick: () => k(e),
                                className: r()(f.tag, { [f.usedTag]: y.has(e) }),
                                children: e
                            },
                            e
                        )
                    )
                })
            ]
        });
    };
