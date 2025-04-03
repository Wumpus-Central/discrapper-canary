n.d(t, { K: () => C }), n(47120), n(627341);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(867824),
    s = n(642128),
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
    let { percentage: t, label: n, canShowVoterDetails: a, answerId: l } = e,
        s = (0, p.Dt)(),
        { channelId: c, messageId: u } = (0, b.pE)(),
        [g, _] = i.useState(''),
        [x, v] = i.useState(!1),
        O = '' !== g && x,
        N = i.useCallback(() => {
            _((0, h.e1)(u, c, l));
        }, [u, c, l]),
        j = i.useCallback(() => {
            N(), v(!0);
        }, [N]),
        C = i.useCallback(() => {
            v(!1);
        }, []),
        I = i.useCallback(() => {
            (0, f.n)({
                channelId: c,
                messageId: u,
                answerId: l
            });
        }, [c, u, l]);
    i.useEffect(() => {
        if (x)
            return (
                m.Z.addReactChangeListener(N),
                () => {
                    m.Z.removeReactChangeListener(N);
                }
            );
    }, [x, N]);
    let S = (0, r.jsx)(d.Text, {
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
                                              onMouseEnter: j,
                                              onMouseLeave: C,
                                              onFocus: j,
                                              onBlur: C,
                                              onClick: I,
                                              className: y.voteCountButton,
                                              'aria-describedby': O ? s : void 0,
                                              look: d.zxk.Looks.BLANK,
                                              size: d.zxk.Sizes.NONE,
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
                          O &&
                              (0, r.jsx)(o.T, {
                                  id: s,
                                  children: g
                              })
                      ]
                  })
                : S,
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
function N(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: i, isVictor: a, isExpired: l, className: o } = e;
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
                    isVictor: a,
                    isExpired: l,
                    size: 24,
                    className: o
                })
        )
        .otherwise(() => null);
}
function j(e) {
    let { answer: t, isExpired: n, answersInteraction: i, canShowVoteCounts: a, canShowVoterDetails: s } = e,
        c = !0 === t.isSelected,
        u = !0 === t.didSelfVote,
        p = !0 === t.isVictor,
        m = t.shouldAnimateTransition;
    return (0, r.jsxs)('div', {
        className: l()(y.answerInner, {
            [y.currentlyVoting]: i !== g.Y7.LIST,
            [y.selected]: c
        }),
        children: [
            a
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
            t.didSelfVote && (0, r.jsx)(o.T, { children: x.NW.string(x.t['8DAM+/']) }),
            a &&
                (0, r.jsx)(v, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: s,
                    answerId: t.answerId
                }),
            (0, r.jsx)(N, {
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
function C(e) {
    var { isExpired: t, answersInteraction: n, canShowVoteCounts: i, canTapAnswers: a } = e,
        l = (function (e, t) {
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
        E(
            {
                className: y.answersContainer,
                answerClassName: y.answer,
                answersInteraction: n,
                canTapAnswers: a,
                renderAnswerContent: (e) =>
                    (0, r.jsx)(j, {
                        answer: e,
                        isExpired: t,
                        answersInteraction: n,
                        canShowVoteCounts: i,
                        canShowVoterDetails: a
                    })
            },
            l
        )
    );
}
