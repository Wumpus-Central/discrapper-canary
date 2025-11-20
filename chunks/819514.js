n.d(t, { Z: () => N }), n(997841), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(95015),
    s = n(793030),
    c = n(481060),
    u = n(332148),
    d = n(904245),
    p = n(933557),
    h = n(576855),
    f = n(372900),
    g = n(726521),
    m = n(501517),
    b = n(699516),
    _ = n(594174),
    y = n(970257),
    O = n(294218),
    v = n(981631),
    j = n(388032),
    C = n(342153),
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
            { channel: o, message: u, showContextMenuHint: d, moderatorReportData: p } = l,
            g = (function (e, t) {
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
            m = o.type === v.d4z.GUILD_ANNOUNCEMENT && (0, a.yE)(u.flags, v.iLy.CROSSPOSTED);
        d &&
            (e = (0, r.jsx)(h.Z, {
                className: x.spacingTop,
                children: j.intl.format(j.t.IxY7E6, {}),
            })),
            (0, y.vc)(u) &&
                (t = (0, r.jsx)("div", {
                    className: x.spacingTop,
                    children: (0, r.jsx)(c.rsf, {
                        label: j.intl.string(j.t.x0jzo9),
                        checked: n,
                        onChange: this.handleToggleReport,
                    }),
                }));
        let b = m ? j.intl.string(j.t["2kHABX"]) : j.intl.string(j.t.AMvpS4),
            _ = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: x.message,
                        children: (0, r.jsx)(O.Z, {
                            channel: o,
                            message: u,
                            disableInteraction: !0,
                        }),
                    }),
                    t,
                    e,
                ],
            });
        if ((null == p ? void 0 : p.moderatorReportChannelId) != null) {
            let { isFlagResolved: e } = p;
            return (0, r.jsx)(f.Z.Provider, {
                value: o.guild_id,
                children: (0, r.jsx)(
                    s.Modal,
                    I(
                        S(
                            {
                                title: j.intl.string(j.t.MWMcg7),
                                subtitle: b,
                                actions: [
                                    {
                                        variant: "critical-primary",
                                        text: j.intl.string(j.t.oyYWHE),
                                        onClick: this.handleDelete,
                                    },
                                ],
                                actionBarInput: e
                                    ? void 0
                                    : (0, r.jsx)(c.Checkbox, {
                                          checked: i,
                                          label: j.intl.string(C.default["8yIKem"]),
                                          onChange: (e) => this.handleToggleResolveFlag(e),
                                      }),
                            },
                            g,
                        ),
                        { children: _ },
                    ),
                ),
            });
        }
        return (0, r.jsx)(f.Z.Provider, {
            value: o.guild_id,
            children: (0, r.jsx)(s.Modal, {
                title: m ? j.intl.string(j.t.aIz1oV) : j.intl.string(j.t.MWMcg7),
                subtitle: b,
                actions: [
                    {
                        text: j.intl.string(j.t["ETE/oC"]),
                        onClick: g.onClose,
                        variant: "secondary",
                    },
                    {
                        text: j.intl.string(j.t.oyYWHE),
                        onClick: this.handleDeleteMana,
                        variant: "critical-primary",
                    },
                ],
                onClose: g.onClose,
                transitionState: g.transitionState,
                children: _,
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
                    ? (0, g.ak)(r, "message_delete_alert", () =>
                          d.Z.deleteMessage(n.id, r.id).then(() => {
                              if (null != l) {
                                  var e, n;
                                  t && !o && m.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n);
                              }
                          }),
                      )
                    : d.Z.deleteMessage(n.id, r.id).then(() => {
                          if (null != l) {
                              var e, n;
                              t && !o && m.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n);
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
        (0, c.h7j)((n) => {
            let i,
                l = (0, p.F6)(e, _.default, b.Z);
            return (
                (i = e.isPrivate()
                    ? j.intl.string(j.t.hMRngA)
                    : j.intl.formatToPlainString(j.t["3IRluI"], { channelName: l })),
                (0, r.jsx)(f.Z.Provider, {
                    value: e.guild_id,
                    children: (0, r.jsx)(
                        s.Modal,
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
                                                u.Z.pinMessage(e, t.id), n.onClose();
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
        (0, c.h7j)((n) =>
            (0, r.jsx)(f.Z.Provider, {
                value: e.guild_id,
                children: (0, r.jsxs)(
                    s.Modal,
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
                                            u.Z.unpinMessage(e, t.id), n.onClose();
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
                                (0, r.jsx)(h.Z, { children: j.intl.format(j.t.oCVB3Y, {}) }),
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
        (0, c.h7j)((l) =>
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
        (0, c.h7j)((i) =>
            (0, r.jsx)(
                s.Modal,
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
                                        d.Z.editMessage(e, t, n), i.onClose();
                                    },
                                },
                            ],
                        },
                        i,
                    ),
                    {
                        children: (0, r.jsx)(c.Text, {
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
