n.d(t, {
    DM: () => x,
    ZP: () => j,
});
var l = n(951288);
n(647438);
var a = n(120356),
    s = n.n(a),
    r = n(692547),
    i = n(28664),
    o = n(481060),
    c = n(109434),
    u = n(456269),
    d = n(479099),
    m = n(176505),
    h = n(388032),
    g = n(586301),
    f = n(240778);
function x(e) {
    let { channel: t, isNew: n } = e,
        l = (0, u.eV)(t),
        a = l.slice(void 0, 3),
        s = l.slice(3),
        r = l.length > 3 ? l.length - 3 : 0,
        i = t.hasFlag(m.zZ.PINNED),
        o = a.length > 0 || i || n;
    return {
        shownTags: a,
        remainingTags: s,
        moreTagsCount: r,
        isPinned: i,
        shouldRenderTagsRow: o,
        forumPostContainsTags: l.length > 0,
    };
}
function j(e) {
    let { channel: t, isNew: n, tagsClassName: a, className: u } = e,
        {
            shownTags: m,
            remainingTags: j,
            moreTagsCount: b,
            isPinned: p,
            shouldRenderTagsRow: v,
        } = x({
            channel: t,
            isNew: n,
        }),
        { tagFilter: N } = (0, c.H)(t.id);
    return v
        ? (0, l.jsxs)("div", {
              className: s()(f.tags, u),
              children: [
                  n
                      ? (0, l.jsx)(o.IGR, {
                            className: s()(g.newBadge, g.inTagsRow),
                            color: r.Z.unsafe_rawColors.BRAND_260.css,
                            text: h.intl.string(h.t.y2b7CA),
                        })
                      : null,
                  p &&
                      (0, l.jsx)("div", {
                          className: f.pinIcon,
                          children: (0, l.jsx)(i.u, {
                              text: h.intl.string(h.t["1QLRYW"]),
                              children: (0, l.jsx)(o.qQX, {
                                  size: "custom",
                                  width: 16,
                                  height: 16,
                                  color: "white",
                              }),
                          }),
                      }),
                  m.map((e) =>
                      (0, l.jsx)(
                          d.Z,
                          {
                              tag: e,
                              size: d.Z.Sizes.SMALL,
                              className: s()(a, { [f.tagFiltered]: N.has(e.id) }),
                          },
                          e.id,
                      ),
                  ),
                  b > 0
                      ? (0, l.jsx)(d.f, {
                            tags: j,
                            count: b,
                            size: d.Z.Sizes.SMALL,
                        })
                      : null,
              ],
          })
        : null;
}
