n.d(t, { K: () => C }), n(47120), n(627341);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(867824),
    s = n(642128),
    c = n(278074),
    d = n(748780),
    u = n(481060),
    p = n(313201),
    m = n(542578),
    f = n(203143),
    h = n(79390),
    g = n(839963),
    _ = n(139256),
    b = n(294608),
    v = n(388032),
    y = n(743010);
function x(e) {
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
function O(e) {
    let { percentage: t, label: n, canShowVoterDetails: a, answerId: o } = e,
        s = (0, p.Dt)(),
        { channelId: c, messageId: d } = (0, b.pE)(),
        [g, _] = i.useState(''),
        [v, O] = i.useState(!1),
        E = '' !== g && v,
        j = i.useCallback(() => {
            _((0, h.e1)(d, c, o));
        }, [d, c, o]),
        N = i.useCallback(() => {
            j(), O(!0);
        }, [j]),
        C = i.useCallback(() => {
            O(!1);
        }, []),
        I = i.useCallback(() => {
            (0, f.n)({
                channelId: c,
                messageId: d,
                answerId: o
            });
        }, [c, d, o]);
    i.useEffect(() => {
        if (v)
            return (
                m.Z.addReactChangeListener(j),
                () => {
                    m.Z.removeReactChangeListener(j);
                }
            );
    }, [v, j]);
    let S = (0, r.jsx)(u.Text, {
        variant: 'text-xs/semibold',
        color: 'none',
        className: y.voteCount,
        scaleFontToUserSetting: !0,
        children: n
    });
    return (0, r.jsxs)('div', {
        className: y.votesData,
        children: [
            a
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.ua7, {
                              text: (0, r.jsx)(u.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-muted',
                                  scaleFontToUserSetting: !0,
                                  children: g
                              }),
                              forceOpen: E,
                              'aria-label': !1,
                              children: (e) => {
                                  var t, n;
                                  return (0, r.jsx)(
                                      u.zxk,
                                      ((t = x({}, e)),
                                      (n = n =
                                          {
                                              onMouseEnter: N,
                                              onMouseLeave: C,
                                              onFocus: N,
                                              onBlur: C,
                                              onClick: I,
                                              className: y.voteCountButton,
                                              'aria-describedby': E ? s : void 0,
                                              look: u.zxk.Looks.BLANK,
                                              size: u.zxk.Sizes.NONE,
                                              children: S
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
                          E &&
                              (0, r.jsx)(l.T, {
                                  id: s,
                                  children: g
                              })
                      ]
                  })
                : (0, r.jsx)(r.Fragment, { children: S }),
            (0, r.jsxs)(u.Text, {
                variant: 'text-md/bold',
                color: 'none',
                scaleFontToUserSetting: !0,
                children: [t, '%']
            })
        ]
    });
}
function E(e) {
    let { percentage: t, shouldAnimate: n } = e,
        i = (0, u.q_F)(
            {
                from: { width: n ? '0%' : ''.concat(t, '%') },
                to: { width: ''.concat(t, '%') },
                config: {
                    duration: 1200,
                    easing: d.Z.Easing.inOut(d.Z.Easing.ease)
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
    let { answersInteraction: t, isSelected: n, didSelfVote: i, isVictor: a, isExpired: o, className: l } = e;
    return (0, c.EQ)({
        answersInteraction: t,
        didSelfVote: i
    })
        .with({ answersInteraction: g.Y7.RADIO_BUTTONS }, () =>
            (0, r.jsx)(_.Og, {
                isSelected: n,
                size: 24,
                className: l
            })
        )
        .with({ answersInteraction: g.Y7.CHECKBOXES }, () =>
            (0, r.jsx)(_.zs, {
                isSelected: n,
                size: 20,
                className: l
            })
        )
        .with(
            {
                answersInteraction: g.Y7.LIST,
                didSelfVote: !0
            },
            () =>
                (0, r.jsx)(_.ZY, {
                    isVictor: a,
                    isExpired: o,
                    size: 24,
                    className: l
                })
        )
        .otherwise(() => null);
}
function N(e) {
    let { answer: t, isExpired: n, answersInteraction: i, canShowVoteCounts: a, canShowVoterDetails: s } = e,
        c = !0 === t.isSelected,
        d = !0 === t.didSelfVote,
        p = !0 === t.isVictor,
        m = t.shouldAnimateTransition;
    return (0, r.jsxs)('div', {
        className: o()(y.answerInner, {
            [y.currentlyVoting]: i !== g.Y7.LIST,
            [y.selected]: c
        }),
        children: [
            a
                ? (0, r.jsx)(E, {
                      percentage: t.votesPercentage,
                      shouldAnimate: m
                  })
                : null,
            null != t.pollMedia.emoji &&
                (0, r.jsx)(_.sc, {
                    className: y.emoji,
                    emoji: t.pollMedia.emoji
                }),
            (0, r.jsx)(u.Text, {
                className: y.label,
                variant: 'text-sm/semibold',
                color: 'none',
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text
            }),
            t.didSelfVote && (0, r.jsx)(l.T, { children: v.NW.string(v.t['8DAM+/']) }),
            a &&
                (0, r.jsx)(O, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: s,
                    answerId: t.answerId
                }),
            (0, r.jsx)(j, {
                answersInteraction: i,
                isSelected: c,
                didSelfVote: d,
                isVictor: p,
                isExpired: n,
                className: y.answerSelectionIcon
            })
        ]
    });
}
function C(e) {
    var { isExpired: t, answersInteraction: n, canShowVoteCounts: i, canTapAnswers: a } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['isExpired', 'answersInteraction', 'canShowVoteCounts', 'canTapAnswers']);
    return (0, r.jsx)(
        _.$e,
        x(
            {
                className: y.answersContainer,
                answerClassName: y.answer,
                answersInteraction: n,
                canTapAnswers: a,
                renderAnswerContent: (e) =>
                    (0, r.jsx)(N, {
                        answer: e,
                        isExpired: t,
                        answersInteraction: n,
                        canShowVoteCounts: i,
                        canShowVoterDetails: a
                    })
            },
            o
        )
    );
}
