n.d(t, { default: () => F }), n(388685);
var l = n(54381),
    r = n(473749),
    a = n(120356),
    i = n.n(a),
    s = n(442837),
    o = n(668339),
    c = n(481060),
    d = n(570140),
    h = n(528963),
    u = n(933557),
    g = n(471445),
    m = n(313201),
    p = n(565138),
    f = n(592125),
    x = n(984933),
    b = n(430824),
    C = n(496675),
    j = n(699516),
    y = n(944486),
    _ = n(594174),
    N = n(626135),
    Z = n(709054),
    v = n(981631),
    M = n(388032),
    S = n(481073);
function O(e, t, n) {
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
class w extends r.PureComponent {
    componentDidMount() {
        N.default.track(v.rMx.OPEN_MODAL, {
            type: "Follow Channel Modal",
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: "Chat Input Blocker - Follow Channel",
        });
    }
    getDefaultChannelId(e) {
        let t = e.find((e) => {
                let { channel: t } = e;
                return "general" === (0, u.F6)(t, _.default, j.Z);
            }),
            n = null != t ? t : e[0];
        return null != n ? n.channel.id : null;
    }
    renderFooter() {
        let { selectedGuildId: e, selectedChannelId: t, submitting: n } = this.state,
            { onClose: r } = this.props;
        return (0, l.jsxs)(c.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [
                (0, l.jsx)(c.Button, {
                    variant: "primary",
                    text: M.intl.string(M.t["3aOv+h"]),
                    loading: n,
                    onClick: this.handleFollow,
                    disabled: null == e || null == t,
                }),
                (0, l.jsx)(c.Button, {
                    variant: "secondary",
                    text: M.intl.string(M.t["ETE/oC"]),
                    onClick: r,
                }),
            ],
        });
    }
    renderForm() {
        let { guilds: e } = this.props,
            { channels: t, selectedGuildId: n, selectedChannelId: r, errorMessage: a } = this.state,
            i = Z.default.keys(e).map((t) => {
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
                    label: (0, u.F6)(t, _.default, j.Z),
                    channel: t,
                    category: n,
                };
            }),
            d = 0 === i.length,
            h = d ? M.intl.string(M.t["6b6QoF"]) : M.intl.string(M.t.Z0quyN);
        return (0, l.jsxs)(c.Kqy, {
            gap: 16,
            children: [
                (0, l.jsx)(o.d, {
                    label: M.intl.string(M.t.xFn72s),
                    value: n,
                    options: i,
                    isDisabled: d,
                    onChange: this.handleGuildSelect,
                    renderOptionPrefix: (e) =>
                        (function (e) {
                            if (null == e) return null;
                            let { guild: t } = e;
                            return (0, l.jsx)(p.Z, {
                                guild: t,
                                size: p.Z.Sizes.MINI,
                            });
                        })(e),
                }),
                (0, l.jsx)(o.d, {
                    label: M.intl.string(M.t.PDn2fR),
                    value: r,
                    options: s,
                    isDisabled: 0 === s.length,
                    onChange: this.handleChannelSelect,
                    renderOptionPrefix: (e) =>
                        (function (e) {
                            if (null == e) return null;
                            let { channel: t } = e,
                                n = (0, g.KS)(t);
                            return (
                                null != n &&
                                (0, l.jsx)(n, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: S.icon,
                                })
                            );
                        })(e),
                }),
                (0, l.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: d || null != a ? "text-feedback-critical" : "text-muted",
                    className: S.bottomMargin,
                    children: null != a ? a : h,
                }),
            ],
        });
    }
    renderBody() {
        let {
            channel: { nsfw: e },
        } = this.props;
        return (0, l.jsxs)("div", {
            className: S.body,
            children: [
                (0, l.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    id: this.state.headerId,
                    children: M.intl.string(M.t.mvPFbA),
                }),
                (0, l.jsx)(c.Text, {
                    color: "text-muted",
                    className: i()(S.topMargin, { [S.formMargin]: !e }),
                    variant: "text-sm/normal",
                    children: M.intl.string(M.t.kbpkxJ),
                }),
                e
                    ? (0, l.jsx)(c.Text, {
                          className: i()(S.formMargin, S.topMargin),
                          color: "text-feedback-critical",
                          variant: "text-sm/normal",
                          children: M.intl.string(M.t["DrNm/5"]),
                      })
                    : null,
            ],
        });
    }
    renderHeader() {
        var e;
        let { guildToFollow: t, channelNameToFollow: n, channel: r } = this.props,
            a = null != (e = (0, g.KS)(r)) ? e : c.MqZ;
        return (0, l.jsxs)(c.xBx, {
            className: S.header,
            children: [
                (0, l.jsx)(p.Z, {
                    guild: t,
                    size: p.Z.Sizes.LARGE,
                }),
                (0, l.jsx)("div", {
                    className: S.channelContainer,
                    children: (0, l.jsxs)("div", {
                        className: S.channel,
                        children: [
                            (0, l.jsx)(a, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: S.channelIcon,
                            }),
                            (0, l.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: S.channelName,
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
        return (0, l.jsxs)(c.Y0X, {
            transitionState: e,
            "aria-labelledby": this.state.headerId,
            parentComponent: "FollowModal",
            children: [
                this.renderHeader(),
                (0, l.jsxs)(c.hzk, {
                    className: S.content,
                    children: [this.renderBody(), this.renderForm()],
                }),
                (0, l.jsx)(c.mzw, { children: this.renderFooter() }),
            ],
        });
    }
    constructor(e) {
        super(e),
            O(this, "handleGuildSelect", (e) => {
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
            O(this, "handleChannelSelect", (e) => {
                this.setState({ selectedChannelId: e });
            }),
            O(this, "handleFollow", () => {
                let { channel: e, onClose: t } = this.props,
                    { selectedChannelId: r, selectedGuildId: a } = this.state;
                null != r &&
                    (this.setState({ submitting: !0 }),
                    h.Z.createChannelFollower(r, e.id)
                        .then(() => {
                            d.Z.dispatch({
                                type: "CHANNEL_FOLLOWER_CREATED",
                                channelId: r,
                                guildId: a,
                            }),
                                t(),
                                (0, c.ZDy)(async () => {
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
                                                            O(e, t, n[t]);
                                                        });
                                                }
                                                return e;
                                            })({}, t),
                                        );
                                });
                        })
                        .catch((e) => {
                            e.body.code === v.evJ.TOO_MANY_WEBHOOKS
                                ? this.setState({
                                      errorMessage: M.intl.string(M.t["1eZ4aB"]),
                                      submitting: !1,
                                  })
                                : this.setState({
                                      errorMessage: M.intl.string(M.t.LgwhuN),
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
            headerId: (0, m.hQ)("modal"),
        };
    }
}
let F = s.ZP.connectStores(
    [b.Z, f.Z, x.ZP, C.Z, y.Z],
    (e) => {
        let { channel: t } = e,
            n = b.Z.getGuild(t.guild_id),
            l = b.Z.getGuildsArray().reduce((e, t) => {
                let n = x.ZP.getChannels(t.id)
                    .SELECTABLE.map((e) => e.channel)
                    .filter((e) => e.type === v.d4z.GUILD_TEXT && C.Z.can(v.Plq.MANAGE_WEBHOOKS, e))
                    .map((e) => {
                        let t = f.Z.getChannel(e.parent_id);
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
            r = y.Z.getLastChannelFollowingDestination();
        return {
            guildToFollow: n,
            channelNameToFollow: t.name,
            guilds: l,
            lastChannelFollowingDestination: null != r ? r : {},
        };
    },
    { forwardRef: !0 },
)(w);
