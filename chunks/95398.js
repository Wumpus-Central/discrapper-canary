n.d(t, {
    ZP: () => A,
    aQ: () => I
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(692547),
    l = n(481060),
    c = n(168107),
    u = n(247206),
    d = n(169525),
    f = n(823379),
    _ = n(388032),
    p = n(415841);
function h(e, t, n) {
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
function g(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var v = (function (e) {
    return (e.TEXT = 'text'), (e.ATTACHMENT = 'attachment'), (e.EMBED = 'embed'), e;
})(v || {});
let b = (e) => {
        let { className: t } = e;
        return (0, r.jsx)('div', {
            className: a()(p.spoilerWarning, t),
            children: _.NW.string(_.t['F+x38P'])
        });
    },
    y = (e) => {
        let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
        return (0, r.jsx)('div', {
            className: a()(p.explicitContentWarning, t),
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
                                  className: p.explicitContentWarningText,
                                  children: _.NW.string(_.t.SpxcUV)
                              })
                      ]
                  })
        });
    },
    O = (e) => {
        let { reason: t = d.wk.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
        switch (t) {
            case d.wk.SPOILER:
                return (0, r.jsx)(b, { className: n });
            case d.wk.EXPLICIT_CONTENT:
                return (0, r.jsx)(y, {
                    isSingleMosaicItem: i,
                    className: n
                });
            case d.wk.POTENTIAL_EXPLICIT_CONTENT:
                return (0, r.jsx)(y, {
                    isSingleMosaicItem: i,
                    className: n,
                    obscureOnly: !0
                });
            default:
                return (0, f.vE)(t);
        }
    },
    S = (e) => {
        let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: o } = e;
        return t !== d.wk.EXPLICIT_CONTENT
            ? null
            : (0, r.jsx)('div', {
                  className: a()(p.obscureButtonContainer, o),
                  children: (0, r.jsx)(l.P3F, {
                      className: a()(p.obscureHoverButton),
                      onClick: i,
                      'aria-label': _.NW.string(_.t.ex5G9v),
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
    I = i.createContext(!1);
class T extends i.PureComponent {
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
        let { children: e, inline: t, className: n, containerStyles: i, obscured: o = !0, reason: s = d.wk.SPOILER, isSingleMosaicItem: c = !1, obscurityControlClassName: u, shouldAgeVerify: f, isVerifiedTeen: _ } = this.props,
            { visible: h } = this.state,
            g = (0, r.jsx)(I.Consumer, {
                children: (g) => {
                    let m = g || h || !o;
                    return [d.wk.EXPLICIT_CONTENT, d.wk.POTENTIAL_EXPLICIT_CONTENT].includes(s) && !t
                        ? (0, r.jsxs)('div', {
                              'aria-label': m ? void 0 : this.ariaLabel,
                              'aria-expanded': m,
                              style: i,
                              className: a()(n, p.spoilerContent, p.spoilerContainer, p.attachmentContainer, {
                                  [p.hidden]: !m,
                                  [p.constrainedObscureContent]: c,
                                  [p.opaque]: f || _
                              }),
                              role: m ? 'presentation' : 'button',
                              tabIndex: m ? -1 : 0,
                              children: [
                                  m || t
                                      ? null
                                      : (0, r.jsx)(O, {
                                            reason: s,
                                            isSingleMosaicItem: c
                                        }),
                                  (0, r.jsx)('div', {
                                      'aria-hidden': !m,
                                      className: p.spoilerInnerContainer,
                                      children: e(!m)
                                  }),
                                  _
                                      ? null
                                      : (0, r.jsx)(S, {
                                            obscureReason: s,
                                            isVisible: h,
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
                              className: a()(n, p.spoilerContent, p.spoilerContainer, p.attachmentContainer, {
                                  [p.hidden]: !m,
                                  [p.hiddenSpoiler]: !m
                              }),
                              role: m ? 'presentation' : 'button',
                              tabIndex: m ? -1 : 0,
                              children: [
                                  m || t
                                      ? null
                                      : (0, r.jsx)(O, {
                                            reason: s,
                                            isSingleMosaicItem: c
                                        }),
                                  (0, r.jsx)('div', {
                                      'aria-hidden': !m,
                                      className: p.spoilerInnerContainer,
                                      children: e(!m)
                                  })
                              ]
                          });
                }
            });
        return t ? this.renderWithTooltip(g) : g;
    }
    renderObscuredEmbed() {
        let { children: e, className: t, containerStyles: n, isSingleMosaicItem: i, obscurityControlClassName: o, reason: s = d.wk.SPOILER, shouldAgeVerify: c, isVerifiedTeen: u } = this.props,
            { visible: f } = this.state;
        return (0, r.jsx)(I.Consumer, {
            children: (_) => {
                let h = _ || f;
                return [d.wk.EXPLICIT_CONTENT, d.wk.POTENTIAL_EXPLICIT_CONTENT].includes(s)
                    ? (0, r.jsxs)('div', {
                          'aria-label': f ? void 0 : this.ariaLabel,
                          'aria-expanded': h,
                          style: n,
                          className: a()(t, p.spoilerContent, p.spoilerContainer, p.embedContainer, {
                              [p.hidden]: !h,
                              [p.opaque]: c || u
                          }),
                          role: h ? 'presentation' : 'button',
                          tabIndex: h ? -1 : 0,
                          children: [
                              h
                                  ? null
                                  : (0, r.jsx)(O, {
                                        reason: s,
                                        isSingleMosaicItem: i
                                    }),
                              (0, r.jsx)('div', {
                                  'aria-hidden': !h,
                                  className: p.spoilerInnerContainer,
                                  children: e(!h)
                              }),
                              u
                                  ? null
                                  : (0, r.jsx)(S, {
                                        obscureReason: s,
                                        isVisible: f,
                                        handleToggleObscurity: this.handleToggleObscurity,
                                        obscurityControlClassName: o
                                    })
                          ]
                      })
                    : (0, r.jsxs)(l.P3F, {
                          'aria-label': this.ariaLabel,
                          'aria-expanded': h,
                          className: a()(t, p.spoilerContent, p.spoilerContainer, p.embedContainer, { [p.hidden]: !h }),
                          onClick: h ? void 0 : this.removeObscurity,
                          style: n,
                          role: h ? 'presentation' : 'button',
                          tabIndex: h ? -1 : 0,
                          children: [
                              h
                                  ? null
                                  : (0, r.jsx)(O, {
                                        reason: s,
                                        className: p.embed
                                    }),
                              (0, r.jsx)('div', {
                                  'aria-hidden': !h,
                                  children: e(!h)
                              })
                          ]
                      });
            }
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: o } = this.state,
            s = (0, r.jsx)(I.Consumer, {
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
                        className: a()(n, p.spoilerContent, p.spoilerMarkdownContent, { [p.hidden]: !c }),
                        children: (0, r.jsx)('span', {
                            className: p.obscuredTextContent,
                            children: (0, r.jsx)('span', {
                                'aria-hidden': !c,
                                className: p.obscuredTextContentInner,
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
                return (0, f.vE)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = d.wk.SPOILER } = this.props;
        switch (e) {
            case d.wk.SPOILER:
                return _.NW.string(_.t['F+x38P']);
            case d.wk.EXPLICIT_CONTENT:
                return _.NW.string(_.t.mlJ8VV);
            case d.wk.POTENTIAL_EXPLICIT_CONTENT:
                return _.NW.string(_.t['MRdR7+']);
            default:
                return (0, f.vE)(e);
        }
    }
    get tooltipText() {
        let { reason: e = d.wk.SPOILER } = this.props;
        switch (e) {
            case d.wk.SPOILER:
                return _.NW.string(_.t['F+x38P']);
            case d.wk.EXPLICIT_CONTENT:
                return _.NW.string(_.t.mlJ8VV);
            case d.wk.POTENTIAL_EXPLICIT_CONTENT:
                return _.NW.string(_.t['MRdR7+']);
            default:
                return (0, f.vE)(e);
        }
    }
    constructor(...e) {
        super(...e),
            h(this, 'state', { visible: !1 }),
            h(this, 'removeObscurity', (e) => {
                let { visible: t } = this.state;
                if (t) return;
                t || (e.preventDefault(), e.stopPropagation()), this.setState({ visible: !0 });
                let { onReveal: n } = this.props;
                null != n && n();
            }),
            h(this, 'handleToggleObscurity', (e) => {
                if ((e.stopPropagation(), e.nativeEvent.stopPropagation(), this.props.shouldAgeVerify)) {
                    c.Z.showAgeVerificationGetStartedModal();
                    return;
                }
                let { onToggleObscurity: t } = this.props;
                null != t && t(e), this.setState((e) => ({ visible: !e.visible }));
            }),
            h(this, 'obscure', () => {
                let { visible: e } = this.state;
                e && this.setState({ visible: !1 });
            });
    }
}
let N = (e) => {
    let t = (0, u.m8)() && e.reason === d.wk.EXPLICIT_CONTENT,
        n = !1;
    return (0, r.jsx)(
        T,
        E(g({}, e), {
            shouldAgeVerify: t,
            isVerifiedTeen: n
        })
    );
};
(N.Types = v), (N.Reasons = d.wk);
let A = N;
