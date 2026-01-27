l.d(t, {
    A: () => y,
}),
    l(321073),
    l(896048);
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    a = l(158954),
    o = l(311907),
    u = l(73939),
    c = l(397927),
    d = l(618167),
    m = l(166403),
    x = l(661191),
    g = l(985018),
    h = l(199326);

function j(e) {
    let { imageClass: t, children: l, error: r } = e;
    return (0, n.jsxs)("div", {
        className: h.Qs,
        children: [
            (0, n.jsx)("div", {
                className: s()(h.Sl, t),
            }),
            l,
            (0, n.jsx)(u.F, {
                children:
                    null != r
                        ? (0, n.jsx)(c.FQk, {
                              className: h.z3,
                              children: (0, n.jsx)(a.wx6, {
                                  type: "critical",
                                  children: r.message,
                              }),
                          })
                        : null,
            }),
        ],
    });
}
let p = (e) => {
    let { canceledCount: t } = e,
        l = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription());
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: h.v,
              children: [
                  (0, n.jsx)(c.EpV, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: h.kK,
                  }),
                  (0, n.jsx)(c.Text, {
                      variant: "text-md/normal",
                      className: h.at,
                      children: g.intl.format(g.t.SFpsCH, {
                          date: l.currentPeriodEnd,
                          canceledCount: t,
                      }),
                  }),
              ],
          });
};

function C(e) {
    let { imageClass: t, blurb: l, guild: r, warning: i, error: s, slotCount: a = 1, canceledCount: o = 0 } = e;
    return (0, n.jsxs)(j, {
        imageClass: t,
        error: s,
        children: [
            (0, n.jsx)(c.Text, {
                variant: "text-md/normal",
                children: l,
            }),
            (0, n.jsx)(d.A, {
                className: h.w_,
                guild: r,
                subscriptionChange: a,
            }),
            (0, n.jsx)(c.Text, {
                variant: "text-md/normal",
                children: i,
            }),
            o > 0
                ? (0, n.jsx)(p, {
                      canceledCount: o,
                  })
                : null,
        ],
    });
}

function f(e) {
    var t, l;
    let { imageClass: i, blurb: s, fromGuilds: a, toGuild: o, error: u, slotCount: m = 1, canceledCount: C = 0 } = e,
        f = r.useRef(a),
        v = null == (t = f.current) ? void 0 : t.length,
        y =
            null == (l = f.current)
                ? void 0
                : l.reduce((e, t) => (e.hasOwnProperty(t.id) || (e[t.id] = []), e[t.id].push(t), e), {});
    return (0, n.jsxs)(j, {
        imageClass: i,
        error: u,
        children: [
            (0, n.jsx)(c.Text, {
                variant: "text-md/normal",
                children: s,
            }),
            (0, n.jsx)(c.Text, {
                variant: "text-xs/bold",
                className: h._N,
                children: g.intl.format(g.t["5zQYEz"], {
                    guildCount: null != v ? v : 0,
                }),
            }),
            null != y
                ? x.default.keys(y).map((e) =>
                      (0, n.jsx)(
                          d.A,
                          {
                              className: h.vW,
                              guild: y[e][0],
                              subscriptionChange: -1 * y[e].length,
                          },
                          e,
                      ),
                  )
                : null,
            (0, n.jsx)(c.Text, {
                variant: "text-xs/normal",
                className: h._N,
                children: g.intl.format(g.t.ct6oxD, {
                    slotCount: m,
                }),
            }),
            (0, n.jsx)("div", {
                className: h.Vh,
                children: (0, n.jsx)(d.A, {
                    className: h.uK,
                    guild: o,
                    subscriptionChange: null != a ? a.length : 1,
                }),
            }),
            C > 0
                ? (0, n.jsx)(p, {
                      canceledCount: C,
                  })
                : null,
        ],
    });
}
let v = (e) => {
    let {
            transitionState: t,
            onClose: l,
            title: r,
            subtitle: i,
            imageClass: s,
            guild: o,
            warning: u,
            slotCount: c = 1,
            canceledCount: d = 0,
            isTransfer: m = !1,
            fromGuilds: x,
            toGuild: h,
            confirmation: j,
            confirmationLabel: p,
            isModifyingSubscription: v,
            onConfirm: y,
            onCancel: b,
            error: S,
        } = e,
        O = [
            {
                variant: "secondary",
                text: g.intl.string(g.t["ETE/oC"]),
                onClick: b,
                disabled: v,
            },
            {
                variant: "primary",
                text: j,
                onClick: y,
                loading: v,
                "aria-label": p,
            },
        ];
    return (0, n.jsxs)(a.dWK, {
        transitionState: t,
        onClose: l,
        size: "sm",
        children: [
            (0, n.jsx)(a.rQ0, {
                title: r,
            }),
            (0, n.jsx)(a.cwr, {
                children:
                    m && null != h
                        ? (0, n.jsx)(f, {
                              imageClass: null != s ? s : "",
                              blurb: i,
                              fromGuilds: x,
                              toGuild: h,
                              error: S,
                              slotCount: c,
                              canceledCount: d,
                          })
                        : null != o
                          ? (0, n.jsx)(C, {
                                imageClass: null != s ? s : "",
                                blurb: i,
                                guild: o,
                                warning: u,
                                error: S,
                                slotCount: c,
                                canceledCount: d,
                            })
                          : null,
            }),
            (0, n.jsx)(a.H7u, {
                actions: O,
                actionsFullWidth: !1,
            }),
        ],
    });
};
(v.ApplyBody = C),
    (v.TransferBody = f),
    (v.Footer = function (e) {
        let { confirmation: t, confirmationLabel: l, isModifyingSubscription: r, onConfirm: i, onCancel: s } = e;
        return (0, n.jsx)("div", {
            className: h.qr,
            children: (0, n.jsxs)(c.ButtonGroup, {
                direction: "horizontal-reverse",
                children: [
                    (0, n.jsx)(c.Button, {
                        variant: "primary",
                        text: t,
                        onClick: i,
                        loading: r,
                        "aria-label": l,
                    }),
                    (0, n.jsx)(c.Button, {
                        variant: "secondary",
                        text: g.intl.string(g.t["ETE/oC"]),
                        onClick: s,
                        disabled: r,
                    }),
                ],
            }),
        });
    });
let y = v;
