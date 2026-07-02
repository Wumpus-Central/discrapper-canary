n.d(t, {
    KJ: () => k,
    N_: () => Z,
    vw: () => z,
    lg: () => W,
    nG: () => B,
    c3: () => F,
    OS: () => H,
    Y9: () => Y,
    IH: () => K,
});
var i = n(627968),
    l = n(64700),
    s = n(939249),
    r = n(97808),
    o = n(778712),
    a = n(685761),
    d = n(173936),
    c = n(99677),
    u = n(194261),
    h = n(34188),
    A = n(577473),
    E = n(403581),
    g = n(323384),
    C = n(625903),
    _ = n(659421),
    I = n(329308),
    T = n(571694),
    p = n(47167),
    S = n(713654),
    N = n(652215),
    L = n(375708);
function O(e) {
    if (null == e) return null;
    switch (e.type) {
        case N.rbe.GUILD_ANNOUNCEMENT:
            return L.intl.string(L.t.l1dkSD);
        case N.rbe.GUILD_STORE:
            return L.intl.string(L.t["P1/Erq"]);
        case N.rbe.DM:
        case N.rbe.GROUP_DM:
            return L.intl.string(L.t.jN2DfZ);
        case N.rbe.PRIVATE_THREAD:
            return L.intl.string(L.t.F1zyvU);
        case N.rbe.ANNOUNCEMENT_THREAD:
        case N.rbe.PUBLIC_THREAD:
            return L.intl.string(L.t["7Xm5QI"]);
        case N.rbe.GUILD_TEXT:
            return L.intl.string(L.t.Pnajj0);
        case N.rbe.GUILD_FORUM:
            return e.isMediaChannel() ? L.intl.string(L.t.seKITE) : L.intl.string(L.t.GbryDd);
        case N.rbe.GUILD_MEDIA:
            return L.intl.string(L.t.seKITE);
        case N.rbe.GUILD_STAGE_VOICE:
            return L.intl.string(L.t.EErMzA);
        case N.rbe.GUILD_VOICE:
            return L.intl.string(L.t.BVZqJl);
        case N.rbe.GUILD_CATEGORY:
        default:
            return null;
    }
}
var m = n(503698),
    f = n.n(m),
    R = n(702923);
let b = function (e) {
    let { value: t = 0, text: n, className: l, lowImportance: s, ...r } = e;
    return null != n
        ? (0, i.jsx)("div", { className: f()(R.i, l, s && R.H), ...r, children: n })
        : t > 0
          ? (0, i.jsx)("div", { className: f()(R.i, l, s && R.H), ...r, children: t })
          : null;
};
var v = n(769015),
    U = n(106191),
    D = n(548118),
    G = n(376943),
    M = n(636585),
    y = n(71393),
    x = n(994500),
    P = n(287809),
    V = n(427262),
    w = n(818061);
class j extends l.PureComponent {
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
        let { focused: e, children: t, score: n, onContextMenu: l, id: r, "aria-label": o } = this.props;
        return (0, i.jsxs)(s.D, {
            role: "option",
            id: r,
            "aria-label": o,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: w.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: l,
            children: [t, null != n ? (0, i.jsx)("div", { className: w.fN, children: 0 | n }) : null],
        });
    }
}
class H extends l.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: w._C,
            children: (0, i.jsx)(D.Ay, { tabIndex: -1, guild: e, size: D.Ay.Sizes.MINI, className: w.$f }),
        });
    }
    renderName() {
        let { guild: e, inlineLabel: t } = this.props;
        return (0, i.jsxs)("div", {
            className: w.UU,
            children: [
                (0, i.jsx)("span", { className: w.YW, children: e.name }),
                null != t ? (0, i.jsx)("span", { className: w.N4, children: t }) : null,
            ],
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? w.XB : w.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: w.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return L.intl.formatToPlainString(L.t.WVq3Lr, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: s, score: r, id: o } = this.props;
        return (0, i.jsx)(j, {
            id: o,
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
    static defaultProps = { unread: !1 };
    renderIcon() {
        let { channel: e } = this.props,
            t = (0, S.gU)(e);
        if (null == t) return null;
        let n = O(e) ?? "";
        return (0, i.jsx)("div", {
            className: w.zc,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(t, { className: w.Kk, size: "xs", color: "currentColor" }),
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: l, channel: s, isMentionLowImportance: r } = this.props;
        return (
            null != n && n > 0 && (e = (0, i.jsx)(b, { className: w.qS, value: n, lowImportance: r })),
            null != l && (t = (0, i.jsx)("span", { className: w.N4, children: (0, p.m1)(l, P.default, x.A) })),
            (0, i.jsxs)("div", {
                className: w.UU,
                children: [
                    (0, i.jsx)("span", { className: w.YW, children: (0, p.m1)(s, P.default, x.A) }),
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
                  className: w.x7,
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
            className: e || (null != t && t > 0) ? w.XB : w.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: w.Lr, children: n })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e } = this.props,
            t = y.A.getGuild(this.props.channel.guild_id)?.name,
            n = (0, p.m1)(e, P.default, x.A),
            i = O(e);
        return L.intl.formatToPlainString(L.t["Vw/da+"], { name: n, type: i, guild: t });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: s, score: r, id: o } = this.props;
        return (0, i.jsx)(j, {
            id: o,
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
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: w.IU,
            children: (0, i.jsx)(r.eu, { src: (0, T.Y)(e), size: o._3.SIZE_20, "aria-hidden": !0, status: t }),
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t && t > 0 && (e = (0, i.jsx)(b, { className: w.qS, value: t })),
            (0, i.jsxs)("div", {
                className: w.UU,
                children: [(0, i.jsx)("span", { className: w.YW, children: (0, p.m1)(n, P.default, x.A) }), e],
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? w.XB : w.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: w.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, p.m1)(e, P.default, x.A);
        return null != t && t > 0
            ? L.intl.formatToPlainString(L.t.LYdVfN, { name: n, mentions: t })
            : L.intl.formatToPlainString(L.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: s, score: r, id: o } = this.props;
        return (0, i.jsx)(j, {
            id: o,
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
class k extends l.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: w.zc,
            children: (0, i.jsx)(r.eu, {
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
            i = x.A.getNickname(t.id);
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
            null != n && n > 0 && (e = (0, i.jsx)(b, { className: w.qS, value: n })),
            (0, i.jsxs)("div", {
                className: w.UU,
                children: [
                    (0, i.jsx)("span", { className: w.YW, children: l }),
                    e,
                    (0, i.jsx)("span", { className: w.Xh, children: V.Ay.getUserTag(t) }),
                ],
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? w.XB : w.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: w.Lr, children: e })],
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            i = V.Ay.getUserTag(t);
        return null != e && e > 0
            ? L.intl.formatToPlainString(L.t["6b9UrR"], { name: n, id: i, mentions: e })
            : L.intl.formatToPlainString(L.t.GWYOAY, { name: n, id: i });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: s, score: r, id: o } = this.props;
        return (0, i.jsx)(j, {
            id: o,
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
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: w.xr,
            children: [
                (0, i.jsx)("div", {
                    className: w.zc,
                    children: (0, i.jsx)(v.A, { tabIndex: -1, className: w.Gt, game: t, size: w.D0 }),
                }),
                t.name,
                (0, i.jsx)("div", { className: w.Lr, children: e }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: l, id: s } = this.props;
        return (0, i.jsx)(j, {
            id: s,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: l,
            children: this.renderContent(),
        });
    }
}
function K(e) {
    let { game: t, onMouseEnter: n, onClick: l, onFocus: s, focused: r, id: o, inlineLabel: a, children: d } = e;
    return (0, i.jsx)(j, {
        id: o,
        onMouseEnter: n,
        onClick: l,
        onFocus: s,
        focused: r,
        children: (0, i.jsxs)("div", {
            className: w.xr,
            children: [
                (0, i.jsx)("div", { className: w.zc, children: (0, i.jsx)(U.A, { game: t, iconClassName: w.bN }) }),
                (0, i.jsxs)("div", {
                    className: w.UU,
                    children: [
                        (0, i.jsx)("span", { className: w.YW, children: t.name }),
                        null != a ? (0, i.jsx)("span", { className: w.N4, children: a }) : null,
                    ],
                }),
                (0, i.jsx)("div", { className: w.Lr, children: d }),
            ],
        }),
    });
}
class Y extends l.Component {
    render() {
        return (0, i.jsx)("div", {
            className: w.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: w.xr,
                children: (0, i.jsx)("div", { className: w.wx, children: this.props.children }),
            }),
        });
    }
}
class Z extends l.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: l } = this.props;
        if (null != n.inviteCode)
            (e = L.intl.string(L.t.w6QG3F)), (t = (0, i.jsx)(a.f, { size: "xs", color: "currentColor" }));
        else {
            let l = (0, G.vu)(n.path);
            null == l || void 0 === l.messageId
                ? ((e = L.intl.string(L.t.qbSCqj)), (t = (0, i.jsx)(d.q, { size: "xs", color: "currentColor" })))
                : (0, G.r9)(l)
                  ? ((e = L.intl.string(L.t["6Fd/j1"])), (t = (0, i.jsx)(c.t, { size: "xs", color: "currentColor" })))
                  : ((e = L.intl.string(L.t.jQRwp4)), (t = (0, i.jsx)(u.X, { size: "xs", color: "currentColor" })));
        }
        return (0, i.jsxs)("div", {
            className: w.xr,
            children: [
                (0, i.jsx)("div", { className: w.zc, children: t }),
                e,
                (0, i.jsx)("div", { className: w.Lr, children: l }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: s, score: r, id: o } = this.props;
        return (0, i.jsx)(j, {
            id: o,
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
class z extends l.Component {
    renderContent() {
        let e,
            t,
            { navigationRecord: n, children: l } = this.props;
        switch (n.type) {
            case I.t1.SHOP:
                (e = L.intl.string(L.t.pWG4ze)), (t = (0, i.jsx)(h.U, { size: "xs", color: "currentColor" }));
                break;
            case I.t1.SHOP_ORBS_TAB:
                (e = L.intl.string(L.t.EBYkzk)), (t = (0, i.jsx)(h.U, { size: "xs", color: "currentColor" }));
                break;
            case I.t1.QUEST_ORBS:
                (e = `${L.intl.string(L.t.ElYQFS)} ${L.intl.string(L.t.JALI2K)}`),
                    (t = (0, i.jsx)(A.r, { size: "xs", color: "currentColor" }));
                break;
            case I.t1.NITRO_HOME:
                (e = L.intl.string(L.t.Ipxkog)), (t = (0, i.jsx)(E.t, { size: "xs", color: "currentColor" }));
                break;
            case I.t1.QUEST_HOME:
                (e = L.intl.string(L.t.JALI2K)), (t = (0, i.jsx)(A.r, { size: "xs", color: "currentColor" }));
                break;
            case I.t1.APPS_HOME:
                (e = L.intl.string(L.t.PHjkRE)), (t = (0, i.jsx)(g.k, { size: "xs", color: "currentColor" }));
                break;
            case I.t1.SETTINGS:
                (e = n.label ?? L.intl.string(L.t["3D5yo/"])),
                    (t = (0, i.jsx)(C.Z, { size: "xs", color: "currentColor" }));
                break;
            case I.t1.PLAYGROUND:
                if (((e = n.label ?? `${n.collectionId} Playground`), null != n.IconComponent)) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
                } else t = (0, i.jsx)(_.H, { size: "xs", color: "currentColor" });
                break;
            default:
                (e = n.id), (t = (0, i.jsx)(d.q, { size: "xs", color: "currentColor" }));
        }
        return (0, i.jsxs)("div", {
            className: w.xr,
            children: [
                (0, i.jsx)("div", { className: w.zc, children: t }),
                (0, i.jsx)("div", { className: w.UU, children: e }),
                (0, i.jsx)("div", { className: w.Lr, children: l }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: s, score: r, id: o } = this.props;
        return (0, i.jsx)(j, {
            id: o,
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
