r.r(t), r.d(t, { default: () => a }), r(47120);
var n = r(200651),
    o = r(192379),
    l = r(481060),
    u = r(388032);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function a(e) {
    let t = o.useRef(null),
        { defaultColor: r, colors: a, value: i, onChange: b, disabled: p = !1, customPickerPosition: f = 'bottom' } = e,
        [j, O] = o.useState(() => (0 === i || i === r || a.some((e) => e === i) ? null : i));
    o.useEffect(() => {
        O(0 === i || i === r || a.some((e) => e === i) ? null : i);
    }, [i, a, r]);
    let y = o.useCallback(
            (e) => {
                null == b || b(e), O(null);
            },
            [b, O]
        ),
        d = o.useCallback(
            (e) => {
                null == b || b(e), O(e);
            },
            [b, O]
        ),
        g = o.useCallback(
            () =>
                (0, n.jsx)(l.Z$W, {
                    onChange: d,
                    value: j
                }),
            [d, j]
        ),
        h = o.useCallback(
            (e) => {
                let r = (0, n.jsx)(l.jHW, s(c({}, e), { 'aria-label': u.NW.string(u.t['FHBa//']) }));
                return p
                    ? r
                    : (0, n.jsx)(l.yRy, {
                          targetElementRef: t,
                          renderPopout: g,
                          position: f,
                          children: (e) =>
                              (0, n.jsx)(l.ua7, {
                                  targetElementRef: t,
                                  text: u.NW.string(u.t['FHBa//']),
                                  position: 'bottom',
                                  children: (o) => (0, n.jsx)('div', s(c({ ref: t }, o, e), { children: r }))
                              })
                      });
            },
            [f, p, g]
        ),
        m = o.useCallback(
            (e) => {
                let t = (0, n.jsx)(l.AGO, c({}, e));
                return p
                    ? t
                    : (0, n.jsx)(l.ua7, {
                          text: u.NW.string(u.t.bBvAEB),
                          position: 'bottom',
                          children: (e) => (0, n.jsx)('div', s(c({}, e), { children: t }))
                      });
            },
            [p]
        );
    return (0, n.jsx)(
        l.zH8,
        s(c({}, e), {
            renderDefaultButton: m,
            renderCustomButton: h,
            customColor: j,
            onChange: y
        })
    );
}
