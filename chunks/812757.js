i.d(e, { t: () => g });
var n = i(627968),
    l = i(64700),
    s = i(284009),
    r = i.n(s),
    u = i(311907),
    a = i(397927),
    o = i(97260),
    T = i(117178),
    A = i(419954),
    S = i(532624),
    E = i(780964),
    d = i(652215),
    _ = i(985018),
    I = i(280973);
let g = (0, A.E2)(E.X.CLIPS_KEYBIND, {
    useSearchTerms: () => [_.intl.string(_.t.pf54EU), _.intl.string(_.t["QyB/jK"])],
    Component: () => {
        let t = (0, u.bG)([S.Ay], () => S.Ay.getKeybindForAction(d.hCu.SAVE_CLIP, !0));
        r()(null != t, "Save clip keybind unset");
        let e = l.useCallback(
            (e) => {
                var i, n;
                o.A.setKeybind(
                    ((i = (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var i = null != arguments[e] ? arguments[e] : {},
                                n = Object.keys(i);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(i).filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(i, t).enumerable;
                                    }),
                                )),
                                n.forEach(function (e) {
                                    var n;
                                    (n = i[e]),
                                        e in t
                                            ? Object.defineProperty(t, e, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (t[e] = n);
                                });
                        }
                        return t;
                    })({}, t)),
                    (n = n = { shortcut: e }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n))
                        : (function (t, e) {
                              var i = Object.keys(t);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(t);
                                  i.push.apply(i, n);
                              }
                              return i;
                          })(Object(n)).forEach(function (t) {
                              Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(n, t));
                          }),
                    i),
                );
            },
            [t],
        );
        return (0, n.jsx)(a.D0$, {
            label: _.intl.string(_.t.pf54EU),
            description: _.intl.string(_.t["QyB/jK"]),
            layout: "horizontal",
            children: (0, n.jsx)("div", {
                className: I.g,
                children: (0, n.jsx)(T.A, {
                    defaultValue: t.shortcut,
                    onChange: e,
                }),
            }),
        });
    },
});
