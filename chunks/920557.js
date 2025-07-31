(n.d(t, { K: () => j }), n(388685), n(314940));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(528708),
    s = n(855659),
    c = n(278074),
    u = n(748780),
    d = n(481060),
    p = n(313201),
    m = n(542578),
    f = n(203143),
    g = n(79390),
    _ = n(839963),
    h = n(139256),
    b = n(294608),
    E = n(388032),
    C = n(709893);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function O(e) {
    let { percentage: t, label: n, canShowVoterDetails: l, answerId: a } = e,
        s = (0, p.Dt)(),
        { channelId: c, messageId: u } = (0, b.pE)(),
        [_, h] = i.useState(''),
        [E, O] = i.useState(!1),
        x = '' !== _ && E,
        y = i.useCallback(() => {
            h((0, g.e1)(u, c, a));
        }, [u, c, a]),
        I = i.useCallback(() => {
            (y(), O(!0));
        }, [y]),
        j = i.useCallback(() => {
            O(!1);
        }, []),
        S = i.useCallback(() => {
            (0, f.n)({
                channelId: c,
                messageId: u,
                answerId: a
            });
        }, [c, u, a]);
    return (
        i.useEffect(() => {
            if (E)
                return (
                    m.Z.addReactChangeListener(y),
                    () => {
                        m.Z.removeReactChangeListener(y);
                    }
                );
        }, [E, y]),
        (0, r.jsxs)('div', {
            className: C.votesData,
            children: [
                l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.ua7, {
                                  text: (0, r.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      scaleFontToUserSetting: !0,
                                      children: _
                                  }),
                                  forceOpen: x,
                                  'aria-label': !1,
                                  children: (e) => {
                                      var t, i;
                                      return (0, r.jsx)(
                                          d.Avr,
                                          ((t = v({}, e)),
                                          (i = i =
                                              {
                                                  onMouseEnter: I,
                                                  onMouseLeave: j,
                                                  onFocus: I,
                                                  onBlur: j,
                                                  onClick: S,
                                                  'aria-describedby': x ? s : void 0,
                                                  text: n,
                                                  variant: 'secondary',
                                                  textVariant: 'text-xs/semibold'
                                              }),
                                          Object.getOwnPropertyDescriptors
                                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                              : (function (e, t) {
                                                    var n = Object.keys(e);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var r = Object.getOwnPropertySymbols(e);
                                                        n.push.apply(n, r);
                                                    }
                                                    return n;
                                                })(Object(i)).forEach(function (e) {
                                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                                }),
                                          t)
                                      );
                                  }
                              }),
                              x &&
                                  (0, r.jsx)(o.T, {
                                      id: s,
                                      children: _
                                  })
                          ]
                      })
                    : (0, r.jsx)(d.Text, {
                          variant: 'text-xs/semibold',
                          color: 'none',
                          scaleFontToUserSetting: !0,
                          children: n
                      }),
                (0, r.jsxs)(d.Text, {
                    variant: 'text-md/bold',
                    color: 'none',
                    scaleFontToUserSetting: !0,
                    children: [t, '%']
                })
            ]
        })
    );
}
function x(e) {
    let { percentage: t, shouldAnimate: n } = e,
        i = (0, d.q_F)(
            {
                from: { width: n ? '0%' : ''.concat(t, '%') },
                to: { width: ''.concat(t, '%') },
                config: {
                    duration: 1200,
                    easing: u.Z.Easing.inOut(u.Z.Easing.ease)
                }
            },
            'animate-always'
        );
    return (0, r.jsx)(s.animated.span, {
        className: C.votePercentageBar,
        style: i,
        'aria-hidden': !0
    });
}
function y(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: i, isVictor: l, isExpired: a, className: o } = e;
    return (0, c.EQ)({
        answersInteraction: t,
        didSelfVote: i
    })
        .with({ answersInteraction: _.Y7.RADIO_BUTTONS }, () =>
            (0, r.jsx)(h.Og, {
                isSelected: n,
                size: 24,
                className: o
            })
        )
        .with({ answersInteraction: _.Y7.CHECKBOXES }, () =>
            (0, r.jsx)(h.zs, {
                isSelected: n,
                size: 20,
                className: o
            })
        )
        .with(
            {
                answersInteraction: _.Y7.LIST,
                didSelfVote: !0
            },
            () =>
                (0, r.jsx)(h.ZY, {
                    isVictor: l,
                    isExpired: a,
                    size: 24,
                    className: o
                })
        )
        .otherwise(() => null);
}
function I(e) {
    let { answer: t, isExpired: n, answersInteraction: i, canShowVoteCounts: l, canShowVoterDetails: s } = e,
        c = !0 === t.isSelected,
        u = !0 === t.didSelfVote,
        p = !0 === t.isVictor,
        m = t.shouldAnimateTransition;
    return (0, r.jsxs)('div', {
        className: a()(C.answerInner, {
            [C.currentlyVoting]: i !== _.Y7.LIST,
            [C.selected]: c
        }),
        children: [
            l
                ? (0, r.jsx)(x, {
                      percentage: t.votesPercentage,
                      shouldAnimate: m
                  })
                : null,
            null != t.pollMedia.emoji &&
                (0, r.jsx)(h.sc, {
                    className: C.emoji,
                    emoji: t.pollMedia.emoji
                }),
            (0, r.jsx)(d.Text, {
                className: C.label,
                variant: 'text-sm/semibold',
                color: 'none',
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text
            }),
            t.didSelfVote && (0, r.jsx)(o.T, { children: E.intl.string(E.t['8DAM+/']) }),
            l &&
                (0, r.jsx)(O, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: s,
                    answerId: t.answerId
                }),
            (0, r.jsx)(y, {
                answersInteraction: i,
                isSelected: c,
                didSelfVote: u,
                isVictor: p,
                isExpired: n,
                className: C.answerSelectionIcon
            })
        ]
    });
}
function j(e) {
    var { isExpired: t, answersInteraction: n, canShowVoteCounts: i, canTapAnswers: l } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['isExpired', 'answersInteraction', 'canShowVoteCounts', 'canTapAnswers']);
    return (0, r.jsx)(
        h.$e,
        v(
            {
                className: C.answersContainer,
                answerClassName: C.answer,
                answersInteraction: n,
                canTapAnswers: l,
                renderAnswerContent: (e) =>
                    (0, r.jsx)(I, {
                        answer: e,
                        isExpired: t,
                        answersInteraction: n,
                        canShowVoteCounts: i,
                        canShowVoterDetails: l
                    })
            },
            a
        )
    );
}
