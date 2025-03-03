n.d(t, {
    Z: () => j,
    d: () => N
}),
    n(47120);
var a = n(200651),
    i = n(192379),
    l = n(468194),
    s = n(442837),
    r = n(477690),
    c = n(481060),
    o = n(100527),
    d = n(906732),
    u = n(430824),
    p = n(594174),
    f = n(115130),
    g = n(566620),
    m = n(127255),
    v = n(880308),
    h = n(451576),
    b = n(439934),
    x = n(701488),
    _ = n(388032),
    C = n(671046);
let I = (0, l.Mg)(r.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
    y = (0, l.Mg)(r.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
    T = (0, l.Mg)(r.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
function j(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: r, onActivityItemVisible: x, scrollerRef: j } = e,
        [N, Z] = i.useState(0),
        S = (0, m.Z)({
            guildId: n,
            enableFilter: !0
        }),
        O = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        E = (0, s.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        { analyticsLocations: A } = (0, d.ZP)(o.Z.ACTIVITY_DIRECTORY),
        M = (0, h.Z)(null == t ? void 0 : t.id),
        { isDeveloperActivityShelfEnabled: P, filter: w } = (0, s.cj)([f.Z], () => ({
            filter: f.Z.getFilter(),
            isDeveloperActivityShelfEnabled: f.Z.getIsEnabled()
        }));
    if (
        (i.useEffect(() => {
            let e = j.current;
            if (null != e)
                return (
                    e.addEventListener('scroll', t, !1),
                    () => {
                        null != e && e.removeEventListener('scroll', t, !1);
                    }
                );
            function t() {
                var e, t;
                Z(null !== (t = null === (e = j.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0);
            }
        }, [j]),
        i.useEffect(() => {
            (M || null != n) &&
                (0, g.w1)({
                    guildId: n,
                    force: !0
                });
        }, [n, M]),
        (0, v.g)(),
        (null == E && !M) || null == O)
    )
        return null;
    let L = S.length > 0;
    return (0, a.jsx)(d.Gt, {
        value: A,
        children: (0, a.jsxs)('div', {
            className: C.scrollContainer,
            children: [
                L
                    ? (0, a.jsx)('div', {
                          className: C.scrollBackgroundContainer,
                          style: { top: -N },
                          children: (0, a.jsx)('div', {
                              className: C.scrollTierBackground,
                              style: {
                                  height: ((e) => {
                                      let t = 1 === e.length;
                                      return I + Math.ceil(e.length / 2) * (t ? T : y);
                                  })(S)
                              }
                          })
                      })
                    : null,
                (0, a.jsxs)(c.Ttm, {
                    ref: j,
                    className: C.scroller,
                    children: [
                        null,
                        L && null != t
                            ? (0, a.jsx)('div', {
                                  className: C.scrollSection,
                                  children: (0, a.jsx)('div', {
                                      className: C.shelf,
                                      children: S.map((e) =>
                                          (0, a.jsx)(
                                              b.Z,
                                              {
                                                  large: 1 === S.length,
                                                  activityItem: e,
                                                  context: {
                                                      channel: t,
                                                      type: 'channel'
                                                  },
                                                  guildId: n,
                                                  locationObject: l,
                                                  onActivityItemVisible: x,
                                                  onActivityItemSelected: () => {
                                                      var t;
                                                      e.application.id, r();
                                                  }
                                              },
                                              'activity-shelf-item-'.concat(e.application.id)
                                          )
                                      )
                                  })
                              })
                            : P && w.length > 0
                              ? (0, a.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    className: C.filterError,
                                    children: _.NW.format(_.t.p0PRFB, { filter: w })
                                })
                              : (0, a.jsx)('div', {
                                    className: C.spinnerContainer,
                                    children: (0, a.jsx)(c.$jN, {})
                                })
                    ]
                })
            ]
        })
    });
}
function N() {
    return (0, a.jsx)(c.Text, {
        variant: 'text-sm/normal',
        children: _.NW.format(_.t.fijcEB, { surveyURL: x.Es })
    });
}
