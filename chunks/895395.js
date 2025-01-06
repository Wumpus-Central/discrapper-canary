n.d(t, {
    Z: function () {
        return y;
    },
    d: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(120356),
    s = n.n(l),
    c = n(468194),
    o = n(442837),
    r = n(477690),
    d = n(481060),
    u = n(100527),
    p = n(906732),
    f = n(430824),
    m = n(594174),
    g = n(115130),
    v = n(566620),
    h = n(127255),
    x = n(880308),
    b = n(451576),
    C = n(439934),
    I = n(701488),
    T = n(388032),
    _ = n(839895);
let Z = (0, c.Mg)(r.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
    S = (0, c.Mg)(r.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
    N = (0, c.Mg)(r.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
function y(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: c, onActivityItemVisible: r, scrollerRef: I } = e,
        [y, j] = a.useState(0),
        E = (0, h.Z)({
            guildId: n,
            enableFilter: !0
        }),
        A = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        M = (0, o.e7)([f.Z], () => f.Z.getGuild(n), [n]),
        { analyticsLocations: O } = (0, p.ZP)(u.Z.ACTIVITY_DIRECTORY),
        L = (0, b.Z)(null == t ? void 0 : t.id),
        { isDeveloperActivityShelfEnabled: w, filter: k } = (0, o.cj)([g.Z], () => ({
            filter: g.Z.getFilter(),
            isDeveloperActivityShelfEnabled: g.Z.getIsEnabled()
        }));
    if (
        (a.useEffect(() => {
            let e = I.current;
            if (null != e)
                return (
                    e.addEventListener('scroll', t, !1),
                    () => {
                        if (null != e) e.removeEventListener('scroll', t, !1);
                    }
                );
            function t() {
                var e, t;
                j(null !== (t = null === (e = I.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0);
            }
        }, [I]),
        a.useEffect(() => {
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
    let B = E.length > 0;
    return (0, i.jsx)(p.Gt, {
        value: O,
        children: (0, i.jsxs)('div', {
            className: _.scrollContainer,
            children: [
                B
                    ? (0, i.jsx)('div', {
                          className: _.scrollBackgroundContainer,
                          style: { top: -y },
                          children: (0, i.jsx)('div', {
                              className: s()(_.scrollTierBackground),
                              style: {
                                  height: ((e) => {
                                      let t = 1 === e.length;
                                      return Z + Math.ceil(e.length / 2) * (t ? N : S);
                                  })(E)
                              }
                          })
                      })
                    : null,
                (0, i.jsxs)(d.Scroller, {
                    ref: I,
                    className: _.scroller,
                    children: [
                        null,
                        B
                            ? (0, i.jsx)('div', {
                                  className: _.scrollSection,
                                  children: (0, i.jsx)('div', {
                                      className: s()(_.shelf),
                                      children: E.map((e) =>
                                          (0, i.jsx)(
                                              C.Z,
                                              {
                                                  large: 1 === E.length,
                                                  activityItem: e,
                                                  channel: t,
                                                  guildId: n,
                                                  locationObject: l,
                                                  onActivityItemVisible: r,
                                                  onActivityItemSelected: () => {
                                                      var t;
                                                      (t = e.application.id), c();
                                                  }
                                              },
                                              'activity-shelf-item-'.concat(e.application.id)
                                          )
                                      )
                                  })
                              })
                            : w && k.length > 0
                              ? (0, i.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    className: _.filterError,
                                    children: T.intl.format(T.t.p0PRFB, { filter: k })
                                })
                              : (0, i.jsx)('div', {
                                    className: _.spinnerContainer,
                                    children: (0, i.jsx)(d.Spinner, {})
                                })
                    ]
                })
            ]
        })
    });
}
function j() {
    return (0, i.jsx)(d.Text, {
        variant: 'text-sm/normal',
        children: T.intl.format(T.t.fijcEB, { surveyURL: I.Es })
    });
}
