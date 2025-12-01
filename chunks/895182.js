n.d(t, { Z: () => f });
var a = n(54381),
    l = n(473749),
    i = n(660815),
    r = n(442837),
    s = n(481060),
    o = n(570140),
    c = n(905551),
    d = n(60482),
    u = n(430824),
    m = n(914010),
    p = n(238642);
function h(e) {
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
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f() {
    let e = (0, r.e7)([m.Z], () => m.Z.getGuildId()),
        t = (0, r.e7)([u.Z], () => {
            var t;
            return null == (t = u.Z.getGuild(e)) ? void 0 : t.name;
        }),
        n = (0, r.e7)([d.Z], () => {
            var t;
            return null == (t = d.Z.getStateForGuild(e)) ? void 0 : t.instances;
        }),
        f = l.useMemo(() => Object.values(null != n ? n : {})[0], [n]),
        g = l.useCallback(
            (t) => {
                null != f &&
                    null != e &&
                    o.Z.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: x(h({}, f), { status: t }),
                    });
            },
            [f, e],
        ),
        b = l.useMemo(
            () =>
                Object.values(i.V).map((e) =>
                    (0, a.jsx)(
                        s.Button,
                        {
                            variant: "primary",
                            text: e,
                            onClick: () => {
                                g(e);
                            },
                        },
                        e,
                    ),
                ),
            [g],
        ),
        v = l.useCallback(() => {
            null != f &&
                null != e &&
                o.Z.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: x(h({}, f), {
                        serverIP: void 0,
                        port: void 0,
                        gameServerPanelUrl: void 0,
                    }),
                });
        }, [f, e]);
    return null == e
        ? null
        : (0, a.jsxs)(s.zJl, {
              className: p.container,
              children: [
                  (0, a.jsx)("div", {
                      className: p.section,
                      children: (0, a.jsx)(s.Heading, {
                          variant: "heading-md/normal",
                          children: "Current guild: ".concat(t),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: p.section,
                      children: [
                          (0, a.jsx)(s.Text, {
                              variant: "eyebrow",
                              children: "Set server state for first server: ".concat(null == f ? void 0 : f.name),
                          }),
                          (0, a.jsx)("div", {
                              className: p.buttonContainer,
                              children: b,
                          }),
                          (0, a.jsx)(s.Text, {
                              variant: "eyebrow",
                              children: "Remove Server Info",
                          }),
                          (0, a.jsx)("div", {
                              className: p.buttonContainer,
                              children: (0, a.jsx)(s.Button, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: v,
                              }),
                          }),
                          (0, a.jsx)(s.Text, {
                              variant: "eyebrow",
                              children: "Reset server",
                          }),
                          (0, a.jsx)(s.Button, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, c.mF)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
