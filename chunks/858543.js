n.d(t, {
    DM: function () {
        return f;
    },
    ZP: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    s = n(692547),
    l = n(481060),
    r = n(109434),
    c = n(456269),
    d = n(479099),
    u = n(176505),
    h = n(388032),
    m = n(994973),
    p = n(783626);
function f(e) {
    let { channel: t, isNew: n } = e,
        i = (0, c.eV)(t),
        o = i.slice(void 0, 3),
        a = i.slice(3),
        s = i.length > 3 ? i.length - 3 : 0,
        l = t.hasFlag(u.zZ.PINNED),
        r = o.length > 0 || l || n;
    return {
        shownTags: o,
        remainingTags: a,
        moreTagsCount: s,
        isPinned: l,
        shouldRenderTagsRow: r,
        forumPostContainsTags: i.length > 0
    };
}
function g(e) {
    let { channel: t, isNew: n, tagsClassName: o, className: c } = e,
        {
            shownTags: u,
            remainingTags: g,
            moreTagsCount: v,
            isPinned: b,
            shouldRenderTagsRow: T
        } = f({
            channel: t,
            isNew: n
        }),
        { tagFilter: x } = (0, r.H)(t.id);
    return T
        ? (0, i.jsxs)('div', {
              className: a()(p.tags, c),
              children: [
                  n
                      ? (0, i.jsx)(l.TextBadge, {
                            className: a()(m.newBadge, m.inTagsRow),
                            color: s.Z.unsafe_rawColors.BRAND_260.css,
                            text: h.intl.string(h.t.y2b7CA)
                        })
                      : null,
                  b &&
                      (0, i.jsx)('div', {
                          className: p.pinIcon,
                          children: (0, i.jsx)(l.Tooltip, {
                              text: h.intl.string(h.t['1QLRYW']),
                              children: (e) =>
                                  (0, i.jsx)(l.PinIcon, {
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
                              className: a()(o, { [p.tagFiltered]: x.has(e.id) })
                          },
                          e.id
                      )
                  ),
                  v > 0
                      ? (0, i.jsx)(d.f, {
                            tags: g,
                            count: v,
                            size: d.Z.Sizes.SMALL
                        })
                      : null
              ]
          })
        : null;
}
