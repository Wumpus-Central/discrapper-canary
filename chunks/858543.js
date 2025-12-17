n.d(t, {
    DM: () => x,
    ZP: () => j,
});
var s = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    r = n(692547),
    i = n(28664),
    o = n(481060),
    c = n(109434),
    u = n(456269),
    d = n(479099),
    m = n(176505),
    h = n(388032),
    g = n(112021),
    f = n(458681);
function x(e) {
    let { channel: t, isNew: n } = e,
        s = (0, u.eV)(t),
        l = s.slice(void 0, 3),
        a = s.slice(3),
        r = s.length > 3 ? s.length - 3 : 0,
        i = t.hasFlag(m.zZ.PINNED),
        o = l.length > 0 || i || n;
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
    let { channel: t, isNew: n, tagsClassName: l, className: u } = e,
        {
            shownTags: m,
            remainingTags: j,
            moreTagsCount: b,
            isPinned: v,
            shouldRenderTagsRow: p,
        } = x({
            channel: t,
            isNew: n,
        }),
        { tagFilter: N } = (0, c.H)(t.id);
    return p
        ? (0, s.jsxs)("div", {
              className: a()(f.tags, u),
              children: [
                  n
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
