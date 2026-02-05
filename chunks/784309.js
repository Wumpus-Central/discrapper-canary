n.d(t, { A: () => S }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(562465),
    o = n(451988),
    d = n(314116),
    c = n(435371),
    u = n(397927),
    m = n(157559),
    g = n(282956),
    x = n(824953),
    h = n(235986),
    p = n(342298),
    A = n(427157),
    b = n(147925),
    _ = n(486020),
    f = n(957565),
    N = n(661191),
    j = n(427262),
    T = n(447066),
    C = n(652215),
    v = n(985018),
    E = n(416337);
function I(e, t) {
    return null != t && /^data:/.test(t) ? t : (0, _.ku)({ id: e.id, avatar: t, discriminator: C.h3J });
}
function S(e) {
    let {
            id: t,
            webhook: n,
            editedWebhook: s,
            channelOptions: _,
            isExpanded: S,
            isNew: y,
            errors: O,
            onToggleExpand: w,
        } = e,
        [R, k] = l.useState(!1),
        [L] = l.useState(new o.Ep());
    l.useEffect(() => () => L.stop(), [L]);
    let M = l.useMemo(() => I(n, n.avatar), [n]),
        G = l.useCallback(() => {
            let e = `${(0, r.TP)(!1)}${C.Rsh.WEBHOOK_INTEGRATION(n.id, n.token)}`;
            (0, f.C)(e);
        }, [n]),
        U = l.useCallback(() => {
            (0, d.A)({
                title: v.intl.formatToPlainString(v.t.QVFjHh, { name: n.name }),
                subtitle: v.intl.format(v.t["rIWe+5"], { name: n.name }),
                confirmText: v.intl.string(v.t["W+K1Fs"]),
                cancelText: v.intl.string(v.t.xNhj0O),
                onConfirm: () => {
                    x.A.delete(n.guild_id, n.id).catch((e) => {
                        let { status: t } = e;
                        429 === t
                            ? m.A.show({ title: v.intl.string(v.t.N5riYn), body: v.intl.string(v.t.eAxcCc) })
                            : m.A.show({ title: v.intl.string(v.t.N5riYn), body: v.intl.string(v.t["/4TwKf"]) });
                    });
                },
            });
        }, [n.guild_id, n.id, n.name]),
        D = [];
    null != n.user
        ? D.push({
              icon: u.O4,
              text: v.intl.formatToPlainString(v.t["7EcUbr"], {
                  user: ((e) => {
                      if (null == e) return null;
                      let t = new A.A(e);
                      return j.Ay.getUserTag(t);
                  })(n.user),
                  timestamp: N.default.extractTimestamp(n.id),
              }),
          })
        : D.push({
              icon: u.O4,
              text: v.intl.formatToPlainString(v.t["7mv59O"], { timestamp: N.default.extractTimestamp(n.id) }),
          });
    let P = null;
    return (
        S &&
            null != s &&
            (P = (0, i.jsxs)("div", {
                className: E.rf,
                children: [
                    (0, i.jsx)(u.cGx, { className: E.fV }),
                    (0, i.jsxs)(h.A, {
                        children: [
                            (0, i.jsx)(h.A.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, i.jsxs)(h.A, {
                                    className: E.R3,
                                    direction: h.A.Direction.VERTICAL,
                                    children: [
                                        (0, i.jsx)(p.A, {
                                            image: s.avatar,
                                            onChange: (e) => {
                                                g.A.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => I(n, e),
                                            imageClassName: E.mr,
                                            showIcon: !0,
                                        }),
                                        null != O.avatar && "" !== O.avatar
                                            ? (0, i.jsx)(u.Text, {
                                                  color: "text-feedback-critical",
                                                  variant: "text-sm/normal",
                                                  children: O.avatar,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, i.jsxs)(h.A, {
                                direction: h.A.Direction.VERTICAL,
                                children: [
                                    (0, i.jsxs)(h.A, {
                                        children: [
                                            (0, i.jsx)(h.A.Child, {
                                                wrap: !0,
                                                basis: "50%",
                                                children: (0, i.jsx)(u.ksK, {
                                                    label: v.intl.string(v.t.ukdxuo),
                                                    value: s.name,
                                                    onChange: (e) => {
                                                        g.A.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: O.name,
                                                }),
                                            }),
                                            (0, i.jsx)(h.A.Child, {
                                                basis: "50%",
                                                children: (0, i.jsx)("div", {
                                                    children: (0, i.jsx)(u.ZiE, {
                                                        label: v.intl.string(v.t.GK18KJ),
                                                        value: s.channel_id,
                                                        options: _,
                                                        formatOption: (e) => {
                                                            let { value: t, label: n } = e;
                                                            return { id: t.toString(), value: t, label: n };
                                                        },
                                                        onSelectionChange: (e) => {
                                                            g.A.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: v.intl.string(v.t.r2ptsz),
                                                        selectionMode: "single",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(u.cGx, { className: E.Bd }),
                                    (0, i.jsxs)(h.A, {
                                        children: [
                                            (0, i.jsx)(c.m_, {
                                                text: v.intl.string(v.t.wwdb3g),
                                                shouldShow: R,
                                                children: (0, i.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: E.cL,
                                                    children: (0, i.jsx)(u.Button, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: v.intl.string(v.t.Ae9rUW),
                                                        "aria-label": "",
                                                        onClick: () => {
                                                            k(!0),
                                                                u.ORC.announce(v.intl.string(v.t.wwdb3g)),
                                                                L.start(1e3, () => k(!1)),
                                                                G();
                                                        },
                                                        disabled: null == n.token || "" === n.token,
                                                    }),
                                                }),
                                            }),
                                            (0, i.jsx)(u.Button, {
                                                variant: "critical-secondary",
                                                size: "sm",
                                                text: v.intl.string(v.t.jVrUnC),
                                                onClick: U,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })),
        (0, i.jsx)(u.ZpM, {
            editable: !0,
            id: t,
            className: a()(E.Nr, y ? E.U6 : null),
            children: (0, i.jsxs)(h.A, {
                direction: h.A.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(u.DUT, {
                        className: E.wx,
                        "aria-expanded": S,
                        onClick: w,
                        children: (0, i.jsxs)(h.A, {
                            align: h.A.Align.CENTER,
                            children: [
                                (0, i.jsx)(T.A, { name: n.name, imageSrc: M, details: D }),
                                (0, i.jsx)(b.A, { className: E.eO, expanded: S, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    P,
                ],
            }),
        })
    );
}
