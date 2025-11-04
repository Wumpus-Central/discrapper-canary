n.d(t, { Z: () => N }), n(997841), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(793030),
    s = n(481060),
    c = n(332148),
    u = n(904245),
    d = n(933557),
    p = n(576855),
    h = n(372900),
    f = n(726521),
    g = n(501517),
    m = n(699516),
    b = n(594174),
    _ = n(630388),
    y = n(970257),
    O = n(294218),
    v = n(981631),
    j = n(388032),
    C = n(43617),
    x = n(625221);
function E(e, t, n) {
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
function S(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
class P extends i.PureComponent {
    render() {
        let e,
            t,
            { report: n, resolveFlag: i } = this.state,
            l = this.props,
            { channel: o, message: c, showContextMenuHint: u, moderatorReportData: d } = l,
            f = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(l, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
            g = o.type === v.d4z.GUILD_ANNOUNCEMENT && (0, _.yE)(c.flags, v.iLy.CROSSPOSTED);
        u &&
            (e = (0, r.jsx)(p.Z, {
                className: x.spacingTop,
                children: j.intl.format(j.t.IxY7E6, {}),
            })),
            (0, y.vc)(c) &&
                (t = (0, r.jsx)("div", {
                    className: x.spacingTop,
                    children: (0, r.jsx)(s.rsf, {
                        label: j.intl.string(j.t.x0jzo9),
                        checked: n,
                        onChange: this.handleToggleReport,
                    }),
                }));
        let m = g ? j.intl.string(j.t["2kHABX"]) : j.intl.string(j.t.AMvpS4),
            b = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: x.message,
                        children: (0, r.jsx)(O.Z, {
                            channel: o,
                            message: c,
                            disableInteraction: !0,
                        }),
                    }),
                    t,
                    e,
                ],
            });
        if ((null == d ? void 0 : d.moderatorReportChannelId) != null) {
            let { isFlagResolved: e } = d;
            return (0, r.jsx)(h.Z.Provider, {
                value: o.guild_id,
                children: (0, r.jsx)(
                    a.Modal,
                    I(
                        S(
                            {
                                title: j.intl.string(j.t.MWMcg7),
                                subtitle: m,
                                actions: [
                                    {
                                        variant: "critical-primary",
                                        text: j.intl.string(j.t.oyYWHE),
                                        onClick: this.handleDelete,
                                    },
                                ],
                                actionBarInput: e
                                    ? void 0
                                    : (0, r.jsx)(s.Checkbox, {
                                          checked: i,
                                          label: j.intl.string(C.default["8yIKem"]),
                                          onChange: (e) => this.handleToggleResolveFlag(e),
                                      }),
                            },
                            f,
                        ),
                        { children: b },
                    ),
                ),
            });
        }
        return (0, r.jsx)(h.Z.Provider, {
            value: o.guild_id,
            children: (0, r.jsx)(a.Modal, {
                title: g ? j.intl.string(j.t.aIz1oV) : j.intl.string(j.t.MWMcg7),
                subtitle: m,
                actions: [
                    {
                        text: j.intl.string(j.t["ETE/oC"]),
                        onClick: f.onClose,
                        variant: "secondary",
                    },
                    {
                        text: j.intl.string(j.t.oyYWHE),
                        onClick: this.handleDeleteMana,
                        variant: "critical-primary",
                    },
                ],
                onClose: f.onClose,
                transitionState: f.transitionState,
                children: b,
            }),
        });
    }
    constructor(...e) {
        super(...e),
            E(this, "state", {
                report: !1,
                resolveFlag: !1,
            }),
            E(this, "handleDelete", () => {
                let { report: e, resolveFlag: t } = this.state,
                    { channel: n, message: r, moderatorReportData: i } = this.props,
                    { moderatorReportChannelId: l, isFlagResolved: o } = null != i ? i : {};
                e
                    ? (0, f.ak)(r, "message_delete_alert", () =>
                          u.Z.deleteMessage(n.id, r.id).then(() => {
                              if (null != l) {
                                  var e, n;
                                  t && !o && g.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n);
                              }
                          }),
                      )
                    : u.Z.deleteMessage(n.id, r.id).then(() => {
                          if (null != l) {
                              var e, n;
                              t && !o && g.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n);
                          }
                      });
            }),
            E(this, "handleDeleteMana", () => {
                var e, t;
                this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t);
            }),
            E(this, "handleToggleReport", (e) => {
                this.setState({ report: e });
            }),
            E(this, "handleToggleResolveFlag", (e) => {
                this.setState({ resolveFlag: e });
            });
    }
}
let N = {
    confirmPin: function (e, t) {
        (0, s.h7j)((n) => {
            let i,
                l = (0, d.F6)(e, b.default, m.Z);
            return (
                (i = e.isPrivate()
                    ? j.intl.string(j.t.hMRngA)
                    : j.intl.formatToPlainString(j.t["3IRluI"], { channelName: l })),
                (0, r.jsx)(h.Z.Provider, {
                    value: e.guild_id,
                    children: (0, r.jsx)(
                        a.Modal,
                        I(
                            S(
                                {
                                    title: j.intl.string(j.t.bKMaZX),
                                    subtitle: i,
                                    actions: [
                                        {
                                            variant: "secondary",
                                            text: j.intl.string(j.t["ETE/oC"]),
                                            onClick: n.onClose,
                                        },
                                        {
                                            variant: "primary",
                                            text: j.intl.string(j.t.rOQ5BX),
                                            onClick: () => {
                                                c.Z.pinMessage(e, t.id), n.onClose();
                                            },
                                        },
                                    ],
                                },
                                n,
                            ),
                            {
                                children: (0, r.jsx)("div", {
                                    className: x.message,
                                    children: (0, r.jsx)(O.Z, {
                                        channel: e,
                                        message: t,
                                        animateAvatar: !1,
                                        disableInteraction: !0,
                                    }),
                                }),
                            },
                        ),
                    ),
                })
            );
        });
    },
    confirmUnpin: function (e, t) {
        (0, s.h7j)((n) =>
            (0, r.jsx)(h.Z.Provider, {
                value: e.guild_id,
                children: (0, r.jsxs)(
                    a.Modal,
                    I(
                        S(
                            {
                                title: j.intl.string(j.t.CFF2vL),
                                subtitle: j.intl.string(j.t.NjEPp7),
                                actions: [
                                    {
                                        variant: "secondary",
                                        text: j.intl.string(j.t["ETE/oC"]),
                                        onClick: n.onClose,
                                    },
                                    {
                                        variant: "critical-primary",
                                        text: j.intl.string(j.t.lAU5jB),
                                        onClick: () => {
                                            c.Z.unpinMessage(e, t.id), n.onClose();
                                        },
                                    },
                                ],
                            },
                            n,
                        ),
                        {
                            children: [
                                (0, r.jsx)("div", {
                                    className: o()(x.message, x.spacing),
                                    children: (0, r.jsx)(O.Z, {
                                        channel: e,
                                        message: t,
                                        disableInteraction: !0,
                                    }),
                                }),
                                (0, r.jsx)(p.Z, { children: j.intl.format(j.t.oCVB3Y, {}) }),
                            ],
                        },
                    ),
                ),
            }),
        );
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, s.h7j)((l) =>
            (0, r.jsx)(
                P,
                S(
                    {
                        channel: e,
                        message: t,
                        showContextMenuHint: n,
                        moderatorReportData: i,
                    },
                    l,
                ),
            ),
        );
    },
    confirmEdit: function (e, t, n) {
        (0, s.h7j)((i) =>
            (0, r.jsx)(
                a.Modal,
                I(
                    S(
                        {
                            title: j.intl.string(j.t.aIz1oV),
                            actions: [
                                {
                                    variant: "secondary",
                                    text: j.intl.string(j.t["ETE/oC"]),
                                    onClick: i.onClose,
                                },
                                {
                                    variant: "primary",
                                    text: j.intl.string(j.t["cY+Oob"]),
                                    onClick: () => {
                                        u.Z.editMessage(e, t, n), i.onClose();
                                    },
                                },
                            ],
                        },
                        i,
                    ),
                    {
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: x.spacing,
                            children: j.intl.string(j.t.grBcM8),
                        }),
                    },
                ),
            ),
        );
    },
};
