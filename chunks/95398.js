r.d(n, {
    a: function () {
        return I;
    }
});
var i,
    a,
    o = r(47120);
var s = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(692547),
    f = r(481060),
    p = r(169525),
    h = r(823379),
    _ = r(388032),
    m = r(354431);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.TEXT = 'text'), (e.ATTACHMENT = 'attachment'), (e.EMBED = 'embed');
})(i || (i = {}));
let E = (e) => {
        let { className: n } = e;
        return (0, s.jsx)('div', {
            className: c()(m.spoilerWarning, n),
            children: _.intl.string(_.t['F+x38P'])
        });
    },
    v = (e) => {
        let { className: n, isSingleMosaicItem: r, obscureOnly: i } = e;
        return (0, s.jsx)('div', {
            className: c()(m.explicitContentWarning, n),
            children: i
                ? null
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(f.ImageWarningIcon, {
                              size: 'lg',
                              color: d.Z.colors.WHITE
                          }),
                          r &&
                              (0, s.jsx)(f.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'always-white',
                                  className: m.explicitContentWarningText,
                                  children: _.intl.string(_.t.SpxcUV)
                              })
                      ]
                  })
        });
    },
    y = (e) => {
        let { reason: n = p.wk.SPOILER, className: r, isSingleMosaicItem: i = !1 } = e;
        switch (n) {
            case p.wk.SPOILER:
                return (0, s.jsx)(E, { className: r });
            case p.wk.EXPLICIT_CONTENT:
                return (0, s.jsx)(v, {
                    isSingleMosaicItem: i,
                    className: r
                });
            case p.wk.POTENTIAL_EXPLICIT_CONTENT:
                return (0, s.jsx)(v, {
                    isSingleMosaicItem: i,
                    className: r,
                    obscureOnly: !0
                });
            default:
                return (0, h.vE)(n);
        }
    },
    b = (e) => {
        let { obscureReason: n, isVisible: r, handleToggleObscurity: i, obscurityControlClassName: a } = e;
        return n !== p.wk.EXPLICIT_CONTENT
            ? null
            : (0, s.jsx)('div', {
                  className: c()(m.obscureButtonContainer, a),
                  children: (0, s.jsx)(f.Clickable, {
                      className: c()(m.obscureHoverButton),
                      onClick: i,
                      'aria-label': _.intl.string(_.t.ex5G9v),
                      children: r
                          ? (0, s.jsx)(f.EyeIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                          : (0, s.jsx)(f.EyeSlashIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
              });
    },
    I = l.createContext(!1);
class T extends (a = l.PureComponent) {
    renderWithTooltip(e) {
        return (0, s.jsx)(f.Tooltip, {
            position: 'left',
            text: this.state.visible ? null : this.tooltipText,
            children: (n) => {
                let { onMouseEnter: r, onMouseLeave: i } = n;
                return l.cloneElement(l.Children.only(e), {
                    onMouseEnter: r,
                    onMouseLeave: i
                });
            }
        });
    }
    renderObscuredAttachment() {
        let { children: e, inline: n, className: r, containerStyles: i, obscured: a = !0, reason: o = p.wk.SPOILER, isSingleMosaicItem: l = !1, obscurityControlClassName: u } = this.props,
            { visible: d } = this.state,
            h = (0, s.jsx)(I.Consumer, {
                children: (h) => {
                    let _ = h || d || !a;
                    return [p.wk.EXPLICIT_CONTENT, p.wk.POTENTIAL_EXPLICIT_CONTENT].includes(o) && !n
                        ? (0, s.jsxs)('div', {
                              'aria-label': _ ? void 0 : this.ariaLabel,
                              'aria-expanded': _,
                              style: i,
                              className: c()(r, m.spoilerContent, m.spoilerContainer, m.attachmentContainer, {
                                  [m.hidden]: !_,
                                  [m.constrainedObscureContent]: l
                              }),
                              role: _ ? 'presentation' : 'button',
                              tabIndex: _ ? -1 : 0,
                              children: [
                                  _ || n
                                      ? null
                                      : (0, s.jsx)(y, {
                                            reason: o,
                                            isSingleMosaicItem: l
                                        }),
                                  (0, s.jsx)('div', {
                                      'aria-hidden': !_,
                                      className: m.spoilerInnerContainer,
                                      children: e(!_)
                                  }),
                                  (0, s.jsx)(b, {
                                      obscureReason: o,
                                      isVisible: d,
                                      handleToggleObscurity: this.handleToggleObscurity,
                                      obscurityControlClassName: u
                                  })
                              ]
                          })
                        : (0, s.jsxs)(f.Clickable, {
                              onClick: _ ? void 0 : this.removeObscurity,
                              'aria-label': _ ? void 0 : this.ariaLabel,
                              'aria-expanded': _,
                              style: i,
                              className: c()(r, m.spoilerContent, m.spoilerContainer, m.attachmentContainer, {
                                  [m.hidden]: !_,
                                  [m.hiddenSpoiler]: !_
                              }),
                              role: _ ? 'presentation' : 'button',
                              tabIndex: _ ? -1 : 0,
                              children: [
                                  _ || n
                                      ? null
                                      : (0, s.jsx)(y, {
                                            reason: o,
                                            isSingleMosaicItem: l
                                        }),
                                  (0, s.jsx)('div', {
                                      'aria-hidden': !_,
                                      className: m.spoilerInnerContainer,
                                      children: e(!_)
                                  })
                              ]
                          });
                }
            });
        return n ? this.renderWithTooltip(h) : h;
    }
    renderObscuredEmbed() {
        let { children: e, className: n, containerStyles: r, isSingleMosaicItem: i, obscurityControlClassName: a, reason: o = p.wk.SPOILER } = this.props,
            { visible: l } = this.state;
        return (0, s.jsx)(I.Consumer, {
            children: (u) => {
                let d = u || l;
                return [p.wk.EXPLICIT_CONTENT, p.wk.POTENTIAL_EXPLICIT_CONTENT].includes(o)
                    ? (0, s.jsxs)('div', {
                          'aria-label': l ? void 0 : this.ariaLabel,
                          'aria-expanded': d,
                          style: r,
                          className: c()(n, m.spoilerContent, m.spoilerContainer, m.embedContainer, { [m.hidden]: !d }),
                          role: d ? 'presentation' : 'button',
                          tabIndex: d ? -1 : 0,
                          children: [
                              d
                                  ? null
                                  : (0, s.jsx)(y, {
                                        reason: o,
                                        isSingleMosaicItem: i
                                    }),
                              (0, s.jsx)('div', {
                                  'aria-hidden': !d,
                                  className: m.spoilerInnerContainer,
                                  children: e(!d)
                              }),
                              (0, s.jsx)(b, {
                                  obscureReason: o,
                                  isVisible: l,
                                  handleToggleObscurity: this.handleToggleObscurity,
                                  obscurityControlClassName: a
                              })
                          ]
                      })
                    : (0, s.jsxs)(f.Clickable, {
                          'aria-label': this.ariaLabel,
                          'aria-expanded': d,
                          className: c()(n, m.spoilerContent, m.spoilerContainer, m.embedContainer, { [m.hidden]: !d }),
                          onClick: d ? void 0 : this.removeObscurity,
                          style: r,
                          role: d ? 'presentation' : 'button',
                          tabIndex: d ? -1 : 0,
                          children: [
                              d
                                  ? null
                                  : (0, s.jsx)(y, {
                                        reason: o,
                                        className: m.embed
                                    }),
                              (0, s.jsx)('div', {
                                  'aria-hidden': !d,
                                  children: e(!d)
                              })
                          ]
                      });
            }
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: n, className: r } = this.props,
            { visible: i } = this.state,
            a = (0, s.jsx)(I.Consumer, {
                children: (a) => {
                    let o = a || i,
                        u = l.Children.toArray(e(o)),
                        d = l.Children.map(u, (e) => (l.isValidElement(e) && null != n ? n(e, o) : e));
                    return (0, s.jsx)(f.Clickable, {
                        tag: 'span',
                        onClick: o ? void 0 : this.removeObscurity,
                        'aria-label': o ? void 0 : this.ariaLabel,
                        'aria-expanded': o,
                        tabIndex: o ? -1 : 0,
                        role: o ? 'presentation' : 'button',
                        className: c()(r, m.spoilerContent, m.spoilerMarkdownContent, { [m.hidden]: !o }),
                        children: (0, s.jsx)('span', {
                            className: m.obscuredTextContent,
                            children: (0, s.jsx)('span', {
                                'aria-hidden': !o,
                                className: m.obscuredTextContentInner,
                                children: d
                            })
                        })
                    });
                }
            });
        return this.renderWithTooltip(a);
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
                return (0, h.vE)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = p.wk.SPOILER } = this.props;
        switch (e) {
            case p.wk.SPOILER:
                return _.intl.string(_.t['F+x38P']);
            case p.wk.EXPLICIT_CONTENT:
                return _.intl.string(_.t.mlJ8VV);
            case p.wk.POTENTIAL_EXPLICIT_CONTENT:
                return _.intl.string(_.t['MRdR7+']);
            default:
                return (0, h.vE)(e);
        }
    }
    get tooltipText() {
        let { reason: e = p.wk.SPOILER } = this.props;
        switch (e) {
            case p.wk.SPOILER:
                return _.intl.string(_.t['F+x38P']);
            case p.wk.EXPLICIT_CONTENT:
                return _.intl.string(_.t.mlJ8VV);
            case p.wk.POTENTIAL_EXPLICIT_CONTENT:
                return _.intl.string(_.t['MRdR7+']);
            default:
                return (0, h.vE)(e);
        }
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', { visible: !1 }),
            g(this, 'removeObscurity', (e) => {
                let { visible: n } = this.state;
                if (n) return;
                !n && (e.preventDefault(), e.stopPropagation()), this.setState({ visible: !0 });
                let { onReveal: r } = this.props;
                null != r && r();
            }),
            g(this, 'handleToggleObscurity', (e) => {
                e.stopPropagation(), e.nativeEvent.stopPropagation();
                let { onToggleObscurity: n } = this.props;
                null != n && n(e), this.setState((e) => ({ visible: !e.visible }));
            }),
            g(this, 'obscure', () => {
                let { visible: e } = this.state;
                e && this.setState({ visible: !1 });
            });
    }
}
g(T, 'Types', i), g(T, 'Reasons', p.wk), (n.Z = T);
