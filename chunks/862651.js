n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(311907),
    l = n(397927),
    s = n(71393),
    a = n(11351),
    c = n(306444),
    o = n(922975),
    d = n(557300),
    u = n(881288),
    f = n(79143),
    g = n(127757),
    b = n(700458),
    m = n(985018);

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
}

function x(e, t) {
    return (
        (t = null != t ? t : {}),
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
        e
    );
}

function h() {
    let { editStateId: e, guildId: t } = (0, c.O)(),
        [h, j] = o.UN(e, t),
        O = (0, u.A)(t, e),
        { setCurrentTab: y } = (0, b.Tj)(),
        v = () => y(b.Oi.EMOJIS),
        A = (0, i.bG)([s.A], () => s.A.getGuild(t)),
        E = null != A ? (0, d.A)(A) : void 0;

    function N(e) {
        null == h ? j(new Set(e)) : j(new Set([...h, ...e]));
    }

    function _(e) {
        let t = new Set(h);
        t.delete(e), j(t);
    }
    let S = (0, a.gN)();
    return (0, r.jsxs)(l.D0$, {
        label: m.intl.string(m.t["D0qeO+"]),
        description: m.intl.format(m.t.zuwely, {
            premiumEmojiMaximum: E,
        }),
        helperText: m.intl.format(m.t.sEkgBk, {
            handleTransitionToManageEmoji: v,
        }),
        disabled: S,
        children: [
            (0, r.jsx)(g.d, {
                tierEmojiIds: h,
                guildId: t,
                onRemoveEmoji: function (e) {
                    e.roles.filter((e) => e !== (null == O ? void 0 : O.id)).length > 0
                        ? _(e.id)
                        : (0, l.mMO)(async () => {
                              let { default: t } = await n.e("55631").then(n.bind(n, 185074));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      x(p({}, n), {
                                          onConfirmDelete: () => {
                                              _(e.id), n.onClose();
                                          },
                                      }),
                                  );
                          });
                },
            }),
            null != h && h.size > 0
                ? (0, r.jsx)(l.hKd, {
                      size: 8,
                  })
                : null,
            (0, r.jsx)(f.n, {
                onClick: function () {
                    (0, l.mMO)(async () => {
                        let { EmojiAddModal: e } = await n.e("90410").then(n.bind(n, 126033));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                x(p({}, n), {
                                    guildId: t,
                                    initialTierEmojiIds: h,
                                    onSubmit: N,
                                    transitionToManageEmoji: () => {
                                        v(), n.onClose();
                                    },
                                }),
                            );
                    });
                },
                disabled: S,
                children: m.intl.string(m.t.ouOOVy),
            }),
        ],
    });
}
