n.d(t, { Z: () => N }), n(997841), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(95015),
    s = n(793030),
    c = n(248514),
    u = n(481060),
    d = n(332148),
    f = n(904245),
    h = n(933557),
    p = n(576855),
    g = n(372900),
    m = n(726521),
    b = n(501517),
    _ = n(699516),
    y = n(594174),
    O = n(970257),
    v = n(294218),
    j = n(981631),
    x = n(388032),
    C = n(864309),
    E = n(625221);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
class P extends i.PureComponent {
    render() {
        let e,
            t,
            { report: n, resolveFlag: i } = this.state,
            l = this.props,
            { channel: o, message: c, showContextMenuHint: d, moderatorReportData: f } = l,
            h = (function (e, t) {
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
            m = o.type === j.d4z.GUILD_ANNOUNCEMENT && (0, a.yE)(c.flags, j.iLy.CROSSPOSTED);
        d &&
            (e = (0, r.jsx)(p.Z, {
                className: E.spacingTop,
                children: x.intl.format(x.t.IxY7E6, {}),
            })),
            (0, O.vc)(c) &&
                (t = (0, r.jsx)("div", {
                    className: E.spacingTop,
                    children: (0, r.jsx)(u.rsf, {
                        label: x.intl.string(x.t.x0jzo9),
                        checked: n,
                        onChange: this.handleToggleReport,
                    }),
                }));
        let b = m ? x.intl.string(x.t["2kHABX"]) : x.intl.string(x.t.AMvpS4),
            _ = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: E.message,
                        children: (0, r.jsx)(v.Z, {
                            channel: o,
                            message: c,
                            disableInteraction: !0,
                        }),
                    }),
                    t,
                    e,
                ],
            });
        if ((null == f ? void 0 : f.moderatorReportChannelId) != null) {
            var y, S;
            let { isFlagResolved: e } = f;
            return (0, r.jsx)(g.Z.Provider, {
                value: o.guild_id,
                children: (0, r.jsx)(
                    s.Modal,
                    ((y = I(
                        {
                            title: x.intl.string(x.t.MWMcg7),
                            subtitle: b,
                            actions: [
                                {
                                    variant: "critical-primary",
                                    text: x.intl.string(x.t.oyYWHE),
                                    onClick: this.handleDelete,
                                },
                            ],
                            actionBarInput: e
                                ? void 0
                                : (0, r.jsx)(u.Checkbox, {
                                      checked: i,
                                      label: x.intl.string(C.default["8yIKem"]),
                                      onChange: (e) => this.handleToggleResolveFlag(e),
                                  }),
                        },
                        h,
                    )),
                    (S = S = { children: _ }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(S))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(S)).forEach(function (e) {
                              Object.defineProperty(y, e, Object.getOwnPropertyDescriptor(S, e));
                          }),
                    y),
                ),
            });
        }
        return (0, r.jsx)(g.Z.Provider, {
            value: o.guild_id,
            children: (0, r.jsx)(s.Modal, {
                title: m ? x.intl.string(x.t.aIz1oV) : x.intl.string(x.t.MWMcg7),
                subtitle: b,
                actions: [
                    {
                        text: x.intl.string(x.t["ETE/oC"]),
                        onClick: h.onClose,
                        variant: "secondary",
                    },
                    {
                        text: x.intl.string(x.t.oyYWHE),
                        onClick: this.handleDeleteMana,
                        variant: "critical-primary",
                    },
                ],
                onClose: h.onClose,
                transitionState: h.transitionState,
                children: _,
            }),
        });
    }
    constructor(...e) {
        super(...e),
            S(this, "state", {
                report: !1,
                resolveFlag: !1,
            }),
            S(this, "handleDelete", () => {
                let { report: e, resolveFlag: t } = this.state,
                    { channel: n, message: r, moderatorReportData: i } = this.props,
                    { moderatorReportChannelId: l, isFlagResolved: o } = null != i ? i : {};
                e
                    ? (0, m.ak)(r, "message_delete_alert", () =>
                          f.Z.deleteMessage(n.id, r.id).then(() => {
                              if (null != l) {
                                  var e, n;
                                  t && !o && b.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n);
                              }
                          }),
                      )
                    : f.Z.deleteMessage(n.id, r.id).then(() => {
                          if (null != l) {
                              var e, n;
                              t && !o && b.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n);
                          }
                      });
            }),
            S(this, "handleDeleteMana", () => {
                var e, t;
                this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t);
            }),
            S(this, "handleToggleReport", (e) => {
                this.setState({ report: e });
            }),
            S(this, "handleToggleResolveFlag", (e) => {
                this.setState({ resolveFlag: e });
            });
    }
}
let N = {
    confirmPin: function (e, t) {
        let n,
            i = (0, h.F6)(e, y.default, _.Z);
        (n = e.isPrivate() ? x.intl.string(x.t.hMRngA) : x.intl.formatToPlainString(x.t["3IRluI"], { channelName: i })),
            (0, c.Z)({
                title: x.intl.string(x.t.bKMaZX),
                subtitle: n,
                confirmText: x.intl.string(x.t.rOQ5BX),
                variant: "primary",
                onConfirm: () => {
                    d.Z.pinMessage(e, t.id);
                },
                cancelText: x.intl.string(x.t["ETE/oC"]),
                children: (0, r.jsx)("div", {
                    className: E.message,
                    children: (0, r.jsx)(v.Z, {
                        channel: e,
                        message: t,
                        animateAvatar: !1,
                        disableInteraction: !0,
                    }),
                }),
            });
    },
    confirmUnpin: function (e, t) {
        (0, c.Z)({
            title: x.intl.string(x.t.CFF2vL),
            subtitle: x.intl.string(x.t.NjEPp7),
            confirmText: x.intl.string(x.t.lAU5jB),
            variant: "critical",
            onConfirm: () => {
                d.Z.unpinMessage(e, t.id);
            },
            cancelText: x.intl.string(x.t["ETE/oC"]),
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: o()(E.message, E.spacing),
                        children: (0, r.jsx)(v.Z, {
                            channel: e,
                            message: t,
                            disableInteraction: !0,
                        }),
                    }),
                    (0, r.jsx)(p.Z, { children: x.intl.format(x.t.oCVB3Y, {}) }),
                ],
            }),
        });
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, u.h7j)((l) =>
            (0, r.jsx)(
                P,
                I(
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
        (0, c.Z)({
            title: x.intl.string(x.t.aIz1oV),
            subtitle: x.intl.string(x.t.grBcM8),
            confirmText: x.intl.string(x.t["cY+Oob"]),
            variant: "primary",
            onConfirm: () => {
                f.Z.editMessage(e, t, n);
            },
            cancelText: x.intl.string(x.t["ETE/oC"]),
        });
    },
};
