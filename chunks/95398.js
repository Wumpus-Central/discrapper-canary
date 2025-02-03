n.d(t, {
    Z: () => b,
    a: () => y
}),
    n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(692547),
    u = n(481060),
    c = n(169525),
    d = n(823379),
    f = n(388032),
    _ = n(354431);
function p(e, t, n) {
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
var h = (function (e) {
    return (e.TEXT = 'text'), (e.ATTACHMENT = 'attachment'), (e.EMBED = 'embed'), e;
})(h || {});
let m = (e) => {
        let { className: t } = e;
        return (0, r.jsx)('div', {
            className: o()(_.spoilerWarning, t),
            children: f.intl.string(f.t['F+x38P'])
        });
    },
    g = (e) => {
        let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
        return (0, r.jsx)('div', {
            className: o()(_.explicitContentWarning, t),
            children: i
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.fFY, {
                              size: 'lg',
                              color: l.Z.colors.WHITE
                          }),
                          n &&
                              (0, r.jsx)(u.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'always-white',
                                  className: _.explicitContentWarningText,
                                  children: f.intl.string(f.t.SpxcUV)
                              })
                      ]
                  })
        });
    },
    E = (e) => {
        let { reason: t = c.wk.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
        switch (t) {
            case c.wk.SPOILER:
                return (0, r.jsx)(m, { className: n });
            case c.wk.EXPLICIT_CONTENT:
                return (0, r.jsx)(g, {
                    isSingleMosaicItem: i,
                    className: n
                });
            case c.wk.POTENTIAL_EXPLICIT_CONTENT:
                return (0, r.jsx)(g, {
                    isSingleMosaicItem: i,
                    className: n,
                    obscureOnly: !0
                });
            default:
                return (0, d.vE)(t);
        }
    },
    v = (e) => {
        let { obscureReason: t, isVisible: n, handleToggleObscurity: i, obscurityControlClassName: a } = e;
        return t !== c.wk.EXPLICIT_CONTENT
            ? null
            : (0, r.jsx)('div', {
                  className: o()(_.obscureButtonContainer, a),
                  children: (0, r.jsx)(u.P3F, {
                      className: o()(_.obscureHoverButton),
                      onClick: i,
                      'aria-label': f.intl.string(f.t.ex5G9v),
                      children: n
                          ? (0, r.jsx)(u.tEF, {
                                size: 'md',
                                color: 'currentColor'
                            })
                          : (0, r.jsx)(u.kZF, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
              });
    },
    y = a.createContext(!1);
class I extends (i = a.PureComponent) {
    renderWithTooltip(e) {
        return (0, r.jsx)(u.ua7, {
            position: 'left',
            text: this.state.visible ? null : this.tooltipText,
            children: (t) => {
                let { onMouseEnter: n, onMouseLeave: i } = t;
                return a.cloneElement(a.Children.only(e), {
                    onMouseEnter: n,
                    onMouseLeave: i
                });
            }
        });
    }
    renderObscuredAttachment() {
        let { children: e, inline: t, className: n, containerStyles: i, obscured: a = !0, reason: s = c.wk.SPOILER, isSingleMosaicItem: l = !1, obscurityControlClassName: d } = this.props,
            { visible: f } = this.state,
            p = (0, r.jsx)(y.Consumer, {
                children: (p) => {
                    let h = p || f || !a;
                    return [c.wk.EXPLICIT_CONTENT, c.wk.POTENTIAL_EXPLICIT_CONTENT].includes(s) && !t
                        ? (0, r.jsxs)('div', {
                              'aria-label': h ? void 0 : this.ariaLabel,
                              'aria-expanded': h,
                              style: i,
                              className: o()(n, _.spoilerContent, _.spoilerContainer, _.attachmentContainer, {
                                  [_.hidden]: !h,
                                  [_.constrainedObscureContent]: l
                              }),
                              role: h ? 'presentation' : 'button',
                              tabIndex: h ? -1 : 0,
                              children: [
                                  h || t
                                      ? null
                                      : (0, r.jsx)(E, {
                                            reason: s,
                                            isSingleMosaicItem: l
                                        }),
                                  (0, r.jsx)('div', {
                                      'aria-hidden': !h,
                                      className: _.spoilerInnerContainer,
                                      children: e(!h)
                                  }),
                                  (0, r.jsx)(v, {
                                      obscureReason: s,
                                      isVisible: f,
                                      handleToggleObscurity: this.handleToggleObscurity,
                                      obscurityControlClassName: d
                                  })
                              ]
                          })
                        : (0, r.jsxs)(u.P3F, {
                              onClick: h ? void 0 : this.removeObscurity,
                              'aria-label': h ? void 0 : this.ariaLabel,
                              'aria-expanded': h,
                              style: i,
                              className: o()(n, _.spoilerContent, _.spoilerContainer, _.attachmentContainer, {
                                  [_.hidden]: !h,
                                  [_.hiddenSpoiler]: !h
                              }),
                              role: h ? 'presentation' : 'button',
                              tabIndex: h ? -1 : 0,
                              children: [
                                  h || t
                                      ? null
                                      : (0, r.jsx)(E, {
                                            reason: s,
                                            isSingleMosaicItem: l
                                        }),
                                  (0, r.jsx)('div', {
                                      'aria-hidden': !h,
                                      className: _.spoilerInnerContainer,
                                      children: e(!h)
                                  })
                              ]
                          });
                }
            });
        return t ? this.renderWithTooltip(p) : p;
    }
    renderObscuredEmbed() {
        let { children: e, className: t, containerStyles: n, isSingleMosaicItem: i, obscurityControlClassName: a, reason: s = c.wk.SPOILER } = this.props,
            { visible: l } = this.state;
        return (0, r.jsx)(y.Consumer, {
            children: (d) => {
                let f = d || l;
                return [c.wk.EXPLICIT_CONTENT, c.wk.POTENTIAL_EXPLICIT_CONTENT].includes(s)
                    ? (0, r.jsxs)('div', {
                          'aria-label': l ? void 0 : this.ariaLabel,
                          'aria-expanded': f,
                          style: n,
                          className: o()(t, _.spoilerContent, _.spoilerContainer, _.embedContainer, { [_.hidden]: !f }),
                          role: f ? 'presentation' : 'button',
                          tabIndex: f ? -1 : 0,
                          children: [
                              f
                                  ? null
                                  : (0, r.jsx)(E, {
                                        reason: s,
                                        isSingleMosaicItem: i
                                    }),
                              (0, r.jsx)('div', {
                                  'aria-hidden': !f,
                                  className: _.spoilerInnerContainer,
                                  children: e(!f)
                              }),
                              (0, r.jsx)(v, {
                                  obscureReason: s,
                                  isVisible: l,
                                  handleToggleObscurity: this.handleToggleObscurity,
                                  obscurityControlClassName: a
                              })
                          ]
                      })
                    : (0, r.jsxs)(u.P3F, {
                          'aria-label': this.ariaLabel,
                          'aria-expanded': f,
                          className: o()(t, _.spoilerContent, _.spoilerContainer, _.embedContainer, { [_.hidden]: !f }),
                          onClick: f ? void 0 : this.removeObscurity,
                          style: n,
                          role: f ? 'presentation' : 'button',
                          tabIndex: f ? -1 : 0,
                          children: [
                              f
                                  ? null
                                  : (0, r.jsx)(E, {
                                        reason: s,
                                        className: _.embed
                                    }),
                              (0, r.jsx)('div', {
                                  'aria-hidden': !f,
                                  children: e(!f)
                              })
                          ]
                      });
            }
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: i } = this.state,
            s = (0, r.jsx)(y.Consumer, {
                children: (s) => {
                    let l = s || i,
                        c = a.Children.toArray(e(l)),
                        d = a.Children.map(c, (e) => (a.isValidElement(e) && null != t ? t(e, l) : e));
                    return (0, r.jsx)(u.P3F, {
                        tag: 'span',
                        onClick: l ? void 0 : this.removeObscurity,
                        'aria-label': l ? void 0 : this.ariaLabel,
                        'aria-expanded': l,
                        tabIndex: l ? -1 : 0,
                        role: l ? 'presentation' : 'button',
                        className: o()(n, _.spoilerContent, _.spoilerMarkdownContent, { [_.hidden]: !l }),
                        children: (0, r.jsx)('span', {
                            className: _.obscuredTextContent,
                            children: (0, r.jsx)('span', {
                                'aria-hidden': !l,
                                className: _.obscuredTextContentInner,
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
                return (0, d.vE)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = c.wk.SPOILER } = this.props;
        switch (e) {
            case c.wk.SPOILER:
                return f.intl.string(f.t['F+x38P']);
            case c.wk.EXPLICIT_CONTENT:
                return f.intl.string(f.t.mlJ8VV);
            case c.wk.POTENTIAL_EXPLICIT_CONTENT:
                return f.intl.string(f.t['MRdR7+']);
            default:
                return (0, d.vE)(e);
        }
    }
    get tooltipText() {
        let { reason: e = c.wk.SPOILER } = this.props;
        switch (e) {
            case c.wk.SPOILER:
                return f.intl.string(f.t['F+x38P']);
            case c.wk.EXPLICIT_CONTENT:
                return f.intl.string(f.t.mlJ8VV);
            case c.wk.POTENTIAL_EXPLICIT_CONTENT:
                return f.intl.string(f.t['MRdR7+']);
            default:
                return (0, d.vE)(e);
        }
    }
    constructor(...e) {
        super(...e),
            p(this, 'state', { visible: !1 }),
            p(this, 'removeObscurity', (e) => {
                let { visible: t } = this.state;
                if (t) return;
                t || (e.preventDefault(), e.stopPropagation()), this.setState({ visible: !0 });
                let { onReveal: n } = this.props;
                null != n && n();
            }),
            p(this, 'handleToggleObscurity', (e) => {
                e.stopPropagation(), e.nativeEvent.stopPropagation();
                let { onToggleObscurity: t } = this.props;
                null != t && t(e), this.setState((e) => ({ visible: !e.visible }));
            }),
            p(this, 'obscure', () => {
                let { visible: e } = this.state;
                e && this.setState({ visible: !1 });
            });
    }
}
p(I, 'Types', h), p(I, 'Reasons', c.wk);
let b = I;
