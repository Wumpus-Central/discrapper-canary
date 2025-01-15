i(47120);
var s = i(200651),
    n = i(192379),
    r = i(120356),
    a = i.n(r),
    l = i(418435),
    o = i.n(l),
    d = i(442837),
    c = i(481060),
    u = i(558324),
    m = i(367907),
    g = i(456268),
    x = i(626135),
    h = i(999382),
    p = i(654351),
    v = i(259674),
    f = i(203377),
    N = i(981631),
    I = i(388032),
    S = i(331592);
let j = /^[A-Za-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]+$/u;
t.Z = (e) => {
    var t;
    let { guild: i, guildMetadata: r, headerId: l } = e,
        [C, T] = n.useState(!1),
        E = (0, d.e7)([h.Z], () => 'keywords' in h.Z.getErrors()),
        y = (e) => {
            if (j.test(e)) T(!1);
            else {
                T(!0);
                return;
            }
            if ((null == i ? void 0 : i.id) == null) return;
            let { keywords: t } = r;
            !(t.length >= f.G7) && (0, g.zH)(i.id, o()([...t, e.toLowerCase()]));
        },
        b = (e) => {
            y(e),
                x.default.track(N.rMx.DISCOVERY_SETUP_POPULAR_TAG_CLICKED, {
                    tag: e,
                    primary_category_id: r.primaryCategoryId,
                    ...(0, m.hH)(i.id)
                });
        },
        _ = C
            ? I.intl.string(I.t['t/mtnZ'])
            : E
              ? I.intl.format(I.t.loup7u, {
                    onLearnMoreClick: () => {
                        (0, v.lW)({
                            articleId: N.BhN.SERVER_DISCOVERY_GUIDELINES,
                            guildId: i.id,
                            modalStep: v.tK.TAGS
                        });
                    }
                })
              : null,
        k = new Set(r.keywords);
    return (0, s.jsxs)('div', {
        className: S.container,
        children: [
            (0, s.jsxs)('div', {
                className: S.content,
                children: [
                    (0, s.jsx)('div', { className: a()(S.stepImage, S.tagImage) }),
                    (0, s.jsx)(c.Heading, {
                        variant: 'heading-xl/semibold',
                        className: S.header,
                        id: l,
                        children: I.intl.string(I.t['0PJZXl'])
                    }),
                    (0, s.jsx)(c.Text, {
                        color: 'none',
                        variant: 'text-md/normal',
                        className: S.headerCaption,
                        children: I.intl.string(I.t.MMEJFB)
                    })
                ]
            }),
            (0, s.jsxs)(c.FormSection, {
                className: S.form,
                children: [
                    (0, s.jsx)(c.FormTitle, {
                        required: !0,
                        children: I.intl.string(I.t['0PJZXl'])
                    }),
                    (0, s.jsx)(c.FormText, {
                        type: c.FormTextTypes.DESCRIPTION,
                        className: S.description,
                        children: I.intl.string(I.t.ztiTDA)
                    }),
                    (0, s.jsx)(u.Z, {
                        className: a()(S.tags, { [S.error]: null != _ }),
                        tags: r.keywords,
                        onRemoveTag: (e) => {
                            if ((null == i ? void 0 : i.id) == null) return;
                            let t = [...r.keywords];
                            t.splice(e, 1), (0, g.zH)(i.id, t);
                        },
                        onAddTag: y,
                        maxTags: f.G7,
                        maxTaxLength: f._0,
                        placeholder: (null == r ? void 0 : null === (t = r.keywords) || void 0 === t ? void 0 : t.length) === 0 ? I.intl.string(I.t.EL4Lho) : ''
                    }),
                    (0, s.jsx)(c.Text, {
                        className: S.error,
                        color: 'text-danger',
                        variant: 'text-sm/normal',
                        children: _
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: S.form,
                children: (0, s.jsx)(c.FormTitle, { children: I.intl.string(I.t.sF28Oj) })
            }),
            (0, s.jsx)('div', {
                className: S.tagContainer,
                children: (0, p.P5)(r.primaryCategoryId).map((e) =>
                    (0, s.jsx)(
                        c.Anchor,
                        {
                            onClick: () => b(e),
                            className: a()(S.tag, { [S.usedTag]: k.has(e) }),
                            children: e
                        },
                        e
                    )
                )
            })
        ]
    });
};
