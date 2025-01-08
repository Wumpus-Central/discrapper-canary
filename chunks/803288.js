n.d(t, {
    T: function () {
        return A;
    },
    Z: function () {
        return L;
    }
}),
    n(757143),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(497321),
    d = n(852860),
    u = n(100527),
    m = n(367907),
    h = n(906732),
    g = n(263145),
    x = n(807582),
    p = n(26323),
    f = n(366980),
    C = n(246946),
    v = n(709586),
    _ = n(267642),
    N = n(999382),
    I = n(621319),
    T = n(44550),
    j = n(770270),
    b = n(981631),
    S = n(30513),
    E = n(388032),
    R = n(445744);
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
let A = s.ZP.connectStores([N.Z, T.Z], () => {
    let e = T.Z.vanityURLCode,
        t = N.Z.getGuildId();
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
class Z extends r.PureComponent {
    componentWillUnmount() {
        (0, I.xv)();
    }
    renderEditCard() {
        let { isRemoving: e } = this.state,
            { hasError: t, originalVanityURLCode: n, vanityURLCode: r, vanityURLUses: l, guild: a } = this.props;
        if (null == r) return (0, i.jsx)(o.Spinner, {});
        let s = (null == a ? void 0 : a.hasFeature(b.oNc.VANITY_URL)) === !0;
        return (0, i.jsxs)(o.Card, {
            editable: !0,
            className: R.editVanityUrlCard,
            children: [
                (0, i.jsxs)(o.FormTitle, {
                    className: R.__invalid_formTitle,
                    children: [
                        (0, i.jsx)('div', {
                            className: R.formTitleField,
                            children: E.intl.string(E.t['6oJyq6'])
                        }),
                        r.length > 0 ? (0, i.jsx)('div', { children: E.intl.format(E.t.MVWOUV, { uses: l }) }) : null
                    ]
                }),
                (0, i.jsx)(g.Z, {
                    prefix: ''.concat('https://discord.gg', '/'),
                    value: r,
                    onChange: this.handleInviteCodeChange,
                    maxLength: 25,
                    autoFocus: !0,
                    error: t,
                    disabled: !s
                }),
                null != n && n.length > 0
                    ? (0, i.jsx)(o.Button, {
                          className: R.removeVanityUrlButton,
                          onClick: this.handleRemoveVanityURL,
                          submitting: e,
                          look: o.Button.Looks.LINK,
                          size: o.Button.Sizes.MIN,
                          color: o.Button.Colors.RED,
                          children: E.intl.string(E.t['3ggb6O'])
                      })
                    : null
            ]
        });
    }
    renderUpsellButton() {
        return (0, i.jsxs)(o.ShinyButton, {
            color: o.Button.Colors.GREEN,
            className: a()(R.marginTop16),
            innerClassName: R.upsellButton,
            onClick: this.handleVanityUrlUpsellButton,
            children: [
                (0, i.jsx)(v.Z, {
                    height: 16,
                    width: 16,
                    className: R.premiumUpsellBadge
                }),
                ' ',
                E.intl.string(E.t['+7XY39'])
            ]
        });
    }
    renderInfo() {
        let { hasError: e, errorDetails: t, originalVanityURLCode: n } = this.props;
        if (e)
            return (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-danger',
                className: R.__invalid_marginTop20,
                children: (0, j.i)(null == t ? void 0 : t.code)
            });
        if (null != n && n.length > 0) {
            let e = (0, f.Z)(n);
            return (0, i.jsx)(o.FormText, {
                className: R.__invalid_marginTop20,
                type: o.FormTextTypes.LABEL_DESCRIPTOR,
                children: E.intl.format(E.t['1qTOvr'], {
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
        let { hide: e, guild: t } = this.props;
        return null == t
            ? null
            : e
              ? (0, i.jsx)(c.Z, {})
              : (0, i.jsxs)(o.FormSection, {
                    children: [
                        (0, i.jsxs)(o.FormTitle, {
                            tag: o.FormTitleTags.H1,
                            className: R.flexFormTitle,
                            children: [
                                (0, i.jsx)('div', { children: E.intl.string(E.t['5XZKy8']) }),
                                (0, i.jsx)(x.Z, {
                                    guild: t,
                                    guildFeature: b.oNc.VANITY_URL,
                                    className: R.guildFeatureAvailabilityIndicator,
                                    onClick: this.handleVanityUrlUpsellIndicator
                                })
                            ]
                        }),
                        (0, i.jsx)(o.FormText, {
                            type: o.FormTextTypes.DESCRIPTION,
                            className: R.__invalid_marginBottom8,
                            children: E.intl.string(E.t.IhWDcn)
                        }),
                        (0, i.jsx)(o.FormText, {
                            type: o.FormTextTypes.DESCRIPTION,
                            className: R.__invalid_marginBottom20,
                            children: E.intl.string(E.t['1mRkFh'])
                        }),
                        (0, i.jsx)(o.FormText, {
                            type: o.FormTextTypes.DESCRIPTION,
                            className: R.__invalid_marginBottom20,
                            children: E.intl.string(E.t['eH/HMz'])
                        }),
                        (0, j.p)(t) ? this.renderEditCard() : this.renderUpsellButton(),
                        this.renderInfo()
                    ]
                });
    }
    constructor(...e) {
        super(...e),
            y(this, 'state', { isRemoving: !1 }),
            y(this, 'handleShowModalUpsell', (e, t, n, i, r) => {
                e.preventDefault(), e.stopPropagation();
                let { guild: l, analyticsLocations: a } = this.props;
                null != l &&
                    ((0, m.yw)(b.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: {
                            section: n,
                            object: b.qAy.LEARN_MORE,
                            objectType: (0, _.ge)(t),
                            location_stack: a
                        },
                        guild_id: null == l ? void 0 : l.id
                    }),
                    (0, p.Z)({
                        analyticsLocations: a,
                        analyticsSourceLocation: {
                            section: n,
                            object: i,
                            page: b.ZY5.GUILD_SETTINGS
                        },
                        guild: l,
                        perks: r
                    }));
            }),
            y(this, 'handleVanityUrlUpsellIndicator', (e) => {
                this.handleShowModalUpsell(e, b.Eu4.TIER_3, b.jXE.GUILD_SETTINGS_VANITY_URL, b.qAy.BADGE, (0, S.WW)());
            }),
            y(this, 'handleVanityUrlUpsellButton', (e) => {
                this.handleShowModalUpsell(e, b.Eu4.TIER_3, b.jXE.GUILD_SETTINGS_VANITY_URL, b.qAy.BUTTON_CTA, (0, S.WW)());
            });
    }
}
function L() {
    let e = (0, s.e7)([N.Z], () => N.Z.getGuild()),
        t = (0, s.cj)([T.Z], () => ({
            vanityURLCode: T.Z.vanityURLCode,
            vanityURLUses: T.Z.vanityURLUses,
            originalVanityURLCode: T.Z.originalVanityURLCode,
            hasError: T.Z.hasError(),
            errorDetails: T.Z.errorDetails
        })),
        n = (0, s.e7)([C.Z], () => C.Z.hideInstantInvites),
        { analyticsLocations: r } = (0, h.ZP)(u.Z.VANITY_URL);
    return (0, i.jsx)(h.Gt, {
        value: r,
        children: (0, i.jsx)(Z, {
            guild: e,
            ...t,
            hide: n,
            analyticsLocations: r
        })
    });
}
