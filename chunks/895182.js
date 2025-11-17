n.d(t, { Z: () => g });
var a = n(54381),
    l = n(473749),
    r = n(660815),
    i = n(442837),
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
function g() {
    let e = (0, i.e7)([m.Z], () => m.Z.getGuildId()),
        t = (0, i.e7)([u.Z], () => {
            var t;
            return null == (t = u.Z.getGuild(e)) ? void 0 : t.name;
        }),
        n = (0, i.e7)([d.Z], () => {
            var t;
            return null == (t = d.Z.getStateForGuild(e)) ? void 0 : t.instances;
        }),
        g = l.useMemo(() => Object.values(null != n ? n : {})[0], [n]),
        f = l.useCallback(
            (t) => {
                null != g &&
                    null != e &&
                    o.Z.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: x(h({}, g), { status: t }),
                    });
            },
            [g, e],
        ),
        b = l.useMemo(
            () =>
                Object.values(r.V).map((e) =>
                    (0, a.jsx)(
                        s.Button,
                        {
                            variant: "primary",
                            text: e,
                            onClick: () => {
                                f(e);
                            },
                        },
                        e,
                    ),
                ),
            [f],
        ),
        v = l.useCallback(() => {
            null != g &&
                null != e &&
                o.Z.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: x(h({}, g), {
                        serverIP: void 0,
                        port: void 0,
                        gameServerPanelUrl: void 0,
                    }),
                });
        }, [g, e]);
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
                              children: "Set server state for first server: ".concat(null == g ? void 0 : g.name),
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
