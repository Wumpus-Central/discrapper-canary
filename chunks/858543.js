n.d(t, {
    DM: () => f,
    ZP: () => g
});
var i = n(255367);
n(73800);
var r = n(120356),
    o = n.n(r),
    l = n(692547),
    a = n(481060),
    s = n(109434),
    c = n(456269),
    u = n(479099),
    d = n(176505),
    h = n(388032),
    p = n(475867),
    m = n(867418);
function f(e) {
    let { channel: t, isNew: n } = e,
        i = (0, c.eV)(t),
        r = i.slice(void 0, 3),
        o = i.slice(3),
        l = i.length > 3 ? i.length - 3 : 0,
        a = t.hasFlag(d.zZ.PINNED),
        s = r.length > 0 || a || n;
    return {
        shownTags: r,
        remainingTags: o,
        moreTagsCount: l,
        isPinned: a,
        shouldRenderTagsRow: s,
        forumPostContainsTags: i.length > 0
    };
}
function g(e) {
    let { channel: t, isNew: n, tagsClassName: r, className: c } = e,
        {
            shownTags: d,
            remainingTags: g,
            moreTagsCount: b,
            isPinned: O,
            shouldRenderTagsRow: j
        } = f({
            channel: t,
            isNew: n
        }),
        { tagFilter: v } = (0, s.H)(t.id);
    return j
        ? (0, i.jsxs)('div', {
              className: o()(m.tags, c),
              children: [
                  n
                      ? (0, i.jsx)(a.IGR, {
                            className: o()(p.newBadge, p.inTagsRow),
                            color: l.Z.unsafe_rawColors.BRAND_260.css,
                            text: h.intl.string(h.t.y2b7CA)
                        })
                      : null,
                  O &&
                      (0, i.jsx)('div', {
                          className: m.pinIcon,
                          children: (0, i.jsx)(a.ua7, {
                              text: h.intl.string(h.t['1QLRYW']),
                              children: (e) => {
                                  var t, n;
                                  return (0, i.jsx)(
                                      a.qQX,
                                      ((t = (function (e) {
                                          for (var t = 1; t < arguments.length; t++) {
                                              var n = null != arguments[t] ? arguments[t] : {},
                                                  i = Object.keys(n);
                                              'function' == typeof Object.getOwnPropertySymbols &&
                                                  (i = i.concat(
                                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                      })
                                                  )),
                                                  i.forEach(function (t) {
                                                      var i;
                                                      (i = n[t]),
                                                          t in e
                                                              ? Object.defineProperty(e, t, {
                                                                    value: i,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0
                                                                })
                                                              : (e[t] = i);
                                                  });
                                          }
                                          return e;
                                      })({ size: 'custom' }, e)),
                                      (n = n =
                                          {
                                              width: 16,
                                              height: 16,
                                              color: 'white'
                                          }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var i = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, i);
                                                }
                                                return n;
                                            })(Object(n)).forEach(function (e) {
                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                            }),
                                      t)
                                  );
                              }
                          })
                      }),
                  d.map((e) =>
                      (0, i.jsx)(
                          u.Z,
                          {
                              tag: e,
                              size: u.Z.Sizes.SMALL,
                              className: o()(r, { [m.tagFiltered]: v.has(e.id) })
                          },
                          e.id
                      )
                  ),
                  b > 0
                      ? (0, i.jsx)(u.f, {
                            tags: g,
                            count: b,
                            size: u.Z.Sizes.SMALL
                        })
                      : null
              ]
          })
        : null;
}
