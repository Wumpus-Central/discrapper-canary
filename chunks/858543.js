n.d(t, {
    DM: () => g,
    ZP: () => f
});
var i = n(200651);
n(192379);
var a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(481060),
    r = n(109434),
    c = n(456269),
    d = n(479099),
    u = n(176505),
    h = n(388032),
    m = n(994973),
    p = n(783626);
function g(e) {
    let { channel: t, isNew: n } = e,
        i = (0, c.eV)(t),
        a = i.slice(void 0, 3),
        o = i.slice(3),
        s = i.length > 3 ? i.length - 3 : 0,
        l = t.hasFlag(u.zZ.PINNED),
        r = a.length > 0 || l || n;
    return {
        shownTags: a,
        remainingTags: o,
        moreTagsCount: s,
        isPinned: l,
        shouldRenderTagsRow: r,
        forumPostContainsTags: i.length > 0
    };
}
function f(e) {
    let { channel: t, isNew: n, tagsClassName: a, className: c } = e,
        {
            shownTags: u,
            remainingTags: f,
            moreTagsCount: v,
            isPinned: T,
            shouldRenderTagsRow: x
        } = g({
            channel: t,
            isNew: n
        }),
        { tagFilter: _ } = (0, r.H)(t.id);
    return x
        ? (0, i.jsxs)('div', {
              className: o()(p.tags, c),
              children: [
                  n
                      ? (0, i.jsx)(l.IGR, {
                            className: o()(m.newBadge, m.inTagsRow),
                            color: s.Z.unsafe_rawColors.BRAND_260.css,
                            text: h.intl.string(h.t.y2b7CA)
                        })
                      : null,
                  T &&
                      (0, i.jsx)('div', {
                          className: p.pinIcon,
                          children: (0, i.jsx)(l.ua7, {
                              text: h.intl.string(h.t['1QLRYW']),
                              children: (e) =>
                                  (0, i.jsx)(l.qQX, {
                                      size: 'custom',
                                      ...e,
                                      width: 16,
                                      height: 16,
                                      color: 'white'
                                  })
                          })
                      }),
                  u.map((e) =>
                      (0, i.jsx)(
                          d.Z,
                          {
                              tag: e,
                              size: d.Z.Sizes.SMALL,
                              className: o()(a, { [p.tagFiltered]: _.has(e.id) })
                          },
                          e.id
                      )
                  ),
                  v > 0
                      ? (0, i.jsx)(d.f, {
                            tags: f,
                            count: v,
                            size: d.Z.Sizes.SMALL
                        })
                      : null
              ]
          })
        : null;
}
