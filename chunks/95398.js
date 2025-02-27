n.d(t, {
    ZP: () => C,
    aQ: () => T
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(692547),
    l = n(481060),
    c = n(168107),
    u = n(81643),
    d = n(247206),
    f = n(169525),
    _ = n(823379),
    p = n(388032),
    h = n(415841);
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
function m(e) {
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
function E(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var b = (function (e) {
    return (e.TEXT = 'text'), (e.ATTACHMENT = 'attachment'), (e.EMBED = 'embed'), e;
})(b || {});
let y = (e) => {
        let { className: t } = e;
        return (0, r.jsx)('div', {
            className: a()(h.spoilerWarning, t),
            children: p.NW.string(p.t['F+x38P'])
        });
    },
    O = (e) => {
        let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
        return (0, r.jsx)('div', {
            className: a()(h.explicitContentWarning, t),
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
                                  className: h.explicitContentWarningText,
                                  children: p.NW.string(p.t.SpxcUV)
                              })
                      ]
                  })
        });
    },
    S = (e) => {
        let { reason: t = f.wk.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
        switch (t) {
            case f.wk.SPOILER:
                return (0, r.jsx)(y, { className: n });
            case f.wk.EXPLICIT_CONTENT:
                return (0, r.jsx)(O, {
                    isSingleMosaicItem: i,
                    className: n
                });
            case f.wk.POTENTIAL_EXPLICIT_CONTENT:
                return (0, r.jsx)(O, {
                    isSingleMosaicItem: i,
                    className: n,
                    obscureOnly: !0
                });
            default:
                return (0, _.vE)(t);
        }
    },
    I = (e) => {
        let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: o } = e;
        return t !== f.wk.EXPLICIT_CONTENT
            ? null
            : (0, r.jsx)('div', {
                  className: a()(h.obscureButtonContainer, o),
                  children: (0, r.jsx)(l.P3F, {
                      className: a()(h.obscureHoverButton),
                      onClick: i,
                      'aria-label': p.NW.string(p.t.ex5G9v),
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
    T = i.createContext(!1);
class N extends i.PureComponent {
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
        let { children: e, inline: t, className: n, containerStyles: i, obscured: o = !0, reason: s = f.wk.SPOILER, isSingleMosaicItem: c = !1, obscurityControlClassName: u, shouldAgeVerify: d, isVerifiedTeen: _ } = this.props,
            { visible: p } = this.state,
            g = (0, r.jsx)(T.Consumer, {
                children: (g) => {
                    let m = g || p || !o;
                    return [f.wk.EXPLICIT_CONTENT, f.wk.POTENTIAL_EXPLICIT_CONTENT].includes(s) && !t
                        ? (0, r.jsxs)('div', {
                              'aria-label': m ? void 0 : this.ariaLabel,
                              'aria-expanded': m,
                              style: i,
                              className: a()(n, h.spoilerContent, h.spoilerContainer, h.attachmentContainer, {
                                  [h.hidden]: !m,
                                  [h.constrainedObscureContent]: c,
                                  [h.opaque]: d || _
                              }),
                              role: m ? 'presentation' : 'button',
                              tabIndex: m ? -1 : 0,
                              children: [
                                  m || t
                                      ? null
                                      : (0, r.jsx)(S, {
                                            reason: s,
                                            isSingleMosaicItem: c
                                        }),
                                  (0, r.jsx)('div', {
                                      'aria-hidden': !m,
                                      className: h.spoilerInnerContainer,
                                      children: e(!m)
                                  }),
                                  _
                                      ? null
                                      : (0, r.jsx)(I, {
                                            obscureReason: s,
                                            isVisible: p,
                                            handleToggleObscurity: this.handleToggleObscurity,
                                            obscurityControlClassName: u
                                        })
                              ]
                          })
                        : (0, r.jsxs)(l.P3F, {
                              onClick: m ? void 0 : this.removeObscurity,
                              'aria-label': m ? void 0 : this.ariaLabel,
                              'aria-expanded': m,
                              style: i,
                              className: a()(n, h.spoilerContent, h.spoilerContainer, h.attachmentContainer, {
                                  [h.hidden]: !m,
                                  [h.hiddenSpoiler]: !m
                              }),
                              role: m ? 'presentation' : 'button',
                              tabIndex: m ? -1 : 0,
                              children: [
                                  m || t
                                      ? null
                                      : (0, r.jsx)(S, {
                                            reason: s,
                                            isSingleMosaicItem: c
                                        }),
                                  (0, r.jsx)('div', {
                                      'aria-hidden': !m,
                                      className: h.spoilerInnerContainer,
                                      children: e(!m)
                                  })
                              ]
                          });
                }
            });
        return t ? this.renderWithTooltip(g) : g;
    }
    renderObscuredEmbed() {
        let { children: e, className: t, containerStyles: n, isSingleMosaicItem: i, obscurityControlClassName: o, reason: s = f.wk.SPOILER, shouldAgeVerify: c, isVerifiedTeen: u } = this.props,
            { visible: d } = this.state;
        return (0, r.jsx)(T.Consumer, {
            children: (_) => {
                let p = _ || d;
                return [f.wk.EXPLICIT_CONTENT, f.wk.POTENTIAL_EXPLICIT_CONTENT].includes(s)
                    ? (0, r.jsxs)('div', {
                          'aria-label': d ? void 0 : this.ariaLabel,
                          'aria-expanded': p,
                          style: n,
                          className: a()(t, h.spoilerContent, h.spoilerContainer, h.embedContainer, {
                              [h.hidden]: !p,
                              [h.opaque]: c || u
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
                                  className: h.spoilerInnerContainer,
                                  children: e(!p)
                              }),
                              u
                                  ? null
                                  : (0, r.jsx)(I, {
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
                          className: a()(t, h.spoilerContent, h.spoilerContainer, h.embedContainer, { [h.hidden]: !p }),
                          onClick: p ? void 0 : this.removeObscurity,
                          style: n,
                          role: p ? 'presentation' : 'button',
                          tabIndex: p ? -1 : 0,
                          children: [
                              p
                                  ? null
                                  : (0, r.jsx)(S, {
                                        reason: s,
                                        className: h.embed
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
            s = (0, r.jsx)(T.Consumer, {
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
                        className: a()(n, h.spoilerContent, h.spoilerMarkdownContent, { [h.hidden]: !c }),
                        children: (0, r.jsx)('span', {
                            className: h.obscuredTextContent,
                            children: (0, r.jsx)('span', {
                                'aria-hidden': !c,
                                className: h.obscuredTextContentInner,
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
                return (0, _.vE)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = f.wk.SPOILER } = this.props;
        switch (e) {
            case f.wk.SPOILER:
                return p.NW.string(p.t['F+x38P']);
            case f.wk.EXPLICIT_CONTENT:
                return p.NW.string(p.t.mlJ8VV);
            case f.wk.POTENTIAL_EXPLICIT_CONTENT:
                return p.NW.string(p.t['MRdR7+']);
            default:
                return (0, _.vE)(e);
        }
    }
    get tooltipText() {
        let { reason: e = f.wk.SPOILER } = this.props;
        switch (e) {
            case f.wk.SPOILER:
                return p.NW.string(p.t['F+x38P']);
            case f.wk.EXPLICIT_CONTENT:
                return p.NW.string(p.t.mlJ8VV);
            case f.wk.POTENTIAL_EXPLICIT_CONTENT:
                return p.NW.string(p.t['MRdR7+']);
            default:
                return (0, _.vE)(e);
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
                if ((e.stopPropagation(), e.nativeEvent.stopPropagation(), this.props.shouldAgeVerify)) {
                    c.Z.showAgeVerificationGetStartedModal();
                    return;
                }
                let { onToggleObscurity: t } = this.props;
                null != t && t(e), this.setState((e) => ({ visible: !e.visible }));
            }),
            g(this, 'obscure', () => {
                let { visible: e } = this.state;
                e && this.setState({ visible: !1 });
            });
    }
}
let A = (e) => {
    let t = (0, d.m8)() && e.reason === f.wk.EXPLICIT_CONTENT,
        n = (0, u.Jm)();
    return (0, r.jsx)(
        N,
        v(m({}, e), {
            shouldAgeVerify: t,
            isVerifiedTeen: n
        })
    );
};
(A.Types = b), (A.Reasons = f.wk);
let C = A;
