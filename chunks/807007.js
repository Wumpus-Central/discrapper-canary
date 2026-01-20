n.d(t, { default: () => O }), n(388685);
var l = n(54381),
    a = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(528963),
    h = n(933557),
    u = n(471445),
    g = n(313201),
    m = n(565138),
    p = n(592125),
    f = n(984933),
    x = n(430824),
    b = n(496675),
    C = n(699516),
    j = n(944486),
    y = n(594174),
    _ = n(626135),
    M = n(709054),
    S = n(981631),
    N = n(388032),
    Z = n(481073);
function v(e, t, n) {
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
class w extends a.PureComponent {
    componentDidMount() {
        _.default.track(S.rMx.OPEN_MODAL, {
            type: "Follow Channel Modal",
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: "Chat Input Blocker - Follow Channel",
        });
    }
    getDefaultChannelId(e) {
        let t = e.find((e) => {
                let { channel: t } = e;
                return "general" === (0, h.F6)(t, y.default, C.Z);
            }),
            n = null != t ? t : e[0];
        return null != n ? n.channel.id : null;
    }
    renderFooter() {
        let { selectedGuildId: e, selectedChannelId: t, submitting: n } = this.state,
            { onClose: a } = this.props;
        return (0, l.jsxs)(o.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [
                (0, l.jsx)(o.Button, {
                    variant: "primary",
                    text: N.intl.string(N.t["3aOv+h"]),
                    loading: n,
                    onClick: this.handleFollow,
                    disabled: null == e || null == t,
                }),
                (0, l.jsx)(o.Button, {
                    variant: "secondary",
                    text: N.intl.string(N.t["ETE/oC"]),
                    onClick: a,
                }),
            ],
        });
    }
    renderForm() {
        let { guilds: e } = this.props,
            { channels: t, selectedGuildId: n, selectedChannelId: a, errorMessage: r } = this.state,
            i = M.default.keys(e).map((t) => {
                let { guild: n } = e[t];
                return {
                    id: t,
                    value: t,
                    label: n.name,
                    leading:
                        null == n
                            ? null
                            : (0, l.jsx)(m.Z, {
                                  guild: n,
                                  size: m.Z.Sizes.MINI,
                              }),
                };
            }),
            s = t.map((e) => {
                let { channel: t } = e;
                return {
                    id: t.id,
                    value: t.id,
                    label: (0, h.F6)(t, y.default, C.Z),
                    leading: (function (e) {
                        if (null == e) return null;
                        let t = (0, u.KS)(e);
                        return (
                            null != t &&
                            (0, l.jsx)(t, {
                                size: "xs",
                                color: "currentColor",
                                className: Z.icon,
                            })
                        );
                    })(t),
                };
            }),
            c = 0 === i.length,
            d = c ? N.intl.string(N.t["6b6QoF"]) : N.intl.string(N.t.Z0quyN);
        return (0, l.jsxs)(o.Kqy, {
            gap: 16,
            children: [
                (0, l.jsx)(o.VcW, {
                    selectionMode: "single",
                    label: N.intl.string(N.t.xFn72s),
                    value: n,
                    options: i,
                    disabled: c,
                    onSelectionChange: (e) => this.handleGuildSelect(e),
                }),
                (0, l.jsx)(o.VcW, {
                    selectionMode: "single",
                    label: N.intl.string(N.t.PDn2fR),
                    value: a,
                    options: s,
                    disabled: 0 === s.length,
                    onSelectionChange: (e) => this.handleChannelSelect(e),
                }),
                (0, l.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: c || null != r ? "text-feedback-critical" : "text-muted",
                    className: Z.bottomMargin,
                    children: null != r ? r : d,
                }),
            ],
        });
    }
    renderBody() {
        let {
            channel: { nsfw: e },
        } = this.props;
        return (0, l.jsxs)("div", {
            className: Z.body,
            children: [
                (0, l.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    id: this.state.headerId,
                    children: N.intl.string(N.t.mvPFbA),
                }),
                (0, l.jsx)(o.Text, {
                    color: "text-muted",
                    className: i()(Z.topMargin, { [Z.formMargin]: !e }),
                    variant: "text-sm/normal",
                    children: N.intl.string(N.t.kbpkxJ),
                }),
                e
                    ? (0, l.jsx)(o.Text, {
                          className: i()(Z.formMargin, Z.topMargin),
                          color: "text-feedback-critical",
                          variant: "text-sm/normal",
                          children: N.intl.string(N.t["DrNm/5"]),
                      })
                    : null,
            ],
        });
    }
    renderHeader() {
        var e;
        let { guildToFollow: t, channelNameToFollow: n, channel: a } = this.props,
            r = null != (e = (0, u.KS)(a)) ? e : o.MqZ;
        return (0, l.jsxs)(o.xBx, {
            className: Z.header,
            children: [
                (0, l.jsx)(m.Z, {
                    guild: t,
                    size: m.Z.Sizes.LARGE,
                }),
                (0, l.jsx)("div", {
                    className: Z.channelContainer,
                    children: (0, l.jsxs)("div", {
                        className: Z.channel,
                        children: [
                            (0, l.jsx)(r, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: Z.channelIcon,
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: "text-md/medium",
                                className: Z.channelName,
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
                    className: Z.content,
                    children: [this.renderBody(), this.renderForm()],
                }),
                (0, l.jsx)(o.mzw, { children: this.renderFooter() }),
            ],
        });
    }
    constructor(e) {
        super(e),
            v(this, "handleGuildSelect", (e) => {
                let { guilds: t } = this.props,
                    { selectedGuildId: n } = this.state,
                    l = t[e].channels,
                    a = this.getDefaultChannelId(l);
                n !== e &&
                    this.setState({
                        selectedGuildId: e,
                        selectedChannelId: a,
                        channels: l,
                    });
            }),
            v(this, "handleChannelSelect", (e) => {
                this.setState({ selectedChannelId: e });
            }),
            v(this, "handleFollow", () => {
                let { channel: e, onClose: t } = this.props,
                    { selectedChannelId: a, selectedGuildId: r } = this.state;
                null != a &&
                    (this.setState({ submitting: !0 }),
                    d.Z.createChannelFollower(a, e.id)
                        .then(() => {
                            c.Z.dispatch({
                                type: "CHANNEL_FOLLOWER_CREATED",
                                channelId: a,
                                guildId: r,
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
                                                            v(e, t, n[t]);
                                                        });
                                                }
                                                return e;
                                            })({}, t),
                                        );
                                });
                        })
                        .catch((e) => {
                            e.body.code === S.evJ.TOO_MANY_WEBHOOKS
                                ? this.setState({
                                      errorMessage: N.intl.string(N.t["1eZ4aB"]),
                                      submitting: !1,
                                  })
                                : this.setState({
                                      errorMessage: N.intl.string(N.t.LgwhuN),
                                      submitting: !1,
                                  });
                        }));
            });
        let { guilds: t, lastChannelFollowingDestination: a } = e,
            { guildId: r, channelId: i } = a;
        this.state = {
            selectedGuildId: r,
            selectedChannelId: i,
            channels: null != r && null != t[r] ? t[r].channels : [],
            errorMessage: null,
            submitting: !1,
            headerId: (0, g.hQ)("modal"),
        };
    }
}
let O = s.ZP.connectStores(
    [x.Z, p.Z, f.ZP, b.Z, j.Z],
    (e) => {
        let { channel: t } = e,
            n = x.Z.getGuild(t.guild_id),
            l = x.Z.getGuildsArray().reduce((e, t) => {
                let n = f.ZP.getChannels(t.id)
                    .SELECTABLE.map((e) => e.channel)
                    .filter((e) => e.type === S.d4z.GUILD_TEXT && b.Z.can(S.Plq.MANAGE_WEBHOOKS, e))
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
            a = j.Z.getLastChannelFollowingDestination();
        return {
            guildToFollow: n,
            channelNameToFollow: t.name,
            guilds: l,
            lastChannelFollowingDestination: null != a ? a : {},
        };
    },
    { forwardRef: !0 },
)(w);
