n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(397927),
    s = n(49229),
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
    let {
            user: t,
            location: f = "ContextMenu",
            onFriendRequestSent: _,
            onFriendRemove: h,
            appContext: m,
            setLoading: g,
        } = e,
        { id: E, username: y, bot: b } = t,
        O = (0, a.bG)([u.default], () => {
            var e;
            return (null == (e = u.default.getCurrentUser()) ? void 0 : e.id) === E;
        }, [E]),
        v = (0, l.D)(E),
        [A, I] = (0, a.yK)([c.A], () => [c.A.isFriend(E), c.A.isBlocked(E)], [E]),
        [S, T] = i.useState(!1);
    if (b || O) return null;

    function C() {
        (0, o.mMO)(
            async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 158954));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        p(
                            {
                                title: d.intl.formatToPlainString(d.t.fPLvZd, {
                                    name: y,
                                }),
                                subtitle: d.intl.format(d.t.l5FFq6, {
                                    name: y,
                                }),
                                confirmText: d.intl.string(d.t.cvSt1J),
                                cancelText: d.intl.string(d.t["ETE/oC"]),
                                onConfirm: () => {
                                    s.A.removeFriend(E, {
                                        location: f,
                                    }),
                                        T(!1),
                                        null == h || h();
                                },
                            },
                            t,
                        ),
                    );
            },
            {
                contextKey: null != m ? (0, o.TId)(m) : void 0,
            },
        );
    }
    return A
        ? (0, r.jsx)(o.Drp, {
              id: "remove-friend",
              label: d.intl.string(d.t.cvSt1J),
              action: C,
          })
        : (0, r.jsx)(o.Drp, {
              id: "add-friend",
              label: S ? d.intl.string(d.t.xMH6vD) : v,
              action: async () => {
                  S ||
                      (null == g || g(!0),
                      await s.A.addRelationship({
                          userId: E,
                          context: {
                              location: f,
                          },
                      }),
                      T(!0),
                      null == _ || _(),
                      null == g || g(!1));
              },
              disabled: I || (S && !A),
          });
}
