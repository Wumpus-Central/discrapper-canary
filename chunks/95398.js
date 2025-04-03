n.d(t, {
    ZP: () => R,
    aQ: () => N
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(692547),
    l = n(481060),
    c = n(168107),
    u = n(480916),
    d = n(81643),
    f = n(247206),
    _ = n(169525),
    p = n(823379),
    h = n(388032),
    m = n(703803);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var v = (function (e) {
    return (e.TEXT = 'text'), (e.ATTACHMENT = 'attachment'), (e.EMBED = 'embed'), e;
})(v || {});
let O = (e) => {
        let { className: t } = e;
        return (0, r.jsx)('div', {
            className: a()(m.spoilerWarning, t),
            children: h.NW.string(h.t['F+x38P'])
        });
    },
    I = (e) => {
        let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
        return (0, r.jsx)('div', {
            className: a()(m.explicitContentWarning, t),
            children: i
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.fFY, {
                              size: 'lg',
                              color: s.Z.colors.WHITE
                          }),
                          n &&
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'always-white',
                                  className: m.explicitContentWarningText,
                                  children: h.NW.string(h.t.SpxcUV)
                              })
                      ]
                  })
        });
    },
    S = (e) => {
        let { reason: t = _.wk.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
        switch (t) {
            case _.wk.SPOILER:
                return (0, r.jsx)(O, { className: n });
            case _.wk.EXPLICIT_CONTENT:
                return (0, r.jsx)(I, {
                    isSingleMosaicItem: i,
                    className: n
                });
            case _.wk.POTENTIAL_EXPLICIT_CONTENT:
                return (0, r.jsx)(I, {
                    isSingleMosaicItem: i,
                    className: n,
                    obscureOnly: !0
                });
            default:
                return (0, p.vE)(t);
        }
    },
    T = (e) => {
        let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: o } = e;
        return t !== _.wk.EXPLICIT_CONTENT
            ? null
            : (0, r.jsx)('div', {
                  className: a()(m.obscureButtonContainer, o),
                  children: (0, r.jsx)(l.P3F, {
                      className: m.obscureHoverButton,
                      onClick: i,
                      'aria-label': h.NW.string(h.t.ex5G9v),
                      children: n
                          ? (0, r.jsx)(l.tEF, {
                                size: 'md',
                                color: 'currentColor'
                            })
                          : (0, r.jsx)(l.kZF, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
              });
    },
    N = i.createContext(!1);
class A extends i.PureComponent {
    renderWithTooltip(e) {
        return (0, r.jsx)(l.ua7, {
            position: 'left',
            text: this.state.visible ? null : this.tooltipText,
            children: (t) => {
                let { onMouseEnter: n, onMouseLeave: r } = t;
                return i.cloneElement(i.Children.only(e), {
                    onMouseEnter: n,
                    onMouseLeave: r
                });
            }
        });
    }
    renderObscuredAttachment() {
        let { children: e, inline: t, className: n, containerStyles: i, obscured: o = !0, reason: s = _.wk.SPOILER, isSingleMosaicItem: c = !1, obscurityControlClassName: u, shouldAgeVerify: d, isVerifiedTeen: f } = this.props,
            { visible: p } = this.state,
            h = (0, r.jsx)(N.Consumer, {
                children: (h) => {
                    let g = h || p || !o;
                    return [_.wk.EXPLICIT_CONTENT, _.wk.POTENTIAL_EXPLICIT_CONTENT].includes(s) && !t
                        ? (0, r.jsxs)('div', {
                              'aria-label': g ? void 0 : this.ariaLabel,
                              'aria-expanded': g,
                              style: i,
                              className: a()(n, m.spoilerContent, m.spoilerContainer, m.attachmentContainer, {
                                  [m.hidden]: !g,
                                  [m.constrainedObscureContent]: c,
                                  [m.opaque]: d || f
                              }),
                              role: g ? 'presentation' : 'button',
                              tabIndex: g ? -1 : 0,
                              children: [
                                  g || t
                                      ? null
                                      : (0, r.jsx)(S, {
                                            reason: s,
                                            isSingleMosaicItem: c
                                        }),
                                  (0, r.jsx)('div', {
                                      'aria-hidden': !g,
                                      className: m.spoilerInnerContainer,
                                      children: e(!g)
                                  }),
                                  f
                                      ? null
                                      : (0, r.jsx)(T, {
                                            obscureReason: s,
                                            isVisible: p,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: u
                                        })
                              ]
                          })
                        : (0, r.jsxs)(l.P3F, {
                              onClick: g ? void 0 : this.removeObscurity,
                              'aria-label': g ? void 0 : this.ariaLabel,
                              'aria-expanded': g,
                              style: i,
                              className: a()(n, m.spoilerContent, m.spoilerContainer, m.attachmentContainer, {
                                  [m.hidden]: !g,
                                  [m.hiddenSpoiler]: !g
                              }),
                              role: g ? 'presentation' : 'button',
                              tabIndex: g ? -1 : 0,
                              children: [
                                  g || t
                                      ? null
                                      : (0, r.jsx)(S, {
                                            reason: s,
                                            isSingleMosaicItem: c
                                        }),
                                  (0, r.jsx)('div', {
                                      'aria-hidden': !g,
                                      className: m.spoilerInnerContainer,
                                      children: e(!g)
                                  })
                              ]
                          });
                }
            });
        return t ? this.renderWithTooltip(h) : h;
    }
    renderObscuredEmbed() {
        let { children: e, className: t, containerStyles: n, isSingleMosaicItem: i, obscurityControlClassName: o, reason: s = _.wk.SPOILER, shouldAgeVerify: c, isVerifiedTeen: u } = this.props,
            { visible: d } = this.state;
        return (0, r.jsx)(N.Consumer, {
            children: (f) => {
                let p = f || d;
                return [_.wk.EXPLICIT_CONTENT, _.wk.POTENTIAL_EXPLICIT_CONTENT].includes(s)
                    ? (0, r.jsxs)('div', {
                          'aria-label': d ? void 0 : this.ariaLabel,
                          'aria-expanded': p,
                          style: n,
                          className: a()(t, m.spoilerContent, m.spoilerContainer, m.embedContainer, {
                              [m.hidden]: !p,
                              [m.opaque]: c || u
                          }),
                          role: p ? 'presentation' : 'button',
                          tabIndex: p ? -1 : 0,
                          children: [
                              p
                                  ? null
                                  : (0, r.jsx)(S, {
                                        reason: s,
                                        isSingleMosaicItem: i
                                    }),
                              (0, r.jsx)('div', {
                                  'aria-hidden': !p,
                                  className: m.spoilerInnerContainer,
                                  children: e(!p)
                              }),
                              u
                                  ? null
                                  : (0, r.jsx)(T, {
                                        obscureReason: s,
                                        isVisible: d,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: o
                                    })
                          ]
                      })
                    : (0, r.jsxs)(l.P3F, {
                          'aria-label': this.ariaLabel,
                          'aria-expanded': p,
                          className: a()(t, m.spoilerContent, m.spoilerContainer, m.embedContainer, { [m.hidden]: !p }),
                          onClick: p ? void 0 : this.removeObscurity,
                          style: n,
                          role: p ? 'presentation' : 'button',
                          tabIndex: p ? -1 : 0,
                          children: [
                              p
                                  ? null
                                  : (0, r.jsx)(S, {
                                        reason: s,
                                        className: m.embed
                                    }),
                              (0, r.jsx)('div', {
                                  'aria-hidden': !p,
                                  children: e(!p)
                              })
                          ]
                      });
            }
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: o } = this.state,
            s = (0, r.jsx)(N.Consumer, {
                children: (s) => {
                    let c = s || o,
                        u = i.Children.toArray(e(c)),
                        d = i.Children.map(u, (e) => (i.isValidElement(e) && null != t ? t(e, c) : e));
                    return (0, r.jsx)(l.P3F, {
                        tag: 'span',
                        onClick: c ? void 0 : this.removeObscurity,
                        'aria-label': c ? void 0 : this.ariaLabel,
                        'aria-expanded': c,
                        tabIndex: c ? -1 : 0,
                        role: c ? 'presentation' : 'button',
                        className: a()(n, m.spoilerContent, m.spoilerMarkdownContent, { [m.hidden]: !c }),
                        children: (0, r.jsx)('span', {
                            className: m.obscuredTextContent,
                            children: (0, r.jsx)('span', {
                                'aria-hidden': !c,
                                className: m.obscuredTextContentInner,
                                children: d
                            })
                        })
                    });
                }
            });
        return this.renderWithTooltip(s);
    }
    render() {
        let { type: e = 'text' } = this.props;
        switch (e) {
            case 'text':
                return this.renderObscuredText();
            case 'attachment':
                return this.renderObscuredAttachment();
            case 'embed':
                return this.renderObscuredEmbed();
            default:
                return (0, p.vE)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = _.wk.SPOILER } = this.props;
        switch (e) {
            case _.wk.SPOILER:
                return h.NW.string(h.t['F+x38P']);
            case _.wk.EXPLICIT_CONTENT:
                return h.NW.string(h.t.mlJ8VV);
            case _.wk.POTENTIAL_EXPLICIT_CONTENT:
                return h.NW.string(h.t['MRdR7+']);
            default:
                return (0, p.vE)(e);
        }
    }
    get tooltipText() {
        let { reason: e = _.wk.SPOILER } = this.props;
        switch (e) {
            case _.wk.SPOILER:
                return h.NW.string(h.t['F+x38P']);
            case _.wk.EXPLICIT_CONTENT:
                return h.NW.string(h.t.mlJ8VV);
            case _.wk.POTENTIAL_EXPLICIT_CONTENT:
                return h.NW.string(h.t['MRdR7+']);
            default:
                return (0, p.vE)(e);
        }
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', { visible: !1 }),
            g(this, 'removeObscurity', (e) => {
                let { visible: t } = this.state;
                if (t) return;
                t || (e.preventDefault(), e.stopPropagation()), this.setState({ visible: !0 });
                let { onReveal: n } = this.props;
                null != n && n();
            }),
            g(this, 'handleToggleObscurity', (e) => {
                if ((e.stopPropagation(), e.nativeEvent.stopPropagation(), this.props.shouldAgeVerify)) return void c.Z.showAgeVerificationGetStartedModal(u.cU.OBSCURED_MEDIA);
                let { onToggleObscurity: t } = this.props;
                null != t && t(e), this.setState((e) => ({ visible: !e.visible }));
            }),
            g(this, 'obscure', () => {
                let { visible: e } = this.state;
                e && this.setState({ visible: !1 });
            });
    }
}
let C = (e) => {
    let t = (0, f.m8)() && e.reason === _.wk.EXPLICIT_CONTENT,
        n = (0, d.Jm)();
    return (0, r.jsx)(
        A,
        y(E({}, e), {
            shouldAgeVerify: t,
            isVerifiedTeen: n
        })
    );
};
(C.Types = v), (C.Reasons = _.wk);
let R = C;
