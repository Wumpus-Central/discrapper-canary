n.d(t, { KJ: () => H, N_: () => K, vw: () => Y, lg: () => F, nG: () => w, c3: () => W, OS: () => B, Y9: () => k });
var i = n(627968),
    r = n(64700),
    s = n(939249),
    l = n(97808),
    o = n(778712),
    a = n(685761),
    d = n(173936),
    c = n(99677),
    _ = n(194261),
    u = n(34188),
    g = n(577473),
    h = n(403581),
    A = n(323384),
    p = n(625903),
    I = n(659421),
    E = n(329308),
    b = n(571694),
    C = n(47167),
    S = n(713654),
    m = n(652215),
    f = n(985018);
function N(e) {
    if (null == e) return null;
    switch (e.type) {
        case m.rbe.GUILD_ANNOUNCEMENT:
            return f.intl.string(f.t.l1dkSD);
        case m.rbe.GUILD_STORE:
            return f.intl.string(f.t["P1/Erq"]);
        case m.rbe.DM:
        case m.rbe.GROUP_DM:
            return f.intl.string(f.t.jN2DfZ);
        case m.rbe.PRIVATE_THREAD:
            return f.intl.string(f.t.F1zyvU);
        case m.rbe.ANNOUNCEMENT_THREAD:
        case m.rbe.PUBLIC_THREAD:
            return f.intl.string(f.t["7Xm5QI"]);
        case m.rbe.GUILD_TEXT:
            return f.intl.string(f.t.Pnajj0);
        case m.rbe.GUILD_FORUM:
            return e.isMediaChannel() ? f.intl.string(f.t.seKITE) : f.intl.string(f.t.GbryDd);
        case m.rbe.GUILD_MEDIA:
            return f.intl.string(f.t.seKITE);
        case m.rbe.GUILD_STAGE_VOICE:
            return f.intl.string(f.t.EErMzA);
        case m.rbe.GUILD_VOICE:
            return f.intl.string(f.t.BVZqJl);
        case m.rbe.GUILD_CATEGORY:
        default:
            return null;
    }
}
var T = n(503698),
    L = n.n(T),
    O = n(702923);
let y = (e) => {
    let { value: t = 0, text: n, className: r, lowImportance: s, ...l } = e;
    return null != n
        ? (0, i.jsx)("div", { className: L()(O.i, r, s && O.H), ...l, children: n })
        : t > 0
          ? (0, i.jsx)("div", { className: L()(O.i, r, s && O.H), ...l, children: t })
          : null;
};
var G = n(137177),
    x = n(548118),
    R = n(376943),
    M = n(636585),
    v = n(71393),
    U = n(994500),
    D = n(287809),
    P = n(427262),
    j = n(818061);
class V extends r.PureComponent {
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
        let { focused: e, children: t, score: n, onContextMenu: r, id: l, "aria-label": o } = this.props;
        return (0, i.jsxs)(s.D, {
            role: "option",
            id: l,
            "aria-label": o,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: j.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [t, null != n ? (0, i.jsx)("div", { className: j.fN, children: 0 | n }) : null],
        });
    }
}
class B extends r.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: j._C,
            children: (0, i.jsx)(x.Ay, { tabIndex: -1, guild: e, size: x.Ay.Sizes.MINI, className: j.$f }),
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: j.UU,
            children: (0, i.jsx)("span", { className: j.YW, children: e.name }),
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? j.XB : j.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: j.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return f.intl.formatToPlainString(f.t.WVq3Lr, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: l, id: o } = this.props;
        return (0, i.jsx)(V, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: l,
            children: this.renderContent(),
        });
    }
}
class W extends r.Component {
    static defaultProps = { unread: !1 };
    renderIcon() {
        let { channel: e } = this.props,
            t = (0, S.gU)(e);
        if (null == t) return null;
        let n = N(e) ?? "";
        return (0, i.jsx)("div", {
            className: j.zc,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(t, { className: j.Kk, size: "xs", color: "currentColor" }),
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: r, channel: s, isMentionLowImportance: l } = this.props;
        return (
            null != n && n > 0 && (e = (0, i.jsx)(y, { className: j.qS, value: n, lowImportance: l })),
            null != r && (t = (0, i.jsx)("span", { className: j.N4, children: (0, C.m1)(r, D.default, U.A) })),
            (0, i.jsxs)("div", {
                className: j.UU,
                children: [
                    (0, i.jsx)("span", { className: j.YW, children: (0, C.m1)(s, D.default, U.A) }),
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
            : (0, i.jsx)(M.A, {
                  className: j.x7,
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
            className: e || (null != t && t > 0) ? j.XB : j.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: j.Lr, children: n })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e } = this.props,
            t = v.A.getGuild(this.props.channel.guild_id)?.name,
            n = (0, C.m1)(e, D.default, U.A),
            i = N(e);
        return f.intl.formatToPlainString(f.t["Vw/da+"], { name: n, type: i, guild: t });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: l, id: o } = this.props;
        return (0, i.jsx)(V, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: l,
            children: this.renderContent(),
        });
    }
}
class w extends r.Component {
    renderIcon() {
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: j.IU,
            children: (0, i.jsx)(l.eu, { src: (0, b.Y)(e), size: o._3.SIZE_20, "aria-hidden": !0, status: t }),
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t && t > 0 && (e = (0, i.jsx)(y, { className: j.qS, value: t })),
            (0, i.jsxs)("div", {
                className: j.UU,
                children: [(0, i.jsx)("span", { className: j.YW, children: (0, C.m1)(n, D.default, U.A) }), e],
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? j.XB : j.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: j.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, C.m1)(e, D.default, U.A);
        return null != t && t > 0
            ? f.intl.formatToPlainString(f.t.LYdVfN, { name: n, mentions: t })
            : f.intl.formatToPlainString(f.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: l, id: o } = this.props;
        return (0, i.jsx)(V, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: l,
            children: this.renderContent(),
        });
    }
}
class H extends r.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: j.zc,
            children: (0, i.jsx)(l.eu, {
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
            i = U.A.getNickname(t.id);
        return (
            ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) &&
                (e = i ?? P.Ay.getName(t)),
            e
        );
    }
    renderName() {
        let e,
            { user: t, mentions: n } = this.props,
            r = this.getDisplayNickname();
        return (
            null != n && n > 0 && (e = (0, i.jsx)(y, { className: j.qS, value: n })),
            (0, i.jsxs)("div", {
                className: j.UU,
                children: [
                    (0, i.jsx)("span", { className: j.YW, children: r }),
                    e,
                    (0, i.jsx)("span", { className: j.Xh, children: P.Ay.getUserTag(t) }),
                ],
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? j.XB : j.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: j.Lr, children: e })],
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            i = P.Ay.getUserTag(t);
        return null != e && e > 0
            ? f.intl.formatToPlainString(f.t["6b9UrR"], { name: n, id: i, mentions: e })
            : f.intl.formatToPlainString(f.t.GWYOAY, { name: n, id: i });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: l, id: o } = this.props;
        return (0, i.jsx)(V, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: l,
            children: this.renderContent(),
        });
    }
}
class F extends r.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: j.xr,
            children: [
                (0, i.jsx)("div", {
                    className: j.zc,
                    children: (0, i.jsx)(G.A, { tabIndex: -1, className: j.Gt, game: t, size: j.D0 }),
                }),
                t.name,
                (0, i.jsx)("div", { className: j.Lr, children: e }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: r, id: s } = this.props;
        return (0, i.jsx)(V, {
            id: s,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: r,
            children: this.renderContent(),
        });
    }
}
class k extends r.Component {
    render() {
        return (0, i.jsx)("div", {
            className: j.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: j.xr,
                children: (0, i.jsx)("div", { className: j.wx, children: this.props.children }),
            }),
        });
    }
}
class K extends r.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: r } = this.props;
        if (null != n.inviteCode)
            (e = f.intl.string(f.t.w6QG3F)), (t = (0, i.jsx)(a.f, { size: "xs", color: "currentColor" }));
        else {
            let r = (0, R.vu)(n.path);
            null == r || void 0 === r.messageId
                ? ((e = f.intl.string(f.t.qbSCqj)), (t = (0, i.jsx)(d.q, { size: "xs", color: "currentColor" })))
                : (0, R.r9)(r)
                  ? ((e = f.intl.string(f.t["6Fd/j1"])), (t = (0, i.jsx)(c.t, { size: "xs", color: "currentColor" })))
                  : ((e = f.intl.string(f.t.jQRwp4)), (t = (0, i.jsx)(_.X, { size: "xs", color: "currentColor" })));
        }
        return (0, i.jsxs)("div", {
            className: j.xr,
            children: [
                (0, i.jsx)("div", { className: j.zc, children: t }),
                e,
                (0, i.jsx)("div", { className: j.Lr, children: r }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: l, id: o } = this.props;
        return (0, i.jsx)(V, {
            id: o,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: l,
            children: this.renderContent(),
        });
    }
}
class Y extends r.Component {
    renderContent() {
        let e,
            t,
            { navigationRecord: n, children: r } = this.props;
        switch (n.type) {
            case E.t1.SHOP:
                (e = f.intl.string(f.t.pWG4ze)), (t = (0, i.jsx)(u.U, { size: "xs", color: "currentColor" }));
                break;
            case E.t1.SHOP_ORBS_TAB:
                (e = f.intl.string(f.t.EBYkzk)), (t = (0, i.jsx)(u.U, { size: "xs", color: "currentColor" }));
                break;
            case E.t1.QUEST_ORBS:
                (e = `${f.intl.string(f.t.ElYQFS)} ${f.intl.string(f.t.JALI2K)}`),
                    (t = (0, i.jsx)(g.r, { size: "xs", color: "currentColor" }));
                break;
            case E.t1.NITRO_HOME:
                (e = f.intl.string(f.t.Ipxkog)), (t = (0, i.jsx)(h.t, { size: "xs", color: "currentColor" }));
                break;
            case E.t1.QUEST_HOME:
                (e = f.intl.string(f.t.JALI2K)), (t = (0, i.jsx)(g.r, { size: "xs", color: "currentColor" }));
                break;
            case E.t1.APPS_HOME:
                (e = f.intl.string(f.t.PHjkRE)), (t = (0, i.jsx)(A.k, { size: "xs", color: "currentColor" }));
                break;
            case E.t1.SETTINGS:
                (e = n.label ?? f.intl.string(f.t["3D5yo/"])),
                    (t = (0, i.jsx)(p.Z, { size: "xs", color: "currentColor" }));
                break;
            case E.t1.PLAYGROUND:
                if (((e = n.label ?? `${n.collectionId} Playground`), null != n.IconComponent)) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
                } else t = (0, i.jsx)(I.H, { size: "xs", color: "currentColor" });
                break;
            default:
                (e = n.id), (t = (0, i.jsx)(d.q, { size: "xs", color: "currentColor" }));
        }
        return (0, i.jsxs)("div", {
            className: j.xr,
            children: [
                (0, i.jsx)("div", { className: j.zc, children: t }),
                (0, i.jsx)("div", { className: j.UU, children: e }),
                (0, i.jsx)("div", { className: j.Lr, children: r }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: l, id: o } = this.props;
        return (0, i.jsx)(V, {
            id: o,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: l,
            children: this.renderContent(),
        });
    }
}
