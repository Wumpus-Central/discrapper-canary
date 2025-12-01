t.d(n, {
    DM: () => x,
    ZP: () => j,
});
var s = t(54381);
t(473749);
var l = t(120356),
    a = t.n(l),
    r = t(692547),
    i = t(28664),
    o = t(481060),
    c = t(109434),
    u = t(456269),
    d = t(479099),
    m = t(176505),
    h = t(388032),
    g = t(586301),
    f = t(240778);
function x(e) {
    let { channel: n, isNew: t } = e,
        s = (0, u.eV)(n),
        l = s.slice(void 0, 3),
        a = s.slice(3),
        r = s.length > 3 ? s.length - 3 : 0,
        i = n.hasFlag(m.zZ.PINNED),
        o = l.length > 0 || i || t;
    return {
        shownTags: l,
        remainingTags: a,
        moreTagsCount: r,
        isPinned: i,
        shouldRenderTagsRow: o,
        forumPostContainsTags: s.length > 0,
    };
}
function j(e) {
    let { channel: n, isNew: t, tagsClassName: l, className: u } = e,
        {
            shownTags: m,
            remainingTags: j,
            moreTagsCount: b,
            isPinned: v,
            shouldRenderTagsRow: p,
        } = x({
            channel: n,
            isNew: t,
        }),
        { tagFilter: N } = (0, c.H)(n.id);
    return p
        ? (0, s.jsxs)("div", {
              className: a()(f.tags, u),
              children: [
                  t
                      ? (0, s.jsx)(o.IGR, {
                            className: a()(g.newBadge, g.inTagsRow),
                            color: r.Z.unsafe_rawColors.BRAND_260.css,
                            text: h.intl.string(h.t.y2b7CA),
                        })
                      : null,
                  v &&
                      (0, s.jsx)("div", {
                          className: f.pinIcon,
                          children: (0, s.jsx)(i.u, {
                              text: h.intl.string(h.t["1QLRYb"]),
                              children: (0, s.jsx)(o.qQX, {
                                  size: "custom",
                                  width: 16,
                                  height: 16,
                                  color: "white",
                              }),
                          }),
                      }),
                  m.map((e) =>
                      (0, s.jsx)(
                          d.Z,
                          {
                              tag: e,
                              size: d.Z.Sizes.SMALL,
                              className: a()(l, { [f.tagFiltered]: N.has(e.id) }),
                          },
                          e.id,
                      ),
                  ),
                  b > 0
                      ? (0, s.jsx)(d.f, {
                            tags: j,
                            count: b,
                            size: d.Z.Sizes.SMALL,
                        })
                      : null,
              ],
          })
        : null;
}
