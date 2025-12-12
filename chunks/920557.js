n.d(t, { K: () => x }), n(388685), n(314940);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(485853),
    l = n(467721),
    c = n(278074),
    u = n(748780),
    d = n(28664),
    f = n(481060),
    p = n(313201),
    _ = n(542578),
    m = n(203143),
    h = n(79390),
    g = n(839963),
    E = n(139256),
    b = n(294608),
    y = n(388032),
    O = n(75022);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let C = 24,
    A = 24,
    N = 20;
function P(e) {
    let { percentage: t, label: n, canShowVoterDetails: a, answerId: o } = e,
        l = (0, p.Dt)(),
        { channelId: c, messageId: u } = (0, b.pE)(),
        [g, E] = i.useState(""),
        [y, v] = i.useState(!1),
        S = "" !== g && y,
        I = i.useCallback(() => {
            E((0, h.e1)(u, c, o));
        }, [u, c, o]),
        T = i.useCallback(() => {
            I(), v(!0);
        }, [I]),
        C = i.useCallback(() => {
            v(!1);
        }, []),
        A = i.useCallback(() => {
            (0, m.n)({
                channelId: c,
                messageId: u,
                answerId: o,
            });
        }, [c, u, o]);
    return (
        i.useEffect(() => {
            if (y)
                return (
                    _.Z.addReactChangeListener(I),
                    () => {
                        _.Z.removeReactChangeListener(I);
                    }
                );
        }, [y, I]),
        (0, r.jsxs)("div", {
            className: O.votesData,
            children: [
                a
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              "" !== g
                                  ? (0, r.jsx)(d.u, {
                                        __unsupportedReactNodeAsText: (0, r.jsx)(f.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            scaleFontToUserSetting: !0,
                                            children: g,
                                        }),
                                        forceOpen: S,
                                        "aria-label": !1,
                                        children: (0, r.jsx)(f.Avr, {
                                            onMouseEnter: T,
                                            onMouseLeave: C,
                                            onFocus: T,
                                            onBlur: C,
                                            onClick: A,
                                            "aria-describedby": S ? l : void 0,
                                            text: n,
                                            variant: "secondary",
                                            textVariant: "text-xs/semibold",
                                        }),
                                    })
                                  : (0, r.jsx)(f.Avr, {
                                        onMouseEnter: T,
                                        onMouseLeave: C,
                                        onFocus: T,
                                        onBlur: C,
                                        onClick: A,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "text-xs/semibold",
                                    }),
                              S &&
                                  (0, r.jsx)(s.T, {
                                      id: l,
                                      children: g,
                                  }),
                          ],
                      })
                    : (0, r.jsx)(f.Text, {
                          variant: "text-xs/semibold",
                          color: "none",
                          scaleFontToUserSetting: !0,
                          children: n,
                      }),
                (0, r.jsxs)(f.Text, {
                    variant: "text-md/bold",
                    color: "none",
                    scaleFontToUserSetting: !0,
                    children: [t, "%"],
                }),
            ],
        })
    );
}
function R(e) {
    let { percentage: t, shouldAnimate: n } = e,
        i = (0, f.q_F)(
            {
                from: { width: n ? "0%" : "".concat(t, "%") },
                to: { width: "".concat(t, "%") },
                config: {
                    duration: 1200,
                    easing: u.Z.Easing.inOut(u.Z.Easing.ease),
                },
            },
            "animate-always",
        );
    return (0, r.jsx)(l.animated.span, {
        className: O.votePercentageBar,
        style: i,
        "aria-hidden": !0,
    });
}
function w(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: i, isVictor: a, isExpired: o, className: s } = e;
    return (0, c.EQ)({
        answersInteraction: t,
        didSelfVote: i,
    })
        .with({ answersInteraction: g.Y7.RADIO_BUTTONS }, () =>
            (0, r.jsx)(E.Og, {
                isSelected: n,
                size: A,
                className: s,
            }),
        )
        .with({ answersInteraction: g.Y7.CHECKBOXES }, () =>
            (0, r.jsx)(E.zs, {
                isSelected: n,
                size: N,
                className: s,
            }),
        )
        .with(
            {
                answersInteraction: g.Y7.LIST,
                didSelfVote: !0,
            },
            () =>
                (0, r.jsx)(E.ZY, {
                    isVictor: a,
                    isExpired: o,
                    size: C,
                    className: s,
                }),
        )
        .otherwise(() => null);
}
function D(e) {
    let { answer: t, isExpired: n, answersInteraction: i, canShowVoteCounts: a, canShowVoterDetails: l } = e,
        c = !0 === t.isSelected,
        u = !0 === t.didSelfVote,
        d = !0 === t.isVictor,
        p = t.shouldAnimateTransition;
    return (0, r.jsxs)("div", {
        className: o()(O.answerInner, {
            [O.currentlyVoting]: i !== g.Y7.LIST,
            [O.selected]: c,
        }),
        children: [
            a
                ? (0, r.jsx)(R, {
                      percentage: t.votesPercentage,
                      shouldAnimate: p,
                  })
                : null,
            null != t.pollMedia.emoji &&
                (0, r.jsx)(E.sc, {
                    className: O.emoji,
                    emoji: t.pollMedia.emoji,
                }),
            (0, r.jsx)(f.Text, {
                className: O.label,
                variant: "text-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote && (0, r.jsx)(s.T, { children: y.intl.string(y.t["8DAM+5"]) }),
            a &&
                (0, r.jsx)(P, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: l,
                    answerId: t.answerId,
                }),
            (0, r.jsx)(w, {
                answersInteraction: i,
                isSelected: c,
                didSelfVote: u,
                isVictor: d,
                isExpired: n,
                className: O.answerSelectionIcon,
            }),
        ],
    });
}
function x(e) {
    var { isExpired: t, answersInteraction: n, canShowVoteCounts: i, canTapAnswers: a } = e,
        o = I(e, ["isExpired", "answersInteraction", "canShowVoteCounts", "canTapAnswers"]);
    return (0, r.jsx)(
        E.$e,
        S(
            {
                className: O.answersContainer,
                answerClassName: O.answer,
                answersInteraction: n,
                canTapAnswers: a,
                renderAnswerContent: (e) =>
                    (0, r.jsx)(D, {
                        answer: e,
                        isExpired: t,
                        answersInteraction: n,
                        canShowVoteCounts: i,
                        canShowVoterDetails: a,
                    }),
            },
            o,
        ),
    );
}
