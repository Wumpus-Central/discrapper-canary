i.d(t, {
    DM: () => g,
    ZP: () => f
});
var n = i(200651);
i(192379);
var a = i(120356),
    o = i.n(a),
    s = i(692547),
    l = i(481060),
    r = i(109434),
    c = i(456269),
    d = i(479099),
    u = i(176505),
    h = i(388032),
    m = i(427699),
    p = i(614718);
function g(e) {
    let { channel: t, isNew: i } = e,
        n = (0, c.eV)(t),
        a = n.slice(void 0, 3),
        o = n.slice(3),
        s = n.length > 3 ? n.length - 3 : 0,
        l = t.hasFlag(u.zZ.PINNED),
        r = a.length > 0 || l || i;
    return {
        shownTags: a,
        remainingTags: o,
        moreTagsCount: s,
        isPinned: l,
        shouldRenderTagsRow: r,
        forumPostContainsTags: n.length > 0
    };
}
function f(e) {
    let { channel: t, isNew: i, tagsClassName: a, className: c } = e,
        {
            shownTags: u,
            remainingTags: f,
            moreTagsCount: v,
            isPinned: x,
            shouldRenderTagsRow: b
        } = g({
            channel: t,
            isNew: i
        }),
        { tagFilter: T } = (0, r.H)(t.id);
    return b
        ? (0, n.jsxs)('div', {
              className: o()(p.tags, c),
              children: [
                  i
                      ? (0, n.jsx)(l.IGR, {
                            className: o()(m.newBadge, m.inTagsRow),
                            color: s.Z.unsafe_rawColors.BRAND_260.css,
                            text: h.intl.string(h.t.y2b7CA)
                        })
                      : null,
                  x &&
                      (0, n.jsx)('div', {
                          className: p.pinIcon,
                          children: (0, n.jsx)(l.ua7, {
                              text: h.intl.string(h.t['1QLRYW']),
                              children: (e) =>
                                  (0, n.jsx)(l.qQX, {
                                      size: 'custom',
                                      ...e,
                                      width: 16,
                                      height: 16,
                                      color: 'white'
                                  })
                          })
                      }),
                  u.map((e) =>
                      (0, n.jsx)(
                          d.Z,
                          {
                              tag: e,
                              size: d.Z.Sizes.SMALL,
                              className: o()(a, { [p.tagFiltered]: T.has(e.id) })
                          },
                          e.id
                      )
                  ),
                  v > 0
                      ? (0, n.jsx)(d.f, {
                            tags: f,
                            count: v,
                            size: d.Z.Sizes.SMALL
                        })
                      : null
              ]
          })
        : null;
}
