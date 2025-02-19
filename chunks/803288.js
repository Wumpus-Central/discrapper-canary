n.d(t, {
    T: () => w,
    Z: () => D
}),
    n(757143),
    n(301563),
    n(266796),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(497321),
    d = n(852860),
    u = n(100527),
    m = n(367907),
    p = n(906732),
    g = n(263145),
    h = n(807582),
    f = n(26323),
    b = n(366980),
    x = n(246946),
    j = n(709586),
    N = n(267642),
    v = n(63063),
    _ = n(999382),
    O = n(621319),
    y = n(44550),
    C = n(770270),
    I = n(981631),
    E = n(30513),
    S = n(388032),
    T = n(739209);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let w = l.ZP.connectStores([_.Z, y.Z], () => {
    let e = y.Z.vanityURLCode,
        t = _.Z.getGuildId();
    return {
        vanityURLCode: e,
        guildId: t,
        onReset() {
            (0, O.H7)();
        },
        onSave() {
            null != t && (0, O.en)(t, e);
        }
    };
})(d.Z);
class R extends i.PureComponent {
    componentWillUnmount() {
        (0, O.xv)();
    }
    renderEditCard() {
        let { isRemoving: e } = this.state,
            { hasError: t, originalVanityURLCode: n, vanityURLCode: i, vanityURLUses: s, guild: a } = this.props;
        if (null == i) return (0, r.jsx)(o.$jN, {});
        let l = (null == a ? void 0 : a.hasFeature(I.oNc.VANITY_URL)) === !0;
        return (0, r.jsxs)(o.Zbd, {
            editable: !0,
            className: T.editVanityUrlCard,
            children: [
                (0, r.jsxs)(o.vwX, {
                    children: [
                        (0, r.jsx)('div', {
                            className: T.formTitleField,
                            children: S.NW.string(S.t['6oJyq6'])
                        }),
                        i.length > 0 ? (0, r.jsx)('div', { children: S.NW.format(S.t.MVWOUV, { uses: s }) }) : null
                    ]
                }),
                (0, r.jsx)(g.Z, {
                    prefix: ''.concat('https://discord.gg', '/'),
                    value: i,
                    onChange: this.handleInviteCodeChange,
                    maxLength: 25,
                    autoFocus: !0,
                    error: t,
                    disabled: !l
                }),
                null != n && n.length > 0
                    ? (0, r.jsx)(o.zxk, {
                          className: T.removeVanityUrlButton,
                          onClick: this.handleRemoveVanityURL,
                          submitting: e,
                          look: o.zxk.Looks.LINK,
                          size: o.zxk.Sizes.MIN,
                          color: o.zxk.Colors.RED,
                          children: S.NW.string(S.t['3ggb6O'])
                      })
                    : null
            ]
        });
    }
    renderUpsellButton() {
        return (0, r.jsxs)(o.gtL, {
            color: o.zxk.Colors.GREEN,
            className: a()(T.marginTop16),
            innerClassName: T.upsellButton,
            onClick: this.handleVanityUrlUpsellButton,
            children: [
                (0, r.jsx)(j.Z, {
                    height: 16,
                    width: 16,
                    className: T.premiumUpsellBadge
                }),
                ' ',
                S.NW.string(S.t['+7XY39'])
            ]
        });
    }
    renderInfo() {
        let { hasError: e, errorDetails: t, originalVanityURLCode: n } = this.props;
        if (e)
            return (0, r.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-danger',
                className: T.vanityUrlErrorCode,
                children: (0, C.i)(null == t ? void 0 : t.code)
            });
        if (null != n && n.length > 0) {
            let e = (0, b.Z)(n);
            return (0, r.jsx)(o.R94, {
                className: T.vanityUrlHelpLink,
                type: o.geA.LABEL_DESCRIPTOR,
                children: S.NW.format(S.t['1qTOvr'], {
                    urlText: e,
                    urlValue: e
                })
            });
        }
    }
    handleRemoveVanityURL() {
        (0, O.Gy)('');
    }
    handleInviteCodeChange(e) {
        (0, O.Gy)(e.replace(/ /g, '-'));
    }
    render() {
        let { hide: e, guild: t } = this.props,
            n = v.Z.getArticleURL(I.BhN.GUILD_VANITY_URL);
        return null == t
            ? null
            : e
              ? (0, r.jsx)(c.Z, {})
              : (0, r.jsxs)(o.hjN, {
                    children: [
                        (0, r.jsxs)(o.vwX, {
                            tag: o.RB0.H1,
                            className: T.flexFormTitle,
                            children: [
                                (0, r.jsx)('div', { children: S.NW.string(S.t['5XZKy8']) }),
                                (0, r.jsx)(h.Z, {
                                    guild: t,
                                    guildFeature: I.oNc.VANITY_URL,
                                    className: T.guildFeatureAvailabilityIndicator,
                                    onClick: this.handleVanityUrlUpsellIndicator
                                })
                            ]
                        }),
                        (0, r.jsx)(o.R94, {
                            type: o.geA.DESCRIPTION,
                            className: T.description,
                            children: S.NW.format(S.t.koklFB, { helpCenterArticle: n })
                        }),
                        (0, C.p)(t) ? this.renderEditCard() : this.renderUpsellButton(),
                        this.renderInfo()
                    ]
                });
    }
    constructor(...e) {
        super(...e),
            P(this, 'state', { isRemoving: !1 }),
            P(this, 'handleShowModalUpsell', (e, t, n, r, i) => {
                e.preventDefault(), e.stopPropagation();
                let { guild: s, analyticsLocations: a } = this.props;
                null != s &&
                    ((0, m.yw)(I.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: {
                            section: n,
                            object: I.qAy.LEARN_MORE,
                            objectType: (0, N.ge)(t),
                            location_stack: a
                        },
                        guild_id: null == s ? void 0 : s.id
                    }),
                    (0, f.Z)({
                        analyticsLocations: a,
                        analyticsSourceLocation: {
                            section: n,
                            object: r,
                            page: I.ZY5.GUILD_SETTINGS
                        },
                        guild: s,
                        perks: i
                    }));
            }),
            P(this, 'handleVanityUrlUpsellIndicator', (e) => {
                this.handleShowModalUpsell(e, I.Eu4.TIER_3, I.jXE.GUILD_SETTINGS_VANITY_URL, I.qAy.BADGE, (0, E.WW)());
            }),
            P(this, 'handleVanityUrlUpsellButton', (e) => {
                this.handleShowModalUpsell(e, I.Eu4.TIER_3, I.jXE.GUILD_SETTINGS_VANITY_URL, I.qAy.BUTTON_CTA, (0, E.WW)());
            });
    }
}
function D() {
    var e, t;
    let n = (0, l.e7)([_.Z], () => _.Z.getGuild()),
        i = (0, l.cj)([y.Z], () => ({
            vanityURLCode: y.Z.vanityURLCode,
            vanityURLUses: y.Z.vanityURLUses,
            originalVanityURLCode: y.Z.originalVanityURLCode,
            hasError: y.Z.hasError(),
            errorDetails: y.Z.errorDetails
        })),
        s = (0, l.e7)([x.Z], () => x.Z.hideInstantInvites),
        { analyticsLocations: a } = (0, p.ZP)(u.Z.VANITY_URL);
    return (0, r.jsx)(p.Gt, {
        value: a,
        children: (0, r.jsx)(
            R,
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            P(e, t, n[t]);
                        });
                }
                return e;
            })({ guild: n }, i)),
            (t = t =
                {
                    hide: s,
                    analyticsLocations: a
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(t)).forEach(function (n) {
                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  }),
            e)
        )
    });
}
