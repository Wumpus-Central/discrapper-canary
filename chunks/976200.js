n.d(t, {
    A: () => v,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(73939),
    u = n(397927),
    d = n(618167),
    f = n(166403),
    p = n(661191),
    _ = n(985018),
    h = n(199326);

function m(e) {
    let { imageClass: t, children: n, error: i } = e;
    return (0, r.jsxs)("div", {
        className: h.Qs,
        children: [
            (0, r.jsx)("div", {
                className: s()(h.Sl, t),
            }),
            n,
            (0, r.jsx)(c.F, {
                children:
                    null != i
                        ? (0, r.jsx)(u.FQk, {
                              className: h.z3,
                              children: (0, r.jsx)(o.wx6, {
                                  type: "critical",
                                  children: i.message,
                              }),
                          })
                        : null,
            }),
        ],
    });
}
let g = (e) => {
    let { canceledCount: t } = e,
        n = (0, l.bG)([f.A], () => f.A.getPremiumTypeSubscription());
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: h.v,
              children: [
                  (0, r.jsx)(u.EpV, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: h.kK,
                  }),
                  (0, r.jsx)(u.Text, {
                      variant: "text-md/normal",
                      className: h.at,
                      children: _.intl.format(_.t.SFpsCH, {
                          date: n.currentPeriodEnd,
                          canceledCount: t,
                      }),
                  }),
              ],
          });
};

function E(e) {
    let { imageClass: t, blurb: n, guild: i, warning: a, error: s, slotCount: o = 1, canceledCount: l = 0 } = e;
    return (0, r.jsxs)(m, {
        imageClass: t,
        error: s,
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                children: n,
            }),
            (0, r.jsx)(d.A, {
                className: h.w_,
                guild: i,
                subscriptionChange: o,
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                children: a,
            }),
            l > 0
                ? (0, r.jsx)(g, {
                      canceledCount: l,
                  })
                : null,
        ],
    });
}

function b(e) {
    var t, n;
    let { imageClass: a, blurb: s, fromGuilds: o, toGuild: l, error: c, slotCount: f = 1, canceledCount: E = 0 } = e,
        b = i.useRef(o),
        y = null == (t = b.current) ? void 0 : t.length,
        O =
            null == (n = b.current)
                ? void 0
                : n.reduce((e, t) => (e.hasOwnProperty(t.id) || (e[t.id] = []), e[t.id].push(t), e), {});
    return (0, r.jsxs)(m, {
        imageClass: a,
        error: c,
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                children: s,
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-xs/bold",
                className: h._N,
                children: _.intl.format(_.t["5zQYEz"], {
                    guildCount: null != y ? y : 0,
                }),
            }),
            null != O
                ? p.default.keys(O).map((e) =>
                      (0, r.jsx)(
                          d.A,
                          {
                              className: h.vW,
                              guild: O[e][0],
                              subscriptionChange: -1 * O[e].length,
                          },
                          e,
                      ),
                  )
                : null,
            (0, r.jsx)(u.Text, {
                variant: "text-xs/normal",
                className: h._N,
                children: _.intl.format(_.t.ct6oxD, {
                    slotCount: f,
                }),
            }),
            (0, r.jsx)("div", {
                className: h.Vh,
                children: (0, r.jsx)(d.A, {
                    className: h.uK,
                    guild: l,
                    subscriptionChange: null != o ? o.length : 1,
                }),
            }),
            E > 0
                ? (0, r.jsx)(g, {
                      canceledCount: E,
                  })
                : null,
        ],
    });
}

function y(e) {
    let { confirmation: t, confirmationLabel: n, isModifyingSubscription: i, onConfirm: a, onCancel: s } = e;
    return (0, r.jsx)("div", {
        className: h.qr,
        children: (0, r.jsxs)(u.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [
                (0, r.jsx)(u.Button, {
                    variant: "primary",
                    text: t,
                    onClick: a,
                    loading: i,
                    "aria-label": n,
                }),
                (0, r.jsx)(u.Button, {
                    variant: "secondary",
                    text: _.intl.string(_.t["ETE/oC"]),
                    onClick: s,
                    disabled: i,
                }),
            ],
        }),
    });
}

function O(e, t, n, r, i) {
    return [
        {
            variant: "secondary",
            text: _.intl.string(_.t["ETE/oC"]),
            onClick: i,
            disabled: n,
        },
        {
            variant: "primary",
            text: e,
            onClick: r,
            loading: n,
            "aria-label": t,
        },
    ];
}
let A = (e) => {
    let {
            transitionState: t,
            onClose: n,
            title: i,
            subtitle: a,
            imageClass: s,
            guild: l,
            warning: c,
            slotCount: u = 1,
            canceledCount: d = 0,
            isTransfer: f = !1,
            fromGuilds: p,
            toGuild: _,
            confirmation: h,
            confirmationLabel: m,
            isModifyingSubscription: g,
            onConfirm: y,
            onCancel: A,
            error: v,
        } = e,
        S = O(h, m, g, y, A),
        I = () =>
            f && null != _
                ? (0, r.jsx)(b, {
                      imageClass: null != s ? s : "",
                      blurb: a,
                      fromGuilds: p,
                      toGuild: _,
                      error: v,
                      slotCount: u,
                      canceledCount: d,
                  })
                : null != l
                  ? (0, r.jsx)(E, {
                        imageClass: null != s ? s : "",
                        blurb: a,
                        guild: l,
                        warning: c,
                        error: v,
                        slotCount: u,
                        canceledCount: d,
                    })
                  : null;
    return (0, r.jsxs)(o.dWK, {
        transitionState: t,
        onClose: n,
        size: "sm",
        children: [
            (0, r.jsx)(o.rQ0, {
                title: i,
            }),
            (0, r.jsx)(o.cwr, {
                children: I(),
            }),
            (0, r.jsx)(o.H7u, {
                actions: S,
                actionsFullWidth: !1,
            }),
        ],
    });
};
(A.ApplyBody = E), (A.TransferBody = b), (A.Footer = y);
let v = A;
