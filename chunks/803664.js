n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(49229),
    l = n(327166),
    c = n(994500),
    u = n(287809),
    d = n(985018);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e) {
    let { user: t, location: f = "ContextMenu", onFriendRequestSent: _, onFriendRemove: h, appContext: m } = e,
        { id: g, username: E, bot: b } = t,
        y = (0, a.bG)([u.default], () => {
            var e;
            return (null == (e = u.default.getCurrentUser()) ? void 0 : e.id) === g;
        }, [g]),
        O = (0, l.D)(g),
        [A, v] = (0, a.yK)([c.A], () => [c.A.isFriend(g), c.A.isBlocked(g)], [g]),
        [S, I] = i.useState(!1);
    if (b || y) return null;

    function T() {
        (0, s.mMO)(
            async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 158954));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        p(
                            {
                                title: d.intl.formatToPlainString(d.t.fPLvZd, {
                                    name: E,
                                }),
                                subtitle: d.intl.format(d.t.l5FFq6, {
                                    name: E,
                                }),
                                confirmText: d.intl.string(d.t.cvSt1J),
                                cancelText: d.intl.string(d.t["ETE/oC"]),
                                onConfirm: () => {
                                    o.A.removeFriend(g, {
                                        location: f,
                                    }),
                                        I(!1),
                                        null == h || h();
                                },
                            },
                            t,
                        ),
                    );
            },
            {
                contextKey: null != m ? (0, s.TId)(m) : void 0,
            },
        );
    }
    return A
        ? (0, r.jsx)(s.Drp, {
              id: "remove-friend",
              label: d.intl.string(d.t.cvSt1J),
              action: T,
          })
        : (0, r.jsx)(s.Drp, {
              id: "add-friend",
              label: S ? d.intl.string(d.t.xMH6vD) : O,
              action: () => {
                  S ||
                      (o.A.addRelationship({
                          userId: g,
                          context: {
                              location: f,
                          },
                      }),
                      I(!0),
                      null == _ || _());
              },
              disabled: v || (S && !A),
          });
}
