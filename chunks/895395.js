n.d(t, {
    Z: () => N,
    d: () => j
}),
    n(47120);
var a = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    c = n(468194),
    o = n(442837),
    r = n(477690),
    d = n(481060),
    u = n(100527),
    p = n(906732),
    m = n(430824),
    g = n(594174),
    f = n(115130),
    v = n(566620),
    h = n(127255),
    x = n(880308),
    _ = n(451576),
    b = n(439934),
    C = n(701488),
    I = n(388032),
    T = n(467490);
let Z = (0, c.Mg)(r.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
    S = (0, c.Mg)(r.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
    y = (0, c.Mg)(r.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
function N(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: c, onActivityItemVisible: r, scrollerRef: C } = e,
        [N, j] = i.useState(0),
        E = (0, h.Z)({
            guildId: n,
            enableFilter: !0
        }),
        A = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        M = (0, o.e7)([m.Z], () => m.Z.getGuild(n), [n]),
        { analyticsLocations: O } = (0, p.ZP)(u.Z.ACTIVITY_DIRECTORY),
        L = (0, _.Z)(null == t ? void 0 : t.id),
        { isDeveloperActivityShelfEnabled: k, filter: w } = (0, o.cj)([f.Z], () => ({
            filter: f.Z.getFilter(),
            isDeveloperActivityShelfEnabled: f.Z.getIsEnabled()
        }));
    if (
        (i.useEffect(() => {
            let e = C.current;
            if (null != e)
                return (
                    e.addEventListener('scroll', t, !1),
                    () => {
                        null != e && e.removeEventListener('scroll', t, !1);
                    }
                );
            function t() {
                var e, t;
                j(null !== (t = null === (e = C.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0);
            }
        }, [C]),
        i.useEffect(() => {
            (L || null != n) &&
                (0, v.w1)({
                    guildId: n,
                    force: !0
                });
        }, [n, L]),
        (0, x.g)(),
        (null == M && !L) || null == A)
    )
        return null;
    let P = E.length > 0;
    return (0, a.jsx)(p.Gt, {
        value: O,
        children: (0, a.jsxs)('div', {
            className: T.scrollContainer,
            children: [
                P
                    ? (0, a.jsx)('div', {
                          className: T.scrollBackgroundContainer,
                          style: { top: -N },
                          children: (0, a.jsx)('div', {
                              className: s()(T.scrollTierBackground),
                              style: {
                                  height: ((e) => {
                                      let t = 1 === e.length;
                                      return Z + Math.ceil(e.length / 2) * (t ? y : S);
                                  })(E)
                              }
                          })
                      })
                    : null,
                (0, a.jsxs)(d.Ttm, {
                    ref: C,
                    className: T.scroller,
                    children: [
                        null,
                        P && null != t
                            ? (0, a.jsx)('div', {
                                  className: T.scrollSection,
                                  children: (0, a.jsx)('div', {
                                      className: s()(T.shelf),
                                      children: E.map((e) =>
                                          (0, a.jsx)(
                                              b.Z,
                                              {
                                                  large: 1 === E.length,
                                                  activityItem: e,
                                                  context: {
                                                      channel: t,
                                                      type: 'channel'
                                                  },
                                                  guildId: n,
                                                  locationObject: l,
                                                  onActivityItemVisible: r,
                                                  onActivityItemSelected: () => {
                                                      var t;
                                                      e.application.id, c();
                                                  }
                                              },
                                              'activity-shelf-item-'.concat(e.application.id)
                                          )
                                      )
                                  })
                              })
                            : k && w.length > 0
                              ? (0, a.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    className: T.filterError,
                                    children: I.intl.format(I.t.p0PRFB, { filter: w })
                                })
                              : (0, a.jsx)('div', {
                                    className: T.spinnerContainer,
                                    children: (0, a.jsx)(d.$jN, {})
                                })
                    ]
                })
            ]
        })
    });
}
function j() {
    return (0, a.jsx)(d.Text, {
        variant: 'text-sm/normal',
        children: I.intl.format(I.t.fijcEB, { surveyURL: C.Es })
    });
}
