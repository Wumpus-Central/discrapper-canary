n.d(t, { default: () => w }), n(388685);
var l = n(54381),
    r = n(473749),
    a = n(120356),
    i = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(528963),
    h = n(933557),
    u = n(471445),
    g = n(313201),
    m = n(565138),
    p = n(592125),
    x = n(984933),
    b = n(430824),
    _ = n(496675),
    f = n(699516),
    C = n(944486),
    j = n(594174),
    y = n(626135),
    N = n(709054),
    Z = n(981631),
    v = n(388032),
    M = n(394330);
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
class O extends r.PureComponent {
    componentDidMount() {
        y.default.track(Z.rMx.OPEN_MODAL, {
            type: "Follow Channel Modal",
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: "Chat Input Blocker - Follow Channel",
        });
    }
    getDefaultChannelId(e) {
        let t = e.find((e) => {
                let { channel: t } = e;
                return "general" === (0, h.F6)(t, j.default, f.Z);
            }),
            n = null != t ? t : e[0];
        return null != n ? n.channel.id : null;
    }
    renderFooter() {
        let { selectedGuildId: e, selectedChannelId: t, submitting: n } = this.state,
            { onClose: r } = this.props;
        return (0, l.jsxs)(o.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [
                (0, l.jsx)(o.Button, {
                    variant: "primary",
                    text: v.intl.string(v.t["3aOv+h"]),
                    loading: n,
                    onClick: this.handleFollow,
                    disabled: null == e || null == t,
                }),
                (0, l.jsx)(o.Button, {
                    variant: "secondary",
                    text: v.intl.string(v.t["ETE/oC"]),
                    onClick: r,
                }),
            ],
        });
    }
    renderForm() {
        let { guilds: e } = this.props,
            { channels: t, selectedGuildId: n, selectedChannelId: r, errorMessage: a } = this.state,
            i = N.default.keys(e).map((t) => {
                let { guild: n } = e[t];
                return {
                    value: t,
                    label: n.name,
                    guild: n,
                };
            }),
            s = t.map((e) => {
                let { channel: t, category: n } = e;
                return {
                    value: t.id,
                    label: (0, h.F6)(t, j.default, f.Z),
                    channel: t,
                    category: n,
                };
            }),
            c = 0 === i.length,
            d = c ? v.intl.string(v.t["6b6QoF"]) : v.intl.string(v.t.Z0quyN);
        return (0, l.jsxs)(o.Kqy, {
            gap: 16,
            children: [
                (0, l.jsx)(o.VcW, {
                    label: v.intl.string(v.t.xFn72s),
                    value: n,
                    options: i,
                    isDisabled: c,
                    onChange: this.handleGuildSelect,
                    renderOptionPrefix: (e) =>
                        (function (e) {
                            if (null == e) return null;
                            let { guild: t } = e;
                            return (0, l.jsx)(m.Z, {
                                guild: t,
                                size: m.Z.Sizes.MINI,
                            });
                        })(e),
                }),
                (0, l.jsx)(o.VcW, {
                    label: v.intl.string(v.t.PDn2fR),
                    value: r,
                    options: s,
                    isDisabled: 0 === s.length,
                    onChange: this.handleChannelSelect,
                    renderOptionPrefix: (e) =>
                        (function (e) {
                            if (null == e) return null;
                            let { channel: t } = e,
                                n = (0, u.KS)(t);
                            return (
                                null != n &&
                                (0, l.jsx)(n, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: M.icon,
                                })
                            );
                        })(e),
                }),
                (0, l.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: c || null != a ? "text-feedback-critical" : "text-muted",
                    className: M.bottomMargin,
                    children: null != a ? a : d,
                }),
            ],
        });
    }
    renderBody() {
        let {
            channel: { nsfw: e },
        } = this.props;
        return (0, l.jsxs)("div", {
            className: M.body,
            children: [
                (0, l.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    id: this.state.headerId,
                    children: v.intl.string(v.t.mvPFbA),
                }),
                (0, l.jsx)(o.Text, {
                    color: "text-muted",
                    className: i()(M.topMargin, { [M.formMargin]: !e }),
                    variant: "text-sm/normal",
                    children: v.intl.string(v.t.kbpkxJ),
                }),
                e
                    ? (0, l.jsx)(o.Text, {
                          className: i()(M.formMargin, M.topMargin),
                          color: "text-feedback-critical",
                          variant: "text-sm/normal",
                          children: v.intl.string(v.t["DrNm/5"]),
                      })
                    : null,
            ],
        });
    }
    renderHeader() {
        var e;
        let { guildToFollow: t, channelNameToFollow: n, channel: r } = this.props,
            a = null != (e = (0, u.KS)(r)) ? e : o.MqZ;
        return (0, l.jsxs)(o.xBx, {
            className: M.header,
            children: [
                (0, l.jsx)(m.Z, {
                    guild: t,
                    size: m.Z.Sizes.LARGE,
                }),
                (0, l.jsx)("div", {
                    className: M.channelContainer,
                    children: (0, l.jsxs)("div", {
                        className: M.channel,
                        children: [
                            (0, l.jsx)(a, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: M.channelIcon,
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: "text-md/medium",
                                className: M.channelName,
                                children: n,
                            }),
                        ],
                    }),
                }),
            ],
        });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, l.jsxs)(o.Y0X, {
            transitionState: e,
            "aria-labelledby": this.state.headerId,
            parentComponent: "FollowModal",
            children: [
                this.renderHeader(),
                (0, l.jsxs)(o.hzk, {
                    className: M.content,
                    children: [this.renderBody(), this.renderForm()],
                }),
                (0, l.jsx)(o.mzw, { children: this.renderFooter() }),
            ],
        });
    }
    constructor(e) {
        super(e),
            S(this, "handleGuildSelect", (e) => {
                let { guilds: t } = this.props,
                    { selectedGuildId: n } = this.state,
                    l = t[e].channels,
                    r = this.getDefaultChannelId(l);
                n !== e &&
                    this.setState({
                        selectedGuildId: e,
                        selectedChannelId: r,
                        channels: l,
                    });
            }),
            S(this, "handleChannelSelect", (e) => {
                this.setState({ selectedChannelId: e });
            }),
            S(this, "handleFollow", () => {
                let { channel: e, onClose: t } = this.props,
                    { selectedChannelId: r, selectedGuildId: a } = this.state;
                null != r &&
                    (this.setState({ submitting: !0 }),
                    d.Z.createChannelFollower(r, e.id)
                        .then(() => {
                            c.Z.dispatch({
                                type: "CHANNEL_FOLLOWER_CREATED",
                                channelId: r,
                                guildId: a,
                            }),
                                t(),
                                (0, o.ZDy)(async () => {
                                    let { default: e } = await n.e("21859").then(n.bind(n, 910338));
                                    return (t) =>
                                        (0, l.jsx)(
                                            e,
                                            (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        l = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                        (l = l.concat(
                                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                            }),
                                                        )),
                                                        l.forEach(function (t) {
                                                            S(e, t, n[t]);
                                                        });
                                                }
                                                return e;
                                            })({}, t),
                                        );
                                });
                        })
                        .catch((e) => {
                            e.body.code === Z.evJ.TOO_MANY_WEBHOOKS
                                ? this.setState({
                                      errorMessage: v.intl.string(v.t["1eZ4aB"]),
                                      submitting: !1,
                                  })
                                : this.setState({
                                      errorMessage: v.intl.string(v.t.LgwhuN),
                                      submitting: !1,
                                  });
                        }));
            });
        let { guilds: t, lastChannelFollowingDestination: r } = e,
            { guildId: a, channelId: i } = r;
        this.state = {
            selectedGuildId: a,
            selectedChannelId: i,
            channels: null != a && null != t[a] ? t[a].channels : [],
            errorMessage: null,
            submitting: !1,
            headerId: (0, g.hQ)("modal"),
        };
    }
}
let w = s.ZP.connectStores(
    [b.Z, p.Z, x.ZP, _.Z, C.Z],
    (e) => {
        let { channel: t } = e,
            n = b.Z.getGuild(t.guild_id),
            l = b.Z.getGuildsArray().reduce((e, t) => {
                let n = x.ZP.getChannels(t.id)
                    .SELECTABLE.map((e) => e.channel)
                    .filter((e) => e.type === Z.d4z.GUILD_TEXT && _.Z.can(Z.Plq.MANAGE_WEBHOOKS, e))
                    .map((e) => {
                        let t = p.Z.getChannel(e.parent_id);
                        return {
                            channel: e,
                            category: null != t ? t.name : null,
                        };
                    });
                return (
                    n.length > 0 &&
                        (e[t.id] = {
                            guild: t,
                            channels: n,
                        }),
                    e
                );
            }, {}),
            r = C.Z.getLastChannelFollowingDestination();
        return {
            guildToFollow: n,
            channelNameToFollow: t.name,
            guilds: l,
            lastChannelFollowingDestination: null != r ? r : {},
        };
    },
    { forwardRef: !0 },
)(O);
