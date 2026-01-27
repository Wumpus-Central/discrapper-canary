n.d(t, {
    A: () => A,
}),
    n(667532);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(263063),
    o = n(71393),
    c = n(711014),
    d = n(403362),
    u = n(612025),
    _ = n(303351),
    p = n(985018),
    m = n(208227);
let g = {
    label: () => p.intl.string(p.t["32u1Dx"]),
    value: u.YG,
};

function A() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, u.xk)(),
        n = (0, l.bG)([c.Ay], () => c.Ay.getFlattenedGuildIds()),
        p = (0, l.bG)([o.A], () => o.A.getGuilds()),
        { hideGuildOptions: A, hideGlobalOption: f } = (0, _.Z)(),
        h = n[0];
    i.useEffect(() => {
        (f && A) || (e === u.YG && e !== h && f && t(h), e !== u.YG && A && t(u.YG));
    }, [e, t, f, A, h]);
    let b = i.useMemo(() => {
        var e, t;
        let i = A
            ? []
            : n
                  .map((e) => {
                      let t = p[e];
                      return null == t
                          ? null
                          : {
                                id: t.id,
                                label: t.name,
                                value: t.id,
                                leading: (0, r.jsx)(a.A, {
                                    className: m.cl,
                                    guild: t,
                                    size: a.A.Sizes.SMALLER,
                                    active: !0,
                                }),
                            };
                  })
                  .filter(d.Vq);
        return (
            f ||
                i.unshift(
                    ((e = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, g)),
                    (t = t =
                        {
                            id: g.value,
                            label: g.label(),
                            leading: (0, r.jsx)("div", {
                                className: m.KP,
                                children: (0, r.jsx)(s.pVd, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: m.cl,
                                }),
                            }),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          }),
                    e),
                ),
            i
        );
    }, [A, n, f, p]);
    return (0, r.jsx)(s.ZiE, {
        selectionMode: "single",
        onSelectionChange: (e) => {
            t(e);
        },
        value: e,
        options: b,
    });
}
