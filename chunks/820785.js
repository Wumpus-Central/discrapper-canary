n.d(t, { KJ: () => B, N_: () => k, vw: () => Z, lg: () => F, nG: () => W, c3: () => H, OS: () => U, Y9: () => K });
var i = n(627968),
    l = n(64700),
    s = n(939249),
    r = n(97808),
    a = n(778712),
    o = n(685761),
    d = n(173936),
    c = n(99677),
    u = n(194261),
    h = n(34188),
    g = n(577473),
    A = n(403581),
    E = n(323384),
    p = n(625903),
    I = n(659421),
    C = n(329308),
    m = n(571694),
    _ = n(47167),
    b = n(713654),
    N = n(652215),
    v = n(985018);
function f(e) {
    if (null == e) return null;
    switch (e.type) {
        case N.rbe.GUILD_ANNOUNCEMENT:
            return v.intl.string(v.t.l1dkSD);
        case N.rbe.GUILD_STORE:
            return v.intl.string(v.t["P1/Erq"]);
        case N.rbe.DM:
        case N.rbe.GROUP_DM:
            return v.intl.string(v.t.jN2DfZ);
        case N.rbe.PRIVATE_THREAD:
            return v.intl.string(v.t.F1zyvU);
        case N.rbe.ANNOUNCEMENT_THREAD:
        case N.rbe.PUBLIC_THREAD:
            return v.intl.string(v.t["7Xm5QI"]);
        case N.rbe.GUILD_TEXT:
            return v.intl.string(v.t.Pnajj0);
        case N.rbe.GUILD_FORUM:
            return e.isMediaChannel() ? v.intl.string(v.t.seKITE) : v.intl.string(v.t.GbryDd);
        case N.rbe.GUILD_MEDIA:
            return v.intl.string(v.t.seKITE);
        case N.rbe.GUILD_STAGE_VOICE:
            return v.intl.string(v.t.EErMzA);
        case N.rbe.GUILD_VOICE:
            return v.intl.string(v.t.BVZqJl);
        case N.rbe.GUILD_CATEGORY:
        default:
            return null;
    }
}
var T = n(503698),
    S = n.n(T),
    O = n(702923);
let L = (e) => {
    let { value: t = 0, text: n, className: l, lowImportance: s, ...r } = e;
    return null != n
        ? (0, i.jsx)("div", { className: S()(O.i, l, s && O.H), ...r, children: n })
        : t > 0
          ? (0, i.jsx)("div", { className: S()(O.i, l, s && O.H), ...r, children: t })
          : null;
};
var R = n(137177),
    M = n(548118),
    y = n(376943),
    G = n(636585),
    x = n(71393),
    w = n(994500),
    j = n(287809),
    V = n(427262),
    D = n(818061);
class P extends l.PureComponent {
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
        let { focused: e, children: t, score: n, onContextMenu: l, id: r, "aria-label": a } = this.props;
        return (0, i.jsxs)(s.D, {
            role: "option",
            id: r,
            "aria-label": a,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: D.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: l,
            children: [t, null != n ? (0, i.jsx)("div", { className: D.fN, children: 0 | n }) : null],
        });
    }
}
class U extends l.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: D._C,
            children: (0, i.jsx)(M.Ay, { tabIndex: -1, guild: e, size: M.Ay.Sizes.MINI, className: D.$f }),
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: D.UU,
            children: (0, i.jsx)("span", { className: D.YW, children: e.name }),
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? D.XB : D.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: D.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return v.intl.formatToPlainString(v.t.WVq3Lr, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: s, score: r, id: a } = this.props;
        return (0, i.jsx)(P, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            children: this.renderContent(),
        });
    }
}
class H extends l.Component {
    static defaultProps = { unread: !1 };
    renderIcon() {
        let { channel: e } = this.props,
            t = (0, b.gU)(e);
        if (null == t) return null;
        let n = f(e) ?? "";
        return (0, i.jsx)("div", {
            className: D.zc,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(t, { className: D.Kk, size: "xs", color: "currentColor" }),
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: l, channel: s, isMentionLowImportance: r } = this.props;
        return (
            null != n && n > 0 && (e = (0, i.jsx)(L, { className: D.qS, value: n, lowImportance: r })),
            null != l && (t = (0, i.jsx)("span", { className: D.N4, children: (0, _.m1)(l, j.default, w.A) })),
            (0, i.jsxs)("div", {
                className: D.UU,
                children: [
                    (0, i.jsx)("span", { className: D.YW, children: (0, _.m1)(s, j.default, w.A) }),
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
            : (0, i.jsx)(G.A, {
                  className: D.x7,
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
            className: e || (null != t && t > 0) ? D.XB : D.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: D.Lr, children: n })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e } = this.props,
            t = x.A.getGuild(this.props.channel.guild_id)?.name,
            n = (0, _.m1)(e, j.default, w.A),
            i = f(e);
        return v.intl.formatToPlainString(v.t["Vw/da+"], { name: n, type: i, guild: t });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: s, score: r, id: a } = this.props;
        return (0, i.jsx)(P, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            children: this.renderContent(),
        });
    }
}
class W extends l.Component {
    renderIcon() {
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: D.IU,
            children: (0, i.jsx)(r.eu, { src: (0, m.Y)(e), size: a._3.SIZE_20, "aria-hidden": !0, status: t }),
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t && t > 0 && (e = (0, i.jsx)(L, { className: D.qS, value: t })),
            (0, i.jsxs)("div", {
                className: D.UU,
                children: [(0, i.jsx)("span", { className: D.YW, children: (0, _.m1)(n, j.default, w.A) }), e],
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? D.XB : D.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: D.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, _.m1)(e, j.default, w.A);
        return null != t && t > 0
            ? v.intl.formatToPlainString(v.t.LYdVfN, { name: n, mentions: t })
            : v.intl.formatToPlainString(v.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: s, score: r, id: a } = this.props;
        return (0, i.jsx)(P, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            children: this.renderContent(),
        });
    }
}
class B extends l.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: D.zc,
            children: (0, i.jsx)(r.eu, {
                src: e.getAvatarURL(void 0, 20),
                "aria-hidden": !0,
                size: a._3.SIZE_20,
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
                (e = i ?? V.Ay.getName(t)),
            e
        );
    }
    renderName() {
        let e,
            { user: t, mentions: n } = this.props,
            l = this.getDisplayNickname();
        return (
            null != n && n > 0 && (e = (0, i.jsx)(L, { className: D.qS, value: n })),
            (0, i.jsxs)("div", {
                className: D.UU,
                children: [
                    (0, i.jsx)("span", { className: D.YW, children: l }),
                    e,
                    (0, i.jsx)("span", { className: D.Xh, children: V.Ay.getUserTag(t) }),
                ],
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? D.XB : D.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: D.Lr, children: e })],
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            i = V.Ay.getUserTag(t);
        return null != e && e > 0
            ? v.intl.formatToPlainString(v.t["6b9UrR"], { name: n, id: i, mentions: e })
            : v.intl.formatToPlainString(v.t.GWYOAY, { name: n, id: i });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: s, score: r, id: a } = this.props;
        return (0, i.jsx)(P, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            children: this.renderContent(),
        });
    }
}
class F extends l.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: D.xr,
            children: [
                (0, i.jsx)("div", {
                    className: D.zc,
                    children: (0, i.jsx)(R.A, { tabIndex: -1, className: D.Gt, game: t, size: D.D0 }),
                }),
                t.name,
                (0, i.jsx)("div", { className: D.Lr, children: e }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: l, id: s } = this.props;
        return (0, i.jsx)(P, {
            id: s,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: l,
            children: this.renderContent(),
        });
    }
}
class K extends l.Component {
    render() {
        return (0, i.jsx)("div", {
            className: D.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: D.xr,
                children: (0, i.jsx)("div", { className: D.wx, children: this.props.children }),
            }),
        });
    }
}
class k extends l.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: l } = this.props;
        if (null != n.inviteCode)
            (e = v.intl.string(v.t.w6QG3F)), (t = (0, i.jsx)(o.f, { size: "xs", color: "currentColor" }));
        else {
            let l = (0, y.vu)(n.path);
            null == l || void 0 === l.messageId
                ? ((e = v.intl.string(v.t.qbSCqj)), (t = (0, i.jsx)(d.q, { size: "xs", color: "currentColor" })))
                : (0, y.r9)(l)
                  ? ((e = v.intl.string(v.t["6Fd/j1"])), (t = (0, i.jsx)(c.t, { size: "xs", color: "currentColor" })))
                  : ((e = v.intl.string(v.t.jQRwp4)), (t = (0, i.jsx)(u.X, { size: "xs", color: "currentColor" })));
        }
        return (0, i.jsxs)("div", {
            className: D.xr,
            children: [
                (0, i.jsx)("div", { className: D.zc, children: t }),
                e,
                (0, i.jsx)("div", { className: D.Lr, children: l }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: s, score: r, id: a } = this.props;
        return (0, i.jsx)(P, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            children: this.renderContent(),
        });
    }
}
class Z extends l.Component {
    renderContent() {
        let e,
            t,
            { navigationRecord: n, children: l } = this.props;
        switch (n.type) {
            case C.t1.SHOP:
                (e = v.intl.string(v.t.pWG4ze)), (t = (0, i.jsx)(h.U, { size: "xs", color: "currentColor" }));
                break;
            case C.t1.SHOP_ORBS_TAB:
                (e = v.intl.string(v.t.EBYkzk)), (t = (0, i.jsx)(h.U, { size: "xs", color: "currentColor" }));
                break;
            case C.t1.QUEST_ORBS:
                (e = `${v.intl.string(v.t.ElYQFS)} ${v.intl.string(v.t.JALI2K)}`),
                    (t = (0, i.jsx)(g.r, { size: "xs", color: "currentColor" }));
                break;
            case C.t1.NITRO_HOME:
                (e = v.intl.string(v.t.Ipxkog)), (t = (0, i.jsx)(A.t, { size: "xs", color: "currentColor" }));
                break;
            case C.t1.QUEST_HOME:
                (e = v.intl.string(v.t.JALI2K)), (t = (0, i.jsx)(g.r, { size: "xs", color: "currentColor" }));
                break;
            case C.t1.APPS_HOME:
                (e = v.intl.string(v.t.PHjkRE)), (t = (0, i.jsx)(E.k, { size: "xs", color: "currentColor" }));
                break;
            case C.t1.SETTINGS:
                (e = n.label ?? v.intl.string(v.t["3D5yo/"])),
                    (t = (0, i.jsx)(p.Z, { size: "xs", color: "currentColor" }));
                break;
            case C.t1.PLAYGROUND:
                if (((e = n.label ?? `${n.collectionId} Playground`), null != n.IconComponent)) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
                } else t = (0, i.jsx)(I.H, { size: "xs", color: "currentColor" });
                break;
            default:
                (e = n.id), (t = (0, i.jsx)(d.q, { size: "xs", color: "currentColor" }));
        }
        return (0, i.jsxs)("div", {
            className: D.xr,
            children: [
                (0, i.jsx)("div", { className: D.zc, children: t }),
                (0, i.jsx)("div", { className: D.UU, children: e }),
                (0, i.jsx)("div", { className: D.Lr, children: l }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: s, score: r, id: a } = this.props;
        return (0, i.jsx)(P, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            children: this.renderContent(),
        });
    }
}
