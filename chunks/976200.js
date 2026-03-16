n.d(e, { A: () => C }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(158954),
    o = n(311907),
    c = n(73939),
    d = n(397927),
    u = n(618167),
    m = n(166403),
    x = n(661191),
    h = n(985018),
    g = n(199326);
function p(t) {
    let { imageClass: e, children: n, error: i } = t;
    return (0, l.jsxs)("div", {
        className: g.Qs,
        children: [
            (0, l.jsx)("div", { className: a()(g.Sl, e) }),
            n,
            (0, l.jsx)(c.F, {
                children:
                    null != i
                        ? (0, l.jsx)(d.FQk, {
                              className: g.z3,
                              children: (0, l.jsx)(r.wx6, { type: "critical", children: i.message }),
                          })
                        : null,
            }),
        ],
    });
}
let f = (t) => {
    let { canceledCount: e } = t,
        n = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription());
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: g.v,
              children: [
                  (0, l.jsx)(d.EpV, { size: "custom", width: 20, height: 20, color: "currentColor", className: g.kK }),
                  (0, l.jsx)(d.Text, {
                      variant: "text-md/normal",
                      className: g.at,
                      children: h.intl.format(h.t.SFpsCH, { date: n.currentPeriodEnd, canceledCount: e }),
                  }),
              ],
          });
};
function b(t) {
    let { imageClass: e, blurb: n, guild: i, warning: s, error: a, slotCount: r = 1, canceledCount: o = 0 } = t;
    return (0, l.jsxs)(p, {
        imageClass: e,
        error: a,
        children: [
            (0, l.jsx)(d.Text, { variant: "text-md/normal", children: n }),
            (0, l.jsx)(u.A, { className: g.w_, guild: i, subscriptionChange: r }),
            (0, l.jsx)(d.Text, { variant: "text-md/normal", children: s }),
            o > 0 ? (0, l.jsx)(f, { canceledCount: o }) : null,
        ],
    });
}
function j(t) {
    let { imageClass: e, blurb: n, fromGuilds: s, toGuild: a, error: r, slotCount: o = 1, canceledCount: c = 0 } = t,
        m = i.useRef(s),
        b = m.current?.length,
        j = m.current?.reduce((t, e) => (t.hasOwnProperty(e.id) || (t[e.id] = []), t[e.id].push(e), t), {});
    return (0, l.jsxs)(p, {
        imageClass: e,
        error: r,
        children: [
            (0, l.jsx)(d.Text, { variant: "text-md/normal", children: n }),
            (0, l.jsx)(d.Text, {
                variant: "text-xs/bold",
                className: g._N,
                children: h.intl.format(h.t["5zQYEz"], { guildCount: b ?? 0 }),
            }),
            null != j
                ? x.default
                      .keys(j)
                      .map((t) =>
                          (0, l.jsx)(u.A, { className: g.vW, guild: j[t][0], subscriptionChange: -1 * j[t].length }, t),
                      )
                : null,
            (0, l.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: g._N,
                children: h.intl.format(h.t.ct6oxD, { slotCount: o }),
            }),
            (0, l.jsx)("div", {
                className: g.Vh,
                children: (0, l.jsx)(u.A, { className: g.uK, guild: a, subscriptionChange: null != s ? s.length : 1 }),
            }),
            c > 0 ? (0, l.jsx)(f, { canceledCount: c }) : null,
        ],
    });
}
let v = (t) => {
    let {
            transitionState: e,
            onClose: n,
            title: i,
            subtitle: s,
            imageClass: a,
            guild: o,
            warning: c,
            slotCount: d = 1,
            canceledCount: u = 0,
            isTransfer: m = !1,
            fromGuilds: x,
            toGuild: g,
            confirmation: p,
            confirmationLabel: f,
            isModifyingSubscription: v,
            onConfirm: C,
            onCancel: y,
            error: A,
        } = t,
        S = [
            { variant: "secondary", text: h.intl.string(h.t["ETE/oC"]), onClick: y, disabled: v },
            { variant: "primary", text: p, onClick: C, loading: v, "aria-label": f },
        ];
    return (0, l.jsxs)(r.dWK, {
        transitionState: e,
        onClose: n,
        size: "sm",
        children: [
            (0, l.jsx)(r.rQ0, { title: i }),
            (0, l.jsx)(r.cwr, {
                children:
                    m && null != g
                        ? (0, l.jsx)(j, {
                              imageClass: a ?? "",
                              blurb: s,
                              fromGuilds: x,
                              toGuild: g,
                              error: A,
                              slotCount: d,
                              canceledCount: u,
                          })
                        : null != o
                          ? (0, l.jsx)(b, {
                                imageClass: a ?? "",
                                blurb: s,
                                guild: o,
                                warning: c,
                                error: A,
                                slotCount: d,
                                canceledCount: u,
                            })
                          : null,
            }),
            (0, l.jsx)(r.H7u, { actions: S, actionsFullWidth: !1 }),
        ],
    });
};
(v.ApplyBody = b),
    (v.TransferBody = j),
    (v.Footer = function (t) {
        let { confirmation: e, confirmationLabel: n, isModifyingSubscription: i, onConfirm: s, onCancel: a } = t;
        return (0, l.jsx)("div", {
            className: g.qr,
            children: (0, l.jsxs)(d.ButtonGroup, {
                direction: "horizontal-reverse",
                children: [
                    (0, l.jsx)(d.Button, { variant: "primary", text: e, onClick: s, loading: i, "aria-label": n }),
                    (0, l.jsx)(d.Button, {
                        variant: "secondary",
                        text: h.intl.string(h.t["ETE/oC"]),
                        onClick: a,
                        disabled: i,
                    }),
                ],
            }),
        });
    });
let C = v;
