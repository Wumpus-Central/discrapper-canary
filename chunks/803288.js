n.d(t, {
    T: () => A,
    Z: () => D
}),
    n(757143),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(497321),
    d = n(852860),
    u = n(100527),
    m = n(367907),
    h = n(906732),
    g = n(263145),
    x = n(807582),
    p = n(26323),
    _ = n(366980),
    C = n(246946),
    f = n(709586),
    v = n(267642),
    N = n(63063),
    j = n(999382),
    I = n(621319),
    E = n(44550),
    b = n(770270),
    T = n(981631),
    S = n(30513),
    R = n(388032),
    Z = n(445744);
function y(e, t, n) {
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
let A = a.ZP.connectStores([j.Z, E.Z], () => {
    let e = E.Z.vanityURLCode,
        t = j.Z.getGuildId();
    return {
        vanityURLCode: e,
        guildId: t,
        onReset() {
            (0, I.H7)();
        },
        onSave() {
            null != t && (0, I.en)(t, e);
        }
    };
})(d.Z);
class L extends r.PureComponent {
    componentWillUnmount() {
        (0, I.xv)();
    }
    renderEditCard() {
        let { isRemoving: e } = this.state,
            { hasError: t, originalVanityURLCode: n, vanityURLCode: r, vanityURLUses: l, guild: s } = this.props;
        if (null == r) return (0, i.jsx)(o.$jN, {});
        let a = (null == s ? void 0 : s.hasFeature(T.oNc.VANITY_URL)) === !0;
        return (0, i.jsxs)(o.Zbd, {
            editable: !0,
            className: Z.editVanityUrlCard,
            children: [
                (0, i.jsxs)(o.vwX, {
                    children: [
                        (0, i.jsx)('div', {
                            className: Z.formTitleField,
                            children: R.intl.string(R.t['6oJyq6'])
                        }),
                        r.length > 0 ? (0, i.jsx)('div', { children: R.intl.format(R.t.MVWOUV, { uses: l }) }) : null
                    ]
                }),
                (0, i.jsx)(g.Z, {
                    prefix: ''.concat('https://discord.gg', '/'),
                    value: r,
                    onChange: this.handleInviteCodeChange,
                    maxLength: 25,
                    autoFocus: !0,
                    error: t,
                    disabled: !a
                }),
                null != n && n.length > 0
                    ? (0, i.jsx)(o.zxk, {
                          className: Z.removeVanityUrlButton,
                          onClick: this.handleRemoveVanityURL,
                          submitting: e,
                          look: o.zxk.Looks.LINK,
                          size: o.zxk.Sizes.MIN,
                          color: o.zxk.Colors.RED,
                          children: R.intl.string(R.t['3ggb6O'])
                      })
                    : null
            ]
        });
    }
    renderUpsellButton() {
        return (0, i.jsxs)(o.gtL, {
            color: o.zxk.Colors.GREEN,
            className: s()(Z.marginTop16),
            innerClassName: Z.upsellButton,
            onClick: this.handleVanityUrlUpsellButton,
            children: [
                (0, i.jsx)(f.Z, {
                    height: 16,
                    width: 16,
                    className: Z.premiumUpsellBadge
                }),
                ' ',
                R.intl.string(R.t['+7XY39'])
            ]
        });
    }
    renderInfo() {
        let { hasError: e, errorDetails: t, originalVanityURLCode: n } = this.props;
        if (e)
            return (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-danger',
                className: Z.vanityUrlErrorCode,
                children: (0, b.i)(null == t ? void 0 : t.code)
            });
        if (null != n && n.length > 0) {
            let e = (0, _.Z)(n);
            return (0, i.jsx)(o.R94, {
                className: Z.vanityUrlHelpLink,
                type: o.geA.LABEL_DESCRIPTOR,
                children: R.intl.format(R.t['1qTOvr'], {
                    urlText: e,
                    urlValue: e
                })
            });
        }
    }
    handleRemoveVanityURL() {
        (0, I.Gy)('');
    }
    handleInviteCodeChange(e) {
        (0, I.Gy)(e.replace(/ /g, '-'));
    }
    render() {
        let { hide: e, guild: t } = this.props,
            n = N.Z.getArticleURL(T.BhN.GUILD_VANITY_URL);
        return null == t
            ? null
            : e
              ? (0, i.jsx)(c.Z, {})
              : (0, i.jsxs)(o.hjN, {
                    children: [
                        (0, i.jsxs)(o.vwX, {
                            tag: o.RB0.H1,
                            className: Z.flexFormTitle,
                            children: [
                                (0, i.jsx)('div', { children: R.intl.string(R.t['5XZKy8']) }),
                                (0, i.jsx)(x.Z, {
                                    guild: t,
                                    guildFeature: T.oNc.VANITY_URL,
                                    className: Z.guildFeatureAvailabilityIndicator,
                                    onClick: this.handleVanityUrlUpsellIndicator
                                })
                            ]
                        }),
                        (0, i.jsx)(o.R94, {
                            type: o.geA.DESCRIPTION,
                            className: Z.description,
                            children: R.intl.format(R.t.koklFB, { helpCenterArticle: n })
                        }),
                        (0, b.p)(t) ? this.renderEditCard() : this.renderUpsellButton(),
                        this.renderInfo()
                    ]
                });
    }
    constructor(...e) {
        super(...e),
            y(this, 'state', { isRemoving: !1 }),
            y(this, 'handleShowModalUpsell', (e, t, n, i, r) => {
                e.preventDefault(), e.stopPropagation();
                let { guild: l, analyticsLocations: s } = this.props;
                null != l &&
                    ((0, m.yw)(T.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: {
                            section: n,
                            object: T.qAy.LEARN_MORE,
                            objectType: (0, v.ge)(t),
                            location_stack: s
                        },
                        guild_id: null == l ? void 0 : l.id
                    }),
                    (0, p.Z)({
                        analyticsLocations: s,
                        analyticsSourceLocation: {
                            section: n,
                            object: i,
                            page: T.ZY5.GUILD_SETTINGS
                        },
                        guild: l,
                        perks: r
                    }));
            }),
            y(this, 'handleVanityUrlUpsellIndicator', (e) => {
                this.handleShowModalUpsell(e, T.Eu4.TIER_3, T.jXE.GUILD_SETTINGS_VANITY_URL, T.qAy.BADGE, (0, S.WW)());
            }),
            y(this, 'handleVanityUrlUpsellButton', (e) => {
                this.handleShowModalUpsell(e, T.Eu4.TIER_3, T.jXE.GUILD_SETTINGS_VANITY_URL, T.qAy.BUTTON_CTA, (0, S.WW)());
            });
    }
}
function D() {
    let e = (0, a.e7)([j.Z], () => j.Z.getGuild()),
        t = (0, a.cj)([E.Z], () => ({
            vanityURLCode: E.Z.vanityURLCode,
            vanityURLUses: E.Z.vanityURLUses,
            originalVanityURLCode: E.Z.originalVanityURLCode,
            hasError: E.Z.hasError(),
            errorDetails: E.Z.errorDetails
        })),
        n = (0, a.e7)([C.Z], () => C.Z.hideInstantInvites),
        { analyticsLocations: r } = (0, h.ZP)(u.Z.VANITY_URL);
    return (0, i.jsx)(h.Gt, {
        value: r,
        children: (0, i.jsx)(L, {
            guild: e,
            ...t,
            hide: n,
            analyticsLocations: r
        })
    });
}
