n.d(t, { A: () => D }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(562465),
    o = n(451988),
    d = n(314116),
    c = n(990078),
    u = n(406810),
    m = n(404778),
    g = n(834730),
    h = n(292666),
    x = n(783878),
    p = n(821609),
    A = n(765178),
    b = n(359778),
    f = n(939249),
    _ = n(157559),
    j = n(282956),
    N = n(824953),
    v = n(235986),
    E = n(342298),
    C = n(427157),
    I = n(147925),
    T = n(486020),
    S = n(957565),
    y = n(661191),
    w = n(427262),
    O = n(447066),
    k = n(652215),
    L = n(985018),
    R = n(767906);
function M(e, t) {
    return null != t && /^data:/.test(t) ? t : (0, T.ku)({ id: e.id, avatar: t, discriminator: k.h3J });
}
function D(e) {
    let {
            id: t,
            webhook: n,
            editedWebhook: s,
            channelOptions: T,
            isExpanded: D,
            isNew: P,
            errors: G,
            onToggleExpand: U,
        } = e,
        [W, B] = l.useState(!1),
        [H] = l.useState(new o.Ep());
    l.useEffect(() => () => H.stop(), [H]);
    let z = l.useMemo(() => M(n, n.avatar), [n]),
        V = l.useCallback(() => {
            let e = `${(0, r.TP)(!1)}${k.Rsh.WEBHOOK_INTEGRATION(n.id, n.token)}`;
            (0, S.C)(e);
        }, [n]),
        F = l.useCallback(() => {
            (0, d.A)({
                title: L.intl.formatToPlainString(L.t.QVFjHh, { name: n.name }),
                subtitle: L.intl.format(L.t["rIWe+5"], { name: n.name }),
                confirmText: L.intl.string(L.t["W+K1Fs"]),
                cancelText: L.intl.string(L.t.xNhj0O),
                onConfirm: () => {
                    N.A.delete(n.guild_id, n.id).catch((e) => {
                        let { status: t } = e;
                        429 === t
                            ? _.A.show({ title: L.intl.string(L.t.N5riYn), body: L.intl.string(L.t.eAxcCc) })
                            : _.A.show({ title: L.intl.string(L.t.N5riYn), body: L.intl.string(L.t["/4TwKf"]) });
                    });
                },
            });
        }, [n.guild_id, n.id, n.name]),
        K = [];
    null != n.user
        ? K.push({
              icon: u.O,
              text: L.intl.formatToPlainString(L.t["7EcUbr"], {
                  user: ((e) => {
                      if (null == e) return null;
                      let t = new C.A(e);
                      return w.Ay.getUserTag(t);
                  })(n.user),
                  timestamp: y.default.extractTimestamp(n.id),
              }),
          })
        : K.push({
              icon: u.O,
              text: L.intl.formatToPlainString(L.t["7mv59O"], { timestamp: y.default.extractTimestamp(n.id) }),
          });
    let Y = null;
    return (
        D &&
            null != s &&
            (Y = (0, i.jsxs)("div", {
                className: R.rf,
                children: [
                    (0, i.jsx)(m.c, { className: R.fV }),
                    (0, i.jsxs)(v.A, {
                        children: [
                            (0, i.jsx)(v.A.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, i.jsxs)(v.A, {
                                    className: R.R3,
                                    direction: v.A.Direction.VERTICAL,
                                    children: [
                                        (0, i.jsx)(E.A, {
                                            image: s.avatar,
                                            onChange: (e) => {
                                                j.A.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => M(n, e),
                                            imageClassName: R.mr,
                                            showIcon: !0,
                                        }),
                                        null != G.avatar && "" !== G.avatar
                                            ? (0, i.jsx)(g.E, {
                                                  color: "text-feedback-critical",
                                                  variant: "text-sm/normal",
                                                  children: G.avatar,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, i.jsxs)(v.A, {
                                direction: v.A.Direction.VERTICAL,
                                children: [
                                    (0, i.jsxs)(v.A, {
                                        children: [
                                            (0, i.jsx)(v.A.Child, {
                                                wrap: !0,
                                                basis: "50%",
                                                children: (0, i.jsx)(h.k, {
                                                    label: L.intl.string(L.t.ukdxuo),
                                                    value: s.name,
                                                    onChange: (e) => {
                                                        j.A.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: G.name,
                                                }),
                                            }),
                                            (0, i.jsx)(v.A.Child, {
                                                basis: "50%",
                                                children: (0, i.jsx)("div", {
                                                    children: (0, i.jsx)(x.Z, {
                                                        label: L.intl.string(L.t.GK18KJ),
                                                        value: s.channel_id,
                                                        options: T,
                                                        formatOption: (e) => {
                                                            let { value: t, label: n } = e;
                                                            return { id: t.toString(), value: t, label: n };
                                                        },
                                                        onSelectionChange: (e) => {
                                                            j.A.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: L.intl.string(L.t.r2ptsz),
                                                        selectionMode: "single",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(m.c, { className: R.Bd }),
                                    (0, i.jsxs)(v.A, {
                                        children: [
                                            (0, i.jsx)(c.m, {
                                                text: L.intl.string(L.t.wwdb3g),
                                                shouldShow: W,
                                                hideOnClick: !1,
                                                forceOpen: W,
                                                children: (0, i.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: R.cL,
                                                    children: (0, i.jsx)(p.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: L.intl.string(L.t.Ae9rUW),
                                                        "aria-label": "",
                                                        onClick: () => {
                                                            B(!0),
                                                                A.O.announce(L.intl.string(L.t.wwdb3g)),
                                                                H.start(1e3, () => B(!1)),
                                                                V();
                                                        },
                                                        disabled: null == n.token || "" === n.token,
                                                    }),
                                                }),
                                            }),
                                            (0, i.jsx)(p.$, {
                                                variant: "critical-secondary",
                                                size: "sm",
                                                text: L.intl.string(L.t.jVrUnC),
                                                onClick: F,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })),
        (0, i.jsx)(b.Z, {
            editable: !0,
            id: t,
            className: a()(R.Nr, P ? R.U6 : null),
            children: (0, i.jsxs)(v.A, {
                direction: v.A.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(f.D, {
                        className: R.wx,
                        "aria-expanded": D,
                        onClick: U,
                        children: (0, i.jsxs)(v.A, {
                            align: v.A.Align.CENTER,
                            children: [
                                (0, i.jsx)(O.A, { name: n.name, imageSrc: z, details: K }),
                                (0, i.jsx)(I.A, { className: R.eO, expanded: D, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    Y,
                ],
            }),
        })
    );
}
