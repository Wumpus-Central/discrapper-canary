n.d(t, {
    N: () => d,
}),
    n(896048),
    n(321073),
    n(733351),
    n(638769);
var a = n(627968),
    l = n(64700),
    r = n(614820),
    i = n(397927),
    s = n(231643),
    o = n(890288);

function c(e) {
    let { label: t } = e;
    return (0, a.jsx)("div", {
        className: o.G,
        children: t,
    });
}

function d(e, t) {
    let [n, o] = l.useState(""),
        d = l.useMemo(() => {
            if ("" === n.trim()) return e;
            let t = n.toLowerCase().trim();
            return e.filter((e) => {
                var n, a, l;
                let i = (null != (n = (0, r.O)(e.name)) ? n : "").toLowerCase(),
                    s = (null != (a = e.group) ? a : "").toLowerCase(),
                    o = null != (l = e.tags) ? l : [];
                return (
                    i.includes(t) ||
                    e.id.toLowerCase().includes(t) ||
                    s.includes(t) ||
                    o.some((e) => e.toLowerCase().includes(t))
                );
            });
        }, [e, n]);
    return [
        l.useMemo(
            () =>
                (0, a.jsx)(
                    i.aK1,
                    {
                        id: "devtools-search",
                        control: (e, t) => {
                            var l, r;
                            return (0, a.jsx)(
                                i.VPO,
                                ((l = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            a = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (a = a.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            a.forEach(function (t) {
                                                var a;
                                                (a = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: a,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = a);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (r = r =
                                    {
                                        query: n,
                                        onChange: o,
                                        placeholder: "Search DevTools...",
                                        ref: t,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, a);
                                          }
                                          return n;
                                      })(Object(r)).forEach(function (e) {
                                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                                      }),
                                l),
                            );
                        },
                    },
                    "devtools-search",
                ),
            [n],
        ),
        ...l.useMemo(() => {
            let e = [];
            if ("" !== n.trim() && 0 === d.length)
                e.push(
                    (0, a.jsx)(
                        i.Drp,
                        {
                            id: "devtools-no-results",
                            label: 'No DevTools found for "'.concat(n, '"'),
                            disabled: !0,
                        },
                        "devtools-no-results",
                    ),
                );
            else {
                let l = d.filter((e) => e.group === s.fu.NONE),
                    o = (function (e) {
                        let t = new Map();
                        for (let a of e) {
                            var n;
                            let e = null != (n = t.get(a.group)) ? n : [];
                            e.push(a), t.set(a.group, e);
                        }
                        return t;
                    })(d.filter((e) => e.group !== s.fu.NONE));
                l.forEach((n) => {
                    let { id: l, name: r } = n;
                    return e.push(
                        (0, a.jsx)(
                            i.Drp,
                            {
                                id: l,
                                void_label: (0, a.jsx)(c, {
                                    label: r,
                                }),
                                action: () => t(l),
                            },
                            l,
                        ),
                    );
                }),
                    s.BW.forEach((l) => {
                        let s = o.get(l);
                        if (null != s && s.length > 0) {
                            let o = s.sort((e, t) => {
                                var n, a;
                                return (null != (n = (0, r.O)(e.name)) ? n : "").localeCompare(
                                    null != (a = (0, r.O)(t.name)) ? a : "",
                                );
                            });
                            "" === n.trim()
                                ? e.push(
                                      (0, a.jsx)(
                                          i.Drp,
                                          {
                                              id: "devtools-".concat(l),
                                              void_label: (0, a.jsx)(c, {
                                                  label: l,
                                              }),
                                              children: (0, a.jsx)(i.rXV, {
                                                  children: o.map((e) =>
                                                      (0, a.jsx)(
                                                          i.Drp,
                                                          {
                                                              id: "devtools-".concat(e.id),
                                                              void_label: (0, a.jsx)(c, {
                                                                  label: e.name,
                                                              }),
                                                              action: () => t(e.id),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                          },
                                          "devtools-".concat(l),
                                      ),
                                  )
                                : e.push(
                                      (0, a.jsx)(
                                          i.rXV,
                                          {
                                              label: l,
                                              children: o.map((e) =>
                                                  (0, a.jsx)(
                                                      i.Drp,
                                                      {
                                                          id: "devtools-filtered-".concat(e.id),
                                                          void_label: (0, a.jsx)(c, {
                                                              label: e.name,
                                                          }),
                                                          action: () => t(e.id),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          },
                                          "devtools-filtered-".concat(l),
                                      ),
                                  );
                        }
                    });
            }
            return e;
        }, [d, n, t]),
    ];
}
