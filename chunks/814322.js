n.d(t, { Z: () => w });
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(442837),
    c = n(393238),
    l = n(522474),
    u = n(451478),
    d = n(626135),
    f = n(830917),
    p = n(120421),
    m = n(328665),
    g = n(268519),
    b = n(723682),
    y = n(424984),
    h = n(326955),
    x = n(550688),
    v = n(190328),
    O = n(423915),
    j = n(477839),
    N = n(981631),
    _ = n(412190);
function P() {
    let e = Math.floor((0, i.e7)([p.Z], () => p.Z.currentPoints)),
        t = e.toString().length,
        n = '0'.repeat(Math.max(0, j.eg - t));
    return (0, r.jsxs)('div', {
        className: _.points,
        children: [
            (0, r.jsx)('span', {
                className: _.pointsPadding,
                children: n
            }),
            (0, r.jsx)('span', {
                className: _.pointsValue,
                children: e
            })
        ]
    });
}
function C(e) {
    let { items: t, width: n, height: s, isPaused: o, windowKey: a } = e,
        c = (0, i.e7)([p.Z], () => p.Z.purchasedItems);
    return null == s || null == n
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: t.map((e) => {
                  if (null == c[e]) return;
                  let t = b.pp[e];
                  return (0, r.jsx)(
                      t,
                      {
                          isPaused: o,
                          width: n,
                          height: s,
                          windowKey: a
                      },
                      e
                  );
              })
          });
}
function Z() {
    return (0, m.f)(), (0, g.Z)(), null;
}
function w(e) {
    let { className: t, windowKey: n } = e,
        { ref: o, width: m, height: g } = (0, c.ZP)(),
        { ref: j, height: w } = (0, c.ZP)(),
        E = (0, i.e7)([p.Z], () => p.Z.lifetimePoints > 0),
        S = (0, i.e7)([u.Z, l.Z], () => {
            let e = l.Z.getWindow(n);
            return null == e || !u.Z.isFocused((0, f.ZY)(e));
        });
    return (
        (0, s.useEffect)(() => {
            d.default.track(N.rMx.CLICKER_GAME_LAUNCHED, { launch_type: E ? 'CONTINUE' : 'NEW' });
        }, []),
        (0, r.jsxs)('div', {
            ref: o,
            className: a()(t, _.container),
            children: [
                (0, r.jsx)('div', {
                    className: _.fullscreenItems,
                    children: (0, r.jsx)(C, {
                        items: b.nw,
                        width: m,
                        height: g,
                        isPaused: S,
                        windowKey: n
                    })
                }),
                (0, r.jsxs)('div', {
                    className: _.aboveGround,
                    children: [
                        (0, r.jsx)('div', {
                            className: _.fullscreenItems,
                            children: (0, r.jsx)(C, {
                                items: b.uK,
                                width: m,
                                height: g,
                                isPaused: S,
                                windowKey: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: _.buttonAndPoints,
                            children: [
                                (0, r.jsx)(C, {
                                    items: b.rQ,
                                    width: m,
                                    height: g,
                                    isPaused: S,
                                    windowKey: n
                                }),
                                (0, r.jsx)(P, {}),
                                (0, r.jsx)('div', {
                                    className: _.pointsItems,
                                    children: (0, r.jsx)(C, {
                                        items: b.ci,
                                        width: m,
                                        height: g,
                                        isPaused: S,
                                        windowKey: n
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: _.fullscreenItems,
                            ref: j,
                            children: (0, r.jsx)(C, {
                                items: b.Ou,
                                width: m,
                                height: w,
                                isPaused: S,
                                windowKey: n
                            })
                        })
                    ]
                }),
                (0, r.jsx)('div', { className: _.groundLine }),
                (0, r.jsxs)('div', {
                    className: _.mainInteractables,
                    children: [
                        (0, r.jsx)(x.Z, { className: _.primaryShop }),
                        (0, r.jsxs)(y.Z, {
                            className: _.toolbar,
                            children: [
                                (0, r.jsx)(v.Z, {}),
                                (0, r.jsx)('div', { className: _.toolbarSpacer }),
                                (0, r.jsx)(C, {
                                    items: b.WY,
                                    width: m,
                                    height: g,
                                    isPaused: S,
                                    windowKey: n
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: _.fullscreenItems,
                    children: [
                        (0, r.jsx)(C, {
                            items: b.wT,
                            width: m,
                            height: g,
                            isPaused: S,
                            windowKey: n
                        }),
                        (0, r.jsx)(O.Z, {})
                    ]
                }),
                (0, r.jsx)(Z, {}),
                (0, r.jsx)(h.Z, {})
            ]
        })
    );
}
