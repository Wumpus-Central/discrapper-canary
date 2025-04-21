n.d(t, { K: () => S }), n(388685), n(314940);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(1709),
    s = n(200100),
    c = n(278074),
    u = n(748780),
    d = n(481060),
    p = n(313201),
    m = n(542578),
    f = n(203143),
    h = n(79390),
    g = n(839963),
    _ = n(139256),
    b = n(294608),
    x = n(388032),
    y = n(709893);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e) {
    let { percentage: t, label: n, canShowVoterDetails: l, answerId: a } = e,
        s = (0, p.Dt)(),
        { channelId: c, messageId: u } = (0, b.pE)(),
        [g, _] = i.useState(''),
        [x, v] = i.useState(!1),
        O = '' !== g && x,
        j = i.useCallback(() => {
            _((0, h.e1)(u, c, a));
        }, [u, c, a]),
        C = i.useCallback(() => {
            j(), v(!0);
        }, [j]),
        S = i.useCallback(() => {
            v(!1);
        }, []),
        I = i.useCallback(() => {
            (0, f.n)({
                channelId: c,
                messageId: u,
                answerId: a
            });
        }, [c, u, a]);
    i.useEffect(() => {
        if (x)
            return (
                m.Z.addReactChangeListener(j),
                () => {
                    m.Z.removeReactChangeListener(j);
                }
            );
    }, [x, j]);
    let N = (0, r.jsx)(d.Text, {
        variant: 'text-xs/semibold',
        color: 'none',
        className: y.voteCount,
        scaleFontToUserSetting: !0,
        children: n
    });
    return (0, r.jsxs)('div', {
        className: y.votesData,
        children: [
            l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(d.ua7, {
                              text: (0, r.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-muted',
                                  scaleFontToUserSetting: !0,
                                  children: g
                              }),
                              forceOpen: O,
                              'aria-label': !1,
                              children: (e) => {
                                  var t, n;
                                  return (0, r.jsx)(
                                      d.zxk,
                                      ((t = E({}, e)),
                                      (n = n =
                                          {
                                              onMouseEnter: C,
                                              onMouseLeave: S,
                                              onFocus: C,
                                              onBlur: S,
                                              onClick: I,
                                              className: y.voteCountButton,
                                              'aria-describedby': O ? s : void 0,
                                              look: d.zxk.Looks.BLANK,
                                              size: d.zxk.Sizes.NONE,
                                              children: N
                                          }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, r);
                                                }
                                                return n;
                                            })(Object(n)).forEach(function (e) {
                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                            }),
                                      t)
                                  );
                              }
                          }),
                          O &&
                              (0, r.jsx)(o.T, {
                                  id: s,
                                  children: g
                              })
                      ]
                  })
                : N,
            (0, r.jsxs)(d.Text, {
                variant: 'text-md/bold',
                color: 'none',
                scaleFontToUserSetting: !0,
                children: [t, '%']
            })
        ]
    });
}
function O(e) {
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
        className: y.votePercentageBar,
        style: i,
        'aria-hidden': !0
    });
}
function j(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: i, isVictor: l, isExpired: a, className: o } = e;
    return (0, c.EQ)({
        answersInteraction: t,
        didSelfVote: i
    })
        .with({ answersInteraction: g.Y7.RADIO_BUTTONS }, () =>
            (0, r.jsx)(_.Og, {
                isSelected: n,
                size: 24,
                className: o
            })
        )
        .with({ answersInteraction: g.Y7.CHECKBOXES }, () =>
            (0, r.jsx)(_.zs, {
                isSelected: n,
                size: 20,
                className: o
            })
        )
        .with(
            {
                answersInteraction: g.Y7.LIST,
                didSelfVote: !0
            },
            () =>
                (0, r.jsx)(_.ZY, {
                    isVictor: l,
                    isExpired: a,
                    size: 24,
                    className: o
                })
        )
        .otherwise(() => null);
}
function C(e) {
    let { answer: t, isExpired: n, answersInteraction: i, canShowVoteCounts: l, canShowVoterDetails: s } = e,
        c = !0 === t.isSelected,
        u = !0 === t.didSelfVote,
        p = !0 === t.isVictor,
        m = t.shouldAnimateTransition;
    return (0, r.jsxs)('div', {
        className: a()(y.answerInner, {
            [y.currentlyVoting]: i !== g.Y7.LIST,
            [y.selected]: c
        }),
        children: [
            l
                ? (0, r.jsx)(O, {
                      percentage: t.votesPercentage,
                      shouldAnimate: m
                  })
                : null,
            null != t.pollMedia.emoji &&
                (0, r.jsx)(_.sc, {
                    className: y.emoji,
                    emoji: t.pollMedia.emoji
                }),
            (0, r.jsx)(d.Text, {
                className: y.label,
                variant: 'text-sm/semibold',
                color: 'none',
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text
            }),
            t.didSelfVote && (0, r.jsx)(o.T, { children: x.intl.string(x.t['8DAM+/']) }),
            l &&
                (0, r.jsx)(v, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: s,
                    answerId: t.answerId
                }),
            (0, r.jsx)(j, {
                answersInteraction: i,
                isSelected: c,
                didSelfVote: u,
                isVictor: p,
                isExpired: n,
                className: y.answerSelectionIcon
            })
        ]
    });
}
function S(e) {
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
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['isExpired', 'answersInteraction', 'canShowVoteCounts', 'canTapAnswers']);
    return (0, r.jsx)(
        _.$e,
        E(
            {
                className: y.answersContainer,
                answerClassName: y.answer,
                answersInteraction: n,
                canTapAnswers: l,
                renderAnswerContent: (e) =>
                    (0, r.jsx)(C, {
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
