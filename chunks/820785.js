"use strict";
n.d(t, { KJ: () => H, N_: () => W, vw: () => K, lg: () => j, nG: () => B, c3: () => V, OS: () => F, Y9: () => Y });
var i = n(627968),
    r = n(64700),
    s = n(939249),
    a = n(97808),
    o = n(778712),
    l = n(685761),
    u = n(173936),
    c = n(99677),
    d = n(194261),
    _ = n(34188),
    f = n(577473),
    h = n(403581),
    p = n(323384),
    E = n(625903),
    m = n(659421),
    g = n(329308),
    A = n(571694),
    I = n(47167),
    T = n(713654),
    S = n(652215),
    N = n(375708);
function y(e) {
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
var C = n(503698),
    v = n.n(C),
    O = n(702923);
let R = (e) => {
    let { value: t = 0, text: n, className: r, lowImportance: s, ...a } = e;
    return null != n
        ? (0, i.jsx)("div", { className: v()(O.i, r, s && O.H), ...a, children: n })
        : t > 0
          ? (0, i.jsx)("div", { className: v()(O.i, r, s && O.H), ...a, children: t })
          : null;
};
var b = n(137177),
    D = n(548118),
    L = n(376943),
    w = n(636585),
    M = n(71393),
    P = n(994500),
    x = n(287809),
    U = n(427262),
    k = n(818061);
class G extends r.PureComponent {
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
        let { focused: e, children: t, score: n, onContextMenu: r, id: a, "aria-label": o } = this.props;
        return (0, i.jsxs)(s.D, {
            role: "option",
            id: a,
            "aria-label": o,
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
class F extends r.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: k._C,
            children: (0, i.jsx)(D.Ay, { tabIndex: -1, guild: e, size: D.Ay.Sizes.MINI, className: k.$f }),
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: k.UU,
            children: (0, i.jsx)("span", { className: k.YW, children: e.name }),
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
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: o } = this.props;
        return (0, i.jsx)(G, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent(),
        });
    }
}
class V extends r.Component {
    static defaultProps = { unread: !1 };
    renderIcon() {
        let { channel: e } = this.props,
            t = (0, T.gU)(e);
        if (null == t) return null;
        let n = y(e) ?? "";
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
            { mentions: n, category: r, channel: s, isMentionLowImportance: a } = this.props;
        return (
            null != n && n > 0 && (e = (0, i.jsx)(R, { className: k.qS, value: n, lowImportance: a })),
            null != r && (t = (0, i.jsx)("span", { className: k.N4, children: (0, I.m1)(r, x.default, P.A) })),
            (0, i.jsxs)("div", {
                className: k.UU,
                children: [
                    (0, i.jsx)("span", { className: k.YW, children: (0, I.m1)(s, x.default, P.A) }),
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
            : (0, i.jsx)(w.A, {
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
            t = M.A.getGuild(this.props.channel.guild_id)?.name,
            n = (0, I.m1)(e, x.default, P.A),
            i = y(e);
        return N.intl.formatToPlainString(N.t["Vw/da+"], { name: n, type: i, guild: t });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: o } = this.props;
        return (0, i.jsx)(G, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent(),
        });
    }
}
class B extends r.Component {
    renderIcon() {
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: k.IU,
            children: (0, i.jsx)(a.eu, { src: (0, A.Y)(e), size: o._3.SIZE_20, "aria-hidden": !0, status: t }),
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t && t > 0 && (e = (0, i.jsx)(R, { className: k.qS, value: t })),
            (0, i.jsxs)("div", {
                className: k.UU,
                children: [(0, i.jsx)("span", { className: k.YW, children: (0, I.m1)(n, x.default, P.A) }), e],
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
            n = (0, I.m1)(e, x.default, P.A);
        return null != t && t > 0
            ? N.intl.formatToPlainString(N.t.LYdVfN, { name: n, mentions: t })
            : N.intl.formatToPlainString(N.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: o } = this.props;
        return (0, i.jsx)(G, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent(),
        });
    }
}
class H extends r.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: k.zc,
            children: (0, i.jsx)(a.eu, {
                src: e.getAvatarURL(void 0, 20),
                "aria-hidden": !0,
                size: o._3.SIZE_20,
                status: t,
                isMobile: n,
            }),
        });
    }
    getDisplayNickname() {
        let e,
            { user: t, comparator: n } = this.props,
            i = P.A.getNickname(t.id);
        return (
            ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) &&
                (e = i ?? U.Ay.getName(t)),
            e
        );
    }
    renderName() {
        let e,
            { user: t, mentions: n } = this.props,
            r = this.getDisplayNickname();
        return (
            null != n && n > 0 && (e = (0, i.jsx)(R, { className: k.qS, value: n })),
            (0, i.jsxs)("div", {
                className: k.UU,
                children: [
                    (0, i.jsx)("span", { className: k.YW, children: r }),
                    e,
                    (0, i.jsx)("span", { className: k.Xh, children: U.Ay.getUserTag(t) }),
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
            i = U.Ay.getUserTag(t);
        return null != e && e > 0
            ? N.intl.formatToPlainString(N.t["6b9UrR"], { name: n, id: i, mentions: e })
            : N.intl.formatToPlainString(N.t.GWYOAY, { name: n, id: i });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: o } = this.props;
        return (0, i.jsx)(G, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent(),
        });
    }
}
class j extends r.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: k.xr,
            children: [
                (0, i.jsx)("div", {
                    className: k.zc,
                    children: (0, i.jsx)(b.A, { tabIndex: -1, className: k.Gt, game: t, size: k.D0 }),
                }),
                t.name,
                (0, i.jsx)("div", { className: k.Lr, children: e }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: r, id: s } = this.props;
        return (0, i.jsx)(G, {
            id: s,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: r,
            children: this.renderContent(),
        });
    }
}
class Y extends r.Component {
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
class W extends r.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: r } = this.props;
        if (null != n.inviteCode)
            (e = N.intl.string(N.t.w6QG3F)), (t = (0, i.jsx)(l.f, { size: "xs", color: "currentColor" }));
        else {
            let r = (0, L.vu)(n.path);
            null == r || void 0 === r.messageId
                ? ((e = N.intl.string(N.t.qbSCqj)), (t = (0, i.jsx)(u.q, { size: "xs", color: "currentColor" })))
                : (0, L.r9)(r)
                  ? ((e = N.intl.string(N.t["6Fd/j1"])), (t = (0, i.jsx)(c.t, { size: "xs", color: "currentColor" })))
                  : ((e = N.intl.string(N.t.jQRwp4)), (t = (0, i.jsx)(d.X, { size: "xs", color: "currentColor" })));
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
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: o } = this.props;
        return (0, i.jsx)(G, {
            id: o,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent(),
        });
    }
}
class K extends r.Component {
    renderContent() {
        let e,
            t,
            { navigationRecord: n, children: r } = this.props;
        switch (n.type) {
            case g.t1.SHOP:
                (e = N.intl.string(N.t.pWG4ze)), (t = (0, i.jsx)(_.U, { size: "xs", color: "currentColor" }));
                break;
            case g.t1.SHOP_ORBS_TAB:
                (e = N.intl.string(N.t.EBYkzk)), (t = (0, i.jsx)(_.U, { size: "xs", color: "currentColor" }));
                break;
            case g.t1.QUEST_ORBS:
                (e = `${N.intl.string(N.t.ElYQFS)} ${N.intl.string(N.t.JALI2K)}`),
                    (t = (0, i.jsx)(f.r, { size: "xs", color: "currentColor" }));
                break;
            case g.t1.NITRO_HOME:
                (e = N.intl.string(N.t.Ipxkog)), (t = (0, i.jsx)(h.t, { size: "xs", color: "currentColor" }));
                break;
            case g.t1.QUEST_HOME:
                (e = N.intl.string(N.t.JALI2K)), (t = (0, i.jsx)(f.r, { size: "xs", color: "currentColor" }));
                break;
            case g.t1.APPS_HOME:
                (e = N.intl.string(N.t.PHjkRE)), (t = (0, i.jsx)(p.k, { size: "xs", color: "currentColor" }));
                break;
            case g.t1.SETTINGS:
                (e = n.label ?? N.intl.string(N.t["3D5yo/"])),
                    (t = (0, i.jsx)(E.Z, { size: "xs", color: "currentColor" }));
                break;
            case g.t1.PLAYGROUND:
                if (((e = n.label ?? `${n.collectionId} Playground`), null != n.IconComponent)) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
                } else t = (0, i.jsx)(m.H, { size: "xs", color: "currentColor" });
                break;
            default:
                (e = n.id), (t = (0, i.jsx)(u.q, { size: "xs", color: "currentColor" }));
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
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: o } = this.props;
        return (0, i.jsx)(G, {
            id: o,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent(),
        });
    }
}
