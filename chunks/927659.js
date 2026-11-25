n.d(t, { Ay: () => eL, aI: () => eh, Sz: () => em });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(435558),
    o = n.n(a),
    u = n(837381),
    c = n(939249),
    d = n(534514),
    h = n(97808),
    m = n(778712),
    f = n(36075),
    p = n(545442),
    g = n(678708),
    x = n(88187),
    E = n(775602),
    y = n(392054),
    S = n(855986),
    A = n(834730),
    C = n(866665),
    I = n(364360);
function b(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", { className: s()(I.um, n), children: t });
}
function v(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", { className: s()(I.Ov, n), children: t });
}
function N(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", { className: s()(I.wq, n), children: t });
}
function j(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(A.E, {
        className: s()(n, I.hf),
        color: "interactive-text-active",
        variant: "body-md/normal",
        children: t,
    });
}
function k(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(A.E, {
        className: s()(n, I.p3),
        color: "interactive-text-default",
        variant: "body-xs/normal",
        children: t,
    });
}
function T(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(A.E, {
        className: s()(n, I.I0),
        color: "interactive-text-default",
        variant: "body-xs/normal",
        children: t,
    });
}
var _ = n(696451),
    O = n(807094);
function R(e) {
    let { name: t, className: n, state: i, isInline: r, onClick: a } = e,
        o = null;
    i?.isActive && !r
        ? (o = O.vu)
        : i?.lastValidationResult?.success === !1
          ? (o = O.z3)
          : i?.hasValue && !r && (o = O.hZ);
    let u = (0, l.jsx)(A.E, {
        variant: r ? "body-md/normal" : "body-sm/normal",
        color: "text-strong",
        className: s()(O.uK, { [O.mG]: r }, o, n),
        children: t + (r ? ":" : ""),
    });
    return null == a ? u : (0, l.jsx)(c.D, { className: O.vk, onClick: () => a(t), children: u });
}
var w = n(664929);
n(827669);
var M = n(792996),
    L = n(633331);
function P(e, t, n) {
    return (0, l.jsx)(R, { className: L.uK, name: e.displayName, state: t, onClick: n }, e.name);
}
function D(e) {
    let { command: t, optionStates: n, onOptionClick: r } = e,
        {
            requiredOptions: s,
            setOptionalOptions: a,
            unsetOptionalOptions: o,
        } = i.useMemo(() => {
            let e = t.options?.filter((e) => e.required) ?? [],
                l = t.options?.filter((e) => !e.required) ?? [];
            return {
                requiredOptions: e,
                setOptionalOptions: l.filter((e) => n?.[e.name]?.hasValue),
                unsetOptionalOptions: l.filter((e) => !n?.[e.name]?.hasValue),
            };
        }, [t.options, n]),
        u = (0, l.jsx)("div", {
            className: L.$2,
            children: o.map((e) => (0, l.jsx)(A.E, { variant: "body-sm/normal", children: e.displayName }, e.name)),
        }),
        c = s.map((e) => P(e, n?.[e.name], r)),
        h =
            a.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(d.D, {
                              className: L.Ki,
                              variant: "body-xs/semibold",
                              children: M.intl.string(M.t["5C107K"]),
                          }),
                          a.map((e) => P(e, n?.[e.name], r)),
                      ],
                  })
                : null,
        m =
            o.length > 0
                ? (0, l.jsx)(C.m, {
                      __unsupportedReactNodeAsText: u,
                      "aria-label": !1,
                      delay: 200,
                      children: (0, l.jsx)(A.E, {
                          className: L.kP,
                          color: "text-muted",
                          variant: "body-sm/normal",
                          children:
                              0 === a.length
                                  ? M.intl.formatToPlainString(M.t["0mI72g"], { count: o.length })
                                  : M.intl.formatToPlainString(M.t.BP8N0K, { count: o.length }),
                      }),
                  })
                : null;
    return (0, l.jsxs)(l.Fragment, {
        children: [c, null != h || null != m ? (0, l.jsxs)("div", { className: L.gM, children: [h, m] }) : null],
    });
}
function U(e) {
    let t,
        {
            command: n,
            activeOptionName: r,
            channel: a,
            showOptions: o,
            showImage: u,
            optionStates: c,
            onOptionClick: d,
            section: h,
            isSelectable: m = !0,
        } = e,
        f = i.useMemo(() => n?.options?.find((e) => e.name === r), [r, n]),
        p = null != r ? c?.[r] : null;
    t = null != p && p.lastValidationResult?.success === !1 ? (p.lastValidationResult.error ?? "") : null;
    let g = u && null != h ? (0, w.Rg)(h) : null,
        x = (0, S.bG)([_.Ay], () => {
            if (null != a.guild_id && h?.botId != null) return _.Ay.getMember(a.guild_id, h.botId)?.nick;
        });
    return (0, l.jsxs)("div", {
        className: s()(L.iE, m ? null : L.r9),
        children: [
            null != g ? (0, l.jsx)(g, { className: L.Sl, channel: a, section: h, width: 32, height: 32 }) : null,
            (0, l.jsxs)("div", {
                className: L.QR,
                children: [
                    (0, l.jsxs)("div", {
                        className: L.nY,
                        children: [
                            (0, l.jsx)(j, { className: L.DD, children: "/" + n.displayName }),
                            o ? (0, l.jsx)(D, { command: n, optionStates: c, onOptionClick: d }) : null,
                        ],
                    }),
                    (0, l.jsx)(k, {
                        className: s()(L.h_, null != t ? L.z3 : null),
                        children: t ?? f?.displayDescription ?? n.displayDescription,
                    }),
                ],
            }),
            (0, l.jsx)(T, { className: L.sP, children: x ?? h?.name }),
        ],
    });
}
var V = n(524007),
    F = n(47167),
    W = n(713654),
    B = n(688810),
    G = n(573435),
    K = n(739053),
    H = n(82498),
    z = n(129230),
    q = n(486020),
    $ = n(652215);
n(307731);
var J = n(682901),
    Z = n(211319);
let Q = function (e) {
    let { emojis: t } = e,
        { analyticsLocations: n } = (0, B.Ay)();
    i.useEffect(() => {
        (z.default.track($.HAw.PREMIUM_UPSELL_VIEWED, { type: J.e.EMOJI_AUTOCOMPLETE_INLINE, location_stack: n }),
            (0, K.sq)($.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, H.uq)(J.e.EMOJI_AUTOCOMPLETE_INLINE)));
    }, [n]);
    let r = (0, l.jsx)("div", {
        className: Z.gm,
        children: t.slice(0, 3).map((e, t) => {
            if (null == e.id) return null;
            let n = (0, l.jsx)(
                "div",
                {
                    className: Z.rT,
                    children: (0, l.jsx)("img", {
                        alt: e.name,
                        className: Z.Zg,
                        src: q.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: 48 }),
                    }),
                },
                e.id,
            );
            return 2 === t
                ? n
                : (0, l.jsx)(
                      G.Ay,
                      { className: Z.j3, mask: G.Ay.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI, children: n },
                      e.id,
                  );
        }),
    });
    return (0, l.jsxs)(b, {
        className: Z.UX,
        children: [
            (0, l.jsx)(v, { children: (0, l.jsx)(j, { children: M.intl.format(M.t.uEky42, { count: t.length }) }) }),
            (0, l.jsx)(T, { children: r }),
        ],
    });
};
var X = n(168017),
    Y = n(106191),
    ee = n(719067),
    et = n(678473),
    en = n(967144),
    el = n(565645),
    ei = n(71393);
function er(e) {
    let { sound: t } = e,
        n = (0, S.bG)([ei.A], () => ("0" === t.guildId ? M.intl.string(M.t.Rtvk9X) : ei.A.getGuild(t.guildId)?.name));
    return (0, l.jsxs)(b, {
        children: [
            (null != t.emojiId || null != t.emojiName) &&
                (0, l.jsx)(N, { children: (0, l.jsx)(el.A, { emojiId: t.emojiId, emojiName: t.emojiName }) }),
            (0, l.jsx)(v, { children: (0, l.jsx)(j, { children: t.name }) }),
            null != n && (0, l.jsx)(T, { children: n }),
        ],
    });
}
n(980504);
var es = n(898578),
    ea = n(378058),
    eo = n(253932),
    eu = n(994500),
    ec = n(287809),
    ed = n(427262);
function eh(e) {
    return null != e ? `autocomplete-${e}` : null;
}
function em(e) {
    return `autocomplete-${e}-title`;
}
let ef = i.createContext(null);
class ep extends i.PureComponent {
    selectable = !0;
    layoutClass = I.rT;
    constructor(e) {
        (super(e), (this.state = { hovered: !1 }));
    }
    isSelectable() {
        return this.selectable;
    }
    renderContent() {
        throw Error("AutocompleteRow: renderContent must be extended");
    }
    renderClickable(e) {
        let {
            layoutClass: t,
            props: { className: n, index: i, selected: r },
        } = this;
        return this.isSelectable()
            ? (0, l.jsx)(c.D, {
                  ...e,
                  className: s()(I.vk, n, t),
                  id: eh(i) ?? void 0,
                  onClick: this.handleClick,
                  onMouseMove: () => {
                      (this.setState({ hovered: !0 }), this.handleMouseEnter());
                  },
                  onMouseLeave: () => this.setState({ hovered: !1 }),
                  role: "option",
                  "aria-selected": r,
                  children: (0, l.jsx)("div", { className: I.E3, children: this.renderContent() }),
              })
            : (0, l.jsx)("div", {
                  className: s()(I.vk, n, t),
                  id: eh(i) ?? void 0,
                  role: "none",
                  children: (0, l.jsx)("div", { className: I.E3, children: this.renderContent() }),
              });
    }
    render() {
        let { index: e } = this.props;
        return this.isSelectable()
            ? (0, l.jsx)(u.tG, { id: `${e}`, children: (e) => this.renderClickable(e) })
            : this.renderClickable();
    }
    handleMouseEnter = () => {
        let { onHover: e, index: t, selected: n } = this.props;
        null == e || n || "number" != typeof t || e(t);
    };
    handleClick = (e) => {
        let { onClick: t, index: n } = this.props;
        null != t && "number" == typeof n && t(n, e);
    };
}
class eg extends ep {
    renderContent() {
        let { text: e, description: t, badge: n, icon: i } = this.props,
            r = (0, l.jsx)(j, { children: e });
        return (0, l.jsxs)(b, {
            children: [
                null != i ? (0, l.jsx)(N, { children: i }) : null,
                (0, l.jsx)(v, { children: null != n ? (0, l.jsxs)("div", { className: I.QN, children: [r, n] }) : r }),
                null != t ? (0, l.jsx)(T, { children: t }) : null,
            ],
        });
    }
}
function ex(e) {
    let t = i.useMemo(() => o().random(60, 120), []);
    return (0, l.jsx)("div", {
        className: I.E3,
        "aria-busy": !0,
        children: (0, l.jsx)(b, {
            children: (0, l.jsx)(v, {
                children: (0, l.jsx)(j, { children: (0, l.jsx)("div", { className: I.M, style: { width: t } }) }),
            }),
        }),
    });
}
function eE(e) {
    let { title: t, className: n, children: r } = e,
        a = i.useContext(ef);
    return (0, l.jsx)("div", {
        className: I.E3,
        children: (0, l.jsxs)(d.D, {
            id: em(a.id),
            className: s()(I.eu, n),
            variant: "body-xs/semibold",
            children: [t, r],
        }),
    });
}
class ey extends ep {
    layoutClass = I.fF;
    selectable = !1;
    renderContent() {
        let { className: e } = this.props;
        return (0, l.jsx)("div", { className: s()(e, I.yF) });
    }
}
class eS extends ep {
    renderContent() {
        let { user: e, nick: t, status: n, hidePersonalInformation: i, guildId: r } = this.props,
            s = null == r ? eu.A.getNickname(e.id) : null;
        return (0, l.jsxs)(b, {
            children: [
                (0, l.jsx)(N, {
                    children: (0, l.jsx)(h.eu, {
                        size: m._3.SIZE_24,
                        src: e.getAvatarURL(r, 24),
                        "aria-hidden": !0,
                        status: n,
                    }),
                }),
                (0, l.jsx)(v, { children: (0, l.jsx)(j, { children: t ?? s ?? ed.Ay.getName(e) }) }),
                (0, l.jsxs)(T, {
                    children: [
                        ed.Ay.getUserTag(e, { mode: "username", identifiable: i ? "never" : "always" }),
                        i || e.hasUniqueUsername()
                            ? null
                            : (0, l.jsxs)("span", { className: I.T, children: ["#", e.discriminator] }),
                    ],
                }),
            ],
        });
    }
}
class eA extends ep {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: i, colorStrings: r } = e,
            a = "dot" === E.Ay.roleStyle,
            o = "username" === E.Ay.roleStyle && (null != i || null != r),
            u = (0, en.hH)(n, e, r),
            c = null != u && o,
            { gradientStyle: d, gradientClassname: h } = (0, f.Wq)({
                colorStrings: r,
                useReducedMotion: E.Ay.useReducedMotion,
                roleStyle: "username",
                includeConvenienceGlow: !0,
            }),
            m = o ? { ...(c ? d : { color: null != i ? i : void 0 }) } : void 0;
        return (0, l.jsxs)(b, {
            children: [
                (0, l.jsx)(v, {
                    children: (0, l.jsxs)(j, {
                        children: [
                            a && (0, l.jsx)(p.W, { className: I.m4, color: i, colors: u, tooltip: !1 }),
                            (0, l.jsxs)("span", {
                                className: s()({ [h]: c }),
                                style: m,
                                "data-text": c ? `@${e.name}` : void 0,
                                children: ["@", e.name],
                            }),
                        ],
                    }),
                }),
                t ? null : (0, l.jsx)(T, { children: M.intl.string(M.t["/91tbr"]) }),
            ],
        });
    }
}
class eC extends ep {
    renderContent() {
        let { timestamp: e, description: t } = this.props;
        return (0, l.jsxs)(b, {
            children: [
                (0, l.jsx)(v, {
                    children: (0, l.jsx)(j, { children: (0, l.jsx)(et.A, { node: e, showTooltip: !1 }) }),
                }),
                null != t ? (0, l.jsx)(T, { children: t }) : null,
            ],
        });
    }
}
class eI extends ep {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === $.rbe.GUILD_CATEGORY ? g.FolderIcon : (0, W.gU)(e);
        return (0, l.jsxs)(b, {
            children: [
                null != n && (0, l.jsx)(N, { children: (0, l.jsx)(n, { className: I.Kk }) }),
                (0, l.jsx)(v, { children: (0, l.jsx)(j, { children: (0, F.m1)(e, ec.default, eu.A) }) }),
                null != t ? (0, l.jsx)(T, { children: t.name }) : null,
            ],
        });
    }
}
class eb extends ep {
    renderContent() {
        let { command: e } = this.props;
        return (0, l.jsxs)(b, {
            children: [
                (0, l.jsx)(N, {
                    children: (0, l.jsx)(x.SlashIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: I.Kk,
                        colorClass: I.t4,
                    }),
                }),
                (0, l.jsx)(v, { children: (0, l.jsx)(j, { children: e.displayName }) }),
                (0, l.jsx)(T, { children: e.displayDescription }),
            ],
        });
    }
}
class ev extends ep {
    isSelectable() {
        return this.props.command.inputType !== y.y$.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: i, selected: r } = this.props,
            { hovered: s } = this.state,
            a = this.isSelectable();
        return e.inputType === y.y$.PLACEHOLDER
            ? (0, l.jsx)(V.A, {})
            : (0, l.jsx)(U, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: s || (a && r),
                  section: i,
                  isSelectable: a,
              });
    }
}
class eN extends ep {
    layoutClass = s()(I.rT, I.Mf);
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            i = eo.Sf.getSetting(),
            r =
                null != e.id || "" !== e.url
                    ? (0, l.jsx)("img", {
                          alt: "",
                          className: I.mp,
                          src:
                              null != e.id
                                  ? q.Ay.getEmojiURL({ id: e.id, animated: e.animated && i, size: 48 })
                                  : e.url,
                      })
                    : (0, l.jsx)("span", { className: I.nT, children: e.surrogates }),
            s = null != n ? (0, l.jsx)(T, { children: n.name }) : null;
        return (0, l.jsxs)(b, {
            children: [
                (0, l.jsx)(N, { children: r }),
                (0, l.jsx)(v, { children: (0, l.jsxs)(j, { children: [t, e.name, t] }) }),
                s,
            ],
        });
    }
}
class ej extends ep {
    layoutClass = s()(I.rT, I.Mf);
    renderContent() {
        let e,
            { queryMatch: t, renderSticker: n, selected: i, sticker: r } = this.props,
            { hovered: s } = this.state;
        return (
            (0, ea.FD)(r)
                ? (e = es.A.getStickerPack(r.pack_id)?.name)
                : (0, ea.Xw)(r) && (e = ei.A.getGuild(r.guild_id)?.name),
            (0, l.jsxs)(b, {
                children: [
                    (0, l.jsx)(N, { children: n(r, s || !0 === i) }),
                    (0, l.jsxs)(v, {
                        children: [
                            (0, l.jsx)(j, { children: r.name }),
                            null != t && (0, l.jsx)(k, { children: M.intl.format(M.t.PAutaQ, { queryMatch: t }) }),
                        ],
                    }),
                    null != e && (0, l.jsx)(T, { children: e }),
                ],
            })
        );
    }
}
class ek extends ep {
    layoutClass = I.ju;
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, l.jsx)("img", { alt: "", src: n, width: e, height: t });
    }
}
class eT extends ep {
    renderContent() {
        return (0, l.jsx)(Q, { emojis: this.props.emojis });
    }
}
class e_ extends ep {
    renderContent() {
        return (0, l.jsx)(er, { ...this.props });
    }
}
function eO(e) {
    let { game: t } = e,
        { extraChromeEnabled: n } = X.A.useConfig({ location: "game_mention_autocomplete" });
    return (0, l.jsx)(Y.A, { game: t, iconClassName: I.Kk, withBackground: n });
}
class eR extends ep {
    renderContent() {
        return (0, l.jsxs)(b, {
            children: [
                (0, l.jsx)(N, { children: (0, l.jsx)(eO, { game: this.props.game }) }),
                (0, l.jsx)(v, { children: (0, l.jsx)(j, { children: this.props.game.name }) }),
                (0, l.jsx)(ee.A, {
                    platforms: this.props.game.platformAvailability,
                    location: "game_mention_autocomplete",
                }),
            ],
        });
    }
}
function ew(e) {
    let { id: t, children: n } = e,
        r = i.useMemo(() => ({ id: t }), [t]);
    return (0, l.jsx)(ef.Provider, { value: r, children: n });
}
class eM extends i.PureComponent {
    static Generic = eg;
    static Loading = ex;
    static Title = eE;
    static Divider = ey;
    static User = eS;
    static Role = eA;
    static Channel = eI;
    static Command = eb;
    static NewCommand = ev;
    static Emoji = eN;
    static GIFIntegration = ek;
    static Sticker = ej;
    static EmojiUpsell = eT;
    static Soundmoji = e_;
    static Game = eR;
    static Timestamp = eC;
    render() {
        let { children: e, className: t, innerClassName: n, id: r, ...a } = this.props;
        return i.Children.count(e) > 0
            ? (0, l.jsx)(ew, {
                  id: r ?? "",
                  children: (0, l.jsx)("div", {
                      className: s()(I.nx, t),
                      children: (0, l.jsx)("div", { className: s()(I.Fv, n), ...a, children: e }),
                  }),
              })
            : null;
    }
}
let eL = eM;
