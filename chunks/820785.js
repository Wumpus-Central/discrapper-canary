"use strict";
n.d(t, {
    KJ: () => j,
    N_: () => $,
    vw: () => z,
    lg: () => W,
    nG: () => H,
    c3: () => B,
    OS: () => V,
    Y9: () => K,
    IH: () => Y,
});
var i = n(627968),
    r = n(64700),
    a = n(939249),
    s = n(97808),
    l = n(778712),
    o = n(685761),
    d = n(173936),
    c = n(99677),
    u = n(194261),
    _ = n(34188),
    E = n(577473),
    A = n(403581),
    h = n(323384),
    I = n(625903),
    f = n(659421),
    p = n(329308),
    T = n(571694),
    m = n(47167),
    g = n(713654),
    S = n(652215),
    N = n(375708);
function C(e) {
    if (null == e) return null;
    switch (e.type) {
        case S.rbe.GUILD_ANNOUNCEMENT:
            return N.intl.string(N.t.l1dkSD);
        case S.rbe.GUILD_STORE:
            return N.intl.string(N.t["P1/Erq"]);
        case S.rbe.DM:
        case S.rbe.GROUP_DM:
            return N.intl.string(N.t.jN2DfZ);
        case S.rbe.PRIVATE_THREAD:
            return N.intl.string(N.t.F1zyvU);
        case S.rbe.ANNOUNCEMENT_THREAD:
        case S.rbe.PUBLIC_THREAD:
            return N.intl.string(N.t["7Xm5QI"]);
        case S.rbe.GUILD_TEXT:
            return N.intl.string(N.t.Pnajj0);
        case S.rbe.GUILD_FORUM:
            return e.isMediaChannel() ? N.intl.string(N.t.seKITE) : N.intl.string(N.t.GbryDd);
        case S.rbe.GUILD_MEDIA:
            return N.intl.string(N.t.seKITE);
        case S.rbe.GUILD_STAGE_VOICE:
            return N.intl.string(N.t.EErMzA);
        case S.rbe.GUILD_VOICE:
            return N.intl.string(N.t.BVZqJl);
        case S.rbe.GUILD_CATEGORY:
        default:
            return null;
    }
}
var O = n(503698),
    R = n.n(O),
    L = n(702923);
let D = function (e) {
    let { value: t = 0, text: n, className: r, lowImportance: a, ...s } = e;
    return null != n
        ? (0, i.jsx)("div", { className: R()(L.i, r, a && L.H), ...s, children: n })
        : t > 0
          ? (0, i.jsx)("div", { className: R()(L.i, r, a && L.H), ...s, children: t })
          : null;
};
var y = n(769015),
    v = n(106191),
    b = n(548118),
    M = n(376943),
    P = n(636585),
    U = n(71393),
    w = n(994500),
    G = n(287809),
    x = n(427262),
    k = n(818061);
class F extends r.PureComponent {
    node;
    componentDidMount() {
        let { focused: e, onFocus: t } = this.props,
            { node: n } = this;
        e && null != n && t(n);
    }
    componentDidUpdate(e) {
        let { focused: t, onFocus: n } = this.props,
            { node: i } = this;
        null != i && t && !e.focused && n(i);
    }
    handleClick = (e) => {
        e.preventDefault();
        let { onClick: t } = this.props,
            { node: n } = this;
        null != n && t(e, n);
    };
    handleMouseEnter = (e) => {
        let { onMouseEnter: t } = this.props,
            { node: n } = this;
        null != n && t(e, n);
    };
    setRef = (e) => {
        this.node = e;
    };
    render() {
        let { focused: e, children: t, score: n, onContextMenu: r, id: s, "aria-label": l } = this.props;
        return (0, i.jsxs)(a.D, {
            role: "option",
            id: s,
            "aria-label": l,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: k.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [t, null != n ? (0, i.jsx)("div", { className: k.fN, children: 0 | n }) : null],
        });
    }
}
class V extends r.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: k._C,
            children: (0, i.jsx)(b.Ay, { tabIndex: -1, guild: e, size: b.Ay.Sizes.MINI, className: k.$f }),
        });
    }
    renderName() {
        let { guild: e, inlineLabel: t } = this.props;
        return (0, i.jsxs)("div", {
            className: k.UU,
            children: [
                (0, i.jsx)("span", { className: k.YW, children: e.name }),
                null != t ? (0, i.jsx)("span", { className: k.N4, children: t }) : null,
            ],
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? k.XB : k.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: k.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return N.intl.formatToPlainString(N.t.WVq3Lr, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: l } = this.props;
        return (0, i.jsx)(F, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
class B extends r.Component {
    static defaultProps = { unread: !1 };
    renderIcon() {
        let { channel: e } = this.props,
            t = (0, g.gU)(e);
        if (null == t) return null;
        let n = C(e) ?? "";
        return (0, i.jsx)("div", {
            className: k.zc,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(t, { className: k.Kk, size: "xs", color: "currentColor" }),
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: r, channel: a, isMentionLowImportance: s } = this.props;
        return (
            null != n && n > 0 && (e = (0, i.jsx)(D, { className: k.qS, value: n, lowImportance: s })),
            null != r && (t = (0, i.jsx)("span", { className: k.N4, children: (0, m.m1)(r, G.default, w.A) })),
            (0, i.jsxs)("div", {
                className: k.UU,
                children: [
                    (0, i.jsx)("span", { className: k.YW, children: (0, m.m1)(a, G.default, w.A) }),
                    e,
                    this.renderVoiceStates(),
                    t,
                ],
            })
        );
    }
    renderVoiceStates() {
        let { voiceStates: e, channel: t } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(P.A, {
                  className: k.x7,
                  guildId: t.guild_id,
                  users: e.map((e) => {
                      let { user: t } = e;
                      return { user: t };
                  }),
                  max: 4,
              });
    }
    renderContent() {
        let { unread: e, mentions: t, children: n } = this.props;
        return (0, i.jsxs)("div", {
            "aria-hidden": !0,
            className: e || (null != t && t > 0) ? k.XB : k.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: k.Lr, children: n })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e } = this.props,
            t = U.A.getGuild(this.props.channel.guild_id)?.name,
            n = (0, m.m1)(e, G.default, w.A),
            i = C(e);
        return N.intl.formatToPlainString(N.t["Vw/da+"], { name: n, type: i, guild: t });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: l } = this.props;
        return (0, i.jsx)(F, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
class H extends r.Component {
    renderIcon() {
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: k.IU,
            children: (0, i.jsx)(s.eu, { src: (0, T.Y)(e), size: l._3.SIZE_20, "aria-hidden": !0, status: t }),
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t && t > 0 && (e = (0, i.jsx)(D, { className: k.qS, value: t })),
            (0, i.jsxs)("div", {
                className: k.UU,
                children: [(0, i.jsx)("span", { className: k.YW, children: (0, m.m1)(n, G.default, w.A) }), e],
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? k.XB : k.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: k.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, m.m1)(e, G.default, w.A);
        return null != t && t > 0
            ? N.intl.formatToPlainString(N.t.LYdVfN, { name: n, mentions: t })
            : N.intl.formatToPlainString(N.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: l } = this.props;
        return (0, i.jsx)(F, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
class j extends r.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: k.zc,
            children: (0, i.jsx)(s.eu, {
                src: e.getAvatarURL(void 0, 20),
                "aria-hidden": !0,
                size: l._3.SIZE_20,
                status: t,
                isMobile: n,
            }),
        });
    }
    getDisplayNickname() {
        let e,
            { user: t, comparator: n } = this.props,
            i = w.A.getNickname(t.id);
        return (
            ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) &&
                (e = i ?? x.Ay.getName(t)),
            e
        );
    }
    renderName() {
        let e,
            { user: t, mentions: n } = this.props,
            r = this.getDisplayNickname();
        return (
            null != n && n > 0 && (e = (0, i.jsx)(D, { className: k.qS, value: n })),
            (0, i.jsxs)("div", {
                className: k.UU,
                children: [
                    (0, i.jsx)("span", { className: k.YW, children: r }),
                    e,
                    (0, i.jsx)("span", { className: k.Xh, children: x.Ay.getUserTag(t) }),
                ],
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? k.XB : k.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: k.Lr, children: e })],
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            i = x.Ay.getUserTag(t);
        return null != e && e > 0
            ? N.intl.formatToPlainString(N.t["6b9UrR"], { name: n, id: i, mentions: e })
            : N.intl.formatToPlainString(N.t.GWYOAY, { name: n, id: i });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: l } = this.props;
        return (0, i.jsx)(F, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
class W extends r.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: k.xr,
            children: [
                (0, i.jsx)("div", {
                    className: k.zc,
                    children: (0, i.jsx)(y.A, { tabIndex: -1, className: k.Gt, game: t, size: k.D0 }),
                }),
                t.name,
                (0, i.jsx)("div", { className: k.Lr, children: e }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: r, id: a } = this.props;
        return (0, i.jsx)(F, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: r,
            children: this.renderContent(),
        });
    }
}
function Y(e) {
    let { game: t, onMouseEnter: n, onClick: r, onFocus: a, focused: s, id: l, inlineLabel: o, children: d } = e;
    return (0, i.jsx)(F, {
        id: l,
        onMouseEnter: n,
        onClick: r,
        onFocus: a,
        focused: s,
        children: (0, i.jsxs)("div", {
            className: k.xr,
            children: [
                (0, i.jsx)("div", { className: k.zc, children: (0, i.jsx)(v.A, { game: t, iconClassName: k.bN }) }),
                (0, i.jsxs)("div", {
                    className: k.UU,
                    children: [
                        (0, i.jsx)("span", { className: k.YW, children: t.name }),
                        null != o ? (0, i.jsx)("span", { className: k.N4, children: o }) : null,
                    ],
                }),
                (0, i.jsx)("div", { className: k.Lr, children: d }),
            ],
        }),
    });
}
class K extends r.Component {
    render() {
        return (0, i.jsx)("div", {
            className: k.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: k.xr,
                children: (0, i.jsx)("div", { className: k.wx, children: this.props.children }),
            }),
        });
    }
}
class $ extends r.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: r } = this.props;
        if (null != n.inviteCode)
            (e = N.intl.string(N.t.w6QG3F)), (t = (0, i.jsx)(o.f, { size: "xs", color: "currentColor" }));
        else {
            let r = (0, M.vu)(n.path);
            null == r || void 0 === r.messageId
                ? ((e = N.intl.string(N.t.qbSCqj)), (t = (0, i.jsx)(d.q, { size: "xs", color: "currentColor" })))
                : (0, M.r9)(r)
                  ? ((e = N.intl.string(N.t["6Fd/j1"])), (t = (0, i.jsx)(c.t, { size: "xs", color: "currentColor" })))
                  : ((e = N.intl.string(N.t.jQRwp4)), (t = (0, i.jsx)(u.X, { size: "xs", color: "currentColor" })));
        }
        return (0, i.jsxs)("div", {
            className: k.xr,
            children: [
                (0, i.jsx)("div", { className: k.zc, children: t }),
                e,
                (0, i.jsx)("div", { className: k.Lr, children: r }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: l } = this.props;
        return (0, i.jsx)(F, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
class z extends r.Component {
    renderContent() {
        let e,
            t,
            { navigationRecord: n, children: r } = this.props;
        switch (n.type) {
            case p.t1.SHOP:
                (e = N.intl.string(N.t.pWG4ze)), (t = (0, i.jsx)(_.U, { size: "xs", color: "currentColor" }));
                break;
            case p.t1.SHOP_ORBS_TAB:
                (e = N.intl.string(N.t.EBYkzk)), (t = (0, i.jsx)(_.U, { size: "xs", color: "currentColor" }));
                break;
            case p.t1.QUEST_ORBS:
                (e = `${N.intl.string(N.t.ElYQFS)} ${N.intl.string(N.t.JALI2K)}`),
                    (t = (0, i.jsx)(E.r, { size: "xs", color: "currentColor" }));
                break;
            case p.t1.NITRO_HOME:
                (e = N.intl.string(N.t.Ipxkog)), (t = (0, i.jsx)(A.t, { size: "xs", color: "currentColor" }));
                break;
            case p.t1.QUEST_HOME:
                (e = N.intl.string(N.t.JALI2K)), (t = (0, i.jsx)(E.r, { size: "xs", color: "currentColor" }));
                break;
            case p.t1.APPS_HOME:
                (e = N.intl.string(N.t.PHjkRE)), (t = (0, i.jsx)(h.k, { size: "xs", color: "currentColor" }));
                break;
            case p.t1.SETTINGS:
                (e = n.label ?? N.intl.string(N.t["3D5yo/"])),
                    (t = (0, i.jsx)(I.Z, { size: "xs", color: "currentColor" }));
                break;
            case p.t1.PLAYGROUND:
                if (((e = n.label ?? `${n.collectionId} Playground`), null != n.IconComponent)) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
                } else t = (0, i.jsx)(f.H, { size: "xs", color: "currentColor" });
                break;
            default:
                (e = n.id), (t = (0, i.jsx)(d.q, { size: "xs", color: "currentColor" }));
        }
        return (0, i.jsxs)("div", {
            className: k.xr,
            children: [
                (0, i.jsx)("div", { className: k.zc, children: t }),
                (0, i.jsx)("div", { className: k.UU, children: e }),
                (0, i.jsx)("div", { className: k.Lr, children: r }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: l } = this.props;
        return (0, i.jsx)(F, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
